/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/api/weboptin.zc',
        destination: 'https://lchel-cmpzourl.maillist-manage.com/weboptin.zc',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/clothing-packaging',
        destination: '/clothing-boxes',
        permanent: true, // Indicates a 301 redirect
      },
      {
        source: '/post/how-to-print-on-stand-up-pouches-a-packaging-guide-2024',
        destination: '/post/how-to-print-on-stand-up-pouches',
        permanent: true, // Indicates a 301 redirect
      },
    ];
  },

}

module.exports = nextConfig 
