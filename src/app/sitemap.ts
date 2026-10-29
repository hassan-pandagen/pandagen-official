import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'
import { MIGRATION_PROJECT_DETAILS } from '@/data/migration-projects'
import { hubs, hubPostIds } from '@/data/hubs'
import { localizedPages, routes as localeRoutes, type LocalizedPage } from '@/lib/i18n/config'

type RouteConfig = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  /**
   * Date this route's content last changed substantively, as YYYY-MM-DD.
   * Blog posts get this automatically from `lastModified` in blog.ts; static
   * routes have to declare it, and without it Google gets no recrawl signal at
   * all. Only set it when the page genuinely changed. A date that moves without
   * the content moving is worse than no date, because Google stops trusting the
   * field across the whole sitemap.
   */
  lastModified?: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pandacodegen.com' // ✅ Correct Domain

  const routes: RouteConfig[] = [
    // 1. Core Business Pages
    { path: '', changeFrequency: 'weekly', priority: 1.0 , lastModified: '2026-10-11' },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 , lastModified: '2026-10-10' },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-10-08' },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/free-audit', changeFrequency: 'monthly', priority: 0.7 },

    { path: '/services/cms-development', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-10-11' },
    { path: '/services/backend-development', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-10-11' },

    // 2. Service Pillars
    { path: '/services/wordpress', changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-10-11' },
    { path: '/services/small-business-website-design', changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-10-12' },
    { path: '/services/medical-website-design', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-10-12' },
    { path: '/services/wordpress-migration', changeFrequency: 'monthly', priority: 0.9 , lastModified: '2026-10-11' },
    { path: '/services/ecommerce', changeFrequency: 'monthly', priority: 0.9 , lastModified: '2026-10-11' },
    { path: '/services/ai-seo', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-10-11' },
    { path: '/services/custom-engineering', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-10-11' },

    // 3. Platform-Specific Service Pages
    { path: '/services/woocommerce', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-10-11' },
    { path: '/services/wix', changeFrequency: 'monthly', priority: 0.7 , lastModified: '2026-10-11' },
    { path: '/services/squarespace', changeFrequency: 'monthly', priority: 0.7 , lastModified: '2026-10-11' },
    { path: '/services/webflow', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-10-11' },
    { path: '/services/gohighlevel', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-10-11' },

    // Agency Partnerships
    { path: '/partners', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-10-07' },

    // 4. Dynamic Content
    { path: '/work', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-10-08' },
    { path: '/work/mycustompatches', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/work/panda-patches', changeFrequency: 'yearly', priority: 0.6, lastModified: MIGRATION_PROJECT_DETAILS.pandaPatches.contentUpdatedOn },
    { path: '/work/enterprise-ops', changeFrequency: 'yearly', priority: 0.6, lastModified: MIGRATION_PROJECT_DETAILS.enterpriseOps.contentUpdatedOn },
    // Added 28 Aug 2026. Both pages were live, linked from /work and declaring
    // index:true, but had been missed here when they shipped, so the sitemap
    // contradicted their own robots directive. seo-audit.mjs flagged both.
    { path: '/work/emblematic-studio', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/work/ladies-4-jesus', changeFrequency: 'yearly', priority: 0.6, lastModified: '2026-10-08' },
    { path: '/work/saforne', changeFrequency: 'monthly', priority: 0.5, lastModified: '2026-10-08' },
    { path: '/work/medical-template', changeFrequency: 'yearly', priority: 0.4, lastModified: '2026-10-11' },
    { path: '/work/panda-publisher', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/work/sleek-jackets', changeFrequency: 'yearly', priority: 0.4 },
    // Added 30 Sep 2026 with the redesign switch: both are new live pages.
    { path: '/work/northdeck-group', changeFrequency: 'yearly', priority: 0.6 },
    // Confirmed live by the owner on 20 Oct 2026.
    { path: '/work/a-step-above-medical', changeFrequency: 'monthly', priority: 0.5, lastModified: MIGRATION_PROJECT_DETAILS.aStepAboveMedical.contentUpdatedOn },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about/hassan', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-08-03' },
    { path: '/about/imran', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-08-03' },
    { path: '/ai-info', changeFrequency: 'monthly', priority: 0.7 , lastModified: '2026-10-11' },
    { path: '/ai-info/pricing-and-guarantees', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-10-08' },
    { path: '/ai-info/migration-services', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-10-10' },
    { path: '/ai-info/case-studies', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-10-11' },
    { path: '/ai-info/team-and-company', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-10-29' },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8, lastModified: '2026-09-19' },
    { path: '/manifesto', changeFrequency: 'monthly', priority: 0.8 },

    // 5. Legal Pages
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/security', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/editorial-policy', changeFrequency: 'yearly', priority: 0.3 , lastModified: '2026-08-03' },
  ]

  // Static page entries
  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    ...(route.lastModified ? { lastModified: new Date(route.lastModified) } : {}),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Blog post entries are auto-generated from blog.ts.
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    ...(post.lastModified ? { lastModified: new Date(post.lastModified) } : {}),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: 0.7,
  }))

  // Topic hub entries, generated from the taxonomy alongside the routes
  // themselves, so a hub can never exist without being discoverable.
  //
  // lastModified is the newest lastModified among the hub's own posts: a hub
  // page changes exactly when its membership changes or one of its posts is
  // updated. A date that moves without content moving is worse than no date,
  // so this is computed rather than declared.
  const hubEntries = hubs.map((hub) => {
    const memberDates = hubPostIds(hub)
      .map((id) => blogPosts.find((p) => p.id === id)?.lastModified)
      .filter((d): d is string => !!d)
      .sort()

    return {
      url: `${baseUrl}/blog/topic/${hub.slug}`,
      ...(memberDates.length ? { lastModified: new Date(memberDates[memberDates.length - 1]) } : {}),
      changeFrequency: 'weekly' as MetadataRoute.Sitemap[number]['changeFrequency'],
      // Above individual posts (0.7): a hub is the cluster's canonical page and
      // the intended entry point. Below /blog itself (0.8) is deliberate.
      priority: 0.75,
    }
  })

  // French and German entries for the five translated pages. The English
  // entries above are untouched; these are appended, never substituted.
  const localePriority: Record<LocalizedPage, number> = {
    home: 0.9,
    services: 0.8,
    pricing: 0.7,
    contact: 0.6,
    about: 0.6,
  }

  // Substantive offer/hosting corrections, 8 Oct 2026. Contact was unchanged.
  const localeContentDates: Partial<Record<LocalizedPage, string>> = {
    home: '2026-10-08',
    services: '2026-10-08',
    pricing: '2026-10-08',
    about: '2026-10-08',
  }

  const localeEntries = localizedPages.flatMap((page: LocalizedPage) =>
    (['fr', 'de'] as const).map((locale) => ({
      url: `${baseUrl}${localeRoutes[page][locale]}`,
      ...(localeContentDates[page] ? { lastModified: new Date(localeContentDates[page]!) } : {}),
      changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: localePriority[page],
    }))
  )

  return [...staticEntries, ...hubEntries, ...localeEntries, ...blogEntries]
}
