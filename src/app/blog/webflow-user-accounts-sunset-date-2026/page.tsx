import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, DatabaseBackup, KeyRound, ShieldCheck, Workflow } from "lucide-react";
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

const postId = "webflow-user-accounts-sunset-date-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Webflow User Accounts Sunset Date: January 29, 2026 (Confirmed)";
const description =
    "Webflow sunset User Accounts (originally Memberships) on January 29, 2026, as announced on December 11, 2024. What stopped, what Webflow says about data, gates and subscriptions, and how to scope a replacement.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Webflow User Accounts sunset",
        "Webflow Memberships discontinued",
        "Webflow member migration",
        "Webflow User Accounts January 29 2026",
        "replace Webflow User Accounts",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-22",
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-user-accounts-sunset-date-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Webflow User Accounts sunset", url: "https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset" },
    { name: "Webflow deprecation announcement", url: "https://webflow.com/updates/deprecating-logic-and-user-accounts" },
    { name: "Webflow import and export user accounts", url: "https://help.webflow.com/hc/en-us/articles/33961370848275-Import-export-user-accounts" },
    { name: "Webflow feature sunsets and deprecations", url: "https://help.webflow.com/hc/en-us/articles/36046081578515-Feature-sunsets-deprecations" },
    { name: "Webflow Logic sunset", url: "https://help.webflow.com/hc/en-us/articles/36045959707667-Logic-sunset" },
    { name: "Webflow code export limitations", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-04-22",
            dateModified: "2026-08-03",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Webflow", "Website migration", "Content management systems", "Technical SEO", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Webflow migration",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Webflow", sameAs: ["https://en.wikipedia.org/wiki/Webflow"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 2100,
            timeRequired: "PT8M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/webflow-user-accounts-sunset-date-2026#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Webflow User Accounts sunset", item: "https://www.pandacodegen.com/blog/webflow-user-accounts-sunset-date-2026" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/webflow-user-accounts-sunset-date-2026#webpage",
            url: "https://www.pandacodegen.com/blog/webflow-user-accounts-sunset-date-2026",
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            datePublished: "2026-04-22",
            dateModified: "2026-08-03",
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/webflow-user-accounts-sunset-date-2026#breadcrumb" },
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

export default function WebflowUserAccountsSunsetPage() {
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
                            { label: "Webflow User Accounts sunset", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Webflow migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Webflow User Accounts Sunset: <span className="italic text-cognac">Recovery After January 29, 2026</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Webflow User Accounts is gone. Webflow was specific about what that means: you lost access to
                            your account data, account pages turned into static pages, anything you had behind a
                            members-only gate became public, nobody can log in any more, and Stripe subscriptions that
                            qualified kept running. Start by working out what you actually had, not by picking a
                            replacement.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 3, 2026 against Webflow&apos;s current help center, feature sunsets page and product updates. The January 29, 2026 date has not changed.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 22, 2026" readTime="8 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Verified status</h2>
                        <BlogList
                            items={[
                                "Webflow announced the sunset on December 11, 2024, in the same update as Webflow Logic.",
                                "The feature was originally released as Webflow Memberships; both names describe the same product.",
                                "New sites could no longer enable User Accounts after January 31, 2025.",
                                "User Accounts functionality, dedicated APIs and webhooks ended January 29, 2026.",
                                "For sites still using it, Webflow says account data was not migrated to the CMS.",
                                "Webflow recommended Outseta, Memberstack or another ecosystem provider, not one mandatory replacement.",
                                "A separate Webflow removal is still ahead: the legacy Editor and its whitelabeling become unavailable from August 4, 2026.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="warning" label="A second Webflow date, and this one is not behind you">
                        This page covers a completed sunset. Webflow&apos;s{" "}
                        <a href="https://help.webflow.com/hc/en-us/articles/36046081578515-Feature-sunsets-deprecations" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>feature sunsets page</a>{" "}
                        also lists the legacy Editor and legacy Editor whitelabeling as unavailable from
                        <strong> August 4, 2026</strong>, with migration to client and limited seats having begun on
                        May 4, 2026 and migrated users assigned the Content editor role. If clients or colleagues
                        publish through the legacy Editor, that is a different change on a different date, and it is
                        the one still in front of you rather than behind you.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: DatabaseBackup, title: "Evidence", body: "Exports, CRM, email, Stripe and historical records." },
                            { icon: KeyRound, title: "Access", body: "Who someone is, how they log in, and how they get back in." },
                            { icon: Workflow, title: "Business", body: "Gates, subscriptions, entitlements and support flows." },
                            { icon: ShieldCheck, title: "Control", body: "Consent, security, retention, ownership and incident response." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What happened on January 29, 2026</BlogHeader>
                    <BlogText>
                        Webflow&apos;s
                        {" "}<a href="https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>official sunset article</a>
                        {" "}says User Accounts functionality became unavailable, its dedicated APIs and webhooks
                        stopped, and no new or existing site could add it. This is a completed product change, not a
                        forecast.
                    </BlogText>

                    <BlogHeader>What was affected on unmigrated sites</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Five things stopped at once, and all five are stated in Webflow&apos;s own sunset article rather than inferred. The first one decides your recovery options: Webflow did not move account data into the CMS, so whatever was not exported before the date is not sitting inside Webflow waiting to be found.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Access to User Accounts and its data was lost because Webflow did not migrate it into the CMS.",
                            "User Accounts pages were converted to regular static pages.",
                            "Content gates were removed.",
                            "Members could no longer log in on published sites.",
                            "Integrations and workflows using the dedicated APIs or webhooks stopped working.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Do not overstate recoverability">
                        Webflow documents the data loss inside its product. A business may still have lawful copies in
                        a prior CSV, CRM, email platform, payment processor, backup or integration, but that must be
                        verified case by case. This article cannot promise recovery.
                    </InsightBox>

                    <BlogText>
                        Note that User Accounts was not the only deprecation in this cycle. Webflow Logic, its native
                        automation tool, was sunset on June 27, 2025, which broke lead routing, form notifications, CRM
                        sync and content workflows built on it. If your site used both, you may be looking at two separate
                        gaps rather than one, and they need separate inventories. We covered the wider pattern in{" "}
                        <Link href="/blog/leaving-webflow-2026" className={sourceLinkClass}>why teams are leaving Webflow in 2026</Link>.
                    </BlogText>

                    <BlogHeader>The three failure modes, in practice</BlogHeader>
                    <BlogText>
                        Sites that did not migrate before the deadline are usually running all three of these at once
                        rather than one in isolation. Recognising which you have determines what you can still recover.
                    </BlogText>

                    <h3 className="mt-6 text-xl font-bold text-charcoal">One: login stopped working</h3>
                    <BlogText>
                        Existing members can no longer sign in. Depending on how the site was built, the login route may
                        error, redirect nowhere useful, or return a 404. Members who bookmarked the login URL get the same
                        result, and password resets through the old flow produce nothing. This is the failure customers
                        notice first and the one that generates support volume.
                    </BlogText>

                    <h3 className="mt-6 text-xl font-bold text-charcoal">Two: member records were not carried over</h3>
                    <BlogText>
                        Webflow did not migrate User Accounts records into the CMS. If nobody exported the member CSV
                        before the sunset, that list no longer exists inside Webflow. Some businesses reconstruct it from
                        Stripe customer records, an email platform sync, or a CRM that received data through webhooks
                        before the cut-off. Whether that is possible for you is an evidence question, not a general one. Check each of
                        those systems before assuming either recovery or total loss. This is the practical
                        edge of the question we set out in{" "}
                        <Link href="/blog/do-you-own-your-website" className={sourceLinkClass}>do you actually own your website</Link>.
                    </BlogText>

                    <h3 className="mt-6 text-xl font-bold text-charcoal">Three: gated pages became public</h3>
                    <BlogText>
                        Pages previously restricted to members were converted to regular static pages. Paid content became
                        openly readable, and any layout driven by logged-in member state either broke visually or rendered
                        placeholder values. Worth auditing deliberately: this is the failure mode with the clearest
                        commercial and, depending on what was gated, potentially contractual consequences.
                    </BlogText>

                    <InsightBox variant="warning" label="The combination that needs attention first">
                        If subscriptions ran through Stripe, they sat outside Webflow and in many cases continued to
                        charge. That produces the worst pairing available: customers still being billed while unable to
                        log in to whatever they are paying for. Reconcile billing against working access first. List the
                        subscriptions that are still active, identify which of those customers have no working login,
                        and decide the support and refund position before a customer raises it for you.
                    </InsightBox>

                    <BlogHeader>Check subscription and customer harm separately</BlogHeader>
                    <BlogText>
                        Webflow says paid subscriptions for Webflow Ecommerce customers remained available in Stripe
                        and subscribers would continue to be charged. Do not assume every affected business uses that
                        configuration or that chargebacks occurred. Check which subscriptions are still active and what each one entitles the
                        customer to. Then check access, cancellations, refunds, support cases and customer
                        communications in the actual systems rather than in the site&apos;s documentation.
                    </BlogText>
                    <BlogList
                        items={[
                            "List active Stripe products, prices, subscriptions and customer status.",
                            "Map each paid state to the access or entitlement the customer should receive.",
                            "Identify customers charged without working access and apply the business's legal and support process.",
                            "Write down what you tell customers about cancelling, refunds and the move itself.",
                        ]}
                    />

                    <BlogHeader>Replacement option one: a Webflow ecosystem provider</BlogHeader>
                    <BlogText>
                        Webflow recommended Outseta and Memberstack and pointed customers to its broader app ecosystem
                        and certified partners. A managed provider can reduce custom identity engineering. Evaluate the
                        current feature set, pricing, data processing, migration, Webflow integration, billing,
                        portability, support and exit path. The historical transition discount is not a permanent price.
                    </BlogText>

                    <BlogHeader>Replacement option two: another managed identity system</BlogHeader>
                    <BlogText>
                        A dedicated identity or membership provider can support login, sessions, password reset,
                        social sign-in, multifactor authentication and organization features. The website still needs
                        authorization, entitlements, content gating, billing reconciliation, webhooks, consent,
                        monitoring and support. Confirm which responsibilities belong to the vendor and which belong to
                        the implementation team.
                    </BlogText>

                    <BlogHeader>Replacement option three: custom application code</BlogHeader>
                    <BlogText>
                        Custom does not mean building cryptography or authentication primitives from scratch. A typical
                        implementation uses a maintained identity provider or library and customizes the application&apos;s
                        authorization and business workflows. It creates more control and more responsibility. Require
                        threat modeling, secure sessions, account recovery, rate limits, logging, privacy controls,
                        dependency updates and incident ownership.
                    </BlogText>
                    <BlogText>
                        In practice that resolves to one of two shapes, and the question separating them is who
                        stores the passwords. A hosted identity service, such as Clerk or Auth0, runs the user store,
                        the sign-in screens and the recovery flows, and your application integrates against it; the
                        trade is a per-user bill and another vendor roadmap to watch. A self-hosted library, such as
                        Auth.js, keeps the user table in your own database, which removes the per-user cost and the
                        external dependency and moves session security, account recovery and abuse handling onto your
                        team. Neither is the safe default. Decide it from whether you want the user table inside your
                        application or outside it, then check the exit path before you build against either. Our{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering service</Link>{" "}
                        covers how that work is scoped and handed over.
                    </BlogText>

                    <BlogHeader>Is a managed replacement a fix or a deferral?</BlogHeader>
                    <BlogText>
                        Both, depending on what membership is worth to you. A managed provider fixes the outage now and
                        moves the deprecation decision from Webflow&apos;s roadmap onto that provider&apos;s roadmap; it
                        does not remove the decision. Webflow User Accounts was itself positioned as the durable
                        answer when Webflow launched memberships. It ran roughly four years, and the mechanism that ended it,
                        a vendor deciding a feature no longer fits its strategy, applies equally to whichever provider you
                        move to next. If you are weighing the platform itself rather than just the membership layer, our{" "}
                        <Link href="/blog/webflow-vs-custom-website" className={sourceLinkClass}>Webflow versus custom website comparison</Link>{" "}
                        and the{" "}
                        <Link href="/blog/webflow-true-cost" className={sourceLinkClass}>breakdown of what Webflow costs over time</Link>{" "}
                        both set out the trade-offs.
                    </BlogText>
                    <BlogText>
                        That is not an argument against managed providers. It is an argument for matching the decision to
                        what membership actually is in your business:
                    </BlogText>
                    <BlogList
                        items={[
                            "If membership is a feature on your site, a managed provider is usually the right call. It is faster, cheaper to start, and the vendor carries the security and maintenance burden. Accept that you are renting, price it accordingly, and keep your data exportable.",
                            "If membership is the business, moving from one vendor's roadmap to another vendor's roadmap relocates the risk rather than removing it. Owning the authentication and entitlement layer means the only party who can deprecate it is you.",
                            "Either way, the second migration is harder than the first. By then you have member expectations, payment history and integrations to carry across, so the exit path matters more than the entry discount.",
                        ]}
                    />
                    <InsightBox variant="info" label="What to check before signing with any provider">
                        Current pricing and how it scales with member count, what happens to your data if you leave, whether
                        entitlements are exportable in a usable form, who is responsible for security incidents, and what
                        notice period applies to feature changes. Introductory migration discounts are time-limited by
                        design; price the engagement on the standard rate you will pay in year two.
                    </InsightBox>

                    <BlogHeader>Build a like-for-like requirement matrix</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Replace what the old system did, not what the new vendor sells. Five areas cover it, and each needs acceptance evidence rather than a feature tick, because &ldquo;supports login&rdquo; and &ldquo;handles your reset, verification, MFA and session rules correctly&rdquo; are different claims. Fill the middle column from your own site before you read anybody&apos;s feature list.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Area</th><th className="p-4">Inventory</th><th className="p-4">Acceptance evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Identity</td><td className="p-4">Registration, login, reset, verification, MFA and sessions</td><td className="p-4">Role-based test cases including abuse and error states</td></tr>
                                <tr><td className="p-4 font-bold">Authorization</td><td className="p-4">Roles, plans, content gates and admin actions</td><td className="p-4">Allowed and denied route and data tests</td></tr>
                                <tr><td className="p-4 font-bold">Billing</td><td className="p-4">Products, subscriptions, trials, cancellation and refunds</td><td className="p-4">Webhook, entitlement and reconciliation tests</td></tr>
                                <tr><td className="p-4 font-bold">Data</td><td className="p-4">Profiles, consent, history, retention and deletion</td><td className="p-4">Migration counts, exceptions and deletion tests</td></tr>
                                <tr><td className="p-4 font-bold">Operations</td><td className="p-4">Support, monitoring, incidents and provider changes</td><td className="p-4">Runbooks, alerts, owners and recovery exercise</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="pages-and-redirects">What happened to the pages themselves, and how to redirect them</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Two different things happened to User Accounts pages, and which one applies to you depends
                            on whether you acted before the date. Webflow&apos;s <a href="https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">User Accounts sunset article</a>, read August 3, 2026, says
                            that on a site which migrated off proactively, any User Systems utility pages are set to
                            draft on the next publish. On a site that still had User Accounts enabled on January 29,
                            2026, it says those pages were migrated to regular static pages instead, the content gates
                            were removed, and the account data was not migrated to the CMS. Draft and published are
                            very different outcomes for search, so check which one your site actually got.
                        </BlogText>
                    </div>
                    <BlogText>
                        The redirect question follows immediately, because <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">/log-in</code>
                        and <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">/sign-up</code> were
                        real URLs that people had bookmarked and that other sites had linked. The same Webflow article
                        documents 301 redirects under Site settings, Publishing, 301 redirects, and it carries one
                        trap worth knowing before you sit down to do it: you must put a percent symbol before the
                        hyphen when entering the old path, or the redirect errors and is not added. That single
                        character is why a batch of these silently fails to save.
                    </BlogText>

                    <BlogHeader>Recovery playbook for an affected site</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Ten steps, ordered to protect evidence before uptime. Freeze first, inventory second, and choose the target only after that, because a replacement picked before the data audit gets picked from a demo rather than from what you can actually recover. Step six is the one that gets skipped under pressure, and it is the one your customers experience.
                        </BlogText>
                    </div>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>Freeze destructive changes and capture the current site and account state.</li>
                        <li>Inventory broken login, gated routes, API calls, webhooks and customer journeys.</li>
                        <li>Collect lawful exports and records from prior CSV files, CRM, email, Stripe, backups and integrations.</li>
                        <li>Reconcile identities with subscriptions and entitlements without guessing matches.</li>
                        <li>Choose a target only after documenting requirements, data roles and operating ownership.</li>
                        <li>Design customer communication, support, refund and account-recovery procedures.</li>
                        <li>Build and test identity, authorization, billing, data and error states in a non-production environment.</li>
                        <li>
                            Map or redirect former sign-up, login and account URLs and verify search behavior. See{" "}
                            <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what happens to your rankings when you migrate</Link>{" "}
                            for the checks that matter here.
                        </li>
                        <li>Cut over with monitoring, rollback criteria and named incident owners.</li>
                        <li>Retain evidence, delete unnecessary data and close obsolete credentials and integrations.</li>
                    </ol>
                    <BlogText>
                        There is no standard recovery duration. Scope yours from data availability, user count, billing,
                        workflows, security, review and the selected provider, then commit to dates once those are
                        known. For how we phase a build once scope is settled, see{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={sourceLinkClass}>how long a custom website takes to build</Link>.
                    </BlogText>

                    <BlogHeader>How much does replacement cost?</BlogHeader>
                    <BlogText>
                        Price the identity and business system, not only the sign-in screen. Include discovery, data
                        recovery, migration, UI, authorization, billing, consent, security, testing, customer
                        communication, cutover, provider fees and ongoing support. PandaCodeGen&apos;s planning tiers
                        start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale, but membership and billing
                        complexity can require custom scope. The full tier detail sits on the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>, and{" "}
                        <Link href="/blog/webflow-migration-cost" className={sourceLinkClass}>our Webflow migration cost breakdown</Link>{" "}
                        works through what changes the scope on a Webflow move specifically.
                    </BlogText>

                    <BlogHeader>PandaCodeGen terms that must be written into the project</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            These five clauses belong in a signed document rather than in an article, and they are published here so you can hold a proposal against them. None of them is unusual. The one worth reading twice is the refund condition, which is tied to undelivered scope rather than to a change of mind after work has started.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "30 percent at onboarding and 70 percent on delivery under the signed agreement.",
                            "Refund for failure to deliver the signed scope, not a post-start change of preference.",
                            "15 business days of launch defect support on Starter and 30 on Growth or Scale.",
                            "Custom-deliverable transfer after full payment; client content remains the client's.",
                            "Reusable PandaCodeGen tools and pre-existing code remain PandaCodeGen property; third-party licenses apply.",
                        ]}
                    />

                    <BlogHeader>The broader lesson</BlogHeader>
                    <BlogText>
                        The sunsets did not stop with User Accounts. Webflow&apos;s feature sunsets page lists the
                        legacy Editor and legacy Editor whitelabeling as unavailable from August 4, 2026, with
                        migration to client and limited seats beginning May 4, 2026 and migrated users assigned the
                        Content editor role. That is a third dated removal on the same page as Logic and User Accounts,
                        and it is worth checking whether it touches how your clients edit content.
                    </BlogText>
                    <BlogText>
                        Any managed feature or provider can change. Custom systems also change through libraries,
                        infrastructure and maintainers. The durable control is an exit plan: documented accounts,
                        exportable data, standard protocols, dependency ownership, current runbooks and a tested
                        recovery path. That is the principle behind our{" "}
                        <Link href="/services/webflow" className={sourceLinkClass}>Webflow migration service</Link>, and you can
                        see how it plays out on live builds in our{" "}
                        <Link href="/work" className={sourceLinkClass}>client work</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader>Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

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

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get a recovery and migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory the affected accounts, gates, billing, data and routes before selecting
                            an implementation. Recovery, price and schedule will be scoped from the evidence available.
                            You can also{" "}
                            <Link href="/contact" className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">talk to the team directly</Link>.
                        </p>
                        <QuoteModalButton cta="webflow_user_accounts_recovery_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
