// src/app/lib/types.ts

// 포스트 메타데이터 타입 정의
export type PostData = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    description: string;
};

// 포스트 데이터와 MDX 콘텐츠를 포함하는 타입
export type PostContentData = PostData & {
    content: string;
};