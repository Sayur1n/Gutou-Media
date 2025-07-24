/** @type {import('next').NextConfig} */
const nextConfig = {
  // 优化构建性能
  experimental: {
    optimizePackageImports: ['@stripe/stripe-js', '@stripe/react-stripe-js'],
  },
  // 静态导出配置
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
        port: '',
        pathname: '/kf/**',
      },
      {
        protocol: 'https',
        hostname: 'img.alicdn.com',
        port: '',
        pathname: '/imgextra/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 