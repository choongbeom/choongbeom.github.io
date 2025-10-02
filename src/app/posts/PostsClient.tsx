// src/app/posts/PostsClient.tsx
'use client'; 

import { useState, useMemo } from 'react';
import { PostCard } from '@/components/PostCard'; 
import { CATEGORY_COLOR_MAP } from '@/lib/constants';
import { PostData } from '@/lib/types';
import { getTagColorClass } from '@/lib/styles'; 

// 태그 이름(키)을 색상(값)으로 변환하는 함수
const getTagColor = (tag: string) => {
    // 태그 이름에서 공백을 제거하고 소문자/슬러그로 변환하여 맵 키에 매칭
    const key = tag.toLowerCase().replace(/[\s&]+/g, '-'); 
    return CATEGORY_COLOR_MAP[key] || 'gray'; 
};


interface PostsClientProps {
    initialPosts: PostData[];
    trendingTags: string[];
}

// Client Component: 검색 및 렌더링 로직 담당
export function PostsClient({ initialPosts, trendingTags }: PostsClientProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // 검색 및 태그 필터링 로직
    const filteredPosts = useMemo(() => {
        let posts = initialPosts;

        // 1. 태그 필터링
        if (selectedTag) {
            const targetTagSlug = selectedTag.toLowerCase().replace(/[\s&]+/g, '-');
            posts = posts.filter(post => 
                post.tags.some(tag => tag.toLowerCase().replace(/[\s&]+/g, '-') === targetTagSlug)
            );
        }

        // 2. 검색어 필터링
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            posts = posts.filter(post => 
                post.title.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        return posts;
    }, [initialPosts, searchTerm, selectedTag]);


    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            <h1 
                className="text-4xl font-extrabold mb-10 border-l-4 pl-4"
                style={{ 
                    color: 'var(--text-main)', 
                    borderColor: 'var(--accent-color)' 
                }}
            >
                전체 포스트 목록 ({filteredPosts.length})
            </h1>
            
            <div className="md:grid md:grid-cols-12 md:gap-12">
                {/* 1. 포스트 목록 (9/12) */}
                <div className="md:col-span-9">
                    {/* 검색 입력란 */}
                    <input
                        type="text"
                        placeholder="제목으로 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 mb-8 text-lg rounded-lg border focus:ring-2"
                        style={{ 
                            backgroundColor: 'var(--comp-bg)', 
                            borderColor: 'var(--comp-border)',
                            color: 'var(--text-main)',
                            '--tw-ring-color': 'var(--accent-color)'
                        } as React.CSSProperties}
                    />
                    
                    {/* 선택된 태그 표시 */}
                    {selectedTag && (
                        <div className="mb-6 flex items-center gap-2">
                            <span className="text-lg font-semibold" style={{ color: 'var(--text-sub)' }}>
                                필터링된 태그:
                            </span>
                            <button
                                onClick={() => setSelectedTag(null)}
                                className="px-3 py-1 text-sm rounded-full font-medium border transition whitespace-nowrap bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 border-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-800"
                            >
                                #{selectedTag} <span className="ml-1 text-xs">x</span>
                            </button>
                        </div>
                    )}


                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map(post => (
                                <PostCard key={post.slug} post={post} />
                            ))
                        ) : (
                            <p 
                                className="text-lg col-span-full text-center"
                                style={{ color: 'var(--text-sub)' }} 
                            >
                                검색 결과 또는 '{selectedTag || '전체'}' 태그에 해당하는 포스트가 없습니다.
                            </p>
                        )}
                    </div>
                </div>

                {/* 2. 주요 태그 (3/12) */}
                <div className="md:col-span-3">
                    <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: 'var(--text-main)' }}
                    >
                        주요 태그
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {trendingTags.map(tag => {
                            const color = getTagColor(tag);
                            const colorClass = getTagColorClass(color);
                                
                            return (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-3 py-1 text-sm rounded-full font-medium border
                                                ${colorClass} 
                                                transition whitespace-nowrap hover:ring-2 hover:ring-opacity-50`}
                                    style={{ '--tw-ring-color': `var(--${color}-500)` } as React.CSSProperties}
                                >
                                    #{tag}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}