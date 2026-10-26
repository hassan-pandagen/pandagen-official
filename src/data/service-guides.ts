/** Supporting guides for buyers who need more detail than the service page. */
// 4 Oct 2026: the earlier live service pages linked 30 more guides from their body
// (PageContent.tsx on origin/main). The redesign had dropped them, which cut the only
// service-page link into some of the site's busiest posts (GoHighLevel, WooCommerce
// and Shopify speed). Restored here, busiest guides first.
// 4 Oct 2026, later the same day: each list checked against its pillar's cluster in
// topical-map.ts and Search Console impressions (90 days to 3 Oct). The strongest
// missing cluster posts were added (ai-seo had 1 of its 11), lists kept to 3 to 7,
// ordered by impressions. /services/wordpress gets the WordPress speed and security
// guides, which fit a reader who wants to keep and improve a WordPress site.
// The six title-pilot pages (docs/research/seo-skill-pack-audit-2026-10-04/TITLE_PILOT.md)
// get no new links here until the pilot reads, so they are left out on purpose.
export const serviceGuides: Record<string, { title: string; href: string }[]> = {
  "small-business-website-design": [
    { title: "How much a website costs, line by line", href: "/blog/how-much-does-a-website-cost" },
    { title: "What a website costs to run each month", href: "/blog/website-monthly-running-cost" },
    { title: "How to check you own your website", href: "/blog/do-you-own-your-website" },
  ],
  "medical-website-design": [
    { title: "Next.js and Sanity: fit, cost and tradeoffs", href: "/blog/nextjs-sanity-stack" },
    { title: "Sanity vs Supabase: CMS, backend or both", href: "/blog/sanity-vs-supabase" },
    { title: "What a website and database cost each month", href: "/blog/website-monthly-running-cost" },
  ],
  "cms-development": [
    { title: "Sanity or WordPress: test the editing tasks", href: "/blog/sanity-vs-wordpress" },
    { title: "Next.js and Sanity: fit, cost and tradeoffs", href: "/blog/nextjs-sanity-stack" },
    { title: "Sanity vs Supabase: CMS, backend or both?", href: "/blog/sanity-vs-supabase" },
    { title: "What a website costs to run each month", href: "/blog/website-monthly-running-cost" },
  ],
  "backend-development": [
    { title: "Sanity vs Supabase: CMS, backend or both?", href: "/blog/sanity-vs-supabase" },
    { title: "What a website and database cost each month", href: "/blog/website-monthly-running-cost" },
    { title: "Checks for an AI-built application", href: "/blog/ai-built-website-checklist" },
    { title: "Build or buy software", href: "/blog/build-vs-buy-software-2026-cost-comparison" },
    // 26 Oct 2026: contextual link for a buyer weighing a custom backend against SaaS seats.
    { title: "Audit what your SaaS subscriptions cost", href: "/blog/saas-software-pricing-audit-2026" },
  ],
  wordpress: [
    { title: "Why a Divi site is slow, and how to fix it", href: "/blog/divi-theme-slow" },
    { title: "Does Elementor hurt SEO?", href: "/blog/elementor-kills-seo" },
    { title: "WordPress plugin security in 2026", href: "/blog/wordpress-plugin-security-2026" },
    { title: "How to fix a slow WordPress site", href: "/blog/how-to-fix-slow-wordpress" },
    { title: "WordPress AI plugin security advisories", href: "/blog/wordpress-ai-security-risk-2026" },
  ],
  "custom-engineering": [
    { title: "Choose a content editor, backend or both", href: "/blog/sanity-vs-supabase" },
    { title: "A product catalog website with quote requests", href: "/blog/product-catalog-website-without-cart" },
    { title: "How long a custom website takes", href: "/blog/how-long-does-a-custom-website-take" },
    { title: "What a $5,000 custom website includes", href: "/blog/custom-website-5000-whats-included" },
    { title: "Checks for a website built with AI tools", href: "/blog/ai-built-website-checklist" },
    { title: "Check that you own your website", href: "/blog/do-you-own-your-website" },
    { title: "Compare building software with buying it", href: "/blog/build-vs-buy-software-2026-cost-comparison" },
  ],
  ecommerce: [
    { title: "Shopify store speed optimization that works", href: "/blog/shopify-store-speed-optimization" },
    { title: "How headless commerce works", href: "/blog/what-is-headless-commerce" },
    { title: "Shopify Stocky has shut down: what to move to", href: "/blog/shopify-stocky-sunset-date-2026" },
    { title: "Is the Dawn theme slowing your store?", href: "/blog/shopify-dawn-theme-slow" },
    { title: "Shopify or a custom website", href: "/blog/shopify-vs-custom-website" },
    { title: "Is a slow Shopify store losing sales?", href: "/blog/shopify-slow-losing-sales" },
    { title: "Low Shopify conversion rate and speed", href: "/blog/shopify-conversion-rate-speed-fix" },
  ],
  woocommerce: [
    { title: "Why WooCommerce is slow, and how to fix it", href: "/blog/woocommerce-too-slow" },
    { title: "Low WooCommerce conversion rate", href: "/blog/woocommerce-low-conversion-rate" },
    { title: "Do WordPress plugins slow your site?", href: "/blog/wordpress-plugins-destroy-speed" },
    { title: "What affects a WooCommerce migration quote", href: "/blog/woocommerce-migration-cost" },
    { title: "WooCommerce or a custom website", href: "/blog/woocommerce-vs-custom-website" },
  ],
  wix: [
    { title: "A custom website with a Sanity editor", href: "/blog/nextjs-sanity-stack" },
    { title: "Why a Wix website is slow", href: "/blog/wix-too-slow" },
    { title: "What affects a Wix migration quote", href: "/blog/wix-migration-cost" },
    { title: "Wix or a custom website", href: "/blog/wix-vs-custom-website" },
  ],
  squarespace: [
    { title: "A custom website with a Sanity editor", href: "/blog/nextjs-sanity-stack" },
    { title: "Why a Squarespace site is slow", href: "/blog/squarespace-too-slow" },
    { title: "Is Squarespace bad for SEO?", href: "/blog/is-squarespace-bad-for-seo" },
    { title: "What affects a Squarespace migration quote", href: "/blog/squarespace-migration-cost" },
    { title: "Squarespace or a custom website", href: "/blog/squarespace-vs-custom-website" },
  ],
  webflow: [
    { title: "Webflow User Accounts ended: what to do now", href: "/blog/webflow-user-accounts-sunset-date-2026" },
    { title: "What Webflow costs each month and year", href: "/blog/webflow-true-cost" },
    { title: "What affects a Webflow migration quote", href: "/blog/webflow-migration-cost" },
    { title: "Leaving Webflow: stay, optimize or migrate", href: "/blog/leaving-webflow-2026" },
    { title: "Webflow or a custom website", href: "/blog/webflow-vs-custom-website" },
  ],
  gohighlevel: [
    { title: "Why a GoHighLevel site is slow, and how to fix it", href: "/blog/gohighlevel-website-speed" },
    { title: "The best website builder for GoHighLevel agencies", href: "/blog/best-website-builder-for-gohighlevel-agencies" },
    { title: "Keep GoHighLevel while replacing the website", href: "/blog/gohighlevel-keep-crm-replace-website" },
    { title: "Core Web Vitals explained for business owners", href: "/blog/core-web-vitals-explained" },
  ],
  "ai-seo": [
    { title: "Every confirmed Google algorithm update", href: "/blog/google-algorithm-updates" },
    { title: "AI-built site not showing on Google?", href: "/blog/lovable-site-not-showing-on-google" },
    { title: "Search and AI terms explained", href: "/blog/aeo-web-performance-glossary" },
    { title: "Why a competitor outranks you", href: "/blog/why-competitor-outranks-you" },
    { title: "How website speed affects SEO", href: "/blog/how-website-speed-affects-seo" },
    { title: "What tracking AI search visibility showed us", href: "/blog/ai-search-visibility-tracking" },
    { title: "What llms.txt is, and who reads it", href: "/blog/what-is-llms-txt" },
  ],
};
