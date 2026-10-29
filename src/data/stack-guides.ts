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
const supabaseHipaa = spec("supabase-hipaa-baa");
const vercelPro = spec("vercel-pro-price");
const vercelHobby = spec("vercel-hobby-price");
const sgIntro = spec("siteground-startup-intro");
const sgRenewal = spec("siteground-startup-renewal");
const bhIntro = spec("bluehost-starter-intro");
const bhRenewal = spec("bluehost-starter-renewal");

export const stackGuidePosts: StackGuidePost[] = [
  {
    ...byline, id: "sanity-vs-wordpress", title: "Sanity vs WordPress: Which Editor Fits Your Website?",
    date: "Oct 7", published: "2026-10-07", lastModified: "2026-10-29", eyebrow: "CMS / Sanity vs WordPress",
    excerpt: "WordPress is free software you host and update. Sanity combines a content editor with hosted storage. How to choose, with a real client editor and five tasks.",
    category: "CMS", readTime: "7 min", illustrationType: "code", cardStat: "5 tasks", cardStatLabel: "Try the editor before choosing the CMS",
    faqs: [
      { question: "Is Sanity better than WordPress?", answer: "Neither is better for every site. WordPress suits a team whose current theme, blocks and plugins already do the job. Sanity suits a rebuild where you want an editor with exactly your content's fields, paired with a custom website. Test the same five editing tasks in both before you decide." },
      { question: "Is Sanity free in 2026?", answer: `Yes. As of ${asOf("sanity-free-plan")}, Sanity's pricing page lists the Free plan at ${sanityFree.value}, marked "forever", not a trial. It includes ${sanityFree.qualifier}. Your site may fit on the Free plan, depending on its usage and how many permission roles your team needs. Teams that need more editors, private datasets, more roles or longer change history move to Growth at ${sanityGrowth.value}.` },
      // 20 Oct 2026: answers for conversational queries seen in Search Console ("is it free",
      // "how do they make money", "can you get this for me"). Which page they reached is unconfirmed.
      { question: "How does Sanity make money if the Free plan costs nothing?", answer: `From paid plans and add-ons. As of ${asOf("sanity-growth-price")}, Growth is ${sanityGrowth.value}, Enterprise is priced on request, and extra usage, datasets and support are sold as monthly add-ons.` },
      { question: "Can you set up Sanity for my website?", answer: "Yes. Our Sanity development service builds the website and its editor together, with the content types and fields set up for your team. Every build that uses Sanity includes training on Sanity Studio and written documentation. Your site may fit on Sanity's Free plan, depending on its usage and permission needs, in which case the editor adds nothing to the monthly bill." },
      { question: "Can I edit a Next.js website without coding?", answer: "Yes, once a CMS such as Sanity is connected. Your team edits the text, images and other fields that were set up for them, then publishes. A new page layout, content type or integration is still a developer job." },
      { question: "Will moving to Sanity improve my rankings?", answer: "Not on its own. Rankings follow your content, page speed, links and whether the move kept your URLs. Keep useful URLs, redirect the ones that change, and compare the new pages with the old ones before launch." },
    ],
  },
  {
    ...byline, id: "sanity-vs-supabase", title: "Sanity vs Supabase: CMS, Backend or Both?",
    date: "Oct 7", published: "2026-10-07", lastModified: "2026-10-29", eyebrow: "Architecture / Sanity vs Supabase",
    excerpt: "Sanity manages content; Supabase provides Postgres, sign-in, storage and functions. Compare costs, permissions, backups and when one or both fit.",
    category: "Architecture", readTime: "7 min", illustrationType: "saas", cardStat: "2 jobs", cardStatLabel: "Editing the website and running the business data",
    faqs: [
      { question: "Is Sanity an alternative to Supabase?", answer: "They serve different primary jobs. Sanity provides an editing workflow and hosted content storage; Supabase provides Postgres, sign-in, storage and functions. They can work together, but one backend with an appropriate editor can also cover both jobs. Choose around the workflow and permissions you need." },
      { question: "Do I need Supabase for a business website?", answer: "Usually not. A business website with pages, articles and a contact form needs a CMS and a form that emails you. You need a backend like Supabase when people sign in, or when you store records such as bookings, orders, students or payments." },
      { question: "How much does Supabase cost?", answer: `Supabase's Free plan is ${supabaseFree.value} and Pro is ${supabasePro.value}, as of ${asOf("supabase-pro-price")}. We build on the Free plan and move the project to Pro when it goes live, because free projects are paused after a week of inactivity and have no included automatic backups.` },
      // 20 Oct 2026: follow-up questions, as above.
      { question: "Is Supabase still free in 2026?", answer: `Yes. As of ${asOf("supabase-free-plan")}, Supabase's Free plan is ${supabaseFree.value}, with ${supabaseFree.qualifier}. That suits building, testing and simple sites. For client production apps we use Pro, ${supabasePro.value}, which isn't paused for inactivity and includes daily database backups.` },
      { question: "Is Supabase safe for customer data?", answer: `It can be, but the setup decides it. Supabase tells you who someone is; row-level security rules on each table decide which records they can see, and every table the browser can reach needs them. Admin keys stay on the server. Pro keeps daily database backups for 7 days; those backups don't include files uploaded to Supabase Storage, so plan for those separately. For health data, ${supabaseHipaa.value}; Supabase's pricing page lists HIPAA as a paid add-on on the Team plan, as of ${asOf("supabase-pro-price")}. Test permissions before launch by signing in as one customer and trying to open another customer's record.` },
      { question: "Can you build a Supabase backend or CRM for my business?", answer: "Yes. Our backend development service builds the database, the sign-in and permission rules, and a custom admin screen or CRM on top, in the same build. We build on Supabase's Free plan and move the project to Pro when it goes live, and the project can run on a Supabase account in your name." },
      { question: "Do you only build on Supabase?", answer: "No. Postgres helps with database portability, but moving a Supabase app also requires a plan for authentication, files, functions and configuration. We also build on MongoDB, other databases or an API your business already runs." },
      { question: "Does Vercel replace a backend?", answer: "Vercel can run backend code and offers storage and database integrations. In our example Supabase holds application records. You still need to design persistent storage, access permissions, backups and the data passing through functions and logs." },
    ],
  },
  {
    ...byline, id: "product-catalog-website-without-cart", title: "Product Catalog Website Without a Cart: Take Quote Requests",
    date: "Oct 7", published: "2026-10-07", lastModified: "2026-10-29", eyebrow: "Custom websites / Quotes instead of checkout",
    excerpt: "Selling custom products that need a quote before checkout? Build a catalog and enquiry form from one product list, with our free working example.",
    category: "Engineering", readTime: "6 min", illustrationType: "code", cardStat: "1 list", cardStatLabel: "Menus, quote form and sitemap from one product list",
    faqs: [
      { question: "Can I have a product catalog website without a shopping cart?", answer: "Yes. Each product page ends in a quote form instead of an add-to-cart button, and the enquiry reaches you by email with the product already filled in. It suits custom or made-to-order products where the price depends on the job." },
      { question: "Should every product catalog live in code?", answer: "No. A list in code suits a small catalog that a developer updates now and then. If staff change products often, keep the list in an editor like Sanity. If you need stock levels, online payment or shipping, use a store platform. Either way, keep one list that the whole site reads from." },
      { question: "Is the downloadable example client code?", answer: "No. We wrote it as a teaching example based on the approach in the Emblematic Studio case study. It contains no client data, code or results." },
    ],
  },
  {
    ...byline, id: "website-monthly-running-cost", title: "How Much Does a Website Cost per Month? Our Stack Runs Under $50",
    date: "Oct 8", published: "2026-10-08", lastModified: "2026-10-29", eyebrow: "Pricing / Monthly running costs",
    excerpt: `A custom website with a content editor costs about $20 a month to run on our stack, or about $45 with a database and sign-in. Prices as of ${asOf("vercel-pro-price")}.`,
    category: "Pricing", readTime: "6 min", illustrationType: "hosting", cardStat: "$45", cardStatLabel: "A month for hosting, editor, email and database",
    faqs: [
      // The $20 and $45 totals are sums of the spec-facts values below. Re-add them if a price changes.
      { question: "How much does it cost to run a website per month?", answer: `On our usual stack, about $20 a month for a custom website with a content editor: Vercel Pro hosting at ${vercelPro.value}, with Sanity and Resend on their free plans. Adding a Supabase database and sign-in, at ${supabasePro.value}, brings it to about $45. Prices as of ${asOf("vercel-pro-price")}. This baseline assumes one deploying seat, one Micro database project and free CMS/email allowances. Domains, taxes, maintenance, file backups and excess usage are extra.` },
      { question: "Can I host a business website on Vercel for free?", answer: `No. Vercel's Hobby plan is ${vercelHobby.value}, but only ${vercelHobby.qualifier}. A business website is commercial, so it needs the Pro plan at ${vercelPro.value}.` },
      { question: "Do I have to pay for Supabase during the build?", answer: `No. We build on Supabase's Free plan and move the project to Pro, ${supabasePro.value}, when it goes live. Free projects are paused after a week of inactivity and have no included automatic backups, so we don't run client production apps on them.` },
      { question: "Why did my hosting bill go up after the first year?", answer: `Shared hosts advertise first-term prices and renew at a higher rate. The SiteGround StartUp snapshot from ${asOf("siteground-startup-renewal")} shows ${sgIntro.value} ${sgIntro.qualifier}, renewing at ${sgRenewal.value}. The Bluehost Starter snapshot from ${asOf("bluehost-starter-intro")} shows ${bhIntro.value} ${bhIntro.qualifier}, renewing at ${bhRenewal.value}. These are dated offers; confirm current regional and checkout prices. Compare hosts by their renewal price and the length of the commitment.` },
      { question: "Who owns the domain?", answer: "You do. You buy it in your own name from a registrar. We've never bought a domain for a client, and most of our clients already owned theirs." },
      { question: "What happens to the hosting if I stop working with you?", answer: "On a maintenance or SEO package, hosting on our Vercel account is included if you want it. If you stop working with us, we move the site to a Vercel account in your name. We've done this for a client whose contract ended." },
    ],
  },
  {
    ...byline, id: "wordpress-to-nextjs-migration-agencies", title: "WordPress to Next.js Migration Agencies Compared (2026)",
    date: "Oct 24", published: "2026-10-24", lastModified: "2026-10-24", eyebrow: "Agencies / WordPress to Next.js",
    excerpt: "Who migrates WordPress sites to Next.js, what each says it costs and who each one fits, taken from their own pages. We're one of them, and we say so.",
    category: "Agency", readTime: "6 min", illustrationType: "cost", cardStat: "5 agencies", cardStatLabel: "Compared from their own pages",
    faqs: [
      { question: "Which agencies migrate WordPress sites to Next.js?", answer: `Webvello, eSEOspace, Lucky Media, INSYNC and Social Animal each describe a WordPress to Next.js or headless migration on their own sites, and so does PandaCodeGen. As of ${asOf("competitor-socialanimal-migration")}, three publish a starting price: eSEOspace from $3,000, INSYNC from €8,000 net and Social Animal from $15,000. Ours starts at $1,500.` },
      { question: "How much does a WordPress to Next.js migration cost?", answer: "It depends on pages, templates, redirects, integrations and what follows launch. Published starting prices among the agencies we checked run from $3,000 to $15,000, and PandaCodeGen's start at $1,500 for up to 7 pages, $3,500 for 8 to 20 pages and $5,000 for larger sites. Compare what each price includes, not just the total." },
      { question: "Can a small business afford a WordPress to Next.js migration?", answer: "Yes, if the site is small. A site of up to 7 pages starts at $1,500 with PandaCodeGen, fixed once the written scope is agreed. A large store or a site with hundreds of pages costs more with any agency." },
      { question: "How long does a WordPress to Next.js migration take?", answer: "The agencies we checked state a few weeks for a small site and up to ten or twelve for a large one. PandaCodeGen plans 1 to 2 weeks for Starter, 2 to 4 for Growth and 3 to 6 for Scale, and your written proposal gives the dates for your project." },
      { question: "Do I need Next.js to leave WordPress?", answer: "Not always. If a site is mostly content with few interactive features, a simpler framework can be enough, and one agency we checked defaults to Astro for that reason. Next.js suits sites that need logins, dashboards or per-request data. Ask any agency why it recommends the tool it does." },
    ],
  },
  {
    ...byline, id: "online-booking-small-business-website", title: "Adding Online Booking to a Small Business Website: Plugin, Builder or Custom",
    date: "Oct 25", published: "2026-10-25", lastModified: "2026-10-25", eyebrow: "Booking / Small business websites",
    excerpt: "When a scheduling tool is enough, when your builder's booking app is, and when booking must be custom. With the before and after from a training business.",
    category: "Guide", readTime: "6 min", illustrationType: "cost", cardStat: "3 routes", cardStatLabel: "Tool, builder or custom",
    faqs: [
      { question: "What is the easiest way to add online booking to a website?", answer: "Use a scheduling tool such as Cal.com or Calendly and embed or link it from your site. It works for one-to-one appointments and calls, and it takes an afternoon rather than a project." },
      { question: "Can I take payment when someone books?", answer: `Yes, on most routes, but the plan matters. As of ${asOf("booking-calendly-payments")}, Calendly ${spec("booking-calendly-payments").value}, and Wix ${spec("booking-wix-payments").value}. Cal.com ${spec("booking-calcom-free").value}.` },
      { question: "When do I need a custom booking system?", answer: "When booking is only the first step: class seats, fees that depend on the course or location, confirmation emails with dates and venue, certificates, or staff records that must match what was booked. A scheduling tool books a time slot and does not know about any of that." },
      { question: "Is a booking plugin or app safe for a business that takes card payments?", answer: "Payments should go through a processor such as Stripe, so card numbers never touch your website. Whichever route you choose, check that the booking tool hands payment to the processor and does not store card details itself." },
    ],
  },
];
