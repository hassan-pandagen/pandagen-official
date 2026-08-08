// Bundle analyzer is only loaded when ANALYZE=true (run via `npm run analyze`).
// This way `npm run dev` and `npm run build` work without the package installed.
// .trim() handles Windows CMD quirk where `set X=true && cmd` includes trailing space.
const withBundleAnalyzer = process.env.ANALYZE?.trim() === 'true'
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep release verification isolated from a developer-owned `.next` process.
  // Ordinary development and deployment builds continue to use `.next`.
  distDir: process.env.PANDACODEGEN_AUDIT_BUILD === '1' ? '.next-audit' : '.next',
  // Non-www → www redirect handled by Vercel domain config (edge-level, no function overhead)
  // Image optimization is intentionally limited to same-origin assets. Add an
  // exact remote host only when a reviewed product requirement needs it.
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 2. React strict mode for development quality checks
  reactStrictMode: true,
  // 3. Performance optimizations
  compiler: {
    // Keep server-side warnings and errors available to the deployment logger.
    // Production diagnostics must not disappear during an incident.
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
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
  // 8. Catch malformed URLs (e.g. pandacodegen.com/$ from broken external links)
  async redirects() {
    return [
      // The four granular /ai-info reference pages were RESTORED on 8 Aug 2026.
      // They were consolidated in July to stop the same fact drifting across pages;
      // that risk is now handled by src/data/company-facts.ts holding each fact once
      // and every page importing it, so the surface is back without the drift.
      // competitor-comparison stays redirected: a factual page about other companies
      // would need vendor pricing this environment cannot verify.
      {
        source: '/ai-info/competitor-comparison',
        destination: '/pricing',
        permanent: true,
      },
      // NOTE: the four /work/* case-study routes were briefly redirected to /work
      // during the July 2026 claim remediation. They have since been rebuilt with
      // dated sources, ownership disclosures and bounded claims, so the redirects
      // are removed and the routes serve their own pages again.
      {
        source: '/$',
        destination: '/',
        permanent: true,
      },
      // Merged webflow-migration-50-to-100-pages into webflow-migration-cost (Jul 2026):
      // Google was consolidating the two on its own (-98% impressions on the weaker page);
      // the stronger page already carries the 50-100 content. 301 preserves link equity.
      {
        source: '/blog/webflow-migration-50-to-100-pages',
        destination: '/blog/webflow-migration-cost',
        permanent: true,
      },
      // Merged gohighlevel-migration into gohighlevel-keep-crm-replace-website (Jul 2026):
      // near-duplicate content at nearly identical GSC position (8.76 vs 8.19) cannibalizing
      // the same query intent; the keep-crm page is the stronger performer. 301 preserves link equity.
      {
        source: '/blog/gohighlevel-migration',
        destination: '/blog/gohighlevel-keep-crm-replace-website',
        permanent: true,
      },
      // Renamed google-march-2026-update -> google-algorithm-updates (Aug 2026):
      // the page was a dated news post about one core update, but Google shipped
      // two more (May 2026 core, June 2026 spam) and the slug would have gone on
      // mislabelling an evergreen register forever. 301 preserves link equity.
      {
        source: '/blog/google-march-2026-update',
        destination: '/blog/google-algorithm-updates',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://www.pandacodegen.com/:path*',
        permanent: true,
      },
    ];
  },
  // 9. Security headers. Next.js owns cache semantics for its static and image
  // routes; overriding them can break development and framework revalidation.
  async headers() {
    return [
      // Build output is a rendering resource, not a document. Vercel appends a
      // per-deployment `?dpl=` id to every asset URL, so each deploy mints a fresh
      // set of chunk URLs and Google re-crawls them as new: GSC showed the same
      // `05hvb86hjw22i.js` under two deployment ids on consecutive days, and 199 of
      // the 224 URLs under "Crawled - currently not indexed" were build assets.
      // noindex removes them as index candidates and makes that report readable
      // again. It does NOT reduce crawling, and it is not meant to.
      //
      // NEVER disallow /_next/static/ in robots.txt to achieve this. Googlebot must
      // fetch the JS and CSS to render the page; blocking it breaks rendering
      // outright. noindex is the correct control precisely because it still permits
      // the fetch. Keep this source pattern narrow - applied to '/(.*)' it would
      // deindex the entire site.
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Deliberately scoped. It closes clickjacking, base-tag injection, plugin
          // injection and form hijacking without a script-src directive, because a
          // script-src here would silently break the consent-gated vendors (GTM,
          // Clarity, cal.com, Meta Pixel) on a page that generates leads. Tightening
          // to script-src requires testing each vendor with consent granted first.
          {
            key: 'Content-Security-Policy',
            value: [
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
