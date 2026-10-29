import { POST_LAUNCH_SUPPORT } from "@/data/company-facts";
// Centralized blog data - Add new posts here and they'll automatically appear in sitemap
//
// SERVER-ONLY: This module ships ~50KB of FAQ content per post when bundled to client.
// Importing 'server-only' enforces that this file never reaches the browser bundle.
// Client components must receive blog data via props from a server-component parent.
import 'server-only';
import { stackGuidePosts } from './stack-guides';
import { UPDATE_STATS, REGISTER_START, inProgressUpdate, longDate } from './google-updates';
import { COMMERCIAL } from './company-facts';
import { asOf, spec } from './spec-facts';
import { finding } from './research-facts';
import { OWNERSHIP_ON_HANDOVER, PORTABILITY_CHECKED_LABEL, portabilityFact, type PlatformId, type PortabilityItem } from './platform-portability';

/** A platform-portability row's plain-English detail, for the website-portability FAQs. Never retype these. */
const portable = (platform: PlatformId, item: PortabilityItem) => portabilityFact(platform, item)?.detail ?? '';

export type IllustrationType = 'wordpress' | 'speed' | 'code' | 'saas' | 'plugins' | 'traffic' | 'sales' | 'conversion' | 'ranking' | 'cost' | 'performance' | 'security' | 'aicommerce' | 'hosting' | 'webflow' | 'migration';

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  role: string;
  featured: boolean;
  illustrationType: IllustrationType;
  lastModified?: string; // For sitemap
  // Feeds FAQPage JSON-LD. NOT a Google rich-result lever any more: Google's own
  // docs carry a deprecation notice saying the FAQ rich result stopped appearing
  // in Search on 7 May 2026, and the feature documentation was removed on
  // 15 June 2026. Kept as a machine-readable mirror of useful visible answers.
  // No established citation boost is attributed to the markup itself.
  faqs?: FAQ[];
  // Optional per-post overrides for the blog card illustration. If omitted, falls back to
  // the illustrationType default in BlogPageClient's cardDisplay map. Use these when
  // multiple posts share an illustrationType and need a unique hook in the card visual.
  cardStat?: string;
  cardStatLabel?: string;
}

export const blogPosts: BlogPost[] = [
  ...stackGuidePosts,
    {
      id: "is-wix-bad-for-seo",
      cardStat: "10 controls",
      cardStatLabel: "What Wix lets you edit, and the limit on each",
      title: "Is Wix Bad for SEO? What Wix Controls in 2026",
      excerpt: "Wix renders pages on the server and lets you edit titles, slugs, canonicals, robots.txt, redirects and JSON-LD. Its real SEO limits, from Wix's own docs.",
      category: "SEO",
      readTime: "13 min",
      date: "Oct 4",
      author: "Hassan",
      role: "Co-founder, Lead Engineer",
      featured: false,
      illustrationType: "ranking",
      lastModified: "2026-10-29",
      faqs: [
        { question: "Is Wix bad for SEO?", answer: "No. Wix renders pages on the server, so search engines and AI crawlers get the content in the HTML, and it lets you edit titles, meta descriptions, slugs, canonical tags, robots.txt, 301 redirects and JSON-LD structured data. Its limits are specific: blog posts keep a prefix you can rename but not remove, a site holds up to 5,000 redirects, and each page takes up to five structured data markups. Check those against what you publish before blaming the platform." },
        { question: "Does Google rank Wix sites lower than other websites?", answer: "No. In a 2022 Google Search Central video, Google's John Mueller said Google's systems don't look for any particular content management system to treat it differently, and focus on the final page rather than how it was made. He named Wix among the platforms that can create pages that work well in search." },
        { question: "Can you remove /post/ from Wix blog URLs?", answer: "You can rename the post prefix, but cannot remove it entirely. The blog-feed and post prefixes must be different, so keeping the feed at /blog and posts under that same prefix is not supported. Check both prefixes before mapping a migration; this does not mean every URL containing /blog/ must change." },
        { question: "Do Wix sites pass Core Web Vitals?", answer: `On average, more often than WordPress sites. ${finding("almanac-2025-cms-cwv").statement} (HTTP Archive, Web Almanac 2025). Platform averages don't predict any one site, so check your own pages in Wix's Site Speed dashboard and in Google Search Console.` },
        { question: "How many redirects can a Wix site have?", answer: "Up to 5,000 per site, according to Wix's Help Center, imported up to 500 at a time from a CSV file. 301 redirects only work on a custom domain. The URL Redirect Manager cannot redirect the homepage, but Wix documents domain-to-domain redirection for that case. Blog slug changes need manual redirects." },
        { question: "Should I move off Wix to improve my SEO?", answer: "Only if a specific Wix limit blocks something you need, such as a required feed-and-post URL structure Wix cannot preserve, more than 5,000 redirects, or structured data beyond five markups a page. Run the seven checks in this guide first. Each one either finds a setting you can fix inside Wix or rules that cause out." },
      ],
    },
    {
      id: "gohighlevel-vs-wordpress",
      cardStat: "2 setups",
      cardStatLabel: "HighLevel's builder, or WordPress on the same CRM",
      title: "GoHighLevel vs WordPress for Your Website (2026)",
      excerpt: "HighLevel's builder or WordPress connected to the HighLevel CRM? Forms, calendars, tracking, speed, SEO control, cost and upkeep, from both vendors' docs.",
      category: "GoHighLevel",
      readTime: "15 min",
      date: "Oct 4",
      author: "Hassan",
      role: "Co-founder, Lead Engineer",
      featured: false,
      illustrationType: "code",
      lastModified: "2026-10-29",
      faqs: [
        { question: "Is GoHighLevel or WordPress better for a business website?", answer: "For funnels and landing pages for paid traffic, HighLevel's builder is the simpler choice: it's included in every HighLevel plan, and its forms, calendars and attribution need no connector. For a content-led site that has to rank, WordPress connected to HighLevel gives more control over URLs, the blog and the sitemap, at the cost of hosting and updates someone has to own. HighLevel stays the CRM either way." },
        { question: "Can I use WordPress with GoHighLevel?", answer: "Yes. HighLevel publishes a free LeadConnector plugin on WordPress.org that adds HighLevel forms, surveys, calendars, chat and review widgets to WordPress pages, and can import funnel steps as pages. You can also paste a form or calendar embed code into a Custom HTML block, or track your existing WordPress forms with HighLevel's External Tracking script." },
        { question: "Does GoHighLevel include WordPress hosting?", answer: `No. HighLevel sells WordPress hosting as an optional add-on, starting at ${spec("gohighlevel-wordpress-hosting-price").value} as of ${asOf("gohighlevel-wordpress-hosting-price")}, and its help center says all WordPress hosting plans are in addition to a HighLevel plan. You can also host WordPress anywhere else and connect it to HighLevel the same way.` },
        { question: "Will my HighLevel workflows still run if my website is on WordPress?", answer: "Yes, as long as leads still reach HighLevel: through a HighLevel form, calendar or survey embedded in WordPress, or through a form HighLevel's External Tracking script supports, such as Gravity Forms, WPForms or Contact Form 7. HighLevel says External Tracking doesn't support forms embedded through iframes or third-party widgets. Submit a test lead and check the workflow fires before launch." },
        { question: "Is GoHighLevel or WordPress better for SEO?", answer: "WordPress gives you more control. Its core publishes a sitemap automatically and lets you choose your permalink structure, and its plugins cover most other SEO needs. HighLevel documents page-level SEO tools, a sitemap generation workflow, blog URL constraints and an llms.txt editor. Check the live robots.txt, sitemap and indexing settings on your own domain; neither platform guarantees rankings or AI citations." },
        { question: "Which is faster, GoHighLevel or WordPress?", answer: "Neither has a fixed speed. HighLevel says a well-optimized HighLevel page typically scores above 80 on mobile and above 95 on desktop in PageSpeed tests. A WordPress site's speed depends on its host, theme and plugins. Measure the same page under the same test on whichever platform you are considering." },
      ],
    },
    {
      id: "ai-built-website-checklist",
      cardStat: "8 checks",
      cardStatLabel: "before launch and after changes",
      title: "AI-Built Website Checklist: 8 Checks Before Launch and After Changes",
      excerpt: "Check enquiries, payments, mobile use and search access on your AI-built website. Eight practical checks, evidence to save and when to repeat them.",
      category: "Engineering",
      readTime: "14 min",
      date: "Sep 17",
      author: "Hassan",
      role: "Co-founder, Lead Engineer",
      featured: false,
      illustrationType: "code",
      lastModified: "2026-09-17",
      faqs: [
        { question: "Can an AI-built website rank on Google?", answer: "Yes. The relevant question is whether the actual pages are accessible, useful and suitable for indexing. A builder's SEO report is useful evidence about its checks, rather than a guarantee of indexing or rankings." },
        { question: "My form says it sent, but nothing arrives. Where do I look?", answer: "A success screen is not proof of delivery. Read the recipient address the form is configured to notify, then search all mail rather than the inbox alone, including spam and any promotions tab. If the message is still missing, check the sending provider's delivery details and domain-verification status, as described in check 2." },
        { question: "Do I need all eight checks for a simple website?", answer: "Only the relevant ones. Record payments or accounts as not applicable if the site has neither. Keep the enquiry, usability, offer and operational checks that your business depends on." },
        { question: "Can AI help run these checks?", answer: "Yes. Supported tools can exercise interfaces, inspect code and interpret logs. Give them the expected result and verify what evidence they actually observed. A tool that cannot access the receiving inbox cannot confirm its contents." },
        { question: "Does a failed check mean I need a new website?", answer: "No. Investigate the cause first. A configuration change or repair may be sufficient; a rebuild needs a separate reason tied to what the business requires." },
      ],
    },
    {
      id: "is-it-cheaper-to-build-your-own-website",
      cardStat: "DIY or hire?",
      cardStatLabel: "compare cash spending, owner time and ongoing costs",
      title: "Is It Cheaper to Build Your Own Website? DIY vs Hiring",
      excerpt: "Compare DIY website costs with hiring a developer: subscriptions, owner time, a one- and three-year example, and when paying for help makes sense.",
      category: "Pricing",
      readTime: "10 min",
      date: "Sep 13",
      author: "Hassan",
      role: "Co-founder, Lead Engineer",
      featured: false,
      illustrationType: "cost",
      lastModified: "2026-10-08",
      faqs: [
        { question: "Is it cheaper to build your own website or hire someone?", answer: "DIY usually reduces upfront cash spending when a template and supported features fit. Include subscriptions, extras and your time, then compare them with a written quote for the same scope. Hiring can save work, but still takes your briefing and review time. Neither option is always cheaper over the life of the site." },
        { question: "What is the cheapest way to build a small-business website?", answer: "Start with the smallest plan that covers your actual requirements, prepare your content and use the included features before buying extras. Check the domain and plan renewal prices. A free plan can help you test an idea, but may not include your own domain or the payment and booking features you need." },
        { question: "Can I build a business website myself without coding?", answer: "Yes, if a builder's templates and supported features cover the job. Budget time for writing, setup, mobile checks and testing enquiries or orders. You can hire someone for one difficult task without commissioning a whole custom website." },
        { question: "Is $1,500 a good price for a website?", answer: `It depends on the scope, revisions, handover and support. PandaCodeGen's Starter offer is: ${COMMERCIAL.find(fact => fact.label === 'Starter')?.value ?? ''} Compare the written deliverables and ongoing bills, not just the starting price. Hosting is included on our maintenance or SEO packages if you want it, and otherwise agreed per client; maintenance is separately scoped and quoted.` },
        { question: "Are AI website builders cheaper than hiring a developer?", answer: "They can lower the cost of creating and editing a site, but the subscription is only part of the total. Include hosting or cloud usage, connected services, your checking time and any paid help. Some tools provide testing and monitoring; verify the features and limits of your chosen plan." },
        { question: "How much does a website cost per month after it is built?", answer: "Add the actual platform or hosting charge, domain renewal spread over the year, email, paid tools, usage or payment fees, and any agreed maintenance. Avoid charging hosting twice when it is included in a builder plan. There is no single monthly total that fits a brochure site, an online store and a custom application." },
        { question: "Do I own my website if I pay someone to build it?", answer: "Check the contract for control of the domain, content, accounts and custom source code. Third-party platform software, plugins and assets can remain licensed rather than owned. PandaCodeGen transfers or creates the custom source, design files, CMS models, documentation and production accounts under client control at handover." },
      ],
    },
    {
      id: "what-is-llms-txt",
      cardStat: "97%",
      cardStatLabel: "of llms.txt files got zero requests in May 2026",
      title: "What Is llms.txt? Here Is Ours, and Who Actually Reads It",
      excerpt: "llms.txt explained with our real, live file: the format, who actually reads it in 2026, and the two vendor claims everyone repeats that have no source.",
      category: "AEO",
      readTime: "9 min",
      date: "Sep 13",
      author: "Hassan",
      role: "Co-founder, Lead Engineer",
      featured: false,
      illustrationType: "code",
      lastModified: "2026-10-08",
      faqs: [
        { question: "What is an llms.txt file?", answer: "llms.txt is a plain Markdown text file at the root of your website (yoursite.com/llms.txt) that gives AI systems a structured summary of your business: who you are, your key facts, and links to your important pages with one line of context each. It was proposed by Jeremy Howard of Answer.AI in September 2024. Think of it as a welcome sheet for AI assistants, next to robots.txt (permissions) and sitemap.xml (inventory)." },
        { question: "Does Google use llms.txt?", answer: "Google Search does not. Google's AI optimization guide says you don't need llms.txt or other AI text files to appear in Google Search, including its generative AI features, because Search itself doesn't use them. Google's Lighthouse does check the file: the Agentic Browsing category added in May 2026 tests an llms.txt you publish against the format, and marks a missing file as not applicable rather than failed. So it will not rank you, and the check only matters once you publish one." },
        { question: "Which AI systems actually read llms.txt in 2026?", answer: "The heaviest confirmed users are AI coding tools like Cursor and GitHub Copilot, and Google's PageSpeed Agentic Browsing category checks the file if you publish one. Beyond that, be careful what you believe. Perplexity and Anthropic both publish an llms.txt for their own documentation, and that gets widely misreported as confirmation that their products read yours. We could not find an official statement from either company saying so. OpenAI has made no commitment, though GPTBot fetched llms.txt files more than any other AI bot in Ahrefs' server-log study. Adoption is real but early: most llms.txt files still receive no requests at all (97% in Ahrefs' May 2026 data), so treat the file as one cheap layer, not a strategy." },
        { question: "What should an llms.txt file contain?", answer: "The spec asks for an H1 with your name, a one-paragraph blockquote summary, and H2 sections of annotated links to your key pages. Beyond the spec, the highest-value additions are a \"how AI assistants should describe us\" instruction section, key facts written as short single-fact sentences, verifiable case-study numbers, and the questions where recommending you is the right answer. Keep every claim identical to what your website says." },
        { question: "What is the difference between llms.txt and llms-full.txt?", answer: "llms.txt is the map: a short index of your important pages with one line of context each. llms-full.txt is the cargo: the complete text of your key pages inlined into one large file, so an AI tool can ingest your whole knowledge base in a single request. Documentation-heavy products like Anthropic and Perplexity publish llms-full.txt; a typical business site only needs llms.txt." },
        { question: "llms.txt vs robots.txt: what is the difference?", answer: "robots.txt tells crawlers what they are allowed to access; llms.txt tells AI systems what your site means and which pages matter. They do opposite jobs: one restricts, the other explains. A site should have both, plus sitemap.xml for inventory. None of the three replaces the others." },
        { question: "Does llms.txt improve SEO rankings?", answer: "No. Google Search ignores it, so it has zero direct ranking effect. Its value is in AI visibility: the systems that demonstrably read it (AI coding tools, and Google's own PageSpeed check) get your facts in clean, quotable form, which makes accurate citations more likely. For actually getting cited, readable server-rendered pages, schema markup, and answer-first content carry far more weight; llms.txt is the summary layer on top." },
        { question: "How do I know if AI crawlers are reading my llms.txt?", answer: "Check your server logs for requests to /llms.txt from bot user agents like GPTBot, ClaudeBot, and PerplexityBot; on Vercel the request logs show this directly. Run PageSpeed Insights and check the Agentic Browsing category, which checks the file. And simplest of all, ask ChatGPT, Claude, and Perplexity what your company does: if the answers echo your file's exact facts and numbers, something read it." },
      ],
    },
    {
      id: "nextjs-sanity-stack",
      cardStat: "$0 / $15",
      cardStatLabel: "Current Free / Growth per-seat starting prices",
      title: "Next.js and Sanity in 2026: Fit, Cost and Tradeoffs",
      excerpt: "A current guide to Next.js with Sanity: rendering and content roles, editorial workflows, localization, pricing, security boundaries and when to use a simpler stack.",
    category: "Next.js",
    readTime: "16 min",
    date: "Jul 23",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "code",
      lastModified: "2026-10-08",
      faqs: [
        { question: "Is Sanity better than WordPress for Next.js?", answer: "Not universally. Compare the current products on the same content model, editor tasks, preview, localization, permissions, integrations, portability, security, support and three-year operating cost. The correct choice depends on the team and accepted requirements." },
        { question: "Do I need to know code to edit a Sanity website?", answer: "Editors can use a configured Sanity Studio without changing application code, but a developer normally designs and maintains the content schema, integrations, preview, validation and deployment. Test the real editor tasks before accepting the workflow." },
        { question: "How much does a Next.js + Sanity website cost?", answer: "Our tiers start at $1,500, $3,500 and $5,000, and a Next.js plus Sanity build usually lands in the middle two because the content model is the work. Sanity's own plan sits on top of that: it is free to start, and Growth adds private datasets, broader roles and pay-as-you-go capacity rather than more datasets or a bigger API allowance, which are identical on both plans. Model the seat count, because that is the line that grows." },
        { question: "Is Sanity free?", answer: "Sanity currently lists a $0 Free plan for individuals and smaller projects: 2 datasets, public only, and a 10,000-document limit. Growth is currently $15 per seat per month. It raises documents to 25,000 and lets the same 2 datasets be private, and it adds broader roles and pay-as-you-go capacity. It does not raise the other meters: API requests (250k/month), API CDN requests (1m/month), assets (100GB) and bandwidth (100GB) are identical on both plans, and only Growth can exceed them by paying. Checked 8 October 2026; recheck the official pricing page before approval." },
        { question: "Can Sanity handle multiple languages?", answer: "Sanity documents field-level and document-level localization patterns. The project must still implement translation relationships, slugs, fallbacks, locale routes, hreflang, canonicals, sitemaps, preview and publishing rules." },
        { question: "Sanity vs Contentful: which is better for Next.js?", answer: "There is no universal winner. Compare current plans and implementations on content structure, editor workflow, localization, permissions, APIs, preview, portability, security, support, usage and total operating cost." },
      ]
  },
  {
    id: "aeo-web-performance-glossary",
    cardStat: "26 terms",
    cardStatLabel: "AI-search, rendering & performance jargon defined in plain English",
    title: "AEO & Web Performance Glossary: 26 Terms Defined (2026)",
    excerpt: "A source-linked map of 26 AI-search, rendering, structured-data, and web-performance terms, including what each term does and does not prove.",
    category: "AEO",
    readTime: "24 min",
    date: "Jul 16",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "code",
    lastModified: "2026-10-08",
    faqs: [
      { question: "What is the difference between AEO and GEO?", answer: "AEO and GEO are overlapping industry labels for work intended to improve eligibility and clarity in search and generative answers. There is no universally settled boundary. The practical foundation remains crawlable, useful, evidence-led content, clear entities, and accurate technical implementation; none guarantees inclusion or citation." },
      { question: "What is the difference between CSR and SSR?", answer: "Client-Side Rendering uses browser JavaScript to create some or all content after the initial response; Server-Side Rendering returns rendered HTML from the server. Rendering support varies across crawlers and products, so important public content is safer when present in initial or server-rendered HTML. CSR alone does not prove that a site will be invisible." },
      { question: "Does llms.txt actually help SEO or AI visibility?", answer: "Not for Google, which has said it does not use llms.txt. Some other AI systems read it and it costs almost nothing to publish, so the honest position is that it is cheap insurance rather than a lever. What actually moves AI visibility is content that answers a question directly, in HTML, with something in it the other sources do not have." },
      { question: "What are Core Web Vitals?", answer: "Core Web Vitals are Google's user-experience metrics: Largest Contentful Paint for loading, Interaction to Next Paint for responsiveness, and Cumulative Layout Shift for visual stability. Google uses them in ranking systems alongside many other signals. PageSpeed Insights may show both real-user field data and a separate Lighthouse lab test." },
      { question: "What is query fan-out in AI search?", answer: "Query fan-out is a retrieval technique that expands a question into related searches or subtopics before a response is composed. Covering related user needs can make content more useful, but there is no fixed number of sub-queries and no guarantee that a page will be retrieved or cited." },
    ]
  },
    {
      id: "lovable-site-not-showing-on-google",
      cardStat: "2 stacks",
      cardStatLabel: "SSR or verified-crawler pre-rendering",
      title: "Lovable Site Not Showing on Google? A 2026 Diagnostic",
      excerpt: "Lovable apps now support SSR or crawler pre-rendering. Check publishing, indexing, canonicals, metadata, content and Search Console before any rebuild.",
      category: "SEO",
      readTime: "10 min",
    date: "Jul 12",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "ranking",
      lastModified: "2026-10-08",
      faqs: [
        { question: "Why is my Lovable site not showing up on Google?", answer: "First confirm that the latest project is publicly published, the intended URL is indexable, robots rules allow crawling and noindex directives do not exclude the page from indexing, the sitemap and canonical use the correct host, and Google Search Console has inspected the exact page. Current Lovable apps use server-side rendering or verified-crawler pre-rendering, so an empty-shell diagnosis must be demonstrated rather than assumed." },
        { question: "Do ChatGPT and Claude crawlers run JavaScript?", answer: "Do not apply Googlebot's rendering behavior to every AI product. OpenAI and Anthropic document product-specific user agents and robots controls, but those controls do not promise full browser-style JavaScript execution on every page. Keep important public content in the initial or server-rendered HTML, verify the response for the named user agent, review current provider documentation, and use server logs rather than an assumption." },
        { question: "Can I fix Lovable SEO without leaving Lovable?", answer: "Often, yes. Lovable documents an SEO and AI search review covering metadata, robots, sitemap, structured data and indexing, plus a Search Console workflow when its connector is enabled. The review no longer checks page speed, accessibility or mobile usability, so run PageSpeed Insights for those. Fix and verify the measured issue before deciding to migrate." },
        { question: "How much does it cost to migrate a Lovable app to Next.js?", answer: "Lovable exports a working codebase, so this is a refactor rather than a rebuild, which usually puts it in our $1,500 to $3,500 range. What moves it up is anything the prototype faked: auth, payments, a real content model, or data that has to survive the move. Price those individually rather than as one lump." },
        { question: "Google shows the wrong Lovable domain. What should I check?", answer: "Choose the intended primary custom domain, verify redirects and canonicals across connected hosts, publish the current configuration, verify the correct Search Console property, submit its sitemap and inspect priority URLs. Confirm live behavior instead of assuming every older subdomain is still reachable." },
        { question: "Is v0 better than Lovable for SEO?", answer: "A universal winner is not supported here. Compare the current products against the same route-level requirements and inspect the deployed output. Rendering, metadata, content, links, performance, ownership and operational fit all matter; no builder guarantees indexing or ranking." },
        { question: "Will migrating my React site to Next.js hurt my existing rankings?", answer: "The risk is concentrated in one place: whether the new site renders the same content into HTML that the old one did. Build a dated URL inventory, map every old address to its replacement, and compare the rendered output of a representative page before and after. Rankings, indexing and recovery timing remain search engines' decisions, so plan for a dip and monitor rather than promising there will not be one." },
      ]
  },
  {
    id: "fix-meta-ad-tracking-2026",
    cardStat: "Trace",
    cardStatLabel: "Reconcile the record, browser event, server event and consent state",
    title: "Meta Ad Tracking Not Working? A 2026 Diagnostic Guide",
    excerpt: "A consent-aware method for reconciling orders and Meta events, debugging browser and server delivery, and preventing duplicate events.",
    category: "Measurement",
    readTime: "14 min",
    date: "Jul 6",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "conversion",
    lastModified: "2026-10-08",
    faqs: [
      { question: "Why do Meta and my store show different conversion totals?", answer: "They may answer different questions. Reconcile the same event definition, time zone, date range, order state, test and refund treatment, and attribution window. Separate event delivery from ad attribution before calling the integration broken." },
      { question: "Why is my Meta Pixel not firing?", answer: "Check consent state, the expected Pixel or dataset ID, duplicate or stale integrations, browser requests, script errors, navigation timing, extensions and vendor diagnostics. Diagnose the affected session instead of assuming one universal cause." },
      { question: "Does Conversions API bypass consent or browser privacy choices?", answer: "No. It is a server data path, not a consent bypass. Configure collection and sharing under applicable law, current notices and choices, Meta terms, and your actual data-processing roles. Hashing an identifier does not by itself remove those duties." },
      { question: "How do I prevent duplicate browser and server events?", answer: "For one business occurrence, Meta's current documentation describes sending matching event names and event IDs through the browser and server paths. Verify the result in diagnostics and never reuse the occurrence ID for a different event." },
      { question: "What does Event Match Quality prove?", answer: "It is a Meta diagnostic about customer information parameters that may help matching. It is not a universal minimum and does not guarantee attribution, lower acquisition cost, conversion lift, or revenue." },
      { question: "Will server-side tracking recover all missing conversions?", answer: "No. It may improve event delivery when correctly implemented, but consent, data availability, event quality, deduplication, attribution rules and platform systems still affect reporting. Measure the result under a defined scope." },
      { question: "How should I test a Shopify Meta integration?", answer: "Use current Shopify and Meta documentation for the installed sales-channel integration. Verify data-sharing and consent settings, then test event names, IDs, values, currency, deduplication and diagnostics. Do not assume an app install or another store's result proves your setup." },
      { question: "Why are my ads getting clicks but no conversions?", answer: "Separate three failures before touching the integration. Delivery: confirm the event actually reached Meta using the Test Events tool in Events Manager, not a preview. Deduplication: Meta discards a duplicate when the browser eventID matches the server event_id and the browser event matches the server event_name on the same dataset within 48 hours, so a mismatched ID can hide a real sale. Mapping: confirm the standard event your campaign optimises for is the same one your site sends. Only then look at attribution, because a sale can be recorded correctly and still fall outside the reporting window or be credited elsewhere. Consent declines also stay uncounted by design." },
    ]
  },
  {
    id: "wix-migration-cost",
    cardStat: "4 tiers",
    cardStatLabel: "Scope pages, data, apps and acceptance",
    title: "Wix Migration Cost in 2026: Scope, Tiers and Export Guide",
    excerpt: "Price a Wix migration from pages, CMS collections, products, contacts, orders, apps, URLs, integrations, acceptance and cutover instead of assuming one full-site export.",
    category: "Wix",
    readTime: "14 min",
    date: "Jul 3",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "migration",
    lastModified: "2026-10-24",
    faqs: [
      { question: "How much does it cost to migrate off Wix?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with complex work scoped separately. Final price depends on templates, content, CMS data, commerce, apps, integrations, redesign, SEO, accessibility, QA, cutover and support." },
      { question: "Can I export my Wix site and import it somewhere else?", answer: "Do not treat Wix as one universal full-site export. Wix currently documents separate export or transfer paths for CMS collections, contacts, physical products, orders and site ownership. Design, layout, app behavior, digital products and target compatibility need item-by-item discovery and may require rebuilding." },
      { question: "Will I lose my Google rankings when I leave Wix?", answer: "The Wix-specific risk is URL shape. Wix uses patterns like /post/ and /blog-1/ that rarely survive into a new information architecture, so almost every address changes and almost every address needs a mapped redirect. Inventory them from a crawl plus Search Console before you design the new structure, not after. A dip during reprocessing is normal; a slow silent decline is a broken mapping." },
      { question: "How long does a Wix migration take?", answer: "Most Wix migrations we scope land between two and six weeks, and the variable is almost never the page count. It is how many distinct templates hide behind those pages, how clean the exported content is, and how fast your side approves. Your existing Wix site stays live throughout; the cutover is the only moment anything changes." },
      { question: "How should I compare two Wix migration quotes?", answer: "Normalize the same URL, template, content, data, app, design, integration, accessibility, analytics, SEO, QA, launch, ownership and support scope. A lower price is not comparable when it excludes data reconciliation, redirect mapping, transaction tests or post-launch responsibility." },
      { question: "Can I take my domain and business accounts with me?", answer: "Wix documents site and domain transfer controls, but eligibility and steps depend on the asset and current account. Inventory the domain, DNS, email, analytics, search, payments and other business accounts, then put client control and handoff responsibilities in the accepted scope." },
      // 24 Oct 2026: a question people ask on Reddit ("how to quit Wix but keep my domain and email"). Wix's own
      // steps are in the registry; the Google Workspace billing route was NOT verified, so it is advice, not a claim.
      { question: "How do I leave Wix but keep my domain and business email?", answer: `Have your new website ready before you switch the domain, because the Wix site is disconnected as soon as the domain moves. If you bought Google Workspace through Wix, contact Wix Customer Care first to transfer it to Google. As of ${asOf("wix-workspace-transfer")}, Wix says this disconnects the business email from your Wix account, is irreversible, and means you can't buy it through Wix again. Then follow Wix's domain transfer process (as of ${asOf("wix-domain-transfer-rules")}): unlock the domain and use the authorization code Wix emails to the registrant contact (.co.uk and .uk domains use an IPS tag instead). A domain can't be transferred within 60 days of purchase, of a registrant contact change or of a previous transfer. Add the MX records again at your new DNS provider, and test incoming and outgoing email. Cancel the Wix website plan only after the new site and the email both work. Wix's article doesn't state a transfer fee, so ask your new registrar what it charges.` },
      { question: "Can I migrate off Wix myself?", answer: "A small site can be rebuilt by its owner if the owner can inventory content, reproduce required behavior, map URLs, validate metadata and accessibility, test forms and commerce, and monitor launch. The relevant cost is time, risk and required quality, not an unsupported universal multiplier." },
      { question: "When can I cancel Wix?", answer: "Keep the source available through extraction, review and cutover as the accepted plan requires. Cancel only after the new site, DNS, redirects, forms, commerce, analytics and account handoff are verified and the rollback or reference window has ended. Do not use one universal number of billing cycles." },
    ]
  },
  {
    id: "woocommerce-migration-cost",
    cardStat: "4 tiers",
    cardStatLabel: "Price catalog, records, payments and storefront",
    title: "WooCommerce Migration Cost in 2026: Data, Scope and Tiers",
    excerpt: "Price a WooCommerce migration from products, customers, orders, payments, subscriptions, extensions, content, SEO, acceptance, cutover and operating responsibility.",
    category: "WooCommerce",
    readTime: "13 min",
    date: "May 8",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "cost",
    lastModified: "2026-10-09",
    faqs: [
      { question: "How much does it cost to migrate off WooCommerce to a custom site?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with commerce, subscriptions, regulated data and complex integrations potentially requiring custom scope. Final price follows the signed inventory and acceptance criteria." },
      { question: "Will I lose my SEO rankings during the migration?", answer: "Product and category URLs carry the revenue, so map those first and in full, including variations, out-of-stock items and paginated archives. Keep the product structured data matching what is visible on the page. Search engines control indexing and recovery timing, so the measurable goal is that nothing 404s and nothing loses its structured data, not a promised ranking." },
      { question: "Is it cheaper to optimize WooCommerce instead of migrating?", answer: "Sometimes. Compare repair, optimization, headless WooCommerce and replacement against the same capabilities, operating costs, risk and acceptance criteria. Profile the current bottlenecks before assuming a rebuild is necessary or that it has a universal payback." },
      { question: "Why can WooCommerce migration quotes differ so much?", answer: "Quotes can include different catalog, customer, order, subscription, payment, extension, design, compliance, testing, governance and support work. Normalize the statements of work before judging whether two prices cover the same result." },
      { question: "How long does the migration take and will my store go down?", answer: "Timeline and interruption risk depend on data volume, extensions, payment paths, integrations, review and cutover design. Test migrations, final data delta, transaction checks, rollback triggers and any permitted write freeze belong in the accepted plan. Universal zero interruption is not promised." },
    ]
  },
  {
    id: "woocommerce-vs-custom-website",
    cardStat: "3 paths",
    cardStatLabel: "WooCommerce, headless Woo or custom commerce",
    title: "WooCommerce vs Custom Website in 2026: A Requirements Guide",
    excerpt: "Compare WooCommerce, headless WooCommerce and custom commerce across capabilities, editing, performance, security, SEO, data, ownership, operating cost and exit.",
    category: "WooCommerce",
    readTime: "14 min",
    date: "May 20",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "performance",
    lastModified: "2026-10-08",
    faqs: [
      { question: "When should I optimize WooCommerce instead of rebuilding?", answer: "Optimize when WooCommerce capabilities and editing fit, measured bottlenecks are repairable, and the team can maintain hosting, extensions, security and operations. Compare the repaired option with headless and replacement using the same acceptance criteria." },
      { question: "How much does it cost to move from WooCommerce to a custom website?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with complex commerce scoped separately. Final price depends on the capability, data, integration, design, compliance, testing, cutover and support inventory." },
      { question: "Will I lose SEO rankings or order history if I rebuild?", answer: "A controlled plan maps URLs and reconciles authorized order data, but neither outcome is automatic. Use stable URLs where practical, relevant redirects, rendered SEO checks, data counts and financial reconciliation, transaction tests and post-launch monitoring. Search engines still control ranking and indexing outcomes." },
      { question: "Do I actually own my store if I leave WooCommerce?", answer: "Client content, data, brand assets, and client-controlled accounts remain the client's. Rights in paid custom deliverables, repository transfer, reusable PandaCodeGen tools or templates, and embedded third-party components are defined in the accepted project terms. Third-party components keep their original licenses." },
      { question: "Is a custom site overkill for a small store?", answer: "It can be when maintained WooCommerce capabilities already meet the brief. Choose custom only when differentiated workflows or repeated constraints justify discovery, build, validation and long-term product ownership." },
      { question: "Can non-developers update a custom website?", answer: "Yes when the scope includes a suitable CMS and operational interface. Test product, page, promotion, preview, approval, scheduling and rollback workflows before acceptance. Structural features and integrations may still need engineering." },
      { question: "Is a custom website more secure than WooCommerce?", answer: "Not automatically. WooCommerce and custom systems both have dependencies, infrastructure, privileged access and vendors. Compare patch ownership, least privilege, secrets, logging, backups, recovery, testing and incident response for the proposed implementation." },
    ]
  },
  {
    id: "agentic-browsing-pagespeed-score",
    cardStat: "3/3",
    cardStatLabel: "Scored checks in the reviewed snapshot",
    title: "Lighthouse Agentic Browsing Checks Explained (2026)",
    excerpt: "A dated review of the Agentic Browsing checks shown in the audit snapshot, what was scored, what was marked not applicable, and why no technical score guarantees AI inclusion or sales.",
    category: "AEO",
    readTime: "18 min",
    date: "Jun 19",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "aicommerce",
    lastModified: "2026-10-08",
    faqs: [
      { question: "My PageSpeed report says Agentic Browsing 0 of 3. What does that mean?", answer: "It means none of the three checks Google currently scores in that category passed on the page you tested. The category is experimental and the checks are narrow, so a 0 of 3 is not a verdict on whether an assistant can read your site at all. It is a signal that the specific things Google decided to measure are absent. Run the report again on your most commercial page rather than the home page, because the checks are per-URL and the page you want cited is usually not the one you tested first." },
      { question: "How do I fix a failing Agentic Browsing score?", answer: "Open the category in the report and read which of the three checks failed: the accessibility tree, layout shift, or llms.txt. The fix differs for each and none of them is a setting you toggle. The WebMCP and ai-catalog.json audits usually show as not applicable and don't count toward the three. Fixing the accessibility and layout checks is ordinary content and markup work rather than anything AI-specific, which is why the honest advice is usually to fix the page rather than to add a file." },
      { question: "Does a low Agentic Browsing score mean ChatGPT cannot read my site?", answer: "No, and treating the two as the same thing is the most common misreading. Agentic Browsing is a Google Lighthouse category measuring three specific things on one URL. It says nothing about what ChatGPT, Claude or Perplexity can fetch, because none of those publish a comparable score. A site can fail all three checks and still be quoted by an assistant, and it can pass all three and never be mentioned. The score is a technical hint, not a visibility measurement." },
      { question: "What is Agentic Browsing in Google PageSpeed Insights?", answer: "Agentic Browsing is an experimental Lighthouse category documented by the Chrome team. It uses deterministic checks and reports a fractional pass ratio plus individual pass, warning, or error results rather than a weighted 0-to-100 score. It is not a Google Search ranking score and does not prove that any particular agent can complete a task." },
      { question: "What does the Agentic Browsing score actually check?", answer: "Chrome's May 2026 documentation groups the checks around WebMCP integration, agent-relevant accessibility, layout stability, and llms.txt discoverability. The exact result depends on the Lighthouse and Chrome versions, page state, and registered tools. Because the category is experimental, record the environment and review individual audit details instead of relying only on the ratio." },
      { question: "Why does my WebMCP check show 'Not Applicable' or 'Unscored'?", answer: "Current Chrome documentation says the Agentic Browsing category requires Chrome 150 or later and WebMCP audits require registration for the WebMCP origin trial. A result can therefore be unavailable when the browser, origin-trial setup, page, or tool registration does not meet those conditions. Check the current audit detail instead of assuming one universal cause." },
      { question: "How do I make my website ready for AI agents?", answer: "Make the content readable without JavaScript, give every interactive element a real accessible name and role, and keep the page structure semantic. An agent navigates through the accessibility tree, so the accessibility work you have been postponing is the agent-readiness work. Nothing about this guarantees an agent will use your site, but a page it cannot parse is one it cannot use." },
      { question: "Does AI actually read my llms.txt file?", answer: "Some systems fetch it, Google says it does not use it for Search, and no one publishes a reliable figure on the rest. Publish it if you like because it costs a few minutes, but do not treat it as a visibility strategy. Check your own server logs for requests to it: that is the only evidence about your site specifically that anyone can actually get." },
      { question: "Should I build WebMCP on my site now?", answer: "Treat WebMCP as an experimental integration decision. Build a prototype only when a named user journey, supported browser or agent, security review, origin-trial requirements, maintenance owner, and measurable acceptance test justify it. Strong semantic HTML and accessible forms are useful now regardless of whether WebMCP is adopted." },
    ]
  },
  {
    id: "custom-website-5000-whats-included",
    cardStat: "$5,000+",
    cardStatLabel: "Scale starting price, finalized in the SOW",
    title: "Custom Website Starting at $5,000: Scope Guide (2026)",
    excerpt: "How PandaCodeGen scopes its Scale tier, including migration, performance, support, payment, ownership, exclusions, and change control.",
    category: "Guide",
    readTime: "11 min",
    date: "Jun 14",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "cost",
    lastModified: "2026-10-09",
    faqs: [
      { question: "How much does a custom website cost with PandaCodeGen in 2026?", answer: "PandaCodeGen's planning tiers begin at $1,500 for Starter and $3,500 for Growth, while Scale starts at $5,000. The accepted proposal or SOW sets the final price after the page, template, content, integration, data, migration, security, compliance, and acceptance scope is known." },
      { question: "What is included in a custom website starting at $5,000?", answer: "Scale can include a custom Next.js frontend, content editing, URL and metadata migration, redirects, integrations, responsive implementation, security and accessibility work, performance acceptance tests, staged launch, documentation, and support. Only the items in the accepted SOW are included; the tier itself is not a universal feature bundle." },
      { question: "Why is $5,000 a starting price instead of one fixed price?", answer: "Page count alone does not describe the work. Templates, content states, commerce, accounts, forms, data, CRM, tracking, consent, localization, search, third parties, migration history, and acceptance risk can change the scope. PandaCodeGen documents a fixed project quote or another agreed structure after discovery." },
      { question: "How do payment and refunds work?", answer: "A common payment structure is 30% at onboarding and 70% at the delivery milestone defined in the accepted terms, although another schedule can be agreed. Refund triggers, amount, cure process, cancellation, and work-in-progress treatment are contract-specific. The intended up-to-100% remedy applies when PandaCodeGen fails to deliver the signed scope under the agreement, not as an unconditional change-of-mind promise." },
      { question: "What support is included?", answer: `${POST_LAUNCH_SUPPORT} The accepted terms define coverage, normally defects in signed deliverables and stated minor adjustments. New features, extra pages, client changes, and third-party changes are separately scoped unless the agreement says otherwise.` },
      { question: "Do I own the code, and can I change providers?", answer: "The client keeps its content, data, brand assets, and client-controlled accounts. Rights in paid custom deliverables and repository transfer follow the accepted terms, normally after full payment. PandaCodeGen retains reusable internal tools, templates, methods, and pre-existing code; third-party components retain their original licenses." },
    ]
  },
    {
      id: "meta-conversions-api-setup-cost",
      cardStat: "6 inputs",
      cardStatLabel: "Events, systems, consent, matching, QA and monitoring",
      title: "Meta Conversions API Setup Cost: A Scope-Based Guide",
      excerpt: "Plan Meta Conversions API cost from events, systems, consent, matching, deduplication, QA and monitoring, with a carefully labelled Panda Patches screenshot.",
      category: "Measurement",
    readTime: "18 min",
    date: "Jun 14",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "conversion",
      lastModified: "2026-10-08",
      faqs: [
        { question: "How much does Meta Conversions API setup cost in 2026?", answer: "There is no responsible universal price. Quote the exact event set, source systems, consent requirements, matching data, browser and server deduplication, testing, reconciliation, monitoring, processors and support. PandaCodeGen can include an accepted CAPI scope in a Scale project starting at $5,000, but that starting tier is not a quote for every implementation." },
        { question: "Is the Meta pixel enough on its own?", answer: "It depends on the accepted measurement requirements and observed event coverage. Meta documents using Conversions API alongside the pixel for a more reliable connection, but the actual gap must be reconciled against the site's system of record. Server delivery does not bypass consent, privacy obligations or Meta's terms." },
        { question: "What is the difference between a managed tool and a direct setup?", answer: "A native, partner or gateway option may reduce custom work but adds its supported-event limits, terms, data path and possible recurring charges. A direct integration offers more implementation control but still depends on Meta and infrastructure and requires secure credentials, testing, monitoring and maintenance. Compare current vendor terms and the complete operating model." },
        { question: "Will server-side tracking actually improve my ad performance?", answer: "Meta recommends using Conversions API with the pixel for a more reliable connection, subject to consent and Meta's current terms. Measure event coverage, match-key quality, deduplication, and reconciliation against the system of record. A dated Panda Patches screenshot is a first-party platform-reporting example, not a controlled lift study, benchmark, or guarantee." },
        { question: "Do I need the Conversions API if I am not on Shopify?", answer: "The decision is platform-independent. Start with the accepted events and system of record, then measure browser delivery and determine whether a supported server source can improve reliability. There is no universal traffic, spend or revenue threshold." },
        { question: "Is Conversions API included in a PandaCodeGen build?", answer: "It can be included in an accepted Scale project starting at $5,000 when the signed scope names the required events, systems, consent behavior and acceptance evidence. It is not automatically included in every build, and complex requirements can change the price." },
      ]
  },
  {
    id: "spending-more-on-ads-fewer-orders-tracking",
    cardStat: "Reconcile",
    cardStatLabel: "Platform events against the system of record",
    title: "Spending More on Ads but Getting Fewer Orders? Audit Tracking",
    excerpt: "Reconcile platform events with the system of record, diagnose browser and server coverage, and improve consented measurement without assuming attribution or performance lift.",
    category: "Ad Tracking",
    readTime: "12 min",
    date: "Jun 4",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "conversion",
    lastModified: "2026-10-29",
    faqs: [
      {
        question: "Why are my ad costs going up but my orders staying flat?",
        answer: "The cause could be auction costs, audience, offer, product availability, site experience, checkout, measurement loss, or several factors together. Reconcile spend, clicks, sessions, orders and revenue by account, market, device and date before assigning the cause to tracking."
      },
      {
        question: "What is Event Match Quality (EMQ) and why does it matter?",
        answer: "Meta describes Event Match Quality as a diagnostic showing how customer-information parameters may support event matching. Treat it as one implementation signal, not a promised CPA or ROAS outcome. Send only permitted data, normalize and hash where required, preserve consent, and test event quality and deduplication."
      },
      {
        question: "Do Google and AI shopping also need this kind of tracking?",
        answer: "Google Ads has its own measurement products and consent requirements. AI discovery is a separate question: crawlable content and accurate structured data can improve machine readability, but conversion tracking does not guarantee inclusion, ranking, recommendation or citation by an AI system."
      },
      {
        question: "How much does server-side tracking cost if I add it to my platform store?",
        answer: "Cost depends on the required events, platform support, data sources, consent behavior, gateway or cloud fees, custom engineering, QA and maintenance. Compare a current vendor or native quote with a direct implementation using the same event contract and operating period."
      },
      {
        question: "Why does a custom-coded site handle ad tracking better than a platform store?",
        answer: "Custom code can provide more control over the data layer, but it also creates implementation and maintenance responsibility. A managed platform integration may be more reliable when it supports the required events. Compare observed coverage, consent, supported checkout events, credentials, monitoring, vendor changes and ownership instead of assuming one model always wins."
      },
      {
        question: "Is this tracking setup included in a PandaCodeGen build?",
        answer: "It can be included when the signed scope names the platforms, events, data sources, consent behavior, reconciliation method and acceptance evidence. It is not automatically included in every package, and complex data or checkout requirements can change scope and price."
      }
    ]
  },
  {
    id: "will-migrating-hurt-my-seo",
    cardStat: "Risk-led",
    cardStatLabel: "URL mapping, rendered checks and monitoring",
    title: "Will Migrating My Website Hurt SEO? A 2026 Risk Guide",
    excerpt: "A site migration can change crawling, indexing and ranking signals. Reduce avoidable risk with a URL inventory, relevant redirects, rendered checks, cutover controls and Search Console monitoring.",
    category: "Guide",
    readTime: "8 min",
    date: "Jun 3",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "ranking",
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Will I lose my Google rankings if I migrate my website?",
        answer: "It can, and no one can promise you a standard dip-then-recovery curve, because search engines control indexing and timing. What is in your control is the avoidable part: unmapped URLs, content that got thinner in the rebuild, and pages that render differently to a crawler than to you. Those three cause most real losses. Read the shape of your own curve afterwards rather than the first week's number."
      },
      {
        question: "What URL mistake can create migration risk?",
        answer: "Leaving valuable old URLs without a documented disposition is a major avoidable risk. Keep useful URLs stable where practical; otherwise use a server-side permanent redirect to a relevant successor, then update internal links, canonicals and sitemaps and test the result. No single cause explains every traffic change."
      },
      {
        question: "How long does it take for traffic to recover after a migration?",
        answer: "Nobody can give you a number, because search engines control reprocessing and timing, and anyone quoting you a fixed recovery window is guessing. What you can do is read the shape rather than wait on a date. A dip that bottoms out and starts climbing is reprocessing. A slow decline that never bottoms out is a defect, usually an unmapped URL, a redirect chain, a canonical pointing somewhere unintended, or a template that dropped content nobody noticed. Compare like-for-like date ranges in Search Console by page and query rather than sitewide totals, because the two patterns look identical for the first fortnight."
      },
      {
        question: "Besides redirects, what else can hurt SEO during a migration?",
        answer: "Four things that don't show up as an obvious error: titles, descriptions and structured data dropped or reset to platform defaults; a new build that's slower for real visitors; broken internal links, navigation or breadcrumbs; and a wrong canonical tag or an accidental robots.txt block. Check all four before and after launch."
      },
      {
        question: "Does moving to a faster platform like Next.js help or hurt SEO?",
        answer: "A framework does not determine SEO outcomes. Verify crawlable rendered content, metadata, canonicals, internal links, structured data, sitemaps and representative performance. Better performance can improve user experience, but it does not guarantee ranking or traffic gains."
      },
      {
        question: "How does PandaCodeGen reduce migration SEO risk?",
        answer: "The accepted plan can include a dated URL inventory, stable URLs where practical, relevant redirect mapping, rendered metadata and canonical checks, internal-link and sitemap validation, analytics, Search Console monitoring, release evidence and rollback triggers. Rankings, traffic and recovery timing are not guaranteed."
      }
    ]
  },
  {
    id: "how-long-does-a-custom-website-take",
    cardStat: "5 phases",
    cardStatLabel: "Discovery through tested cutover and handoff",
    title: "How Long Does a Custom Website Take? A 2026 Schedule Guide",
    excerpt: "Build a defensible schedule from inventory, content, design, integrations, review, QA and cutover instead of a universal timeline.",
    category: "Guide",
    readTime: "11 min",
    date: "Jun 3",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "performance",
    lastModified: "2026-10-09",
    faqs: [
      {
        question: "How long does it take to build a custom website in 2026?",
        answer: "A twelve-week project is rarely twelve weeks of work. Planning takes days, design and build take weeks, testing takes days, and the rest is waiting: for content, for approvals, for a decision that needs three people in a room. Content is the single most common delay on every project we run, which is why we start it before design rather than after."
      },
      {
        question: "Why do other agencies say a website takes 8 to 16 weeks?",
        answer: "Ask what the range includes and which assumptions it uses. Inventory, content, design, integrations, review windows, vendor lead time, QA, cutover and support can differ materially. A range without a comparable scope and schedule method is not a reliable benchmark."
      },
      {
        question: "What is the single biggest thing that slows a website project down?",
        answer: "Content readiness is a common schedule dependency. A project with approved copy, images, decision owners, and prompt review can move faster than one that still needs subject-matter review, permissions, or several approval rounds. The written scope should identify who supplies each asset, the review window, and how client-side delays affect the delivery schedule."
      },
      {
        question: "Do I need to have a design ready before you start?",
        answer: "Not necessarily. The accepted scope can include design, but the schedule must then include discovery, references, component and page states, responsive behavior, accessibility, review rounds and approval. Arriving with an approved design may reduce design work but can add implementation clarification."
      },
      {
        question: "Can you build a website in a week?",
        answer: "A narrowly scoped, content-ready site can sometimes use a compressed plan, but PandaCodeGen does not publish a universal seven-day promise. A rush scope must define included and deferred work, dependencies, review cadence, quality gates, price, risk and acceptance."
      },
      {
        question: "How do you make builds faster than a typical agency?",
        answer: "Use a verified inventory, reusable internal tools, explicit decision owners, parallel work where dependencies permit, small review batches, automated checks and recorded acceptance. Speed still depends on scope and should not remove security, accessibility, SEO, integration, cutover or rollback gates."
      },
      {
        question: "Did PandaCodeGen deliver MyCustomPatches in 22 days?",
        answer: "MyCustomPatches' owner reports a delivery of about 22 days. It is a project example, not a market average or promise. A comparison still needs the project's inventory, scope, phase dates, paused-time policy, review rounds and definition of delivery."
      }
    ]
  },
  {
    id: "do-you-own-your-website",
    cardStat: "8 controls",
    cardStatLabel: "rights, accounts, data, access, and handover",
    title: "Do You Own Your Website? A Contract and Control Checklist",
    excerpt: "Check copyright, licenses, source access, domain, hosting, repository, business accounts, data, payment, and handover terms before onboarding.",
    category: "Guide",
    readTime: "12 min",
    date: "Jun 3",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "code",
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Do I own my website if an agency builds it?",
        answer: "Payment alone does not answer every ownership question. The agreement should identify custom deliverables, copyright assignment or license, transfer timing, agency pre-existing materials, third-party licenses, source access, accounts, data, and handover. U.S. work-made-for-hire and transfer rules are fact-specific, so qualified counsel should review the actual contract."
      },
      {
        question: "What do I need to control to operate and move my website?",
        answer: "Document custom deliverables, source and repository access, domain and DNS, hosting and infrastructure, CMS, data, analytics, email, commerce, CRM, advertising, billing, recovery, vendor contacts, licenses, documentation, and deployment or restore procedures. Use company-controlled ownership and individual least-privilege roles where practical."
      },
      {
        question: "What happens to my website if my developer disappears or we stop working together?",
        answer: "The result depends on account ownership, credentials, billing, licenses, documentation, support, and the exit clauses. A resilient handover lets the client or replacement provider deploy, restore, edit, change DNS, contact vendors, and rotate access. Test those tasks before the engagement ends instead of assuming repository access is enough."
      },
      {
        question: "Can I edit my website myself, or do I have to pay the developer for every change?",
        answer: "Editing rights depend on the selected CMS, roles, content model, training, and contract. Ask which fields and content types are editable, who can publish, which structural changes require code, and what support or new work costs. Do not assume every custom build includes the same editor experience."
      },
      {
        question: "Does receiving the source code mean I own everything?",
        answer: "No. A repository can contain client-owned materials, paid custom deliverables, agency pre-existing tools, and third-party components under separate licenses. The contract should state which rights transfer, which items are licensed, which remain excluded, what branch and documentation are delivered, and whether another provider can operate the project."
      },
      {
        question: "How does PandaCodeGen handle ownership?",
        answer: "The client keeps its content, data, brand assets, and client-controlled accounts. Rights in paid custom deliverables and repository transfer follow the accepted terms, normally after full payment. PandaCodeGen retains reusable internal tools, templates, methods, and pre-existing code, while third-party components retain their original licenses. The SOW names account ownership, access, billing, handover, and exit duties."
      }
    ]
  },
    {
      id: "saas-price-increases-2026-tracker",
      cardStat: "3 changes",
      cardStatLabel: "Primary-source billing watchlist",
      title: "SaaS Price Changes in 2026: A Verified Watchlist",
      excerpt: "A primary-source watchlist for Microsoft 365, Webflow and Klaviyo billing changes, with effective-date, renewal, unit and invoice checks.",
    category: "Pricing",
      readTime: "11 min",
    date: "May 31",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "saas",
      lastModified: "2026-10-20",
      faqs: [
        { question: "Which SaaS changes are verified in this watchlist?", answer: "The page covers Microsoft's July 1, 2026 commercial Microsoft 365 changes, Webflow's phased May 2026 Site-plan restructure, and Klaviyo's February 2025 active-profile billing policy because it can still affect 2026 invoices. Each row links to a primary vendor source." },
        { question: "How much did SaaS prices increase in 2026?", answer: "There is no universal percentage. The result depends on vendor, SKU, region, channel, contract, renewal, billed units, usage and discounts. Calculate each change from the account's current invoice and dated renewal quote." },
        { question: "What is a billing-unit change?", answer: "It changes which users, profiles, contacts, messages, transactions or other units count toward a plan. The published price can stay the same while the billed quantity changes. Verify the vendor definition and your actual invoice rather than applying a generic impact percentage." },
        { question: "How do I protect my business from SaaS price changes?", answer: "Maintain an owner, invoice, renewal date, SKU, billed-unit definition and usage export for every tool. Remove unused seats through supported processes, right-size features, review notice and exit terms, and compare alternatives on equivalent total cost." },
        { question: "Is Microsoft 365 going up in price in 2026?", answer: "Microsoft's official U.S. commercial table lists selected changes effective July 1, 2026. Business Basic with Teams moves from $6 to $7 and Business Standard with Teams from $12.50 to $14, while Business Premium remains $22. Existing-customer timing, market, currency, channel and configuration can affect the invoice." },
        { question: "Why did my Webflow plan change in 2026?", answer: "Webflow began a phased Site-plan restructure for new purchases on May 13, 2026 and published later transition dates for existing accounts. CMS and Business move to Premium under account-specific renewal and billable-change rules. Check the official FAQ and the site's billing screen because bandwidth and add-ons can make the total lower, unchanged or higher." }
      ]
  },
  {
    id: "build-vs-buy-software-2026-cost-comparison",
    cardStat: "3 scenarios",
    cardStatLabel: "Conservative, base, and adverse cost cases",
    title: "Should You Build or Buy Software in 2026? A Cost Framework",
    excerpt: "Compare SaaS with custom software using current quotes, migration, maintenance, security, adoption, operating risk, and scenario-based break-even.",
    category: "Pricing",
    readTime: "8 min",
    date: "May 31",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "code",
    lastModified: "2026-10-29",
    faqs: [
      { question: "Should I build or buy software in 2026?", answer: "Buy is usually the stronger baseline when the workflow is common, the current product meets the requirements, time-to-value matters, and vendor limits are acceptable. Build becomes defensible when a stable, differentiated workflow, integration, control, portability, or cost requirement cannot be met responsibly by current products. Compare both options from one requirements list, operating model, risk register, and time horizon." },
      { question: "Is it cheaper to build a custom CRM than pay for HubSpot or Salesforce?", answer: "That depends on the workflow, and the comparison is usually set up wrong before the numbers are even gathered. You are weighing a licence fee against a build cost, when the real comparison is against building plus running it forever: the support, the integrations, the person who fixes it when it breaks at month thirty. There is no common outcome to quote you; run the comparison per workflow rather than against the whole bill." },
      { question: "What percentage of companies are replacing SaaS with custom software?", answer: "Do not use one vendor survey as a universal market rate or as proof that your workflow should be rebuilt. Check the sample, respondent type, question wording, geography, publication date, and sponsor. The build-or-buy decision still depends on your current system, accepted requirements, quotes, risks, and operating capability." },
      { question: "What is the real 3-year cost of SaaS versus custom software?", answer: "Model the same workflow and demand across both paths. SaaS includes subscriptions, seats, contacts, usage, implementation, integrations, support, renewal terms, and exit work. Custom includes discovery, build, data migration, hosting, services, monitoring, security, maintenance, support, change requests, internal ownership, and exit documentation. Run conservative, base, and adverse scenarios; there is no universal crossover month." },
      { question: "When does SaaS still make more sense than building custom?", answer: "SaaS often makes more sense when the workflow is standard, the product already satisfies security and integration requirements, deployment speed matters, switching costs are acceptable, and the buyer does not want to operate the capability. Validate the current plan, limits, data terms, export path, support, renewal exposure, and exit cost before deciding." },
      { question: "Does AI make building custom software cheaper in 2026?", answer: "AI tools may reduce time on some research, coding, testing, and documentation tasks, but they do not remove requirements, architecture, review, security, accessibility, data, integration, QA, deployment, maintenance, or accountability. Measure the actual delivery and defect data for the team and scope; do not apply a universal discount or timeline reduction." }
    ]
  },
    {
      id: "saas-software-pricing-audit-2026",
      cardStat: "5 decisions",
      cardStatLabel: "Retain, right-size, consolidate, replace or investigate",
      title: "2026 SaaS Pricing Audit: An Evidence-First Method",
      excerpt: "Audit software cost with invoices, contracts, usage, billing units, renewal dates, security, integrations and exit requirements before deciding what to retain or replace.",
    category: "Pricing",
      readTime: "15 min",
    date: "May 31",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "saas",
      lastModified: "2026-10-29",
      faqs: [
        { question: "How much is the average business spending on SaaS in 2026?", answer: "A general benchmark does not establish your stack cost. Reconcile at least twelve months of card, bank, accounts-payable and app-marketplace charges, then map each item to the exact account, SKU, owner, usage, contract and renewal." },
        { question: "What is the 2026 SaaS inflation rate?", answer: "This audit does not apply one market-wide rate to every contract. Vendor, SKU, region, billing channel, renewal, discount and billed quantity differ. Use the official change notice and the account's renewal quote and invoice." },
        { question: "Which software companies changed pricing in 2026?", answer: "The related primary-source watchlist currently covers Microsoft's July 2026 commercial Microsoft 365 changes and Webflow's phased May 2026 plan restructure, plus Klaviyo's February 2025 billing-policy change because it can still affect 2026 invoices. It is not presented as an exhaustive market list." },
        { question: "How do I audit my SaaS bill in 2026?", answer: "Reconcile invoices and contracts, normalize SKU and billed units, measure meaningful use, map data and workflow dependencies, verify cancellation rules, and assign retain, right-size, consolidate, replace or investigate. Retain dated evidence and rollback for every change." },
        { question: "When does building custom software beat paying for SaaS?", answer: "The answer depends on the current system, requirements, evidence, vendor terms, operating costs, and accepted project scope. Validate mutable facts at their primary source and do not treat an example as a ranking, performance, revenue, delivery, ownership, or refund promise." },
        { question: "What is the cheapest way to replace a CRM?", answer: "There is no universal cheapest path. Define the required data, roles, workflows, reporting, integrations, compliance, migration, support and exit first. Compare current vendor quotes with a scoped custom option including hosting, maintenance, security, internal time and adoption." },
        { question: "Should I cancel a tool when no one logged in recently?", answer: "Login recency is one signal, not a complete decision. Some accounts support service operation, emergency access, approvals or infrequent critical work. Confirm the owner, workflow, data, legal, security, export, integration and recovery requirements before removing access or reducing the quantity." },
        { question: "How much can a SaaS audit save?", answer: "It depends on the starting ledger, commitments, actual use, replacement scope, migration cost, internal time and residual vendor spend, so we don't publish a universal percentage. Forecast a base case and a high-cost case, then replace the assumptions with invoices once the change has taken effect." },
        { question: "Does uninstalling a Shopify app stop billing?", answer: "Shopify's help page, checked October 4, 2026, says uninstalling a paid app cancels future recurring charges, although you might still be billed for the current billing cycle. Charges an app bills outside Shopify are not cancelled by uninstalling, so cancel those in the app's own billing settings or with the developer, and contact the developer before uninstalling if you want a refund." }
      ]
  },
  {
    id: "top-nextjs-agencies-2026",
    cardStat: "8 options",
    cardStatLabel: "Compared from current first-party evidence",
    title: "Next.js Development Agencies in 2026: A Disclosed Shortlist",
    excerpt: "Compare eight Next.js and software-engineering partners using current official service evidence, transparent inclusion rules and a buyer verification framework.",
    category: "Agency",
    readTime: "13 min",
    date: "May 25",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "code",
    lastModified: "2026-10-09",
    faqs: [
      { question: "Who are the top Next.js development agencies in 2026?", answer: "This disclosed shortlist includes Bejamas, Blazity, Brainhub, FocusReactive, Naturaily, Netguru, Pagepro and PandaCodeGen. It is not an objective ranking. Compare each provider's current first-party evidence, assigned team, relevant references, scope, acceptance, ownership, support and current quote." },
      { question: "Which Next.js agency has the lowest published minimum project size?", answer: "PandaCodeGen publishes starting tiers of $1,500 Starter, $3,500 Growth and $5,000 Scale. The article does not claim that other providers' changing minimums or quotes are lower or higher. Obtain current like-for-like proposals before comparing price." },
      { question: "Do any Next.js agencies offer a written PageSpeed guarantee?", answer: "Ask each of them directly rather than inferring it from a website, because a standing public offer and what a firm will write into a contract are different things. A guarantee only means anything with the test conditions attached. If you want one, ask for it in the contract naming the exact pages, the device profiles, the number of passing runs required and what happens if it fails. A number without those conditions is not a guarantee, it is a slogan." },
      { question: "Which Next.js agencies are best for SaaS products?", answer: "There is no universal winner. Define whether the need is a marketing site, application, modernization, product team or support relationship. Ask for current comparable work and the assigned team's Next.js, data, security, QA and product-delivery experience." },
      { question: "Which Next.js agencies are best for headless commerce?", answer: "Several shortlisted providers publish content or commerce services, but fit depends on the commerce backend, checkout, catalog, markets, CMS, search, customer accounts, analytics, consent, integrations and operating model. Validate those requirements in a signed scope." },
      { question: "Where does PandaCodeGen rank among Next.js agencies?", answer: "PandaCodeGen does not assign itself a rank. It publishes this comparison and sells Next.js services, so it is a commercially interested option. Evaluate it with the same evidence, proposal, reference, acceptance and ownership checks used for every provider." },
      { question: "Does a Next.js agency need to be a Vercel partner?", answer: "No. Vercel runs a partner programme and publishes a public Solution Partner directory covering agencies, consultancies and system integrators, sorted into Platinum, Gold and Silver tiers and filterable by expertise, framework, budget, certification and region. It listed 114 partners when checked on August 2, 2026. A listing records a commercial relationship with one hosting vendor, not audited delivery quality, and many capable Next.js teams deploy to AWS, Cloudflare or client-owned infrastructure and never join. PandaCodeGen is not listed. Use the directory as one checkable input alongside the assigned team, comparable work, scope, acceptance and ownership terms." },
      { question: "How do I check an agency's claims before signing?", answer: "Ask for three things and check them yourself. A live URL you can run through PageSpeed Insights and view-source on, so the performance claim is testable rather than asserted. A named person who will do the work, not a capability list, because agencies subcontract and you are entitled to know. And the written acceptance criteria: which pages, which device profiles, how many passing runs, and what happens if it fails. Any agency that supplies all three is straightforward to verify; any that will not is telling you something." },
      { question: "What should be in the contract before a Next.js build starts?", answer: "Scope by template rather than page count, because template count is what actually drives the work. Then: who owns the repository and the hosting, CMS and domain accounts at the end; what transfers on final payment and what the agency keeps as pre-existing or reusable code; the acceptance test with its named pages and device profiles; the redirect map if any URL changes; and the support period with what counts as a defect versus a change request. The absence of a redirect map on a migration is the single most common expensive omission." },
    ]
  },
  {
    id: "wordpress-april-2026-evidence",
    cardStat: "3 records",
    cardStatLabel: "Dated incidents and a public feedback thread",
    title: "WordPress in April 2026: Three Security and Product Records",
    excerpt: "A source-led review of the Smart Slider 3 Pro and EssentialPlugin supply-chain incidents plus a WooCommerce core team lead's public feedback thread and their limits.",
    category: "WordPress",
    readTime: "13 min",
    date: "Apr 23",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "security",
    lastModified: "2026-10-08",
    faqs: [
      { question: "What happened to Smart Slider 3 Pro in April 2026?", answer: "Patchstack reported that compromised update infrastructure distributed Smart Slider 3 Pro version 3.5.1.35 on April 7 for approximately six hours. It said the Pro release contained a remote-access toolkit, the free WordPress.org edition was not affected, and 3.5.1.36 was the clean release. Sites that installed the affected build should follow the current vendor incident guidance." },
      { question: "What happened to EssentialPlugin in April 2026?", answer: "Patchstack reported that the vendor changed hands in 2025 and that the new owner introduced backdoor code across more than 20 plugins. It said the code was activated on April 5 and that the WordPress Plugin Review team closed affected listings and pushed a forced security update on April 7. Applicability and compromise still require site-specific evidence." },
      { question: "What did the WooCommerce core team lead post?", answer: "On April 20, a Reddit poster identifying themselves as a WooCommerce core team lead asked for actionable public feedback and said they were not writing in an official capacity. The post summarized themes the author had observed, including plugin fatigue, update fear and performance complaints. It was a feedback request, not an official admission or representative study." },
      { question: "Do these April records prove every WordPress site is unsafe?", answer: "No. They document specific supply-chain incidents and public product feedback. They do not establish a platform-wide compromise rate, a universal plugin count, custom-software safety or a requirement to migrate. Check product, version, configuration, update history and site evidence." },
      { question: "Is the April 2026 article still current after WordPress 7.0?", answer: "It is a dated evidence review. WordPress 7.0 shipped on May 20, 2026, so current platform decisions should also use the live release record, current advisories and the actual site inventory rather than treating the April snapshot as the current release state." },
      { question: "Should I migrate because of these incidents?", answer: "Not automatically. Compare a supported repair and operating plan with the target architecture under the same capability, dependency, data, security and lifecycle controls. Migrate only when site-specific constraints and the accepted replacement plan justify the cost and risk." }
    ]
  },
  {
    id: "aeo-playbook-built-into-every-website",
    cardStat: "AEO controls",
    cardStatLabel: "for crawlability, evidence, structure, and measurement",
    title: "AEO Playbook: Improve Eligibility for AI Search Citations",
    excerpt: "An evidence-led AEO playbook for crawlability, useful content, structured data, measurement, and AI-search eligibility without citation guarantees.",
    category: "AEO",
    readTime: "20 min",
    date: "May 18",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "code",
    lastModified: "2026-10-08",
    faqs: [
      { question: "How long does it take to get cited by AI engines on a new website?", answer: "There is no reliable fixed timeline. Providers independently control crawling, inclusion, recommendation, and citation. Track provider reports, referrals, and dated manual observations separately, and do not infer a citation from ordinary Search Console impressions or zero clicks." },
      { question: "What is an AI-info page and why does it matter?", answer: "An AI-info page is a governed reference page for public company facts such as services, pricing approach, contact methods, coverage, evidence labels, and limitations. It can reduce factual drift across a site, but it is not a provider requirement or citation guarantee." },
      { question: "Do I need to wait for Google to rank before AI engines cite me?", answer: "No universal provider rule requires a page to rank in Google first. Discovery and selection differ by product and can involve direct crawlers, search partners, licensed data, or other systems. Make the page public, useful, crawlable, attributable, and current; allow the relevant user agents where desired; then measure referrals and server logs without treating eligibility as a citation guarantee." },
      { question: "What is the difference between SEO and AEO?", answer: "SEO covers discovery and presentation in search results. AEO is a working term for improving the clarity, eligibility, and measurability of information used by answer systems. The foundations overlap: crawlability, useful original content, clear entities, and good page experience. Provider weights and outcomes are not guaranteed." },
      { question: "Will AEO replace SEO?", answer: "No. The labels overlap, but search discovery still depends on crawlability, indexing, relevance, usefulness, links, entities, and page experience. AEO adds explicit attention to answer extraction, attribution, structured facts, provider access, and AI referral measurement. Treat it as an additional operating layer, not a reason to abandon technical SEO or useful content." },
      { question: "What does the AEO setup cost and who does it?", answer: "Price the actual work: crawler and indexation checks, content and entity governance, source review, structured data, accessibility, analytics, consent, testing, and ongoing updates. It may be a focused audit, an optimization scope, or part of a migration. PandaCodeGen's published tiers are planning anchors only; the accepted proposal names the owners, deliverables, evidence, support, and price." },
      { question: "Can you add AEO controls to my existing website without rebuilding it?", answer: "Often. The right approach depends on the current rendering, CMS, templates, crawler access, content quality, structured data, governance, and measurement setup. Audit the existing site first; a migration is justified only when the current platform or implementation prevents the agreed requirements." },
      { question: "How do I get my business recommended by ChatGPT?", answer: "Nobody can make that happen, and any agency that says otherwise is selling something. What you can do is be the source worth quoting: answer the question directly in the first two sentences, publish a fact the other sources do not have, and put a date and a method on it. That is a bet on being useful, not a mechanism, and no one controls the outcome." },
      { question: "What does it take for ChatGPT to recommend a website?", answer: "Something to say that its other sources do not say. Systems differ in how they retrieve and select sources; repeating existing coverage alone provides no assurance of selection. A dated first-hand observation, a primary-source correction, or a number you computed and showed your working for gives it a reason to reach for your page rather than the four that agree with each other." },
      { question: "How do I optimize my website to appear in AI search answers?", answer: "Answer-first paragraphs, real headings and lists rather than styled divs, entities named explicitly instead of a vague noun like the platform, and facts stated where they can be lifted out of context. Then give it something to lift that is yours. Structure makes a page extractable; only original content makes it worth extracting, and no amount of markup substitutes for the second part." },
      { question: "What is AI search optimization (AEO) and how does it work?", answer: "AEO is a working term for making public information crawlable, clear, useful, attributable, and measurable across answer systems. Provider behavior varies and changes. Structured data and concise answers can improve clarity, but no technique guarantees crawling, inclusion, ranking, recommendation, or citation." }
    ]
  },
  {
    id: "website-developer-agency",
    cardStat: "7",
    cardStatLabel: "Buyer questions before signing",
    title: "Website Developer Agency: Services, Costs and Selection in 2026",
    excerpt: "A source-led guide to agency services, scope, pricing, accessibility, security, ownership, performance acceptance and provider selection.",
    category: "Agency",
    readTime: "13 min",
    date: "May 12",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "code",
    lastModified: "2026-10-08",
    faqs: [
      { question: "Is web development dead because of AI?", answer: "No. AI can assist research, coding and testing, but the buyer still needs accountable requirements, architecture, security, accessibility, privacy, integration, validation and ownership decisions. Evaluate the named team and its evidence rather than assuming tool use guarantees speed or quality." },
      { question: "What is the 3 second rule in website design?", answer: "It is a planning heuristic, not a universal abandonment point or Google requirement. Use your own real-user and funnel evidence. Google publishes Core Web Vitals thresholds for field experience, but passing them does not guarantee rankings, conversion or revenue." },
      { question: "Can a website developer agency preserve existing SEO rankings during migration?", answer: "Ask the agency to show you the URL map before work starts, not after launch. That single document is where migration SEO is won or lost, and an agency that cannot produce one has not scoped the job. Rankings and recovery timing stay with the search engines; what a vendor can be held to is that every old address resolves and every template renders its content in HTML." },
      { question: "How is a website developer agency different from a web design company?", answer: "Labels overlap. Compare the actual scope and assigned team across research, UX, visual design, content, frontend, backend, integrations, accessibility, security, SEO, analytics, QA, launch and operations. Platform choice alone does not establish quality, performance or ownership." },
      { question: "What should I ask a website developer agency before signing?", answer: "Ask who performs the work, what routes and features are included, how acceptance is evidenced, which costs and dependencies are excluded, who owns code and accounts, and how changes, launch, rollback, support, termination and remedies work. Put the answers in the signed scope." }
    ]
  },
  {
    id: "how-much-does-a-website-cost",
    cardStat: "$1,500+",
    cardStatLabel: "PandaCodeGen Starter planning anchor",
    title: "How Much Does a Website Cost in 2026? A Scope-First Guide",
    excerpt: "Calculate website cost from a comparable scope, current vendor quotes, delivery, operations and exit, with our published starting tiers.",
    category: "Pricing",
    readTime: "17 min",
    date: "May 12",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "cost",
    lastModified: "2026-10-20",
    faqs: [
      { question: "Can I build a website for free?", answer: "Some vendors offer no-cost or trial plans, but eligibility, branding, domains, features, usage and commercial terms differ. Infrastructure, domain, email, apps, payment, content, maintenance and internal time can still cost money. Check the current official plan and do not assume a personal free tier fits commercial use." },
      { question: "How much does a one-page website cost?", answer: "Price the actual copy, design states, form or payment flow, analytics, consent, accessibility, responsive behavior, integrations, QA, launch and support. PandaCodeGen's Starter planning anchor begins at $1,500, but the accepted scope determines whether a one-page project fits." },
      { question: "How long does it take to build a website?", answer: "Weeks rather than months for most marketing sites, and the schedule is set by approvals and content far more than by build effort. The useful question is not how long the build takes but how long your side needs to supply copy, images and sign-off, because that is the part that stretches. Ask any vendor which decisions they need from you and by when." },
      { question: "Is DIY cheaper than hiring a professional?", answer: "DIY may reduce cash spend but adds internal time, learning, implementation, QA, maintenance and risk. Compare the same features and time horizon using current vendor quotes and a realistic value for internal work. Neither option is universally cheaper." },
      { question: "How much does it cost to redesign an existing website?", answer: "A redesign quote depends on the current platform, unique templates and states, UX and visual scope, content, accessibility, responsive coverage, integrations and review rounds. If URLs, CMS, hosting or architecture also change, include migration and cutover work instead of comparing it with a visual-only redesign." },
      { question: "What is the true cost of a slow or cheap website?", answer: "Calculate total cost from the build, current and target hosting, platform and service fees, maintenance, support, internal time, change requests, and exit risk. Measure business impact with your own field performance and funnel data. Do not apply a universal bounce, advertising, ranking, revenue, or payback percentage." },
      { question: "Is $1,500 a good price for a website?", answer: "It is a fair price for a small site with a genuinely bounded scope: a few templates, content you supply, no migration of an existing set of URLs, and no integrations beyond a form and analytics. That is what PandaCodeGen's Starter tier covers. The same number is a warning sign once the brief includes a store, logins, a CRM connection, or moving an existing set of pages without losing their addresses. Ask the vendor which of testing, redirect mapping, accessibility and account handover sits inside the number." },
      { question: "How much does a website cost per month?", answer: "The monthly cost is rarely one line. It combines hosting or platform fees, per-seat charges for tools and business email, apps and extensions, payment processing, analytics and monitoring, and the internal hours spent publishing and maintaining. Per-seat pricing is the most commonly underestimated part, because a price quoted per user multiplies by the number of people who need access. Build the figure from current vendor quotes for your own country, billing term and expected usage rather than assuming a single number." },
      { question: "Why is owning a website so expensive?", answer: "Most of the price is skilled time rather than software. Design, development, content migration, testing, accessibility, launch and handover are people-hours, and the recurring bill is mostly subscriptions and maintenance rather than raw hosting. Cost rises fastest where the work is unbounded: undefined acceptance criteria, open-ended revisions, and scope that was discussed but never written down." }
    ]
  },
  {
    id: "shopify-store-speed-optimization",
    cardStat: "3",
    cardStatLabel: "Core Web Vitals to monitor",
    title: "Shopify Store Speed Optimization: What Actually Works (2026)",
    excerpt: "A field-first Shopify speed optimization guide covering Core Web Vitals, PageSpeed lab diagnostics, themes, apps, images, scripts, and the decision between theme work and headless commerce.",
    category: "Shopify",
    readTime: "20 min",
    date: "May 12",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "performance",
    lastModified: "2026-10-01",
    faqs: [
      { question: "How long does Shopify speed optimization take?", answer: "Speed work is measured in days, not weeks, when it's diagnostic and not a rebuild. Establish a baseline on your busiest product page first, change one thing at a time, and re-measure under the same conditions. Most of the elapsed time is waiting for field data to accumulate, which is why the report window counts for more than the working hours." },
      { question: "Do Shopify speed booster apps actually improve performance?", answer: "Sometimes, and rarely as much as the listing implies. Measure your own storefront before and after installing one, on the same route under the same conditions, because a booster app is itself more JavaScript. Shopify already serves WebP and compresses images automatically, so an app promising image optimisation is often charging you for something the platform does for free." },
      { question: "Will optimizing my Shopify store speed hurt SEO rankings temporarily?", answer: "A performance change shouldn't require a ranking loss, but a careless release can alter rendered content, links, metadata, canonicals, structured data, URLs, tracking, or availability. Baseline the affected templates, test the staged output, preserve search controls, release in small steps, and monitor Search Console and analytics. Search outcomes and timing remain controlled by search engines." },
      { question: "Is mobile or desktop speed more important for Shopify stores?", answer: "Test both and prioritize the devices your customers use. Mobile often exposes slower processors, constrained networks, and touch-interaction delays that a desktop lab run misses. Google uses the mobile version of a page for mobile-first indexing, but a mobile Lighthouse score isn't itself an indexing or ranking grade." },
      { question: "Can a Shopify Liquid theme achieve a 90+ PageSpeed score?", answer: "Some do, and no theme guarantees it, because the score is set by what your store loads, not by the theme alone. Shopify's own Theme Store bar is useful context: a submitted theme must average at least 60 on performance and 90 on accessibility across home, product and collection pages. That is a floor for a clean theme on sample data, not a target for a live store." },
      { question: "Does going headless on Shopify require leaving the Shopify platform?", answer: "No. A headless storefront can keep Shopify for catalog, inventory, orders, payments, and checkout while replacing the presentation layer. However, search, analytics, consent, customer accounts, localization, app integrations, preview, caching, deployment, and monitoring still need an implementation and ownership plan." }
    ]
  },
  {
    id: "is-squarespace-bad-for-seo",
    cardStat: "3 paths",
    cardStatLabel: "Stay, optimize or migrate",
    title: "Is Squarespace Bad for SEO? A 2026 Diagnostic",
    excerpt: "A source-led audit of Squarespace crawlability, page controls, content, structured data and route-level performance before deciding to optimize or migrate.",
    category: "SEO",
    readTime: "14 min",
    date: "May 12",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: "ranking",
    lastModified: "2026-10-08",
    faqs: [
      { question: "Why do some people say Squarespace is bad for SEO?", answer: "Some properties have performance, scale, integration, editing or technical-control constraints, but a platform label does not diagnose an individual site. Audit crawlability, rendered output, content, search data and representative route performance before assigning a cause." },
      { question: "What are the main SEO limitations of Squarespace?", answer: "Four are structural rather than settings you forgot. You cannot edit robots.txt, only tick two crawler checkboxes. Blog posts sit under a collection prefix. Redirects have no CSV import, so a large migration is pasted by hand. Squarespace emits six schema types automatically that you cannot edit or remove, so your own markup sits alongside them rather than replacing them. Everything else people blame on the platform is usually a page control that was never filled in." },
      { question: "Will I lose Google rankings if I migrate off Squarespace?", answer: "Leaving Squarespace changes every URL that carries its collection prefix, and Squarespace does not let you remove that prefix, so plan the mapping as a rewrite rather than a copy. Export what you can, crawl the rest, and give every old address a destination. Search engines decide indexing and recovery timing, so measure the mapping, not a promised position." },
      { question: "Does Squarespace 7.1 Fluid Engine solve every SEO issue?", answer: "No platform or editor version guarantees correct SEO. Inspect the published page, current product controls and route-level performance. Content, configuration, media, third parties and competition remain property-specific." },
      { question: "Is Squarespace better than Wix for SEO?", answer: "Wix exposes more technical SEO control on three specific things, according to both vendors' own documentation: Wix lets you edit robots.txt through a Robots.txt Editor, view and manage the preset structured data it generates per page type, and import redirects from a CSV file. Squarespace does none of the three. Whether that makes Wix better for you depends on whether you would ever use those controls, because on a small site that is not migrating, they are a specification difference rather than a search difference." },
      { question: "Can Squarespace sites pass Google Core Web Vitals?", answer: "Yes, plenty do, and Squarespace handles several things automatically that you would otherwise pay for: sitemaps, static URLs, domain redirects, free SSL and mobile-optimized output. Whether your site passes depends on your images, your third-party scripts and your page structure far more than on the platform. Measure your own routes in Search Console rather than trusting any platform-wide claim." }
    ]
  },
  {
    id: "gohighlevel-keep-crm-replace-website",
    cardStat: "3 layers",
    cardStatLabel: "Public site, integration layer and HighLevel",
    title: "Keep Your GoHighLevel CRM. Replace Just the Website.",
    excerpt: "A 2026 hybrid architecture for keeping HighLevel contacts, workflows and calendars while replacing the public website.",
    category: "GoHighLevel",
    readTime: "13 min",
    date: "May 4",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'performance',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Will my HighLevel workflows still fire after the website moves?", answer: "Only if the integration still produces each workflow's real trigger and required fields. Inventory contact, form, appointment, tag, opportunity and other dependencies, then run accepted end-to-end tests. Do not assume that creating a contact reproduces every prior event." },
      { question: "Do I cancel HighLevel for a hybrid website?", answer: "The hybrid model normally keeps HighLevel for the resources named in the accepted scope. Confirm the account's current plan, add-ons, usage charges and required capabilities directly in HighLevel before quoting. The website project does not guarantee an unchanged vendor bill." },
      { question: "How do calendar bookings work?", answer: "An approved HighLevel embed may be the smallest path. A custom interface may use currently supported calendar and appointment APIs with the required scopes. Compare accessibility, styling, performance, time-zone handling, conflicts, cancellation, rescheduling and maintenance before choosing." },
      { question: "Can I keep SaaS Mode and agency operations?", answer: "Potentially, because the public frontend and HighLevel account can remain separate. Verify every needed sub-account, billing, portal, workflow and operational dependency in the target account. The migration scope only protects functions it explicitly inventories and tests." },
      { question: "How long does the GHL hybrid migration take?", answer: "The frontend build runs on its own schedule; the integration is what needs testing time. Budget separately for mapping every form field, firing every workflow in a non-production path and confirming failure handling, because a workflow that stops firing silently is the failure mode here. Your HighLevel account and existing site stay live throughout." },
      { question: "What happens if HighLevel changes its API or webhooks?", answer: "Version and vendor change risk remains. Use current supported endpoints and scopes, verify webhook signatures, make handlers idempotent, monitor failures and keep an update owner. HighLevel's webhook guide gives September 1, 2026 as the date the legacy X-WH-Signature header is deprecated, after which webhooks are signed only with X-GHL-Signature. That date has passed, so verify X-GHL-Signature now and recheck the guide before release." },
      { question: "Can I move back to a native HighLevel website?", answer: "Plan reversibility before launch: preserve the old configuration, record DNS and redirects, define account and repository control, and write rollback steps. Whether source code or accounts transfer depends on the accepted project terms and third-party licenses." },
      { question: "Does a Next.js frontend guarantee better SEO or leads?", answer: "No. It can provide more implementation control, but search engines, visitors and advertising platforms control downstream outcomes. Preserve URLs and search output, measure representative performance, and monitor post-launch results without assuming causation." },
      { question: "Do I need a GoHighLevel API key to send website form leads into the CRM?", answer: "No, and HighLevel's own documentation advises against it. HighLevel states that legacy API keys run on API v1.0, which has reached end-of-life, that new v1 key creation is no longer supported, and that keys unused for more than 90 days may be marked as expired. Use a Private Integration Token with only the scopes you need, or OAuth 2.0 for a marketplace app, and keep the credential server-side." },
      { question: "Can I connect a WordPress or Webflow site to GoHighLevel instead of Next.js?", answer: "Yes. The integration surface is the same regardless of frontend: server-side form handling under a scoped credential, signed webhooks for events coming back, and a monitored owner for both. The framework changes the build effort and the level of rendering control you get, not the CRM contract." },
    ]
  },
    {
      id: "pagepro-alternatives",
      cardStat: "4 models",
      cardStatLabel: "Fixed scope, blueprint, team or retainer",
      title: "Pagepro Alternatives in 2026: Compare Scope and Fit",
      excerpt: "A commercially disclosed way to compare Pagepro, Naturaily, Blazity, PandaCodeGen and other Next.js partners using current services and equivalent written requirements.",
    category: "Agency",
    readTime: "10 min",
    date: "May 2",
    author: "Hassan",
      role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'cost',
      lastModified: "2026-10-09",
      faqs: [
        { question: "Is Pagepro a fit for a small business?", answer: "Ask Pagepro for a current written proposal for the exact scope. Company size alone does not establish fit. Compare engagement model, team, relevant evidence, price, timeline, acceptance, support, ownership, licensing and total operating cost." },
        { question: "How much does Pagepro charge?", answer: "This page does not repeat a third-party profile rate as a current Pagepro price. Request a dated written proposal and confirm whether it covers discovery, a fixed deliverable, time and materials, a retainer or dedicated capacity. Compare it only with equivalent scope." },
        { question: "How much does Naturaily charge?", answer: "Request a current written proposal from Naturaily for the exact services and requirements. Its official site currently describes custom web, headless, Shopify, ecommerce and design services, but service coverage does not establish a project price." },
        { question: "How much does Blazity charge?", answer: "Request a current written proposal from Blazity for the exact engagement. Its official site currently describes AI engineering, performance, migration, application and consulting services, but that does not establish a universal minimum or rate." },
        { question: "What is an affordable alternative to Pagepro?", answer: "Affordability depends on equivalent scope and total operating cost. PandaCodeGen publishes $1,500, $3,500 and $5,000 planning tiers for its primary migration lane, but the accepted proposal controls actual price and terms. Compare like with like." },
        { question: "Should I ask for a PageSpeed guarantee on a HighLevel hybrid build?", answer: "Ask for it in writing, naming the exact pages, the mobile and desktop profiles, how many passing runs count as acceptance and what the remedy is if it fails. On a HighLevel-connected build, also name which pages are yours and which are still rendered by HighLevel, because nobody can accept a performance target on pages they do not control." },
        { question: "Does provider location determine contract quality?", answer: "No. Verify the exact contracting party, team location and availability, governing law, tax and payment terms, privacy roles, security requirements, insurance, ownership, dispute process and support in the accepted agreement." }
      ]
  },
  {
    id: "website-redesign-cost",
    cardStat: "$1,500+",
    cardStatLabel: "PandaCodeGen Starter planning tier",
    title: "Website Redesign Cost in 2026: Scope, Tiers and Buyer Guide",
    excerpt: "Price a same-platform redesign by UX, templates, design system, content, implementation, testing and rollout, then compare proposals on the same scope.",
    category: "Pricing",
    readTime: "15 min",
    date: "Apr 30",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'cost',
    lastModified: "2026-10-20",
    faqs: [
      { question: "How long does a website redesign take from start to launch?", answer: "A redesign is usually faster than a migration because the platform, the data and most of the URLs stay put. What sets the schedule is the number of distinct templates and the number of people who have to approve them. Two approvers and four templates is a different project from six approvers and fourteen templates, at the same page count." },
      { question: "How often should a business redesign its website?", answer: "There is no universal redesign cycle. Act when evidence shows the experience, accessibility, content system or brand no longer meets current requirements and a redesign is the smallest sufficient intervention. Site age alone is not a business case." },
      { question: "Will a website redesign hurt my current SEO rankings?", answer: "A same-platform redesign usually keeps most URLs, which is exactly why it gets under-scoped. The risk moves from redirects to content: a redesign that shortens page copy, removes an FAQ block or drops structured data can lose visibility while every address still resolves. Diff the content of your top pages before and after, not just the URLs." },
      { question: "Can I redesign my website without switching platforms?", answer: "Yes. A same-platform redesign changes the experience and visual system while retaining the current foundation. If the platform, hosting, CMS or core architecture also changes, price the migration or rebuild work explicitly." },
      { question: "What are PandaCodeGen's payment terms for a redesign?", answer: "A common payment option is 30 percent at onboarding and 70 percent on delivery, and another written schedule may be agreed. Final deliverables, acceptance, change handling, refund conditions, ownership and support are defined in the signed scope." },
      { question: "What is PandaCodeGen's starting redesign price?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. These are our planning anchors, not market averages. Final price depends on the accepted routes, templates, design system, content, implementation, testing and rollout." },
      { question: "What is the difference between a redesign, a migration, and a rebuild?", answer: "A redesign changes the experience on the current platform. A migration changes platform or infrastructure while preserving much of the approved site. A rebuild changes the platform and materially reworks the structure, experience or content system. Compare quotes only after those scopes are separated." },
      // 20 Oct 2026: follow-up questions, as above.
      { question: "Is it cheaper to redesign or rebuild a website?", answer: "A focused redesign can cost less when the existing platform, content system and integrations remain suitable. Extensive changes to an unsuitable system can cost more than rebuilding, so compare both scopes." },
      { question: "Can you redesign my website?", answer: "Yes. We redesign on your current platform when it can do what you need, or rebuild when it can't, and the written quote says which and why. Published starting points are $1,500 Starter, $3,500 Growth and $5,000 Scale, fixed once the scope is agreed, with a free 15-minute call with a founder first." },
    ]
  },
  {
    id: "cheap-web-developer",
    cardStat: "12 checks",
    cardStatLabel: "Scope, evidence, security, SEO, ownership, and support",
    title: "Cheap Web Developer: How to Hire Without Getting Burned (2026)",
    excerpt: "Compare affordable web proposals by scope, live evidence, security, accessibility, SEO migration controls, ownership, support, and full operating cost.",
    category: "Pricing",
    readTime: "16 min",
    date: "Apr 30",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'cost',
    lastModified: "2026-10-29",
    faqs: [
      { question: "Is hiring a cheap web developer safe for my business website?", answer: "It can be, and the price is not what tells you. What tells you is whether you can point at a deliverable when each payment falls due, whether the contract says who owns the code and the accounts, and whether the developer can show you finished work rather than a capability list. Cheap and careful exist together; cheap and undefined do not." },
            {
                question: "Should I use an AI website builder instead of hiring a cheap web developer?",
                answer: "Use a builder when its supported features meet your requirements and your team can operate it. AI tools may assist with content, code, integrations and publishing, but test the result rather than assuming those jobs are finished. Hire help for the parts you cannot reliably deliver, including migration, accessibility, integrations or ongoing support. Include subscription and hosting costs in either comparison.",
            },
      { question: "Can I get a custom-coded website on a small budget?", answer: "Possibly, when the page and feature inventory is small and content, integrations, migration, data, security, compliance, and review needs are controlled. PandaCodeGen's $1,500, $3,500, and $5,000 tiers are planning anchors only. The accepted proposal or SOW defines the actual deliverables, exclusions, tests, vendor costs, support, ownership, and remedy." },
      { question: "How long does a cheap web developer take to build a complete website?", answer: "Ask for a schedule with named dependencies rather than a duration. A quote that says six weeks without saying what it needs from you and by when is not a schedule, it is a hope. The useful version names when content is due, who approves what, and what happens to the date when a dependency slips." },
      { question: "Do cheap web developers handle hosting and domain setup?", answer: "Only if the accepted scope says so. Define who controls the domain, DNS, hosting, repository, CMS, analytics, email, and other business accounts; which vendor plans are commercially eligible; who pays usage and renewals; and what is handed over. There is no permanently free commercial-hosting promise." },
      { question: "What happens if a cheap web developer disappears mid-project?", answer: "Reduce recovery risk with milestone-based payment, client-controlled accounts where practical, agreed repository access, weekly evidence, documented setup and dependencies, backups, credential ownership, a decision log, and explicit rights in accepted paid deliverables. The contract should state termination, handoff, refund, and third-party-license treatment." },
      { question: "Should I hire a cheap web developer overseas or locally?", answer: "Location alone does not determine quality, cost, or communication. Compare legal counterparty, time-zone overlap, language, response expectations, security practices, payment method, insurance where needed, data location, dispute terms, portfolio evidence, and the named people doing the work. Use the same due-diligence standard for local and remote vendors." },
      { question: "What is the difference between a cheap web developer and a website builder?", answer: "A developer sells scoped labor and deliverables; a website builder licenses a managed platform and editor. Either path may still involve templates, subscriptions, custom code, hosting, support, and vendor limits. Compare the actual output, accounts, export path, ownership and licenses, security duties, performance evidence, accessibility, maintenance, and total cost." },
      { question: "Can ChatGPT build me a website?", answer: "An AI assistant can produce markup, styling and component code, and that code still has to be hosted, connected to a domain, tested, secured and maintained by somebody. Decide who holds the hosting, domain, repository and analytics accounts, who is accountable when a form stops delivering, and what the acceptance test is, because those questions are identical whether a person or a model wrote the code. On the content side, Google's own guidance states that using automation including AI generation is not itself a violation, but producing content primarily to manipulate search rankings is a spam-policy violation, and it recommends disclosure where a reader would reasonably ask how the page was made." },
      { question: "Who is the cheapest website builder?", answer: "Compare the required features, billing term, renewal and exit costs. Checked October 29, 2026, WordPress.com displays Personal at US$4 per month and Business at US$25 per month with annual billing. Confirm the renewal total, taxes and domain renewal at checkout; the public page did not expose a reliable renewal figure in this review. Squarespace's WordPress XML export omits several page types, including store and portfolio pages, plus style settings and custom CSS. Check separate product-export options before treating that as a complete exit inventory." },
    ]
  },
  {
    id: "how-to-speed-up-your-website",
    cardStat: "12 checks",
    cardStatLabel: "From delivery through rendering and interaction",
    title: "How to Speed Up Your Website in 2026: 12 Checks",
    excerpt: "Find what slows a page down, understand your PageSpeed result and choose the right fix before changing platforms.",
    category: "Performance",
    readTime: "14 min",
    date: "Apr 30",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'speed',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What is the 3 second rule in website design?", answer: "It is a planning heuristic, not a Google requirement or universal abandonment point. Different routes, devices, networks, audiences and tasks behave differently. Use the property's field performance and funnel evidence rather than applying one cutoff to every visitor." },
      { question: "Does website speed affect Google rankings?", answer: "Google uses Core Web Vitals in broader ranking systems but says good scores do not guarantee top rankings and relevance remains fundamental. Lighthouse is a lab diagnostic, not a direct ranking cutoff. Diagnose search changes with Search Console, content, links, indexing and release evidence." },
      { question: "How much does it cost to speed up a website?", answer: "Diagnosis costs almost nothing: PageSpeed Insights, your own browser's network panel and an hour will tell you where the constraint is. Paying starts when the fix is structural. Get the diagnosis first, because the most common outcome is that two or three free changes close most of the gap and the quote you were about to accept was for the wrong problem." },
      { question: "What are the best tips to optimize website speed and performance?", answer: "The usual list is compress images to WebP or AVIF, minify CSS and JavaScript, use a CDN, enable caching, defer non-critical scripts and cut redirect chains. All of it is real work, but the list is sorted by how easy each item is to describe rather than by how much time it gives back. Get a number first: run PageSpeed Insights on one specific URL and read the Chrome field data panel above the score. Below 50, an oversized LCP image or render-blocking CSS in the head is almost always dominating, so start there. Between 50 and 89, script execution and third-party tags are usually splitting the remaining time. At 90 or above the lab score is no longer the constraint and you should be looking at field INP and CLS instead. Minifying a site whose real problem is a 2MB hero image saves kilobytes and changes nothing." },
      { question: "Can a CDN alone make my website fast?", answer: "A CDN can reduce delivery distance and cache eligible responses, but it cannot automatically fix origin compute, database work, cache misses, oversized media, render-blocking resources, JavaScript, layout shifts or third parties. Measure the request path before choosing the fix." },
      { question: "How long does it take to optimize a slow website?", answer: "Diagnosis is hours; the fixes are days; confirming they worked takes weeks because field data accumulates over a rolling window. That last part is what people get wrong, treating a same-day lab score as proof. Change one thing at a time, record the conditions, and wait for the field data before concluding anything." },
      { question: "Is AMP required for fast mobile pages or Google rankings?", answer: "No. AMP is not required for eligibility in Google's mobile search experiences. Choose an architecture from the site's product, content, performance and maintenance requirements, then verify field and lab results. Server rendering, static generation or edge delivery do not automatically make a page fast." },
      { question: "Why is my website slow but my internet connection is fast?", answer: "Your connection is only one layer. Origin response, cache misses, redirects, large media, fonts, JavaScript, third parties and main-thread work can all delay the page. You may also be loading it from your own browser cache. Use a request waterfall and a performance trace under recorded conditions to find the slow layer." },
      { question: "Why are websites so laggy on mobile devices?", answer: "Phones can expose slower processors, constrained networks, large responsive images, main-thread JavaScript, layout shifts and touch handlers that are less noticeable on a desktop. Test representative devices and templates on a throttled mobile profile instead of assuming one cause." },
      { question: "Does switching web hosting make a website faster?", answer: "It can when server time, worker limits, database latency, storage or region is a measured bottleneck. Hosting will not fix front-end JavaScript, media, third parties or slow application queries. Capture timing and trace evidence before moving, then retest the same pages." }
    ]
  },
  {
    id: "website-migration-cost-2026",
    cardStat: "7",
    cardStatLabel: "Platform-specific migration scopes",
    title: "Website Migration Cost in 2026: Prices, Scope and Timeline",
    excerpt: "Scope WordPress, WooCommerce, Webflow, Wix, Squarespace, Shopify and GoHighLevel migrations from current export limits, replacement work and acceptance evidence.",
    category: "Pricing",
    readTime: "13 min",
    date: "May 6",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'migration',
    lastModified: "2026-10-20",
    faqs: [
      { question: "How much does a website migration cost in 2026?", answer: "It depends on the job. Moving the same site to a new host is often free or a small fixed fee from the new host. Moving to a different platform is a rebuild, priced on the pages, templates, data and integrations that have to move and on whether your URLs must survive. PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. These are PandaCodeGen planning anchors, not market averages." },
      { question: "Why can two migration quotes differ so much?", answer: "The quotes may cover different inventories, design changes, content work, integrations, accessibility, SEO safeguards, testing, governance, ownership or support. Normalize the statements of work before attributing the difference to markup or quality." },
      { question: "Will I lose my Google rankings during migration?", answer: "It depends entirely on which job you are buying. A host-to-host transfer keeps every URL and normally changes nothing search engines can see. A platform migration changes the URL shape, the rendering and often the content, and needs a mapped destination for every old address. Confuse the two and you will either overpay for a transfer or under-scope a rebuild." },
      { question: "How long does a website migration take?", answer: "A host-to-host transfer is often same-day and many hosts do it free. A platform migration is weeks, and the variable is template count, content quality and approval speed rather than page count. Establishing which of the two you are buying will tell you more about the timeline than any published range will." },
      { question: "What does the migration price include?", answer: "A comparable quote should name discovery, inventory, target design, content and data movement, feature replacement, integrations, SEO, accessibility, analytics, privacy, security, QA, cutover, rollback, handoff and support. Assumptions and exclusions matter as much as the total." },
      { question: "Can I migrate without losing customers or sales?", answer: "No provider can guarantee uninterrupted sales or unchanged customer behavior. Reduce avoidable risk with parallel build, tested data and journeys, redirects, monitoring, rollback, communication and an agreed cutover window." },
      { question: "What happens to my Webflow CMS data during migration?", answer: "Webflow documents CSV export for CMS collection content, while exported site code excludes working CMS functionality. Inventory fields, references, assets, slugs, localized content and editor workflows, then map and validate them in the chosen target system." },
      { question: "Do I need to keep paying for Shopify apps after migration?", answer: "Only after each app capability is retained, replaced or retired and its contract can be cancelled safely. A headless Shopify storefront may still depend on Shopify apps or APIs. Build the target recurring-cost model from the actual configuration." },
      { question: "What is the cheapest way to migrate from Wix?", answer: "Choose the smallest target that satisfies the verified route, content and feature inventory. Wix provides different export or transfer paths for different data, so test the actual property before pricing extraction and replacement work." },
      { question: "What is the typical Shopify to headless cost?", answer: "There is no defensible universal price without a dated, comparable dataset. Price the storefront, commerce capabilities, content, search, accounts, checkout, integrations, data, analytics, consent, QA and operations. PandaCodeGen's published tiers are planning anchors only." },
      { question: "Is migrating a website worth it in 2026?", answer: "It is worth considering when measured requirements remain blocked after realistic repairs and the benefits justify build, migration, operational and search risk. Compare repair, optimize and migrate options over the same time horizon." },
      { question: "Is it hard to move a website to another hosting provider?", answer: "Changing hosts is a different and much smaller job than changing platforms. A host-to-host move keeps the same software, theme, plugins and database, so nothing is rebuilt, and most hosting companies will perform the transfer when you buy a plan, frequently free or for a small fixed fee. Ask the destination host first and do not pay platform-migration prices for it. A platform migration is the harder job: content comes out of one system and is rebuilt in another that works differently, with templates, forms, search, checkout and URL mapping reproduced rather than transferred. Published cost ranges that mix the two jobs are why migration quotes look wildly inconsistent." },
      // 20 Oct 2026: "can you get this for me" / "how much would it cost" follow-ups (Search Console).
      { question: "Can you do the website migration for me?", answer: "Yes. We migrate websites between platforms at a fixed price agreed before work starts: Starter from $1,500 (up to 7 pages), Growth from $3,500 (8 to 20 pages, full migration with a redirect map) and Scale from $5,000. We also move WordPress sites between hosts as a separately quoted job when the new host's free migration doesn't cover the site." },
      { question: "How do I get a migration price for my own site?", answer: "Send us the site's address. We review the pages, content, URLs, forms and connected tools, then send a written quote that names what moves, what is rebuilt and the fixed price. The first 15-minute call with a founder is free, and so is a review of up to three pages." },
    ]
  },
  {
    id: "shopify-stocky-sunset-date-2026",
    title: "Shopify Stocky Sunset: August 31, 2026 Migration Guide",
    excerpt: "Shopify says Stocky stopped managing inventory on August 31, 2026. What to export while read-only access lasts, why suppliers have to be recreated by hand, which APIs stopped, and how to compare replacements.",
    category: "Shopify",
    readTime: "10 min",
    date: "Apr 25",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'saas',
    lastModified: "2026-10-08",
    cardStat: "Aug 31",
    cardStatLabel: "Shopify Stocky sunset",
    faqs: [
      { question: "What is the Shopify Stocky sunset date?", answer: "Stocky stopped managing inventory on August 31, 2026, and its APIs stopped the same day. Shopify says you keep read-only access to export your data for at least 90 days after that date, so until at least November 29, 2026. Shopify delisted Stocky from the App Store on February 2, 2026, so it can't be reinstalled. These facts were rechecked in Shopify's transition guide on October 8, 2026." },
      { question: "What features were lost when Stocky shut down on August 31, 2026?", answer: "Shopify says historical purchase orders and stocktakes do not move automatically, suppliers cannot be exported, Stocky APIs stopped, and some Stocky-specific features may work differently or may not yet exist in Shopify Admin. Inventory the exact workflows your team uses and test each against Shopify's current transition guide before choosing a replacement." },
      { question: "What replaces Stocky in native Shopify inventory tools?", answer: "Shopify's current guide points merchants to Shopify Admin and Shopify POS for transfers, purchase orders, quantity adjustments, inventory history, in-store workflows, APIs, Shopify Flow, and other current inventory capabilities. Some Stocky-specific workflows differ or may not yet be available, so verify requirements against the live account and current documentation." },
      { question: "Should I migrate to Sumtracker, Fabrikator, Prediko, or another inventory app?", answer: "Compare Shopify Admin, current inventory apps, and custom software against verified workflow fit, data migration, APIs, security, support, portability, vendor terms, internal capability, time to implement, and total cost. No option is a permanent fix, and custom software still depends on maintainers, hosting, services, and third-party components." },
      { question: "What does it cost to rebuild Shopify headless with custom inventory?", answer: "A headless rebuild with custom inventory sits beyond our standard tiers and is scoped separately, because the inventory logic is bespoke by definition. Before pricing it, check whether an existing app already covers your workflow. Replacing Stocky is usually a purchasing decision, and only becomes an engineering one if nothing on the market fits how you actually order." },
      { question: "How do I export my Stocky data now that it has shut down?", answer: "Use Stocky's built-in reports during the read-only period, which Shopify says lasts at least 90 days after August 31, 2026. Export the historical records you need, verify the exports, store them securely, and document retention and access. Shopify says suppliers cannot be exported, so recreate and validate required supplier data manually. Don't rely on the read-only period as your retention plan, because Shopify hasn't said when it ends." },
      { question: "Why did Shopify deprecate Stocky?", answer: "The current Shopify help pages document the transition and replacement capabilities but do not provide a basis for attributing a broader motive. Plan from the announced dates, export limitations, API cutoff and workflow differences rather than speculating about why Shopify made the product decision." },
      { question: "How long does a Shopify headless rebuild with custom inventory take?", answer: "Inventory management in Stocky ended on August 31, 2026, and read-only export access lasts at least 90 days after that. Export what you need first and separately from choosing a replacement, so that if the replacement decision takes longer than expected you still hold your own data. Do not leave the export until the week before." },
    ]
  },
  {
    id: "webflow-user-accounts-sunset-date-2026",
    title: "Webflow User Accounts Sunset: January 29, 2026 Recovery Guide",
    excerpt: "What Webflow officially removed, how unmigrated accounts, data, gates and subscriptions were affected, and how to scope a recovery or replacement.",
    category: "Webflow",
    readTime: "13 min",
    date: "Apr 22",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'webflow',
    lastModified: "2026-10-09",
    cardStat: "Jan 29",
    cardStatLabel: "Webflow User Accounts sunset",
    faqs: [
      { question: "What is the Webflow User Accounts sunset date?", answer: "Webflow User Accounts were sunset on January 29, 2026. On that date, all User Accounts functionality was disabled across every Webflow site, and all dedicated User Accounts APIs and webhooks were deprecated. Sites that had not migrated lost access to user data, and User Accounts pages were converted into regular static pages. Webflow stopped allowing new sites to enable User Accounts a full year earlier on January 31, 2025." },
      { question: "What happened to sites that did not migrate before January 29, 2026?", answer: "Webflow says those sites lost access to User Accounts and its data, account pages became regular static pages, content gates were removed, and members could no longer log in. Dedicated APIs and webhooks also stopped. The exact customer and design impact depends on the site's implementation." },
      { question: "Can I still export Webflow User Accounts data after the sunset?", answer: "Webflow says access to User Accounts data was lost when the product ended. Check for lawful copies in prior CSV exports, CRM, email systems, Stripe, backups or integrations, but verify identity and consent before using them. The available evidence and recovery path are property-specific." },
      { question: "Should I migrate to Memberstack or Outseta instead of custom code?", answer: "Webflow recommended Memberstack and Outseta, but neither is a universal answer. Compare identity, roles, gating, billing, migration, data processing, portability, support, current price and exit. Custom application code offers more control and more security and maintenance responsibility; it is not permanent or dependency-free." },
      { question: "What does it cost to rebuild a Webflow membership site on custom Next.js?", answer: "PandaCodeGen's planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, but membership, billing, data recovery, security and customer migration can require custom scope. Price the complete identity and entitlement system, not only the login screen." },
      { question: "Why did Webflow sunset User Accounts and Logic?", answer: "Webflow stated they made the strategic decision to deprecate native Logic and User Accounts in favour of their ecosystem of vetted app partners. The company pivoted toward being a Website Experience Platform focused on design, CMS, and analytics, and handed off authentication, membership, and automation to specialists like Memberstack, Outseta, Zapier, and Make. User Accounts was sunset on January 29, 2026. Logic, Webflow's native automation tool, was sunset earlier on June 27, 2025." },
      { question: "Will my Stripe subscriptions still charge after the sunset?", answer: "Webflow says paid subscriptions for Webflow Ecommerce customers remained available in Stripe and subscribers would continue to be charged. Reconcile the actual Stripe account, customer access, entitlements, cancellations, refunds and communications. Do not assume every affected site uses that configuration or that chargebacks occurred." },
      { question: "How long does a Webflow to custom Next.js membership site migration take?", answer: "The deadline has already passed, so the sequence now is evidence first, replacement second. Gather whatever member records, CRM exports, email lists and Stripe subscription states still exist before you scope anything, because the scope depends entirely on what survived. That audit is days; the replacement build depends on what it turns up." },
    ]
  },
  {
    id: "website-rebuild-cost-2026",
    cardStat: "$1,500+",
    cardStatLabel: "PandaCodeGen Starter planning tier",
    title: "Website Rebuild Cost in 2026: Scope, Tiers and Decision Guide",
    excerpt: "Price a rebuild from strategy, information architecture, design, content, platform, migration, integrations, acceptance and operations.",
    category: "Pricing",
    readTime: "13 min",
    date: "Apr 19",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'cost',
    lastModified: "2026-10-09",
    faqs: [
      { question: "How much does a website rebuild cost in 2026?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. A rebuild can require custom scope when strategy, content, applications, data, compliance or governance expands. Final price belongs to a signed statement of work." },
      { question: "What's the difference between a website rebuild, a redesign, and a migration?", answer: "A redesign changes the experience while retaining the current platform. A migration changes the platform while preserving much of the approved structure and experience. A rebuild changes the platform and materially reworks the structure, experience or content system." },
      { question: "How long does a website rebuild take?", answer: "A rebuild's schedule is set by the number of distinct templates and the state of the content, not by the URL count. Freeze and clean the content first, because rebuilding against content that is still being rewritten is how a six-week project becomes a four-month one. The existing site stays live until cutover." },
      { question: "Will I lose my Google rankings when I rebuild my website?", answer: "A rebuild is the highest-risk case because the templates, the URLs and the copy usually all change at once. Freeze the content before you rebuild, or you will not be able to tell whether a drop came from the structure or from the words. Give every old URL a documented outcome: keep, redirect, or deliberately return 404 or 410." },
      { question: "Is it worth rebuilding a website for under $10,000?", answer: "Price does not decide value by itself. Compare the accepted capabilities, one-time and ongoing cost, internal effort, risks and measurable benefits. A bounded rebuild may fit PandaCodeGen's published tiers, while broader applications or governance require custom scope." },
      { question: "How do I know if my rebuild quote is fair?", answer: "Normalize each quote across strategy, information architecture, design, content, engineering, migration, integrations, accessibility, security, SEO, analytics, QA, launch, ownership and support. A higher quote may include more work or risk; do not call it padded without evidence." },
      { question: "How often should I rebuild my website?", answer: "There is no universal cycle. Rebuild when both the foundation and site experience no longer satisfy verified requirements and repair, redesign or migration alone is insufficient. Review evidence and operating capability rather than site age." },
      { question: "What platform is cheapest to rebuild on in 2026?", answer: "There is no universal cheapest platform. Compare current provider quotes and the same requirements across build, content, hosting, usage, payments, licenses, maintenance, security, support, internal time and exit. Free or low-cost tiers may not fit a commercial workload." }
    ]
  },
  {
    id: "woocommerce-low-conversion-rate",
    cardStat: "4",
    cardStatLabel: "funnel stages to check before blaming the stack",
    title: "WooCommerce Low Conversion Rate: Diagnose It Before You Blame Speed",
    excerpt: "Speed is the usual suspect because it is the easiest thing to have an opinion about. A diagnostic order that finds the funnel stage which actually changed, including the problems WooCommerce creates that no hosted platform does.",
    category: "WooCommerce",
    readTime: "10 min",
    date: "Aug 16",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'conversion',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Why is my WooCommerce conversion rate low?", answer: "A low conversion rate has at least four unrelated causes: traffic quality, offer and pricing, funnel friction, and technical performance. WooCommerce only contributes to some of them. Before spending anything, find which of the four funnel transitions actually changed: landing to product view, product view to add to cart, add to cart to checkout started, or checkout started to order placed." },
      { question: "What is a good WooCommerce conversion rate?", answer: "WooCommerce publishes no benchmark, so any figure credited to it has no source behind it. The third-party numbers do not hold up well either: the 2.66% usually attributed to Dynamic Yield is not on that company's own benchmark page, which publishes industry cuts but no single global average as of October 2026, and Adobe's 3.65% cites only 'the latest research' with no study, sample or date named. IRP Commerce is the most transparent, publishing 2.23% for UK and Irish B2C stores in August 2026 on a transactions-divided-by-sessions basis. Its own sectors ran from 0.57% to 5.81% in that same month, a roughly 10x spread wider than the disagreement between publishers, which is the real answer: your category matters more than any average. GA4 shows your industry's median and 25th and 75th percentiles inside your own property, and that is the only benchmark that has ever measured your store." },
      { question: "Do WooCommerce cart fragments hurt conversion?", answer: "They can, and the symptom is specific. Cart fragments are an AJAX request that keeps the mini-cart accurate. Since WooCommerce 7.8 the script is only enqueued on views that render the Cart widget rather than on every page, which is how it behaved before that release, but it still loads wherever that widget appears, wherever a plugin registers it as a dependency, and in themes that hard-code the widget into their templates. It cannot be cached because it carries per-visitor state. The visible effect is a cart count that arrives late or briefly shows the wrong number, which reads to a shopper as the add-to-cart click not working. Duplicate line quantities in your orders are worth checking for directly. Checked August 2026." },
      { question: "Does site speed improve WooCommerce conversion rate?", answer: "It might, and nobody can tell you by how much before measuring your store. Treat a speed improvement as a hypothesis to test rather than a result you have already earned: pick the funnel stage you expect to move, record it before the change, and check it against the same window a month later. Anyone quoting a percentage lift before touching your site is quoting a different shop." },
      { question: "Is a slow WooCommerce admin costing me sales?", answer: "No. Customers never see wp-admin. Backend slowness is worth fixing because it costs staff time on order processing and inventory work, but it is not a storefront problem. Keeping the two separate matters, because conflating them is how a store ends up buying hosting to solve an add-to-cart problem." },
      { question: "Should I rebuild WooCommerce to fix conversion?", answer: "Usually not. If the diagnosis lands on a single plugin, a shipping API call, a checkout field or cart fragments, that is a fix measured in hours. The case for a rebuild is a maintainability problem showing up as a conversion one: when the plugin stack has become the product, when nobody will update anything because something breaks each time, or when nobody can say what code runs during a purchase." }
    ]
  },
  {
    id: "which-website-builders-can-go-headless",
    cardStat: "6 platforms",
    cardStatLabel: "Content, commerce and API limits compared",
    title: "Which Website Builders Can Actually Go Headless in 2026",
    excerpt: "Compare Shopify, WooCommerce, Wix, Webflow, Squarespace and GoHighLevel by content APIs, checkout, authentication and the limits to test before choosing a custom frontend.",
    category: "Research",
    readTime: "10 min",
    date: "Aug 18",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'code',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Can you use Squarespace headless?", answer: "No. Squarespace publishes nine APIs and every one of them is back-office: Analytics, Contacts, Discounts, Inventory, Orders, Products, Profiles, Transactions and Webhook Subscriptions. There is no API that returns page or blog content, and no storefront or checkout API, so there is nothing to render a custom front end from. The word headless does not appear on the Squarespace developer portal. Checked 8 October 2026." },
      { question: "Is Wix Headless free?", answer: "Wix Headless is free to start. Wix states that a premium plan is required to unlock payments, in-depth analytics and custom domains, so a real commercial site will need one. The free tier is enough to build and evaluate against your own content. Checked 8 October 2026." },
      { question: "Can Webflow be used headless?", answer: "Not in the usual sense, and Webflow appears to have chosen a different direction on purpose. The Data API reads CMS collection items, but the larger developer surface moves the other way: DevLink exports Webflow components as React into your codebase and brings your own React components into Webflow, and Webflow Cloud deploys your Next.js, Astro, React, Vue or Svelte application onto Webflow infrastructure. So rather than taking Webflow content out to your host, you bring your code to theirs." },
      { question: "Does WooCommerce have a headless API?", answer: "Yes, and it takes two of them. The REST API at /wp-json/wc/v3/ is authenticated and administrative, covering products, orders, customers and reports, with no cart or checkout endpoints at all. The Store API at /wp-json/wc/store/v1/ is unauthenticated and customer-facing, and it is the one carrying cart, checkout and product browsing. A headless WooCommerce storefront uses both, which is the detail most guides omit." },
      { question: "Which website builder is best for going headless?", answer: "Shopify, if you are selling. Its Storefront API is GraphQL only and returns pages, blogs and articles alongside products, collections, cart and checkout, so one API serves both the shop and the surrounding content site. WooCommerce is the most open but needs two APIs and your own hosting. Wix is the surprise, with genuine coverage across eCommerce, bookings, events, memberships, CMS and blog under one auth model." }
    ]
  },
  {
    id: "ai-search-visibility-tracking",
    cardStat: "54%",
    cardStatLabel: "of all AI impressions landed on one page",
    title: "AI Visibility Tracking: What 77 Pages and 6,700 AI Impressions Showed",
    excerpt: "First-party Search Console data on how AI visibility spreads across a site, what the Generative AI report can't tell you, and why an impression isn't a mention.",
    category: "Research",
    readTime: "15 min",
    date: "Aug 28",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'aicommerce',
    lastModified: "2026-10-08",
    faqs: [
      { question: "How do I track whether AI search mentions my site?", answer: "Open Google Search Console and go to Performance, then Generative AI. The report breaks out how often your URLs appeared in AI Overviews and AI Mode, separately from ordinary results, and it costs nothing. Most published advice on this question recommends buying a monitoring product first, which is worth doing only once you have read the free report and found it insufficient for a specific reason you can name." },
      { question: "Does an AI impression mean my brand was named in the answer?", answer: "No, and this is the most common misreading of the report. An impression records that your URL was shown as a source in an AI experience. It does not record whether the generated answer text used your company name, described you accurately, or recommended you. Presence as a citation and presence in the prose are two different things, and Search Console only measures the first." },
      { question: "How evenly is AI visibility spread across a website?", answer: "On our own site, not evenly at all. Across 77 pages carrying any AI impressions between 18 May and 13 August 2026, one page accounted for 3,627 of 6,700 total impressions, or 54 percent. The top three pages held 66 percent and the top ten held 87 percent. Thirty-one pages, two fifths of the set, sat on five impressions or fewer and contributed 1.2 percent of the total between them." },
      { question: "Does AI visibility follow ordinary search rankings?", answer: "Our analysis does not compare ranking positions. It compares AI impressions against ordinary search clicks across 76 pages, with a Spearman correlation of 0.79 between those two measures. The exceptions are the interesting part: one page drew 383 AI impressions against a single ordinary click, and another drew 116 AI impressions against none at all." },
      { question: "Why does the Search Console query report show fewer clicks than the pages report?", answer: "Because Google anonymises queries that too few people searched, and the export is capped at 1,000 rows. In our 25 August 2026 export the pages report totalled 243 clicks while the query report showed 48. The query file omits much of the property total. CTR for returned query rows is still valid when clicks and impressions have the same scope and filters; do not combine a partial numerator with a property-wide denominator." },
      { question: "Can Search Console tell me which prompts triggered an AI answer?", answer: "No. The Generative AI report supports filtering by URL, country, device and date, and our own export from 25 August 2026 carried impressions and nothing else. There is no prompt or query dimension. If you need to know what someone asked, you have to test prompts against the assistants yourself and record what comes back." }
    ]
  },
  {
    id: "ai-referral-revenue-2026",
    cardStat: "6.7x",
    cardStatLabel: "ChatGPT revenue vs Google Ads, same six months",
    title: "ChatGPT Out-Earned Our Google Ads by 6.7x, March to August 2026",
    excerpt: "First-party data from a founder-affiliated store. 760 orders, $271,620.61, and recorded revenue attributed to ChatGPT, Claude, Perplexity, Gemini and Google AI Overview.",
    category: "Research",
    readTime: "11 min",
    date: "Aug 18",
    author: "Hassan",
    role: "Lead Engineer",
    featured: true,
    illustrationType: 'aicommerce',
    lastModified: "2026-10-27",
    faqs: [
      { question: "Do AI assistants like ChatGPT actually generate sales?", answer: "This store recorded sales attributed to AI discovery using captured referrers and customer-declared sources. Across 1 March to 18 August 2026, a store we operate recorded 63 orders worth $16,783.76 attributed to AI assistants, out of 760 orders and $271,620.61 total. That is 6.2% of all revenue, or 9.2% of acquisition revenue once repeat orders are excluded. Recorded revenue attributed to ChatGPT was $11,614.78. This is one business in one vertical, so it is evidence that it happens, not a benchmark for your business." },
      { question: "Why do most businesses report almost no AI traffic?", answer: "Referrer-only tracking can miss AI-assisted discovery. Links and clients can carry referrers or campaign parameters, while later direct visits and brand searches may lose that context. This does not establish the size of an unmeasured audience. A business measuring referrer alone will see close to zero and conclude AI sends no traffic. We capture referrer where it survives and ask the customer where it does not, which is the only reason these numbers are not zero." },
      { question: "How much revenue did ChatGPT generate compared to Google Ads?", answer: "ChatGPT produced $11,614.78 from 51 orders. Google Ads produced $1,733.35 from 5 orders. That is 6.7 times more revenue from ChatGPT, from a channel with no ad spend attached to it, over the same six-month window in the same store." },
      { question: "Which AI assistant sends the most valuable customers?", answer: "By volume, ChatGPT, with 51 of the 63 AI-attributed orders. By order value, Claude, at an average order value of $630.00 against a site average of $357.40. That Claude figure rests on four orders, which is far too small a sample to rely on, and it is reported here with the sample size attached rather than as a finding." },
      { question: "Do AI referrals have a lower average order value?", answer: "Yes, on the evidence available. In this store ChatGPT's average order was $227.74 against a site average of $357.40. Visibility Labs found the same direction at much larger scale, analysing 94 seven and eight-figure ecommerce brands across 2025: ChatGPT average order value of $204 against $238 for non-branded organic, a 14.3% gap. In that study ChatGPT still produced more revenue per session, 10.3% more, because it converted better. Two independent samples agreeing on the direction is stronger than either on its own." },
      { question: "Is there independent confirmation of this, or just your own tracking?", answer: "Both. Google Search Console's Generative AI features report for the same property recorded 48,900 impressions over three months, rising from roughly 400 a day in mid-May to 1,121 on 12 August 2026. That is Google's own instrument, entirely separate from the store's attribution, showing the same direction. It measures impressions in generative surfaces rather than clicks or revenue, so it corroborates the trend rather than the dollar figures." }
    ]
  },
  {
    id: "cms-market-share-2026",
    cardStat: "65.2% → 58.6%",
    cardStatLabel: "WordPress share, 2022 peak to October 2026",
    title: "CMS Market Share 2015 to 2026: WordPress Peaked in 2022",
    excerpt: "Twelve years of measured CMS market share. WordPress peaked at 65.2% in 2022 and is at 58.6% in the October 2026 reading, self-hosted platforms lost 13.3 points while hosted builders gained 12.9, and Webflow has not moved in three readings.",
    category: "Research",
    readTime: "9 min",
    date: "Aug 15",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'traffic',
    lastModified: "2026-10-26",
    faqs: [
      { question: "What is WordPress's market share in 2026?", answer: "WordPress is at 58.6% of surveyed websites with an identified CMS in W3Techs' 7 October 2026 reading. That is its lowest reading since 2017 and 6.6 points below its peak of 65.2% in January 2022." },
      { question: "Is WordPress losing market share?", answer: "Yes, and it has been since 2022. WordPress rose from 60.7% in 2015 to a peak of 65.2% in January 2022, then declined in every subsequent yearly reading to 58.6%. It remains more than three times the size of the entire hosted site-builder category combined, so it is a declining incumbent with a very large lead rather than a collapsing one." },
      { question: "Who took WordPress's market share?", answer: "Mostly nobody, because the losses in the self-hosted category were concentrated elsewhere. Joomla fell from 8.6% to 1.6% and Drupal from 5.1% to 0.9%, each losing about four fifths of their share. Across the period self-hosted platforms lost 13.3 points and hosted site builders gained 12.9, which is close to a straight transfer." },
      { question: "What is Webflow's market share?", answer: "Webflow is at 1.2% of measured sites and has recorded the same figure in three consecutive readings. Tilda is at the same 1.2% and Duda at 1.1%, so the builder share is more spread across small platforms than design-industry discussion suggests." },
      { question: "Does market share tell you which CMS to choose?", answer: "No. Share of existing sites is a lagging indicator, because the denominator is full of sites built years ago that nobody has touched, so a platform every new project chose from tomorrow would take years to show up. Platform choice turns on your content model, team, integrations and what you are willing to operate." }
    ]
  },
  {
    id: "web-accessibility-glossary",
    cardStat: "29",
    cardStatLabel: "accessibility terms defined, with what each does not prove",
    title: "Web Accessibility Glossary: 29 Terms Defined (2026)",
    excerpt: "Plain-English definitions of the accessibility terms in audits, quotes and procurement forms, what each one doesn't prove, and what to ask the seller.",
    category: "Accessibility",
    readTime: "23 min",
    date: "Aug 13",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'code',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What does WCAG AA mean?", answer: "WCAG success criteria are graded A, AA and AAA, and the levels are cumulative. Level A is the minimum, level AA is the practical target that almost every accessibility law and procurement rule points at, and level AAA is an enhancement the W3C recommends against requiring as a general policy for whole sites because some content cannot satisfy it." },
      { question: "Is WCAG a law?", answer: "No. WCAG is a technical standard published by the World Wide Web Consortium. It feels like a law because nearly every accessibility law, procurement rule and audit points at it, but the adopting law decides which version, which conformance level and who it applies to." },
      { question: "Does a perfect Lighthouse accessibility score mean my site is accessible?", answer: "No. The Lighthouse accessibility score is a weighted result from a set of automated axe-core checks, and Lighthouse's own report says automatic detection can only detect a subset of issues and does not guarantee accessibility, so a perfect score is not proof the page is accessible. Automated checks cover only what can be automated, so the score is a useful smoke test and a poor acceptance criterion." },
      { question: "Is a placeholder the same as a form label?", answer: "No. A placeholder disappears the moment someone types, is often rendered in grey too light to read, and is not reliably announced by assistive technology. A visible label programmatically associated with the input is the accessible version, and it also helps every other user of the form." },
      { question: "Do accessibility overlays make a website compliant?", answer: "An overlay is a third-party script that tries to correct problems in the browser after the page loads. It sits on top of markup it did not author, so it does not change the contrast ratio a designer chose or write the alternative text nobody wrote. Those remain decisions about your own content." },
      { question: "Is skipping a heading level a WCAG failure?", answer: "Not in itself at level AA, despite how often it is reported as one. The genuine problems are headings that are missing, inaccurate, or applied for visual size rather than structure. An audit that leads with skipped heading levels is usually a tool export being presented as an assessment." },
      { question: "What is a VPAT?", answer: "A Voluntary Product Accessibility Template is the form a vendor completes to describe how their product meets accessibility standards, and the completed document is an Accessibility Conformance Report. It is useful because it forces specific claims criterion by criterion, but it is self-reported, so it evidences a claim rather than an independent test." }
    ]
  },
  {
    id: "web-accessibility-statistics-2026",
    cardStat: "95.9%",
    cardStatLabel: "of top million home pages failed automated WCAG testing",
    title: "Web Accessibility Statistics 2026: What the Data Actually Shows",
    excerpt: "The web got measurably less accessible in 2026, ending six years of improvement. What the measured data says about failure types, platforms and legal exposure, and what it cannot tell you.",
    category: "Accessibility",
    readTime: "11 min",
    date: "Aug 13",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'traffic',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What percentage of websites are accessible?", answer: "In the 2026 WebAIM Million, 95.9% of the top one million home pages had detected WCAG 2 failures, up from 94.8% in 2025. That is automated testing of home pages only, so it detects a subset of failures and a page with no detected errors is not necessarily conformant." },
      { question: "Is web accessibility getting better or worse?", answer: "It got worse in 2026. The 95.9% failure rate reversed six consecutive years of small improvements. Average page element counts rose 14.3% in the same year, so growing page complexity is the likeliest mechanism rather than a decline in effort." },
      { question: "What are the most common accessibility errors?", answer: "Six failure types accounted for 96% of all detected errors in the 2026 WebAIM Million. Low contrast text appeared on 83.9% of home pages, missing alternative text on 53.1% and missing form input labels on 51%. These are also among the cheapest failures to fix." },
      { question: "Which CMS or platform has the fewest accessibility errors?", answer: "In the 2026 WebAIM Million, Squarespace home pages averaged 33.0 detected errors and Wix 33.3, both better than WordPress at 52.8 and Drupal at 41.2. Shopify averaged 75.1, well above the sample average. These figures are association rather than causation, because platform choice correlates with site age, budget and builder skill, none of which were controlled for." },
      { question: "How many website accessibility lawsuits are filed each year?", answer: "Federal district courts recorded 9,718 civil filings under the nature-of-suit code ADA-Other in the twelve months ending 30 September 2025, up from 9,030. That code is broader than web accessibility and counts filings rather than judgments, so it is an indicator of volume and not legal advice about any specific business." },
      { question: "Does passing an automated accessibility test mean my site is compliant?", answer: "No. Automated testing detects a subset of WCAG failures. A page can pass every automated check and still be unusable with a screen reader, because judgements like whether alternative text is accurate or whether a reading order makes sense cannot be made by a machine." }
    ]
  },
  {
    id: "core-web-vitals-explained",
    cardStat: "3",
    cardStatLabel: "Field metrics evaluated at the 75th percentile",
    title: "Core Web Vitals Explained: A 2026 Business Guide",
    excerpt: "What LCP, INP, and CLS measure, how field and lab data differ, and how to investigate business impact without inventing a ranking or revenue number.",
    category: "SEO",
    readTime: "11 min",
    date: "May 6",
    author: "Hassan",
    role: "Lead Engineer",
    featured: true,
    illustrationType: 'speed',
    lastModified: "2026-10-29",
    faqs: [
      { question: "What are Core Web Vitals in plain English?", answer: "Core Web Vitals are three field metrics for real-user loading performance, responsiveness, and visual stability: LCP, INP, and CLS. They help identify experience problems but do not calculate a guaranteed ranking, conversion, or revenue outcome." },
      { question: "Why do Core Web Vitals matter for my business?", answer: "They measure parts of the experience visitors receive and contribute to Google's broader page-experience systems. Their commercial importance depends on the affected routes, audience, funnel, and first-party data. A pass does not guarantee rankings or revenue." },
      { question: "How do I check my Core Web Vitals scores?", answer: "Use PageSpeed Insights and the Search Console Core Web Vitals report for available CrUX field data. Use Lighthouse and browser performance tools to reproduce and debug issues. Record URL, device, network, consent, page state, tool version, and test date so results are comparable." },
      { question: "What are good Core Web Vitals scores?", answer: "Google's good field thresholds are LCP within 2.5 seconds, INP of 200 milliseconds or less, and CLS of 0.1 or less, evaluated at the 75th percentile separately for mobile and desktop. When all three have enough data, each must be good to pass. PageSpeed can pass on good LCP and CLS alone if INP has insufficient samples; missing LCP or CLS prevents assessment. A pass does not guarantee rankings or revenue." },
      { question: "Why is my website failing Core Web Vitals even after optimization?", answer: "Field data reflects a rolling population rather than one new lab run. Older visits, untested templates, mobile devices, third-party scripts, consent states, apps, plugins, or insufficient URL-level data may explain the difference. Verify the evidence source and reproduce the affected route before choosing the next fix." },
      { question: "How much can improving Core Web Vitals increase revenue?", answer: "There is no universal percentage. Measure the site's dated funnel, traffic quality, device mix, conversion definition, value, margins, releases, and concurrent changes. Published case studies can inform a hypothesis, but they are not a forecast for another property." }
    ]
  },
  {
    id: "squarespace-vs-custom-website",
    cardStat: "3 paths",
    cardStatLabel: "Managed platform or custom ownership",
    title: "Squarespace vs Custom Website in 2026: How to Choose",
    excerpt: "Compare Squarespace with a custom website across editing, features, performance, export, SEO, commerce fees, ownership, lifecycle cost and migration risk.",
    category: "Squarespace",
    readTime: "10 min",
    date: "Apr 14",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'speed',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Can I export my Squarespace website to another platform?", answer: "Partially. Squarespace exports selected content to a WordPress XML file, including one blog and some layout-page content. Its current documentation lists exclusions such as store and portfolio pages, product and video blocks, drafts, style settings and custom CSS. Inventory and test the actual site instead of assuming every asset or system exports." },
      { question: "How much does it cost to migrate from Squarespace to a custom website?", answer: "PandaCodeGen's planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. Final price depends on pages, templates, content, excluded export data, design, commerce, scheduling, integrations, SEO, analytics, accessibility, QA, launch and support." },
      { question: "Will I lose my Google rankings if I leave Squarespace?", answer: "Moving off Squarespace doesn't force new URLs: a custom build can keep the same paths, including collection prefixes such as /blog/, so map every address and add a 301 redirect wherever one changes. What you gain is control over rendered output and structured data, which Squarespace emits automatically and does not let you edit. Neither the loss nor the gain is a ranking promise; both are things you can verify in a crawl." },
      { question: "Is Squarespace good enough for a small business in 2026?", answer: "Yes, when its managed editor, supported features and current cost meet the business requirements. Optimize or redesign in place when the platform fits but the implementation does not. Consider custom when required experience, data, integrations or delivery control justifies the added engineering responsibility." },
      { question: "Why is my Squarespace site slow even with optimized images?", answer: "Images are one input. Measure representative routes and investigate page size, fonts, custom code, third parties, embeds, redirects, consent state and platform-controlled work. Squarespace's current guidance recommends keeping page size at or below 5 MB where possible, but there is no universal platform score." },
      { question: "How does Squarespace compare to a custom website on PageSpeed?", answer: "Neither has a universal score. Test comparable representative routes under recorded mobile and desktop conditions, then inspect field Core Web Vitals where available. A custom implementation offers more control but can still be slow if code, media, data or third parties are poorly managed." }
    ]
  },
  {
    id: "wix-vs-custom-website",
    cardStat: "5 areas",
    cardStatLabel: "Compare editing, features, data and operations",
    title: "Wix vs Custom Website in 2026: A Requirements-Led Comparison",
    excerpt: "Compare Wix and a custom website across editing, capabilities, performance, SEO, export, security, total cost, scale and ownership before choosing migration.",
    category: "Wix",
    readTime: "12 min",
    date: "Apr 12",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'webflow',
    lastModified: "2026-10-09",
    faqs: [
      { question: "Can I export my Wix website to another platform?", answer: "Wix documents separate export or transfer paths for some assets, including CMS collections, contacts, physical products, orders and site ownership. There is no single universal export that reproduces every page, design and app behavior on another platform. Inventory each content and data type before estimating migration." },
      { question: "How much does it cost to migrate from Wix to a custom website?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with custom scope where needed. Final price depends on pages, templates, CMS data, commerce, apps, design, integrations, SEO, accessibility, QA, launch and support." },
      { question: "Will I lose my Google rankings if I leave Wix?", answer: "Wix URL patterns rarely survive a rebuild, so budget the redirect map as its own workstream rather than a launch-day task. On the other side you get to control what renders into HTML and what structured data ships, which Wix decides for you. Search engines still control indexing and timing, so verify the mapping rather than expecting a position." },
      { question: "Is Wix good enough for a small business website in 2026?", answer: "Yes when its current editor, supported features, integrations, data controls, performance and operating cost meet the business requirements. Traffic or one monthly-price threshold does not determine the answer. Migrate only when a documented constraint justifies the added engineering responsibility." },
      { question: "Why is my Wix website so slow even after optimizing images?", answer: "Because images are usually not the constraint. Run PageSpeed Insights on the page and read the line naming the LCP element: if it is text, the problem is fonts or render-blocking CSS and no amount of image work will move it. Third-party scripts and apps are the other common cause, and both are things you can check in twenty minutes before spending anything." },
      { question: "What is the difference between Wix and a custom website?", answer: "Wix provides a managed platform, visual editing and supported apps. A custom website can offer more implementation and integration control but requires explicit product, hosting, dependency, security and support ownership. Compare actual requirements rather than assuming either option always wins." }
    ]
  },
  {
    id: "squarespace-migration-cost",
    cardStat: "Scope-led",
    cardStatLabel: "URLs, systems, SEO and acceptance",
    title: "Squarespace Migration Cost in 2026: Scope and Pricing",
    excerpt: "Price a Squarespace migration from the actual URL, content, design, commerce, integration, SEO, acceptance and operating scope.",
    category: "Squarespace",
    readTime: "11 min",
    date: "Apr 9",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'cost',
    lastModified: "2026-10-08",
    faqs: [
      { question: "How much does it cost to migrate from Squarespace?", answer: "PandaCodeGen's planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. Final price depends on pages, templates, export gaps, content, design, commerce, scheduling, integrations, SEO, analytics, accessibility, QA, launch and support." },
      { question: "What does Squarespace actually cost per year?", answer: "Use the current account, invoices and payment statements. Include the site plan, domain, email, scheduling, campaigns, digital products, extensions, transaction and processing fees, custom work and internal administration. Plans and fees can vary by account, product, country and processor." },
      { question: "How long does a Squarespace migration take?", answer: "Most Squarespace rebuilds run three to eight weeks of working time. The Squarespace-specific drag is the redirect map: there is no CSV import and no programmatic management on the platform, so gathering and validating the mapping is manual work that needs its own slot in the schedule rather than a launch-day afternoon." },
      { question: "Will I lose my Google rankings when I migrate from Squarespace?", answer: "Squarespace's collection prefix is the specific problem: it is baked into your URLs and cannot be removed on the platform, so leaving means rewriting nearly every address. Squarespace also has no CSV import for redirects and no programmatic management, so gather the mapping before you leave rather than expecting to manage it afterwards." },
      { question: "Is migrating from Squarespace worth the cost?", answer: "Build a property-specific comparison from current costs, internal time, measured performance, unmet requirements, migration cost, ongoing operation and downside risk. There is no universal payback, conversion lift or ranking outcome." },
      { question: "What is Squarespace's mobile PageSpeed score?", answer: "Squarespace has no universal mobile score. Measure representative routes with field data where available and repeated lab tests under a recorded device, network, consent and page state." },
      { question: "Should I leave Squarespace because of a price increase?", answer: "Not automatically. Reconcile the actual new invoice, use of each feature, alternatives, migration scope and ongoing operating cost. Optimize or change plans when the platform still fits; migrate only when the complete case supports it." },
      { question: "Can I transfer my Squarespace website to another host?", answer: "The domain transfers. The site does not transfer as a working website. Squarespace exports certain content to a WordPress-format XML file rather than a complete portable copy: its current guidance lists layout pages, one blog and selected blocks as exportable, while excluding store pages, portfolio and other page types, product and video blocks, drafts, style settings and custom CSS. The honest planning statement is therefore that you are rebuilding the site and migrating the content and the domain, not moving a site. Price it from an inventory of what does not export rather than from the page count." },
      { question: "How much does it cost to transfer a domain away from Squarespace?", answer: "Moving a domain between registrars is free, but ICANN's transfer policy requires a one-year extension of the registration, purchased from the registrar you move to. Squarespace states it as: 'The transfer is free, but ICANN requires a one-year extension of your domain registration, which you'll purchase through Squarespace.' Two things usually get dropped when that is repeated: it is an industry rule rather than a Squarespace one, so it applies in whichever direction you move, and you keep the time already left on your registration on top of the extra year, so it is a year brought forward rather than a year lost. The price depends on your TLD. Squarespace's transfer page gives $20 to $70 USD for a domain moving to Squarespace, but when you leave, the extra year is bought from the registrar you're moving to, so check your own TLD there on the day you move." }
    ]
  },
  {
    id: "top-custom-web-development-agencies-usa-2026",
    cardStat: "10",
    cardStatLabel: "Agencies and specialist alternatives",
    title: "Top Custom Web Development Agencies USA (2026): A Disclosed Shortlist",
    excerpt: "A non-ranked shortlist of US web partners and specialist alternatives, compared from current first-party service evidence with buyer verification questions.",
    category: "Agency",
    readTime: "11 min",
    date: "Apr 8",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'ranking',
    lastModified: "2026-10-09",
    faqs: [
      { question: "Who is the best custom web development agency in the USA for 2026?", answer: "There is no objective best agency for every project. Match the provider to the platform, migration, commerce, brand, editorial or product problem, then verify the assigned team, comparable work, references, scope, acceptance, ownership, support and current terms." },
      { question: "How much does a custom web development agency in the USA charge?", answer: "Price depends on pages, content, design, data, integrations, accessibility, SEO, security, QA, launch and support. PandaCodeGen publishes $1,500 Starter, $3,500 Growth and $5,000 Scale starting tiers. Other providers must be compared through current like-for-like proposals, not an undated market average." },
      { question: "What is the best tech stack for a custom website in 2026?", answer: "There is no universal best stack. Choose from the required editing workflow, content, commerce, integrations, performance, security, portability, team capability and operating model. Next.js, WordPress, Shopify and other systems can each be appropriate and none guarantees a fixed PageSpeed score." },
      { question: "How do I choose a web development agency in the USA?", answer: "Issue one request for proposal that defines outcomes, scope, content, integrations, SEO, accessibility, security, performance evidence, QA, ownership, support and change control. Compare the assigned team and directly contactable references, not just the sales deck." },
      { question: "Do US web development agencies build on Next.js?", answer: "Some do, while others focus on WordPress, Shopify, Drupal, Webflow or broader product engineering. Confirm the proposed implementation and the assigned team's current evidence rather than inferring capability from a company category." },
      { question: "Which US web agency has the most verified client reviews?", answer: "This article does not rank providers by mutable third-party review counts. Check current profiles directly, read the underlying reviews, consider recency and project similarity, and contact references. Review quantity alone does not establish fit or delivery quality." },
      { question: "Should I hire a US or international web development company?", answer: "Choose from legal, tax, billing, privacy, security, communication, timezone, domain expertise and delivery requirements. A US contract can be useful, but location alone does not establish quality, compliance or fit. Put governing law and required obligations in the signed agreement." }
    ]
  },
  {
    id: "divi-theme-slow",
    cardStat: "4 paths",
    cardStatLabel: "Optimize, upgrade, rebuild, or migrate",
    title: "Divi Theme Slow? A 2026 Diagnostic and Fix Guide",
    excerpt: "Diagnose a slow Divi site, test Divi 5 and in-place fixes, and decide whether to optimize, rebuild in WordPress, or migrate.",
    category: "WordPress",
    readTime: "14 min",
    date: "Apr 8",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-10-01",
    faqs: [
      { question: "Why is my Divi website slow?", answer: "The cause can be server response, cache behavior, Divi or compatibility-mode assets, plugins, child-theme code, database work, media, fonts, tags, embeds, or application logic. Measure representative routes with field data where available and repeat controlled lab tests before assigning the cause." },
      { question: "What PageSpeed score does a Divi site typically get?", answer: "There's no defensible universal score. Divi version, modules, templates, media, plugins, hosting, cache, third parties, consent state, device, network, and test version all affect the result. Record the conditions and inspect individual metrics and diagnostics instead of using a platform-wide range." },
      { question: "Is Divi 5 still in beta?", answer: "No. Elegant Themes officially ended the beta on February 26, 2026. Its update log lists Divi 5.14, released September 28, 2026, checked October 8, 2026. Existing sites should still back up, test on staging, run the migrator, inspect unsupported modules, and verify routes that use backward compatibility mode." },
      { question: "Can caching plugins fix Divi speed problems?", answer: "Caching can reduce repeated server and delivery work, but it doesn't fix every cause. On its own it can't remove expensive third parties, repair a slow interaction, reserve missing layout space, or convert an unsupported legacy module. Change one measured group at a time and retest." },
      { question: "How much does it cost to migrate from Divi?", answer: "PandaCodeGen's planning tiers start at $1,500 for Starter and $3,500 for Growth, while Scale starts at $5,000. Final price depends on the accepted URL, template, content, integration, data, design, security, testing, launch, and support scope." },
      { question: "Will I lose Google rankings when I migrate away from Divi?", answer: "A controlled migration reduces avoidable technical risk through a dated URL inventory, stable URLs where practical, page-level redirect mapping, accurate metadata and canonicals, rendered-output checks, sitemap submission, rollback planning, and Search Console monitoring. Search engines still control crawling, indexing, traffic, rankings, and timing, so those outcomes are not guaranteed." },
      { question: "How many websites use Divi?", answer: "Elegant Themes publishes a customer count, not a website count. On August 2, 2026 its site showed 974,872 customers, and because a Divi license allows unlimited installs that isn't the number of live Divi websites. Elegant Themes describes the site total only as millions of Divi websites without publishing a figure, so specific counts such as 1.58 million or 4 million come from third-party technology detectors and should be cited by detector name and date, not presented as the vendor's own." },
      { question: "Is Divi 5 slow?", answer: "Not by design, and the version number is the wrong variable. Elegant Themes describes the Divi 5 framework as loading only the modules a page uses. What produces a slow Divi 5 site is a partial migration: the vendor states that pages left in backward compatibility mode don't receive all Divi 5 performance improvements, so a site can be on Divi 5 and still behave like Divi 4 on exactly the complicated pages that were already slowest. Record which pages migrated and which modules remain in compatibility mode before blaming the version." },
      { question: "Where are the Divi 5 performance settings, and why can't I find Static CSS File Generation?", answer: "Because that setting belongs to Divi 4, under Theme Options > Builder > Advanced. Most Divi speed advice published elsewhere, including Google's AI summary, still tells you to enable it. Elegant Themes' Divi 5 Theme Options documentation puts the performance controls at Divi > Theme Options > General > Performance and describes them as dynamic CSS, dynamic icons, critical CSS and deferring scripts. It doesn't mention Static CSS File Generation. If you're on Divi 5 and can't find the toggle every guide names, nothing is broken." },
    ]
  },
  {
    id: "wix-too-slow",
    cardStat: "2 views",
    cardStatLabel: "Field and lab checks to run",
    title: "Wix Website Too Slow? A 2026 Diagnostic and Fix Guide",
    excerpt: "Use Wix field data and controlled lab tests to isolate media, fonts, apps, custom code, third parties, redirects and platform-controlled work before deciding to optimize or migrate.",
    category: "Wix",
    readTime: "11 min",
    date: "Apr 10",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-10-09",
    faqs: [
      { question: "Why is my Wix website slow?", answer: "Possible causes include heavy pages, media, fonts, animation, apps, custom code, third parties, redirects, consent state and platform-controlled work. Segment Wix field data where available and reproduce the affected route with controlled lab tests before assigning a cause." },
      { question: "What PageSpeed score does a Wix site get?", answer: "There is no defensible universal Wix score. Lighthouse results vary by URL, content, device, network, test version and run. Use field Core Web Vitals for real-user experience where data exists and repeat lab tests under recorded conditions for diagnosis." },
      { question: "Can I fix Wix speed without leaving the platform?", answer: "Often, depending on the measured cause. Optimize media and fonts, remove unnecessary apps and third parties, review custom code and animation, simplify heavy pages and retest. Platform-controlled work may remain, but migration is not the automatic first step." },
      { question: "How much does it cost to migrate from Wix?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. Final price depends on pages, templates, CMS data, commerce, apps, design, integrations, SEO, accessibility, QA, launch and support. No speed or payback outcome is automatic." },
      { question: "Will I lose my Google rankings when I leave Wix?", answer: "Leaving Wix changes the URL shape for most pages, so the redirect map is the job, not a detail of it. Crawl the live site and pull Search Console before you design the new structure. A brief dip while search engines reprocess is expected; what is not expected is a page with no destination, and that is entirely within your control." },
    ]
  },
  {
    id: "leaving-webflow-2026",
    cardStat: "50 GB",
    cardStatLabel: "Premium bandwidth baseline",
    title: "Leaving Webflow in 2026: Stay, Optimize, or Migrate?",
    excerpt: "A current framework for leaving Webflow: pricing and bandwidth changes, export limits, total cost, performance diagnosis, and an SEO-safe migration plan.",
    category: "Webflow",
    readTime: "20 min",
    date: "Apr 6",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'webflow',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Is Webflow worth it in 2026?", answer: "Webflow can still be a strong fit when a marketing team values visual editing, the current Site and Workspace plans fit the budget, and the platform supports the next two to three years of content and integration needs. Review your actual account terms, bandwidth usage, add-ons, roadmap, performance data, and governance requirements instead of deciding from one plan change or incident." },
      { question: "When should a business leave Webflow?", answer: "Consider leaving when several structural constraints overlap: recurring cost no longer matches value, product logic or integrations exceed the supported model, export limitations create unacceptable dependency, governance requires client-controlled infrastructure, or measured performance problems remain after a focused optimization pass. One low PageSpeed score or one outage is not a complete migration case." },
      { question: "How much does it cost to migrate from Webflow?", answer: "Our tiers start at $1,500, $3,500 and $5,000, and which one applies is decided by what does not export from Webflow rather than by page count. Static pages are cheap to move. Collection templates, localized content, site search and anything gated get rebuilt, and those are what push a project up a tier." },
      { question: "Will I lose my SEO rankings when I leave Webflow?", answer: "Webflow's URLs usually survive a move better than most platforms because you controlled the slugs already, which makes this one of the lower-risk migrations if the content comes across intact. The real exposure is elsewhere: CMS-driven pages, localized content and anything behind User Accounts do not export, so those routes get rebuilt and must be re-mapped deliberately." },
      { question: "How long does a Webflow migration take?", answer: "Weeks rather than months for a marketing site, with the timeline driven by what does not export. Static pages come across quickly; Collection-driven templates, localized content, site search and anything gated get rebuilt, and those are the routes that set the schedule. Count them before you agree a date." },
      { question: "Can I export my entire Webflow site and host it somewhere else?", answer: "Webflow code export on eligible paid Workspace plans includes HTML, CSS, JavaScript, and assets, but it is not a complete application export. Webflow documents that CMS, User Accounts, Ecommerce databases and functionality, localized content, password protection, form processing, reCAPTCHA, site search, and code components are excluded or will not continue working as they did on Webflow hosting." },
      { question: "What happens to Webflow CMS content during migration?", answer: "CMS records can be exported as CSV files, then imported or transformed for the destination CMS. The migration still needs to validate slugs, references, rich text, drafts, locales, image and file URLs, metadata, and relationships. Assets should be downloaded or moved before the original Webflow site is deleted because exported records may still point to Webflow-hosted files." },
      { question: "Can a commercial Webflow replacement use free Vercel Hobby hosting?", answer: "No. Vercel's current terms restrict Hobby to personal, non-commercial use. A revenue-generating or client website should be budgeted on a commercially permitted plan such as Pro, currently listed from $20 per month, or another provider and plan whose terms allow the intended use. Usage, seats, storage, monitoring, and support can add cost." },
    ]
  },
  {
    id: "cloudflare-emdash-wordpress-replacement",
    cardStat: "1.0",
    cardStatLabel: "stable release, 28 Sep 2026",
    title: "Cloudflare EmDash vs WordPress: 2026 Readiness Guide",
    excerpt: "Cloudflare calls EmDash the spiritual successor to WordPress, and it reached 1.0 in September 2026. What changed, how the plugin sandbox and registry work, why it is not a Next.js CMS, and the migration risks.",
    category: "WordPress",
    readTime: "19 min",
    date: "Apr 4",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'plugins',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What is Cloudflare EmDash?", answer: `EmDash is an open-source content management system announced by Cloudflare on April 1, 2026. Cloudflare describes it as the spiritual successor to WordPress. It is a TypeScript CMS that runs inside an Astro site, with an admin panel, structured content, authentication, media, sandboxed plugins, WordPress import, and Cloudflare or Node.js hosting. Version 1.0 shipped on ${spec("emdash-1-0-release-date").value} and Cloudflare now calls it stable; the current release is ${spec("emdash-current-version").value}.` },
      { question: "Is Cloudflare EmDash an April Fools joke?", answer: `No, and the announcement date is the only reason to wonder. Cloudflare published EmDash on April 1, 2026. Read from GitHub's public API on October 4, 2026, six months later, the emdash-cms/emdash repository was created on April 1, 2026, was last pushed to on October 3, 2026, and carries 13,326 stars, 1,259 forks and 365 open issues and pull requests under an MIT licence. It shipped version 1.0 on ${spec("emdash-1-0-release-date").value}. Two more first-party repositories are still moving: emdash-cms/wp-emdash, the WordPress-side transition plugins, pushed 6 July, and emdash-cms/templates, pushed 1 October. Anyone can repeat that check in a minute.` },
      { question: "Is EmDash production ready, or still beta?", answer: `It is out of beta. EmDash 1.0 shipped on ${spec("emdash-1-0-release-date").value}, and Cloudflare calls it ready to power a production website. From 1.0, breaking changes ship only in a new major version, and the current release is ${spec("emdash-current-version").value}. Stable software is not the same as a mature ecosystem: the plugin registry listed ${spec("emdash-registry-plugin-count").value} entries on 4 October 2026. Production readiness is a property of a specific system and operating plan, not of the CMS, so pilot it against your hardest integration before setting a launch date.` },
      { question: "Does EmDash have any plugins yet?", answer: `Yes, and since 1.0 there is an official place to find them. The EmDash plugin registry at plugins.emdashcms.com, built on AT Protocol, listed ${spec("emdash-registry-plugin-count").value} entries on 4 October 2026, one of them a test entry, covering contact forms, SEO checks, analytics, email sending, image optimisation and AI alt text. The registry supports only free plugins today; Cloudflare says it aims to add paid ones. Each plugin runs sandboxed with its own storage and declared permissions. It is a real start and still a small fraction of WordPress's plugin directory, which remains the biggest practical difference between them.` },
      { question: "Does EmDash work with Next.js?", answer: "No. EmDash runs inside an Astro application, so the CMS and the website are one deployed app, not a content service a Next.js front end can call, and its documentation and release notes listed no Next.js integration on 4 October 2026. Cloudflare's Next.js release that week was a separate product, Vinext 1.0, which runs existing Next.js apps on Vite so they can deploy to the Workers free plan, Netlify or AWS Lambda. A Next.js site that needs a CMS pairs with a headless one such as Sanity instead." },
      { question: "Is EmDash a complete WordPress replacement in 2026?", answer: `Not as a universal one-for-one replacement. EmDash reached 1.0 in September 2026 and has a solid feature set, but its extension and support ecosystem is six months old. Compare the exact content model, editorial workflow, integrations, permissions, operations, and recovery requirements before treating it as a production replacement.` },
      { question: "Should a business use EmDash in production?", answer: `That depends on the property's risk and requirements. A low-risk pilot suits a team that can test and maintain a platform that only reached 1.0 in September 2026. A revenue-critical, regulated, or integration-heavy property needs a representative pilot, security review, backup and recovery tests, upgrade plan, observability, and a documented rollback path before approval.` },
      { question: "Is WordPress dead in 2026?", answer: "No. Cloudflare's launch of EmDash expands the available CMS choices, but it does not prove that WordPress is dead or that every WordPress site should migrate. Google also did not announce a WordPress penalty in its March 2026 core update. Keep, remediate, or replace WordPress according to documented business, security, performance, editorial, and operating requirements." },
      { question: "Will moving from WordPress to EmDash or Next.js preserve SEO rankings?", answer: "Moving WordPress to EmDash, or anywhere else, changes technical search signals and needs a mapped destination for every old URL. EmDash publishes a WordPress import path, but importing content is not the same as preserving addresses. Treat the URL map as a separate deliverable from the content migration, and test the redirects before cutover rather than after." },
      { question: "Is EmDash free to host, and how much does a WordPress migration cost?", answer: `EmDash is MIT-licensed, so the software costs nothing, and new projects deploy on the Cloudflare Workers free plan. Usage beyond the free allowances is billed, and turning on sandboxed plugins on Cloudflare needs the ${spec("emdash-sandbox-cloudflare-plan").value} plan. On Node.js you pay for whatever server runs it. Migration cost depends on your WordPress site, not on EmDash, and our tiers start at $1,500, $3,500 and $5,000.` },
      { question: "Does EmDash have a page builder or a theme marketplace?", answer: `No drag-and-drop page builder, and no theme switcher in the admin. Editors can add and reorder blocks that a developer has defined and edit text in place, but a theme is a whole Astro project chosen at the start, sold or shared outside the admin. For most WordPress owners that is the deciding fact, not anything about the architecture. If the people who maintain your site currently work by moving sections around and swapping themes, migrating does not fail on infrastructure, it fails the first time somebody needs to change a layout and finds the job now belongs to a developer. Answer that staffing question before running a technical pilot, not after.` },
      { question: "How does EmDash hosting billing actually work?", answer: `Cloudflare Workers spins up an isolate when a request arrives, scales back to zero when traffic stops, and bills for requests and CPU time, not for a server running whether or not anyone visits. The Workers Paid plan has a $5 monthly minimum. On a site with uneven traffic that is a genuinely different cost shape from a VPS, but it is a shape, not a discount: usage-based pricing rewards a quiet site and charges more for inefficient code, so what you save depends on what you run. EmDash also has an official x402 add-on package, which allows per-article payments without a subscription or an account, relevant only if you actually sell content.` },
    ]
  },
  {
    id: "google-algorithm-updates",
    cardStat: `${UPDATE_STATS.total}`,
    cardStatLabel: "Confirmed updates since 2021",
    title: "Google Algorithm Updates: Every Confirmed Update Since 2021",
    excerpt: `Google has confirmed ${UPDATE_STATS.total} ranking updates since ${REGISTER_START}, ${UPDATE_STATS.coreCount} of them core updates. The full dated register from Google's own dashboard, plus how to tell whether one actually hit your site.`,
    category: "SEO",
    readTime: "15 min",
    date: "Apr 9",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'ranking',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What is the latest Google algorithm update?", answer: `${inProgressUpdate ? `The most recent update on Google's Search Status Dashboard is the ${inProgressUpdate.name}, which began rolling out on ${longDate(inProgressUpdate.start)} and is still rolling out${inProgressUpdate.expectedRollout ? ` (Google says it may take ${inProgressUpdate.expectedRollout})` : ''}. The last one to finish was the ${UPDATE_STATS.latest.name}, which began on ${longDate(UPDATE_STATS.latest.start)} and took ${UPDATE_STATS.latest.duration} to complete.` : `The most recent update on Google's Search Status Dashboard is the ${UPDATE_STATS.latest.name}, which began rolling out on ${longDate(UPDATE_STATS.latest.start)} and took ${UPDATE_STATS.latest.duration} to complete.`} The most recent core update is the ${UPDATE_STATS.latestCore.name}, which started ${longDate(UPDATE_STATS.latestCore.start)} and ran for ${UPDATE_STATS.latestCore.duration}. Google announces a name, a start date and a completion date for each one, and nothing about which ranking factors changed.` },
      { question: "How long does a Google core update take to roll out?", answer: `Across the ${UPDATE_STATS.coreCount} core updates Google has dated on its Search Status Dashboard, the median rollout is ${UPDATE_STATS.medianCoreDays} days. The shortest was the ${UPDATE_STATS.shortestCore.name} at ${UPDATE_STATS.shortestCore.duration}; the longest was the ${UPDATE_STATS.longestCore.name} at ${UPDATE_STATS.longestCore.duration}. None has completed in under six days, so a traffic comparison run in the first week of a core update is measuring a half-applied change.` },
      { question: "How do I know if a Google algorithm update hit my site?", answer: "Wait for Google to mark the rollout complete, then wait one more full week. In Search Console's Performance report, compare a post-rollout week against an equivalent pre-rollout week, then segment the difference by page, query, device, country and search type. Before concluding an update caused it, rule out the alternatives with the Page indexing report, Crawl stats, Manual Actions, Security Issues, URL Inspection on both winners and losers, and your own release log. A site-wide loss across established queries looks nothing like a mobile-only decline on two templates." },
      { question: "How long does it take to recover from a Google core update?", answer: "There is no universal recovery period. Google's core-update guidance says some improvements may be reflected within days while broader reassessment can take several months, and it states plainly that no change guarantees a visible ranking effect. Diagnose the affected pages and queries, make sustainable improvements, release them in controlled groups so you can tell which one helped, and monitor on a schedule instead of promising a date." },
      { question: "Does Google penalize slow websites in its algorithm updates?", answer: "No announced update has ever carried a speed penalty. Google has never attached an LCP cutoff, a PageSpeed score requirement or a stated percentage of affected slow sites to a named core update. Its current Core Web Vitals thresholds are LCP at 2.5 seconds or better, INP at 200 milliseconds or better and CLS at 0.1 or better, and those numbers have not moved with any update in the record. Google's own page-experience documentation says good scores can contribute to Search success but do not guarantee rankings." },
      { question: "Does Google target WordPress, Shopify or Wix in its updates?", answer: "No. Google has never named a content management system in an announced update, and platform names are not a diagnosis. Performance and search visibility on any platform depend on hosting, theme, plugins or apps, media, caching, fonts, third-party scripts, rendering strategy and editorial decisions. Test representative templates with both field and lab data, then decide whether the current implementation can be optimized or whether documented, recurring constraints justify a migration." },
    ]
  },
  {
    id: "webflow-vs-custom-website",
    cardStat: "4 factors",
    cardStatLabel: "Decision framework, not a price war",
    title: "Webflow vs Custom Website in 2026: A Four-Factor Decision",
    excerpt: "Choose using editing, requirements, ownership and lifecycle responsibility, with current export, pricing, SEO and performance limits.",
    category: "Webflow",
    readTime: "12 min",
    date: "Mar 27",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'webflow',
    lastModified: "2026-10-09",
    faqs: [
      { question: "How do I decide between Webflow and a custom website?", answer: "Compare the actual editing workflow, required features, ownership and portability, and complete lifecycle responsibility. Choose Webflow when its managed visual system fits; optimize it when the platform fits but implementation does not; choose custom when verified requirements justify added engineering ownership." },
      { question: "Is Webflow good enough for a small business, or do I need custom code?", answer: "Webflow can be a strong fit when visual production, its CMS and supported features meet the requirements and the current cost is acceptable. Business size or traffic alone does not decide. Custom becomes relevant when specific data, experience, integration, portability or release needs justify it." },
      { question: "Does my team's technical skill matter when choosing a website platform?", answer: "Yes. Webflow can let designers and content editors work in a managed environment. A custom site can give editors a structured CMS, while structural changes, upgrades, security and operation require technical ownership. Test the real workflow with the people who will use and maintain it." },
      { question: "How much traffic do I need before a custom website is worth it?", answer: "Traffic is the wrong trigger. A custom build earns its cost when something the platform cannot do is costing you money, or when the platform bill plus the workaround labour exceeds what building would cost. A high-traffic site that Webflow serves perfectly well should stay. A low-traffic site blocked on an integration might not." },
      { question: "Will I lose my Google rankings if I migrate from Webflow to custom code?", answer: "Off Webflow, the addresses are usually the easy part because you already chose the slugs. The harder part is that CMS pages, site search, localized content and anything gated do not export, so those routes get rebuilt from scratch and can render differently. Compare the rendered HTML of a representative page on both sides before you cut over." },
    ]
  },
  {
    id: "shopify-vs-custom-website",
    cardStat: "4 models",
    cardStatLabel: "Theme, headless or fully custom",
    title: "Shopify vs Custom Website in 2026: A Decision Framework",
    excerpt: "Compare a Shopify theme, headless Shopify and a fully custom commerce system across requirements, cost, performance, ownership, SEO and operational responsibility.",
    category: "Shopify",
    readTime: "12 min",
    date: "Mar 30",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'cost',
    lastModified: "2026-10-08",
    faqs: [
      { question: "When should I switch from Shopify to a custom website?", answer: "Do not switch from a headline threshold. Compare required experience, checkout, integrations, data, performance, current cost and operating capability. A theme optimization may solve implementation problems; headless can change the storefront while retaining Shopify commerce; fully custom transfers more responsibility." },
      { question: "How much does a custom ecommerce website cost compared to Shopify?", answer: "PandaCodeGen's planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, but commerce scope can exceed those ranges. Compare current Shopify plans, apps, fees and internal work with migration, providers, maintenance, security, support and team time." },
      { question: "Will I lose sales during a Shopify migration?", answer: "A parallel build, tested data and integration flows, URL mapping, rollback and monitored cutover can reduce risk, but zero interruption or uninterrupted revenue cannot be guaranteed. Define acceptable interruption, rollback triggers and owners in the signed launch plan." },
      { question: "Can a custom website do everything Shopify does?", answer: "Only if each required catalog, checkout, payment, tax, fraud, inventory, order, account, discount, subscription, localization and support workflow is implemented or assigned to a provider. Custom code removes neither third-party dependencies nor ongoing operating work." },
      { question: "What is headless Shopify and is it worth it?", answer: "Headless Shopify keeps Shopify for commerce services while replacing the storefront. It can be worthwhile when measured storefront requirements justify the added search, analytics, consent, account, localization, integration, deployment and monitoring responsibility. There is no universal traffic or payback threshold." },
    ]
  },
  {
    id: "squarespace-too-slow",
    cardStat: "Field + lab",
    cardStatLabel: "Diagnose representative routes",
    title: "Squarespace Too Slow in 2026? Diagnose Before Migrating",
    excerpt: "Measure representative routes, inspect page weight, fonts, custom code, third parties and redirects, then choose an in-platform fix or a scoped migration.",
    category: "Squarespace",
    readTime: "10 min",
    date: "Mar 27",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Why is my Squarespace site slow?", answer: "Possible causes include heavy pages, media, fonts, custom code, third parties, embeds, redirects, consent state and platform-controlled work. Measure representative routes with field data where available and repeated lab tests before assigning the cause." },
      { question: "Can I fix Squarespace speed without leaving the platform?", answer: "Often, depending on the measured cause. Follow Squarespace's current page-size and media guidance, reduce unnecessary fonts and third parties, review custom code and redirects, and retest. Platform-controlled constraints remain, but migration is not the automatic first step." },
      { question: "Does Squarespace hurt my Google rankings?", answer: "Squarespace does not impose one ranking outcome. Google uses many signals, and Core Web Vitals are part of broader page experience. Verify crawlability, content, metadata, internal links, structured data and route-level experience. Neither optimization nor migration guarantees rankings." },
      { question: "What is the best alternative to Squarespace for a fast site?", answer: "There is no universal fastest alternative. Compare the required editor, features, integrations, data, performance controls, portability and operating capability, then test a representative implementation under recorded conditions." },
      { question: "How much does it cost to migrate from Squarespace to a custom site?", answer: "PandaCodeGen's planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale. Final price depends on the accepted inventory, export gaps, design, content, integrations, SEO, analytics, accessibility, QA, launch and support." },
    ]
  },
  {
    id: "woocommerce-too-slow",
    cardStat: "4 layers",
    cardStatLabel: "Field, lab, backend and commerce checks",
    title: "WooCommerce Too Slow? Fix Checkout and Add to Cart (2026)",
    excerpt: "Diagnose a slow WooCommerce store with field data, lab tests, server traces and transaction checks. Prioritize repairs before considering headless or replacement.",
    category: "WooCommerce",
    readTime: "25 min",
    date: "Mar 25",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-10-09",
    faqs: [
      { question: "Why is my WooCommerce store slow?", answer: "The cause may be hosting, caching, extensions, theme code, media, database work, third parties or background operations. Use real-user field data, controlled lab tests, server traces and transaction checks to isolate the affected layer before changing architecture." },
      { question: "What PageSpeed score should WooCommerce aim for?", answer: "There's no universal platform score. A Lighthouse score of 90 or above is the tool's good-score band, not a Google ranking threshold. Contractual targets should name representative pages, profiles, environment and repeated runs while field Core Web Vitals track real-user experience." },
      { question: "How much does a slow WooCommerce store cost in lost sales?", answer: "Calculate impact from the store's dated analytics, funnel, errors, margins and affected cohorts. Control for campaign, price, stock, device, geography and seasonality where possible. A public speed benchmark doesn't prove this store's conversion or revenue loss." },
      { question: "Can I fix WooCommerce speed without rebuilding?", answer: "Often. Repair errors and resource limits, configure safe caching, optimize assets, profile queries and extensions, and retest representative journeys. Consider headless or replacement only when the capabilities, measured constraints and operating model justify added migration risk." },
      { question: "What is the best alternative to WooCommerce for speed?", answer: "There's no universal fastest platform. Compare optimized WooCommerce, headless WooCommerce and replacement against the same catalog, scripts, transaction flows, field metrics, lab conditions and operating responsibilities." },
      { question: "How do I speed up WooCommerce?", answer: "Build a baseline, fix errors and resource exhaustion, configure caching with commerce exclusions, optimize measured assets and queries, isolate extension and third-party impact, and retest functional and performance acceptance after each change." },
      { question: "Why is WooCommerce add to cart slow?", answer: "Because the click is a server round trip, not a local update. WooCommerce runs WordPress, resolves the product, checks stock and pricing, matches the variation on variable products, writes the cart to the session, then returns the updated mini-cart in the same response. In a browser network panel it appears as wc-ajax=add_to_cart, or as /wc/store/v1/cart/add-item on a block-based store. The response differs per visitor, so it can't be served from a page cache and lands on PHP every time. Any extension hooked into the add-to-cart action, such as bundles, add-ons, subscriptions, live shipping or dynamic pricing, runs inside that same request. A common and overlooked cause is more than one mini-cart on the page: a theme cart, a slide-out cart plugin and a page-builder cart widget can each refresh fragments on the same click." },
      { question: "Why is WooCommerce checkout slow?", answer: "Checkout can't be served from a page cache, so every load and every recalculation runs on the server. On the classic checkout, typing an address queues a wc-ajax=update_order_review request one second after the last keystroke, and changing the shipping method sends one straight away; each recalculates shipping and totals. On the block checkout, the default for new stores since WooCommerce 8.3, the same changes go to the Store API. Live carrier rates, payment and fraud services, and extensions hooked into checkout all add to those requests. Time each one in your browser's Network panel, and check that shipping Debug mode is off, because WooCommerce says it bypasses the shipping rate cache. Read from WooCommerce's docs and source code on October 4, 2026." },
      { question: "How do I enable HPOS in WooCommerce?", answer: "Go to WooCommerce > Settings > Advanced > Features in wp-admin. High-Performance Order Storage has been the default for new installations since WooCommerce 8.2, so an older store may still be on the legacy post tables. Compatibility mode keeps both sets of tables in sync while you transition, which is the safe way to migrate but means orders are written twice until you turn it off. Test on a production-like copy, confirm every extension declares compatibility, and keep a rollback plan. HPOS improves order-data operations; it isn't a storefront speed fix." },
      { question: "What server does WooCommerce actually need?", answer: "WooCommerce's own server requirements list PHP 8.3 or greater, MySQL 8.0 or greater or MariaDB 10.6 or greater, and a WordPress memory limit of 256 MB or greater. A store running below those is being held back by its environment before any optimization work begins, so check them before buying a caching plugin. Checked August 2, 2026." },
    ]
  },
  {
    id: "webflow-migration-cost",
    cardStat: "4 tiers",
    cardStatLabel: "Scoped from inventory and acceptance",
    title: "Webflow Migration Cost in 2026: Scope, Tiers and Evidence",
    excerpt: "Price a Webflow migration from the actual pages, CMS, exports, forms, localization, integrations, SEO, acceptance and operating scope.",
    category: "Webflow",
    readTime: "19 min",
    date: "Mar 25",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'migration',
    lastModified: "2026-10-09",
    faqs: [
      { question: "How much does Webflow migration cost in 2026?", answer: "PandaCodeGen's planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with custom work scoped separately. Final price depends on templates, CMS, export gaps, content, integrations, SEO, accessibility, QA, cutover and support." },
      { question: "What factors increase the cost of a Webflow migration project?", answer: "Unique templates, CMS relationships, localization, interactions, ecommerce, membership, forms, search, integrations, content cleanup, redesign, accessibility, security, SEO, compressed schedules and additional reviewers can all expand scope. Quantify them from the live inventory." },
      { question: "What are the ongoing costs after a Webflow migration?", answer: "Include hosting, bandwidth, builds, CMS, database, forms, email, search, analytics, monitoring, backups, security, domains, support and internal time. Free allowances are not permanent commercial-cost promises, and exact cost depends on the chosen providers and usage." },
      { question: "How much should we budget for a Webflow migration for a 50 to 100 page site?", answer: "Most sites this size land in PandaCodeGen's Growth or Scale tier, so from $3,500 for Growth or from $5,000 for Scale, and which one depends on template count rather than URL count. Fifty URLs can be five templates repeated with different content or fifty unique layouts, and those are not the same job. Group the URLs into templates and CMS Collections before budgeting. These are our prices, not a market average." },
      { question: "How much does it cost to host a Webflow site?", answer: "Read on Webflow's own pricing page on August 2, 2026: Site plans are Starter at $0, Basic at $15/mo billed yearly and Premium at $25/mo billed yearly, quoted per site in USD before tax. Basic is for sites that do not need a CMS, so a single Collection puts you on Premium. Team is $2,500/mo on an annual contract and includes a site and Workspace, rechecked September 18, 2026. Do not add a separate Site plan charge for the included site; additional sites and extras require a Webflow quote. Enterprise is quoted on request. Ecommerce is a separate plan at $29, $74 or $212/mo, and Optimize, Analyze and Localize are add-ons on top, Localize priced per added locale." },
      { question: "Do I have to pay per page to migrate my content?", answer: "Usually not, and you can check it yourself in about twenty minutes. Webflow's CMS import documentation states that CSVs exported from other content management systems like WordPress are typically already compatible, and that hundreds or thousands of items import in one pass. A per-page rate is only honest where the import genuinely breaks: rich text whose markup does not display as it did in the old editor, image columns with broken or non-direct URLs, self-hosted video, number columns containing currency symbols or thousands separators, file fields which accept no imported data at all, and option columns with more than 100 distinct values." },
      { question: "Will I lose my Google rankings when migrating from Webflow to Next.js?", answer: "Webflow slugs are yours already, so the URL mapping is often lighter here than on Wix or Squarespace. The risk sits in what does not export: Collection-driven pages, localized content, site search and gated areas are rebuilt rather than transferred, and a rebuilt template is where content quietly goes missing. Diff the rendered output route by route." },
      { question: "How long does a Webflow migration take?", answer: "Weeks rather than months, set by template count and by how much of the site does not export. Your Webflow site keeps running throughout, so the pressure is on approvals rather than downtime. The cutover itself is short; what takes time is testing that every rebuilt Collection template renders what the original did." },
    ]
  },
  {
    id: "wordpress-migration-cost",
    cardStat: "4 tiers",
    cardStatLabel: "Scope URLs, templates, data and acceptance",
    title: "WordPress to Next.js Migration Cost in 2026: Scope and Tiers",
    excerpt: "Price a WordPress to Next.js migration from URLs, templates, content, plugins, data, integrations, SEO, accessibility, acceptance, cutover and support.",
    category: "WordPress",
    readTime: "18 min",
    date: "Mar 22",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'migration',
    lastModified: "2026-10-09",
    faqs: [
      { question: "How much does a WordPress to Next.js migration cost in 2026?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with complex commerce and application work scoped separately. Final price follows the accepted URL, template, content, plugin, data, integration, quality, cutover and support scope." },
      { question: "How long does a WordPress to Next.js migration take?", answer: "A host transfer can be same-day. A platform rebuild is weeks, and MyCustomPatches, an owner-confirmed PandaCodeGen delivery example, completed in about 22 days. That is one project, not a standard, and the variable is template count and content readiness rather than page count. The existing site stays live until cutover." },
      { question: "Will I lose my Google rankings when I migrate from WordPress to Next.js?", answer: "If you are changing hosts and keeping WordPress, nothing search engines can see needs to change at all. If you are rebuilding on another platform, every URL needs a documented destination and every template needs checking for content that did not come across. Those are two different jobs with two different risk profiles, and only the second one needs a redirect workstream." },
      { question: "Is migrating from WordPress to Next.js worth it financially?", answer: "Compare migration with a maintain-and-optimize WordPress option using current invoices, internal work, target provider costs and planned features. Keep hypothetical ranking, conversion and revenue effects outside the base case unless first-party evidence supports them. No universal payback period applies." },
      { question: "What should a professional migration include?", answer: "The signed scope should identify URLs, templates, content, data, plugins, integrations, editing, accessibility, SEO, analytics, security, performance profiles, browser and functional QA, cutover, rollback, ownership and support. The exact inclusions depend on the inventory rather than a universal checklist." },
      { question: "What happens to my WordPress plugins after migration?", answer: "Inventory the capability, data and dependencies of each plugin. Mark it retain, replace, redesign or retire, and define acceptance for the target. A plugin count does not establish migration effort, and deactivation is not a safe data-migration strategy." },
    ]
  },
  {
    id: "gohighlevel-website-speed",
    cardStat: "3 runs",
    cardStatLabel: "Per agreed page and mobile or desktop test profile",
    title: "GoHighLevel Site Slow? Diagnose and Fix It in 2026",
    excerpt: "A measured workflow for PageSpeed, Core Web Vitals, in-platform fixes and deciding whether a hybrid frontend is justified.",
    category: "GoHighLevel",
    readTime: "23 min",
    date: "Mar 22",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'performance',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What PageSpeed score does a typical GoHighLevel site get?", answer: "HighLevel's own troubleshooting guide (modified 25 September 2026) says a well-optimized GoHighLevel page typically scores above 80 on mobile and above 95 on desktop, including pages with tracking codes and high-resolution images. That's HighLevel's figure, not one we measured, and results still vary by page, custom code, media, third parties, device and network, so compare your own pages against it with at least three runs each." },
      { question: "Does a low mobile Lighthouse score directly hurt rankings?", answer: "Lighthouse is a lab diagnostic, not a direct ranking grade. Google uses Core Web Vitals in its ranking systems but says good scores don't guarantee top rankings and relevance remains fundamental. Review field data, search output, content and the rest of the page experience." },
      { question: "Will migrating HighLevel pages preserve every automation?", answer: "Only if every real trigger, required field and downstream behavior is inventoried and tested. A custom form that creates a contact won't, on its own, recreate the form, appointment, tag, attribution or opportunity events your existing workflows use." },
      { question: "Can editors update a separate frontend?", answer: "Yes, when the accepted scope includes a suitable CMS and content model. Editing, preview, permissions, publishing, media, rollback and training depend on the system you choose and how it's built; no CMS works exactly like HighLevel's builder." },
      { question: "How long does a typical GoHighLevel frontend rebuild take?", answer: "In-platform fixes are same-week: compress the media, cut the tracking scripts, fix the fonts, remeasure. That sequence should always run first because it's cheap and often closes the gap. A separate frontend takes weeks, and should only start once you've measured the in-platform work falling short of a requirement you can name." },
      { question: "Can I migrate one funnel first?", answer: "Yes, if DNS, routing, attribution, consent and CRM behavior allow a safe split. Define the pilot URL, traffic, integration tests, success criteria, rollback, and the evidence that would justify the next phase." },
      { question: "Will custom form submissions reach HighLevel pipelines?", answer: "They can, through a supported, scoped integration. Test authentication, validation, spam controls, duplicate settings, field mapping, the specific workflow trigger, errors, retries and notifications. A contact appearing in HighLevel doesn't prove the whole pipeline works." },
      { question: "Does PandaCodeGen guarantee 90+ PageSpeed?", answer: "A 90+ Lighthouse target applies only when accepted project terms name representative pages, mobile and desktop profiles, the exact environment, three passing runs per page and profile, exclusions and remedy. It is not a ranking, lead, conversion or revenue guarantee." },
      { question: "Are GoHighLevel websites good for SEO?", answer: "HighLevel sites are indexable and can rank. The platform doesn't block search engines, and it gives you control of titles, descriptions, URLs, headings and alt text. What it constrains is the delivery layer. That's what Core Web Vitals pick up, and they're one input among many, not the deciding one. Most HighLevel sites that underperform in search are losing on thin pages, one landing page trying to rank for everything, no internal linking and no topical depth, not on speed. Those are content decisions, and you can fix them without changing platform." },
      { question: "How do I make GoHighLevel faster?", answer: "Start with HighLevel's own controls: enable Optimize Javascript and Image optimization in funnel settings, use native HighLevel forms instead of third-party embeds, and reuse blocks with Global Sections so headers, footers and CTAs aren't duplicated. Then resize and compress images before you upload them (HighLevel's troubleshooting FAQ, read October 4, 2026, puts above-the-fold images at under 200 KB), check tracking code and custom code elements for third-party scripts, move forms, calendars, review widgets and maps below the fold, remove unused sections, duplicate mobile or desktop blocks and inherited template code, reduce font variants, and defer or replace heavy embeds such as chat and calendars. Retest forms, calendars, attribution and consent after every change, and measure the same route under the same test profile before and after, so you know what moved." },
    ]
  },
  {
    id: "best-website-builder-for-gohighlevel-agencies",
    cardStat: "6 options",
    cardStatLabel: "Compared with October 2026 primary vendor sources",
    title: "Best Website Builder for GoHighLevel Agencies in 2026",
    excerpt: "Compare GHL Native, Simvoly, SiteSwan, Duda, Webflow, and custom Next.js by integration, branding, ownership, current costs, and repeatable performance tests.",
    category: "GoHighLevel",
    readTime: "23 min",
    date: "May 13",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "performance",
    lastModified: "2026-10-08",
    faqs: [
      { question: "What is the best website builder for a GoHighLevel agency?", answer: "Start with the native HighLevel builder, because it is already paid for and it removes an integration boundary. Three conditions overturn that default: the client's pages carry organic search revenue the native implementation demonstrably cannot serve after you have applied HighLevel's own speed guidance; the agency needs branded management surfaces HighLevel does not brand, which is where Duda's White Label plan earns its price; or the site needs bespoke frontend engineering no builder's extension points reach, which is where a custom build starts. If none of those describes your client, the honest recommendation is the one you are already paying for." },
      { question: "What does GoHighLevel actually cost per client site at scale?", answer: "The plan fee is flat but several add-ons are not, and that is what breaks an agency margin model. Read from HighLevel's own pricing page on October 8, 2026: plans are $97 Starter (3 sub-accounts), $297 Unlimited and $497 Agency Pro, with unlimited contacts and users on all three. The Branded Client Portal App is $49/month per sub-account, the AI Employee Growth Plan $50/month per sub-account, the AI Employee Unlimited Plan $97/month per sub-account, and dedicated email IPs $59/month per IP. A thirty-client agency enabling the branded portal for everyone adds $1,470 a month to a $297 plan. Conversation AI, Voice AI, Reviews AI, email and SMS marketing and calling all carry usage-based charges on top; Agency Pro is the plan that lets you rebill those with markup, while Unlimited rebills at cost." },
      { question: "Does GoHighLevel have an AI website builder?", answer: "Not under the names currently circulating. Community summaries and AI answers describe an AI Studio or Vibe Code builder that clones an existing site or generates pages from a text prompt, and neither name appears on HighLevel's own pricing page, read October 8, 2026. What that page lists among core features is Funnel AI and Content AI, alongside Conversation AI, Voice AI and Reviews AI, three of which carry usage-based charges. Check the capability inside your own sub-account before promising site generation to a client, and price the usage line while you are there." },
      { question: "Can you build a website outside GoHighLevel and still capture leads into the GHL CRM?", answer: "Yes, when the selected frontend and HighLevel plan support the scoped integration. Use a supported form, API, inbound webhook, embed, or middleware path, then test authentication, required fields, consent, spam controls, duplicates, workflow triggers, error handling, retries, and notifications before launch." },
      { question: "Does switching website builders break my existing GHL automations or pipelines?", answer: "It can if event names, field mapping, attribution, calendars, triggers, or credentials change. Inventory every current form and workflow, build a mapping, test expected and failure cases in a non-production path, and keep rollback controls. Existing automations are preserved only when the accepted migration scope and tests prove the required behavior." },
      { question: "Is the GoHighLevel native website builder good enough for organic SEO?", answer: "The answer depends on the actual implementation, not the platform label. Inspect initial and rendered HTML, metadata, canonicals, sitemap, redirects, structured data, internal links, status codes, and field Core Web Vitals where available. HighLevel also publishes current page-speed guidance. Optimize and test first; migrate only if agreed requirements remain blocked." },
      { question: "Can I white label a custom coded site to my GoHighLevel clients?", answer: "White-label delivery, disclosure, confidentiality, branding, repository control, support, and client-facing responsibilities must be defined in the accepted partner terms. PandaCodeGen does not promise concealment, unrestricted resale rights, or a particular margin without that agreement." },
      { question: "How fast should a GoHighLevel agency client site actually load?", answer: "Fast enough that speed is not the reason a client leaves, which is a target you set from their own field data rather than from a score. Pull the client's Core Web Vitals in Search Console, fix whatever the LCP line names, and re-measure. HighLevel publishes its own page-speed guidance and it is the cheapest thing to try first." },
      { question: "Can I run a SaaS mode GoHighLevel agency without using the native website builder?", answer: "A separate frontend can be used when the current HighLevel plan, APIs, webhooks, forms, and account model support the intended workflow. Confirm SaaS Mode, rebilling, branding, sub-account, mobile-app, and API requirements against current official terms before packaging the offer." },
      { question: "How much does a custom GoHighLevel website actually cost?", answer: "A custom GoHighLevel-connected frontend starts at our $1,500 tier for a small site, then $3,500 for Growth and from $5,000 for Scale as templates and integrations multiply. Add your HighLevel plan on top, because that does not go away, plus any per-sub-account add-ons you enable. Those are our prices, not a market rate, and the integration work is usually a smaller line than the build." },
      { question: "How reliable is Webflow uptime for agency client sites?", answer: "Review Webflow's official incident history and uptime view for the exact period, components, and production-site impact you care about. Separate editor or publishing incidents from hosted-site availability. Compare that evidence with the client's recovery objectives and the selected alternative's own status history; a custom frontend is not automatically outage-proof." },
    ]
  },
  {
    id: "shopify-app-costs-real-monthly-bill",
    title: "Shopify App Costs in 2026: Audit the Real Bill",
    excerpt: "Reconcile Shopify-billed charges, external subscriptions, usage, workflows, data and performance before you keep, replace or remove an app.",
    category: "Shopify",
    readTime: "20 min",
    date: "Mar 19",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'cost',
    lastModified: "2026-10-20",
    faqs: [
      { question: "How much does Shopify take from a $100 sale?", answer: "It depends far more on whether you use Shopify Payments than on your plan. With Shopify Payments you pay the published card rate for your country and plan and no additional transaction fee. With any other gateway, Shopify charges a third-party payment provider fee on top of whatever that gateway takes: read from Shopify's own pricing page on August 2, 2026, that is 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus, so $2.00, $1.00, $0.60 or $0.20 on a $100 sale before your gateway takes anything. Card rates are quoted per country and shopify.com/pricing geo-redirects, so read the rate on your own market's pricing page or in the Payments section of your admin, not in an article." },
      { question: "How much do Shopify apps cost per month?", answer: "Individual app prices published on August 2, 2026, and rechecked on October 4, 2026, range from free to a few hundred dollars a month per app. Common entry tiers: Gorgias Starter $10, Judge.me Awesome $15, Smile Essential $15, Okendo reviews $19 up to 200 orders, PageFly Builder from $24, Vitals All-in-One $29.99, Loox Convert $49.99, and Recharge Starter $99 plus 1.49% and 19 cents per transaction. Some apps, such as Attentive, don't publish a price at all. There's no reliable universal total, because volume-metered pricing means the bill tracks your list size, order count or message volume. Export your Shopify bills, card statements and vendor invoices, then separate subscription, usage, transaction, one-time, tax and external charges. Public list prices might not match your legacy, annual, promotional or negotiated terms." },
      { question: "How does Shopify app pricing work?", answer: "Each app sets its own plans: a free plan, a flat monthly or yearly fee, usage-based pricing, a flat fee plus usage, a fee plus a share of each transaction, or a one-time purchase. Shopify requires App Store apps to use its billing, so charges normally appear on your Shopify invoice. Each app runs its own 30-day cycle, and Shopify adds what it owes to your next 30-day bill. Upgrading mid-cycle is prorated, downgrading earns an application credit, and an app can have only one active recurring charge. Some vendors also bill outside Shopify, so those charges never reach your Shopify bill. Read from Shopify's help center and developer docs on October 4, 2026." },
      { question: "Does uninstalling a Shopify app cancel the subscription?", answer: "Shopify says uninstalling a Shopify-billed paid app cancels future recurring charges, although a charge for the current billing cycle can still appear. Uninstalling doesn't cancel a subscription billed outside Shopify, so cancel that directly with the provider." },
      { question: "What is the cheapest alternative to a Shopify app?", answer: "The lowest list price doesn't tell you two apps are equivalent. Compare current vendor terms against the same requirements, usage, data, integrations, support, performance and exit criteria, then test the candidate before replacing the production app." },
      { question: "What Shopify apps can I replace with native features?", answer: "That depends on the store's current Shopify plan, requirements and the latest native capabilities. Map the accepted workflow and verify it in a safe store or theme preview before removing the app, because data, automation and storefront behavior can depend on it." },
      { question: "What is Shopify app creep?", answer: "App creep is the gradual accumulation of apps without one reconciled commercial, functional and technical inventory. Audit actual invoices, business owners, usage, dependencies, performance and renewal terms, and ignore generic app-count or spend benchmarks." },
      { question: "When does a custom Shopify storefront make financial sense?", answer: "Compare the measured current total cost with implementation, migration, hosting, monitoring, security, maintenance, support and internal operating cost. Custom code is justified when accepted requirements and lifecycle economics support it, not by one app-bill threshold." },
      { question: "Why is there a charge on my Shopify bill I do not recognise?", answer: "Shopify groups app charges into four types: subscription charges for recurring app use, app usage charges that vary with how much you use the app, one-time app purchases, and application credits issued on downgrades and certain other conditions. A charge you can't place is usually a usage charge from a metered app or a one-time purchase. Charges from apps that bill outside Shopify never appear on the Shopify bill at all, so check card and bank records for those. Your Shopify plan fee is billed separately from every app charge, and it's the line most often mistaken for one, so match it before hunting for a rogue subscription. When a familiar bill changes size without anything being installed, the usual causes are a switch between monthly and annual billing or the end of a trial or introductory discount, not a new app." },
    ]
  },
  {
    id: "webflow-true-cost",
    cardStat: "Cost worksheet",
    cardStatLabel: "Plans, add-ons, vendors and team time",
    title: "Webflow Pricing 2026: Monthly Costs and an Annual Budget",
    excerpt: "Compare billing cycles, Workspace charges and renewal changes, then build an annual budget with a worked example and a free worksheet.",
    category: "Webflow",
    readTime: "9 min",
    date: "Mar 18",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'webflow',
    lastModified: "2026-09-25",
    faqs: [
      { question: "Do I need a paid Workspace as well as a Site plan?", answer: "Not automatically. A free Starter Workspace can suit a solo site owner. A paid Workspace is relevant when its features or collaboration controls are required. Check included access and additional seats before budgeting. Team bundles a site and Workspace, so do not charge its included site twice." },
      { question: "Does Webflow hosting cost extra?", answer: "Hosting is included in the Site plan. Domain registration, business email, enabled extras and third-party tools can add separate charges. Use the plan and renewal shown in your own billing settings." },
      { question: "Why is my Webflow renewal different from the advertised price?", answer: "Your billing cycle, account transition date, usage, seats, add-ons and credits can change the amount due. Compare the next-bill summary with the plan terms for your account. A prorated charge is not necessarily your ongoing monthly rate." },
      { question: "Is Webflow actually free?", answer: "The free Starter plan can publish on a webflow.io address within its limits. Publishing on your own domain needs a paid Site plan. A free Workspace does not replace the Site plan needed for that custom domain." },
      { question: "How do I calculate Webflow cost per year?", answer: "Add twelve months of monthly charges, annual-only bills, one-time work, usage and transaction fees, and applicable tax. Keep internal hours separate, then add them if you want a full ownership-cost total. Do not count an annual bill again as twelve monthly payments." },
      { question: "Does Webflow maintenance include website changes?", answer: "Check the specific agreement. Platform hosting and your agency or internal maintenance work are different costs. Content edits, new pages, integration repairs and redesigns should each have an owner and an agreed scope." },
    ]
  },
  {
    id: "nextjs-hosting-zero-cost",
    title: "Is Vercel Free? 2026 Hobby Limits and Business Pricing",
    excerpt: "Vercel Hobby is free for personal, non-commercial projects only. Compare its included usage limits with Vercel Pro pricing for commercial Next.js hosting in 2026.",
    category: "Performance",
    readTime: "26 min",
    date: "Mar 13",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'hosting',
    lastModified: "2026-10-20",
    faqs: [
      { question: "Is Vercel free?", answer: "Yes. Vercel Hobby costs $0 for personal, non-commercial projects. It isn't the plan for a live business, store, or client website. Commercial Next.js hosting should use Pro or another commercially permitted provider. Vercel currently lists a $20 monthly Pro platform fee that includes one deploying seat and a usage credit; added seats and on-demand usage can increase the bill." },
      { question: "What is the Vercel free tier bandwidth limit in 2026?", answer: `Vercel's Hobby plan page lists ${spec("vercel-hobby-fast-data-transfer").value} of Fast Data Transfer as included usage, plus ${spec("vercel-hobby-fast-origin-transfer").value} of Fast Origin Transfer and ${spec("vercel-hobby-cdn-requests").value} CDN Requests. Exceeding a Hobby limit pauses the feature, in most cases for 30 days, and Hobby can't buy additional usage. The figure answers a capacity question, not a commercial-use question: Hobby remains limited to personal, non-commercial projects. Checked ${asOf("vercel-hobby-fast-data-transfer")}.` },
      { question: "How many sites can I host for free on Vercel?", answer: "Vercel's current Hobby comparison lists up to 200 projects, but a project isn't always the same thing as one complete website and other repository, resource, fair-use, and non-commercial restrictions still apply. Treat the published limit as a current plan parameter, not a capacity or commercial-use guarantee, and recheck it before approval." },
      { question: "Is Vercel free hosting reliable for business websites?", answer: "Hobby isn't the right plan for a business website, because Vercel restricts it to personal, non-commercial use. For a business, evaluate Pro or another commercial provider against workload, regions, spend controls, support, incident response, backups, data services, and any required SLA. A provider's technical reputation doesn't override plan eligibility or project-specific continuity requirements." },
      { question: "What is the catch with free Vercel hosting?", answer: "The main restriction is eligibility, not just traffic. Hobby is for personal, non-commercial work and has limits for Fast Data Transfer, functions, builds, image optimization, and collaboration. A commercial project should compare Vercel Pro's included usage, overages, spend controls, and support against its real workload before choosing a host." },
      { question: "Can I use Vercel's free plan for a business or commercial website?", answer: "No. Vercel's Fair Use Guidelines restrict Hobby teams to non-commercial personal use and require Pro or Enterprise for all commercial usage. Vercel defines commercial usage as any deployment used for the financial gain of anyone involved in any part of the project's production, explicitly including a paid employee or consultant writing the code, so a freelancer or agency build is commercial even if the site sells nothing. Listed examples include processing payment, advertising a product or service, being paid to create or host the site, affiliate linking as the primary purpose, and carrying ads such as Google AdSense. Asking for donations does not count as commercial usage under the current guidelines. Checked October 4, 2026." },
      { question: "Is Vercel free forever?", answer: "There's no forever guarantee. Vercel currently offers Hobby at $0 for personal, non-commercial use, but its terms say the company may change the plan's features, limits, conditions, or availability." },
      // 20 Oct 2026: follow-up questions seen in Search Console ("how do they make money", "can you get this for me").
      { question: "How does Vercel make money if Hobby is free?", answer: `From paid plans, extra seats and usage. As of ${asOf("vercel-pro-price")}, Vercel Pro is a ${spec("vercel-pro-price").value} platform fee per team, extra deploying seats are ${spec("vercel-pro-additional-seat").value}, and teams pay for usage beyond the included credit, either on demand or through Flat Rate CDN capacity tiers, which start at ${spec("vercel-flat-rate-cdn-next-tier").value} above the included tier. Paid add-ons and Enterprise plans, priced on request, add to that. All commercial use needs Pro or Enterprise.` },
      { question: "Can you set up Vercel hosting for my business website?", answer: "Yes. For custom Next.js business websites, we can configure Vercel Pro. On our maintenance or SEO package, hosting on our Vercel account is included if you want it. Otherwise the site runs in a Vercel team in your own name, on your own payment method, and the domain, repository and billing contacts are written down at handover." },
      { question: "How much does WordPress hosting actually cost per year?", answer: "There's no defensible universal total. Add the current hosting invoice, renewal price, traffic and storage overages, CDN, backups, staging, security, email, premium themes or plugins, monitoring, support, maintenance labor, incidents, and tax. Compare that dated annual record with a like-for-like alternative instead of substituting a generic market average." },
      { question: "Can I host an e-commerce site for free on Vercel?", answer: "Not as a live commercial store on Hobby. A headless storefront can run on Vercel, but commercial use belongs on Pro or another commercially permitted plan. The commerce backend, payments, data services, and usage can add separate costs." },
      { question: "What happens if my site gets a traffic spike on free Vercel hosting?", answer: "An eligible Hobby project can reach hard usage limits, and Vercel's terms reserve discretion to disable Hobby deployments. A business that needs continuity should use a commercial plan, configure spend controls, and test the workload instead of relying on a free-tier traffic estimate." },
      { question: "How much storage does Vercel give you for free?", answer: `Vercel Blob is free on the Hobby plan within its usage limits: ${spec("vercel-hobby-blob-included").value}. You can create as many Blob stores as you need. Individual files can reach 5 TB, but anything over 512 MB is never cached, so each access counts as a cache miss. The important caveat is that Hobby's included usage is shared across all Vercel services in a project, so every request for a Blob file counts as a CDN Request against the same monthly allowance as your pages. Exceeding a Blob limit on Hobby removes access for 30 days instead of generating a bill. Checked ${asOf("vercel-hobby-blob-included")}.` },
      { question: "How do I check my Vercel usage before hitting a limit?", answer: `Open the Vercel dashboard, select the correct team in the team switcher, then choose Usage in the sidebar. Set the billing-cycle dropdown to Last 30 days, not the current cycle, because a partial month hides the pattern. The allotment indicator shows how much of each included resource has been consumed and the projected cost, and the same view breaks down by project and by region. On Pro, Vercel notifies you automatically when usage reaches 75% of the monthly credit. Spend Management, which can notify you, fire a webhook or pause production deployments at a set amount, is a Pro feature. Vercel turns on spend notifications at ${spec("vercel-pro-spend-notification-default").value} by default for new customers, but pausing production is a separate setting.` },
      { question: "Why is Vercel controversial?", answer: `Four documented reasons, all from Vercel's own terms and pricing. First, usage-based billing: once a Pro team uses its $20 monthly credit, Vercel bills further usage on demand. New Pro teams have had Flat Rate CDN on by default since ${spec("vercel-flat-rate-cdn-ga-date").value}, so a one-day traffic spike no longer changes the CDN part of the bill, but functions and other compute are still billed per use, and default spend notifications at ${spec("vercel-pro-spend-notification-default").value} don't pause anything on their own. Second, the Hobby licence is a commercial-use rule, not a traffic rule, so being paid to build a site already makes the deployment commercial. Third, Vercel's terms, last updated June 1, 2026, state that content on Hobby and trial Pro plans may be used for model training, with an opt-out in team settings; paid Pro doesn't enable it by default. Fourth, lock-in, which has improved since the Adapters API became stable in Next.js 16.2 and gave other platforms a public contract for consuming Next.js build output.` },
      { question: "Which is better, Vercel or Netlify?", answer: "It depends mostly on team size and framework. Netlify Pro is $20 per month with unlimited members, while Vercel Pro is $20 per month for the first deploying seat plus $20 for each additional one, so a five-developer team pays roughly $20 against $100. Vercel's advantage is first-party Next.js integration, because Vercel maintains Next.js. Netlify Pro includes 3,000 monthly credits with extra credits sold in packs from $10 per 1,500, so compare how your deploys, bandwidth, compute and web requests use up credits instead of comparing headline prices. Checked August 2, 2026." }
    ]
  },
  {
    id: "how-to-migrate-wordpress-to-nextjs",
    cardStat: "22 days",
    cardStatLabel: "Owner-confirmed MyCustomPatches delivery example",
    title: "WordPress to Next.js Migration: Protecting SEO (2026)",
    excerpt: "A WordPress to Next.js migration guide covering content export, URL inventory, 301 redirect mapping, SEO preservation, staged QA, Google Search Console monitoring, and a controlled cutover.",
    category: "WordPress",
    readTime: "17 min",
    date: "Mar 11",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'performance',
    lastModified: "2026-10-09",
    faqs: [
      { question: "How long does it take to migrate WordPress to Next.js?", answer: "Weeks, and the schedule is set by how many distinct templates your theme actually renders rather than by post count. Content moves in bulk through the REST API or an export; templates are rebuilt one at a time. Plugin-provided functionality is the wildcard, because each one has to be replaced or deliberately dropped." },
      { question: "Will I lose my Google rankings when migrating from WordPress to Next.js?", answer: "WordPress permalinks can usually be reproduced exactly in Next.js, so this migration can be near-neutral on addresses if you decide to keep them. Most losses come from the rendering change instead: check that every template ships its content in the initial HTML rather than assembling it client-side, and compare a representative page's rendered output on both sides." },
      { question: "Do I need to rebuild my content when migrating to Next.js?", answer: "Not necessarily. Existing WordPress content can often be exported and transformed into a headless CMS, structured data source, or static content files without rewriting the message. The work is in preserving fields, relationships, media, URLs, metadata, and editorial workflows, then validating the migrated output against the source inventory." },
      { question: "What happens to my WordPress plugins after migration?", answer: "Plugins do not move automatically to Next.js. Inventory each plugin's real business function, data, workflow, user role and integration, then replace, rebuild, retire or keep it behind a supported service. Test content, forms, search, commerce, analytics, consent and operations before cutover." },
      { question: "How much does it cost to hire someone to migrate WordPress to Next.js?", answer: "Our tiers start at $1,500, $3,500 and $5,000, and the deciding factor is template count rather than post count. Three hundred posts sharing one template is a small job. Fifteen distinct page layouts plus WooCommerce is not. Count your theme's actual templates before asking anyone for a number, and you will get a better quote." },
    ]
  },
  {
    id: "wordpress-vs-nextjs",
    cardStat: "2 models",
    cardStatLabel: "Integrated CMS versus assembled application stack",
    title: "WordPress vs Next.js in 2026: Requirements, Cost and Migration",
    excerpt: "WordPress or Next.js? Compared on architecture, editing, speed, SEO, security, integrations, total cost, ownership and migration risk.",
    category: "WordPress",
    readTime: "15 min",
    date: "Mar 15",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'performance',
    lastModified: "2026-10-09",
    faqs: [
      { question: "Is WordPress or Next.js better for SEO?", answer: "Neither framework guarantees better SEO. Both can produce crawlable, indexable, fast pages or serious technical defects. Compare content workflow, rendered output, URL control, canonicals, structured data, internal links, performance, security, maintenance, and team capability for the actual requirements." },
      { question: "How much faster is Next.js than WordPress?", answer: "There is no universal difference. Compare representative routes with the same content, features and third parties using field data where available and repeated lab tests under recorded conditions. WordPress and Next.js performance both depend on implementation, infrastructure and operations." },
      { question: "Can I migrate from WordPress to Next.js without losing SEO?", answer: "Nothing about Next.js is inherently better or worse for rankings, and nothing about WordPress is either. What changes is that you now decide what renders into HTML rather than a theme deciding for you, which is an advantage only if you use it. Keep the permalink structure, map anything you deliberately change, and verify the rendered output per template." },
      { question: "Is Next.js harder to use than WordPress?", answer: "For developers and operators, a Next.js stack has more assembly and deployment decisions. For editors, usability depends on the chosen CMS and preview, approval, scheduling and rollback integration. Test real staff workflows instead of assuming either platform is easier." },
      { question: "How much does it cost to migrate WordPress to Next.js?", answer: "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with complex work scoped separately. Final price depends on URLs, templates, content, data, plugins, integrations, design, quality acceptance, cutover and support." },
    ]
  },
  {
    id: "how-website-speed-affects-seo",
    cardStat: "3 metrics",
    cardStatLabel: "LCP, INP and CLS in broader page experience",
    title: "How Website Speed Affects SEO: Evidence and Limits in 2026",
    excerpt: "How Core Web Vitals fit within page experience, how to separate field and lab evidence, and why performance does not map to a fixed ranking or revenue outcome.",
    category: "SEO",
    readTime: "10 min",
    date: "Mar 9",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'ranking',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Does website speed affect SEO rankings?", answer: "Google uses Core Web Vitals in its broader ranking systems, but says good scores do not guarantee top rankings and relevance remains fundamental. Performance is one part of page experience, not a fixed ranking formula." },
      { question: "What PageSpeed score do I need for good Google rankings?", answer: "Google publishes no Lighthouse score that guarantees ranking. Lighthouse is a lab diagnostic. Use URL-level field Core Web Vitals where available, fix real experience problems and evaluate content, links, indexing and other search factors separately." },
      { question: "How much does a slow website hurt SEO?", answer: "There is no universal position, traffic or revenue loss. Measure affected pages and queries in Search Console, verify indexing and rendered output, compare field performance and releases, and report other plausible causes." },
      { question: "What is the most important speed metric for SEO?", answer: "Google defines LCP, INP and CLS as Core Web Vitals covering loading, responsiveness and visual stability. No public guidance assigns one universal ranking weight. Diagnose the metric and route that fail the actual user distribution." },
      { question: "How long does it take for speed improvements to affect SEO rankings?", answer: "There is no guaranteed ranking response or timeline. Lab changes appear immediately in a new test, while field data uses a rolling collection period and may not exist for every URL. Monitor Search Console and field data while accounting for content, links, demand, updates and other releases." },
    ]
  },
  {
    id: "shopify-dawn-theme-slow",
    cardStat: "Field + lab",
    cardStatLabel: "No universal Dawn score ceiling",
    title: "Shopify Dawn Theme Slow? Diagnose the Store, Not the Name",
    excerpt: "Use Shopify field reports and controlled previews to isolate media, apps, third parties, customization and theme code before choosing a rebuild.",
    category: "Shopify",
    readTime: "17 min",
    date: "Mar 7",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'conversion',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Why is my Shopify Dawn theme slow?", answer: "Dawn is a performance-oriented reference theme, but production results also depend on media, apps, tags, third-party code, custom sections, content and user conditions. Use Shopify's real-user reports and controlled route tests to identify the actual contributor." },
      { question: "What PageSpeed score does Shopify Dawn get?", answer: "Dawn has no universal PageSpeed score or fixed ceiling. Test representative home, collection, product and cart states under a recorded mobile and desktop profile, repeat the runs and use field Core Web Vitals where enough traffic exists." },
      { question: "How can I speed up my Shopify Dawn theme?", answer: "Prioritize affected routes, correct media loading, remove or defer noncritical JavaScript, review app embeds and tags, inspect layout-level theme code and validate each change against functional, analytics, accessibility and field-performance guardrails." },
      { question: "Is Dawn always faster than other Shopify themes?", answer: "Shopify built Dawn with performance in mind, but the final result depends on each theme version, configuration, content, apps and custom code. Compare candidates with the same representative data and test profile instead of assigning a permanent rank to a theme name." },
      { question: "Should I switch from Dawn to a headless storefront?", answer: "Choose headless when accepted experience, channel or integration requirements justify a separate frontend and its lifecycle cost. A slow route alone is a reason to diagnose the current store, not proof that headless is required." },
    ]
  },
  {
    id: "for-agencies-offer-custom-web-development",
    cardStat: "4 services",
    cardStatLabel: "Referral, co-delivery or documented white-label delivery",
    title: "How to Structure a White-Label Web Development Partnership (2026)",
    excerpt: "How agencies can scope, price, disclose, govern and hand off a custom web project through a delivery partner.",
    category: "Agency",
    readTime: "14 min",
    date: "Mar 6",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'saas',
    lastModified: "2026-10-09",
    faqs: [
      { question: "What is white-label web development?", answer: "It is a delivery arrangement in which an agency leads the client relationship while another team performs defined development work. Branding, disclosure, access, confidentiality, ownership and support must be written into the partner and client terms." },
      { question: "What margin can an agency make?", answer: "There is no promised margin. Use the partner's project-specific quote, then price your sales, strategy, creative, management, revisions, risk, tax, payment fees and support. The agency controls its retail price and remains responsible for its own economics." },
      { question: "Will the client know a delivery partner is involved?", answer: "That depends on the accepted agreements, procurement requirements, access needed and applicable duties. PandaCodeGen does not promise concealment. Choose and document a referral, co-delivery or white-label model before sale." },
      { question: "Who owns the finished website?", answer: "Client content, data and brand assets remain the client's. Rights in fully paid custom deliverables, reusable PandaCodeGen tools or pre-existing code, and third-party components are defined in the accepted terms. Third-party licenses continue to apply." },
      { question: "What happens when the client requests changes?", answer: "The responsibility matrix and change-control process decide who receives, scopes, approves, prices and delivers the request. Minor accepted fixes may fall within support; new features or expanded scope require written approval and agreed pricing." },
      { question: "Does a partnership reserve development capacity?", answer: "No general promise should be assumed. PandaCodeGen confirms scope, dependencies, current capacity and schedule for each accepted project." },
    ]
  },
  {
    id: "why-we-chose-nextjs-over-wordpress-2026",
    cardStat: "2 paths",
    cardStatLabel: "Choose WordPress or Next.js from requirements",
    title: "Why We Choose Next.js for Some WordPress Migrations in 2026",
    excerpt: "Why PandaCodeGen uses Next.js for selected migrations, where WordPress remains a sensible fit, and how performance, editing, security, ownership and SEO are accepted without universal claims.",
    category: "WordPress",
    readTime: "9 min",
    date: "Mar 4",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'code',
    lastModified: "2026-10-29",
    faqs: [
      { question: "Why does PandaCodeGen choose Next.js for some migrations?", answer: "It can provide deliberate rendering, routing, data and deployment control when those capabilities match the brief. The decision follows measurable requirements and operating ownership. It is not based on a claim that every Next.js site is fast or every WordPress site is slow." },
      { question: "When is WordPress the better choice?", answer: "WordPress can be the better fit when its editing workflow, ecosystem and maintained extensions serve the required capabilities and the team can operate updates, security and performance. Repairing a suitable implementation may be lower risk than migrating." },
      { question: "Can non-developers edit a Next.js website?", answer: "Yes when the build includes an appropriate CMS and tested preview, publishing and rollback workflows. The client can edit the scoped content fields, while structural changes and new integrations may require engineering." },
      { question: "Does switching from WordPress to Next.js hurt SEO rankings?", answer: "We kept our permalink structure through the move, which is the single biggest thing you can do to make this boring. Where addresses did change we mapped each one to its closest equivalent. What we watched afterwards was the shape of the curve in Search Console by page rather than the sitewide total, because a brief dip and a slow decline look identical for the first fortnight." },
      { question: "How long does it take to migrate from WordPress to Next.js?", answer: "Ours took weeks, not months, and the slow part was not the code. It was deciding what to keep. Rebuilding is an opportunity to drop pages that were never earning anything, and that is an editorial decision with opinions attached, so it takes longer than the engineering. Budget for the argument, not just the build." },
    ]
  },
  {
    id: "wordpress-vs-custom-code-real-cost-3-years",
    cardStat: "3 years",
    cardStatLabel: "Editable inputs and like-for-like scope",
    title: "WordPress vs Custom Code: A 3-Year Cost Model for 2026",
    excerpt: "Compare WordPress and custom code with editable inputs for build, migration, providers, software, labor, maintenance, incidents, roadmap and exit.",
    category: "Pricing",
    readTime: "11 min",
    date: "Feb 20",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'cost',
    lastModified: "2026-10-08",
    faqs: [
      { question: "What is the total cost of WordPress over three years?", answer: "Calculate it from actual hosting, software, support and incident invoices plus internal operating labor, planned roadmap work and any exit work inside the period. There is no representative total for every WordPress business site." },
      { question: "Is a custom website cheaper than WordPress long term?", answer: "Sometimes, but not automatically. Compare the same capabilities, demand, service level and period. Include custom build and migration, providers, dependencies, releases, support, internal labor and exit. Publish payback only when the inputs are visible and verified." },
      { question: "What WordPress costs should the model include?", answer: "Include hosting, CDN, backup, themes, plugins, external services, update and QA labor, content operations, support, security, recovery, roadmap changes and exit. Use current invoices, contracts and recorded work rather than public averages." },
      { question: "Does WordPress cost more than Wix or Squarespace?", answer: "There is no universal ordering. Compare current plans, add-ons, software, services, internal work, required features, change cost, portability and support under the same three-year assumptions." },
      { question: "How should security incidents be modeled?", answer: "Use the organization's incident history or an approved risk method for each architecture. Include response labor, external invoices, downtime, recovery, support and legal or notification work where relevant. Custom code also has dependencies, data, providers and an attack surface." },
      { question: "Is WordPress still worth it in 2026?", answer: "Yes when its editorial workflow and maintained capabilities fit, measured quality is acceptable or repairable, and the team can own updates, security and operations. Migration is worth pricing when verified constraints and a complete target plan justify its added cost and risk." },
      { question: "What is the best alternative to WordPress?", answer: "There is no universal best alternative. Compare optimizing in place, a WordPress rebuild, headless WordPress and a different custom or managed platform against the same content, features, data, quality, ownership and operating requirements." },
    ]
  },
  {
    id: "google-universal-commerce-protocol-what-it-means-for-your-store",
    cardStat: "Waitlist",
    cardStatLabel: "Google access and merchant approval are not universal",
    title: "Google Universal Commerce Protocol: Store Readiness in 2026",
    excerpt: "What UCP is, what Google currently documents for direct buying, what remains access-dependent and how merchants can prepare.",
    category: "E-Commerce",
    readTime: "12 min",
    date: "Feb 21",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'aicommerce',
    lastModified: "2026-10-29",
    faqs: [
      {
        question: "What is Google's Universal Commerce Protocol (UCP)?",
        answer: "UCP is an open commerce standard for declaring and exchanging capabilities among platforms, merchants, payment service providers and credential providers. Google documents UCP for agentic actions in AI Mode and Gemini, but each platform controls its own access and implementation."
      },
      {
        question: "Can customers really buy from my store without visiting my website?",
        answer: "Google's UCP guide describes direct buying in Google surfaces and native or embedded checkout paths. Availability depends on merchant access, approval, product, country, surface, payment provider and current requirements, so it is not accurate to promise this for every store or shopper."
      },
      {
        question: "Which e-commerce platforms are ready for Google UCP?",
        answer: "Do not use a universal platform ranking. Check each vendor's current official statement, the merchant's edition and country, Google access, Merchant Center eligibility, payment-provider support and unsupported checkout states. Custom implementation adds control and also adds conformance, security and maintenance work."
      },
      {
        question: "Will I lose sales if customers buy without visiting my website?",
        answer: "There is no universal sales, conversion, abandonment or traffic outcome. Reconcile eligible impressions, checkouts, orders, cancellations, returns, refunds, fees and contribution margin under a defined period and cohort. The website remains relevant for direct journeys, brand, content, policies, support and fallback."
      },
      {
        question: "When should I start preparing for Google UCP?",
        answer: "Start with low-regret readiness: accurate catalog and Merchant Center data, current policies, stable order IDs, payment and refund reconciliation, secure integrations and clear ownership. Join or evaluate Google's current access path before funding speculative implementation. No adoption date or recommendation advantage is guaranteed."
      },
      {
        question: "What is a Headless CMS and why does it matter for Google UCP?",
        answer: "A headless CMS separates content management from presentation, but UCP readiness depends on commerce capabilities, Merchant Center, checkout, payments, orders, policies and security. A CMS or framework does not guarantee Google access, discovery, eligibility or recommendation."
      },
      {
        question: "How is Google UCP different from Google Shopping?",
        answer: "Merchant Center remains central to Google's documented UCP model, while UCP adds standardized agentic commerce and checkout capabilities. Exact presentation and transaction paths depend on the current Google surface, merchant eligibility and integration; do not assume every listing or ad becomes a UCP checkout."
      },
      {
        question: "What happens to my website traffic when customers buy through Google AI?",
        answer: "Measure orders and sessions separately; neither an order increase nor a traffic decrease is guaranteed. If a purchase completes inside Google's surface, the session may never reach your analytics while the order still arrives. That is why store owners misread this as a traffic collapse. Reconcile order counts against sessions before concluding anything about demand."
      },
      {
        question: "How much does it cost to make my store UCP-ready?",
        answer: "Cost depends on existing catalog and Merchant Center quality, access, platform and payment-provider support, checkout and order gaps, security review, conformance, monitoring and ongoing protocol maintenance. Scope the verified gap first; a full website migration is not automatically required."
      }
    ]
  },
  {
    id: "wordpress-plugin-security-2026",
    cardStat: "7",
    cardStatLabel: "plugin editions under one slug, six patched with no advisory",
    title: "WordPress Plugin Security in 2026: Checks, Patching & Recovery",
    excerpt: "Compare WordPress plugin and Next.js security incidents: affected-version checks, timely updates, account protection and recovery planning for website owners.",
    category: "WordPress",
    readTime: "11 min",
    date: "Aug 27",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'security',
    lastModified: "2026-10-29",
    faqs: [
      { question: "What is CVE-2026-32475 in Elementor Pro?", answer: "An unauthenticated arbitrary file upload in Elementor Pro, scored 9.0 on its CVE record and 9.8 by Wordfence, affecting versions up to and including 4.2.1 and fixed in 4.2.2. A site is reachable only if it has a published Form widget with at least one File Upload field not marked as required, which is the default. The submission is sent as an array where the first element is empty and the second carries a PHP payload, which bypasses validation; the file lands in /wp-content/uploads/elementor/forms/ under a random name with the attacker-supplied .php extension and can then be requested directly. Patchstack and Wordfence published it on 19 August 2026, the day Elementor released 4.2.2, and exploitation began the same day. By 2 September Wordfence had blocked more than 190,000 attempts, most of them between 19 and 23 August. Wordfence puts Elementor Pro at more than six million installations. Checked 8 October 2026." },
      { question: "What is CVE-2026-14894 in Super Forms?", answer: "An unauthenticated arbitrary file upload in the Super Forms drag and drop form builder, scored CVSS 9.8, affecting versions up to and including 6.3.313 and fixed in 6.3.314. A public AJAX endpoint performed neither file-type validation nor a capability check, so an unauthenticated attacker could write an executable PHP file and reach remote code execution. Super Forms 6.3.314 shipped on 8 July 2026 and Wordfence published the advisory on 9 July. Attacks began on 14 July and were heaviest between 18 and 25 August, peaking above 40,000 requests in a single day, with more than 250,000 attempts blocked. Checked 8 October 2026." },
      { question: "If my plugin is patched, why did my site still get attacked?", answer: "Because a published fix and an installed fix are different things, and the attacks in July and August 2026 ran against sites where the patch was already available for download. Elementor released 4.2.2 on the same day exploitation of CVE-2026-32475 started, and Super Forms had been patched for about six weeks before the CVE-2026-14894 campaign hit its heaviest week, from 18 August. Neither vendor withheld information. What decided the outcome was whether the site owner applied the update, and how quickly. Audit for unexpected PHP files under your uploads directory and for administrator accounts you do not recognise, because a clean scan today does not describe last month." },
      { question: "Is WordPress less secure than a custom-coded site?", answer: "Not in the way the question implies. In the second half of August 2026, attempts to exploit a critical authentication bypass in a WordPress SSO plugin were reported, and a critical unauthenticated remote code execution was disclosed and patched in Next.js, within ten days of each other. What differed was the response path: whether the advisory named the affected versions, whether vulnerability databases could see them, whether a scanner would flag your install, and how many steps the fix took. Those four things are measurable. Platform choice on its own is not a security outcome." },
      { question: "What is CVE-2026-15981?", answer: "An authentication bypass in miniOrange's SAML Single Sign On plugin for WordPress, scored CVSS 9.8. The plugin's mo_saml_validate_signature() function ran a loose boolean check on the value returned by PHP's openssl_verify(). That function is tri-state: 1 for a valid signature, 0 for invalid, and -1 when OpenSSL itself errors. In PHP, -1 is truthy. An attacker who sent a deliberately malformed signature triggered the error path, and the plugin treated the error as a successful verification, logging them in as any existing user including an administrator. Fixed in free-edition 5.4.5, but a separate flaw, CVE-2026-19842, stayed open until 5.4.7, so run 5.4.7 or later. Checked 8 October 2026." },
      { question: "Why did vulnerability scanners report vulnerable WordPress sites as safe?", answer: "Because seven independently versioned product editions ship under one plugin slug, and the public advisories covered only the free one. Patchstack reported on 21 August 2026 that the six paid editions were patched with no public changelog entry and no advisory, so no vulnerability database listed them and affected sites were reported as unaffected. That changed on 18 August 2026, when miniOrange supplied the full edition and version matrix and Patchstack updated its database. Until then, the scanner, the dashboard and the database were all blind at once." },
      { question: "How long was a working exploit public before the attacks were noticed?", answer: "About three weeks. A proof-of-concept with a Docker lab for the algorithm-confusion variant was public on GitHub from 27 July 2026, and a write-up dated 29 July reached the Full Disclosure mailing list in early August. DigitalOcean detected an attempted WordPress admin session on 16 August 2026 and shared a working reproduction on 17 August. Patchstack characterised the traffic as opportunistic scanning rather than a targeted campaign." },
      { question: "How fast should a critical vulnerability be patched?", answer: "Fast enough that the window between a public exploit and your fix is short, which means the practical questions are how you find out and how many steps the fix takes. On a maintained dependency the path is: an advisory names the patched version, an automated audit surfaces it, one command applies it, and a build confirms nothing broke. Where an advisory does not name your edition, no database lists it and your dashboard shows no update, that path does not exist and the clock keeps running. Ask any provider to describe their actual sequence rather than promising a response time." },
      { question: "What should I do if I run the miniOrange SAML plugin?", answer: "Check which edition you run, not just the version number, because the seven editions use separate version series and a Standard 16.x install will not be offered a jump to the patched 17.x line through the normal dashboard update. The free edition needs 5.4.7 or later, because a third flaw, CVE-2026-19842, stayed open after 5.4.5. Compare your edition against the matrix miniOrange supplied to Patchstack on 18 August 2026, upgrade by manual upload if the dashboard offers nothing, then audit for unexpected administrator accounts and recent logins, because exploitation was already underway before the advisories covered the paid editions." }
    ]
  },
  {
    id: "wordpress-ai-security-risk-2026",
    cardStat: "Dated",
    cardStatLabel: "Version, configuration and advisory conditions matter",
    title: "WordPress AI Plugin Security in 2026: AI Engine Advisory Guide",
    excerpt: "A dated, evidence-led guide to AI Engine and WordPress MCP advisories, affected configurations, patching, token rotation, permissions, privacy, logging and incident response.",
    category: "WordPress",
    readTime: "12 min",
    date: "Jun 23",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'security',
    lastModified: "2026-10-29",
    faqs: [
      {
        question: "What are WordPress Abilities and the MCP Adapter?",
        answer: "The Abilities API lets WordPress functionality be registered in a standardized form. The official MCP Adapter can expose selected abilities as tools to AI clients. Each exposed action still needs appropriate authentication, authorization, validation, logging and a business need."
      },
      {
        question: "Is WordPress AI safe to use?",
        answer: "Safety depends on the installed versions, enabled capabilities, authentication, permissions, data flows and operations. Keep a current inventory, patch supported software, disable unused endpoints, use least privilege, protect and rotate secrets, monitor actions and maintain tested incident and recovery plans."
      },
      {
        question: "What was the WordPress AI Engine plugin vulnerability?",
        answer: "CVE-2025-11749 affected AI Engine 3.1.3 and earlier when No-Auth URL was enabled, a setting Wordfence reported was disabled by default. The public REST index could expose a bearer token. Wordfence named 3.1.4 as patched and advised rotating a token that may already have been exposed."
      },
      {
        question: "Did the AI Engine advisory mean 100,000 sites were hacked?",
        answer: "No. WordPress.org's 100,000-plus figure was the plugin's active-installation band when Wordfence reported the flaw, not a count of exposed or compromised sites. The listing showed 90,000-plus on 8 October 2026. Applicability depends on version and configuration, while compromise requires site-specific evidence."
      },
      {
        question: "Should I use WordPress for sites that handle sensitive data?",
        answer: "The decision depends on required capabilities, data classification, regulatory duties and the team's ability to maintain the full stack. WordPress and custom systems both require dependency, access, secret, logging, backup and incident controls. Do not assume either architecture is automatically secure."
      }
    ]
  },
  {
    id: "shopify-headless",
    cardStat: "$0",
    cardStatLabel: "Extra for Oxygen hosting on any paid Shopify plan",
    title: "Headless Shopify Cost in 2026: Plans, Hosting and Build",
    excerpt: "What headless Shopify costs in 2026, line by line: your plan, Hydrogen and Oxygen at no extra charge, the build, apps and the upkeep most quotes leave out.",
    category: "Shopify",
    readTime: "17 min",
    date: "Feb 15",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-10-03",
    faqs: [
      // Cost FAQs added 3 Oct 2026; every vendor figure comes from spec-facts.json.
      { question: "How much does headless Shopify cost?", answer: `Your Shopify plan, the storefront build and the upkeep. As of ${asOf("shopify-plan-basic")}, Shopify's US plans are Basic ${spec("shopify-plan-basic").value}, Grow ${spec("shopify-plan-grow").value}, Advanced ${spec("shopify-plan-advanced").value} and Plus from ${spec("shopify-plan-plus").value}, with lower monthly rates when billed yearly. Hydrogen, Oxygen hosting and the Headless channel add nothing to that bill. The build depends on scope: PandaCodeGen's starts at its $5,000 Scale tier, and larger stores are quoted after a scoping call. After launch, budget at least one API upgrade a year.` },
      { question: "Do you need Shopify Plus to go headless?", answer: `No. Shopify offers Oxygen hosting at no extra charge on Starter, Basic, Grow, Advanced, Plus, and Pause and build, and the Headless channel is ${spec("shopify-headless-channel-price").value}. Plus, from ${spec("shopify-plan-plus").value}, is a decision about sales volume and features, not a condition of going headless.` },
      { question: "Is Shopify Oxygen hosting free?", answer: `On paid plans, yes. As of ${asOf("shopify-oxygen-hosting")}, Shopify's developer documentation says Oxygen is available at no extra charge on Starter, Basic, Grow, Advanced, Plus, and Pause and build, and not on Agentic plans. Development stores and trial plans can build and test, but without public environments. Hydrogen itself is ${spec("shopify-hydrogen-license").value}.` },
      { question: "How often does a headless Shopify store need upgrades?", answer: `Shopify releases ${spec("shopify-api-version-support").value}, so a headless storefront needs at least one API upgrade a year, on top of framework and security updates. Put that in the maintenance budget before launch.` },
      { question: "What is headless Shopify?", answer: "Headless Shopify uses Shopify as the commerce back end while a separate storefront controls rendering and customer experience through supported APIs. The team also assumes more responsibility for frontend delivery, integrations, analytics, SEO, security and maintenance." },
      { question: "How much faster is headless Shopify than a theme?", answer: "There is no universal speed difference. A headless build can support strong performance, but outcomes depend on rendering, caching, media, JavaScript, third parties, data access and implementation quality. Compare representative routes using the same recorded conditions." },
      { question: "Is headless Shopify worth the investment?", answer: "It can be when accepted experience, integration or channel requirements justify the extra build and operating responsibility. Compare full lifecycle cost, internal capability and downside risk with a tested theme-based option; there is no universal revenue or payback threshold." },
      { question: "Can I still use Shopify apps with headless?", answer: "Compatibility is app-specific. Inventory or operational apps might continue to work through Shopify, while storefront widgets can require an API, headless component or replacement. Test every required workflow, data flow, checkout dependency and analytics event before migration." }
    ]
  },
  {
    id: "elementor-kills-seo",
    cardStat: "3 layers",
    cardStatLabel: "Search output, user data, and implementation",
    title: "Does Elementor Hurt SEO? A 2026 Evidence Guide",
    excerpt: "Test rendering, Core Web Vitals, DOM, assets, plugins, content, and Search Console evidence before optimizing or migrating.",
    category: "Performance",
    readTime: "10 min",
    date: "Mar 10",
    author: "Hassan",
    role: "Lead Engineer",
    featured: true,
    illustrationType: 'code',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Is Elementor Pro safe to use after the August 2026 file upload flaw?", answer: "Yes, on version 4.2.2 or later. CVE-2026-32475 was an unauthenticated arbitrary file upload in Elementor Pro up to and including 4.2.1. Patchstack, which issued the CVE, rates it 9.0 out of 10 and Wordfence rates it 9.8. It was made public and fixed in 4.2.2 on 19 August 2026. A site was only reachable if it had a published Form widget with at least one File Upload field not set to required, which is the default. Exploitation began the same day, and by 2 September 2026 Wordfence had blocked more than 190,000 attempts, so what decided the outcome was whether the update had been applied. This is a security question, separate from the SEO question this article answers. Checked 8 October 2026." },
      { question: "Does Elementor hurt SEO?", answer: "Elementor does not carry one Google penalty or ranking outcome. Audit crawlability, initial and rendered content, indexing controls, metadata, canonicals, internal links, structured data, content quality, and field Core Web Vitals. Then compare Search Console around releases while accounting for other changes." },
      { question: "Does Elementor slow down WordPress?", answer: "Elementor contributes markup and assets, but site performance also depends on theme structure, plugins, media, fonts, third parties, hosting, cache, consent, page state, and visitor conditions. Measure representative routes and identify the actual contributor instead of using a universal platform score." },
      { question: "Which Elementor performance features should I check?", answer: "Elementor's June 2026 help page lists stable features for optimized image loading, optimized Gutenberg loading, and lazy-loaded background images, plus experimental features such as optimized control loading and element caching. Recheck current status, test on staging, and verify templates and interactions before production." },
      { question: "Can I get good Core Web Vitals with Elementor?", answer: "Possibly. The result depends on the actual implementation and visitor population. Use URL-level field data where available and repeated lab tests under a recorded profile. No theme or framework has one universal score, and a passing result does not guarantee rankings, traffic, conversions, or revenue." },
      { question: "What is the best alternative to Elementor?", answer: "The answer depends on editor workflow, required plugins, integrations, performance evidence, security, ownership, cost, and maintenance. Options include optimizing Elementor, rebuilding with a lighter WordPress approach, using another managed platform, or migrating to a custom frontend. Compare them against a written requirements and acceptance matrix." }
    ]
  },
  {
    id: "wordpress-plugins-destroy-speed",
    cardStat: "5 layers",
    cardStatLabel: "Frontend, server, database, jobs and third parties",
    title: "Do WordPress Plugins Slow Your Site? A 2026 Audit Guide",
    excerpt: "Audit plugins by measured frontend, server, database, background and third-party impact. Fix the responsible work instead of treating plugin count as a speed score.",
    category: "Performance",
    readTime: "12 min",
    date: "Feb 5",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'plugins',
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Why is my WordPress site so slow?",
        answer: "Possible causes include hosting, caching, theme work, plugins, media, database queries, background jobs and third parties. Measure representative public, authenticated and staff journeys with field, lab, server and database evidence before assigning the cause."
      },
      {
        question: "How many plugins are too many for WordPress?",
        answer: "There is no universal number. A small administrative plugin may add no visitor-facing work, while one builder or commerce extension can affect most requests. Audit capability, data, dependencies, route reach, lifecycle and measured impact."
      },
      {
        question: "Can I speed up WordPress without removing plugins?",
        answer: "Often. Update supported software, disable unused modules, load assets only where needed, optimize queries and remote calls, configure caching and schedule background work. Use controlled isolation tests and verify functional acceptance after changes."
      },
      {
        question: "How much revenue am I losing from slow WordPress speed?",
        answer: "Estimate impact from the site's dated field performance, funnel, errors, margins and affected cohorts. Control for other changes where possible. A universal loss per second or public conversion benchmark does not prove this site's revenue loss."
      }
    ]
  },
  {
    id: "shopify-plus-still-slow",
    cardStat: "Route-level",
    cardStatLabel: "Enterprise performance diagnostic",
    title: "Shopify Plus Speed Problems: An Enterprise Diagnostic",
    excerpt: "Measure Shopify Plus by route, device, release, apps, media, third parties and theme code before choosing optimization, re-theme work or headless.",
    category: "Shopify",
    readTime: "10 min",
    date: "Feb 6",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'cost',
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Why is my Shopify Plus store still slow?",
        answer: "A Plus plan does not identify the route-level cause. Use Shopify's real-user LCP, INP and CLS reports, controlled lab traces and release history to inspect media, theme code, apps, analytics and other third parties before choosing a remedy."
      },
      {
        question: "Is Shopify Plus worth its current price?",
        answer: "Use Shopify's localized current price, your signed commercial terms and the business value of the required B2B, checkout, headless, retail, international and operational capabilities. Performance must be evaluated separately; there is no universal ROI threshold."
      },
      {
        question: "How can I make my Shopify store faster?",
        answer: "Prioritize affected routes and real-user segments, then correct the measured media, JavaScript, app, tag or theme bottleneck. Validate repeated lab tests, real-user Core Web Vitals, checkout behavior, accessibility, analytics and errors."
      },
      {
        question: "What is headless Shopify?",
        answer: "Headless Shopify separates the customer-facing storefront from Shopify's commerce back end. Shopify supports Hydrogen and Storefront API clients, but the implementation team owns more frontend delivery, integration, analytics, SEO, security and maintenance work."
      }
    ]
  },
  {
    id: "wordpress-traffic-drop-speed",
    cardStat: "4 paths",
    cardStatLabel: "Measurement, technical, demand and search",
    title: "WordPress Traffic Drop in 2026: Speed, SEO, Tracking or Demand?",
    excerpt: "Diagnose a WordPress traffic drop across tracking, technical changes, search demand, Google updates, content, competitors and page experience.",
    category: "WordPress",
    readTime: "8 min",
    date: "Jan 28",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'traffic',
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Why is my website traffic decreasing?",
        answer: "Possible causes include tracking, crawl or indexing defects, a release, changing demand, competition, content quality, Google systems or page experience. Define the affected metric, dates, pages, queries, devices and channels, then test each hypothesis with Search Console, analytics, server and release evidence."
      },
      {
        question: "Does website speed affect SEO?",
        answer: "Google says Core Web Vitals are used by its ranking systems, but page experience is broader and good scores do not guarantee top rankings. Check whether field performance changed before the decline and whether the affected pages, devices and dates align. A later Lighthouse score does not prove causation."
      },
      {
        question: "How do I check if my site is too slow?",
        answer: "Use field Core Web Vitals for affected page groups where data exists, then repeat controlled lab tests under recorded device, network, region, consent and account conditions. Inspect origin, cache, assets, JavaScript, third parties and interactions rather than relying on one score."
      },
      {
        question: "Can I recover lost traffic from a slow website?",
        answer: "Repairing a confirmed performance regression can improve user experience, but traffic recovery depends on the actual cause and search processing. Fix the supported cause, monitor affected cohorts and avoid promising a ranking or recovery window."
      }
    ]
  },
  {
    id: "shopify-slow-losing-sales",
    title: "Slow Shopify Store Losing Sales? Build an Evidence Model",
    excerpt: "Join route-level field performance to your funnel, build bounded opportunity scenarios, test the least disruptive remedy and separate measured outcomes from assumptions.",
    category: "Shopify",
    readTime: "11 min",
    date: "Feb 10",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'sales',
    lastModified: "2026-10-08",
    faqs: [
      { question: "How much money am I losing from a slow Shopify store?", answer: "Do not multiply a universal loss-per-second statistic. Join route-level field performance to sessions, device, traffic source and funnel outcomes, then model low, central and high scenarios from your own data. Report assumptions and uncertainty." },
      { question: "Why is my Shopify store slow on mobile?", answer: "Measure representative templates and investigate theme code, sections, apps, pixels, consent, images, fonts, video, liquid work, network and platform behavior. Mobile hardware and networks often expose work that a desktop test hides, but the cause is property-specific." },
      { question: "How do I speed up my Shopify store?", answer: "Start with field and repeatable lab evidence, find the affected routes and bottlenecks, and choose the least disruptive remedy. Test theme, app, media and third-party changes before assuming a headless rebuild is required." },
      { question: "What is the ROI of fixing Shopify speed?", answer: "ROI depends on the measured intervention cost and incremental profit attributable to it. Define a baseline, primary metric, guardrails, test period and comparison method before release. Do not treat a Lighthouse gain, public case study or scenario as proof of revenue lift." }
    ]
  },
  {
    id: "shopify-conversion-rate-speed-fix",
    title: "Low Shopify Conversion Rate? Measure Speed in the Funnel",
    excerpt: "Segment the Shopify funnel by route, device, traffic source, and field performance before attributing conversion changes to speed or choosing a rebuild.",
    category: "Shopify",
    readTime: "16 min",
    date: "Feb 11",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'conversion',
    lastModified: "2026-10-08",
    faqs: [
      { question: "Why is my Shopify conversion rate low?", answer: "A store-wide average does not identify a cause. Segment the funnel by route, device, market, product, traffic source, customer type and period, then investigate offer, pricing, inventory, merchandising, errors, checkout and performance within the affected segment." },
      { question: "What is a good conversion rate for Shopify?", answer: "Use your own historical conversion rate segmented by traffic source, device, market, product, new versus returning visitors, and funnel step. Public averages mix unlike stores. Performance can contribute to friction, but it does not explain the whole conversion difference or guarantee a multiplier." },
      { question: "How does website speed affect conversion rate?", answer: "Speed and conversion move together, which is not the same as speed causing conversion. Shopify analysed Core Web Vitals against conversion across actively-selling stores and reported that for every 100 milliseconds slower a store loads, conversion tends to be about 3.5% lower, and that stores with 2.5 second LCP report roughly 30% lower conversion than stores with 1.5 second LCP. Shopify's verbs there are correlational, and it states that conversion depends on many factors beyond speed. So it is a population correlation, not a per-store coefficient: you cannot multiply your own latency saving by 3.5% and forecast revenue from it. Join route-level field performance with segmented funnel data, test a defined intervention, and report the estimate and its uncertainty without promising a universal uplift." },
      { question: "How do I increase my Shopify conversion rate?", answer: "Find the funnel stage and segment that changed, form a testable hypothesis, choose the least disruptive intervention and measure it with pre-defined primary and guardrail metrics. Do not treat speed, design or one public benchmark as the automatic answer." }
    ]
  },
  {
    id: "why-competitor-outranks-you",
    cardStat: "7",
    cardStatLabel: "Evidence groups to compare",
    title: "Why Does My Competitor Outrank Me? An Evidence-Led SEO Gap Analysis",
    excerpt: "Compare intent, content, crawlability, internal links, reputation, page experience and first-party search data without blaming a CMS or promising rankings.",
    category: "SEO",
    readTime: "11 min",
    date: "Feb 15",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'ranking',
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Why does my competitor rank higher on Google than me?",
        answer: "Compare the exact query, locale, device, date and result type, then audit intent fit, content evidence, crawl and index health, internal architecture, reputation, page experience and market changes. Google's systems use many signals, so no public audit can assign one universal cause."
      },
      {
        question: "Does framework choice create an automatic Google advantage?",
        answer: "Google's public guidance does not grant a framework-wide ranking bonus. Evaluate the rendered page, useful content, crawlability, links and experience. WordPress and custom sites can each satisfy or fail those requirements."
      },
      {
        question: "Do ChatGPT and Bing also prefer fast websites?",
        answer: "AI products have different retrieval, indexing and citation behavior. Fast, accessible pages can improve user experience, but no universal speed threshold guarantees inclusion. Use current provider controls and measure supported citations separately from classic rankings."
      },
      {
        question: "How much more does WordPress hosting cost compared to coded websites?",
        answer: "There is no universal difference. Compare current quotes for the actual traffic, storage, build, compute, CDN, database, email, monitoring, security, backup, maintenance and support requirements. Do not assume one platform is permanently free."
      },
      {
        question: "Can I improve WordPress SEO without rebuilding my site?",
        answer: "Often. Improve the measured content, technical, architecture, link or page-experience gap on the current site first. Migrate only when verified requirements remain blocked and the value justifies search, operational and cutover risk."
      }
    ]
  },
  {
    id: "how-to-achieve-100-pagespeed",
    cardStat: "8 steps",
    cardStatLabel: "Baseline, diagnose, repeat and release",
    title: "How to Reach 90+ PageSpeed: A Repeatable 2026 Process",
    excerpt: "An eight-step Lighthouse and Core Web Vitals process for improving representative pages without false 100-score promises.",
    category: "Performance",
    readTime: "11 min",
    date: "Feb 17",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "What is a good PageSpeed score?",
        answer: "Lighthouse currently labels 90 to 100 as good, but the lab score varies with test and page conditions and is not the same as field Core Web Vitals. Define representative pages and preserve at least three runs for each agreed mobile or desktop profile."
      },
      {
        question: "How do I check my PageSpeed score?",
        answer: "Run PageSpeed Insights for the exact public URL, then distinguish eligible Chrome field data from the Lighthouse lab result. Record date, URL, device, network, cache, consent and page state and retain multiple comparable reports."
      },
      {
        question: "Can WordPress get a 90+ PageSpeed score?",
        answer: "Yes, some WordPress pages can score 90 or higher. Results depend on hosting, cache, theme, plugins, content, media, fonts, third parties and test conditions. WordPress does not have one universal ceiling or score."
      },
      {
        question: "How long does it take to improve PageSpeed score?",
        answer: "Chasing a score is open-ended, which is why it is the wrong target. Measuring a route, fixing its largest constraint and re-measuring is a day. Confirming the change held takes weeks, because field data accumulates over a rolling window and a single lab run on your own laptop proves nothing about your visitors."
      },
      {
        question: "Does PageSpeed score affect SEO?",
        answer: "Google uses Core Web Vitals in its broader ranking systems but says good scores do not guarantee top rankings and relevance remains fundamental. A Lighthouse score is a lab diagnostic, not a direct ranking cutoff."
      },
      {
        question: "Can PandaCodeGen guarantee a 100 PageSpeed score?",
        answer: "No universal 100 is promised. A 90+ Lighthouse target applies only when accepted terms name representative pages, mobile and desktop profiles, the environment, three passing runs per page and profile, exclusions and remedy. It does not guarantee rankings or business outcomes."
      }
    ]
  },
  {
    id: "how-to-fix-slow-wordpress",
    cardStat: "8 methods",
    cardStatLabel: "Measure, isolate, optimize and decide",
    title: "How to Fix a Slow WordPress Site: 8 Evidence-Led Methods",
    excerpt: "Profile slow routes, isolate server, cache, database, theme, plugin, media and third-party work, then decide whether migration is justified.",
    category: "Performance",
    readTime: "11 min",
    date: "Feb 17",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: 'performance',
    lastModified: "2026-10-08",
    faqs: [
      {
        question: "Why is my WordPress site so slow?",
        answer: "Hosting, server load, software versions, cache, theme, plugins, queries, media, fonts, third parties and configuration can contribute. Measure the affected template with field data where available and repeated lab and server profiles before naming the cause."
      },
      {
        question: "How many plugins are too many?",
        answer: "There is no universal number. One plugin can add expensive queries, remote calls or scripts while many small plugins may have little effect. Profile the actual extensions on staging, record dependencies and retest controlled changes."
      },
      {
        question: "Can I make WordPress load in under 1 second?",
        answer: "Some WordPress pages can load quickly under particular content, cache, device and network conditions, but no platform-wide sub-second promise is defensible. Define the metric, page, percentile or lab profile and business state before setting a target."
      },
      {
        question: "What's the fastest way to speed up WordPress?",
        answer: "Profile the slow representative route, then prioritize the measured contributor: server time, queries, cache behavior, theme code, extension work, media, fonts, or third parties. Re-test one controlled change at a time. WordPress has no universal two-to-three-second ceiling."
      },
      {
        question: "Should I migrate from WordPress to something else?",
        answer: "Migrate only when measured performance, security, ownership, integration or operating requirements remain blocked after realistic fixes and a comparable total-cost case supports replacement. Preserve URLs, search output, data, workflows and rollback through a written scope."
      }
    ]
  },
  {
    id: "what-is-headless-commerce",
    cardStat: "4 layers",
    cardStatLabel: "Storefront, APIs, services and operations",
    title: "What Is Headless Commerce? A 2026 Store Owner Guide",
    excerpt: "Understand headless commerce architecture, Shopify and Medusa options, performance evidence, cost, operating tradeoffs and when a custom storefront is justified.",
    category: "E-Commerce",
    readTime: "15 min",
    date: "Mar 14",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: true,
    illustrationType: 'sales',
    lastModified: "2026-10-09",
    faqs: [
      { question: "Is headless commerce worth it?", answer: "For most stores, no. Headless buys you control of the storefront and costs you the theme editor and an ongoing engineering commitment. It is worth it when you can name a requirement the theme demonstrably cannot meet after you have actually tried, when somebody will own the storefront application after launch, and when the people who run campaigns can still change a page without filing a ticket. Two out of three is not enough, and the third is where these projects quietly fail. The same budget spent on the existing theme, its images, its app load and its data layer usually moves the numbers further and adds nothing to maintenance." },
      {
        question: "What is headless commerce in simple terms?",
        answer: "Headless commerce separates the customer-facing storefront from one or more commerce services. APIs and webhooks connect products, pricing, inventory, carts, customers, orders, checkout, content and other systems according to the chosen architecture."
      },
      {
        question: "How much does a headless commerce build cost?",
        answer: "A headless commerce build is normally custom scope rather than a standard tier. PandaCodeGen's published tiers start at $1,500 Starter, $3,500 Growth and $5,000 Scale, and a storefront carrying its own commerce integration, content system, search, accounts and migration usually sits beyond Scale. Those are our prices, not a market average. Budget the storefront build, then hosting, a content system and search if you use them, then whoever keeps the storefront running afterwards."
      },
      {
        question: "What do you lose by going headless on Shopify?",
        answer: "The editing experience. A headless storefront is your own application rather than a Liquid theme, so Shopify's theme editor does not apply to it, and neither do theme app extensions or any app that works by injecting itself into a theme. Anything a merchandiser used to change by dragging a section now needs a content system wired up for the purpose or a developer. Checkout stays on Shopify; everything in front of it becomes code you own."
      },
      {
        question: "Do I need headless commerce for my store?",
        answer: "Use headless when verified experience, channel, content, integration or operating requirements cannot be met safely by the current storefront and your team can own the added application. Product count and traffic alone do not decide it."
      },
      {
        question: "Will I lose my products and orders if I go headless?",
        answer: "A storefront-only change can retain the commerce backend, but data, API scopes, customer accounts, search, checkout, apps and integrations still require inventory and validation. Do not promise that nothing changes or can be lost without testing the actual implementation and rollback."
      },
      {
        question: "Is headless commerce faster than Shopify?",
        answer: "Headless can support deliberate rendering, caching and data strategies, but it can also be slow. Compare representative product, collection, search, cart and content routes using field Core Web Vitals where available and repeated lab tests under recorded conditions."
      },
      {
        question: "What are some headless commerce examples?",
        answer: "Documented patterns include Shopify with Hydrogen, Shopify with another frontend using Storefront and Customer Account APIs, and Medusa with an independently hosted storefront. A separate content platform such as Sanity can support editorial workflows. These examples describe architecture, not guaranteed outcomes."
      },
      {
        question: "What are the pros and cons of headless commerce?",
        answer: "Potential benefits include experience flexibility, multiple touchpoints and explicit rendering choices. Costs include another application, API dependencies, preview and search integration, consent and analytics work, regression testing, security, monitoring and ongoing engineering ownership."
      }
    ]
  },
  // Added 4 Oct 2026 at the END of the array on purpose: getRelatedPostIds breaks
  // ties by array position for pages that show a title-pilot card, so a new post
  // placed higher could displace a pilot page's related-card links mid-pilot.
  // FAQ answers read their platform facts from platform-portability.ts.
  {
    id: "website-portability",
    cardStat: "8 platforms",
    cardStatLabel: "export docs read and quoted on 8 Oct 2026",
    title: "Can You Export Your Website? What 8 Platforms Let You Take",
    excerpt: "What Wix, Squarespace, Webflow, Shopify, WooCommerce, GoHighLevel and WordPress let you export, from their own help pages, and what to save before you cancel.",
    category: "Guide",
    readTime: "35 min",
    date: "Oct 4",
    author: "Hassan",
    role: "Co-founder, Lead Engineer",
    featured: false,
    illustrationType: "migration",
    lastModified: "2026-10-09",
    faqs: [
      { question: "Can I export my Wix website?", answer: `Not as a working site. ${portable('wix', 'design')} What does export, according to Wix's help center as read on ${PORTABILITY_CHECKED_LABEL}: CMS collections, physical products, contacts and orders. ${portable('wix', 'posts')}` },
      { question: "Can I move my website from Squarespace to another platform?", answer: `Partly. ${portable('squarespace', 'design')} ${portable('squarespace', 'pages')} ${portable('squarespace', 'posts')} Products, contacts and orders export to CSV separately.` },
      { question: "Can I export my Webflow site and host it somewhere else?", answer: `Yes, with limits. ${portable('webflow', 'design')} ${portable('webflow', 'collections')}` },
      { question: "Can I export my GoHighLevel website?", answer: `Not in a form you can edit elsewhere. ${portable('gohighlevel', 'design')} ${portable('gohighlevel', 'pages')} Contacts, orders and media folders do export.` },
      { question: "Which website platforms have the least vendor lock-in?", answer: `Of the eight platforms we checked on ${PORTABILITY_CHECKED_LABEL}, self-hosted WordPress and WooCommerce are the two where the whole site moves. ${portable('wordpress', 'design')} Both are open source under the GPL. Shopify's products, customers and orders export to CSV, but its theme is written for Shopify stores.` },
      { question: "What should I export before cancelling a website builder?", answer: "Run every export the platform documents for products, customers, orders, collections and posts, and download the images you uploaded. Then crawl the live site for every URL and page title, screenshot each page template, list your forms and integrations, and check who the registrant on the domain is. Do it while the site is live: a cancelled site can't be crawled." },
      { question: "What do I keep at the end of a PandaCodeGen build?", answer: `From our published terms: ${OWNERSHIP_ON_HANDOVER}` },
    ],
  },
];
