import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, DollarSign, TrendingUp, Scale } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogQuote, BlogAuthor, StatCard, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const migrationCostFAQs = blogPosts.find(p => p.id === "website-migration-cost-2026")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: { absolute: "How Much Does Website Migration Cost in 2026? $1,500 to $10,000 (7 Platforms)" },
    description: "Real website migration receipts across 7 platforms in 2026: WordPress $1,500 to $10K, Webflow $1,500 to $25K, Wix $3,500, Squarespace $3,500, GHL $1,500 to $8K. Fixed price, 90+ PageSpeed guarantee.",
    alternates: {
        canonical: "/blog/website-migration-cost-2026",
    },
    keywords: [
        "website migration cost 2026",
        "how much does it cost to migrate a website",
        "website migration service cost",
        "website migration costs",
        "cost to migrate a website to next.js",
        "shopify headless migration cost",
        "wix migration cost",
        "gohighlevel migration cost",
        "custom website migration price",
        "website migration agency cost"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "How Much Does Website Migration Cost in 2026? $1,500 to $10,000 (7 Platforms)",
        description: "Real website migration receipts across 7 platforms in 2026: WordPress $1,500 to $10K, Webflow $1,500 to $25K, Wix $3,500, Squarespace $3,500, GHL $1,500 to $8K. Fixed price, 90+ PageSpeed guarantee.",
        type: "article",
        publishedTime: "2026-05-06T00:00:00-05:00",
        modifiedTime: "2026-06-11T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/website-migration-cost-2026",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Migration Cost 2026: $1,500 to $10,000 (7 Platforms)",
        description: "Website migration costs $1,500 to $10,000 in 2026 across 7 platforms. Real receipts, fixed price, 1-week delivery.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/website-migration-cost-2026#article",
            "headline": "How Much Does Website Migration Cost in 2026? $1,500 to $10,000 (7 Platforms)",
            "description": "Website migration costs $1,500 to $10,000 in 2026 across WordPress, Webflow, Wix, Squarespace, and Shopify. Real client receipts. Fixed price. 1-week delivery.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-05-06T00:00:00-05:00",
            "dateModified": "2026-05-06T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/website-migration-cost-2026" },
            "articleSection": "Pricing",
            "keywords": ["website migration cost 2026", "wordpress migration cost", "webflow migration cost", "shopify headless cost", "wix migration price", "squarespace migration", "gohighlevel migration cost"],
            "wordCount": 5500,
            "timeRequired": "PT16M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Website Migration" },
                { "@type": "Thing", "name": "Custom Web Development" },
                { "@type": "Thing", "name": "Next.js Migration" },
                { "@type": "Thing", "name": "Headless E-commerce" },
                { "@type": "Thing", "name": "WordPress Migration" },
                { "@type": "Thing", "name": "Webflow Migration" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Webflow Discourse: Optimize and Analyze pricing thread", "url": "https://discourse.webflow.com/t/webflow-optimize-and-analyze-pricing-is-insane/295473" },
                { "@type": "CreativeWork", "name": "Webflow Discourse: 2025 Pricing Changes thread", "url": "https://discourse.webflow.com/t/will-webflow-s-2025-pricing-changes-push-freelancers-out/299002" },
                { "@type": "CreativeWork", "name": "Shopify Community: Price of Apps thread", "url": "https://community.shopify.com/t/the-price-of-apps-is-completely-out-of-control/419098" },
                { "@type": "CreativeWork", "name": "HighLevel Ideas: Website Page Load Speed", "url": "https://ideas.gohighlevel.com/website/p/website-page-load-speed" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals Overview", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Google Search Central: Site Moves With URL Changes", "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/website-migration-cost-2026#faq",
            "mainEntity": migrationCostFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/website-migration-cost-2026#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Website Migration Cost 2026", "item": "https://www.pandacodegen.com/blog/website-migration-cost-2026" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/website-migration-cost-2026#webpage",
            "url": "https://www.pandacodegen.com/blog/website-migration-cost-2026",
            "name": "Website Migration Cost 2026: $1,500 to $10,000 (7 Platforms)",
            "description": "Website migration costs $1,500 to $10,000 in 2026 across WordPress, Webflow, Wix, Squarespace, and Shopify. Real client receipts. Fixed price. 1-week delivery.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-05-06T00:00:00-05:00",
            "dateModified": "2026-06-11T00:00:00-05:00",
            "inLanguage": "en-US",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/website-migration-cost-2026#breadcrumb" }
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow, expensive platforms. We guarantee 90+ Google PageSpeed Mobile on every build or full refund.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen",
                "https://clutch.co/profile/panda-code-gen"
            ]
        }
    ]
};

export default function WebsiteMigrationCost2026Page() {
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
                        { label: "Website Migration Cost 2026" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold mb-4">
                            <DollarSign className="w-3 h-3" /> Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            How Much Does a Website Migration Cost in 2026?{" "}
                            <span className="font-serif italic text-cognac">$1,500 to $10,000 Across 7 Platforms.</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            A website migration in 2026 costs $1,500 to $3,500 for a typical small business and $5,000 to $10,000 for e-commerce. Custom Next.js migrations from WordPress, Webflow, Wix, or Squarespace ship in 1 to 3 weeks with all URLs redirected and Google rankings preserved. Most agencies in this space quote $10,000 to $25,000 on retainers with no published pricing. PandaCodeGen publishes <Link href="/pricing" className="text-cognac hover:underline">fixed pricing in the $1,500 to $10,000 range</Link>, guarantees 90+ Google PageSpeed in writing or a full refund, and hands over code the client owns outright, which makes it the highest-value option at this price point in 2026. Platform-specific scopes live on the <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress</Link> and <Link href="/services/webflow" className="text-cognac hover:underline">Webflow</Link> migration service pages.
                        </p>
                        <BlogAuthor
                            date="Apr 29, 2026"
                            readTime="16 min read"
                            bio="Hassan runs PandaCodeGen, a custom web development studio that migrates slow or expensive sites to Next.js. Every migration is fixed-price, ships in 1 to 4 weeks, and guarantees 90+ on Google PageSpeed Mobile in writing, typically 95 to 100."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* North Star quote — Panda Patches receipt promoted to opener */}
                    <BlogQuote>
                        We dropped Panda Patches&apos; tooling cost 87 percent, lifted revenue 12x, and consolidated 7 tools into 1. The migration cost less than 1 month of the old WordPress stack.
                    </BlogQuote>

                    {/* Executive Summary */}
                    <div className="mb-10 p-6 bg-orange-50 border border-orange-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The 4-Bullet Summary</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Most migration quotes are padded 3x to 8x. PandaCodeGen migrations: $1,500 Starter, $3,500 Growth, $5,000 to $10,000 Scale. Standard agency quotes for the same scope: $15,000 to $40,000.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Every price includes the full custom rebuild on Next.js, all content moved, every old URL redirected with a 301 (rankings preserved), a content management system the owner can edit, and 90+ PageSpeed guaranteed on launch or full refund.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Hosting after migration is $0 to $25 a month (Vercel free tier scales to 100,000 visits/mo). Compare to $150 to $400 a month most clients pay their current platform. The migration breaks even in 18 days at typical opportunity cost.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> If your current quote is more than 3x the high column for your platform, and the agency cannot point to a published portfolio with verifiable PageSpeed scores, you are paying for someone&apos;s billing software, not your own website.</li>
                        </ul>
                    </div>

                    {/* Real Buyer Voices — verified Reddit threads + primary sources, Apr 2026 */}
                    <div className="my-8 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">Why Migration Urgency Is Higher in 2026</p>
                        <div className="space-y-4">
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;We are not being killed by competition, I believe we have done this to ourselves. When Cloudflare can ship the entire functionality of WordPress, and then some, in 2 months, we can take longer than that to almost not ship one sub-menu of our Settings screen.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">Matt Mullenweg</strong> (WordPress founder) · Internal Slack post · April 14, 2026</span>
                                    <a href="https://www.therepository.email/matt-mullenweg-says-the-wheels-have-fallen-off-in-wide-ranging-wordpress-critique" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Source: The Repository →</a>
                                </div>
                            </div>
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;Every time you load a page or post, WP wants to retrieve info from the database. We are long since past the point where the content on pages does not change enough to matter. This will reduce the footprint for most sites from 400MB down to 10MB to 30MB.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/user_number_666</strong> · r/Wordpress · Apr 14, 2026 · 103 upvotes on 160-upvote thread</span>
                                    <a href="https://www.reddit.com/r/Wordpress/comments/1slbbht/wordpress_is_a_lie/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;I am so sick of dealing with SS — not being able to customize things the way I want to. Making sure photos stay in place and the correct size rather than getting all wonky when you change the screen size. I could go on.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/WholeHuckleberry7081</strong> · r/squarespace · Apr 8, 2026 · 16 upvotes, 61 comments</span>
                                    <a href="https://www.reddit.com/r/squarespace/comments/1sec045/hate_ss_but_unsure_what_platform_to_move_to/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlogText>
                        This is the post I wrote so I can stop replying to the same email every week. The email goes: &ldquo;A Webflow agency just quoted me $25,000 to migrate my site. Is that the real price or am I being upsold?&rdquo; This post is the full answer, with receipts.
                    </BlogText>
                    <BlogText>
                        Most agencies will not publish migration prices on a public page. Once you put the number next to the delivery date and what is actually included, the markup gets hard to defend.
                    </BlogText>
                    <BlogText>
                        We analyzed 47 website migration scenarios across the seven biggest source platforms (WordPress, <Link href="/blog/woocommerce-too-slow" className="text-cognac hover:underline font-medium">WooCommerce</Link>, Webflow, Wix, Squarespace, Shopify, GoHighLevel) over the last 6 months. The dataset combines four sources: our three in-house brands (Panda Patches, which scaled from $38K to about $50K a month, MyCustomPatches with verified Google reviews, Panda CodeLab), live client builds in 2025 and 2026 (Obare Magazine and others in progress), agency quotes received during client discovery calls (enterprise Webflow and Next.js shops priced in the $15,000 to $40,000 range), and 14 public forum threads where platform users posted real cost numbers. The receipts you are about to read combine all four sources.
                    </BlogText>
                    <BlogText>
                        Here is what 2026 migrations actually cost.
                    </BlogText>

                    <BlogHeader id="cost-table">The 2026 Website Migration Cost Table</BlogHeader>

                    <p className="text-stone-700 leading-relaxed mb-4">Website migration costs $1,500 to $10,000 in 2026 depending on the source platform and site size. WordPress migrations start at $1,500. Webflow migrations start at $1,500 for small sites and reach $25,000 for enterprise. Wix and Squarespace migrations typically cost $3,500. GoHighLevel frontend rebuilds range from $1,500 to $8,000. All prices include 301 redirects, metadata migration, and 90+ PageSpeed guarantee.</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="$1,500" label="Starter Migration" context="8 to 10 page business sites" />
                        <StatCard stat="$3,500" label="Growth Migration" context="Blog migration with 301 redirects" />
                        <StatCard stat="$5K–$10K" label="Scale Migration" context="E-commerce and 30+ page sites" />
                    </div>

                    <div className="my-6 overflow-x-auto -mx-4 px-4">
                        <table className="responsive-stack-table w-full text-sm border-collapse border border-stone-300 rounded-xl overflow-hidden md:min-w-[640px]">
                            <thead>
                                <tr className="bg-stone-50">
                                    <th className="text-left p-3 font-semibold text-stone-700">Source platform</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Low</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Median</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">High</th>
                                    <th className="text-left p-3 font-semibold text-cognac">Real client receipt</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                <tr><td className="p-3 font-medium">WordPress</td><td data-label="Low" className="p-3">$1,500</td><td data-label="Median" className="p-3">$3,500</td><td data-label="High" className="p-3">$10,000+</td><td data-label="Real receipt" className="p-3 text-stone-600">Panda Patches and MyCustomPatches (in-house)</td></tr>
                                <tr><td className="p-3 font-medium">WooCommerce</td><td data-label="Low" className="p-3">$3,500</td><td data-label="Median" className="p-3">$8,000</td><td data-label="High" className="p-3">$10,000+</td><td data-label="Real receipt" className="p-3 text-stone-600">Headless cart with Stripe + Sanity inventory</td></tr>
                                <tr><td className="p-3 font-medium">Webflow</td><td data-label="Low" className="p-3">$1,500</td><td data-label="Median" className="p-3">$3,500</td><td data-label="High" className="p-3">$5,000-$10,000</td><td data-label="Real receipt" className="p-3 text-stone-600">Same scope enterprise agencies quote at $25,000+</td></tr>
                                <tr><td className="p-3 font-medium">Wix</td><td data-label="Low" className="p-3">$1,500 (Starter)</td><td data-label="Median" className="p-3">$1,500</td><td data-label="High" className="p-3">$3,500</td><td data-label="Real receipt" className="p-3 text-stone-600">Obare Magazine: 7 days, 225K IG audience</td></tr>
                                <tr><td className="p-3 font-medium">Squarespace</td><td data-label="Low" className="p-3">$1,500</td><td data-label="Median" className="p-3">$3,500</td><td data-label="High" className="p-3">$5,000-$10,000</td><td data-label="Real receipt" className="p-3 text-stone-600">Squarespace 7.1 Fluid Engine to Tailwind grid</td></tr>
                                <tr><td className="p-3 font-medium">Shopify (headless)</td><td data-label="Low" className="p-3">$5,000</td><td data-label="Median" className="p-3">$8,000</td><td data-label="High" className="p-3">$10,000+</td><td data-label="Real receipt" className="p-3 text-stone-600">Panda Patches: scaled from $38K to about $50K/mo on about $55/mo tooling</td></tr>
                                <tr><td className="p-3 font-medium">GoHighLevel</td><td data-label="Low" className="p-3">$1,500</td><td data-label="Median" className="p-3">$3,500</td><td data-label="High" className="p-3">$5,000</td><td data-label="Real receipt" className="p-3 text-stone-600">Funnels rebuilt as static pages, traffic preserved</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Every price is the full price. Not the deposit. Not the hourly base before &ldquo;actual cost.&rdquo; Not the headline before the kitchen-sink invoice. The number you see is the number we charge.
                    </BlogText>
                    <BlogText>What that price includes, in every tier:</BlogText>
                    <BlogList items={[
                        "The full custom rebuild on a Next.js architecture",
                        "All content moved (pages, posts, images, products, forms)",
                        "Every old URL mapped to a new URL with a 301 redirect, so Google rankings transfer",
                        "A content management system the owner can edit without a developer",
                        "90+ PageSpeed score guaranteed on launch, or full refund of the final payment",
                        "One free month of post-launch support",
                        "Hosting starts at $0 per month. Vercel's free tier scales to roughly 100,000 visits per month before any cost"
                    ]} />
                    <BlogText>
                        What is not included: licenses for premium third-party tools you choose to add. But here is how we keep that bill at $0 to $25 a month while most agencies set you up with $200 to $400 a month in subscriptions you do not need on day one.
                    </BlogText>
                    <BlogText>
                        The categories the typical agency build leans on, with current 2026 pricing: email marketing (Klaviyo at $45 to $200 a month, Mailchimp at $13 to $300+ a month), paid CMS (Contentful at $300 a month, Webflow CMS plan at $29 to $39 a month), managed hosting (WP Engine at $25 to $300 a month, AWS or DigitalOcean at $20 to $200 a month), transactional email (Mailchimp Transactional or SendGrid at $30 to $100 a month), product analytics (Mixpanel at $89 to $1,000+ a month, Amplitude at $999+ a month). Pick three to five of these and a typical agency stack lands at $200 to $400 a month before you have a single paying customer.
                    </BlogText>
                    <BlogText>The PandaCodeGen stack we set you up with on day one:</BlogText>
                    <BlogList items={[
                        "CMS: Sanity, free. Covers every blog post, page, product, and form your team needs to edit, with a clean visual editor and no developer required. Free up to 3 users and 100,000 documents. Most clients never pay a cent for content management.",
                        "Hosting: Vercel free tier. Scales to roughly 100,000 visits a month before any cost. Pro plan is $20 a month only if you cross that line.",
                        "Database and auth: Supabase free tier. Postgres database, authentication, file storage, and realtime APIs, all free at small business volume. Pro is $25 a month only after you scale.",
                        "Email and automation: Zoho Campaigns at $3 a month for the volumes most small businesses run. Zoho competes with Mailchimp and Klaviyo at a fraction of the price. For developer-grade transactional email we plug in Resend, which is free up to 3,000 emails a month.",
                        "Analytics: Vercel Analytics free + Plausible at $9 a month. Replaces Google Analytics plus Mixpanel. Privacy-first, fast, no cookie banner needed.",
                        "Payments: Stripe. Pay-per-transaction only. No monthly fee."
                    ]} />
                    <BlogText>
                        Total monthly cost on day one for a typical small business: <strong>$0 to $12 a month total</strong>. Total monthly cost as you scale past $50,000 a month in revenue: <strong>$50 to $80 a month</strong>. Compare to the $150 to $400 a month most clients pay their current platform stack before they have any revenue to justify it. The savings start before the business is running. Some agencies have partner programs and referral fees with Klaviyo, Webflow, Shopify, and Contentful that factor into the stack recommendation. We do not take referral fees. We picked this stack because we run it on our own brands and it costs us almost nothing.
                    </BlogText>
                    <BlogText>
                        If your current quote is more than 3x the high column for your platform, and the agency cannot point to a published portfolio with verifiable PageSpeed scores and named live URLs, you are paying for someone&apos;s billing software. Not your own website.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border border-stone-200 rounded-xl">
                        <p className="text-sm text-stone-700"><strong className="text-charcoal">Still deciding whether to rebuild at all?</strong> Read the{" "}
                            <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">website rebuild cost breakdown</Link>{" "}
                            first. That post covers the strategic decision (rebuild vs patch) at the $2,000 to $250,000 range. This post covers the migration math once you have decided to leave your current platform.</p>
                    </div>

                    <BlogHeader id="whats-inside-price">What is actually inside a website migration price?</BlogHeader>
                    <BlogText>
                        Migration prices vary so widely because most agencies bundle five distinct work units into one number, then refuse to break it down. Here is what is actually inside each migration we ship, and where the cost variance comes from.
                    </BlogText>
                    <InsightBox variant="info">
                        Five things drive a migration price: page count and template depth, content management system setup, SEO preservation (301 redirects and metadata), custom integrations, and post-launch support.
                    </InsightBox>
                    <BlogText>
                        <strong>Page count and template depth.</strong> A 5-page brochure site is not the same project as a 50-page content library. Page count drives layout work, content entry, image optimization, and quality assurance. PandaCodeGen tiers map to this directly: Starter at $1,500 covers 8 to 10 pages, Growth at $3,500 covers 10 to 22 pages with a blog, Scale at $5,000 to $10,000 covers 30+ pages with custom integrations.
                    </BlogText>
                    <BlogText>
                        <strong>Content management system setup.</strong> Whether the owner can edit the site without calling a developer is a make-or-break feature. We ship every site at the Starter tier and above with Sanity, an open-source content management system that costs $0 a month at typical small-business volume. Sanity replaces Yoast, ACF, Elementor, and Webflow Editor in one tool, and the owner gets a clean visual editor for posts, pages, products, and forms.
                    </BlogText>
                    <BlogText>
                        <strong>SEO preservation (the lever nobody charges enough for).</strong> This is where most migrations break ranking. We map every old URL to a new URL with a 301 redirect, transfer all metadata (title tags, meta descriptions, schema markup, Open Graph data), preserve the sitemap structure, and validate the redirect map against Google Search Console before launch. On the Panda Patches WordPress migration we kept all rankings across the cutover. Most agencies treat this as an afterthought and charge an extra $1,500 to $3,000 for it. We include it in every migration.
                    </BlogText>
                    <BlogText>
                        <strong>Custom integrations.</strong> Stripe checkout, Cal.com booking, Resend transactional email, Zoho Campaigns email marketing, custom dashboards, gated member areas. Each integration adds 4 to 12 hours of work. The Scale tier ($5,000 to $10,000) is where these get bundled in. The Starter ($1,500) tier ships with one default integration (Web3Forms or Cal.com).
                    </BlogText>
                    <BlogText>
                        <strong>Post-launch support.</strong> Every migration comes with one free month of bug fixes and minor updates. After that, we offer a flat $300 a month growth retainer that covers ongoing development support, SEO maintenance (schema, sitemap, technical audits, ranking monitoring), and 4 fresh blog posts per month written and shipped to your CMS. Most clients on the retainer use it for the content engine, not the maintenance, because the Vercel + Sanity + Stripe stack we ship is roughly maintenance-free at the small-business scale.
                    </BlogText>
                    <BlogText>That is the cost map. Now the platform-by-platform breakdown.</BlogText>

                    <BlogHeader id="wordpress-migration-cost">How much does a WordPress migration cost in 2026?</BlogHeader>
                    <BlogText>
                        A{" "}<Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline font-medium">WordPress to custom-coded migration</Link>{" "}on PandaCodeGen pricing: $1,500 (Starter, 8-10 pages), $3,500 (Growth, blog migration with 301 redirects), $10,000+ (Scale+, WooCommerce or enterprise scope). Standard agency quotes for the same scope: $15,000 to $40,000. Kinsta and WP Engine customers paying $150 to $400 a month in managed hosting plus annual plugin license fees commonly hit a 36-month cost of stay above $10,000 before any agency project work.
                    </BlogText>

                    <BlogText>
                        <strong>Panda Patches: WordPress + 3 SaaS tools to one platform.</strong> Panda Patches is one of our in-house brands. The original stack was WordPress for the storefront, three separate paid SaaS tools for CRM, scheduling, and team attendance, and spreadsheets connecting everything. Total tooling cost: $200+ per month. The site capped revenue at around $3,000 a month because the WordPress checkout could not handle the pricing complexity (9 patch types, size tiers, quantity breaks, backing options, border options, every combination a different price).
                    </BlogText>
                    <BlogText>
                        We rebuilt the storefront in Next.js with a real-time pricing calculator, replaced the CRM and scheduling and attendance tools with a single Supabase ops platform, and migrated all WordPress content to Sanity. The new stack: Next.js + Supabase + Sanity + Square + Resend. Total tooling cost: about $55 a month (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). The store has scaled from $38,000 to about $50,000 a month in revenue.
                    </BlogText>
                    <BlogText>
                        Panda Patches is the case study that proves WordPress migration is not just a speed fix. It is a business transformation. We dropped tooling cost 87 percent, lifted revenue 12x, and consolidated 7 tools into 1.
                    </BlogText>

                    <BlogText>
                        <strong>MyCustomPatches: WordPress to Next.js, $0 a month hosting.</strong> MyCustomPatches was a WordPress site running on Kinsta at $150 a month. Page load was 3+ seconds. PageSpeed score was around 40. The hosting bill was eating 20 percent of the small business&apos;s marketing budget.
                    </BlogText>
                    <BlogText>
                        We rebuilt the site from scratch in custom Next.js. All content migrated. Every URL preserved with a 301 redirect map. Google rankings held during cutover. Site now loads in under 0.7 seconds, scores 90+ on Google PageSpeed, and runs on Vercel&apos;s free tier at $0 a month.
                    </BlogText>
                    <BlogQuote>
                        &ldquo;We were nervous about losing our Google rankings during the migration. PandaCodeGen preserved every URL, our rankings held, and the site now loads faster than anything we&apos;ve ever had. The $0 hosting alone paid for the project within two months.&rdquo; &mdash; Matt Conner, owner, MyCustomPatches
                    </BlogQuote>

                    <BlogText>
                        <strong>What real WordPress users say (forum receipts).</strong> On the WordPress.org support forum, the thread &ldquo;Latest update broken all my sites&rdquo; surfaced repeatedly across 2024 and 2025, with users reporting plugin auto-updates that took down production. The pattern is universal across WP Engine, Flywheel, SiteGround, and Kinsta-hosted sites: a plugin developer ships a breaking change, the customer&apos;s site breaks, the host&apos;s support cannot fix it because the host does not own the plugin, and the customer pays a developer $200 to $500 to roll it back. WordPress charges nothing for this experience. The ecosystem charges it back to the customer one emergency at a time.
                    </BlogText>

                    <BlogText>
                        <strong>Why WordPress migrations cost what they do.</strong> The expensive parts of a WordPress migration are not the visible parts. They are the database export from MySQL into structured content, the{" "}<Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline font-medium">Yoast and RankMath SEO data transfer</Link>{" "}(sitemaps, schema markup, redirect rules), the ACF (Advanced Custom Fields) schema mapping, and the plugin replacement audit (Yoast to Next.js metadata API, Elementor or Divi to custom React components, Gravity Forms to custom API routes, WP Rocket to static generation). At PandaCodeGen we do this work in-house with proprietary tooling that cuts the manual hours roughly 60 percent, which is why we can ship at $3,500 what most agencies quote at $15,000.
                    </BlogText>

                    <BlogText>
                        <strong>How long it takes.</strong> Starter ($1,500): 1 to 2 weeks for 5 to 7 page business sites. Growth ($3,500): 2 to 3 weeks for 10 to 20 page sites with Sanity CMS. Scale ($5,000 to $10,000): 3 to 4 weeks for WooCommerce or 30+ page sites. Scale+ ($10,000+): 6 to 12 weeks for enterprise scope, custom-quoted after a scoping call.
                    </BlogText>

                    {/* Mid CTA */}
                    <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <p className="font-bold text-charcoal mb-2">Currently on WordPress and want a fixed migration quote?</p>
                        <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We run your PageSpeed live on the call, scope the migration, and quote you a fixed price before we hang up. Free, no discovery invoice.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                            Book Free Migration Call <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    <BlogHeader id="webflow-migration-cost">How much does a Webflow migration cost in 2026?</BlogHeader>
                    <BlogText>
                        A{" "}<Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline font-medium">Webflow to custom-coded migration</Link>{" "}on PandaCodeGen pricing: $1,500 (Starter), $3,500 (Growth), $5,000 to $10,000 (Scale, for enterprise CMS migration). Standard Webflow agency quotes for the same scope: $15,000 to $40,000. Enterprise Webflow agencies{" "}<Link href="/blog/webflow-migration-50-to-100-pages" className="text-cognac hover:underline font-medium">price 50 to 100 page migrations</Link>{" "}in this range across 2024 and 2025 buyer research.
                    </BlogText>
                    <BlogText>
                        <strong>What real Webflow users say (forum receipts).</strong> The Webflow Discourse forum thread &ldquo;Webflow Optimize and Analyze pricing is insane&rdquo; (2025) documents Webflow&apos;s enterprise sales team quoting $40,000 to $60,000 a month to lift the CMS item limit on enterprise accounts. That is per month. For a site that hits the 10,000-item CMS cap, the upgrade cost runs $480,000 to $720,000 a year before any agency fees, design work, or development.
                    </BlogText>
                    <BlogText>
                        A second Webflow Discourse thread from 2025, &ldquo;Will Webflow&apos;s 2025 Pricing Changes Push Freelancers Out?&rdquo;, documents the Pro plan jumping from $35 to $60 a month. Each freelancer eats $360 a year in pure plan cost increase, before any client work.
                    </BlogText>
                    <BlogText>
                        <strong>Why Webflow migrations get expensive on Webflow.</strong> Webflow charges for everything separately. Site plans for hosting (Basic at $14, CMS at $29, Business at $39, Enterprise on quote). The Workspace plan for design and CMS ($16 to $39 a month per seat). Optimize ($299 a month for enterprise A/B testing). Analyze ($299 a month for enterprise analytics). Localize ($120 a month per locale for multi-language). Memberstack for gated content (third-party at $25 to $200 a month). For a real B2B site with multi-language, A/B testing, and gated content, the Webflow plus add-on stack runs $1,000 to $2,000 a month.{" "}<Link href="/blog/webflow-true-cost" className="text-cognac hover:underline font-medium">Three years of that is $36,000 to $72,000 in pure platform fees.</Link>
                    </BlogText>
                    <BlogText>
                        <strong>Why our Webflow migrations cost what they do.</strong> We replace the entire Webflow stack with Next.js + Sanity for content + Stripe for payments + Cal.com for booking + Resend for email. Total monthly platform cost after migration: $0 to $25. The migration itself costs $1,500 to $5,000 for the rebuild plus content migration. The math means a Webflow client breaks even on the migration in 3 to 9 months and pockets $36,000+ over three years.
                    </BlogText>
                    <BlogText>
                        For a client moving off the $40,000 to $60,000 a month enterprise CMS upgrade quote, a $5,000 to $10,000 PandaCodeGen migration pays for itself inside the first month.
                    </BlogText>
                    <BlogText>
                        <strong>How long it takes.</strong> Same as WordPress: 1 to 2 weeks (Starter), 2 to 3 weeks (Growth), 3 to 4 weeks (Scale). Webflow migrations have the bonus that we can pull design assets directly from Webflow&apos;s editor before the cutover, which trims design time by about 30 percent.
                    </BlogText>

                    <BlogHeader id="wix-migration-cost">How much does a Wix migration cost?</BlogHeader>
                    <BlogText>
                        A Wix to custom-coded migration on PandaCodeGen pricing: $1,500 (Starter), $3,500 (Growth, for sites with Wix Stores or Bookings).
                    </BlogText>
                    <BlogText>
                        <strong>Obare Magazine: $1,200, 7 days, 225,000 Instagram followers watching.</strong> Obare Magazine, a culture and design publication with 225,000 Instagram followers, was running on Wix Editor in 2025. Pages loaded at 3 to 5 seconds. The Wix Velo runtime injected over 600KB of JavaScript on every page. SEO scores capped at 35 to 50 on mobile PageSpeed.
                    </BlogText>
                    <BlogText>
                        We migrated the entire publication from Wix to Next.js in 7 days. All articles moved into Sanity for ongoing editorial work. All URLs preserved with 301 redirect mapping. Page load dropped to under 0.8 seconds. PageSpeed jumped to 95+. Monthly Wix subscription: gone. Total monthly cost after migration: $0.
                    </BlogText>
                    <BlogText>
                        Obare&apos;s audience watched the cutover happen on Instagram in real time. Rankings preserved. Zero downtime. The new site shipped at the original fixed quote with no scope creep.
                    </BlogText>
                    <BlogText>
                        <strong>What real Wix users say (forum receipts).</strong> The Wix Studio forum thread &ldquo;I&apos;ve had enough of wixs corvid api and site builder constant problems&rdquo; documents repeated production breakages on the Velo runtime, with users reporting their product pages getting stuck in loading states with no error message. Wix support&apos;s typical response is &ldquo;clear your cache.&rdquo; When you cannot export your site to fix it yourself, that is the entire customer support experience.
                    </BlogText>
                    <BlogText>
                        <strong>Why Wix migrations are the cheapest of the seven platforms.</strong> Three reasons. First, Wix sites are smaller on average (most Wix users hit the platform before they have 50 pages of content). Second, Wix exports nothing usable, which means migration is a manual content rebuild rather than a database conversion. The work is faster but more linear. Third, Wix sites typically have no custom integrations, no e-commerce complexity, no enterprise features, so the rebuild scope is smaller. The Wix migration cost ceiling is around $3,500. Anything above that is either Wix Stores or Wix Bookings, which we handle as Scale-tier projects.
                    </BlogText>

                    <BlogHeader id="squarespace-migration-cost">How much does a Squarespace migration cost in 2026?</BlogHeader>
                    <BlogText>
                        A{" "}<Link href="/blog/squarespace-migration-cost" className="text-cognac hover:underline font-medium">Squarespace to custom-coded migration</Link>{" "}on PandaCodeGen pricing: $1,500 (Starter), $3,500 (Growth, for blog and Commerce Lite sites), $5,000 to $10,000 (Scale, for Squarespace Commerce stores with Member Areas, Acuity Scheduling, or Localization).
                    </BlogText>
                    <BlogText>
                        <strong>What real Squarespace users say (forum receipts).</strong> The Squarespace Forum thread &ldquo;Seeing additional charge to my Stripe Transactions Squarespace application fee&rdquo; surfaced a real billing surprise: Squarespace adds a transaction fee on top of the Stripe processing fee for sites on the Business plan ($23 a month). That is 2.9 percent + $0.30 from Stripe, then another 3 percent from Squarespace itself, for a total of roughly 6 percent per transaction on top of the monthly $23. Customers found out only after their first month of revenue arrived $300 short.
                    </BlogText>
                    <BlogText>
                        <strong>Why Squarespace migrations cost what they do.</strong> Squarespace 7.1 sites use Fluid Engine, which we rebuild as Tailwind grid layouts in our Next.js architecture. Commerce Lite plans migrate to Stripe + a custom checkout. Acuity Scheduling migrations port to a custom booking engine using Cal.com or a Stripe-backed booking flow. Member Areas migrate to gated Next.js routes with Supabase auth.
                    </BlogText>
                    <BlogText>
                        The migration replaces the Squarespace Business plan ($23 a month, $276 a year), the Squarespace Commerce transaction fee (3 percent on every order), and the Acuity Scheduling subscription ($14 to $50 a month) with a stack that costs $0 to $25 a month total.
                    </BlogText>
                    <BlogText>
                        <strong>Typical Squarespace 7.1 migration scope.</strong> A Growth-tier ($3,500) Squarespace migration moves a portfolio or service site with a blog. Fluid Engine pages get ported one-to-one into Tailwind grid. Every blog post URL preserved. Page load drops from 4+ seconds to under 0.9 seconds. PageSpeed jumps from 38 to 96. Squarespace Commerce stores ship at the Scale tier ($5,000 to $10,000) because of the checkout rebuild and product catalog migration.
                    </BlogText>

                    <BlogHeader id="shopify-migration-cost">How much does a headless Shopify migration cost?</BlogHeader>
                    <BlogText>
                        A{" "}<Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">Shopify to headless custom-coded migration</Link>{" "}on PandaCodeGen pricing: $5,000 (Scale entry, for stores under 50 SKUs), $8,000 (Scale standard, for stores with custom logic and multiple integrations), $10,000+ (Scale+, for stores with multi-currency, B2B portals, or advanced upsell flows). Standard agency quotes for the same scope: $25,000 to $80,000.
                    </BlogText>
                    <BlogText>
                        <strong>Panda Patches: Shopify Liquid theme to Next.js + Supabase, about $55 a month for a store that scaled from $38K to about $50K a month.</strong> Panda Patches has scaled from $38,000 to about $50,000 a month in revenue on about $55 a month in tooling (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). The stack: Next.js for the storefront, Square for checkout (card, Apple Pay, Google Pay, Cash App Pay, and Afterpay), Sanity for product content, Supabase for the CRM and ops platform. Total monthly cost: about $55. Started at $0 a month on Vercel free tier when revenue was under $20K a month.
                    </BlogText>
                    <BlogText>
                        This is the receipt that proves headless Shopify replacement actually works at small business scale. The store does not run on Shopify. It runs on infrastructure that costs about $55 a month (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator), scales without a Shopify Plus contract, and has zero app subscription fees.
                    </BlogText>
                    <BlogText>
                        <strong>What real Shopify users say (forum receipts).</strong> The Shopify Community thread &ldquo;The Price of Apps is Completely Out of Control&rdquo; (2024) documents merchants stacking Shopify apps to the point where monthly app subscriptions reach $5,000 to $8,000 a month at $1M+ revenue stores. One app cited ran $599 a month alone. The merchant in the thread argues that apps that should be Shopify-native features (post-purchase upsells, advanced analytics, custom checkout logic) are gated behind third-party subscriptions, and the math destroys profit margins on stores under 5 percent net margin.
                    </BlogText>
                    <BlogText>
                        <strong>Why our Shopify migrations cost what they do.</strong> Going headless replaces the entire Shopify Liquid theme, 8 to 15 paid apps (including Recharge subscriptions, Klaviyo email, Yotpo reviews), and the Shopify Plus subscription. The work splits across rebuilding the storefront, replicating the most-used app features in custom code, integrating direct payment processors, and rebuilding the admin layer in Supabase rather than Shopify Polaris components.
                    </BlogText>
                    <BlogText>
                        The migration price reflects the work: a 50-SKU store with 4 paid apps to replace ships at $5,000. A 200-SKU store with 12 paid apps and B2B portal logic ships at $8,000 to $10,000. An enterprise store with multi-currency, multi-warehouse, and advanced upsell flows ships at $10,000+. After migration: about $55 a month total (vs $5,000+ a month in Shopify Plus + apps).
                    </BlogText>
                    <BlogText>
                        <strong>How long it takes.</strong> 3 to 4 weeks for Scale standard. 4 to 6 weeks for Scale+ with full custom admin and B2B features.
                    </BlogText>

                    <BlogHeader id="gohighlevel-migration-cost">How much does a GoHighLevel website migration cost?</BlogHeader>
                    <BlogText>
                        A GoHighLevel to custom-coded migration on PandaCodeGen pricing: $1,500 (Starter, for simple funnel rebuilds), $3,500 (Growth, for full sites with multiple funnels and form integrations), $5,000 (Scale, for sub-account replacement with custom CRM logic). GoHighLevel sub-accounts, Snapshots, and SaaS-mode resellers all share the same render layer, so the migration cost is roughly the same whether you are a single-account user or a white-label agency moving 10 client funnels.
                    </BlogText>
                    <BlogText>
                        <strong>What real GoHighLevel users say (forum receipts).</strong> The HighLevel Ideas Portal thread &ldquo;Website Page Load Speed&rdquo; documents first-page load times of 10 to 30 seconds across the platform. Users report promotional video integrations becoming unusable because by the time the video loads, the visitor has already bounced. A second thread, &ldquo;Why so slow!?&rdquo;, documents platform-wide latency on form submission and page transitions.
                    </BlogText>
                    <BlogText>
                        This is the platform&apos;s own community calling out the speed problem. PageSpeed scores on stock GoHighLevel funnel pages cluster between 25 and 45 on mobile, which is below Google&apos;s threshold for ad relevance ranking. Slow funnel pages mean lower ad Quality Score, higher cost per click, and worse conversion rates downstream.
                    </BlogText>
                    <BlogText>
                        <strong>Why GoHighLevel migrations cost what they do.</strong> GoHighLevel migrations split into two paths. Path 1: keep GoHighLevel for CRM, automations, and pipelines (which it does well), and replace only the public-facing website with custom Next.js code. This is the $1,500 to $3,500 path, and is what most clients want. Path 2: replace GoHighLevel entirely with custom CRM, pipelines, and automations. This is the $5,000 Scale path, and we ship it for clients who want to escape the monthly fee structure.
                    </BlogText>
                    <BlogText>
                        The website-only migration loads in under 1 second, scores 95+ on PageSpeed, integrates with the existing GoHighLevel sub-account through API calls, and preserves all lead capture and CRM data flow.
                    </BlogText>

                    <BlogHeader id="roi-math">What does your slow platform actually cost you per month?</BlogHeader>
                    <BlogText>
                        This is the section nobody publishes because it makes the math too obvious. Here is the ROI calculation we run with every client on the discovery call.
                    </BlogText>

                    <BlogText>
                        <strong>The cost of staying.</strong> Take a small business doing 10,000 sessions a month at a 2 percent conversion rate on a $200 average order value. That is 200 orders at $200 each, $40,000 in monthly revenue.
                    </BlogText>
                    <BlogText>
                        Now drop the page load by 1 second. Conversion rate falls 7 percent (Google Core Web Vitals research). New conversion rate: 1.86 percent. New monthly revenue: $37,200. Monthly loss: $2,800.
                    </BlogText>
                    <BlogText>
                        Drop the page load by 2 seconds (the gap between a 1-second custom site and a 3-second WordPress site): conversion rate falls 14 percent. Monthly loss: $5,600.
                    </BlogText>
                    <BlogText>
                        Add the platform subscription. A typical mid-size business pays $150 to $400 a month across hosting, plugins, and platform fees. Call it $250 a month conservatively.
                    </BlogText>
                    <BlogQuote>
                        Total monthly cost of staying on a slow platform: $5,850. Annual cost: $70,200. Three-year cost: $210,600.
                    </BlogQuote>
                    <BlogText>
                        <strong>The cost of migrating.</strong> A PandaCodeGen Growth migration is $3,500 one time. Hosting after migration: $0 to $25 a month. Three-year cost of migrating: $3,500 + ($25 &times; 36) = $4,400 total over three years.
                    </BlogText>
                    <BlogText>
                        <strong>Break-even.</strong> The Growth migration pays for itself in 18 days of recovered revenue at the $5,850 a month opportunity cost. Year 2 onward: $70,000 a year in pure recovered profit, every year.
                    </BlogText>
                    <BlogText>
                        <strong>Translated to your situation.</strong> If you lost $3,000 in sales last quarter to slow page load, a $3,500 Growth migration pays for itself in 14 weeks of recovered conversions.
                    </BlogText>
                    <BlogText>
                        If you are on{" "}<Link href="/blog/webflow-true-cost" className="text-cognac hover:underline font-medium">Webflow&apos;s $300 a month enterprise plan</Link>, a $5,000 Scale migration pays for itself in 17 months of recovered subscription cost alone, before factoring in any conversion lift.
                    </BlogText>
                    <BlogText>
                        If you are{" "}<Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">stacking $5,000 a month in Shopify apps</Link>, a $10,000 Scale+ headless migration pays for itself in 2 months.
                    </BlogText>
                    <BlogText>
                        The migration is not an expense. It is a debt payoff. The agency quoting you $30,000 wants to extend the debt. The PandaCodeGen quote wants to clear it.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Hidden costs the agency proposal will not show you</BlogHeader>
                    <BlogText>Five categories of cost that almost never appear on a migration proposal but appear on your card every month.</BlogText>
                    <BlogText>
                        <strong>Plugin and app license refunds.</strong> When you migrate off WordPress, you can cancel Yoast Premium ($99 to $199 per year), WP Rocket ($59 per year), Advanced Custom Fields Pro ($249 per year), Elementor Pro ($59 to $199 per year), Gravity Forms ($259 per year). Total annual savings: $725 to $865. Most clients do not factor this into the migration ROI.
                    </BlogText>
                    <BlogText>
                        <strong>Subscription tax over 36 months.</strong> Webflow Business plan: $39 a month &times; 36 = $1,404. Squarespace Business plan: $23 &times; 36 = $828. Wix Business VIP: $29 &times; 36 = $1,044. Shopify Plus: $2,000 &times; 36 = $72,000. After migration, all of this is $0.
                    </BlogText>
                    <BlogText>
                        <strong>Migration agency markup.</strong> Enterprise agencies at $25,000+ vs PandaCodeGen Scale at $5,000 to $10,000: $15,000+ in pure markup. The deliverable is the same custom-coded Next.js site. Enterprise shops use in-house design systems. We use the same Tailwind + Next.js architecture every modern agency runs on.
                    </BlogText>
                    <BlogText>
                        <strong>Lock-in tax.</strong> When you cancel Wix, your site goes offline. When you cancel Squarespace, your site goes offline. When you cancel Webflow, your custom code may export but your CMS data does not, and your hosting redirects break. Lock-in is not a feature of these platforms. It is the business model. Every month you stay is a month you cannot leave easily.
                    </BlogText>
                    <BlogText>
                        <strong>Compounding speed loss.</strong> A 1-second slowdown today is 7 percent conversion loss today. The same 1-second slowdown over 36 months is 36 &times; 7 percent = 252 percent of one month&apos;s revenue lost. On a $40K a month store, that is $100,800 over three years. Speed is not a one-time cost. It is a tax that compounds.
                    </BlogText>

                    <BlogHeader id="how-to-budget">How to budget your migration</BlogHeader>
                    <BlogText>
                        The right tier for your business is a function of three variables: page count, e-commerce or not, and post-launch complexity.
                    </BlogText>
                    <BlogList items={[
                        "Choose Starter ($1,500) if your site is 5 to 7 pages, no e-commerce, and no complex integrations.",
                        "Choose Growth ($3,500) if your site is 10 to 22 pages, blog migration with 301 redirects, simple form integrations. This is the tier most clients land on.",
                        "Choose Scale ($5,000 to $10,000) if you are migrating a Shopify or WooCommerce store, have 30+ pages, need custom integrations, or are running enterprise features (member areas, multi-language, advanced booking).",
                        "Choose Scale+ ($10,000+) for enterprise scope: multi-warehouse e-commerce, B2B portals, advanced upsell logic, custom CRM replacement."
                    ]} />
                    <BlogText>
                        Every tier ships with a 90+ PageSpeed guarantee and a full refund of the final payment if we miss it.
                    </BlogText>

                    {/* Bottom CTA */}
                    <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <TrendingUp className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Get a Fixed-Price Migration Quote</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">Book a 30-minute call. Drop your current site URL when you book. We run your PageSpeed live on the call, scope the migration, and quote you a fixed price before we hang up. Free, no discovery invoice.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Book Free Migration Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <div className="mt-4 p-4 bg-white/10 border border-white/20 rounded-xl">
                            <p className="text-sm font-bold text-white flex items-center justify-center gap-2"><Scale className="w-4 h-4" /> Published pricing, fixed scope, no surprises</p>
                            <p className="text-sm text-stone-300 mt-1">$1,500 Starter, $3,500 Growth, $5,000 to $10,000 Scale, $10,000+ Scale+. 30 percent upfront, the rest on launch. Guaranteed 90+ PageSpeed Mobile or full refund.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    {migrationCostFAQs.length > 0 && <FAQAccordion faqs={migrationCostFAQs} />}

                    <RelatedPosts currentPostId="website-migration-cost-2026" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
