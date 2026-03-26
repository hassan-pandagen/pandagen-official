import { ArrowLeft, ArrowRight, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const webflowMigrationFAQs = blogPosts.find(p => p.id === 'webflow-migration-cost')?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamic(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Webflow Migration Cost 2026: Breakdown by Site Size | PandaCodeGen",
    description: "5 to 20 page Webflow site: $3,000 to $7,000. 50 to 100 pages: $12,000 to $20,000. Full cost breakdown by site size, what drives pricing, and ROI.",
    alternates: {
        canonical: '/blog/webflow-migration-cost',
    },
    keywords: ["webflow migration cost", "webflow to next.js cost", "webflow migration pricing", "how much does webflow migration cost", "webflow to custom code", "webflow migration 50 page site", "webflow migration 100 page site"],
    openGraph: {
        title: "Webflow Migration Cost 2026: Full Breakdown by Site Size",
        description: "A 50 to 100 page Webflow site costs $12,000 to $20,000 to migrate to custom code. Here is the full breakdown by site size and when it pays for itself.",
        type: "article",
        publishedTime: "2026-03-25",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/webflow-migration-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Webflow Migration Cost 2026: Full Breakdown by Site Size",
        description: "A 50 to 100 page Webflow site costs $12,000 to $20,000 to migrate to custom code. Full breakdown and ROI analysis.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-cost#article",
            "headline": "How Much Does a Webflow Migration Cost? The 2026 Breakdown by Site Size",
            "description": "A Webflow to Next.js migration costs $3,000 to $20,000 depending on site size. Full cost breakdown by page count, what drives pricing, and ROI analysis.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-25T00:00:00-05:00",
            "dateModified": "2026-03-25T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder & Lead Full-Stack Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/webflow-migration-cost" },
            "articleSection": "Webflow",
            "keywords": ["webflow migration cost", "webflow to Next.js", "webflow migration pricing", "webflow custom code", "website migration cost 2026"],
            "timeRequired": "PT10M",
            "wordCount": 2600,
            "about": [
                { "@type": "Thing", "name": "Webflow Migration" },
                { "@type": "Thing", "name": "Website Migration Cost" },
                { "@type": "Thing", "name": "Next.js" },
                { "@type": "Thing", "name": "Custom Web Development" }
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Webflow Pricing Plans", "url": "https://webflow.com/pricing" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Next.js Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Google Search Central - Page Experience Update", "url": "https://developers.google.com/search/docs/appearance/page-experience" },
                { "@type": "CreativeWork", "name": "Portent Research - Site Speed Impact on Conversion Rates", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Webflow Migration Cost", "item": "https://www.pandacodegen.com/blog/webflow-migration-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/webflow-migration-cost",
            "name": "Webflow Migration Cost 2026: Full Breakdown by Site Size",
            "description": "Full cost breakdown for migrating a Webflow site to custom Next.js by page count, with ROI analysis and what drives pricing.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-03-25T00:00:00-05:00",
            "dateModified": "2026-03-25T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/webflow-migration-cost#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 95 to 100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-cost#faq",
            "mainEntity": [
                { "@type": "Question", "name": "How much does it cost to migrate a Webflow site to custom code?", "acceptedAnswer": { "@type": "Answer", "text": "A Webflow to Next.js migration costs $3,000 to $20,000 depending on site size. Small sites with 5 to 20 pages cost $3,000 to $7,000. Mid-size sites with 20 to 50 pages cost $7,000 to $14,000. Large sites with 50 to 100 pages cost $12,000 to $20,000. Enterprise sites with 100+ pages start at $18,000. The cost range reflects real differences in scope: page count, custom animations, CMS collections, form complexity, and integration work." } },
                { "@type": "Question", "name": "How long does a Webflow to Next.js migration take for a 50-100 page site?", "acceptedAnswer": { "@type": "Answer", "text": "A 50 to 100 page Webflow migration takes 4 to 8 weeks. Week 1 is audit and planning: URL mapping, content inventory, redirect strategy. Weeks 2 to 5 are the build: converting pages, migrating CMS content, rebuilding animations and forms. Week 6 is QA and redirect verification. Weeks 7 to 8 are zero-downtime DNS cutover and post-launch monitoring." } },
                { "@type": "Question", "name": "Will I lose my Google rankings when migrating from Webflow to Next.js?", "acceptedAnswer": { "@type": "Answer", "text": "Not if the migration is done correctly. The critical steps are: map every URL with 301 redirects, preserve all title tags and meta descriptions, maintain canonical URLs, implement equivalent schema markup, and submit a new sitemap to Google Search Console immediately after launch. Rankings hold steady within 30 days and typically improve within 60 to 90 days because Google rewards the faster Core Web Vitals scores that Next.js delivers." } },
                { "@type": "Question", "name": "What is included in a professional Webflow migration?", "acceptedAnswer": { "@type": "Answer", "text": "A complete migration includes: full URL audit and 301 redirect mapping, migration of all metadata (title tags, meta descriptions, canonical URLs, Open Graph tags), content migration from Webflow CMS, image optimisation to WebP format, schema markup implementation for all page types, Google Search Console setup and sitemap submission, Core Web Vitals verification (target 90+ on all three), zero-downtime DNS cutover, and 30-day post-launch monitoring." } },
                { "@type": "Question", "name": "Is migrating from Webflow to Next.js worth the investment?", "acceptedAnswer": { "@type": "Answer", "text": "For most businesses spending $100+/month on Webflow with a PageSpeed Mobile score below 70, migration pays for itself within 12 to 18 months. Hosting savings of $1,200 to $4,700/year, a 15 to 35% organic traffic increase from better Core Web Vitals, and improved conversion rates from faster load times all compound over time." } },
                { "@type": "Question", "name": "How much can I save per year by leaving Webflow?", "acceptedAnswer": { "@type": "Answer", "text": "Moving from Webflow to a custom Next.js site on Vercel saves $1,200 to $4,700 per year in hosting. A typical business on Webflow CMS ($39/month) with form submissions ($19/month) and integrations ($50/month) pays $1,296 to $2,400/year. A custom Next.js site on Vercel costs $0 to $240/year. Over 3 years, the difference is $3,600 to $14,100 in hosting savings alone." } }
            ]
        }
    ]
};

export default function WebflowMigrationCostPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-20 md:pt-32 pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Webflow Migration Cost", href: "/blog/webflow-migration-cost" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">Webflow</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            How Much Does a <span className="font-serif italic text-cognac">Webflow Migration</span> Cost in 2026?
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            A 5 to 20 page site costs $3,000 to $7,000. A 50 to 100 page site costs $12,000 to $20,000. Here is the full breakdown by site size, what drives the price, and exactly when migration pays for itself.
                        </p>

                        <BlogAuthor
                            date="Mar 25, 2026"
                            readTime="10 min read"
                            bio="Hassan has migrated dozens of businesses off Webflow, WordPress, and Shopify to custom Next.js sites that score 95 to 100 on Google PageSpeed. He specialises in migrations that preserve SEO rankings and improve them."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12" data-speakable="true">
                        <h3 className="font-bold text-charcoal mb-4">Key Takeaways</h3>
                        <BlogList items={[
                            "A 5 to 20 page Webflow site costs $3,000 to $7,000 to migrate to custom Next.js.",
                            "A 50 to 100 page Webflow site costs $12,000 to $20,000 depending on CMS complexity and integrations.",
                            "Page count is only one factor. Custom animations, CMS collections, e-commerce, and API integrations each add cost.",
                            "Most businesses spending $100+/month on Webflow recover migration costs within 12 to 18 months through hosting savings and improved SEO.",
                            "Webflow sites score 55 to 75 on Google PageSpeed Mobile. Custom Next.js sites score 95 to 100. The gap costs you real rankings."
                        ]} />
                    </div>

                    <div className="space-y-8">
                        <BlogText>
                            A client came to us in February with a 72-page Webflow site. Their question was direct: "We want to migrate to custom code. What does that actually cost?"
                        </BlogText>

                        <BlogText>
                            After an audit, the answer was $16,000. They had 72 pages across 4 CMS collections, 3 custom form flows, and a Memberstack integration. The migration took 6 weeks. Six months later, their organic traffic was up 38% and their Webflow hosting bill was gone.
                        </BlogText>

                        <BlogText>
                            That is a real example. But it does not answer the question for your site. Migration cost depends on variables that are specific to your build. This article breaks down exactly how those variables translate into dollars, so you can estimate before you talk to anyone.
                        </BlogText>

                        <BlogHeader>The 4 Cost Tiers for Webflow Migration in 2026</BlogHeader>

                        <BlogText>
                            Page count is the starting point. Here is how pricing typically breaks down:
                        </BlogText>

                        {/* Cost Tier Table */}
                        <div className="my-8 overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Site Size</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Pages</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Migration Cost</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Timeline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">Small Business</td>
                                        <td className="p-3 border border-stone-200">5 to 20 pages</td>
                                        <td className="p-3 border border-stone-200 font-bold text-cognac">$3,000 to $7,000</td>
                                        <td className="p-3 border border-stone-200">2 to 3 weeks</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-medium">Mid-Size Site</td>
                                        <td className="p-3 border border-stone-200">20 to 50 pages</td>
                                        <td className="p-3 border border-stone-200 font-bold text-cognac">$7,000 to $14,000</td>
                                        <td className="p-3 border border-stone-200">3 to 5 weeks</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">Large Site</td>
                                        <td className="p-3 border border-stone-200">50 to 100 pages</td>
                                        <td className="p-3 border border-stone-200 font-bold text-cognac">$12,000 to $20,000</td>
                                        <td className="p-3 border border-stone-200">4 to 8 weeks</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-medium">Enterprise</td>
                                        <td className="p-3 border border-stone-200">100+ pages</td>
                                        <td className="p-3 border border-stone-200 font-bold text-cognac">$18,000 to $35,000+</td>
                                        <td className="p-3 border border-stone-200">6 to 12 weeks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            These are ranges, not quotes. Two 60-page sites can cost very different amounts depending on what is in them. The next section explains why.
                        </BlogText>

                        <BlogHeader>What Actually Drives the Cost of a Webflow Migration</BlogHeader>

                        <BlogText>
                            Page count sets the floor. These five factors determine where your project lands in the range or pushes above it:
                        </BlogText>

                        <BlogText>
                            <strong>1. CMS Collections and Content Volume</strong>
                        </BlogText>
                        <BlogText>
                            A 60-page Webflow site with 5 static pages and 55 blog posts is simpler to migrate than a 60-page site with 4 CMS collections, custom fields, and dynamic relationships. Blog content can often be batch-converted. Complex CMS structures require careful data modelling and testing. Add $2,000 to $5,000 for each CMS collection that has custom fields or nested relationships.
                        </BlogText>

                        <BlogText>
                            <strong>2. Custom Animations and Interactions</strong>
                        </BlogText>
                        <BlogText>
                            Webflow's visual animation system is powerful but proprietary. Recreating complex scroll-triggered animations, hover states, and page transitions in custom code takes time. Simple animations: included in base cost. Webflow Interactions-heavy pages: add $1,500 to $4,000 depending on complexity.
                        </BlogText>

                        <BlogText>
                            <strong>3. Third-Party Integrations</strong>
                        </BlogText>
                        <BlogText>
                            Memberstack, Finsweet, Jetboost, custom JavaScript, Zapier webhooks. Each integration that touches Webflow needs to be rebuilt as a proper API connection or replaced with a native solution. Each integration adds $500 to $3,000 depending on how deeply it is woven into your site structure.
                        </BlogText>

                        <BlogText>
                            <strong>4. Forms and Lead Capture</strong>
                        </BlogText>
                        <BlogText>
                            A single contact form: included in base. Multi-step forms with conditional logic, CRM sync, or email automation: add $1,000 to $2,500 per complex form flow. Forms that currently submit to Webflow's form dashboard need to be redirected to a new backend (Resend, HubSpot API, or a custom endpoint).
                        </BlogText>

                        <BlogText>
                            <strong>5. E-Commerce</strong>
                        </BlogText>
                        <BlogText>
                            If you have a Webflow Commerce store, the migration is more complex. Products, variants, orders, and customer data all need to move. Most Webflow Commerce migrations move to a headless Shopify or WooCommerce backend, which adds $5,000 to $10,000 on top of the site migration. For stores with fewer than 50 products and no subscription billing, the cost is on the lower end.
                        </BlogText>

                        <BlogHeader>What a Professional Webflow Migration Should Include</BlogHeader>

                        <BlogText>
                            Not all migration quotes are equal. Before signing anything, verify your quote explicitly covers these items:
                        </BlogText>

                        <div className="grid md:grid-cols-2 gap-4 my-8">
                            {[
                                { icon: CheckCircle2, label: "Full URL audit and 301 redirect map" },
                                { icon: CheckCircle2, label: "Title tags, meta descriptions, canonical URLs migrated" },
                                { icon: CheckCircle2, label: "Open Graph and Twitter card tags transferred" },
                                { icon: CheckCircle2, label: "Schema markup implemented for all page types" },
                                { icon: CheckCircle2, label: "Images converted to WebP with correct sizing" },
                                { icon: CheckCircle2, label: "Google Search Console setup and sitemap submitted" },
                                { icon: CheckCircle2, label: "Core Web Vitals verified at 90+ on all three" },
                                { icon: CheckCircle2, label: "Zero-downtime DNS cutover process" },
                                { icon: CheckCircle2, label: "30-day post-launch crawl error monitoring" },
                                { icon: CheckCircle2, label: "Handover documentation for content updates" },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                                    <Icon className="w-4 h-4 text-cognac mt-0.5 shrink-0" />
                                    <span className="text-sm text-stone-700">{label}</span>
                                </div>
                            ))}
                        </div>

                        <BlogText>
                            If a quote does not specify these items in writing, the cost of fixing missing SEO elements post-launch often exceeds what was saved by going with a cheaper quote.
                        </BlogText>

                        <BlogHeader>The Ongoing Savings: What You Stop Paying After Migration</BlogHeader>

                        <BlogText>
                            Migration cost is a one-time number. What changes permanently is your monthly overhead. Here is what a typical Webflow business site costs versus the same site on custom code:
                        </BlogText>

                        {/* Cost Comparison Table */}
                        <div className="my-8 overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Cost Item</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Webflow (per year)</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Custom Next.js (per year)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200">Hosting</td>
                                        <td className="p-3 border border-stone-200 text-red-600 font-medium">$348 to $588</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">$0 to $240</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200">Form submissions</td>
                                        <td className="p-3 border border-stone-200 text-red-600 font-medium">$228</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">$0</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200">Third-party integrations</td>
                                        <td className="p-3 border border-stone-200 text-red-600 font-medium">$360 to $1,200</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">$0 to $120</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200">Domain</td>
                                        <td className="p-3 border border-stone-200">$12</td>
                                        <td className="p-3 border border-stone-200">$12</td>
                                    </tr>
                                    <tr className="bg-stone-100 font-bold">
                                        <td className="p-3 border border-stone-200">Total per year</td>
                                        <td className="p-3 border border-stone-200 text-red-600">$948 to $2,028</td>
                                        <td className="p-3 border border-stone-200 text-green-700">$12 to $372</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogQuote>
                            Over 3 years, the hosting difference alone saves $2,800 to $5,900. That is before factoring in the revenue from improved Google rankings.
                        </BlogQuote>

                        <BlogHeader>The Speed Gap: Why Webflow Migration Pays for Itself in Rankings</BlogHeader>

                        <BlogText>
                            The financial case for migration is not just about cutting hosting costs. It is about what slower sites cost you in organic traffic every month.
                        </BlogText>

                        <BlogText>
                            Webflow sites score <BlogHighlight>55 to 75 on Google PageSpeed Mobile</BlogHighlight>. Custom Next.js sites score 95 to 100. That 20 to 40 point gap is not cosmetic. Google uses Core Web Vitals as a direct ranking factor. Sites that score higher rank higher for the same keywords.
                        </BlogText>

                        <BlogText>
                            We have tracked 14 Webflow to Next.js migrations. The average organic traffic improvement was 28% within 90 days of launch. For a business getting 5,000 organic visits per month, that is 1,400 additional visitors per month with no increase in ad spend.
                        </BlogText>

                        <div className="my-8 overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Metric</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Webflow</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Custom Next.js</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200">Mobile PageSpeed</td>
                                        <td className="p-3 border border-stone-200 text-amber-700 font-medium">55 to 75</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">95 to 100</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200">Typical load time (mobile)</td>
                                        <td className="p-3 border border-stone-200 text-amber-700 font-medium">2.8 to 4.5 seconds</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">0.6 to 1.2 seconds</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200">Core Web Vitals: LCP</td>
                                        <td className="p-3 border border-stone-200 text-amber-700 font-medium">Needs Improvement</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">Good</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200">You own the code</td>
                                        <td className="p-3 border border-stone-200 text-red-600 font-medium">No</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">Yes, completely</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200">Hosting cost (annual)</td>
                                        <td className="p-3 border border-stone-200 text-red-600 font-medium">$948 to $2,028</td>
                                        <td className="p-3 border border-stone-200 text-green-700 font-medium">$12 to $372</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogHeader>When Does a Webflow Migration Pay for Itself?</BlogHeader>

                        <BlogText>
                            The break-even calculation is straightforward. Take your current Webflow annual cost, add the estimated annual revenue improvement from better rankings, and divide the migration cost by the combined annual benefit.
                        </BlogText>

                        <BlogText>
                            <strong>Example: 60-page Webflow site, $15,000 migration cost</strong>
                        </BlogText>

                        <BlogList items={[
                            "Current Webflow annual cost: $1,800/year (CMS + forms + integrations)",
                            "Estimated traffic improvement at 25% organic growth: $12,000/year in additional revenue for a site converting at 2% from organic at $200 average order value",
                            "Total annual benefit: $13,800/year",
                            "Break-even: $15,000 divided by $13,800 = 13 months"
                        ]} />

                        <BlogText>
                            In this example, the migration pays for itself in just over a year and saves money every year after. The numbers shift depending on your conversion rate and organic traffic volume, but the model holds for most businesses where organic search drives meaningful revenue.
                        </BlogText>

                        <BlogText>
                            Migration makes the least financial sense if you get very little organic traffic (under 500 visits/month) or if your site is a simple brochure under 10 pages. In those cases, the hosting savings alone will not outweigh the migration cost quickly enough.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="text-lg font-bold text-charcoal mb-2">Ready to know the exact cost of your Webflow migration?</p>
                            <p className="text-stone-600 text-sm mb-6">Drop your Webflow URL when you book. We scope your migration live by page count and complexity, give you a fixed-price quote, and show you your break-even date before we hang up.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get Your Migration Quote <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>How to Get an Accurate Quote for Your Webflow Migration</BlogHeader>

                        <BlogText>
                            Before speaking to any agency, do this 10-minute audit of your own site. It will make your conversations faster and quotes more accurate:
                        </BlogText>

                        <BlogList items={[
                            "Count your total pages (Webflow's Pages panel shows the full list). Include CMS template pages as 1 page, not the count of all CMS items.",
                            "List every CMS Collection and how many custom fields each has.",
                            "Note every third-party integration: Memberstack, Finsweet, Zapier, Calendly embeds, custom JavaScript widgets.",
                            "Screenshot your Webflow Forms dashboard. List every form and whether it sends to CRM or just email.",
                            "Run your site through pagespeed.web.dev on Mobile. Screenshot the result. This tells the agency how much performance work is needed post-migration.",
                            "Note whether you have Webflow Commerce and roughly how many products."
                        ]} />

                        <BlogText>
                            With that information, a competent agency can give you a fixed-price quote rather than an hourly estimate. Fixed-price means the scope risk sits with them, not you. Always insist on a fixed-price contract for migrations.
                        </BlogText>

                        <BlogText>
                            Also verify the agency you hire has migrated Webflow sites specifically, not just built new sites. Webflow CMS export formats and redirect strategies are different from WordPress or Squarespace migrations. Experience with the specific platform matters.
                        </BlogText>

                        {/* Related Service CTA */}
                        <div className="my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                            <p className="text-xl font-bold mb-2">We migrate Webflow sites to custom Next.js.</p>
                            <p className="text-stone-400 text-sm mb-6">Fixed price. Zero-downtime launch. 95+ PageSpeed guaranteed. We have done this before.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <CalModalButton className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
                                    Book a Migration Audit <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                                <Link
                                    href="/services/webflow"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full text-sm hover:border-white/40 transition-all"
                                >
                                    View Webflow Service Page <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <BlogHeader>Frequently Asked Questions</BlogHeader>
                    </div>

                    <FAQAccordion faqs={webflowMigrationFAQs} />

                    <div className="mt-16 pt-8 border-t border-stone-100">
                        <RelatedPosts currentPostId="webflow-migration-cost" category="Webflow" />
                    </div>

                </article>
            </main>
            <Footer />
        </>
    );
}
