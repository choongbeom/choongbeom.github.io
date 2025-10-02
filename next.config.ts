import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // 정적 export
  images: { unoptimized: true }, // Pages 호환
  trailingSlash: true,           // URL 뒤에 / 유지
  // 웹팩 설정을 오버라이드하여 Node.js 모듈 처리 방식을 정의합니다.
  webpack: (config, { isServer }) => {
    // 서버 빌드가 아닌 (즉, 클라이언트 빌드) 경우에만 fs와 path 모듈을 무시합니다.
    // 이렇게 하면 posts.ts가 클라이언트 번들로 유입되더라도 오류가 발생하지 않습니다.
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // require('fs')를 무시
        path: false, // require('path')를 무시
        // gray-matter는 클라이언트에서 필요 없으므로 무시
        "gray-matter": false, 
      };
    }

    return config;
  },
};

export default nextConfig;
