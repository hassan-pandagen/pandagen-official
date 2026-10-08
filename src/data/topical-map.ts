// ─────────────────────────────────────────────────────────────────────────────
// TOPICAL MAP: single source of truth for semantic relationships
// ─────────────────────────────────────────────────────────────────────────────
// Implements the Koray Tuğberk Gübür Semantic SEO model as DATA, so internal
// linking, related-content ranking, and topical boundaries are derived from one
// place instead of being re-asserted by hand on every page.
//
// IMPORTANT: This module is intentionally framework-pure: NO `server-only`, NO
// import of `@/data/blog` (which is server-only). It is keyed by string ids so it
// can be imported by BOTH server components (RelatedPosts) and client components
// (RelatedServicesGrid renders inside "use client" service pages). Map post ids
// back to post objects in the caller.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Attribute tiers per Koray's attribute research:
 * - popular:   the attributes buyers most search/ask about (highest query demand)
 * - prominent: the attributes authoritative sources emphasize (E-E-A-T weight)
 * - relevant:  contextually adjacent attributes that complete topical coverage
 */
export interface AttributeTiers {
  popular: string[];
  prominent: string[];
  relevant: string[];
}

export interface Entity {
  id: string;
  name: string;
  /** schema.org-ish type for reference when authoring JSON-LD */
  type: 'Organization' | 'SoftwareApplication' | 'Service' | 'Thing';
  /** The pillar/service page that anchors this entity, if any. */
  pillarHref?: string;
  attributes: AttributeTiers;
  /** Validation / disambiguation links (mirrors JSON-LD sameAs intent). */
  sameAs?: string[];
}

export interface Cluster {
  id: string;
  label: string;
  /** Service pillar this cluster supports (commercial intent anchor). */
  pillarHref?: string;
  /**
   * True when a live /services/* page already owns this cluster's search intent.
   *
   * These clusters get NO generated hub. Minting /blog/topic/wix for three posts
   * would put a second page of ours in front of the same query /services/wix is
   * built to win, which is cannibalisation, not coverage. The rule is not "merge
   * anything under four posts" -- it is NEVER MINT A HUB THAT COMPETES WITH A
   * MONEY PAGE THAT ALREADY EXISTS. Posts in these clusters still get an UP-link
   * and a breadcrumb parent; both point at the service page instead of a hub.
   */
  serviceOwned?: boolean;
  /** Entities this cluster is about. */
  entityIds: string[];
  /** Supporting blog post ids (a post may live in multiple clusters). */
  postIds: string[];
  /**
   * Case-study hrefs that serve as EVIDENCE for this cluster.
   *
   * Kept separate from `postIds` on purpose: `postIds` are keys into `blogPosts`
   * and `getRelatedPostIds` resolves them there, so putting a /work slug in that
   * array would silently fail to resolve. These are full hrefs and are consumed
   * by prose links rather than by RelatedPosts.
   *
   * In Koray's model these are the proof layer under a commercial cluster: the
   * cluster argues, the case study demonstrates. A cluster with no case study is
   * a cluster making claims it cannot evidence, which is worth being able to see.
   */
  caseStudyHrefs?: string[];
  /** Topically adjacent clusters that drive horizontal internal-link flow. */
  relatedClusterIds: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// ENTITIES: core entity model with attribute tiers
// ─────────────────────────────────────────────────────────────────────────────

export const entities: Record<string, Entity> = {
  pandacodegen: {
    id: 'pandacodegen',
    name: 'PandaCodeGen',
    type: 'Organization',
    pillarHref: '/',
    attributes: {
      popular: ['custom website scope', 'performance acceptance criteria', 'code ownership terms', 'project pricing'],
      prominent: ['Next.js engineering', 'search-ready content', 'software operating cost', 'performance measurement'],
      relevant: ['Sanity CMS', 'Vercel hosting', 'server-side ad tracking', 'white-label for agencies'],
    },
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    type: 'SoftwareApplication',
    pillarHref: '/services/custom-engineering',
    attributes: {
      popular: ['speed', 'SEO', 'hosting cost'],
      prominent: ['App Router', 'server components', 'static rendering', 'Core Web Vitals'],
      relevant: ['Vercel', 'edge network', 'headless CMS', 'React 19'],
    },
    sameAs: ['https://nextjs.org', 'https://en.wikipedia.org/wiki/Next.js'],
  },
  wordpress: {
    id: 'wordpress',
    name: 'WordPress',
    type: 'SoftwareApplication',
    pillarHref: '/services/wordpress-migration',
    attributes: {
      popular: ['slow', 'plugin bloat', 'migration cost', 'security'],
      prominent: ['Elementor/Divi page builders', 'plugin maintenance', 'hosting fees', 'PageSpeed'],
      relevant: ['WooCommerce', 'Yoast', 'WP Rocket', 'headless WordPress'],
    },
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify',
    type: 'SoftwareApplication',
    pillarHref: '/services/ecommerce',
    attributes: {
      popular: ['app costs', 'slow theme', 'conversion rate', 'headless'],
      prominent: ['Dawn theme', 'Liquid', 'app tax', 'Core Web Vitals'],
      relevant: ['Hydrogen', 'Storefront API', 'Shopify Plus', 'checkout'],
    },
  },
  woocommerce: {
    id: 'woocommerce',
    name: 'WooCommerce',
    type: 'SoftwareApplication',
    pillarHref: '/services/woocommerce',
    attributes: {
      popular: ['slow', 'plugin cost', 'hosting'],
      prominent: ['plugin dependency conflicts', 'checkout speed', 'maintenance burden'],
      relevant: ['WordPress', 'headless commerce', 'payment gateways'],
    },
  },
  webflow: {
    id: 'webflow',
    name: 'Webflow',
    type: 'SoftwareApplication',
    pillarHref: '/services/webflow',
    attributes: {
      popular: ['too expensive', 'migration cost', 'CMS limits', 'hosting fees'],
      prominent: ['10,000 item CMS cap', 'localization add-on cost', 'no server-side logic', 'uptime incidents'],
      relevant: ['interactions', 'Wized/Memberstack', 'export code', 'Next.js migration'],
    },
  },
  wix: {
    id: 'wix',
    name: 'Wix',
    type: 'SoftwareApplication',
    pillarHref: '/services/wix',
    attributes: {
      popular: ['slow', 'SEO limitations', 'migration'],
      prominent: ['locked robots/schema control', 'Core Web Vitals', 'no SSR'],
      relevant: ['templates', 'Velo', 'code ownership'],
    },
  },
  squarespace: {
    id: 'squarespace',
    name: 'Squarespace',
    type: 'SoftwareApplication',
    pillarHref: '/services/squarespace',
    attributes: {
      popular: ['bad for SEO', 'too slow', 'migration cost'],
      prominent: ['template ceiling', 'limited code injection', 'no markup/schema control'],
      relevant: ['Fluid Engine', 'commerce', 'custom code'],
    },
  },
  gohighlevel: {
    id: 'gohighlevel',
    name: 'GoHighLevel',
    type: 'SoftwareApplication',
    pillarHref: '/services/gohighlevel',
    attributes: {
      popular: ['slow website', 'keep CRM replace site', 'agency'],
      prominent: ['funnel/site speed', 'CRM + automations retained', 'API/webhooks'],
      relevant: ['SaaS mode', 'white-label', 'Next.js front-end'],
    },
  },
  'custom-engineering': {
    id: 'custom-engineering',
    name: 'Custom Engineering',
    type: 'Service',
    pillarHref: '/services/custom-engineering',
    attributes: {
      popular: ['custom software cost', 'build vs buy', 'ownership'],
      prominent: ['SaaS/dashboards/APIs', 'RBAC auth', 'data layer', 'Vercel edge'],
      relevant: ['Stripe', 'AI integration', 'multi-tenant', 'GraphQL/REST'],
    },
  },
  'core-web-vitals': {
    id: 'core-web-vitals',
    name: 'Core Web Vitals',
    type: 'Thing',
    attributes: {
      popular: ['pagespeed score', 'why is my site slow', 'speed up website'],
      prominent: ['LCP', 'CLS', 'INP', 'mobile performance'],
      relevant: ['SEO ranking factor', 'hosting', 'image optimization'],
    },
    sameAs: ['https://web.dev/vitals/'],
  },
  'headless-commerce': {
    id: 'headless-commerce',
    name: 'Headless Commerce',
    type: 'Thing',
    attributes: {
      popular: ['what is headless commerce', 'cost', 'conversion'],
      prominent: ['decoupled frontend', 'Storefront API', 'speed'],
      relevant: ['Universal Commerce Protocol', 'Shopify Hydrogen', 'PWA'],
    },
  },
  aeo: {
    id: 'aeo',
    name: 'Answer Engine Optimization (AEO/GEO)',
    type: 'Thing',
    pillarHref: '/services/ai-seo',
    attributes: {
      popular: ['get cited by ChatGPT', 'AI search', 'show up in AI overviews'],
      prominent: ['llms.txt', 'structured data', 'speakable', 'entity trust'],
      relevant: ['Perplexity', 'Claude', 'Google AI Overviews', 'agentic browsing'],
    },
  },
  'saas-cost': {
    id: 'saas-cost',
    name: 'SaaS Cost Reduction',
    type: 'Thing',
    attributes: {
      popular: ['cut SaaS bill', 'subscription cost', 'build vs buy'],
      prominent: ['3-year TCO', 'own the code', 'price increases'],
      relevant: ['CRM', 'plugin fees', 'hosting'],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CLUSTERS: pillar → supporting content, with horizontal adjacency
// ─────────────────────────────────────────────────────────────────────────────

export const clusters: Cluster[] = [
  {
    id: 'wordpress',
    label: 'WordPress → Custom Migration',
    pillarHref: '/services/wordpress-migration',
    entityIds: ['wordpress', 'nextjs'],
    relatedClusterIds: ['woocommerce', 'custom', 'migration', 'performance'],
    postIds: [
      'wordpress-april-2026-evidence', 'divi-theme-slow', 'cloudflare-emdash-wordpress-replacement',
      'wordpress-migration-cost', 'how-to-migrate-wordpress-to-nextjs', 'wordpress-vs-nextjs',
      'why-we-chose-nextjs-over-wordpress-2026', 'nextjs-sanity-stack', 'wordpress-vs-custom-code-real-cost-3-years',
      'wordpress-ai-security-risk-2026', 'wordpress-plugin-security-2026', 'elementor-kills-seo',
      'wordpress-plugins-destroy-speed', 'wordpress-traffic-drop-speed', 'how-to-fix-slow-wordpress',
      // Market-share research: the WordPress peak is the reason a migration
      // conversation is happening at all, so it belongs with the migration cluster.
      'cms-market-share-2026',
    ],
  },
  {
    id: 'shopify',
    label: 'Shopify / E-commerce',
    pillarHref: '/services/ecommerce',
    entityIds: ['shopify', 'headless-commerce'],
    relatedClusterIds: ['woocommerce', 'ecommerce-strategy', 'custom', 'performance'],
    postIds: [
      'shopify-store-speed-optimization', 'shopify-stocky-sunset-date-2026', 'shopify-vs-custom-website',
      'shopify-app-costs-real-monthly-bill', 'shopify-dawn-theme-slow', 'shopify-headless',
      'shopify-plus-still-slow', 'shopify-slow-losing-sales', 'shopify-conversion-rate-speed-fix',
    ],
  },
  {
    id: 'woocommerce',
    label: 'WooCommerce Migration',
    pillarHref: '/services/woocommerce',
    serviceOwned: true,
    entityIds: ['woocommerce', 'wordpress'],
    relatedClusterIds: ['wordpress', 'shopify', 'performance'],
    postIds: ['woocommerce-vs-custom-website', 'woocommerce-too-slow', 'woocommerce-migration-cost', 'woocommerce-low-conversion-rate'],
  },
  {
    id: 'webflow',
    label: 'Webflow Migration',
    pillarHref: '/services/webflow',
    entityIds: ['webflow', 'nextjs'],
    relatedClusterIds: ['wix', 'squarespace', 'custom', 'migration'],
    postIds: [
      'webflow-user-accounts-sunset-date-2026', 'leaving-webflow-2026', 'webflow-vs-custom-website',
      'webflow-migration-cost', 'webflow-true-cost',
    ],
  },
  {
    id: 'wix',
    label: 'Wix Migration',
    pillarHref: '/services/wix',
    serviceOwned: true,
    entityIds: ['wix', 'nextjs'],
    relatedClusterIds: ['webflow', 'squarespace', 'custom'],
    postIds: ['wix-too-slow', 'wix-vs-custom-website', 'wix-migration-cost', 'is-wix-bad-for-seo'],
  },
  {
    id: 'squarespace',
    label: 'Squarespace Migration',
    pillarHref: '/services/squarespace',
    entityIds: ['squarespace', 'nextjs'],
    relatedClusterIds: ['webflow', 'wix', 'custom'],
    postIds: ['is-squarespace-bad-for-seo', 'squarespace-vs-custom-website', 'squarespace-migration-cost', 'squarespace-too-slow'],
  },
  {
    id: 'gohighlevel',
    label: 'GoHighLevel Front-end',
    pillarHref: '/services/gohighlevel',
    serviceOwned: true,
    entityIds: ['gohighlevel', 'nextjs'],
    relatedClusterIds: ['custom', 'agency', 'performance'],
    postIds: ['gohighlevel-keep-crm-replace-website', 'gohighlevel-website-speed', 'best-website-builder-for-gohighlevel-agencies', 'gohighlevel-vs-wordpress'],
  },
  {
    id: 'custom',
    label: 'Custom Engineering',
    pillarHref: '/services/custom-engineering',
    entityIds: ['custom-engineering', 'nextjs'],
    relatedClusterIds: ['wordpress', 'shopify', 'pricing', 'agency'],
    caseStudyHrefs: ['/work/emblematic-studio', '/work/ladies-4-jesus', '/work/panda-patches'],
    postIds: [
      'sanity-vs-wordpress', 'sanity-vs-supabase', 'product-catalog-website-without-cart',
      'woocommerce-vs-custom-website',
      'custom-website-5000-whats-included', 'how-long-does-a-custom-website-take', 'do-you-own-your-website',
      'build-vs-buy-software-2026-cost-comparison',
      'ai-built-website-checklist',
      'is-it-cheaper-to-build-your-own-website', 'meta-conversions-api-setup-cost',
      // 4 Oct 2026: what each platform lets you export. Primary hub is this one
      // (ownership is the custom cluster's question); it also sits in `migration`.
      'website-portability',
    ],
  },
  {
    id: 'agency',
    label: 'For Agencies / White-label',
    pillarHref: '/partners',
    entityIds: ['pandacodegen', 'custom-engineering'],
    relatedClusterIds: ['custom', 'pricing'],
    postIds: [
      'top-nextjs-agencies-2026', 'website-developer-agency', 'for-agencies-offer-custom-web-development',
      'top-custom-web-development-agencies-usa-2026', 'pagepro-alternatives', 'cheap-web-developer',
    ],
  },
  // ── Cross-cutting concept clusters (no single pillar) ──
  {
    id: 'performance',
    label: 'Speed & Core Web Vitals',
    // No /services page sells "speed" on its own. The commercial next step for a
    // reader diagnosing a slow site is a measurement of their own site, so the
    // free audit is this cluster's money page.
    pillarHref: '/free-audit',
    entityIds: ['core-web-vitals', 'nextjs'],
    relatedClusterIds: ['seo-aeo', 'wordpress', 'shopify'],
    postIds: [
      'how-to-speed-up-your-website', 'how-to-achieve-100-pagespeed',
      'nextjs-hosting-zero-cost', 'core-web-vitals-explained', 'how-website-speed-affects-seo',
      'aeo-web-performance-glossary',
      // Accessibility sits here for now because it shares this cluster's premise:
      // a page quality you can measure on your own site with a tool, whose next
      // step is a measurement rather than a purchase. It moves to its own cluster
      // once the accessibility glossary and the sector scan exist, because a
      // one-post cluster cannot satisfy link_guard's 2-4 sibling rule.
      'web-accessibility-statistics-2026', 'web-accessibility-glossary',
    ],
  },
  {
    id: 'pricing',
    label: 'Cost & SaaS Spend',
    pillarHref: '/pricing',
    entityIds: ['saas-cost', 'custom-engineering'],
    relatedClusterIds: ['custom', 'migration', 'agency'],
    postIds: [
      'saas-price-increases-2026-tracker', 'saas-software-pricing-audit-2026',
      'how-much-does-a-website-cost', 'website-redesign-cost', 'website-rebuild-cost-2026',
      // 8 Oct 2026: the monthly vendor bill for our usual stack, the running-cost
      // companion to how-much-does-a-website-cost.
      'website-monthly-running-cost',
    ],
  },
  {
    id: 'migration',
    label: 'Migration (cross-platform)',
    // Shares a money page with the `wordpress` cluster on purpose: the
    // cross-platform migration questions still convert into the same service.
    // Declaration order matters -- see getRelatedServiceHrefs.
    pillarHref: '/services/wordpress-migration',
    entityIds: ['nextjs'],
    relatedClusterIds: ['wordpress', 'webflow', 'seo-aeo', 'pricing'],
    caseStudyHrefs: ['/work/ladies-4-jesus', '/work/mycustompatches'],
    postIds: ['will-migrating-hurt-my-seo', 'website-migration-cost-2026', 'woocommerce-migration-cost', 'lovable-site-not-showing-on-google', 'website-portability'],
  },
  {
    id: 'seo-aeo',
    label: 'SEO & Answer Engine Optimization',
    // Repointed 14 Sep 2026. This was '/editorial-policy' -- a policy page --
    // so eleven articles had no commercial destination and passed their
    // internal authority to a standards document. /services/ai-seo does not
    // compete with them: they answer "what is AEO" and "how do I measure it",
    // it answers "who do I hire". The anti-cannibalisation rule at the top of
    // this file is not engaged, because no money page existed for this cluster.
    pillarHref: '/services/ai-seo',
    entityIds: ['aeo', 'core-web-vitals'],
    relatedClusterIds: ['performance', 'migration'],
    postIds: [
      'agentic-browsing-pagespeed-score', 'ai-referral-revenue-2026', 'ai-search-visibility-tracking',
      'aeo-playbook-built-into-every-website', 'google-algorithm-updates',
      'why-competitor-outranks-you', 'will-migrating-hurt-my-seo', 'how-website-speed-affects-seo',
      'lovable-site-not-showing-on-google', 'aeo-web-performance-glossary',
      'what-is-llms-txt',
    ],
  },
  {
    // MERGED 9 Aug 2026: absorbed the former `tracking-ads` cluster (3 posts).
    // It was the only thin cluster with no /services page able to absorb it, and
    // "my ads spend more and return less" is the same reader as "my storefront
    // leaks conversions" -- one operator looking at one funnel, not two topics.
    id: 'ecommerce-strategy',
    label: 'E-commerce Strategy & Ad Tracking',
    pillarHref: '/services/ecommerce',
    entityIds: ['headless-commerce', 'shopify', 'custom-engineering'],
    relatedClusterIds: ['shopify', 'performance', 'custom'],
    postIds: [
      'what-is-headless-commerce', 'which-website-builders-can-go-headless', 'google-universal-commerce-protocol-what-it-means-for-your-store',
      'shopify-slow-losing-sales', 'shopify-conversion-rate-speed-fix',
      // Added 25 Aug 2026. Its Shopify counterpart, shopify-conversion-rate-speed-fix,
      // already sits in both its platform cluster and this one, which is why that post
      // reaches llms.txt and this one did not. The `woocommerce` cluster is
      // serviceOwned, so hubForPost() returns null for anything living only there and
      // the post is invisible to guidesByTopic(). Same gap still applies to
      // woocommerce-too-slow; left alone until Experiment 1 reads on 8 Sep 2026.
      'woocommerce-low-conversion-rate',
      'meta-conversions-api-setup-cost', 'spending-more-on-ads-fewer-orders-tracking',
      'fix-meta-ad-tracking-2026',
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRIMARY HUB ORDER
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Moved here from hubs.ts on 4 Oct 2026 so getRelatedPostIds can tell which
 * cluster is a post's primary hub without importing hubs.ts (which imports this
 * file). hubs.ts re-uses these exact values.
 *
 * When a post belongs to more than one hub cluster, this order decides its
 * canonical parent: earlier wins. Platform clusters outrank cross-cutting
 * concept clusters, because "the Shopify one" is how readers and search
 * queries actually name those posts.
 */
export const HUB_PRIORITY: string[] = [
    'wordpress', 'shopify', 'webflow', 'squarespace',
    'custom', 'agency', 'migration', 'pricing',
    'ecommerce-strategy', 'performance', 'seo-aeo',
];

/**
 * Posts where the priority order picks the wrong parent, with the reason.
 * Kept explicit rather than encoded as more priority rules, because three
 * exceptions are easier to audit than a rule that produces them.
 */
export const PRIMARY_HUB_OVERRIDE: Record<string, string> = {
    // A glossary of AI-search vocabulary that happens to include perf terms.
    'aeo-web-performance-glossary': 'seo-aeo',
    // An indexing problem, not a migration one. The site was never migrated.
    'lovable-site-not-showing-on-google': 'seo-aeo',
    // Ad tracking moved into ecommerce-strategy with the tracking-ads merge.
    'meta-conversions-api-setup-cost': 'ecommerce-strategy',
};

// ─────────────────────────────────────────────────────────────────────────────
// TOPICAL BOUNDARY: defines the site's context vector (what's in/out of scope).
// Used to keep content authoring inside the topical border and avoid dilution.
// ─────────────────────────────────────────────────────────────────────────────

export const topicalBoundary = {
  core: [
    'migrating off slow/templated platforms to custom Next.js',
    'website performance & Core Web Vitals',
    'web development cost, pricing, and SaaS-spend reduction',
    'answer engine optimization (AEO/GEO) & being cited by AI',
    'custom engineering (e-commerce, dashboards, APIs)',
  ],
  // Explicitly OUT of scope; do not create content here (dilutes topical authority).
  excluded: [
    'general marketing/social-media management',
    'paid-ads campaign management (we build tracking, we do not run accounts)',
    'graphic design / branding as a standalone service',
    'generic "how to code" tutorials unrelated to client outcomes',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DERIVATION HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Clusters that contain a given post id. */
export function getClustersForPost(postId: string): Cluster[] {
  return clusters.filter((c) => c.postIds.includes(postId));
}

/**
 * The six pages in title pilot 1 (docs/research/seo-skill-pack-audit-2026-10-04/
 * TITLE_PILOT.md, set up 4 Oct 2026): three tests and their three controls. Their
 * related-card inbound links must not move while the pilot runs, or a change in
 * clicks could come from links rather than titles. Empty this set (or delete it
 * and the check in getRelatedPostIds) once the 28-day read is recorded.
 */
const TITLE_PILOT_PAGES = new Set([
  'agentic-browsing-pagespeed-score', 'how-to-achieve-100-pagespeed', 'squarespace-migration-cost',
  'fix-meta-ad-tracking-2026', 'meta-conversions-api-setup-cost', 'wix-migration-cost',
]);

/**
 * Posts first published while title pilot 1 runs (added 4 Oct 2026). Adding a
 * post to a pilot page's cluster would otherwise move that pilot page's cards
 * twice: the new post would take a card slot on the pilot page itself, and it
 * would show the pilot page as one of its own cards, which is a new inbound
 * link. So pilot pages never see these posts as candidates, and these posts
 * never show a pilot page. Add any post published before the 28-day read here;
 * remove this set with TITLE_PILOT_PAGES.
 */
const POSTS_ADDED_DURING_PILOT = new Set(['is-wix-bad-for-seo', 'gohighlevel-vs-wordpress', 'sanity-vs-wordpress', 'sanity-vs-supabase', 'product-catalog-website-without-cart', 'website-monthly-running-cost']);

/** Cards RelatedPosts shows by default (its maxPosts). Used only by the pilot guard. */
const RELATED_CARDS_SHOWN = 3;

/**
 * A post's primary hub cluster, resolved the same way as hubForPost in hubs.ts
 * (override first, then HUB_PRIORITY), or undefined for service-owned posts.
 */
function primaryHubCluster(postId: string): Cluster | undefined {
  const override = PRIMARY_HUB_OVERRIDE[postId];
  if (override) return clusters.find((c) => c.id === override);
  for (const id of HUB_PRIORITY) {
    const cluster = clusters.find((c) => c.id === id);
    if (cluster?.postIds.includes(postId)) return cluster;
  }
  return undefined;
}

/**
 * FNV-1a, 32-bit. A stable, dependency-free hash used only to order ties in
 * getRelatedPostIds. Same input, same output, on the server and in the browser.
 */
function stableHash(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/**
 * Relationship-ranked related posts. Scores every candidate by the number of
 * clusters it SHARES with the source post (true topical proximity), then breaks
 * ties with a stable hash of the source and candidate ids. Replaces
 * category-flat + slice().
 *
 * WHY NOT RECENCY (changed 4 Oct 2026). Ties used to go to the newest post. In a
 * big cluster every sibling ties on shared-cluster count, so the same few newest
 * posts took the related-card slots on every page in that cluster: four posts
 * got 16 card links each while 37 of 88 got none (SEO audit, F section 1.4, M2).
 * The hash keeps relevance first and still gives each page a fixed, repeatable
 * list, but the tie order differs from page to page, so the links spread across
 * the cluster instead of piling onto its newest members. `orderedAllIds` is
 * still the candidate list; only its order no longer decides ties.
 *
 * @param postId        the current post
 * @param orderedAllIds all post ids (caller passes blogPosts ids)
 * @param max           how many to return
 */
export function getRelatedPostIds(postId: string, orderedAllIds: string[], max = 3): string[] {
  const sourceClusters = new Set(getClustersForPost(postId).map((c) => c.id));

  // Pilot pages skip posts added during the pilot; see POSTS_ADDED_DURING_PILOT.
  const candidateIds = TITLE_PILOT_PAGES.has(postId)
    ? orderedAllIds.filter((id) => !POSTS_ADDED_DURING_PILOT.has(id))
    : orderedAllIds;
  const scored = candidateIds
    .filter((id) => id !== postId)
    .map((id, recencyIndex) => {
      const shared = getClustersForPost(id).filter((c) => sourceClusters.has(c.id)).length;
      return { id, shared, recencyIndex, tie: stableHash(`${postId}|${id}`) };
    });

  const byRecency = [...scored].sort((a, b) => (b.shared - a.shared) || (a.recencyIndex - b.recencyIndex));
  const byHash = [...scored].sort((a, b) => (b.shared - a.shared) || (a.tie - b.tie) || a.id.localeCompare(b.id));

  // While the title pilot runs, pilot pages must keep exactly the related-card
  // links they had, so the pilot measures the title change and not a change in
  // internal links. Pilot pages are left out of the hash ordering, and a page
  // that used to SHOW a pilot card keeps its old recency list. "Show" mirrors
  // RelatedPosts: the top `max` re-sorted so primary-hub mates come first, then
  // the first RELATED_CARDS_SHOWN. Remove with the pilot (TITLE_PILOT_PAGES).
  const hubMates = new Set(primaryHubCluster(postId)?.postIds ?? []);
  const shown = (ids: string[]) =>
    ids.slice(0, max)
      .sort((a, b) => Number(hubMates.has(b)) - Number(hubMates.has(a)))
      .slice(0, RELATED_CARDS_SHOWN);
  const oldIds = byRecency.map((s) => s.id);
  if (POSTS_ADDED_DURING_PILOT.has(postId)) {
    return byHash.map((s) => s.id).filter((id) => !TITLE_PILOT_PAGES.has(id)).slice(0, max);
  }
  if (shown(oldIds).some((id) => TITLE_PILOT_PAGES.has(id))) return oldIds.slice(0, max);
  return byHash.map((s) => s.id).filter((id) => !TITLE_PILOT_PAGES.has(id)).slice(0, max);
}

/** All service pillar hrefs known to the map (deduped, in declaration order). */
export const servicePillarHrefs: string[] = Array.from(
  new Set(clusters.map((c) => c.pillarHref).filter((h): h is string => !!h && h.startsWith('/services')))
);

/**
 * Returns service pillar hrefs ordered by topical adjacency to the current
 * service. The current service's related clusters come first (closest topical
 * neighbours), then the rest. Drives RelatedServicesGrid ordering instead of a
 * static array.
 */
export function getRelatedServiceHrefs(currentHref: string): string[] {
  const current = clusters.find((c) => c.pillarHref === currentHref);
  const related = current
    ? current.relatedClusterIds
        .map((id) => clusters.find((c) => c.id === id)?.pillarHref)
        .filter((h): h is string => !!h && h.startsWith('/services') && h !== currentHref)
    : [];

  const rest = servicePillarHrefs.filter((h) => h !== currentHref && !related.includes(h));
  return [...related, ...rest];
}
