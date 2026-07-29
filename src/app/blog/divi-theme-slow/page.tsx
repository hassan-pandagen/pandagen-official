import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Search, Wrench } from "lucide-react";
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
const PageSpeedAnimation = dynamicImport(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "divi-theme-slow";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/divi-theme-slow";
const title = "Divi Theme Slow? A 2026 Diagnostic and Fix Guide";
const description =
    "Diagnose a slow Divi site, test Divi 5 and in-place fixes, and decide whether to optimize, rebuild in WordPress, or migrate without invented score or revenue claims.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/divi-theme-slow" },
    keywords: [
        "Divi theme slow",
        "Divi performance 2026",
        "why is Divi slow",
        "Divi Core Web Vitals",
        "Divi 5 performance",
        "Divi speed optimization",
        "migrate from Divi",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-08",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/divi-theme-slow")],
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
            image: ogImageUrlForPath("/blog/divi-theme-slow"),
            datePublished: "2026-04-08",
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
            articleSection: "WordPress",
            inLanguage: "en-US",
            keywords: ["Divi", "Divi 5", "WordPress performance", "Core Web Vitals", "website migration"],
            citation: [
                {
                    "@type": "WebPage",
                    name: "Elegant Themes: Divi 5 official release",
                    url: "https://www.elegantthemes.com/blog/theme-releases/divi-5-official",
                },
                {
                    "@type": "WebPage",
                    name: "Elegant Themes: Divi 5 Update Status",
                    url: "https://help.elegantthemes.com/en/articles/9973580-divi-5-update-status",
                },
                {
                    "@type": "WebPage",
                    name: "Elegant Themes: Divi 5 Migrator System",
                    url: "https://help.elegantthemes.com/en/articles/9799364-what-is-the-divi-5-migrator-system",
                },
                {
                    "@type": "WebPage",
                    name: "Elegant Themes: Divi performance options",
                    url: "https://www.elegantthemes.com/documentation/divi/theme-options/",
                },
                {
                    "@type": "WebPage",
                    name: "Google Search Central: Core Web Vitals",
                    url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
                },
                {
                    "@type": "WebPage",
                    name: "Google Search Central: Page experience",
                    url: "https://developers.google.com/search/docs/appearance/page-experience",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Divi Theme Slow", item: canonicalUrl },
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

export default function DiviThemeSlowPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal md:pb-20 md:pt-32">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Divi Theme Slow", href: "/blog/divi-theme-slow" },
                        ]}
                    />

                    <Link
                        href="/blog"
                        className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Divi Theme Slow? A <span className="italic text-cognac">2026 Diagnostic and Fix Guide</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Divi sites do not share one PageSpeed score, conversion loss, or migration answer. Measure
                            the real routes, identify the responsible work, test Divi 5 and in-place fixes, then compare
                            the remaining cost with a lighter WordPress build or controlled migration.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Elegant Themes and Google primary documentation.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="April 8, 2026"
                        readTime="11 min read"
                        bio="Hassan works on measured WordPress migrations, performance diagnostics, and testable delivery criteria."
                    />

                    <div className="my-10">
                        <PageSpeedAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The answer in one minute</h2>
                        <BlogList
                            items={[
                                "Do not diagnose Divi from one Lighthouse score or a generic theme benchmark.",
                                "Check field Core Web Vitals where available, then repeat controlled lab tests on representative templates.",
                                "Separate theme and compatibility-mode work from hosting, plugins, media, fonts, tags, database, cache, and application behavior.",
                                "Divi 5 officially left beta on February 26, 2026, but legacy or unsupported modules can still load backward compatibility mode.",
                                "Optimize first when measured bottlenecks are removable. Migrate when required outcomes remain blocked or the continuing workaround cost is no longer sensible.",
                            ]}
                        />
                    </section>

                    <BlogHeader>Why a Divi site can be slow</BlogHeader>
                    <BlogText>
                        A Divi page is the result of a complete WordPress system, not the theme alone. The visitor may
                        receive HTML generated by PHP and database queries, Divi assets, child-theme code, plugin code,
                        media, fonts, analytics, consent controls, chat, advertising tags, embeds, and cache behavior.
                        Any combination can affect loading, responsiveness, and visual stability. Our{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={sourceLinkClass}>WordPress plugin audit guide</Link>{" "}
                        covers how to attribute that work to a named component.
                    </BlogText>

                    <div className="my-8 grid gap-4 sm:grid-cols-2">
                        {[
                            {
                                icon: Gauge,
                                title: "Loading path",
                                body: "Server response, cache misses, database work, render-blocking CSS, hero discovery, image size, fonts, and third-party connections can delay LCP.",
                            },
                            {
                                icon: Wrench,
                                title: "Interaction path",
                                body: "Long JavaScript tasks, event handlers, animations, plugin behavior, DOM complexity, and application logic can affect INP.",
                            },
                            {
                                icon: Search,
                                title: "Visual stability",
                                body: "Missing dimensions, late fonts, injected banners, embeds, ads, and dynamic modules can contribute to CLS.",
                            },
                            {
                                icon: CheckCircle2,
                                title: "Operational state",
                                body: "Divi version, compatibility mode, plugin versions, cache state, consent choice, logged-in state, and page template all change the result.",
                            },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-700">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogText>
                        This is why claims such as &quot;Divi always scores 64,&quot; &quot;caching adds 15 points,&quot;
                        or &quot;Divi cannot exceed 80&quot; are not defensible without a named sample and method. A
                        theme demo, a client route, and a plugin-heavy store are different test subjects.
                    </BlogText>

                    <BlogHeader>What changed with Divi 5</BlogHeader>
                    <BlogText>
                        Elegant Themes officially ended the Divi 5 beta on February 26, 2026. As of this article&apos;s
                        July 24 review, its official update log lists Divi 5.9.0 released July 9, 2026. Divi 5 uses a
                        newer framework and has continued to receive features, improvements, and bug fixes. That
                        current status replaces the old claim that Divi 5 is still a beta preview.
                    </BlogText>
                    <BlogText>
                        Existing sites still need a careful upgrade. Elegant Themes instructs owners to back up the
                        site, test on staging, run the migrator, and inspect the result. Pages containing a legacy Divi
                        4 module or an unsupported third-party module can run in backward compatibility mode. The vendor
                        states that those pages do not receive all Divi 5 performance improvements.
                    </BlogText>
                    <BlogText>
                        The practical question is therefore not simply &quot;Are we on Divi 5?&quot; Record which pages
                        migrated, which modules remain in compatibility mode, which custom CSS changed, and which
                        third-party products support the new architecture. Test business-critical page states before
                        production.
                    </BlogText>

                    <BlogHeader>How to measure the problem correctly</BlogHeader>
                    <BlogText>
                        Start with the routes that represent both traffic and architecture: homepage, main landing
                        template, service or product template, article template, contact or lead form, and any
                        transaction-critical flow. A homepage-only test can miss the template that actually needs work.
                    </BlogText>
                    <BlogList
                        items={[
                            "Capture PageSpeed Insights field data when URL-level or origin-level CrUX data is available.",
                            "Record whether the evidence is mobile or desktop and whether it describes a URL or the origin.",
                            "Run repeated Lighthouse tests with the same browser, version, device, network, geography, consent, cache, and authentication state.",
                            "Inspect the LCP element, long tasks and interaction traces, layout-shift sources, request waterfall, unused resources, and server timing.",
                            "Measure a logged-out visitor path; logged-in WordPress administration can bypass caches and create a different result.",
                            "Save the raw reports and a release timestamp so later tests are comparable.",
                        ]}
                    />
                    <BlogText>
                        Google&apos;s current good field thresholds are LCP within 2.5 seconds, INP under 200
                        milliseconds, and CLS under 0.1 at the 75th percentile. These are experience targets.
                        Passing them does not guarantee a ranking position, and failing them does not reveal a fixed
                        revenue loss. Each metric is defined in our{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explainer</Link>.
                    </BlogText>

                    <BlogHeader>A Divi optimization order that produces evidence</BlogHeader>
                    <BlogText>
                        Change one meaningful group at a time and re-test. If ten plugins and a CDN are added at once,
                        the team cannot tell which change helped, which did nothing, or which created a new defect.
                    </BlogText>
                    <BlogList
                        items={[
                            "Update WordPress, Divi, the child theme, and required extensions through a staged and recoverable process.",
                            "If moving to Divi 5, run its compatibility scan and inventory every legacy or unsupported module before migration.",
                            "Review Divi's documented Dynamic Module Framework, Dynamic CSS, Critical CSS, Dynamic JavaScript Libraries, icons, fonts, and stylesheet settings.",
                            "Measure server response, cache hit behavior, database queries, background work, and PHP resource constraints before blaming frontend code.",
                            "Resize and encode images for their rendered use, give media dimensions, and avoid loading the largest asset late.",
                            "Remove unused plugins and tags only after confirming ownership, business purpose, data flow, and rollback.",
                            "Delay or replace expensive embeds and third-party scripts when the business requirement allows it.",
                            "Retest representative routes and forms after every group of changes, including consent and error states.",
                        ]}
                    />
                    <BlogText>
                        A cache or CDN can reduce repeated delivery work, but it does not fix every cause. It cannot make
                        a required third-party script smaller, correct a slow interaction handler, reserve missing
                        layout space, or remove a legacy module. Conversely, a migration is excessive when an oversized
                        hero image or one unnecessary tag is the measured problem. The same order applied to WordPress
                        more broadly is set out in our{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className={sourceLinkClass}>evidence-led methods for fixing a slow WordPress site</Link>.
                    </BlogText>

                    <BlogHeader id="what-each-fix-addresses">What each common fix actually addresses</BlogHeader>
                    <BlogText>
                        The usual advice is a shopping list without a diagnosis, which is how people spend money in the
                        wrong order. Costs below are the published vendor ranges at the time of writing and move around,
                        so check the current price before buying. We deliberately do not publish a &ldquo;points gained&rdquo;
                        column: the gain depends entirely on which bottleneck your site actually has, and a fix aimed at
                        the wrong bottleneck returns close to nothing.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Fix</th>
                                    <th className="p-4">Typical cost</th>
                                    <th className="p-4">What it actually addresses</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Caching plugin (WP Rocket, LiteSpeed)</td><td className="p-4">~$49 to $199/year</td><td className="p-4">Repeated server assembly on cacheable pages. Does nothing for logged-in views, cart or checkout, or for the size of what you ship.</td></tr>
                                <tr><td className="p-4 font-bold">CDN (Cloudflare, BunnyCDN)</td><td className="p-4">~$20 to $200/month</td><td className="p-4">Distance between user and server. Helps most for geographically distant traffic; does not reduce page weight or script execution.</td></tr>
                                <tr><td className="p-4 font-bold">Image optimisation plugin</td><td className="p-4">~$50 to $150/year</td><td className="p-4">Oversized media and missing modern formats. Often the single biggest win on a Divi site, and the easiest to verify.</td></tr>
                                <tr><td className="p-4 font-bold">Faster hosting plan</td><td className="p-4">~$50 to $300/month</td><td className="p-4">Server response time and database query speed. Only helps if your measurement shows a slow TTFB.</td></tr>
                                <tr><td className="p-4 font-bold">Developer optimisation work</td><td className="p-4">~$500 to $2,000</td><td className="p-4">Module bloat, nesting depth, render-blocking assets and third-party sequencing — the causes a plugin cannot reach.</td></tr>
                                <tr><td className="p-4 font-bold">Frontend rebuild</td><td className="p-4">Quoted per scope</td><td className="p-4">The rendering and delivery model itself. Justified only when the measurement shows the ceiling is architectural, not incidental.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="warning" label="Buy in diagnosis order">
                        Run the measurement section above first, then buy the row that matches what it found. Stacking a
                        caching plugin, a CDN and a faster host against an image-weight problem is the most common way to
                        spend several hundred dollars and move almost nothing.
                    </InsightBox>

                    <BlogHeader>Should you keep Divi, rebuild in WordPress, or migrate?</BlogHeader>
                    <div className="my-8 overflow-hidden rounded-xl border border-stone-200">
                        <div className="grid bg-stone-100 text-sm font-bold text-charcoal sm:grid-cols-3">
                            <div className="p-4">Option</div>
                            <div className="p-4">When it can fit</div>
                            <div className="p-4">Evidence to require</div>
                        </div>
                        {[
                            [
                                "Optimize the existing site",
                                "Editors are productive, required modules are supported, and measured issues are removable.",
                                "Before-and-after route tests, regression checks, costs, and a maintenance owner.",
                            ],
                            [
                                "Move to Divi 5",
                                "The current site is on Divi 4 and the compatibility report supports a controlled upgrade.",
                                "Staging backup, migrator report, legacy-module list, visual QA, forms, and rollback test.",
                            ],
                            [
                                "Rebuild within WordPress",
                                "WordPress workflows or plugins remain valuable, but the current builder or template is the constraint.",
                                "Feature parity, editor workflow, URL plan, measured performance, and extension governance.",
                            ],
                            [
                                "Migrate to another architecture",
                                "Required performance, security, integration, ownership, or operating outcomes remain blocked at unacceptable cost.",
                                "Total cost, dependency map, URL inventory, acceptance tests, cutover, rollback, and support plan.",
                            ],
                        ].map(([option, fit, evidence]) => (
                            <div key={option} className="grid border-t border-stone-200 text-sm sm:grid-cols-3">
                                <div className="p-4 font-semibold text-charcoal">{option}</div>
                                <div className="p-4 text-stone-700">{fit}</div>
                                <div className="p-4 text-stone-700">{evidence}</div>
                            </div>
                        ))}
                    </div>

                    <BlogText>
                        A custom Next.js build is not automatically faster, safer, or cheaper. It offers a different
                        control surface and dependency model. The implementation, data, third parties, hosting, and
                        operating process still determine the outcome. Compare the two operating models in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className={sourceLinkClass}>WordPress and Next.js side by side</Link>, and
                        the ownership side in our{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={sourceLinkClass}>three-year cost model for WordPress and custom code</Link>.
                    </BlogText>

                    <BlogHeader>How to estimate the business cost</BlogHeader>
                    <BlogText>
                        Do not apply a survey&apos;s average loss or another brand&apos;s conversion lift to your
                        business. The deleted version of this page used an unsupported fixed annual-loss estimate and
                        third-party case-study percentages. Those sources did not prove what one Divi site was losing.
                    </BlogText>
                    <BlogText>
                        Use first-party evidence instead. Define the affected journey, baseline sessions, conversion
                        event, value or margin, device mix, and current performance. Segment visitors exposed to the
                        slow route. Annotate design, price, offer, campaign, and checkout changes. After an optimization
                        or migration, compare the same definitions and report uncertainty. This can support a business
                        decision without pretending speed was the only cause. The evidence and the limits of the
                        speed-to-search relationship are covered in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={sourceLinkClass}>how website speed affects SEO</Link>, and
                        a fall in traffic has its own{" "}
                        <Link href="/blog/wordpress-traffic-drop-speed" className={sourceLinkClass}>WordPress traffic drop diagnostic</Link>.
                    </BlogText>

                    <BlogHeader>SEO controls for a Divi migration</BlogHeader>
                    <BlogText>
                        Moving away from Divi can reduce avoidable search risk when the migration keeps useful content
                        and signals intact. It cannot guarantee stable rankings or a recovery date because Google
                        controls crawling, indexing, and ranking. We look at that question directly in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>will migrating my website hurt my SEO</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Export a dated inventory of indexable URLs, status codes, canonicals, titles, descriptions, headings, structured data, internal links, images, and sitemap membership.",
                            "Keep valuable URLs stable where practical and map every changed URL to the most relevant replacement, not automatically to the homepage.",
                            "Render and compare the new HTML, metadata, content, links, robots controls, and schema before cutover.",
                            "Crawl the staging and production outputs, test redirect chains, and preserve access to the old system for rollback.",
                            "Annotate launch, submit the correct sitemap, and monitor Search Console indexing, queries, pages, and crawl failures.",
                        ]}
                    />

                    <BlogText>
                        The full sequence for a controlled move is in our{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className={sourceLinkClass}>step-by-step WordPress to Next.js migration guide</Link>. What
                        we deliver is described on the{" "}
                        <Link href="/services/wordpress-migration" className={sourceLinkClass}>WordPress migration service page</Link>, with
                        the{" "}
                        <Link href="/blog/wordpress-migration-cost" className={sourceLinkClass}>scope and tiers behind a migration quote</Link>{" "}
                        and current planning tiers on the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>.
                    </BlogText>

                    <BlogHeader>Related reading</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><Link href="/blog/elementor-kills-seo" className={sourceLinkClass}>Testing Elementor pages for search and speed problems</Link></li>
                        <li><Link href="/work/mycustompatches" className={sourceLinkClass}>A dated WordPress migration we delivered</Link></li>
                    </ul>

                    <BlogHeader>Primary sources used for this guide</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><a href="https://www.elegantthemes.com/blog/theme-releases/divi-5-official" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Elegant Themes: Divi 5 official release and migration guidance</a></li>
                        <li><a href="https://help.elegantthemes.com/en/articles/9973580-divi-5-update-status" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Elegant Themes: current Divi 5 update log</a></li>
                        <li><a href="https://help.elegantthemes.com/en/articles/9799364-what-is-the-divi-5-migrator-system" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Elegant Themes: Divi 5 Migrator and compatibility behavior</a></li>
                        <li><a href="https://www.elegantthemes.com/documentation/divi/theme-options/" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Elegant Themes: documented Divi performance settings</a></li>
                        <li><a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Central: Core Web Vitals thresholds</a></li>
                        <li><a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Google Search Central: page experience and ranking limits</a></li>
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your Divi migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will test representative routes, inventory modules and integrations, preserve
                            search-sensitive URLs, and compare in-place optimization with a lighter rebuild. You get
                            the evidence and scope before choosing a platform.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white transition-colors hover:bg-cognac/90">
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
