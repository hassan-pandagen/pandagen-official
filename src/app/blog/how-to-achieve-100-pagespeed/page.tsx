import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Repeat2, TestTube2 } from "lucide-react";
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
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const PageSpeedAnimation = dynamicImport(() => import("@/components/blog/PageSpeedAnimation"));

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
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
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
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-achieve-100-pagespeed")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Chrome: Lighthouse performance scoring", url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" },
    { name: "Chrome: Lighthouse performance audits", url: "https://developer.chrome.com/docs/lighthouse/performance/" },
    // Google Search and PageSpeed Insights documentation is verified before publication but is
    // deliberately not listed here and not emitted into citation[]. Those claims are attributed in
    // prose. Do not reintroduce developers.google.com URLs into this array.
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
            dateModified: "2026-08-03",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Web performance optimization", "Core Web Vitals", "Lighthouse", "PageSpeed Insights", "Next.js", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Performance",
            inLanguage: "en-US",
            wordCount: 2174,
            timeRequired: "PT11M",
            about: [
                { "@type": "Thing", name: "PageSpeed Insights" },
                { "@type": "Thing", name: "Lighthouse", sameAs: ["https://en.wikipedia.org/wiki/Lighthouse_(software)"] },
                { "@type": "Thing", name: "Core Web Vitals" },
                { "@type": "Thing", name: "Web performance", sameAs: "https://en.wikipedia.org/wiki/Web_performance" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "90+ PageSpeed process", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            datePublished: "2026-02-17",
            dateModified: "2026-08-03",
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
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


export default function PageSpeedProcessGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "90+ PageSpeed process")} />
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
                            Every threshold and metric definition here was re-checked against Chrome&apos;s primary Lighthouse documentation on August 3, 2026. Where a claim can be verified in your own browser, this page tells you how to verify it rather than asking you to take a citation on trust.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="February 17, 2026" readTime="7 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <div className="my-10">
                        <PageSpeedAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">First understand the number</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            A Lighthouse score is a weighted summary of one simulated test, under one device profile,
                            at one moment. It is not a property your site owns and not a threshold Google publishes.
                            Read it as a diagnostic that points at work, then verify the work against what real
                            visitors experienced. Five things follow from that.
                        </p>
                        <BlogList
                            items={[
                                "Lighthouse labels 90 to 100 as good, 50 to 89 as needing improvement, and below 50 as poor. That band is Lighthouse's own verdict on its own weighted diagnostic, and that is the whole of what it means. Google does not publish 70, 90 or 100 as a direct ranking requirement.",
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

                    <BlogHeader id="run-the-test">Run the test before you read the rest</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            PageSpeed Insights is free and needs no account. Open{" "}
                            <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">pagespeed.web.dev</a>,
                            enter the exact public URL of the page you care about, and press Analyze. Read the Mobile
                            tab first, because that is the profile most reporting is based on. Two numbers come back
                            and they are not the same thing: the field data at the top, drawn from real Chrome visitors
                            over a trailing window, and the Lighthouse lab result below it, simulated on one throttled
                            device in one moment. A page with no eligible field data shows the lab result only. Note
                            which of the two you are looking at before you quote a score to anyone.
                        </BlogText>
                    </div>

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
                    <BlogText>
                        A mobile cold-cache run with consent accepted is not comparable to a desktop warm-cache run before tags load. Keep profiles separate and report variation instead of selecting the best run. Four things go in the baseline, and the run count is the one that makes a later comparison mean anything.
                    </BlogText>
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
                    <BlogText>
                        Identify the actual LCP element in the trace instead of assuming it is the hero image. Once you know what it is, the work is making it discoverable early and delivering it efficiently: right size, modern format, never lazy-loaded when it is above the fold, and nothing render-blocking sitting in front of it.
                    </BlogText>
                    <BlogList
                        items={[
                            "Identify the actual LCP element in the trace instead of assuming it is the hero image.",
                            "Serve an appropriately sized, compressed asset in a modern format such as AVIF or WebP, and preserve visual quality.",
                            "Avoid lazy-loading the above-the-fold LCP image and ensure the browser can discover it promptly.",
                            "Reduce render-blocking work that delays the element and verify responsive candidates.",
                        ]}
                    />
                    <BlogText>
                        Render-blocking is worth measuring rather than guessing at. Open the Coverage panel in
                        devtools, record a reload, and read the unused-bytes column for each stylesheet and script.
                        That gives you your own number for your own page, which is more useful than any published
                        average: it tells you whether the win is splitting a stylesheet, inlining what the first screen
                        actually needs, or deleting a file nobody has referenced in a year. Re-record after the change
                        and compare against the figure you wrote down.
                    </BlogText>
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
                    <BlogList
                        items={[
                            "Code splitting: ship the JavaScript this route needs, not the bundle every route needs.",
                            "Tree shaking: drop library exports the build can prove are never reached.",
                            "Dynamic imports: load a modal, editor, map or carousel when it is opened, not on first paint.",
                            "Server rendering: send HTML for anything that does not need to be interactive on the client.",
                        ]}
                    />
                    <BlogText>
                        Each of these is checkable in your own build output rather than on someone&apos;s word. Print
                        the per-route bundle sizes your framework reports at build time, note them, make one change,
                        and print them again. If the number did not move, the technique was not applied where you
                        thought it was.
                    </BlogText>

                    <BlogHeader>Step 6: stabilize layout</BlogHeader>
                    <BlogText>
                        Layout shifts come from space that was not reserved and content that arrived late. Reserve dimensions for images, video, embeds and dynamic components, never insert banners or consent UI above existing content without reserved space, and exercise the late states deliberately while recording CLS.
                    </BlogText>
                    <BlogList
                        items={[
                            "Reserve dimensions or aspect ratio for images, video, embeds and dynamic components.",
                            "Do not insert banners, consent UI or errors above existing content without reserved space.",
                            "Use stable font-loading behavior and verify fallback-to-final font changes.",
                            "Exercise late content, validation, loading, success and error states while recording CLS.",
                        ]}
                    />
                    <BlogText>
                        Fonts are worth checking yourself rather than taking on trust. Open the Network panel, filter
                        to Font, and reload. If the request goes to an origin you do not control, the browser has to
                        resolve and connect to that host before a single glyph arrives, and it cannot start until the
                        stylesheet referencing the font has parsed. Self-hosting the file removes that dependency
                        chain and lets you preload it. Then watch the text on a throttled reload: if it is invisible
                        until the font lands you have a flash of invisible text, and if it appears in a fallback and
                        then reflows you have a layout shift. Which of the two you get is decided by font-display, and
                        the second is usually the better trade, provided the fallback is metric-matched.
                    </BlogText>

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
                    <BlogText>
                        Re-run the unchanged acceptance profiles three times per named page before anything ships, then check that the score work did not break functionality, accessibility, analytics or consent. Record the release version, the tool version, the reports, the exclusions and the known variance, because a number without those is not reproducible.
                    </BlogText>
                    <BlogList
                        items={[
                            "Run the unchanged acceptance profiles three times for every named page and profile.",
                            "Test functionality, accessibility, analytics and consent so score work did not break the journey.",
                            "Record release SHA or version, tool version, reports, exclusions and known variance.",
                            "Add budget or regression checks appropriate to the project and monitor field data after release.",
                        ]}
                    />

                    <BlogHeader id="is-70-good-enough">Is 70 good enough? And is the tool even reliable?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            There is no score you are required to reach. The band is Lighthouse grading its own
                            weighted diagnostic, and Google publishes no number as a ranking requirement, so
                            &ldquo;is 70 good enough&rdquo; cannot be answered from the score alone. The question that
                            can be answered is whether your real visitors are having a good experience, and that is a
                            different measurement: field Core Web Vitals at the 75th percentile, not a lab run.
                        </BlogText>
                    </div>
                    <BlogText>
                        The two can disagree in both directions, which is the part that confuses people. A page can
                        sit at 70 in the lab and pass its field vitals, because the simulated device and network in
                        the test are harsher than what your actual audience uses. A page can also score in the
                        nineties and fail in the field, because the lab run never met your cookie banner, your logged
                        in state, your third-party chat widget or your slowest market. If you have to choose which
                        number to act on, act on the field data and use the lab score to find out why.
                    </BlogText>
                    <BlogText>
                        That also answers the reliability question. The tool is reliable at what it does, which is
                        running one simulated test and telling you what it found. It is not measuring your visitors,
                        and it will move between runs on the same unchanged page, which is why this guide asks for
                        three runs per profile and reports the variation rather than the best result. A single score
                        screenshot, yours or a vendor&apos;s, is one sample of a distribution presented as a fact.
                    </BlogText>

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
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
