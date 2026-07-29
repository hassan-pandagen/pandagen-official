import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, GitCompareArrows, ShieldCheck, Wrench } from "lucide-react";
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
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-06",
        modifiedTime: "2026-07-24",
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
            articleSection: "Measurement",
            inLanguage: "en-US",
            citation: [
                {
                    "@type": "WebPage",
                    name: "Meta Business Tools Terms",
                    url: "https://www.facebook.com/legal/terms/businesstools",
                },
                {
                    "@type": "WebPage",
                    name: "Meta Data Processing Terms",
                    url: "https://www.facebook.com/legal/terms/dataprocessing",
                },
                {
                    "@type": "WebPage",
                    name: "Meta Conversions API documentation",
                    url: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
                },
                {
                    "@type": "WebPage",
                    name: "Meta Pixel and Conversions API deduplication",
                    url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
                },
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
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Meta ad tracking diagnostic", href: "/blog/fix-meta-ad-tracking-2026" },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Measurement and privacy</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Meta Ad Tracking Not Working? <span className="italic text-cognac">Diagnose the Data Path</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Ads Manager, your shop and your analytics tool can all report different numbers
                            without any of them being wrong. Work out what each system is actually counting,
                            line up the events you can fairly compare, then follow the path an event takes
                            through the browser, your server, consent, and the check that stops it being
                            counted twice.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Meta terms and developer documentation.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="July 6, 2026"
                        readTime="10 min read"
                        bio="Hassan works on consent-aware measurement integrations and custom commerce systems."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Start with the order or lead system of record and a written event definition.",
                                "Compare the same event, time zone, date range, test status, refund treatment, and attribution window.",
                                "Use Meta diagnostics, browser developer tools, and server logs to find where an event is lost or duplicated.",
                                "If browser and server both send one occurrence, use the same event name and event ID for deduplication.",
                                "Conversions API is another data path. It is not a consent bypass or a guarantee of recovered attribution.",
                            ]}
                        />
                    </section>

                    <BlogHeader>First decide what is actually wrong</BlogHeader>
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
                            "Write the business event: for example, a paid order after test and cancelled orders are excluded.",
                            "Record the source of truth, currency, time zone, order state, date range, and comparison timestamp.",
                            "Export event identifiers where permitted so individual records can be matched, not merely totals.",
                            "Separate delivery from attribution: an event can arrive at Meta without being attributed to an ad.",
                        ]}
                    />

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: GitCompareArrows, title: "Reconcile", body: "Compare equivalent records under a documented scope." },
                            { icon: Wrench, title: "Debug", body: "Trace consent, browser requests, server responses, IDs, and logs." },
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
                    <BlogList
                        items={[
                            "Confirm the expected Pixel or dataset ID and remove stale or duplicate integrations.",
                            "Test with Meta's current diagnostic tools and the browser network panel. Record consent state and test mode.",
                            "Inspect the exact event name, event time, value, currency, source URL, and event ID.",
                            "For server events, log request acceptance and rejected parameters without logging prohibited personal data.",
                            "Repeat a controlled test for denial, acceptance, returning visitor, checkout, and any relevant refund or cancellation state.",
                            "Check that production tags are not firing from preview, staging, bot, staff, or automated-test traffic unless intentionally separated.",
                        ]}
                    />
                    <BlogText>
                        An ad blocker, browser policy, consent choice, navigation race, script error, integration update,
                        or duplicate tag can affect a browser request. None is a universal diagnosis. Evidence from the
                        affected session should decide the next step.
                    </BlogText>

                    <BlogHeader>How browser and server event deduplication works</BlogHeader>
                    <BlogText>
                        Sending both paths can improve resilience, but two copies of one purchase must not become two
                        purchases. Meta&apos;s current documentation describes using matching event names and event IDs
                        so corresponding browser and server events can be deduplicated. Generate one stable ID for the
                        business occurrence, pass it through both paths, and do not reuse it for a different occurrence.
                        For what building and operating both paths involves as a project, see our breakdown of a{" "}
                        <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">server-side Conversions API build</Link>.
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

                    <figure className="my-10 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                        <Image
                            src="/blog-images/capi-conversions-lift-10pct.jpeg"
                            alt="Owner-provided Meta Events Manager screenshot showing a Lead event diagnostic and Event Match Quality"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                        <figcaption className="px-5 py-4 text-sm leading-relaxed text-stone-600">
                            Owner-approved first-party Panda Patches snapshot. The visible interface shows a Lead Event
                            Match Quality of 9.0/10 and a Meta estimate for the selected seven-day view. The capture does
                            not independently show its year and is not evidence of a universal lift, causal result, or
                            client benchmark.
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

                    <h3 className="mt-8 text-xl font-bold text-charcoal">Why is Shopify&apos;s setup simpler than a custom build?</h3>
                    <BlogText>
                        Because the sales channel already knows what a purchase is. On a{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom-engineered stack</Link>{" "}
                        you define the event
                        contract yourself: which server action counts as a conversion, which identifiers you are permitted
                        to send, how the event ID is generated so browser and server copies deduplicate, and where that
                        code runs. Shopify&apos;s integration makes those decisions for you for its own standard events.
                        That is genuinely less work, and it is also less control. You inherit whichever events, parameters
                        and consent behaviour the integration currently supports, and those change without your involvement.
                    </BlogText>

                    <h3 className="mt-8 text-xl font-bold text-charcoal">Why aren&apos;t my Shopify sales showing in Meta Ads Manager?</h3>
                    <BlogText>
                        Work through the four questions at the top of this article in order rather than reinstalling
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

                    <BlogHeader>What a defensible handoff contains</BlogHeader>
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
                        Report measured observations with their date, scope, and limitations. Do not promise that a
                        technical change will restore a fixed share of conversions or produce a particular advertising
                        result.
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
