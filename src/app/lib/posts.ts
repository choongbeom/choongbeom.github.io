// src/app/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData, PostContentData } from './types'; 

const POSTS_DIRECTORY = path.join(process.cwd(), 'src', 'app', 'posts', 'mdx');

// 슬러그(파일명) 목록을 가져옵니다.
export function getAllPostSlugs(): string[] {
    try {
        const filenames: string[] = fs.readdirSync(POSTS_DIRECTORY); 

        return filenames
            .filter((filename: string) => filename.endsWith('.mdx')) 
            .map((filename: string) => filename.replace(/\.mdx$/, '')); 
            
    } catch (error) {
        console.error("Error reading post directory:", error);
        return [];
    }
}

// 1. 포스트 메타데이터만 가져옵니다. (getAllPosts에서 사용)
export function getPostMetadata(slug: string): PostData | undefined {
    try {
        const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data } = matter(fileContents);

        const dateObject = new Date(data.date);
        const dateString = dateObject.toISOString();

        // description이 없을 경우 빈 문자열 할당
        const description = data.description || ''; 
        
        return {
            slug,
            title: data.title || slug,
            date: dateString,
            tags: Array.isArray(data.tags) ? data.tags : [],
            description,
        };
    } catch (error) {
        console.error(`Error getting metadata for post ${slug}:`, error);
        return undefined; // 메타데이터 로드 실패 시 undefined 반환
    }
}


// 2. 포스트 메타데이터와 콘텐츠(MDX 원본)를 모두 가져옵니다. ([slug]/page.tsx에서 사용)
export function getPostContent(slug: string): PostContentData {
    try {
        const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(fileContents);

        const dateObject = new Date(data.date);
        const dateString = dateObject.toISOString();

        // description이 없을 경우 빈 문자열 할당
        const description = data.description || ''; 

        return {
            slug,
            title: data.title || slug,
            date: dateString,
            tags: Array.isArray(data.tags) ? data.tags : [],
            description,
            content, // MDX 원본 문자열
        };
    } catch (error) {
        console.error(`Error getting content for post ${slug}:`, error);
        // 에러 발생 시 notFound() 처리를 위해 특수 값 반환
        return {
            slug,
            title: 'Error Loading Post',
            date: new Date().toISOString(),
            tags: [],
            description: 'Post content failed to load.',
            content: '# Error Loading Content',
        };
    }
}


// 모든 포스트의 메타데이터 목록을 가져와 날짜 기준 내림차순으로 정렬합니다.
export function getAllPosts(): PostData[] {
    const slugs = getAllPostSlugs();
    
    // getPostMetadata를 사용하여 메타데이터만 가져옵니다.
    const posts = slugs.map(slug => getPostMetadata(slug)).filter((post): post is PostData => post !== undefined);
    
    // 최신순으로 정렬합니다.
    return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}


// 카테고리/태그 목록과 개수를 추출합니다.
interface CategoryCount {
    name: string;
    slug: string;
    count: number;
}
export function getCategoriesFromPosts(posts: PostData[]): CategoryCount[] {
    const categoryMap = new Map<string, number>();

    posts.forEach(post => {
        post.tags.forEach(tag => {
            const normalizedTag = tag.toLowerCase().replace(/[\s&]+/g, '-');
            categoryMap.set(normalizedTag, (categoryMap.get(normalizedTag) || 0) + 1);
        });
    });

    const categoryList: CategoryCount[] = Array.from(categoryMap).map(([slug, count]) => ({
        name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), // 슬러그를 이름으로 변환
        slug: slug,
        count: count,
    }));

    // 개수 기준 내림차순 정렬
    return categoryList.sort((a, b) => b.count - a.count);
}