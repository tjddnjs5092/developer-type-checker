import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/developer-type-checker', // 레포지토리 이름
}

export default nextConfig
