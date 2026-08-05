import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
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
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
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
            image: ogImageUrlForPath("/blog/google-universal-commerce-protocol-what-it-means-for-your-store"),
            description,
            datePublished: "2026-02-21",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["E-commerce", "Commerce protocols", "Payment integrations", "Website migration", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Agentic commerce",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "E-commerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Universal Commerce Protocol", sameAs: ["https://github.com/Universal-Commerce-Protocol/ucp"] },
                { "@type": "Thing", name: "Communication protocol", sameAs: ["https://en.wikipedia.org/wiki/Communication_protocol"] },
                { "@type": "Organization", name: "Google", sameAs: ["https://en.wikipedia.org/wiki/Google"] },
            ],
            wordCount: 2113,
            timeRequired: "PT11M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/google-universal-commerce-protocol-what-it-means-for-your-store#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Universal Commerce Protocol", item: "https://www.pandacodegen.com/blog/google-universal-commerce-protocol-what-it-means-for-your-store" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/google-universal-commerce-protocol-what-it-means-for-your-store#webpage",
            url: "https://www.pandacodegen.com/blog/google-universal-commerce-protocol-what-it-means-for-your-store",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/google-universal-commerce-protocol-what-it-means-for-your-store#breadcrumb" },
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
                        readTime="5 min read"
                        bio="Hassan evaluates commerce protocols, integrations and migration readiness."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Status as of July 24, 2026</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            The protocol is real and published; your access to it probably is not yet. Those two facts
                            get collapsed in most coverage, and the difference is what decides whether any of this is
                            actionable for your store this quarter. Five points, read from the open UCP repository and
                            from Google&apos;s merchant guide, FAQ and Merchant API updates on July 24, 2026.
                        </p>
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

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">The three phases UCP defines</h2>
                    <p className="mb-2 leading-relaxed text-stone-700">
                        The protocol splits an agent-driven purchase into three phases, and knowing which one a claim
                        refers to prevents most of the confusion around it. Discovery is a merchant advertising what it
                        can do. Checkout is the money moving. Order is everything after, which is the phase most
                        coverage skips and the one that generates the support tickets.
                    </p>
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
                        Being able to connect does not mean anyone will send you traffic. Standing up an MCP endpoint does
                        not put your store in front of Google, ChatGPT, Bing or any other agent. Each of them decides
                        for itself who gets in, who gets found, who qualifies, what is safe to show, how it ranks, how
                        it looks, and what the commercial terms are.
                    </BlogText>

                    <BlogHeader>What Google documents, as read on July 24, 2026</BlogHeader>
                    <BlogText>
                        Google has published a merchant guide, an FAQ and a set of Merchant API updates covering UCP,
                        and five things in them decide whether this is relevant to you. The most consequential is the
                        liability one: in the integration model Google describes, you stay Merchant of Record. The rest
                        set out which surfaces are in scope, which checkout paths exist, what Merchant Center has to
                        contain, and which capabilities are gated behind approval. Every item below was read from those
                        documents on July 24, 2026, and the access position in particular can change without notice.
                    </BlogText>
                    <BlogList
                        items={[
                            "Google positions UCP for agentic actions across AI Mode in Google Search and Gemini, beginning with direct buying.",
                            "The merchant remains Merchant of Record in Google's described integration model. That is a tax and liability position, not a technical detail, so confirm it against the current guide and your own advisers before you build against it.",
                            "Google describes native checkout as the default integration and an embedded checkout option for specific approved merchants.",
                            "The FAQ says Merchant Center remains central and product feeds, brand assets, return policies and business contact information must be complete and current.",
                            "Google's Merchant API updates include UCP checkout eligibility reporting contexts and some capabilities that are allowlisted or require a Google representative.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Availability is not universal">
                        Announced is not documented. Documented is not approved. And approved is not generally available.
                        Before you promise anyone a launch date, check your own merchant account, your country, the
                        products involved, the surface it runs on, your payment provider, and what Google's
                        instructions say today.
                    </InsightBox>

                    <BlogHeader>Can someone buy without visiting the merchant website?</BlogHeader>
                    <BlogText>
                        Google&apos;s documented UCP direction includes checkout in Google surfaces, so a qualifying
                        transaction may not require the normal merchant-site journey. But it is inaccurate to say this
                        already applies to every shopper or store, or that the website receives no visit in every flow.
                        Some flows embed the purchase, some fall back to your site, and sign-in, policy, support and
                        after-sale steps can each behave differently.
                    </BlogText>
                    <BlogText>
                        Your website still does the work it always did. It is where people find you directly, where the
                        brand lives, where you explain things, where your policies and accounts sit, where support
                        happens, and where shoppers land when the other route fails. Being UCP-ready adds a place to
                        sell. It does not retire the site.
                    </BlogText>

                    <BlogHeader>Platform readiness cannot be reduced to a ranking</BlogHeader>
                    <BlogText>
                        Shopify, WooCommerce, custom storefronts and other platforms have different official
                        integrations, partner paths and implementation options that can change quickly. Co-development
                        or protocol compatibility does not mean a one-click setting exists for every merchant. A custom stack gives you control over how it is
                        built, and hands you the security, conformance, payment, monitoring and upgrade work that comes
                        with it.
                    </BlogText>
                    <BlogList
                        items={[
                            "Check the platform vendor's current UCP statement and the exact merchant account, edition and country.",
                            "Confirm Google access, Merchant Center eligibility, required feeds and policy status.",
                            "Confirm the payment service provider can support the required token and transaction flow.",
                            "Write down what will not work: which products, promotions, tax cases, shipping options, sign-in situations, returns, subscriptions and account states fall outside it.",
                            "Price all of it: building it, proving it conforms, whatever your vendors charge, running it, having someone review the security, and keeping up as the protocol changes.",
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
                    <BlogText>
                        Eight domains have to hold up before anyone can claim a store is UCP-ready, and this is an
                        inventory rather than a sequence. Most of it is work you should already be able to evidence:
                        catalog accuracy, Merchant Center standing, checkout correctness, payment lifecycle, identity,
                        order handling, request security and data privacy. If a domain below has no owner today, that
                        gap exists whether or not UCP ever reaches you.
                    </BlogText>
                    <BlogList
                        items={[
                            "Catalog: do your product IDs stay stable, are variants right, are price and availability current, are the images and descriptions there, and how quickly do changes show up.",
                            "Merchant Center: are your feeds clean, is your business identity verified, are brand assets and policies in place, can Google reach you, and is the account in good standing.",
                            "Checkout: how carts behave, how discounts apply, how tax and shipping are worked out, which currency, whether stock is held while someone pays, whether the total is right, and when a cart expires.",
                            "Payments: whether your provider is supported, how tokens move, what happens when a payment is authorized, when it fails, when it captures, when you refund, when a customer disputes it, and whether the numbers match at the end.",
                            "Identity: what a guest can do versus someone with a linked account, what each is allowed to do, how someone gets back into a locked account, how an account is deleted, and making sure nobody has more access than they need.",
                            "Orders: confirming them, canceling them, shipping them, tracking them, taking returns, issuing refunds, and who answers the customer when something goes wrong.",
                            "Security: proving each request is genuine, stopping the same one being replayed, making sure a repeat does not charge twice, checking what was sent, limiting how often, logging it, storing secrets properly, and knowing what to do when something breaks.",
                            "Privacy: why you hold each thing, what you tell people, what they can choose, who else sees it, which fields travel, which countries are involved, how long you keep it, who can read it, and how it gets deleted.",
                        ]}
                    />
                    <BlogText>
                        Most of that list is catalog and operations work rather than front-end work. The{" "}
                        <Link href="/work/panda-patches" className={sourceLinkClass}>Panda Patches store build</Link>{" "}
                        shows how we handle catalog, checkout and order data on a shop we operate ourselves, and{" "}
                        <Link href="/services/woocommerce" className={sourceLinkClass}>our WooCommerce engineering page</Link>{" "}
                        covers the equivalent work on that platform.
                    </BlogText>

                    <BlogHeader>Where to start</BlogHeader>
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
                            "Keep spending on your own site. It is where you win customers, build the brand, publish your policies, handle support, hold accounts, and catch people when the third-party route fails. None of that moves across.",
                        ]}
                    />
                    <BlogText>
                        None of those steps depends on eligibility, an announcement date or a rebuild, which is what
                        makes them safe to start before the access picture is settled.
                    </BlogText>

                    <BlogHeader>Discovery and request verification</BlogHeader>
                    <BlogText>
                        The open standard uses a well-known profile to declare capabilities. Google&apos;s FAQ, read
                        July 24, 2026, also
                        describes signals for identifying UCP traffic and recommends authenticating requests using the
                        provided OAuth bearer token or other secure signatures instead of relying only on geographic IP
                        blocking. Use the current implementation guide, validate issuer and audience where applicable,
                        rotate credentials, and reject unexpected capabilities and payloads.
                    </BlogText>

                    <BlogHeader>Measure business impact without inventing it</BlogHeader>
                    <BlogText>
                        There is no published universal UCP conversion lift, cart-abandonment reduction, traffic loss,
                        revenue gain, recommendation advantage or adoption deadline that can be applied to a store.
                        Measure the stages separately: who was eligible, who saw you, who started a checkout, who
                        finished one, who cancelled, who returned, who was refunded, what the fees took, and what was
                        left. Compare a defined period and cohort while
                        documenting campaigns, product mix, seasonality and other releases.
                    </BlogText>
                    <BlogList
                        items={[
                            "Define the merchant system of record and order identity across Google, payment provider and commerce backend.",
                            "Use documented channel markers and reporting contexts where available.",
                            "Reconcile the money and the order state, not just the events Google says it drove.",
                            "Say what the integration covered, when you checked, what it could not do, and how sure you are. Do not assume it caused whatever happened next.",
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
                        Only change platform when the one you have genuinely cannot meet the UCP, performance, security,
                        content, ownership or integration requirements you have agreed, and the total cost still
                        favors replacing it. A headless CMS, Next.js, structured data or an MCP endpoint alone does not guarantee
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
                            We go through your catalog, Merchant Center, checkout, payments, orders, policies and security
                            first. Only then do we tell you whether to configure, integrate or migrate.
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
