// src/app/categories/page.tsx
import Link from 'next/link';
import React from 'react';
import { getAllPosts, getCategoriesFromPosts } from '@/lib/posts';
import { CATEGORY_COLOR_MAP } from '@/lib/constants';
import { getTagColorClass } from '@/lib/styles';

export default async  function CategoriesPage() {

    const allPostsData = await getAllPosts(); 
    const rawCategories = getCategoriesFromPosts(allPostsData);

    const categories = rawCategories.map(category => ({
        ...category,
        color: CATEGORY_COLOR_MAP[category.slug] || 'gray',
    }));

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            
            {/* 제목 */}
            <h1 
                className="text-4xl font-extrabold mb-10 border-l-4 pl-4"
                style={{ 
                    color: 'var(--text-main)', 
                    borderColor: 'var(--accent-color)' 
                }}
            >
                전체 카테고리 목록 ({categories.length})
            </h1>

            {/* 카테고리 목록 */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.length > 0 ? (
                    categories.map(category => {
                        const color = category.color; 
                        const colorClass = getTagColorClass(color);
                                          
                        return (
                            <Link
                                key={category.slug}
                                href={`/categories/${category.slug}`}
                                className={`p-6 rounded-xl border block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colorClass}`}
                                style={{ 
                                    /* 카드의 배경색은 테마 색상, 테두리만 카테고리 색상을 따르도록 변경 */
                                    backgroundColor: 'var(--comp-bg)',
                                    borderColor: color === 'gray' ? 'var(--comp-border)' : `var(--${color}-500)`,
                                }}
                            >
                                <h2 className="text-xl font-bold mb-1" style={{ color: `var(--${color}-600, var(--accent-color))` }}>
                                    {category.name}
                                </h2>
                                <p className="text-sm mt-1" style={{ color: 'var(--text-sub)' }}>
                                    {category.count}개의 포스트
                                </p>
                            </Link>
                        );
                    })
                ) : (
                    <p 
                        className="text-lg col-span-full text-center"
                        style={{ color: 'var(--text-sub)' }} 
                    >
                        아직 카테고리가 생성되지 않았습니다.
                    </p>
                )}
            </div>
            
            {/* 하단 링크 */}
            <div className="mt-12 text-center">
                <Link 
                    href="/posts" 
                    className="text-base font-medium hover:underline"
                    style={{ color: 'var(--accent-color)' }}
                >
                    전체 포스트 목록 보기 &rarr;
                </Link>
            </div>
        </div>
    );
}
