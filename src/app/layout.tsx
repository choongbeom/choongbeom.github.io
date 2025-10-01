// src/app/layout.tsx

import { Providers } from './providers'; // Providers 임포트
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css'; 

export const metadata = { 
  title: 'Choongbeom.dev',
  description: 'FrontendEngineering & DevOps Stories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning> 
      <body>
        {/* ⭐️ Providers 컴포넌트 사용 ⭐️ */}
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