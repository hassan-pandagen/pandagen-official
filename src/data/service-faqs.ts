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
 */
export interface ServiceFaq {
  q: string;
  a: string;
}

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  "custom-engineering": [
    {
      q: "How long does it take to build a custom app?",
      a: "A website takes 2 to 4 weeks. An app takes longer. The last one we published, an operations platform with staff logins, payments and attendance tracking, took 10 weeks. You get a written plan with dates before you pay anything, so the timeline is agreed rather than guessed.",
    },
    {
      q: "How much does custom development cost?",
      a: "Custom apps are quoted after one short call, and the quote is fixed. Agencies that bill by the hour sell you hours. We sell you the finished app. Our published tiers run to $10,000, and anything bigger is priced on its own. You pay 30% to start and 70% when it's done. No hourly billing, no monthly retainer, and your written quote has the exact figure.",
    },
    {
      q: "Can I add AI features to my app?",
      a: "Yes. Chat, reading documents, search, or writing from your own data, built into your app instead of rented from another tool with a per-seat fee. We check your data is good enough and your privacy rules allow it, then write down exactly what the feature does before we build it.",
    },
    {
      q: "What if I already have a Bubble/no-code app?",
      a: "We rebuild it in real code, quoted after a call and fixed in writing. Your current app keeps running while we build. On launch day you switch over, and if anything is wrong you switch straight back. You stop paying the no-code platform the day the new app is accepted.",
    },
    {
      q: "Do I own the code?",
      a: "Yes, all of it. The code, the design files, the editor, the documentation and the accounts it runs on are handed to you under your own name. Some agencies keep the code on their accounts, so you end up renting your own product. Ask any provider what you'll actually hold on day one. With us it's everything, and it's written into the contract.",
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
      a: "No. We don't touch your GoHighLevel account. Your contacts, pipelines, workflows and calendars stay exactly where they are, and we only replace the website in front of them. Your old site stays live while we build, and we test every form and booking before switching over.",
    },
    {
      q: "Do I need to cancel GHL?",
      a: "No. Keep GoHighLevel as your CRM. We put a fast custom website in front of it, so you keep every automation you've built and only replace the slow part. If you ever leave GHL later, the website comes with you.",
    },
    {
      q: "How much does a custom site with GHL integration cost?",
      a: "From $1,500 for a 5 to 7 page site that feeds your GHL forms and calendar. From $3,500 for 10 to 20 pages with an editor you update yourself. $5,000 to $10,000 for bigger sites or heavy automation work. Hourly agencies charge for the hours. We charge for the finished site, integrations included, at a fixed price. Pay 30% to start and 70% when it's done. No retainer, and your written quote has the exact figure.",
    },
    {
      q: "Can you build custom landing pages that work with GHL?",
      a: "Yes. A set of 5 to 7 landing pages is $1,500. Each one sends leads straight into your GHL forms, calendar or automations, with no third-party form app to pay for. Every page scores 90 or better on Google's PageSpeed test on phone and desktop, and we test it three times before handover.",
    },
    {
      q: "What if I want to leave GHL later?",
      a: "You can, and you keep the website. It's your code on your own accounts. The site talks to GHL through one connector, so a new CRM means swapping the connector, not rebuilding the site. Moving your workflows out of GHL is a separate job and depends on what GHL lets you export at the time.",
    },
    {
      q: "How long does a GoHighLevel website build take?",
      a: "Two to four weeks for most sites, about three on average. A 5 to 7 page site ships in 1 to 2 weeks. Extra calendars, sub-accounts or automations add time, and each one gets its own date in your written plan.",
    },
  ],
  "squarespace": [
    {
      q: "Will my Squarespace site design transfer to custom code?",
      a: "Yes, as closely as you want. We go through your site page by page and list what stays, what gets redesigned and what gets dropped, so nothing changes without you agreeing to it. The rebuilt site scores 90 or better on Google's PageSpeed test on phone and desktop, which most templates can't reach with the same design.",
    },
    {
      q: "Can I still use Squarespace for my online store?",
      a: "Sometimes, and we'll tell you if you should. If your shop is small and working, keeping it can be the cheaper answer. If the store does need to move, a full custom store is $5,000 to $10,000, and we check your products, orders, tax and shipping before recommending anything.",
    },
    {
      q: "How much does a Squarespace migration cost?",
      a: "From $1,500 for a 5 to 7 page site. From $3,500 for 10 to 20 pages with your blog moved and an editor you update yourself. $5,000 to $10,000 for a store, a members area or 30-plus pages. An hourly agency sells you time. We sell you the finished site at a fixed price. Pay 30% to start and 70% when it's done. No retainer, and your written quote has the exact figure.",
    },
    {
      q: "What if I have a blog on Squarespace?",
      a: "It comes with you. Every post, image, author and date moves over, and every old link forwards to the new page so Google keeps finding your posts. You keep writing in a simple editor with no code. Blog migration is included from $3,500.",
    },
    {
      q: "Is the migration disruptive to my business?",
      a: "No. Your Squarespace site stays live the whole time we build. On launch day we switch the domain over in stages, with a backup taken first, and if anything is wrong we switch back. Your customers never see a gap.",
    },
    {
      q: "How long does a Squarespace migration take?",
      a: "Two to four weeks for most sites, about three on average. A 5 to 7 page site ships in 1 to 2 weeks. A store, a members area or more than one language takes longer, and you get the dates in writing before we start.",
    },
  ],
  "webflow": [
    {
      q: "Is custom code harder to use than Webflow's visual editor?",
      a: "For everyday edits, no. Text, images, posts and pages are changed in a simple visual editor with no code, set up the way your team already works. Adding a brand new page layout is a developer job rather than drag and drop. We say that upfront and show you the editor before you sign.",
    },
    {
      q: "Can you recreate my Webflow animations in code?",
      a: "Yes. We list every animation on your site, rebuild the ones worth keeping and drop the ones that only slow the page down. Each one is checked so it doesn't cost you your 90-plus speed score. You approve the list before we build.",
    },
    {
      q: "What about Webflow's CMS?",
      a: "Your collections move over field by field into a new editor, and every item keeps its web address so nothing breaks in Google. Webflow exports most of it cleanly. Anything it won't, we rebuild by hand and tell you which. CMS migration is included from $3,500.",
    },
    {
      q: "How much does it cost to migrate from Webflow?",
      a: "From $1,500 for a 5 to 7 page site. From $3,500 for 10 to 20 pages with your CMS content moved and every link forwarded. $5,000 to $10,000 for a store, more than one language or 30-plus pages. You're not buying hours, you're buying the finished site, at a fixed price. Pay 30% to start and 70% when it's done. No retainer, no plan tier to renew, and your written quote has the exact figure.",
    },
    {
      q: "What if Webflow adds the features I need later?",
      a: "It might, and if waiting is the better answer we'll say so. Several of our guides exist to talk people out of a migration they don't need. The difference after moving is that the features are yours, on your own account. No plan tier decides what your site can do, and no price change lands in your inbox.",
    },
    {
      q: "How long does a Webflow migration take?",
      a: "Two to four weeks for most sites, about three on average. A 5 to 7 page site ships in 1 to 2 weeks. Lots of CMS content, animations or languages take longer, and every stage has a date in your written plan.",
    },
  ],
  "wix": [
    {
      q: "Will I lose my Google rankings if I leave Wix?",
      a: "Nobody can promise Google rankings, and anyone who does is guessing. What we do, in writing, is forward every old web address to its new page, carry over your titles and descriptions, and check Google Search Console before and after launch. Your old site stays live until the new one is confirmed working. That's how rankings get protected.",
    },
    {
      q: "Can I still edit my website without coding?",
      a: "Yes. Sites from $3,500 come with a simple visual editor. Change text, swap images, add posts and pages, no code and nothing to install or renew. The $1,500 site has no editor and suits a business that rarely changes its pages. We train you at handover, and there's no monthly fee to keep editing.",
    },
    {
      q: "How long does it take to migrate from Wix?",
      a: "Two to four weeks for most sites, about three on average. A 5 to 7 page site ships in 1 to 2 weeks. A shop, bookings or a members area takes longer. Your Wix site stays live the whole time, and if anything is wrong on launch day we switch back.",
    },
    {
      q: "What about my Wix forms and contact pages?",
      a: "Every form is rebuilt into your own site, so there's no form app to pay for, and submissions go straight to your email, calendar or CRM. We test each one on the live site before your old one is switched off.",
    },
    {
      q: "Is custom code harder to maintain than Wix?",
      a: "It's different, and cheaper. No monthly apps, no plan to renew, no retainer. The site runs on your own hosting account, which for a business site is from $20 a month as of August 2026, paid straight to the host with no markup from us. Now and then a small update is needed, and we show you how at handover. What you lose is a vendor deciding what your site is allowed to do.",
    },
    {
      q: "How much does it cost to migrate from Wix?",
      a: "From $1,500 for a 5 to 7 page site. From $3,500 for 10 to 20 pages with an editor and every link forwarded. $5,000 to $10,000 for a shop, bookings or 30-plus pages. No hourly billing. You pay for the finished site, not for time, at a fixed price. Pay 30% to start and 70% when it's done. No retainer, and your written quote has the exact figure.",
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
