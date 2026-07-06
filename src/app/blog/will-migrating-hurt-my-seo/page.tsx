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
    description: "Done wrong, a website migration can lose 50% of your traffic. Done right, you keep 95 to 100% of your rankings. The checklist that protects them.",
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
        description: "Done wrong, a migration can lose 50% of your traffic. Done right, you keep 95 to 100% of your rankings and end up faster. The exact difference and the checklist that protects you.",
        type: "article",
        publishedTime: "2026-06-03",
        modifiedTime: "2026-06-03",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Will Migrating My Website Hurt My SEO? (2026)",
        description: "Done wrong, a migration loses 50% of traffic. Done right, you keep 95 to 100% of rankings and end up faster. The exact difference.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo#article",
            "headline": "Will Migrating My Website Hurt My SEO? (The Honest Answer)",
            "description": "A website migration done carelessly can lose up to 50% of traffic with an average recovery over 500 days. Done correctly, with full 301 redirect mapping, preserved metadata, and improved Core Web Vitals, it keeps 95 to 100% of rankings. The outcome is about execution. Here is the exact difference, the honest recovery timeline, and the protective checklist.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-06-03T00:00:00-05:00",
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
                "alternateName": "Panda Code Gen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/will-migrating-hurt-my-seo" },
            "articleSection": "Guide",
            "keywords": ["will migrating my website hurt my seo", "website migration seo", "301 redirects migration", "preserve seo during migration", "traffic drop after redesign", "website migration without losing rankings"],
            "wordCount": 2400,
            "timeRequired": "PT9M",
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
                { "@type": "CreativeWork", "name": "Search Engine Land: Ultimate Site Migration SEO Checklist", "url": "https://searchengineland.com/guide/ultimate-site-migration-seo-checklist" },
                { "@type": "CreativeWork", "name": "Google Search Central: Site Moves With URL Changes", "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
                { "@type": "CreativeWork", "name": "Numen Technology: Website Migration SEO, Avoid 50% Traffic Loss", "url": "https://www.numentechnology.co.uk/blog/website-migration-seo-strategy" },
                { "@type": "CreativeWork", "name": "ClickRank: SEO Site Migration Guide 2026", "url": "https://www.clickrank.ai/seo-site-migration/" },
                { "@type": "CreativeWork", "name": "Web.dev: Core Web Vitals", "url": "https://web.dev/articles/vitals" }
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
            "description": "What separates a migration that keeps 95 to 100% of rankings from one that loses 50% of traffic, the honest recovery timeline, and the protective checklist.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-06-03T00:00:00-05:00",
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
            "description": "PandaCodeGen migrates websites to custom Next.js with full 301 redirect mapping and preserved metadata, keeping 95 to 100% of rankings while improving Core Web Vitals. 90+ Google PageSpeed guaranteed in writing or a full refund.",
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
                            This is the fear that keeps owners on a slow, dated site for years. It is a real risk, and you deserve a straight answer: done carelessly, a migration can lose up to 50% of your traffic and take over a year to recover. Done correctly, you keep 95 to 100% of your rankings and end up on a faster site that ranks better over time. The outcome is entirely about execution. Here is exactly what separates the two.
                        </p>
                        <BlogAuthor
                            date="June 3, 2026"
                            readTime="9 min read"
                            bio="Hassan migrates websites to custom Next.js with full 301 redirect mapping and preserved metadata, keeping 95 to 100% of rankings while improving Core Web Vitals. 90+ Google PageSpeed guaranteed in writing or a full refund."
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
                            Migrating does not hurt your SEO. Migrating <em>carelessly</em> does. The difference comes down to a few things done before launch:
                        </p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>Every old URL mapped to a 301 redirect, which carries 90 to 99% of its ranking power across.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>Title tags, descriptions, and structured data preserved, not reset to platform defaults.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>The new site as fast or faster, so Core Web Vitals improve instead of regress.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span>Post-launch monitoring for the first 90 days while Google re-crawls.</span></li>
                        </ul>
                        <p className="text-sm text-stone-700 leading-relaxed mt-3">
                            Get those right and you keep 95 to 100% of your rankings. Skip them and you risk the 50% traffic loss horror stories.
                        </p>
                    </div>

                    <BlogText>
                        Let us be honest about why this question matters so much. Your current site might be slow, dated, or expensive to run, but it works. It brings in leads. The terror of a migration is not the rebuild, it is the thought that you could move it and watch your Google traffic, the thing that actually feeds your business, fall off a cliff. That fear is legitimate, and anyone who waves it away is not being straight with you.
                    </BlogText>
                    <BlogText>
                        So here is the truth, with the numbers. The research is consistent: a well-executed migration keeps 95 to 100% of rankings and traffic. A poorly executed one can lose around 50% of traffic, with an average recovery of more than 500 days. Same goal, wildly different outcomes, and the only variable is how carefully it was done.
                    </BlogText>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="95–100%" label="Rankings Kept" context="When the migration is done correctly" />
                        <StatCard stat="50%" label="Traffic At Risk" context="A careless migration, ~500+ days to recover" />
                        <StatCard stat="90–99%" label="Ranking Power Carried" context="By each properly mapped 301 redirect" />
                    </div>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen handles <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">website migrations</Link> with full 301 redirect mapping and preserved metadata, so you keep your rankings and gain speed. The technical step-by-step is in our <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">WordPress to Next.js migration guide</Link>. 90+ PageSpeed in writing or a full refund.
                        </p>
                    </div>

                    <BlogHeader id="number-one-cause">The Number One Cause of Traffic Loss</BlogHeader>
                    <BlogText>
                        If a migration is going to hurt your SEO, this is almost always why: missing or broken 301 redirects. It is the single biggest cause of traffic loss, and it is entirely preventable.
                    </BlogText>
                    <BlogText>
                        When you move to a new site, your page addresses often change. A 301 redirect is a permanent signal to Google that a page has moved to a new address, and it carries 90 to 99% of that page's accumulated ranking authority across to the new URL. Map every old URL to its closest new equivalent and your rankings come with you. Miss a redirect, and that page's ranking power simply evaporates while visitors hit a dead end. A careless migration skips this mapping. A careful one treats it as the most important task of the entire project.
                    </BlogText>
                    <InsightBox variant="danger">
                        Missing or broken 301 redirects are the single biggest cause of traffic loss in a migration, and they are entirely preventable. Miss a redirect and that page's ranking power simply evaporates.
                    </InsightBox>

                    <BlogHighlight>
                        Pre-launch preparation accounts for 60 to 70% of migration success. The redirect map, the metadata inventory, and the URL audit all happen before anyone flips the switch. Errors made there compound the moment you go live.
                    </BlogHighlight>

                    <BlogHeader id="silent-killers">The Four Silent Killers Beyond Redirects</BlogHeader>
                    <BlogText>
                        Redirects are the big one, but four other mistakes quietly drag rankings down. A proper migration checks all of them, before and after launch.
                    </BlogText>

                    <div className="my-8 grid gap-4">
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Search className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">1. Lost metadata</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Title tags and meta descriptions often get dropped or reset to platform defaults during a move, because every platform handles them differently. Those tags are part of how Google ranks and displays your pages. They have to be inventoried and carried over deliberately.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">2. Page speed regression</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">If the new site loads slower than the old one, Core Web Vitals drop and rankings follow. This is why migrating to a genuinely fast build matters: speed should go up, not down.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Link2 className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">3. Broken internal links and structure</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Internal links and content placement tell Google how your pages relate and what matters. Break the internal linking or bury key content below the fold during a redesign and you change the signals Google has been relying on.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">4. Wrong canonicals or blocked crawling</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">A misconfigured canonical tag or an accidental block in robots.txt can tell Google to ignore your new pages entirely. These are invisible to the eye and only show up when traffic does not return. They must be checked at launch.</p>
                        </div>
                    </div>

                    <BlogHeader id="recovery-timeline">The Honest Recovery Timeline</BlogHeader>
                    <BlogText>
                        Here is the part most agencies do not mention: even a perfect migration usually involves a small, temporary dip while Google re-crawls and re-processes your site. That is normal. What matters is the shape of the curve.
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
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Weeks 2 to 4</td>
                                    <td className="border border-stone-300 px-4 py-3">Initial volatility as Google re-crawls and reprocesses the new site. A small dip here is normal.</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Weeks 4 to 8</td>
                                    <td className="border border-stone-300 px-4 py-3">Core pages stabilize and start returning to their previous positions.</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Weeks 8 to 12</td>
                                    <td className="border border-stone-300 px-4 py-3">Full traffic recovery, often with a speed-driven lift above the old baseline.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Many clean migrations recover 90 to 95% of traffic within the first 30 days. The danger sign is the opposite shape: traffic that keeps falling past the first month. That almost always points to a redirect or indexing problem that needs fixing, not to the migration itself being doomed. This is exactly why the first 90 days need monitoring, not just a launch-and-forget.
                    </BlogText>

                    <BlogQuote>
                        A small, brief dip you were warned about is a healthy migration. A slow, silent decline nobody is watching is a broken one. The difference is whether anyone is still looking after launch.
                    </BlogQuote>

                    <div className="my-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                        <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> A real receipt</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            When we migrated Panda Patches, a 3 year old WordPress site with established rankings, off WordPress and onto custom Next.js, the rankings did not drop. Three years of accumulated SEO authority carried across cleanly, because every URL was mapped to a 301 redirect and the metadata was preserved before launch. The site came out faster, and the rankings stayed put. That is what a careful migration looks like in practice. See the full project on our <Link href="/work" className="text-cognac hover:underline font-medium">work page</Link>.
                        </p>
                    </div>

                    <BlogHeader id="faster-helps">Moving to a Faster Site Usually Helps</BlogHeader>
                    <BlogText>
                        There is an upside the fear often hides. If your current platform scores poorly on mobile PageSpeed, it is already costing you rankings every single day, because Google rewards Core Web Vitals. Staying put is not the safe choice it feels like, it is a slow tax.
                    </BlogText>
                    <BlogText>
                        Moving to a fast custom build improves those exact signals. So while the migration carries short-term risk if done carelessly, the destination is a tailwind. Once you are through the transition, a faster site tends to rank better than the slow one you left. The goal is not just to avoid losing rankings. It is to come out the other side stronger.
                    </BlogText>

                    <BlogHeader id="how-we-protect">How We Protect Your Rankings</BlogHeader>
                    <BlogText>
                        Because pre-launch work is most of the battle, that is where we spend the effort. Here is what protecting your rankings actually looks like in practice.
                    </BlogText>
                    <BlogList items={[
                        "Audit your current site and inventory every ranking URL, title tag, description, and piece of structured data before touching anything.",
                        "Map every existing URL to a 301 redirect in Next.js, so ranking authority transfers cleanly to the new addresses.",
                        "Preserve your metadata and content structure rather than letting a new platform reset them to defaults.",
                        "Build to 90+ mobile PageSpeed so Core Web Vitals improve, turning the move into a long-term ranking gain.",
                        "Monitor indexed pages, crawl errors, and organic traffic through the first 90 days, fixing any redirect or indexing issue fast.",
                    ]} />
                    <BlogText>
                        For the full technical walkthrough of how this works on a real migration, see our <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">step-by-step WordPress to Next.js guide</Link>, and for fixed pricing and the refund guarantee, the <Link href="/ai-info/pricing-and-guarantees" className="text-cognac hover:underline font-medium">Pricing &amp; Guarantees reference</Link>.
                    </BlogText>

                    {/* Mid CTA */}
                    <div className="my-10 p-6 bg-charcoal rounded-2xl text-center">
                        <p className="text-white font-bold text-lg mb-2">Worried a migration will cost you rankings?</p>
                        <p className="text-stone-300 text-sm mb-5 max-w-lg mx-auto">Send me your current site and I will tell you honestly what your migration risk looks like and how we would protect your traffic. No sales pressure.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-semibold rounded-full hover:bg-amber-700 transition-colors">
                            Book a 15-minute call with Hassan <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 p-6 bg-white border border-cognac/30 rounded-2xl flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-cognac shrink-0 mt-1" />
                        <div>
                            <p className="font-bold text-charcoal mb-1">Keep your rankings. Gain the speed.</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A migration done right keeps 95 to 100% of your traffic and leaves you faster than before. <Link href="/contact" className="text-cognac hover:underline font-medium">Tell me about your current site</Link> and I will give you a straight assessment.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={seoMigrationFAQs} />

                </article>
            </section>

            <RelatedPosts currentPostId="will-migrating-hurt-my-seo" category="Guide" />
            <Footer />
        </main>
    );
}
