/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages에서는 basePath와 assetPrefix가 필요하지 않을 수 있습니다
  // basePath: '/developer-type-checker',
  // assetPrefix: '/developer-type-checker/',
  trailingSlash: true, // 이 옵션 추가
}

export default nextConfig
