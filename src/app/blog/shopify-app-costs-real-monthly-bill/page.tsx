import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CircleDollarSign, FileSearch, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "shopify-app-costs-real-monthly-bill";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Shopify App Costs 2026: Published Prices, Checked Aug 2";
const description =
    "Published entry prices for 15 common Shopify apps, checked August 2, 2026, plus Shopify's four app charge types and what uninstalling does and does not cancel.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Shopify app costs 2026",
        "Shopify app bill audit",
        "Shopify app subscriptions",
        "reduce Shopify app costs",
        "Shopify app performance",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-19",
        modifiedTime: "2026-08-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-app-costs-real-monthly-bill")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Shopify pricing and plans",
        url: "https://www.shopify.com/pricing",
    },
    {
        name: "Shopify: uninstalling apps",
        url: "https://help.shopify.com/en/manual/apps/uninstalling-apps",
    },
    {
        name: "Shopify: app charges on bills",
        url: "https://help.shopify.com/en/manual/your-account/manage-billing/your-invoice/apps",
    },
    {
        name: "Shopify App Pricing (developer docs)",
        url: "https://shopify.dev/docs/apps/launch/billing/shopify-app-pricing",
    },
    {
        name: "Shopify: overview of web performance",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/overview",
    },
    {
        name: "Shopify: web performance reports",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
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
            datePublished: "2026-03-19",
            dateModified: "2026-08-06T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Shopify app billing", "Ecommerce cost auditing", "SaaS subscription reconciliation", "Core Web Vitals", "Shopify to Next.js migration"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            image: ogImageUrlForPath(`/blog/${postId}`),
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Shopify",
            wordCount: 2891,
            timeRequired: "PT14M",
            about: [
                { "@type": "Thing", name: "Shopify app costs" },
                { "@type": "Thing", name: "Software subscription auditing" },
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify", "https://www.shopify.com"] },
                { "@type": "Thing", name: "Core Web Vitals" },
            ],
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Shopify app costs", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            datePublished: "2026-03-19",
            dateModified: "2026-08-06T00:00:00-05:00",
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

export default function ShopifyAppCostsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Shopify app costs")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify operations</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Shopify App Costs in 2026: <span className="italic text-cognac">Audit the Real Bill</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Published entry prices for the apps Shopify stores most often run sit between $0 and about
                            $100 a month each: Gorgias Starter $10, Judge.me Awesome $15, Smile Essential $15, PageFly
                            Builder $24, Vitals All-in-One $29.99, Loox Convert $49.99, and Recharge Starter $99 plus
                            1.49% and 19&cent; per transaction. Every figure comes from the vendor&apos;s own Shopify App
                            Store listing or pricing page, checked August 2, 2026, and each is linked in the table below.
                            Your actual bill is not the sum of those numbers. It is Shopify-billed subscriptions, usage
                            charges, externally billed services and the operational dependencies each app creates.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 2, 2026 against current Shopify documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 19, 2026" readTime="9 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">How to work out your real monthly app bill</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Your real app bill is four separate charge streams plus whatever vendors bill you outside
                            Shopify, so the sum of the list prices on the App Store is not it. Recurring charges,
                            usage-based charges, per-transaction percentages and one-off charges each behave
                            differently as the store grows, and the externally billed ones do not appear on your
                            Shopify invoice at all. Build the register from actual bills before you touch anything.
                        </p>
                        <BlogList
                            items={[
                                "Export actual Shopify bills and vendor invoices before comparing public list prices.",
                                "Separate the charges out: what recurs, what is usage-based, what is per transaction, what is one-off, plus tax and currency conversion.",
                                "Map the workflows, data and theme code attached to each app before uninstalling it.",
                                "Measure app value and performance impact by route, device and reporting period.",
                                "Replace or rebuild only when the accepted requirements and total cost support the decision.",
                            ]}
                        />
                    </section>

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">Three questions to ask of every app on the list</h2>
                    <p className="mb-2 leading-relaxed text-stone-700">
                        Price alone does not decide whether an app stays. A $15 app loading a script on every route can
                        cost more than a $99 one that loads on two, and an app that owns data you cannot export costs
                        the most of all when you try to leave. Ask all three questions of each app before you rank them
                        by invoice line.
                    </p>
                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: CircleDollarSign, title: "Money", body: "What you paid, what it is billed on, and what renews." },
                            { icon: Gauge, title: "Experience", body: "Field Core Web Vitals, script work, route coverage and feature use." },
                            { icon: ShieldCheck, title: "Dependency", body: "What breaks if you remove it, and whether you get your data back." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Build the invoice register</BlogHeader>
                    <BlogText>
                        Start with twelve months of Shopify bills, card statements and vendor invoices. Record the app,
                        account owner, billing channel, currency, tax, interval, base fee, metered unit, overage and
                        renewal date. A public App Store price is not evidence of what your store paid. The same register
                        method works across the rest of the stack, and{" "}
                        <Link href="/blog/saas-software-pricing-audit-2026" className={sourceLinkClass}>our software pricing audit walkthrough</Link>{" "}
                        sets out the columns in more detail.
                    </BlogText>
                    <BlogList
                        items={[
                            "Separate subscription, usage, transaction and one-time charges.",
                            "Match each charge to the installed app, sales channel or external vendor account.",
                            "Record promotional, legacy, annual and negotiated terms without converting them into a false list-price comparison.",
                            "Reconcile refunds, credits and pending charges to the period in which they apply.",
                            "Assign a business owner and a technical owner to every active service.",
                        ]}
                    />

                    <BlogHeader id="charge-types">2. Know which of the four charge types you are looking at</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Shopify groups app charges on your bill into four types: subscription charges for recurring
                            use of an app, app usage charges that vary with how much you use it, one-time app purchases
                            for a specific service or feature, and application credits issued on downgrades and certain
                            other conditions. On the developer side, Shopify App Pricing supports recurring charges (for
                            example $10 a month or $100 a year), usage-based pricing using fixed, graduated or volume
                            structures, and combined plans that pair the two.
                        </BlogText>
                    </div>
                    <BlogText>
                        One line confuses more merchants than the rest of the invoice combined, and it is not an app at
                        all. Your Shopify bill carries the <strong>platform subscription for the store itself</strong>
                        {" "}alongside the four app charge types above. If a charge appears that you cannot match to
                        anything in the register, check the plan line before hunting for a rogue app subscription. That
                        amount also moves when you switch between monthly and annual billing, or when a trial or an
                        introductory discount ends, which is usually what has happened when a familiar bill changes size
                        without anyone installing anything. Match every line to either the platform plan or a named app
                        before drawing conclusions, because an audit that files the plan fee under app spend will go
                        looking for savings that were never there.
                    </BlogText>
                    <BlogText>
                        Usage meters are limited to five active meters per plan and six pricing tiers per meter, they
                        bill monthly, and Shopify notes that usage caps are not currently supported. That last point is
                        why a usage-metered app can produce a bill nobody budgeted for: there is no ceiling to set.
                        Checked August 2, 2026 against{" "}
                        <a href="https://help.shopify.com/en/manual/your-account/manage-billing/your-invoice/apps" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shopify&apos;s guide to app charges on your bills</a>{" "}
                        and{" "}
                        <a href="https://shopify.dev/docs/apps/launch/billing/shopify-app-pricing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shopify App Pricing</a>.
                    </BlogText>

                    <BlogHeader>3. Find charges outside Shopify</BlogHeader>
                    <BlogText>
                        Shopify states that some third-party apps bill outside Shopify and those charges do not appear on
                        the Shopify bill. Check card and bank records, team email, password management and procurement
                        systems. Confirm the exact workspace and subscription before anyone cancels it. Once you have the
                        full list,{" "}
                        <Link href="/blog/how-to-cut-saas-bill-2026" className={sourceLinkClass}>our method for cutting a software bill</Link>{" "}
                        covers what to do with it.
                    </BlogText>
                    <InsightBox variant="info" label="What uninstalling does and does not cancel">
                        Shopify&apos;s own documentation states: &ldquo;Uninstalling a paid app cancels future recurring
                        charges, but you might still be billed for the current billing cycle.&rdquo; On externally billed
                        apps it is explicit: &ldquo;Uninstalling the app from your Shopify admin doesn&apos;t cancel
                        external charges.&rdquo; Cancel those in the vendor&apos;s own account, confirm the cancellation
                        in writing, and if you want the current cycle refunded, Shopify says to contact the app developer
                        before uninstalling. Read from <a href="https://help.shopify.com/en/manual/apps/uninstalling-apps" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shopify&apos;s uninstalling-apps documentation</a> on August 2, 2026.
                    </InsightBox>

                    <BlogHeader id="published-prices">What the common apps publish, checked August 2, 2026</BlogHeader>
                    <BlogText>
                        An expensive app bill is rarely one expensive app. It is a stack that grew one decision at a time.
                        Below is the published entry price for a common set of them, taken from
                        each vendor&apos;s own Shopify App Store listing or pricing page on August 2, 2026. Prices move, so
                        recheck before you budget, and record what your store actually paid rather than the list price.
                        We log vendor price movements in our{" "}
                        <Link href="/blog/saas-price-increases-2026-tracker" className={sourceLinkClass}>running log of software price changes</Link>.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Category</th><th className="p-4">App</th><th className="p-4">Published price, August 2, 2026</th><th className="p-4">Source</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Email and SMS</td><td className="p-4">Klaviyo</td><td className="p-4">Free to 250 contacts; Email from $20/mo at 251&ndash;500 contacts; SMS from $15/mo for 1,250 credits</td><td className="p-4"><a href="https://apps.shopify.com/klaviyo-email-marketing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">SMS</td><td className="p-4">Postscript</td><td className="p-4">Starter free to install with a $49/mo minimum spend, then $0.009/SMS; Growth $100/mo; Professional $500/mo, plus carrier fees</td><td className="p-4"><a href="https://apps.shopify.com/postscript-sms-marketing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Email and SMS</td><td className="p-4">Attentive</td><td className="p-4">Free to install, no published price. The listing states charges may be billed by Attentive separately from your Shopify invoice</td><td className="p-4"><a href="https://apps.shopify.com/attentive" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Reviews</td><td className="p-4">Judge.me</td><td className="p-4">Forever Free $0, including Google rich snippets and Shop app sync; Awesome $15/mo</td><td className="p-4"><a href="https://apps.shopify.com/judgeme" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Reviews</td><td className="p-4">Loox</td><td className="p-4">Beginner free; Convert $49.99/mo including 300 orders, then $50 per additional 300; Unlimited $299.99/mo</td><td className="p-4"><a href="https://apps.shopify.com/loox" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Reviews</td><td className="p-4">Yotpo</td><td className="p-4">Free to 50 monthly orders; Starter $15/mo; Pro $119/mo, varying with order volume. The listing notes charges may be billed separately from your Shopify invoice</td><td className="p-4"><a href="https://apps.shopify.com/yotpo-social-reviews" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Reviews</td><td className="p-4">Okendo</td><td className="p-4">Tiered by monthly order volume across five bands from 0&ndash;200 to 10,001+. Okendo does not publish the tier prices; request a quote and record it in your register</td><td className="p-4"><a href="https://www.okendo.io/pricing/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Okendo pricing</a></td></tr>
                                <tr><td className="p-4 font-bold">Subscriptions</td><td className="p-4">Recharge</td><td className="p-4">Starter $99/mo plus 1.49% and 19&cent; per transaction; Plus $499/mo plus 1.34% and 19&cent;; Custom volume-based</td><td className="p-4"><a href="https://getrecharge.com/pricing/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Recharge pricing</a></td></tr>
                                <tr><td className="p-4 font-bold">Subscriptions</td><td className="p-4">Bold Subscriptions</td><td className="p-4">Launch $24.99/mo plus 2%; Grow $49.99/mo plus 1%; Scale $74.99/mo plus 0.9%</td><td className="p-4"><a href="https://apps.shopify.com/bold-subscriptions" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Helpdesk</td><td className="p-4">Gorgias</td><td className="p-4">Starter $10/mo with $0.40 per additional ticket; Basic $60/mo; Pro $360/mo; Advanced $900/mo</td><td className="p-4"><a href="https://apps.shopify.com/helpdesk" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                                <tr><td className="p-4 font-bold">Helpdesk</td><td className="p-4">Tidio</td><td className="p-4">Free $0; Starter $24.17/mo; Growth from $49.17/mo; Plus from $300/mo plus usage</td><td className="p-4"><a href="https://www.tidio.com/pricing/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Tidio pricing</a></td></tr>
                                <tr><td className="p-4 font-bold">Loyalty</td><td className="p-4">Smile</td><td className="p-4">Free to 200 monthly orders; Essential $15/mo to 500; Standard $79/mo to 1,000; Growth $199/mo including 2,500, then $20 per additional 100</td><td className="p-4"><a href="https://smile.io/pricing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Smile pricing</a></td></tr>
                                <tr><td className="p-4 font-bold">Page building</td><td className="p-4">PageFly</td><td className="p-4">Free $0; Builder $24/mo; Optimize $39/mo; Accelerate $99/mo; Power $199/mo</td><td className="p-4"><a href="https://pagefly.io/pages/pricing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>PageFly pricing</a></td></tr>
                                <tr><td className="p-4 font-bold">Page building</td><td className="p-4">Shogun</td><td className="p-4">Draft Mode $0; Build $39/mo; Grow $199/mo; Advanced $499/mo</td><td className="p-4"><a href="https://getshogun.com/pricing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shogun pricing</a></td></tr>
                                <tr><td className="p-4 font-bold">Theme extensions</td><td className="p-4">Vitals</td><td className="p-4">All-in-One $29.99/mo. The listing states usage fees start after roughly $1,000/mo in Vitals-attributed sales, from $10/mo</td><td className="p-4"><a href="https://apps.shopify.com/vitals" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>App Store listing</a></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Two patterns matter more than any single figure. Volume-metered pricing means the bill tracks
                        your list size, order count or message volume rather than staying flat, so a tier that fits in
                        January can be the wrong tier by November. And a platform fee plus a percentage of subscription
                        revenue is two charges, not one: Recharge Starter publishes $99 a month plus 1.49% and 19&cent;
                        per transaction, Bold Launch publishes $24.99 a month plus 2%. Model the percentage against your
                        own subscription revenue before comparing it with a flat monthly fee.
                    </BlogText>
                    <InsightBox variant="info" label="Two costs, not one">
                        A page builder or theme extension has a monthly price and, depending on how it is implemented and
                        which routes it loads on, a page-weight cost. The invoice is easy to find; the second cost only
                        shows up when you measure your own storefront before and after. The performance section below
                        covers how to test that on your store rather than assuming it, and{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={sourceLinkClass}>our Shopify store speed guide</Link>{" "}
                        works through the fixes once you know which app is responsible.
                    </InsightBox>

                    <BlogHeader id="what-shopify-takes">How much does Shopify take from a $100 sale?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            It depends on one thing far more than your plan: whether you use Shopify Payments. If you do,
                            Shopify takes the published card rate for your country and plan and <strong>no additional
                            transaction fee</strong>. If you use any other gateway, Shopify charges a third-party payment
                            provider fee <em>on top of</em> whatever that gateway takes. Read from{" "}
                            <a href="https://www.shopify.com/pricing" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shopify&apos;s pricing page</a>{" "}
                            on August 2, 2026, that fee is 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2%
                            on Plus. On a $100 sale that is $2.00, $1.00, $0.60 or $0.20 to Shopify before your gateway
                            has taken anything at all. That page geo-redirects, so read the box below before you use
                            these numbers.
                        </BlogText>
                    </div>
                    <BlogText>
                        The two get blended into one percentage, which is why a quoted figure rarely matches your
                        payout. The card rate mostly leaves Shopify and goes to the card
                        networks and the acquirer. The third-party fee is Shopify charging you for not using its own
                        processor. Only the second one is a lever you control by switching, and on Basic it is worth 2% of
                        every order.
                    </BlogText>
                    <InsightBox variant="warning" label="Do not trust a card rate you read in an article, including this one">
                        Shopify quotes card processing rates per country, and shopify.com/pricing geo-redirects. Checked on
                        August 2, 2026 from outside the US, the request landed on a regional pricing page where the card-rate
                        rows are <strong>absent entirely</strong>, because Shopify Payments is not offered in that market.
                        A US rate copied into a blog post can therefore describe a product you cannot buy. Open your own
                        country&apos;s Shopify pricing page, or the Payments section of your admin, and read the rate that
                        applies to your store and plan.
                    </InsightBox>
                    <BlogText>
                        For the audit above, this matters twice. A gateway you kept for one legacy reason may be costing a
                        percentage of revenue that dwarfs every app on your invoice, and it will never appear in the app
                        charges you have been reconciling. Put the payment line in the same register as the apps.
                    </BlogText>

                    <BlogHeader>4. Measure value before comparing prices</BlogHeader>
                    <BlogText>
                        A lower-priced product is not automatically equivalent. Document the requirement each app
                        satisfies, the people and routes that use it, the data it owns, its integrations and the failure
                        mode if it disappears. Then compare candidates against the same acceptance criteria.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Area</th><th className="p-4">Evidence</th><th className="p-4">Decision question</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Commercial</td><td className="p-4">Invoice, contract and measured usage</td><td className="p-4">Is the tier correctly sized?</td></tr>
                                <tr><td className="p-4 font-bold">Functional</td><td className="p-4">Requirements and workflow tests</td><td className="p-4">Can another tool meet the same accepted scope?</td></tr>
                                <tr><td className="p-4 font-bold">Technical</td><td className="p-4">Scripts, APIs, theme changes and incidents</td><td className="p-4">What must be migrated or removed?</td></tr>
                                <tr><td className="p-4 font-bold">Data</td><td className="p-4">Fields, exports, retention and permissions</td><td className="p-4">Can the store leave without losing required records?</td></tr>
                                <tr><td className="p-4 font-bold">Outcome</td><td className="p-4">First-party funnel and operating data</td><td className="p-4">Does observed value justify total cost?</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>5. Test performance as a change, not a slogan</BlogHeader>
                    <BlogText>
                        <a href="https://help.shopify.com/en/manual/online-store/web-performance/overview" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shopify&apos;s web-performance overview</a>{" "}
                        identifies apps, third-party libraries, analytics, theme code and media as factors that
                        can affect performance, and its{" "}
                        <a href="https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Web Performance reports</a>{" "}
                        give real-user LCP, INP and CLS by time, URL and page type. Both read August 2, 2026. Pair that
                        field view with repeatable lab tests and a script inventory. If those metric names are unfamiliar,{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers what each one measures, and{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className={sourceLinkClass}>our analysis of a slow Dawn theme</Link>{" "}
                        shows how theme code and apps compound. For the revenue side of the same question, see{" "}
                        <Link href="/blog/shopify-conversion-rate-speed-fix" className={sourceLinkClass}>how to measure speed inside the conversion funnel</Link>{" "}
                        and{" "}
                        <Link href="/blog/shopify-slow-losing-sales" className={sourceLinkClass}>how to build a revenue-side evidence model</Link>;
                        on Plus, <Link href="/blog/shopify-plus-still-slow" className={sourceLinkClass}>the plan tier does not change the app arithmetic</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Record the affected route, device mix, consent state, geography and test date.",
                            "Compare a controlled preview or release window rather than unrelated before-and-after screenshots.",
                            "Check whether the app loads globally when the feature appears on only a few routes.",
                            "Verify that deferred loading preserves accessibility, analytics and purchase behavior.",
                            "Do not convert a speed association into a guaranteed revenue or conversion claim.",
                        ]}
                    />

                    <BlogHeader>6. Remove an app safely</BlogHeader>
                    <BlogText>
                        Uninstalling in the Shopify admin is the last step of a removal, not the first, and on its own
                        it does not cancel a charge the vendor bills you directly. Export the data first, find the
                        theme code and embeds the app left behind, cancel any external billing in the vendor&apos;s own
                        account, and only then uninstall. Six steps in that order.
                    </BlogText>
                    <BlogList
                        items={[
                            "Read the current app listing and vendor instructions for extra uninstall steps.",
                            "Export required data and document recovery or retention limitations.",
                            "Identify theme code, app embeds, pixels, webhooks, flows and inventory locations.",
                            "Cancel external billing directly with the vendor where applicable.",
                            "Uninstall in Shopify, retain confirmation and monitor the next billing cycle.",
                            "Regression-test storefront, checkout, email, analytics, fulfillment and support workflows.",
                        ]}
                    />

                    <BlogHeader>7. Decide whether custom code belongs in the comparison</BlogHeader>
                    <BlogText>
                        Custom code can remove a vendor dependency when the requirement is stable and the business is
                        prepared to own it. It does not make the function free. Include design, engineering, migration,
                        hosting, monitoring, security, maintenance, provider changes, support and recovery in the total.
                        Our{" "}
                        <Link href="/services/ecommerce" className={sourceLinkClass}>ecommerce development service</Link>{" "}
                        sets out how we scope that work,{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={sourceLinkClass}>Shopify versus a custom build</Link>{" "}
                        compares the two operating models, and{" "}
                        <Link href="/blog/what-is-headless-commerce" className={sourceLinkClass}>what headless commerce actually means</Link>{" "}
                        covers the middle option of keeping Shopify as a backend.
                    </BlogText>
                    <InsightBox variant="info" label="First-party context">
                        Panda Patches is owned by a PandaCodeGen co-founder and informs our operational experience. We are not
                        publishing unreconciled revenue, app-cost or performance figures as proof that another merchant
                        will achieve the same result. A client comparison must use that client&apos;s invoices and data.
                        The store itself is written up in our{" "}
                        <Link href="/work/panda-patches" className={sourceLinkClass}>Panda Patches case study</Link>, and a
                        client store on a similar stack is covered in{" "}
                        <Link href="/work/mycustompatches" className={sourceLinkClass}>the MyCustomPatches build</Link>.
                    </InsightBox>

                    <BlogHeader>8. Produce an auditable decision</BlogHeader>
                    <BlogText>
                        Every app ends the audit with one of six recorded verdicts, and each verdict has a condition that justifies it. Retain, right-size, consolidate, replace, rebuild, or investigate. That last one matters: no decision is a legitimate outcome when the owner, the contract, the usage or a dependency is still unresolved, and recording it stops the same app being re-argued next quarter.
                    </BlogText>
                    <BlogList
                        items={[
                            "Retain when the capability is used, required and acceptably priced.",
                            "Right-size when measured use fits a lower tier without unacceptable peak or entitlement risk.",
                            "Consolidate when one tested product covers the accepted workflows and migration cost is justified.",
                            "Replace when a tested alternative offers better total value, not merely a lower sticker price.",
                            "Rebuild when ownership and flexibility justify the full lifecycle cost.",
                            "Investigate when the owner, contract, usage, data or dependency is unresolved.",
                        ]}
                    />
                    <BlogText>
                        If the decision lands on rebuild, our{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link> sets out the planning tiers,
                        and{" "}
                        <Link href="/blog/shopify-headless" className={sourceLinkClass}>going headless on Shopify</Link>{" "}
                        covers the architecture most stores land on when they keep checkout where it is.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <FileSearch className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map the current stack, required workflows, migration risks and test conditions before
                            recommending theme optimization, app consolidation or a headless build.
                        </p>
                        <QuoteModalButton cta="shopify_app_costs_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <InsightBox variant="warning" label="Time-critical: Stocky access ends August 31, 2026">
                        If your operation depends on Stocky for purchase orders, transfers or demand forecasting,
                        Shopify has confirmed the app is unavailable after August 31, 2026 and its APIs stop on the same
                        date. It was delisted from the App Store in February 2026. Export what you need before access
                        ends, and note that this is one of the cases where removing an app is not a cost decision at
                        all.
                    </InsightBox>
                    <BlogText>
                        The{" "}
                        <Link href="/blog/shopify-stocky-sunset-date-2026" className="text-cognac hover:underline font-medium">Stocky sunset guide</Link>{" "}
                        covers what to export before access ends.
                    </BlogText>

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
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
