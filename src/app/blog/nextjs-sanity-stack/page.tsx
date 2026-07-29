import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, FileText, Workflow } from "lucide-react";
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

const postId = "nextjs-sanity-stack";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Next.js and Sanity in 2026: Fit, Cost and Tradeoffs";
const description =
    "A current, source-led guide to Next.js with Sanity: rendering and content roles, editorial workflows, localization, pricing, security boundaries and when to use a simpler stack.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Next.js Sanity",
        "Next.js headless CMS",
        "Sanity CMS website",
        "Sanity pricing 2026",
        "Sanity vs WordPress",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-23",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/nextjs-sanity-stack")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Sanity and Next.js documentation", url: "https://www.sanity.io/docs/nextjs/introduction" },
    { name: "Sanity visual editing documentation", url: "https://www.sanity.io/docs/visual-editing" },
    { name: "Sanity localization documentation", url: "https://www.sanity.io/docs/studio/localization" },
    { name: "Sanity current pricing", url: "https://www.sanity.io/pricing" },
    { name: "Sanity technical limits", url: "https://www.sanity.io/docs/content-lake/technical-limits" },
    { name: "Next.js App Router documentation", url: "https://nextjs.org/docs/app" },
    { name: "Google Search: JavaScript SEO basics", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-07-23",
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
            articleSection: "Next.js and content management",
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function NextjsSanityStackPage() {
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
                            { label: "Next.js and Sanity", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Next.js and CMS architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Next.js and Sanity <span className="italic text-cognac">Fit, Cost and Tradeoffs</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Next.js builds the website your visitors see. Sanity is where your team writes and stores
                            the content. The two work well together for custom, content-heavy sites, but this is not the
                            right setup for every business. Pick it because your requirements call for it, not because
                            it is popular.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Assessed July 24, 2026 against current Sanity, Next.js and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="July 23, 2026" readTime="11 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The decision in one minute</h2>
                        <BlogList
                            items={[
                                "Use both when you need a custom-built site and a real editing workflow for your team. You are running two systems, so there should be a reason.",
                                "Before you pick a CMS, check: how content is structured, whether editors can preview changes, whether it handles other languages, who can edit what, how easily you can get your content out, what it costs, and who can support it.",
                                "Next.js can send finished HTML to browsers and crawlers. Whether the site is actually fast, crawlable, accessible and secure still comes down to how it is built.",
                                "If your site is small and rarely changes, you may not need a headless CMS at all.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: FileText, title: "Sanity", body: "Where your content lives, and where your team writes and edits it." },
                            { icon: Workflow, title: "Next.js", body: "The site itself: the pages, how they load, and how they connect to everything else." },
                            { icon: Database, title: "Operations", body: "The running side: keeping it fast, backed up and monitored, and who fixes it when it breaks." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What the integration currently provides</BlogHeader>
                    <BlogText>
                        Sanity&apos;s current Next.js documentation describes an official next-sanity toolkit for App
                        Router and Pages Router patterns. It covers server-side content queries, Next.js caching,
                        Draft Mode, live content, webhook validation, Portable Text and visual editing. The frontend and
                        content system remain separate products with separate configuration and failure modes.
                    </BlogText>
                    <BlogText>
                        Visual editing lets an editor click text on the page and land on the right field in Sanity
                        Studio, and see draft changes in a preview before publishing. You have to get several things
                        right for that to work: the project ID, the dataset, the tokens, which origins are allowed, the
                        preview URLs, and keeping staging separate from live. Give the draft credentials the least
                        access they need, and never expose them as public environment variables.
                    </BlogText>

                    <BlogHeader>Rendering does not inherit a performance score</BlogHeader>
                    <BlogText>
                        Next.js gives you server and client components, static and dynamic pages, caching and streaming.
                        Those are useful tools for getting crawlable output and staying inside a performance budget. They
                        do not make every page fast on their own. What still slows a page down: your queries, how you
                        handle caching, images, fonts, the JavaScript you ship to the browser, and any third-party
                        scripts your visitors have consented to.
                    </BlogText>
                    <InsightBox variant="warning" label="No framework outcome guarantee">
                        A Next.js and Sanity build does not guarantee 90-plus Lighthouse, rankings or AI citations.
                        When a 90-plus target is accepted, PandaCodeGen names representative pages, mobile and desktop
                        profiles and three recorded passing runs per page and profile in the signed terms.
                    </InsightBox>
                    <BlogText>
                        How those numbers are gathered, and how lab runs differ from field data, is covered in{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>.
                        Building the frontend to a budget rather than to a framework default is the work described on our{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering service</Link> page.
                    </BlogText>

                    <BlogHeader>Content modelling and editorial fit</BlogHeader>
                    <BlogList
                        items={[
                            "Model reusable business concepts such as services, locations, people, evidence and articles instead of treating every page as an unstructured canvas.",
                            "Prototype the real editor tasks, including creating, reviewing, previewing, scheduling, localizing and retiring content.",
                            "Define validation, references, slug ownership, image fields, portable rich text and required metadata in the schema.",
                            "Test whether editors can complete common tasks without developer help and without gaining unnecessary infrastructure access.",
                        ]}
                    />
                    <BlogText>
                        Structured content can improve consistency and reuse, but an overly abstract model can slow
                        editors. A page builder can be preferable when visual composition changes frequently. File-based
                        content can be preferable when developers own every update. Fit depends on the operating team,
                        not a CMS leaderboard.
                    </BlogText>

                    <BlogHeader>Localization is a model, not a checkbox</BlogHeader>
                    <BlogText>
                        Sanity documents field-level and document-level localization patterns and optional plugins.
                        Next.js can serve locale-specific routes, but the project must still define translation
                        relationships, fallbacks, slugs, hreflang, canonicals, sitemaps, editor permissions, preview and
                        publishing. Sanity does not automatically create a complete multilingual search implementation.
                    </BlogText>

                    <BlogHeader>Current Sanity pricing needs careful reading</BlogHeader>
                    <BlogText>
                        Sanity&apos;s July 24, 2026 pricing page lists Free at $0 for individuals experimenting or shipping
                        smaller projects, with up to 20 seats, two permission roles and two public-only datasets. It
                        lists Growth at $15 per seat per month with up to 50 seats, five roles, public or private
                        datasets and pay-as-you-go capacity. Enterprise is custom-priced.
                    </BlogText>
                    <BlogText>
                        The same pricing table publishes document, request, bandwidth, asset, webhook, role and feature
                        limits. Free is not accurately described as covering “most business websites.” Match dataset
                        privacy, editor roles, document volume, usage, preview, scheduling, security and support needs
                        to the current plan before estimating cost.
                    </BlogText>
                    <BlogText>
                        The CMS line is only part of the running bill. Our note on{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={sourceLinkClass}>what Next.js hosting actually costs</Link>{" "}
                        covers the deployment side, and the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>published planning tiers</Link>{" "}
                        show where build cost sits alongside it.
                    </BlogText>

                    <BlogHeader>Security and governance boundaries</BlogHeader>
                    <BlogList
                        items={[
                            "Use separate production and non-production datasets and credentials where the risk model requires it.",
                            "Keep write and draft-read tokens server-side and apply least privilege.",
                            "Validate webhook signatures, reject replays where applicable and monitor failed revalidation.",
                            "Review dataset visibility, roles, CORS origins, preview access and retained editor accounts.",
                            "Keep content exports, schema code, asset inventories and recovery instructions under the agreed ownership model.",
                        ]}
                    />
                    <BlogText>
                        That last point is the one worth settling in writing before the build starts. Our{" "}
                        <Link href="/blog/do-you-own-your-website" className={sourceLinkClass}>checklist on website and account ownership</Link>{" "}
                        lists the accounts and records a client should hold in their own name.
                    </BlogText>

                    <BlogHeader>Compare alternatives on equivalent requirements</BlogHeader>
                    <BlogText>
                        WordPress, Contentful, Payload, Storyblok, Sanity and file-based content have different strengths,
                        licensing, deployment and operating models. Do not state that Sanity is safer, cheaper, faster or
                        more flexible without a dated scope-normalized comparison. Evaluate the exact current plan and
                        implementation.
                    </BlogText>
                    <BlogList
                        items={[
                            "Content types, relationships, locales, media and search.",
                            "Roles, approval, preview, scheduling and audit history.",
                            "Frontend freedom, page composition and developer workflow.",
                            "API, webhook, migration, export and integration requirements.",
                            "Security, privacy, residency, uptime, support and recovery.",
                            "Three-year vendor, hosting, engineering and internal operating cost.",
                        ]}
                    />
                    <BlogText>
                        The WordPress side of that comparison is written up separately in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className={sourceLinkClass}>WordPress against Next.js</Link>{" "}
                        and in{" "}
                        <Link href="/blog/why-we-chose-nextjs-over-wordpress-2026" className={sourceLinkClass}>the reasoning behind our own stack choice</Link>.
                        If the current site is already on WordPress, our{" "}
                        <Link href="/services/wordpress-migration" className={sourceLinkClass}>WordPress migration service</Link>{" "}
                        page describes how the move is scoped.
                    </BlogText>

                    <BlogHeader>When a simpler stack is better</BlogHeader>
                    <BlogList
                        items={[
                            "The site is small, rarely changes and has no non-technical editing requirement.",
                            "The team needs a visual page-building workflow that the proposed Studio has not demonstrated.",
                            "The budget cannot support two systems, custom integration and ongoing engineering ownership.",
                            "A current managed platform already meets search, performance, integration, governance and exit requirements.",
                        ]}
                    />
                    <BlogText>
                        Where the choice is really a budget question, work through{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={sourceLinkClass}>what shapes the cost of a custom website</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className={sourceLinkClass}>what a rebuild involves</Link>{" "}
                        before committing to two operated systems.
                    </BlogText>

                    <BlogHeader>Acceptance and handover</BlogHeader>
                    <BlogList
                        items={[
                            "Approved content schema and editor-task test script.",
                            "Published, draft, preview, cache and revalidation behavior demonstrated.",
                            "Representative route metadata, rendered output, accessibility and performance checked.",
                            "Tokens, roles, datasets, CORS, webhooks and environment ownership documented.",
                            "Export, deployment, monitoring, rollback and support instructions handed over.",
                        ]}
                    />
                    <BlogText>
                        When the build replaces a site that already ranks, add the URL and redirect checks set out in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what a migration does to search visibility</Link>{" "}
                        to the same acceptance list. To scope a specific content model and locale set, use the{" "}
                        <Link href="/contact" className={sourceLinkClass}>contact form</Link>.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map your content, editor tasks, locales, integrations and ownership needs before
                            recommending Sanity or a simpler option. The proposal records current vendor costs and
                            measurable acceptance.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
