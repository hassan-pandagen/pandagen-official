import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'

type RouteConfig = {
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pandacodegen.com' // ✅ Correct Domain

  const routes: RouteConfig[] = [
    // 1. Core Business Pages
    { path: '', lastModified: '2026-03-22', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services', lastModified: '2026-03-22', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/pricing', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', lastModified: '2026-03-23', changeFrequency: 'monthly', priority: 0.7 },

    // 2. Service Pillars
    { path: '/services/wordpress-migration', lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services/ecommerce', lastModified: '2026-03-23', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services/custom-engineering', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.8 },

    // 3. Platform-Specific Service Pages
    { path: '/services/woocommerce', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/wix', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/services/squarespace', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/services/webflow', lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/gohighlevel', lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8 },

    // Agency Partnerships
    { path: '/partners', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.6 },

    // 4. Dynamic Content
    { path: '/work', lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/work/mycustompatches', lastModified: '2026-02-15', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/work/panda-patches', lastModified: '2026-02-15', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/work/enterprise-ops', lastModified: '2026-02-15', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/work/panda-codelab', lastModified: '2026-02-15', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about', lastModified: '2026-03-22', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about/hassan', lastModified: '2026-03-01', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about/imran', lastModified: '2026-03-01', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/blog', lastModified: '2026-03-22', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/ai-info', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ai-info/pricing-and-guarantees', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ai-info/migration-services', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ai-info/case-studies', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/ai-info/team-and-company', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/ai-info/competitor-comparison', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/manifesto', lastModified: '2026-04-19', changeFrequency: 'monthly', priority: 0.8 },

    // 5. Legal Pages
    { path: '/privacy', lastModified: '2026-01-15', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', lastModified: '2026-01-15', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', lastModified: '2026-01-15', changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Static page entries
  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Blog post entries — auto-generated from blog.ts
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date('2026-03-01'),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
