/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // 2. Disable strict react mode if double-renders annoy you
  reactStrictMode: false,
  // 3. Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // 4. Optimize CSS
  experimental: {
    optimizeCss: true,
  },
  // 5. Enable compression
  compress: true,
};

module.exports = nextConfig;
