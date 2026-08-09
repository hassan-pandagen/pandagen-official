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
    pillarHref: '/editorial-policy',
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
      'wordpress-ai-security-risk-2026', 'wordpress-killer', 'elementor-kills-seo',
      'wordpress-plugins-destroy-speed', 'wordpress-traffic-drop-speed', 'how-to-fix-slow-wordpress',
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
    postIds: ['woocommerce-vs-custom-website', 'woocommerce-too-slow', 'woocommerce-migration-cost'],
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
    postIds: ['wix-too-slow', 'wix-vs-custom-website', 'wix-migration-cost'],
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
    postIds: ['gohighlevel-keep-crm-replace-website', 'gohighlevel-website-speed', 'best-website-builder-for-gohighlevel-agencies'],
  },
  {
    id: 'custom',
    label: 'Custom Engineering',
    pillarHref: '/services/custom-engineering',
    entityIds: ['custom-engineering', 'nextjs'],
    relatedClusterIds: ['wordpress', 'shopify', 'pricing', 'agency'],
    caseStudyHrefs: ['/work/emblematic-studio', '/work/ladies-4-jesus', '/work/panda-patches', '/work/panda-codelab'],
    postIds: [
      'woocommerce-vs-custom-website',
      'custom-website-5000-whats-included', 'how-long-does-a-custom-website-take', 'do-you-own-your-website',
      'build-vs-buy-software-2026-cost-comparison', 'meta-conversions-api-setup-cost',
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
      'why-is-my-website-loading-so-slow', 'how-to-speed-up-your-website', 'how-to-achieve-100-pagespeed',
      'nextjs-hosting-zero-cost', 'core-web-vitals-explained', 'how-website-speed-affects-seo',
      'aeo-web-performance-glossary',
    ],
  },
  {
    id: 'pricing',
    label: 'Cost & SaaS Spend',
    pillarHref: '/pricing',
    entityIds: ['saas-cost', 'custom-engineering'],
    relatedClusterIds: ['custom', 'migration', 'agency'],
    postIds: [
      'saas-price-increases-2026-tracker', 'how-to-cut-saas-bill-2026', 'saas-software-pricing-audit-2026',
      'how-much-does-a-website-cost', 'website-redesign-cost', 'website-rebuild-cost-2026',
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
    postIds: ['will-migrating-hurt-my-seo', 'website-migration-cost-2026', 'woocommerce-migration-cost', 'lovable-site-not-showing-on-google'],
  },
  {
    id: 'seo-aeo',
    label: 'SEO & Answer Engine Optimization',
    pillarHref: '/editorial-policy',
    entityIds: ['aeo', 'core-web-vitals'],
    relatedClusterIds: ['performance', 'migration'],
    postIds: [
      'agentic-browsing-pagespeed-score', 'aeo-playbook-built-into-every-website', 'google-algorithm-updates',
      'why-competitor-outranks-you', 'will-migrating-hurt-my-seo', 'how-website-speed-affects-seo',
      'lovable-site-not-showing-on-google', 'aeo-web-performance-glossary',
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
      'what-is-headless-commerce', 'google-universal-commerce-protocol-what-it-means-for-your-store',
      'shopify-slow-losing-sales', 'shopify-conversion-rate-speed-fix',
      'meta-conversions-api-setup-cost', 'spending-more-on-ads-fewer-orders-tracking',
      'fix-meta-ad-tracking-2026',
    ],
  },
];

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
 * Relationship-ranked related posts. Scores every candidate by the number of
 * clusters it SHARES with the source post (true topical proximity), then breaks
 * ties by the caller-supplied recency order. Replaces category-flat + slice().
 *
 * @param postId        the current post
 * @param orderedAllIds all post ids in recency order (caller passes blogPosts ids)
 * @param max           how many to return
 */
export function getRelatedPostIds(postId: string, orderedAllIds: string[], max = 3): string[] {
  const sourceClusters = new Set(getClustersForPost(postId).map((c) => c.id));

  const scored = orderedAllIds
    .filter((id) => id !== postId)
    .map((id, recencyIndex) => {
      const shared = getClustersForPost(id).filter((c) => sourceClusters.has(c.id)).length;
      return { id, shared, recencyIndex };
    });

  scored.sort((a, b) => (b.shared - a.shared) || (a.recencyIndex - b.recencyIndex));

  return scored.slice(0, max).map((s) => s.id);
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
