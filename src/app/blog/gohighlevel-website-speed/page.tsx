import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Microscope, Route } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "gohighlevel-website-speed";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/gohighlevel-website-speed";
const title = "GoHighLevel Site Slow? Diagnose and Fix It in 2026";
const description =
    "A measured GoHighLevel performance workflow covering PageSpeed, Core Web Vitals, in-platform fixes and the evidence required before replacing the frontend.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/gohighlevel-website-speed" },
    keywords: [
        "GoHighLevel site slow",
        "GoHighLevel PageSpeed",
        "GoHighLevel website speed",
        "GoHighLevel Core Web Vitals",
        "speed up GoHighLevel funnel",
        "GoHighLevel Next.js",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-22",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/gohighlevel-website-speed")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Google Search Central: Core Web Vitals",
        url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
        name: "Google Search Central: page experience",
        url: "https://developers.google.com/search/docs/appearance/page-experience",
    },
    {
        name: "Chrome for Developers: Lighthouse performance scoring",
        url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring",
    },
    {
        name: "HighLevel: websites overview",
        url: "https://help.gohighlevel.com/support/solutions/articles/155000001633",
    },
    {
        name: "HighLevel API introduction",
        url: "https://marketplace.gohighlevel.com/docs/intro/index.html",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-22",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about",
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": canonicalUrl },
            articleSection: "GoHighLevel performance",
            inLanguage: "en-US",
            citation: sources.map((source) => ({ "@type": "WebPage", ...source })),
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: postFAQs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

const sourceLinkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function HighLevelSpeedGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "GoHighLevel website speed", href: "/blog/gohighlevel-website-speed" },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">GoHighLevel performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            GoHighLevel Site Slow? <span className="italic text-cognac">Diagnose Before You Rebuild</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            GoHighLevel sites do not share one PageSpeed score or fixed performance ceiling. Test the
                            real route, separate field and lab evidence, find the responsible work, apply controlled
                            fixes, and replace the frontend only when agreed requirements remain blocked.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Google, Chrome and HighLevel primary guidance.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="March 22, 2026"
                        readTime="14 min read"
                        bio="Hassan runs repeatable performance diagnostics and CRM-connected migrations."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The diagnostic order</h2>
                        <BlogList
                            items={[
                                "Confirm the affected route, visitor journey, device, region, consent state and business symptom.",
                                "Check field Core Web Vitals where eligible data exists; use repeated lab runs to diagnose.",
                                "Attribute work to media, fonts, layout, custom code, third parties, embeds, content, infrastructure or platform behavior.",
                                "Apply one controlled change at a time and compare under the same test profile.",
                                "Choose native optimization, a lighter rebuild, or a hybrid frontend from measured residual constraints.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: Microscope, title: "Field evidence", body: "Real-user distributions when CrUX or your monitoring has enough eligible data." },
                            { icon: Gauge, title: "Lab evidence", body: "Repeatable diagnostics under a recorded synthetic device, network and page state." },
                            { icon: Route, title: "Business path", body: "The actual landing page, form, calendar and thank-you journey that must work." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What PageSpeed Insights actually tells you</BlogHeader>
                    <BlogText>
                        PageSpeed Insights can show field data from the Chrome User Experience Report when the URL or
                        origin has enough eligible data, plus a Lighthouse lab result. These are not interchangeable.
                        Field data describes a rolling population of real experiences. A lab run is a simulated test
                        useful for diagnosis and can change across runs.
                    </BlogText>
                    <BlogText>
                        Lighthouse labels 90 to 100 as a “good” performance score in its current scoring guidance, but
                        that score is not Google&apos;s Core Web Vitals threshold and is not a direct ranking grade.
                        Google&apos;s current field thresholds evaluate LCP, INP and CLS at the 75th percentile:
                        LCP within 2.5 seconds, INP within 200 milliseconds, and CLS at or below 0.1. Our{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals reference</Link>{" "}
                        works through each metric, and{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className={sourceLinkClass}>what a PageSpeed score represents</Link>{" "}
                        covers why the lab number moves between runs.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no universal HighLevel score range">
                        We do not publish a typical score range for HighLevel sites. A number like that only means
                        something with the sampled URLs, the test profile, the run count and the dates attached, and
                        without those it tells you nothing about your own funnel. Any range you see quoted without that
                        method behind it, including ours, should be treated as marketing rather than measurement. Test
                        your own routes and compare them against themselves over time.
                    </InsightBox>

                    <BlogHeader>Record a defensible test profile</BlogHeader>
                    <BlogList
                        items={[
                            "Exact URL, status and canonical; public or authenticated state; page and content version.",
                            "Tool and version, run time, location, device emulation, network and CPU settings.",
                            "Cold or warm cache, consent choice, cookie state, logged-in state and test-data state.",
                            "Third-party availability, experiment variant and any browser extension or request blocking.",
                            "At least three comparable lab runs for the agreed page and profile, retaining raw reports.",
                        ]}
                    />
                    <BlogText>
                        Test the homepage only if it represents the acceptance scope. Landing pages, long service pages,
                        calendars, forms, location pages and thank-you routes can have different content and scripts.
                        Lazy loading does not make the rest of a site irrelevant; every important template and journey
                        needs an appropriate test. If you are starting from scratch on the symptom rather than the
                        platform, our general{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className={sourceLinkClass}>slow-site diagnostic order</Link>{" "}
                        applies to any stack.
                    </BlogText>

                    <BlogHeader id="architecture">Why the ceiling exists, not just what to compress</BlogHeader>
                    <BlogText>
                        Most GoHighLevel speed advice stops at images and scripts. Those matter, but they do not explain
                        why a well-optimised HighLevel page still tops out below a comparable custom build. The reasons are
                        architectural, and you can observe all of them yourself rather than take our word for it. Open the
                        page, view source, and watch the Network panel on a cold load.
                    </BlogText>
                    <BlogList
                        items={[
                            "How much arrives as HTML. View source and look for your headline and body copy. If the meaningful content is not in the initial HTML response and only appears after JavaScript executes, the browser has to download, parse and run script before anything useful paints — and a crawler or answer engine has to do the same work to read you.",
                            "How much JavaScript loads regardless of the page. Compare the script payload on a simple one-section page against a complex funnel. If they are similar, you are shipping builder capability the page never uses. That is the cost of a hosted page builder: the bundle serves every possible page, not yours specifically.",
                            "Whether the response is cached at the edge. Check response headers for cache status and compare a first load against a repeat load from a different region. Static or edge-cached HTML answers from close to the user; a page assembled per request does not, and the gap shows up hardest on mobile connections and distant geographies.",
                            "Where fonts and hero media sit in the waterfall. Fonts discovered late, or a hero image discovered only after script runs, push back the largest paint no matter how well compressed the asset is. Order matters as much as size.",
                            "What third parties do to the critical path. Chat, heatmaps, review widgets and tag managers often load early and block. One vendor's slow response becomes your LCP.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why this is the useful frame">
                        The first three items are properties of the platform you are on, not mistakes you made. That is why
                        in-platform optimisation has a genuine ceiling: you can fix your images, your fonts and your
                        embeds, and you cannot change how the page is rendered or delivered. Knowing which bucket your
                        problem sits in tells you whether to keep optimising or to replace the frontend — which is what
                        the rest of this article is about. Measure before and after each change on your own route, because
                        none of this predicts a specific score.
                    </InsightBox>

                    <BlogHeader>Common causes to inspect on a HighLevel page</BlogHeader>
                    <BlogList
                        items={[
                            "Oversized hero and background media, incorrect dimensions, eager offscreen images and video.",
                            "Font families, weights, origins, preload choices and render-blocking styles.",
                            "Deep section, row, column and element nesting; animations; sliders; popups and hidden duplicates.",
                            "Chat, analytics, pixels, heatmaps, review widgets, calendars, maps and other embeds.",
                            "Header and footer tracking code, page-level custom code and scripts added by snapshots or templates.",
                            "Late consent changes, tag-manager sequencing, errors, redirects and slow third-party responses.",
                        ]}
                    />
                    <BlogText>
                        HighLevel&apos;s current website overview documents mobile editing, tracking code, custom CSS and
                        external JavaScript behavior. Use the builder&apos;s current controls and preview behavior as
                        part of the investigation. A platform feature can help, but only the retest proves what changed
                        on the route. The remedies for most of these causes are the same across builders, and we list
                        them in{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={sourceLinkClass}>how to speed up a website</Link>.
                    </BlogText>

                    <BlogHeader>In-platform fixes to try first</BlogHeader>
                    <BlogList
                        items={[
                            "Resize and compress media for its rendered slot; use modern formats where supported and preserve quality.",
                            "Remove unused widgets, duplicate mobile or desktop sections, animations and inherited template code.",
                            "Reduce font variants and verify loading behavior without changing the approved brand system blindly.",
                            "Load non-essential third parties after the appropriate consent and interaction point where functionally acceptable.",
                            "Replace or defer heavy embeds when an accessible link, thumbnail or user-triggered load meets the requirement.",
                            "Retest forms, calendars, attribution and consent after every performance change.",
                        ]}
                    />
                    <BlogText>
                        Do not disable functionality merely to improve a lab score. A fast page with a broken form,
                        inaccessible booking flow, missing consent control or inaccurate measurement has failed the
                        business requirement.
                    </BlogText>

                    <BlogHeader>Does speed affect GoHighLevel SEO or ads?</BlogHeader>
                    <BlogText>
                        Google says Core Web Vitals are used by ranking systems, while also making clear that good scores
                        do not guarantee top rankings and that relevance remains fundamental. Mobile-first indexing is
                        about the mobile version&apos;s content for indexing; it does not mean a mobile Lighthouse score
                        alone decides rank. Page experience is one part of a larger set of signals. We set out that
                        relationship in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={sourceLinkClass}>how site speed interacts with search</Link>,
                        and the other factors worth checking first in{" "}
                        <Link href="/blog/why-competitor-outranks-you" className={sourceLinkClass}>why a competitor outranks you</Link>.
                    </BlogText>
                    <BlogText>
                        A before-and-after speed change does not by itself prove a fixed conversion, lead, CPC or
                        revenue effect. To estimate business impact, define the funnel and compare stable periods while
                        accounting for traffic mix, campaigns, creative, offer, seasonality, form changes and other
                        releases. Present the result as measured first-party evidence with limitations, not a platform
                        law.
                    </BlogText>

                    <BlogHeader>When to keep HighLevel and replace the frontend</BlogHeader>
                    <BlogList
                        items={[
                            "The site still misses written performance, accessibility, design, content or search-output requirements after realistic fixes.",
                            "HighLevel remains valuable for contacts, workflows, calendars, pipelines or agency operations.",
                            "The organization accepts an integration layer, monitoring, vendor-change ownership and a tested recovery plan.",
                            "A comparable total-cost and risk model supports migration over continued optimization.",
                        ]}
                    />
                    <BlogText>
                        A hybrid site can submit approved data to HighLevel through supported APIs or webhooks and can
                        use supported calendar options. Every workflow dependency must be inventoried and tested. For
                        the detailed architecture, see the{" "}
                        <Link href="/blog/gohighlevel-keep-crm-replace-website" className="font-semibold text-cognac hover:underline">
                            guide to keeping HighLevel and replacing the website
                        </Link>.
                    </BlogText>
                    <BlogText>
                        Agencies weighing this at portfolio scale should read our comparison of{" "}
                        <Link href="/blog/best-website-builder-for-gohighlevel-agencies" className={sourceLinkClass}>website builders for HighLevel agencies</Link>,
                        and the offer side in{" "}
                        <Link href="/blog/for-agencies-offer-custom-web-development" className={sourceLinkClass}>adding custom web development to an agency offer</Link>.
                        Our <Link href="/services/gohighlevel" className={sourceLinkClass}>GoHighLevel service</Link> page describes
                        how we build and connect the hybrid frontend.
                    </BlogText>

                    <BlogHeader>Migration and acceptance controls</BlogHeader>
                    <BlogList
                        items={[
                            "Preserve the approved URL, metadata, canonical, content, internal-link, media and structured-data inventory.",
                            "Create and test page-level redirects for every approved URL change.",
                            "Test contact fields, duplicate rules, workflows, calendars, consent, analytics, errors, retries and notifications.",
                            "Run the agreed representative pages on mobile and desktop and preserve reports and release versions.",
                            "Keep DNS, redirect and deployment rollback steps with named owners.",
                        ]}
                    />
                    <BlogText>
                        PandaCodeGen&apos;s 90+ Lighthouse acceptance target applies only when signed terms identify the
                        representative pages, profiles, environment, three-run method, exclusions and remedy. It does
                        not promise rankings, traffic, leads, citations, advertising performance or revenue. For how a
                        move like this is scoped and budgeted, see the{" "}
                        <Link href="/blog/website-migration-cost-2026" className={sourceLinkClass}>website migration cost guide</Link>{" "}
                        and our <Link href="/pricing" className={sourceLinkClass}>published planning tiers</Link>. The redirect and
                        indexing controls are covered in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what happens to search visibility during a migration</Link>.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your GoHighLevel migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will benchmark representative routes, identify controllable work, test native fixes and
                            scope a hybrid frontend only when the evidence supports it.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
