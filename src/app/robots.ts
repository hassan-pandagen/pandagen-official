import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.pandacodegen.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // Block API routes and Next.js internals
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}