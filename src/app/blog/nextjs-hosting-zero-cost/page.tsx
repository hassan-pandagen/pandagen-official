import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const hostingFAQs = blogPosts.find(p => p.id === 'nextjs-hosting-zero-cost')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/VercelPlanAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Is Vercel Free? 2026 Pricing & the 100GB Cap",
    description: "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
    alternates: {
        canonical: '/blog/nextjs-hosting-zero-cost',
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: ["is vercel free", "vercel free tier bandwidth 100gb 2026", "vercel pricing next.js 2026", "free nextjs hosting", "vercel free tier", "free website hosting 2026", "nextjs hosting cost", "vercel vs wordpress hosting", "zero cost website hosting", "vercel free tier limits"],
    openGraph: {
        title: "Is Vercel Free? 2026 Pricing, Limits & the 100GB Bandwidth Cap",
        description: "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
        type: "article",
        publishedTime: "2026-03-13",
        modifiedTime: "2026-08-02T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost",
        images: [ogImageForPath("/blog/nextjs-hosting-zero-cost")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Is Vercel Free? 2026 Pricing, Limits & the 100GB Bandwidth Cap",
        description: "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#article",
            "headline": "Is Vercel Free? 2026 Hobby Limits and Business Pricing",
            "description": "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
            "image": ogImageUrlForPath("/blog/nextjs-hosting-zero-cost"),
            "datePublished": "2026-03-13T00:00:00-05:00",
            "dateModified": "2026-08-02T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "knowsAbout": ["Next.js", "Vercel", "Web performance optimization", "Core Web Vitals", "WordPress to Next.js migration", "Static site generation", "Technical SEO"],
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#webpage" },
            "articleSection": "Performance",
            "keywords": ["is Vercel free", "Vercel Hobby plan", "Vercel free tier bandwidth 100GB 2026", "free Next.js hosting", "Next.js hosting cost", "Vercel Pro pricing"],
            "timeRequired": "PT26M",
            "wordCount": 5184,
            "about": [
                {"@type": "Thing", "name": "Website Hosting Costs", "sameAs": "https://en.wikipedia.org/wiki/Web_hosting_service"},
                {"@type": "SoftwareApplication", "name": "Vercel", "sameAs": ["https://en.wikipedia.org/wiki/Vercel", "https://vercel.com"]},
                {"@type": "SoftwareApplication", "name": "Next.js", "sameAs": ["https://en.wikipedia.org/wiki/Next.js", "https://nextjs.org"]},
                {"@type": "Thing", "name": "Static Site Generation", "sameAs": "https://en.wikipedia.org/wiki/Static_web_page"}
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Vercel Pricing", "url": "https://vercel.com/pricing" },
                { "@type": "CreativeWork", "name": "Vercel Terms of Service", "url": "https://vercel.com/legal/terms" },
                { "@type": "CreativeWork", "name": "Vercel Fair Use Guidelines", "url": "https://vercel.com/docs/limits/fair-use-guidelines" },
                { "@type": "CreativeWork", "name": "Vercel Pro Plan Docs", "url": "https://vercel.com/docs/plans/pro-plan" },
                { "@type": "CreativeWork", "name": "Vercel Hobby Plan Docs", "url": "https://vercel.com/docs/plans/hobby" },
                { "@type": "CreativeWork", "name": "Vercel Blob usage and pricing", "url": "https://vercel.com/docs/vercel-blob/usage-and-pricing" },
                { "@type": "CreativeWork", "name": "Vercel Active CPU pricing announcement", "url": "https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute" },
                { "@type": "CreativeWork", "name": "Vercel Regional Pricing", "url": "https://vercel.com/docs/pricing/regional-pricing" },
                { "@type": "CreativeWork", "name": "Next.js 16.2", "url": "https://nextjs.org/blog/next-16-2" },
                { "@type": "CreativeWork", "name": "Cloudflare Next.js Deployment Guide", "url": "https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/" },
                { "@type": "CreativeWork", "name": "Netlify Pricing", "url": "https://www.netlify.com/pricing/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Is Vercel Free? 2026 Hobby Limits and Business Pricing", "item": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost",
            "name": "Is Vercel Free? 2026 Hobby Limits and Business Pricing",
            "description": "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": ogImageUrlForPath("/blog/nextjs-hosting-zero-cost") },
            "datePublished": "2026-03-13T00:00:00-05:00",
            "dateModified": "2026-08-02T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#faq",
            "mainEntity": hostingFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function NextjsHostingZeroCostPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
                {/* Global Noise Texture */}
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                {/* Ambient Glows */}

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Article Schema */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    {/* Breadcrumb Navigation */}
                    <Breadcrumb items={postCrumbs("nextjs-hosting-zero-cost", "Is Vercel Free? 2026 Hobby Limits and Business Pricing")} />

                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Is Vercel Free? The <span className="font-serif italic text-cognac">2026 Cost</span> of Next.js Hosting
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Short answer: Vercel Hobby is free in 2026 for personal, non-commercial projects, with a published fair-use guideline of up to 100 GB of Fast Data Transfer a month. A production business website should use Vercel Pro, which currently starts with a $20 monthly platform fee, one deploying seat, and metered usage. Here is the practical Vercel Hobby vs Pro comparison, including limits and commercial Next.js hosting costs.
                        </p>

                        <BlogAuthor
                            date="Mar 13, 2026"
                            readTime="22 min read"
                            bio="Hassan is PandaCodeGen's co-founder and lead engineer. He plans Next.js migrations around four things: speed you can measure, search traffic that survives the move, code someone else can maintain, and infrastructure the client owns."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Feature Visual */}
                    <div className="mb-12">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Vercel Hobby is a $0 plan for eligible personal, non-commercial projects. Vercel publishes up to 100 GB of Fast Data Transfer a month as a fair-use guideline, not as an itemised plan allowance.",
                            "Vercel Pro is the starting point for commercial production websites and currently begins with a $20 monthly platform fee, one deploying seat, and metered usage.",
                            "A Next.js rebuild can reduce server administration and request-time rendering without making infrastructure free.",
                            "Use this guide to compare Vercel Hobby vs Pro and estimate a realistic Next.js hosting cost for a business website."
                        ]} />
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">Vercel pricing for business websites is not determined only by traffic. Hobby is free for eligible personal, non-commercial work, with a fair-use guideline of up to 100 GB of Fast Data Transfer and published limits on functions, builds and image optimization. Commercial websites should begin on Pro, currently a $20 monthly platform fee that includes one deploying seat and a usage credit, even when their traffic would fit inside Hobby&apos;s technical allowances. Added seats and on-demand usage can increase the bill. Compare the full platform, maintenance, and usage costs before choosing between managed WordPress hosting and commercial Next.js hosting.</p>

                    {/* About PandaCodeGen: brand anchor in first-third zone */}
                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen rebuilds suitable websites as custom Next.js code with documented migration, measurement, and handover requirements. Commercial Vercel projects launch in the client&apos;s own account on Pro, currently starting with a $20 monthly platform fee that includes one deploying seat, so the client pays Vercel directly with no hosting markup. Added seats and on-demand usage are billed by Vercel. PageSpeed targets, representative pages, test conditions, acceptance criteria, and any remedy are defined in the signed project scope. Full service pricing is on the <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">

                        <BlogHeader>Understand What Your Hosting Bill Covers</BlogHeader>

                        <BlogText>
                            A hosting invoice can bundle the servers, the updates someone else applies, backups, security tools, support, and how much traffic you are allowed. <BlogHighlight>The useful comparison is total operating cost, not a $0 headline.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            A dynamic WordPress page often requires request-time application and database work. Managed hosts charge for the processing, the storage, the traffic, the backups, the security and the support it takes to keep that stack available. The bill may be justified, but the architecture and service level should match what the website actually needs.
                        </BlogText>

                        <BlogText>
                            Paying more can improve capacity and support. It does not fix a slow theme, a heavy plugin, a bad database query, a third-party script, or caching nobody configured. Hosting quality is one performance input, not a guaranteed load-time result.
                        </BlogText>

                        <BlogText>
                            A business hosting budget may include:
                        </BlogText>

                        <BlogList items={[
                            "Shared WordPress hosting: lower base pricing, shared capacity, and a service level that varies by provider.",
                            "Managed WordPress hosting bundles support, backups, security, caching and a traffic allowance into one plan price.",
                            "What the plan does not cover: premium plugins, monitoring, a developer on call, CDN usage, backups and security services."
                        ]} />

                        <BlogText>
                            Over three years, what matters is <BlogHighlight>hosting, licences, the hours spent maintaining it, usage charges, and what it costs you when something breaks</BlogHighlight>. Calculate those inputs from the current invoices before using a migration savings estimate.
                        </BlogText>

                        <BlogText>
                            Hosting-plan eligibility and page performance are separate decisions. A framework or a
                            provider does not establish a route&apos;s score. Keep dated field data and repeated lab
                            evidence for any performance figure you intend to rely on. <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explained</Link> defines
                            what that evidence consists of, and <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">how site speed interacts with search</Link> covers
                            what it does and does not prove about rankings.
                        </BlogText>

                        <BlogQuote>
                            A faster architecture can reduce request-time work. The right hosting decision still comes down to licensing, traffic, how much runs server-side, storage, support, and what you can afford to have go wrong.
                        </BlogQuote>

                        <BlogHeader>How Managed Next.js Hosting Changes the Cost Model</BlogHeader>

                        <BlogText>
                            Traditional dynamic applications often perform more work on each request. Next.js can pre-render suitable pages, cache responses, and move selected work to managed functions. The amount and type of runtime work influence the final bill.
                        </BlogText>

                        <BlogText>
                            This reduces server administration. It does not eliminate infrastructure or platform cost.
                        </BlogText>

                        <BlogText>
                            When a page is suitable for static generation, Next.js can <strong>pre-build it at deploy time</strong> and serve a cached result instead of rebuilding it for every visitor. Dynamic routes, forms, authentication, commerce, and revalidation can still use managed compute.
                        </BlogText>

                        <BlogText>
                            Vercel distributes cached content through its global network and runs supported application workloads on managed infrastructure. <BlogHighlight>That can reduce latency and operations work when the rendering and caching strategy fits the site.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            In practice you administer fewer servers, deployments happen on their own, and you pay for what you use. Hobby can cost $0 for eligible personal, non-commercial projects. Commercial production sites should budget from Vercel Pro&apos;s $20 monthly platform fee, then add any extra seats and on-demand usage.
                        </BlogText>

                        <BlogText>
                            Think of it this way: <BlogHighlight>preparing reusable pages before a request can reduce per-visit work, while personalized or frequently changing routes still need runtime compute.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            Static generation, caching, and managed functions are established deployment patterns, but the right mix depends on the application. For a deeper look at the measurement process, read our{" "}
                            <Link href="/blog/how-to-achieve-100-pagespeed" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                guide to hitting a 90+ PageSpeed score
                            </Link>. If you are still deciding between platforms, our <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress vs Next.js comparison</Link> covers every tradeoff in detail.
                        </BlogText>

                        <BlogHeader>What a WordPress invoice bundles that a Vercel invoice does not</BlogHeader>

                        <BlogText>
                            A managed WordPress plan is one line that already contains backups, security, caching, support and a traffic allowance. A Vercel invoice is a platform fee plus metered usage, and the rest of the stack — CMS, database, search, email, monitoring — arrives as separate bills. Three rows below are genuinely comparable: cost, SSL and CDN. The rest depend on what you built, which is why the load-time and PageSpeed rows say the same thing on both sides.
                        </BlogText>

                        {/* Comparison Table */}
                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full border-collapse text-sm min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-4 font-bold text-charcoal border border-stone-300">Feature</th>
                                        <th className="text-left p-4 font-bold text-charcoal border border-stone-300">WordPress Hosting</th>
                                        <th className="text-left p-4 font-bold text-charcoal border border-stone-300">Next.js + Vercel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-stone-300 font-medium">Monthly Cost</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Varies by host and service level</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">Pro from $20/mo + added seats and usage</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="p-4 border border-stone-300 font-medium">3-Year Cost</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Calculate from current invoices</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">From $720 base + added seats and usage</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-stone-300 font-medium">Load Time</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Depends on implementation</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">Depends on implementation</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="p-4 border border-stone-300 font-medium">PageSpeed Score</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Measured per page and test profile</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">Measured per page and test profile</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-stone-300 font-medium">Server Crashes</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Depends on architecture and service level</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">Managed resilience; outages remain possible</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="p-4 border border-stone-300 font-medium">SSL Certificate</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Extra cost on some hosts</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">Free (automatic)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-stone-300 font-medium">CDN</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Extra cost</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">Built-in global delivery network</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="p-4 border border-stone-300 font-medium">Maintenance</td>
                                        <td data-label="WordPress Hosting" className="p-4 border border-stone-300 text-stone-600">Monthly updates</td>
                                        <td data-label="Next.js + Vercel" className="p-4 border border-stone-300 text-stone-600 font-bold">No server administration; app upkeep remains</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Mid-Article CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Does your current hosting still fit the workload?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your current site URL when you book. We review the current hosting invoices, performance profile, and likely commercial Next.js hosting cost before recommending a platform.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                    Schedule Free Call <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                        </div>

                        <BlogHeader>The Vercel Free Tier: What You Actually Get</BlogHeader>

                        <BlogText>
                            Vercel Hobby is a real deployment plan for eligible personal, non-commercial projects. These are the figures published on <a href="https://vercel.com/docs/plans/hobby" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel&apos;s Hobby plan docs</a>, <a href="https://vercel.com/pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">pricing page</a> and <a href="https://vercel.com/docs/limits/fair-use-guidelines" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">fair-use guidelines</a>, checked August 2, 2026:
                        </BlogText>

                        <BlogList items={[
                            "Fast Data Transfer: up to 100 GB a month.",
                            "Fast Origin Transfer: up to 10 GB a month. This is the cap that gets left out of the comparisons, and on an uncached or image-heavy site it is reached long before the 100 GB figure.",
                            "Edge Requests: up to 1,000,000 a month.",
                            "Function Invocations: 1,000,000 included.",
                            "Active CPU: 4 CPU-hours. Provisioned Memory: 360 GB-hours.",
                            "Image Optimization: 5,000 transformations, 300,000 cache reads and 100,000 cache writes.",
                            "Builds: 2 build vCPUs, 8 GB build memory, 32 GB build disk, and up to 100 deployments a day. Vercel publishes no monthly Hobby build-minute allowance; build usage is priced per CPU minute on paid plans.",
                            "Automatic HTTPS/SSL, managed delivery infrastructure, rollbacks and preview deployments."
                        ]} />

                        <BlogHeader id="what-happens-at-100gb">What actually happens when you hit 100 GB</BlogHeader>

                        <div data-speakable="true">
                            <BlogText>
                                You get paused, not billed. Vercel&apos;s Hobby documentation states that if you exceed
                                your usage limits on the Hobby plan, you will in most cases have to wait until 30 days
                                have passed before you can use the feature again. Hobby cannot purchase additional usage.
                                Pro behaves the opposite way: you keep serving and pay for what you use above the
                                included amount.
                            </BlogText>
                        </div>

                        <BlogText>
                            One detail worth getting right, because it is commonly stated the other way: <strong>100 GB
                            is not listed as an included Hobby allowance.</strong> Vercel&apos;s Hobby plan page itemises
                            Active CPU, Provisioned Memory, Function Invocations and image quotas, and no data-transfer
                            line appears in that table. The 100 GB figure lives on the Fair Use Guidelines page, under
                            &ldquo;Typical monthly usage guidelines&rdquo;, phrased as <em>up to</em> 100 GB, alongside
                            Vercel&apos;s statement that it will notify you if your usage is an outlier and will try to
                            reach out before taking action. Treat 100 GB as the level at which you become an outlier,
                            not a meter that trips the instant you pass it.
                        </BlogText>

                        <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                                <thead className="bg-stone-100 text-charcoal">
                                    <tr>
                                        <th className="p-4">&nbsp;</th>
                                        <th className="p-4">Hobby (free)</th>
                                        <th className="p-4">Pro</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 text-stone-700">
                                    <tr><td className="p-4 font-bold">Price</td><td className="p-4">$0</td><td className="p-4">$20 per user/month, including $20 of usage credit</td></tr>
                                    <tr><td className="p-4 font-bold">Fast Data Transfer</td><td className="p-4">Up to 100 GB/month, published as a fair-use guideline</td><td className="p-4">1 TB/month included</td></tr>
                                    <tr><td className="p-4 font-bold">Above the included amount</td><td className="p-4"><strong>Capped. You cannot buy more usage.</strong></td><td className="p-4">Pay-as-you-go, $0.15 to $0.35 per GB by region</td></tr>
                                    <tr><td className="p-4 font-bold">Fast Origin Transfer</td><td className="p-4">Up to 10 GB/month</td><td className="p-4">Usage-based, $0.06 to $0.43 per GB by region</td></tr>
                                    <tr><td className="p-4 font-bold">Edge requests</td><td className="p-4">Up to 1M/month</td><td className="p-4">10M/month, then $2.00 to $3.20 per 1M by region</td></tr>
                                    <tr><td className="p-4 font-bold">Deploying seats</td><td className="p-4">Personal account</td><td className="p-4">1 included, $20/month each after that</td></tr>
                                    <tr><td className="p-4 font-bold">Read-only viewer seats</td><td className="p-4">Not applicable</td><td className="p-4">Unlimited and free</td></tr>
                                    <tr><td className="p-4 font-bold">Projects / deployments per day</td><td className="p-4">200 / 100</td><td className="p-4">Unlimited / 6,000</td></tr>
                                    <tr><td className="p-4 font-bold">Permitted use</td><td className="p-4">Personal, non-commercial only</td><td className="p-4">Commercial use permitted</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-stone-500 -mt-2 mb-2">
                            Every figure in this table was read from <a href="https://vercel.com/pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel&apos;s pricing page</a>, <a href="https://vercel.com/docs/plans/hobby" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Hobby plan docs</a>, <a href="https://vercel.com/docs/plans/pro-plan" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Pro plan docs</a> and <a href="https://vercel.com/docs/pricing/regional-pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">regional pricing</a> on August 2, 2026. Overage rates vary by region; confirm yours before budgeting.
                        </p>

                        <BlogText>
                            So the real question is not &ldquo;is 100 GB enough?&rdquo; but &ldquo;what happens on the day
                            it is not?&rdquo; On a personal project, being capped is an inconvenience. On anything that
                            takes orders or generates leads, being capped is an outage, and it tends to arrive on your
                            best traffic day, because that is when the ceiling is reached. That asymmetry, not the
                            allowance itself, is why revenue-generating sites belong on Pro from launch.
                        </BlogText>

                        <BlogText>
                            For sizing: 100 GB per month is roughly 50,000 page views if your pages weigh about 2 MB each,
                            or roughly 200,000 if you have optimised down to about 500 KB. Page weight moves that number
                            by 4x before traffic does, which is why compressing images and trimming JavaScript is also a
                            hosting-cost decision. Check your own average page weight against your own traffic rather than
                            trusting either estimate. All figures here are Vercel&apos;s current published values; confirm
                            them on the pricing page before you budget, because plans change.
                        </BlogText>

                        <BlogHeader id="free-storage">How much storage does Vercel give you for free?</BlogHeader>

                        <div data-speakable="true">
                            <BlogText>
                                Vercel Blob, the file-storage product, is free on Hobby within its usage limits.
                                Vercel&apos;s own pricing example works from 5 GB of included storage, 100,000 simple
                                operations, 10,000 advanced operations and 100 GB of included data transfer, and Hobby
                                accounts can create up to 100 separate Blob stores. Individual files can be up to 5 TB,
                                though anything above 512 MB is never cached, so every access to a file that large is
                                billed as a cache miss.
                            </BlogText>
                        </div>

                        <BlogText>
                            The part that catches people is not the storage figure. <strong>Hobby&apos;s included usage
                            is shared across all Vercel services in a project</strong>, so every file served out of Blob
                            spends the same Edge Requests and Fast Data Transfer allowance your pages are spending. Moving
                            heavy images or downloads into Blob does not move them out of the 100 GB guideline. It only
                            moves them out of your build. Two smaller details worth knowing: browsing your own Blob store
                            in the Vercel dashboard counts as advanced operations against your allowance, and if you do
                            exceed a Blob limit on Hobby you lose access to Blob for 30 days rather than receiving a bill.
                            Source: <a href="https://vercel.com/docs/vercel-blob/usage-and-pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel Blob pricing</a>, checked August 2, 2026.
                        </BlogText>

                        <BlogHeader id="check-usage">How to see your own usage before you hit a cap</BlogHeader>

                        <div data-speakable="true">
                            <BlogText>
                                Open your Vercel dashboard, select the right team in the team switcher, and choose
                                <strong> Usage</strong> in the sidebar. Set the billing-cycle dropdown to
                                <strong> Last 30 days</strong> rather than the current cycle, because a partial month
                                hides the pattern. The allotment indicator shows how much of each included resource you
                                have consumed and the projected cost, and you can break the same view down by project and
                                by region to find what is actually consuming the allowance.
                            </BlogText>
                        </div>

                        <BlogText>
                            Usage notifications are enabled automatically on both plans. Spend Management, which can fire
                            a webhook or pause projects at a set spend amount, is a Pro feature and is opt-in, so nobody
                            has it configured by default. If a Hobby project is approaching a limit, the two things that
                            move the number most are reducing page weight and serving large media from storage designed
                            for it rather than shipping it with the deployment, keeping in mind the shared-allowance point
                            above. Our guides to <Link href="/blog/why-is-my-website-loading-so-slow" className="text-cognac hover:underline">tracing a slow-loading site</Link> and{" "}
                            <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline">speeding up a website</Link> both
                            start with page weight, which is the same lever.
                        </BlogText>

                        <BlogHeader id="commercial-use">Can You Use the Vercel Free Plan for a Business Site?</BlogHeader>

                        <div data-speakable="true">
                            <BlogText>
                                No. Vercel&apos;s Fair Use Guidelines state that Hobby teams are restricted to
                                non-commercial personal use only, and that all commercial usage of Vercel requires
                                either a Pro or Enterprise plan. This is an eligibility rule, not a traffic test, so a
                                site using 2 GB a month can breach it while a personal project using 90 GB does not.
                            </BlogText>
                        </div>

                        <BlogText>
                            Vercel defines commercial usage as any deployment used for the financial gain of anyone
                            involved in any part of the project&apos;s production, explicitly including a paid employee
                            or consultant writing the code. That last clause is the one that catches freelancers and
                            agencies: if you are being paid to build the site, the deployment is commercial even when
                            the site itself sells nothing. Vercel lists these examples:
                        </BlogText>

                        <BlogList items={[
                            "Any method of requesting or processing payment from visitors of the site.",
                            "Advertising the sale of a product or service.",
                            "Receiving payment to create, update, or host the site.",
                            "Affiliate linking being the primary purpose of the site.",
                            "Carrying advertisements, including platforms such as Google AdSense.",
                            "Asking for donations, which Vercel notes also falls under commercial usage."
                        ]} />

                        <BlogText>
                            A brochure site for a business, a client project you invoiced for, a store, a paid
                            membership, and a lead-generation landing page are all commercial under that definition.
                            A portfolio, a personal blog with no ads, a learning project and an unreleased prototype
                            are not. If a project sits on the line, Vercel&apos;s guidelines direct you to ask their
                            support team rather than guess. Source: <a href="https://vercel.com/docs/limits/fair-use-guidelines" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel Fair Use Guidelines</a>, checked August 2, 2026.
                        </BlogText>
                        <BlogText>
                            <a href="https://vercel.com/legal/terms" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel&apos;s terms</a> were last updated June 1, 2026 and were read here on August 2, 2026. They say content submitted on
                            Hobby or a trial Pro plan may be used for model training, with an opt-out described in the
                            account settings, while paid Pro does not enable model training by default. Teams handling
                            confidential or regulated material should review the current terms, data-processing
                            agreement, account setting and approved data classification before deployment.
                        </BlogText>

                        <BlogText>
                            <strong>What happens when an eligible Hobby project reaches a cap.</strong> Hobby does not provide pay-as-you-go overage. If a project reaches a published usage limit, the affected service may be paused until the limit resets. Pro includes commercial use and metered usage options, so plan selection should account for availability requirements before launch rather than waiting for a traffic threshold.
                        </BlogText>

                        <BlogText>
                            Managed WordPress and Vercel package different responsibilities. Compare the plan price, what usage is included, who maintains the plugins or dependencies, backups, security, support, recovery options, and the expected cost of traffic spikes on equivalent requirements.
                        </BlogText>

                        <BlogText>
                            <strong>How should a business budget for Vercel Pro?</strong> Pro currently starts with a $20 monthly platform fee, one deploying seat, and a $20 monthly usage credit. Additional deploying seats and on-demand infrastructure usage can increase the bill. A business should compare the base price, included allowances, expected overage, team size, and support requirements with its current hosting stack. <BlogHighlight>Pro can reduce platform and operations spend for some workloads, but the saving must be calculated from real usage and invoices.</BlogHighlight> For a full breakdown of long-term costs, see our{" "}
                            <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                3-year cost comparison of WordPress vs custom code
                            </Link>. Full current limits are documented at <a href="https://vercel.com/docs/plans/hobby" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel&apos;s Hobby plan docs</a> and <a href="https://vercel.com/pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel&apos;s pricing page</a>.
                        </BlogText>

                        <BlogHeader>How to Estimate Vercel Pro Pricing for a Business Website</BlogHeader>

                        <BlogText>
                            A useful Next.js hosting estimate starts with the workload, not a visitor-count shortcut. Two websites with the same monthly traffic can have very different bills: one may serve mostly cached pages, while the other runs authentication, search, personalization, image transformations, and API calls on every visit. Record the current architecture and expected production behavior before comparing Vercel Pro with managed WordPress, Cloudflare Workers, Netlify, or another commercial host.
                        </BlogText>

                        <BlogText>
                            Build the estimate as <strong>platform fee + added deploying seats + paid add-ons + metered infrastructure usage</strong>, then account for the included allocations and monthly usage credit shown in Vercel&apos;s current pricing. Do not count Hobby allowances in a commercial scenario. Use at least three cases: a normal month, a campaign or seasonal peak, and an incident month with unusual function or transfer usage.
                        </BlogText>

                        <BlogList items={[
                            "Team access: count people who need deploying permissions separately from read-only collaborators, then verify the current seat rules.",
                            "Fast Data Transfer and Edge Requests: how heavy your pages are, how well they cache, how many requests a month, what gets downloaded, and where your traffic comes from.",
                            "Functions: list every API route, form handler, login, scheduled job, search, personalisation and incoming webhook.",
                            "Compute profile: measure Active CPU and provisioned memory for dynamic workloads instead of assuming every Next.js request is static.",
                            "Images and media: count the image transformations, what you serve optimised, video, big catalogues, and any files people download.",
                            "Everything outside the hosting fee: analytics, speed monitoring, logs, security, databases, email, the CMS, and support.",
                            "Spend controls and continuity: define alerts, hard limits, ownership, incident contacts, rollback steps, and the acceptable impact of a traffic spike."
                        ]} />

                        <BlogText>
                            Compare the result with an equivalent current-state total. A managed WordPress invoice may already bundle backups, caching, security, support, and recovery. A Vercel invoice does not represent the entire application stack if the site also uses a headless CMS, database, search service, transactional email, commerce backend, or monitoring platform. This is why a credible three-year comparison shows every retained and replacement service instead of subtracting one hosting headline from another.
                        </BlogText>

                        <BlogQuote>
                            The correct business question is not whether Vercel can start at $20. It is what the complete production workload costs under normal, peak, and failure conditions.
                        </BlogQuote>

                        <BlogHeader>Vercel Hobby vs Pro: A Launch Checklist</BlogHeader>

                        <BlogText>
                            Use Hobby for eligible personal, non-commercial work only. For a client site, company website, store, paid membership, lead-generation site, or other revenue-supporting production project, use Pro or another commercially permitted plan from launch. Then confirm the following in the written hosting and handover plan:
                        </BlogText>

                        <BlogList items={[
                            "The client owns or controls the Vercel team, domain, repository, billing method, and recovery contacts.",
                            "The selected plan permits the commercial workload and provides the required collaboration, security, privacy, and support features.",
                            "Expected traffic, data transfer, edge requests, functions, builds, images, and logs have been modeled against current included usage.",
                            "Spend alerts and limits are configured, and someone is responsible for responding before a limit or unexpected bill becomes an incident.",
                            "Preview, production, environment-variable, rollback, DNS, and access-removal procedures are documented before handover.",
                            "The team rechecks current Vercel pricing and terms at proposal, launch, and renewal because plan features and limits can change."
                        ]} />

                        <BlogHeader>Five Vercel Hosting Decisions to Recheck in 2026</BlogHeader>

                        <BlogText>
                            Vercel pricing, usage limits, deployment portability, and competing platforms have changed. These five checks affect a 2026 Next.js hosting decision.
                        </BlogText>

                        <h3 id="hobby-hard-caps" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">1. Hobby has hard caps with no overage</h3>
                        <BlogText>
                            The four Hobby limits covered above (Fast Data Transfer, edge requests, function invocations and compute hours) make usage planning important for eligible personal projects. Build minutes are deliberately absent from that list: Vercel publishes no monthly Hobby build-minute allowance, and prices build usage per CPU minute on paid plans. Commercial teams should choose Pro from launch because plan eligibility is not a traffic test. Review the current plan documentation and model expected usage before publishing. Source: <a href="https://vercel.com/docs/plans/hobby" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel Hobby plan docs</a>.
                        </BlogText>

                        <h3 id="active-cpu-pricing" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">2. Active CPU pricing is the default Fluid Compute model since June 2025</h3>
                        <BlogText>
                            Vercel announced Active CPU pricing in June 2025 and made it the default Fluid Compute model for supported plans. The model separates Active CPU time from Provisioned Memory, so request shape and workload behavior affect cost. Commercial marketing and e-commerce teams should model their functions against Pro&apos;s included usage and overage rates rather than treating a technically small workload as Hobby-eligible. Source: <a href="https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel Active CPU announcement</a>.
                        </BlogText>

                        <h3 id="pro-bandwidth-overage" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">3. Pro data-transfer overage is regionally priced</h3>
                        <BlogText>
                            Pro currently includes 1 TB of Fast Data Transfer and 10 million Edge Requests per month. Additional Fast Data Transfer starts at $0.15 per GB and varies by region, so 100 GB of additional transfer starts around $15 rather than one universal overage price. Image-heavy catalogs, downloads, and globally distributed traffic should be modeled by region. Sources: <a href="https://vercel.com/docs/plans/pro-plan" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel Pro plan docs</a> and <a href="https://vercel.com/docs/pricing/regional-pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">regional pricing</a>.
                        </BlogText>

                        <h3 id="enterprise-floor" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">4. Vercel Enterprise pricing is custom, not a public floor</h3>
                        <BlogText>
                            Vercel does not publish one universal Enterprise starting price. Pricing depends on the negotiated product, security, compliance, support, usage, and commercial terms. Treat third-party deal estimates as context, not a guaranteed floor, and request a current quote for an equivalent scope. Source: <a href="https://vercel.com/pricing" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel pricing</a>.
                        </BlogText>

                        <h3 id="nextjs-16-build-adapters" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">5. Next.js 16.2 stabilized the Adapters API</h3>
                        <BlogText>
                            Next.js 16.2 made the Adapters API stable, giving deployment platforms a public contract for consuming Next.js build output. That improves portability, but provider feature support, caching behavior, observability, and migration work still need to be tested for the application. Source: <a href="https://nextjs.org/blog/next-16-2" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Next.js 16.2 release notes</a>.
                        </BlogText>

                        <BlogHeader>Cloudflare Workers and Netlify: When to Consider Alternatives</BlogHeader>

                        <BlogText>
                            Vercel is a useful comparison baseline because it maintains Next.js and provides first-party deployment integration. Stable adapters make other platforms practical candidates, but compatibility and total cost should be tested against the actual application.
                        </BlogText>

                        <BlogText>
                            <strong>Cloudflare Workers.</strong> Cloudflare&apos;s current Next.js guide uses the OpenNext adapter on Workers and documents broad App Router, Pages Router, SSR, SSG, ISR, Server Actions, and streaming support, with some feature-specific limitations. Compare Workers pricing and limits with the app&apos;s traffic, compute, image, cache, and operational needs. Source: <a href="https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Cloudflare&apos;s Next.js deployment guide</a>.
                        </BlogText>

                        <BlogText>
                            <strong>Netlify.</strong> On price the two are closest where team size decides it: Netlify Pro is $20 a month with unlimited members, while Vercel Pro is $20 a month for the first deploying seat and $20 for each one after it, so a five-developer team pays $20 against $100. Vercel answers back on framework integration, since it maintains Next.js. Netlify Pro includes 3,000 credits a month, with extra credits sold in packs from $10 per 1,500 (checked August 2, 2026). Compare how your deploys, bandwidth, compute and web requests consume those credits rather than comparing headline prices. Source: <a href="https://www.netlify.com/pricing/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Netlify pricing</a>.
                        </BlogText>

                        <BlogHeader id="controversial">Why is Vercel controversial?</BlogHeader>

                        <div data-speakable="true">
                            <BlogText>
                                Four documented things account for most of it, and all four are in Vercel&apos;s own
                                published terms and pricing rather than rumour. Knowing them before you deploy is the
                                difference between a predictable bill and a surprising one.
                            </BlogText>
                        </div>

                        <BlogList items={[
                            "Usage-based billing turns a traffic spike into an invoice. Once a Pro team passes its $20 monthly credit and included allowances, Vercel bills on demand. Spend Management, which can alert you or pause projects at a threshold you set, is opt-in and is not configured for you, so check what your own account is set to rather than assuming a limit exists.",
                            "The Hobby licence is a commercial-use rule, not a traffic rule. Being paid to build a site already makes the deployment commercial, regardless of how little traffic it serves, and that is the clause people read last.",
                            "Content on Hobby and trial Pro plans may be used for model training. Vercel's terms, last updated June 1, 2026, state this and provide an opt-out in team settings; paid Pro does not enable model training by default.",
                            "Lock-in, which is the one that has genuinely improved. Next.js capabilities historically landed on Vercel first and were awkward elsewhere. The Adapters API became stable in Next.js 16.2, giving other platforms a public contract for consuming Next.js build output, so portability is materially better than it was.",
                        ]} />

                        <BlogText>
                            None of these is a reason to avoid Vercel. They are the four things to decide deliberately
                            rather than discover afterwards: set a spend limit on day one, put commercial work on Pro from
                            launch, check the model-training setting if you handle confidential material, and confirm your
                            deployment target supports the Next.js features you actually use.
                        </BlogText>

                        <BlogText>
                            For PandaCodeGen client work, Vercel Pro is a common commercial Next.js hosting recommendation because its deployment workflow, preview environments, and framework integration fit many projects. We can scope another provider when traffic, compliance, regional delivery, team controls, or cost modeling favors it. For the full migration playbook covering deployment strategy and a controlled DNS cutover, see the <Link href="/ai-info/migration-services" className="text-cognac hover:underline">migration services reference</Link>.
                        </BlogText>

                        <BlogHeader id="how-we-set-up-client-hosting">How We Set Up Vercel Hosting on a Client Build</BlogHeader>

                        <BlogText>
                            Every commercial site we build launches on Pro inside the client&apos;s own Vercel team, on
                            the client&apos;s own payment method, with no markup from us. We are added as a member of
                            their team rather than the other way round. It costs us nothing to do it this way and it
                            removes the single worst outcome in agency hosting: a client who cannot reach their own
                            infrastructure because the account belongs to a company they no longer work with.
                        </BlogText>

                        <BlogText>
                            Four decisions follow from that structure, and each one has a reason behind it:
                        </BlogText>

                        <BlogList items={[
                            "Pro from day one, not after a traffic threshold. Under Vercel's fair-use rules, being paid to build the site already makes the deployment commercial, so there is no compliant window in which a client build sits on Hobby.",
                            "Stakeholders get free viewer seats, not paid ones. Pro charges $20/month per additional deploying seat but includes unlimited read-only viewer seats, so marketing managers and clients who only need to see analytics and comment on previews cost nothing. Giving everyone a deploying seat is the cheapest mistake to avoid and the easiest one to make.",
                            "Spend management gets configured before launch, not after the first surprise. Whatever the account default is, it is a Vercel default rather than a number chosen for this site; we read it during setup and set a threshold that matches the actual expected bill.",
                            "Billing, domain, repository and recovery contacts are checked as a set. Ownership of the Vercel team means little if the domain registrar or the repository sits somewhere else."
                        ]} />

                        <BlogText>
                            On performance figures, we hold ourselves to the same rule this article applies to Vercel&apos;s
                            numbers. We publish a before-and-after only alongside the test profile, date and conditions
                            that produced it. Our MyCustomPatches records predate that policy and are still being
                            reconciled, so no load-time or PageSpeed figures for that project appear here. The available
                            implementation detail is in the{" "}
                            <Link href="/work/mycustompatches" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                MyCustomPatches project write-up
                            </Link>.
                        </BlogText>

                        <BlogQuote>
                            Separate the implementation result from the hosting plan: measure speed against the agreed pages, then price commercial hosting from real team and usage requirements.
                        </BlogQuote>

                        <BlogHeader>Vercel Hobby vs Pro: Choose the Right Plan</BlogHeader>

                        <BlogText>
                            Hobby and Pro serve different users. Hobby answers the search question &ldquo;is Vercel free?&rdquo; for eligible personal, non-commercial projects. Pro is the appropriate starting plan for a commercial production website.
                        </BlogText>

                        <BlogList items={[
                            "Personal, non-commercial project: Hobby may fit if its features and published usage limits meet the project's needs.",
                            "Commercial or revenue-generating website: use Pro from launch, regardless of whether traffic fits within Hobby's technical limits.",
                            "Function-heavy application: estimate Active CPU, memory, invocations, data transfer, and other metered usage before selecting a plan.",
                            "Multi-person delivery team: include Pro seats, access controls, preview workflows, and support requirements in the cost model.",
                            "WordPress migration: budget the rebuild, content migration, redirect mapping, QA, cutover, ongoing application maintenance, and hosting as separate line items."
                        ]} />

                        <BlogText>
                            For a business website, service site, or e-commerce storefront, start the Vercel pricing comparison with Pro&apos;s $20 monthly platform fee, then add any extra seats and expected usage. If you need a workload and migration estimate, our{" "}
                            <Link href="/services/wordpress-migration?ref=blog/nextjs-hosting-zero-cost" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                WordPress migration service
                            </Link>{" "}
                            includes a free assessment.
                        </BlogText>

                        <BlogText>
                            The honest answer depends on the current invoices and the target workload. <BlogHighlight>Next.js on Vercel Pro may lower total operating cost, but managed WordPress can still be the better fit when its editing workflow, plugin ecosystem, support model, or migration cost outweighs the projected saving.</BlogHighlight>
                        </BlogText>

                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Five decisions collapse into three. Hobby eligibility is a licence rule, not a capacity rule, so a commercial site is ineligible at any traffic level. Pro is the commercial floor at $20 a month plus seats and usage. And your hosting plan and your PageSpeed score are independent claims that get evidenced separately.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Vercel Hobby is free for personal, non-commercial projects.</strong> Its Fast Data Transfer figure is widely quoted as an included 100 GB allowance, and Vercel&apos;s Hobby plan page does not itemise it that way — see the section above. Either way, technical capacity does not make a commercial project eligible.</li>
                            <li><strong>Vercel Pro is the starting point for commercial production websites.</strong> Budget from the $20 monthly platform fee, then add any extra seats and on-demand usage; review current pricing before launch.</li>
                            <li><strong>Next.js can reduce request-time work and server administration.</strong> Managed infrastructure, application maintenance, and usage costs still exist.</li>
                            <li><strong>Performance evidence and hosting cost are separate claims.</strong> A faster rebuild does not make commercial hosting free, and a hosting plan does not produce a PageSpeed score. Price the plan from usage and seats; measure performance against named pages under stated test conditions.</li>
                            <li><strong>Compare equivalent operating requirements.</strong> Use current invoices, team size, traffic, functions, support, compliance, and migration cost to estimate the three-year total.</li>
                        </ol>
                    </section>

                    {/* CTA Section */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Need a Commercial Next.js Hosting Plan?</h3>
                        <p className="text-stone-600 mb-6">
                            Book a free discovery call. We&apos;ll review your current hosting costs, Vercel Pro requirements, and the migration inputs needed for a defensible comparison.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                                Book Discovery Call <ArrowRight className="w-5 h-5" />
                            </CalModalButton>
                    </div>

                    <blockquote className="border-l-4 border-cognac/30 pl-6 my-8 py-2">
                        <p className="text-stone-600 italic text-lg leading-relaxed">&quot;They worked with me to make a website that I could afford.&quot;</p>
                        <cite className="text-sm text-stone-500 not-italic block mt-2"><a href="https://www.trustpilot.com/review/pandacodegen.com" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-cognac hover:underline">James Peace, via Trustpilot review</a></cite>
                    </blockquote>

                    {/* FAQ Section */}
                    {hostingFAQs.length > 0 && <FAQAccordion faqs={hostingFAQs} />}

                    {/* Related Posts */}
                    <TopicUpLink postId="nextjs-hosting-zero-cost" />

                    <RelatedPosts currentPostId="nextjs-hosting-zero-cost" />

                </article>
            </main>
            <Footer />
        </>
    );
}
