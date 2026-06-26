import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Zap, FileText, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor, StatCard, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const timelineFAQs = blogPosts.find(p => p.id === "how-long-does-a-custom-website-take")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "How Long Does a Custom Website Take to Build? Honest 2026 Timelines",
    description: "Most agencies quote 8 to 16 weeks. The honest truth is most of that is waiting on you, not building. Real timelines by project size, the one thing that controls the clock, and the receipts behind a 7 day build.",
    alternates: {
        canonical: "/blog/how-long-does-a-custom-website-take",
    },
    keywords: [
        "how long does it take to build a website",
        "how long does a custom website take",
        "website build timeline 2026",
        "custom website timeline",
        "how fast can you build a website",
        "website redesign timeline",
        "how long to build a small business website",
        "website development time",
        "fast custom website build",
        "website project timeline weeks"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "How Long Does a Custom Website Take to Build? (2026)",
        description: "Most agencies quote 8 to 16 weeks. The honest truth is most of that is waiting on you, not building. Real timelines, the one thing that controls the clock, and the receipts.",
        type: "article",
        publishedTime: "2026-06-03",
        modifiedTime: "2026-06-03",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How Long Does a Custom Website Take to Build? (2026)",
        description: "Most agencies quote 8 to 16 weeks. The honest truth is most of that is waiting on you, not building. Real timelines and receipts.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take#article",
            "headline": "How Long Does a Custom Website Take to Build? (Honest 2026 Timelines)",
            "description": "Most agencies quote 8 to 16 weeks, but most of that window is waiting on content and feedback, not building. Real timelines by project size: 5 to 7 pages in about a week, 10 to 20 pages around 4 weeks, e-commerce around a month. The clock is driven by content readiness, not code.",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take" },
            "articleSection": "Guide",
            "keywords": ["how long does a custom website take", "website build timeline 2026", "how fast can you build a website", "website redesign timeline", "fast custom website build"],
            "wordCount": 2300,
            "timeRequired": "PT8M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Website development timeline" },
                { "@type": "Thing", "name": "Custom website build time" },
                { "@type": "Thing", "name": "Web design process" },
                { "@type": "Thing", "name": "Content readiness" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Elementor: How Long Does it Take to Build a Website", "url": "https://elementor.com/blog/how-long-does-it-take-to-build-a-website/" },
                { "@type": "CreativeWork", "name": "Clique Studios: Website Redesign Timeline and Process", "url": "https://cliquestudios.com/faq/website-redesign-timeline-and-process" },
                { "@type": "CreativeWork", "name": "Webstacks: How Long Should a Website Redesign Take", "url": "https://www.webstacks.com/blog/how-long-should-a-website-redesign-take" },
                { "@type": "CreativeWork", "name": "Solved Consulting: Website Redesign Timelines by Complexity", "url": "https://www.solvedconsulting.com/blog/website-redesign-timelines-by-project-complexity" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take#faq",
            "mainEntity": timelineFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "How Long Does a Custom Website Take?", "item": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take#webpage",
            "url": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take",
            "name": "How Long Does a Custom Website Take to Build? Honest 2026 Timelines",
            "description": "Real custom website timelines by project size, why most agencies quote 8 to 16 weeks, and the one thing that actually controls the clock.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-06-03T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/how-long-does-a-custom-website-take#breadcrumb" },
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
            "description": "PandaCodeGen builds custom Next.js websites in weeks, not months, with fixed scope and 90+ Google PageSpeed guaranteed in writing or a full refund.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function HowLongCustomWebsitePage() {
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
                        { label: "How Long Does a Custom Website Take?" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-4">
                            <Clock className="w-3 h-3" /> Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            How Long Does a Custom Website Take to Build?{" "}
                            <span className="font-serif italic text-cognac">The honest answer most agencies will not give you.</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            Most agencies quote 8 to 16 weeks. The honest truth is that most of that window is not building. It is waiting on your content, waiting on feedback, and waiting in a queue behind other clients. When those bottlenecks are handled, a custom website takes 1 to 4 weeks for most projects. Here are real timelines by project size, the one thing that actually controls the clock, and the receipts to back it up.
                        </p>
                        <BlogAuthor
                            date="June 3, 2026"
                            readTime="8 min read"
                            bio="Hassan builds custom Next.js websites in weeks, not months. Fixed scope signed before work starts, a structured questionnaire up front so projects do not stall, and 90+ Google PageSpeed guaranteed in writing or a full refund."
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
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>5 to 7 pages (Starter):</strong> 1 to 2 weeks. Faster when content and direction are ready.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>10 to 20 pages (Growth):</strong> 2 to 4 weeks. The variable is almost always content speed.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>30 plus pages or e-commerce (Scale):</strong> 4 to 8 weeks.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>Complex migration:</strong> up to 6 weeks.</span></li>
                        </ul>
                        <p className="text-sm text-stone-700 leading-relaxed mt-3">
                            The single biggest factor is not the build. It is how ready your content is. Give us content and a direction and we move fast. You do not even need a finished design.
                        </p>
                    </div>

                    <BlogText>
                        The web design industry has a quiet habit of treating slowness as a sign of quality. Ask around and you will hear that a real custom website takes 8 to 16 weeks, sometimes 24. That number is not a lie exactly, but it hides the truth about where the time actually goes.
                    </BlogText>
                    <BlogText>
                        A 12 week project is rarely 12 weeks of work. It is closer to 60 to 100 hours of actual building, stretched across 12 weeks because the agency has a queue of other clients, the project stalls every time it waits on your photos and copy, and each round of feedback takes days. The design and the code are not what make it slow. Waiting is what makes it slow.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen builds custom <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">Next.js websites</Link> in weeks, not months. We are founder-led and small, so your project is not stuck in a queue. Fixed pricing from $1,500. 90+ PageSpeed in writing or a full refund. See our published <Link href="/pricing" className="text-cognac hover:underline font-medium">fixed tiers</Link>.
                        </p>
                    </div>

                    <BlogHeader id="real-timelines">Real Timelines by Project Size</BlogHeader>
                    <BlogText>
                        Here is what each project size honestly takes when your content is ready. These are not aspirational marketing numbers. They are the ranges we actually deliver on, with the receipts further down.
                    </BlogText>

                    <div className="my-8 overflow-x-auto">
                        <p className="text-xs text-stone-500 mb-2 md:hidden">Swipe to see the full table &rarr;</p>
                        <table className="w-full min-w-[560px] border-collapse text-sm">
                            <thead>
                                <tr className="bg-stone-100 text-left">
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">Project</th>
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">Honest timeline</th>
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">What drives it</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-700">
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Starter, 5 to 7 pages</td>
                                    <td className="border border-stone-300 px-4 py-3">1 to 2 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Design back and forth</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Growth, 10 to 20 pages</td>
                                    <td className="border border-stone-300 px-4 py-3">2 to 4 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Content readiness</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Scale, 30 plus / e-commerce</td>
                                    <td className="border border-stone-300 px-4 py-3">4 to 8 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Catalog, integrations, content</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Complex migration</td>
                                    <td className="border border-stone-300 px-4 py-3">up to 6 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Content volume, redirects</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        These line up with the migration timelines in our <Link href="/ai-info/migration-services" className="text-cognac hover:underline font-medium">Migration Services reference</Link>, which breaks down the per-platform ranges (WordPress, Webflow, Squarespace, Wix) in more detail.
                    </BlogText>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="1-2 wks" label="Starter site" context="5 to 7 pages, when content is ready" />
                        <StatCard stat="2-4 wks" label="Growth site" context="10 to 20 pages, content is the variable" />
                        <StatCard stat="4-8 wks" label="Scale / e-commerce" context="30 plus pages, catalog and integrations" />
                    </div>

                    <BlogHeader id="content-is-the-clock">The One Thing That Controls the Clock: Content</BlogHeader>
                    <BlogText>
                        If you take one thing from this article, take this. Across every study of website timelines, and across every project we have shipped, the number one cause of delay is the same: waiting on the client's content. Text, photos, and decisions. Not the build.
                    </BlogText>
                    <BlogText>
                        The clearest example is a medical practice we work with. The site genuinely takes time, and for good reasons. We cannot use any stock photos, because the work depends on the doctor's specific expertise and real results. The owner is busy, so each round of feedback takes about a day. The content is medically complex and has to be exactly right. That is a slow project, and it should be slow, because rushing it would be wrong.
                    </BlogText>
                    <BlogText>
                        Now compare that to a build where the client handed us everything up front. That one shipped in 20 days, and it was a full e-commerce store. Same team, same standards. The only difference was content readiness. When you have your content and a clear direction, we go fast. When the content is still being created and decided, the calendar stretches, no matter who builds it.
                    </BlogText>

                    <InsightBox variant="tip">
                        Want the fastest possible timeline? Get your content and a clear direction ready before the build starts. That single thing is the difference between a 20-day e-commerce store and a project that stretches for months.
                    </InsightBox>

                    <BlogQuote>
                        The honest math: the build is hours. The timeline is mostly waiting. Remove the waiting and the timeline collapses.
                    </BlogQuote>

                    <BlogHeader id="no-design-needed">You Do Not Need a Finished Design</BlogHeader>
                    <BlogText>
                        A common reason owners delay starting is that they think they need a polished design ready first. You do not. You need content and a direction, and the direction can be loose.
                    </BlogText>
                    <BlogList items={[
                        "Have a clear vision? Great, we build to it.",
                        "Only have inspiration and a few references you like? Send them, we design from there.",
                        "Want to just say surprise us? That works too. We design it from our own judgment.",
                    ]} />
                    <BlogText>
                        We do not charge extra for the design work in any of those cases. Some clients come to us with no design at all, just a few references and a &quot;can you do something like this.&quot; We take the inspiration and deliver. On a recent build we turned a homepage and three sections around in two days from that kind of brief, and if the theme or typography needs adjusting after, that is a quick change. The thing that moves your timeline is content readiness, not whether you arrive with a finished design.
                    </BlogText>

                    <BlogHeader id="our-receipts">The Receipts</BlogHeader>
                    <BlogText>
                        Honest timelines mean nothing without proof. Here is what we have actually shipped.
                    </BlogText>
                    <BlogList items={[
                        "PandaCodeLab, our own agency site: 7 days, designed from scratch on a surprise us brief.",
                        "MyCustomPatches, a WordPress migration: 7 days, because the client had design and content ready.",
                        "Panda Patches, a full e-commerce store: 20 days, our fastest large build, because all the content was provided up front.",
                    ]} />
                    <BlogText>
                        See the full breakdowns on our <Link href="/work" className="text-cognac hover:underline font-medium">work page</Link>. The pattern across all three is identical: when content and direction are ready, the build is fast.
                    </BlogText>

                    <BlogHeader id="how-we-stay-fast">How We Stay Faster Than a Typical Agency</BlogHeader>
                    <BlogText>
                        Speed without cut corners comes from process, not pressure. Three things make the difference.
                    </BlogText>

                    <div className="my-8 grid gap-4">
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><FileText className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">1. Two days of discovery up front</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Before any clock starts, we spend at least two days with you and a structured questionnaire. It surfaces the content and decisions you are missing now, so the project does not stall halfway through waiting on something nobody flagged.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">2. Fixed scope, signed before we start</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">A signed scope of work means no mid-project scope creep, the quiet killer of timelines. Everyone knows exactly what is being built before anyone starts.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Users className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">3. Founder-led, no queue</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Your project is not sitting behind 30 others. We are small and founder-led, which is exactly why the calendar can be weeks instead of months without anyone rushing the actual work.</p>
                        </div>
                    </div>

                    <BlogText>
                        And if you genuinely need a rush, we can prioritize it. We do not say no to rush jobs. We just price the extra dev hours honestly up front rather than pretend speed is free.
                    </BlogText>

                    {/* Mid CTA */}
                    <div className="my-10 p-6 bg-charcoal rounded-2xl text-center">
                        <p className="text-white font-bold text-lg mb-2">Want a realistic timeline for your specific site?</p>
                        <p className="text-stone-300 text-sm mb-5 max-w-lg mx-auto">Tell me your platform and rough page count and I will give you an honest range and a fixed price. No queue, no scope-creep surprises.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-semibold rounded-full hover:bg-amber-700 transition-colors">
                            Book a 15-minute call with Hassan <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 p-6 bg-white border border-cognac/30 rounded-2xl flex items-start gap-3">
                        <Zap className="w-6 h-6 text-cognac shrink-0 mt-1" />
                        <div>
                            <p className="font-bold text-charcoal mb-1">Weeks, not months. In writing.</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Bring your content and a direction, even just inspiration, and we will move. <Link href="/contact" className="text-cognac hover:underline font-medium">Tell me what you want built</Link> and I will reply personally with a real timeline.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={timelineFAQs} />

                </article>
            </section>

            <RelatedPosts currentPostId="how-long-does-a-custom-website-take" category="Guide" />
            <Footer />
        </main>
    );
}
