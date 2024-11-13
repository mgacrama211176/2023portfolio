/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dmtas.com.au"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
