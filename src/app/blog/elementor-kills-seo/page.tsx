import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Layers3, SearchCheck } from "lucide-react";
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
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "elementor-kills-seo";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/elementor-kills-seo";
const title = "Does Elementor Hurt SEO? A 2026 Evidence Guide";
const description =
    "Elementor does not carry one SEO penalty or PageSpeed score. Learn how to test rendering, Core Web Vitals, DOM, assets, plugins, and search performance before optimizing or migrating.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/elementor-kills-seo" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Elementor SEO",
        "Elementor slow",
        "does Elementor hurt SEO",
        "Elementor Core Web Vitals",
        "Elementor PageSpeed",
        "Elementor performance",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-10",
        modifiedTime: "2026-08-07",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/elementor-kills-seo")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/elementor-kills-seo"),
            datePublished: "2026-03-10",
            dateModified: "2026-08-07",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Technical SEO", "Search Console", "Structured data", "Website migration"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "WordPress",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 2025,
            timeRequired: "PT10M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: [
                {
                    "@type": "CreativeWork",
                    name: "Elementor: Improve performance features",
                    url: "https://elementor.com/help/what-are-performance-experiments/",
                },
                // Google and web.dev documentation is verified before publication but is deliberately
                // not listed as a page source and not emitted here. Those claims are attributed in
                // prose instead. Do not reintroduce developers.google.com URLs into this array.
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#webpage",
            url: "https://www.pandacodegen.com/blog/elementor-kills-seo",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#breadcrumb" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Does Elementor Hurt SEO?", item: canonicalUrl },
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

export default function ElementorSeoPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal md:pb-20 md:pt-32">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Does Elementor Hurt SEO?", href: "/blog/elementor-kills-seo" },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress and SEO</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Does Elementor Hurt SEO? <span className="italic text-cognac">Test the Site, Not the Label</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Elementor does not carry one Google penalty, PageSpeed score, or traffic loss. It can
                            contribute work to the page, while the theme, plugins, hosting, media, content, links, and
                            third parties also shape performance and search results.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Elementor and Google primary guidance.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            Disclosure: PandaCodeGen sells migrations off WordPress and page-builder sites, so we have
                            a commercial interest in the migrate side of this question. That is why the sections below
                            put optimizing in place ahead of rebuilding, and publish no score, penalty or traffic
                            figure for Elementor.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="March 10, 2026"
                        readTime="5 min read"
                        bio="Hassan leads measured WordPress performance diagnostics and search-sensitive migrations."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Does Elementor hurt SEO? Not by itself, and not in a way that shows up as a penalty. It
                            adds work to the page, which can affect performance, and performance is one input among
                            many in how a page ranks. What decides your result is what your own templates ship, which
                            is measurable. Five things follow from that.
                        </p>
                        <BlogList
                            items={[
                                "Elementor does not automatically kill SEO, and one demo test cannot establish platform-wide ranking damage.",
                                "Look at what arrives before JavaScript runs and what arrives after, then the indexing rules, the content, the metadata, the links, the structured data, and your real-user Core Web Vitals.",
                                "Elementor documents stable and experimental performance features for code, DOM, caching, image loading, and unused Gutenberg assets.",
                                "Measure the actual pages under the conditions real visitors have, then decide whether to optimize, rebuild lighter on WordPress, or move.",
                                "A faster replacement does not guarantee rankings, traffic, conversions, or revenue.",
                            ]}
                        />
                    </section>

                    <BlogHeader>Why “Elementor kills SEO” is the wrong diagnosis</BlogHeader>
                    <BlogText>
                        Search performance depends on whether Google can reach the page, render it, index it, work out what it is about, and rank a
                        useful page for a query. Elementor can affect the generated markup and frontend workload, but it
                        does not decide the content&apos;s relevance, backlinks, canonical choice, internal linking,
                        search demand, competition, or every plugin&apos;s behavior. Plugin work has its own method in
                        our{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={sourceLinkClass}>WordPress plugin audit guide</Link>.
                    </BlogText>
                    <BlogText>
                        A single lab test can show what happened on one page under one profile. It cannot prove that all
                        Elementor pages ship the same bytes, use the same DOM, or lose a fixed number of positions.
                        Before-and-after traffic can also move because content, links, seasonality, campaigns,
                        competitors, indexing, and Google systems changed at the same time. Our{" "}
                        <Link href="/blog/wordpress-traffic-drop-speed" className={sourceLinkClass}>WordPress traffic drop diagnostic</Link>{" "}
                        works through those causes in order.
                    </BlogText>

                    <BlogHeader>What Elementor itself says about performance</BlogHeader>
                    <BlogText>
                        Elementor&apos;s June 19, 2026 help page documents features intended to reduce code and optimize
                        the DOM. Stable options listed there include optimized image loading, optimized Gutenberg
                        loading, and lazy-loaded background images. The page also identifies features such as optimized
                        control loading and element caching as experimental at the review date.
                    </BlogText>
                    <BlogText>
                        That source is useful for finding settings, not proving a business outcome. Feature status and
                        compatibility can change. Test changes on staging, record the Elementor and WordPress versions,
                        and verify the affected templates and interactions before production.
                    </BlogText>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Search output", body: "Status, robots, canonical, metadata, headings, content, internal links, structured data, and rendered HTML." },
                            { icon: Gauge, title: "User experience", body: "Field LCP, INP, and CLS where available, plus repeated lab traces for diagnosis." },
                            { icon: Layers3, title: "Implementation", body: "Theme, containers, widgets, plugins, media, fonts, scripts, hosting, cache, consent, and page state." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-700">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>How a builder adds work to a page</BlogHeader>
                    <BlogText>
                        The useful question is not whether Elementor is heavy in the abstract but which of these
                        behaviors your own pages exhibit. Each one is observable in a browser trace on your site, and
                        each has a different fix.
                    </BlogText>
                    <BlogList
                        items={[
                            "Framework assets requested regardless of route: the builder stylesheet and script, plus the libraries behind carousels, dialogs, scroll effects and share buttons, can be enqueued on pages that contain none of those widgets. Load a plain text page, open the network panel and see which builder handles are still fetched.",
                            "Generated per-element CSS: styling can be emitted per element and per breakpoint rather than as reusable classes, which is worth checking because it changes how much unused CSS removal can recover.",
                            "Nested container markup: each section, column and widget adds wrapper elements, so count the nodes on your own template rather than assuming a figure. Count them with document.querySelectorAll on a builder template and on a plain template of the same site and compare.",
                            "Competing specificity layers: builder defaults, theme styles, kit settings and per-element overrides all resolving on every render, which shows up as style and layout time in the Performance panel rather than as bytes.",
                            "Add-on packs and Pro widgets: third-party widget libraries register their own assets on top of the builder, and are easy to miss in an audit because they are not listed with the builder.",
                        ]}
                    />
                    <BlogText>
                        Note that the fix for the first item is usually a setting rather than a migration. The
                        performance features Elementor documents exist precisely to make asset loading more conditional,
                        so check what your version exposes and what state each feature is in before concluding that the
                        overhead is fixed.
                    </BlogText>

                    <BlogHeader id="heading-structure">The one SEO defect that has nothing to do with speed</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Almost every argument about builders and SEO is an argument about page weight. There is a
                            second defect that visual builders make easy and that no amount of caching will fix:{" "}
                            <BlogHighlight>broken heading hierarchy</BlogHighlight>. In a visual editor you choose a
                            heading by how large it looks, so a designer who wants smaller text picks H4, and the page
                            ships with an outline that reads H1 → H4 → H2. The page looks correct and its structure is
                            not.
                        </BlogText>
                    </div>
                    <BlogText>
                        This matters more in 2026 than it did when the advice was written, because extractive systems
                        read the outline to decide what a section answers. A heading level is a claim about what
                        contains what. Check it in about a minute, on your five most important routes:
                    </BlogText>
                    <BlogList
                        items={[
                            "Open the page and view the outline, not the design: in Chrome DevTools, run document.querySelectorAll('h1,h2,h3,h4,h5,h6') in the console and read the tag names in order.",
                            "Confirm exactly one H1 per page, and that it says what the page is about rather than repeating the site name.",
                            "Look for skipped levels. H2 followed by H4 is the common one, and it is nearly always a font-size decision rather than a structural one.",
                            "Check that section headings describe the section. A heading that reads as a design label rather than an answer gives an extractor nothing to lift.",
                            "Fix by changing the tag and restyling with CSS, not by changing the tag to match the size you wanted.",
                        ]}
                    />
                    <BlogText>
                        Two reasons this belongs near the top of an Elementor audit rather than the bottom. It is{" "}
                        <strong>free to fix and does not require touching the builder&apos;s output or the theme</strong>,
                        unlike most of the weight problems below. And it is the part of the &quot;builders hurt
                        SEO&quot; claim that is actually true — not because Elementor emits bad markup, but because a
                        visual canvas invites a structural decision to be made on visual grounds. That is a workflow
                        problem, and workflow problems survive a migration if nobody names them.
                    </BlogText>

                    <BlogHeader>Run a route-level Elementor audit</BlogHeader>
                    <BlogText>
                        Choose representative routes rather than testing only the homepage. Include a landing page,
                        article or archive, service or product template, and a form or transaction path when those
                        patterns matter. Test mobile and desktop separately.
                    </BlogText>
                    <BlogList
                        items={[
                            "Check whether the initial response and rendered DOM contain the main content, links, metadata, canonical, and schema.",
                            <>{"Record URL-level or origin-level CrUX field data where available and do not relabel a "}<Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>{" run as field evidence."}</>,
                            "Repeat lab tests with the same device, network, cache, consent, location, authentication, and browser version.",
                            "Identify the actual LCP element, long tasks and slow interactions, layout-shift sources, request waterfall, and server response.",
                            "Measure DOM depth and element count by template, then inspect nesting and widgets rather than assigning one generic Elementor multiplier.",
                            "Inventory plugins and third-party scripts with purpose, owner, bytes, main-thread cost, data flow, and removal risk.",
                            "Compare Search Console pages and queries around releases while checking content, indexing, links, demand, and other concurrent changes.",
                        ]}
                    />
                    <BlogText>
                        Field metric definitions are in our{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explainer</Link>, and
                        what page experience can and cannot account for is covered in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={sourceLinkClass}>how website speed affects SEO</Link>.
                    </BlogText>

                    <BlogHeader>Optimize in place before assuming a migration</BlogHeader>
                    <BlogText>
                        Start with the measured contributor. Resize and prioritize the LCP image, reserve media
                        dimensions, reduce unnecessary nesting and widgets, remove unused plugins, control fonts and
                        embeds, improve cache and server behavior, and use documented Elementor performance features
                        where they are compatible. Change one meaningful group at a time so the result is attributable.
                    </BlogText>
                    <BlogText>
                        If the builder itself turns out to be the constraint on a given template, the ladder between
                        keeping it and leaving WordPress has rungs on it. Core blocks with no builder loaded is the
                        smallest step and often enough for a static page. A lightweight theme generally ships less markup and CSS than a multipurpose theme bundled with a builder, and the comparison worth making is on your own templates rather than on any recommendation.  A custom theme
                        or block templates give full control of the output while keeping the editorial workflow. Each of
                        those is cheaper and lower risk than a platform change, and each should be measured on your own
                        templates rather than assumed.
                    </BlogText>
                    <BlogText>
                        An optimization is successful when the important routes and journeys meet the agreed evidence
                        threshold without creating visual, accessibility, tracking, or functional regressions. A plugin
                        that raises one lab score but breaks consent or a lead form is not a successful fix. The broader
                        repair order is in our{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className={sourceLinkClass}>evidence-led methods for fixing a slow WordPress site</Link>.
                    </BlogText>

                    <BlogHeader>When a rebuild or migration becomes reasonable</BlogHeader>
                    <BlogText>
                        Consider a lighter WordPress implementation when editors and required WordPress workflows still
                        fit, but the current builder structure is the constraint. Consider a different architecture
                        when required performance, security, integration, ownership, or operating outcomes remain
                        blocked after measured fixes, and the continuing workaround cost exceeds the replacement case.
                    </BlogText>
                    <BlogText>
                        Compare total costs, not just framework names: discovery, design, content, URL migration,
                        integrations, accessibility, security, QA, hosting, vendor services, training, launch,
                        maintenance, and exit. A custom Next.js site provides more implementation control, but poor
                        code or uncontrolled third parties can still make it slow. Compare the two operating models in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className={sourceLinkClass}>WordPress and Next.js side by side</Link>, and
                        the ownership side in our{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={sourceLinkClass}>three-year cost model for WordPress and custom code</Link>.
                    </BlogText>

                    <BlogHeader>SEO controls if you leave Elementor</BlogHeader>
                    <BlogText>
                        These six controls are what keeps search performance intact across a rebuild, and they reduce
                        avoidable technical risk rather than guaranteeing anything. Nobody controls whether rankings
                        hold, how fast a site is recrawled, or when traffic returns, so treat the list as the work you
                        can be held to and not as an outcome you have been promised.
                    </BlogText>
                    <BlogList
                        items={[
                            "Export the current URL, status, canonical, metadata, headings, content, internal-link, media, schema, and sitemap inventory.",
                            "Keep valuable URLs stable where practical and create page-level redirects for every approved change.",
                            "Compare rendered old and new outputs before launch, including robots directives and structured data.",
                            "Crawl staging and production, test redirects and error routes, and keep a rollback path.",
                            "Annotate launch and monitor Search Console pages, queries, indexing, and crawl problems by device and country.",
                        ]}
                    />
                    <BlogText>
                        These controls reduce avoidable technical risk. They do not guarantee ranking retention,
                        improvement, or a fixed recovery period because search engines control those outcomes. We take
                        that question apart in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>will migrating my website hurt my SEO</Link>, and
                        the full sequence sits in the{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className={sourceLinkClass}>step-by-step WordPress to Next.js migration guide</Link>.
                    </BlogText>
                    <BlogText>
                        What we deliver is described on the{" "}
                        <Link href="/services/wordpress-migration" className={sourceLinkClass}>WordPress migration service page</Link>, with
                        the{" "}
                        <Link href="/blog/wordpress-migration-cost" className={sourceLinkClass}>scope and tiers behind a migration quote</Link>{" "}
                        and current planning tiers on the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>.
                    </BlogText>

                    <BlogHeader>Related reading</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><Link href="/blog/divi-theme-slow" className={sourceLinkClass}>Diagnosing a slow Divi build</Link></li>
                        <li><Link href="/work/mycustompatches" className={sourceLinkClass}>A dated WordPress migration we delivered</Link></li>
                    </ul>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><a href="https://elementor.com/help/what-are-performance-experiments/" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Elementor: current performance features and status</a></li>
                        <li><a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Central: Core Web Vitals</a></li>
                        <li><a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Central: page experience</a></li>
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your Elementor migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will inspect representative routes, search-sensitive URLs, plugins, third parties,
                            performance evidence, editor needs, and ownership constraints before recommending
                            optimization, a WordPress rebuild, or a migration.
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
