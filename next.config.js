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
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // 5. Enable compression
  compress: true,
  // 6. Modern JavaScript output
  swcMinify: true,
  // 7. Optimize for production
  poweredByHeader: false,
  // 8. Generate smaller builds
  output: 'standalone',
};

module.exports = nextConfig;
