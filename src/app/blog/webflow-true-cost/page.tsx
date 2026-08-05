import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, CreditCard, Gauge, Layers3 } from "lucide-react";
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

const postId = "webflow-true-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Webflow True Cost in 2026: Build It From Your Invoice";
const description =
    "Calculate Webflow total cost from current Site and Workspace plans, add-ons, vendors, transaction costs, internal work and operational risk without using a universal monthly total.";

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
        "Webflow cost calculator",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-18",
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-true-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Webflow pricing", url: "https://webflow.com/pricing" },
    { name: "Webflow site plans", url: "https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan" },
    { name: "Webflow feature availability", url: "https://help.webflow.com/hc/en-us/articles/46729546856211-Understanding-feature-availability-in-Webflow" },
    { name: "Webflow form submissions", url: "https://help.webflow.com/hc/en-us/articles/33961344521235-Form-submissions" },
    { name: "Webflow code export", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Webflow ecommerce", url: "https://help.webflow.com/hc/en-us/articles/33961345384339-Webflow-Ecommerce-overview" },
    { name: "Webflow status", url: "https://status.webflow.com/" },
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
            dateModified: "2026-08-03",
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
            wordCount: 1900,
            timeRequired: "PT7M",
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
            dateModified: "2026-08-03",
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
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Webflow true cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Webflow pricing</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Webflow True Cost: <span className="italic text-cognac">Build It From Your Invoice</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Webflow has no single &quot;real monthly cost.&quot; The defensible total is the combination
                            of the current account, required features, connected services, payment costs, agency work
                            and internal operating time for a defined period.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Every Webflow figure on this page was re-checked against Webflow&apos;s own pricing page and help center on August 2, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 18, 2026" readTime="7 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Webflow's published floor on August 2, 2026: Basic $15/mo billed yearly with no CMS, Premium $25/mo billed yearly with CMS. Per site, USD, before tax.",
                                "Add a Workspace plan if you need code export or more than one seat: Core $19/mo billed yearly, Growth $49/mo billed yearly.",
                                "Add-ons are priced by usage, not bundled: Optimize from $299/mo, Analyze from $9/mo, Localize $9 or $29/mo.",
                                "Selling adds an Ecommerce plan: Standard $29/mo with a 2% transaction fee, Plus $74/mo and Advanced $212/mo at 0%, plus whatever Stripe or PayPal charge you.",
                                "Separate mandatory platform cost from optional apps, internal labor and one-time projects.",
                                "Model usage and fees from actual traffic, content, submissions, seats and commerce.",
                                "Compare alternatives over the same period and requirements; custom operation is not free.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: CreditCard, title: "Direct", body: "Site, Workspace, add-ons and provider invoices." },
                            { icon: Layers3, title: "Usage", body: "Visits, bandwidth, CMS items, seats, forms and the store." },
                            { icon: Gauge, title: "Operation", body: "Design, content, engineering, support and incidents." },
                            { icon: Calculator, title: "Period", body: "One-time plus recurring cost over a fixed horizon." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What does Webflow cost when you add everything up?</BlogHeader>
                    <BlogText>
                        Checked against Webflow&apos;s own pricing page on August 2, 2026: Site plans are Starter at $0,
                        Basic at $15/mo billed yearly and Premium at $25/mo billed yearly, all quoted per site in USD
                        before tax. Basic carries 300 static pages and 10 GB of monthly bandwidth but no CMS at all;
                        Webflow states Basic is &ldquo;specifically for sites that do not use any CMS or Ecommerce
                        features&rdquo;, so a single Collection puts the site on Premium. Platform plans are Team at
                        $2,500/mo on an annual contract and Enterprise, for which Webflow publishes no figure. A paid
                        Workspace plan is separate again, from $19/mo billed yearly for Core. Those are the plan
                        numbers; the rest of this page is what your invoice adds on top. Verify against the
                        {" "}<a href="https://webflow.com/pricing" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>current pricing page</a>
                        {" "}rather than copying an old annual price table. If you are also pricing the other side of
                        the decision, our{" "}
                        <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">Webflow migration cost breakdown</Link>{" "}
                        and our{" "}
                        <Link href="/services/webflow" className="text-cognac hover:underline">Webflow migration service</Link>{" "}
                        set out the same layers for a move away from the platform.
                    </BlogText>

                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Cost layer</th><th className="p-4">Evidence</th><th className="p-4">Calculation</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Website plan</td><td className="p-4">Account plan page and invoice</td><td className="p-4">Current recurring charge plus applicable overages</td></tr>
                                <tr><td className="p-4 font-bold">Workspace</td><td className="p-4">Members, roles and required features</td><td className="p-4">Current charge for the needed collaboration model</td></tr>
                                <tr><td className="p-4 font-bold">Webflow add-ons</td><td className="p-4">Localization, Analyze, Optimize or other enabled products</td><td className="p-4">Current subscription and usage terms</td></tr>
                                <tr><td className="p-4 font-bold">Connected tools</td><td className="p-4">Invoices for forms, search, membership, automation and analytics</td><td className="p-4">Recurring fees plus usage and implementation</td></tr>
                                <tr><td className="p-4 font-bold">Commerce</td><td className="p-4">Plan, processor and sales statements</td><td className="p-4">Subscription, transaction, processing and app costs</td></tr>
                                <tr><td className="p-4 font-bold">People</td><td className="p-4">Timesheets or a bounded allocation</td><td className="p-4">Design, content, engineering, review and support hours</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>The recurring line items teams miss</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Seven lines, and not one of them appears on the Webflow invoice, which is exactly why a cost review built from that invoice alone comes out low. Each gets bought separately and remembered separately. Added up once, the total usually surprises whoever signed off the plan price.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Domain, email and DNS, which are separate from the website plan.",
                            "Additional Workspace access, roles or client collaboration.",
                            "Localization, analytics, experimentation and consent tooling.",
                            "Forms, file storage, sending email, search, memberships and automation.",
                            "Ecommerce apps, payment processing, transaction costs and customer support.",
                            "Agency retainers, freelance work or internal design and engineering time.",
                            "Accessibility work, security, testing, backups, someone on call, and anything compliance requires.",
                        ]}
                    />
                    <BlogText>
                        Forms are the clearest example of a figure the summaries get wrong. Webflow&apos;s form
                        documentation states that the free Starter Site plan is capped at 50 submissions in total, that
                        the cap does not reset, and that submissions are unlimited on every other Site plan. There is no
                        per-block overage. The cost sits in storage instead: form file uploads are free to 10 GB, then
                        $0.50 per GB per month, with a hard limit at 100 GB. Checked August 2, 2026. That does not make forms costless either:
                        spam handling, routing, CRM integration, consent, retention and operations can still create
                        work or vendor spend.
                    </BlogText>

                    <BlogHeader id="workspace-seats">What a Workspace and its seats actually cost</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            This is the half of the bill that sits behind a tab on Webflow&apos;s pricing page and gets
                            left out of most cost comparisons, including the AI-generated ones. Read on August 2, 2026:
                            every account includes a free Starter Workspace with one full seat and two staging sites.
                            Core is $19/mo billed yearly and Growth is $49/mo billed yearly. On top of the plan,
                            <strong> extra seats are charged per person</strong>: a Full seat, which designs sites or
                            manages admin settings, is $39/mo billed yearly; a Limited seat, which edits content and
                            builds pages from components, is $15/mo; reviewer and commenter seats are free. Webflow AI
                            usage is metered separately, with 2,000 credits a month at $20/mo billed yearly.
                        </BlogText>
                    </div>
                    <BlogText>
                        Two features hide inside those plan tiers and both change a migration budget. <strong>Code export
                        requires Core</strong>, so $19/mo is the floor for getting your own markup out. And{" "}
                        <strong>301 redirects are a Growth feature</strong>, which means the plan that lets you preserve
                        search traffic when URLs change is $49/mo, not $19. If you are moving a site into Webflow and
                        mapping old URLs, price Growth from the start rather than discovering it at cutover. Growth also
                        carries site-level roles, publishing permissions and password protection, which is usually what
                        an agency actually needs rather than more staging.
                    </BlogText>
                    <BlogText>
                        The arithmetic that catches teams: a five-person marketing team on Growth is $49 plus four
                        additional seats. Put them all on Full seats and that is $49 + $156 = $205 a month before a
                        single Site plan is paid for. Put the three who only write copy on Limited seats and it is $49 +
                        $39 + $45 = $133. Auditing who genuinely needs a Full seat is the fastest saving on this whole
                        page, and it takes about ten minutes in the members list.
                    </BlogText>

                    <InsightBox variant="warning" label="A seat change lands on August 4, 2026">
                        Webflow&apos;s{" "}
                        <a href="https://help.webflow.com/hc/en-us/articles/36046081578515-Feature-sunsets-deprecations" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>feature sunsets page</a>,
                        read on August 3, 2026, states that the legacy Editor and legacy Editor whitelabeling become
                        unavailable starting August 4, 2026, and that existing legacy Editor users are automatically
                        given access to a free client seat or a limited seat as part of the migration. Those two
                        outcomes are not the same line on your bill: reviewer and commenter seats are free, while a
                        Limited seat is $15/mo billed yearly. If clients or colleagues have been publishing through
                        the legacy Editor, check which seat each of them was actually assigned before you finish this
                        calculation.
                    </InsightBox>

                    <BlogHeader>How the bill changes as the site grows</BlogHeader>
                    <BlogText>
                        Do not use one generic traffic threshold. Model the variables the current plan and connected
                        vendors bill for: visits, bandwidth, CMS items, locales, seats, form storage, orders, messages
                        or automation runs. Add a low, expected and high scenario and identify the point where a plan or
                        architecture change is triggered.
                    </BlogText>

                    <BlogHeader>Code export changes the exit calculation</BlogHeader>
                    <BlogText>
                        Webflow&apos;s help center puts it directly: &ldquo;Code export is only available on Workspace
                        plans &mdash; that is, Site plans do not include the ability to export your site&apos;s
                        code.&rdquo; The cheapest paid Workspace plan that includes it is Core at $19/mo billed yearly,
                        on top of whatever the Site plan costs. Exported HTML, CSS, JavaScript
                        and assets do not include working CMS, ecommerce, User Accounts, localized content beyond the
                        primary locale, code components, password protection, native form processing or site search.
                        A future move therefore includes replacement and migration work, not merely hosting the ZIP.
                        We look at those dependencies separately in our guide to the{" "}
                        <Link href="/blog/webflow-user-accounts-sunset-date-2026" className="text-cognac hover:underline">Webflow User Accounts timeline</Link>{" "}
                        and in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
                    </BlogText>

                    <BlogHeader>Does Webflow have a PageSpeed ceiling you should budget for?</BlogHeader>
                    <BlogText>
                        There is no fixed Webflow PageSpeed ceiling to enter as a line item in your cost model, because
                        no such platform-wide number exists. Measure the live site by representative route, field{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals</Link>{" "}
                        where available and repeatable lab tests. If a performance problem consumes
                        engineering time or affects a measured funnel, add the observed cost and uncertainty to the
                        decision model without claiming the platform caused a ranking or revenue result.
                    </BlogText>

                    <BlogHeader id="actually-free">Is Webflow actually free?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Free to build with, not free to launch. The Starter Site plan is $0 and it publishes to a
                            webflow.io subdomain with two static pages, 1 GB of bandwidth, a limited CMS and a hard cap
                            of 50 form submissions that never resets. The free Starter Workspace is genuinely useful for
                            designing and staging, and it includes one full seat. What $0 does not buy is a custom
                            domain, which is where a real site starts, so the honest floor for anything public is $15/mo
                            on Basic, and $25/mo on Premium the moment you want a CMS. Read from Webflow&apos;s pricing
                            page on August 2, 2026.
                        </BlogText>
                    </div>

                    <BlogHeader id="worth-it">Is Webflow worth it in 2026?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            For a marketing site that one or two people edit and nobody needs to export, yes, and the
                            total above is a fair price for not employing a developer. It stops being worth it at three
                            specific thresholds, all of which you can check today rather than guess at. The first is the
                            seat count, because a Full Workspace seat is $39/mo per person and a Limited one is $15/mo,
                            so that line grows with your team rather than with your traffic. The second is the add-on mix, because Optimize from
                            $299/mo and Localize can each cost more than the site plan they sit on. The third is the
                            moment somebody asks for the code, at which point a paid Workspace plan is the entry fee and
                            what you get back still excludes the CMS, the store and anything behind a login.
                        </BlogText>
                    </div>
                    <BlogText>
                        Notice that none of those thresholds is about design or speed, which is where the argument
                        usually gets had. Webflow is a good product and the reason teams leave it is almost never that it
                        stopped working. It is that the bill grew along an axis nobody priced at the start. Run the
                        ten-step audit below on your own account and you will know which of the three you are closest to,
                        which is a more useful answer than anyone else&apos;s verdict.
                    </BlogText>

                    <BlogHeader>How to price downtime risk without an outage count</BlogHeader>
                    <BlogText>
                        Use Webflow&apos;s current status history and your monitoring to document incidents affecting
                        the site. Price the business requirement through service levels, dependencies, recovery,
                        incident response and any contractual remedy. A historical outage count does not establish the
                        future cost of Webflow or the reliability of a custom alternative.
                    </BlogText>

                    <BlogHeader>Audit your Webflow cost in ten steps</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Ten steps, and the first three take about ten minutes because the information is already sitting in your account. The rest is the actual work: mapping each dependency to a business workflow, which is what tells you whether a line is removable or load-bearing. Keep the order, because step ten is only answerable once step eight is.
                        </BlogText>
                    </div>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>Export the last twelve months of Webflow and connected-vendor invoices.</li>
                        <li>Record the live Website and Workspace plan, renewal date and billing period.</li>
                        <li>List every enabled Webflow add-on and responsible owner.</li>
                        <li>List the outside tools doing your forms, search, memberships, automation, analytics and selling.</li>
                        <li>Capture billed units and actual use for each service.</li>
                        <li>Record internal and external hours for content, design, engineering and support.</li>
                        <li>Map each dependency to a required business workflow.</li>
                        <li>Document export, data, cancellation and replacement constraints.</li>
                        <li>Build twelve, twenty-four and thirty-six month scenarios.</li>
                        <li>Choose retain, right-size, consolidate, replace or investigate with an owner and date.</li>
                    </ol>

                    <BlogHeader>What to do once you have your total</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four routes, and three of them keep you on Webflow. That is the honest distribution: most cost reviews end in right-sizing a plan and removing tools nobody owns rather than in a migration. Pick the route your total actually supports, not the one you suspected before you started counting.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Retain Webflow when the managed editor and features justify the complete cost.",
                            "Right-size plans or remove tools after verifying dependencies and rollback.",
                            "Optimize the implementation when the platform fits but the site has correctable UX or performance problems.",
                            "Migrate when unmet requirements, portability, control or total cost justify the transition and ongoing responsibility.",
                        ]}
                    />
                    <BlogText>
                        Each of those routes has its own article. Read{" "}
                        <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline">what leaving Webflow involves</Link>{" "}
                        before committing to a transition, compare the two operating models in{" "}
                        <Link href="/blog/webflow-vs-custom-website" className="text-cognac hover:underline">Webflow versus a custom website</Link>, and
                        look at{" "}
                        <Link href="/work" className="text-cognac hover:underline">the projects we have delivered</Link>{" "}
                        to see what a scoped build actually contains.
                    </BlogText>

                    <BlogHeader>Compare a custom alternative honestly</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s migration planning tiers start at $1,500 Starter, $3,500 Growth and $5,000
                        to $10,000 Scale. A custom target can still require hosting, CMS, forms, email, databases,
                        monitoring, security updates and engineering. Compare both options on the same requirements,
                        usage and operating period. There is no universal savings percentage or payback. The full tier
                        detail sits on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>, the build
                        variables are unpacked in{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">what a website costs</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">what drives migration cost</Link>, and
                        application-level work is described under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom engineering</Link>.
                    </BlogText>
                    <InsightBox variant="info" label="The evidence standard we hold ourselves to">
                        You will not find an unnamed client bill or a ranking anecdote used as proof on this page. When
                        we publish a result, it comes with the relationship it came from, the date, how it was
                        measured and what the measurement does not tell you. Projects connected to our own founders are
                        labeled as founder-affiliated rather than presented as independent client proof. Apply the same
                        test to any figure you are shown while comparing platforms: if the source, date and method are
                        missing, it is not a number you can plan a budget around.
                    </InsightBox>

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
                        <h2 className="mb-3 font-serif text-3xl">Get a like-for-like migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will reconcile the current Webflow system and compare it with a scoped custom operating
                            model. The result is a decision document, not an automatic recommendation to migrate.
                        </p>
                        <QuoteModalButton cta="webflow_true_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
