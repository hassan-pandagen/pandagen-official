import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'

type RouteConfig = {
  path: string
  lastModified: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pandacodegen.com' // ✅ Correct Domain

  const routes: RouteConfig[] = [
    // 1. Core Business Pages
    { path: '', lastModified: '2026-03-12' },
    { path: '/services', lastModified: '2026-03-01' },
    { path: '/pricing', lastModified: '2026-03-01' },
    { path: '/contact', lastModified: '2026-03-01' },

    // 2. Service Pillars
    { path: '/services/wordpress-migration', lastModified: '2026-03-01' },
    { path: '/services/ecommerce', lastModified: '2026-03-01' },
    { path: '/services/custom-engineering', lastModified: '2026-03-01' },

    // 3. Platform-Specific Service Pages
    { path: '/services/woocommerce', lastModified: '2026-03-01' },
    { path: '/services/wix', lastModified: '2026-03-01' },
    { path: '/services/squarespace', lastModified: '2026-03-01' },
    { path: '/services/webflow', lastModified: '2026-03-01' },
    { path: '/services/gohighlevel', lastModified: '2026-03-01' },

    // Agency Partnerships
    { path: '/partners', lastModified: '2026-03-01' },

    // 4. Dynamic Content
    { path: '/work', lastModified: '2026-03-01' },
    { path: '/work/mycustompatches', lastModified: '2026-02-15' },
    { path: '/work/panda-patches', lastModified: '2026-02-15' },
    { path: '/work/enterprise-ops', lastModified: '2026-02-15' },
    { path: '/work/panda-codelab', lastModified: '2026-02-15' },
    { path: '/about', lastModified: '2026-03-01' },
    { path: '/about/hassan', lastModified: '2026-03-01' },
    { path: '/about/imran', lastModified: '2026-03-01' },
    { path: '/blog', lastModified: '2026-03-12' },

    // 5. Legal Pages
    { path: '/privacy', lastModified: '2026-01-15' },
    { path: '/terms', lastModified: '2026-01-15' },
    { path: '/cookies', lastModified: '2026-01-15' },
  ]

  // Static page entries
  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastModified),
  }))

  // Blog post entries — auto-generated from blog.ts
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date('2026-03-01'),
  }))

  return [...staticEntries, ...blogEntries]
}
