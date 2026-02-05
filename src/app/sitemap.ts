import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'

type RouteConfig = {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pandacodegen.com' // ✅ Correct Domain
  const lastModified = new Date()

  // SEO Strategy: Prioritize Money Pages
  const routes: RouteConfig[] = [
    // 1. Core Business Pages (Highest Priority)
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' }, // Bumped Contact to 0.9 (Conversion Goal)

    // 2. Service Pillars (High Priority)
    { path: '/services/wordpress-migration', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/ecommerce', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/custom-engineering', priority: 0.8, changeFrequency: 'weekly' },

    // 3. Dynamic Content (Medium Priority - Updates Often)
    { path: '/work', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },

    // 4. Boring Stuff (Low Priority)
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  ]

  // Static page entries
  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Blog post entries — auto-generated from blog.ts
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}