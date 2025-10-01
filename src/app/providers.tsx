// src/app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

// next-themes의 ThemeProvider를 래핑하여 'use client'를 분리하고 설정을 적용합니다.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      // ⭐️ 핵심: <html> 태그에 "dark" 클래스를 추가합니다. ⭐️
      attribute="class" 
    >
      {children}
    </ThemeProvider>
  );
}