import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // 정적 export
  images: { unoptimized: true }, // Pages 호환
  trailingSlash: true            // URL 뒤에 / 유지
};

export default nextConfig;
