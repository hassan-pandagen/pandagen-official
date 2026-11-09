import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import ArticleContents from "@/components/blog/ArticleContents";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "wordpress-vs-nextjs";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress vs Next.js: Speed, Costs and Running Your Business";
const description =
    "Compare WordPress and Next.js for your business: website speed, staff editing, bookings, automation, security, backups, ongoing costs and ownership.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "WordPress vs Next.js",
        "Next.js vs WordPress",
        "WordPress to Next.js",
        "Next.js CMS",
        "WordPress migration",
        "WordPress vs custom website",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-15",
        modifiedTime: "2026-11-10",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-vs-nextjs")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress features", url: "https://wordpress.org/about/features/" },
    { name: "WordPress REST API", url: "https://developer.wordpress.org/rest-api/" },
    { name: "WordPress export documentation", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "WordPress hardening guide", url: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
    { name: "Next.js server and client components", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
    { name: "Next.js caching guide", url: "https://nextjs.org/docs/app/getting-started/caching" },
    { name: "Next.js production checklist", url: "https://nextjs.org/docs/app/guides/production-checklist" },
    { name: "Next.js data security guide", url: "https://nextjs.org/docs/app/guides/data-security" },
    { name: "WordPress performance guide", url: "https://developer.wordpress.org/advanced-administration/performance/optimization/" },
    { name: "WordPress backups", url: "https://developer.wordpress.org/advanced-administration/security/backup/" },
    { name: "Supabase database backups and file-storage limitations", url: "https://supabase.com/docs/guides/platform/backups" },
    { name: "Google site-move guidance", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    { name: "Patchstack EssentialPlugin investigation", url: "https://www.patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" },
    { name: "GitHub supply-chain security report", url: "https://github.blog/security/supply-chain-security/strengthening-supply-chain-security-preparing-for-the-next-malware-campaign/" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/wordpress-vs-nextjs"),
            description,
            datePublished: "2026-03-15",
            dateModified: "2026-11-10",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["WordPress", "Website migration", "Technical SEO", "Web performance", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Platform comparison",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 3822,
            timeRequired: "PT19M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "WebPage",
            name: title,
            "@id": "https://www.pandacodegen.com/blog/wordpress-vs-nextjs#webpage",
            url: "https://www.pandacodegen.com/blog/wordpress-vs-nextjs",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/wordpress-vs-nextjs#breadcrumb" },
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

export default function WordPressVsNextJsPage() {
    return (
        <>
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb schemaId={"https://www.pandacodegen.com/blog/wordpress-vs-nextjs#breadcrumb"} items={postCrumbs(postId, "WordPress vs Next.js")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Platform comparison</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress vs Next.js: <span className="italic text-cognac">Which Fits Your Business?</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Your website should help customers find you, buy or book, and get the right information to
                            your team. WordPress gives you ready-made publishing tools and plugins. With Next.js, we can
                            build a lighter public website and connect it to the way your business works behind the scenes.
                            Here is what that choice means for speed, everyday tasks, costs and support.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Updated November 10, 2026. Written for business owners, with documentation and project examples linked below.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="wordpress-vs-nextjs" />
                      </div>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="wordpress-vs-nextjs" published="2026-03-15" readTime="19 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Our recommendation</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Choose a custom Next.js build when you need a fast website and connected business tools:
                            bookings, payments, customer records, staff tasks and automatic follow-up. We can design
                            those steps together, with an editor your team can use.
                        </p>
                        <p className="leading-relaxed text-stone-700">
                            If you mainly need pages and articles, or existing WordPress plugins already do the job well,
                            improving WordPress may be the better use of your budget. We build Next.js websites and sell
                            WordPress migration services, so we have a commercial interest in this comparison.
                        </p>
                    </section>

                    <InsightBox variant="info" label="A real example: A Step Above Medical">
                        Previously, staff received class enquiries and emailed payment links by hand. We replaced the
                        Divi WordPress site with a Next.js website, a Sanity content editor and a separate staff portal.
                        Students now book and pay online; the system handles confirmations, class records and certificates.
                        <Link href="/work/a-step-above-medical" className="text-cognac hover:underline"> See the website and class-management system</Link>.
                    </InsightBox>

                    <ArticleContents />
                    <BlogHeader id="different">What are you actually buying?</BlogHeader>
                    <BlogText>
                        WordPress is a website system with an editor built in. A theme supplies the design, and plugins
                        add features such as forms, bookings, shops or memberships. It can also be developed specifically
                        for your business.
                    </BlogText>
                    <BlogText>
                        Next.js is the foundation developers use to build a website or web application. It does not come
                        with a staff editor. We connect one, such as Sanity or Payload, and build the pages and business
                        features around it. You use a login and editing screens; you do not need to write code.
                        The quote should cover that complete system, including training and documentation.
                    </BlogText>

                    <BlogHeader id="architecture">The differences that matter day to day</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="WordPress and Next.js business comparison">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal"><tr><th scope="col" className="p-4">Your question</th><th scope="col" className="p-4">WordPress</th><th scope="col" className="p-4">Our Next.js approach</th></tr></thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><th scope="row" className="p-4 font-bold">Can staff update it?</th><td className="p-4">Built-in editor, with options depending on the theme and plugins.</td><td className="p-4">An editor arranged around your pages, services, products or classes.</td></tr>
                                <tr><th scope="row" className="p-4 font-bold">What helps it load quickly?</th><td className="p-4">A suitable theme, optimized images, good hosting and caching.</td><td className="p-4">Purpose-built pages, prepared ahead where suitable, with browser code limited to the features needed.</td></tr>
                                <tr><th scope="row" className="p-4 font-bold">How do bookings and staff work connect?</th><td className="p-4">Plugins and integrations, with custom work where their rules do not match yours.</td><td className="p-4">A connected journey designed around your rules and existing services.</td></tr>
                                <tr><th scope="row" className="p-4 font-bold">Who handles updates?</th><td className="p-4">Your support team maintains WordPress, themes, plugins and hosting.</td><td className="p-4">Your support team maintains the application, editor, software packages and connected services.</td></tr>
                                <tr><th scope="row" className="p-4 font-bold">What gets backed up?</th><td className="p-4">The database and website files, including uploads.</td><td className="p-4">Code, content and business records, plus a separate backup of uploaded files.</td></tr>
                                <tr><th scope="row" className="p-4 font-bold">Can another developer take over?</th><td className="p-4">Yes, with accounts, files, database and licence details.</td><td className="p-4">Yes, with your accounts, project code, data and handover instructions.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="performance">Will a Next.js website load faster?</BlogHeader>
                    <BlogText>
                        <strong>Speed is a practical reason we recommend Next.js for a custom rebuild.</strong> When
                        replacing a heavy page-builder site, we can remove unused design features and plugin scripts,
                        prepare public pages in advance and send the visitor less work to do on their phone. This can
                        make the same content quicker to open and use.
                    </BlogText>
                    <BlogText>
                        Compare the same pages, pictures and features. Having the same number of pages does not mean
                        two websites do the same amount of work. A cached WordPress page can also be served quickly,
                        while large videos or unnecessary tracking can slow either build down. We demonstrate the
                        difference on representative pages before launch rather than assign a speed to the framework name.
                    </BlogText>
                    <BlogHeader id="rendering">How we build speed into Next.js</BlogHeader>
                    <BlogList items={[
                        "Prepare suitable public pages before a visitor arrives, instead of rebuilding every part on every visit.",
                        "Keep work on the server where possible, so a visitor's phone downloads and runs less JavaScript.",
                        "Size and compress images for the screen, and delay below-the-fold media until it is needed.",
                        "Load booking tools, video players and marketing scripts where they belong, instead of putting everything on every page.",
                        "Test important pages on mobile, including forms and checkout, and use real-visitor measurements when available.",
                    ]} />
                    <BlogText>
                        Next.js documents the <a href="https://nextjs.org/docs/app/getting-started/server-and-client-components" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">server and browser controls</a> behind this approach.
                        Our <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">plain-English guide to Core Web Vitals</Link> explains how we measure loading, responsiveness and page movement.
                    </BlogText>
                    <BlogHeader id="wordpress-performance">Does WordPress need more plugins to be fast?</BlogHeader>
                    <BlogText>
                        Many WordPress sites use plugins for caching and image optimization. Some hosts provide these
                        features themselves. WordPress does not require a plugin for every improvement: choosing a
                        lighter theme, resizing images and removing unnecessary scripts can help too. Its
                        <a href="https://developer.wordpress.org/advanced-administration/performance/optimization/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline"> performance guide</a> covers those options.
                    </BlogText>
                    <BlogText>
                        Our Next.js approach puts those decisions into the build, without a WordPress caching plugin or
                        page builder to configure. If the existing WordPress site is otherwise right for you, we can
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline"> investigate its slow pages first</Link>.
                    </BlogText>

                    <BlogHeader id="features">Can the website help run the business?</BlogHeader>
                    <BlogText>
                        This is where a custom build can earn its price. The website can start a process that continues
                        through payments, staff work and customer updates. Your team should not have to copy the same
                        details between a form, a spreadsheet, an email and an accounting system.
                    </BlogText>
                    <BlogText>
                        WordPress can support these processes through plugins, integrations and custom development.
                        That works well when their features fit. When several tools need workarounds to follow your rules,
                        we can build a Next.js website and staff portal around the complete journey.
                    </BlogText>
                    <figure className="my-8 rounded-2xl border border-cognac/20 bg-cognac/5 p-6">
                        <figcaption className="mb-5 font-bold text-charcoal">A connected customer journey we can build</figcaption>
                        <ol className="grid gap-4 sm:grid-cols-5">
                            {['Enquiry or booking', 'Payment and confirmation', 'Staff assignment', 'Delivery and updates', 'Records and follow-up'].map((step, index) => (
                                <li key={step} className="border-l-2 border-cognac pl-3 text-sm font-semibold leading-relaxed text-charcoal"><span className="mb-2 block text-xs text-cognac">0{index + 1}</span>{step}</li>
                            ))}
                        </ol>
                    </figure>
                    <BlogList items={[
                        "Enquiries: save the customer's details, send an acknowledgement and assign the request to the right person.",
                        "Bookings: check availability, reserve places, collect payment and release unpaid holds after an agreed time.",
                        "Payments: record successful payments and refunds against the right customer, with an accounting connection where required.",
                        "Staff work: show tasks, deadlines and status in a shared workspace, with permissions for each role.",
                        "Customer updates: send confirmations, reminders and progress messages when the relevant step is complete.",
                        "Follow-up: issue documents or certificates, request missing information and show items that need human attention.",
                    ]} />
                    <BlogText>
                        We agree which of these your business needs before pricing. We also plan what happens when a
                        payment fails, someone cancels, an email cannot be delivered or a connected service is unavailable.
                        Automation needs a visible way to spot and resolve exceptions, not just a successful demo.
                    </BlogText>
                    <InsightBox variant="info" label="What this looks like at A Step Above Medical">
                        The delivered system connects class capacity, paid bookings, expiring unpaid holds and waitlists.
                        It sends student confirmations and class details, gives instructors rosters, records attendance and
                        emails certificates. Payments and refunds stay connected to student records and QuickBooks.
                        Items needing a person appear in a Needs attention list. Read the
                        <Link href="/work/a-step-above-medical#medical-daily-workflow" className="text-cognac hover:underline"> day-to-day workflow</Link> and
                        <Link href="/work/a-step-above-medical#client-review" className="text-cognac hover:underline"> the client's review</Link>.
                    </InsightBox>

                    <BlogHeader id="editing">Can my staff still change pages themselves?</BlogHeader>
                    <BlogText>
                        Yes. Moving to Next.js does not mean asking a developer to change a photograph or class date.
                        We provide a content editor with fields and reusable sections for the work your team does.
                        A class might have a name, date, location, instructor and availability. A news story might have
                        a headline, images, body text and publication date.
                    </BlogText>
                    <BlogText>
                        WordPress gives you its editor and any page-builder tools installed on the site. Our custom
                        approach can make editing more focused: staff see the fields they need, while shared design
                        rules keep pages consistent. New features and substantial layout changes still need development.
                    </BlogText>
                    <BlogText>
                        Before handover, we show staff how to edit and publish, practise the agreed tasks with them
                        and provide documentation. For <Link href="/work/ladies-4-jesus" className="text-cognac hover:underline">Ladies 4 Jesus</Link>,
                        we built publishing and submission moderation around the owner's work. ASAM's team manages course
                        and location content in Sanity and class operations in its separate portal.
                    </BlogText>

                    <BlogHeader id="plugins">What replaces the WordPress plugins?</BlogHeader>
                    <BlogText>
                        We list what each plugin does for your business. Some jobs become part of the new website,
                        some move into the editor or staff portal, and some stay with a specialist service. You should
                        know where every important feature goes before the old site is switched off.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Plugins replaced in the A Step Above Medical project">
                        <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                            <caption className="p-4 text-left font-semibold text-charcoal">Actual replacements in our ASAM project</caption>
                            <thead className="bg-stone-100"><tr><th scope="col" className="p-4">Previous tool</th><th scope="col" className="p-4">What we built instead</th></tr></thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><th scope="row" className="p-4">Divi and Code Snippets</th><td className="p-4">Custom Next.js page templates, with code changes recorded in GitHub.</td></tr>
                                <tr><th scope="row" className="p-4">The Events Calendar, its Pro add-on and Event Tickets</th><td className="p-4">Class scheduling, enrolment and payment tools in the portal.</td></tr>
                                <tr><th scope="row" className="p-4">Ninja Forms</th><td className="p-4">Booking and contact forms connected to the new website.</td></tr>
                                <tr><th scope="row" className="p-4">WP Mail Logging</th><td className="p-4">Email and activity records in the portal.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        A Next.js build still uses software packages and services. We choose, connect and maintain them
                        as part of the application. Payments can stay with a payment provider; an existing donor system
                        or customer database can stay where it is. We replace the parts that need changing and preserve
                        the connections that already serve you well.
                    </BlogText>

                    <BlogHeader id="backups">What gets backed up, and how do we recover it?</BlogHeader>
                    <BlogText>
                        A backup must cover the information your business would need tomorrow. For WordPress, that
                        means both the database and the files: pages, settings, uploads, themes and plugins. The host,
                        a plugin or another managed service can provide this. WordPress's
                        <a href="https://developer.wordpress.org/advanced-administration/security/backup/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline"> backup guide</a> explains why both parts matter.
                    </BlogText>
                    <BlogText>
                        For our Next.js projects, we specify protection for three separate parts. The provider and
                        schedule depend on the agreed project and care plan:
                    </BlogText>
                    <BlogList items={[
                        "Website code: keep the project and its change history in GitHub, with instructions for deploying a working version.",
                        "Content and business records: back up the CMS and database, including bookings, customer details or orders stored there.",
                        "Photos and documents: back up uploaded files separately, using the chosen storage service and a separate copy where agreed.",
                    ]} />
                    <BlogText>
                        A project using Supabase for records and Backblaze for files needs a plan covering both.
                        <a href="https://supabase.com/docs/guides/platform/backups" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline"> Supabase's database backups do not include the uploaded files themselves</a>.
                        Restoring the website code also does not restore yesterday's bookings.
                    </BlogText>
                    <BlogText>
                        Our backup scope names how often copies run, how long they are kept, who receives failure alerts
                        and how a restore is tested. Daily backups can leave a gap of up to a day; a busy booking system
                        may need more frequent protection. Records held by outside payment or accounting services also
                        need their own recovery and reconciliation arrangements.
                    </BlogText>

                    <BlogHeader id="security">Who keeps it secure?</BlogHeader>
                    <BlogText>
                        A Next.js rebuild removes the WordPress installation, theme and WordPress plugins from this
                        website. That removes those particular things to patch. We can also keep public pages separate
                        from private staff tools and limit what each staff account can access.
                    </BlogText>
                    <BlogText>
                        There is still maintenance: Next.js, the editor, connected services and other software need
                        updates. Under the agreed care plan, we review relevant alerts, apply fixes, test affected
                        journeys and explain what changed. Your proposal should say who responds, during which hours
                        and what is included.
                    </BlogText>
                    <BlogHeader id="plugin-buyouts">Can an update introduce a security problem?</BlogHeader>
                    <BlogText>
                        Yes. <a href="https://www.patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Patchstack's April 2026 EssentialPlugin investigation</a> documented
                        malicious updates after a plugin business changed ownership. This is a reason to review the
                        software and the people responsible for its updates.
                    </BlogText>
                    <BlogText>
                        The same responsibility applies to custom development. GitHub's
                        <a href="https://github.blog/security/supply-chain-security/strengthening-supply-chain-security-preparing-for-the-next-malware-campaign/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline"> report on the Shai-Hulud campaign</a> describes
                        malicious JavaScript packages stealing credentials. Testing before publishing an update helps
                        protect the live site, but a successful test alone does not prove software is safe.
                    </BlogText>
                    <BlogHeader id="security-recovery">What happens if something goes wrong?</BlogHeader>
                    <BlogText>
                        For a broken release, we investigate and restore a working version where appropriate. For a
                        suspected break-in, we also check what was accessed, replace exposed passwords or access keys and
                        repair the entry point. Those steps apply to either platform. A backup is part of recovery;
                        it cannot undo information already stolen.
                    </BlogText>

                    <BlogHeader id="seo">What can Next.js do for SEO?</BlogHeader>
                    <BlogText>
                        Next.js lets us build search-friendly pages directly into the website: useful content in the
                        page Google receives, editable titles and descriptions, clear internal links, structured data
                        describing the content, and a sitemap that updates as pages are published. We can improve mobile
                        loading and reuse those rules across your service, product or location pages.
                    </BlogText>
                    <BlogText>
                        You do not need a WordPress SEO plugin for that setup. Your staff still get the agreed SEO fields
                        in their editor. WordPress can provide these features too; the advantage of our custom build is
                        control over how they work together with your design, content and business data.
                    </BlogText>
                    <BlogHeader id="migration">Will moving affect Google?</BlogHeader>
                    <BlogText>
                        <strong>You can move to Next.js while keeping your domain and existing page addresses.</strong>
                        We preserve the content and links that matter, transfer search settings and redirect any addresses
                        that genuinely need changing. Then we check the new pages and monitor Google Search Console.
                    </BlogText>
                    <BlogText>
                        We cannot promise that rankings will never move. Google's
                        <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline"> migration guidance</a> explains
                        that changes can cause temporary fluctuations while pages are processed. Our job is to protect
                        what already works and fix the technical weaknesses that justified the rebuild.
                    </BlogText>
                    <BlogList items={[
                        "Record existing pages, search settings, links and important customer journeys.",
                        "Keep useful addresses unchanged; map a relevant destination for each page that moves.",
                        "Check content, titles, search visibility settings, structured data and sitemaps before launch.",
                        "Test forms, bookings, payments, analytics and staff editing on a private preview.",
                        "Launch with a recovery plan, then check indexing, errors and search performance.",
                    ]} />
                    <BlogText>
                        Read our <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">website migration SEO checklist</Link> and
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline"> WordPress-to-Next.js migration guide</Link> for the detailed checks.
                    </BlogText>

                    <BlogHeader id="accessibility">Will customers find it easier to use?</BlogHeader>
                    <BlogText>
                        A redesign gives us the chance to make navigation, text, forms and checkout clearer. We test
                        keyboard use, visible focus, readable contrast, form labels and error messages, alongside mobile
                        layouts. These checks belong in the agreed build whether the site uses WordPress or Next.js.
                        A framework name or an automated score is not an accessibility certificate.
                    </BlogText>
                    <BlogHeader id="cost">What will it cost to build and run?</BlogHeader>
                    <BlogText>
                        WordPress can be economical when a maintained theme and plugins meet your needs. A custom
                        Next.js build takes more planning and development, but can replace repeated manual tasks and
                        overlapping tools. Compare the complete cost over three years, including the staff time it takes
                        to operate.
                    </BlogText>
                    <BlogList items={[
                        "The initial build or repair, including content migration, testing and training.",
                        "Hosting, database, file storage, email and any paid editing or business services.",
                        "Plugin or service subscriptions that stay, and those the new build actually replaces.",
                        "Security updates, backups, monitoring and support.",
                        "Future changes, your team's administration time and any eventual provider handover.",
                    ]} />
                    <BlogText>
                        We show ongoing charges separately and explain what a care plan covers. Free software does not
                        mean every service is free. Compare actual invoices and like-for-like quotes using our
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline"> three-year cost worksheet</Link>.
                    </BlogText>

                    <BlogHeader id="ownership">What happens if I change developers?</BlogHeader>
                    <BlogText>
                        <strong>Your website stays yours.</strong> For a project set up in your accounts, your domain,
                        hosting, content services and project code remain under your control. Changing developers is a
                        coordinated handover: give the new team access, share documentation and check that publishing,
                        billing and backups keep working. It does not require rebuilding the site.
                    </BlogText>
                    <BlogText>
                        We document account ownership and access in the proposal. You receive the code and design files
                        we create for you, data exports and operating instructions. If you choose included hosting on our
                        account under a care plan, we arrange its transfer to your account when requested or when the
                        engagement ends. Third-party services and assets retain their own licence terms.
                    </BlogText>
                    <BlogText>
                        The incoming developer needs experience with the chosen tools. Handover includes a walkthrough,
                        a test of their access and removal of access no longer needed. Our
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline"> website ownership checklist</Link> lists what to keep.
                    </BlogText>

                    <BlogHeader id="is-wordpress-outdated">Is WordPress outdated?</BlogHeader>
                    <BlogText>
                        No. An old or complicated WordPress installation is a reason to examine that website, not to
                        dismiss every WordPress build. Start with what your customers and staff need next and what it
                        will take to deliver it.
                    </BlogText>
                    <BlogHeader id="why-people-leave">When does a rebuild become worthwhile?</BlogHeader>
                    <BlogList items={[
                        "Staff copy the same information between forms, emails, spreadsheets and business tools.",
                        "Important workflows depend on workarounds between plugins that were not designed together.",
                        "The current design makes it difficult to deliver the customer experience you need.",
                        "Recurring repairs cost time without solving the underlying problem.",
                    ]} />
                    <BlogQuote>
                        The strongest reason to rebuild is what your business can do afterward: customers can complete
                        the task, and your team can handle the work without joining the pieces by hand.
                    </BlogQuote>
                    <BlogHeader id="choose-wordpress">When we recommend keeping WordPress</BlogHeader>
                    <BlogText>
                        Keep it when the editor suits your staff, maintained plugins meet the requirements and targeted
                        improvements can solve the problems. A straightforward publishing site may gain more from better
                        content, design and support than from a change of platform.
                    </BlogText>
                    <BlogHeader id="choose-next">When we recommend Next.js</BlogHeader>
                    <BlogText>
                        Choose it when you want a purpose-built website connected to bookings, payments, customer data
                        or staff operations, and those needs justify custom development. Agree the editor, integrations,
                        recurring costs and support before starting. That gives you a business system with a clear owner
                        for each part.
                    </BlogText>
                    <BlogHeader id="team">Who handles the technical work?</BlogHeader>
                    <BlogText>
                        You do not need an in-house development department to run the finished site. You do need a
                        named team for updates and changes. With PandaCodeGen, Hassan and Imran remain your contacts,
                        and your written scope defines the build, training, documentation and support arrangement.
                    </BlogText>
                    <BlogHeader id="headless">Can we keep the WordPress editor?</BlogHeader>
                    <BlogText>
                        Yes. WordPress can remain the editor while Next.js runs the public website. This is called
                        headless WordPress. It can suit a team that likes its existing editor but needs a different
                        public experience. Forms, previews and plugin features need checking because they do not all
                        carry across automatically. WordPress documents the
                        <a href="https://developer.wordpress.org/rest-api/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline"> connection used to retrieve its content</a>.
                    </BlogText>
                    <BlogHeader id="case">More of our migration work</BlogHeader>
                    <BlogText>
                        Alongside ASAM and Ladies 4 Jesus, we moved
                        <Link href="/work/mycustompatches" className="text-cognac hover:underline"> MyCustomPatches</Link> to Next.js.
                        The client reports delivery in about 22 days for that agreed scope. Each example has its own
                        requirements; we use them to show the work we delivered, not to promise the same schedule for
                        a different website.
                    </BlogText>
                    <BlogHeader id="offer">What we include in a proposal</BlogHeader>
                    <BlogText>
                        Our <Link href="/pricing" className="text-cognac hover:underline">planning tiers</Link> start at
                        $1,500 Starter, $3,500 Growth and $5,000 Scale, with more complex systems quoted separately.
                        We set out pages, features, migration, testing, training, account ownership and ongoing costs
                        before work starts. A common payment option is 30 percent at onboarding and 70 percent on
                        delivery; your written agreement sets the schedule.
                    </BlogText>
                    <BlogText>
                        Our proposals specify included launch support and ongoing maintenance separately. Where a
                        90-plus Lighthouse target is included, the agreement names the pages, mobile and desktop test
                        conditions and remedy. That is a measurable build target, not a promise of Google rankings.
                    </BlogText>

                    <BlogHeader id="related">Related reading</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">Diagnosing a slow Divi build before deciding to move</Link></li>
                        <li><Link href="/blog/elementor-kills-seo" className="text-cognac hover:underline">Testing Elementor pages for search and speed problems</Link></li>
                        <li><Link href="/blog/wordpress-traffic-drop-speed" className="text-cognac hover:underline">Working out what caused a WordPress traffic drop</Link></li>
                    </ul>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} showHeading={false} />
                        </>
                    )}

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Show us where your website slows the business down</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Tell us what customers need to do and what your staff still handle manually. We will explain
                            what to keep, what to connect and what a rebuild would cost.
                        </p>
                        <QuoteModalButton cta="wordpress_nextjs_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Ask us about your site <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
        </>
    );
}
