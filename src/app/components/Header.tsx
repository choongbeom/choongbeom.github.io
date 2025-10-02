// src/app/components/Header.tsx
'use client'; 

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

// Navigation Links 정의
const NavLinks = () => (
    <>
        {/* 링크 색상 변수 적용 */}
        <Link href="/posts" className="text-sm font-medium hover:text-indigo-600 transition" style={{ color: 'var(--header-link)' }}>Posts</Link>
        <Link href="/categories" className="text-sm font-medium hover:text-indigo-600 transition" style={{ color: 'var(--header-link)' }}>Categories</Link>
        <Link href="/about" className="text-sm font-medium hover:text-indigo-600 transition" style={{ color: 'var(--header-link)' }}>About</Link>
    </>
);

export function Header() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header 
            className="sticky top-0 z-50 shadow-sm border-b"
            style={{ 
                backgroundColor: 'var(--header-bg)',
                borderColor: 'var(--comp-border)' 
            }}
        >
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* 로고/블로그 이름 */}
                    <Link href="/" className="text-xl font-extrabold transition-colors duration-200" style={{ color: 'var(--accent-color)' }}>
                        Choongbeom.dev
                    </Link>

                    {/* 데스크톱 메뉴 및 토글 */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLinks />
                        <ThemeToggle />
                    </div>

                    {/* 모바일 메뉴 버튼 */}
                    <div className="flex items-center md:hidden">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="p-2 ml-2 rounded-md transition"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {/* SVG 아이콘 색상: var(--header-link) 적용 */}
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" style={{ color: 'var(--header-link)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" style={{ color: 'var(--header-link)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* 모바일 드롭다운 메뉴 */}
            {isMenuOpen && (
                <nav 
                    id="mobile-menu" 
                    className="mt-0 pb-2 border-t md:hidden absolute left-0 right-0 w-full px-4"
                    style={{ 
                        backgroundColor: 'var(--header-bg)',
                        borderColor: 'var(--comp-border)' 
                    }}
                >
                    <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
                        <NavLinks />
                    </div>
                </nav>
            )}
        </header>
    );
}
