import { ogImageForPath } from "@/lib/seo/og";
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
const title = "Webflow User Accounts Sunset: January 29, 2026 Recovery Guide";
const description =
    "What Webflow officially removed on January 29, 2026, how unmigrated accounts, data, gates and subscriptions were affected, and how to scope a recovery or replacement.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
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
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-user-accounts-sunset-date-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Webflow User Accounts sunset", url: "https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset" },
    { name: "Webflow deprecation announcement", url: "https://webflow.com/updates/deprecating-logic-and-user-accounts" },
    { name: "Webflow User Accounts API removal", url: "https://developers.webflow.com/data/changelog/2026/1/29" },
    { name: "Webflow CMS CSV guidance", url: "https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS" },
    { name: "Webflow code export limitations", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Google site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
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
            articleSection: "Webflow migration",
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
                            Webflow User Accounts Sunset <span className="italic text-cognac">Recovery After January 29, 2026</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Webflow User Accounts is gone. Webflow was specific about what that means: you lost access to
                            your account data, account pages turned into static pages, anything you had behind a
                            members-only gate became public, nobody can log in any more, and Stripe subscriptions that
                            qualified kept running. Start by working out what you actually had, not by picking a
                            replacement.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against Webflow&apos;s current help center and developer changelog.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 22, 2026" readTime="15 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Verified status</h2>
                        <BlogList
                            items={[
                                "New sites could no longer enable User Accounts after January 31, 2025.",
                                "User Accounts functionality, dedicated APIs and webhooks ended January 29, 2026.",
                                "For sites still using it, Webflow says account data was not migrated to the CMS.",
                                "Webflow recommended Outseta, Memberstack or another ecosystem provider, not one mandatory replacement.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: DatabaseBackup, title: "Evidence", body: "Exports, CRM, email, Stripe and historical records." },
                            { icon: KeyRound, title: "Access", body: "Identity, login, reset, roles, sessions and recovery." },
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
                        before the cut-off. Whether that is possible for you is an evidence question, not a general one —
                        check each of those systems before assuming either recovery or total loss. This is the practical
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
                        log in to whatever they are paying for. Reconcile billing against working access before anything
                        else, because that gap tends to resolve itself as chargebacks and refund requests if left alone.
                    </InsightBox>

                    <BlogHeader>Check subscription and customer harm separately</BlogHeader>
                    <BlogText>
                        Webflow says paid subscriptions for Webflow Ecommerce customers remained available in Stripe
                        and subscribers would continue to be charged. Do not assume every affected business uses that
                        configuration or that chargebacks occurred. Reconcile active subscriptions, entitlements,
                        access, cancellations, refunds, support cases and customer communications in the actual systems.
                    </BlogText>
                    <BlogList
                        items={[
                            "List active Stripe products, prices, subscriptions and customer status.",
                            "Map each paid state to the access or entitlement the customer should receive.",
                            "Identify customers charged without working access and apply the business's legal and support process.",
                            "Document cancellation, refund and migration communication.",
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
                        dependency updates and incident ownership. Our{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering service</Link>{" "}
                        covers how that work is scoped and handed over.
                    </BlogText>

                    <BlogHeader>Is a managed replacement a fix or a deferral?</BlogHeader>
                    <BlogText>
                        This is the question worth answering before you pick a provider, and most migration advice skips
                        it because the partner programmes pay. Webflow User Accounts was itself positioned as the durable
                        answer when Webflow launched memberships. It ran roughly four years. The mechanism that ended it —
                        a vendor deciding a feature no longer fits its strategy — applies equally to whichever provider you
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

                    <BlogHeader>Recovery playbook for an affected site</BlogHeader>
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
