import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.pandacodegen.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
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
      // Additional AI index / training crawlers (synced with pandapatches for full AEO coverage)
      { userAgent: 'CCBot', allow: '/' },                   // Common Crawl (feeds many LLM training sets)
      { userAgent: 'Applebot-Extended', allow: '/' },       // Apple Intelligence training
      { userAgent: 'Meta-ExternalAgent', allow: '/' },      // Meta AI
      { userAgent: 'cohere-ai', allow: '/' },               // Cohere
      { userAgent: 'Amazonbot', allow: '/' },               // Amazon (Alexa / AI)
      { userAgent: 'Bytespider', allow: '/' },              // ByteDance / TikTok
      { userAgent: 'Bravebot', allow: '/' },                // Brave Search index (powers Claude's web search)
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
