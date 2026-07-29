import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const hostingFAQs = blogPosts.find(p => p.id === 'nextjs-hosting-zero-cost')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/VercelPlanAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Is Vercel Free? 2026 Pricing & the 100GB Cap",
    description: "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
    alternates: {
        canonical: '/blog/nextjs-hosting-zero-cost',
    },
    keywords: ["is vercel free", "vercel free tier bandwidth 100gb 2026", "vercel pricing next.js 2026", "free nextjs hosting", "vercel free tier", "free website hosting 2026", "nextjs hosting cost", "vercel vs wordpress hosting", "zero cost website hosting", "vercel free tier limits"],
    openGraph: {
        title: "Is Vercel Free? 2026 Pricing, Limits & the 100GB Bandwidth Cap",
        description: "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
        type: "article",
        publishedTime: "2026-03-13",
        modifiedTime: "2026-07-24T00:00:00-05:00",
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
            "headline": "Is Vercel Free? 2026 Pricing, Limits & the 100GB Bandwidth Cap",
            "description": "Vercel Hobby is free for personal, non-commercial projects and includes 100 GB Fast Data Transfer. Pro for businesses starts at $20/month plus usage.",
            "image": ogImageUrlForPath("/blog/nextjs-hosting-zero-cost"),
            "datePublished": "2026-03-13T00:00:00-05:00",
            "dateModified": "2026-07-24T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about",
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost" },
            "articleSection": "Performance",
            "keywords": ["is Vercel free", "Vercel Hobby plan", "Vercel free tier bandwidth 100GB 2026", "free Next.js hosting", "Next.js hosting cost", "Vercel Pro pricing"],
            "about": [
                {"@type": "Thing", "name": "Website Hosting Costs"},
                {"@type": "Thing", "name": "Vercel Free Tier"},
                {"@type": "Thing", "name": "Next.js"},
                {"@type": "Thing", "name": "Static Site Generation"}
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Vercel Pricing", "url": "https://vercel.com/pricing" },
                { "@type": "CreativeWork", "name": "Vercel Terms of Service", "url": "https://vercel.com/legal/terms" },
                { "@type": "CreativeWork", "name": "Vercel Hobby Plan Docs", "url": "https://vercel.com/docs/plans/hobby" },
                { "@type": "CreativeWork", "name": "Next.js Static Generation", "url": "https://nextjs.org/docs/app/building-your-application/rendering/server-components" },
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
            "dateModified": "2026-07-24T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/nextjs-hosting-zero-cost#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://x.com/PandaCodeGen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.goodfirms.co/company/pandacodegen", "https://www.crunchbase.com/organization/pandacodegen", "https://www.designrush.com/agency/profile/pandacodegen", "https://www.sortlist.com/agency/pandacodegen", "https://www.f6s.com/pandacodegen", "https://www.sanity.io/exchange/community/pandacodegen", "https://www.behance.net/pandacodegen", "https://dev.to/pandacodegen", "https://www.reddit.com/user/PandaCodeGen/"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses migrating from slow or costly platforms. Performance targets, test conditions, acceptance criteria, and remedies are defined in each signed scope.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
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
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Is Vercel Free? 2026 Hobby Limits and Business Pricing", href: "/blog/nextjs-hosting-zero-cost" }
                        ]}
                    />

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
                            Short answer: Vercel Hobby is free in 2026 for personal, non-commercial projects and includes 100 GB of Fast Data Transfer each month. A production business website should use Vercel Pro, which currently starts with a $20 monthly platform fee, one deploying seat, and metered usage. Here is the practical Vercel Hobby vs Pro comparison, including limits and commercial Next.js hosting costs.
                        </p>

                        <BlogAuthor
                            date="Mar 13, 2026"
                            readTime="10 min read"
                            bio="Hassan is PandaCodeGen's co-founder and lead engineer. He plans Next.js migrations around measurable performance, search continuity, maintainability, and client-owned infrastructure."
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
                            "Vercel Hobby is a $0 plan for eligible personal, non-commercial projects, with 100 GB of Fast Data Transfer included each month.",
                            "Vercel Pro is the starting point for commercial production websites and currently begins with a $20 monthly platform fee, one deploying seat, and metered usage.",
                            "A Next.js rebuild can reduce server administration and request-time rendering without making infrastructure free.",
                            "Use this guide to compare Vercel Hobby vs Pro and estimate a realistic Next.js hosting cost for a business website."
                        ]} />
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">Vercel pricing for business websites is not determined only by traffic. Hobby is free for eligible personal, non-commercial work and includes 100 GB of Fast Data Transfer plus published usage limits. Commercial websites should begin on Pro, currently a $20 monthly platform fee that includes one deploying seat and a usage credit, even when their traffic would fit inside Hobby&apos;s technical allowances. Added seats and on-demand usage can increase the bill. Compare the full platform, maintenance, and usage costs before choosing between managed WordPress hosting and commercial Next.js hosting.</p>

                    {/* About PandaCodeGen: brand anchor in first-third zone */}
                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen rebuilds suitable websites as custom Next.js code with documented migration, measurement, and handover requirements. Commercial Vercel projects launch in the client&apos;s own account on Pro, currently starting with a $20 monthly platform fee that includes one deploying seat, so the client pays the platform directly with no hosting markup. Added seats and on-demand usage are billed by Vercel. PageSpeed targets, representative pages, test conditions, acceptance criteria, and any remedy are defined in the signed project scope. Full service pricing is on the <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">

                        <BlogHeader>Understand What Your Hosting Bill Covers</BlogHeader>

                        <BlogText>
                            A hosting invoice can combine infrastructure, managed updates, backups, security tooling, support, and traffic allowances. <BlogHighlight>The useful comparison is total operating cost, not a $0 headline.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            A dynamic WordPress page often requires request-time application and database work. Managed hosts price the compute, storage, traffic, backups, security, and support needed to keep that stack available. The bill may be justified, but the architecture and service level should match what the website actually needs.
                        </BlogText>

                        <BlogText>
                            Paying more can improve capacity and support, but it does not automatically fix slow themes, plugins, database queries, third-party scripts, or poor caching. Hosting quality is one performance input, not a guaranteed load-time result.
                        </BlogText>

                        <BlogText>
                            A business hosting budget may include:
                        </BlogText>

                        <BlogList items={[
                            "Shared WordPress hosting: lower base pricing, shared capacity, and a service level that varies by provider.",
                            "Managed WordPress hosting: platform support, backups, security controls, caching, and traffic allowances bundled into the plan.",
                            "Additional operating costs: premium plugins, monitoring, development support, CDN usage, backups, and security services when they are not included."
                        ]} />

                        <BlogText>
                            Over three years, the meaningful comparison is <BlogHighlight>hosting, licenses, maintenance labor, usage charges, and the cost of incidents</BlogHighlight>. Calculate those inputs from the current invoices before using a migration savings estimate.
                        </BlogText>

                        <BlogText>
                            Hosting-plan eligibility and page performance are separate decisions. A framework or
                            provider does not establish a route&apos;s score. Keep dated field data and repeated lab
                            evidence for any project outcome; no MyCustomPatches performance figure is used here
                            because the original test record has not been reconciled.
                        </BlogText>

                        <BlogQuote>
                            A faster architecture can reduce request-time work, but the right hosting decision still depends on licensing, traffic, functions, storage, support, and operational risk.
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
                            The practical benefit is less server administration, automatic deployment infrastructure, and usage-based scaling. Hobby can cost $0 for eligible personal, non-commercial projects. Commercial production sites should budget from Vercel Pro&apos;s $20 monthly platform fee, then add any extra seats and on-demand usage.
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
                            Vercel Hobby is a real deployment plan for eligible personal, non-commercial projects. Here is the current allowance from Vercel&apos;s published plan documentation:
                        </BlogText>

                        <BlogList items={[
                            "100 GB of Fast Data Transfer per month",
                            "1,000,000 edge requests per month",
                            "1,000,000 serverless function invocations per month",
                            "4 CPU-hours of function compute per month",
                            "6,000 build execution minutes per month",
                            "Automatic HTTPS/SSL, managed delivery infrastructure, rollbacks, and preview deployments, included for eligible Hobby use"
                        ]} />

                        <BlogHeader id="what-happens-at-100gb">What actually happens when you hit 100 GB</BlogHeader>

                        <BlogText>
                            This is the part the number on its own does not tell you, and it is the difference that matters
                            most when you are deciding which plan to launch on. <strong>Hobby does not bill you for going
                            over. It restricts you.</strong> Vercel&apos;s plan documentation states that Hobby accounts
                            are bound by usage caps and cannot purchase additional usage. Pro behaves the opposite way:
                            you keep serving and pay for what you use above the included amount.
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
                                    <tr><td className="p-4 font-bold">Fast Data Transfer included</td><td className="p-4">100 GB/month</td><td className="p-4">1 TB/month</td></tr>
                                    <tr><td className="p-4 font-bold">Above the included amount</td><td className="p-4"><strong>Capped. You cannot buy more usage.</strong></td><td className="p-4">Pay-as-you-go, from $0.15 per GB</td></tr>
                                    <tr><td className="p-4 font-bold">Edge requests</td><td className="p-4">1M/month</td><td className="p-4">10M/month, then from $2 per 1M</td></tr>
                                    <tr><td className="p-4 font-bold">Permitted use</td><td className="p-4">Personal, non-commercial only</td><td className="p-4">Commercial use permitted</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            So the real question is not &ldquo;is 100 GB enough?&rdquo; but &ldquo;what happens on the day
                            it is not?&rdquo; On a personal project, being capped is an inconvenience. On anything that
                            takes orders or generates leads, being capped is an outage — and it tends to arrive on your
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

                        <BlogText>
                            The licensing boundary matters more than the traffic boundary: Hobby is for <strong>personal, non-commercial use</strong> under Vercel&apos;s terms. A commercial, client, or revenue-generating production website should use Pro from launch even when its traffic would fit within Hobby&apos;s 100 GB Fast Data Transfer allowance.
                        </BlogText>
                        <BlogText>
                            Vercel&apos;s terms were last updated June 1, 2026. They currently say content submitted on
                            Hobby or a trial Pro plan may be used for model training, with an opt-out described in the
                            account settings, while paid Pro does not enable model training by default. Teams handling
                            confidential or regulated material should review the current terms, data-processing
                            agreement, account setting and approved data classification before deployment.
                        </BlogText>

                        <BlogText>
                            <strong>What happens when an eligible Hobby project reaches a cap.</strong> Hobby does not provide pay-as-you-go overage. If a project reaches a published usage limit, the affected service may be paused until the limit resets. Pro includes commercial use and metered usage options, so plan selection should account for availability requirements before launch rather than waiting for a traffic threshold.
                        </BlogText>

                        <BlogText>
                            Managed WordPress and Vercel package different responsibilities. Compare plan price, usage allowances, plugin or dependency maintenance, backups, security controls, support, recovery options, and the expected cost of traffic spikes on equivalent requirements.
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
                            "Fast Data Transfer and Edge Requests: estimate page weight, cache behavior, monthly requests, downloads, and traffic concentration by region.",
                            "Functions: inventory API routes, form handlers, authentication, scheduled work, search, personalization, and third-party webhooks.",
                            "Compute profile: measure Active CPU and provisioned memory for dynamic workloads instead of assuming every Next.js request is static.",
                            "Images and media: estimate source-image transformations, optimized delivery, video, large catalogs, and downloadable files separately.",
                            "Observability and add-ons: include analytics, speed monitoring, logs, security controls, databases, email, CMS, and support that sit outside the base hosting fee.",
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

                        <h3 id="hobby-hard-caps" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">1. Hobby tier now has hard caps with no overage</h3>
                        <BlogText>
                            The five Hobby limits covered above (Fast Data Transfer, edge requests, function invocations, compute hours, and build minutes) make usage planning important for eligible personal projects. Commercial teams should choose Pro from launch because plan eligibility is not a traffic test. Review the current plan documentation and model expected usage before publishing. Source: <a href="https://vercel.com/docs/plans/hobby" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Vercel Hobby plan docs</a>.
                        </BlogText>

                        <h3 id="active-cpu-pricing" className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-3 leading-tight">2. Active CPU pricing is now the default Fluid Compute model</h3>
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
                            <strong>Netlify.</strong> Netlify&apos;s credit-based Pro plan starts at $20 per month with 3,000 credits and unlimited seats. In July 2026 it added higher monthly credit tiers with rollover on eligible tiers, so compare production deploys, bandwidth, compute, and web-request consumption rather than looking only at seats. Source: <a href="https://www.netlify.com/pricing/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Netlify pricing</a>.
                        </BlogText>

                        <BlogText>
                            For PandaCodeGen client work, Vercel Pro is a common commercial Next.js hosting recommendation because its deployment workflow, preview environments, and framework integration fit many projects. We can scope another provider when traffic, compliance, regional delivery, team controls, or cost modeling favors it. For the full migration playbook covering deployment strategy and a controlled DNS cutover, see the <Link href="/services" className="text-cognac hover:underline">services overview</Link>.
                        </BlogText>

                        <BlogHeader>Performance Snapshot: MyCustomPatches Before and After</BlogHeader>

                        <BlogText>
                            The documented performance comparison is useful, but it should not be presented as a $0 commercial-hosting receipt.
                        </BlogText>

                        <BlogText>
                            <strong>Before the WordPress rebuild:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Load time: 3.2 seconds",
                            "PageSpeed score: 45/100",
                            "Status: owner-reported figures pending final evidence-record reconciliation"
                        ]} />

                        <BlogText>
                            <strong>After the Next.js rebuild:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Load time: 0.7 seconds",
                            "PageSpeed score: 97/100",
                            "Commercial production hosting budgeted separately from the performance result"
                        ]} />

                        <BlogText>
                            <BlogHighlight>The owner reports the site moved from a slower legacy baseline to a faster result after the rebuild.</BlogHighlight> We publish specific before-and-after numbers only alongside the test profile, date and conditions that produced them, so none are quoted here. It is not an independent benchmark or a hosting-price claim. Commercial Vercel hosting should be budgeted from Pro&apos;s $20 monthly platform fee, plus any added seats and on-demand usage.
                        </BlogText>

                        <BlogText>
                            The result demonstrates an implementation improvement, not a universal hosting-cost promise. See the{" "}
                            <Link href="/work" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                MyCustomPatches project evidence
                            </Link>{" "}
                            for the available implementation and performance details.
                        </BlogText>

                        <BlogQuote>
                            Separate the implementation result from the platform plan: measure speed against the agreed pages, then price commercial hosting from real team and usage requirements.
                        </BlogQuote>

                        <BlogHeader>Vercel Hobby vs Pro: Choose the Right Plan</BlogHeader>

                        <BlogText>
                            Hobby and Pro serve different users. Hobby answers the search question "is Vercel free?" for eligible personal, non-commercial projects. Pro is the appropriate starting plan for a commercial production website.
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
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Vercel Hobby is free for personal, non-commercial projects.</strong> Its current allowance includes 100 GB of Fast Data Transfer, but technical capacity does not make a commercial project eligible.</li>
                            <li><strong>Vercel Pro is the starting point for commercial production websites.</strong> Budget from the $20 monthly platform fee, then add any extra seats and on-demand usage; review current pricing before launch.</li>
                            <li><strong>Next.js can reduce request-time work and server administration.</strong> Managed infrastructure, application maintenance, and usage costs still exist.</li>
                            <li><strong>Performance evidence and hosting cost are separate claims.</strong> PandaCodeGen&apos;s owner reports that MyCustomPatches moved from a 3.2-second load time to 0.7 seconds; final test-record reconciliation remains pending, and the result does not make commercial hosting free.</li>
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
                    <RelatedPosts currentPostId="nextjs-hosting-zero-cost" />

                </article>
            </main>
            <Footer />
        </>
    );
}
