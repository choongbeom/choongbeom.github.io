import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-700">
          <nav className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-indigo-600 dark:text-indigo-400">
              Choongbeom.dev
            </Link>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/blog/">Blog</Link>
              <Link href="/projects/">Projects</Link>
              <Link href="/about/">About</Link>
            </div>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 py-8 text-center text-sm text-gray-500">
          © 2025 김충범 · <Link href="/rss.xml">RSS</Link> · <Link href="/sitemap.xml">Sitemap</Link>
        </footer>
      </body>
    </html>
  );
}
