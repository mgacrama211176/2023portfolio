/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: "/Users/marlong/developer/2023portfolio",
  images: {
    domains: ["dmtas.com.au"],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
    loader: "default",
  },
};

module.exports = nextConfig;
