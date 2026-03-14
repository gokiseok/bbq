/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 로컬 이미지만 사용하므로 별도 도메인 불필요
    unoptimized: false,
  },
};

export default nextConfig;
