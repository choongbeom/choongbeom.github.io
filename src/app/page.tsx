// src/app/page.tsx
import Link from 'next/link';
import { PostCard } from '@/components/PostCard'; 
import { getAllPosts, getCategoriesFromPosts } from '@/lib/posts';
import { PostData } from '@/lib/types'; // lib/types에서 PostData 타입 임포트 (가정)
import { CATEGORY_COLOR_MAP } from '@/lib/constants';
import { getTagColorClass } from '@/lib/styles';

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

export default async function HomePage() {
  const allPostsData = await getAllPosts(); 
  const latestPosts = allPostsData.slice(0, 4).map(mapPostDataToPost); 
  const rawFeaturedCategories = getCategoriesFromPosts(allPostsData);

  // CATEGORY_COLOR_MAP을 사용하여 색상 데이터를 주입합니다.
  const featuredCategories = rawFeaturedCategories.map(cat => ({
    ...cat,
    color: CATEGORY_COLOR_MAP[cat.slug] || 'gray', // 매핑된 색상 또는 기본값 'gray'
  }));

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-24 w-full overflow-x-clip">

      {/* 1. Hero Section (모바일/데스크톱 반응형 타이포그래피) */}
      <section className="mb-20">
      <h1
          className="
            font-extrabold mb-4 leading-tight tracking-tight
            text-[clamp(28px,8vw,44px)]    /* 화면에 맞게 유연하게 */
            break-words break-keep         /* 긴 영문/한글 모두 안전 줄바꿈 */
          "
          style={{ hyphens: 'auto' }}      /* 단어 분할 허용(브라우저 지원 시) */
        >
          <span className="mr-3" style={{ color: 'var(--accent-color)' }}>Windows</span>
          Application
          <br />
          <span className="mr-1">&amp;</span>       
          <span className="mr-3" style={{ color: 'var(--text-sub)' }}>Device</span>
          Integration
        </h1>
        <p 
          className="text-lg md:text-2xl max-w-2xl"
          style={{ color: 'var(--text-sub)' }}
        >
          Engineering, Projects, and Growth Stories
        </p>
      </section>

      {/* 2. Latest Posts Section */}
      <section className="mb-20">
        <h2 
          className="text-3xl font-bold mb-8 border-l-4 pl-3"
          style={{ 
            color: 'var(--text-main)', // 제목 텍스트
            borderColor: 'var(--accent-color)', // 왼쪽 강조선
          }}
        >
          Latest Posts
        </h2>
        {/* 모바일: 1열, 데스크톱: 2열 */}
        <div className="grid gap-6 md:grid-cols-2">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/posts" 
            className="text-base font-medium hover:underline"
            style={{ color: 'var(--accent-color)' }}
          >
            모든 포스트 보기 &rarr;
          </Link>
        </div>
      </section>

      {/* 3. Featured Categories/Tags (모바일 친화적 줄바꿈) */}
      <section>
        <h2 
          className="text-3xl font-bold mb-8 border-l-4 pl-3"
          style={{ 
            color: 'var(--text-main)', // 제목 텍스트
            borderColor: 'var(--accent-color)', // 왼쪽 강조선
          }}
        >
          Explore Topics
        </h2>
        {/* flex-wrap을 사용하여 모바일에서 태그가 자연스럽게 줄바꿈되도록 함 */}
        <div className="flex flex-wrap gap-3">
          {featuredCategories.map((category) => (
            <Link 
              key={category.slug}
              href={`/categories/${category.slug}`}
              // 복잡한 Tailwind 컬러 조합은 유지하고, 다크 모드 클래스가 정상적으로 작동하기를 기대합니다.
              // 이 부분은 CATEGORY_COLOR_MAP의 'color' 속성을 사용하여 동적으로 클래스가 적용됩니다.
              className={`px-3 py-1.5 text-md font-medium rounded-full border 
                          ${getTagColorClass(category.color)} 
                          transition whitespace-nowrap`}
            >
              #{category.name} ({category.count})
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
