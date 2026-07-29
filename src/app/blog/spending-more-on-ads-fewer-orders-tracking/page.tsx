import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, DatabaseZap, GitCompareArrows, ShieldCheck, Waypoints } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const postId = "spending-more-on-ads-fewer-orders-tracking";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Spending More on Ads but Getting Fewer Orders? Audit Tracking";
const description =
    "Reconcile orders, browser and server events, platform diagnostics, consent and attribution before blaming tracking for rising ad cost or promising a Conversions API lift.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "spending more on ads fewer orders",
        "Meta Conversions API audit",
        "Meta pixel tracking",
        "Google enhanced conversions",
        "ecommerce conversion tracking",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-06-04",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/spending-more-on-ads-fewer-orders-tracking")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Meta: set up the Meta pixel and Conversions API",
        url: "https://www.facebook.com/help/messenger-app/952192354843755",
    },
    {
        name: "Meta Business Tools overview",
        url: "https://www.facebook.com/help/331509497253087/",
    },
    {
        name: "Meta data-processing terms",
        url: "https://www.facebook.com/legal/terms/dataprocessing",
    },
    {
        name: "Google Ads: enhanced conversions for web",
        url: "https://support.google.com/google-ads/answer/15712870",
    },
    {
        name: "Google: consent mode implementation",
        url: "https://developers.google.com/tag-platform/security/guides/consent",
    },
    {
        name: "Google: consent mode overview",
        url: "https://developers.google.com/tag-platform/security/concepts/consent-mode",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-06-04",
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
            articleSection: "Advertising measurement",
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function SpendingMoreOnAdsTrackingPage() {
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
                            { label: "Ad tracking audit", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Advertising measurement</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Spending More on Ads but Getting Fewer Orders? <span className="italic text-cognac">Audit Tracking</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Tracking can be incomplete, duplicated or misattributed, but it is not the automatic cause
                            of higher acquisition cost. Reconcile business outcomes with event delivery, consent and
                            platform reporting before changing campaigns or promising that server events will fix them.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Meta and Google guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Jun 4, 2026" readTime="12 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Separate four questions</h2>
                        <BlogList
                            items={[
                                "Did the business event actually happen in the system of record?",
                                "Was an eligible, consented event sent from the browser, server or both?",
                                "Did the platform receive, match, deduplicate and accept it?",
                                "How did the selected attribution model report and use it?",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: DatabaseZap, title: "Truth", body: "Order, lead, refund and value in the source system." },
                            { icon: Waypoints, title: "Delivery", body: "Browser and server payloads, timing and errors." },
                            { icon: GitCompareArrows, title: "Reconcile", body: "Coverage, duplicates, match and attribution." },
                            { icon: ShieldCheck, title: "Govern", body: "Consent, purpose, minimization, access and retention." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Diagnose the business result before the tracking stack</BlogHeader>
                    <BlogList
                        items={[
                            "Confirm orders, paid revenue, cancellations, refunds and contribution margin.",
                            "Compare spend, impressions, clicks, landing sessions and product availability.",
                            "Review creative, audience, bidding, campaign structure and market changes.",
                            "Inspect landing, product, cart and checkout conversion by device and source.",
                            "Check pricing, shipping, promotion, payment and site-error changes.",
                        ]}
                    />
                    <BlogText>
                        A lower platform-reported conversion count can reflect fewer orders, a measurement gap, an
                        attribution change or more than one at once. Do not treat the ad dashboard as the system of
                        record for fulfilled commerce. For the event-path side of the same investigation, work through{" "}
                        <Link href="/blog/fix-meta-ad-tracking-2026" className="text-cognac hover:underline font-medium">diagnosing a Meta tracking data path</Link>.
                    </BlogText>

                    <BlogHeader>2. Define the event contract</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[800px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Field</th><th className="p-4">Definition</th><th className="p-4">Acceptance evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Event</td><td className="p-4">Business action and trigger</td><td className="p-4">Test order or lead tied to the source record</td></tr>
                                <tr><td className="p-4 font-bold">Identity</td><td className="p-4">Permitted identifiers and normalization</td><td className="p-4">Platform diagnostics without exposing raw data</td></tr>
                                <tr><td className="p-4 font-bold">Value</td><td className="p-4">Currency, gross or net value and refund treatment</td><td className="p-4">Matches the approved finance definition</td></tr>
                                <tr><td className="p-4 font-bold">Consent</td><td className="p-4">Required state and regional policy</td><td className="p-4">Pre-consent, accept, reject and revoke tests</td></tr>
                                <tr><td className="p-4 font-bold">Deduplication</td><td className="p-4">Shared stable event identifier and rule</td><td className="p-4">One accepted business event, not two counted copies</td></tr>
                                <tr><td className="p-4 font-bold">Ownership</td><td className="p-4">Business and technical owners</td><td className="p-4">Runbook, access and change approval</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>3. Reconcile coverage instead of assuming a fixed loss rate</BlogHeader>
                    <BlogText>
                        For each eligible event in the system of record, check browser delivery, server delivery,
                        platform receipt and reported attribution. Segment by consent state, browser, device, market,
                        payment method and implementation version. Exclude test, cancelled and refunded events according
                        to the approved definition.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no industry tracking-loss figure here">
                        We do not publish a single share for how much conversion data browser tracking misses. That
                        share depends on your consent rates, browser and device mix, markets, payment methods and
                        implementation version, and it shifts with every release, so a figure stated without a sample
                        and a reconciliation method is not one you should plan against. Reconcile your own eligible
                        events against platform receipts, segment the gap, and treat rising ad cost as a separate
                        question until your own reconciliation shows what is actually missing.
                    </InsightBox>

                    <BlogHeader>4. Use Meta Pixel and Conversions API deliberately</BlogHeader>
                    <BlogText>
                        Meta recommends Conversions API alongside the Pixel when events are shared from a website. Meta
                        offers partner, gateway and manual setup paths. The right path depends on required events,
                        systems, consent, data policy, infrastructure and operating ownership. What each path involves as
                        a piece of work is broken down in our guide to a{" "}
                        <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">server-side Conversions API build</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Send only permitted fields required for the documented purpose.",
                            "Normalize and protect identifiers according to current platform requirements.",
                            "Deduplicate browser and server copies of the same business event.",
                            "Test timestamps, currency, value, source URL and action source.",
                            "Monitor rejected, delayed, duplicated and malformed events after releases.",
                            "Rotate credentials and restrict access to the smallest operational group.",
                        ]}
                    />

                    <BlogHeader>5. Treat Event Match Quality as a diagnostic</BlogHeader>
                    <BlogText>
                        Platform diagnostics can show whether identifiers and event parameters are useful for matching.
                        They do not directly set an advertiser&apos;s cost or prove incremental return. Improve missing or
                        invalid fields only when collection and use are permitted, then evaluate measurement and
                        campaign outcomes separately.
                    </BlogText>

                    <figure className="my-8">
                        <Image
                            src="/blog-images/capi-conversions-lift-10pct.jpeg"
                            alt="Meta Events Manager note stating the Conversions API reported about 10 percent more Lead conversions over the last 7 days compared with the pixel alone."
                            width={1200}
                            height={700}
                            className="h-auto w-full rounded-xl border border-stone-200 shadow-xs"
                        />
                        <figcaption className="mt-2 text-center text-xs italic text-stone-500">
                            Meta&apos;s own reporting note for the same account: the Conversions API reported roughly 10%
                            more Lead conversions over a recent 7-day window than the pixel alone.
                        </figcaption>
                    </figure>

                    <InsightBox variant="info" label="How to read these two screenshots">
                        These are first-party captures from{" "}
                        <Link href="/work/panda-patches" className="text-cognac hover:underline font-medium">Panda Patches</Link>, which is owned by a PandaCodeGen co-founder, so
                        treat them as our own operating evidence rather than an independent client result. They show what
                        Meta reported for one account over one short window. A ~10% difference in <em>reported</em> Lead
                        conversions is a measurement change, not proof that 10% more leads existed, and not a forecast for
                        your account. Event Match Quality is a matching diagnostic: a 9.0 on Lead and a 6.7 on Purchase in
                        the same account is the useful signal, because it points at which event is missing parameters.
                        Your own numbers depend on your traffic, consent rates and which identifiers you are permitted to
                        collect and send.
                    </InsightBox>

                    <BlogHeader>6. Implement Google enhanced conversions under current rules</BlogHeader>
                    <BlogText>
                        Google describes enhanced conversions for web as supplementing existing conversion tracking with
                        hashed first-party customer data. In April 2026, Google began unifying the web and lead settings
                        while continuing to support tag, Data Manager and API inputs. Verify the current account setup
                        rather than following an older screenshot tutorial.
                    </BlogText>

                    <BlogHeader>7. Make consent behavior testable</BlogHeader>
                    <BlogText>
                        Google&apos;s current consent guidance requires the default state to be set before measurement
                        commands and updated when the user makes or changes a choice. The organization remains
                        responsible for its policy, legal basis and regional configuration. Server delivery does not
                        bypass consent or data-protection obligations.
                    </BlogText>
                    <BlogList
                        items={[
                            "Test first visit before any choice.",
                            "Test granular acceptance and rejection.",
                            "Test preference persistence across pages and return visits.",
                            "Test revocation and deletion or suppression workflows.",
                            "Inspect actual network and server behavior, not only the banner UI.",
                        ]}
                    />

                    <BlogHeader>8. Keep AI discovery outside the ad-tracking claim</BlogHeader>
                    <BlogText>
                        Product feeds, structured data and crawlable content can help eligible discovery systems
                        understand products. That is a different system from Meta or Google Ads event delivery. A clean
                        ad-event implementation does not guarantee an AI recommendation, citation or attributed sale.
                        We treat that as a separate subject in{" "}
                        <Link href="/blog/agentic-browsing-pagespeed-score" className="text-cognac hover:underline font-medium">how agentic browsers read a page</Link>{" "}
                        and in our review of{" "}
                        <Link href="/blog/google-universal-commerce-protocol-what-it-means-for-your-store" className="text-cognac hover:underline font-medium">Google&apos;s Universal Commerce Protocol</Link>.
                    </BlogText>

                    <BlogHeader>9. Compare implementation paths on total operation</BlogHeader>
                    <BlogList
                        items={[
                            "Native or partner integration: supported scope, setup, recurring cost, data path and limits.",
                            "Gateway or managed server tagging: hosting, configuration, support, data path and exit.",
                            "Direct integration: engineering control plus credentials, monitoring, maintenance and API change ownership.",
                            "Agency implementation: accepted events, systems, consent, testing, documentation, support and ownership.",
                        ]}
                    />
                    <InsightBox variant="info" label="PandaCodeGen scope">
                        Server-side advertising events can be included when the accepted project scope names the events,
                        systems, consent behavior and acceptance evidence. They are not automatically included in every
                        website tier, and PandaCodeGen does not promise an attribution, ROAS or revenue lift. Scope is
                        defined in the proposal for{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">e-commerce development</Link>{" "}
                        or{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering</Link>, and the
                        tiers are listed on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>.
                    </InsightBox>

                    <BlogHeader>10. Require acceptance evidence</BlogHeader>
                    <BlogList
                        items={[
                            "A source-of-truth reconciliation for a defined test period.",
                            "Browser and server event traces with sensitive values redacted.",
                            "Deduplication, currency, value, refund and repeated-event tests.",
                            "Platform receipt and diagnostic screenshots tied to named test events.",
                            "Consent-state, browser, device and regional test results.",
                            "Runbook, owners, credentials, alerts and post-release monitoring.",
                        ]}
                    />
                    <BlogText>
                        Where a business needs its own view of that reconciliation rather than a vendor dashboard, the{" "}
                        <Link href="/work/enterprise-ops" className="text-cognac hover:underline font-medium">operations dashboards we build</Link>{" "}
                        show one approach, and the rest of our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">client work</Link> covers the storefronts around
                        them. What transfers to you at handover is set out in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline font-medium">who owns your website</Link>.
                        To review a specific account, <Link href="/contact" className="text-cognac hover:underline font-medium">get in touch</Link>.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <GitCompareArrows className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map the system of record, browser and server events, consent, platform diagnostics
                            and operating ownership before scoping a tracking repair or storefront migration.
                        </p>
                        <QuoteModalButton cta="ad_tracking_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
