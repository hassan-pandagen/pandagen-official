import { MetadataRoute } from 'next'

/**
 * RFC 9309: a crawler matching a NAMED group ignores the `*` group entirely.
 * If you ever add a named group (e.g. GPTBot) with only a Disallow, that bot
 * silently loses the blanket Allow below. Any named group must restate ALL rules.
 *
 * Current policy is deliberate: every crawler, including AI crawlers, is allowed
 * everything except /api/ and /_next/data/. That covers search and citation
 * crawlers, on-demand user fetchers, and training-corpus crawlers alike, and
 * allowing training crawlers is a visibility choice: models that know the company
 * can name it.
 *
 * An earlier draft enumerated ~26 AI user-agents with identical rules. Dropped on
 * purpose. It is a no-op for every crawler, since the `*` group already allows
 * them, and it creates a second rule block that must stay byte-identical with this
 * one forever, which is the drift class this project has spent weeks deleting from
 * the site. It also asserted several user-agent tokens that could not be verified
 * at vendor documentation, which is false precision in a file whose only job is to
 * be read.
 *
 * Google-Extended governs Gemini and Vertex training and grounding. It has no
 * effect on Google AI Overviews, which run on the regular Googlebot index and
 * respect the normal snippet controls. Allowed here, but it is not an AEO lever.
 *
 * The human-readable version of this policy lives in /llms.txt, which is where
 * buyers and AI-policy checkers actually look. Keep the two in agreement.
 *
 * If machine-visible explicit allows are ever genuinely needed, `rules` accepts an
 * array and `userAgent` accepts a string[], so a verified set could ship from here
 * without comments. Prefer minimal-plus-comment: no drift surface.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.pandacodegen.com'

  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/_next/data/'] }],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
