/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["anvogue.vercel.app", "avatars.githubusercontent.com", "res.cloudinary.com", "lh3.googleusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://smerassociates.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
