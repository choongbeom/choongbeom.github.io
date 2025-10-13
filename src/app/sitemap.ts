// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/posts'; // 포스트 슬러그를 가져오는 함수

// output: export 모드에서 sitemap을 사용하기 위한 설정
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://choongbeom.github.io/choongbeom-blog-next'; // 실제 도메인으로 변경
  const postSlugs = getAllPostSlugs();

  const postEntries: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${baseUrl}/posts/${slug}`,
    lastModified: new Date(), // 실제 포스트 수정일로 대체하는 것이 좋음
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // ... 다른 정적 페이지 추가 (예: /categories) ...
    ...postEntries,
  ];
}