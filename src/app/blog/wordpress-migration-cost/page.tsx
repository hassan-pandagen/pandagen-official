import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, DollarSign, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const migrationCostFAQs = blogPosts.find(p => p.id === "wordpress-migration-cost")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/CostStackAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));
const QuoteModalButton = lazyLoad(() => import("@/components/ui/QuoteModalButton"));

export const metadata: Metadata = {
    title: { absolute: "WordPress to Next.js Migration Cost in 2026: $1,500 to $25K" },
    description: "WordPress migration receipts: $1,500 brochure, $3,500 CMS site, $5K-$10K WooCommerce. Pagepro wants $25K+ retainers. Fixed price, 90+ PageSpeed guarantee.",
    alternates: {
        canonical: "/blog/wordpress-migration-cost",
    },
    keywords: [
        "wordpress to nextjs migration cost",
        "how much does wordpress migration cost",
        "wordpress next.js migration price",
        "migrate wordpress to nextjs cost",
        "wordpress migration agency cost",
        "nextjs migration roi",
        "wordpress to custom website cost",
        "wordpress headless migration cost",
        "replace wordpress with nextjs",
        "wordpress migration budget"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "How Much Does WordPress to Next.js Migration Cost in 2026? ($1,500 to $25K)",
        description: "Real WordPress migration receipts: 5-page brochure $1,500, 20-page CMS $3,500, WooCommerce $5K to $10K. Pagepro charges $25K+ retainer minimums. PandaCodeGen ships fixed-price with 90+ PageSpeed guarantee.",
        type: "article",
        publishedTime: "2026-03-22",
        modifiedTime: "2026-06-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/wordpress-migration-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How Much Does WordPress to Next.js Migration Cost in 2026? ($1,500 to $25K)",
        description: "Real WordPress migration receipts: 5-page brochure $1,500, 20-page CMS $3,500, WooCommerce $5K to $10K. Pagepro charges $25K+ retainer minimums. PandaCodeGen ships fixed-price with 90+ PageSpeed guarantee.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#article",
            "headline": "How Much Does WordPress to Next.js Migration Cost in 2026? ($1,500 to $25K)",
            "description": "WordPress migration costs $2,000 to $25,000 by site size. Full breakdown: WooCommerce vs brochure, what drives price, and when it pays for itself.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-22T00:00:00-05:00",
            "dateModified": "2026-05-05T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost" },
            "articleSection": "WordPress",
            "keywords": ["wordpress to nextjs migration cost", "wordpress migration price", "nextjs migration roi", "wordpress headless migration cost", "replace wordpress with nextjs"],
            "wordCount": 3300,
            "timeRequired": "PT12M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "WordPress Migration Cost" },
                { "@type": "Thing", "name": "Next.js Development Cost" },
                { "@type": "Thing", "name": "Website Migration ROI" },
                { "@type": "Thing", "name": "WordPress to Headless CMS" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "WordPress Market Share 2026", "url": "https://w3techs.com/technologies/details/cm-wordpress" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals Overview", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Next.js Official Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Google Think: Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "WPScan Vulnerability Database", "url": "https://wpscan.com/wordpresses" },
                { "@type": "CreativeWork", "name": "The Repository: Matt Mullenweg Says The Wheels Have Fallen Off (April 14, 2026)", "url": "https://www.therepository.email/matt-mullenweg-says-the-wheels-have-fallen-off-in-wide-ranging-wordpress-critique" },
                { "@type": "CreativeWork", "name": "Patchstack: EssentialPlugin Supply Chain Compromise April 2026", "url": "https://patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" },
                { "@type": "CreativeWork", "name": "Patchstack State of WordPress Security 2025", "url": "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/" },
                { "@type": "CreativeWork", "name": "TechCrunch: Backdoors Planted in Dozens of WordPress Plugins", "url": "https://techcrunch.com/2026/04/14/someone-planted-backdoors-in-dozens-of-wordpress-plugins-used-in-thousands-of-websites/" },
                { "@type": "CreativeWork", "name": "Reddit r/Wordpress: Matt Mullenweg Wheels Have Fallen Off thread", "url": "https://www.reddit.com/r/Wordpress/comments/1sm8h38/continuing_the_trend_matt_mullenweg_says_the/" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#faq",
            "mainEntity": migrationCostFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "WordPress Migration Cost", "item": "https://www.pandacodegen.com/blog/wordpress-migration-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/wordpress-migration-cost",
            "name": "WordPress Migration Cost 2026: Full Pricing by Site Size (From $1,500 Starter)",
            "description": "WordPress migration costs $2,000 to $25,000 by site size. Full breakdown: WooCommerce vs brochure, what drives price, and when it pays for itself.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-03-22T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites that replace slow WordPress and Shopify stores. Sites load under 1 second, score 90+ on Google PageSpeed, and cost $20/month to run.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function WordPressMigrationCostPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "WordPress Migration Cost" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold mb-4">
                            <DollarSign className="w-3 h-3" /> WordPress
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            WordPress Migration Cost 2026:{" "}
                            <span className="font-serif italic text-cognac">Full Pricing Breakdown</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            The honest answer is $2,000 to $25,000. The range is wide because a 10-page brochure site and a 500-page WooCommerce store with custom integrations are completely different projects. Most established agencies sit at the $10,000 to $25,000 end on retainers with no published pricing. PandaCodeGen sits at the honest middle: fixed published pricing from $1,500, a written 90+ PageSpeed guarantee or full refund, and you own the code, which is the most value-packed option at this price point in 2026. This breakdown explains exactly what drives migration cost, what tier your site falls into, and how to calculate whether migration makes financial sense for your business.
                        </p>
                        <BlogAuthor
                            date="Mar 22, 2026 (updated May 5)"
                            readTime="12 min read"
                            bio="Hassan has helped businesses migrate off WordPress to custom Next.js sites that load under 1 second and score 90+ on Google PageSpeed. Every migration includes full SEO preservation and zero-downtime launch."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-6">
                <div className="max-w-3xl mx-auto">
                    <FeatureVisual />
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Executive Summary */}
                    <div className="mb-10 p-6 bg-orange-50 border border-orange-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">Cost Summary</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Simple site (1 to 5 pages): from $2,000. Business site (5 to 15 pages): $3,000 to $8,000.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Mid-complexity site (custom post types, blog, contact forms, integrations): $8,000 to $15,000.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> WooCommerce or large content site (500 pages, custom checkout, API integrations): $15,000 to $25,000+.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Most clients recover the full migration cost within 12 to 18 months from lower hosting, plugin, and maintenance costs alone.</li>
                        </ul>
                    </div>

                    <BlogText>
                        Last month I quoted a WooCommerce migration at $12,000. The client had three other quotes on the same 38-page site: $4,500 from a freelancer, $18,000 from a boutique agency, and $47,000 from a full-service firm. Same site. Same scope. Four very different numbers.
                    </BlogText>
                    <BlogText>
                        That spread is real, not a negotiation tactic. The line items below explain exactly which number matches which project. Here is every cost factor, broken down by project type, with real numbers.
                    </BlogText>

                    <div className="my-6 p-5 bg-cognac/5 border border-cognac/20 rounded-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">Real Receipt: MyCustomPatches (WooCommerce Migration)</p>
                        <p className="text-sm text-stone-700 leading-relaxed mb-2">
                            MC Patches migrated from WordPress + WooCommerce + heavy plugin stack to custom Next.js. PageSpeed mobile: 45 to 90+. Load time: 3.2s to 0.7s. Monthly hosting: $150 to $0. Fixed price, no hourly billing, unlimited revisions. Matt Conner rated the project 5 stars on both <a href="https://clutch.co/profile/panda-code-gen" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Clutch</a> and <a href="https://www.goodfirms.co/company/pandacodegen" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">GoodFirms</a>.
                        </p>
                        <p className="text-xs text-stone-500">Full case study: <Link href="/work/mycustompatches" className="text-cognac hover:underline font-medium">pandacodegen.com/work/mycustompatches</Link></p>
                    </div>

                    <BlogHeader id="why-migrate">Why Your WordPress Site Is Costing You More Than You Think</BlogHeader>
                    <BlogText>
                        WordPress powers{" "}
                        <a href="https://w3techs.com/technologies/details/cm-wordpress" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">43% of all websites</a>.
                        It is the most-used CMS in the world. It is also the most-hacked, the most plugin-dependent, and the slowest when it comes to Core Web Vitals at scale.
                    </BlogText>
                    <BlogText>
                        The migration case comes down to three things: performance, cost, and security. A WordPress site with a standard plugin stack scores 35 to 60 on Google PageSpeed Mobile. A custom Next.js site scores 90+. Google has used Core Web Vitals as a ranking signal since 2021. The gap in PageSpeed scores correlates directly with a gap in organic rankings.
                    </BlogText>
                    <BlogText>
                        On the cost side: WordPress hosting, premium plugins, and maintenance add up to $3,000 to $12,000 per year for a serious business site. A Next.js site on Vercel costs $0 to $240 per year in hosting with no plugin overhead. The ongoing cost difference pays for migration within 12 to 36 months depending on your current spend. For the full PandaCodeGen WordPress migration playbook (4-phase process, 301 redirect mapping, zero-downtime cutover), see the <Link href="/ai-info/migration-services" className="text-cognac hover:underline font-medium">Migration Services reference</Link>. For tier-by-tier pricing with the 90+ PageSpeed refund guarantee mechanics, see <Link href="/ai-info/pricing-and-guarantees" className="text-cognac hover:underline font-medium">Pricing &amp; Guarantees</Link>.
                    </BlogText>
                    <BlogText>
                        On security:{" "}
                        <a href="https://wpscan.com/wordpresses" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">WPScan</a>{" "}
                        tracks over 50,000 documented vulnerabilities across WordPress core, themes, and plugins. Next.js has no plugin attack surface because it has no plugin system.
                    </BlogText>

                    <BlogHeader id="urgency-2026">Why Migration Is More Urgent in 2026 Than It Was a Year Ago</BlogHeader>
                    <BlogText>
                        Three things changed in April 2026 that pushed the migration question from &quot;should I&quot; to &quot;when&quot;.
                    </BlogText>

                    <BlogText>
                        <BlogHighlight>First, WordPress&apos;s own founder publicly admitted the platform has lost its way.</BlogHighlight> On April 14, 2026, Matt Mullenweg posted in the WordPress core-committers Slack channel that{" "}
                        <a href="https://www.therepository.email/matt-mullenweg-says-the-wheels-have-fallen-off-in-wide-ranging-wordpress-critique" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">&quot;the wheels have fallen off&quot;</a>. His exact words, verified and reported by The Repository:
                    </BlogText>

                    <BlogQuote>
                        We are not being killed by competition, I believe we have done this to ourselves. We did it by blindly following rules and ideals to a point when they became iatrogenic.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">Matt Mullenweg, WordPress founder, internal Slack post, April 14, 2026 · <a href="https://www.therepository.email/matt-mullenweg-says-the-wheels-have-fallen-off-in-wide-ranging-wordpress-critique" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source →</a></p>

                    <BlogQuote>
                        When Cloudflare can ship the entire functionality of WordPress, and then some, in 2 months, we can take longer than that to almost not ship one sub-menu of our Settings screen. That is an input and a save button, stored in a meta field.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">Matt Mullenweg, comparing WordPress velocity to Cloudflare&apos;s EmDash CMS, April 14, 2026 · <a href="https://www.therepository.email/matt-mullenweg-says-the-wheels-have-fallen-off-in-wide-ranging-wordpress-critique" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source →</a></p>

                    <BlogText>
                        The community response on{" "}
                        <a href="https://www.reddit.com/r/Wordpress/comments/1sm8h38/continuing_the_trend_matt_mullenweg_says_the/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">r/Wordpress (151 upvotes, 107 comments)</a>{" "}
                        was overwhelmingly &quot;we have been telling you this for years&quot;. The top reply: <em>&quot;The dictator, who micromanaged the project for two decades, says community is to blame for the results.&quot;</em>
                    </BlogText>

                    <BlogText>
                        <BlogHighlight>Second, the April 2026 plugin supply-chain attacks proved how exposed WordPress sites are.</BlogHighlight> In a single week (April 5 to 7, 2026), three documented incidents hit. Someone bought the Essential Plugin suite (31 plugins, ~400,000 active installs) on Flippa for six figures, then planted a backdoor in version 2.6.7 that sat dormant for 8 months before activating, documented by{" "}
                        <a href="https://patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Patchstack</a>{" "}
                        and{" "}
                        <a href="https://techcrunch.com/2026/04/14/someone-planted-backdoors-in-dozens-of-wordpress-plugins-used-in-thousands-of-websites/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">TechCrunch</a>. The same week, Smart Slider 3 Pro (800,000+ installs) was hijacked through a compromised update server, and WowShipping Pro got an unauthenticated remote-code-execution backdoor.
                    </BlogText>

                    <BlogText>
                        <BlogHighlight>Third, the security data is now overwhelming.</BlogHighlight> Patchstack&apos;s State of WordPress Security 2025 report disclosed 7,966 new WordPress vulnerabilities in 2024. 96% of them were in plugins. 43% required zero authentication to exploit. 1,614 plugins were removed from the WordPress.org directory in 2024 for unpatched security issues. 33% of disclosed vulnerabilities never got patched in time.
                    </BlogText>

                    <BlogText>
                        Migration cost is no longer a vanity question about PageSpeed scores. It is a risk-management question. The longer your business site stays on WordPress, the more attack surface you carry. The longer you wait to migrate, the more your migration timeline competes with the next supply-chain incident. The math has shifted.
                    </BlogText>

                    <BlogHeader id="cost-tiers">The 5 Price Tiers, From $2K Brochure to $25K Store</BlogHeader>

                    <p className="text-stone-700 leading-relaxed mb-4">The average price for moving a WordPress site to Next.js is $3,500 for most business sites in 2026. Simple 5-page brochure sites cost $1,500. Mid-size 10 to 20 page sites cost $3,500. WooCommerce stores cost $5,000 to $10,000. Enterprise agencies charge $25,000 or more for retainer-based engagements covering the same scope.</p>

                    <BlogText>
                        Migration cost is driven by four variables: number of pages, custom functionality, data migration complexity, and SEO preservation work. Here is how those variables translate into price tiers.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-300">
                                    <th className="text-left p-3 font-semibold text-stone-700">Tier</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Site Type</th>
                                    <th className="text-right p-3 font-semibold text-cognac">Cost Range</th>
                                    <th className="text-right p-3 font-semibold text-stone-700">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Starter", "1 to 5 pages, simple brochure", "$2,000 to $3,500", "1 to 2 weeks"],
                                    ["Basic", "5 to 15 pages, no custom features", "$3,500 to $8,000", "2 to 3 weeks"],
                                    ["Mid", "15 to 50 pages, blog, forms, integrations", "$8,000 to $15,000", "3 to 5 weeks"],
                                    ["Complex", "50+ pages, WooCommerce, custom post types", "$15,000 to $25,000", "5 to 8 weeks"],
                                    ["Enterprise", "500+ pages, multiple integrations, custom APIs", "$25,000+", "8 to 16 weeks"],
                                ].map(([tier, type, cost, time]) => (
                                    <tr key={tier} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-charcoal font-bold">{tier}</td>
                                        <td data-label="Site Type" className="p-3 text-stone-600">{type}</td>
                                        <td data-label="Cost Range" className="p-3 text-right text-cognac font-bold">{cost}</td>
                                        <td data-label="Timeline" className="p-3 text-right text-stone-500">{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="what-drives-cost">The 6 Line Items That Turn a $5K Quote Into $20K</BlogHeader>
                    <BlogText>
                        The line items that separate a $5,000 migration from a $20,000 one are predictable. Every quote you receive should be justifiable against these factors. AI-assisted development has brought migration timelines down significantly. The AI handles code scaffolding and boilerplate, so developers can focus on the SEO-critical and custom elements.
                    </BlogText>
                    <BlogList items={[
                        "Custom post types and taxonomies: WordPress custom post types built with Advanced Custom Fields (ACF), Pods, or Toolset get rebuilt as typed data structures in Next.js using Sanity or Contentful as the headless CMS. Each custom post type adds 4 to 12 hours of build time.",
                        "WooCommerce: A full WooCommerce migration is effectively a separate e-commerce project. Product catalog, checkout flow, order management, and payment gateway integrations all need to be rebuilt or replaced with a headless solution like Shopify or Stripe. Adds $5,000 to $15,000 to the base cost.",
                        "Number of pages: Migrating content is not just copy-paste. Every page needs SEO metadata, canonical URL mapping, schema markup, and redirect verification. A 200-page blog migration adds 20 to 40 hours of content migration work.",
                        "Third-party integrations: CRM connections (HubSpot, Salesforce), email marketing (Mailchimp, ActiveCampaign), booking systems, and payment processors all need to be rebuilt as API integrations. Each integration adds 4 to 16 hours.",
                        "Redirect mapping: Every changed URL needs a 301 redirect to preserve SEO value. A 100-page site needs 100+ redirects verified. Auditing, mapping, and testing redirects adds 8 to 20 hours on larger sites.",
                        "Design work: If you are rebuilding the visual design (not just porting existing design), add 20 to 60 hours of UI design and component building.",
                    ]} />

                    <BlogText>
                        Running a WooCommerce store specifically? The migration scope is different from a standard WordPress site. See our <Link href="/services/woocommerce" className="text-cognac hover:underline">WooCommerce migration service</Link> for a full breakdown of what the process looks like, what gets rebuilt, and what the typical cost range is.
                    </BlogText>

                    <BlogHeader id="what-is-included">The 8 Things Cheap Quotes Leave Out (And What Skipping Each Costs You)</BlogHeader>
                    <BlogText>
                        Before you accept a quote, verify these items are explicitly included. Agencies that exclude them will charge separately for each. For each item below, the "If skipped" line tells you what it actually costs your business.
                    </BlogText>

                    <div className="space-y-3 my-6">
                        {[
                            {
                                title: "Full URL audit and 301 redirect mapping for every existing page",
                                what: "Every page on your old site gets a permanent forwarding address to its equivalent new URL. Think of it as filing a change-of-address notice with Google for every single page.",
                                skip: "Google treats your new site as a completely unknown website. Every ranking you have built over years resets to zero on launch day. Recovery takes 3 to 12 months.",
                            },
                            {
                                title: "Metadata migration: title tags, meta descriptions, and social share tags",
                                what: "These are the headline and description text Google shows for your pages in search results, and how your pages look when someone shares them on LinkedIn or Facebook. Your current metadata was written to rank. It needs to carry over exactly.",
                                skip: "Google shows auto-generated text in your search listings. Social shares look broken. Your existing click-through rates drop even if your rankings hold.",
                            },
                            {
                                title: "Image optimisation: modern formats, correct sizing, load-on-scroll",
                                what: "Images are converted to faster formats (roughly half the file size) and set to load only when the visitor scrolls to them instead of all at once. This alone accounts for 30 to 60% of typical PageSpeed improvements.",
                                skip: "You paid for a migration and kept the speed problem. Unoptimised images are the single biggest cause of slow mobile scores. Your PageSpeed score on the new site looks no better than the old one.",
                            },
                            {
                                title: "Schema markup: structured data for Google",
                                what: "Hidden code that tells Google exactly what your business is, what each page is about, and how to display enhanced results in search (star ratings, FAQ dropdowns, breadcrumb paths). Competitors with schema get more visual space in search results than competitors without it.",
                                skip: "Google has to guess at your content. You miss rich result eligibility. Competitors with proper schema get larger, more visible search listings for the same keywords you are targeting.",
                            },
                            {
                                title: "Google Search Console setup and sitemap submission post-launch",
                                what: "Google Search Console is a free Google tool that shows you which pages are indexed, what keywords are bringing visitors, and alerts you to any errors. The sitemap is a file that lists every URL on your new site so Google can find them quickly. Without submission, Google has to discover your new pages by crawling the web on its own schedule.",
                                skip: "Google may take 6 to 12 weeks to find and index your new pages on its own. During that window, new pages rank for nothing and organic traffic to new content is zero. For a business that relies on search traffic, this is a significant revenue gap.",
                            },
                            {
                                title: "Core Web Vitals audit before handover (target: 90+ on all three metrics)",
                                what: "A measured test of your site using Google's official speed tools before you receive it. You get a documented PageSpeed score and confirmation the three key metrics (load time, responsiveness, visual stability) all pass Google's threshold.",
                                skip: "You launch, then discover a performance problem, then negotiate who pays to fix it. The audit before handover is your contractual guarantee that the migration delivered what was promised.",
                            },
                            {
                                title: "Zero-downtime DNS cutover: new site live before old site goes down",
                                what: "The technical switch from your old hosting to your new server is done in a specific order so visitors never see an error, blank page, or downtime during the changeover. The new site is tested live before the old one is turned off.",
                                skip: "Your site can go offline for minutes to hours during the switch. Every minute of downtime loses leads. An outage during business hours is also a negative signal Google records in its crawl data.",
                            },
                            {
                                title: "Post-launch monitoring for crawl errors and ranking stability",
                                what: "The first 30 days after a migration are when problems surface: a redirect that was missed, a page Google cannot access, a ranking that dropped unexpectedly. Active monitoring means these are caught and fixed within days instead of months. PandaCodeGen includes 15 days of this on Starter-tier projects and a full month on Growth and above.",
                                skip: "A single missed redirect on a high-traffic page can cause that page to lose all rankings. Without monitoring, you may not notice for weeks. At that point, recovery from a 3-month ranking loss takes another 3 to 6 months.",
                            },
                        ].map(item => (
                            <div key={item.title} className="p-4 border border-stone-100 rounded-xl bg-stone-50">
                                <div className="flex gap-3 items-start mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-cognac mt-0.5 shrink-0" />
                                    <p className="font-semibold text-charcoal text-sm">{item.title}</p>
                                </div>
                                <p className="text-stone-600 text-sm ml-8">{item.what}</p>
                                <div className="flex gap-2 items-start mt-2 ml-8">
                                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    <p className="text-red-700 text-xs"><span className="font-semibold">If skipped:</span> {item.skip}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mid-Article CTA */}
                    <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <p className="font-bold text-charcoal mb-2">Ready to know the exact cost of your WordPress migration?</p>
                        <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We scope your migration live on the call, give you a fixed-price quote, and calculate your break-even point before we hang up.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <QuoteModalButton cta="wp_mid_quote" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-all">
                                Get a Free Migration Quote <ArrowRight className="w-4 h-4" />
                            </QuoteModalButton>
                            <CalModalButton className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-300 text-charcoal font-bold rounded-full text-sm hover:border-charcoal transition-all">
                                Or Book a Call
                            </CalModalButton>
                        </div>
                    </div>

                    <BlogHeader id="timeline">How Long Does a WordPress Migration Take?</BlogHeader>
                    <BlogText>
                        A WordPress migration takes 1 to 2 weeks for a small brochure site (1 to 5 pages), 2 to 3 weeks for a standard business site (5 to 15 pages), 3 to 5 weeks for a mid-complexity site with custom post types and integrations, and 5 to 8 weeks for a WooCommerce or 50+ page site with API integrations. Enterprise migrations with 500+ pages and multiple third-party systems run 8 to 16 weeks.
                    </BlogText>
                    <BlogText>
                        The timeline is driven more by content complexity and integration count than by raw page count. A 30-page site with 8 integrations takes longer than a 100-page blog with none. Client response time is also a major factor: projects with a single decision-maker and 48-hour feedback cycles finish 30 to 50 percent faster than projects with committee review. AI-assisted development has compressed modern timelines significantly compared to 2024 benchmarks.
                    </BlogText>

                    <BlogHeader id="agency-vs-freelance">Freelancer at $5K, Agency at $40K, Same Migration. Here Is Why.</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer: Where Can I Get My WordPress Site Rebuilt Cheap?</p>
                        <p className="text-sm text-stone-700 leading-relaxed">The most affordable legitimate path is PandaCodeGen&apos;s Starter tier at $1,500 with a written 90+ PageSpeed guarantee. Affordable freelance options on Upwork or Toptal range $1,000 to $5,000 with variable quality. Below $1,000 you are usually buying a template installation, not a custom rebuild.</p>
                    </div>

                    <BlogText>
                        The same migration can cost $5,000 with a freelancer, $15,000 with a boutique studio, or $40,000 with a full-service agency. The difference is not always quality. It is overhead, risk management, and what happens when something goes wrong.
                    </BlogText>
                    <BlogList items={[
                        "Freelancer ($3,000 to $12,000): Cheapest option. Risk is highest because you depend on one person. No process guarantees. Good for basic sites where the scope is completely clear and the stakes are low.",
                        "Boutique studio ($8,000 to $25,000): Small specialist teams (2 to 5 people) focused on a specific stack. PandaCodeGen is in this category: Next.js specialists who only do what they are expert at. Better quality control than freelancers, more personal attention than large agencies, faster than either.",
                        "Full-service agency ($20,000 to $80,000+): Highest cost, most process, most overhead. Appropriate for enterprise projects with compliance requirements, multiple stakeholder approvals, and dedicated project management. Often slower than boutique studios due to internal layers.",
                    ]} />
                    <BlogQuote>
                        I have seen $40,000 migrations that broke SEO and $4,000 migrations that tripled organic traffic. Price is not the variable that matters. Process is.
                    </BlogQuote>

                    <BlogHeader id="who-to-hire">Who Should You Hire for a WordPress Migration?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">A handful of agencies specialise in rebuilding WordPress sites on Next.js while preserving SEO and content. Each fits a different scope, budget, and engagement model. Pagepro and Naturaily run retainer-based engagements with $25K+ minimums. Blazity targets enterprise CTOs at $10K+ minimum. PandaCodeGen specialises in fixed-price WordPress migrations under $25K with a written 90+ PageSpeed guarantee.</p>
                    </div>

                    <BlogText>
                        Most businesses comparing WordPress migration quotes are choosing between freelancers, boutique studios, and full-service agencies. Here is how the most-cited Next.js specialist agencies compare for WordPress to Next.js migration work specifically:
                    </BlogText>

                    <p className="text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                    <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-xs border-collapse min-w-[580px]">
                            <thead>
                                <tr className="bg-stone-100">
                                    <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Agency</th>
                                    <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Best For</th>
                                    <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Pricing Model</th>
                                    <th className="text-left p-3 font-bold text-charcoal border border-stone-300">PageSpeed Guarantee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-stone-50">
                                    <td className="p-2 border border-stone-300 font-medium text-cognac">PandaCodeGen</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Fixed-scope WordPress migrations under $25K</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Fixed price from $1,500</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">90+ or 100% refund (in writing)</td>
                                </tr>
                                <tr className="hover:bg-stone-50 bg-stone-50/50">
                                    <td className="p-2 border border-stone-300 font-medium text-charcoal">Pagepro</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Long-term Next.js + Sanity retainer teams</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Retainer, $25K+ minimum</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">No (92% retention claim)</td>
                                </tr>
                                <tr className="hover:bg-stone-50">
                                    <td className="p-2 border border-stone-300 font-medium text-charcoal">Naturaily</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Full-service design + Next.js + Shopify Plus</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Retainer, $25K+ minimum</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">No (95% on-estimate claim)</td>
                                </tr>
                                <tr className="hover:bg-stone-50 bg-stone-50/50">
                                    <td className="p-2 border border-stone-300 font-medium text-charcoal">Blazity</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Enterprise CTOs with AI-native Next.js platforms</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">Retainer, $10K+ minimum</td>
                                    <td className="p-2 border border-stone-300 text-stone-600">No (12-hour response time)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Pagepro, Naturaily, and Blazity are all strong Polish Next.js agencies with verified Clutch reviews. They fit teams that need long-term retainer engineering capacity at $10,000 to $50,000 per month in budget. For most WordPress migrations, the project scope is a 5 to 50 page business site or content publication. That scope fits a fixed-price specialist rather than a retainer team.
                    </BlogText>

                    <BlogHeader id="how-to-choose">How to Choose Between These Options</BlogHeader>

                    <BlogText>
                        If your project is under 50 pages and performance is the priority, a smaller specialist team is usually the fastest and most cost-efficient option. Fixed-price scopes ship in 3 to 5 weeks because there are no billable strategy phases or multi-stakeholder review cycles eating the timeline.
                    </BlogText>

                    <BlogText>
                        If you are managing a larger WordPress site with custom post types, multilingual setups, headless WooCommerce, or compliance requirements, a larger agency structure with dedicated project management may make more sense despite the higher cost. The retainer model is built for ongoing engineering capacity, not one-off migrations.
                    </BlogText>

                    <BlogText>
                        The key difference is not which agency is best. It is which cost structure and workflow matches your project. For a side-by-side breakdown including hourly rates, minimum project sizes, and case study metrics, see our full <Link href="/blog/pagepro-alternatives" className="text-cognac hover:underline font-medium">Pagepro alternatives comparison</Link>.
                    </BlogText>

                    <BlogText>
                        The fastest way to evaluate any WordPress to Next.js developer or agency: ask them to share three live client URLs they have shipped, then run all three through Google PageSpeed Insights yourself. If two of three score 90+ on mobile, they know what they are doing. If most score 70 or below, no amount of pitching will fix the underlying skill gap.
                    </BlogText>

                    <BlogHeader id="roi-calculation">How Do You Calculate Migration ROI?</BlogHeader>
                    <BlogText>
                        Migration ROI comes from three sources: reduced ongoing costs, higher organic traffic from better PageSpeed scores, and increased conversion rates from faster load times.
                    </BlogText>
                    <BlogText>
                        On cost savings: a typical WordPress business site on Kinsta, WP Engine, Flywheel, or SiteGround costs $200 to $600/month in hosting, plus plugin licenses (ACF Pro $249/yr, Elementor Pro $59/yr, Divi $89/yr, WP Rocket $59/yr, Yoast Premium $99/yr, RankMath PRO $59/yr), security scanning, and maintenance retainers. A Next.js site on Vercel costs $0 to $20/month. Annual saving: $2,400 to $7,200 per year.
                    </BlogText>
                    <BlogText>
                        On traffic: improving PageSpeed Mobile from 45 to 95 typically corresponds to a 15 to 40% improvement in organic search visibility over 3 to 6 months, based on observed results across client migrations. Google directly rewards Core Web Vitals improvement in its ranking algorithm as confirmed in their{" "}
                        <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Core Web Vitals documentation</a>.
                    </BlogText>
                    <BlogText>
                        On conversions:{" "}
                        <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Deloitte research</a>{" "}
                        found a 0.1-second improvement in load time increases conversion rates by 8%. Moving from a 3.5-second WordPress load to a 0.8-second Next.js load is a 2.7-second improvement, which corresponds to a 20 to 30% conversion rate lift for most sites.
                    </BlogText>
                    <BlogText>
                        Quick ROI model: take your current annual WordPress operating cost, add 20% of your current annual organic revenue (conservative estimate of traffic and conversion improvement), and compare the sum to migration cost. Most business sites with $5,000 or more in annual operating costs recover a $10,000 migration within 18 months. To see what those PageSpeed gains look like in practice, read our guide on <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">hitting a 90+ PageSpeed score</Link>.
                    </BlogText>

                    <BlogHeader id="hidden-costs">4 Line Items That Get Bolted On After You Sign</BlogHeader>
                    <BlogText>
                        Quotes that look low often exclude these items. Ask about each one explicitly before signing.
                    </BlogText>
                    <BlogList items={[
                        "Content editing during migration: if your content needs rewriting, updating, or restructuring during migration, this is billed separately by most studios.",
                        "Headless CMS setup: if you want editors to update content without a developer, setting up Sanity or Contentful adds $500 to $2,000 depending on content model complexity.",
                        "Email and form infrastructure: replacing WordPress contact forms and transactional email (usually handled by plugins) with server-side API routes and services like Resend adds 4 to 8 hours.",
                        "Ongoing maintenance contract: unlike WordPress where plugins need constant updates and security patches, Next.js sites need minimal maintenance. But make sure you know what post-launch support looks like and what it costs.",
                    ]} />

                    <BlogHeader id="when-not-to-migrate">When You Should Stay on WordPress (Honestly)</BlogHeader>
                    <BlogText>
                        Migration is not always the right answer. There are cases where staying on WordPress makes more sense.
                    </BlogText>
                    <BlogList items={[
                        "You have a large editorial team who depend on the WordPress admin interface and have no budget or appetite to learn a new CMS.",
                        "Your site is primarily a content operation with hundreds of non-technical contributors. WordPress gutenberg editor is genuinely better for this use case than most developer-first alternatives.",
                        "You are operating on a very tight budget and your current site is performing adequately. A $10,000 migration does not make sense if your current costs are $50/month and organic traffic is healthy.",
                        "Your business model is primarily WordPress-dependent (WordPress development agency, WordPress theme/plugin developer). Your clients expect you to know WordPress.",
                    ]} />
                    <BlogText>
                        If none of these apply, and your site is slow, expensive to maintain, and underperforming on organic search, migration is almost certainly the right move. The question is timing and budget, not whether.
                    </BlogText>

                    <BlogHeader id="pandacodegen-migration">What Does a PandaCodeGen Migration Include?</BlogHeader>
                    <BlogText>
                        Our{" "}
                        <Link href="/services/wordpress-migration?ref=blog/wordpress-migration-cost" className="text-cognac hover:underline font-medium">WordPress migration service</Link>{" "}
                        covers the full scope: audit, architecture, build, SEO preservation, launch, and post-launch monitoring (15 days on Starter, 30 days on Growth and above). We guarantee your new site will score at least 90/100 on Google PageSpeed Mobile, or we continue working until it does.
                    </BlogText>
                    <BlogText>
                        Every migration includes a full URL-to-redirect map, schema markup implementation, Vercel deployment with edge caching, and a detailed handover document. For example, MC Patches LLC completed their full WordPress to Next.js migration for a fixed price with no hidden fees. The project included UI design assistance and unlimited revisions at no extra charge. Matt Conner, the owner, rated the experience 5 stars on both Clutch and GoodFirms. We also cover the migration process step by step in our post on{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">how to migrate WordPress to Next.js without losing SEO</Link>.
                    </BlogText>
                    <BlogText>
                        For context on what the new site will outperform, read our{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline font-medium">breakdown of how WordPress plugins destroy PageSpeed</Link>{" "}
                        and{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline font-medium">the full WordPress vs Next.js comparison</Link>.
                    </BlogText>

                    {/* Bottom CTA */}
                    <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <TrendingUp className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Get Your Migration Quote Today</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">We review your current site, identify all scope factors, and give you a precise quote with full line-item breakdown. Free discovery call, 24-hour turnaround.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <QuoteModalButton cta="wp_bottom_quote" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                                Get Your Migration Quote <ArrowRight className="w-4 h-4" />
                            </QuoteModalButton>
                            <CalModalButton className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-bold rounded-full text-sm hover:border-white/40 transition-all">
                                Or Book a Call
                            </CalModalButton>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={migrationCostFAQs} />

                    <section className="mb-10 mt-8 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">For the full PandaCodeGen WordPress migration playbook (4-phase process, 301 redirect mapping, zero-downtime methodology), see the <Link href="/ai-info/migration-services" className="text-cognac hover:underline font-medium">Migration Services reference page</Link>. For tier-by-tier pricing with refund mechanics, see <Link href="/ai-info/pricing-and-guarantees" className="text-cognac hover:underline font-medium">Pricing &amp; Guarantees</Link>. For the three April 2026 events that materially changed WordPress migration urgency, see the <Link href="/blog/wordpress-april-2026-evidence" className="text-cognac hover:underline font-medium">April 2026 evidence dump</Link>.</p>
                    </section>

                    <RelatedPosts currentPostId="wordpress-migration-cost" />

                </article>
            </section>

            <Footer />
        </main>
    );
}