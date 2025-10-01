'use client';

import { useState, useMemo } from 'react';
import { PostCard } from '@/components/PostCard'; 

// 데이터 구조를 가정합니다.
interface Post {
    slug: string;
    title: string;
    date: string;
    tags: string[];
}

// 목업 데이터
const ALL_POSTS: Post[] = [
    { slug: 'nextjs-ssg-deep-dive', title: 'Next.js 14 App Router에서 SSG 완벽 적용하기', date: '2025년 10월 1일', tags: ['Nextjs', 'SSG'] },
    { slug: 'github-actions-automation', title: 'GitHub Actions로 배포 파이프라인 자동화 팁', date: '2025년 9월 28일', tags: ['DevOps', 'GithubActions'] },
    { slug: 'javascript-modern-async', title: '자바스크립트의 현대적인 비동기 처리 기법 마스터하기', date: '2025년 9월 20일', tags: ['JavaScript', 'Async'] },
    { slug: 'pwa-checklist', title: 'PWA 적용을 위한 핵심 체크리스트', date: '2025년 9月 15일', tags: ['Frontend', 'PWA'] },
    // 추가 포스트를 가정합니다.
    { slug: 'docker-compose-for-dev', title: '개발 환경을 위한 Docker Compose 설정', date: '2025년 9월 10일', tags: ['DevOps', 'Docker'] },
];

export default function PostsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = useMemo(() => {
        if (!searchTerm) return ALL_POSTS;
        
        const lowerCaseSearch = searchTerm.toLowerCase();
        
        return ALL_POSTS.filter(post => 
            post.title.toLowerCase().includes(lowerCaseSearch) ||
            post.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
        );
    }, [searchTerm]);

    return (
        <div className="max-w-4xl mx-auto px-4">
            {/* 제목 색상 및 경계선 색상 적용 */}
            <h1 
                className="text-4xl font-extrabold mb-10 border-l-4 pl-4"
                style={{ 
                    color: 'var(--text-main)', 
                    borderColor: 'var(--accent-color)' 
                }}
            >
                All Posts
            </h1>

            {/* ⭐️ 검색창 스타일 적용: comp-bg, comp-border, text-main 사용 ⭐️ */}
            <input
                type="text"
                placeholder="제목 또는 태그로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 rounded-lg mb-10 text-lg 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500
                           placeholder-gray-500 dark:placeholder-gray-400 transition"
                style={{
                    backgroundColor: 'var(--comp-bg)', // 컴포넌트 배경
                    border: '1px solid var(--comp-border)', // 컴포넌트 경계선
                    color: 'var(--text-main)', // 입력 텍스트 색상
                }}
            />

            <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))
                ) : (
                    <p 
                        className="text-lg col-span-full text-center"
                        style={{ color: 'var(--text-sub)' }} // 검색 결과 없을 때 텍스트
                    >
                        검색 결과가 없습니다.
                    </p>
                )}
            </div>

            {/* 정렬된 태그 목록 (간단히 목업) */}
            <div className="mt-12">
                <h2 
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--text-main)' }}
                >
                    Trending Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                    {/* 태그는 Tailwind 클래스를 유지합니다. */}
                    {['Nextjs', 'DevOps', 'JavaScript', 'SSG', 'Docker'].map(tag => (
                        <span 
                            key={tag} 
                            className="px-3 py-1 text-sm rounded-full 
                                       bg-gray-100 text-gray-700 
                                       dark:bg-gray-700 dark:text-gray-300"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}