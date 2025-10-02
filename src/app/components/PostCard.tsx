// src/app/components/PostCard.tsx
import Link from 'next/link';
import { CATEGORY_COLOR_MAP } from '@/lib/constants';
import { PostData } from '@/lib/types';
import { getTagColorClass } from '@/lib/styles';

interface PostCardProps {
  post: PostData;
}

// 태그 이름(키)을 색상(값)으로 변환하는 함수
const getTagColor = (tag: string) => {
    // 태그 이름에서 공백을 제거하고 소문자로 변환하여 맵에서 찾습니다.
    const normalizedTag = tag.toLowerCase().replace(/\s/g, '');
    
    // 정확한 매칭을 우선하고, 없으면 기본값 'gray' 반환
    return CATEGORY_COLOR_MAP[normalizedTag] || 'gray'; 
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/posts/${post.slug}`} 
      /* 호버 시 ring 효과 추가: 테마에 맞는 ring 색상으로 설정됩니다. */
      className={`
        post-card p-5 md:p-6 rounded-xl block transition-all duration-300 transform hover:-translate-y-0.5
        border
        hover:ring-2 ring-indigo-500 dark:ring-indigo-400
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
      
      <div className="flex flex-wrap gap-2 mt-3">
        {post.tags.map(tag => {
          const color = getTagColor(tag); // 태그 색상 가져오기
          
          return (
            <span 
              key={tag} 
              className={`px-3 py-1 text-xs rounded-full font-medium border
                          ${getTagColorClass(color)} 
                          transition whitespace-nowrap`}
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </Link>
  );
}
