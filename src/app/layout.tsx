// src/app/layout.tsx
import { Providers } from './providers'; // Providers 임포트
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  // 1. 페이지 제목 설정: 검색 결과에 표시되는 제목입니다.
  title: '고성능 시스템 및 제어 기술 블로그 | [본인 이름/닉네임]',
  
  // 2. 페이지 설명 설정: 검색 결과에 표시되는 간단한 요약입니다.
  description: 'Java, C++, ConcurrentMap 최적화, Windows 제어 시스템 등 백엔드 및 시스템 최적화 기술에 대한 깊이 있는 분석과 튜토리얼을 제공합니다.',
  
  // 3. 키워드 설정 (선택 사항이지만 주제 명확화를 위해 권장)
  keywords: ['Java', 'C++', 'Backend', 'Optimizing', 'DevOps', 'ConcurrentMap', 'Windows Control', '기술 블로그'],
  
  // 4. Open Graph 및 Twitter 카드 설정 (SNS 공유 시 노출 정보)
  openGraph: {
      title: '고성능 시스템 및 제어 기술 블로그',
      description: 'Java, C++, ConcurrentMap 최적화, Windows 제어 시스템 등 백엔드 및 시스템 최적화 기술 분석',
      url: 'https://choongbeom.github.io/choongbeom-blog-next', 
      siteName: '[블로그 이름]',
      locale: 'ko_KR',
      type: 'website',
  },
  twitter: {
      card: 'summary',
      title: '고성능 시스템 및 제어 기술 블로그',
      description: 'Java, C++, 시스템 최적화 분석',
  },
  
  // 5. 기본 언어 설정
  metadataBase: new URL('https://choongbeom.github.io/choongbeom-blog-next'), 
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning> 
      <body>
        <Providers>
          {/* 색상 클래스 제거: body 스타일이 전역 배경을 제어합니다. */}
          <div className="flex flex-col min-h-screen"> 
            
            <Header>
                {/* ThemeToggle 컴포넌트는 Header 내부에 있다고 가정 */}
            </Header>
            
            <main className="flex-grow max-w-4xl mx-auto px-4 py-8"> 
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}