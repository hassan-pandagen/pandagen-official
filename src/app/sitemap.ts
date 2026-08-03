import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'
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
    { path: '', changeFrequency: 'weekly', priority: 1.0 , lastModified: '2026-08-03' },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 , lastModified: '2026-08-03' },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-08-03' },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/free-audit', changeFrequency: 'monthly', priority: 0.7 },

    // 2. Service Pillars
    { path: '/services/wordpress-migration', changeFrequency: 'monthly', priority: 0.9 , lastModified: '2026-08-03' },
    { path: '/services/ecommerce', changeFrequency: 'monthly', priority: 0.9 , lastModified: '2026-08-03' },
    { path: '/services/custom-engineering', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-08-03' },

    // 3. Platform-Specific Service Pages
    { path: '/services/woocommerce', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-08-03' },
    { path: '/services/wix', changeFrequency: 'monthly', priority: 0.7 , lastModified: '2026-08-03' },
    { path: '/services/squarespace', changeFrequency: 'monthly', priority: 0.7 , lastModified: '2026-08-03' },
    { path: '/services/webflow', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-08-03' },
    { path: '/services/gohighlevel', changeFrequency: 'monthly', priority: 0.8 , lastModified: '2026-08-03' },

    // Agency Partnerships
    { path: '/partners', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-08-03' },

    // 4. Dynamic Content
    { path: '/work', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/work/mycustompatches', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/work/panda-patches', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/work/enterprise-ops', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/work/panda-codelab', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about/hassan', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-08-03' },
    { path: '/about/imran', changeFrequency: 'monthly', priority: 0.6 , lastModified: '2026-08-03' },
    { path: '/ai-info', changeFrequency: 'monthly', priority: 0.7 , lastModified: '2026-08-03' },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
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

  // French and German entries for the five translated pages. The English
  // entries above are untouched; these are appended, never substituted.
  const localePriority: Record<LocalizedPage, number> = {
    home: 0.9,
    services: 0.8,
    pricing: 0.7,
    contact: 0.6,
    about: 0.6,
  }

  const localeEntries = localizedPages.flatMap((page: LocalizedPage) =>
    (['fr', 'de'] as const).map((locale) => ({
      url: `${baseUrl}${localeRoutes[page][locale]}`,
      changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: localePriority[page],
    }))
  )

  return [...staticEntries, ...localeEntries, ...blogEntries]
}
