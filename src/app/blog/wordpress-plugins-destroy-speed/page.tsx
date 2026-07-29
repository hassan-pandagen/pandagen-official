import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Bug, Gauge, ListChecks, Wrench } from "lucide-react";
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
        modifiedTime: "2026-07-24",
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
    { name: "Google PageSpeed Insights data", url: "https://developers.google.com/speed/docs/insights/v5/about" },
    { name: "Google Core Web Vitals", url: "https://web.dev/articles/vitals" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-02-05",
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
            articleSection: "WordPress performance",
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

export default function WordPressPluginPerformancePage() {
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
                            { label: "WordPress plugin performance", href: `/blog/${postId}` },
                        ]}
                    />
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

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 5, 2026" readTime="16 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Some plugins add no visitor-facing work on a given route; others can affect nearly every request.",
                                "Performance depends on what executes, not only how many plugins are active.",
                                "Profile representative public, signed-in, editor, search, cart and checkout journeys separately.",
                                "Remove or replace a plugin only after mapping its capability, data and dependencies.",
                                "Optimization, consolidation, custom replacement or migration are all possible remedies. None is universally permanent.",
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
                            "Cron, queues, imports, feeds, backups and security scans",
                        ]}
                    />

                    <BlogHeader id="frontend">Frontend impact</BlogHeader>
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
                        These are behaviours to look for in your own trace, not a ranking of products. Any of them can
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
                        Query Monitor is the practical instrument for the server side of this. It reports the database
                        queries fired during a single request with the component responsible for each, the hooks that
                        ran, HTTP API calls made during the request, and the scripts and styles enqueued. Load a
                        representative route with it enabled on staging, sort by component, and you have attribution
                        instead of suspicion. Pair it with the DevTools Coverage panel for the browser side, which shows
                        how much of each delivered stylesheet and script the page actually executed.
                    </BlogText>

                    <BlogHeader id="server">Server and database impact</BlogHeader>
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
                    <BlogList
                        items={[
                            "Use a current production-like copy with protected data and no public side effects.",
                            "Back up and document the starting version, configuration and test data.",
                            "Map dependencies and the capability acceptance test before deactivation.",
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

                    <BlogHeader id="fix-order">The plugin performance fix hierarchy</BlogHeader>
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

                    <BlogHeader id="consolidate">Consolidation usually beats deleting one at a time</BlogHeader>
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
                        Migrate the data before you remove anything. Form entries, SEO metadata, redirect maps and
                        subscriber lists usually live inside the plugin that owns them, and deleting the plugin can take
                        them with it.
                    </BlogText>

                    <BlogHeader id="cache">Can a caching plugin fix plugin performance?</BlogHeader>
                    <BlogText>
                        Caching can reduce repeated origin work and improve delivery for cacheable responses. It cannot
                        automatically remove long browser tasks, repair third-party latency, correct a slow interaction
                        or safely cache user-specific pages. Verify cache keys, exclusions, hit rate and invalidation.
                        Test guest and signed-in journeys separately.
                    </BlogText>

                    <BlogHeader id="remove">When removing a plugin is justified</BlogHeader>
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
                        it reduces frontend bytes. The ownership side of that choice is modelled in our{" "}
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

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
