import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { Ladies4JesusCaseStudyPreview as RedesignLadies4JesusCaseStudy } from "@/app/preview/work/ladies-4-jesus/Design";

const canonicalUrl = "https://www.pandacodegen.com/work/ladies-4-jesus";
const title = "Ladies 4 Jesus Case Study: A Moderated Community an Owner Runs Alone";
const description =
    `${MIGRATION_PROJECT_DETAILS.ladies4Jesus.summary} Build record: no before-and-after performance comparison is claimed, because no baseline was captured.`;

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    openGraph: {
        title: "Ladies 4 Jesus: A Moderated Community an Owner Runs Alone",
        description:
            "Nine content types, five moderated submission paths, video upload with automatic cleanup, and a CMS the owner runs without a developer. Build record.",
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/ladies-4-jesus")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ladies 4 Jesus: A Moderated Community an Owner Runs Alone",
        description: "Nine content types, five moderated submission paths, and a CMS the owner runs without a developer.",
    },
    alternates: { canonical: "/work/ladies-4-jesus" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Why does this case study have no before-and-after performance numbers?",
        answer: "This was a migration, but nobody recorded the previous platform's load times or hosting costs before it was replaced, so there is no baseline to compare a launch reading against. Our MyCustomPatches record captured a before-and-after because those readings were taken on the old site while it was still running, though the performance figures from that project are themselves withdrawn pending reconciliation, which makes the same point twice over. Here they were not, and inventing a plausible 'before' after the fact is exactly the kind of number this firm spent a month removing from its own writing. The lesson generalises: capture load time, PageSpeed and the actual monthly bill before you migrate, because the day the old site is switched off is the day that evidence stops existing.",
    },
    {
        question: "How does the moderation workflow actually work?",
        answer: "Five of the nine content types are visitor-submitted: testimonies, questions, comments, contact messages, and content reports. Each carries a moderation status and is written to the CMS in a pending state by a server-side route, never directly from the browser. Nothing a visitor submits is rendered publicly until the owner sets it to approved in the Studio. The public queries filter on that status, so an unapproved item cannot appear even by accident.",
    },
    {
        question: "What happens to a video when a testimony is rejected or deleted?",
        answer: "It is removed from storage rather than left to accumulate. Video testimonies upload directly to Vercel Blob, and a Sanity webhook fires on rejection or deletion to delete the associated blob. A separate scheduled job sweeps up abandoned uploads, which are the files a visitor uploads before abandoning the form and which no webhook would ever fire for. Most builds implement the upload and skip both cleanup paths, and the storage bill is where that decision eventually shows up.",
    },
    {
        question: "Can the owner change content without a developer?",
        answer: "Yes, and that was the point of the architecture. The Sanity Studio is embedded in the application at /studio, and content edits reach the live site in about sixty seconds through incremental regeneration, with no deploy and no developer involved. Schema changes still ship with a normal git push, because those change the shape of the data rather than its contents.",
    },
    {
        question: "Why is the Studio route exempt from the Content-Security-Policy?",
        answer: "Because the Studio is an authenticated admin application that loads its own assets and opens its own connections, and a strict policy written for the public site blocks it. The exemption is scoped to that one route deliberately rather than loosened site-wide. The public site keeps a strict policy with image, media and frame sources limited to the CMS CDN, the blob store, and the two video hosts the site actually embeds.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/work/ladies-4-jesus"),
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-08-10T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Next.js", "Sanity", "Content moderation", "Web application security", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Case study",
            inLanguage: "en-US",
            wordCount: 1450,
            timeRequired: "PT7M",
            about: [
                { "@type": "Thing", name: "Content moderation" },
                { "@type": "SoftwareApplication", name: "Sanity", sameAs: ["https://www.sanity.io"] },
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org"] },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", position: 3, name: "Ladies 4 Jesus", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-08-10T00:00:00-05:00",
            inLanguage: "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: pageFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/ladies-4-jesus).
// Metadata, structured data and the FAQ list stay in this file; the FAQ list is passed
// to the design so the visible questions and the FAQPage data are one array.
export default function Ladies4JesusCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <RedesignLadies4JesusCaseStudy faqs={pageFaqs} />
        </>
    );
}
