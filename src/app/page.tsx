// app/page.tsx
// 서버 컴포넌트 (Server Component)

import Link from 'next/link';
import { PostCard } from '@/components/PostCard'; 

// Post 데이터 구조를 가정합니다.
interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

// ⭐️ 1. 실제 데이터 로직을 백엔드/제어 주제로 대체합니다. ⭐️
async function getLatestPosts(): Promise<Post[]> {
  return [
    { slug: 'java-concurrent-update', title: '자바 ConcurrentHashMap을 활용한 고성능 동시성 제어', date: '2025년 12월 10일', tags: ['Java', 'Backend'] },
    { slug: 'windows-ipc-shared-memory', title: 'C++ Windows IPC: Shared Memory를 이용한 실시간 데이터 전송', date: '2025년 12월 5일', tags: ['C++', 'Windows', 'IPC'] },
  ];
}

export default async function HomePage() {
  const latestPosts = await getLatestPosts();

  // ⭐️ 2. 카테고리 주제를 백엔드/제어 시스템 중심으로 변경합니다. ⭐️
  const featuredCategories = [
    { name: 'Java & Spring', count: 18, slug: 'java-spring', color: 'indigo' }, // indigo color 유지
    { name: 'C++ & Windows 제어', count: 15, slug: 'cpp-windows-control', color: 'red' }, // red color 유지
    { name: 'Backend & DB 최적화', count: 10, slug: 'backend-db', color: 'gray' }, // gray color 유지
    { name: 'DevOps & Tooling', count: 7, slug: 'devops-tooling', color: 'gray' }, // gray color 유지
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-24">

      {/* 1. Hero Section (모바일/데스크톱 반응형 타이포그래피) */}
      <section className="mb-20">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-snug lg:leading-tight"
        >
          {/* ⭐️ 내용 수정: 백엔드 및 제어 시스템 강조 ⭐️ */}
          <span style={{ color: 'var(--accent-color)' }}>Backend System</span>
          &amp;
          <br />
          <span style={{ color: 'var(--text-sub)' }}>장비 제어</span>
          Insight
        </h1>
        {/* ⭐️ 내용 수정: 16년차 시니어 개발자 문구 적용 ⭐️ */}
        <p 
          className="text-lg md:text-2xl max-w-2xl"
          style={{ color: 'var(--text-sub)' }}
        >
          16년차 시니어 개발자의 Java, C++, Windows 제어 시스템 전문 지식 공유.
        </p>
      </section>

      {/* 2. Latest Posts Section */}
      <section className="mb-20">
        {/* ⭐️ 제목 텍스트 수정: 한글로 변경 ⭐️ */}
        <h2 
          className="text-3xl font-bold mb-8 border-l-4 pl-3"
          style={{ 
            color: 'var(--text-main)', // 제목 텍스트
            borderColor: 'var(--accent-color)', // 왼쪽 강조선
          }}
        >
          최근 기술 인사이트
        </h2>
        {/* 모바일: 1열, 데스크톱: 2열 */}
        <div className="grid gap-6 md:grid-cols-2">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          {/* ⭐️ 모든 포스트 보기 링크 색상 적용 ⭐️ */}
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
        {/* ⭐️ 제목 텍스트 수정: 한글로 변경 ⭐️ */}
        <h2 
          className="text-3xl font-bold mb-8 border-l-4 pl-3"
          style={{ 
            color: 'var(--text-main)', // 제목 텍스트
            borderColor: 'var(--accent-color)', // 왼쪽 강조선
          }}
        >
          주요 주제 탐색
        </h2>
        {/* flex-wrap을 사용하여 모바일에서 태그가 자연스럽게 줄바꿈되도록 함 */}
        <div className="flex flex-wrap gap-3">
          {featuredCategories.map((category) => (
            <Link 
              key={category.slug}
              href={`/categories/${category.slug}`}
              // 기존에 사용하시던 컬러 로직은 그대로 유지합니다.
              className={`px-3 py-1.5 text-md font-medium rounded-full border 
                            ${category.color === 'indigo' ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800' : 
                             category.color === 'red' ? 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-800' :
                            'border-gray-300 bg-gray-50 text-gray-700 dark:border-gray-700 dark:bg-gray-700/50 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/70'
                           } 
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
