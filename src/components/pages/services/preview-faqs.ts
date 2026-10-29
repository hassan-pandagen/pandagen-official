import { serviceBuyerQuestions } from "@/data/service-buyer-questions";
import { stackServiceFaqs } from "./stack-services";
import { audienceServiceFaqs } from "./audience-services";
import { serviceOwnershipAnswers } from "@/data/service-ownership-answers";
import type { ServiceFaq } from "@/data/service-faqs";

// Preview answers are written for the sections actually shown on these pages.
// Several older live FAQs refer to absent tables or make unconditional migration
// promises, so they should not be carried into the preview unchanged.
const basePreviewFaqs: Record<string, [string, string][]> = {
  ...stackServiceFaqs,
  ...audienceServiceFaqs,
  wordpress: [
    ["Will you build on WordPress if that is what I want?", "Yes. We offer WordPress website design and development when it fits your pages, editing needs and budget. If a custom build would help, we explain why and compare the costs before you choose."],
    ["Do I need to be technical to update my website?", "No. We agree which text, images and pages you will edit, provide written instructions and give you a live demonstration. You speak directly with the founders when you need something explained."],
    ["How much does a WordPress website cost?", "We quote the pages, design, content and integrations your site needs. Your proposal separates the build price from hosting, paid themes or plugins and any ongoing support. We agree the amount before work starts."],
    ["Who handles hosting, backups and updates?", "We agree those responsibilities before launch. Your handover names the accounts, licences, backup arrangements and update tasks. If you want us to handle ongoing work, that support is scoped and priced separately."],
    ["What if I want to move away from WordPress?", "We also offer WordPress migration to a custom build. We first review the pages, content, important URLs, forms and connected tools, then agree what will move and how it will be tested."],
    ["How long does a WordPress website take?", "The pages, design, content and connections determine the schedule. We put the dates and review stages in your proposal, including what we need from you before starting. A custom migration has a separate plan and timeline."],
  ],
  "custom-engineering": [
    ["What does custom software development include?", "We scope the screens, user roles, data and connections needed for a specific job: a customer portal, staff dashboard, reporting tool or web application. The plan includes who can see and change each record, what happens when a connected service fails, and how your team will test the first release. Hosting, usage charges and ongoing support are listed separately."],
    ["What can our team change itself?", "We agree the editable fields during scoping. Content, labels and routine settings can live in an admin screen; new rules, permissions and screens are development work. The handover lists the boundary."],
    ["How long does a custom application take?", "The answer depends on users, data, integrations and review cycles. We plan the first useful release, identify dependencies and put dates in the written proposal before work starts."],
    ["Who owns the code?", "The accepted terms state the licences and handover. Our published ownership position is that source code, design files, CMS models, documentation and production accounts are transferred to or created under client control."],
    ["Can you build an AI assistant from our own information?", "We can scope a customer or staff assistant around approved guides, policies and records. The proposal names which sources it may read, which answers need source links, who can see private material, and when a person should take over. We test the agreed questions and failure cases before launch."],
    ["What belongs in the first release of a SaaS product?", "We begin with the users, the job they need to complete and the records involved. Login, permissions, billing, integrations and administration are included only where that first release needs them; the written plan names acceptance checks and what can wait for real usage."],
  ],
  ecommerce: [
    ["What is included in an ecommerce website build?", "The scope identifies products and variants, category and product pages, search, cart, checkout and the messages customers receive. We agree tax, shipping, discounts, stock and order responsibilities with your team. A headless storefront means a separate customer-facing site connected to a commerce backend such as Shopify or WooCommerce; it is an option when that structure fits your store."],
    ["Can we keep our current commerce backend?", "Often, yes. Shopify or WooCommerce can remain the system of record when it fits the requirements. We confirm the product, order, payment and API responsibilities before deciding how a custom storefront connects."],
    ["Will the new store be faster?", "We measure representative routes on the current site, set the handover test in writing and verify the agreed pages. The improvement depends on the catalogue, third-party scripts and architecture chosen; a universal load-time claim would not describe your store."],
    ["What happens to checkout and orders?", "The written scope names the checkout provider and order flow. We test variants, payment, confirmation and staff handoff against agreed cases before launch. Data transfer is included only where the proposal says it is."],
    ["Does a headless Shopify store replace Shopify checkout?", "No. A separate storefront can change product discovery, pages, cart and the steps before payment while Shopify still manages its hosted checkout, products and orders. We confirm the checkout capabilities available on your plan and list any subscription or app connection in scope."],
    ["Can you improve our current store without rebuilding it?", "Yes, when the issue can be fixed in the current theme, apps or checkout configuration. We inspect the actual product and purchase path first, then quote the smaller change if that solves the problem."],
  ],
  woocommerce: [
    ["What needs special planning in a WooCommerce migration?", "Products, variants, categories, images, customers and order history each need a transfer decision. Subscriptions, saved payment methods, customer logins and extension-specific data require separate checks with the systems involved. We record what moves, what stays and what customers or staff may need to do, then reconcile agreed samples before launch."],
    ["How much does a WooCommerce migration cost?", "A focused store can start at the published $1,500 Starter scope. Catalogue size, data transfer, subscriptions, payment connections and custom checkout work determine the quote. Provider charges and ongoing support are listed separately; the proposal sets the final price."],
    ["Do products and orders have to move?", "That depends on the architecture. WooCommerce may remain the backend, or records may move to an agreed replacement. We inventory the data first and list exactly what is transferred and reconciled in the scope."],
    ["Can you guarantee our Google rankings?", "No. We map important URLs, carry over relevant metadata and check the new site's rendered pages and redirects. Search engines control crawling, indexing and rankings."],
    ["Can our team still manage the shop?", "Yes, through the admin and editing workflows agreed for the build. We show your team those tasks before handover and document where a new feature would need development."],
    ["What happens to subscriptions and saved payment methods?", "We first identify the subscription plugin, billing provider, payment account and what each permits us to export or reconnect. Existing billing dates or saved cards cannot be assumed to transfer automatically. The migration plan states what can continue, whether customers must take action and how renewals are tested before the old path is retired."],
    ["Will we still use WooCommerce after a storefront rebuild?", "That is one option. WooCommerce can remain the backend for products and orders while a new frontend handles what shoppers see. A full move to another commerce system needs a separate data, checkout and staff-workflow plan; we compare both routes before quoting."],
  ],
  wix: [
    ["What happens to Wix content and apps when we migrate?", "We list pages, blog posts, media, CMS collections, contacts, products and orders where relevant, then check the export options available in your account. Wix Bookings, Stores, Members Area and other apps each get a keep, replace or rebuild decision. The quote names manual content work and replacement features, with old URLs mapped to their destination."],
    ["Will we lose our search rankings if we leave Wix?", "No supplier can guarantee rankings. We inventory current addresses, preserve suitable URLs, redirect changed ones and check metadata, forms and Search Console around launch. Search engines decide the outcome."],
    ["Can we still edit the website?", "Yes. The proposed editor lists the text, images, business details and collection items your team can change. We demonstrate the agreed workflow and train your editors at handover."],
    ["How long does a Wix move take?", "The published planning ranges are 1 to 2 weeks for Starter, 2 to 4 for Growth and 3 to 6 for Scale. Content, apps, approvals and export limits set the actual dates in your proposal."],
    ["What happens to Wix Bookings, Stores and Members Area?", "Each is more than a visual page. We inventory the appointments, products, orders, customer access and notifications your business uses, then agree whether to keep the service connected, replace it or rebuild the required behaviour. The quote identifies data exports and manual work."],
    ["Does our Wix site stay available while you build?", "The replacement is reviewed separately before the domain is switched. We agree the launch window, the old account's access and a fallback plan in writing; the exact cutover depends on your domain and connected services."],
  ],
  squarespace: [
    ["What is included in a Squarespace migration plan?", "We review pages, blog content, images, Fluid Engine layouts, Commerce products, forms, Member Areas and Acuity or Squarespace Scheduling where used. We check what your account can export, what needs manual work and which services can stay connected. The plan names domain and DNS changes, metadata, redirects and a demonstration of the new editing workflow."],
    ["Can we still edit our pages?", "Yes, for the fields and collections agreed in the scope. We show you the new editor, train your team and document what requires development."],
    ["Will our design transfer exactly?", "We review each page and agree what stays, changes or is removed. The replacement is built and checked against the approved design and content; some third-party Squarespace features may need a different implementation."],
    ["What does a Squarespace migration cost?", "Published website starting points are $1,500 for Starter, $3,500 for Growth and $5,000 for Scale. Content volume, commerce and integrations determine the written quote. A small store is not automatically Scale."],
    ["Can you move our Squarespace blog and keep old links working?", "We inventory the posts, authors, dates, images and existing URLs, then check what your account exports and what needs cleanup. Suitable addresses are preserved where possible; changed ones get a redirect map and launch tests. Search rankings are outside our control."],
    ["Will our Squarespace appointments or Member Areas still work?", "We review the services, account access, customer data and payment steps involved. The proposal says whether each feature stays connected, moves to another provider or is rebuilt, and who tests it before launch."],
  ],
  webflow: [
    ["Can our team edit the website after leaving Webflow?", "Yes. We build the agreed editing fields into a CMS such as Sanity, covering text, images, articles and other repeating content your team manages. Next.js runs the public website; the CMS is where your editors work. You try real publishing tasks before launch, then receive training and written instructions. New layouts and functionality are quoted separately from routine content editing."],
    ["How do you handle Webflow collections and interactions?", "We map collection fields, reference relationships, rich text, media and slugs to the chosen content system. Layouts, animations and conditional display rules are reviewed separately from the data. Your team checks representative pages and publishing tasks. Forms, search, memberships or ecommerce are included only where the proposal names their replacement or connection."],
    ["Can you improve our Webflow site without moving it?", "Yes, when a review identifies a feasible change within Webflow. We scope improvement work separately; the $1,500 published starting point is for a custom build, not every repair."],
    ["What happens to Webflow CMS content?", "We map the collections, fields, media and URLs included in the proposed move, then validate transferred records and rendered pages. A code export alone does not reproduce CMS, forms or restricted content."],
    ["Will a migration preserve our rankings?", "No one can promise that. We agree a URL and metadata plan, test redirects and rendered pages, then monitor after launch. Those controls reduce avoidable errors; search engines decide indexing and ranking."],
    ["What does our team have to provide for a Webflow migration?", "We need access to the Webflow account, domain and connected services, plus a person who can approve the scope and preview. Existing content can be assessed for transfer; new writing or photography is a separate task unless it is named in the proposal."],
    ["Will our Webflow animations still work?", "We inventory the interactions and agree which to retain, adapt or remove. A visual animation is tested against the approved design; any interaction that controls navigation, a form or a calculation also needs a functional and accessibility check."],
  ],
  gohighlevel: [
    ["What does a GoHighLevel website integration cover?", "We agree which forms, calendars, funnels and locations are in scope, then map contact fields, tags, consent and source information into the correct account. We check available API or webhook access, authentication, duplicate submissions and failure handling. Test enquiries must reach the expected pipeline and trigger the agreed workflows. A later CRM migration is a separate project."],
    ["Do we have to leave GoHighLevel?", "No. A custom public site can send agreed data to your existing GHL account while your team keeps using the CRM. We verify that the required account access and integration options are available before committing to that architecture."],
    ["Will our automations keep working?", "We inventory the workflows affected by the website, test forms and bookings with agreed fixtures, and check live events after cutover. The proposal names which automations are in scope; uninterrupted operation cannot be promised without that review."],
    ["What does the integration cost?", "A focused website starts at $1,500. More pages, forms and automation work change the scope. Your quote lists the build price and any ongoing GHL, hosting or other provider charges separately."],
    ["What if we change CRM later?", "The website and its connector can be scoped so the handoff is documented and replaceable. That does not automatically move contacts, pipelines, calendars or automations out of GoHighLevel; those records and workflows need a separate export and migration review."],
    ["Which GoHighLevel account receives the enquiries?", "We identify the relevant location or sub-account, form and pipeline during discovery. Test submissions check mapped fields, consent, source details, duplicates, notifications and the automations named in your scope."],
  ],
  "ai-seo": [
    ["What does the $500 monthly AI SEO and GEO service include?", "The optional starting scope covers ten buyer questions, up to five priority pages and two agreed AI-search surfaces. Each month includes research, monitoring, one agreed page improvement or small technical change with a revision round, a report and a review. In the first month we establish the baseline and agree the questions and pages. Original articles, dashboards, extra platforms and larger changes need a separate quote. Ending the retainer does not disable the website."],
    ["Are AI SEO services just AI-written articles?", "No. Our offer is research and implementation to improve a website's information and access for AI search, with reporting on the agreed questions and pages. Automated article production is not the monthly offer. Original long-form content is scoped and priced separately."],
    // 20 Oct 2026: rewritten to answer "is there an agency that guarantees ai citations or refunds",
    // seen in Search Console. It leads with what we commit to, then the limit. Refund wording is
    // the COMMERCIAL "Refunds" fact in company-facts.ts.
    ["Can you guarantee AI citations or rankings, or refund us if they don't happen?", "We commit to the research, agreed improvement, report and review listed in your monthly scope. If we fail to deliver those commitments, refund protection follows the conditions in your signed agreement. Missing a ranking or citation target alone does not trigger a refund. Search and AI platforms control those outcomes."],
    ["How long before AI SEO shows results?", "The first month sets the baseline: we agree the buyer questions and pages and record where you appear today. From then on, each monthly report shows what changed on the site and what moved in the available measurements, with their limits. Some changes show up in weeks, some take longer, and we report both rather than promise a date."],
    ["What evidence can you show?", "We can show first-party visibility reports and the order-source tracking used by Panda Patches. Impressions are not visits or sales, and Panda Patches shares an owner with PandaCodeGen, so it is not independent client proof."],
    ["Can you tell whether a lead came from an AI answer?", "Sometimes a referral or campaign signal is captured, but some visits are grouped within broader search reporting. Customer-declared discovery is useful but different evidence from a recorded click. We inspect your existing analytics and form data before proposing attribution work."],
    ["Does the $500 starting scope include new articles or a dashboard?", "No. It covers the focused monthly work described here. Original long-form writing, a reporting dashboard, broader markets, major integrations or a larger engineering backlog are proposed and priced separately."],
  ],
};

/**
 * A service page's FAQs in the shape ServicePageSchema expects. The live
 * /services pages build their FAQPage data from this, the same list the page
 * renders, so every question in the structured data is on the page. Since
 * 10 Oct 2026 the answers sit in a closed accordion: present in the HTML,
 * shown when the reader opens the row.
 */
export const previewFaqs: Record<string, [string, string][]> = Object.fromEntries(
  Object.entries(basePreviewFaqs).map(([slug, faqs]) => [slug, [
    ...serviceBuyerQuestions(slug).map(({ q, a }): [string, string] => [q, a]),
    ...faqs,
  ]]),
);

export function previewServiceFaqs(slug: string): ServiceFaq[] {
  return [
    ...(previewFaqs[slug] ?? []).map(([q, a]) => ({ q, a })),
    ...serviceOwnershipAnswers(slug).map(({ q, a }) => ({ q, a })),
  ];
}
