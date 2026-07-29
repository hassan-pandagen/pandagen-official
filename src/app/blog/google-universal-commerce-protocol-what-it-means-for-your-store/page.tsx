import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleDollarSign, PackageCheck, RadioTower } from "lucide-react";
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

const postId = "google-universal-commerce-protocol-what-it-means-for-your-store";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Google Universal Commerce Protocol: Store Readiness in 2026";
const description =
    "What UCP is, what Google currently documents for direct buying, what remains access-dependent, and how merchants can prepare without promising agentic-commerce revenue.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Google Universal Commerce Protocol",
        "UCP commerce",
        "Google agentic commerce",
        "UCP checkout",
        "Google AI Mode checkout",
        "UCP merchant integration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-21",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/google-universal-commerce-protocol-what-it-means-for-your-store")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Google for Developers: getting started with UCP on Google",
        url: "https://developers.google.com/merchant/ucp",
    },
    {
        name: "Google for Developers: UCP frequently asked questions",
        url: "https://developers.google.com/merchant/ucp/faq",
    },
    {
        name: "Google Merchant API: latest updates",
        url: "https://developers.google.com/merchant/api/latest-updates",
    },
    {
        name: "Universal Commerce Protocol specification and releases",
        url: "https://github.com/Universal-Commerce-Protocol/ucp",
    },
    {
        name: "Google: 2026 NRF announcement",
        url: "https://blog.google/company-news/inside-google/message-ceo/nrf-2026-remarks/",
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
            datePublished: "2026-02-21",
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
            articleSection: "Agentic commerce",
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

export default function UniversalCommerceProtocolGuide() {
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
                            { label: "Universal Commerce Protocol", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agentic commerce</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Google Universal Commerce Protocol: <span className="italic text-cognac">What Is Live, Limited, and Next</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            UCP is a real open commerce standard, and Google has documented a path toward buying
                            directly inside AI Mode and Gemini. That is not the same as it being available to you.
                            Access today still depends on your platform, your country, your payment provider, what you
                            sell, and whether Google has approved you.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Availability reviewed July 24, 2026 against Google&apos;s current merchant guide, FAQ,
                            Merchant API updates, and the open UCP repository.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="February 21, 2026"
                        readTime="12 min read"
                        bio="Hassan evaluates commerce protocols, integrations and migration readiness."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Status as of July 24, 2026</h2>
                        <BlogList
                            items={[
                                "UCP is an open-source protocol. The specification is published, there are working examples, and it ships in versioned releases.",
                                "Google says UCP adoption can enable agentic actions on AI Mode in Search and Gemini, starting with direct buying.",
                                "Google's merchant page still directs merchants to join a waitlist; access and approval are not universal.",
                                "Google documents native checkout and an optional embedded path for specific approved merchants.",
                                "You can still be blocked by any one of these: the state of your Merchant Center data, whether your payment provider supports it, whether you are eligible, which country you sell from, and what you sell.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: RadioTower, title: "Discover", body: "A merchant declares supported capabilities and service endpoints." },
                            { icon: CircleDollarSign, title: "Checkout", body: "Supported parties exchange checkout and payment information under the chosen flow." },
                            { icon: PackageCheck, title: "Order", body: "Order lifecycle updates can be represented through defined capabilities and events." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What UCP is</BlogHeader>
                    <BlogText>
                        The open UCP project describes a common language for platforms, businesses, payment service
                        providers, and credential providers. Its architecture separates capabilities such as checkout,
                        identity linking and order handling from extensions and transport methods. The project documents
                        REST, Model Context Protocol and Agent-to-Agent as possible service transports.
                    </BlogText>
                    <BlogText>
                        Transport compatibility is not automatic distribution. Implementing an MCP endpoint does not
                        make a store available to Google, ChatGPT, Bing, or every agent. Each platform controls its own
                        access, discovery, eligibility, safety, ranking, presentation and commercial requirements.
                    </BlogText>

                    <BlogHeader>What Google currently documents</BlogHeader>
                    <BlogList
                        items={[
                            "Google positions UCP for agentic actions across AI Mode in Google Search and Gemini, beginning with direct buying.",
                            "The merchant remains Merchant of Record in Google's described integration model.",
                            "Google describes native checkout as the default integration and an embedded checkout option for specific approved merchants.",
                            "The FAQ says Merchant Center remains central and product feeds, brand assets, return policies and business contact information must be complete and current.",
                            "Google's Merchant API updates include UCP checkout eligibility reporting contexts and some capabilities that are allowlisted or require a Google representative.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Availability is not universal">
                        “Announced,” “documented,” “waitlisted,” “allowlisted,” “approved,” and “generally available” are
                        different states. Verify the merchant account, country, product, surface, payment provider and
                        current Google instructions before promising a launch.
                    </InsightBox>

                    <BlogHeader>Can someone buy without visiting the merchant website?</BlogHeader>
                    <BlogText>
                        Google&apos;s documented UCP direction includes checkout in Google surfaces, so a qualifying
                        transaction may not require the normal merchant-site journey. But it is inaccurate to say this
                        already applies to every shopper or store, or that the website receives no visit in every flow.
                        Embedded, fallback, authentication, policy, support and post-purchase paths can differ.
                    </BlogText>
                    <BlogText>
                        The website still carries direct acquisition, brand, education, policies, accessibility,
                        account, support, content and fallback responsibilities. UCP readiness is an additional commerce
                        surface, not proof that the site no longer matters.
                    </BlogText>

                    <BlogHeader>Platform readiness cannot be reduced to a ranking</BlogHeader>
                    <BlogText>
                        Shopify, WooCommerce, custom storefronts and other platforms have different official
                        integrations, partner paths and implementation options that can change quickly. Co-development
                        or protocol compatibility does not mean a one-click setting exists for every merchant. A custom
                        stack offers implementation control but also transfers more security, conformance, payment,
                        monitoring and upgrade work to its owner.
                    </BlogText>
                    <BlogList
                        items={[
                            "Check the platform vendor's current UCP statement and the exact merchant account, edition and country.",
                            "Confirm Google access, Merchant Center eligibility, required feeds and policy status.",
                            "Confirm the payment service provider can support the required token and transaction flow.",
                            "List unsupported products, promotions, tax, shipping, identity, returns, subscriptions and account states.",
                            "Price build, conformance, vendor services, operations, security review and protocol maintenance.",
                        ]}
                    />
                    <BlogText>
                        Platform-specific reading helps before that check:{" "}
                        <Link href="/blog/what-is-headless-commerce" className={sourceLinkClass}>what headless commerce means for a store owner</Link>,{" "}
                        <Link href="/blog/shopify-headless" className={sourceLinkClass}>how a headless Shopify architecture is put together</Link>, and{" "}
                        <Link href="/blog/woocommerce-too-slow" className={sourceLinkClass}>where WooCommerce stores tend to need attention</Link>. Our{" "}
                        <Link href="/services/ecommerce" className={sourceLinkClass}>store engineering service</Link>{" "}
                        page covers the custom-stack version of the same work.
                    </BlogText>

                    <BlogHeader>A merchant readiness audit</BlogHeader>
                    <BlogList
                        items={[
                            "Catalog: stable IDs, variants, price, availability, images, descriptions, identifiers and update latency.",
                            "Merchant Center: feeds, business identity, brand assets, policies, contacts, diagnostics and account status.",
                            "Checkout: cart rules, discounts, tax, shipping, currency, inventory reservation, totals and expiry.",
                            "Payments: supported provider, token flow, authorization, failure, capture, refund, dispute and reconciliation.",
                            "Identity: guest and linked-account behavior, authorization, account recovery, deletion and least privilege.",
                            "Orders: confirmation, cancellation, fulfillment, tracking, return, refund and customer-service ownership.",
                            "Security: request authentication, replay protection, idempotency, validation, rate limits, logs, secrets and incident response.",
                            "Privacy: purposes, notices, choices, parties, data fields, regions, retention, access and deletion.",
                        ]}
                    />
                    <BlogText>
                        Most of that list is catalog and operations work rather than front-end work. The{" "}
                        <Link href="/work/panda-patches" className={sourceLinkClass}>Panda Patches store build</Link>{" "}
                        shows how we handle catalog, checkout and order data on a shop we operate ourselves, and{" "}
                        <Link href="/services/woocommerce" className={sourceLinkClass}>our WooCommerce engineering page</Link>{" "}
                        covers the equivalent work on that platform.
                    </BlogText>

                    <BlogHeader>Where to start this week</BlogHeader>
                    <BlogText>
                        The audit above is the full picture. If it is more than a small team can take on at once, the
                        first five moves below are useful regardless of when or whether access arrives, because each one
                        improves the store you already run.
                    </BlogText>
                    <BlogList
                        items={[
                            "Work through your top-selling products first. Check that titles carry the attributes a buyer would specify, that price and availability match what checkout will actually charge, and that specifications, shipping terms and images are complete and current.",
                            "Check the Merchant Center account itself: feed status, diagnostics, business identity, policies and contact details. Incomplete or stale account data limits what any Google surface can do with the catalog.",
                            "Establish what your current platform and payment provider actually support today, from their own documentation, and what would need building or buying rather than switching on.",
                            "Fix the measurable problems on the storefront you already have. Speed, reliability and correct structured data serve human buyers now and remain relevant to any agent-driven surface later.",
                            "Keep the direct site funded. It carries acquisition, brand, policies, support, accounts and fallback journeys that a third-party surface does not replace.",
                        ]}
                    />
                    <BlogText>
                        None of those steps depends on eligibility, an announcement date or a rebuild, which is what
                        makes them safe to start before the access picture is settled.
                    </BlogText>

                    <BlogHeader>Discovery and request verification</BlogHeader>
                    <BlogText>
                        The open standard uses a well-known profile to declare capabilities. Google&apos;s FAQ also
                        describes signals for identifying UCP traffic and recommends authenticating requests using the
                        provided OAuth bearer token or other secure signatures instead of relying only on geographic IP
                        blocking. Use the current implementation guide, validate issuer and audience where applicable,
                        rotate credentials, and reject unexpected capabilities and payloads.
                    </BlogText>

                    <BlogHeader>Measure business impact without inventing it</BlogHeader>
                    <BlogText>
                        There is no published universal UCP conversion lift, cart-abandonment reduction, traffic loss,
                        revenue gain, recommendation advantage or adoption deadline that can be applied to a store.
                        Separate eligibility, impressions, initiated checkouts, completed orders, cancellations,
                        returns, refunds, fees and contribution margin. Compare a defined period and cohort while
                        documenting campaigns, product mix, seasonality and other releases.
                    </BlogText>
                    <BlogList
                        items={[
                            "Define the merchant system of record and order identity across Google, payment provider and commerce backend.",
                            "Use documented channel markers and reporting contexts where available.",
                            "Reconcile money and order state, not only attributed events.",
                            "Report the integration's scope, date, limitations and confidence instead of assigning causation automatically.",
                        ]}
                    />
                    <BlogText>
                        Two references on the measurement side of a storefront:{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={sourceLinkClass}>how store speed is measured and improved</Link>{" "}
                        and{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>{" "}
                        for the difference between lab and field data.
                    </BlogText>

                    <BlogHeader>Do you need to rebuild the website for UCP?</BlogHeader>
                    <BlogText>
                        Not by default. Improve catalog, Merchant Center, policy, payment and operational data first.
                        Consider a platform change only when the current system cannot meet accepted UCP, performance,
                        security, content, ownership or integration requirements and the total-cost case supports
                        replacement. A headless CMS, Next.js, structured data or an MCP endpoint alone does not guarantee
                        eligibility, discovery, recommendation or a sale.
                    </BlogText>
                    <BlogText>
                        If replacement does come onto the table, cost the whole thing before deciding:{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className={sourceLinkClass}>what a store rebuild involves</Link>{" "}
                        and{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={sourceLinkClass}>how a hosted store compares with a custom build</Link>{" "}
                        set out the trade-offs. A{" "}
                        <Link href="/contact" className={sourceLinkClass}>scoping conversation</Link>{" "}
                        turns that into a plan for the specific catalog and payment setup.
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
                        <h2 className="mb-3 font-serif text-3xl">Get your commerce readiness plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will inventory your catalog, Merchant Center, checkout, payment, order, policy and
                            security dependencies before recommending configuration, integration or migration.
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
