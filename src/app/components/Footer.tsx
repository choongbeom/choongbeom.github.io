// src/app/components/Footer.tsx
import React from 'react';

export function Footer() {
  return (
    <footer 
        className="mt-12 border-t py-6"
        style={{ 
            borderColor: 'var(--comp-border)',
            backgroundColor: 'var(--header-bg)' // 헤더와 동일한 배경색 적용
        }}
    >
      <div 
        className="max-w-4xl mx-auto px-4 text-center text-sm"
        style={{ color: 'var(--text-sub)' }} // 보조 텍스트 색상 적용
      >
        © {new Date().getFullYear()} Choongbeom.dev | All Rights Reserved.
      </div>
    </footer>
  );
}
