import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.pandacodegen.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'], // Standard Next.js blocklist
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}