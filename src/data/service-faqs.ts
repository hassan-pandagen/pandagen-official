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
 */
export interface ServiceFaq {
  q: string;
  a: string;
}

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  "custom-engineering": [
    {
      q: "How long does it take to build a custom app?",
      a: "How long it takes depends on how firm the requirements are, what it connects to, how much data moves, how quickly you can review, and how you sign it off. Discovery produces a written proposal with milestones, dependencies, and the change process before work begins.",
    },
    {
      q: "How much does custom development cost?",
      a: "We quote custom work after looking at what you need, what it connects to, the data, the security, and what we are waiting on. The accepted proposal states the price model, payment schedule, scope, exclusions, support, repository access, licensing, and IP terms.",
    },
    {
      q: "Can I add AI features to my app?",
      a: "We can scope direct integrations with supported AI-provider APIs for chat, document analysis, extraction, generation, or search. Feasibility depends on provider capabilities, data quality, privacy requirements, evaluation criteria, and the approved scope.",
    },
    {
      q: "What if I already have a Bubble/no-code app?",
      a: "We can go through the application logic, the data model, how people sign in and what it connects to, then propose a staged migration and a cutover plan. Performance and continuity are measured against agreed baselines and acceptance checks rather than assumed in advance.",
    },
    {
      q: "Do I own the code?",
      a: "The accepted proposal writes down who gets the code, the documentation, deployment access, the licences, which third-party components are involved, when IP transfers and when handover happens so both parties know exactly what is included.",
    },
  ],
  "ecommerce": [
    {
      q: "What is custom Shopify?",
      a: "Custom Shopify means you keep Shopify for everything it's great at (inventory, orders, payments, and customer management), but replace the slow Liquid theme with a custom coded storefront that loads in under 1 second. Same dashboard, with the storefront layer rebuilt for speed. The actual improvement depends on your current theme, apps and catalogue, so we measure your baseline before quoting.",
    },
    {
      q: "Will my Shopify apps still work?",
      a: "Your backend apps (inventory, email, shipping) work as before. Frontend apps (review widgets, upsell popups) get rebuilt as native features in your custom code, so they load instantly instead of injecting slow JavaScript. You stop paying monthly app fees for features we build once.",
    },
    {
      q: "How long does a custom storefront migration take?",
      a: "Three weeks for most stores. Days 1-3: API architecture and design. Days 4-14: Custom storefront build (product pages, cart, checkout) accelerated by AI-paired development with Claude and Cursor. Days 15-18: Testing with live Shopify data. Days 19-21: staged cutover with a documented rollback path. Compare any quote on like-for-like scope rather than on headline timeline. AI tooling collapses that timeline without cutting corners.",
    },
    {
      q: "Will I lose sales during the migration?",
      a: "No. Your existing Shopify store stays live throughout the entire build. We develop the new storefront in parallel. On launch day, we simply point your domain to the new site. Your existing store stays live until the new one is verified, and a rollback path is documented before cutover. Universal zero interruption is not promised.",
    },
    {
      q: "How much does a custom Shopify storefront cost?",
      a: "Compare quotes on like-for-like scope. Four tiers: Starter stores start at $1,500 (small catalogs, basic Shopify Storefront API). Growth builds start at $3,500 (30 to 100 products, custom features). Scale builds are $5,000 to $10,000 (subscriptions, custom logic, large catalogs, 30+ pages). Scale+ is $10,000+ for enterprise headless commerce, custom-quoted after a scoping call. Whether it pays back, and over what period, depends on your own app bill and your own measured results.",
    },
  ],
  "gohighlevel": [
    {
      q: "Will my GHL automations break during migration?",
      a: "First we list the forms, triggers, pipelines, webhooks and account settings that matter. A parallel build and staged cutover can reduce risk, but continuity depends on GHL's APIs, account configuration, third-party services, and the acceptance checks documented for the project.",
    },
    {
      q: "Do I need to cancel GHL?",
      a: "Not necessarily. One path keeps GHL for CRM and connects a separate frontend; another scopes replacement workflows. Discovery determines feasibility, migration risk, and the responsibilities of each system.",
    },
    {
      q: "How much does a custom site with GHL integration cost?",
      a: "Price and timing depend on page inventory, design, API access, forms, calendars, workflows, sub-accounts, data, and testing needs. The written proposal states scope, dependencies, commercial terms, support, access, ownership, and the cutover plan.",
    },
    {
      q: "Can you build custom landing pages that work with GHL?",
      a: "We can scope landing pages that submit to supported GHL endpoints or webhooks. Performance, data flow, attribution, and error handling are tested against agreed conditions; advertising scores and lead costs are controlled by third parties and are not guaranteed.",
    },
    {
      q: "What if I want to leave GHL later?",
      a: "A future replacement can be considered when the initial architecture defines clear integration boundaries. Feasibility still depends on the workflows, data access, exports, provider terms, and a separately approved migration scope.",
    },
  ],
  "squarespace": [
    {
      q: "Will my Squarespace site design transfer to custom code?",
      a: "We list the design, the content, the components, how it behaves on each screen and what accessibility needs. The proposal then defines what is retained, redesigned, or excluded, along with the method used to review visual fidelity and performance.",
    },
    {
      q: "Can I still use Squarespace for my online store?",
      a: "A full migration is not always necessary. We can evaluate retaining Squarespace Commerce or using a supported checkout integration, with fees, product data, tax, shipping, payments, and operational responsibilities reviewed before a recommendation.",
    },
    {
      q: "How much does a Squarespace migration cost?",
      a: "Price and timing depend on how many pages and how much content there is, the design, whether you sell, scheduling, member areas, integrations, the data, redirects, and how you sign it off. The written proposal states the commercial model, milestones, assumptions, support, access, licensing, ownership, and remedies.",
    },
    {
      q: "What if I have a blog on Squarespace?",
      a: "We can list the posts, media, authors, dates, URLs, metadata and what your editors need. The migration plan records what can be exported, transformed, redirected, manually recreated, or excluded; performance is measured against an agreed baseline.",
    },
    {
      q: "Is the migration disruptive to my business?",
      a: "Building alongside the live site and switching DNS in stages cuts the disruption. No migration is risk free. The proposal defines backups, DNS responsibilities, verification, monitoring, rollback, and the maintenance window for the approved site.",
    },
  ],
  "webflow": [
    {
      q: "Is custom code harder to use than Webflow's visual editor?",
      a: "What editing feels like depends on which CMS you pick, who is allowed to do what, whether they can preview, how publishing flows, and how content is structured. Discovery compares those requirements with Webflow's current editor and records any training, maintenance, or developer dependency in scope.",
    },
    {
      q: "Can you recreate my Webflow animations in code?",
      a: "We can inventory Webflow interactions and evaluate equivalent or revised implementations. Feasibility, accessibility, reduced-motion behavior, browser support, assets, and acceptance criteria are defined for the approved interactions.",
    },
    {
      q: "What about Webflow's CMS?",
      a: "We can map your Webflow collections, fields, references, assets, languages, slugs and publishing flow onto a CMS that fits. Export coverage, provider limits, data cleanup, API access, and migration verification vary by project and provider.",
    },
    {
      q: "How much does it cost to migrate from Webflow?",
      a: "Price and timing depend on how many pages there are, the design system, the interactions, the CMS data, the languages, whether you sell, what it connects to, the redirects, and how you sign it off. The written proposal states the commercial model, milestones, assumptions, support, access, licensing, ownership, and remedies.",
    },
    {
      q: "What if Webflow adds the features I need later?",
      a: "It is possible, and platform capabilities change. The decision should use current Webflow documentation, your actual account and roadmap tolerance, and a like-for-like comparison of implementation and operating responsibilities.",
    },
  ],
  "wix": [
    {
      q: "Will I lose my Google rankings if I leave Wix?",
      a: "Any migration can affect crawling, indexing, and visibility. We inventory URLs, metadata, canonicals, content, links, and redirects, then define pre-launch and post-launch checks. Search engines control rankings, so no ranking outcome is guaranteed.",
    },
    {
      q: "Can I still edit my website without coding?",
      a: "We can scope a CMS for approved text, image, and post workflows. The editor experience, roles, previews, content model, training, and maintenance responsibilities depend on the selected provider and written scope.",
    },
    {
      q: "How long does it take to migrate from Wix?",
      a: "Timing depends on the page and content inventory, design, apps, forms, stores, bookings, localization, data, integrations, redirects, reviews, and acceptance requirements. Discovery produces a written proposal with milestones and dependencies.",
    },
    {
      q: "What about my Wix forms and contact pages?",
      a: "We inventory each form, field, validation rule, destination, consent requirement, notification, automation, and error path. Supported integrations and acceptance tests are defined for the approved services; continuity and performance are measured rather than assumed.",
    },
    {
      q: "Is custom code harder to maintain than Wix?",
      a: "The maintenance model changes rather than disappearing. Discovery compares editorial needs, application updates, hosting, third-party services, monitoring, security, and support so ongoing responsibilities and costs can be stated in the proposal.",
    },
  ],
  "woocommerce": [
    {
      q: "Will I lose my WooCommerce orders and customer data?",
      a: "No. We export your entire WooCommerce database (products, orders, customer accounts, reviews, categories) and migrate it to your new platform. Migrated records are reconciled against a pre-migration export and any exceptions are reported before cutover. We test imports in staging before anything touches your live store.",
    },
    {
      q: "Do I keep my Google rankings after migrating from WooCommerce?",
      a: "Yes. Every URL from your WooCommerce store is mapped with 301 redirects to the new site. Google treats it as the same page at a new address. URL-level redirect mapping is what protects existing search equity. Search engines control crawling, indexing, rankings and timing, so no ranking outcome or recovery date is guaranteed.",
    },
    {
      q: "Can I still manage products and orders without being technical?",
      a: "Absolutely. We set up a clean admin dashboard where you can add products, update prices, manage inventory, and process orders. No code required. It's simpler than WooCommerce's admin because we only build what you actually need.",
    },
    {
      q: "What payment gateways do you support?",
      a: "Stripe, PayPal, Apple Pay, Google Pay, Cash App Pay, Klarna, Afterpay, and any other gateway with an API. We integrate them natively. No paid plugin required. Your checkout is fully custom, so we can add any payment method you want.",
    },
    {
      q: "How much does a WooCommerce migration cost?",
      a: "Four tiers. Starter $1,500 (simple WooCommerce migration, 10 to 30 products). Growth $3,500 (30 to 150 products with custom cart logic). Scale $5,000 to $10,000 (subscriptions, B2B pricing, wholesale, 100+ products). Scale+ $10,000+ for enterprise WooCommerce scope, custom-quoted after a scoping call. We give a fixed-price quote upfront. No hourly surprises.",
    },
    {
      q: "How long does a WooCommerce migration take?",
      a: "2 to 6 weeks depending on scope. Starter stores ship in 1 to 2 weeks, Growth stores in 2 to 3, and Scale builds with subscriptions or B2B pricing run 3 to 5 weeks, sometimes 6 for enterprise scope. Your current store stays live the entire time, and launch day runs as a staged cutover with a documented rollback path.",
    },
    {
      q: "My WooCommerce store has subscriptions / bookings / B2B pricing. Can you handle that?",
      a: "Yes. Subscriptions, recurring billing, tiered B2B pricing, volume discounts, booking calendars: these are all custom logic we build natively. You won't need a $300/mo plugin to handle what we can build into the core of your store.",
    },
    {
      q: "What about WooCommerce Subscriptions and my existing recurring billing?",
      a: "We migrate every active subscription to Stripe Billing (native, no markup). Your subscribers keep their saved cards and billing date. Payment continuity and re-authentication are tested before cutover. Stripe handles the dunning, the webhooks, the failed-card retries. You stop paying $199/month for WooCommerce Subscriptions.",
    },
    {
      q: "Do I keep my Stripe account and saved customer cards?",
      a: "Yes. We connect to your existing Stripe account using your live keys. All Customer IDs, saved payment methods, subscription IDs, and Stripe Customer Portal history carry over untouched. Your buyers never re-enter a card.",
    },
    {
      q: "How do you handle tax (Avalara, TaxJar, WooCommerce Tax)?",
      a: "We integrate Stripe Tax or TaxJar directly at checkout. Live nexus calculation across all US states plus VAT for UK/EU. Tax handling moves to your payment provider. Stripe Tax handles filings in 30+ jurisdictions.",
    },
  ],
  "wordpress-migration": [
    {
      q: "Will I lose my Google rankings during migration?",
      a: "No. We map every single URL from your old WordPress site to your new site with 301 redirects. Google treats it as the same page at a new address. URL-level redirect mapping is what protects existing search equity. Search engines control crawling, indexing, rankings and timing, so no ranking outcome or recovery date is guaranteed.",
    },
    {
      q: "How long does a WordPress migration take?",
      a: "Two to four weeks for most sites, around three weeks being typical. Days 1-3: full audit and architecture. Days 4-14: custom Next.js build with AI-paired development using Claude and Cursor. Days 15-18: testing, content migration, URL mapping. Days 19-21: staged cutover with a documented rollback path. Larger sites can run to four weeks. Compare any quote on like-for-like scope rather than on headline timeline. AI tooling collapses that timeline without cutting corners.",
    },
    {
      q: "What happens to my blog posts and content?",
      a: "Everything migrates. Blog posts, pages, images, metadata, categories. We extract it all from your WordPress database and move it to a modern content editor where you can still edit content without touching code.",
    },
    {
      q: "How much does a WordPress to Next.js migration cost?",
      a: "Compare quotes on like-for-like scope. Four tiers: Starter starts at $1,500 (5 to 7 pages, custom Next.js, 90+ PageSpeed). Growth starts at $3,500 (15 to 50 pages, custom features). Scale is $5,000 to $10,000 (complex WordPress or WooCommerce sites, 30+ pages, custom integrations). Scale+ is $10,000+ for enterprise scope, custom-quoted after a scoping call. Whether it pays back, and over what period, depends on your own invoices and your own measured results.",
    },
    {
      q: "Can I still edit my website after migration?",
      a: "Yes. We set up a content editor with a user-friendly dashboard. You can edit text, images, blog posts, and pages without any coding knowledge. It's simpler than WordPress: no plugins to update, no themes to manage.",
    },
  ],
};
