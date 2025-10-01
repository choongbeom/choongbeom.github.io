// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "김충범 · Dev Blog",
  description: "Next.js · CI/CD · 대면창구 · AI · 제품화 기록",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-700">
          <nav className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-indigo-600 dark:text-indigo-400">
              Choongbeom.dev
            </a>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="/blog/">Blog</a>
              <a href="/projects/">Projects</a>
              <a href="/about/">About</a>
            </div>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 py-8 text-center text-sm text-gray-500">
          © 2025 김충범 · <a href="/rss.xml">RSS</a> · <a href="/sitemap.xml">Sitemap</a>
        </footer>
      </body>
    </html>
  );
}
