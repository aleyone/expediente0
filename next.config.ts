import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'static-1.ivoox.com' },
      { protocol: 'https', hostname: 'img-static.ivoox.com' },
    ],
  },
}

export default nextConfig
