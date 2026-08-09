import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Bug, Gauge, ListChecks, Wrench } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "wordpress-plugins-destroy-speed";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Do WordPress Plugins Slow Your Site? A 2026 Audit Guide";
const description =
    "Audit WordPress plugins by measured frontend, server, database, background and third-party impact. Fix the responsible work instead of treating plugin count as a speed score.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "WordPress plugins slow site",
        "WordPress plugin performance",
        "audit WordPress plugins",
        "slow WordPress plugins",
        "WordPress plugin bloat",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-05",
        modifiedTime: "2026-08-07",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-plugins-destroy-speed")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress Site Health", url: "https://wordpress.org/documentation/article/site-health-screen/" },
    { name: "WordPress debugging", url: "https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/" },
    { name: "WordPress plugin dependencies", url: "https://developer.wordpress.org/plugins/wordpress-org/common-issues/#wordpress-plugin-dependencies" },
    { name: "WordPress performance resources", url: "https://make.wordpress.org/performance/handbook/" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/wordpress-plugins-destroy-speed"),
            description,
            datePublished: "2026-02-05",
            dateModified: "2026-08-07",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["WordPress", "Website migration", "Technical SEO", "Web performance", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "WordPress performance",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 2457,
            timeRequired: "PT12M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wordpress-plugins-destroy-speed#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "WordPress plugin performance", item: "https://www.pandacodegen.com/blog/wordpress-plugins-destroy-speed" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-plugins-destroy-speed#webpage",
            url: "https://www.pandacodegen.com/blog/wordpress-plugins-destroy-speed",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/wordpress-plugins-destroy-speed#breadcrumb" },
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

export default function WordPressPluginPerformancePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "WordPress plugin performance")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Do WordPress Plugins Slow Your Site? <span className="italic text-cognac">Measure the Work</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A plugin count is not a performance score. Find which component adds requests, JavaScript,
                            queries, remote calls, background jobs or cache bypasses on the affected journey.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current WordPress and Google guidance on July 24, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 5, 2026" readTime="6 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Some plugins add no visitor-facing work on a given route; others can affect nearly every request.",
                                "Performance depends on what executes, not only how many plugins are active.",
                                "Profile each journey on its own: a public visitor, a signed-in one, an editor, a search, the cart and checkout.",
                                "Remove or replace a plugin only after mapping its capability, data and dependencies.",
                                "You can optimize, consolidate, replace with something custom, or migrate. None of those stays fixed forever.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="Why there is no score for a plugin count">
                        You will not find an average score for sites above a given plugin count here, a fixed conversion
                        loss per second of delay, or a single remedy that settles performance for good. What a plugin
                        costs a visitor depends on which routes it runs on and what it executes there, so two sites with
                        identical plugin counts can behave nothing alike and a threshold number cannot be planned
                        against. Profile your own journeys, attribute the work to named components, then pick the remedy
                        the evidence supports.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Boxes, title: "Inventory", body: "Capability, data, owner, version and route reach." },
                            { icon: Gauge, title: "Measure", body: "Field, lab, server, database and scheduled work." },
                            { icon: Bug, title: "Isolate", body: "Controlled enable, disable or replacement tests." },
                            { icon: Wrench, title: "Remedy", body: "Configure, optimize, consolidate, replace or migrate." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>
                    <BlogText>
                        Plugins cost you more than speed. In April 2026, Patchstack published analyses of two supply-chain
                        compromises reaching WordPress sites through plugin update channels &mdash;{" "}
                        <a href="https://patchstack.com/articles/critical-supply-chain-compromise-in-smart-slider-3-pro-full-malware-analysis/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">one affecting a commercial slider plugin</a>{" "}
                        and{" "}
                        <a href="https://patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">one affecting a portfolio of more than twenty</a>.
                        Read those rather than this summary. Our{" "}
                        <Link href="/blog/wordpress-april-2026-evidence" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">dated review of the April 2026 supply-chain incidents</Link>{" "}
                        goes through what was actually documented, sources linked, including a case where the risk
                        arrived through a plugin&apos;s own update channel rather than through anything the site owner did.
                    </BlogText>

                    <BlogHeader id="count">Why plugin count misleads</BlogHeader>
                    <BlogText>
                        A small administrative plugin may add no frontend code. One page builder, search product,
                        commerce extension or personalization tool may add substantial work across many routes. A plugin
                        can also be fast on public pages but expensive in the editor, scheduled tasks or API requests.
                        Count is useful for inventory management, not proof of performance impact. Builder-specific
                        diagnostics sit in our guides to{" "}
                        <Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">slow Divi sites</Link>{" "}
                        and{" "}
                        <Link href="/blog/elementor-kills-seo" className="text-cognac hover:underline">Elementor pages and search performance</Link>.
                    </BlogText>

                    <BlogHeader id="inventory">Build a plugin inventory</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            You cannot decide anything about a plugin until you know what breaks without it, which is an inventory question rather than a performance one. Six fields answer it, and the last is the one most audits skip: what actually changes when the component is isolated. Fill this in before you measure, not after.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1020px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Field</th><th className="p-4">Question</th><th className="p-4">Why it matters</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Capability</td><td className="p-4">Which customer or staff task depends on it?</td><td className="p-4">Prevents deleting required behavior</td></tr>
                                <tr><td className="p-4 font-bold">Data</td><td className="p-4">What records, settings or files does it own?</td><td className="p-4">Defines backup, export and replacement work</td></tr>
                                <tr><td className="p-4 font-bold">Reach</td><td className="p-4">Which routes, roles, APIs or jobs execute it?</td><td className="p-4">Targets the correct measurement</td></tr>
                                <tr><td className="p-4 font-bold">Dependencies</td><td className="p-4">What requires it and what does it require?</td><td className="p-4">Avoids unsafe deactivation</td></tr>
                                <tr><td className="p-4 font-bold">Lifecycle</td><td className="p-4">Who maintains, licenses and supports it?</td><td className="p-4">Exposes update and ownership risk</td></tr>
                                <tr><td className="p-4 font-bold">Evidence</td><td className="p-4">What changes when it is isolated?</td><td className="p-4">Separates correlation from cause</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="baseline">Create a reproducible baseline</BlogHeader>
                    <BlogText>
                        Select representative templates and states. Record URL, device, network, test region, consent,
                        account state, cache state, data set and software versions. Use Chrome UX Report field data where
                        available for real-user experience and repeat controlled lab runs for diagnosis. Capture server
                        and database traces for the same actions. Our{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explainer</Link>{" "}
                        defines each metric and how field data is collected.
                    </BlogText>
                    <BlogList
                        items={[
                            "Home, landing, category, article and other high-traffic templates",
                            "Search, filtering, form submission and authenticated account journeys",
                            "Product, variation, add-to-cart, cart and checkout for commerce",
                            "Editor, media, order administration and reporting for staff",
                            "Scheduled jobs, queues, imports, feeds, backups and security scans",
                        ]}
                    />

                    <BlogHeader id="frontend">Frontend impact</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            What a plugin costs the browser is almost always the files it loads on routes where its feature never appears. Five categories account for most of it, and all five are visible in a request waterfall with no WordPress-specific tooling at all. Look at what arrived, then at how much of it the page actually ran.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "CSS and JavaScript loaded on every route instead of only where needed",
                            "Large libraries, duplicate dependencies and unused code",
                            "Third-party scripts, iframes, fonts, trackers and chat widgets",
                            "DOM growth, layout shifts, animations and long main-thread tasks",
                            "Images, video or generated markup added by a widget or builder",
                        ]}
                    />
                    <BlogText>
                        Use a request waterfall, JavaScript trace and code coverage to identify the actual files and work.
                        Do not attribute all page weight to every active plugin.
                    </BlogText>

                    <BlogHeader id="patterns">Patterns worth checking first</BlogHeader>
                    <BlogText>
                        These are behaviors to look for in your own trace, not a ranking of products. Any of them can
                        be present or absent depending on version, settings and theme.
                    </BlogText>
                    <BlogList
                        items={[
                            "Assets enqueued unconditionally: a plugin registers its stylesheet and script on every route rather than only where its feature appears. Load a page that uses none of its functionality and see whether its files are still requested.",
                            "Commerce assets on non-commerce routes: cart, checkout and storefront scripts loading on an About page because the store is active site-wide.",
                            "Page builder frameworks: the builder CSS and JavaScript, plus the libraries behind carousels, dialogs and scroll effects, requested on pages that contain none of those widgets.",
                            "Two plugins doing one job: two SEO plugins each writing their own titles, descriptions and canonical tags, or several form or share plugins running side by side.",
                            "Embeds and iframes: social feeds, review widgets, maps, chat and video that open third-party connections on every page load and fail slowly when the third party is down.",
                            "Maintenance work inside a visitor request: backups, scans, imports or feed fetches running on page load rather than on a real scheduler.",
                            "A caching plugin that is not actually caching: cookies, query parameters or session handling causing a bypass on most requests, so the cache reports hits you never receive.",
                        ]}
                    />
                    <BlogText>
                        <a href="https://wordpress.org/plugins/query-monitor/" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Query Monitor</a>{" "}
                        is the practical instrument for the server side of this, read August 3, 2026. It reports the database
                        queries fired during a single request with the component responsible for each, the hooks that
                        ran, HTTP API calls made during the request, and the scripts and styles enqueued.{" "}
                        <strong>The panel that answers the question directly is Queries → Queries by Component:</strong>{" "}
                        it attributes query count and query time to each plugin, theme or core component for the
                        request you just loaded, which turns &quot;something is slow&quot; into a named row you can act
                        on. Load a representative route with it enabled on staging, read that panel, and you have
                        attribution instead of suspicion. Pair it with the DevTools Coverage panel for the browser side, which shows
                        how much of each delivered stylesheet and script the page actually executed.
                    </BlogText>

                    <BlogHeader id="server">Server and database impact</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Server-side plugin cost shows up as time before the first byte, so it stays invisible in a browser waterfall and gets blamed on hosting. Six things produce most of it, and repeated queries against unindexed tables lead the list. Query Monitor attributes each one to the component that fired it.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Slow or repeated database queries and missing indexes",
                            "Large autoloaded settings and repeated option reads",
                            "Remote API calls inside a user request",
                            "Hooks that execute on unrelated routes or admin screens",
                            "Cache invalidation, session use and personalized responses",
                            "CPU, memory or worker saturation under realistic concurrency",
                        ]}
                    />

                    <BlogHeader id="background">Background and operational impact</BlogHeader>
                    <BlogText>
                        Scheduled actions, imports, image processing, feeds, email, backups and scans can compete for the
                        same CPU, memory and database even when a page trace looks clean. Inspect job duration, queues,
                        retries, locks and overlap. Schedule expensive work deliberately and alert on stalled or growing
                        queues. The wider order of work is set out in our{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">evidence-led methods for fixing a slow WordPress site</Link>.
                    </BlogText>

                    <BlogHeader id="isolate">How to isolate a plugin safely</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Isolation means running the same test twice, once with the component active and once without, on a copy of production rather than on production. The safety comes from the environment, not from being careful. Six steps keep the comparison valid and keep customer data out of it.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Use a current production-like copy with protected data and no public side effects.",
                            "Back up and document the starting version, configuration and test data.",
                            "Before you deactivate anything, map what depends on it and agree how you will prove the capability still works.",
                            "Run the same test with and without the component or suspected feature.",
                            "Repeat enough runs to distinguish a stable effect from test noise.",
                            "Check functional, visual, accessibility, analytics and data behavior after the change.",
                        ]}
                    />
                    <InsightBox variant="danger" label="Do not experiment on a live checkout">
                        Deactivating a plugin can change schema, scheduled work, payment, security, forms or customer
                        data. Use a controlled environment and a rollback plan. A performance gain is not acceptable if
                        the business journey becomes incorrect.
                    </InsightBox>

                    <BlogHeader id="scorecard">A keep, replace or remove scorecard</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Once Query Monitor has given you per-plugin server time, you can triage instead of guess.
                            These bands are a working convention rather than a published standard, and they are read off
                            your own numbers, so they say nothing about anybody&apos;s product in general.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">What you measured</th><th className="p-4">Verdict</th><th className="p-4">What to do</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Under ~50ms server time, actively used</td><td className="p-4">Keep</td><td className="p-4">It is earning its place. Leave it alone</td></tr>
                                <tr><td className="p-4 font-bold">~50 to 200ms, actively used</td><td className="p-4">Replace or scope</td><td className="p-4">Look for a lighter equivalent, or load it only on the routes that need it</td></tr>
                                <tr><td className="p-4 font-bold">Over ~200ms, or unused for 30 days</td><td className="p-4">Remove</td><td className="p-4">Deactivate, retest, and delete once nothing depends on it</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        <strong>One prioritization rule does most of the work:</strong> anything sitting in the remove
                        column on your homepage <em>and</em> your checkout at the same time is the highest-value removal
                        on the list, because those are the two routes where cost compounds fastest per visitor. Start
                        there rather than at the top of an alphabetical plugin list.
                    </BlogText>

                    <BlogHeader id="fix-order">The plugin performance fix hierarchy</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Work down this list in order, because each step costs less and risks less than the one below it, and the cheap steps resolve more cases than their cost suggests. Migration sits at the bottom for that reason rather than because it fails. Stop as soon as the measured constraint is gone.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Update supported software and fix errors or failed jobs.",
                            "Configure the component to disable unused modules and route-wide assets.",
                            "Load assets and expensive work only where required.",
                            "Optimize queries, remote calls, caching and background processing.",
                            "Consolidate overlapping capability when the replacement covers all required data and journeys.",
                            "Replace an unsuitable component with a measured alternative.",
                            "Custom-build only the differentiated capability that is worth owning.",
                            "Consider platform migration when the aggregate operating model remains a material constraint.",
                        ]}
                    />

                    <BlogHeader id="consolidate">Why consolidation often beats deleting one at a time</BlogHeader>
                    <BlogText>
                        Removing a rarely used plugin removes one feature. Collapsing several overlapping plugins into
                        one removes an entire framework: its stylesheet, its script, its options, its scheduled tasks
                        and its database tables in a single change. That is why a consolidation pass is normally the
                        higher-yield use of an afternoon, provided every capability and its data survives the move.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Overlap to look for</th><th className="p-4">Consolidated outcome</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4">Two SEO plugins active together</td><td className="p-4">One retained and configured, the other exported and fully removed</td></tr>
                                <tr><td className="p-4">Several form plugins from different eras</td><td className="p-4">One form plugin, with submissions and integrations migrated first</td></tr>
                                <tr><td className="p-4">Multiple share or social plugins</td><td className="p-4">Share links implemented once in the theme</td></tr>
                                <tr><td className="p-4">A slider plugin used on one page</td><td className="p-4">A CSS-only carousel or a static image, loaded only on that route</td></tr>
                                <tr><td className="p-4">A page builder used for one static page</td><td className="p-4">Core blocks, with the builder framework no longer requested there</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Migrate the data before you remove anything. Form entries, SEO metadata, <Link href="/blog/will-migrating-hurt-my-seo" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">redirect map</Link>s and
                        subscriber lists usually live inside the plugin that owns them, and deleting the plugin can take
                        them with it.
                    </BlogText>

                    <BlogHeader id="cache">Can a caching plugin fix plugin performance?</BlogHeader>
                    <BlogText>
                        Caching can reduce repeated origin work and improve delivery for cacheable responses. It cannot
                        automatically remove long browser tasks, repair third-party latency, correct a slow interaction
                        or serve user-specific pages from a shared cache without per-user keys. Verify cache keys, exclusions, hit rate and invalidation.
                        Test guest and signed-in journeys separately.
                    </BlogText>

                    <BlogHeader id="remove">When removing a plugin is justified</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Removal is justified when the capability is genuinely not needed, or when something else already covers it in full including the data it holds. Slowness alone is not a reason to delete, because configuration and route-scoping resolve many cases without losing a feature. Five conditions, and the last is a plan rather than a finding.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "The business no longer needs the capability.",
                            "The component is unsupported or incompatible and a safe replacement exists.",
                            "Controlled evidence shows material impact that configuration cannot resolve.",
                            "Another maintained component fully covers the required capability and data.",
                            "The deletion, data retention, rollback and replacement plan is approved.",
                        ]}
                    />

                    <BlogHeader id="custom">When a custom replacement is justified</BlogHeader>
                    <BlogText>
                        Custom code is appropriate when a narrow, stable, differentiated requirement is valuable enough
                        to own. Define its data model, permissions, tests, observability, update path and maintainer.
                        Replacing a supported plugin with undocumented custom code can increase lifecycle risk even if
                        it reduces frontend bytes. The ownership side of that choice is modeled in our{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline">three-year cost comparison of WordPress and custom code</Link>.
                    </BlogText>

                    <BlogHeader id="migrate">When migration enters the decision</BlogHeader>
                    <BlogText>
                        Consider a migration when measured plugin and platform constraints span multiple critical
                        journeys and cannot be reasonably repaired, and when a target architecture can replace every
                        required capability with acceptable data, editing, security and operating ownership. Migration
                        is not the only permanent fix and does not eliminate dependencies. Compare the two operating
                        models in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress and Next.js side by side</Link>, then
                        read the{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">step-by-step migration sequence</Link>{" "}
                        and the scope we work to on the{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service page</Link>.
                        Planning tiers are listed on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>.
                    </BlogText>

                    <BlogHeader id="business">Estimate business effect from first-party evidence</BlogHeader>
                    <BlogText>
                        Join route-level performance with the affected funnel, errors and support contacts. Compare
                        controlled interventions and account for campaign, content, price, stock, device and seasonality.
                        Do not use a universal conversion loss per second or a calculator that presents hypothetical
                        revenue as observed loss. The evidence and the limits of the speed-to-search relationship are
                        covered in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">how website speed affects SEO</Link>.
                    </BlogText>

                    <BlogHeader id="checklist">Plugin audit handoff</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Hand over the evidence rather than the verdict, so whoever picks this up can re-run the comparison instead of trusting it. An audit that survives one handover is worth more than a faster page nobody can reproduce. These six items are what make the work repeatable.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Versioned plugin, capability, data and dependency inventory",
                            "Representative routes and recorded test conditions",
                            "Field, lab, server, database and job evidence",
                            "Controlled isolation results and functional checks",
                            "Keep, configure, optimize, consolidate, replace or retire decision",
                            "Release, rollback, monitoring and ownership plan",
                        ]}
                    />

                    <BlogHeader id="related">Related reading</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><Link href="/blog/wordpress-traffic-drop-speed" className="text-cognac hover:underline">Diagnosing a WordPress traffic drop before blaming speed</Link></li>
                        <li><Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">What sets the scope and tiers of a migration quote</Link></li>
                        <li><Link href="/work/mycustompatches" className="text-cognac hover:underline">A dated WordPress migration we delivered</Link></li>
                    </ul>

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
                        <ListChecks className="mb-4 h-7 w-7 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Audit the work, not the count</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We can map the capabilities and measured bottlenecks before recommending optimization,
                            consolidation or migration.
                        </p>
                        <QuoteModalButton cta="wordpress_plugin_audit_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
