import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import ArticleContents from "@/components/blog/ArticleContents";
import { BlogAuthor, BlogHeader, BlogList, BlogText } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import {
    ITEM_LABELS,
    OUR_BUILD,
    OUR_HANDOVER,
    OUR_STATUS_LABELS,
    OWNERSHIP_ON_HANDOVER,
    PLATFORMS,
    PLATFORM_PORTABILITY,
    PORTABILITY_CHECKED,
    PORTABILITY_CHECKED_LABEL,
    STATUS_LABELS,
    comparisonRows,
    portabilityFact,
    type PlatformId,
    type PortabilityFact,
    type PortabilityItem,
    type PortabilityStatus,
} from "@/data/platform-portability";
import p from "./portability.module.css";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

// 4 Oct 2026. The owner's main selling point is that a build with us carries no
// platform lock-in, so this post sets out what each platform's own help pages
// say you can take with you. EVERY vendor fact on this page is rendered from
// src/data/platform-portability.ts (status, detail, exact quote, source URL,
// check date). Nothing vendor-specific is retyped here: the prose names items
// and platforms and points at the rows. Our own column comes from the same file,
// which derives it from src/data/company-facts.ts. To change a fact, change the
// data file; this page follows. The contract side of ownership lives in
// /blog/do-you-own-your-website, which this post links to rather than repeats.

const postId = "website-portability";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const path = "/blog/website-portability";
const canonicalUrl = `https://www.pandacodegen.com${path}`;
const title = "Can You Export Your Website? What 8 Platforms Let You Take";
const description =
    "We read the export docs of Wix, Squarespace, Webflow, Shopify, WooCommerce, GoHighLevel and WordPress. What leaves each one, what stays, and what to save first.";
const published = "2026-10-04";
const modified = "2026-10-09";

/** The order platforms appear in, everywhere on this page. */
const ORDER: PlatformId[] = ["wix", "squarespace", "webflow", "shopify", "woocommerce", "gohighlevel", "wordpress-com", "wordpress"];

/** Section anchors. "wordpress" alone would collide with WordPress.com in a reader's head. */
const ANCHOR: Record<PlatformId, string> = {
    wix: "wix",
    squarespace: "squarespace",
    webflow: "webflow",
    shopify: "shopify",
    woocommerce: "woocommerce",
    gohighlevel: "gohighlevel",
    "wordpress-com": "wordpress-com",
    wordpress: "self-hosted-wordpress",
};

/** Break points for long names in the narrow matrix headers. Display only. */
const HEADER_NAME: Partial<Record<PlatformId, ReactNode>> = {
    squarespace: <>Square<wbr />space</>,
    woocommerce: <>Woo<wbr />Commerce</>,
    gohighlevel: <>GoHigh<wbr />Level</>,
    "wordpress-com": <>Word<wbr />Press.com</>,
    wordpress: <>Self-hosted Word<wbr />Press</>,
};

const MATRIX = comparisonRows(ORDER);
const name = (id: PlatformId) => PLATFORMS[id].name;
const factsFor = (id: PlatformId) => MATRIX.map((row) => portabilityFact(id, row.item)).filter((f): f is PortabilityFact => Boolean(f));
const fact = (id: PlatformId, item: PortabilityItem) => {
    const found = portabilityFact(id, item);
    if (!found) throw new Error(`website-portability: no ${id} row for "${item}" in platform-portability.ts`);
    return found;
};

/** "A, B and C", with self-hosted WordPress lower-cased mid-sentence. */
function joinNames(ids: PlatformId[]) {
    const names = ids.map((id, index) => (index > 0 ? name(id).replace(/^Self-hosted/, "self-hosted") : name(id)));
    if (names.length < 2) return names[0] ?? "";
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}
const withStatus = (item: PortabilityItem, statuses: PortabilityStatus[]) =>
    ORDER.filter((id) => {
        const row = portabilityFact(id, item);
        return row ? statuses.includes(row.status) : false;
    });
// Item labels keep their own case ("CMS") and contain "and", so they are listed
// with semicolons rather than joined into a sentence.
const itemList = (id: PlatformId, status: PortabilityStatus) =>
    factsFor(id).filter((f) => f.status === status).map((f) => ITEM_LABELS[f.item]);

const DESIGN_MOVES = withStatus("design", ["exports"]);
const DESIGN_PARTLY = withStatus("design", ["partial"]);
const DESIGN_STAYS = withStatus("design", ["stays"]);
const ORDERS_LEAVE = withStatus("orders", ["exports", "partial"]);
const DOMAIN_MOVES = withStatus("domain", ["exports", "partial"]);

/** Every distinct vendor page the rows rest on, for the sources list and JSON-LD. */
const SOURCES = Array.from(
    new Set([
        ...PLATFORM_PORTABILITY.flatMap((row) => [row.sourceUrl, row.also?.sourceUrl].filter((url): url is string => Boolean(url))),
        ...ORDER.map((id) => PLATFORMS[id].licence.sourceUrl),
    ]),
);

const statusClass: Record<PortabilityStatus, string> = { exports: p.exports, partial: p.partial, stays: p.stays };

/**
 * What each section says in our own words. No figures, limits or plan names here:
 * those render from the rows. `steps` are what to do before cancelling; any
 * vendor-specific condition inside a step is read from the data file.
 */
const SECTIONS: Record<PlatformId, { heading: string; answer: ReactNode; steps: ReactNode[] }> = {
    wix: {
        heading: "Wix: your records export, the site stays on Wix",
        answer: <>Wix lets your records leave and keeps the website. CMS collections, physical products, contacts and orders each have a documented export, and a domain bought from Wix can move to another registrar. The site itself only runs on Wix&apos;s servers, and Wix&apos;s help center says blog posts can&apos;t be exported to other platforms, so posts move by copy and paste or with a developer&apos;s help.</>,
        steps: [
            "Export every CMS collection, then the product list, contacts and orders, and open each file to check it isn't empty or cut short.",
            "Download the images and videos you uploaded from the Media Manager. Media from Wix's own free library and Shutterstock won't download, so note which pictures you'll need to replace.",
            "Copy each blog post's text, images, publish date and URL into a document or spreadsheet. There's no export to lean on.",
            <>Check the domain if you bought it from Wix. {fact("wix", "domain").detail}</>,
        ],
    },
    squarespace: {
        heading: "Squarespace: a partial export of pages and one blog",
        answer: <>Squarespace&apos;s site export is narrower than most owners expect. It writes a WordPress-format XML file that carries layout pages and a single blog, while album, cover, index, portfolio and store pages stay behind with the design. Store data does better: products, contacts and orders export to CSV on their own. Images come out one at a time from the Asset library.</>,
        steps: [
            "Run the site export from a paid site. Trial sites can't export.",
            "If you have more than one blog page, decide which one goes in the export and plan to copy the others by hand.",
            "Export products, contacts and orders separately. Each has its own CSV export.",
            "Download the images you'll keep, one at a time, before the subscription ends.",
            <>Check the domain if it&apos;s registered with Squarespace. {fact("squarespace", "domain").detail}</>,
        ],
    },
    webflow: {
        heading: "Webflow: code export on Workspace plans, without the CMS wiring",
        answer: <>Webflow exports real code. On Workspace plans you can download the site&apos;s HTML, CSS, JavaScript and Assets-panel images and host them anywhere. What doesn&apos;t survive is the dynamic layer: CMS content, ecommerce, forms and site search stop working in exported code. CMS collections export separately to CSV, so the content leaves; the link between content and templates doesn&apos;t.</>,
        steps: [
            "Check which plan you're on. Code export sits with Workspace plans, not Site plans.",
            "Export every CMS collection to CSV, then download the images and files those collections link to. The CSV holds Webflow-hosted links, which stop working once the site is deleted.",
            "Export products from the Designer and orders from the Orders list.",
            "Record every form and where its submissions go. Forms don't work in exported code, so each one needs a new destination.",
        ],
    },
    shopify: {
        heading: "Shopify: store data exports cleanly, pages and posts don't",
        answer: <>Shopify is portable where a store needs it most. Products, customers and orders export to CSV from the admin, and Shopify suggests the product CSV for backups and for moving products. The theme downloads as code, but it&apos;s written in Shopify&apos;s own version of Liquid. Pages and blog posts move by copy and paste, and Shopify lists discount codes, issued gift cards, saved reports and traffic history as things that can&apos;t transfer.</>,
        steps: [
            "Export products, customers and orders to CSV. Include transaction history in the order export if your accountant needs it.",
            "Write down every live discount code and issued gift card balance, because neither transfers.",
            "Copy each page and blog post, with its URL, into a document.",
            "Download the theme .zip for reference, and the files you uploaded that you want to keep.",
            <>Check the domain if you bought it through Shopify. {fact("shopify", "domain").detail}</>,
        ],
    },
    woocommerce: {
        heading: "WooCommerce: the store moves with your WordPress site",
        answer: <>WooCommerce is open-source software installed on your own WordPress host, so the store&apos;s code, theme and uploaded files move with the site. Pages and posts leave through WordPress&apos;s built-in exporter and products through WooCommerce&apos;s product CSV tool. Customer, order and coupon records are the one gap: the built-in reports download as CSV, and complete records go through WooCommerce&apos;s separate Customer / Order / Coupon Export extension.</>,
        steps: [
            "Take a full backup of the files and the database from your host, and confirm you can download it.",
            "Export products with the built-in CSV tool, and pages and posts with Tools, Export.",
            "Decide how you'll take full customer, order and coupon records, and test that export before you need it.",
            "List every paid plugin and theme licence on the store, since each one carries its own terms.",
        ],
    },
    gohighlevel: {
        heading: "GoHighLevel: contacts and orders export, the website doesn't",
        answer: <>HighLevel exports the CRM side and keeps the website. Contacts, orders and media folders have documented exports, while HighLevel&apos;s help center says websites can&apos;t be exported in a form you can manage or edit outside HighLevel. Blog posts and products leave through the API, which means a developer. If you bought the domain through HighLevel, HighLevel is the listed registrant.</>,
        steps: [
            "Export contacts to CSV, and copy any long notes you need first: the export keeps only the latest note, shortened.",
            "Export orders, and download the file promptly, because the emailed link expires.",
            "Download each media folder as a ZIP.",
            "Ask a developer to pull blog posts and products through the API, or copy them by hand.",
            <>Check the domain if you bought it through HighLevel. {fact("gohighlevel", "domain").detail}</>,
        ],
    },
    "wordpress-com": {
        heading: "WordPress.com: content exports in the standard WordPress format",
        answer: <>WordPress.com is the hosted service run by Automattic, and its content export is a standard WordPress XML file. That export holds pages, posts, comments, categories and tags, with links to media rather than the files. The theme, design changes and plugins aren&apos;t in it; a full backup with themes, plugins and the database is a feature of the higher plans.</>,
        steps: [
            "Download the XML export from Tools, Export.",
            "Export the media library separately. The XML only links to it.",
            "If you're on a plan with backup downloads, download the full backup as well.",
            <>Check the domain if it&apos;s registered with WordPress.com. {fact("wordpress-com", "domain").detail}</>,
        ],
    },
    wordpress: {
        heading: "Self-hosted WordPress: the whole site moves",
        answer: <>Self-hosted WordPress is open source under the GPL, and the files and database sit on a host you choose. WordPress&apos;s own documentation describes moving a site by copying the files and the database, and the built-in exporter writes content to a standard XML file. Lock-in on self-hosted WordPress comes from somewhere else: a commercial theme or plugin licence, or a host or developer who holds the accounts.</>,
        steps: [
            "Download a full backup of the files and the database, and keep a copy off the host.",
            "Make sure the hosting account, the domain and the admin login are in your name, not a developer's.",
            "List premium plugins and themes and who holds each licence key.",
        ],
    },
};

/** Every distinct "what we do" detail for the item rows, in matrix order. */
const OUR_ROWS = MATRIX.map((row) => ({ item: row.item, cell: OUR_BUILD[row.item] })).filter(
    (row, index, all) => all.findIndex((other) => other.cell.detail === row.cell.detail) === index,
);

// Visible article text, measured on the production build on 4 Oct 2026 (tables and
// the sources list included, screen-reader-only link text excluded).
const wordCount = 7275;

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    keywords: [
        "can I export my Wix website",
        "export Webflow site",
        "move website from Squarespace",
        "website vendor lock-in",
        "export Squarespace site",
        "can I take my website with me",
        "website builder export comparison",
        "export GoHighLevel website",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: published,
        modifiedTime: modified,
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath(path)],
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
            image: ogImageUrlForPath(path),
            datePublished: published,
            dateModified: modified,
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Website migration", "Next.js", "WordPress", "Content management systems", "Technical SEO"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Guide",
            inLanguage: "en-US",
            wordCount,
            timeRequired: "PT35M",
            about: [
                { "@type": "Thing", name: "Vendor lock-in", sameAs: ["https://en.wikipedia.org/wiki/Vendor_lock-in"] },
                { "@type": "Thing", name: "Data portability", sameAs: ["https://en.wikipedia.org/wiki/Data_portability"] },
                { "@type": "Thing", name: "Website builder" },
            ],
            mentions: ORDER.map((id) => ({ "@type": "SoftwareApplication", name: name(id) })),
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: SOURCES.map((url) => ({ "@type": "CreativeWork", url })),
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: published,
            dateModified: modified,
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

const linkClass = "font-medium text-cognac underline underline-offset-4 hover:text-charcoal";

function Source({ href, label, context }: { href: string; label: string; context: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
            <span className="sr-only"> for {context} (opens in a new tab)</span>
            <ExternalLink aria-hidden="true" className="ml-1 inline h-3 w-3 align-baseline" />
        </a>
    );
}

function PlatformTable({ id }: { id: PlatformId }) {
    const rows = factsFor(id);
    const platformName = name(id);
    return (
        <table className={p.detailTable} role="table">
            <caption>What {platformName}&apos;s own pages say, read on {PORTABILITY_CHECKED_LABEL}, with the sentence each row rests on.</caption>
            <thead role="rowgroup">
                <tr role="row">
                    <th scope="col" role="columnheader">What you want to take</th>
                    <th scope="col" role="columnheader">What {platformName} documents</th>
                </tr>
            </thead>
            <tbody role="rowgroup">
                {rows.map((row) => {
                    const label = ITEM_LABELS[row.item];
                    return (
                        <tr role="row" key={row.item}>
                            <th scope="row" role="rowheader">{label}</th>
                            <td role="cell">
                                <span className={`${p.chip} ${statusClass[row.status]}`}>{STATUS_LABELS[row.status]}</span>
                                <p className={p.detail}>{row.detail}</p>
                                {row.plans && <span className={p.plans}>{row.plans}</span>}
                                <details className={p.evidence}>
                                    <summary>The exact wording</summary>
                                    <q className={p.quote}>{row.quote}</q>
                                    {row.also && row.also.quote !== row.quote && <q className={p.quote}>{row.also.quote}</q>}
                                </details>
                                <span className={p.sourceRow}>
                                    <Source href={row.sourceUrl} label={`${platformName} source`} context={`${platformName}, ${label.toLowerCase()}`} />
                                    {row.also && row.also.sourceUrl !== row.sourceUrl && (
                                        <Source href={row.also.sourceUrl} label="Second source" context={`${platformName}, ${label.toLowerCase()}`} />
                                    )}
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

function PlatformSummary({ id }: { id: PlatformId }) {
    const lines: { label: string; items: string[] }[] = [
        { label: "Leaves cleanly", items: itemList(id, "exports") },
        { label: "Leaves in part", items: itemList(id, "partial") },
        { label: "Stays behind", items: itemList(id, "stays") },
    ];
    return (
        <ul className={p.summary} aria-label={`${name(id)} at a glance`}>
            {lines.filter((line) => line.items.length > 0).map((line) => (
                <li key={line.label}>
                    <b>{line.label}</b>
                    <span>{line.items.join("; ")}</span>
                </li>
            ))}
        </ul>
    );
}

export default function WebsitePortabilityPage() {
    return (
        <>
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal md:pb-20 md:pt-32">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-5 py-10 shadow-xs sm:px-8 md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb schemaId={`${canonicalUrl}#breadcrumb`} items={postCrumbs(postId, "Can You Export Your Website?")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                        <div data-article-hero-copy>
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Ownership and portability</p>
                            <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                                Can You Take Your Website With You? <span className="italic text-cognac">What 8 Platforms Let You Export</span>
                            </h1>
                            <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                                Your data usually can leave. The working website usually can&apos;t. We read the help pages of {ORDER.length} platforms
                                on {PORTABILITY_CHECKED_LABEL}, and only {joinNames(DESIGN_MOVES)} let the whole site, design and code included, move
                                to a host you choose.
                            </p>
                        </div>
                        <div data-article-hero-screen>
                            <BlogCoverFigure id={postId} />
                        </div>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        postId={postId}
                        published={published}
                        readTime="35 min read"
                        bio="Hassan leads PandaCodeGen's migration work off WordPress, Webflow and GoHighLevel. Every one of those moves starts with the exports in this post."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-6 sm:p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                `The whole site, design and code included, moves to another host only on ${joinNames(DESIGN_MOVES)}. Both are open-source software you run on your own hosting.`,
                                `${joinNames(DESIGN_PARTLY)} export part of the design, with conditions: a plan, a platform-specific template language, or a backup feature on higher plans. Each section below names the condition.`,
                                `${joinNames(DESIGN_STAYS)} document no way to run or edit the site somewhere else. Leaving one of them means a rebuild, so export the data first.`,
                                `Order records have a documented export on ${joinNames(ORDERS_LEAVE)}. Products and customer lists usually come with them.`,
                                `A domain bought through the platform can move to another registrar on all ${DOMAIN_MOVES.length} platforms here that sell domains, usually after a waiting period. The Domain name row has each one.`,
                            ]}
                        />
                    </section>

                    <ArticleContents />

                    <BlogHeader id="how-we-checked">How we checked each platform</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            On {PORTABILITY_CHECKED_LABEL} we read each platform&apos;s own help center, developer documentation and terms, and
                            copied the exact sentence every row rests on. You&apos;ll find that sentence under each row in the platform sections,
                            with a link to the page, so you can check it yourself with a text search. We didn&apos;t count third-party migration
                            tools or scrapers, because what they can pull out says nothing about what the platform supports.
                        </BlogText>
                    </div>
                    <BlogText>
                        Each row gets one of three labels. <strong>Exports</strong> means a built-in, documented export covers it.{" "}
                        <strong>Partly</strong> means an export covers only part of it, or it leaves only by copy and paste, a developer API, a
                        separate extension or a plan upgrade. <strong>Stays</strong> means the platform documents no supported way to take it
                        somewhere else in a form another platform can run or edit. Where a platform&apos;s pages don&apos;t cover an item, the
                        table says &ldquo;Not covered&rdquo; and leaves it there.
                    </BlogText>
                    <BlogText>
                        Some comparison tables online squeeze all of this into one &ldquo;can you export the code?&rdquo; column. That hides the
                        part you need to plan around, which is the gap between data that leaves and a site that doesn&apos;t.
                    </BlogText>

                    <BlogHeader id="comparison">Website export comparison: all {ORDER.length} platforms</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The pattern across the platforms is consistent. Records such as products, customers and orders have documented
                            exports almost everywhere. The design and the working pages are where platforms differ, and on{" "}
                            {joinNames(DESIGN_STAYS)} nothing of the design leaves. The last column shows what you receive from a PandaCodeGen build, from our published
                            terms. Platform names link to their section.
                        </BlogText>
                    </div>

                    <div className={p.matrixWrap}>
                        <table className={p.matrix} role="table">
                            <caption>
                                What each platform&apos;s own documentation says you can take with you, read on {PORTABILITY_CHECKED_LABEL}.
                            </caption>
                            <colgroup>
                                <col className={p.itemCol} />
                                {ORDER.map((id) => <col key={id} />)}
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th scope="col" role="columnheader">What you want to take</th>
                                    {ORDER.map((id) => (
                                        <th scope="col" role="columnheader" key={id}>
                                            <a href={`#${ANCHOR[id]}`}>{HEADER_NAME[id] ?? name(id)}</a>
                                        </th>
                                    ))}
                                    <th scope="col" role="columnheader" className={p.oursHead}>PandaCodeGen build</th>
                                </tr>
                            </thead>
                            <tbody role="rowgroup">
                                {MATRIX.map((row) => {
                                    const ours = OUR_BUILD[row.item];
                                    return (
                                        <tr role="row" key={row.item}>
                                            <th scope="row" role="rowheader">{ITEM_LABELS[row.item]}</th>
                                            {row.cells.map((cell, index) => (
                                                <td role="cell" key={ORDER[index]} className={cell ? statusClass[cell.status] : p.none}>
                                                    <span className={p.mobileLabel} aria-hidden="true">{name(ORDER[index])}</span>
                                                    {cell ? STATUS_LABELS[cell.status] : "Not covered"}
                                                </td>
                                            ))}
                                            <td role="cell" className={ours.status === "exports" ? p.yours : p.account}>
                                                <span className={p.mobileLabel} aria-hidden="true">PandaCodeGen build</span>
                                                {OUR_STATUS_LABELS[ours.status]}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <ul className={p.legend} aria-label="What the labels mean">
                            <li><span className={`${p.swatch} ${p.exports}`}>{STATUS_LABELS.exports}</span>a built-in, documented export covers it</li>
                            <li><span className={`${p.swatch} ${p.partial}`}>{STATUS_LABELS.partial}</span>part of it, or only by hand, API, extension or plan upgrade</li>
                            <li><span className={`${p.swatch} ${p.stays}`}>{STATUS_LABELS.stays}</span>no documented way to run or edit it elsewhere</li>
                            <li><span className={`${p.swatch} ${p.account}`}>{OUR_STATUS_LABELS.account}</span>kept in a system under accounts you control</li>
                        </ul>
                    </div>

                    <BlogText>
                        Some platforms do better than their reputation. Shopify documents CSV exports for products, customers and orders,
                        and suggests the product export for backups. Webflow&apos;s code export produces HTML and CSS you can host anywhere.
                        WordPress.com&apos;s higher plans let you download a full backup with themes, plugins and the database. None of that
                        makes leaving free, but it&apos;s worth knowing before you choose.
                    </BlogText>

                    <BlogHeader id="licences">Who owns the content, and who owns the template</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Ownership and portability are different questions. Some of the terms below speak to your content, and others to the
                            templates, themes or software the platform keeps as its own. A template the platform owns, or licenses to one store,
                            was never part of what you owned, so no export would hand it to you. The terms come from the same check.
                        </BlogText>
                    </div>
                    <ul className={p.sourceList}>
                        {ORDER.map((id) => (
                            <li key={id}>
                                <strong>{name(id)}.</strong> {PLATFORMS[id].licence.detail} <q className="italic text-stone-600">{PLATFORMS[id].licence.quote}</q>{" "}
                                <a href={PLATFORMS[id].licence.sourceUrl} target="_blank" rel="noopener noreferrer">
                                    Source<span className="sr-only"> for {name(id)} licence terms (opens in a new tab)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <BlogText>
                        The contract side of ownership, meaning copyright, assignment and who holds which account when an agency builds the
                        site, is covered in our{" "}
                        <Link href="/blog/do-you-own-your-website" className={linkClass}>website ownership contract and control checklist</Link>.
                        This post sticks to what each platform lets you export.
                    </BlogText>

                    {ORDER.map((id) => {
                        const section = SECTIONS[id];
                        return (
                            <section key={id} aria-labelledby={ANCHOR[id]}>
                                <BlogHeader id={ANCHOR[id]}>{section.heading}</BlogHeader>
                                <div data-speakable="true">
                                    <BlogText>{section.answer}</BlogText>
                                </div>
                                {PLATFORMS[id].note && <BlogText>{PLATFORMS[id].note}</BlogText>}
                                <PlatformSummary id={id} />
                                <PlatformTable id={id} />
                                <h3 className="mb-3 mt-8 text-xl font-bold text-charcoal">Before you cancel {name(id)}</h3>
                                <ol className="mb-8 list-decimal space-y-2 pl-6 text-stone-700">
                                    {section.steps.map((step, index) => <li key={index} className="leading-relaxed">{step}</li>)}
                                </ol>
                            </section>
                        );
                    })}

                    <BlogHeader id="any-platform">Before you leave any platform: five things to save</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A platform&apos;s export only covers what the platform stores. Five more things decide whether a move off Wix,
                            Squarespace, Webflow, Shopify, GoHighLevel or WordPress goes smoothly, and none of them is in any platform&apos;s export. Save them while the old site is still live,
                            because a cancelled site can&apos;t be crawled.
                        </BlogText>
                    </div>
                    <ol className="mb-8 list-decimal space-y-3 pl-6 text-stone-700">
                        <li className="leading-relaxed">Crawl the live site and keep every URL, page title, meta description and status code. The new site needs a redirect for each URL that gets traffic, and our guide to <Link href="/blog/will-migrating-hurt-my-seo" className={linkClass}>protecting search traffic in a migration</Link> explains why.</li>
                        <li className="leading-relaxed">Export a year of search data from Google Search Console, so you can compare before and after.</li>
                        <li className="leading-relaxed">Take full-page screenshots of every page template on desktop and mobile. They&apos;re the brief for a rebuild when the design can&apos;t be exported.</li>
                        <li className="leading-relaxed">List every form, booking widget, chat tool, pixel and email integration, and where each one sends its data.</li>
                        <li className="leading-relaxed">Find out who the registrant is on the domain, which account it sits in, and when it renews.</li>
                    </ol>
                    <BlogText>
                        If you&apos;re costing the move rather than planning it, our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={linkClass}>website migration cost guide</Link>{" "}
                        prices the same inventory by platform.
                    </BlogText>

                    <BlogHeader id="ask-before-you-sign">What to ask any agency or builder before you sign</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The cheapest time to avoid lock-in is before the first payment. Ask these eight questions of any website builder
                            you&apos;re considering and any agency that would build on one, and ask for the answers in writing. A provider who
                            already works this way can answer each in a sentence.
                        </BlogText>
                    </div>
                    <ol className="mb-8 list-decimal space-y-3 pl-6 text-stone-700">
                        <li className="leading-relaxed">Which parts of the site can we export, in what file format, and which other platforms can import that file?</li>
                        <li className="leading-relaxed">Does the export include the design and templates, or only the content?</li>
                        <li className="leading-relaxed">Is any export tied to a plan, an add-on or an extension we&apos;d have to buy?</li>
                        <li className="leading-relaxed">Who is the registrant on the domain, and which account will it sit in?</li>
                        <li className="leading-relaxed">Whose account holds the hosting, and can it move to ours?</li>
                        <li className="leading-relaxed">Do we receive the code and design files, and when?</li>
                        <li className="leading-relaxed">Which themes, plugins, fonts and images are licensed rather than ours, and on what terms?</li>
                        <li className="leading-relaxed">Will you run the export with us before launch, so we know it works?</li>
                    </ol>
                    <BlogText>
                        Push hardest on the last question. An export you&apos;ve opened and checked is worth more than a promise about one. For the contract wording behind questions four to seven, use the{" "}
                        <Link href="/blog/do-you-own-your-website" className={linkClass}>ownership checklist for your agreement</Link>.
                    </BlogText>

                    <BlogHeader id="pandacodegen-handover">What a PandaCodeGen handover includes</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            At the end of a build with us you receive the project code and design files we create for you, documentation, and
                            control of the production accounts. That sentence is from our published terms, and it doesn&apos;t change if you
                            later take a support or care plan. Here is the full wording, followed by what it means for each item in the table.
                        </BlogText>
                    </div>
                    <div className={p.canon}>
                        <p>{OWNERSHIP_ON_HANDOVER}</p>
                        <p>From our commercial terms, the same wording on every service page.</p>
                    </div>
                    <ul className={p.keep} aria-label="Also handed over">
                        {OUR_HANDOVER.map((entry) => (
                            <li key={entry.label}>
                                <b>{entry.label}</b>
                                <p>{entry.detail}</p>
                            </li>
                        ))}
                    </ul>
                    <table className={p.detailTable} role="table">
                        <caption>What you keep from a PandaCodeGen build, item by item.</caption>
                        <thead role="rowgroup">
                            <tr role="row">
                                <th scope="col" role="columnheader">Item</th>
                                <th scope="col" role="columnheader">What you receive</th>
                            </tr>
                        </thead>
                        <tbody role="rowgroup">
                            {OUR_ROWS.map(({ item, cell }) => (
                                <tr role="row" key={item}>
                                    <th scope="row" role="rowheader">{ITEM_LABELS[item]}</th>
                                    <td role="cell">
                                        <span className={`${p.chip} ${cell.status === "exports" ? p.yours : p.account}`}>{OUR_STATUS_LABELS[cell.status]}</span>
                                        <p className={p.detail}>{cell.detail}</p>
                                        {cell.sourceUrl && cell.sourceLabel && (
                                            <span className={p.sourceRow}>
                                                <Source href={cell.sourceUrl} label={cell.sourceLabel} context={ITEM_LABELS[item].toLowerCase()} />
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <BlogText>
                        One limit applies: third-party themes, plugins, services and assets stay under their own licence terms, and the
                        written proposal for your project names them. A store that keeps Shopify or WooCommerce behind a new storefront is
                        still subject to that platform&apos;s row above. The{" "}
                        <Link href="/services/custom-engineering" className={linkClass}>custom engineering service page</Link>{" "}
                        describes how we scope and hand over a build, and{" "}
                        <Link href="/pricing" className={linkClass}>our pricing page</Link> shows what each tier includes.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-6 text-white sm:p-8">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Planning to leave a platform?</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            Tell us which platform you&apos;re on. We&apos;ll go through what its exports cover for your site, what needs
                            rebuilding, and what a move would include, then put it in a written proposal.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Book a 15-min call <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <BlogHeader id="sources">Sources</BlogHeader>
                    <BlogText>
                        Every page below was read on {PORTABILITY_CHECKED_LABEL}. Export tools and plans change, so check the linked page
                        before you rely on a row.
                    </BlogText>
                    <ol className={p.sourceList}>
                        {SOURCES.map((url) => (
                            <li key={url}>
                                <a href={url} target="_blank" rel="noopener noreferrer">{url.replace(/^https:\/\//, "")}</a>
                            </li>
                        ))}
                    </ol>
                    <p className="text-xs text-stone-500">Checked <time dateTime={PORTABILITY_CHECKED}>{PORTABILITY_CHECKED_LABEL}</time>.</p>

                    <BlogHeader id="faqs">Questions about taking your website with you</BlogHeader>
                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} showHeading={false} />}
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
        </>
    );
}
