import type { ServiceFaq } from "@/data/service-faqs";

// Preview answers are written for the sections actually shown on these pages.
// Several older live FAQs refer to absent tables or make unconditional migration
// promises, so they should not be carried into the preview unchanged.
export const previewFaqs: Record<string, [string, string][]> = {
  "custom-engineering": [
    ["What can our team change itself?", "We agree the editable fields during scoping. Content, labels and routine settings can live in an admin screen; new rules, permissions and screens are development work. The handover lists the boundary."],
    ["How long does a custom application take?", "The answer depends on users, data, integrations and review cycles. We plan the first useful release, identify dependencies and put dates in the written proposal before work starts."],
    ["Who owns the code?", "The accepted terms state the licences and handover. Our published ownership position is that source code, design files, CMS models, documentation and production accounts are transferred to or created under client control."],
  ],
  ecommerce: [
    ["Can we keep our current commerce backend?", "Often, yes. Shopify or WooCommerce can remain the system of record when it fits the requirements. We confirm the product, order, payment and API responsibilities before deciding how a custom storefront connects."],
    ["Will the new store be faster?", "We measure representative routes on the current site, set the handover test in writing and verify the agreed pages. The improvement depends on the catalogue, third-party scripts and architecture chosen; a universal load-time claim would not describe your store."],
    ["What happens to checkout and orders?", "The written scope names the checkout provider and order flow. We test variants, payment, confirmation and staff handoff against agreed cases before launch. Data transfer is included only where the proposal says it is."],
  ],
  woocommerce: [
    ["Do products and orders have to move?", "That depends on the architecture. WooCommerce may remain the backend, or records may move to an agreed replacement. We inventory the data first and list exactly what is transferred and reconciled in the scope."],
    ["Can you guarantee our Google rankings?", "No. We map important URLs, carry over relevant metadata and check the new site's rendered pages and redirects. Search engines control crawling, indexing and rankings."],
    ["Can our team still manage the shop?", "Yes, through the admin and editing workflows agreed for the build. We show your team those tasks before handover and document where a new feature would need development."],
  ],
  wix: [
    ["Will we lose our search rankings if we leave Wix?", "No supplier can guarantee rankings. We inventory current addresses, preserve suitable URLs, redirect changed ones and check metadata, forms and Search Console around launch. Search engines decide the outcome."],
    ["Can we still edit the website?", "Yes. The proposed editor lists the text, images, business details and collection items your team can change. We demonstrate the agreed workflow and train your editors at handover."],
    ["How long does a Wix move take?", "The published planning ranges are 1 to 2 weeks for Starter, 2 to 4 for Growth and 3 to 6 for Scale. Content, apps, approvals and export limits set the actual dates in your proposal."],
  ],
  squarespace: [
    ["Can we still edit our pages?", "Yes, for the fields and collections agreed in the scope. We show you the new editor, train your team and document what requires development."],
    ["Will our design transfer exactly?", "We review each page and agree what stays, changes or is removed. The replacement is built and checked against the approved design and content; some third-party Squarespace features may need a different implementation."],
    ["What does a Squarespace migration cost?", "Published website starting points are $1,500 for Starter, $3,500 for Growth and $5,000 for Scale. Content volume, commerce and integrations determine the written quote. A small store is not automatically Scale."],
  ],
  webflow: [
    ["Can you improve our Webflow site without moving it?", "Yes, when a review identifies a feasible change within Webflow. We scope improvement work separately; the $1,500 published starting point is for a custom build, not every repair."],
    ["What happens to Webflow CMS content?", "We map the collections, fields, media and URLs included in the proposed move, then validate transferred records and rendered pages. A code export alone does not reproduce CMS, forms or restricted content."],
    ["Will a migration preserve our rankings?", "No one can promise that. We agree a URL and metadata plan, test redirects and rendered pages, then monitor after launch. Those controls reduce avoidable errors; search engines decide indexing and ranking."],
  ],
  gohighlevel: [
    ["Do we have to leave GoHighLevel?", "No. A custom public site can send agreed data to your existing GHL account while your team keeps using the CRM. We verify that the required account access and integration options are available before committing to that architecture."],
    ["Will our automations keep working?", "We inventory the workflows affected by the website, test forms and bookings with agreed fixtures, and check live events after cutover. The proposal names which automations are in scope; uninterrupted operation cannot be promised without that review."],
    ["What does the integration cost?", "A focused website starts at $1,500. More pages, forms and automation work change the scope. Your quote lists the build price and any ongoing GHL, hosting or other provider charges separately."],
  ],
  "ai-seo": [
    ["Is AI SEO a monthly service?", "Yes. The focused monthly starting scope is $500 and includes agreed research, monitoring, one implemented improvement, a report and a review. A larger backlog or dashboard is quoted separately; the retainer is optional."],
    ["Can you guarantee citations or rankings?", "No. Search and AI systems choose their sources. We agree the work and checks, then report the changes and available measurements with their limits."],
    ["What evidence can you show?", "We can show first-party visibility reports and the order-source tracking used by Panda Patches. Impressions are not visits or sales, and Panda Patches shares an owner with PandaCodeGen, so it is not independent client proof."],
  ],
};

/**
 * A service page's visible FAQs in the shape ServicePageSchema expects. The
 * live /services pages build their FAQPage data from this, the same list the
 * redesign shows, so the structured data never describes a hidden answer.
 */
export function previewServiceFaqs(slug: string): ServiceFaq[] {
  return (previewFaqs[slug] ?? []).map(([q, a]) => ({ q, a }));
}
