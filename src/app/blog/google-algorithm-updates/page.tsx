import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { GOOGLE_UPDATES, UPDATE_STATS, REGISTER_START, REGISTER_UPDATED, inProgressUpdate, longDate } from "@/data/google-updates";
import type { Metadata } from "next";

const updateFAQs = blogPosts.find(p => p.id === "google-algorithm-updates")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

const DASHBOARD_URL = "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history";

const KIND_LABEL: Record<string, string> = {
    core: "Core",
    spam: "Spam",
    reviews: "Reviews",
    "helpful-content": "Helpful content",
    discover: "Discover",
    "page-experience": "Page experience",
    issue: "Ranking issue",
};

const KIND_CLASS: Record<string, string> = {
    core: "bg-cognac/10 text-cognac",
    spam: "bg-stone-200 text-stone-700",
    issue: "bg-amber-100 text-amber-800",
};

function formatStart(iso: string): string {
    const [y, m, d] = iso.split("-").map(Number);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
    return `${month} ${d}, ${y}`;
}

const updatesByYear = GOOGLE_UPDATES.reduce<Record<string, typeof GOOGLE_UPDATES[number][]>>((acc, u) => {
    const year = u.start.slice(0, 4);
    (acc[year] ||= []).push(u);
    return acc;
}, {});
const years = Object.keys(updatesByYear).sort((a, b) => Number(b) - Number(a));

export const metadata: Metadata = {
    title: "Google Algorithm Updates: Every Confirmed Update Since 2021",
    description: `Google has confirmed ${UPDATE_STATS.total} ranking updates since ${REGISTER_START}, including ${UPDATE_STATS.coreCount} core updates. Full dated register from Google's own dashboard, plus how to tell whether an update actually hit your site.`,
    alternates: {
        canonical: "/blog/google-algorithm-updates",
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Google algorithm updates",
        "Google core update history",
        "Google update list",
        "latest Google algorithm update",
        "Google core update 2026",
        "Google spam update",
        "core update recovery",
        "Google traffic drop",
        "Search Console traffic drop",
        "core update rollout time",
    ],
    openGraph: {
        title: "Google Algorithm Updates: Every Confirmed Update Since 2021",
        description: `Every ranking update on Google's Search Status Dashboard, with start dates and rollout lengths. The median core update takes ${UPDATE_STATS.medianCoreDays} days to finish rolling out.`,
        type: "article",
        publishedTime: "2026-04-09T00:00:00-05:00",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/google-algorithm-updates",
        images: [ogImageForPath("/blog/google-algorithm-updates")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Google Algorithm Updates: Every Confirmed Update Since 2021",
        description: `${UPDATE_STATS.coreCount} core updates, ${UPDATE_STATS.spamCount} spam updates, all dated from Google's own record. Plus how to separate an update from your own release.`,
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#article",
            "headline": "Google Algorithm Updates: Every Confirmed Update Since 2021",
            "description": `A dated register of all ${UPDATE_STATS.total} ranking updates Google has confirmed since ${REGISTER_START}, transcribed from the Search Status Dashboard, with an evidence-led method for diagnosing whether an update affected your site.`,
            "image": ogImageUrlForPath("/blog/google-algorithm-updates"),
            "datePublished": "2026-04-09T00:00:00-05:00",
            "dateModified": "2026-08-19T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "knowsAbout": ["Next.js", "Website migration", "Web performance", "Technical SEO", "Content management systems"],
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#webpage" },
            "articleSection": "SEO",
            "keywords": ["Google algorithm updates", "Google core update history", "Google spam update", "core update rollout", "Google traffic drop", "Search Console"],
            "about": [
                { "@type": "Thing", "name": "Google Search core update", "description": "A broad change to Google's ranking systems, announced and dated on the Search Status Dashboard" },
                { "@type": "Thing", "name": "Google Search Status Dashboard", "description": "Google's official record of confirmed ranking updates, with start dates and rollout durations" },
                { "@type": "Thing", "name": "Search Console", "description": "Google's service for monitoring and troubleshooting a site's presence in Google Search" },
            ],
            "inLanguage": "en-US",
            "wordCount": 3425,
            "timeRequired": "PT15M",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"],
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google Search Status Dashboard: ranking update history", "url": DASHBOARD_URL },
                { "@type": "CreativeWork", "name": "Google Search's core updates and your website", "url": "https://developers.google.com/search/docs/appearance/core-updates" },
                { "@type": "CreativeWork", "name": "Debugging drops in Google Search traffic", "url": "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" },
            ],
        },
        {
            "@type": "Dataset",
            "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#dataset",
            "name": "Confirmed Google Search ranking updates, 2021 to 2026",
            "description": `Every ranking update listed on Google's Search Status Dashboard from ${REGISTER_START} onward, with the update name, rollout start date and Google's stated rollout duration. ${GOOGLE_UPDATES.length} entries.`,
            "creator": { "@id": "https://www.pandacodegen.com/#organization" },
            "isBasedOn": DASHBOARD_URL,
            "dateModified": "2026-08-19",
            "temporalCoverage": "2021-11-03/2026-06-26",
            "variableMeasured": ["Update name", "Rollout start date", "Rollout duration"],
            "license": "https://creativecommons.org/licenses/by/4.0/",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Google Algorithm Updates", "item": "https://www.pandacodegen.com/blog/google-algorithm-updates" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#webpage",
            "url": "https://www.pandacodegen.com/blog/google-algorithm-updates",
            "name": "Google Algorithm Updates: Every Confirmed Update Since 2021",
            "description": "A dated register of Google's confirmed ranking updates, kept current from the Search Status Dashboard, with a diagnostic method for traffic changes.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": ogImageUrlForPath("/blog/google-algorithm-updates") },
            "datePublished": "2026-04-09T00:00:00-05:00",
            "dateModified": "2026-08-19T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#breadcrumb" },
            "inLanguage": "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/google-algorithm-updates#faq",
            "mainEntity": updateFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })),
        },
    ],
};

export default function GoogleAlgorithmUpdatesPage() {
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

                    <Breadcrumb items={postCrumbs("google-algorithm-updates", "Google Algorithm Updates")} />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Google Algorithm Updates: <span className="font-serif italic font-normal text-cognac">Every Confirmed Update Since 2021</span>
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Google has confirmed {UPDATE_STATS.total} ranking updates since {REGISTER_START}, {UPDATE_STATS.coreCount} of them core updates. The most recent is the {UPDATE_STATS.latest.name}, which started {formatStart(UPDATE_STATS.latest.start)} and took {UPDATE_STATS.latest.duration} to roll out. Below is the full dated register, taken from Google&apos;s own dashboard, and the method for working out whether any of it touched your site.
                        </p>

                        <BlogAuthor
                            date="Apr 9, 2026, updated Aug 8, 2026"
                            readTime="15 min read"
                            bio="Hassan is PandaCodeGen's co-founder and Lead Engineer. He does the performance testing, the technical SEO, and runs controlled migrations with documented baselines and acceptance criteria."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            `Google's Search Status Dashboard lists ${UPDATE_STATS.total} confirmed ranking updates from ${REGISTER_START} to now: ${UPDATE_STATS.coreCount} core updates, ${UPDATE_STATS.spamCount} spam updates, and the rest split across reviews, helpful content, Discover and page experience.`,
                            `Core updates do not roll out quickly. The median takes ${UPDATE_STATS.medianCoreDays} days to finish, the shortest in the record took ${UPDATE_STATS.shortestCore.duration} and the longest took ${UPDATE_STATS.longestCore.duration}. Judging your traffic before the rollout completes measures a half-applied update.`,
                            "Google does not publish per-update ranking factors. It announces a name, a start date and a completion date. Any article telling you what a specific core update 'targeted' is inferring, not reporting.",
                            "A traffic change should be segmented by page, query, device, country and search type, then compared against indexing, field performance, analytics, release and server data before anyone assigns a cause.",
                        ]} />
                    </div>

                    <div className="space-y-8">
                        <BlogText>
                            Most coverage of a Google update is written within 48 hours of it starting, which is the one point at which nobody can know what it did. The useful artefact is duller and more durable: a dated list of what Google actually confirmed, and a repeatable way to check your own site against it.
                        </BlogText>

                        <BlogText>
                            Everything in the table below is transcribed from the <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google Search Status Dashboard</a>, which is Google&apos;s own record of confirmed ranking updates. Names, start dates and rollout durations are Google&apos;s, not our summary of press coverage. <BlogHighlight>Last verified against the dashboard on {REGISTER_UPDATED}.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Every Google Algorithm Update Google Has Confirmed</BlogHeader>

                        {/* Renders only while Google's dashboard still shows a rollout as
                            ongoing. It disappears on its own once the entry gains a duration,
                            so there is no stale "currently rolling out" banner to clean up
                            later. The register table below always carries the same row. */}
                        {inProgressUpdate && (
                            <InsightBox label="Rolling out right now">
                                Google started the <strong>{inProgressUpdate.name}</strong> on{" "}
                                {longDate(inProgressUpdate.start)} and its dashboard still shows the rollout as
                                ongoing. Google said it may take a few days, published no new spam policies
                                alongside it, and released no accompanying blog post. It applies globally and to all
                                languages.{" "}
                                <strong>
                                    A spam update is not a core update, and the response differs.
                                </strong>{" "}
                                A core update calls for a look at content quality. A spam update calls for checking
                                whether you breach a specific published policy, and most sites breach none of them.
                                Do not diagnose anything from a rollout that has not finished; note the start date
                                and wait for it to complete, then a further week.
                            </InsightBox>
                        )}

                        <BlogText>
                            Google began publishing this history in {REGISTER_START}. Updates before that date were announced through blog posts and social accounts rather than a structured record, so they are not included here. Two entries are labelled &ldquo;ranking issue&rdquo; rather than an update, which is how Google logs a bug it later corrected.
                        </BlogText>

                        <div className="my-8 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                            <table className="w-full min-w-[34rem] border-collapse text-sm">
                                <caption className="sr-only">
                                    Confirmed Google Search ranking updates from {REGISTER_START} onward, with rollout start dates and durations, as recorded on the Google Search Status Dashboard.
                                </caption>
                                <thead>
                                    <tr className="bg-stone-100 text-left">
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal">Update</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal">Type</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal whitespace-nowrap">Started</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal whitespace-nowrap">Rollout</th>
                                    </tr>
                                </thead>
                                {years.map(year => (
                                    <tbody key={year}>
                                        <tr>
                                            <th scope="colgroup" colSpan={4} className="bg-stone-50 px-4 py-2 text-left font-bold text-charcoal">
                                                {year}
                                            </th>
                                        </tr>
                                        {updatesByYear[year].map(u => (
                                            <tr key={`${u.name}-${u.start}`} className="border-t border-stone-200 align-top">
                                                <td className="px-4 py-3 text-stone-800">{u.name}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${KIND_CLASS[u.kind] ?? "bg-stone-100 text-stone-600"}`}>
                                                        {KIND_LABEL[u.kind]}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-stone-600 whitespace-nowrap">{formatStart(u.start)}</td>
                                                <td className="px-4 py-3 text-stone-600 whitespace-nowrap">{u.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                ))}
                            </table>
                        </div>

                        <BlogHeader>What the Rollout Data Actually Shows</BlogHeader>

                        <BlogText>
                            The durations are the part of this record almost nobody reads, and they change how you should respond. Across the {UPDATE_STATS.coreCount} core updates Google has dated, the median rollout is <BlogHighlight>{UPDATE_STATS.medianCoreDays} days</BlogHighlight>. The shortest was the {UPDATE_STATS.shortestCore.name} at {UPDATE_STATS.shortestCore.duration}. The longest was the {UPDATE_STATS.longestCore.name}, which ran for {UPDATE_STATS.longestCore.duration}.
                        </BlogText>

                        <BlogText>
                            No core update in the register has ever completed in under six days. That single fact invalidates most of what gets written in the first week of one. If you compare last week to this week while a core update is halfway through rolling out, you are measuring an unfinished change against a moving baseline, and the number you get will not survive the rollout completing.
                        </BlogText>

                        <BlogList items={[
                            `Wait for Google to mark the rollout complete, then wait a further full week before comparing. On a median core update that is roughly three weeks from the announcement.`,
                            `Spam updates move faster: the ${UPDATE_STATS.latest.name} finished in ${UPDATE_STATS.latest.duration}, and the March 2026 spam update in 19 hours 30 minutes. A same-week diagnosis is more defensible there.`,
                            "Two core updates have overlapped with other announced updates in the same window (March 2024, December 2024). When that happens, attributing a change to one of them is guesswork.",
                            "Google publishes a name, a start, and an end. It does not publish what the update weighted, which pages it favoured, or a recovery timeline.",
                        ]} />

                        <InsightBox variant="warning">
                            Google has never announced a per-update ranking threshold: no LCP cutoff attached to a named core update, no PageSpeed score requirement, no platform penalty, and no stated percentage of sites that lost rankings. Claims of that shape are inferred from third-party rank trackers and should not be used to diagnose a site or justify a rebuild.
                        </InsightBox>

                        <BlogHeader>What Google Confirms, and What It Leaves Unsaid</BlogHeader>

                        <BlogText>
                            Google&apos;s <a href="https://developers.google.com/search/docs/appearance/core-updates" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">core-update guidance</a> explains that core updates are broad changes intended to improve how Search presents helpful and reliable results. They do not target one website, one page, or one content management system.
                        </BlogText>

                        <BlogText>
                            Google also explains that a page moving down is not automatically a penalty or proof that the page is bad. Search results change as systems, content, user expectations and the open web change. A competitor may now satisfy the query better. A page can also lose clicks with little position movement if demand or the appearance of the results page changes.
                        </BlogText>

                        <BlogText>
                            It is not enough to notice that traffic moved during a rollout window and declare a cause. A core update, a technical release, a crawl problem, changing search demand, a competitor&apos;s stronger page, a tracking fault, or normal volatility can overlap. <BlogHighlight>Timing creates a hypothesis, not proof.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Do Google&apos;s Updates Set a Speed Threshold?</BlogHeader>

                        <BlogText>
                            No update in the register has come with a new speed threshold. Google&apos;s current <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Core Web Vitals guidance</a> defines a good user experience as LCP at 2.5 seconds or better, INP at 200 milliseconds or better, and CLS at 0.1 or better. Those numbers have not moved with any named core update.
                        </BlogText>

                        <BlogText>
                            These are field-performance thresholds, not a statement that every page beyond one number loses rankings. Search Console&apos;s Core Web Vitals report uses anonymized real-user data, evaluates the 75th percentile over the latest 28 days, and groups similar URLs. A one-time Lighthouse run and a Search Console URL group answer different questions. Our <Link href="/blog/core-web-vitals-explained" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">guide to Core Web Vitals</Link> explains which metric answers which question.
                        </BlogText>

                        <BlogText>
                            A PageSpeed score is useful for finding lab-test opportunities, but Google has never published a score of 70, 90, or 100 as a ranking cutoff. Google&apos;s <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">page-experience documentation</a> says good Core Web Vitals can contribute to Search success, while also stating that good report scores do not guarantee top rankings. Relevance and helpfulness still matter.
                        </BlogText>

                        <BlogText>
                            That distinction protects both SEO decisions and development budgets. Improve a slow or unstable experience because visitors benefit and because page experience is relevant. Do not promise that moving one metric across a line will reverse a core-update loss. The evidence and its limits are laid out in <Link href="/blog/how-website-speed-affects-seo" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">how website speed affects SEO</Link>, and the testing method in our <Link href="/blog/how-to-achieve-100-pagespeed" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">repeatable PageSpeed process</Link>.
                        </BlogText>

                        <BlogHeader>Why Slow Sites May Still Lose Visibility</BlogHeader>

                        <BlogText>
                            Rejecting a false speed threshold does not mean performance is unimportant. Google recommends good Core Web Vitals, and slow pages can create real operational disadvantages. Visitors may abandon a page before its content becomes useful, interaction delays can obstruct navigation or forms, and layout shifts can cause mistakes. Those problems can reduce the value of traffic even when rankings remain unchanged.
                        </BlogText>

                        <BlogText>
                            Performance can also interact with other technical conditions. Unavailable servers, blocked resources, unstable rendering, excessive client-side work, or a broken mobile experience may affect crawling, rendering, accessibility and conversion. Those are specific defects to test. Our walkthrough of <Link href="/blog/why-is-my-website-loading-so-slow" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">why a website loads slowly</Link> covers how to isolate each one. They are not evidence that Google applied a universal slow-site penalty.
                        </BlogText>

                        <BlogText>
                            Think in layers. Search visibility depends on whether Google can discover, crawl, render, index, understand and select the page for a query. The visitor then has to load, understand, trust and act on it. Speed influences parts of that journey, but it cannot compensate for the wrong search intent, duplicate pages, an accidental noindex, weak information, or an offer that does not match the user.
                        </BlogText>

                        <BlogList items={[
                            "A slow page with uniquely helpful information may still rank because relevance remains important.",
                            "A fast page can still lose visibility when it does not satisfy the query or cannot be indexed correctly.",
                            "A ranking change and a conversion change can happen together, but each needs its own measurement.",
                            "Improving real-user performance is valuable even when no ranking recovery can be promised.",
                        ]} />

                        <BlogHeader>How to Separate an Algorithm Update From a Problem You Caused</BlogHeader>

                        <BlogText>
                            Start with a controlled comparison, not a site-wide rewrite. Google&apos;s <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">traffic-drop guidance</a> recommends confirming that the rollout has finished, waiting at least a full week, and comparing a post-rollout week with a week before the rollout. Keep seasonality in mind, and use a year-over-year comparison when the business has enough history.
                        </BlogText>

                        <BlogText>
                            In Search Console&apos;s Performance report, compare clicks, impressions, click-through rate and average position. Then segment the change by page, query, device, country and search type. A site-wide position loss across many established queries looks different from a mobile-only click decline on a few templates. If impressions are steady while clicks fall, inspect titles, snippets, result features and demand before blaming performance.
                        </BlogText>

                        <BlogText>
                            Next, check whether Google could access and index the affected pages. Review the Page indexing report, Crawl stats, Manual Actions and Security Issues. Use <a href="https://support.google.com/webmasters/answer/9012289" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">URL Inspection</a> on representative winners and losers to compare crawl status, the indexed version, canonicals, rendered output and live availability.
                        </BlogText>

                        <BlogText>
                            Only then overlay performance. Compare the mobile and desktop Core Web Vitals URL groups, CrUX field data, and representative PageSpeed or Lighthouse tests. Check whether the affected pages actually became slower before the visibility change. If poor LCP existed for months while rankings fell only on one content cluster, speed alone is a weak explanation. If a release caused field metrics, errors and conversions to worsen on the same template, performance becomes a stronger lead.
                        </BlogText>

                        <BlogText>
                            Finally, compare Search Console with analytics and business outcomes. Google notes that Search Console clicks and Analytics sessions are calculated differently, so they will not match exactly. Use them together to understand discovery before the visit and behavior after the visit. Separate a visibility loss from a tracking break, landing-page engagement problem, or conversion issue. Where a rival page moved up instead, our <Link href="/blog/why-competitor-outranks-you" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">competitor ranking gap analysis</Link> sets out the seven evidence groups to compare.
                        </BlogText>

                        <div className="grid md:grid-cols-2 gap-4 my-10">
                            {[
                                ["Search change", "Clicks, impressions, queries, pages, devices, countries, search types, and position moved during or after the rollout."],
                                ["Technical change", "Indexing, crawl, canonical, server, security, structured-data, or rendering signals changed for the affected URLs."],
                                ["Performance change", "Real-user LCP, INP, or CLS worsened for the same device and template before the traffic or conversion change."],
                                ["Demand or result change", "Google Trends, impressions, CTR, competitors, or result features show that the market or search page changed."],
                            ].map(([title, detail]) => (
                                <div key={title} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                    <h3 className="font-bold text-charcoal mb-2">{title}</h3>
                                    <p className="text-sm leading-relaxed text-stone-600">{detail}</p>
                                </div>
                            ))}
                        </div>

                        <InsightBox variant="info">
                            A useful diagnosis states what changed, where it changed, when it changed, which evidence supports the hypothesis, which alternatives were checked, and what remains unknown. If the evidence cannot isolate a cause, say so before changing the site.
                        </InsightBox>

                        <BlogHeader>How to Track Google Updates Without Chasing Rumours</BlogHeader>

                        <BlogText>
                            A business does not need to follow every SEO rumour, but it should maintain awareness of official Google changes. Google continually updates its systems, including smaller changes that are never individually announced and will never appear in the table above. Monitoring does not prevent every traffic loss. It gives you context, protects the baseline, and reduces the chance that your own release is confused with an external update.
                        </BlogText>

                        <BlogText>
                            Keep the <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Search Status Dashboard</a> and <a href="https://developers.google.com/search/updates" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Search documentation updates</a> in a simple monitoring routine. Review Search Console messages, Page indexing, performance, security and Core Web Vitals on an agreed cadence. Record major site releases, migrations, template changes, content updates, consent changes, analytics changes and outages.
                        </BlogText>

                        <BlogText>
                            Search Console supports <a href="https://support.google.com/webmasters/answer/16530728" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">custom annotations</a> in Performance charts. Add concise notes for important releases and fixes without including personal information. Keep a longer internal change log with the deployment ID, affected templates, owner, expected effect, rollback path and validation result.
                        </BlogText>

                        <BlogList items={[
                            "Weekly: review official ranking updates, Search Console messages, and unusual click or indexing changes.",
                            "Monthly: compare important page groups, queries, devices, conversions, Core Web Vitals, and crawl health.",
                            "At every release: annotate the date, affected routes, measurement plan, and rollback decision.",
                            "After an announced update: preserve the baseline, wait for the rollout to finish, and analyze the right comparison window.",
                            "Before a large response: require page-level evidence and test the smallest reversible change first.",
                        ]} />

                        <BlogText>
                            This is how you avoid getting hurt by an update in two different ways. The first risk is losing visibility because a genuine content, technical, or experience weakness was ignored. The second is damaging a healthy site by reacting to an unverified theory. A monitoring and change-control habit helps with both.
                        </BlogText>

                        <BlogHeader>Do Not Blame WordPress, Shopify, or Another Platform Without Testing</BlogHeader>

                        <BlogText>
                            Google has never stated that an update targeted WordPress, Shopify, Webflow, Wix, or any framework. Platform names are not a diagnosis. Hosting, themes, apps, plugins, media, fonts, consent tools, analytics, third-party scripts, caching, rendering strategy and editorial decisions can produce very different results on the same platform.
                        </BlogText>

                        <BlogText>
                            Test representative templates and actual user journeys. A WordPress site with disciplined engineering can provide good Core Web Vitals. A custom Next.js site can be slow when it ships oversized media, excessive JavaScript, or uncontrolled third-party tags. Modern architecture creates options, not automatic rankings.
                        </BlogText>

                        <BlogText>
                            Start from the diagnostic for the stack in front of you: <Link href="/blog/how-to-fix-slow-wordpress" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">fixing a slow WordPress site</Link>, <Link href="/blog/wix-too-slow" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">testing a slow Wix site</Link>, <Link href="/blog/is-squarespace-bad-for-seo" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">auditing Squarespace for SEO</Link>, or <Link href="/blog/shopify-dawn-theme-slow" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">diagnosing a Shopify Dawn theme</Link>.
                        </BlogText>

                        <BlogText>
                            Optimization is usually the first path when the current system can meet the agreed requirement without creating unsustainable maintenance. A migration becomes reasonable when documented constraints repeatedly block performance, security, content operations, integration, ownership or growth goals. The migration still needs a complete URL inventory, redirect decisions, metadata parity, analytics validation, staged crawl, cutover plan and rollback path. The search side of that is covered in <Link href="/blog/will-migrating-hurt-my-seo" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">what a migration does to search visibility</Link>, and delivery under <Link href="/services/wordpress-migration" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">our migration service</Link> and <Link href="/services/custom-engineering" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">custom engineering</Link>.
                        </BlogText>

                        <BlogHeader>What to Change After a Confirmed Traffic Drop</BlogHeader>

                        <BlogText>
                            Match the remedy to the evidence. Fix technical access when pages cannot be crawled or indexed. Improve the affected content when the query intent, accuracy, usefulness or trust context is weak. Improve performance when field and lab data identify a real user-experience problem. Address snippets when impressions hold but CTR declines. Repair analytics when Search Console and session data diverge after a measurement release. For a WordPress property where the drop followed a speed regression, our <Link href="/blog/wordpress-traffic-drop-speed" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">WordPress traffic drop walkthrough</Link> follows the same order.
                        </BlogText>

                        <BlogText>
                            Google advises against radical quick fixes when a page is already performing well. Make sustainable improvements for users, release them in controlled groups, and record what changed. Do not change content, templates, internal links, navigation, schema and hosting at the same time if you expect to learn which change helped.
                        </BlogText>

                        <BlogText>
                            There is no universal core update recovery time. Google&apos;s <a href="https://developers.google.com/search/docs/appearance/core-updates" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">core-update guidance</a> says some effects can appear within days, while broader reassessment can take several months. It also states that no improvement guarantees a visible ranking effect. Use a review schedule and decision gates, not a promised recovery date.
                        </BlogText>

                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Need to separate a Google update from a site problem?</p>
                            <p className="text-stone-600 mb-4 text-sm">We can review the rollout window, affected queries and pages, indexing, Core Web Vitals, analytics, releases, and the evidence behind each hypothesis before recommending a fix.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get an evidence-led audit <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>A 30-Day Monitoring Plan, Counted From Your Own Release</BlogHeader>

                        <BlogText>
                            In the first week after your own release, preserve exports from Search Console and analytics, record the official rollout dates, and list every relevant internal change. Build a page-by-query comparison for the pages with the largest click or position differences. Inspect representative URLs and rule out manual actions, security issues, indexation problems, server errors, robots directives and canonical mistakes.
                        </BlogText>

                        <BlogText>
                            In the second week, compare mobile and desktop field performance by template. Reproduce problems with lab tools, then trace them to images, fonts, JavaScript, rendering, server response, layouts or third-party code. Separately review search intent, competing results, content accuracy, authorship and the usefulness of each affected page.
                        </BlogText>

                        <BlogText>
                            In weeks three and four, prioritize changes by confidence, user impact and reversibility. Release small groups when possible. Validate indexing and rendering, monitor errors and conversions, and document the outcome. Continue watching Search Console, but avoid interpreting daily noise as a verdict.
                        </BlogText>

                        <BlogText>
                            The result should be a decision log, not a dramatic headline: confirmed observations, rejected explanations, open questions, chosen changes, owners, validation dates and rollback conditions. That record becomes the baseline for the next Google algorithm update and the next website release.
                        </BlogText>

                        <BlogText>
                            If the log points at a rebuild rather than a repair, scope tiers are on the <Link href="/pricing" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">pricing page</Link> and finished projects on the <Link href="/work" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">work page</Link>.
                        </BlogText>
                    </div>

                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Build a Search Monitoring Plan Before the Next Update</h2>
                        <p className="text-stone-600 mb-6">
                            Get a scoped review of Search Console, indexing, Core Web Vitals, analytics, release history, and the pages and queries that changed. You will receive evidence, limitations, and recommended next steps instead of a guaranteed ranking claim.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                            Get your diagnostic plan <ArrowRight className="w-5 h-5" />
                        </CalModalButton>
                    </div>

                    <section className="mt-10 mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Use the register, not the commentary:</strong> Google has confirmed {UPDATE_STATS.total} ranking updates since {REGISTER_START}, and the dashboard is the only source that dates them.</li>
                            <li><strong>Rollouts are slow:</strong> the median core update takes {UPDATE_STATS.medianCoreDays} days and none has finished in under six, so first-week verdicts measure an unfinished change.</li>
                            <li><strong>Google names updates, not factors:</strong> no announced update has ever carried an LCP cutoff, a PageSpeed requirement, or a platform penalty.</li>
                            <li><strong>Keep performance in context:</strong> good Core Web Vitals support user experience and can contribute to Search success, but they do not guarantee rankings.</li>
                            <li><strong>Diagnose by segment:</strong> compare pages, queries, devices, countries, search types, indexing, field performance, analytics, releases and demand.</li>
                            <li><strong>Change only what the evidence supports:</strong> use controlled, reversible improvements and never promise a fixed recovery date.</li>
                        </ol>
                    </section>

                    {updateFAQs.length > 0 && <FAQAccordion faqs={updateFAQs} />}

                    <TopicUpLink postId="google-algorithm-updates" />

                    <RelatedPosts currentPostId="google-algorithm-updates" />
                </article>
            </main>
            <Footer />
        </>
    );
}
