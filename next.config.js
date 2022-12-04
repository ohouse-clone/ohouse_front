/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', '*'],
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://cloneohouse.shop/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
