import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Blocks, Database, FileSearch, Gauge, Route } from "lucide-react";
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

const postId = "wordpress-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress to Next.js Migration Cost in 2026: Scope and Tiers";
const description =
    "Price a WordPress to Next.js migration from URLs, templates, content, plugins, data, integrations, SEO, accessibility, acceptance, cutover and support.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WordPress migration cost",
        "WordPress to Next.js migration cost",
        "migrate WordPress to Next.js",
        "WordPress website migration",
        "WordPress to custom website",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-22",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-migration-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress export documentation", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "WordPress REST API handbook", url: "https://developer.wordpress.org/rest-api/" },
    { name: "WordPress media endpoints", url: "https://developer.wordpress.org/rest-api/reference/media/" },
    { name: "Google site moves with URL changes", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    { name: "Google JavaScript SEO basics", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
    { name: "Next.js rendering documentation", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
    { name: "Next.js metadata documentation", url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-22",
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
            articleSection: "WordPress migration",
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

const inlineLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WordPressMigrationCostPage() {
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
                            { label: "WordPress migration cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress migration pricing</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress to Next.js Migration Cost <span className="italic text-cognac">Scope Before Price</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Pages are only one input. Templates, plugins, content, data, integrations, SEO, acceptance
                            and cutover determine whether a WordPress migration fits a standard tier or custom scope.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current WordPress, Next.js and Google documentation on July 24, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 22, 2026" readTime="19 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">PandaCodeGen planning tiers</h2>
                        <BlogList
                            items={[
                                "Starter begins at $1,500 for a small, bounded migration.",
                                "Growth begins at $3,500 for broader content, templates, CMS or integration work.",
                                "Scale normally falls between $5,000 and $10,000 for larger or more operationally sensitive scope.",
                                "Complex commerce, applications, regulated data and unusual integrations are scoped separately.",
                                "The signed statement of work, not this article, sets the final price, deliverables, acceptance and remedy.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="Why this page publishes only our own tiers">
                        The prices above are ours. We do not publish a market-wide range for a WordPress migration,
                        because ranges like that mix unlike project types, scopes, regions and levels of finish, and a
                        figure stated without a defined sample and scope is not something a buyer can plan against. Use
                        our tiers as a starting point, then let the accepted written terms set the final price, the
                        deliverables, the acceptance criteria and the remedy.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-5">
                        {[
                            { icon: Route, title: "URLs", body: "Routes, status, value and redirect disposition." },
                            { icon: Blocks, title: "Templates", body: "Layouts, blocks, forms and interactive behavior." },
                            { icon: Database, title: "Data", body: "Content, media, users, commerce and plugin fields." },
                            { icon: FileSearch, title: "Evidence", body: "SEO, accessibility, analytics and functional QA." },
                            { icon: Gauge, title: "Acceptance", body: "Profiles, pages, runs, exclusions and remedy." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="tiers">What each tier can mean</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Tier</th><th className="p-4">Starting point</th><th className="p-4">Potential fit</th><th className="p-4">Common scope expansion</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small site, few repeatable templates, bounded content and forms</td><td className="p-4">Redesign, custom data, many unique layouts or integrations</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">Broader marketing site, CMS, blog and defined integrations</td><td className="p-4">Complex search, localization, accounts or workflows</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Larger content, data, commerce or operational scope</td><td className="p-4">Subscriptions, regulated data, multiple systems or markets</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Application behavior and risk outside a standard website tier</td><td className="p-4">Discovery identifies the appropriate delivery model</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The same tiers with their full inclusions sit on the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>, and the delivery process
                        behind them is set out on our{" "}
                        <Link href="/services/wordpress-migration" className={inlineLinkClass}>WordPress migration service page</Link>.
                    </BlogText>

                    <BlogHeader id="pages">Why page count is not enough</BlogHeader>
                    <BlogText>
                        One template can produce hundreds of consistent posts, while ten manually composed pages may
                        contain ten distinct layouts and behaviors. Group URLs by template, content model and journey.
                        Record page-builder components, shortcodes, reusable blocks, custom post types, taxonomies,
                        forms and conditional behavior. Price the systems that generate the pages, not only the URL total.
                    </BlogText>

                    <BlogHeader id="inventory">The migration inventory</BlogHeader>
                    <BlogList
                        items={[
                            "Crawlable URLs, status codes, canonicals, titles, descriptions and indexability",
                            "Templates, Gutenberg blocks, builder widgets, shortcodes and reusable sections",
                            "Posts, pages, custom post types, taxonomies, custom fields and relationships",
                            "Media files, captions, alt text, attachment references and transformation needs",
                            "Forms, email, CRM, analytics, consent, search and third-party embeds",
                            "Users, roles, accounts, gated content and personal data",
                            "Commerce, orders, subscriptions, bookings, memberships and payment integrations",
                            "Redirects, sitemaps, structured data, internal links and campaign routes",
                        ]}
                    />

                    <BlogHeader id="cheap-quotes">What a cheap quote usually leaves out</BlogHeader>
                    <BlogText>
                        The gap between a low quote and a realistic one is rarely the build. It is the work that only
                        becomes visible once someone opens the current site properly. When you compare quotes, check each
                        of these explicitly — if an item is absent from the written scope, assume it is absent from the
                        price, and ask what happens when it turns up mid-project. Page-builder sites deserve particular
                        care here, and we have written separately about{" "}
                        <Link href="/blog/elementor-kills-seo" className={inlineLinkClass}>how Elementor affects search performance</Link>{" "}
                        and{" "}
                        <Link href="/blog/divi-theme-slow" className={inlineLinkClass}>how the Divi theme affects page speed</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Redirect mapping for every existing URL, including paginated archives, tag and category routes, media attachment pages and campaign destinations. A homepage redirect is not a redirect map.",
                            "Content migration with reconciliation, not just an export. Counts checked, fields mapped, relationships preserved, media re-linked and exceptions reported.",
                            "Page-builder layouts rebuilt as templates. Elementor, Divi, WPBakery and similar do not export into another architecture; those pages get rebuilt, and someone has to price that.",
                            "Form handling end to end: submission, validation, spam protection, notification delivery, storage and whatever CRM or email tool currently receives the data.",
                            "The editorial experience after launch. Which CMS, which fields, who can publish, how preview and scheduling work. A site nobody can update is a problem you discover in week three.",
                            "Analytics and consent continuity, so historical data stays comparable and tracking does not silently break at cutover.",
                            "Accessibility work, if it matters to you. Retrofitting it after the templates are built costs more than designing to it.",
                            "Launch, monitoring and rollback. DNS, verification, a named decision-maker and a documented way back if something is wrong.",
                        ]}
                    />
                    <InsightBox variant="warning" label="The items that typically get added after signing">
                        In our experience the four that most often arrive as change requests are page-builder layouts
                        nobody inventoried, a plugin whose workflow data was not noticed until it broke, content cleanup
                        that turned out to be larger than the export suggested, and integrations discovered late because
                        they were configured by someone who has since left. None of these are dishonest on the seller&apos;s
                        part. They are the predictable consequence of quoting before inventorying. Ask any provider how
                        they price scope discovered mid-project, and get the answer in writing before you start.
                    </InsightBox>

                    <BlogHeader id="export">What WordPress export covers</BlogHeader>
                    <BlogText>
                        WordPress documents a Tools Export function that creates an XML export for supported content,
                        including posts, pages, custom post types, comments, custom fields, taxonomies and users in the
                        described export. WordPress also provides REST API endpoints. Neither mechanism guarantees that
                        every theme, plugin, page-builder layout, private table, credential or third-party service will
                        import cleanly into a different architecture.
                    </BlogText>
                    <InsightBox variant="info" label="Export is not acceptance">
                        A successful file or API response proves only that data was obtained. Migration acceptance needs
                        counts, field mapping, relationship checks, media validation, exception reporting and sampled
                        rendered parity in the target. Our{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className={inlineLinkClass}>step-by-step WordPress to Next.js migration guide</Link>{" "}
                        walks through the checks in order.
                    </InsightBox>

                    <BlogHeader id="plugins">Price plugin capability, not plugin count</BlogHeader>
                    <BlogText>
                        Inventory what each active component does, where it stores data and which customer or staff
                        journey depends on it. Mark retain, replace, redesign or retire. A plugin that adds no frontend
                        assets may still own critical workflow data, while a single page builder can affect most
                        templates. Count alone does not establish effort or risk. On the performance side,{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={inlineLinkClass}>how plugins accumulate into a page-weight problem</Link>{" "}
                        explains what to look for while you inventory.
                    </BlogText>

                    <BlogHeader id="cms">Content editing after WordPress</BlogHeader>
                    <BlogText>
                        A Next.js frontend does not decide the editor. Define the target CMS, fields, roles, previews,
                        approvals, scheduling, localization, media and rollback. Test representative editorial tasks
                        with the people who will use them. A technically complete migration can still fail if routine
                        publishing becomes harder. The editorial setup we most often recommend is described in{" "}
                        <Link href="/blog/nextjs-sanity-stack" className={inlineLinkClass}>our write-up of the Next.js and Sanity stack</Link>.
                    </BlogText>

                    <BlogHeader id="seo">SEO migration scope</BlogHeader>
                    <BlogList
                        items={[
                            "Keep valuable URLs stable where practical.",
                            "Map every changed URL to a relevant successor or an intentional removal state.",
                            "Preserve approved rendered content, titles, canonicals, headings and structured data.",
                            "Update internal links, hreflang, sitemaps and campaign destinations.",
                            "Test redirects and rendered output before launch.",
                            "Monitor Search Console, analytics and server behavior after cutover.",
                        ]}
                    />
                    <BlogText>
                        Google documents permanent redirects for site moves and recommends changing one major thing at a
                        time where possible. Controls reduce avoidable technical risk, but rankings, indexing, traffic
                        and recovery timing remain controlled by search engines and are not guaranteed. We go through
                        what to expect in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to your search rankings</Link>.
                    </BlogText>

                    <BlogHeader id="performance">Performance scope and the 90-plus target</BlogHeader>
                    <BlogText>
                        The owner-approved target is a Lighthouse performance score above 90 on mobile and desktop when
                        the signed scope identifies the representative pages, profiles, exact environment, three
                        passing runs per page and profile, exclusions and remedy. It is not a promise for every URL
                        under every network, browser, data, consent or third-party state, and it is not a ranking or
                        conversion guarantee. For what the score is made of, see{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        and{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className={inlineLinkClass}>the engineering behind a top PageSpeed result</Link>.
                    </BlogText>

                    <BlogHeader id="accessibility">Accessibility and functional acceptance</BlogHeader>
                    <BlogList
                        items={[
                            "Keyboard navigation, visible focus, headings, landmarks and labels",
                            "Responsive layouts, zoom, text reflow, contrast and reduced motion",
                            "Forms, validation, errors, success states and notification delivery",
                            "Consent, analytics, search, filters, downloads and third-party integrations",
                            "Supported browsers, devices and assistive technology checks named in scope",
                        ]}
                    />

                    <BlogHeader id="security">Security and account ownership</BlogHeader>
                    <BlogText>
                        Removing WordPress changes the attack surface but does not eliminate dependencies or operational
                        risk. Inventory target framework packages, CMS, hosting, database, email and monitoring
                        providers. Define updates, secrets, access, logs, backups, recovery and incident ownership.
                        Prefer client-controlled domain, hosting, repository and business accounts when agreed. On the
                        current threat picture, see{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className={inlineLinkClass}>our review of WordPress security risk in 2026</Link>,
                        and on account control,{" "}
                        <Link href="/blog/do-you-own-your-website" className={inlineLinkClass}>do you actually own your website</Link>.
                    </BlogText>

                    <BlogHeader id="timeline">What determines the schedule</BlogHeader>
                    <BlogList
                        items={[
                            "Inventory quality and access to the source systems",
                            "Content readiness and stakeholder review",
                            "Number of templates and bespoke interactions",
                            "Export gaps, data cleanup and reconciliation",
                            "Integration, commerce and account complexity",
                            "Accessibility, security, performance and browser acceptance",
                            "Cutover constraints, approvals and final data delta",
                        ]}
                    />
                    <BlogText>
                        MyCustomPatches is an owner-confirmed PandaCodeGen delivery example completed in 22 days. It is a
                        first-party duration for that accepted scope, not a universal WordPress migration schedule. The{" "}
                        <Link href="/work/mycustompatches" className={inlineLinkClass}>MyCustomPatches case study</Link>{" "}
                        sets out what was in that scope, and{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={inlineLinkClass}>how long a custom website takes to build</Link>{" "}
                        covers the phases in general.
                    </BlogText>

                    <BlogHeader id="stay">When you should stay on WordPress</BlogHeader>
                    <BlogText>
                        Migration is not automatically the right answer, and a provider who never says so is not giving
                        you advice. There are situations where the honest recommendation is to spend a fraction of a
                        migration budget on the actual problem and keep the platform you have. If you have not run the
                        diagnosis yet, start with{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className={inlineLinkClass}>our evidence-led method for fixing a slow WordPress site</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "The measured bottleneck is specific and repairable — an oversized hero image, one slow third-party script, an undersized hosting tier. Fix the measured cause and re-test before concluding the platform is the constraint.",
                            "Your team publishes comfortably in WordPress and nobody has capacity to learn a new editorial workflow. A faster site that your team avoids updating is a net loss.",
                            "You depend on a plugin whose workflow has no equivalent on the target stack, and rebuilding that workflow costs more than the performance gain is worth.",
                            "The site is young and the business model is still changing. Migrating a spec that will be different in six months means paying to rebuild it twice.",
                            "Nobody will own maintenance afterwards. A custom build removes plugin patching and replaces it with dependency and framework patching. If neither will happen, WordPress with managed hosting and a maintenance contract is the safer failure mode.",
                            "Your traffic and revenue do not justify the cost. If the honest upside is smaller than the build, the money belongs somewhere else in the business.",
                        ]}
                    />
                    <InsightBox variant="info" label="How we handle this">
                        We run the diagnosis before recommending a rebuild, and if the evidence points at repair we say so.
                        That costs us the project sometimes. It costs considerably more to deliver a migration a client
                        did not need and cannot operate, and it is the kind of thing that shows up in the reference call
                        two years later.
                    </InsightBox>

                    <BlogHeader id="cutover">Cutover and rollback</BlogHeader>
                    <BlogText>
                        Build and test while the source remains available as the plan permits. Before launch, lower DNS
                        timing where appropriate, freeze or reconcile writes, back up relevant systems, verify
                        redirects, forms and analytics, name the decision-maker and define rollback triggers. Universal
                        zero interruption is not promised.
                    </BlogText>

                    <BlogHeader id="ownership">Ownership and licensing</BlogHeader>
                    <BlogText>
                        Client content, data and brand assets remain client property. Custom deliverables transfer after
                        full payment under the signed agreement. PandaCodeGen retains reusable internal tools,
                        templates and pre-existing code. Third-party components retain their original licenses.
                        Repository and provider handoff are documented rather than implied by the word custom.
                    </BlogText>

                    <BlogHeader id="payment">Payment, refund and support</BlogHeader>
                    <BlogText>
                        Standard payment is 30 percent at onboarding and 70 percent on delivery. Refund is tied to
                        failure to deliver the signed scope, not a preference change after work starts; the contract
                        defines any project-specific exception and work disposition. Published refund timing is up to
                        10 to 12 business days, though PandaCodeGen usually initiates it sooner. Starter includes 15
                        business days of launch defect support; Growth and Scale include 30.
                    </BlogText>

                    <BlogHeader id="quote">How to compare migration quotes</BlogHeader>
                    <BlogList
                        items={[
                            "Normalize URL, template, data, plugin and integration scope.",
                            "Compare design, content, accessibility, SEO and analytics responsibility.",
                            "Check environments, test profiles, acceptance evidence and exclusions.",
                            "Check cutover, rollback, support, change control and incident ownership.",
                            "Check repository, accounts, deliverables, reusable IP and third-party licensing.",
                            "Do not treat a higher quote as padding when the scope or governance is broader.",
                        ]}
                    />

                    <BlogHeader id="worth-it">Is migration financially worth it?</BlogHeader>
                    <BlogText>
                        Compare the target with a maintain-and-optimize WordPress option. Use current invoices, internal
                        work, planned changes, target provider cost and migration cost. Keep hypothetical traffic and
                        revenue outside the base case unless dated first-party evidence and an attribution method
                        support them. No universal revenue threshold or payback period applies. For the longer view,{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={inlineLinkClass}>the three-year cost comparison of WordPress and custom code</Link>{" "}
                        models both columns, and{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className={inlineLinkClass}>the WordPress and Next.js platform comparison</Link>{" "}
                        covers the capability differences behind them.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get an inventory before a fixed price</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map routes, templates, content, data, plugins and acceptance criteria, then confirm
                            whether the migration fits a published tier or custom scope.
                        </p>
                        <QuoteModalButton cta="wordpress_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
