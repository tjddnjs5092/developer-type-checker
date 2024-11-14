/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/developer-type-checker',
  assetPrefix: '/developer-type-checker/',
}

export default nextConfig
