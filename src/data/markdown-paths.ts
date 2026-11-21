// Pages that answer `Accept: text/markdown` (21 Nov 2026, Hassan): every service page plus
// the buyer-intent cost and comparison guides. Kept dependency-free because src/proxy.ts
// imports it on every request. The markdown itself is built in src/lib/markdown-pages.ts.
export const MARKDOWN_SERVICE_SLUGS = [
  "wordpress-migration", "wordpress", "woocommerce", "wix", "squarespace", "webflow", "gohighlevel",
  "ecommerce", "ai-seo", "cms-development", "backend-development", "custom-engineering",
  "training-business-websites", "medical-website-design", "small-business-website-design",
] as const;

export const MARKDOWN_BLOG_SLUGS = [
  "how-much-does-a-website-cost", "website-redesign-cost", "website-migration-cost-2026", "website-rebuild-cost-2026",
  "wordpress-migration-cost", "wix-migration-cost", "squarespace-migration-cost", "webflow-migration-cost",
  "woocommerce-migration-cost", "custom-website-5000-whats-included", "cheap-web-developer",
  "class-registration-software-vs-custom-booking-system",
] as const;

export const MARKDOWN_PATHS: ReadonlySet<string> = new Set([
  ...MARKDOWN_SERVICE_SLUGS.map((s) => `/services/${s}`),
  ...MARKDOWN_BLOG_SLUGS.map((s) => `/blog/${s}`),
]);
