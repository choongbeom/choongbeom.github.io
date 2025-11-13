// src/app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getAllPostSlugs, getPostContent } from '@/lib/posts'; 
import { PostContentData } from '@/lib/types';
import { CATEGORY_COLOR_MAP } from '@/lib/constants';
import { getTagColorClass } from '@/lib/styles'; 

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote'; 
import { DynamicMdxWrapper } from '@/components/DynamicMdxWrapper';
import type { Metadata } from 'next'; 
import GiscusComments from '@/components/GiscusComments';
import remarkGfm from 'remark-gfm';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    
    // 1. 포스트 데이터 가져오기 (메타데이터를 가져오기 위해 재사용)
    const postData = await getPostContent(slug);

    if (postData.title === 'Error Loading Post') {
        return {}; // 포스트가 없으면 기본 메타데이터 반환
    }

    const title = `${postData.title} | Choongbeom.dev`; // 블로그 이름 추가
    // 설명이 없으면 대체 텍스트를 사용합니다.
    const description = postData.description || `${postData.title}에 대한 자세한 내용을 확인하세요.`;

    return {
        title: title,
        description: description,
        alternates: { canonical: `https://choongbeom.github.io/posts/${slug}` },
        // Open Graph 및 Twitter 카드 설정 (선택 사항이지만 권장)
        openGraph: {
            title: title,
            description: description,
            url: `https://choongbeom.github.io/posts/${slug}`, // 실제 도메인으로 변경하세요
            type: 'article',
            publishedTime: postData.date,
            tags: postData.tags,
            // image: '...', // 대표 이미지 URL
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            // image: '...',
        }
    };
}

// 1. generateStaticParams: 미리 빌드할 슬러그 목록을 정의합니다.
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    // { slug: 'concurrent-map-optimization' } 형태로 반환
    return slugs.map(slug => ({ slug }));
}

// 3. PostPage (Server Component): 데이터 Fetch 및 렌더링
export default async function PostPage({ params }: PageProps) {
    const { slug } = await params;

    // 서버 측 함수 호출: 파일 시스템에서 포스트 콘텐츠를 가져옵니다.
    const postData: PostContentData = await getPostContent(slug);

    if (postData.title === 'Error Loading Post' && postData.content === '# Error Loading Content') {
        return notFound();
    }
    
    // 날짜 포맷팅
    const formattedDate = new Date(postData.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const mdxSource: MDXRemoteSerializeResult = await serialize(postData.content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm]
        },
        parseFrontmatter: false, // 이미 getPostContent에서 frontmatter를 파싱했으므로 false
    });

    // JSON-LD 스키마 정의
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: postData.title,
        description: postData.description,
        datePublished: postData.date,
        dateModified: postData.date, // 수정일 정보가 없으면 발행일과 동일하게 설정
        author: {
            '@type': 'Person',
            name: 'Your Name' // 저자 이름
        },
        // mainEntityOfPage: {
        //     '@type': 'WebPage',
        //     '@id': `https://yourdomain.com/posts/${slug}`
        // }
    };
    
    return (
        <div className="container mx-auto p-4 max-w-7xl">
            {/* JSON-LD 스크립트 삽입 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ... (제목, 날짜, 태그 메타데이터 표시 로직은 그대로 유지) ... */}
            <header className="mb-10 pb-6 border-b" style={{ borderColor: 'var(--comp-border)' }}>
                <h1 
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                    style={{ color: 'var(--text-main)', borderColor: 'var(--accent-color)' }}
                >
                    {postData.title}
                </h1>
                <p 
                    className="text-lg mb-4"
                    style={{ color: 'var(--text-sub)' }}
                >
                    작성일: {formattedDate}
                </p>
                {/* 태그 표시 로직 (링크 포함) */}
                <div className="flex flex-wrap gap-2">
                    {postData.tags.map(tag => {
                        const key = tag.toLowerCase().replace(/[\s&]+/g, '-'); 
                        const color = CATEGORY_COLOR_MAP[key] || 'gray';
                        const colorClass = getTagColorClass(color);
                      
                        return (
                            <Link
                                key={tag} 
                                href={`/categories/${key}`}
                                className={`px-3 py-1 text-sm rounded-full font-medium border ${colorClass} transition whitespace-nowrap hover:shadow-md`}
                            >
                                #{tag}
                            </Link>
                        );
                    })}
                </div>
            </header>
            
            {/* MDX 콘텐츠 렌더링 영역을 MDXRemote 컴포넌트로 대체 */}
            <article className="prose dark:prose-invert max-w-none" style={{ color: 'var(--text-main)' }}>
                {/* 3. 컴파일된 MDX 소스를 MDXRemote 컴포넌트로 렌더링합니다. */}
                <DynamicMdxWrapper 
                    mdxSource={mdxSource}
                />

                <div className="text-sm text-gray-500 dark:text-gray-400 mt-22 mb-5">
                    <p>이 블로그의 내용은 자유롭게 활용하셔도 됩니다.<br/>
                    다만, 가능하다면 출처(https://choongbeom.github.io)를 함께 남겨주세요.</p>
                </div>
            </article>

            <GiscusComments />
            
            <div className="mt-12 text-center">
                <Link 
                    href="/posts" 
                    className="text-base font-medium hover:underline"
                    style={{ color: 'var(--accent-color)' }}
                >
                    전체 포스트 목록으로 돌아가기 &rarr;
                </Link>
            </div>
        </div>
    );
}