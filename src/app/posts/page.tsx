// src/app/posts/page.tsx
import React from 'react';
import { PostsClient } from './PostsClient'; 
import { getAllPosts, getCategoriesFromPosts } from '@/lib/posts'; 
import { PostData } from '@/lib/types'; 

// 헬퍼 함수: PostData를 PostCard가 사용하는 Post 타입으로 변환
function mapPostDataToPost(postData: PostData): PostData {
    return {
        slug: postData.slug,
        title: postData.title,
        // 사용자에게 친숙한 날짜 포맷으로 변환
        date: new Date(postData.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }),
        tags: postData.tags,
        description: postData.description,
    };
}

// Server Component (async 함수): 데이터 Fetch 담당
export default async function PostsPage() {
    // ⭐️ 서버에서만 실행되므로 파일 시스템 접근이 안전합니다. ⭐️
    const allPostsData = await getAllPosts(); 
    
    // 클라이언트 컴포넌트에 넘겨줄 형태로 변환
    const initialPosts = allPostsData.map(mapPostDataToPost);

    // 주요 태그 추출 (가장 많이 사용된 태그 순, 상위 8개)
    const allCategories = getCategoriesFromPosts(allPostsData);
    const trendingTags = allCategories.slice(0, 8).map(cat => cat.name).sort(); 

    // 데이터를 Client Component에 Prop으로 전달하여 하이드레이션 문제를 해결합니다.
    return (
        <PostsClient initialPosts={initialPosts} trendingTags={trendingTags} />
    );
}