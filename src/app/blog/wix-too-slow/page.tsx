import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Activity, Gauge, Layers3, Wrench } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "wix-too-slow";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Why Is My Wix Site So Slow? A 2026 Measurement and Fix Guide";
const description =
    "Diagnose a slow Wix site with real-user and repeatable lab evidence, fix media, fonts, apps, scripts, layout and data work, then decide whether migration is justified.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "why is my Wix site slow",
        "Wix site speed",
        "speed up Wix website",
        "Wix Core Web Vitals",
        "Wix performance optimization",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-10",
        modifiedTime: "2026-08-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wix-too-slow")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Wix Core Web Vitals", url: "https://support.wix.com/en/article/site-performance-about-core-web-vitals" },
    { name: "Wix Site Speed dashboard", url: "https://support.wix.com/en/article/understanding-your-site-speed-dashboard" },
    { name: "Wix performance guidance", url: "https://support.wix.com/en/site-performance" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/wix-too-slow"),
            description,
            datePublished: "2026-04-10",
            dateModified: "2026-08-06",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Wix", "Website migration", "Content management systems", "Technical SEO", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Wix performance",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Wix", sameAs: ["https://en.wikipedia.org/wiki/Wix.com"] },
                { "@type": "Thing", name: "Website builder", sameAs: ["https://en.wikipedia.org/wiki/Website_builder"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 1563,
            timeRequired: "PT8M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wix-too-slow#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Slow Wix site", item: "https://www.pandacodegen.com/blog/wix-too-slow" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wix-too-slow#webpage",
            url: "https://www.pandacodegen.com/blog/wix-too-slow",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/wix-too-slow#breadcrumb" },
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
    ],
};

const inlineLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WixTooSlowPage() {
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
                            { label: "Slow Wix site", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Wix performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Why Is My Wix Site So Slow? <span className="italic text-cognac">Measure Before Migrating</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Wix speed varies page by page. It depends on your content, who is visiting, which apps you run, what scripts load and how the page is designed. Use the
                            property&apos;s real-user and lab evidence to identify the slow layer before paying for a fix.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current Wix and Google documentation on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 10, 2026" readTime="5 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                <>{"Check Wix's Real Visitor Experience and page-level data before relying on one "}<Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>{" run."}</>,
                                "Test representative homepage, content, dynamic, product and conversion routes separately.",
                                "Look at the images and video, the fonts, animations, apps, third-party code, the layout, and anything loaded on the fly.",
                                "Migrate only when verified requirements remain blocked after realistic Wix fixes.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Activity, title: "Field", body: "What eligible real visitors experienced over time." },
                            { icon: Gauge, title: "Lab", body: "Repeatable diagnosis under recorded conditions." },
                            { icon: Layers3, title: "Route", body: "Template, content, apps and page state." },
                            { icon: Wrench, title: "Remedy", body: "The smallest change that addresses the evidence." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="editor-or-site">First: is the site slow, or is the editor slow?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            These are different problems with different fixes, and most advice on this question blends
                            them. <BlogHighlight>Editor lag affects you. Site slowness affects your visitors.</BlogHighlight>{" "}
                            A laggy Wix Editor or Wix Studio while you are building changes nothing about what a
                            customer experiences, because visitors never load the editor — they load the published
                            site.
                        </BlogText>
                    </div>
                    <BlogText>
                        Separate them in about two minutes before you change anything:
                    </BlogText>
                    <BlogList
                        items={[
                            "Open your published URL in a private or incognito window, signed out of Wix, on a different device or network. That is what a visitor gets, with no editor, no session and no cache of yours.",
                            "If the published page loads acceptably and only the editor drags, it is an editing-environment problem: browser memory, open tabs, extensions, or a large page open in the builder. Nothing your customers see is affected, and nothing on the rest of this page will fix it.",
                            "If the published page is slow too, it is a site problem, and the measurement section below is where to start.",
                            "Check both on mobile as well as desktop. Editor lag is desktop-only by definition, so a page that is slow on a phone is always a site problem.",
                        ]}
                    />
                    <BlogText>
                        This matters because the two get answered with the same advice and only one of them is about
                        your business. Closing browser tabs and disabling extensions is real advice for a laggy editor
                        and does nothing for a slow site. The rest of this page is about the published site — the one
                        that costs you customers.
                    </BlogText>

                    <BlogHeader id="is-it-slow">How do you know whether the Wix site is slow?</BlogHeader>
                    <BlogText>
                        Wix&apos;s current Site Speed dashboard separates Real Visitor Experience from a Google
                        PageSpeed simulation. Its real-user section uses Wix Analytics data and can break metrics down
                        by page; the simulation is a Lighthouse estimate. PageSpeed Insights can also show eligible
                        CrUX field data and a Lighthouse lab result. These sources answer different questions.
                    </BlogText>
                    <BlogList
                        items={[
                            "Note the URL, the template, the device, the connection, where you tested from, whether the cache was warm, what you consented to, and what state the page was in.",
                            "Check mobile and desktop separately.",
                            "Use field Core Web Vitals where enough real-user data exists.",
                            "Run at least three comparable lab tests for diagnosis instead of choosing the best result.",
                            "Save the report date, tool version and release state.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why there is no platform average here">
                        We do not publish a single average speed figure for Wix sites. Any such number depends entirely
                        on which sites were sampled, their templates, apps, media weight and traffic, and a figure
                        produced without a stated sample and method is not one you should plan around. Measure your own
                        site with field data from the Chrome UX Report and a controlled lab run, and compare it against
                        itself over time rather than against a platform-wide claim.
                    </InsightBox>
                    <BlogText>
                        If the difference between field and lab evidence is new to you,{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers what each metric records, and{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className={inlineLinkClass}>why a website loads slowly</Link>{" "}
                        walks the same diagnosis without assuming a platform.
                    </BlogText>

                    <BlogHeader id="metrics">What should you measure?</BlogHeader>
                    <BlogText>
                        Google&apos;s field Core Web Vitals are LCP, INP and CLS, assessed at the 75th percentile.
                        Lighthouse adds lab diagnostics and a performance score. Also inspect server and network timing,
                        request chains, JavaScript main-thread work, images, fonts, layout shifts and interaction traces.
                        No single score establishes the business cause or migration requirement.
                    </BlogText>

                    <BlogHeader id="causes">Eight common Wix performance contributors</BlogHeader>
                    <BlogText>
                        These are hypotheses until a trace or a controlled change supports them. A visible Wix script is not automatically waste, and an app count is not a performance diagnosis. Work down the list against your own worst route and let the waterfall decide which of the eight is actually costing you time.
                    </BlogText>
                    <BlogList
                        items={[
                            "Large hero images, galleries, video and media loaded before they are needed.",
                            "Custom fonts, font variants and animated text delaying the largest visible element.",
                            "Apps and widgets adding code, requests, rendering or third-party dependencies.",
                            "Marketing, chat, analytics and custom scripts competing for main-thread time.",
                            "Animations, effects and complex layouts increasing rendering and visual instability.",
                            "Dense pages and a large DOM created by repeated elements or unnecessary sections.",
                            "CMS queries, repeaters, filters and dynamic data loading more work than the route needs.",
                            "Platform-controlled behavior that the site owner cannot change directly.",
                        ]}
                    />
                    <BlogText>
                        These are hypotheses until a trace or controlled change supports them. A visible Wix script is
                        not automatically waste, and an app count is not a performance diagnosis.
                    </BlogText>

                    <BlogHeader id="apps">The app pattern worth checking first</BlogHeader>
                    <BlogText>
                        The finding worth ruling out first on a slow Wix site is not one heavy page. It is a set of apps that
                        each load on <em>every</em> page, whether or not the feature is visible there. A chat widget that
                        nobody opens still ships its JavaScript on your product pages. A booking app loads scheduling code
                        on your About page. Individually each is small; stacked, they set a floor you cannot optimize below while they remain installed.
                    </BlogText>
                    <BlogList
                        items={[
                            "Live chat widgets: check whether yours loads site-wide or only where it is used. A chat launcher that renders on every page ships its JavaScript to readers who never open it.",
                            "Pop-up and email-capture apps: these often need to load early to decide whether to display, which can put them on the critical path. Check when yours executes.",
                            "Social feed widgets: call an external API on pages that do not show a feed.",
                            "Third-party widget suites: each embedded widget is typically its own external script request, so count them rather than counting the suite as one item.",
                            "Bookings and Events: scheduling code often loads across the site rather than only on the booking route.",
                        ]}
                    />
                    <InsightBox variant="info" label="Measure it on your own site in five minutes">
                        Open a page that does <em>not</em> use the feature, such as a blog post or an About page. Open the
                        browser Network panel, filter to JS, and hard-reload. Sort by size and look for scripts belonging
                        to apps that page has no reason to load. That list, ranked by transfer size, is your removal
                        order. We deliberately do not publish per-app kilobyte figures or prices here: both change with
                        app versions and plans, and the number that matters is the one measured on your own site today.
                    </InsightBox>

                    <BlogHeader id="fixes">What can you fix inside Wix?</BlogHeader>
                    <BlogText>
                        Most of what slows a Wix page is repairable without leaving Wix: media sizing, font variants, unused apps and widgets, heavy sections and effects, and how much sits above the fold. The discipline that makes it work is one controlled change at a time, retested on the same route, with field data given its collection period before you judge the result. Escalate to Wix support only for the parts the platform controls.
                    </BlogText>
                    <BlogList
                        items={[
                            "Use appropriately sized image formats and remove unnecessary above-the-fold media.",
                            "Reduce font families and weights and avoid animating the LCP candidate.",
                            "Remove apps, widgets and custom scripts that do not provide measured value.",
                            "Simplify heavy sections, galleries, effects and repeated layout elements.",
                            "Place non-critical content lower in the journey when that still serves the user.",
                            "Review CMS query, collection, repeater and pagination behavior.",
                            "Retest one controlled change at a time and monitor field data over its collection period.",
                            "Ask Wix support to investigate when documented fixes do not address platform-controlled work.",
                        ]}
                    />
                    <BlogText>
                        The order in which to attempt those changes, and how to verify each one, is set out in{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>our method for speeding up a website</Link>.
                        The same pattern of platform-controlled work appears in{" "}
                        <Link href="/blog/squarespace-too-slow" className={inlineLinkClass}>the equivalent Squarespace diagnosis</Link>{" "}
                        if you are comparing builders.
                    </BlogText>

                    <BlogHeader id="seo">Does a slow Wix site lose rankings?</BlogHeader>
                    <BlogText>
                        Google uses Core Web Vitals in broader ranking systems but says good scores do not guarantee top
                        rankings and relevance remains fundamental. A Wix or Lighthouse score is not a ranking cutoff.
                        Compare Search Console queries and landing pages, content, links, technical health, demand and
                        releases before attributing a traffic change to speed.
                    </BlogText>
                    <BlogText>
                        We look at that relationship in more detail in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={inlineLinkClass}>how site speed relates to search performance</Link>,
                        and at the other explanations worth ruling out in{" "}
                        <Link href="/blog/why-competitor-outranks-you" className={inlineLinkClass}>why a competitor outranks you</Link>.
                    </BlogText>

                    <BlogHeader id="business-impact">How do you measure revenue or lead impact?</BlogHeader>
                    <BlogText>
                        Join route-level performance with sessions, device, source, page state and funnel outcomes.
                        Define the intervention, primary metric, guardrails and observation window before release.
                        Public per-second loss statistics and a before-and-after Lighthouse score do not prove
                        incremental revenue for this property.
                    </BlogText>

                    <BlogHeader id="platform-limits">What if the slow work is platform-controlled?</BlogHeader>
                    <BlogText>
                        Wix notes that some third-party test recommendations may be outside the site owner&apos;s control.
                        Document the exact blocked requirement, affected route, evidence and support response. Then
                        compare accepting the limitation, changing the experience, using another Wix capability or
                        migrating. Platform control is a valid decision input, not proof that migration is the only fix.
                        How much of the stack you can change at all is the subject of{" "}
                        <Link href="/blog/do-you-own-your-website" className={inlineLinkClass}>do you actually own your website</Link>.
                    </BlogText>

                    <BlogHeader id="migrate">When should you consider migration?</BlogHeader>
                    <BlogText>
                        Migration becomes the right answer only after the realistic fixes are done and the route still fails a requirement you wrote down. Five gates have to clear together, and the third and fourth are commercial rather than technical: the operating-cost case has to support replacement, and someone has to own security, releases, monitoring and maintenance afterwards.
                    </BlogText>
                    <BlogList
                        items={[
                            "Representative routes still fail agreed performance requirements after realistic fixes.",
                            "Required rendering, integration, content or workflow control is unavailable.",
                            "The operating-cost and risk case supports replacing the current system.",
                            "The target team can own security, releases, monitoring and maintenance.",
                            "SEO, data, feature, cutover and rollback requirements can be written and tested.",
                        ]}
                    />
                    <BlogText>
                        Two companion pieces cover the rest of that decision:{" "}
                        <Link href="/blog/wix-vs-custom-website" className={inlineLinkClass}>Wix compared with a custom website</Link>{" "}
                        for the requirements side, and{" "}
                        <Link href="/blog/wix-migration-cost" className={inlineLinkClass}>how a Wix migration is scoped and priced</Link>{" "}
                        for what the move involves.
                    </BlogText>

                    <BlogHeader id="not-migrate">When should you stay on Wix?</BlogHeader>
                    <BlogText>
                        Stay when a measured media, font, app, script or layout fix already meets the requirement, and when the editor and business apps fit how the team works. Two cases in particular argue against moving: a case resting only on an unrepeatable lab score or a generic platform claim, and content, brand or ownership that is not ready for a rebuild.
                    </BlogText>
                    <BlogList
                        items={[
                            "A measured media, font, app, script or layout fix meets the requirement.",
                            "The current editor and business apps fit the team well.",
                            "The custom target would add more operating burden than value.",
                            "The business case depends only on an unrepeatable lab score or generic platform claim.",
                            "Content, brand, requirements or ownership decisions are not ready for migration.",
                        ]}
                    />

                    <BlogHeader id="migration-process">What does a controlled Wix migration include?</BlogHeader>
                    <BlogText>
                        Six phases, and the first one decides the price of the other five. Inventory everything the site actually contains, validate what Wix will and will not export per data domain, then design the target, the URL dispositions and the acceptance criteria before anyone writes code. Cutover monitoring and rollback triggers belong in the scope, not in the launch-day conversation.
                    </BlogText>
                    <BlogList
                        items={[
                            "Route, template, content, CMS, contact, product, order, app and integration inventory.",
                            "Current Wix export and API validation for every data domain.",
                            "Target architecture, editorial workflow and provider-account ownership.",
                            "URL disposition, rendered-output parity, analytics and search safeguards.",
                            "Accessibility, privacy, security and performance acceptance.",
                            "Cutover monitoring, rollback triggers, handoff and support.",
                        ]}
                    />
                    <BlogText>
                        The search-continuity part of that list is covered in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to search visibility</Link>,
                        and the delivery side is described on our{" "}
                        <Link href="/services/wix" className={inlineLinkClass}>Wix migration service page</Link>.
                    </BlogText>

                    <BlogHeader id="offer">PandaCodeGen offer and terms</BlogHeader>
                    <BlogText>
                        We start with a free fit audit and recommend repair before migration when repair satisfies the
                        requirements. PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to
                        $10,000 Scale. A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund
                        is tied to failure to deliver the signed scope. Where the accepted terms include it, Starter carries 15 business days of launch defect support and Growth and Scale carry 30. The full terms sit on our{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>, and{" "}
                        <Link href="/work" className={inlineLinkClass}>our project work</Link>{" "}
                        shows what those tiers produce.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Find the slow layer before choosing the fix</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare Wix optimization and migration against the same routes, conditions,
                            acceptance evidence and operating requirements.
                        </p>
                        <QuoteModalButton cta="wix_speed_fit_audit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
