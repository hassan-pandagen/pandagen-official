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
      a: "A marketing site takes 2 to 4 weeks. An application takes longer, and the honest way to answer is with a built example rather than a promise: our Enterprise Ops platform, with role-based access, payments, attendance tracking and twenty Supabase Edge Functions, was built in 10 weeks. What moves the number is how firm the requirements are, what the app connects to, how much data migrates, and how fast you can review. Discovery produces a written proposal with dated milestones before any work starts.",
    },
    {
      q: "How much does custom development cost?",
      a: "An agency that bills by the hour sells you hours, so a fixed budget buys a number of hours rather than a finished application. We quote the application. Custom builds start in the Scale range, $5,000 to $10,000, which covers dashboards, internal tools, integrations and 30-plus screens. Larger scope is Scale+, from $10,000, quoted after a scoping call. The price is fixed for the written scope, paid 30 percent at onboarding and 70 percent at the delivery milestone. No hourly billing, no monthly retainer to keep it running. The accepted written terms control the final figure.",
    },
    {
      q: "Can I add AI features to my app?",
      a: "Yes. We scope direct integrations with supported AI-provider APIs for chat, document analysis, extraction, generation, or search, built into your codebase rather than bolted on through a per-seat SaaS subscription. Feasibility depends on the provider's capabilities, your data quality, privacy requirements and the evaluation criteria written into the scope.",
    },
    {
      q: "What if I already have a Bubble/no-code app?",
      a: "We go through the application logic, the data model, how people sign in and what it connects to, then propose a staged migration in the Scale tier, $5,000 to $10,000 for most no-code replacements. Your existing app stays live while the new one is built, and cutover runs against agreed acceptance checks with a documented rollback path. You stop paying the platform's subscription the day the new build is accepted.",
    },
    {
      q: "Do I own the code?",
      a: "Yes, and it is written down, not implied. At handover the source code, design files, CMS models, documentation and the production accounts are transferred to you or created under your control. Some providers host on their own accounts and keep the repository, which means you rent your own product; ask any provider which of those five things you will hold on day one. Ours are listed in the accepted proposal along with the licences of any third-party components and the date IP transfers.",
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
      a: "No, because nothing in GoHighLevel is switched off. Your contacts, pipelines, workflows, calendars and webhooks stay exactly where they are; we replace only the public website in front of them. We list every form, trigger and webhook first, build the new frontend in parallel while your current site stays live, and cut over in stages with a documented rollback path. Continuity still depends on GHL's own APIs and your account configuration, so the acceptance checks for each integration are written into the proposal rather than assumed.",
    },
    {
      q: "Do I need to cancel GHL?",
      a: "No. The usual path keeps GoHighLevel as the CRM and puts a fast custom frontend in front of it, so you keep every automation you have paid to build and stop paying only for the part that was slow. If you later want the workflows replaced too, that is scoped separately. Discovery decides which path fits and writes down which system is responsible for what.",
    },
    {
      q: "How much does a custom site with GHL integration cost?",
      a: "An agency billing by the hour sells you hours, and integration work is where hours multiply. We quote the site, integrations included. Starter from $1,500 covers a 5 to 7 page site or landing set submitting to GHL forms and calendars. Growth from $3,500 covers 10 to 20 pages with Sanity CMS and a full redirect map. Scale is $5,000 to $10,000 for 30-plus pages, sub-accounts or heavier workflow integration. Fixed for the written scope, 30 percent at onboarding and 70 percent at the delivery milestone, no hourly billing and no monthly retainer. The accepted terms control the final figure.",
    },
    {
      q: "Can you build custom landing pages that work with GHL?",
      a: "Yes. A landing set of 5 to 7 pages sits in the Starter tier from $1,500. Each page submits to your GHL forms, calendars or webhooks natively, with no third-party form app to pay for, and every build carries a 90+ Lighthouse handover target on mobile and desktop for the named pages, verified across three recorded runs. Performance and data flow are tested against agreed conditions. Advertising quality scores and lead costs are controlled by the ad platforms, so those are measured, not promised.",
    },
    {
      q: "What if I want to leave GHL later?",
      a: "You can, without rebuilding the website, because you own the frontend code and the integration boundary is deliberately clean: the site talks to GHL through its APIs, so a different CRM means changing the connector, not the site. Source code, design files, CMS models, documentation and production accounts are all transferred to you at handover. Replacing the workflows themselves is a separately scoped migration, and its feasibility depends on GHL's exports and provider terms at the time.",
    },
  ],
  "squarespace": [
    {
      q: "Will my Squarespace site design transfer to custom code?",
      a: "Yes, as closely as you want it to. We inventory the design, content and components page by page and how each behaves on every screen size, then the proposal lists what is kept as-is, what is redesigned and what is dropped. Visual fidelity is reviewed against the current site before acceptance, and the build carries a 90+ Lighthouse handover target on mobile and desktop for the named pages, verified across three recorded runs, which a template usually cannot reach with the same design.",
    },
    {
      q: "Can I still use Squarespace for my online store?",
      a: "Sometimes, and we will say so. If your catalogue is small and Squarespace Commerce is working, keeping it or connecting a supported checkout can be the cheaper answer, and a full migration is not always necessary. Where the store does need to move, headless commerce sits in the Scale tier, $5,000 to $10,000, with products, orders, tax, shipping and payments reviewed before a recommendation rather than assumed.",
    },
    {
      q: "How much does a Squarespace migration cost?",
      a: "An agency billing by the hour sells you hours. We quote the site. Starter from $1,500 covers a 5 to 7 page site with no CMS. Growth from $3,500 covers 10 to 20 pages with Sanity CMS, blog migration and a full 301 redirect map. Scale is $5,000 to $10,000 for 30-plus pages, commerce, member areas or scheduling. Above that is quoted after a scoping call. The price is fixed for the written scope, paid 30 percent at onboarding and 70 percent at the delivery milestone, with no hourly billing and no monthly retainer. The accepted terms control the final figure.",
    },
    {
      q: "What if I have a blog on Squarespace?",
      a: "It moves with you. Posts, media, authors, dates, categories and metadata are exported and loaded into Sanity CMS, where you keep editing without code, and every old post URL gets a 301 redirect to its new address. Blog migration and the redirect map are included in the Growth tier from $3,500. Anything Squarespace will not export cleanly is listed in the plan as recreated or excluded, so nothing disappears silently.",
    },
    {
      q: "Is the migration disruptive to my business?",
      a: "Your Squarespace site stays live for the entire build, which takes 2 to 4 weeks for most sites and around three typically. We build alongside it, then switch DNS in stages with backups taken, verification checks run and a documented rollback path, so a problem at cutover means switching back, not downtime. No migration is risk free, so the proposal names the maintenance window, who owns DNS and what is monitored afterwards.",
    },
  ],
  "webflow": [
    {
      q: "Is custom code harder to use than Webflow's visual editor?",
      a: "For day-to-day editing, no. Growth and Scale builds ship with Sanity CMS, so text, images, posts and pages are edited with visual editing and no code, and the editing roles and publishing flow are set up to match how your team already works. What changes is layout: a new page type is a developer task rather than a drag-and-drop one, and that trade is written into the scope so nobody discovers it after launch. Training is included in handover.",
    },
    {
      q: "Can you recreate my Webflow animations in code?",
      a: "Yes. We inventory every Webflow interaction, then rebuild the ones worth keeping with Framer Motion, including reduced-motion behaviour for visitors who have asked for it and a check that each animation does not push the page past its 90+ Lighthouse handover target. The approved list of interactions and their acceptance criteria are named in the proposal, so an interaction is either in scope and tested or explicitly dropped.",
    },
    {
      q: "What about Webflow's CMS?",
      a: "Your collections, fields, references, assets, languages and slugs are mapped onto Sanity CMS field for field, and every collection item keeps its URL through a 301 redirect map. Webflow's export covers most of it; what it does not export cleanly is listed in the plan as recreated or excluded. Growth from $3,500 includes CMS migration and the redirect map for 10 to 20 pages, and Scale from $5,000 covers larger or multilingual collections.",
    },
    {
      q: "How much does it cost to migrate from Webflow?",
      a: "An agency billing by the hour sells you hours. We quote the site. Starter from $1,500 covers a 5 to 7 page site with no CMS. Growth from $3,500 covers 10 to 20 pages with Sanity CMS, collection migration and a full 301 redirect map. Scale is $5,000 to $10,000 for 30-plus pages, ecommerce or multiple languages. Above that is quoted after a scoping call. Fixed for the written scope, 30 percent at onboarding and 70 percent at the delivery milestone, no hourly billing and no monthly retainer. Your own Webflow plan and add-on costs, the other side of the comparison, are worked through in our Webflow true-cost guide. The accepted terms control the final figure.",
    },
    {
      q: "What if Webflow adds the features I need later?",
      a: "It might, and we will tell you if waiting is the better answer. Several of our own guides exist to talk people out of a migration they do not need. The difference after a move is that the features you need are owned code on your own account, with no plan tier deciding whether you get them and no per-seat or per-site pricing change arriving by email. Decide from current Webflow documentation, your actual account and a like-for-like comparison of what each path costs to run for three years.",
    },
  ],
  "wix": [
    {
      q: "Will I lose my Google rankings if I leave Wix?",
      a: "The controls that protect rankings are process, and we run all of them: every Wix URL is inventoried and mapped to its new address with a 301 redirect, metadata and canonicals are carried over, internal links are rebuilt, and Search Console is checked before and after cutover. Your old site stays live until the new one is verified. Search engines control rankings, so no provider can honestly guarantee the outcome; what we guarantee is that the redirect map covers every URL you agree to keep, in writing.",
    },
    {
      q: "Can I still edit my website without coding?",
      a: "Yes. Growth and Scale builds ship with Sanity CMS: text, images, posts and pages are edited with visual editing, no code, and no app to install or renew. Starter, from $1,500 for 5 to 7 pages with no CMS, is for sites that rarely change. Editor roles and training are part of handover, and there is no monthly retainer required to keep editing.",
    },
    {
      q: "How long does it take to migrate from Wix?",
      a: "Two to four weeks for most sites, around three weeks typically. Starter sites ship in 1 to 2 weeks, Growth sites in 2 to 4. Stores, bookings, member areas or multiple languages add scope and are given their own milestone in the proposal. Your Wix site stays live for the whole build, and launch runs as a staged cutover with a documented rollback path.",
    },
    {
      q: "What about my Wix forms and contact pages?",
      a: "Every form, field, validation rule and destination is inventoried and rebuilt as a native form in your own codebase, so there is no third-party form app to pay for and submissions go straight to your email, CRM or calendar. Consent handling, notifications and error paths are tested against agreed conditions before cutover, and each form is confirmed working on the live site before the old one is switched off.",
    },
    {
      q: "Is custom code harder to maintain than Wix?",
      a: "It is different, and cheaper to run. There are no monthly app subscriptions, no plan tier to renew and no maintenance retainer required. The site is deployed to your own Vercel account, which for a commercial site is the Pro plan at $20 a month as of August 2026, billed to you directly with no markup. What you take on is a dependency update now and then, which we document at handover. What you lose is a vendor deciding what your site is allowed to do.",
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
