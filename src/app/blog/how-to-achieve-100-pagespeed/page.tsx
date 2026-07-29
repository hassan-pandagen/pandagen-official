import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Repeat2, TestTube2 } from "lucide-react";
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

const postId = "how-to-achieve-100-pagespeed";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How to Reach 90+ PageSpeed: A Repeatable 2026 Process";
const description =
    "An eight-step Lighthouse and Core Web Vitals process for improving representative pages, recording test conditions and avoiding false 100-score promises.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "how to achieve 100 PageSpeed",
        "90 PageSpeed score",
        "improve Lighthouse performance",
        "PageSpeed optimization",
        "Core Web Vitals optimization",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-17",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-achieve-100-pagespeed")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Chrome: Lighthouse performance scoring", url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" },
    { name: "Chrome: Lighthouse performance audits", url: "https://developer.chrome.com/docs/lighthouse/performance/" },
    { name: "Google Search Central: Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { name: "PageSpeed Insights documentation", url: "https://developers.google.com/speed/docs/insights/v5/about" },
    { name: "web.dev: optimize LCP", url: "https://web.dev/articles/optimize-lcp" },
    { name: "web.dev: optimize INP", url: "https://web.dev/articles/optimize-inp" },
    { name: "web.dev: optimize CLS", url: "https://web.dev/articles/optimize-cls" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-02-17",
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
            articleSection: "Performance",
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

export default function PageSpeedProcessGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "90+ PageSpeed process", href: `/blog/${postId}` }]} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Performance engineering</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How to Reach 90+ PageSpeed <span className="italic text-cognac">Without Chasing a Screenshot</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A Lighthouse score is one lab test on one day, not a permanent property of your site. Fix the
                            actual page, write down the conditions you tested under, run it more than once, and check
                            what real visitors experience. Do not promise that every page will always show 100, because
                            nobody can hold that.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Chrome, Google and web.dev primary guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="February 17, 2026" readTime="12 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">First understand the number</h2>
                        <BlogList
                            items={[
                                "Lighthouse currently labels 90 to 100 as good, 50 to 89 as needing improvement, and below 50 as poor.",
                                "The score is a weighted lab calculation and can vary with tool version, device, network, CPU, cache, content, consent and third parties.",
                                "Core Web Vitals are field metrics: LCP, INP and CLS, evaluated at the 75th percentile where eligible data exists.",
                                "A 100 lab score does not guarantee a Core Web Vitals pass, ranking, traffic, conversion or revenue.",
                                "A 90+ target should name pages, profiles, runs, environment, exclusions and remedy in writing.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: TestTube2, title: "Baseline", body: "Preserve field and lab evidence before changing the page." },
                            { icon: Gauge, title: "Diagnose", body: "Fix the measured resource, main-thread, layout or server constraint." },
                            { icon: Repeat2, title: "Verify", body: "Repeat comparable runs, then monitor real-user distributions." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogText>
                        The field metrics behind those thresholds are set out in our{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">
                            guide to Core Web Vitals
                        </Link>
                        , and the relationship between performance and search in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">
                            how website speed affects SEO
                        </Link>
                        . This page is about the work itself.
                    </BlogText>

                    <BlogHeader>Step 1: define representative pages and journeys</BlogHeader>
                    <BlogText>
                        Group the site by template and behavior: homepage, long service page, article, location, product,
                        collection, cart, form, calendar and authenticated state. Pick pages that represent the accepted
                        scope and important visitor journeys. The homepage alone does not prove the rest of the site. If
                        you are still working out which routes hurt, our walkthrough of{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className="text-cognac hover:underline">
                            why a website loads slowly
                        </Link>{" "}
                        narrows the list first.
                    </BlogText>

                    <BlogHeader>Step 2: record field and lab baselines</BlogHeader>
                    <BlogList
                        items={[
                            "Save PageSpeed Insights field origin and URL data where available, including assessment date.",
                            "Record exact URL, release, device profile, network, CPU, location, cache, consent and login state.",
                            "Run each agreed lab profile at least three times and retain the raw reports.",
                            "Capture server timing, request waterfalls, performance traces, coverage and the rendered page.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Do not average unlike tests">
                        A mobile cold-cache run with consent accepted is not comparable to a desktop warm-cache run
                        before tags load. Keep profiles separate and report variation instead of selecting the best run.
                    </InsightBox>

                    <BlogHeader>Step 3: reduce document and server delay</BlogHeader>
                    <BlogText>
                        Follow redirects, inspect DNS, connection, CDN, cache and origin timing, and profile the backend
                        when the document is slow. Cache only where content, identity and invalidation rules permit it.
                        A faster host can help an origin bottleneck; it cannot remove client-side media, script or layout
                        work. The wider sequence for that work is laid out in our guide to{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline">
                            speeding up a website
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Step 4: make the LCP resource discoverable and efficient</BlogHeader>
                    <BlogList
                        items={[
                            "Identify the actual LCP element in the trace instead of assuming it is the hero image.",
                            "Serve an appropriately sized, compressed asset and preserve visual quality.",
                            "Avoid lazy-loading the above-the-fold LCP image and ensure the browser can discover it promptly.",
                            "Reduce render-blocking work that delays the element and verify responsive candidates.",
                        ]}
                    />
                    <BlogText>
                        On WordPress the LCP element is usually decided by the theme or the page builder, which is where{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">
                            fixing a slow WordPress site
                        </Link>{" "}
                        and the{" "}
                        <Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">
                            Divi theme performance diagnostic
                        </Link>{" "}
                        pick the work up.
                    </BlogText>

                    <BlogHeader>Step 5: reduce long tasks and interaction delay</BlogHeader>
                    <BlogText>
                        Profile JavaScript execution, event handlers, hydration, layout work and third-party tasks.
                        Remove unused code, split non-critical work, yield during long processing and keep interaction
                        handlers small. Test the real menu, form, filter, cart and modal, not only initial load.
                    </BlogText>

                    <BlogHeader>Step 6: stabilize layout</BlogHeader>
                    <BlogList
                        items={[
                            "Reserve dimensions or aspect ratio for images, video, embeds and dynamic components.",
                            "Do not insert banners, consent UI or errors above existing content without reserved space.",
                            "Use stable font-loading behavior and verify fallback-to-final font changes.",
                            "Exercise late content, validation, loading, success and error states while recording CLS.",
                        ]}
                    />

                    <BlogHeader>Step 7: govern third parties and consent</BlogHeader>
                    <BlogText>
                        Inventory analytics, pixels, chat, heatmaps, video, maps, reviews, calendars, tag managers and
                        experiments. Record owner, purpose, consent category, load condition, transfer, performance cost
                        and failure behavior. Defer or remove only when business and compliance requirements permit it.
                        On a WordPress build the same inventory usually starts with the{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">
                            plugin and script audit
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Step 8: repeat, regress and release</BlogHeader>
                    <BlogList
                        items={[
                            "Run the unchanged acceptance profiles three times for every named page and profile.",
                            "Test functionality, accessibility, analytics and consent so score work did not break the journey.",
                            "Record release SHA or version, tool version, reports, exclusions and known variance.",
                            "Add budget or regression checks appropriate to the project and monitor field data after release.",
                        ]}
                    />

                    <BlogHeader>Why 100 is not the right universal promise</BlogHeader>
                    <BlogText>
                        Lighthouse weights and implementations evolve. Third-party response, experiments, visitor state
                        and content change. A stable 96 can provide the same useful experience as a selected 100 run,
                        while a 100 tested page can still have accessibility, security, content or business defects.
                        Optimize the bottleneck until the accepted requirement is met, then spend effort where users and
                        the business need it most.
                    </BlogText>
                    <BlogText>
                        How automated browsing agents encounter a page is a separate question, covered in our note on{" "}
                        <Link href="/blog/agentic-browsing-pagespeed-score" className="text-cognac hover:underline">
                            agentic browsing and the PageSpeed score
                        </Link>
                        , alongside the{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className="text-cognac hover:underline">
                            answer-engine playbook we build into a site
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>PandaCodeGen&apos;s 90+ acceptance method</BlogHeader>
                    <BlogText>
                        When accepted project terms include the target, PandaCodeGen tests the named representative
                        pages under named mobile and desktop profiles and requires three passing runs per page and
                        profile. The terms record environment, exclusions and remedy. No target applies to unspecified
                        routes, changing third-party behavior or a different test profile unless the scope says so.
                    </BlogText>
                    <BlogText>
                        The target does not guarantee rankings, traffic, conversions or revenue. Those outcomes require
                        separate property-level measurement, and search engines and users control them.
                    </BlogText>
                    <BlogText>
                        Scope tiers are listed on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">
                            pricing page
                        </Link>
                        , delivery sits under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">
                            custom engineering
                        </Link>
                        , and finished builds are on the{" "}
                        <Link href="/work" className="text-cognac hover:underline">
                            work page
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        Where the constraint is the platform rather than the page, a{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">
                            WordPress migration
                        </Link>{" "}
                        is scoped separately, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">
                            what migrating does to search visibility
                        </Link>{" "}
                        is covered on its own page.
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
                        <h2 className="mb-3 font-serif text-3xl">Get your performance migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will baseline representative pages, identify controllable constraints and define a
                            written test and remedy before recommending optimization or migration.
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
