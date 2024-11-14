/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages를 위한 설정
  basePath: '/developer-type-checker',
  assetPrefix: '/developer-type-checker/',
  // 이 부분은 custom domain을 사용하면 필요없습니다
  // 커스텀 도메인을 사용중이라면 이 두 줄을 제거하세요
}

export default nextConfig
