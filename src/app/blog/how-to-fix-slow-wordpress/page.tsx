import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, DatabaseZap, Gauge, PlugZap } from "lucide-react";
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

const postId = "how-to-fix-slow-wordpress";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How to Fix a Slow WordPress Site: 8 Evidence-Led Methods";
const description =
    "Profile slow WordPress routes, isolate server, cache, database, theme, plugin, media and third-party work, then decide whether optimization or migration is justified.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "how to fix slow WordPress",
        "WordPress site slow",
        "speed up WordPress",
        "WordPress performance optimization",
        "WordPress Core Web Vitals",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-17",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-fix-slow-wordpress")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress: performance optimization", url: "https://developer.wordpress.org/advanced-administration/performance/optimization/" },
    { name: "WordPress: site monitoring guidance", url: "https://developer.wordpress.org/advanced-administration/security/monitoring/" },
    { name: "WordPress: theme administration and performance", url: "https://developer.wordpress.org/advanced-administration/themes/" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/how-to-fix-slow-wordpress"),
            description,
            datePublished: "2026-02-17",
            dateModified: "2026-07-24",
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
            wordCount: 1650,
            timeRequired: "PT7M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/how-to-fix-slow-wordpress#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Fix slow WordPress", item: "https://www.pandacodegen.com/blog/how-to-fix-slow-wordpress" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-fix-slow-wordpress#webpage",
            url: "https://www.pandacodegen.com/blog/how-to-fix-slow-wordpress",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/how-to-fix-slow-wordpress#breadcrumb" },
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

const sourceLinkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";
const inlineLinkClass = "font-medium text-cognac hover:underline";

export default function SlowWordPressGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Fix slow WordPress", href: `/blog/${postId}` }]} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How to Fix a Slow WordPress Site <span className="italic text-cognac">Without Guessing</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Profile the affected route, fix the measured layer, then retest under the same conditions. WordPress does not have a single speed ceiling. Your hosting, how it is configured, the versions you run, caching, the theme,
                            plugins, queries, media, fonts and third parties can all contribute. That order matters: fixing an unmeasured layer is how an afternoon disappears.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current WordPress and Google primary guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="February 17, 2026" readTime="7 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The eight-method ladder</h2>
                        <BlogList
                            items={[
                                "Measure representative routes and separate field data from lab diagnostics.",
                                "Profile the origin, PHP, database, external requests and background work.",
                                "Verify page, object, browser and edge caching under correct invalidation rules.",
                                "Update and tune the supported server and WordPress environment on staging.",
                                "Isolate theme and plugin cost by measured component, not raw plugin count.",
                                "Optimize media, fonts, CSS and document discovery.",
                                "Govern JavaScript, embeds, analytics, chat and other third parties.",
                                "Then compare three options against what the evidence still shows: keep optimizing, rebuild lighter, or migrate.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: Gauge, title: "Browser", body: "LCP, INP and CLS, plus what is blocking the main thread." },
                            { icon: DatabaseZap, title: "Origin", body: "How fast the server answers, and what is slowing it down." },
                            { icon: PlugZap, title: "Extensions", body: "Theme and plugin behavior measured on real templates and states." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Measure the right pages under repeatable conditions</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A measurement you cannot repeat is not a baseline, and a homepage result cannot speak for a cart or an archive. Four rules make the numbers comparable across the whole job. The last one saves the most time later: record the WordPress, PHP, database, theme and plugin versions beside the run, so a future comparison has something to compare against.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Group pages by template and how they behave: home, service, article, archive, product, cart and form.",
                            "Use URL-level field Core Web Vitals where available and origin data only with that limitation stated.",
                            "Preserve at least three lab runs for each agreed device profile with date, version, network, cache and consent state.",
                            "Record the WordPress, PHP, database, theme and plugin versions alongside the baseline.",
                        ]}
                    />
                    <BlogText>
                        Field and lab evidence answer different questions, and mixing them produces a diagnosis you
                        cannot act on.{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers the metric definitions, the published thresholds and where each data source applies.
                    </BlogText>

                    <BlogHeader>2. Profile the server instead of buying a host blindly</BlogHeader>
                    <BlogText>
                        WordPress&apos;s current administration guidance lists hosting, server load, software version,
                        configuration, theme, plugins and image size among performance factors. Its monitoring guidance
                        recommends performance profiling and slow transaction or query evidence. Inspect document time,
                        PHP workers, slow queries, autoloaded options, object cache, cron, external HTTP calls and errors
                        before assigning the cause. If the complaint is a whole-site slowdown rather than one template,{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className={inlineLinkClass}>why a website loads slowly</Link>{" "}
                        walks the same layers from the visitor&apos;s side.
                    </BlogText>
                    <BlogText>
                        Measure the document response on its own before you touch the front end, and read it against a scale rather than a feeling: under about 200ms is healthy, 200 to 600ms usually points at an underpowered or oversold plan, and consistently above 600ms makes hosting the first thing to fix rather than the last. Time the request from
                        the command line or read it off a request waterfall, then repeat it with a warm cache, with a
                        cold cache, and from a region your visitors actually use. A slow document response is a server,
                        cache or network problem, and no amount of image compression or script deferral recovers it.
                        Once the response is fast, look at what happens inside it: PHP worker saturation under
                        concurrency, slow or repeated queries, blocking calls to external APIs during a page request,
                        and cron work running in the visitor&apos;s request instead of on a real scheduler.
                    </BlogText>
                    <BlogText>
                        For the database specifically, list the tables by size. When <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">wp_postmeta</code>{" "}
                        or <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">wp_options</code> is larger than{" "}
                        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">wp_posts</code>, something has been
                        accumulating: post revisions, orphaned metadata from a removed plugin, or transients written
                        with no expiry. Check the total size of autoloaded options as well, because those are read on
                        every single request whether the page needs them or not.
                    </BlogText>

                    <BlogHeader>3. Verify cache layers</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A cache that reports hits you never receive is worse than no cache, because it hides the constraint behind a number that looks healthy. Five checks confirm what is actually being stored and served. Test the miss and invalidation paths as carefully as the hit path, since that is where correctness problems live.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Confirm anonymous HTML can be cached where business and identity rules permit it.",
                            "Measure cache hit and miss behavior at page, object, edge and browser layers.",
                            "Define invalidation for content, inventory, price, user state and personalization.",
                            "Exclude checkout, account and other sensitive dynamic paths correctly.",
                            "Retest warm and cold states and verify stale content or privacy leaks are not introduced.",
                        ]}
                    />
                    <BlogText>
                        The layers do different jobs and are worth separating in your head. A page cache stores the
                        rendered HTML so a repeat request skips PHP and the database entirely. An object cache, backed
                        by Redis or Memcached, keeps query and option results in memory between requests, which is what
                        helps signed-in and cart pages that cannot use a page cache. Browser caching only helps a
                        returning visitor. An edge or CDN cache moves the response closer to the visitor and is the
                        layer to check first when the complaint is regional. A cache that is bypassed on every request
                        because of a cookie, a query parameter or a session is worse than no cache, so confirm hit rate
                        rather than assuming the plugin is working.
                    </BlogText>

                    <BlogHeader>4. Update and tune on staging</BlogHeader>
                    <BlogText>
                        Maintain supported WordPress core, theme, plugin, PHP, database and server versions, but test
                        updates on a representative staging copy with backup and rollback. Version changes can improve
                        performance or expose compatibility defects. Verify memory, workers, database settings, CDN,
                        compression and transport from evidence, not a universal hosting price or configuration.
                    </BlogText>

                    <BlogHeader>5. Isolate theme and plugin work</BlogHeader>
                    <BlogText>
                        There is no safe maximum plugin count. One extension can add expensive queries, scripts or
                        remote calls; many small extensions may have little effect. In staging, profile hooks, queries,
                        assets, cron and external requests, then disable or replace one suspect at a time and repeat the
                        same test. Preserve required security, accessibility, commerce and editorial behavior. For a
                        keep, replace or remove scorecard, see{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={inlineLinkClass}>our guide to WordPress plugins and site speed</Link>.
                        Page builders deserve a test of their own, covered in{" "}
                        <Link href="/blog/elementor-kills-seo" className={inlineLinkClass}>how Elementor affects SEO</Link> and{" "}
                        <Link href="/blog/divi-theme-slow" className={inlineLinkClass}>how the Divi theme affects page speed</Link>.
                    </BlogText>
                    <BlogText>
                        Page builders deserve particular attention because of how they load. A builder registers its
                        framework stylesheet and script, plus the libraries behind its widgets, and those often end up
                        enqueued on routes that use none of the widgets in question. Open the network panel on a page
                        built from plain text and check which builder handles are still requested. Builders also wrap
                        content in nested container markup, which inflates the DOM node count and the style and layout
                        work the browser has to do on every render. You can count the nodes on any page from the
                        DevTools console with{" "}
                        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">document.querySelectorAll(&quot;*&quot;).length</code>{" "}
                        and compare a builder template against a plain one on the same site.
                    </BlogText>

                    <BlogHeader>Tools that make the WordPress layer measurable</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Browser tools stop at the response, so everything WordPress did to produce it stays invisible until you instrument the server. Five tools close that gap, and Query Monitor is the one that changes the conversation, because it attributes each query, hook and HTTP call to the component responsible instead of leaving you to guess.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Query Monitor: per-request database queries with the component that fired them, hooks, HTTP API calls made during the request, enqueued scripts and styles, and PHP notices. This is what turns plugin blame into plugin evidence.",
                            "Site Health: supported versions, missing extensions, cron problems and object cache status, as a first pass before deeper profiling.",
                            "A server-side profiler or slow query log: for PHP time and query time the browser cannot see.",
                            "Chrome DevTools Coverage and Performance panels: unused CSS and JavaScript, long tasks and interaction delay on real templates.",
                            "The debug constants in wp-config, on staging only, to surface errors that a production page silently swallows.",
                        ]}
                    />
                    <BlogText>
                        For the remedies themselves, treat the category rather than the brand. Caching plugins such as
                        WP Rocket, W3 Total Cache or the free cache layer your host provides all aim at the same job:
                        serve rendered HTML without re-running PHP. Asset plugins such as Autoptimize combine and defer
                        CSS and JavaScript, which can break a builder or a form if applied blindly, so change one option
                        at a time. Image plugins such as ShortPixel or Imagify convert and resize on upload. Database
                        tools such as WP-Optimize clear revisions, spam and expired transients. A lightweight theme generally ships less markup and CSS than a multipurpose theme bundled with a builder, and the comparison worth making is on your own templates rather than on any recommendation. Measure each change in your own trace rather than trusting a vendor figure.
                    </BlogText>

                    <InsightBox variant="warning" label="Do not debug production by random deactivation">
                        Take a backup, use staging, record dependencies and keep rollback. Disabling a form, payment,
                        cache, security or consent component can improve a score while breaking the site. Delete rather
                        than merely deactivate anything you have decided to retire, since a deactivated plugin still
                        sits on disk and in the database and still needs security updates.
                    </InsightBox>

                    <BlogHeader>6. Optimize media, fonts and render path</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            This is the step where most measurable time comes back on a content site, and the most common mistake in it is lazy-loading the very image the page is judged on. Five checks cover media, fonts and whatever blocks the first paint. Do them after the server and cache work, or you will be optimizing around a slow response.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Serve correctly sized images with efficient formats and quality appropriate to the content.",
                            "Do not lazy-load the above-the-fold LCP image; let the browser discover it promptly.",
                            "Reserve dimensions for media and embeds to prevent layout shifts.",
                            "Reduce unused font families and weights and verify fallback behavior.",
                            "Inspect critical CSS, stylesheet order, preload choices and render-blocking assets.",
                        ]}
                    />
                    <BlogText>
                        The render-path work in this method is the same work behind a strong Lighthouse result, which{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className={inlineLinkClass}>our guide to improving a PageSpeed score</Link>{" "}
                        covers in the order the tooling reports it.
                    </BlogText>

                    <BlogHeader>7. Govern scripts and third parties</BlogHeader>
                    <BlogText>
                        Inventory tag managers, analytics, pixels, chat, heatmaps, video, maps, calendars, reviews and
                        experiments. Record owner, purpose, consent category, load condition, performance cost and
                        failure state. Remove, defer or replace only where the business and compliance scope permit it,
                        then retest the full journey.
                    </BlogText>

                    <BlogHeader>8. Decide when optimization is no longer the best investment</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Optimization stops being the right spend when the constraint is the structure rather than the settings, and that is a measurement result rather than a feeling. Three positions cover it: keep tuning, rebuild inside WordPress, or move. Each needs the evidence named in the steps above before it is worth quoting.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Keep optimizing when measured constraints are controllable and the editorial or plugin workflow remains valuable.",
                            "Use a lighter WordPress rebuild when the current theme or builder structure is the main constraint but WordPress still fits.",
                            "Consider migration when accepted performance, security, ownership, integration or operating requirements remain blocked and total cost supports replacement.",
                        ]}
                    />
                    <BlogText>
                        Next.js does not automatically load in 0.2 seconds or produce a fixed score. A custom build can
                        provide more control and can also be slow if its media, code, data access or third parties are
                        poor. Test the proposed implementation under the same acceptance method.
                    </BlogText>
                    <BlogText>
                        Price the alternatives before you choose one. The{" "}
                        <Link href="/blog/wordpress-killer" className={inlineLinkClass}>three-year WordPress cost method</Link>{" "}
                        and the{" "}
                        <Link href="/blog/wordpress-migration-cost" className={inlineLinkClass}>WordPress migration cost breakdown</Link>{" "}
                        set out how to build both sides of that comparison, and our{" "}
                        <Link href="/services/wordpress-migration" className={inlineLinkClass}>WordPress migration service</Link>{" "}
                        describes the scope involved. For stores, the commerce path runs through{" "}
                        <Link href="/blog/woocommerce-too-slow" className={inlineLinkClass}>diagnosing WooCommerce performance</Link>{" "}
                        and our{" "}
                        <Link href="/services/woocommerce" className={inlineLinkClass}>WooCommerce migration service</Link>.
                    </BlogText>

                    <BlogHeader>SEO and business impact</BlogHeader>
                    <BlogText>
                        Google uses Core Web Vitals within broader ranking systems but says good scores do not guarantee
                        top rankings and relevance remains fundamental. A slow experience can create friction, but there is
                        no reliable conversion-per-second rule, traffic-loss band or standard revenue figure to apply to
                        your site. Published speed research measures other people&apos;s properties under their own
                        conditions, and multiplying it out to a number for yours produces a confident answer that is not
                        evidence. Model impact from the property&apos;s own field and funnel data, and do not assume
                        causation from a single before-and-after release.
                    </BlogText>
                    <BlogText>
                        <Link href="/blog/how-website-speed-affects-seo" className={inlineLinkClass}>How website speed affects SEO</Link>{" "}
                        covers what the search relationship does and does not support, and{" "}
                        <Link href="/blog/why-competitor-outranks-you" className={inlineLinkClass}>why a competitor outranks you</Link>{" "}
                        covers the other factors worth ruling out before you attribute a gap to speed.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a></li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your WordPress migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will profile representative routes, test realistic native fixes and compare a lighter
                            WordPress rebuild with an SEO-controlled migration.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <section className="my-10">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">Related reading</h2>
                        <p className="leading-relaxed text-stone-700">
                            If optimization runs out of room and migration is the remaining option, read the{" "}
                            <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className={inlineLinkClass}>step-by-step WordPress to Next.js migration guide</Link>{" "}
                            alongside{" "}
                            <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to search visibility</Link>.
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
