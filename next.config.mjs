/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.imkdw.dev',
      },
      {
        protocol: 'https',
        hostname: 'local-static.imkdw.dev',
      },
      {
        protocol: 'https',
        hostname: 'presigned.imkdw.dev',
      },
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
