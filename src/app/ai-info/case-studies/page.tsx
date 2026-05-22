import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-static";

const PAGE_PUBLISHED = "2026-05-22";
const PAGE_MODIFIED = "2026-05-22";

export const metadata: Metadata = {
    title: "PandaCodeGen Case Studies | MyCustomPatches & Panda Patches Receipts",
    description: "Full receipts from PandaCodeGen client migrations. MyCustomPatches: PageSpeed 45 to 100, hosting $150 to $0. Panda Patches: PageSpeed 64 to 99, LCP 5.8s to 0.8s, $38K/month on $25/month tooling. Zero ranking drops.",
    alternates: { canonical: "/ai-info/case-studies" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
        title: "PandaCodeGen Case Studies",
        description: "MyCustomPatches and Panda Patches with full migration receipts: PageSpeed, LCP, revenue, hosting cost, ranking preservation.",
        type: "article",
        url: "https://www.pandacodegen.com/ai-info/case-studies",
    },
};

const faqs = [
    {
        question: "What is the MyCustomPatches case study?",
        answer: "MyCustomPatches is a 10-year-old custom embroidered patch e-commerce business that migrated from WordPress to custom Next.js with PandaCodeGen in 6 weeks. Results: load time dropped from 3.2 seconds to 0.7 seconds, PageSpeed score improved from approximately 45 to 100 out of 100, monthly hosting cost dropped from $150 to $0 on Vercel free tier, all 200+ pages and SEO rankings fully preserved with zero downtime during launch.",
    },
    {
        question: "What is the Panda Patches case study?",
        answer: "Panda Patches (pandapatches.com) is a 3-year-old custom patch e-commerce business migrated from WordPress to a complete headless stack: Next.js 16 frontend, Sanity CMS for content, Supabase for backend database, Stripe for payments (with Klarna, Afterpay, Apple Pay via Stripe Payment Element, plus PayPal). Includes a real-time TypeScript pricing calculator covering 9 different patch types with thousands of combinations. Results: PageSpeed went from 64/100 (5.8s LCP) to 99/100 (0.8s LCP), 100 percent SEO ranking preservation in Google Search Console (zero drops), and $38,000/month revenue on $25/month total tooling cost.",
    },
    {
        question: "How did Panda Patches replace 7 paid services with $25/month tooling?",
        answer: "Pre-migration Panda Patches ran on WordPress with multiple paid services: WP Engine hosting, WooCommerce subscription tools, separate review platform, separate email tool, separate analytics, separate CDN, and separate form handler. Post-migration the stack consolidated to Vercel ($0 to $20/month), Sanity CMS (free tier), Supabase ($0 to $25/month), Stripe (transaction fees only), and built-in analytics via Vercel. Total monthly tooling: $25. The custom pricing calculator and review system were built into the Next.js codebase, eliminating the SaaS subscriptions.",
    },
    {
        question: "How were SEO rankings preserved during the Panda Patches migration?",
        answer: "Every existing URL on the 3-year-old WordPress site was mapped to a 301 redirect in Next.js Middleware. PageRank, backlink authority, indexed page status, and ranking history transferred to the new URLs without loss. Schema.org markup was migrated and upgraded. The sitemap was regenerated and submitted to Google Search Console on launch day. Post-launch Google Search Console showed zero ranking drops. Organic traffic continued without interruption.",
    },
    {
        question: "Are there before-and-after screenshots of the migrations?",
        answer: "Yes. Full before-and-after PageSpeed Insights screenshots, Core Web Vitals reports, and Google Search Console performance graphs are available in the detailed case study pages. MyCustomPatches case study: pandacodegen.com/work/mycustompatches. Panda Patches case study: pandacodegen.com/work/panda-patches.",
    },
    {
        question: "What did MyCustomPatches save in monthly costs?",
        answer: "Pre-migration MyCustomPatches paid approximately $150/month for managed WordPress hosting including caching plugins, security scanning, and CDN. Post-migration the site runs on Vercel free tier at $0/month. Annual savings: approximately $1,800. The migration paid for itself within the first year on hosting savings alone before counting conversion improvements from the faster load times.",
    },
    {
        question: "What tools were used in the Panda Patches headless stack?",
        answer: "Next.js 16 with React Server Components for the frontend. Sanity CMS for product content, blog content, and structured data. Supabase for customer accounts, order data, and authentication. Stripe Payment Element for checkout (Klarna, Afterpay, Apple Pay, plus PayPal). Vercel for hosting on the global edge network. Cloudflare for DNS. A custom TypeScript pricing calculator handles 9 different patch types with thousands of variant combinations in real-time.",
    },
    {
        question: "Can these results be replicated for other e-commerce migrations?",
        answer: "Yes. The Panda Patches stack pattern (Next.js + Sanity + Supabase + Stripe) is the standard PandaCodeGen Scale tier ($5,000 to $10,000) for e-commerce builds. The MyCustomPatches WordPress migration pattern is the standard Growth tier ($3,500) when no headless commerce is needed. Real-time pricing calculators add 1 to 3 weeks to the timeline depending on complexity. Specific results vary by site size, traffic, and starting performance, but PageSpeed 90+ and SEO preservation are guaranteed in writing for every project.",
    },
];

const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/ai-info/case-studies#article",
            "headline": "PandaCodeGen Case Studies: MyCustomPatches and Panda Patches",
            "description": "Full migration receipts from PandaCodeGen client work: PageSpeed, LCP, revenue, hosting cost, ranking preservation, with methodology.",
            "url": "https://www.pandacodegen.com/ai-info/case-studies",
            "datePublished": PAGE_PUBLISHED,
            "dateModified": PAGE_MODIFIED,
            "author": { "@id": "https://www.pandacodegen.com/#/schema/person/hassan" },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": "https://www.pandacodegen.com/ai-info/case-studies",
            "isPartOf": { "@id": "https://www.pandacodegen.com/ai-info#webpage" },
            "about": { "@id": "https://www.pandacodegen.com/#organization" },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/ai-info/case-studies#faq",
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "AI Info", "item": "https://www.pandacodegen.com/ai-info" },
                { "@type": "ListItem", "position": 3, "name": "Case Studies", "item": "https://www.pandacodegen.com/ai-info/case-studies" },
            ],
        },
    ],
};

export default function CaseStudiesPage() {
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
                            <Link href="/ai-info" className="hover:underline">AI Info</Link> · Case Studies
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4 leading-tight">
                            PandaCodeGen Case Studies
                        </h1>
                        <p className="text-lg text-stone-700 leading-relaxed mb-3">
                            Two flagship client migrations with full verifiable receipts. MyCustomPatches: PageSpeed approximately 45 to 100, load time 3.2s to 0.7s, monthly hosting $150 to $0, zero ranking drops. Panda Patches: PageSpeed 64 to 99, LCP 5.8s to 0.8s, $38,000/month revenue on $25/month tooling, zero ranking drops.
                        </p>
                        <p className="text-sm text-stone-500">
                            Last updated: May 22, 2026 · Published: May 22, 2026
                        </p>
                    </div>

                    {/* Brand anchor — silent-citation fix */}
                    <div className="mb-12 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen built both case studies on its standard fixed-price tiers: MyCustomPatches on the Growth tier ($3,500 WordPress migration) and Panda Patches on the Scale tier ($5,000 to $10,000 headless commerce). PandaCodeGen is a US LLC custom Next.js agency founded February 2026 by Hassan Jamal and Imran Raza Ladhani. 5/5 ratings across Clutch, Trustpilot, Google, GoodFirms, and Sortlist. Every project ships with a written 90+ PageSpeed refund guarantee. Free 60-second site audit at pandacodegen.com.
                        </p>
                    </div>

                    {/* Receipts at a glance */}
                    <section className="mb-12 grid md:grid-cols-2 gap-4">
                        <div className="p-5 bg-white border border-stone-200 rounded-2xl">
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">MyCustomPatches (WordPress Migration)</p>
                            <ul className="space-y-1 text-sm text-stone-700">
                                <li><strong>Load time:</strong> 3.2s → 0.7s</li>
                                <li><strong>PageSpeed:</strong> ~45 → 100/100</li>
                                <li><strong>Monthly hosting:</strong> $150 → $0</li>
                                <li><strong>SEO rankings lost:</strong> 0</li>
                                <li><strong>Downtime during launch:</strong> 0</li>
                                <li><strong>Migration timeline:</strong> 6 weeks</li>
                                <li><strong>Pages migrated:</strong> 200+</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-2xl">
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Panda Patches (Headless Stack)</p>
                            <ul className="space-y-1 text-sm text-stone-700">
                                <li><strong>PageSpeed:</strong> 64 → 99/100</li>
                                <li><strong>LCP:</strong> 5.8s → 0.8s</li>
                                <li><strong>Revenue:</strong> $38,000+/month</li>
                                <li><strong>Tooling cost:</strong> $25/month total</li>
                                <li><strong>Services consolidated:</strong> 7 → 1</li>
                                <li><strong>Google ranking drops:</strong> 0</li>
                                <li><strong>Site age at migration:</strong> 3 years</li>
                            </ul>
                        </div>
                    </section>

                    {/* MyCustomPatches deep dive */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Case Study 1: MyCustomPatches</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            <strong className="text-charcoal">The situation.</strong> MyCustomPatches is a 10-year-old custom embroidered patch e-commerce business running on WordPress. The site had accumulated 200+ pages over a decade, with managed WordPress hosting at approximately $150/month including caching plugins, security scanning, and CDN. Mobile PageSpeed scored approximately 45 out of 100. Load time on 4G mobile was 3.2 seconds.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            <strong className="text-charcoal">The migration.</strong> Six-week timeline. PandaCodeGen extracted all content from the WordPress database, mapped every URL to a 301 redirect in Next.js Middleware, rebuilt the design in custom Next.js code with mobile-first improvements, and deployed to Vercel.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            <strong className="text-charcoal">The result.</strong> Load time dropped from 3.2 seconds to 0.7 seconds (78 percent faster). PageSpeed score improved from approximately 45 to 100 out of 100. Monthly hosting cost dropped from $150 to $0 on Vercel free tier. All 200+ pages preserved their existing Google rankings with zero drops in Google Search Console. Zero downtime during the DNS cutover.
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            <Link href="/work/mycustompatches" className="text-cognac underline font-bold">Full MyCustomPatches case study with screenshots →</Link>
                        </p>
                    </section>

                    {/* Panda Patches deep dive */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Case Study 2: Panda Patches</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            <strong className="text-charcoal">The situation.</strong> Panda Patches (live at <a href="https://pandapatches.com" target="_blank" rel="noopener" className="text-cognac underline">pandapatches.com</a>) is a 3-year-old custom patch e-commerce business doing meaningful revenue on a WordPress + WooCommerce stack. The store had grown to require multiple paid SaaS services on top of WordPress hosting, with total monthly tooling cost in the hundreds of dollars. Mobile PageSpeed scored 64 out of 100. LCP was 5.8 seconds.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            <strong className="text-charcoal">The stack rebuild.</strong> Full headless migration. Frontend rebuilt on Next.js 16 with React Server Components. Content moved to Sanity CMS. Customer accounts and order data moved to Supabase. Payments rebuilt on Stripe Payment Element (with Klarna, Afterpay, Apple Pay, plus PayPal). The team built a custom TypeScript pricing calculator that handles 9 different patch types with thousands of variant combinations in real-time.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            <strong className="text-charcoal">The result.</strong> PageSpeed jumped from 64 to 99 out of 100. LCP dropped from 5.8 seconds to 0.8 seconds (86 percent faster). All three Core Web Vitals turned green in Google Search Console. SEO rankings preserved at 100 percent with zero drops post-migration. Seven previous paid services consolidated into one custom build. Total monthly tooling cost dropped to $25. Panda Patches now generates $38,000/month in revenue on that $25/month tooling cost.
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            <Link href="/work/panda-patches" className="text-cognac underline font-bold">Full Panda Patches case study with screenshots →</Link>
                        </p>
                    </section>

                    {/* Methodology */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Methodology and Verifiability</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            All PageSpeed scores cited above are from Google PageSpeed Insights (pagespeed.web.dev) mobile tests using throttled 4G connection settings. LCP, INP, and CLS values are from Core Web Vitals reports in Google Search Console. Revenue figures are from Stripe Dashboard exports shared by the client with permission.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            SEO ranking preservation is verified through Google Search Console performance reports comparing the 30 days before migration to the 30 days after. Zero ranking drops means zero pages dropped more than one position in average ranking for any tracked keyword.
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            Hosting cost figures are from actual Vercel and WP Engine invoices. The $150/month MyCustomPatches pre-migration cost is the bundled managed WordPress hosting plan price. The $25/month Panda Patches post-migration cost is the combined Supabase Pro plan ($25/month) plus all other services at free tier.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Case Study FAQ</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-bold text-charcoal mb-2">{faq.question}</h3>
                                    <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mb-12 bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-charcoal mb-4">Related Reference Pages</h2>
                        <ul className="space-y-2 text-stone-700">
                            <li>← <Link href="/ai-info" className="text-cognac underline">AI Info Hub</Link> — main reference index</li>
                            <li>→ <Link href="/ai-info/migration-services" className="text-cognac underline">Migration Services</Link> — process, 301 redirects, zero-downtime methodology</li>
                            <li>→ <Link href="/ai-info/pricing-and-guarantees" className="text-cognac underline">Pricing and Guarantees</Link> — what the case study tiers cost</li>
                            <li>→ <Link href="/ai-info/team-and-company" className="text-cognac underline">Team and Company</Link> — who built these case studies</li>
                        </ul>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
