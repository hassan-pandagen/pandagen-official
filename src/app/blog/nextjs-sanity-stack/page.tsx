import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, FileText, Workflow } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { finding } from "@/data/research-facts";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const PlatformComparisonAnimation = dynamicImport(() => import("@/components/blog/PlatformComparisonAnimation"));

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
        modifiedTime: "2026-08-07",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/nextjs-sanity-stack")],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
};

const sources = [
    { name: "Sanity and Next.js documentation", url: "https://www.sanity.io/docs/nextjs/introduction" },
    { name: "Sanity visual editing documentation", url: "https://www.sanity.io/docs/visual-editing" },
    { name: "Sanity localization documentation", url: "https://www.sanity.io/docs/studio/localization" },
    { name: "Sanity current pricing", url: "https://www.sanity.io/pricing" },
    { name: "Sanity technical limits", url: "https://www.sanity.io/docs/content-lake/technical-limits" },
    { name: "Next.js App Router documentation", url: "https://nextjs.org/docs/app" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/nextjs-sanity-stack"),
            datePublished: "2026-07-23",
            dateModified: "2026-08-07",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Next.js", "React", "Rendering strategies", "Web performance"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Next.js and content management",
            inLanguage: "en-US",
            wordCount: 3247,
            timeRequired: "PT16M",
            about: [
                { "@type": "Thing", "name": "Next.js", "sameAs": ["https://nextjs.org/", "https://en.wikipedia.org/wiki/Next.js"] },
                { "@type": "Thing", "name": "Sanity", "sameAs": ["https://www.sanity.io/"] },
                { "@type": "Thing", "name": "Headless CMS", "sameAs": ["https://en.wikipedia.org/wiki/Headless_content_management_system"] },
                { "@type": "Thing", "name": "Content Management", "sameAs": ["https://en.wikipedia.org/wiki/Content_management_system"] },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/nextjs-sanity-stack#webpage",
            url: "https://www.pandacodegen.com/blog/nextjs-sanity-stack",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/nextjs-sanity-stack#breadcrumb" },
            inLanguage: "en-US",
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
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Next.js and Sanity", item: canonicalUrl },
            ],
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
                    <Breadcrumb items={postCrumbs(postId, "Next.js and Sanity")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Next.js and CMS architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Next.js and Sanity: <span className="italic text-cognac">Fit, Cost and Tradeoffs</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Next.js builds the website your visitors see. Sanity is where your team writes and stores
                            the content. The two work well together for custom, content-heavy sites, but this is not the
                            right setup for every business. Pick it because your requirements call for it, not because
                            it is popular.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Assessed July 24, 2026 against current Sanity, Next.js and Google documentation. Pricing rechecked July 31, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="July 23, 2026" readTime="11 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

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

                    <div className="my-10">
                        <PlatformComparisonAnimation />
                    </div>

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
                        A Next.js and Sanity build does not guarantee 90-plus <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>, rankings or AI citations.
                        When a 90-plus target is accepted, PandaCodeGen names representative pages, mobile and desktop
                        profiles and three recorded passing runs per page and profile in the signed terms.
                    </InsightBox>
                    <InsightBox variant="info" label="What 25 document types looks like in practice">
                        Panda Patches runs on this stack. Its Sanity Studio carries 25 registered document types,
                        covering products, blog posts, FAQs, location pages, patch styles and company facts, among
                        others. That number is the honest answer to &ldquo;how much modeling is this?&rdquo; A brochure
                        site does not need 25. A catalog with categories, guides and reusable company facts gets there
                        faster than most people expect, and every one of those types is a decision someone has to make
                        before an editor can touch it. Disclosure: Panda Patches is owned and operated by <Link href="/about/imran" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Imran</Link> Raza
                        Ladhani, a PandaCodeGen co-founder. PandaCodeGen built and maintains its platform and holds no
                        ownership stake, so treat this as operating experience rather than an independent client
                        reference.
                    </InsightBox>
                    <BlogText>
                        How those numbers are gathered, and how lab runs differ from field data, is covered in{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>.
                        Building the frontend to a budget rather than to a framework default is the work described on our{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering service</Link> page.
                    </BlogText>

                    <BlogHeader id="moving-away">Why do people say they are moving away from Next.js?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Because it asks you to hold more decisions than a framework used to, and for some teams that
                            trade is a bad one. The complaints that recur are consistent and worth taking seriously:
                            caching behavior that changes between major versions and has to be relearned, a rendering
                            model with enough options that two developers on one project can disagree about which to
                            use, and a gravitational pull toward one hosting provider that is convenient until you want
                            to leave. None of those makes it a bad choice. They make it a choice with an ongoing
                            attention cost, and a team that wants a framework to be settled rather than evolving will
                            feel that cost every upgrade.
                        </BlogText>
                    </div>
                    <BlogText>
                        Where that lands for this stack specifically: if your site is content-led and someone will own
                        the upgrades, the flexibility is the reason you are here and the cost is fair. If nobody will
                        own them, you are buying a system that decays quietly, and a simpler setup will serve you longer
                        with less. That is the same judgement the section on when a simpler stack is better makes, and
                        it is worth making before the build rather than at the first major version bump.
                    </BlogText>

                    <BlogHeader id="live-example">A build you can open and check</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            <a href="https://www.ladies4jesus.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Ladies 4 Jesus</a>{" "}
                            went live on this stack and is public, so nothing below has to be taken on trust. It runs
                            Next.js 16.2.7 on the App Router with React 19.2 and Tailwind v4, with Sanity v6 as the CMS
                            and Vercel for hosting. The content model is nine schemas: two singletons for site settings
                            and one page, and seven document types for devotionals, testimonies, questions, generic
                            pages, comments, contact messages and content reports.
                        </BlogText>
                    </div>
                    <BlogText>
                        Two decisions in it are the ones this article has been describing, and they are worth seeing in
                        a real project. <strong>The Studio is embedded in the application at <code>/studio</code> rather
                        than deployed separately</strong>, which means schema changes ship with an ordinary git push and
                        there is no second deploy step to forget. And <strong>content edits reach the live site in about
                        sixty seconds through revalidation, with no code deploy at all</strong>. A non-technical
                        administrator runs the site day to day without a developer in the loop. That is the whole
                        argument for this pairing, and it either works in practice or it does not.
                    </BlogText>
                    <BlogText>
                        There are two live records of it working, and they are worth reading against each other because
                        their disclosure status differs.{" "}
                        <Link href="/work/ladies-4-jesus" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Ladies 4 Jesus</Link>{" "}
                        is an independent client: a migration onto this exact pairing where the deciding requirement was
                        that the owner run everything herself, and where nine content types and five moderated
                        submission paths are managed from the embedded Studio without a developer.{" "}
                        <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Panda Patches</Link>{" "}
                        is the same stack under commerce load, and it is founder-affiliated rather than independent.
                        That makes it operating experience, labelled as such. <strong>Read the independent record first if what you
                        are assessing is whether this holds for someone who is not us.</strong>
                    </BlogText>
                    <BlogText>
                        The moderation model is worth noting because it is a content-modeling decision rather than a
                        feature. Five of the seven document types are user-submitted (testimonies, questions,
                        comments, messages and reports) and each carries a status field, so nothing a visitor
                        submits is publicly readable until it is approved in the Studio. That is enforced in the queries
                        rather than by a plugin, which is the difference between a workflow and a setting.
                    </BlogText>
                    <InsightBox variant="info" label="What we measured, and what it does not prove">
                        Loaded on August 2, 2026 in headless Chromium 150, one unthrottled run from a single location:
                        time to first byte (TTFB) 81 ms, 65 requests, 629 KB transferred in total. <strong>Of that, 273 KB is
                        CSS and fonts and 216 KB is JavaScript</strong>, which is the honest weak spot. The
                        typography choices on a design-led site cost real bytes, and we are not going to present that as
                        a performance win. One lab run from one machine is not what visitors experience, and this figure
                        is a starting point for the site&apos;s own field data rather than a score.
                    </InsightBox>
                    <BlogText>
                        Two things it does not yet demonstrate, stated so the example is not read as more than it is.
                        The site launched recently, so there is no traffic, ranking or conversion history to report and
                        we will not invent one. And its structured data is currently Organization and WebSite only, so
                        the article-level schema this site argues for elsewhere is not yet on it. Both are checkable
                        today by anyone who opens the page source.
                    </BlogText>

                    <BlogHeader>Content modeling and editorial fit</BlogHeader>
                    <BlogText>
                        Model reusable business concepts rather than treating every page as an unstructured canvas, and put the rules in the schema itself. Structured content improves consistency and reuse, but an overly abstract model slows editors down, and a page builder can be the better answer when visual composition changes frequently. Fit depends on the operating team, not on a CMS leaderboard.
                    </BlogText>
                    <BlogList
                        items={[
                            "Model reusable business concepts such as services, locations, people, evidence and articles instead of treating every page as an unstructured canvas.",
                            "Prototype the jobs your editors really do: writing a piece, getting it reviewed, previewing it, scheduling it, translating it, and taking it down.",
                            "Put the rules in the schema itself: what has to be filled in, how documents reference each other, who owns the slug, how images work, how rich text is stored, and which metadata is mandatory.",
                            "Check an editor can do the everyday things without calling a developer, and without being handed access they do not need.",
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
                        Next.js will happily serve a route per locale. The project still has to decide which document is
                        the translation of which, what happens when one is missing, how slugs work per language, the
                        hreflang and canonical tags, the sitemaps, who is allowed to edit which language, and how
                        preview and publishing behave for each. Sanity does not automatically create a complete multilingual search implementation.
                    </BlogText>

                    <BlogHeader>Current Sanity pricing needs careful reading</BlogHeader>
                    <BlogText>
                        Sanity&apos;s pricing page, rechecked on July 31, 2026, lists Free at $0 for individuals experimenting or shipping
                        smaller projects, with up to 20 seats, two permission roles and two public-only datasets. It
                        lists Growth at $15 per seat per month with up to 50 seats and five roles. Growth does not
                        raise the dataset count: it is still two, but they can be private rather than public only.
                        Enterprise is custom-priced.
                    </BlogText>
                    <BlogText>
                        The same table sets limits on how many documents you can hold, how many requests and how much
                        bandwidth you get, how many assets and webhooks, how many roles, and which features are
                        included. Free is not accurately described as covering “most business websites.” Match dataset
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
                    <BlogText>
                        Two systems means two credential surfaces, and the one that leaks is usually the CMS token rather than the site. Keep write and draft-read tokens server-side under least privilege, verify that a webhook genuinely came from Sanity, and watch for revalidation that failed silently. The last item is the one to settle in writing before the build starts, because it is about who holds the exports and the recovery steps.
                    </BlogText>
                    <BlogList
                        items={[
                            "Use separate production and non-production datasets and credentials where the risk model requires it.",
                            "Keep write and draft-read tokens server-side and apply least privilege.",
                            "Check that a webhook really came from Sanity, make sure the same one cannot be replayed against you, and watch for revalidation that quietly failed.",
                            "Go through who can see which dataset, who holds which role, which origins are allowed, who can reach preview, and which editor accounts are still active long after someone left.",
                            "Keep the content exports, the schema code, a list of your assets and written recovery steps under whatever ownership you agreed.",
                        ]}
                    />
                    <BlogText>
                        That last point is the one worth settling in writing before the build starts. Our{" "}
                        <Link href="/blog/do-you-own-your-website" className={sourceLinkClass}>checklist on website and account ownership</Link>{" "}
                        lists the accounts and records a client should hold in their own name.
                    </BlogText>

                    <BlogHeader>How widely used is this stack, actually</BlogHeader>
                    <BlogText>
                        Worth establishing before the comparison sections, because the two halves of this stack are not
                        in the same position and most writing about it treats them as one thing.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>{finding("nextjs-adoption-2026").statement}.</BlogHighlight> That is a mainstream
                        framework by any reading. The CMS beside it is not:{" "}
                        {finding("sanity-adoption-2026").statement}. W3Techs does not publish a figure below that
                        threshold, so there is no trend to quote either.
                    </BlogText>
                    <BlogText>
                        We are stating this plainly because we build on it and it would be easy not to. Anyone telling
                        you this stack is surging is describing a feeling rather than a measurement, and{" "}
                        {finding("sanity-adoption-2026").limitation.charAt(0).toLowerCase() +
                            finding("sanity-adoption-2026").limitation.slice(1)}
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>What follows from it is a hiring and continuity question, not a quality one.</BlogHighlight>{" "}
                        A niche CMS means a smaller pool of people who have used it, and a slower answer when you search
                        for a problem. That is a real cost and it is separate from whether the software is good. Weigh it
                        against the thing the next section is about, which is whether the editing experience actually
                        works for the person who has to use it every week.
                    </BlogText>
                    <BlogText>
                        Both figures were read from W3Techs on {finding("sanity-adoption-2026").verifiedAt}.{" "}
                        {finding("nextjs-adoption-2026").limitation}
                    </BlogText>

                    <BlogHeader>Compare alternatives on equivalent requirements</BlogHeader>
                    <BlogText>
                        WordPress, Contentful, Payload, Storyblok, Sanity and file-based content have different strengths,
                        licensing, deployment and operating models. If anyone tells you Sanity is safer, cheaper, faster or more flexible, ask what they compared it
                        against, on what date, and whether both sides covered the same scope. Judge the plan you would
                        actually be on and the way it would actually be built.
                    </BlogText>
                    <BlogList
                        items={[
                            "How content is structured, how pieces relate, which languages, the media, and search.",
                            "Who can do what, how work gets approved, preview, scheduling, and whether you can see who changed what.",
                            "Frontend freedom, page composition and developer workflow.",
                            "The API, webhooks, moving your content in, getting it out, and everything it has to talk to.",
                            "Security, privacy, where the data physically sits, uptime, support, and what happens when you need to recover.",
                            "What three years costs you in vendor fees, hosting, engineering time and your own team's hours.",
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

                    <BlogHeader>Two production sites we have shipped on this stack</BlogHeader>
                    <BlogText>
                        Everything above is checkable against Sanity&apos;s and Vercel&apos;s own documentation, which
                        is deliberate. This section is the part that is not: what actually happened when we built on
                        it. Both projects have a published record, and one of them is founder-affiliated, which is
                        stated here rather than left for you to work out.
                    </BlogText>

                    <BlogHeader>Ladies 4 Jesus, an independent client</BlogHeader>
                    <BlogText>
                        A community site on Next.js 16 with Sanity, where every visitor submission is moderated before
                        it appears publicly. The Studio is embedded in the application at <code>/studio</code> rather
                        than hosted separately, so the owner edits content at the same domain she visits, and edits
                        reach the live site in about sixty seconds through revalidation with no code deploy.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>
                            The decision that mattered on this project was the CMS, not the framework.
                        </BlogHighlight>{" "}
                        Sanity was chosen because a non-technical owner had to run content, moderation, gallery and
                        settings without a developer, and she does. That is the requirement most stack comparisons
                        skip, because it cannot be established from a feature table.
                    </BlogText>
                    <BlogText>
                        One integration detail is worth taking if you are building something similar: video uploads go
                        to Vercel Blob rather than into the CMS, and a Sanity webhook fires on rejection or deletion to
                        remove the associated asset. Without that, rejected submissions accumulate in storage
                        indefinitely and nobody notices until the bill does. The full record is in the{" "}
                        <Link href="/work/ladies-4-jesus" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            Ladies 4 Jesus case study
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Panda Patches, founder-affiliated and labelled as such</BlogHeader>
                    <BlogText>
                        Panda Patches is owned and operated by a PandaCodeGen co-founder. We built and maintain its
                        platform but hold no ownership stake, so it is operating experience rather than independent
                        client proof, and we do not present it as the latter.
                    </BlogText>
                    <BlogText>
                        With that stated: it is a three-year-old WordPress store migrated to a headless Next.js, Sanity,
                        Supabase and Square stack, and no ranking losses were recorded in Search Console during the
                        monitored post-launch period. It is the reason we can say what Sanity is like as a commerce
                        CMS rather than as a marketing-site CMS, which are different jobs. Sanity holds the product
                        content; Supabase holds the data that has to be queried and written; Square holds checkout.
                        Trying to put all three in the CMS is the mistake that makes people say they moved away from
                        this stack. The record is in the{" "}
                        <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            Panda Patches project notes
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>What neither project establishes</BlogHighlight> is what your build will cost or
                        how fast it will be. Two sites is not a sample, the requirements were ours and our
                        clients&apos;, and nothing here is a benchmark. It is first-hand experience offered as
                        experience, which is worth more than a feature comparison and less than a measurement of your
                        own project.
                    </BlogText>

                    <BlogHeader>When a simpler stack is better</BlogHeader>
                    <BlogText>
                        If your site is small and rarely changes, you may not need a headless CMS at all. The deciding question is not capability but ownership: if nobody will own the two systems and the integration between them, you are buying something that decays quietly, and a simpler setup will serve you longer with less.
                    </BlogText>
                    <BlogList
                        items={[
                            "The site is small, rarely changes and has no non-technical editing requirement.",
                            "Your team needs to build pages visually, and nobody has shown you the Studio doing that.",
                            "The budget will not carry two systems, the work to connect them, and someone owning it afterwards.",
                            "The managed platform you already pay for meets your needs on search, speed, integrations, governance and getting your data out.",
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
                    <BlogText>
                        Acceptance is a demonstration, not a document. Someone has to show published, draft and preview working, show what caching and revalidation actually do, and walk one real example of each page type through metadata, rendered output, accessibility and performance checks. The handover half is what people forget: tokens, roles, datasets, allowed origins, webhooks, deploy, monitoring, rollback, and who to call.
                    </BlogText>
                    <BlogList
                        items={[
                            "Approved content schema and editor-task test script.",
                            "Someone shows you published, draft and preview working, and shows you what caching and revalidation actually do.",
                            "A real example of each page type checked for metadata, what actually renders, accessibility and speed.",
                            "Written down: the tokens, the roles, the datasets, the allowed origins, the webhooks, and who owns each environment.",
                            "Handed to you: how to export, how to deploy, what to monitor, how to roll back, and who to call.",
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
                            We map your content, what your editors actually have to do each week, the languages you need,
                            what it connects to and who should own what. Only then do we tell you whether Sanity is
                            right or whether something simpler is. The proposal carries the current vendor prices and
                            an acceptance test you can measure.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
