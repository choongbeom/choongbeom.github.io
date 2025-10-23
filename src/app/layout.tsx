// src/app/layout.tsx
import { Providers } from './providers'; // Providers 임포트
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  // 1. 페이지 제목 — 검색 및 SNS 공유 시 대표 제목
  title: 'Choongbeom.dev | 시스템 엔지니어링 & 개발 성장 블로그',

  // 2. 페이지 설명 — 검색결과 및 링크 미리보기 설명
  description:
    'Windows 디바이스 제어, 백엔드 시스템 통합 등 실제 프로젝트 기반의 엔지니어링 경험과 성장 기록을 공유합니다.',

  // 3. 키워드 — 검색엔진 인식 강화용
  keywords: [
    'System Engineering',
    'Windows Device Control',
    'Tech Blog',
    '김충범',
  ],

  // 4. Open Graph — SNS(카카오톡, 페이스북 등) 공유 시 미리보기
  openGraph: {
    title: 'Choongbeom Kim | 시스템 엔지니어링 & 개발 블로그',
    description:
      'Windows 제어, 백엔드 통합 등 실무 중심의 개발 경험과 기술 아카이브를 공유합니다.',
    url: 'https://choongbeom.github.io',
    siteName: 'Choongbeom.dev',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/favicon.ico', // favicon 또는 og-image 경로
        width: 512,
        height: 512,
        alt: 'Choongbeom.dev Icon',
      },
    ],
  },

  // 5. Twitter 카드 (트위터, 슬랙 등 미리보기)
  twitter: {
    card: 'summary_large_image',
    title: 'Choongbeom.dev | 시스템 엔지니어링 블로그',
    description:
      'Windows Control 등 시스템 개발 중심 기술 블로그',
    images: ['/favicon.ico'],
  },

  // 6. 기본 언어 및 기본 URL
  metadataBase: new URL('https://choongbeom.github.io'),

   // 7. RSS 피드 (Feed XML 링크 추가)
   alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

<meta name="google-site-verification" content="eVKJilBO5q7gD1kSNiVWbx3V-okaGJjwLIx9l16X-ds" />


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