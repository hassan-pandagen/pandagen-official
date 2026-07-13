import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const redesignFAQs = blogPosts.find(p => p.id === 'website-redesign-cost')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/CostStackAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Website Redesign Cost in 2026: $1.5K to $15K (No Platform Change)",
    description: "A redesign is a new look on your existing platform, no migration required. Honest pricing from $1,500 to $15,000+, real redesign cost drivers, and how it differs from a rebuild.",
    alternates: {
        canonical: '/blog/website-redesign-cost',
    },
    keywords: [
        "website redesign cost",
        "website redesign pricing",
        "how much does a website redesign cost",
        "website redesign cost for small business",
        "website redesign without changing platform",
        "UX redesign cost",
        "design system cost",
        "custom website redesign cost",
        "hidden costs of website redesign",
        "website redesign ROI",
        "agency vs freelancer website redesign",
        "staged website rollout",
        "fixed-price website redesign",
    ],
    openGraph: {
        title: "Website Redesign Cost in 2026: $1,500 to $15,000 (Same Platform)",
        description: "A redesign is a new look on your existing platform, no migration required. Honest pricing, real redesign cost drivers, and how it differs from a full rebuild.",
        type: "article",
        publishedTime: "2026-04-30T00:00:00-05:00",
        modifiedTime: "2026-07-08T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/website-redesign-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Redesign Cost in 2026: $1,500 to $15,000 (Same Platform)",
        description: "A redesign is a new look on your existing platform, no migration required. Honest pricing and real redesign cost drivers.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/website-redesign-cost#article",
            "headline": "Website Redesign Cost in 2026: New Look, Same Platform ($1.5K to $15K)",
            "description": "A redesign is a new visual design and UX on your existing platform and CMS, no migration required. Honest pricing from $1,500 to $15,000+, real cost drivers, and how it differs from a rebuild.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-04-30T00:00:00-05:00",
            "dateModified": "2026-07-08T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/website-redesign-cost" },
            "articleSection": "Pricing",
            "keywords": ["website redesign cost", "website redesign pricing", "redesign without changing platform", "design system cost", "UX audit cost", "small business website redesign", "fixed-price website redesign"],
            "timeRequired": "PT14M",
            "wordCount": 3500,
            "about": [
                { "@type": "Thing", "name": "Website Redesign Pricing" },
                { "@type": "Thing", "name": "Design System Creation" },
                { "@type": "Thing", "name": "UX Audit and Information Architecture" },
                { "@type": "Thing", "name": "Hidden Web Development Costs" }
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights Tool Documentation", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Core Web Vitals. Google Web Dev", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Conversion Research", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Industry Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Nielsen Norman Group: A/B Testing 101", "url": "https://www.nngroup.com/articles/ab-testing/" },
                { "@type": "CreativeWork", "name": "Nielsen Norman Group: Redesign Risks", "url": "https://www.nngroup.com/articles/redesign-risks/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/website-redesign-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Website Redesign Cost", "item": "https://www.pandacodegen.com/blog/website-redesign-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/website-redesign-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/website-redesign-cost",
            "name": "Website Redesign Cost in 2026: New Look, Same Platform",
            "description": "A redesign is a new visual design and UX on your existing platform and CMS, no migration required. Honest pricing from $1,500 to $15,000+, real cost drivers, and how it differs from a rebuild.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-04-30T00:00:00-05:00",
            "dateModified": "2026-07-08T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/website-redesign-cost#breadcrumb" },
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
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 90+ Google PageSpeed in writing or a full refund on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/website-redesign-cost#faq",
            "mainEntity": redesignFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function WebsiteRedesignCostPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
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
                            { label: "Website Redesign Cost", href: "/blog/website-redesign-cost" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">Pricing</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            <span className="font-serif italic text-cognac">Website Redesign Cost</span> in 2026: New Look, Same Platform
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            A redesign changes how your site looks and how visitors move through it, without touching what it runs on. Same CMS, same hosting, same platform, new design and UX on top. Real ranges from $1,500 to $15,000, the cost drivers agencies rarely itemize, and how to tell a redesign apart from a full platform rebuild before you get quoted for the wrong project.
                        </p>

                        <BlogAuthor
                            date="Apr 30, 2026 (updated Jul 8)"
                            readTime="14 min read"
                            bio="Hassan runs PandaCodeGen, a web design and development studio that redesigns sites in place and rebuilds them on new platforms. Every redesign ships with a disclosed PageSpeed ceiling in writing (90+ where the platform supports it), plus free post-launch support (15 days on Starter, a full month on Growth and above)."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "A redesign is visual and UX work on your current platform. No CMS change, no hosting change, no new framework. If someone is quoting you a Next.js migration or a new CMS as part of your \"redesign,\" that is a rebuild wearing a redesign price tag.",
                            "Small business redesign (5 to 20 pages): $1,500 to $7,000. Mid-market redesign with a full design system and UX audit: $7,000 to $15,000. Enterprise scope with multi-stakeholder review: $15,000 to $50,000.",
                            "The real cost drivers are a UX audit and information architecture pass, a design system built from scratch, content migration within the same platform, and whether you roll out in stages or relaunch all at once.",
                            "Hidden costs that quotes leave out: extra design revision rounds, a design system that only covers half your page types, content cleanup that was assumed to be 'included,' and A/B testing the new design against the old one before full rollout.",
                            "PandaCodeGen ships fixed-price redesigns from $1,500 with the PageSpeed ceiling disclosed in writing (90+ where the platform supports it), and free post-launch tweaks (15 days on Starter, 1 month on Growth and above). If your platform itself is the problem, see our rebuild and migration cost guides instead."
                        ]} />
                    </div>

                    <div className="my-6 p-5 bg-stone-50 border border-stone-200 rounded-xl">
                        <p className="text-sm text-stone-700"><strong className="text-charcoal">Looking for platform migration or rebuild pricing instead?</strong> This post covers redesign only: new look, same platform. If your CMS, hosting, or framework also needs to change, see the <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost breakdown</Link> (moving what you have to new technology) or the <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">rebuild cost breakdown</Link> (new technology plus a reimagined site).</p>
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">A website redesign costs $1,500 to $15,000 in 2026 for most small and mid-market businesses, and up to $50,000 for enterprise scope with multiple stakeholders and complex approval chains. A 5 to 10 page redesign with a light design system runs $1,500 to $4,000. A full 10 to 25 page redesign with a proper UX audit, new design system, and staged rollout runs $4,000 to $15,000. None of these numbers include a platform change. If your quote includes migrating to a new CMS or framework, you are pricing a rebuild, not a redesign.</p>

                    <div className="space-y-8">

                        <BlogHeader>How Much a Website Redesign Actually Costs</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A website redesign, same platform, costs $1,500 to $15,000 for most small and mid-market sites, and $15,000 to $50,000 for enterprise scope. The number moves on four things: how much UX and IA rework the audit turns up, how big a design system gets built, how much content needs cleanup during the in-place migration, and whether you roll out in stages or all at once.</p>
                        </div>

                        <BlogText>
                            The agency pricing range for website redesigns runs from $500 to $80,000 with no clear logic for why. A 7-page site quoted at $32,000 by one agency lands at $1,500 with another, for the identical scope: same CMS, same hosting, new design and UX layered on top. The difference is rarely quality. It is overhead, sales overhead, account managers, and margin layered on margin.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>Watch for scope creep in the other direction too.</BlogHighlight> Some agencies quote a &ldquo;redesign&rdquo; that quietly includes a CMS migration, a hosting change, or a framework swap, because that lets them bill rebuild-level prices under a redesign label. If your proposal includes moving off your current CMS or hosting provider, you are being quoted a rebuild. Compare it against our <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline">rebuild cost breakdown</Link> instead, where that combined scope is priced honestly.
                        </BlogText>

                        <BlogHeader>Why &quot;Cheap&quot; Should Mean Your Profit, Not Lower Quality</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">We aren&apos;t your typical web dev agency. Consider us your partners. Cheap should mean money that stays in your business, not corners cut on your build. PandaCodeGen offers fixed prices from $1,500, a 90+ PageSpeed guarantee where the platform supports it, and free post-launch support (15 days on Starter, a full month on Growth and above). No freelancer or agency offers all three.</p>
                        </div>

                        <BlogText>
                            Most agencies charge $15,000 to $50,000 for redesign scope PandaCodeGen ships at $1,500 to $8,000. The difference is not quality. It is overhead, account managers, sales teams, junior subcontractors, office space, and margin layered on margin. <BlogHighlight>The agency markup is your profit, not theirs.</BlogHighlight> We are here to revolutionize what cheap means in this category.
                        </BlogText>

                        <BlogText>
                            <strong>The 3 guarantees no competitor offers in writing:</strong>
                        </BlogText>

                        <BlogList items={[
                            "90+ PageSpeed guarantee where the platform's architecture allows it, verified before handover. On platforms with a structural performance ceiling below 90 (some page-builder CMSes), we guarantee the best score the platform can support and disclose that ceiling upfront in writing.",
                            "Free post-launch support and tweaks: 15 days on Starter, a full month on Growth and above. Color changes, copy updates, bug fixes, and CMS training included. Tweak boundaries scoped per project in your SOW. No hourly billing.",
                            "Fixed pricing with milestone payments. No hourly billing under any circumstances. Redesign pricing runs $1,500 to $15,000 depending on page count, design system size, and rollout approach."
                        ]} />

                        <BlogText>
                            Ask any agency or freelancer who has quoted you the same three questions. Will you disclose your platform's PageSpeed ceiling in writing before we sign? Will you give me free support and tweaks after launch with no hourly billing? Is the price fixed regardless of how many stakeholder review rounds it takes to reach sign-off? Almost none will say yes to all three. That is the gap PandaCodeGen exists to close.
                        </BlogText>

                        <BlogHeader>What Actually Drives Redesign Cost: The Four Real Variables</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Four variables set redesign price, not page count alone: the depth of the UX audit and information architecture rework, how large a design system gets built, how much content needs cleanup during in-place migration, and whether the new design launches in stages or all at once. Page count matters, but a 10-page site with a full IA overhaul costs more than a 20-page site with a light visual refresh.</p>
                        </div>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full text-sm border-collapse min-w-[640px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Cost Driver</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Light Scope</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Full Scope</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Added Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">UX audit + IA</td>
                                        <td data-label="Light Scope" className="p-3 border border-stone-300">Heuristic review, no user testing</td>
                                        <td data-label="Full Scope" className="p-3 border border-stone-300">User testing, analytics review, full sitemap rework</td>
                                        <td data-label="Added Cost" className="p-3 border border-stone-300 font-bold text-cognac">$500 to $4,000</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Design system</td>
                                        <td data-label="Light Scope" className="p-3 border border-stone-300">Color, type, and button styles only</td>
                                        <td data-label="Full Scope" className="p-3 border border-stone-300">Full component library with documented states</td>
                                        <td data-label="Added Cost" className="p-3 border border-stone-300 font-bold text-cognac">$800 to $6,000</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Content migration (same platform)</td>
                                        <td data-label="Light Scope" className="p-3 border border-stone-300">Copy-paste into new templates</td>
                                        <td data-label="Full Scope" className="p-3 border border-stone-300">Content audit, rewrites, consolidation of thin pages</td>
                                        <td data-label="Added Cost" className="p-3 border border-stone-300 font-bold text-cognac">$300 to $5,000</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Rollout approach</td>
                                        <td data-label="Light Scope" className="p-3 border border-stone-300">Full relaunch, single cutover date</td>
                                        <td data-label="Full Scope" className="p-3 border border-stone-300">Staged rollout with A/B test against the old design</td>
                                        <td data-label="Added Cost" className="p-3 border border-stone-300 font-bold text-cognac">$500 to $3,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            <strong>UX audit and information architecture.</strong> Before any new screen gets designed, someone needs to decide what is actually wrong with the current one: where users drop off, which pages nobody finds, and whether the navigation reflects how the business is organized today or how it was organized three years ago. A light audit is a structured heuristic review against usability principles from the <a href="https://www.nngroup.com/articles/redesign-risks/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Nielsen Norman Group</a>. A full audit adds analytics review (where people actually click and scroll) and, for higher-stakes redesigns, moderated user testing on the current site before touching the new design.
                        </BlogText>

                        <BlogText>
                            <strong>Design system creation.</strong> A redesign that only restyles individual pages one at a time is slower and less consistent than one built from a small design system first: a type scale, a color palette with defined roles (primary, secondary, error, success), button and form states, and a spacing scale. Building the system costs more upfront than winging each page individually, but it is what makes the new design feel coherent across every page type and makes future page additions cheap.
                        </BlogText>

                        <BlogText>
                            <strong>Content migration within the same platform.</strong> This is different work than migrating content to a new CMS. The content stays in the same database or file structure; what changes is which template it renders in and, often, which page it lives on if pages get consolidated or split during the IA rework. Clean, well-organized existing content migrates fast. Content that has accumulated inconsistently for years needs an audit pass before it can go into new templates.
                        </BlogText>

                        <BlogText>
                            <strong>Staged rollout vs full relaunch.</strong> A full relaunch replaces every page at once on a single cutover date. Cheaper to execute, higher risk if the new design underperforms the old one in ways nobody predicted. A staged rollout ships the new design to a subset of pages or a percentage of traffic first, which costs more in engineering time (you are running two designs in parallel temporarily) but lets you catch conversion problems before they hit 100 percent of visitors. See the A/B testing section below for how this plays out in practice.
                        </BlogText>

                        <BlogHeader>Small Business and Mid Market Website Redesign Pricing</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Small business sites under 20 pages cost $1,500 to $7,000 for a same-platform redesign. Mid-market sites with 20 to 100 pages cost $7,000 to $15,000 depending on template count and stakeholder review. Page count is one factor. Number of distinct templates, UX audit depth, and content cleanup volume drive the actual price more than raw page count.</p>
                        </div>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full text-sm border-collapse min-w-[640px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Site Size</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Pages</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Typical Scope</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Price Range</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Timeline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Small business</td>
                                        <td data-label="Pages" className="p-3 border border-stone-300">5 to 20</td>
                                        <td data-label="Typical Scope" className="p-3 border border-stone-300">Light UX audit, right-sized design system, in-place content move</td>
                                        <td data-label="Price Range" className="p-3 border border-stone-300 font-bold text-cognac">$1,500 to $7,000</td>
                                        <td data-label="Timeline" className="p-3 border border-stone-300">2 to 4 weeks</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Mid market</td>
                                        <td data-label="Pages" className="p-3 border border-stone-300">20 to 100</td>
                                        <td data-label="Typical Scope" className="p-3 border border-stone-300">Full UX audit, complete design system, multi-stakeholder review</td>
                                        <td data-label="Price Range" className="p-3 border border-stone-300 font-bold text-cognac">$7,000 to $15,000</td>
                                        <td data-label="Timeline" className="p-3 border border-stone-300">4 to 8 weeks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            Small businesses often overpay for redesign work they do not need. A 7-page service business site rarely needs a full moderated-user-testing UX audit or a 40-component design system. A light IA review and a design system covering the 6 to 8 templates the site actually uses is enough, which is why the fixed-price floor for a clean small business redesign in 2026 is $1,500.
                        </BlogText>

                        <BlogText>
                            Mid-market sites carry more redesign complexity for reasons that have nothing to do with platform: more stakeholders need to sign off on the new design direction, more page templates exist (product pages, resource hubs, team pages, location pages), and more existing content needs an audit pass before it goes into the new design system. None of this requires touching the CMS or hosting. It requires more design and content-strategy hours.
                        </BlogText>

                        <BlogHeader>A/B Testing the New Design Before Full Rollout</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A/B testing a redesign means running the new design against the old one on a split of live traffic before fully replacing it, measuring conversion rate, bounce rate, and time on page for each. It adds $500 to $3,000 and 2 to 6 weeks to a project timeline, but it catches a redesign that looks better and converts worse before that mistake reaches 100 percent of visitors.</p>
                        </div>

                        <BlogText>
                            The uncomfortable truth about redesigns: a genuine improvement in visual design does not guarantee a genuine improvement in conversion rate. <a href="https://www.nngroup.com/articles/ab-testing/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Nielsen Norman Group&apos;s research on A/B testing</a> documents redesigns that tested worse than the &ldquo;ugly&rdquo; version they replaced, usually because a new layout buried a call-to-action that used to be prominent, or a new navigation pattern that looked cleaner actually made key pages harder to find.
                        </BlogText>

                        <BlogText>
                            For a marketing site with meaningful traffic, running the new design on 10 to 50 percent of visitors for 2 to 4 weeks before a full relaunch is the safest way to catch that problem while it is still cheap to fix. For a low-traffic site where a statistically meaningful A/B test would take months, the safer substitute is a staged rollout by page (ship the new homepage first, watch it for two weeks, then proceed) rather than a true split test.
                        </BlogText>

                        <BlogText>
                            This is a redesign-specific cost precisely because it is a same-platform decision: you are running two visual designs against each other on the same backend, same content, same URLs. It is not something a migration or rebuild typically needs, because those projects usually have a hard cutover date tied to leaving the old platform behind.
                        </BlogText>

                        <BlogHeader>How Redesign, Rebuild, and Migration Actually Differ</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A redesign changes how the site looks and how it is organized, keeping the same platform. A migration moves the same site, largely as-is, onto new technology. A rebuild changes the platform and reimagines the site at the same time. Choose based on what is actually broken: the look, the platform, or both.</p>
                        </div>

                        <BlogText>
                            <strong>Choose a redesign</strong> when your CMS, hosting, and technical foundation all work fine, but the visual design feels dated, the UX is hurting conversions, or the brand has evolved past what the site communicates. Nothing about the platform needs to change. This post covers that scope: $1,500 to $15,000 for most businesses.
                        </BlogText>

                        <BlogText>
                            <strong>Choose a migration</strong> when the platform itself is the problem (slow, insecure, expensive, or locked-in) but the site&apos;s content, structure, and design intent are fine as they are. A migration preserves what exists and moves it to better technology. See the <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost breakdown</Link>: $1,500 to $10,000 across most platforms.
                        </BlogText>

                        <BlogText>
                            <strong>Choose a rebuild</strong> when the platform is the problem AND the business has outgrown the site&apos;s structure or positioning. A rebuild is a migration plus a redesign done at the same time: new technology, new information architecture, new design direction. See the <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">rebuild cost breakdown</Link>: $2,000 to $250,000 depending on scope.
                        </BlogText>
                        <BlogQuote>
                            If your platform works fine and only the look feels stale, paying for a rebuild wastes money on a platform migration you did not need. If your platform is genuinely the bottleneck, paying for a redesign wastes money on new paint over an engine that is still the problem. Match the project to what is actually broken.
                        </BlogQuote>

                        <BlogHeader>Hidden Costs Most Redesign Quotes Leave Out</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Five hidden costs most redesign quotes leave out: extra design revision rounds beyond the ones scoped upfront, a design system that only covers some page templates and needs extending later, content cleanup that turns out not to be included, stakeholder review cycles that were not budgeted for, and A/B testing or staged rollout if the quote assumed a single relaunch date. None of these involve the platform. All of them are redesign-specific.</p>
                        </div>

                        <BlogText>
                            <strong>Extra design revision rounds.</strong> Fixed-price redesigns typically include 2 to 3 structured rounds of feedback on the new direction. A round beyond that, especially one requested after the design was already approved, is scope creep that most studios bill separately at $300 to $1,500 depending on how much of the system it touches. Ask upfront how many rounds are included and what happens after that.
                        </BlogText>

                        <BlogText>
                            <strong>A design system that does not cover every page type.</strong> Some redesign quotes price the design system against the homepage and one or two interior pages, then discover mid-project that a pricing page, a team page, or a resource hub needs its own layout decisions that were never scoped. Ask for a list of every distinct page template the design system needs to cover before signing.
                        </BlogText>

                        <BlogText>
                            <strong>Content cleanup that turns out not to be included.</strong> A quote that says &ldquo;content migration included&rdquo; usually means copying existing text into new templates, not rewriting inconsistent headlines, fixing broken internal links, or consolidating thin pages that should be merged. If your content has not been audited in a few years, budget separately for this or confirm explicitly that the quote covers it.
                        </BlogText>

                        <BlogText>
                            <strong>Stakeholder review cycles.</strong> Redesigns with more than one decision-maker take longer than solo-owner projects, and every review cycle with a new stakeholder who was not in the room for earlier approvals risks reopening decisions that were supposedly final. This does not show up as a separate line item on most quotes, but it is the single most common reason a scoped 4-week redesign timeline becomes 10 weeks.
                        </BlogText>

                        <BlogText>
                            <strong>A/B testing or staged rollout, if you want it.</strong> Many redesign quotes assume a single full relaunch. If you want to test the new design against the old one on a slice of traffic first, that is additional engineering work to run both versions in parallel, not something most base quotes include by default.
                        </BlogText>

                        <BlogQuote>
                            The redesign quote that looked cheapest on paper is often the one that scoped the fewest revision rounds and the thinnest design system. Total project cost, not the headline number, is what matters.
                        </BlogQuote>

                        <BlogHeader>What Drives Website Redesign Cost Up or Down</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Six factors drive redesign cost: page count and number of distinct templates, design complexity and custom interactions, depth of the UX audit and IA rework, content cleanup volume, number of stakeholders and review rounds, and timeline urgency. Page count is one factor. Template count and stakeholder count often matter more.</p>
                        </div>

                        <BlogText>
                            <strong>Page count and template count.</strong> What matters more than raw page count is how many distinct page templates exist. A 50-page site where every page uses one of 4 templates is cheaper to redesign than a 20-page site where 15 pages have unique, one-off layouts. Consolidating one-off layouts into a shared template during the redesign reduces both cost and future maintenance.
                        </BlogText>

                        <BlogText>
                            <strong>Design complexity and custom interactions.</strong> A clean, template-driven design system is cheaper to build and maintain. Custom animations, scroll-triggered effects, and bespoke micro-interactions on every page increase design and development cost by 20 to 50 percent and are usually worth reserving for a handful of high-traffic pages rather than the whole site.
                        </BlogText>

                        <BlogText>
                            <strong>Depth of the UX audit and IA rework.</strong> A light heuristic review is far cheaper than a full audit with user testing and analytics review. The deeper audit costs more upfront but catches structural problems (bad navigation, buried calls-to-action, confusing page hierarchy) that a purely visual refresh would carry forward unchanged.
                        </BlogText>

                        <BlogText>
                            <strong>Content cleanup volume.</strong> Content that has been maintained consistently migrates into new templates quickly. Content that has accumulated inconsistently for years, with duplicate pages, outdated copy, and inconsistent formatting, needs an audit and cleanup pass that can add real hours regardless of how simple the new visual design is.
                        </BlogText>

                        <BlogText>
                            <strong>Stakeholder count and review rounds.</strong> A solo business owner approving a design direction in one meeting is a fundamentally different project than a marketing team, a founder, and outside investors all needing sign-off. More stakeholders means more scheduled review rounds and a higher chance of late-stage direction changes, both of which add cost and time.
                        </BlogText>

                        <BlogText>
                            <strong>Timeline and project urgency.</strong> Rush projects cost 30 to 50 percent more because they require parallel work streams and compressed review cycles. A standard small business redesign timeline is 2 to 5 weeks. Be honest about your real deadline. Most clients who say &ldquo;we need it in 2 weeks&rdquo; actually have 6 weeks before it matters.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="text-lg font-bold text-charcoal mb-2">Want a fixed-price quote that includes everything in writing?</p>
                            <p className="text-stone-600 text-sm mb-6">Book a free 15-minute audit. We review your live site, scope the UX audit and design system, and give you a fixed price that covers design, development, in-place content migration, and free post-launch support (15 days on Starter, 1 month on Growth and above). Same platform, same hosting. No surprise invoices, no hourly creep.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get Your Fixed-Price Quote <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>Design System From Scratch vs Reusing Theme Defaults</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Reusing your current theme or page-builder defaults with new colors and content costs $500 to $2,500 and takes 1 to 2 weeks, but the result still looks like a template. Building a real design system from scratch (custom type scale, component library, defined states) costs $2,000 to $10,000 more but produces a distinct look that scales cleanly as you add pages later.</p>
                        </div>

                        <BlogText>
                            The cheapest possible &ldquo;redesign&rdquo; is swapping a theme, updating the color palette, and dropping in new photography, all within the existing page builder. It is fast and inexpensive, and it is also why so many small business sites in the same industry end up looking alike: they are built on the same handful of themes with different logos on top.
                        </BlogText>

                        <BlogText>
                            A design system built specifically for the business, rather than adapted from a theme, costs more upfront because someone has to make deliberate decisions about type, color, spacing, and component states rather than accepting a template's defaults. The payoff shows up later: adding a new page type in month 8 means applying the existing system rather than making fresh design decisions and risking visual drift from the rest of the site.
                        </BlogText>

                        <BlogText>
                            Neither approach requires changing your platform. Both are pure redesign work. The decision is about how distinct and how future-proof you need the new look to be, not about technology.
                        </BlogText>

                        <BlogHeader>Hourly vs Fixed Price Website Redesign</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Fixed-price gives total cost upfront and incentivizes the developer to deliver efficiently. Hourly billing creates unpredictable cost and rewards slow work. For projects under $10,000, fixed price wins on cost certainty and outcome quality. Hourly only makes sense for ongoing maintenance where scope cannot be defined upfront.</p>
                        </div>

                        <BlogText>
                            <strong>Fixed price.</strong> You know total cost upfront. Scope is defined before work begins. The developer is incentivized to deliver efficiently because slower work eats their margin, not your budget. Most projects that exceed the original quote by 50 to 200 percent are billed hourly.
                        </BlogText>

                        <BlogText>
                            <strong>Hourly billing.</strong> Cost is unpredictable. The developer has no incentive to finish quickly. Scope creep increases your bill. Every revision becomes a billable conversation. The cheaper hourly rate looks attractive on day one and looks expensive by week three.
                        </BlogText>

                        <BlogText>
                            PandaCodeGen runs entirely fixed-price on redesign work: $1,500 to $4,000 for small business scope, $4,000 to $8,000 for mid-market with a full design system and UX audit, $8,000 to $15,000 for larger sites with staged rollout. No hourly tracking, no surprise invoices. The exception is post-launch retainers (optional, $500 a month) for clients who want continuous design or content work after the included free support window (15 days on Starter, 1 month on Growth and above).
                        </BlogText>

                        <BlogHeader>Agency vs Freelancer vs In House Website Redesign Pricing</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Agencies cost $15,000 to $50,000+ for full-service builds. Freelancers cost $1,500 to $15,000 with variable quality. In-house developers cost $120,000 to $180,000 per year all-in. Fixed-price founder-led agencies like PandaCodeGen sit between freelancer and traditional agency on price, with agency-level guarantees and freelancer-level direct access.</p>
                        </div>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full text-sm border-collapse min-w-[640px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Option</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Typical Cost</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Pros</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Traditional agency</td>
                                        <td data-label="Typical Cost" className="p-3 border border-stone-300 font-bold text-cognac">$15K to $50K+</td>
                                        <td data-label="Pros" className="p-3 border border-stone-300">Full service, project management</td>
                                        <td data-label="Best For" className="p-3 border border-stone-300">Enterprise scope, multi-stakeholder</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Freelancer</td>
                                        <td data-label="Typical Cost" className="p-3 border border-stone-300 font-bold text-cognac">$1.5K to $15K</td>
                                        <td data-label="Pros" className="p-3 border border-stone-300">Direct access, lower cost</td>
                                        <td data-label="Best For" className="p-3 border border-stone-300">Defined scope, single owner</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">In-house developer</td>
                                        <td data-label="Typical Cost" className="p-3 border border-stone-300 font-bold text-cognac">$120K to $180K/yr</td>
                                        <td data-label="Pros" className="p-3 border border-stone-300">Continuous work, embedded in team</td>
                                        <td data-label="Best For" className="p-3 border border-stone-300">Continuous SaaS development</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50 font-bold">
                                        <td className="p-3 border border-stone-300 text-charcoal">Founder-built studio (PandaCodeGen)</td>
                                        <td data-label="Typical Cost" className="p-3 border border-stone-300 text-green-700">$1,500 to $15K</td>
                                        <td data-label="Pros" className="p-3 border border-stone-300 text-green-700">Direct co-founder access, written guarantees</td>
                                        <td data-label="Best For" className="p-3 border border-stone-300">Fixed-price redesigns, small to mid-market sites</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogHeader>The Cost of Not Redesigning a Dated, Underperforming Site</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A dated design with poor UX costs conversions and credibility even when the platform underneath is fast and secure. Confusing navigation, buried calls-to-action, and a visual style that reads as outdated all suppress conversion rate independently of load time. Note: if your site is also slow or insecure, that is a platform problem a redesign will not fix. See the migration or rebuild cost guides for that.</p>
                        </div>

                        <BlogText>
                            The financial case for redesigning a dated site is not purely aesthetic, but it is also not the same case as fixing a slow platform. A redesign&apos;s ROI comes from UX and positioning, not from Core Web Vitals.
                        </BlogText>

                        <BlogList items={[
                            "Confusing navigation and buried calls-to-action: if visitors cannot find the page that answers their question or the button that lets them take action, conversion rate suffers regardless of how fast the page loaded to get there.",
                            "Outdated visual style reads as outdated credibility: for service businesses and higher-consideration purchases, a site that looks like it has not been touched in 5+ years signals the business itself may be stagnant, independent of whether the underlying platform still works fine.",
                            "Content and information architecture that no longer matches the business: a site built around an old product lineup, an old pricing model, or an old positioning statement actively misleads visitors about what the business does today.",
                            "Mobile UX gaps that a template never solved: some redesigns exist specifically because the original design was never adapted properly for how most visitors actually browse on phones, even though the platform itself runs fine.",
                            "Competitive visual gap: if your top 3 competitors have modernized their design and yours has not, visitors comparing options may read the dated design as a proxy for a dated business, even when that is not true."
                        ]} />

                        <BlogText>
                            Frame the redesign as an investment in conversion rate and credibility, not in speed. If your site is also slow (PageSpeed under 70) or has security concerns from an outdated platform, that is a separate, platform-level problem, and pairing a redesign with a migration or rebuild is worth evaluating. But do not expect a same-platform redesign to fix load time on its own. It will not, because the platform is unchanged.
                        </BlogText>

                        <BlogHeader>How to Justify Website Redesign Cost to Stakeholders</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Build the business case on four angles: conversion impact from UX problems the audit uncovered, competitive benchmarking against how competitors present themselves visually, brand credibility risk from a dated look, and measurable KPIs to track before and after (conversion rate, bounce rate, time on key pages). Avoid conflating this with speed or security arguments, which belong to a platform decision, not a redesign one.</p>
                        </div>

                        <BlogText>
                            <strong>Conversion impact from UX problems.</strong> Use the UX audit findings, not generic industry stats. If the audit found that 40 percent of mobile visitors never scroll past the hero section, or that the pricing page requires three clicks nobody attempts, those specific findings make a stronger case than a generic conversion-rate benchmark that may not apply to your traffic.
                        </BlogText>

                        <BlogText>
                            <strong>Competitive benchmarking.</strong> Screenshot your top 3 competitors&apos; sites next to yours. Show the leadership team the visual and UX gap directly. This is a credibility and positioning argument, not a technical one, and it is usually the fastest way to get stakeholder buy-in on a redesign specifically (as opposed to a platform change).
                        </BlogText>

                        <BlogText>
                            <strong>Brand credibility risk.</strong> A site that looks unchanged for 5+ years signals stagnation to visitors comparing options, independent of how well the backend runs. Show stakeholders side-by-side screenshots of the current design against modern competitor sites.
                        </BlogText>

                        <BlogText>
                            <strong>Measurable KPIs to track.</strong> Set specific targets before the redesign starts: conversion rate, bounce rate on key pages, average time on the pricing or contact page, and (if running an A/B test) the direct comparison between old and new design. Measure 30 days before launch and 60 days after. Having data closes the loop and proves ROI for the next budget cycle.
                        </BlogText>

                        <BlogHeader>How to Reduce Website Redesign Cost Without Sacrificing Quality</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Six tactics reduce redesign cost without cutting quality: consolidate thin pages, reuse existing content where possible, phase the project across 2 sprints, prioritize high-impact pages first, choose fixed-price contracts, and avoid unnecessary features (multi-language, complex animations, custom dashboards) until traffic justifies them.</p>
                        </div>

                        <BlogList items={[
                            "Consolidate thin pages. A 50-page site with 20 thin pages becomes a 30-page site that costs less to redesign and ranks better. Google rewards depth over thinness.",
                            "Reuse existing content. Copy migration is free if the content is already good. Rewriting from scratch costs $0.10 to $1 per word and adds 1 to 2 weeks to the timeline.",
                            "Phase the project. Ship the homepage and 5 high-traffic pages first, then phase the rest over 4 to 6 weeks. Cuts upfront cost in half without sacrificing the launch window for revenue-critical pages.",
                            "Prioritize high-impact pages. Your homepage, top 3 service pages, and top 5 blog posts drive 80 percent of conversions. Spend on those and use templated layouts for the rest.",
                            "Choose fixed-price contracts over hourly. Eliminates scope creep risk. The developer absorbs the cost of inefficiency, not you.",
                            "Avoid unnecessary features. Multi-language, custom dashboards, complex animations, and advanced search all add 20 to 50 percent to the price. Add them in phase 2 if traffic justifies the investment."
                        ]} />

                        <BlogHeader>Questions to Ask Before You Sign a Website Redesign Contract</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Ten questions every redesign buyer should ask before signing: What is fixed-price vs hourly? How many design revision rounds are included? Does this touch my CMS, hosting, or platform at all? Do I own the new design files and any custom components? What is included in post-launch support and for how long? What is the refund policy if the work is bad? Who exactly is doing the design and development? How will you preserve my existing URLs and SEO during the in-place content move? What is the milestone payment structure? Will you run a staged rollout or a single relaunch?</p>
                        </div>

                        <BlogList items={[
                            "Pricing model: Is this fixed price or hourly? If hourly, what is the not-to-exceed cap?",
                            "Revision rounds: How many structured rounds of design feedback are included? What happens after that?",
                            "Platform scope: Does this touch my CMS, hosting, or framework at all? If yes, I am being quoted a rebuild, not a redesign, and should compare it against rebuild pricing.",
                            "Deliverable ownership: Will I receive the design system files (Figma or equivalent) and any custom components on completion?",
                            "Post-launch support: What is included for how long after launch? What costs extra?",
                            "Refund policy: What is your refund policy if the work is below contract specifications?",
                            "Design and content team: Who exactly is doing the UX audit, the design work, and the content migration? Is it the person I am talking to or a subcontractor?",
                            "URL and SEO preservation: Since the platform is not changing, will URLs stay the same? If pages are being consolidated or renamed, how will redirects be handled?",
                            "Payment structure: What are the milestones for the deposit, design approval, and final payment?",
                            "Rollout approach: Is this a single full relaunch or a staged rollout? If staged, what does the interim period look like for visitors?"
                        ]} />

                        <BlogHeader>What You Should Actually Pay for a Website Redesign</BlogHeader>

                        <BlogText>
                            For most small businesses in 2026, the right number is $1,500 to $4,000 for a redesign with a right-sized design system, a light UX audit, and in-place content migration on your existing platform. For mid-market sites with a full UX audit, user testing, and a complete design system across many templates, $4,000 to $8,000. For enterprise scope with multiple stakeholders, staged rollout, and A/B testing, $8,000 to $50,000.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>The price tag on the proposal is not the whole cost. Revision rounds, design system completeness, and rollout approach are.</BlogHighlight> A $3,000 quote that only includes 1 revision round and a design system covering 2 page templates will almost certainly cost more once change requests and missing templates surface mid-project. A $4,000 quote that explicitly scopes 3 rounds and every template the site needs is the better number even though it looks higher on paper.
                        </BlogText>

                        <BlogHeader>Get a Fixed-Price Website Redesign From PandaCodeGen</BlogHeader>

                        <BlogText>
                            PandaCodeGen redesigns sites in place on whatever platform they currently run on, and separately rebuilds sites onto new platforms when that is genuinely what is needed. Every redesign ships at a fixed price with a defined design system, a scoped number of revision rounds, and a written PageSpeed disclosure (what your current platform can and cannot support). Full design files on completion. Free post-launch support and tweaks scoped in your SOW: 15 days on Starter, a full month on Growth and above.
                        </BlogText>

                        <BlogList items={[
                            "Small business redesign: $1,500 to $4,000 for 5 to 10 pages with a right-sized design system",
                            "Mid-market redesign: $4,000 to $8,000 for a full UX audit, complete design system, and in-place content migration",
                            "Larger scope redesign: $8,000 to $15,000 for staged rollout, A/B testing, and multi-stakeholder review",
                            "PageSpeed disclosed in writing based on what your current platform supports",
                            "Full design system files delivered on completion",
                            "Free post-launch support, tweaks, and CMS training: 15 days on Starter, 1 month on Growth and above",
                            "Same platform, same hosting, same URLs unless we agree otherwise",
                            "Timeline: 2 to 6 weeks depending on scope"
                        ]} />

                        <div className="my-6 p-5 bg-stone-50 border border-stone-200 rounded-xl">
                            <p className="text-sm text-stone-700"><strong className="text-charcoal">Need more than a redesign?</strong> If your platform itself is slow, insecure, or the real bottleneck, see the <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost breakdown</Link> for moving to new technology while preserving what exists, or the <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">rebuild cost breakdown</Link> for a new platform combined with a reimagined site.</p>
                        </div>

                        {/* Bottom CTA */}
                        <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                            <p className="text-xl font-bold mb-2">Stop comparing $5 Fiverr gigs to $50,000 agency quotes.</p>
                            <p className="text-stone-400 text-sm mb-6">Get a fixed-price redesign quote with everything in writing: scope, revision rounds, timeline, refund clause, and free post-launch support (15 days on Starter, 1 month on Growth and above). No surprise invoices, no hourly creep, no agency markup.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <CalModalButton className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
                                    Book Free Quote Call <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full text-sm hover:border-white/40 transition-all"
                                >
                                    View Full Pricing <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <BlogHeader>Frequently Asked Questions About Website Redesign Cost</BlogHeader>
                    </div>

                    <FAQAccordion faqs={redesignFAQs} />

                    <section className="mb-10 mt-6 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">If your platform is the actual problem rather than the visual design, see <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">Website Rebuild Cost 2026</Link> (new platform plus a reimagined site) or <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">Website Migration Cost 2026</Link> (moving what you have to new technology, unchanged). For platform-specific migration numbers, see <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline font-medium">Webflow Migration Cost</Link> or <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline font-medium">WordPress Migration Cost</Link>. For the cheap-tier perspective, see <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline font-medium">Best Cheap Web Developers for Hire</Link>. If load time turns out to be your real issue, see <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline font-medium">How to Speed Up Your Website</Link>, which is a platform question, not a redesign one.</p>
                        <p className="text-stone-700 leading-relaxed">For service pages by source platform, see <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">WordPress migration</Link>, <Link href="/services/webflow" className="text-cognac hover:underline font-medium">Webflow migration</Link>, <Link href="/services/woocommerce" className="text-cognac hover:underline font-medium">WooCommerce migration</Link>, <Link href="/services/gohighlevel" className="text-cognac hover:underline font-medium">GoHighLevel migration</Link>, <Link href="/services/wix" className="text-cognac hover:underline font-medium">Wix migration</Link>, <Link href="/services/squarespace" className="text-cognac hover:underline font-medium">Squarespace migration</Link>, <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">e-commerce solutions</Link>, or <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering</Link>.</p>
                    </section>

                    <div className="mt-6 md:mt-10 md:mt-16 pt-8 border-t border-stone-100">
                        <RelatedPosts currentPostId="website-redesign-cost" category="Pricing" />
                    </div>

                </article>
            </main>
            <Footer />
        </>
    );
}
