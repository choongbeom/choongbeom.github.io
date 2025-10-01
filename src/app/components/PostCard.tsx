// src/components/PostCard.tsx

import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/posts/${post.slug}`} 
      /* * ⭐️ 디자인 수정: style={{ '--tw-ring-color': '...' }} 제거 ⭐️
       * 대신 ring-indigo-500과 hover:ring-2 클래스를 사용하여 Tailwind가 
       * CSS 변수를 통해 생성한 CSS 속성을 활용하도록 합니다.
       */
      className={`
        post-card p-5 md:p-6 rounded-xl block transition-all duration-300 transform hover:-translate-y-0.5
        border       
      `}
      style={{
        backgroundColor: 'var(--comp-bg)',
        borderColor: 'var(--comp-border)',
      }}
    >
      <h3 
        className="text-lg md:text-xl font-bold mb-2 line-clamp-2"
        style={{ color: 'var(--text-main)' }} // 주요 텍스트 색상
      >
        {post.title}
      </h3>
      
      <p 
        className="text-xs md:text-sm mb-3"
        style={{ color: 'var(--text-sub)' }} // 보조 텍스트 색상
      >
        {post.date}
      </p>
      
      {/* 태그 목록: 배경색과 텍스트 색상 변수 적용 */}
      <div className="flex flex-wrap gap-2 mt-3">
        {post.tags.map(tag => (
          <span 
            key={tag} 
            className="px-3 py-1 text-xs rounded-full font-medium"
            style={{
                backgroundColor: 'var(--comp-border)', // 태그 배경은 경계선 색상 활용
                color: 'var(--text-sub)'
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
