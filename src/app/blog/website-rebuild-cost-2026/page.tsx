import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, DollarSign, TrendingUp, XCircle, Scale } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const rebuildCostFAQs = blogPosts.find(p => p.id === "website-rebuild-cost-2026")?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamic(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: { absolute: "Website Rebuild Cost 2026: Honest Pricing From $2,000 to $250,000" },
    description: "Website rebuild costs range from $2,000 freelance to $250,000 enterprise in 2026. Honest pricing by platform, what drives cost up, and how to spot a padded quote.",
    alternates: {
        canonical: "/blog/website-rebuild-cost-2026",
    },
    keywords: [
        "website rebuild cost 2026",
        "how much does a website rebuild cost",
        "website rebuild pricing",
        "website rebuild vs redesign cost",
        "small business website rebuild cost",
        "custom website rebuild price",
        "agency website rebuild quote",
        "website rebuild budget 2026",
        "website migration cost 2026",
        "nextjs rebuild cost"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Website Rebuild Cost 2026: Honest Pricing From $2,000 to $250,000",
        description: "Website rebuild costs range from $2,000 freelance to $250,000 enterprise in 2026. Honest pricing by platform, what drives cost up, and how to spot a padded quote.",
        type: "article",
        publishedTime: "2026-04-19T00:00:00-05:00",
        modifiedTime: "2026-04-19T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/website-rebuild-cost-2026",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Rebuild Cost 2026: Honest Pricing From $2,000 to $250,000",
        description: "Website rebuild costs range from $2,000 freelance to $250,000 enterprise in 2026. Honest pricing by platform and how to spot a padded quote.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#article",
            "headline": "Website Rebuild Cost 2026: Honest Pricing From $2,000 to $250,000",
            "description": "Website rebuild costs range from $2,000 freelance to $250,000 enterprise in 2026. Honest pricing by platform, what drives cost up, and how to spot a padded quote.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-04-19T00:00:00-05:00",
            "dateModified": "2026-04-19T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Lead Full-Stack Engineer",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026" },
            "articleSection": "Pricing",
            "keywords": ["website rebuild cost 2026", "website rebuild pricing", "rebuild vs redesign cost", "custom website rebuild", "website migration cost"],
            "wordCount": 3400,
            "timeRequired": "PT14M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Website Rebuild Cost" },
                { "@type": "Thing", "name": "Website Redesign" },
                { "@type": "Thing", "name": "Next.js Framework" },
                { "@type": "Thing", "name": "Custom Web Development Pricing" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google Core Web Vitals Overview", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Google Search Central: Site Moves With URL Changes", "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
                { "@type": "CreativeWork", "name": "Clutch Agency Pricing Directory", "url": "https://clutch.co" },
                { "@type": "CreativeWork", "name": "Vercel Customer Stories", "url": "https://vercel.com/customers" },
                { "@type": "CreativeWork", "name": "Next.js Official Documentation", "url": "https://nextjs.org/docs" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#faq",
            "mainEntity": rebuildCostFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Website Rebuild Cost 2026", "item": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#webpage",
            "url": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026",
            "name": "Website Rebuild Cost 2026: Honest Pricing From $2,000 to $250,000",
            "description": "Website rebuild costs range from $2,000 freelance to $250,000 enterprise in 2026. Honest pricing by platform, what drives cost up, and how to spot a padded quote.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-04-19T00:00:00-05:00",
            "dateModified": "2026-04-19T00:00:00-05:00",
            "inLanguage": "en-US",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#breadcrumb" }
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow, expensive platforms. We guarantee 95 to 100/100 Google PageSpeed on every build.",
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

export default function WebsiteRebuildCost2026Page() {
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
                        { label: "Website Rebuild Cost 2026" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold mb-4">
                            <DollarSign className="w-3 h-3" /> Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            How Much Does a Website Rebuild Cost in 2026?{" "}
                            <span className="font-serif italic text-cognac">Honest Pricing From $2,000 to $250,000.</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            A website rebuild in 2026 costs between $2,000 with a freelancer and $250,000 with an agency. Most small-to-mid businesses overpay by 40 to 60 percent because they ask general agencies instead of specialists. This is the honest breakdown, with published pricing, a 90+ PageSpeed guarantee, and the red flags on padded quotes.
                        </p>
                        <BlogAuthor
                            date="Apr 19, 2026"
                            readTime="13 min read"
                            bio="Hassan runs PandaCodeGen, a custom web development studio that rebuilds slow or outdated sites on Next.js. Every rebuild is fixed-price, ships in 2 to 6 weeks, and guarantees 95 to 100 on Google PageSpeed Mobile."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-6">
                <div className="max-w-3xl mx-auto">
                    <PageSpeedAnimation />
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Executive Summary */}
                    <div className="mb-10 p-6 bg-orange-50 border border-orange-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The 4-Bullet Summary</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Most rebuild quotes are padded 40 to 60 percent. The five red flags: no itemised scope, discovery billed separately, strategy priced above development, 50 percent or more upfront, vague deliverables without measurable outcomes.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Most businesses pay $2,000 to $30,000 total. Freelancer $2K-$12K, boutique studio $8K-$30K, full agency $30K-$120K. The $60K agency quote and the $12K specialist quote often ship the same outcome.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Rebuild and redesign are not the same. A redesign updates how the site looks. A rebuild replaces the underlying technology. Redesigns cost 30 to 60 percent less but do not fix speed, security, or platform lock-in.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> A well-scoped rebuild on a modern framework like Next.js pays for itself in 12 to 24 months through reduced hosting and maintenance costs alone. Every PandaCodeGen rebuild ships with a written 90+ PageSpeed Mobile guarantee. If the site does not hit it, we keep working until it does.</li>
                        </ul>
                    </div>

                    <BlogText>
                        Last week a founder running a digital magazine sent me an agency quote. $35,000 for a Webflow rebuild of an 18-page site. Six-week timeline, 50 percent upfront, strategy phase invoiced separately before the build started.
                    </BlogText>
                    <BlogText>
                        We priced the same rebuild at $1,200. Next.js front-end, Sanity CMS, custom editorial design, 90+ PageSpeed guarantee. Delivered in one week.
                    </BlogText>
                    <BlogText>
                        The gap between those two quotes is this entire blog post. Not because her agency was dishonest. They were charging what their overhead structure requires. But she almost signed a $35,000 contract because nobody had ever shown her what a rebuild actually costs when you remove agency padding, platform tax, and billable strategy sessions that do not ship code.
                    </BlogText>
                    <BlogText>
                        Here is the honest answer. Every tier, every line item, every red flag, and the math that tells you when a rebuild pays for itself.
                    </BlogText>

                    <BlogHeader id="cost-by-tier">How Much Does a Website Rebuild Cost in 2026?</BlogHeader>
                    <BlogText>
                        For 95 percent of small and mid-sized businesses, the real range is <strong>$2,000 to $30,000</strong>. The range stretches to $250,000 only for Fortune 5000 companies with compliance reviews, multi-language deployment, and enterprise CRM integration needs. Unless you are one of those, you are shopping in the first three tiers below.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                    <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-200">
                                    <th className="text-left p-3 font-semibold text-stone-700">Who builds it</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Typical scope</th>
                                    <th className="text-right p-3 font-semibold text-cognac">Cost range</th>
                                    <th className="text-right p-3 font-semibold text-stone-700">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Freelancer", "5 to 20 page business site, no custom integrations", "$2,000 to $12,000", "2 to 6 weeks"],
                                    ["Boutique studio", "15 to 80 pages, CMS, forms, integrations, design system", "$8,000 to $30,000", "3 to 10 weeks"],
                                    ["Full-service agency", "30 to 300 pages, custom design, complex integrations, strategy phase", "$30,000 to $120,000", "3 to 6 months"],
                                    ["Enterprise firm", "500+ pages, multi-language, DAM, CRM, compliance review", "$250,000 to $2M+", "6 to 18 months"],
                                ].map(([who, scope, cost, time]) => (
                                    <tr key={who as string} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-charcoal font-bold">{who}</td>
                                        <td data-label="Scope" className="p-3 text-stone-600">{scope}</td>
                                        <td data-label="Cost" className="p-3 text-right text-cognac font-bold">{cost}</td>
                                        <td data-label="Timeline" className="p-3 text-right text-stone-500">{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogQuote>
                        Most businesses who spend $60,000 with an agency could have spent $12,000 with a specialist and got the same measurable outcome. The premium pays for agency overhead, not for better code.
                    </BlogQuote>

                    <BlogText>
                        The scope column on that table matters more than the cost column. Every tier includes the tier below it plus additional work. A freelancer can build a beautiful 15-page business site. An enterprise firm cannot build that site for under $80,000 because their overhead structure will not allow it. The question is not who can do the work. The question is whose cost structure matches your project size.
                    </BlogText>

                    <BlogHeader id="rebuild-vs-redesign">Rebuild vs Redesign: Which Do You Actually Need?</BlogHeader>
                    <BlogText>
                        Before you spend a dollar, you need to know which project you are budgeting for. A redesign and a rebuild are not the same thing, even though most agencies use the terms interchangeably to justify the same price tag for either.
                    </BlogText>
                    <BlogText>
                        A <strong>redesign</strong> changes how your site looks. New colours, new typography, new imagery, new layout. The underlying platform, code, and structure stay the same. If you are on WordPress with Divi, you are still on WordPress with Divi. The new design just looks better.
                    </BlogText>
                    <BlogText>
                        A <strong>rebuild</strong> changes how your site works. The underlying technology is replaced. New framework, new content structure, new hosting. This is what you need if your site is slow, insecure, locked into a platform you want to leave, or structurally incapable of supporting what your business needs next.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                    <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-200">
                                    <th className="text-left p-3 font-semibold text-stone-700">You need a...</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">If this is true</th>
                                    <th className="text-right p-3 font-semibold text-cognac">Cost range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Redesign", "Site works fine, just looks dated. No speed or security issues.", "$1,500 to $15,000"],
                                    ["Rebuild", "Slow, insecure, platform locked, or needs features the platform cannot support.", "$2,000 to $250,000"],
                                    ["Both", "Looks bad AND works badly. Most common scenario.", "$3,500 to $120,000"],
                                ].map(([type, when, cost]) => (
                                    <tr key={type} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-charcoal font-bold">{type}</td>
                                        <td data-label="If" className="p-3 text-stone-600">{when}</td>
                                        <td data-label="Cost" className="p-3 text-right text-cognac font-bold">{cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        The easiest way to tell which one you need: ask what is broken. If it looks dated but works, redesign. If it works badly, rebuild.
                    </BlogText>
                    <BlogQuote>
                        If your site loads in 5 seconds and looks like a 2018 Squarespace template, a redesign does not fix the 5-second load. You are paying to repaint a car whose engine is the actual problem.
                    </BlogQuote>

                    <BlogHeader id="cost-drivers">The 7 Line Items That Separate a $5K Quote From a $50K One</BlogHeader>
                    <BlogText>
                        The price gap between a $5,000 rebuild and a $50,000 one is not mystery. It is seven specific variables. Every quote you receive should be justifiable against these. If your agency cannot point to which of these seven is driving their number, the number is padded.
                    </BlogText>
                    <BlogList items={[
                        "Page count: a 10-page site takes roughly one quarter the time of a 40-page site with equivalent design complexity. Every page needs design, development, content migration, SEO metadata, and QA.",
                        "Custom functionality: booking systems, member portals, calculators, search, and filters each add 8 to 40 hours depending on complexity. A brochure site with no custom features is the fastest project. Anything interactive adds time.",
                        "Content management: a static build (content hard-coded into the site) is the cheapest. A headless CMS like Sanity or Contentful adds $500 to $3,000 depending on content model complexity but gives non-technical editors full control afterward.",
                        "Integrations: CRM (HubSpot, Salesforce), email marketing (Mailchimp, Klaviyo), analytics, live chat, and payment processors each add 4 to 16 hours. A site with 8 integrations costs meaningfully more than one with 2.",
                        "Design work: reusing an existing design is the cheapest. A light refresh adds 10 to 30 hours. A full custom design system adds 40 to 160 hours of UI design before development even starts.",
                        "SEO preservation: migrating SEO value from an existing site with real traffic costs more than building a new site from zero. URL mapping, 301 redirects, schema markup, and metadata migration add 10 to 40 hours on larger sites.",
                        "Performance targets: targeting a 95 or higher PageSpeed score requires specific architectural decisions from day one. Shipping a site without a performance target usually results in a 55 to 75 score that costs more to fix later.",
                    ]} />

                    <BlogText>
                        AI-paired development has changed the economics of rebuilds significantly in 2025 and 2026. A developer working with AI code generation tools can finish in 40 to 60 percent of the time a developer without those tools would take. Studios that have adopted this workflow charge the same rates but deliver in half the timeline. Studios that have not are charging 2024 prices for 2024 timelines.
                    </BlogText>

                    <BlogHeader id="who-to-hire">Freelancer vs Boutique Studio vs Agency vs Enterprise Firm</BlogHeader>
                    <BlogText>
                        The same 20-page rebuild can cost $6,000 with a freelancer, $18,000 with a boutique studio, $55,000 with a full-service agency, or $400,000 with an enterprise firm. The difference is not usually quality. It is overhead, risk management, and what happens when something goes wrong mid-project.
                    </BlogText>

                    <div className="space-y-4 my-6">
                        {[
                            {
                                label: "Freelancer",
                                range: "$2,000 to $12,000",
                                pros: "Cheapest option. Direct communication with the person building your site. Fast decision-making.",
                                cons: "All risk concentrated on one person. No backup if they disappear, get sick, or miss a deadline. Quality varies wildly. Upwork averages are misleading because the top 10 percent of freelancers charge 3 to 5 times more than the platform average.",
                                pickWhen: "Your scope is simple, your budget is tight, and you have time to manage the project yourself.",
                            },
                            {
                                label: "Boutique studio",
                                range: "$8,000 to $30,000",
                                pros: "Small specialist team (2 to 6 people) focused on a specific stack. Better quality control than freelancers. Faster than agencies because there are fewer meetings and no account management layer. PandaCodeGen sits in this tier.",
                                cons: "Less capacity than agencies. Typically cannot handle 500-page projects or compliance-heavy enterprise work.",
                                pickWhen: "You want specialist expertise on a specific stack (Next.js, headless Shopify, Webflow) and your project is under 150 pages with standard integrations.",
                            },
                            {
                                label: "Full-service agency",
                                range: "$30,000 to $120,000",
                                pros: "In-house strategy, design, development, and project management. Can handle larger scopes with multiple stakeholders. Dedicated project manager who absorbs coordination overhead.",
                                cons: "Highest overhead cost per hour of actual work. Most of the budget goes to meetings, account management, and billable strategy sessions rather than building. Often slower than boutique studios despite costing 3x more.",
                                pickWhen: "Your organization requires vendor compliance processes, your project involves multiple departments, or you need an agency-of-record relationship beyond a single project.",
                            },
                            {
                                label: "Enterprise firm",
                                range: "$250,000 to $2M+",
                                pros: "Can handle Fortune 500 compliance, multi-language deployment, integration with enterprise DAM and CRM platforms, legal review, accessibility audits, and 12-month roadmaps.",
                                cons: "Cost is usually 5 to 10 times what a boutique studio would charge for an equivalent technical deliverable. Most of the premium pays for agency brand, client-side relationship overhead, and process.",
                                pickWhen: "You are a Fortune 5000 company, have regulatory compliance requirements (HIPAA, SOC 2, WCAG AAA), or need a single vendor responsible for a 9-figure digital operation.",
                            },
                        ].map(option => (
                            <div key={option.label} className="p-5 border border-stone-200 rounded-2xl bg-stone-50">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-bold text-charcoal">{option.label}</p>
                                    <p className="text-cognac font-bold text-sm">{option.range}</p>
                                </div>
                                <p className="text-sm text-stone-700 mb-2"><span className="font-semibold text-charcoal">Strengths: </span>{option.pros}</p>
                                <p className="text-sm text-stone-700 mb-2"><span className="font-semibold text-charcoal">Weaknesses: </span>{option.cons}</p>
                                <p className="text-sm text-stone-700"><span className="font-semibold text-charcoal">Pick this tier when: </span>{option.pickWhen}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="platform-cost">What It Costs to Escape WordPress, Webflow, Squarespace, Wix, or Shopify</BlogHeader>
                    <BlogText>
                        Rebuild cost also depends heavily on what you are migrating from and what you are migrating to. Every platform has its own data structure, content migration challenges, and SEO preservation steps. Here is the realistic cost by source platform with links to the full breakdown for each.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                    <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-200">
                                    <th className="text-left p-3 font-semibold text-stone-700">Migrating from</th>
                                    <th className="text-right p-3 font-semibold text-cognac">Typical cost</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Why</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                <tr><td className="p-3 font-bold text-charcoal"><Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress</Link></td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$2,000 to $25,000</td><td data-label="Why" className="p-3 text-stone-600">Plugin dependencies and custom post types drive complexity.</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal"><Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">Webflow</Link></td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$500 to $15,000</td><td data-label="Why" className="p-3 text-stone-600">CMS export is manual but design often ports cleanly.</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal"><Link href="/blog/squarespace-migration-cost" className="text-cognac hover:underline">Squarespace</Link></td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$3,500 to $30,000</td><td data-label="Why" className="p-3 text-stone-600">Content export is limited. URLs and blog structure need manual mapping.</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal">Wix</td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$3,500 to $12,000</td><td data-label="Why" className="p-3 text-stone-600">No native export. All content extraction is manual or scraped.</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal">Shopify to headless</td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$8,000 to $60,000</td><td data-label="Why" className="p-3 text-stone-600">Checkout stays on Shopify. Storefront rebuilt. App stack often replaced.</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal">GoHighLevel</td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$500 to $8,000</td><td data-label="Why" className="p-3 text-stone-600">Front-end only. CRM and automation stay on GHL.</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal">Divi / Elementor WordPress</td><td data-label="Cost" className="p-3 text-right text-cognac font-bold">$3,000 to $20,000</td><td data-label="Why" className="p-3 text-stone-600">Builder markup needs rewriting. Visual design usually ports fine.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        The most expensive migrations are always platforms that lock their content behind proprietary export formats. Shopify, Wix, and older Squarespace sites fall into this category. The cheapest migrations are from platforms that expose content cleanly, like WordPress (which exports to clean JSON via the REST API) or Webflow (which has a usable CSV export for CMS collections).
                    </BlogText>

                    {/* Mid-Article CTA */}
                    <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <p className="font-bold text-charcoal mb-2">Want a fixed-price rebuild quote on your site in 24 hours?</p>
                        <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. I review your current site, scope the rebuild live on the call, and give you a fixed-price quote with full line-item breakdown before we hang up. No hourly billing, no discovery phase invoice.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-all">
                            Get a Free Rebuild Quote <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    <BlogHeader id="red-flags">Red Flags: How to Spot a Padded Rebuild Quote</BlogHeader>
                    <BlogText>
                        Most rebuild quotes are padded 40 to 60 percent above the actual cost of the work. This is not necessarily fraud. It is how agency overhead gets absorbed into client invoices. But you should know what padding looks like so you can ask for it to be removed, or take the quote somewhere else.
                    </BlogText>

                    <div className="space-y-3 my-6">
                        {[
                            {
                                title: "No itemised scope",
                                what: "Quote is a single lump sum like 'Website rebuild: $45,000' with no line-item breakdown.",
                                why: "You cannot negotiate what you cannot see. Fair quotes separate design, development, content migration, SEO work, QA, and launch. Ask for the breakdown. If they refuse, walk.",
                            },
                            {
                                title: "Discovery billed as a separate project",
                                what: "Agency wants $8,000 to $25,000 for a 'discovery phase' before quoting the actual build.",
                                why: "Discovery is part of scoping. Freelancers and boutique studios do discovery in a 60-minute call for free because they want to win the work. Enterprise firms charge for discovery because it is a captive up-sell. If the discovery fee exceeds 10 percent of the projected build cost, it is padding.",
                            },
                            {
                                title: "Strategy priced higher than development",
                                what: "Quote shows $20,000 for strategy and $15,000 for actual development.",
                                why: "Strategy is important, but it should not be the most expensive line item on a website rebuild. If strategy is the biggest cost, you are paying for Powerpoint decks, not a website.",
                            },
                            {
                                title: "50 percent or more required upfront",
                                what: "Agency wants $20,000 of a $40,000 project paid before work starts, or 100 percent upfront for 'capacity reservation.'",
                                why: "Fair payment terms are 30 percent on signing, 30 to 40 percent at a mid-project milestone, and the remainder at launch. Anything above 40 percent upfront concentrates risk entirely on you. If the agency fails, your money is gone.",
                            },
                            {
                                title: "Vague deliverables without measurable outcomes",
                                what: "Quote promises 'modern design,' 'best practices,' or 'fast loading site' without specifying PageSpeed score, page count, feature list, or accessibility target.",
                                why: "Unmeasurable deliverables cannot fail. If the agency does not commit to a 90+ PageSpeed score in writing, you cannot hold them accountable when they ship a 65.",
                            },
                        ].map(flag => (
                            <div key={flag.title} className="p-4 border border-red-100 rounded-xl bg-red-50">
                                <div className="flex gap-3 items-start mb-2">
                                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                                    <p className="font-semibold text-charcoal text-sm">{flag.title}</p>
                                </div>
                                <p className="text-stone-700 text-sm ml-8 mb-2"><span className="font-semibold">What it looks like: </span>{flag.what}</p>
                                <p className="text-stone-700 text-sm ml-8"><span className="font-semibold">Why it matters: </span>{flag.why}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="seo-preservation">Will I Lose SEO When I Rebuild My Website?</BlogHeader>
                    <BlogText>
                        This is the single biggest unspoken fear behind every rebuild decision. Business owners have seen their competitor lose 60 percent of their organic traffic after a bad rebuild and never recover. The fear is rational. The outcome is avoidable.
                    </BlogText>
                    <BlogText>
                        Most rebuild-related ranking losses come from three specific mistakes. Missing 301 redirects on high-traffic URLs. Metadata that did not migrate correctly. Site architecture changes that accidentally broke internal linking patterns Google had already indexed. All three are preventable with a competent SEO preservation process documented in{" "}
                        <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Google Search Central&apos;s official site-move guide</a>.
                    </BlogText>
                    <BlogList items={[
                        "URL mapping before migration: every existing URL with meaningful traffic or backlinks gets documented, mapped to its new URL, and assigned a 301 redirect rule.",
                        "Metadata migration: title tags, meta descriptions, and canonical URLs carry over exactly. Schema markup is re-implemented on the new stack.",
                        "Sitemap and Search Console: a new sitemap is generated and submitted to Google Search Console on launch day. Old URLs remain in the sitemap for 30 days to guarantee re-crawl and redirect recognition.",
                        "Post-launch monitoring: Search Console is checked daily for 30 days to catch any missed redirects, crawl errors, or indexing issues while they are still small.",
                    ]} />
                    <BlogText>
                        When those four steps are handled correctly, rankings typically hold steady within 30 days and improve within 60 to 90 days because Google rewards the faster Core Web Vitals that a modern rebuild delivers. See{" "}
                        <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Google&apos;s Core Web Vitals documentation</a>{" "}
                        for the ranking signals involved, or read our breakdown on{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline font-medium">Core Web Vitals for business owners</Link>{" "}
                        for the plain-English version.
                    </BlogText>

                    <BlogHeader id="roi-math">How Do You Calculate Rebuild ROI?</BlogHeader>
                    <BlogText>
                        Rebuild ROI comes from three separate sources: reduced ongoing costs, improved organic search visibility from faster Core Web Vitals, and higher conversion rates from lower load times.
                    </BlogText>
                    <BlogText>
                        <strong>On cost savings:</strong> a typical business site on WordPress, Webflow, or Squarespace costs $2,400 to $7,200 per year in hosting, plugins or platform subscriptions, and maintenance. A Next.js site on Vercel costs $0 to $240 per year. That alone is $2,200 to $7,000 in annual savings.
                    </BlogText>
                    <BlogText>
                        <strong>On traffic:</strong> improving mobile PageSpeed from 45 to 95 typically corresponds to a 15 to 40 percent lift in organic search visibility over 3 to 6 months based on client observations and Core Web Vitals data. Google directly rewards CWV improvement in its ranking algorithm.
                    </BlogText>
                    <BlogText>
                        <strong>On conversions:</strong>{" "}
                        <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Deloitte research</a>{" "}
                        found that a 0.1 second improvement in mobile load time lifts conversion by 8 percent. Moving from a 3.5 second WordPress load to a 0.8 second Next.js load is a 2.7 second improvement, which historically lifts conversion rates by 20 to 30 percent for most sites.
                    </BlogText>
                    <BlogQuote>
                        Quick ROI model: your current annual platform cost, plus 15 percent of your current annual revenue from organic traffic, minus the one-time rebuild cost. If the number is positive within 24 months, the rebuild pays for itself.
                    </BlogQuote>
                    <BlogText>
                        For a site currently spending $5,000/year on WordPress and earning $80,000/year from organic traffic, a $15,000 rebuild recovers cost in roughly 12 to 14 months under conservative assumptions. For a site spending $12,000/year on a Webflow enterprise plan with $250,000 in annual organic revenue, a $25,000 rebuild recovers in under 8 months.
                    </BlogText>

                    <BlogHeader id="timeline">How Long Does a Website Rebuild Take?</BlogHeader>
                    <BlogText>
                        A website rebuild takes 2 to 6 weeks for a small business site (5 to 20 pages), 6 to 12 weeks for a mid-sized site with a blog and integrations (20 to 80 pages), and 4 to 9 months for enterprise rebuilds with compliance reviews, multi-language deployment, and CRM integrations. Freelancers and boutique studios using AI-paired development typically finish in half the timeline of a full-service agency because there are fewer meetings, fewer approval layers, and the same person handles design and development.
                    </BlogText>
                    <BlogText>
                        The biggest delays are almost always client-side: late content, late feedback, late sign-offs. A project scoped at 4 weeks frequently runs 8 because the client took 3 weeks to return first-round feedback. Assign one decision-maker, commit to 48-hour turnaround on feedback, and the timeline holds. Skip that commitment and even a $50,000 agency contract drifts to 6 months.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Hidden Costs Nobody Tells You About</BlogHeader>
                    <BlogText>
                        Cheap quotes stay cheap only because they exclude these items. Ask about each one explicitly before signing any contract.
                    </BlogText>
                    <BlogList items={[
                        "Content rewriting during migration: if your existing content needs editing, updating, or restructuring during the rebuild, most studios bill this separately at $75 to $150 per hour.",
                        "Image and media re-optimisation: bulk optimising existing images to modern formats (WebP, AVIF) adds 4 to 12 hours of work on content-heavy sites.",
                        "Third-party service migrations: Mailchimp form replacement, Calendly embed re-configuration, chat widget re-install, analytics re-setup each take 1 to 4 hours.",
                        "Domain email and DNS: if your email runs on the same host as your current website, you need a clean migration path to Google Workspace or Microsoft 365 to avoid email downtime during DNS cutover.",
                        "Post-launch fixes: the first 30 days after launch always surface small issues. Ask whether this is included or billed separately.",
                        "Ongoing maintenance contract: modern framework sites need dramatically less maintenance than WordPress, but you still want agreed terms for what happens when you need a new page, a pricing change, or a new feature.",
                    ]} />

                    <BlogHeader id="when-not-to-rebuild">When Does a Website Rebuild NOT Make Sense?</BlogHeader>
                    <BlogText>
                        A rebuild is not always the right answer. There are cases where staying on your current platform makes better financial sense.
                    </BlogText>
                    <BlogList items={[
                        "Your site is under 12 months old and was built competently. Google needs 12 to 18 months to fully trust a new domain. Rebuilding during that window resets some of that trust-building.",
                        "Your organic traffic is healthy, load time is acceptable (under 2.5 second LCP), and you are not paying platform costs that exceed $1,500 per year. The payback math does not work.",
                        "You are in a seasonal business peak. Never rebuild 60 days before your highest revenue period. The risk of a launch-week issue during peak season is not worth the upside.",
                        "You do not have capacity to provide content, feedback, and approvals on the rebuild project timeline. Most delayed rebuilds are caused by client-side blockers, not vendor delays.",
                        "You are considering rebuilding just because the design feels dated. A redesign at 30 to 50 percent of rebuild cost solves that problem.",
                    ]} />
                    <BlogText>
                        If none of those apply and your current site is slow, expensive, or structurally incapable of supporting the next 12 months of business, a rebuild is almost certainly the right call. The remaining question is who you hire and at what price tier.
                    </BlogText>

                    <BlogHeader id="pandacodegen-pricing">What PandaCodeGen Charges (and Why)</BlogHeader>
                    <BlogText>
                        Published pricing is rare in this industry. Most studios require a discovery call before quoting because pricing transparency removes negotiation leverage. We publish pricing because that leverage is not worth the friction it creates for every legitimate buyer.
                    </BlogText>
                    <BlogText>
                        Our rebuild pricing is $500 to $25,000 fixed price. The range reflects site size, complexity, integrations, and custom design work. The most common tiers:
                    </BlogText>
                    <BlogList items={[
                        "$500 founder's rate: qualifying sites under 10 pages with basic design porting. Ideal for GoHighLevel, Wix, Squarespace, or small WordPress brochure sites.",
                        "$3,500 to $8,000: 10 to 30 page business sites with headless CMS, forms, integrations, blog migration, and full SEO preservation. Most common tier for service businesses.",
                        "$8,000 to $15,000: 30 to 80 page mid-size sites with custom post types, multi-stakeholder content, and complex integrations. Webflow and WordPress rebuilds typically land here.",
                        "$15,000 to $25,000: larger content operations, WooCommerce migrations, or sites with custom functionality (calculators, member portals, booking systems, editorial publications with Sanity CMS).",
                    ]} />
                    <BlogText>
                        Every rebuild is fixed price. 30 percent upfront, the remainder after the site is live and passing a documented 90 or higher PageSpeed score on mobile. No hourly billing. No discovery phase invoice. No retainer attached to the rebuild unless you want one. For deeper context on our stack and approach, read{" "}
                        <Link href="/blog/why-we-chose-nextjs-over-wordpress-2026" className="text-cognac hover:underline font-medium">why we build on Next.js instead of WordPress</Link>{" "}
                        and our detailed breakdown of{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline font-medium">WordPress vs custom code over 3 years</Link>.
                    </BlogText>

                    {/* Bottom CTA */}
                    <div className="my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <TrendingUp className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Get a Fixed-Price Rebuild Quote</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">Book a 30-minute call. I audit your current site, scope the rebuild live, and hand you a fixed-price quote with full line-item breakdown before we hang up. Free, no discovery invoice, 24-hour turnaround if I need more info.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Book Free Quote Call <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <div className="mt-4 p-4 bg-white/10 border border-white/20 rounded-xl">
                            <p className="text-sm font-bold text-white flex items-center justify-center gap-2"><Scale className="w-4 h-4" /> Published pricing, fixed scope, no surprises</p>
                            <p className="text-sm text-stone-300 mt-1">$500 to $25,000. 30 percent upfront, the rest on launch. Guaranteed 90+ PageSpeed Mobile or we continue working until it passes.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    {rebuildCostFAQs.length > 0 && <FAQAccordion faqs={rebuildCostFAQs} />}

                    <RelatedPosts currentPostId="website-rebuild-cost-2026" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
