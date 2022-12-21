/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cloneohouse-bucket.s3.ap-northeast-2.amazonaws.com', '*'],
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
