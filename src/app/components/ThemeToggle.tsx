// src/components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  // next-themes에서 테마 관련 훅을 사용합니다.
  const { theme, setTheme } = useTheme();
  
  // 클라이언트 측 렌더링을 확인하기 위한 상태
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 마운트 전에는 렌더링하지 않거나, 빈 공간을 표시하여 깜빡임을 방지합니다.
    return <div className="w-6 h-6"></div>;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // 현재 테마 상태 (다크 모드인지 확인)
  // isDark가 true면, '라이트 모드로 전환'을 유도하는 해 아이콘을 보여줍니다.
  const isDark = theme === 'dark';
  
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {isDark ? (
        // ⭐️ 해 아이콘 (Sun Icon): var(--header-link) 색상 적용 ⭐️
        <svg 
            className="w-6 h-6" 
            style={{ color: 'var(--header-link)' }} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        // ⭐️ 달 아이콘 (Moon Icon): var(--header-link) 색상 적용 ⭐️
        <svg 
            className="w-6 h-6" 
            style={{ color: 'var(--header-link)' }} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      )}
    </button>
  );
}
