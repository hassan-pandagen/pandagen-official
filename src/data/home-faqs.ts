import { COMMERCIAL } from "@/data/company-facts";
import { requiredMetric } from "@/data/case-study-facts";

const hosting = COMMERCIAL.find((fact) => fact.label === "Hosting")?.value;
if (!hosting) throw new Error("Homepage FAQ requires the canonical hosting policy.");

/**
 * Homepage FAQs. Moved out of src/app/page.tsx on 24 Sep 2026, unchanged, so
 * the live homepage (which renders them and emits the FAQPage JSON-LD) and the
 * redesign preview read one list. Answers must stay visible wherever they are
 * rendered: the JSON-LD asserts them. See HomeFaqSection.tsx.
 */
export const homeFaqs = [
  {
    // Added 10 Sep 2026. The single biggest objection to a custom-coded site is
    // "then I have to call a developer every time", and none of the seven
    // questions here answered it. The answer already existed, verified, on the
    // Ladies 4 Jesus case study, which almost nobody reaches: embedded Studio,
    // roughly a minute to go live, no deploy, owner-run.
    //
    // Rewritten the same day, after Starter gained the content editor. The first
    // version carved out Starter as deliberately CMS-free. That is no longer the
    // offer, and an FAQ contradicting the pricing page is worse than no FAQ.
    //
    // The boundary sentence stays. A content editor genuinely does not cover new
    // templates or new features, and pretending otherwise recreates the whole
    // dependency argument on the first invoice.
    q: "If the site is custom code, do I need a developer every time I want to change something?",
    a: "No, and this is the part most people get wrong about custom code in 2026. Every package includes an editor built into your own site. You sign in, change the words, swap a photo, update your opening hours or add a staff member, and the live site updates in about a minute. There is no deploy, no ticket and no developer. Ladies 4 Jesus runs that way today: nine content types and five moderated submission paths, run by the owner, not by us. What still needs us is a new page template, a new feature or a change to how something works, and that is quoted like any other work. So the honest line is that you change what the site says, you operate whatever it was built to do, and we build the things it cannot do yet."
  },
  {
    // Added 11 Sep 2026 alongside the CustomFeatures section above. That section
    // now makes two promises on this page, that features are built to the
    // business's rules and that they carry no separate monthly licence, and the
    // 10 Sep audit named the two questions a buyer asks straight afterwards.
    // Both were unanswered anywhere on the site. A claim whose obvious follow-up
    // is unanswered reads as a catch.
    q: "If the features are built in, is every future feature included too?",
    a: "No, and it would not be honest to imply it. Your quote lists the features being built, and those are fixed in price before work starts. Something new later is scoped and priced the same way, before anyone begins. What you do not pay for again is the thing you already bought: a calculator we built you keeps working, keeps being editable, and never arrives with a renewal notice or a price rise. The distinction that matters is between changing what an existing feature does, which is usually a setting you control, and adding a feature the site has never had, which is new work."
  },
  {
    q: "Do I need your monthly plan to keep a custom feature working?",
    a: `No. There is no compulsory PandaCodeGen retainer. You receive the project files we create, written instructions and control of the production accounts. Your feature still needs the services it uses, such as email delivery, the content editor or a payment provider. Your quote names those services, their costs and who manages the accounts. Ending our optional support does not disable the feature, but hosting and other provider services still need to be maintained. ${hosting}`,
  },
  {
    q: "Do you have a minimum project size?",
    a: "No. A small site or a focused improvement is welcome. Custom website builds start at $1,500 for up to 7 pages. If WordPress is the right fit, we can build on WordPress too, and quote that work to its own scope. We agree the price and what is included in writing before work starts.",
  },
  {
    q: "How much does WordPress to Next.js migration cost?",
    a: "A focused custom rebuild starts at $1,500. Growth starts at $3,500 for 8 to 20 pages, and Scale starts at $5,000 for larger or more complex work. A WordPress-to-Next.js move needs an inventory first: we check the pages, URLs, content, plugins, forms, store data and integrations that must be kept or replaced. Your written quote names the new editing setup, redirect plan, testing, provider costs and final price. If your current WordPress site can meet the need with a smaller improvement, we can scope that instead.",
  },
  {
    q: "How does the free AI website audit work?",
    a: "Type in your web address and you get your load time, your Google speed scores, your technical SEO and any obvious security problems, with specific things to fix. It takes under a minute. No email, no signup, no sales call. It is a snapshot of your site today, not a claim about money you are losing.",
  },
  {
    q: "How much faster will my site be after migrating from WordPress or Shopify?",
    a: "We measure your current pages before promising a change. A move alone cannot guarantee a load time or a search result. For a custom build, the representative pages named in the written scope have a 90+ Lighthouse handover target on mobile and desktop, checked across three recorded runs. We also look at real-visitor data where it is available, because devices, networks and later changes affect the experience people actually get. If the problem can be fixed on your current platform, we will discuss that route too.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes. We build custom Shopify storefronts using headless architecture: your customers see a fast custom front end while you keep managing products and orders in Shopify as usual. If your store is slow because of app bloat, a heavy theme or unoptimised code, we replace the storefront layer with custom code while your entire Shopify backend stays in place for products, orders and payments. Speed improvement varies by store, so we measure your baseline before quoting.",
  },
  {
    q: "Will I lose SEO rankings when migrating from WordPress?",
    a: `Nobody can guarantee Google rankings. We inventory important page addresses, map changes and test redirects, content and metadata before launch. Google can still reprocess the site and rankings may fluctuate. The owner-approved MyCustomPatches record reports a delivery time of ${requiredMetric("mycustompatches", "delivery-days")}, ${requiredMetric("mycustompatches", "templates")} rebuilt templates and ${requiredMetric("mycustompatches", "downtime")} recorded downtime. Ranking losses in its monitoring window: ${requiredMetric("mycustompatches", "rankings")}. That window is not a guarantee for another project. Your written scope sets the migration checks and fallback plan.`,
  },
  {
    q: "Why not just use a faster WordPress host or a caching plugin?",
    a: "That may be the right answer. Hosting, caching, images and plugin choices can make a WordPress site work well for the business that owns it. We review what is actually slow, what you need to edit and what the site costs to run. If WordPress still fits, we can improve or build on it. If the design or workflow calls for a custom build, we explain the tradeoffs and migration work before you decide.",
  },
];
