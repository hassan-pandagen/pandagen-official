import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { spec } from "@/data/spec-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "webflow-true-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Webflow Pricing 2026: Monthly Costs and an Annual Budget";
const description =
    "Compare Webflow monthly and yearly prices, Site and Workspace charges, renewal changes and a worked annual budget. Includes a free cost worksheet.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Webflow true cost",
        "Webflow pricing 2026",
        "Webflow total cost",
        "Webflow hidden costs",
        "Webflow annual budget",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-18",
        modifiedTime: "2026-09-25",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-true-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const planChangesUrl = "https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026";
const sources = [
    { name: "Webflow pricing", url: "https://webflow.com/pricing" },
    { name: "2026 plan changes and renewal timing", url: planChangesUrl },
    { name: "Workspace billing and invoices", url: "https://help.webflow.com/hc/en-us/articles/33961279888019-Workspace-billing-and-invoices" },
    { name: "Webflow billing", url: "https://help.webflow.com/hc/en-us/articles/33961371683987-Webflow-billing" },
    { name: "Form submission limits", url: "https://help.webflow.com/hc/en-us/articles/33961344521235-Form-submissions" },
    { name: "Code export scope", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Ecommerce overview", url: "https://help.webflow.com/hc/en-us/articles/33961345384339-Webflow-Ecommerce-overview" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-18",
            dateModified: "2026-09-25",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Webflow", "Webflow pricing", "Webflow code export", "Software cost analysis", "Website migration", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            image: ogImageUrlForPath(`/blog/${postId}`),
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Webflow",
            timeRequired: "PT9M",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Webflow", sameAs: ["https://en.wikipedia.org/wiki/Webflow"] },
                { "@type": "Thing", name: "Software as a service", sameAs: ["https://en.wikipedia.org/wiki/Software_as_a_service"] },
                { "@type": "Thing", name: "Total cost of ownership", sameAs: ["https://en.wikipedia.org/wiki/Total_cost_of_ownership"] },
                { "@type": "Thing", name: "Webflow pricing" },
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
                { "@type": "ListItem", position: 3, name: "Webflow true cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            datePublished: "2026-03-18",
            dateModified: "2026-09-25",
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
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

export default function WebflowTrueCostPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8 [&_h2[id]]:scroll-mt-28">
                    <Breadcrumb items={postCrumbs(postId, "Webflow true cost")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Webflow pricing and running costs</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">How much does Webflow cost in 2026?</h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            For a custom-domain website, Basic starts at {spec("webflow-basic-price").value} billed yearly; Premium with a CMS starts at {spec("webflow-premium-price").value} billed yearly. Your full budget also depends on the people editing it, enabled extras and the work needed to keep it useful.
                        </p>
                        <p className="mt-4 text-sm text-stone-600">Updated September 25, 2026. USD before tax. Annual-billing rates are monthly equivalents paid on a yearly cycle; existing accounts may have different renewal terms.</p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="webflow-true-cost" />
                      </div>
                    </header>
                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 18, 2026" readTime="9 min read" />

                    <nav aria-label="Article contents" className="my-8 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                        <p className="mb-3 font-bold text-charcoal">Find your answer</p>
                        <ul className="grid gap-3 text-sm sm:grid-cols-2">
                            {[
                                ["plans", "Monthly vs yearly prices"], ["workspace-seats", "Do you need a paid Workspace?"],
                                ["renewal", "Why your renewal bill can change"], ["budget-example", "A worked annual budget"],
                                ["cost-checklist", "Costs to check on your own site"], ["worth-it", "Reduce costs or change platform?"],
                            ].map(([id, label]) => <li key={id}><a href={`#${id}`} className={sourceLinkClass}>{label}</a></li>)}
                        </ul>
                    </nav>

                    <BlogHeader id="plans">Webflow monthly and yearly pricing</BlogHeader>
                    <BlogText>
                        Choose a plan for what the site needs to publish. A designer&apos;s fee is a separate project cost; buying a subscription does not include someone building your website. The table separates an annual commitment from a month-to-month subscription so you can compare the actual first-year payment.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Webflow plan prices">
                        <table className="w-full min-w-[620px] text-left text-sm">
                            <caption className="p-4 text-left text-stone-600">Official prices checked September 25, 2026; base plans before tax and optional extras.</caption>
                            <thead className="bg-stone-100 text-charcoal"><tr><th scope="col" className="p-4">Plan</th><th scope="col" className="p-4">With yearly billing</th><th scope="col" className="p-4">With monthly billing</th><th scope="col" className="p-4">Starting use case</th></tr></thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><th scope="row" className="p-4">Starter</th><td className="p-4">Free</td><td className="p-4">Free</td><td className="p-4">Build and publish on a webflow.io address</td></tr>
                                <tr><th scope="row" className="p-4">Basic</th><td className="p-4">{spec("webflow-basic-price").value}; $180/year</td><td className="p-4">{spec("webflow-basic-monthly-price").value}; $300 over 12 months</td><td className="p-4">A custom domain without a CMS</td></tr>
                                <tr><th scope="row" className="p-4">Premium</th><td className="p-4">{spec("webflow-premium-price").value}; $300/year</td><td className="p-4">{spec("webflow-premium-monthly-price").value}; $468 over 12 months</td><td className="p-4">A blog or other CMS content</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mb-8 text-sm leading-relaxed text-stone-600">Sources: <a href="https://webflow.com/pricing" className={sourceLinkClass}>Webflow pricing</a> and <a href={planChangesUrl} className={sourceLinkClass}>its monthly and annual plan-change terms</a>. Hosting is part of the Site plan; do not add another generic Webflow hosting fee. Domain registration, mailbox services and your own suppliers are separate budget items.</p>
                    <BlogText>
                        Team is a different buying route: {spec("webflow-team-price").value} with an annual contract, bundling a site and Workspace. Do not add a second Site plan charge for the included site. Confirm additional sites, usage and extras with Webflow. Enterprise is quoted individually.
                    </BlogText>

                    <BlogHeader id="workspace-seats">Do you need both a Site plan and a paid Workspace?</BlogHeader>
                    <BlogText>
                        Not automatically. A Site plan covers a published website; a Workspace covers the environment in which people build and manage sites. A free Starter Workspace can be enough for a solo owner. A paid Workspace becomes relevant when you need its features, such as export or more advanced collaboration. Check the required roles and included access before buying additional seats.
                    </BlogText>
                    <BlogText>
                        For in-house teams, Core is {spec("webflow-core-price").value} and Growth is {spec("webflow-growth-price").value}, both billed yearly. These are Workspace charges, not another price per published website. If one Workspace serves several sites, allocate its cost once across them. Review paid seats, guests and any client access separately rather than charging every person as a designer.
                    </BlogText>
                    <p className="mb-8 text-sm leading-relaxed text-stone-600">The <a href="https://help.webflow.com/hc/en-us/articles/33961279888019-Workspace-billing-and-invoices" className={sourceLinkClass}>Workspace billing guide</a> shows where to find plan, seat and add-on invoices, plus the next bill. You need owner or admin access to review billing. Template purchases have their own invoice location.</p>

                    <BlogHeader id="renewal">Why is your Webflow price increasing, or different from this table?</BlogHeader>
                    <BlogText>
                        The 2026 plan transition depends on your account and renewal. New Site plan purchases changed from May 13. Existing sites generally transition at a renewal or billable change on or after June 29, with qualifying Freelancer, Agency and legacy accounts following from November 16. Check the notification and next-bill screen for your account before treating a published rate as your next charge.
                    </BlogText>
                    <BlogText>
                        CMS and Business are being replaced by Premium. A lower base plan price can still come with a different bandwidth allowance or an add-on. Webflow&apos;s <a href={planChangesUrl} className={sourceLinkClass}>official transition examples</a> include bills that fall, stay the same and rise. Compare the entire renewal, including credits and extras, with the same usage period. A mid-cycle charge is not necessarily your new steady monthly cost.
                    </BlogText>

                    <BlogHeader id="budget-example">A Webflow annual budget you can reproduce</BlogHeader>
                    <BlogText>
                        Use two totals: money paid to suppliers, and the value of your team&apos;s time. Mixing them can make a low subscription look expensive without showing where the money actually goes. Separating them also makes a fair comparison with WordPress or a custom website possible.
                    </BlogText>
                    <div className="my-6 rounded-2xl border border-cognac/20 bg-cognac/5 p-6 text-stone-700">
                        <h3 className="mb-3 text-xl font-bold text-charcoal">The calculation</h3>
                        <p className="mb-3 leading-relaxed">Annual cash cost = 12 × monthly subscriptions + annual-only charges + one-time work + usage and transaction fees + applicable tax.</p>
                        <p className="leading-relaxed">Total ownership cost = annual cash cost + internal hours × your chosen hourly cost.</p>
                    </div>
                    <BlogText>
                        Here is an illustrative existing marketing site with a CMS, one editor, no ecommerce and no paid Workspace. It uses the annual Premium base rate. Every other amount below is a chosen example input, not a vendor quote or a client result. There is no new website build included; the one-time work is an assumed update to an existing site. Tax is excluded so you can add your own.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Illustrative annual website budget">
                        <table className="w-full min-w-[520px] text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal"><tr><th scope="col" className="p-4">Input</th><th scope="col" className="p-4">Calculation</th><th scope="col" className="p-4">First year</th></tr></thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                {[
                                    ["Premium Site plan", "$25 × 12", "$300"], ["Starter Workspace", "$0", "$0"],
                                    ["Assumed connected tools", "$20 × 12", "$240"], ["Assumed annual domain renewal", "$24 once per year", "$24"],
                                    ["Assumed one-time site update", "$600", "$600"], ["Cash subtotal before tax", "$300 + $240 + $24 + $600", "$1,164"],
                                    ["Assumed internal upkeep", "2 hours × $50 × 12", "$1,200"], ["Total including internal time", "$1,164 + $1,200", "$2,364"],
                                ].map(([item, calculation, total]) => <tr key={item}><th scope="row" className="p-4 font-medium">{item}</th><td className="p-4">{calculation}</td><td className="p-4">{total}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        If those inputs stay unchanged and the $600 update does not repeat, year two is $564 in supplier costs and $1,764 including internal time, before tax. That difference comes from one-time work. It is not a platform saving. An annual subscription&apos;s monthly equivalent also does not mean the cash leaves your account monthly.
                    </BlogText>
                    <p className="mb-8"><a href="/resources/webflow-cost-worksheet.csv" download className={sourceLinkClass}>Download the blank Webflow cost worksheet (CSV)</a>. Fill it with your own invoices in Excel or Google Sheets. It contains input rows, not an automatic quote.</p>

                    <BlogHeader id="cost-checklist">Which extra Webflow costs should you check?</BlogHeader>
                    <BlogList items={[
                        "Access: who needs design, publishing or content editing rights? Record the paid seats actually required and subtract access already included in your arrangement.",
                        "Usage: check bandwidth and enabled add-ons against recent use and the next renewal. Add only tools and locales you need; do not assume every optional product is mandatory.",
                        "Connected services: domain, business email, CRM, search, membership, automation and consent tools. Mark each as included, externally billed or not used.",
                        "People: separate the initial design/build, occasional changes, content work and ongoing maintenance. Name who owns forms, integrations and incident response.",
                    ]} />
                    <BlogText>
                        Forms need a specific check: Webflow documents a lifetime limit of 50 submissions on the free Starter Site plan and unlimited submissions on the other Site plans. Do not invent a paid submission-overage line. File uploads and any external routing or CRM service have their own requirements. Confirm that a test enquiry reaches its destination before cancelling a service that looks redundant. <a href="https://help.webflow.com/hc/en-us/articles/33961344521235-Form-submissions" className={sourceLinkClass}>Form submission rules</a>.
                    </BlogText>
                    <BlogText>
                        For ecommerce, use the Ecommerce plan that applies to your store, then separately account for Webflow transaction charges, payment processing and store apps. Do not add a marketing Site plan to the same store simply because a comparison table lists both. Work from gross eligible sales, order count and your processor statement; refunds, currencies and your contract can change the result. Check the <a href="https://help.webflow.com/hc/en-us/articles/33961345384339-Webflow-Ecommerce-overview" className={sourceLinkClass}>Ecommerce documentation</a> and your billing terms.
                    </BlogText>
                    <BlogText>
                        Run an expected-use and a higher-use version of the worksheet. Change one input at a time, such as an extra editor, a language or a bandwidth tier. You can then see the cost of that decision without attributing every increase to the platform. Keep the invoice month and renewal date alongside each entry so someone else can check your calculation.
                    </BlogText>

                    <BlogHeader id="worth-it">Is Webflow worth it, or should you reduce the bill?</BlogHeader>
                    <BlogText>
                        Webflow can be good value when its editor and managed hosting let your team publish effectively. A higher bill alone does not establish that a rebuild will be cheaper. First check unused subscriptions, role assignments and what your current plan already includes. Have the person responsible for each integration confirm what would stop working before removing it.
                    </BlogText>
                    <BlogText>
                        If the complaint is slow pages or a broken enquiry flow, investigate that implementation. Our <Link href="/free-audit" className={sourceLinkClass}>free website audit</Link> checks public technical signals and offers a founder review; it cannot read your private Webflow invoices. For billing help, share a redacted cost breakdown with the relevant plan and renewal dates. Keep personal details and payment information out of it.
                    </BlogText>
                    <BlogText>
                        If you are comparing a move, add the rebuild, content transfer, overlapping subscriptions during launch, replacement services and maintenance over the same period. Code export is only part of that work: Webflow&apos;s <a href="https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" className={sourceLinkClass}>export documentation</a> identifies CMS functionality, forms and site search among the features that need replacement outside Webflow. A downloaded ZIP is not a functioning replacement for those services.
                    </BlogText>
                    <BlogText>
                        Keep the decisions separate: this page covers ongoing cost. Our <Link href="/blog/webflow-migration-cost" className={sourceLinkClass}>Webflow migration cost guide</Link> covers a one-time move; <Link href="/blog/webflow-vs-custom-website" className={sourceLinkClass}>Webflow versus a custom website</Link> compares operating requirements. If you need someone to do the work, see our <Link href="/services/webflow" className={sourceLinkClass}>Webflow optimization and migration services</Link>. A build quote and a subscription price answer different questions.
                    </BlogText>

                    {postFAQs.length > 0 && <><BlogHeader id="faq">Webflow cost questions</BlogHeader><FAQAccordion faqs={postFAQs} /></>}
                    <BlogHeader id="sources">Sources and method</BlogHeader>
                    <BlogText>We checked the official pages below on September 25, 2026. The worked budget is our illustrative calculation, not a survey of customer bills. We also sell website services, so compare our proposed work and ongoing costs with keeping your existing platform.</BlogText>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">{sources.map((source) => <li key={source.url}><a href={source.url} className={sourceLinkClass}>{source.name}</a></li>)}</ul>
                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Talk through your Webflow costs with a founder</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">Send your site address and the cost or workflow you want to improve. We can discuss whether a focused fix or a rebuild deserves a closer look. Any paid investigation or build is scoped and priced before it starts.</p>
                        <QuoteModalButton cta="webflow_true_cost_review" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">Ask a founder about your site <ArrowRight className="h-4 w-4" /></QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
