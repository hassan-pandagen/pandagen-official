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
    // AVIF removed 26 Aug 2026 for GHSA-2xp9-vwfh-vxw4: a libheif flaw reachable via
    // sharp allowed unauthenticated RCE when the optimizer processed an attacker-
    // controlled AVIF. Next.js 16.3.3 disables AVIF optimization itself until the
    // upstream fix propagates, so this mirrors the patch rather than fighting it.
    // Re-add only when Next.js announces libheif is fixed upstream.
    formats: ['image/webp'],
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
    // inlineCss off since 13 Oct 2026. Inlined, the site's ~270 KB of CSS was sent
    // three times per page (once in <style>, twice more in the React payload, as
    // the Next docs warn), so pages were ~1 MB of HTML. As stylesheets it is sent
    // once and cached between pages. Local mobile Lighthouse, 3-run medians on
    // four pages: HTML gzip 150-190 KB -> 30-60 KB, performance +3 to +10.
    // cssChunking: 'graph' was also tried: ~12 KB less CSS per page, same scores,
    // so the default chunking stays rather than reorder CSS on every page.
    inlineCss: false,
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
      // CMS service rename: preserve existing links with a permanent redirect.
      { source: '/services/sanity-development', destination: '/services/cms-development', permanent: true },
      // 8 Oct 2026: the Supabase service page became /services/backend-development before
      // launch; this keeps any early link working.
      { source: '/services/supabase-development', destination: '/services/backend-development', permanent: true },
      // The four granular /ai-info reference pages were RESTORED on 8 Aug 2026.
      // They were consolidated in July to stop the same fact drifting across pages;
      // that risk is now handled by src/data/company-facts.ts holding each fact once
      // and every page importing it, so the surface is back without the drift.
      // competitor-comparison stays redirected: a factual page about other companies
      // would need vendor pricing this environment cannot verify.
      // Retargeted 4 Oct 2026 from /pricing to the Next.js agency shortlist. The URL
      // still drew 515 impressions in the 90 days to 3 Oct, 339 of them on "bejamas
      // vs pagepro" (position 6.7), and top-nextjs-agencies-2026 ranked 3.7 on that
      // same query. A comparison search should land on the disclosed shortlist that
      // covers both agencies, not on our price list. The reason above is about not
      // rebuilding the page, and it still holds; it never argued for /pricing.
      {
        source: '/ai-info/competitor-comparison',
        destination: '/blog/top-nextjs-agencies-2026',
        permanent: true,
      },
      // /blog/topic has no index of its own: the hub list lives above the fold
      // on /blog. Anything that truncates a hub URL lands there instead of a 404.
      {
        source: '/blog/topic',
        destination: '/blog',
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
      // Three same-intent merges, 4 Oct 2026 (SEO audit, docs/research/
      // seo-skill-pack-audit-2026-10-04/D-quality-and-duplicates.md, Cluster 4).
      // Each pair answered one question twice and neither losing page earned a
      // click in the 90 days to 3 Oct, so little search traffic was at stake. The
      // unique, still-accurate sections and FAQs were moved into the survivor first.
      //   wordpress-killer (17 impressions) -> the three-year cost model (18, 1 click)
      //   how-to-cut-saas-bill-2026 (10) -> saas-software-pricing-audit-2026 (724)
      //   why-is-my-website-loading-so-slow (28) -> how-to-speed-up-your-website (37)
      // The fourth pair in the audit (shopify-slow-losing-sales) was NOT merged: it
      // had more impressions than its proposed survivor and ranked for different
      // queries (sales decline, growth slowing), so it keeps its own URL.
      {
        source: '/blog/wordpress-killer',
        destination: '/blog/wordpress-vs-custom-code-real-cost-3-years',
        permanent: true,
      },
      {
        source: '/blog/how-to-cut-saas-bill-2026',
        destination: '/blog/saas-software-pricing-audit-2026',
        permanent: true,
      },
      {
        source: '/blog/why-is-my-website-loading-so-slow',
        destination: '/blog/how-to-speed-up-your-website',
        permanent: true,
      },
      // Panda CodeLab was taken off the portfolio on 30 Sep 2026 (owner's call).
      // Old links and search results land on the work index instead of a 404.
      {
        source: '/work/panda-codelab',
        destination: '/work',
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
      // HTML documents must revalidate. Assets must not.
      //
      // WHY THIS EXISTS: five consecutive deploys shipped to origin and the edge
      // kept serving old HTML, path by path, from DIFFERENT weeks -- July's build
      // on /work, early August's on a blog post, yesterday's on the homepage.
      // That patchwork is the signature of long-TTL document caching where each
      // path expires on its own clock, not of a deploy that failed.
      //
      // THE EVIDENCE THIS IS THE RIGHT LAYER: /llms.txt was the ONE surface that
      // recovered on its own. It is also the one route that sets its own
      // cache-control (see src/app/llms.txt/route.ts). Every stale path was an
      // HTML document sending no cache directive at all. That is as close to a
      // controlled experiment as this repo is going to produce.
      //
      // THE LOOKAHEAD IS LOAD-BEARING: applied to '/(.*)' this would override the
      // immutable, year-long caching Next.js sets on /_next/static and turn every
      // hashed chunk into a revalidation round-trip. Excluding the build output
      // and the crawler files keeps this to documents only.
      //
      // NOT SUFFICIENT ON ITS OWN: this governs what the origin SAYS about new
      // responses. Anything already sitting in an edge cache stays there until it
      // is purged, and a CDN configured to cache everything for a fixed TTL can
      // ignore this entirely. The deploy pipeline still needs a purge step.
      {
        source: '/((?!_next/|api/|.*\\.(?:js|css|png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|txt|xml|json)$).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
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
