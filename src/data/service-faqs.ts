/**
 * Service-page FAQs, keyed by slug, in the order each page renders them.
 *
 * These lived as a local array inside each service PageContent.tsx. They moved
 * here on 28 Aug 2026 so the server page.tsx can emit FAQPage JSON-LD from the
 * same source the client renders, which is the only way to guarantee the schema
 * never asserts an answer a visitor cannot see. Same reason as pricing-faqs.ts.
 *
 * This is not a Google play. The FAQ rich result stopped appearing in Search on
 * 7 May 2026 and Google removed the documentation on 15 June 2026. Bing,
 * Perplexity and the RAG crawlers still read FAQPage, and they are the audience
 * these pages are written for.
 *
 * Answers must stay visible on the page. See components/ui/FAQAccordion.tsx for
 * the history behind that rule.
 *
 * 6 Sep 2026: the wix, squarespace, webflow, gohighlevel and custom-engineering
 * sets were rewritten in plain buyer language. Constraint first (price, weeks,
 * what you own), then one or two sentences of explanation, the way Panda Patches
 * says "no mold fees". The earlier versions were accurate and unquotable: every
 * answer resolved to "depends on the written proposal". Every figure here is
 * from company-facts.ts or a timeline already published elsewhere on the site.
 * No third-party rate is quoted, because this array is also schema. Four
 * questions were added to match queries buyers actually type: a cost question
 * for Wix, and a how-long question for Squarespace, Webflow and GoHighLevel.
 *
 * 9 Sep 2026: every tier sentence was moved onto the ladder in company-facts.ts
 * COMMERCIAL, which pricing-faqs.ts already follows. Starter is "up to 7 pages",
 * never "5 to 7", because the site states in several places that there is no
 * minimum project size and a five-page floor contradicts it. Growth is 8 to 20
 * and Scale is more than 20, so the boundaries touch: the old 5-to-7 / 10-to-20 /
 * 30-plus wording left a buyer with 8 pages, or 25, unable to place themselves.
 * Scale is "from $5,000", and the old Scale+ tier is gone, since a fourth named
 * tier that only says "bigger" is answered better by the phone number. Answers
 * that list all three tiers end with the same invitation to call, worded exactly
 * as in COMMERCIAL. It repeats across service pages on purpose; a reader only
 * ever sees one page. Prices did not change. Change company-facts.ts first,
 * then here, never here alone.
 *
 * 9 Sep 2026, second pass: the ecommerce, woocommerce and wordpress-migration
 * sets were missed by the 6 Sep plain-language rewrite and still read like a
 * contract. "Staged cutover with a documented rollback path" is now "we switch
 * it over in stages, and if anything is wrong we switch back"; "301 redirects"
 * and "URL-level redirect mapping" are now "every old web address forwards to
 * its new page"; "like-for-like scope" is now "the same amount of work". Only
 * answers changed. No question, number, price, timeline or the closing
 * invitation to call was touched.
 */
export interface ServiceFaq {
  q: string;
  a: string;
}
