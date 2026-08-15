import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, GitCompareArrows, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, ComparisonGrid, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const SignalLeakAnimation = dynamicImport(() => import("@/components/blog/SignalLeakAnimation"));

const postId = "fix-meta-ad-tracking-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026";
const title = "Meta Ad Tracking Not Working? A 2026 Diagnostic Guide";
const description =
    "Reconcile orders and Meta events, diagnose browser and server integrations, prevent duplicate events, and document privacy controls without promising recovered attribution.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/fix-meta-ad-tracking-2026" },
    keywords: [
        "Meta ad tracking not working",
        "Meta Pixel not firing",
        "Conversions API debugging",
        "Meta event deduplication",
        "Meta Event Match Quality",
        "Shopify Meta tracking",
        "Facebook ad tracking not working",
        "Meta under reporting conversions",
        "checkout.liquid deprecation tracking",
        "iOS 14 Facebook ads tracking",
        "pixel vs conversions API",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-06",
        modifiedTime: "2026-07-31",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/fix-meta-ad-tracking-2026")],
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
            image: ogImageUrlForPath("/blog/fix-meta-ad-tracking-2026"),
            datePublished: "2026-07-06",
            dateModified: "2026-07-31",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Meta Conversions API", "Conversion tracking", "Consent and privacy", "Analytics"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Measurement",
            inLanguage: "en-US",
            wordCount: 2862,
            timeRequired: "PT14M",
            about: [
                { "@type": "Thing", "name": "Meta Pixel", "sameAs": ["https://www.facebook.com/business/tools/meta-pixel"] },
                { "@type": "Thing", "name": "Conversions API", "sameAs": ["https://developers.facebook.com/docs/marketing-api/conversions-api/"] },
                { "@type": "Thing", name: "Conversion Tracking" },
                { "@type": "Thing", "name": "Web Analytics", "sameAs": ["https://en.wikipedia.org/wiki/Web_analytics"] },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: [
                {
                    "@type": "CreativeWork",
                    name: "Meta Business Tools Terms",
                    url: "https://www.facebook.com/legal/terms/businesstools",
                },
                {
                    "@type": "CreativeWork",
                    name: "Meta Data Processing Terms",
                    url: "https://www.facebook.com/legal/terms/dataprocessing",
                },
                {
                    "@type": "CreativeWork",
                    name: "Meta Conversions API documentation",
                    url: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
                },
                {
                    "@type": "CreativeWork",
                    name: "Meta Pixel and Conversions API deduplication",
                    url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
                },
                {
                    "@type": "CreativeWork",
                    name: "Shopify: checkout.liquid deprecation",
                    url: "https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid",
                },
                {
                    "@type": "CreativeWork",
                    name: "WebKit: full third-party cookie blocking and more",
                    url: "https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Meta ad tracking diagnostic", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-07-06",
            dateModified: "2026-07-31",
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

export default function MetaAdTrackingGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Meta ad tracking diagnostic")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Measurement and privacy</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Meta Ad Tracking Not Working? <span className="italic text-cognac">Diagnose the Data Path</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            If Meta reports fewer sales than your shop admin, the campaign is often fine and the
                            data path is leaking. The leaks come in two kinds, and the difference decides what you
                            are allowed to do about them. Some events are missing because the customer declined
                            tracking, and no tool should recover those. Others are missing for ordinary technical
                            reasons, an ad blocker, an expired browser cookie, a checkout page that stopped
                            running your script, and those you can legitimately fix. Sort your losses into those
                            two piles first. Everything else in this guide follows from which pile you are in.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 31, 2026 against current Meta, Shopify, and WebKit documentation.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="July 6, 2026"
                        readTime="8 min read"
                        bio="Hassan works on consent-aware measurement integrations and custom commerce systems."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Start with the order or lead system of record and a written event definition.",
                                "Compare like with like: the same event, the same time zone, the same dates, the same test status, refunds handled the same way, and the same attribution window.",
                                "Use Meta diagnostics, browser developer tools, and server logs to find where an event is lost or duplicated.",
                                "If browser and server both send one occurrence, use the same event name and event ID for deduplication.",
                                "Before you price any Conversions API work, check whether Meta will just switch it on for you. Meta-enabled Conversions API launched on April 15, 2026 as a one-click option that mirrors what your Pixel already sends.",
                                "Conversions API is another data path. It is not a consent bypass or a guarantee of recovered attribution.",
                            ]}
                        />
                    </section>

                    <div className="my-10">
                        <SignalLeakAnimation />
                    </div>

                    <BlogHeader>Why the browser pixel loses events in the first place</BlogHeader>
                    <BlogText>
                        The pixel is a piece of JavaScript running inside someone else&apos;s browser, and browsers
                        have spent several years taking away the things it relied on. It still loads, so a quick
                        check looks fine, while a growing share of real customers never reach Meta.
                    </BlogText>
                    <BlogList
                        items={[
                            "App Tracking Transparency. Since iOS 14.5 in 2021, Apple asks users whether an app may track them across other companies' apps and websites. When someone declines, the tracking you are permitted to do is restricted. This is a consent outcome, not a bug.",
                            "Third-party cookies are blocked. Safari has blocked cookies for cross-site resources by default since version 13.1, and Firefox does the same. Matching that leaned on those cookies stops working.",
                            "Safari's seven-day storage limit. WebKit deletes a site's script-writable storage, including cookies and local storage written by JavaScript, after seven days of Safari use without the visitor interacting with that site. Someone clicks your ad, comes back two weeks later and buys, and the link back to the click is already gone.",
                            "Ad blockers and consent banners. An ad blocker stops the pixel's request before it leaves the browser. A consent banner holds it until someone clicks accept, and plenty never do. This is why a pixel can fire perfectly in your own incognito test and still miss real buyers.",
                            "Shopify removed checkout.liquid. Shopify's documentation puts two dates on this: checkout.liquid and additional scripts were sunset on the Thank you and Order status pages on August 28, 2025 for all merchants, and script tags were sunset on those pages on August 28, 2025 for Plus stores and are sunset for non-Plus stores on August 26, 2026. Conversion tracking that lived on those pages stops firing.",
                        ]}
                    />
                    <BlogText>
                        The pixel is a guest in someone else&apos;s browser. A server event is a message you send from
                        your own house. That is the whole reason the second one is more reliable, and also the reason
                        it is not a way around the first item on that list.
                    </BlogText>

                    <InsightBox variant="warning" label="Time-critical: sunset dated August 26, 2026">
                        Script tags on the Thank you and Order status pages are sunset for non-Plus stores on
                        August 26, 2026. If any part of your conversion tracking still lives there, it stops. Shopify&apos;s
                        documented replacement is Checkout Extensions, and for Meta specifically the native sales-channel
                        integration is the supported path. Check this before you spend a week debugging attribution,
                        because a script that no longer runs will not show up as a Meta problem.
                    </InsightBox>

                    <BlogHeader>Sort your losses into two piles</BlogHeader>
                    <BlogText>
                        This is the step almost every guide skips, and skipping it is how people end up buying tools
                        that promise something no tool is allowed to deliver.
                    </BlogText>

                    <ComparisonGrid
                        left={{
                            label: "Consent loss: leave it alone",
                            items: [
                                "The customer declined tracking",
                                "No server integration recovers these, by design",
                                "Expect reported conversions to sit below your real order count, permanently",
                                "A vendor promising to close this gap is describing a compliance problem",
                            ],
                        }}
                        right={{
                            label: "Technical loss: worth fixing",
                            items: [
                                "An ad blocker stopped the browser request",
                                "Safari cleared the browser state before the customer returned",
                                "A checkout page stopped running your script",
                                "A permitted event simply never arrived, and a server call would have carried it",
                            ],
                        }}
                    />

                    <BlogText>
                        Server-side delivery through the Conversions API addresses the right-hand column. It reduces
                        avoidable loss among events you are already permitted to send, because a server call does not
                        depend on the visitor&apos;s browser holding onto anything. It does nothing to the left-hand
                        column, and should not.
                    </BlogText>

                    <BlogHeader>Make sure you are comparing like with like</BlogHeader>
                    <BlogText>
                        A storefront normally counts completed orders. A CRM may count qualified leads. Ads Manager
                        applies its own attribution rules to events it can associate with ads. Those are different
                        questions. A mismatch alone does not prove that the Pixel is broken or that one platform has
                        hidden a fixed percentage of sales. If the symptom is rising spend next to a falling order
                        count, the same reconciliation sequence is set out in our guide to{" "}
                        <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac hover:underline font-medium">auditing tracking when ad spend rises and orders fall</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Write the business event: for example, a paid order after test and canceled orders are excluded.",
                            "Write down which system you are treating as the truth, the currency, the time zone, the order state, the dates, and when you compared them.",
                            "Export event identifiers where permitted so individual records can be matched, not merely totals.",
                            "Separate delivery from attribution: an event can arrive at Meta without being attributed to an ad.",
                        ]}
                    />

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: GitCompareArrows, title: "Reconcile", body: "Compare equivalent records under a documented scope." },
                            { icon: Wrench, title: "Debug", body: "Follow one event from consent to the server log." },
                            { icon: ShieldCheck, title: "Govern", body: "Send only permitted data under current notices, choices, terms, and law." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>A browser and server diagnostic sequence</BlogHeader>
                    <BlogText>
                        Confirm the dataset identity first and remove stale or duplicate integrations, because everything downstream is unreadable until you know which pixel is firing. Then test the browser event and the server event separately, recording consent state, and verify the required parameters on each. An ad blocker, a consent choice, a navigation race or a duplicate tag can each affect a browser request, and none of them is a universal diagnosis.
                    </BlogText>
                    <BlogList
                        items={[
                            "Confirm the expected Pixel or dataset ID and remove stale or duplicate integrations.",
                            "Test with the Meta Pixel Helper Chrome extension for the browser event and the Test Events tool in Events Manager for the server event, alongside the browser network panel. Record consent state and test mode. Meta documents that test_event_code is for testing only and must be removed from the production payload.",
                            "Check the exact event name, when it fired, the value, the currency, which page it came from, and its event ID.",
                            "For server events, confirm the parameters Meta lists as required are present, action_source, event_source_url and client_user_agent, and log request acceptance and rejected parameters without logging prohibited personal data.",
                            "Repeat a controlled test for denial, acceptance, returning visitor, checkout, and any relevant refund or cancellation state.",
                            "Make sure your live tags are not firing from preview, staging, bots, your own staff or automated tests, unless you have deliberately separated those.",
                        ]}
                    />
                    <BlogText>
                        An ad blocker, browser policy, consent choice, navigation race, script error, integration update,
                        or duplicate tag can affect a browser request. None is a universal diagnosis. Evidence from the
                        affected session should decide the next step.
                    </BlogText>

                    <p className="swipe-hint mb-2 mt-4 text-xs font-bold text-cognac md:hidden">← Swipe to see more →</p>
                    <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="responsive-stack-table w-full min-w-[560px] border-collapse text-sm">
                            <thead>
                                <tr className="bg-stone-100">
                                    <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">What happens</th>
                                    <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Pixel only</th>
                                    <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Pixel plus server events</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium text-charcoal">Customer declined tracking</td>
                                    <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Restricted, correctly</td>
                                    <td data-label="Pixel plus server" className="border border-stone-300 px-4 py-3 text-stone-700">Still restricted. This is not the thing it fixes</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium text-charcoal">Ad blocker stops the request</td>
                                    <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Event never leaves the browser</td>
                                    <td data-label="Pixel plus server" className="border border-stone-300 px-4 py-3 text-stone-700">The server copy still sends</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium text-charcoal">Delayed purchase after Safari clears storage</td>
                                    <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Link back to the click is gone</td>
                                    <td data-label="Pixel plus server" className="border border-stone-300 px-4 py-3 text-stone-700">Server events do not depend on browser storage</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium text-charcoal">Checkout page stops running scripts</td>
                                    <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Tracking silently stops</td>
                                    <td data-label="Pixel plus server" className="border border-stone-300 px-4 py-3 text-stone-700">The order still fires from your system</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium text-charcoal">Risk of counting one sale twice</td>
                                    <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Low, there is only one path</td>
                                    <td data-label="Pixel plus server" className="border border-stone-300 px-4 py-3 text-stone-700">Real, and the reason deduplication below is not optional</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>How browser and server event deduplication works</BlogHeader>
                    <BlogText>
                        Sending both paths can improve resilience, but two copies of one purchase must not become two
                        purchases. Meta&apos;s current documentation describes using matching event names and event IDs
                        so corresponding browser and server events can be deduplicated. Generate one stable ID for the
                        business occurrence, pass it through both paths, and do not reuse it for a different occurrence.
                        For what building and operating both paths involves as a project, see our breakdown of a{" "}
                        <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">what a Conversions API setup costs, from the free route upward</Link>.
                    </BlogText>
                    <InsightBox variant="warning" label="Do not infer success from HTTP acceptance">
                        An accepted request does not prove correct attribution, consent, deduplication, value, or
                        downstream reporting. Verify the event in diagnostics and reconcile it against the system of
                        record.
                    </InsightBox>

                    <BlogHeader>Event Match Quality is a diagnostic, not a guarantee</BlogHeader>
                    <BlogText>
                        Event Match Quality reflects how customer information parameters may help Meta associate events.
                        It is not a universal minimum score and does not promise lower acquisition cost, recovered
                        revenue, or a particular attribution result. Send only fields that are accurate, permitted,
                        and formatted for the current interface.
                    </BlogText>

                    <BlogText>
                        For context on what a good score looks like in practice, the screenshot below is from a store we
                        run ourselves rather than a client, which is the only reason we can publish the interface at all.
                    </BlogText>

                    <figure className="my-10 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                        <Image
                            src="/blog-images/capi-conversions-lift-10pct.jpeg"
                            alt="Owner-provided Meta Events Manager screenshot showing a Lead event diagnostic and Event Match Quality"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                        <figcaption className="px-5 py-4 text-sm leading-relaxed text-stone-600">
                            What a healthy Lead event looks like in Events Manager: Event Match Quality of 9.0 out of 10,
                            with a Meta estimate for the selected seven-day view. Disclosure: this is Panda Patches, an
                            owned store rather than a client. It is owned and operated by Imran Raza Ladhani, a
                            PandaCodeGen co-founder, and PandaCodeGen built and maintains the platform, so treat it as
                            our own operating data rather than an independent reference. The capture does not
                            independently show its year, and one store&apos;s diagnostic is not a benchmark, a causal
                            result, or a number you should expect to reproduce.
                        </figcaption>
                    </figure>

                    <BlogHeader>Conversions API does not remove privacy duties</BlogHeader>
                    <BlogText>
                        Meta&apos;s Business Tools Terms cover technologies including the Pixel and Conversions API and
                        impose notice, choice, and data-use obligations. The current Data Processing Terms address
                        applicable processing arrangements, but legal roles depend on the product, data flow,
                        jurisdiction, and parties. Hashing an identifier for transmission does not by itself make the
                        collection anonymous or eliminate consent and disclosure requirements. Where the tracking code
                        lives and who controls it belongs to the wider question covered in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline font-medium">who owns your website and its code</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Map each field from collection through browser, server, Meta, storage, access, retention, and deletion.",
                            "Align tag and server behavior with the site's actual consent choices and regional configuration.",
                            "Avoid sending prohibited or unnecessary data in URLs, custom parameters, logs, or event names.",
                            "Keep vendor terms, privacy notices, data-processing terms, and deletion procedures current.",
                            "Get qualified legal advice for the jurisdictions and data involved instead of treating this guide as legal advice.",
                        ]}
                    />

                    <BlogHeader>Shopify and other managed integrations</BlogHeader>
                    <BlogText>
                        A native sales-channel integration may manage parts of browser and server delivery, but labels,
                        availability, consent behavior, and supported events change. Use the current Shopify and Meta
                        administration screens and documentation for the installed integration. Verify its data-sharing
                        setting, test events, IDs, values, deduplication, and privacy behavior. Do not assume that
                        installing an app reproduces another store&apos;s diagnostics. If you are weighing a managed
                        integration against a storefront you control, compare the two models in{" "}
                        <Link href="/blog/shopify-vs-custom-website" className="text-cognac hover:underline font-medium">Shopify compared with a custom website</Link>{" "}
                        and in our guide to{" "}
                        <Link href="/blog/shopify-headless" className="text-cognac hover:underline font-medium">headless Shopify architecture</Link>.
                    </BlogText>

                    <h3 className="mt-8 text-xl font-bold text-charcoal">Is there a free route before any of this?</h3>
                    <div data-speakable="true">
                        <BlogText>
                            Often, yes, and it is worth ruling in or out before anybody quotes you. Meta announced
                            <strong> Meta-enabled Conversions API on April 15, 2026</strong>, a one-click option it
                            describes as needing no technical expertise, no costs and no ongoing maintenance, which
                            mirrors the events your Pixel is already sending. It will not fix a Pixel that is firing
                            the wrong event, and it does not give you the control over the event contract that the rest
                            of this page is about. What it does do is close the browser-only gap without a project. Turn
                            it on, remeasure, and only then decide whether you still need to build anything. The four
                            routes and what each one actually costs are set out in{" "}
                            <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">what a Conversions API setup costs, cheapest route first</Link>.
                        </BlogText>
                    </div>

                    <h3 className="mt-8 text-xl font-bold text-charcoal">Why is Shopify&apos;s setup simpler than a custom build?</h3>
                    <BlogText>
                        Because the sales channel already knows what a purchase is. On a{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom-engineered stack</Link>{" "}
                        you define the event
                        contract yourself: which server action counts as a conversion, which identifiers you are permitted
                        to send, how the event ID is generated so browser and server copies deduplicate, and where that
                        code runs. Shopify&apos;s integration makes those decisions for you for its own standard events.
                        That is genuinely less work, and it is also less control. You inherit whichever events, parameters
                        and consent behavior the integration currently supports, and those change without your involvement.
                    </BlogText>

                    <h3 className="mt-8 text-xl font-bold text-charcoal">Why aren&apos;t my Shopify sales showing in Meta Ads Manager?</h3>
                    <BlogText>
                        Work through the short answer at the top of this article in order rather than reinstalling
                        anything. Confirm the order exists in Shopify admin. Confirm an event was actually sent for it,
                        using Meta&apos;s Test Events tool on a real transaction rather than a preview. Confirm the event
                        was accepted rather than dropped or deduplicated away. Only then look at attribution: the sale may
                        be recorded correctly but assigned outside the reporting window, to a different channel, or to a
                        view-through the model does not credit. A missing sale in Ads Manager is far more often an
                        attribution or consent outcome than a broken integration.
                    </BlogText>

                    <h3 className="mt-8 text-xl font-bold text-charcoal">What about tracking after the iOS privacy changes?</h3>
                    <BlogText>
                        Server events do not restore visibility into people who declined tracking, and no integration
                        does. What server-side delivery can improve is the completeness of events you are already
                        permitted to send, because a server call does not depend on the browser holding state. Treat it as
                        reducing avoidable loss rather than recovering opted-out users, and expect reported conversions to
                        stay below your order count in the system of record. Any vendor promising to recover the gap is
                        describing something the consent framework does not allow.
                    </BlogText>

                    <BlogHeader>What to demand when someone hands this over</BlogHeader>
                    <BlogText>
                        If the person who built it cannot produce this list, you do not own the integration, you are renting an arrangement only they understand. Six artifacts: a dated event dictionary and data-flow map, consent-state test results, redacted request evidence from both paths, deduplication and refund checks, a reconciliation separating delivery from attribution from business records, and named owners for monitoring and incidents.
                    </BlogText>
                    <BlogList
                        items={[
                            "A dated event dictionary and data-flow map.",
                            "Consent-state test results for representative regions and journeys.",
                            "Browser and server request evidence with secrets and personal data redacted.",
                            "Deduplication, value, currency, timestamp, refund, and test-traffic checks.",
                            "A reconciliation report that separates delivery, attribution, and business records.",
                            "Named owners for monitoring, vendor changes, incident response, retention, and deletion.",
                        ]}
                    />
                    <BlogText>
                        If the person who built it cannot produce that list, you do not own the integration, you are
                        renting an arrangement only they understand. Be equally wary of the report that comes back: any
                        measurement worth acting on carries the date it was taken, what was in scope, and what it cannot
                        tell you. Nobody can honestly promise that a technical change will return a fixed share of your
                        conversions.
                    </BlogText>
                    <BlogText>
                        We scope this work as part of{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">e-commerce development</Link>, the
                        project tiers it sits in are listed on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>, and you can see how we
                        build owned commerce systems in the{" "}
                        <Link href="/work/panda-patches" className="text-cognac hover:underline font-medium">Panda Patches case study</Link>{" "}
                        alongside the rest of our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">client work</Link>. To talk through a specific
                        store, <Link href="/contact" className="text-cognac hover:underline font-medium">get in touch</Link>.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><a href="https://www.facebook.com/legal/terms/businesstools" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Meta Business Tools Terms</a></li>
                        <li><a href="https://www.facebook.com/legal/terms/dataprocessing" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Meta Data Processing Terms</a></li>
                        <li><a href="https://developers.facebook.com/docs/marketing-api/conversions-api/" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Meta Conversions API documentation</a></li>
                        <li><a href="https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Meta guidance for deduplicating Pixel and server events</a></li>
                        <li><a href="https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Shopify: checkout.liquid deprecation and its dates</a></li>
                        <li><a href="https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>WebKit: full third-party cookie blocking and the seven-day storage limit</a></li>
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your measurement integration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will map the event path, inspect the current integration, and define a consent-aware,
                            testable scope. Any implementation, outcome, and support commitment belongs in the accepted
                            statement of work.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Tracking Audit <ArrowRight className="h-4 w-4" />
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
