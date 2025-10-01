// app/page.tsx
export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          문제 해결의 기록
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          대면창구 · AI · 제품화에서 배운 점을 기록합니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["Next.js", "STT", "OCR", "Biometric", "PoC/MVP"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border rounded-full text-sm text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-12">
        <h2 className="text-sm uppercase font-semibold tracking-wide text-gray-500 dark:text-gray-400 mb-3">
          대표 글
        </h2>
        <article className="p-6 border rounded-xl bg-white dark:bg-gray-800 shadow-sm">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            2025-10-01 · 읽기 5분
          </div>
          <a
            href="/blog/nextjs-github-actions/"
            className="block text-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Next.js + GitHub Actions로 심플하게 블로그 배포
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            GitHub Actions 신규 방식을 활용해 정적 Export로 Pages에 배포한 기록.
          </p>
        </article>
      </section>

      {/* Latest Posts */}
      <section className="mb-12">
        <h2 className="text-sm uppercase font-semibold tracking-wide text-gray-500 dark:text-gray-400 mb-3">
          최신 글
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              date: "2025-09-28",
              title: "Clova STT Job 설계: 동기에서 배치로",
              url: "/blog/clova-stt-job-arch/",
              desc: "CSR 동기 호출의 병목을 풀기 위한 큐·폴링·세그먼트 정규화 전략."
            },
            {
              date: "2025-09-21",
              title: "브라우저 WASM OCR 적용기",
              url: "/blog/ocr-wasm-on-device/",
              desc: "온디바이스에서 OCR을 수행하며 얻은 성능 및 한계."
            }
          ].map((post) => (
            <article
              key={post.url}
              className="p-5 border rounded-xl bg-white dark:bg-gray-800 shadow-sm"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {post.date}
              </div>
              <a
                href={post.url}
                className="block font-semibold text-gray-800 dark:text-gray-100 hover:underline"
              >
                {post.title}
              </a>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{post.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-sm uppercase font-semibold tracking-wide text-gray-500 dark:text-gray-400 mb-3">
          프로젝트
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="p-5 border rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <a
              href="/projects/monitoring-system/"
              className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              대면창구 통합 관제(MVP)
            </a>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              장비/상태/알림 일원화. PoC→MVP에서 남긴 인사이트.
            </p>
          </article>
          <article className="p-5 border rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <a
              href="/projects/id-verification/"
              className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              신분증 진위확인 확장
            </a>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              FADGI·KISA·FBI 기준 실무 적용 포인트.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
