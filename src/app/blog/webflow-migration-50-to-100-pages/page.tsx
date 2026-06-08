import { ArrowLeft, Calendar, Clock, ArrowRight, DollarSign, RefreshCw } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "webflow-migration-50-to-100-pages")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "How Much Should You Budget for a 50 to 100 Page Webflow Migration? ($5K to $10K)",
    description: "Enterprise agencies quote $15K to $25K for 50 to 100 page Webflow migrations. Same scope costs $5K to $10K at PandaCodeGen Scale tier. Real hour estimates per phase, what drives price up, and 3-week delivery.",
    alternates: { canonical: "/blog/webflow-migration-50-to-100-pages" },
    keywords: ["webflow migration cost 50-100 pages", "webflow migration cost 50 pages", "webflow migration 60 pages", "webflow migration 100 pages", "webflow agency pricing site migration", "webflow enterprise migration", "webflow to nextjs 50 pages"],
    openGraph: {
        title: "50 to 100 Page Webflow Migration: $5K to $10K in 3 Weeks (2026)",
        description: "Agencies quote $15K to $25K for 50 to 100 page Webflow migrations. Real scope, hour estimates per phase, and honest Scale-tier pricing for 2026.",
        type: "article",
        publishedTime: "2026-04-20T00:00:00-05:00",
        modifiedTime: "2026-06-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "50 to 100 Page Webflow Migration: $5K to $10K in 3 Weeks (2026)",
        description: "Agencies quote $15K to $25K for 50 to 100 page Webflow migrations. Real scope, hour estimates per phase, and honest Scale-tier pricing for 2026.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages#article",
            "headline": "How Much Should You Budget for a 50 to 100 Page Webflow Migration? ($5K to $10K)",
            "description": "Agencies quote $15K to $25K for 50 to 100 page Webflow migrations. Real scope, hour estimates per phase, and honest Scale-tier pricing for 2026.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-04-20T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
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
            "mainEntityOfPage": { "@id": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages#webpage" },
            "articleSection": "Webflow",
            "keywords": ["webflow migration cost 50 pages", "webflow migration 100 pages", "webflow to nextjs migration", "webflow enterprise pricing", "webflow agency pricing"],
            "timeRequired": "PT12M",
            "wordCount": 2500,
            "about": [
                { "@type": "Thing", "name": "Webflow Migration" },
                { "@type": "Thing", "name": "Website Migration Cost" },
                { "@type": "Thing", "name": "Next.js" },
                { "@type": "Thing", "name": "Content Management System Migration" }
            ],
            "inLanguage": "en-US",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Webflow CMS Collection Migration Docs", "url": "https://help.webflow.com/hc/en-us/articles/33961342531859-Migrate-CMS-Collection-content-to-another-project" },
                { "@type": "CreativeWork", "name": "Webflow Redirect Manager Documentation", "url": "https://help.webflow.com/hc/en-us/articles/33961294898835-How-do-I-set-up-redirects-in-Webflow" },
                { "@type": "CreativeWork", "name": "Webflow Website Cost in 2026", "url": "https://www.webflow.jobs/resources/how-much-does-a-webflow-website-cost-2026" },
                { "@type": "CreativeWork", "name": "Webflow Enterprise Pricing", "url": "https://webflow.com/enterprise" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Webflow Migration Cost 50 to 100 Pages", "item": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages#webpage",
            "url": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages",
            "name": "50 to 100 Page Webflow Migration: $5K to $10K in 3 Weeks (2026)",
            "description": "Agencies quote $15K to $25K for 50 to 100 page Webflow migrations. Real scope, hour estimates per phase, and honest Scale-tier pricing for 2026.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-04-20T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://x.com/PandaCodeGen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158", "https://www.goodfirms.co/company/pandacodegen", "https://www.crunchbase.com/organization/pandacodegen", "https://www.designrush.com/agency/profile/pandacodegen", "https://www.sortlist.com/agency/pandacodegen", "https://www.f6s.com/pandacodegen", "https://www.sanity.io/exchange/community/pandacodegen", "https://www.behance.net/pandacodegen", "https://dev.to/pandacodegen", "https://www.reddit.com/user/PandaCodeGen/"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites for businesses migrating from Webflow, WordPress, Wix, Squarespace, and Shopify. All sites score 95 to 100 on Google PageSpeed or you do not pay.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/webflow-migration-50-to-100-pages#faq",
            "mainEntity": postFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function WebflowMigration50To100PagesPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Webflow Migration Cost 50 to 100 Pages", href: "/blog/webflow-migration-50-to-100-pages" }
                    ]} />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-6 md:mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-charcoal text-xs font-bold uppercase tracking-wider mb-6">
                            <DollarSign className="w-3 h-3" />
                            Webflow · Migration Cost
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-charcoal">
                            You were quoted $18,000.{" "}
                            <span className="font-serif italic text-cognac">Here is what a 50 to 100 page Webflow migration actually costs.</span>
                        </h1>
                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Enterprise Webflow agencies quote $15,000 to $25,000 for migrating 50-100 page sites to Next.js. Most of that is agency overhead. Here is the real engineering scope, real hour estimates per phase, and honest Scale-tier pricing.
                        </p>
                        <BlogAuthor
                            date="Apr 20, 2026"
                            readTime="12 min read"
                            bio="Hassan founded PandaCodeGen in Feb 2026 after six years inside WordPress. Recent rebuild: Obare Magazine off Wix into Next.js and Sanity, 7 days, 98 Mobile PageSpeed. Every build scores 95 to 100 on Google PageSpeed or you do not pay the balance."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Animation */}
                    <div className="mb-8 md:mb-12"><PageSpeedAnimation /></div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Enterprise Webflow agencies commonly quote $15,000 to $25,000 for 50 to 100 page migrations and do not publish pricing upfront.",
                            "Real engineering scope is 80 to 125 hours. At market hourly rate ($100 to $150), that is $8,000 to $18,750 in labor before agency markup.",
                            "Our Scale tier covers this exact scope at $5,000 to $10,000, delivered in 3 weeks instead of 8 to 12.",
                            "The 301 redirect strategy and CMS collection migration are the two places where cheaper agencies lose SEO. We document both step by step."
                        ]} />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-cognac/5 border-l-4 border-cognac rounded-r-lg p-6 my-6 md:my-8" data-speakable="true">
                            <p className="text-sm font-bold text-cognac uppercase tracking-wider mb-2">Short Answer</p>
                            <p className="text-stone-800 leading-relaxed">
                                A 50 to 100 page Webflow to Next.js migration is 80 to 125 engineering hours spread across 3 weeks. Our Scale tier is $5,000 to $10,000 depending on page count and CMS complexity. Enterprise agencies charge 2 to 3 times that for the same scope and take 8 to 12 weeks. If you were quoted $15,000 to $25,000, you are paying 40 to 60 percent in agency overhead.
                            </p>
                        </div>

                        <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                Your Webflow plan and add-ons bill keeps climbing. Your revenue does not. PandaCodeGen handles 50 to 100 page Webflow migrations with full CMS migration to Sanity, 301 redirect mapping for every URL, and zero-downtime cutover, designed to get cited by ChatGPT, Claude, and Google AI from launch day. Fixed pricing from $5,000 to $10,000 Scale (or Scale+ for enterprise scope). 90+ PageSpeed in writing or full refund.
                            </p>
                        </div>

                        <BlogHeader>Why 50 to 100 Pages Is a Distinct Pricing Tier</BlogHeader>

                        <p className="text-stone-700 leading-relaxed mb-4">A 50 to 100 page Webflow migration should cost $5,000 to $10,000 with a boutique specialist agency. Enterprise agencies quote $15,000 to $25,000 for the same scope. The budget difference is overhead, not engineering quality. A 50-page site with 4 CMS collections and standard integrations takes 80 to 100 hours of real engineering work regardless of who does it.</p>

                        <BlogText>
                            Page count alone does not decide <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">Webflow migration cost</Link>. CMS collection count, integration surface, and redirect complexity do. At 50 to 100 pages you typically have 3 to 8 CMS collections (blog posts, case studies, team, pricing, locations, resources, integrations, careers). Each collection is a separate schema in the new CMS, a separate import script, and a separate set of URL patterns to redirect.
                        </BlogText>
                        <BlogText>
                            This is why our <Link href="/pricing" className="text-cognac hover:underline">Growth tier at $3,500</Link> covers up to 30 pages but stops there. Beyond 30 pages, the redirect map alone becomes a multi-hour project, and the CMS schema design needs real thought, not a template. That is when Scale tier starts.
                        </BlogText>

                        <BlogHeader>Real Hour Estimates Per Migration Phase</BlogHeader>
                        <BlogText>
                            Here is what a 50 to 100 page Webflow to Next.js migration actually takes to ship. These are the numbers from real rebuilds, not agency proposal inflation.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Phase</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Hours</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">What happens</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Phase" className="p-3 border border-stone-300 font-medium">1. Audit + architecture</td>
                                        <td data-label="Hours" className="p-3 border border-stone-300">8 to 12</td>
                                        <td data-label="What happens" className="p-3 border border-stone-300">Export every CMS collection to CSV. Screaming Frog crawl to inventory every URL. Pull top pages from Google Search Console. Map new component structure.</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Phase" className="p-3 border border-stone-300 font-medium">2. Component development</td>
                                        <td data-label="Hours" className="p-3 border border-stone-300">40 to 60</td>
                                        <td data-label="What happens" className="p-3 border border-stone-300">Build every Webflow section as a React component. Typography, spacing, animations all hand-written. No auto-conversion tools (they produce fragile code).</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Phase" className="p-3 border border-stone-300 font-medium">3. CMS schema + integration</td>
                                        <td data-label="Hours" className="p-3 border border-stone-300">15 to 25</td>
                                        <td data-label="What happens" className="p-3 border border-stone-300">Design Sanity or Contentful schemas for each collection. Wire them into Next.js App Router. Write typed queries for each content type.</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Phase" className="p-3 border border-stone-300 font-medium">4. Content migration + 301 map</td>
                                        <td data-label="Hours" className="p-3 border border-stone-300">10 to 15</td>
                                        <td data-label="What happens" className="p-3 border border-stone-300">CSV imports of 100 items take 15 to 30 minutes of runtime but validation and manual cleanup takes 8 to 10 hours. Build the URL-by-URL redirect map.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Phase" className="p-3 border border-stone-300 font-medium">5. QA + deployment</td>
                                        <td data-label="Hours" className="p-3 border border-stone-300">8 to 12</td>
                                        <td data-label="What happens" className="p-3 border border-stone-300">Cross-browser testing, Core Web Vitals verification, mobile QA, production deploy to Vercel, DNS cutover, new sitemap submission to Google Search Console.</td>
                                    </tr>
                                    <tr className="bg-charcoal text-white">
                                        <td data-label="Phase" className="p-3 border border-stone-300 font-bold">Total</td>
                                        <td data-label="Hours" className="p-3 border border-stone-300 font-bold">81 to 124 hours</td>
                                        <td data-label="What happens" className="p-3 border border-stone-300 font-bold">Roughly 3 weeks of focused work.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            At market engineering rates of $100 to $150 per hour, that is $8,000 to $18,750 in pure labor. Agency pricing at $15,000 to $25,000 bakes in project management, account executives, and margin on top of that base.
                        </BlogText>

                        <BlogHeader>Why Enterprise Agencies Charge 2 to 3 Times What a Solo Shop Charges</BlogHeader>
                        <BlogText>
                            The honest answer is overhead, not engineering quality. Enterprise Webflow agencies have project managers, account executives, QA leads, designers, and developers on every engagement. Public timelines for a simple Webflow migration run 8 to 12 weeks. Complex migrations go 4 to 6 months.
                        </BlogText>
                        <BlogText>
                            Those layers exist for enterprise clients who need procurement sign-off, multiple stakeholder reviews, and a single point of contact across departments. If you are a 50 to 100 person company with a marketing site, most of that layering is cost you do not need. You need the engineering, not the PMO.
                        </BlogText>
                        <BlogQuote>
                            Every dollar you pay above $18,000 for a 50 to 100 page Webflow migration is funding agency overhead, not engineering quality. Solo shops and boutique teams ship the same output in 3 weeks for half the price because there is no project manager layer to feed.
                        </BlogQuote>

                        <BlogHeader>Webflow vs Next.js: What You Are Actually Buying</BlogHeader>
                        <BlogText>
                            Before you compare prices, compare platforms. The reason a Next.js rebuild is worth the migration cost in the first place is that your monthly spend drops, your load time drops, and your ceiling on custom features disappears. Here is the head-to-head for a 50 to 100 page marketing site.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Dimension</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Webflow (50 to 100 pages)</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Next.js on Vercel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">Monthly platform cost</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">$16 to $84 per month for Site plan, plus workspace seats</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">$0 to $20 per month on Vercel at this traffic range</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">Typical Lighthouse (mobile)</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">60 to 75</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">90+ guaranteed in contract, typically 95 to 100 achieved</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">CMS item ceiling</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">10,000 items per site (Business plan)</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">Unlimited via Sanity or Contentful</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">Redirect ceiling</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">1,000 hard cap in Redirect Manager</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">Unlimited in next.config.js</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">Custom backend logic</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">Logic add-on required, limited scope</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">Full API routes, serverless functions, any integration</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">Image optimization</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">Automatic but opaque, limited control</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">next/image with AVIF, WebP, per-breakpoint sizing</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Dimension" className="p-3 border border-stone-300 font-medium">Code ownership</td>
                                        <td data-label="Webflow" className="p-3 border border-stone-300">Locked to Webflow hosting, partial export only</td>
                                        <td data-label="Next.js" className="p-3 border border-stone-300 font-bold text-cognac">100 percent yours, deploy anywhere</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogHeader>Our Scale Tier Pricing for 50 to 100 Page Migrations</BlogHeader>
                        <BlogText>
                            Here is what a 50 to 100 page Webflow to Next.js migration costs in our Scale tier. Fixed price, 3-week delivery, 90+ PageSpeed guaranteed or you do not pay the balance.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Scope</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Our Scale Tier</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Agency Quote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Scope" className="p-3 border border-stone-300 font-medium">50 pages, 2 to 3 CMS collections, standard animations</td>
                                        <td data-label="Our Scale Tier" className="p-3 border border-stone-300 font-bold text-cognac">$5,000 to $7,000</td>
                                        <td data-label="Agency Quote" className="p-3 border border-stone-300 text-stone-600">$12,000 to $18,000</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Scope" className="p-3 border border-stone-300 font-medium">70 pages, 4 to 6 CMS collections, custom interactions</td>
                                        <td data-label="Our Scale Tier" className="p-3 border border-stone-300 font-bold text-cognac">$7,000 to $8,500</td>
                                        <td data-label="Agency Quote" className="p-3 border border-stone-300 text-stone-600">$15,000 to $22,000</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Scope" className="p-3 border border-stone-300 font-medium">100 pages, 6 to 8 CMS collections, integrations (HubSpot, Stripe, Analytics)</td>
                                        <td data-label="Our Scale Tier" className="p-3 border border-stone-300 font-bold text-cognac">$8,500 to $10,000</td>
                                        <td data-label="Agency Quote" className="p-3 border border-stone-300 text-stone-600">$18,000 to $25,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            Beyond 100 pages, 8+ CMS collections, multi-region localization, or SSO and compliance requirements, we quote case-by-case in our Scale+ tier. That is an honest custom quote after a scoping call, not a hidden-ceiling surprise on invoice.
                        </BlogText>

                        {/* Mid-Article CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Got a quote from an enterprise Webflow agency?</p>
                            <p className="text-stone-600 mb-4 text-sm">Bring it to the discovery call. We will match the scope line by line and show you what each line actually costs in engineering hours. If our Scale tier does not save you at least 30 percent, we will tell you directly.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Compare Your Quote <ArrowRight className="w-4 h-4" /></CalModalButton>
                        </div>

                        <BlogHeader>The 3-Week Delivery Timeline</BlogHeader>
                        <BlogText>
                            A 50 to 100 page Webflow to Next.js migration ships in 3 weeks in our Scale tier. Enterprise agencies quote 8 to 12 weeks on the same scope because they batch engineer time around meetings and approval cycles. Solo and boutique teams compress that by cutting the ceremony.
                        </BlogText>
                        <BlogList items={[
                            "Week 1: CMS data export, Screaming Frog URL crawl, architecture decisions, Sanity or Contentful schema design. You approve the content model before we write a component.",
                            "Week 2: Component build in Next.js App Router. CMS integration wired. All pages rendering with imported content by end of week. Staging URL shared.",
                            "Week 3: 301 redirect map finalized from Google Search Console top-pages data. QA across devices. PageSpeed optimization until we hit 95+. Production deploy to Vercel, DNS cutover, sitemap submission to Google Search Console."
                        ]} />

                        <BlogHeader>The 301 Redirect Strategy for 50 to 100 Pages</BlogHeader>
                        <BlogText>
                            This is where most migrations leak SEO. Every URL on your old Webflow site either needs a matching page on the new site, or a 301 redirect to the closest equivalent. Skip this step and Google drops you from the rankings you built for years.
                        </BlogText>
                        <BlogText>
                            Webflow&apos;s built-in Redirect Manager has a hard limit of 1,000 redirects. At 50 to 100 pages plus historical URLs from CMS items that moved, you can approach that limit faster than expected. On Next.js deployed to Vercel, we handle unlimited redirects through the config file, which removes the ceiling entirely.
                        </BlogText>
                        <BlogText>
                            Our redirect strategy in order:
                        </BlogText>
                        <BlogList items={[
                            "Pull your top 500 pages from Google Search Console by impressions over the last 12 months. These are the ones that must have perfect 1-to-1 redirects.",
                            "Crawl the live Webflow site with Screaming Frog to capture every indexed URL, including CMS item slugs.",
                            "Map each URL to the new equivalent in a CSV. Wildcard patterns only for blog categories or tag archives where individual 1-to-1 mapping is not needed.",
                            "Deploy the redirect map in Next.js config before DNS cutover. Test every top-10 page before going live.",
                            "After launch, submit the new sitemap to Google Search Console and monitor crawl errors daily for 14 days."
                        ]} />

                        <BlogHeader>Hidden Costs Enterprise Agencies Do Not Put in the Proposal</BlogHeader>
                        <BlogText>
                            Agency quotes look clean on page 1. The real total shows up after signature in change orders and retainers. Before you compare their proposal to our fixed price, add these line items mentally.
                        </BlogText>
                        <BlogList items={[
                            "Change orders on scope creep. Standard agency contracts charge $150 to $250 per hour for anything outside the signed statement of work. One extra CMS collection mid-build is typically a $3,000 to $6,000 change order.",
                            "Mandatory annual retainer. Most enterprise Webflow agencies require a post-launch retainer of $1,500 to $3,500 per month for the first year. That is $18,000 to $42,000 on top of the build.",
                            "Stock photography and asset licensing. Not included in development quote. Expect $500 to $2,000 for a 50 to 100 page site if you do not have existing brand assets.",
                            "SEO consulting as a separate line item. 301 redirect mapping and post-launch monitoring are often quoted as a $2,000 to $5,000 add-on, not included in migration scope.",
                            "CMS training for your team. Typically quoted at $1,500 to $3,000 for team onboarding sessions after launch.",
                            "Webflow hosting fees you keep paying. If the migration is to a new Webflow instance, the Business plan runs $39 to $49 per month per site, billed annually. Multi-year commitment to stay on the platform."
                        ]} />
                        <BlogText>
                            Our Scale tier bakes 301 redirect mapping, CMS training session, and 60 days of post-launch support into the fixed price. There are no change orders inside the signed scope. If something truly outside scope comes up, we tell you before we start and quote it separately before any work begins.
                        </BlogText>

                        <BlogHeader>Real ROI: When a 50 to 100 Page Migration Pays For Itself</BlogHeader>
                        <BlogText>
                            A migration is an asset purchase, not a cost center. For a 50 to 100 page site at $5,000 to $10,000 in our Scale tier, the payback comes from three compounding savings:
                        </BlogText>
                        <BlogList items={[
                            "Hosting savings: Webflow Business plan at $39 to $49 per month becomes $0 to $20 per month on Vercel. That is $230 to $580 per year saved per site.",
                            "Conversion lift from PageSpeed: a move from 60 to 75 Lighthouse on mobile to 95 plus typically adds 8 to 15 percent to conversion on a marketing site. On $500K annual revenue from organic, that is $40,000 to $75,000 per year in recovered revenue.",
                            "No plugin or agency retainer bills: most Webflow clients pay $1,500 to $3,500 per month in agency retainer for minor edits. Next.js plus Sanity means your team edits content directly. That is $18,000 to $42,000 per year back."
                        ]} />
                        <BlogText>
                            Conservatively, a Scale tier migration pays for itself in 2 to 6 months. We have written the full math in <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">how website speed affects SEO and conversion</Link> if you want the citations behind the conversion lift numbers.
                        </BlogText>

                        <BlogHeader>DIY vs Freelancer vs Boutique vs Enterprise Agency: Which Fits 50 to 100 Pages</BlogHeader>
                        <BlogText>
                            At this page count, DIY and pure freelance are out. Here is the honest trade-off across the remaining three options.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Option</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Price</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Timeline</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Best for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Option" className="p-3 border border-stone-300 font-medium">Freelancer from Upwork or Fiverr</td>
                                        <td data-label="Price" className="p-3 border border-stone-300">$3,000 to $6,000</td>
                                        <td data-label="Timeline" className="p-3 border border-stone-300">6 to 10 weeks, high variance</td>
                                        <td data-label="Best for" className="p-3 border border-stone-300">Not 50 to 100 pages. SEO and redirect handling usually breaks.</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td data-label="Option" className="p-3 border border-stone-300 font-medium">Boutique shop (us)</td>
                                        <td data-label="Price" className="p-3 border border-stone-300 font-bold text-cognac">$5,000 to $10,000 fixed</td>
                                        <td data-label="Timeline" className="p-3 border border-stone-300 font-bold text-cognac">3 weeks</td>
                                        <td data-label="Best for" className="p-3 border border-stone-300">Direct founder contact, no PM layer, 90+ PageSpeed guarantee in writing.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Option" className="p-3 border border-stone-300 font-medium">Enterprise Webflow agency</td>
                                        <td data-label="Price" className="p-3 border border-stone-300">$15,000 to $25,000 plus retainer</td>
                                        <td data-label="Timeline" className="p-3 border border-stone-300">8 to 12 weeks</td>
                                        <td data-label="Best for" className="p-3 border border-stone-300">Fortune 1000 with procurement, legal sign-off, and a PMO requirement.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            For 95 percent of businesses with 50 to 100 page marketing sites, the boutique option is the right call. You are paying for engineering, not the PM layer you do not need.
                        </BlogText>

                        <BlogHeader>What Is Not Included in Scale Tier</BlogHeader>
                        <BlogText>
                            Scale tier is migration, not rebranding. If you also want new visual design, new copy, or new brand identity, that adds separate scope. Be honest about what you are buying so the price makes sense.
                        </BlogText>
                        <BlogList items={[
                            "New visual design or brand identity work. We migrate your existing design faithfully. Design refresh is a separate engagement.",
                            "E-commerce checkout flows. That is Scale+ scope because it touches Stripe webhooks, inventory sync, order logic.",
                            "Custom authentication or member areas. Scale+ scope. Touches session management, database design, email verification flows.",
                            "Multi-region localization or translation. Scale+ scope.",
                            "SOC 2 compliance, SSO, enterprise audit trails. Scale+ custom quote only."
                        ]} />

                        <BlogHeader>When Scale Tier Is Not the Right Fit</BlogHeader>
                        <BlogText>
                            Honest: not every Webflow site needs Scale tier. If you have fewer than 30 pages, you want our <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">Growth tier at $3,500</Link>. If you have over 100 pages with complex integrations, or you need enterprise compliance, you want Scale+ and a custom quote. If you are leaving Webflow for specific platform reasons like the <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline">April 2026 outages or the User Accounts sunset</Link>, read those posts first to understand the full decision.
                        </BlogText>

                        {/* Bottom CTA */}
                        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 md:p-8 mt-8 md:mt-16 text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to see the real quote?</h2>
                            <p className="text-stone-600 mb-6">
                                Book a discovery call. Bring your existing agency quote if you have one. We will scope your specific 50 to 100 page site and quote Scale tier pricing in writing on the call.
                            </p>
                            <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">Book Scoping Call <ArrowRight className="w-5 h-5" /></CalModalButton>
                        </div>
                    </div>

                    <section className="mb-8 md:mb-10 mt-8 md:mt-16">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Enterprise agencies charge 2 to 3 times what solo shops charge for the same scope.</strong> Webflow Enterprise partners quote $15,000 to $25,000 for 50 to 100 page migrations. Our Scale tier covers the exact same scope at $5,000 to $10,000.</li>
                            <li><strong>Real engineering scope is 80 to 125 hours, not 200 plus.</strong> That is 3 weeks of focused work from a boutique team, not 8 to 12 weeks of agency scheduling.</li>
                            <li><strong>CMS collection count matters more than page count.</strong> 50 pages with 2 collections is a different project from 70 pages with 6 collections. Our pricing reflects that.</li>
                            <li><strong>301 redirect strategy makes or breaks post-migration SEO.</strong> Webflow caps at 1,000 redirects. Next.js on Vercel has no cap. Top pages need 1-to-1 mapping, not wildcards.</li>
                            <li><strong>If Scale is out of budget, consider Starter ($1,500) for 5 to 7 page sites or drop your URL on a free 60-second audit.</strong></li>
                        </ol>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <section className="mb-4 mt-6">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed">For the reasons businesses are accelerating Webflow exits in 2026, see <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline font-medium">leaving Webflow in 2026</Link>. For the Webflow User Accounts deprecation timeline and migration path, see <Link href="/blog/webflow-user-accounts-sunset-date-2026" className="text-cognac hover:underline font-medium">Webflow User Accounts sunset date 2026</Link>.</p>
                    </section>

                    <RelatedPosts currentPostId="webflow-migration-50-to-100-pages" category="Webflow" />

                </article>
            </main>
            <Footer />
        </>
    );
}
