import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Code2, Gauge, Image as ImageIcon, Type } from "lucide-react";
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

const postId = "squarespace-too-slow";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Squarespace Too Slow in 2026? Diagnose Before Migrating";
const description =
    "Measure Squarespace performance by route and device, reduce page weight, fonts, custom code and third parties, then decide whether optimization or migration fits the evidence.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Squarespace too slow",
        "speed up Squarespace",
        "Squarespace PageSpeed",
        "Squarespace Core Web Vitals",
        "Squarespace migration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-27",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/squarespace-too-slow")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Squarespace: reducing page size",
        url: "https://support.squarespace.com/hc/en-us/articles/360022529371-Reducing-your-page-size-for-faster-loading",
    },
    {
        name: "Squarespace: troubleshooting a slow site",
        url: "https://support.squarespace.com/hc/en-us/articles/206545657-My-site-is-loading-slowly",
    },
    {
        name: "Squarespace status",
        url: "https://status.squarespace.com/",
    },
    {
        name: "Squarespace: exporting your site",
        url: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/squarespace-too-slow"),
            description,
            datePublished: "2026-03-27",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Squarespace", "Website migration", "Technical SEO", "Content management systems"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Squarespace performance",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Squarespace", sameAs: ["https://en.wikipedia.org/wiki/Squarespace"] },
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
                { "@type": "Thing", name: "Website builder", sameAs: ["https://en.wikipedia.org/wiki/Website_builder"] },
            ],
            wordCount: 1350,
            timeRequired: "PT5M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/squarespace-too-slow#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Squarespace performance", item: "https://www.pandacodegen.com/blog/squarespace-too-slow" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/squarespace-too-slow#webpage",
            url: "https://www.pandacodegen.com/blog/squarespace-too-slow",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/squarespace-too-slow#breadcrumb" },
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

const inlineLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function SquarespaceTooSlowPage() {
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
                            { label: "Squarespace performance", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Squarespace performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Squarespace Too Slow in 2026? <span className="italic text-cognac">Diagnose Before Migrating</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Squarespace speed varies page by page, and with your content, fonts, custom code, third-party scripts, the device
                            and network. Use field and lab evidence to find the constraint before treating the platform
                            name as the cause or migration as the only fix.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Squarespace and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 27, 2026" readTime="5 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The diagnostic sequence</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            A Squarespace site is usually slow because of what was put on the page rather than because
                            of Squarespace: oversized images, several font families, animations, and third-party
                            blocks that open connections to hosts you do not control. All four are yours to fix in the
                            editor. Work through them in the order below, measuring the same route before and after
                            each change, and only treat the platform as the constraint once the controllable causes
                            are gone.
                        </p>
                        <BlogList
                            items={[
                                "Check platform status and reproduce the issue on supported browsers and another network.",
                                "Use field Core Web Vitals where available to locate affected routes and devices.",
                                "Run repeated lab tests under recorded conditions to trace the bottleneck.",
                                "Fix controllable content, fonts, custom code and third parties before changing architecture.",
                            ]}
                        />
                    </section>

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">The four things that decide a Squarespace page&apos;s speed</h2>
                    <p className="mb-2 leading-relaxed text-stone-700">
                        Nearly every slow Squarespace route we have opened comes down to one of four things, and three
                        of them are content decisions rather than technical ones. Measurement tells you which. Media
                        weight is the most common single cause, fonts the most commonly overlooked, and injected code
                        the one that breaks the site when you remove it carelessly.
                    </p>
                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Gauge, title: "Measure", body: "Field distribution plus repeatable lab diagnostics." },
                            { icon: ImageIcon, title: "Media", body: "Page weight, dimensions, video and loading priority." },
                            { icon: Type, title: "Fonts", body: "Families, weights, fallbacks and rendering behavior." },
                            { icon: Code2, title: "Code", body: "Embeds, injection, analytics and third parties." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Name the problem correctly</BlogHeader>
                    <BlogText>
                        &ldquo;The site is slow&rdquo; describes five different problems with five different fixes.
                        Decide which one you have before you touch anything: content that arrives late, a page that
                        will not respond to a tap, layout that jumps under the reader, a function that hangs, or a
                        single low score in one simulated test. The last of those is the weakest evidence on the list
                        and the one that starts most migrations.
                    </BlogText>
                    <BlogList
                        items={[
                            "Slow initial content, measured through LCP and supporting network timing.",
                            "Delayed interaction, measured through INP and browser traces.",
                            "Unexpected movement, measured through CLS and layout-shift records.",
                            "A functional wait, error or failed third-party request.",
                            <>{"A low "}<Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>{" score in one simulated test."}</>,
                        ]}
                    />
                    <BlogText>
                        These are not interchangeable. Google distinguishes field data, which reflects real users, from
                        Lighthouse lab data, which reproduces a controlled environment. A page can have one without the
                        other.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no platform score ceiling here">
                        We do not publish a fixed score range that Squarespace sites supposedly cannot beat. What a
                        given site scores depends on its template, blocks, fonts, media weight, injected code and
                        third-party services, so a platform-wide figure tells you nothing about your own pages. We also
                        do not print unnamed customer stories. Measure your own routes with field data from the Chrome
                        UX Report where it is available, add repeatable lab runs under recorded conditions, and track
                        that site against itself over time.
                    </InsightBox>
                    <BlogText>
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        sets out what each of those metrics records, and{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className={inlineLinkClass}>why a website loads slowly</Link>{" "}
                        runs the same diagnosis without assuming a platform.
                    </BlogText>

                    <BlogHeader>2. Check platform and local conditions</BlogHeader>
                    <BlogText>
                        Rule out the platform and your own machine before attributing anything to the site. A live
                        Squarespace incident, a browser extension rewriting the page, a saturated home connection or a
                        DNS setup that only affects the custom domain will each produce a convincing slow result that
                        has nothing to do with your content. Five checks, all of which take a minute.
                    </BlogText>
                    <BlogList
                        items={[
                            "Review Squarespace's status page for a current platform incident.",
                            "Use a supported current browser without extensions that alter page behavior.",
                            "Compare another device and network.",
                            "Test the built-in Squarespace domain and custom domain when diagnosing DNS or domain behavior.",
                            "Record the route, date, geography and logged-in or public state.",
                        ]}
                    />

                    <BlogHeader>3. Reduce page weight</BlogHeader>
                    <BlogText>
                        Squarespace currently recommends keeping a page at 5 MB or less whenever possible. That is
                        vendor guidance, not a guarantee of a particular LCP or Lighthouse score. Use a network trace to
                        identify the content that matters on the actual route.
                    </BlogText>
                    <BlogList
                        items={[
                            "Resize and compress images for their rendered slots.",
                            "Avoid loading desktop-sized media on a narrow mobile viewport.",
                            "Reduce autoplay video, galleries and long media-heavy pages where the business value does not justify them.",
                            "Preserve dimensions so media and embeds do not shift the layout.",
                            "Prioritize the visible hero or product image and defer below-the-fold content appropriately.",
                        ]}
                    />
                    <BlogText>
                        Compress and resize before you upload rather than after. Squarespace generates its own derivative
                        sizes from what you give it, so a 6000-pixel camera original is a larger starting point than the
                        page ever needs. Squoosh and TinyPNG both do the job in the browser on a free tier. Check the result
                        in a network trace rather than by eye: what matters is the size of the file the page actually
                        requests at the viewport you are testing.
                    </BlogText>
                    <BlogText>
                        Two more controls are worth checking in the editor. Section and image animations add script
                        execution and can delay the point at which content is painted, and they can be turned off in the
                        style settings if the design does not depend on them. Every third-party block you place, whether
                        a social feed, a newsletter widget from another tool, a review carousel or a chat launcher,
                        opens connections to a host you do not control, and each of those can fail slowly. Inventory
                        them and keep the ones that earn their place.
                    </BlogText>
                    <BlogText>
                        The order to attempt those changes in, and how to verify each one, is set out in{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>our method for speeding up a website</Link>.
                        The equivalent exercise on the other major builder is in{" "}
                        <Link href="/blog/wix-too-slow" className={inlineLinkClass}>our diagnosis of a slow Wix site</Link>.
                    </BlogText>

                    <BlogHeader>4. Simplify fonts</BlogHeader>
                    <BlogText>
                        Squarespace recommends using no more than two fonts as a general design rule and notes that all
                        selected fonts must load. Review families, weights, icons and third-party font hosts. Preserve
                        brand and readability while reducing unnecessary requests.
                    </BlogText>

                    <BlogHeader>5. Isolate custom code and third parties</BlogHeader>
                    <BlogText>
                        Squarespace warns that code injection, embeds, CSS and other custom code can contribute to slow
                        loading and fall outside standard support. Save a copy and remove one item at a time in a safe
                        test context. Include analytics, advertising, chat, scheduling, forms and consent behavior in
                        regression tests.
                    </BlogText>

                    <BlogHeader>6. Review redirects and navigation</BlogHeader>
                    <BlogText>
                        Squarespace advises reviewing excessive redirect mappings. Trace redirect chains from paid,
                        organic, email and old bookmarked URLs. Update internal and campaign links to their final
                        destinations instead of relying on avoidable hops.
                    </BlogText>
                    <BlogText>
                        Redirects, metadata and crawlability sit alongside speed in how a page performs in search. We
                        cover the platform controls in{" "}
                        <Link href="/blog/is-squarespace-bad-for-seo" className={inlineLinkClass}>what Squarespace gives you to work with for SEO</Link>{" "}
                        and the relationship itself in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={inlineLinkClass}>how site speed relates to search performance</Link>.
                    </BlogText>

                    <BlogHeader>7. Compare representative routes</BlogHeader>
                    <BlogText>
                        Speed work is accepted per route, not per site, because a home page and a checkout fail in
                        different ways. Test one real example of each template you have, in the state a visitor
                        actually meets it, and carry a non-speed guardrail alongside each one. That guardrail is what
                        stops a faster page from shipping with a broken form or a missing conversion event.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Route</th><th className="p-4">State to test</th><th className="p-4">Business guardrail</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Home or landing</td><td className="p-4">Consent, hero, navigation and campaign parameters</td><td className="p-4">Content and analytics remain correct</td></tr>
                                <tr><td className="p-4 font-bold">Service or product</td><td className="p-4">Gallery, variants, embeds and primary action</td><td className="p-4">Decision content and action work</td></tr>
                                <tr><td className="p-4 font-bold">Blog or portfolio</td><td className="p-4">Long content, media and related navigation</td><td className="p-4">Crawlability and internal links remain intact</td></tr>
                                <tr><td className="p-4 font-bold">Form or checkout</td><td className="p-4">Validation, payment, confirmation and tracking</td><td className="p-4">No lost lead, order or duplicate event</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>8. Decide whether to stay or migrate</BlogHeader>
                    <BlogText>
                        Stay on Squarespace when the platform still does what the business needs and the measured
                        causes are ones you can change. Redesign inside it when the structure is the problem but the
                        way your team publishes is not. Migrate only when a requirement you can name is impractical
                        where you are. A better score on somebody else&apos;s demo site is not a requirement.
                    </BlogText>
                    <BlogList
                        items={[
                            "Stay and optimize when the platform meets feature and editorial requirements and measured issues are controllable.",
                            "Redesign within Squarespace when the content structure and experience need simplification but the operating model still fits.",
                            "Migrate when the experience, data, integration, workflow or speed control you need is not practical where you are.",
                            "Do not migrate solely because another platform produced a better isolated demo score.",
                        ]}
                    />
                    <BlogText>
                        If the evidence points to a move,{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className={inlineLinkClass}>Squarespace compared with a custom website</Link>{" "}
                        covers the requirements,{" "}
                        <Link href="/blog/squarespace-migration-cost" className={inlineLinkClass}>how a Squarespace migration is scoped and priced</Link>{" "}
                        covers the inventory, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to search visibility</Link>{" "}
                        covers the risk to manage during cutover.
                    </BlogText>

                    <BlogHeader>9. If you do move, plan the extraction early</BlogHeader>
                    <BlogText>
                        Squarespace&apos;s{" "}
                        <a href="https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>own export documentation</a>{" "}
                        describes a WordPress-format XML file and lists what it leaves out, which as of August 2, 2026
                        includes store pages, portfolio and several other page types, product data and video. Confirm
                        what it actually produces for your account and your page types before you budget the work,
                        because that list changes. Whatever the export misses has to come out by hand or by script,
                        and on the small migrations we have scoped that extraction has been the largest single line.
                    </BlogText>
                    <BlogList
                        items={[
                            "Inventory every live URL with its title, description, canonical, headings, images and internal links, and note which pages earn search traffic today.",
                            "Extract page copy, blog posts, images at full resolution, product data, forms and any code injection before anything is switched off.",
                            "Build the redirect map from old URL to new URL, including any URL you are deliberately retiring, and test it before cutover rather than after.",
                            "Check parity on the new build for titles, descriptions, canonicals, structured data and rendered main content while the old site is still live.",
                            "Cut over by DNS with the previous site still reachable, and keep a rollback path until the new site is verified in production.",
                        ]}
                    />

                    <BlogHeader>10. Define performance acceptance</BlogHeader>
                    <BlogText>
                        A migration scope can include a 90-plus Lighthouse delivery target for agreed representative
                        routes, recorded mobile and desktop profiles, and three consecutive tests per route and profile.
                        It must also preserve accessibility, SEO, analytics and function. Field data is monitored after
                        enough real-user observations exist.
                    </BlogText>
                    <BlogText>
                        How we run that work is described on our{" "}
                        <Link href="/services/squarespace" className={inlineLinkClass}>Squarespace migration service page</Link>, the tiers are
                        listed on the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>, and{" "}
                        <Link href="/work" className={inlineLinkClass}>our project work</Link>{" "}
                        shows what a completed scope contains.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Gauge className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will diagnose representative Squarespace routes, identify controllable bottlenecks and
                            show whether optimization, redesign or an SEO-conscious migration fits the evidence.
                        </p>
                        <QuoteModalButton cta="squarespace_speed_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
