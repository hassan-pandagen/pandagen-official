import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { Activity, ArrowLeft, ArrowRight, CheckCircle2, Gauge, MousePointerClick } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamicImport(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "core-web-vitals-explained";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/core-web-vitals-explained";
const title = "Core Web Vitals Explained: A 2026 Business Guide";
const description =
    "Understand LCP, INP, and CLS, the difference between field and lab data, and how to measure business impact without inventing ranking or revenue claims.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/core-web-vitals-explained" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "core web vitals explained",
        "core web vitals for business",
        "LCP INP CLS",
        "core web vitals thresholds",
        "field data vs lab data",
        "fix core web vitals",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-06",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/core-web-vitals-explained")],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/core-web-vitals-explained"),
            datePublished: "2026-05-06",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Next.js", "Website migration", "Web performance", "Technical SEO", "Content management systems"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "SEO",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
            ],
            wordCount: 1758,
            timeRequired: "PT9M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            keywords: ["Core Web Vitals", "LCP", "INP", "CLS", "PageSpeed Insights"],
            citation: [
                {
                    "@type": "CreativeWork",
                    name: "Google Search Central: Understanding Core Web Vitals and Google search results",
                    url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
                },
                {
                    "@type": "CreativeWork",
                    name: "web.dev: Web Vitals",
                    url: "https://web.dev/articles/vitals",
                },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/core-web-vitals-explained#webpage",
            url: "https://www.pandacodegen.com/blog/core-web-vitals-explained",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/core-web-vitals-explained#breadcrumb" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Core Web Vitals Explained", item: canonicalUrl },
            ],
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

const sourceLinkClass = "font-medium text-cognac underline underline-offset-4 hover:text-charcoal";
const inlineLinkClass = "font-medium text-cognac hover:underline";

export default function CoreWebVitalsExplainedPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200 selection:text-stone-900 md:pb-20 md:pt-32">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Core Web Vitals Explained", href: "/blog/core-web-vitals-explained" },
                        ]}
                    />

                    <Link
                        href="/blog"
                        className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">SEO and performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Core Web Vitals Explained: A <span className="italic text-cognac">2026 Business Guide</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600">
                            LCP, INP, and CLS measure real user experience. They do not provide a universal revenue
                            calculator, a guaranteed ranking change, or a platform score ceiling. This guide separates
                            what the metrics prove from what your own data still has to establish.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Google Search Central, Search Console, and web.dev guidance.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        bio="Hassan leads PandaCodeGen's engineering work on performance-sensitive website migrations and custom builds."
                        date="May 6, 2026"
                        readTime="7 min read"
                    />

                    <div className="my-10">
                        <PageSpeedAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The answer in one minute</h2>
                        <BlogList
                            items={[
                                "Largest Contentful Paint (LCP) measures loading performance.",
                                "Interaction to Next Paint (INP) measures responsiveness across user interactions.",
                                "Cumulative Layout Shift (CLS) measures unexpected visual movement.",
                                "Google recommends good field values of LCP of 2.5 seconds or less, INP of 200 milliseconds or less, and CLS of 0.1 or less, each assessed at the 75th percentile of real page loads.",
                                "Core Web Vitals feed into page experience. Passing does not guarantee you rankings, traffic, conversions or revenue.",
                                "Use field data to understand real visitors and lab data to reproduce and debug specific problems.",
                            ]}
                        />
                    </section>

                    <BlogHeader>What the three Core Web Vitals measure</BlogHeader>
                    <BlogText>
                        Google describes Core Web Vitals as metrics for real-world loading performance, interactivity,
                        and visual stability. The published thresholds are experience targets, not promises about a
                        search position or a sale. For each metric, the goal is to meet the &quot;good&quot; threshold
                        at the <BlogHighlight>75th percentile of page loads</BlogHighlight>, assessed separately for
                        mobile and desktop field data.
                    </BlogText>

                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Metric</th>
                                    <th className="p-4">What it measures</th>
                                    <th className="p-4">Good</th>
                                    <th className="p-4">Needs improvement</th>
                                    <th className="p-4">Poor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-bold">LCP<br /><span className="font-normal text-stone-500">Largest Contentful Paint</span></td>
                                    <td className="p-4">How long until the largest element in the viewport renders. Usually your hero image or headline.</td>
                                    <td className="p-4">2.5s or less</td>
                                    <td className="p-4">2.5s to 4.0s</td>
                                    <td className="p-4">over 4.0s</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">INP<br /><span className="font-normal text-stone-500">Interaction to Next Paint</span></td>
                                    <td className="p-4">How long the page takes to visibly respond to a user interaction, across the whole visit.</td>
                                    <td className="p-4">200ms or less</td>
                                    <td className="p-4">200ms to 500ms</td>
                                    <td className="p-4">over 500ms</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">CLS<br /><span className="font-normal text-stone-500">Cumulative Layout Shift</span></td>
                                    <td className="p-4">How much visible content moves unexpectedly while the page loads.</td>
                                    <td className="p-4">0.1 or less</td>
                                    <td className="p-4">0.1 to 0.25</td>
                                    <td className="p-4">over 0.25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Thresholds are Google&apos;s published values; see the primary sources at the end of this article.
                        You are assessed at the 75th percentile of real page loads, separately for mobile and desktop, so
                        a page can pass in a lab test and still fail in the field. Passing all three is what counts as
                        passing Core Web Vitals. Two out of three is a fail.
                    </BlogText>

                    <div className="my-8 grid gap-4">
                        {[
                            {
                                icon: Gauge,
                                metric: "LCP",
                                name: "Largest Contentful Paint",
                                target: "Good: 2.5 seconds or less",
                                meaning: "How long it takes the largest image or text block in the viewport to render. Common contributors include slow server response, late-discovered hero media, render-blocking resources, and client-side rendering.",
                            },
                            {
                                icon: MousePointerClick,
                                metric: "INP",
                                name: "Interaction to Next Paint",
                                target: "Good: 200 milliseconds or less",
                                meaning: "How responsive the page is across a visitor's interactions. Long main-thread tasks, excessive JavaScript, expensive event handlers, and complex rendering can delay feedback.",
                            },
                            {
                                icon: Activity,
                                metric: "CLS",
                                name: "Cumulative Layout Shift",
                                target: "Good: 0.1 or less",
                                meaning: "How much content moves unexpectedly while a visitor uses the page. Images without reserved dimensions, injected banners, late font changes, and dynamic content are common causes.",
                            },
                        ].map(({ icon: Icon, metric, name, target, meaning }) => (
                            <div key={metric} className="rounded-xl border border-stone-200 bg-stone-50 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Icon className="h-6 w-6 text-cognac" />
                                    <h3 className="text-xl font-bold text-charcoal">
                                        {metric}: {name}
                                    </h3>
                                </div>
                                <p className="mb-2 font-semibold text-cognac">{target}</p>
                                <p className="leading-relaxed text-stone-700">{meaning}</p>
                            </div>
                        ))}
                    </div>

                    <BlogText>
                        FCP, TBT, Speed Index, and TTFB may also appear in performance tools, but they are not the
                        three Core Web Vitals. They can still help diagnosis. For example, Total Blocking Time is a
                        useful lab signal for main-thread work, but it is not a substitute for field INP. Our{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className={inlineLinkClass}>guide to improving a PageSpeed score</Link>{" "}
                        walks through those lab diagnostics in the order the tooling reports them.
                    </BlogText>

                    <BlogHeader>Field data and lab data answer different questions</BlogHeader>
                    <BlogText>
                        PageSpeed Insights can show two kinds of evidence. Chrome User Experience Report data describes
                        eligible real-user experiences over a rolling period. Lighthouse runs a controlled lab test
                        with a particular device and network profile. A route may look good in one view and poor in
                        the other because the visitor population, geography, cache state, device, consent state,
                        third-party scripts, and test timing differ.
                    </BlogText>

                    <div className="my-8 overflow-hidden rounded-xl border border-stone-200">
                        <div className="grid bg-stone-100 text-sm font-bold text-charcoal sm:grid-cols-3">
                            <div className="p-4">Evidence</div>
                            <div className="p-4">Best use</div>
                            <div className="p-4">Important limit</div>
                        </div>
                        {[
                            ["CrUX field data", "Understand eligible Chrome users over time", "May be unavailable or aggregated when a URL lacks enough data"],
                            ["Your own RUM", "Segment actual visitors, routes, releases, and journeys", "Requires sound collection, consent, definitions, and QA"],
                            ["Lighthouse lab data", "Reproduce and debug a controlled page state", "One run is not a population or a business outcome"],
                            ["Search Console CWV report", "Find groups of URLs with similar field issues", "Grouped status does not identify every implementation cause"],
                        ].map(([evidence, use, limit]) => (
                            <div key={evidence} className="grid border-t border-stone-200 text-sm sm:grid-cols-3">
                                <div className="p-4 font-semibold text-charcoal">{evidence}</div>
                                <div className="p-4 text-stone-700">{use}</div>
                                <div className="p-4 text-stone-700">{limit}</div>
                            </div>
                        ))}
                    </div>

                    <BlogText>
                        If PageSpeed Insights says there is not enough real-user data, do not relabel the Lighthouse
                        score as a field result. Record the exact URL, the test time, the device profile, the consent state and the release you tested. Repeat lab tests to reduce one-run noise, then add real-user monitoring if
                        the decision warrants it.
                    </BlogText>

                    <BlogHeader>What Core Web Vitals mean for SEO</BlogHeader>
                    <BlogText>
                        Google recommends good Core Web Vitals for Search success and user experience. Its current page
                        experience guidance also says there is no single page-experience signal and that relevance
                        remains important. A good score is therefore useful work, but it does not create a
                        &quot;ranking boost&quot; you can price or a deterministic tiebreaker between two pages.
                    </BlogText>
                    <BlogText>
                        To evaluate a search effect, annotate releases and compare Search Console performance by page,
                        query, country, and device. Check crawling, indexing, content, links, demand, seasonality, and
                        algorithm updates alongside performance. Even then, an uncontrolled before-and-after
                        comparison shows association more readily than causation.
                    </BlogText>
                    <BlogText>
                        <Link href="/blog/how-website-speed-affects-seo" className={inlineLinkClass}>How website speed affects SEO</Link>{" "}
                        goes further into what that relationship does and does not support, and{" "}
                        <Link href="/blog/why-competitor-outranks-you" className={inlineLinkClass}>why a competitor outranks you</Link>{" "}
                        covers the other factors to rule out before attributing a gap to performance.
                    </BlogText>

                    <BlogHeader>What Core Web Vitals mean for revenue</BlogHeader>
                    <BlogText>
                        Faster and more responsive experiences can support visitor journeys, and published case studies
                        can provide hypotheses. They are not a universal conversion formula. A percentage reported by
                        one retailer cannot be multiplied by another company&apos;s revenue without matching traffic
                        quality, funnel, device mix, market, implementation, and measurement design.
                    </BlogText>
                    <BlogText>
                        Build a property-specific business case instead:
                    </BlogText>
                    <BlogList
                        items={[
                            "Choose the affected journey: landing page to lead, product view to checkout, or another defined funnel.",
                            "Record sessions, conversion definitions, order or lead value, margin, and device mix for a dated baseline.",
                            "Segment performance by route, device, geography, and visitor state instead of relying on a site-wide average.",
                            "Track releases and concurrent marketing, pricing, content, and checkout changes.",
                            "Compare the result after enough data accumulates and report uncertainty, not just the most favorable number.",
                        ]}
                    />
                    <BlogText>
                        This method can reveal whether poor experience is concentrated in a commercially important
                        path. It can also show that another problem, such as weak intent match or checkout friction,
                        deserves priority. Both are useful outcomes.
                    </BlogText>

                    <BlogHeader>Why a site can fail after an optimization</BlogHeader>
                    <BlogText>
                        A performance project may improve a lab score without immediately changing the field
                        assessment. Field data needs new eligible visits to replace older observations. The affected
                        URL group may also include templates or states the team did not test. Consent tools, chat,
                        advertising tags, personalization, apps, plugins, and experiments can change the experience
                        after the initial page load.
                    </BlogText>
                    <BlogList
                        items={[
                            "Confirm whether the failing evidence is URL-level or origin-level field data.",
                            "Reproduce the problem on the affected template, device class, and consent state.",
                            "Identify the actual LCP element, slow interaction, or layout-shift source.",
                            "Test production behavior, including third parties and logged-in or cart states where relevant.",
                            "Ship the smallest safe fix, monitor errors, and wait for the relevant field window before declaring success.",
                        ]}
                    />
                    <BlogText>
                        For a worked example of that sequence on one platform, see{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className={inlineLinkClass}>the evidence-led method for fixing a slow WordPress site</Link>.
                    </BlogText>

                    <BlogHeader>Does the website platform set a fixed ceiling?</BlogHeader>
                    <BlogText>
                        No credible audit should assign Wix, Squarespace, WordPress, Shopify, Webflow, GoHighLevel, or
                        Next.js one universal PageSpeed range. Sites on the same platform can differ because their
                        templates, media, apps, plugins, scripts, data, infrastructure, and visitor populations differ.
                        A custom build can provide more control, but it can also perform poorly when implemented or
                        operated badly.
                    </BlogText>
                    <BlogText>
                        What each platform does give you is a recognizable set of places to look first. We keep a
                        diagnostic guide per platform:{" "}
                        <Link href="/blog/wix-too-slow" className={inlineLinkClass}>diagnosing a slow Wix site</Link>,{" "}
                        <Link href="/blog/squarespace-too-slow" className={inlineLinkClass}>diagnosing a slow Squarespace site</Link>,{" "}
                        <Link href="/blog/woocommerce-too-slow" className={inlineLinkClass}>diagnosing WooCommerce performance</Link>,{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className={inlineLinkClass}>diagnosing a slow Dawn theme</Link>,{" "}
                        <Link href="/blog/divi-theme-slow" className={inlineLinkClass}>how the Divi theme affects page speed</Link> and{" "}
                        <Link href="/blog/gohighlevel-website-speed" className={inlineLinkClass}>GoHighLevel website speed</Link>.
                    </BlogText>
                    <BlogText>
                        Optimize in place when the important problems are removable at acceptable cost. Consider a
                        migration when the current system prevents required changes, the recurring workaround cost is
                        material, or the business also needs a safer content model, clearer ownership, or deeper
                        integration. The decision should follow a route and dependency audit, not a generic score table.
                        Our <Link href="/services/wordpress-migration" className={inlineLinkClass}>WordPress migration service</Link>{" "}
                        sets out what that audit covers when the outcome is a move, and the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link> lists what each tier includes.
                    </BlogText>

                    <BlogHeader>A defensible performance acceptance test</BlogHeader>
                    <BlogText>
                        PandaCodeGen targets 90 or higher Lighthouse performance when the accepted proposal names the
                        representative pages, mobile and desktop profiles, test environment, and remedy. We use three
                        passing runs per agreed page and profile before handoff. That is a delivery test, not a promise
                        that field Core Web Vitals, rankings, or revenue will move by a fixed amount.
                    </BlogText>
                    <div className="my-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
                        <h3 className="mb-4 text-xl font-bold text-charcoal">Put these details in the SOW</h3>
                        <BlogList
                            items={[
                                "The exact representative URLs and page states.",
                                "Mobile and desktop profiles plus the tool and version.",
                                "Consent, authentication, test data, geography, and third-party conditions.",
                                "The number of runs and how the accepted result is calculated.",
                                "Exclusions, monitoring period, defect remedy, and change-control process.",
                            ]}
                        />
                    </div>

                    <BlogHeader>Primary sources used for this guide</BlogHeader>
                    <BlogText>
                        These links are the controlling references for the definitions and thresholds in this article:
                    </BlogText>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Central: Core Web Vitals and search results</a></li>
                        <li><a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Central: page experience guidance</a></li>
                        <li><a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>web.dev: Web Vitals definitions and measurement</a></li>
                        <li><a href="https://web.dev/articles/lab-and-field-data-differences" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>web.dev: why lab and field data differ</a></li>
                        <li><a href="https://support.google.com/webmasters/answer/9205520" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Console: Core Web Vitals report</a></li>
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will review representative routes, field and lab evidence, third-party dependencies,
                            search-sensitive URLs, and operating constraints. You will get a scoped recommendation to
                            optimize, migrate, or leave the current platform in place.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white transition-colors hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <section className="my-10">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">Related reading</h2>
                        <p className="leading-relaxed text-stone-700">
                            For the practical follow-on work, read{" "}
                            <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>how to speed up a website</Link>{" "}
                            and{" "}
                            <Link href="/blog/why-is-my-website-loading-so-slow" className={inlineLinkClass}>why a website loads slowly</Link>.
                        </p>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
