// src/app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

type NavLinksProps = {
  onNavigate?: () => void;
};

const NavLinks = ({ onNavigate }: NavLinksProps) => (
  <>
    <Link
      href="/posts"
      onClick={onNavigate}
      className="text-sm font-medium hover:text-indigo-600 transition"
      style={{ color: 'var(--header-link)' }}
    >
      Posts
    </Link>
    <Link
      href="/categories"
      onClick={onNavigate}
      className="text-sm font-medium hover:text-indigo-600 transition"
      style={{ color: 'var(--header-link)' }}
    >
      Categories
    </Link>
    <Link
      href="/about"
      onClick={onNavigate}
      className="text-sm font-medium hover:text-indigo-600 transition"
      style={{ color: 'var(--header-link)' }}
    >
      About
    </Link>
  </>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 라우트 변경 시 자동으로 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 border-b shadow-sm overflow-x-clip"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--comp-border)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="min-w-0 flex-1">
            <Link
              href="/"
              className="block text-xl font-extrabold transition-colors duration-200 truncate"
              style={{ color: 'var(--accent-color)' }}
              aria-label="Go to home"
            >
              Choongbeom.dev
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <NavLinks />
            <ThemeToggle />
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="flex items-center md:hidden shrink-0">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 ml-2 rounded-md transition"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  style={{ color: 'var(--header-link)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  style={{ color: 'var(--header-link)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 오버레이 (바깥 탭으로 닫기) */}
      {isMenuOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 top-16 md:hidden bg-black/20"
          style={{ zIndex: 40 }}
        />
      )}

      {/* 모바일 드롭다운 메뉴 */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 top-16 md:hidden border-t"
          style={{
            backgroundColor: 'var(--header-bg)',
            borderColor: 'var(--comp-border)',
            zIndex: 50,
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col space-y-2 py-3">
              <NavLinks onNavigate={() => setIsMenuOpen(false)} />
            </div>
          </div>
      </nav>
      )}
    </header>
  );
}
