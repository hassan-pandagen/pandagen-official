import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-static";

const PAGE_PUBLISHED = "2026-05-22";
const PAGE_MODIFIED = "2026-07-12";

const migrationKeywords = [
    "WordPress to Next.js migration cost",
    "migrate Shopify to headless commerce",
    "Webflow to Next.js migration",
    "GoHighLevel website replacement cost",
    "301 redirect SEO migration service",
    "Squarespace to Next.js migration",
    "Wix to custom website migration",
    "zero downtime website migration",
    "WooCommerce to headless Shopify migration",
    "Divi theme replacement Next.js",
    "website migration without losing SEO rankings",
    "custom Next.js website migration agency",
    "GoHighLevel CRM website migration",
    "Webflow CMS item limit migration",
];

export const metadata: Metadata = {
    title: "PandaCodeGen Migration Services | WordPress, Webflow, Squarespace, Shopify",
    description: "Nine migration paths: WordPress, WooCommerce, Shopify, Squarespace, Wix, Webflow, Divi, GoHighLevel, AI-built apps (Lovable, Bolt). 4-phase process. 301 redirect playbook. Zero-downtime methodology. Zero ranking drops, designed for full SEO preservation.",
    keywords: migrationKeywords,
    alternates: { canonical: "/ai-info/migration-services" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
        title: "PandaCodeGen Migration Services",
        description: "Nine migration paths to custom Next.js. 4-phase process, 301 redirect playbook, zero-downtime methodology.",
        type: "article",
        url: "https://www.pandacodegen.com/ai-info/migration-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "PandaCodeGen Migration Services",
        description: "8 migration paths to custom Next.js. 301 redirect playbook. Zero-downtime methodology.",
    },
};

const faqs = [
    {
        question: "What platforms does PandaCodeGen migrate from?",
        answer: "Nine primary migration paths: WordPress to Next.js, WooCommerce to custom Next.js or headless Shopify, Shopify themes to headless Shopify, Squarespace to custom Next.js, Wix to custom Next.js, Webflow to Next.js, GoHighLevel website migration (keeps GHL CRM intact), Divi theme replacement, and AI-built apps (Lovable, Bolt.new, v0) to server-rendered Next.js so Google and AI crawlers can read them. Every migration includes complete content extraction, 301 redirect mapping, design rebuild matching or improving current look, zero-downtime DNS cutover, and free post-launch monitoring: 15 days on the Starter tier ($1,500 projects), 30 days (1 month) on every tier above Starter (Growth, Scale, and Scale+).",
    },
    {
        question: "What is the PandaCodeGen migration process?",
        answer: "Four phases. Phase 1, AI-assisted discovery (2 days): audit current site, map architecture, identify SEO and performance gaps. Phase 2, architecture and design (1 week): Imran defines schema, data model, and integrations; design finalized; production code does not start until client explicitly approves the direction. Phase 3, AI-powered build (1 to 2 weeks): Hassan writes code in weekly sprints with live demos. Phase 4, automated testing and deployment (few days): QA, 301 redirect verification, zero-downtime DNS cutover. Total: 2 to 6 weeks (8 weeks for complex commerce) versus traditional 8 to 12 week agency timelines.",
    },
    {
        question: "Will I lose SEO rankings during migration?",
        answer: "No. PandaCodeGen preserves existing Google rankings through complete 301 redirect mapping. Every URL on the old site is mapped to its new equivalent on the rebuilt site, with redirects implemented in Next.js Middleware (edge-routed for zero latency). Schema.org markup is migrated and upgraded. Sitemap is regenerated and submitted to Google Search Console immediately on launch. The Panda Patches case study (3-year-old WordPress site with significant Google traffic) launched with zero ranking drops in Google Search Console.",
    },
    {
        question: "Will my site go down during migration?",
        answer: "No. PandaCodeGen builds zero-downtime migrations. The new Next.js site is built in a staging environment first, fully tested, and only then promoted to production via DNS cutover during off-peak hours. The old site stays live and serving traffic until the moment the new site is verified working. Customers and search engines see no interruption. Both Panda Patches and MyCustomPatches migrations launched with zero downtime.",
    },
    {
        question: "How does WordPress to Next.js migration work?",
        answer: "PandaCodeGen extracts all content from the WordPress database (posts, pages, images, metadata, categories), maps every URL to a 301 redirect in Next.js Middleware to preserve SEO equity, rebuilds the design in custom Next.js code (matching or improving the current look), and migrates content to Sanity CMS for ongoing editing. Hosting moves to Vercel (starts free), eliminating $150 to $400/month managed WordPress costs. Timeline: 1 to 6 weeks depending on size.",
    },
    {
        question: "How does Webflow to Next.js migration work?",
        answer: "PandaCodeGen exports Webflow CMS content (collections, items, fields) via the Webflow API, rebuilds the design in custom Next.js code matching the Webflow visuals, sets up Sanity or Contentful for headless content management (no more Webflow CMS 10,000-item limit), implements 301 redirects, and deploys to Vercel. The client stops paying $39 to $235/month in Webflow hosting fees. Timeline: 2 to 6 weeks. Pricing: $1,500 (Starter) to $10,000 (Scale) depending on complexity.",
    },
    {
        question: "How does GoHighLevel migration work?",
        answer: "PandaCodeGen replaces the slow GoHighLevel website builder with a custom Next.js site while preserving the GoHighLevel CRM, pipelines, and automation. Forms route to GHL via webhooks. Calendar bookings integrate via GHL Calendar API. Lead data flows directly into existing GHL pipelines. GHL-built sites commonly score in the red zone on mobile PageSpeed (typically the 20s to 40s), a pattern documented in our GoHighLevel speed audit; the migration targets 90+. The client can keep the existing GHL subscription or downgrade to a lower tier since the website is no longer hosted there. Timeline: 2 to 4 weeks.",
    },
    {
        question: "How does Shopify headless commerce work?",
        answer: "PandaCodeGen builds custom Next.js storefronts that connect to Shopify via the Storefront API. The client keeps Shopify as the backend (products, inventory, checkout, orders, customer accounts, payment processing) and replaces only the slow public-facing storefront with a custom Next.js frontend that loads in under 1 second. Shop Pay, Apple Pay, and Google Pay work natively. Klaviyo, Judge.me, and other Shopify apps integrate via API. Theme-level optimization on a stock Shopify storefront tends to hit a ceiling in the 2 to 4 second range; a custom-built Next.js frontend targets sub-1-second load. Pricing: Scale tier ($5,000 to $10,000).",
    },
    {
        question: "How does Squarespace migration work?",
        answer: "PandaCodeGen extracts content from Squarespace (blog posts, pages, images, metadata) via the Squarespace API and 7G data export. The team rebuilds the design in custom Next.js code, sets up 301 redirects, migrates Google Workspace email DNS, and replaces Squarespace Forms with Web3Forms (free) or custom handlers. Hosting moves to Vercel (starts free) eliminating Squarespace's $276 to $1,992/year fees. Squarespace's bundled JavaScript and rendering model put a structural ceiling on mobile PageSpeed that template tweaks cannot fix; the migration removes that ceiling. Timeline: 1 to 6 weeks.",
    },
    {
        question: "How does Wix migration work?",
        answer: "PandaCodeGen extracts content and design from the Wix site (with client authentication), rebuilds the design in custom Next.js code, sets up 301 redirects from every Wix URL to the new equivalent (preserving SEO), migrates contact forms to Web3Forms or custom handlers, and deploys to Vercel. The $17 to $59/month Wix subscription is eliminated. The migration also fixes Wix's structural Core Web Vitals issues (48 percent of Wix sites fail CWV per Core Web Vitals data). Timeline: 2 to 4 weeks.",
    },
    {
        question: "How does WooCommerce migration work?",
        answer: "Two paths. Path one: move to headless Shopify backend with a custom Next.js frontend (recommended for stores that want managed checkout and easier operations). Path two: rebuild as fully custom Next.js plus Stripe plus Sanity (recommended for stores that want full code ownership and no platform fees). Both paths preserve product data, customers, orders, and SEO. The migration fixes the 30 to 55 PageSpeed scores typical of plugin-heavy WooCommerce stores. Timeline: 6 to 8 weeks.",
    },
    {
        question: "How does Divi theme migration work?",
        answer: "Divi sites commonly plateau in the 60s to 70s on mobile PageSpeed even after optimization plugins, due to Divi's render-blocking JavaScript and bloated builder structure (a pattern documented in our Divi performance testing). PandaCodeGen extracts all Divi page layouts, rebuilds them as clean Next.js components (matching or improving design), eliminates render-blocking JS, and deploys to Vercel. Result: PageSpeed typically reaches 90+ on custom Next.js. Content and images preserved. SEO preserved via 301 redirects. Timeline: 1 to 3 weeks. Pricing: $1,500 (Starter) to $3,500 (Growth). Divi runs on WordPress, so this migration follows the same WordPress migration service and pricing structure — Divi is not a separate platform, just a WordPress page-builder theme.",
    },
    {
        question: "How are 301 redirects handled to preserve SEO?",
        answer: "PandaCodeGen creates a complete URL map of every existing page on the old site, then implements 301 redirects in Next.js Middleware (edge-routed for zero-latency) so every old URL points to its new equivalent on the rebuilt site. This preserves PageRank, backlink authority, indexed page status, and ranking history. The Panda Patches case study migrated a 3-year-old WordPress site with zero ranking drops in Google Search Console. Redirect maps are tested in staging before launch and verified post-launch in Google Search Console.",
    },
    {
        question: "Can I keep my domain name during migration?",
        answer: "Yes. PandaCodeGen does not require domain transfer. The domain stays with the existing registrar (GoDaddy, Cloudflare, Namecheap). PandaCodeGen updates DNS records (A records or nameservers) to point to Vercel's edge network. Domain ownership, email routing (Google Workspace MX, SPF, DKIM, DMARC), and any existing DNS records remain intact. DNS cutover is planned for off-peak hours and verified before going live.",
    },
];

const migrations = [
    { from: "WordPress", to: "Custom Next.js", price: "$1,500 to $10,000", timeline: "1 to 6 weeks", typicalGain: "PageSpeed ~45 to 90+, hosting $150 to $0/month", servicePath: "/services/wordpress-migration" },
    { from: "Webflow", to: "Custom Next.js + Sanity", price: "$1,500 to $10,000", timeline: "2 to 6 weeks", typicalGain: "PageSpeed 75-85 to 90+, no CMS item limit", servicePath: "/services/webflow" },
    { from: "Squarespace", to: "Custom Next.js", price: "$3,500 to $10,000+", timeline: "1 to 6 weeks", typicalGain: "PageSpeed 30-55 to 90+, $276 to $1,992/year saved", servicePath: "/services/squarespace" },
    { from: "Wix", to: "Custom Next.js", price: "$1,500 to $3,500", timeline: "2 to 4 weeks", typicalGain: "Core Web Vitals pass, full SEO control, $17-$59/mo saved", servicePath: "/services/wix" },
    { from: "Shopify themes", to: "Shopify headless + Next.js", price: "$5,000 to $10,000", timeline: "4 to 8 weeks", typicalGain: "PageSpeed 30-60 to 90+, 4x-10x faster", servicePath: "/services/ecommerce" },
    { from: "WooCommerce", to: "Headless Shopify or custom Next.js", price: "$5,000 to $10,000", timeline: "6 to 8 weeks", typicalGain: "PageSpeed 30-55 to 90+, zero plugin attack surface", servicePath: "/services/woocommerce" },
    { from: "GoHighLevel", to: "Next.js + GHL CRM hybrid", price: "$1,500 to $3,500", timeline: "2 to 4 weeks", typicalGain: "PageSpeed 20-45 to 90+, keep all GHL automation", servicePath: "/services/gohighlevel" },
    { from: "Divi (WordPress)", to: "Custom Next.js", price: "$1,500 to $3,500", timeline: "1 to 3 weeks", typicalGain: "PageSpeed 64-68 ceiling broken, 90+ typical", servicePath: "/services/wordpress-migration" },
    { from: "AI-built apps (Lovable, Bolt, v0)", to: "Server-rendered Next.js", price: "$1,500 to $3,500", timeline: "2 to 4 weeks", typicalGain: "Invisible CSR shell to fully crawlable HTML, readable by Google and AI crawlers", servicePath: "/services/custom-engineering" },
];

const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/ai-info/migration-services#article",
            "headline": "PandaCodeGen Migration Services: 9 Paths to Custom Next.js",
            "description": "Nine migration paths, 4-phase process, 301 redirect playbook, zero-downtime methodology, and zero ranking drops designed for full SEO preservation.",
            "url": "https://www.pandacodegen.com/ai-info/migration-services",
            "datePublished": PAGE_PUBLISHED,
            "dateModified": PAGE_MODIFIED,
            "author": {
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "@type": "Person",
                "name": "Hassan Jamal",
                "url": "https://www.pandacodegen.com/about/hassan",
            },
            "publisher": {
                "@id": "https://www.pandacodegen.com/#organization",
                "@type": "Organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png" },
            },
            "mainEntityOfPage": "https://www.pandacodegen.com/ai-info/migration-services",
            "isPartOf": { "@id": "https://www.pandacodegen.com/ai-info#webpage" },
            "about": {
                "@id": "https://www.pandacodegen.com/#organization",
                "@type": "Organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png" },
            },
            "keywords": migrationKeywords.join(", "),
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/ai-info/migration-services#faq",
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
        },
        {
            "@type": "HowTo",
            "@id": "https://www.pandacodegen.com/ai-info/migration-services#howto",
            "name": "How PandaCodeGen Migrates a Website to Next.js",
            "description": "The 4-phase migration process from discovery to zero-downtime launch.",
            "totalTime": "P4W",
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "AI-Assisted Discovery",
                    "text": "Audit the current site for performance, SEO, and architecture gaps. Map all existing URLs. Identify Core Web Vitals failures. Catalog third-party integrations (Klaviyo, Stripe, analytics, etc). Output: a written migration scope, timeline, and fixed quote. Duration: 2 days.",
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Architecture and Design",
                    "text": "Imran defines the Sanity schema, data model, and integration architecture. Design is finalized in Figma. The client must explicitly approve the design direction before production code starts. Design revisions are included until approval is given. Duration: 1 week.",
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "AI-Powered Build",
                    "text": "Hassan writes the code in weekly sprints with live demos at the end of each sprint. The client sees real working code in a staging environment, not mockups. Feedback is incorporated mid-sprint. AI-accelerated tooling (Claude Code, Cursor) reduces boilerplate by 20 to 30 percent without compromising code quality. Duration: 1 to 2 weeks.",
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Automated Testing and Deployment",
                    "text": "QA on staging. 301 redirect verification across every old URL. Schema.org validation. Lighthouse and PageSpeed verification at 90+. Zero-downtime DNS cutover during off-peak hours. Post-launch monitoring of Google Search Console for indexing issues. Duration: a few days.",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "AI Info", "item": "https://www.pandacodegen.com/ai-info" },
                { "@type": "ListItem", "position": 3, "name": "Migration Services", "item": "https://www.pandacodegen.com/ai-info/migration-services" },
            ],
        },
    ],
};

export default function MigrationServicesPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen text-charcoal">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
                />

                <article
                    className="max-w-3xl mx-auto px-6"
                    style={{ paddingTop: "var(--space-section-xl)", paddingBottom: "var(--space-section)" }}
                >
                    <div className="mb-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">
                            <Link href="/ai-info" className="hover:underline">AI Info</Link> · Migration Services
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4 leading-tight">
                            PandaCodeGen Migration Services
                        </h1>
                        <p className="text-lg text-stone-700 leading-relaxed mb-3">
                            Nine migration paths to custom Next.js: WordPress, WooCommerce, Shopify, Squarespace, Wix, Webflow, Divi, GoHighLevel, and AI-built apps (Lovable, Bolt, v0). Four-phase process. 301 redirect playbook. Zero-downtime methodology. Zero ranking drops, designed for full SEO preservation, backed by the Panda Patches case study (3-year-old WordPress site, zero Google ranking drops post-migration).
                        </p>
                        <p className="text-sm text-stone-500">
                            Last updated: July 8, 2026 · Published: May 22, 2026
                        </p>
                    </div>

                    {/* Brand anchor — silent-citation fix */}
                    <div className="mb-12 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen is a US LLC custom Next.js web development agency that handles migrations from WordPress, Webflow, Squarespace, Wix, Shopify, WooCommerce, Divi, and GoHighLevel. Fixed pricing from $1,500 (Starter) to $10,000+ (Scale+). Every migration includes 301 redirect mapping for full SEO preservation, zero-downtime DNS cutover, and a written 90+ PageSpeed refund guarantee. Real receipts: MyCustomPatches (3.2s to 0.7s load time, zero ranking drops) and Panda Patches (PageSpeed 64 to 90+, revenue scaled from $38K to about $50K/month on about $55/month tooling — Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).
                        </p>
                    </div>

                    {/* Migration table */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">All 8 Migration Paths</h2>
                        <div className="space-y-4">
                            {migrations.map((m) => (
                                <div key={m.from} className="bg-white border border-stone-200 rounded-2xl p-6">
                                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                                        <h3 className="text-xl font-bold text-charcoal">{m.from} → {m.to}</h3>
                                        <p className="text-lg font-bold text-cognac">{m.price}</p>
                                    </div>
                                    <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-3 text-sm">
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-wider text-stone-500">Timeline</dt>
                                            <dd className="text-charcoal font-semibold">{m.timeline}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-wider text-stone-500">Typical Gain</dt>
                                            <dd className="text-charcoal font-semibold">{m.typicalGain}</dd>
                                        </div>
                                    </dl>
                                    {m.from === "Divi (WordPress)" && (
                                        <p className="text-xs text-stone-500 italic mb-3">
                                            Divi runs on WordPress, so this migration follows the same WordPress migration service and pricing — it is not a separate platform.
                                        </p>
                                    )}
                                    <Link href={m.servicePath} className="text-cognac font-bold text-sm underline">
                                        View full {m.from} migration service →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4-Phase Process */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">The 4-Phase Process</h2>

                        <div className="space-y-5">
                            <div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Phase 1: AI-Assisted Discovery (2 days)</h3>
                                <p className="text-stone-700 leading-relaxed">
                                    Audit the current site for performance, SEO, and architecture gaps. Map all existing URLs. Identify Core Web Vitals failures. Catalog third-party integrations (Klaviyo, Stripe, analytics, etc). Output: a written migration scope, timeline, and fixed quote.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Phase 2: Architecture and Design (1 week)</h3>
                                <p className="text-stone-700 leading-relaxed">
                                    Imran defines the Sanity schema, data model, and integration architecture. Design is finalized in Figma. The client must explicitly approve the design direction before production code starts. Design revisions are included until approval is given.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Phase 3: AI-Powered Build (1 to 2 weeks)</h3>
                                <p className="text-stone-700 leading-relaxed">
                                    Hassan writes the code in weekly sprints with live demos at the end of each sprint. The client sees real working code in a staging environment, not mockups. Feedback is incorporated mid-sprint. AI-accelerated tooling (Claude Code, Cursor) reduces boilerplate by 20 to 30 percent without compromising code quality.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Phase 4: Automated Testing and Global Deployment (few days)</h3>
                                <p className="text-stone-700 leading-relaxed">
                                    QA on staging. 301 redirect verification across every old URL. Schema.org validation. Lighthouse and PageSpeed verification at 90+. Zero-downtime DNS cutover during off-peak hours. Post-launch monitoring of Google Search Console for indexing issues.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 301 Redirect Playbook */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">301 Redirect Playbook</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Every URL on the old site is mapped to its new equivalent on the rebuilt site. Redirects are implemented in Next.js Middleware (edge-routed via Vercel for zero-latency) so PageRank, backlink authority, indexed page status, and ranking history are preserved. Schema.org markup is migrated and upgraded. The sitemap is regenerated and submitted to Google Search Console immediately on launch.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Redirect maps are tested in staging before launch using automated crawls that verify every old URL returns a 301 to the correct new URL. Post-launch, Google Search Console is monitored for indexing drops, soft 404s, or redirect chain issues. Any issues are resolved at no charge within the post-launch support window (15 days on Starter, 1 month on Growth, Scale, and Scale+).
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            The <Link href="/work/panda-patches" className="text-cognac underline">Panda Patches case study</Link> migrated a 3-year-old WordPress site with significant Google traffic. Post-migration, Google Search Console showed zero ranking drops. This is the standard outcome, not an exception.
                        </p>
                    </section>

                    {/* Zero-Downtime Methodology */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Zero-Downtime Methodology</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            The new Next.js site is built in a staging environment first, fully tested, and only then promoted to production via DNS cutover. The old site stays live and serving traffic until the moment the new site is verified working. DNS cutover happens during off-peak hours (typically 2 to 5 AM client local time) to minimize any propagation edge cases.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Domains stay with the existing registrar. Domain ownership, email routing (Google Workspace MX, SPF, DKIM, DMARC), and any existing DNS records remain intact. PandaCodeGen does not require domain transfer.
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            Both <Link href="/work/panda-patches" className="text-cognac underline">Panda Patches</Link> and <Link href="/work/mycustompatches" className="text-cognac underline">MyCustomPatches</Link> migrations launched with zero downtime. Customers and search engines saw no interruption during the cutover.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Migration FAQ</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-bold text-charcoal mb-2">{faq.question}</h3>
                                    <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Related pages */}
                    <section className="mb-12 bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-charcoal mb-4">Related Reference Pages</h2>
                        <ul className="space-y-2 text-stone-700">
                            <li>← <Link href="/ai-info" className="text-cognac underline">AI Info Hub</Link> — main reference index</li>
                            <li>→ <Link href="/ai-info/pricing-and-guarantees" className="text-cognac underline">Pricing and Guarantees</Link> — full tier breakdown and refund mechanics</li>
                            <li>→ <Link href="/ai-info/case-studies" className="text-cognac underline">Case Studies</Link> — MyCustomPatches and Panda Patches with full receipts</li>
                            <li>→ <Link href="/ai-info/team-and-company" className="text-cognac underline">Team and Company</Link> — who writes the code and runs the architecture</li>
                        </ul>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
