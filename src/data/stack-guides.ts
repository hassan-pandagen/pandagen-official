import type { BlogPost } from "./blog";
import { asOf, spec } from "./spec-facts";

// 8 Oct 2026: rewritten before launch from the skill-pack audit and the owner's own answers
// (Ladies 4 Jesus on Sanity's Free plan with three training sessions; most clients come to
// migrate and get the Sanity editor in the same build price; Supabase on its Free plan during
// the build and Pro at launch; client-owned domains). Vendor prices come from spec-facts.json,
// never typed here. The catalog post moved from /blog/single-source-product-catalog to a
// buyer title before it was ever published, so no redirect was needed.
export type StackGuidePost = BlogPost & {
  /** datePublished, YYYY-MM-DD. */
  published: string;
  /** The line above the title. */
  eyebrow: string;
};

const byline = { author: "Hassan", role: "Co-founder, Lead Engineer", featured: false };
const sanityFree = spec("sanity-free-plan");
const sanityGrowth = spec("sanity-growth-price");
const supabaseFree = spec("supabase-free-plan");
const supabasePro = spec("supabase-pro-price");
const vercelPro = spec("vercel-pro-price");
const vercelHobby = spec("vercel-hobby-price");
const sgIntro = spec("siteground-startup-intro");
const sgRenewal = spec("siteground-startup-renewal");
const bhIntro = spec("bluehost-starter-intro");
const bhRenewal = spec("bluehost-starter-renewal");

export const stackGuidePosts: StackGuidePost[] = [
  {
    ...byline, id: "sanity-vs-wordpress", title: "Sanity vs WordPress: Which Editor Fits Your Website?",
    date: "Oct 7", published: "2026-10-07", lastModified: "2026-10-08", eyebrow: "CMS / Sanity vs WordPress",
    excerpt: "WordPress is free software you host and keep updated, and your theme and plugins decide what its editor looks like. Sanity is a hosted editor set up around your content, paired with a custom website. How to choose, with a real client editor and five tasks to test.",
    category: "CMS", readTime: "7 min", illustrationType: "code", cardStat: "5 tasks", cardStatLabel: "Try the editor before choosing the CMS",
    faqs: [
      { question: "Is Sanity better than WordPress?", answer: "Neither is better for every site. WordPress suits a team whose current theme, blocks and plugins already do the job. Sanity suits a rebuild where you want an editor with exactly your content's fields, paired with a custom website. Test the same five editing tasks in both before you decide." },
      { question: "Is Sanity free?", answer: `Sanity's Free plan is ${sanityFree.value} as of ${asOf("sanity-free-plan")}, with ${sanityFree.qualifier}. The Growth plan is ${sanityGrowth.value}. Most small business websites fit on the Free plan.` },
      { question: "Can I edit a Next.js website without coding?", answer: "Yes, once a CMS such as Sanity is connected. Your team edits the text, images and other fields that were set up for them, then publishes. A new page layout, content type or integration is still a developer job." },
      { question: "Will moving to Sanity improve my rankings?", answer: "Not on its own. Rankings follow your content, page speed, links and whether the move kept your URLs. Keep useful URLs, redirect the ones that change, and compare the new pages with the old ones before launch." },
    ],
  },
  {
    ...byline, id: "sanity-vs-supabase", title: "Sanity vs Supabase: CMS, Backend or Both?",
    date: "Oct 7", published: "2026-10-07", lastModified: "2026-10-10", eyebrow: "Architecture / Sanity vs Supabase",
    excerpt: "Sanity is a content editor for your website. Supabase is a backend: a Postgres database with sign-in, file storage and server functions. They don't compete, and many projects use both. Which one your project needs, with current prices.",
    category: "Architecture", readTime: "7 min", illustrationType: "saas", cardStat: "2 jobs", cardStatLabel: "Editing the website and running the business data",
    faqs: [
      { question: "Is Sanity an alternative to Supabase?", answer: "No. Sanity is a CMS your team uses to edit website content. Supabase is a backend: a Postgres database with sign-in, file storage and server functions for apps and portals. Many projects use both, Sanity for the public website and Supabase for the private data." },
      { question: "Do I need Supabase for a business website?", answer: "Usually not. A business website with pages, articles and a contact form needs a CMS and a form that emails you. You need a backend like Supabase when people sign in, or when you store records such as bookings, orders, students or payments." },
      { question: "How much does Supabase cost?", answer: `Supabase's Free plan is ${supabaseFree.value} and Pro is ${supabasePro.value}, as of ${asOf("supabase-pro-price")}. We build on the Free plan and move the project to Pro when it goes live, because free projects are paused after a week of inactivity and have no backups.` },
      { question: "Do you only build on Supabase?", answer: "No. It's our usual choice because it's quick to set up and it's Postgres underneath, so your data isn't tied to one vendor. We also build on MongoDB or another database, or around an API your business already runs." },
      { question: "Does Vercel replace a backend?", answer: "No. Vercel hosts your website and runs its server code. Your data still needs a database, and someone still has to decide who can sign in and what each person can see." },
    ],
  },
  {
    ...byline, id: "product-catalog-website-without-cart", title: "Product Catalog Website Without a Cart: Take Quote Requests",
    date: "Oct 7", published: "2026-10-07", lastModified: "2026-10-08", eyebrow: "Custom websites / Quotes instead of checkout",
    excerpt: "If you sell custom or made-to-order products, your website needs a catalog and a quote form, not a shopping cart. How we build one from a single product list, with a free example you can download.",
    category: "Engineering", readTime: "6 min", illustrationType: "code", cardStat: "1 list", cardStatLabel: "Menus, quote form and sitemap from one product list",
    faqs: [
      { question: "Can I have a product catalog website without a shopping cart?", answer: "Yes. Each product page ends in a quote form instead of an add-to-cart button, and the enquiry reaches you by email with the product already filled in. It suits custom or made-to-order products where the price depends on the job." },
      { question: "Should every product catalog live in code?", answer: "No. A list in code suits a small catalog that a developer updates now and then. If staff change products often, keep the list in an editor like Sanity. If you need stock levels, online payment or shipping, use a store platform. Either way, keep one list that the whole site reads from." },
      { question: "Is the downloadable example client code?", answer: "No. We wrote it as a teaching example based on the approach in the Emblematic Studio case study. It contains no client data, code or results." },
    ],
  },
  {
    ...byline, id: "website-monthly-running-cost", title: "How Much Does a Website Cost per Month? Our Stack Runs Under $50",
    date: "Oct 8", published: "2026-10-08", lastModified: "2026-10-11", eyebrow: "Pricing / Monthly running costs",
    excerpt: `A custom website with a content editor costs about $20 a month to run on our usual stack. Add a database and sign-in and it's about $45. Every line of the bill with ${asOf("vercel-pro-price")} prices, and who owns which account.`,
    category: "Pricing", readTime: "6 min", illustrationType: "hosting", cardStat: "$45", cardStatLabel: "A month for hosting, editor, email and database",
    faqs: [
      // The $20 and $45 totals are sums of the spec-facts values below. Re-add them if a price changes.
      { question: "How much does it cost to run a website per month?", answer: `On our usual stack, about $20 a month for a custom website with a content editor: Vercel Pro hosting at ${vercelPro.value}, with Sanity and Resend on their free plans. Adding a Supabase database and sign-in, at ${supabasePro.value}, brings it to about $45. Prices as of ${asOf("vercel-pro-price")}. The domain is extra and paid yearly to your registrar.` },
      { question: "Can I host a business website on Vercel for free?", answer: `No. Vercel's Hobby plan is ${vercelHobby.value}, but only ${vercelHobby.qualifier}. A business website is commercial, so it needs the Pro plan at ${vercelPro.value}.` },
      { question: "Do I have to pay for Supabase during the build?", answer: `No. We build on Supabase's Free plan and move the project to Pro, ${supabasePro.value}, when it goes live. Free projects are paused after a week of inactivity and have no backups, so they aren't for a live app.` },
      { question: "Why did my hosting bill go up after the first year?", answer: `Shared hosts advertise first-term prices and renew at a higher rate. As of ${asOf("siteground-startup-renewal")}, SiteGround StartUp is ${sgIntro.value} ${sgIntro.qualifier} and renews at ${sgRenewal.value}, and Bluehost Starter is ${bhIntro.value} ${bhIntro.qualifier} and renews at ${bhRenewal.value}. Compare hosts by their renewal price and the length of the commitment.` },
      { question: "Who owns the domain?", answer: "You do. You buy it in your own name from a registrar. We've never bought a domain for a client, and most of our clients already owned theirs." },
      { question: "What happens to the hosting if I stop working with you?", answer: "On a maintenance or SEO package, hosting on our Vercel account is included if you want it. If you stop working with us, we move the site to a Vercel account in your name. We've done this for a client whose contract ended." },
    ],
  },
];
