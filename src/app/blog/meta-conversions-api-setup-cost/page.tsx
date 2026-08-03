import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Server, ShieldCheck } from "lucide-react";
import Image from "next/image";
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

const postId = "meta-conversions-api-setup-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Meta Conversions API Setup Cost: A Scope-Based Guide";
const description =
    "Plan Meta Conversions API cost from events, systems, consent, matching, deduplication, QA and monitoring, with a carefully labeled Panda Patches screenshot.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Meta Conversions API setup cost",
        "Meta CAPI implementation",
        "server-side event tracking",
        "Meta event deduplication",
        "Event Match Quality",
        "Meta CAPI cost",
        "server side tracking cost",
        "conversions API vs pixel",
        "is conversions API worth it",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-06-14",
        modifiedTime: "2026-07-31",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/meta-conversions-api-setup-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Meta developer documentation: Conversions API",
        url: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
    },
    {
        name: "Meta developer documentation: deduplicate Pixel and server events",
        url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
    },
    { name: "Meta Business Tools Terms", url: "https://www.facebook.com/legal/terms/businesstools" },
    { name: "Meta Data Processing Terms", url: "https://www.facebook.com/legal/terms/dataprocessing" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/meta-conversions-api-setup-cost"),
            description,
            datePublished: "2026-06-14",
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
            wordCount: 3200,
            timeRequired: "PT10M",
            about: [
                { "@type": "Thing", name: "Conversions API", sameAs: ["https://developers.facebook.com/docs/marketing-api/conversions-api/"] },
                { "@type": "Thing", name: "Meta Pixel", sameAs: ["https://www.facebook.com/business/tools/meta-pixel"] },
                { "@type": "Thing", name: "Conversion Tracking" },
                { "@type": "Thing", name: "Web Analytics", sameAs: ["https://en.wikipedia.org/wiki/Web_analytics"] },
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
                { "@type": "ListItem", position: 3, name: "Meta CAPI cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-06-14",
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function MetaCAPISetupCostPage() {
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
                            { label: "Meta CAPI cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Measurement architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Meta Conversions API Cost <span className="italic text-cognac">Starts With Scope</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Nobody can quote Conversions API honestly without knowing your setup. What it costs depends
                            on how many events you send, which systems they come from, how you handle consent, what
                            customer details you are allowed to include, how you stop the same event counting twice, and
                            how much testing it takes before you trust the numbers. Doing it well can get more of your
                            events through to Meta. It does not guarantee more accurate attribution, cheaper campaigns,
                            or extra sales.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 31, 2026 against current Meta documentation and founder-affiliated first-party evidence.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="June 14, 2026" readTime="10 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">What a responsible estimate covers</h2>
                        <BlogList
                            items={[
                                "Which system is the source of truth, and exactly which business events you are sending.",
                                "What you have lawful consent to collect, and which customer details you are allowed to include.",
                                "How a browser event and a server event are recognized as the same event, so nothing counts twice, and what happens when a send fails.",
                                "Testing it with Test Events, checking the live numbers against your own records, and naming who watches it afterwards.",
                                "What your partner, payment gateway, cloud provider and ongoing maintenance cost, not just the hours to build it.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: Database, title: "Data map", body: "Source, purpose, fields, consent state, retention, recipients and deletion path." },
                            { icon: Server, title: "Delivery", body: "Trigger, validation, event ID, deduplication, retries, errors and monitoring." },
                            { icon: ShieldCheck, title: "Governance", body: "Terms, notices, access, secrets, processors, incident handling and evidence." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What Meta Conversions API does</BlogHeader>
                    <BlogText>
                        Conversions API sends supported marketing data from a server, website platform, app, CRM or
                        other business system to Meta. It can complement browser events. Browser delivery can be
                        affected by loading, connectivity, browser controls and implementation failures, but the size
                        of any missing-event gap must be measured against the business&apos;s own accepted system of
                        record.
                    </BlogText>
                    <BlogText>
                        Sending events from your own server does not get you around consent rules. Before you build it,
                        write down why you are collecting each thing, what gives you the right to, what you tell people,
                        what happens when someone opts out, which fields you are allowed to send, how long you keep
                        them, who can see them, and who processes them for you. Get privacy counsel to look at it where
                        that matters. Meta&apos;s Business Tools and Data Processing Terms apply on top of all of that.
                    </BlogText>

                    <InsightBox variant="tip" label="If you are not the person who will build this">
                        The short version, before the detail. Your Meta pixel runs in your customer&apos;s browser, so it
                        only reports what that browser manages to send. Conversions API is the other half: your own
                        systems report the sale directly to Meta from the record that knows it happened. You normally run
                        both, and you give Meta a shared reference so one sale is not counted twice. What you are buying
                        is not a product with a price on it, it is the work of deciding which events matter, where the
                        truth about each one lives, what you are allowed to send about the customer, and how anyone
                        proves afterwards that it works. That is why the rest of this article talks about scope rather
                        than quoting you a number.
                    </InsightBox>

                    <BlogHeader id="routes">Is the Conversions API free, and what are you actually paying for?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The API itself is free. What costs money is the route you take to it, and there are four.
                            <strong> Start at the top of this list and stop at the first one that works for you</strong>,
                            because the cheapest route that covers your events is the right answer and most stores never
                            need to go past the second.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Meta-enabled Conversions API. Meta announced this on April 15, 2026 and describes it as a one-click option requiring \u201cno technical expertise, no costs, no ongoing maintenance\u201d. It mirrors what your Pixel already sends, so it fixes delivery rather than payload. It is free, it takes minutes, and it post-dates most cost articles you will find. Turn it on before you price anything.",
                            "A platform or partner integration. If you are on Shopify, WooCommerce or a similar platform, the native integration is included in what you already pay and is usually a setting rather than a project. Same rule: free first.",
                            "Meta's Conversions API Gateway, or a hosted server-side container. A monthly service fee plus whatever infrastructure it runs on. Worth it when you need to send events the Pixel cannot see, or to control payload across several destinations at once.",
                            "A custom server-side build. This is the only route with real engineering in it, and the only one where a four-figure number is honest. You are paying for event mapping, identifier handling, consent, deduplication, retries, logging and the tests that prove it works.",
                        ]}
                    />
                    <BlogText>
                        The reason published ranges disagree so violently is that they average those four routes into one
                        number. A $0 toggle and a bespoke integration are both truthfully called &ldquo;setting up the
                        Conversions API&rdquo;. Establish which route you need before you accept any figure, including
                        ours, and re-run your reconciliation after the free options are on. If the gap closes, you are
                        finished and you have spent nothing.
                    </BlogText>

                    <BlogHeader>Why cost ranges without scope are misleading</BlogHeader>
                    <BlogText>
                        We do not publish a market price range for a Conversions API build, and we would treat one you find elsewhere with caution. Published ranges disagree so violently because they average unlike routes into one number. Five variables move the real figure, and the first is the one most quotes never establish: how many events, across how many systems, with what data quality already in place.
                    </BlogText>
                    <BlogList
                        items={[
                            "One lead form and one thank-you event is not equivalent to catalog, checkout, refunds, subscriptions and offline sales.",
                            "A native platform or partner integration is different from a direct custom integration across several systems.",
                            "Existing consent, identity, CRM and order data quality can reduce or increase implementation work.",
                            "Historical backfill, offline events, multiple pixels, markets, domains and business units add design and test cases.",
                            "Monitoring, vendor changes, incident response and future event changes create ongoing ownership work.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why there is no market price range here">
                        We do not publish a market price range for a Conversions API build, and we would treat one you
                        find elsewhere with caution. What the work costs depends on how many events you need, whether
                        your checkout is hosted, which systems hold the source of truth, how consent is handled and who
                        maintains it afterwards. A range quoted without those specifics is describing a different project
                        from yours. Price the system in front of you using the drivers below, and ask any vendor to do
                        the same rather than quoting from a table.
                    </InsightBox>

                    <BlogHeader>A practical discovery worksheet</BlogHeader>
                    <BlogText>
                        Acceptance, cure, support and change-control terms get written before a price is attached, not after. Six things fill in first: each event with its trigger and authoritative record, the shared event ID used for deduplication, every customer parameter mapped to source and permission, the delivery route with its recurring charges named, and the reconciliation tolerance you will accept. A quote produced without these is pricing a different project.
                    </BlogText>
                    <BlogList
                        items={[
                            "List each event, its trigger and its authoritative record, including cancellation, refund and test-event rules.",
                            "Record the browser event name, server event name and shared event ID used for deduplication.",
                            "Map every customer-information parameter to its source, normalization, permission and transmission rule.",
                            "Choose direct, partner or gateway delivery and name every processor, account owner and recurring charge.",
                            "Define Test Events evidence, production reconciliation tolerance, alerting, logs and retry limits.",
                            "Write acceptance, cure, support and change-control terms before attaching a price.",
                        ]}
                    />

                    <BlogHeader>Deduplication must be tested, not promised</BlogHeader>
                    <BlogText>
                        When browser and server channels send the same logical event, Meta documents deduplication using
                        matching event identity. The implementation should create that identity at the appropriate
                        business action, reuse it across both channels and verify behavior in Meta&apos;s tools. Duplicate
                        suppression, retries and delayed events require explicit tests. “Never double-counts” is not a
                        responsible guarantee.
                    </BlogText>
                    <BlogList
                        items={[
                            "Generate the event ID at the business action, not in the browser and again on the server, so both channels can carry the same value.",
                            "Send the same event name on both channels. Meta matches on event name plus event ID, so a browser Purchase and a server purchase_completed will not deduplicate.",
                            "Store the event ID against the order or lead record. A retry hours later must reuse the original ID, not mint a new one.",
                            "Test the awkward paths explicitly: a refund, a canceled order, a duplicate form submission, a delayed webhook and a manually created order.",
                        ]}
                    />

                    <BlogHeader>How the integration is actually put together</BlogHeader>
                    <BlogText>
                        The engineering is not exotic, but every step is a decision that has to be written down before it
                        can be priced. This is the sequence we work through on a build.
                    </BlogText>
                    <BlogList
                        items={[
                            "Capture ad click identifiers on landing. Meta's fbclid arrives on the URL and becomes the _fbc cookie; _fbp is the browser cookie Meta's own script sets. Persist both against the visitor so a purchase three days later can still carry them.",
                            "Pick the system of record for each event. A paid order should be reported by whatever system knows the payment succeeded, usually the order database or the payment webhook, not a thank-you page that may never load.",
                            "Fire the server event from that system, with the event ID, event time, action source and the customer-information parameters the consent state permits.",
                            "Normalize and hash the match keys before sending. Meta requires SHA-256 hashing for email, phone, name, city and similar fields, with trimming and lower-casing applied first. Get the normalization wrong and the hash will simply never match.",
                            "Handle the hosted-checkout handoff deliberately. Stripe, Square, Calendly and CRM-hosted forms move the buyer off your domain, which is exactly where a browser-only pixel loses sight of the conversion. A server event from the payment record covers that hop.",
                            "Decide what happens to offline, phone and manually created orders. They can be sent, but they arrive without _fbc, _fbp or UTM values, so plan for weaker matching rather than pretending it is equivalent.",
                            "Wire up retries, dead-letter logging and an alert for a drop in accepted events, then name the person who owns that alert.",
                        ]}
                    />
                    <BlogText>
                        None of this recovers a user who opted out, and none of it repairs an attribution gap on its own.
                        It changes how the events you are permitted to send get delivered and matched, which is a
                        measurement change, not a demand-generation one.
                    </BlogText>

                    <BlogHeader>Match keys are what move Event Match Quality</BlogHeader>
                    <BlogText>
                        Event Match Quality reflects how much usable customer information travels with an event. One
                        hashed email is thin. Email plus _fbp, IP and user agent is better. Email plus _fbc, _fbp, IP,
                        user agent and campaign parameters is better again. That single mechanism explains most of the
                        variation you will see between events on the same account.
                    </BlogText>
                    <InsightBox variant="info" label="The mechanism, without the dashboard">
                        We previously illustrated this with a screenshot of our own order-level monitoring view. It has
                        been removed because the customer column was not adequately redacted, and no marketing point is
                        worth publishing customer names. The pattern it showed is simple enough to state: orders carrying
                        only an email address estimate lower than orders carrying an email plus _fbc, _fbp, IP address,
                        user agent and UTM values. More signals present at the moment of the event, higher the match
                        quality. You can observe the same thing in your own data without anyone else seeing it.
                    </InsightBox>

                    <BlogHeader>What the Panda Patches screenshot shows</BlogHeader>
                    <figure className="my-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                        <Image
                            src="/blog-images/capi-conversions-lift-10pct.jpeg"
                            alt="Owner-provided Panda Patches Meta Events Manager screenshot showing a seven-day Lead comparison and Lead Event Match Quality"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                        <figcaption className="p-4 text-sm leading-relaxed text-stone-600">
                            Founder-affiliated first-party screenshot. Panda Patches is owned and operated by
                            PandaCodeGen co-founder Imran Raza Ladhani, so this is not independent client proof. The
                            visible interface reports about 10.4% more Lead events through Conversions API alongside the
                            pixel for a displayed seven-day view and shows Lead Event Match Quality of 9.0/10. The
                            capture year is not visible in the image. This is one account over one short window, a
                            change in what the platform reports rather than evidence of more leads occurring, and it is
                            not a forecast, benchmark or audited experiment.
                        </figcaption>
                    </figure>
                    <BlogText>
                        The same view shows Event Match Quality per event on that account: Lead 9.0/10, Initiate
                        checkout 8.8, Contact 8.6, Purchase 6.7 and PageView 6.2. The spread is instructive rather than
                        impressive. Lead events carry a form submission with identifiable fields. PageView is anonymous
                        traffic with almost nothing to match against, so it caps low on any account and chasing that
                        number is wasted effort. Purchase sits lower here because the account sends offline and
                        manually created orders that arrive without click identifiers.
                    </BlogText>
                    <BlogText>
                        Event Match Quality tells you one thing: how much customer detail you managed to send Meta for
                        matching. A good score does not prove you have consent, that your own records are right, that
                        events are not being counted twice, that attribution is correct, or that your campaigns are
                        working any better. Check the events Meta accepted against your own system of record, and keep a
                        note of the date, the filters you used, and what was live at the time.
                    </BlogText>

                    <BlogHeader>Diagnose before you buy</BlogHeader>
                    <BlogText>
                        Run this sequence before accepting any quote. It usually takes an afternoon and it either
                        justifies the project or saves you the money.
                    </BlogText>
                    <BlogList
                        items={[
                            "Count the real conversions in your own system of record for a fixed period, by date and market. That number is the denominator for everything else.",
                            "Compare it against what Events Manager reports for the same period and the same event, with the same attribution window and filters.",
                            "Open the Diagnostics tab and read the actual warnings. Missing parameters, unhashed data, invalid event times and redundant purchase events are common and are usually implementation faults rather than a reason to buy anything.",
                            "Segment the gap by path. Orders that completed on your own domain, orders that completed on a hosted checkout, and orders created by staff by phone or in person behave very differently.",
                            "Check whether the events you are losing arrive with any click identifier at all. If they do not, server delivery will send them but will match them weakly.",
                            "Only then decide what to build, and write the observed numbers into the scope so acceptance can be tested against them.",
                        ]}
                    />
                    <figure className="my-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                        <Image
                            src="/blog-images/capi-tracked-vs-untracked.png"
                            alt="Internal dashboard tiles showing tracked and untracked Conversions API events, with the untracked count annotated as missing fbc, fbp and UTM values"
                            width={1589}
                            height={583}
                            className="h-auto w-full"
                        />
                        <figcaption className="p-4 text-sm leading-relaxed text-stone-600">
                            Founder-affiliated evidence from the same Panda Patches account, shown in our own internal
                            monitoring tool rather than Meta&apos;s interface. Of 36 events sent to Meta in the window
                            displayed, 19 carried click identifiers and 17 did not, the untracked group being orders
                            created without _fbc, _fbp or UTM values. This is the diagnostic split worth measuring on
                            your own account. It is a very small sample from one account and the other tiles on this
                            dashboard relate to that store&apos;s internal quote workflow, not to Conversions API.
                        </figcaption>
                    </figure>

                    <BlogHeader>Direct, partner and gateway approaches</BlogHeader>
                    <BlogText>
                        Each route trades a different thing away. “No middleware subscription” is not the same as zero ongoing cost or no third party, because a direct integration still depends on Meta and on your own hosting, databases or queues. A native or partner integration reduces custom work and brings its own supported-event set and recurring charges. A gateway centralizes delivery and adds infrastructure you now operate.
                    </BlogText>
                    <BlogList
                        items={[
                            "A native or partner integration may reduce custom work but introduces its own supported-event set, terms, data path and recurring charges.",
                            "A gateway can centralize delivery while adding infrastructure, configuration and processor responsibilities.",
                            "A direct integration offers implementation control but still uses Meta and hosting services and requires maintenance, monitoring and secure credential handling.",
                        ]}
                    />
                    <BlogText>
                        “No middleware subscription” is not the same as zero ongoing cost or no third party. The
                        application still depends on Meta and its hosting, databases or queues. Compare current vendor
                        terms, commercial-use permissions, included usage and support before accepting an option.
                    </BlogText>

                    <BlogHeader>What actually moves the price</BlogHeader>
                    <BlogText>
                        A Conversions API integration sits in our Scale tier at $5,000 to $10,000; our Starter and Growth tiers, at $1,500 and $3,500, do not include one. What moves a quote within Scale is scope rather than the platform. We will not print a market range we cannot stand behind. What we can give you is the set of
                        variables that decide whether a build sits at the bottom or the top of whatever quote you are
                        given, so you can push a vendor on the ones that apply to you.
                    </BlogText>
                    <div className="responsive-stack-wrap my-8 overflow-x-auto">
                        <table className="responsive-stack-table w-full min-w-[560px] border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-stone-300 bg-stone-50">
                                    <th className="p-3 text-left font-semibold text-stone-700">Cost driver</th>
                                    <th className="p-3 text-left font-semibold text-stone-700">Cheaper end</th>
                                    <th className="p-3 text-left font-semibold text-stone-700">Expensive end</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Event set", "One lead event and one confirmation", "Catalog, checkout, subscriptions, refunds, offline sales"],
                                    ["Source systems", "One platform that already holds the order", "CRM, ERP, payment processor and site all in the path"],
                                    ["Consent model", "One market, one banner, one lawful basis", "Multiple regions, per-purpose consent, suppression rules"],
                                    ["Identity data", "Clean, normalized email and phone already stored", "Sparse, unvalidated or duplicated customer records"],
                                    ["Deduplication", "Browser and server both built by the same team", "An existing pixel or tag manager setup nobody owns"],
                                    ["Accounts and domains", "One pixel, one domain, one business unit", "Several pixels, markets, brands or subdomains"],
                                    ["Backfill and offline", "None required", "Historical import plus ongoing offline event uploads"],
                                    ["Ongoing ownership", "Client takes the alerts after handover", "Monitored, reconciled and maintained under a retainer"],
                                ].map(([driver, low, high]) => (
                                    <tr key={driver} className="hover:bg-stone-50">
                                        <td className="p-3 font-medium text-stone-700">{driver}</td>
                                        <td data-label="Cheaper end" className="p-3 text-stone-600">{low}</td>
                                        <td data-label="Expensive end" className="p-3 text-stone-600">{high}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>Who needs this, and who does not</BlogHeader>
                    <BlogText>
                        Plenty of sites are sold a Conversions API build they have no use for yet. The honest line runs
                        roughly here.
                    </BlogText>
                    <BlogText>
                        <strong>It is worth scoping if</strong> you spend meaningfully on Meta ads every month, you take
                        leads or payments online, and your conversion completes somewhere a browser script cannot
                        reliably reach: a hosted checkout, a booking tool, a CRM-hosted form, a phone call, or an order
                        your staff key in later.
                    </BlogText>
                    <BlogText>
                        <strong>You do not need this yet if</strong> you are not running paid Meta ads, if your spend is
                        small enough that better-delivered events will not change a single budget decision you make, or
                        if you have not yet fixed the plainer problems first. A broken pixel, an event that fires on the
                        wrong element, a missing consent banner or a checkout nobody has tested will each distort your
                        numbers more than browser loss does, and all of them are cheaper to fix. Reconcile against your
                        own records first. If the gap is small, spend the money on the offer instead.
                    </BlogText>

                    <BlogHeader>How PandaCodeGen scopes the work</BlogHeader>
                    <BlogText>
                        Conversions API can be included in an accepted Scale project starting at $5,000 when the signed
                        scope names the required events, systems and acceptance tests. It is not automatically included
                        in every project, and complex commerce, CRM, offline-event or multi-market requirements can
                        change the price. The public tier is a starting point, not a quote.
                    </BlogText>
                    <BlogText>
                        For clarity on where it sits in the tiers: Starter from $1,500 and Growth from $3,500 do not
                        include a Conversions API integration. Scale runs $5,000 to $10,000, and an accepted scope at
                        that tier is where the integration belongs. At the upper end of Scale we can add event-quality
                        and reconciliation monitoring you can read yourself, and fold ongoing measurement work into a
                        retainer. See the <Link href="/pricing" className="text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">pricing page</Link> for the full breakdown.
                    </BlogText>
                    <BlogList
                        items={[
                            "30% is due at onboarding and 70% at delivery under the accepted project terms.",
                            "The client controls its business accounts and credentials when the agreed account model provides that access.",
                            "Reusable internal tools and pre-existing code remain PandaCodeGen property; project deliverables and third-party licenses follow the signed terms.",
                            "Support scope and duration follow the selected package and accepted agreement.",
                        ]}
                    />

                    <BlogHeader>Questions to put to any vendor</BlogHeader>
                    <BlogText>
                        Ask these before signing, whoever you hire. A vendor who cannot answer them in writing is
                        quoting a guess.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which exact events will you send, from which system, and what is the authoritative record for each one?",
                            "Who holds the access token and the pixel or dataset, and does it stay in our business account if we part ways?",
                            "Does any third party sit in the data path, and if so, under whose contract and at what recurring cost?",
                            "How is deduplication implemented, and what test will you show us that proves it works for refunds, retries and delayed events?",
                            "What happens to events when a user withholds or withdraws consent, and how is that tested per region?",
                            "What is the written acceptance test, what is the cure period if it fails, and what is included in support afterwards?",
                            "What are we expected to maintain after handover, and what will alert us when events stop arriving?",
                        ]}
                    />

                    <BlogHeader>Acceptance evidence</BlogHeader>
                    <BlogText>
                        Never double-counts is not a responsible guarantee, so acceptance is demonstrated rather than asserted. Six artifacts do it: a signed event matrix matching what was deployed, consent and suppression tested per region, browser and server examples visible in Test Events, production events reconciling to the source of truth within a written tolerance, duplicate and refund behavior shown working, and the secrets, monitoring and change ownership handed over.
                    </BlogText>
                    <BlogList
                        items={[
                            "A signed event matrix and data-flow diagram match the deployed implementation.",
                            "Consent and suppression states are tested for each applicable region or user state.",
                            "Browser and server examples appear in Test Events with expected fields and shared identity where required.",
                            "Accepted production events reconcile to the system of record within a written tolerance and period.",
                            "Duplicate, retry, failure, refund and test-record behavior is demonstrated.",
                            "Secrets, access, monitoring, runbooks and change ownership are handed over as agreed.",
                        ]}
                    />

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Bring your event list, platform, CRM or order system and current Meta diagnostics. We will
                            identify the smallest responsible implementation and put the data path, acceptance and
                            operating responsibilities into the scope.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <section className="mt-12">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">Related reading</h2>
                        <p className="leading-relaxed text-stone-700">
                            For how to audit where conversion signal is being lost before you buy anything, read{" "}
                            <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className={sourceLinkClass}>
                                spending more on ads but getting fewer orders
                            </Link>
                            . For the wider Meta tracking picture in 2026, see{" "}
                            <Link href="/blog/fix-meta-ad-tracking-2026" className={sourceLinkClass}>
                                fixing Meta ad tracking
                            </Link>
                            . For the recurring software bill that funds work like this, see the{" "}
                            <Link href="/blog/shopify-app-costs-real-monthly-bill" className={sourceLinkClass}>
                                real Shopify app cost breakdown
                            </Link>
                            .
                        </p>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
