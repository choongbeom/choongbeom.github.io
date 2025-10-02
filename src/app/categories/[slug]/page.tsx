// src/app/categories/[slug]/page.tsx
import Link from 'next/link';
import { PostCard } from '@/components/PostCard'; 
import { getAllPosts } from '@/lib/posts'; 
import { PostData } from '@/lib/types';
import { CATEGORY_COLOR_MAP } from '@/lib/constants';
import { getTagColorClass } from '@/lib/styles';

const getTagColor = (tag: string) => {
    const key = tag.toLowerCase().replace(/[\s&]+/g, '-'); 
    return CATEGORY_COLOR_MAP[key] || 'gray'; 
};

export async function generateStaticParams() {
    const allPostsData = await getAllPosts();
    const slugs = new Set<string>();

    allPostsData.forEach(post => {
        post.tags.forEach(tag => {
            const slug = tag.toLowerCase().replace(/[\s&]+/g, '-');
            slugs.add(slug);
        });
    });

    return Array.from(slugs).map(slug => ({ slug }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const allPostsData = await getAllPosts();
    const targetSlug = slug.toLowerCase();

    const filteredPostsData = allPostsData.filter(post => 
        // 포스트의 태그 중 하나라도 현재 슬러그와 일치하면 포함
        post.tags.some(tag => tag.toLowerCase().replace(/[\s&]+/g, '-') === targetSlug)
    );

    // 카테고리 정보 추출 (가장 첫 번째 포스트의 태그 이름 사용)
    const categoryInfo = filteredPostsData.length > 0
        ? {
            name: filteredPostsData[0].tags.find(tag => tag.toLowerCase().replace(/[\s&]+/g, '-') === targetSlug) || slug,
            slug: targetSlug,
        }
        : { name: slug, slug: targetSlug }; 
        
        // 색상 클래스 계산
        const color = getTagColor(categoryInfo.name);
        const colorClass = getTagColorClass(color);            
        const accentColor = `var(--${color}-600, var(--accent-color))`;

        // PostCard에 전달할 데이터 형식으로 변환
        const filteredPosts = filteredPostsData.map((post: PostData) => ({
            slug: post.slug,
            title: post.title,
            date: new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }), 
            tags: post.tags,
            description: post.description,
        }));


    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            
            {/* 카테고리 제목 및 태그 스타일 */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between">
                
                {/* 1. 페이지 제목 */}
                <h1 
                    className="text-4xl font-extrabold mb-4 sm:mb-0 border-l-4 pl-4"
                    style={{ 
                        color: 'var(--text-main)', 
                        // 카테고리 색상으로 강조선 색상 변경
                        borderColor: accentColor, 
                    }}
                >
                    카테고리: {categoryInfo.name}
                </h1>
                
                {/* 2. 카테고리 태그 (색상 적용) */}
                <span 
                    className={`px-4 py-2 text-lg font-bold rounded-full border ${colorClass} whitespace-nowrap`}
                >
                    #{categoryInfo.name}
                </span>

            </div>

            {/* 포스트 목록 */}
            <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))
                ) : (
                    <p 
                        className="text-lg col-span-full text-center"
                        style={{ color: 'var(--text-sub)' }} 
                    >
                        '{categoryInfo.name}' 카테고리에 해당하는 포스트가 없습니다.
                    </p>
                )}
            </div>

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
