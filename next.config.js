// Bundle analyzer is only loaded when ANALYZE=true (run via `npm run analyze`).
// This way `npm run dev` and `npm run build` work without the package installed.
// .trim() handles Windows CMD quirk where `set X=true && cmd` includes trailing space.
const withBundleAnalyzer = process.env.ANALYZE?.trim() === 'true'
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Non-www → www redirect handled by Vercel domain config (edge-level, no function overhead)
  // 1. Image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 2. React strict mode for development quality checks
  reactStrictMode: true,
  // 3. Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // 4. Optimize package imports for better tree-shaking + performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    inlineCss: true,
    staticGenerationMaxConcurrency: 4,
    staticGenerationMinPagesPerWorker: 25,
  },
  // 5. Enable compression
  compress: true,
  // 7. Optimize for production
  poweredByHeader: false,
  // 9. Security headers + static asset caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
