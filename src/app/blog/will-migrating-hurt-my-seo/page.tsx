import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Link2, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor, StatCard, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const seoMigrationFAQs = blogPosts.find(p => p.id === "will-migrating-hurt-my-seo")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Will Migrating My Website Hurt My SEO? (2026)",
    description: "A practical website-migration SEO checklist covering URL mapping, redirects, metadata, crawl checks, rollback planning, and post-launch monitoring.",
    alternates: {
        canonical: "/blog/will-migrating-hurt-my-seo",
    },
    keywords: [
        "will migrating my website hurt my seo",
        "will I lose my google rankings if I migrate",
        "website migration seo",
        "preserve seo during migration",
        "traffic drop after website redesign",
        "301 redirects migration seo",
        "website migration without losing rankings",
        "how long to recover traffic after migration",
        "migrate website keep seo",
        "website redesign seo impact 2026"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Will Migrating My Website Hurt My SEO? (2026)",
        description: "How to reduce avoidable migration risk with URL mapping, redirects, metadata, crawl checks, rollback planning, and post-launch monitoring.",
        type: "article",
        publishedTime: "2026-06-03",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo",
        images: [ogImageForPath("/blog/will-migrating-hurt-my-seo")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Will Migrating My Website Hurt My SEO? (2026)",
        description: "A controlled website-migration SEO process, the risks it can reduce, and the search outcomes no agency can guarantee.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo#article",
            "headline": "Will Migrating My Website Hurt My SEO? (The Honest Answer)",
            "description": "A website-migration SEO guide covering URL inventories, page-level redirects, metadata and canonical checks, crawl validation, rollback planning, and post-launch Search Console monitoring.",
            "image": ogImageUrlForPath("/blog/will-migrating-hurt-my-seo"),
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-07-24",
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
                "alternateName": "Panda Code Gen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo" },
            "articleSection": "Guide",
            "keywords": ["will migrating my website hurt my seo", "website migration seo", "301 redirects migration", "preserve seo during migration", "traffic drop after redesign", "website migration without losing rankings"],
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Website migration SEO" },
                { "@type": "Thing", "name": "301 redirects" },
                { "@type": "Thing", "name": "Google rankings" },
                { "@type": "Thing", "name": "Core Web Vitals" },
                { "@type": "Thing", "name": "Search engine optimization" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google Search Central: Site Moves With URL Changes", "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
                { "@type": "CreativeWork", "name": "Google Search Central: Change of Address Tool", "url": "https://support.google.com/webmasters/answer/9370220" },
                { "@type": "CreativeWork", "name": "Google Search Central: Debugging Search Traffic Drops", "url": "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" },
                { "@type": "CreativeWork", "name": "Google Search Central: Core Web Vitals", "url": "https://developers.google.com/search/docs/appearance/core-web-vitals" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo#faq",
            "mainEntity": seoMigrationFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Will Migrating Hurt My SEO?", "item": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo#webpage",
            "url": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo",
            "name": "Will Migrating My Website Hurt My SEO? The Honest Answer",
            "description": "The controls that reduce avoidable website-migration SEO risk, plus the outcomes and timelines no agency can guarantee.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-07-24",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "email": "info@pandacodegen.com",
            "description": "PandaCodeGen plans SEO-conscious migrations with URL inventories, page-level redirect mapping, rendered-output checks, rollback planning, and post-launch monitoring. Search outcomes are not guaranteed.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function WillMigratingHurtSeoPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Will Migrating Hurt My SEO?" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-4">
                            <Search className="w-3 h-3" /> Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Will Migrating My Website Hurt My SEO?{" "}
                            <span className="font-serif italic text-cognac">The honest answer, not the sales pitch.</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            A migration can genuinely cost you search traffic if URLs, the content that
                            renders, metadata, canonicals, internal links or crawl rules change in the wrong
                            way. Running it carefully removes the avoidable technical risk. It cannot
                            guarantee your rankings, your traffic, that pages get indexed, or a date by which
                            anything recovers. Here is the process, and the evidence you should insist on.
                        </p>
                        <BlogAuthor
                            date="June 3, 2026"
                            readTime="9 min read"
                            bio="Hassan plans SEO-conscious migrations using URL inventories, page-level redirect maps, rendered-output checks, and post-launch monitoring. Search outcomes remain controlled by search engines."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Short Answer */}
                    <div className="mb-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The Short Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            A migration can affect search performance. Careful planning reduces avoidable implementation
                            risk, but it cannot make crawling, indexing, rankings, traffic or recovery timing certain.
                            The controls below should exist before launch:
                        </p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>Every old URL receives a documented disposition: keep it stable, redirect it to a relevant successor, retire it with the correct status, or investigate it.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>Title tags, descriptions, and structured data preserved, not reset to platform defaults.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>Representative journeys are tested for rendered content, functionality, and performance before cutover.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>The agreed monitoring window covers Search Console, analytics continuity, crawl errors, redirects, and rollback triggers.</span></li>
                        </ul>
                        <p className="text-sm text-stone-700 leading-relaxed mt-3">
                            These controls reduce preventable implementation errors. They do not make ranking or traffic outcomes certain.
                        </p>
                    </div>

                    <BlogText>
                        Let us be honest about why this question matters so much. Your current site might be slow, dated, or expensive to run, but it works. It brings in leads. The terror of a migration is not the rebuild, it is the thought that you could move it and watch your Google traffic, the thing that actually feeds your business, fall off a cliff. That fear is legitimate, and anyone who waves it away is not being straight with you.
                    </BlogText>
                    <BlogText>
                        Migration outcomes vary. A controlled process reduces avoidable technical risk, while search
                        engines still control indexing, rankings, traffic, and recovery timing. Implementation quality
                        is one factor alongside site history, content, competition, demand, algorithm changes and
                        measurement.
                    </BlogText>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="4" label="Control groups" context="URLs, content, technical signals, monitoring" />
                        <StatCard stat="No" label="Ranking guarantee" context="Search engines control the outcome" />
                        <StatCard stat="Page-level" label="Redirect mapping" context="Only to a relevant successor" />
                    </div>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen handles <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">website migrations</Link> with URL inventories, page-level redirect mapping, metadata and rendered-content checks, staged cutovers, and post-launch monitoring. The technical step-by-step is in our <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">WordPress to Next.js migration guide</Link>. Any Lighthouse target and remedy must appear in the accepted project terms.
                        </p>
                    </div>

                    <BlogHeader id="url-disposition">URL changes and redirects</BlogHeader>
                    <BlogText>
                        Missing, broken or irrelevant redirects are a common avoidable migration defect when valuable
                        URLs change. They are not the only possible cause of a traffic change, and even a technically
                        correct redirect cannot guarantee unchanged rankings or visits.
                    </BlogText>
                    <BlogText>
                        When a valuable page address changes, use a server-side permanent redirect to its closest relevant successor and update internal links, canonicals, and sitemaps to the final URL. Do not redirect unrelated pages to the home page. Redirects help search engines process a move, but they do not guarantee that every signal, position, or visit will transfer unchanged.
                    </BlogText>
                    <InsightBox variant="danger">
                        Missing, chained, looping, or irrelevant redirects create avoidable crawl and user problems. Test the complete URL disposition map before and after launch.
                    </InsightBox>

                    <BlogHighlight>
                        The redirect map, metadata inventory, rendered-content checks, analytics validation, rollback plan, and acceptance evidence should exist before cutover. A percentage cannot meaningfully describe migration success without a defined dataset and methodology.
                    </BlogHighlight>

                    <BlogHeader id="silent-killers">The Four Silent Killers Beyond Redirects</BlogHeader>
                    <BlogText>
                        Redirects are the big one, but four other mistakes quietly drag rankings down. A proper migration checks all of them, before and after launch.
                    </BlogText>

                    <div className="my-8 grid gap-4">
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Search className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">1. Lost metadata</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Titles, descriptions and structured data can be dropped or reset during a move because platforms model them differently. Inventory the current output, preserve approved values where appropriate and validate that structured data matches visible content. Descriptions can influence snippets but are not a promised ranking control.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">2. Page speed regression</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">A new implementation can regress real-user performance. Compare representative routes and field Core Web Vitals where available, then use repeated lab tests for diagnosis. Google uses Core Web Vitals in broader systems but says good scores do not guarantee top rankings.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Link2 className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">3. Broken internal links and structure</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Internal links help people and crawlers discover related pages. Validate navigation, breadcrumbs, contextual links, anchor text and crawl depth. Check that important content remains present and useful instead of assuming one screen position creates a fixed ranking signal.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">4. Wrong canonicals or blocked crawling</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">A misconfigured canonical tag or an accidental block in robots.txt can tell Google to ignore your new pages entirely. These are invisible to the eye and only show up when traffic does not return. They must be checked at launch.</p>
                        </div>
                    </div>

                    <BlogHeader id="recovery-timeline">The Honest Recovery Timeline</BlogHeader>
                    <BlogText>
                        Search behavior after a migration varies. Monitor from the launch baseline and investigate material changes rather than promising a standard dip or recovery curve.
                    </BlogText>

                    <div className="my-8 overflow-x-auto">
                        <p className="text-xs text-stone-500 mb-2 md:hidden">Swipe to see the full table &rarr;</p>
                        <table className="w-full min-w-[560px] border-collapse text-sm">
                            <thead>
                                <tr className="bg-stone-100 text-left">
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">Window</th>
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">What is happening</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-700">
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Launch day</td>
                                    <td className="border border-stone-300 px-4 py-3">Validate status codes, redirects, canonicals, rendered content, analytics, sitemaps, and critical journeys; use rollback criteria if needed.</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Early monitoring</td>
                                    <td className="border border-stone-300 px-4 py-3">Compare crawl, indexing, queries, landing pages, conversions, and errors with the recorded baseline; investigate by page and query.</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Agreed review window</td>
                                    <td className="border border-stone-300 px-4 py-3">Keep monitoring for the period defined in the accepted scope. Recovery timing is not promised.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Compare like-for-like dates, seasonality, channels, queries, landing pages, and conversion tracking. A continuing decline can have technical, content, algorithmic, competitive, demand, or measurement causes, so diagnosis should not assume a redirect error or a standard recovery deadline.
                    </BlogText>

                    <BlogQuote>
                        A migration needs a dated baseline, active monitoring and named rollback or investigation
                        triggers. The shape and duration of any search change are property-specific.
                    </BlogQuote>

                    <div className="my-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                        <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> A real receipt</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            Panda Patches is owned by a PandaCodeGen co-founder, so it is not independent client proof. Its migration informed our URL-inventory, redirect, metadata, and monitoring process, but any dated search or performance result must be shown with the exact reporting period, comparable baseline, measurement source, and limitations. See the current evidence boundary on our <Link href="/work" className="text-cognac hover:underline font-medium">work page</Link>.
                        </p>
                    </div>

                    <BlogHeader id="performance">Performance is one migration acceptance area</BlogHeader>
                    <BlogText>
                        Performance can affect user experience and is one part of Google&apos;s page-experience systems, but a Lighthouse score does not map directly to a ranking position. Diagnose field Core Web Vitals, content relevance, links, intent, technical health, and the actual funnel together.
                    </BlogText>
                    <BlogText>
                        A rebuild can improve measured performance when the implementation, content, media, third parties, and infrastructure support it. Validate the result separately from search outcomes; neither ranking gains nor a standard recovery timeline are promised.
                    </BlogText>

                    <BlogHeader id="how-we-reduce-risk">How we reduce avoidable search risk</BlogHeader>
                    <BlogText>
                        Pre-launch inventories and validation catch defects while rollback is still simple. Here is what
                        our search-risk control process looks like in practice.
                    </BlogText>
                    <BlogList items={[
                        "Audit your current site and inventory every ranking URL, title tag, description, and piece of structured data before touching anything.",
                        "Give every existing URL a documented disposition and use a server-side permanent redirect only where there is a relevant successor.",
                        "Preserve your metadata and content structure rather than letting a new platform reset them to defaults.",
                        "Test every agreed representative page under the recorded mobile and desktop conditions; lab acceptance remains separate from field Core Web Vitals and search outcomes.",
                        "Monitor indexed pages, crawl errors, landing pages, queries, and conversions for the period stated in the accepted scope.",
                    ]} />
                    <BlogText>
                        For the full technical walkthrough, see our <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">step-by-step WordPress to Next.js guide</Link>. The <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link> shows planning anchors; scope, acceptance, support, ownership, payment milestones, and any conditional remedy belong in the accepted project terms.
                    </BlogText>

                    {/* Mid CTA */}
                    <div className="my-10 p-6 bg-charcoal rounded-2xl text-center">
                        <p className="text-white font-bold text-lg mb-2">Worried a migration will cost you rankings?</p>
                        <p className="text-stone-300 text-sm mb-5 max-w-lg mx-auto">Send your current site and we will identify the main migration risks, controls and evidence without promising a search outcome.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-semibold rounded-full hover:bg-amber-700 transition-colors">
                            Book a 15-minute call with Hassan <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 p-6 bg-white border border-cognac/30 rounded-2xl flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-cognac shrink-0 mt-1" />
                        <div>
                            <p className="font-bold text-charcoal mb-1">Control the migration risks you can control.</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A controlled migration uses URL mapping, redirect validation, metadata and canonical checks, rendered-output testing, rollback planning, and post-launch monitoring without guaranteeing traffic or ranking outcomes. <Link href="/contact" className="text-cognac hover:underline font-medium">Tell me about your current site</Link> and I will give you a straight assessment.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={seoMigrationFAQs} />

                </article>
            </section>

            <RelatedPosts currentPostId="will-migrating-hurt-my-seo" />
            <Footer />
        </main>
    );
}
