/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/airtrack/' : '',
  basePath: isProd ? '/airtrack' : '',
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Disable default image optimization
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
