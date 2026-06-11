import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.pandacodegen.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image'],
        disallow: ['/api/', '/_next/data/'],
      },
      // AI / LLM crawlers — allow all content for GEO (generative engine optimization)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Agent', allow: '/' },
      { userAgent: 'Gemini-Web', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
