import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { EmblematicStudioCaseStudyPreview as RedesignEmblematicStudioCaseStudy } from "@/components/pages/work/emblematic-studio/Design";

const canonicalUrl = "https://www.pandacodegen.com/work/emblematic-studio";
const title = "Emblematic Studio Case Study: One Catalogue, 22 Products, One Server Route";
const description =
    "A material-led product catalogue and quote experience for a custom patch studio: 22 product types from one typed registry. Build record, no traffic claims.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    keywords: [
        "custom patch website design",
        "product catalog website Next.js",
        "GSAP scroll animation website",
        "editorial website design case study",
        "Next.js static site generation catalog",
        "custom quote form website",
        "manufacturer website design",
        "Next.js 16 case study",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title: "Emblematic Studio: One Catalogue, 22 Products, One Server Route",
        description:
            "22 product types from a single typed registry that also drives navigation, quote validation and the sitemap. One runtime route on the whole site.",
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/emblematic-studio")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Emblematic Studio: One Catalogue, 22 Products, One Server Route",
        description: "22 product types from a single typed registry. One runtime route on the whole site.",
    },
    alternates: { canonical: "/work/emblematic-studio" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Why does this case study quote no traffic or ranking results?",
        answer: "Because the site is new to search. The production build was corrected to allow indexing and deployed on August 7, 2026; before that it carried review-build directives that told search engines to stay away. There is therefore no meaningful search history to report yet, and any figure quoted this early would describe a site Google has barely crawled. What is verifiable today is the build itself and its search-facing configuration, both of which you can inspect on the live site.",
    },
    {
        question: "What does 'one runtime route' actually mean?",
        answer: "Every page on the site is prerendered at build time. The only route that executes server code per request is the quote endpoint, because sending email requires a Node runtime. Product, material and guide pages are generated from the catalogue with dynamic parameters disabled, so an unknown slug returns the standard not-found page rather than attempting to render. The practical consequence is that almost nothing can fail at request time, and the surface area anyone has to secure or monitor is one endpoint rather than a site.",
    },
    {
        question: "Why does a 22-product catalogue need a typed registry?",
        answer: "Because the same 22 products appear in seven places: the desktop mega-menu, the mobile navigation, the catalogue index, the individual product pages, related-product cards, the quote form's options, and the sitemap. Without a single source they drift, and the failure is silent -- a product quietly missing from the quote dropdown, or a sitemap entry for a page that no longer exists. Adding a product here means extending one typed union and one object; everything else follows from it, including the server-side validation that rejects a product value the catalogue does not contain.",
    },
    {
        question: "What happens to artwork a visitor uploads with a quote?",
        answer: "It is validated, attached to one email, and never stored. The browser checks extension and size, the server repeats both checks rather than trusting them, the filename is sanitised, and the file is read into memory only to build the outgoing message. There is no database and no object storage, which is a deliberate scope decision rather than an omission: nothing is retained, so nothing has to be secured, backed up, or deleted on request. If the studio later needs a CRM or retention policy, that is a real project rather than a setting.",
    },
    {
        question: "How much does a website like this cost to build?",
        answer: "A catalogue site of this shape (around twenty product types, static product and guide pages, a multi-step quote form with file upload, and custom motion work) sits in our Scale tier, which starts at $5,000, and the final price depends on scope. The variables that actually move the number are the count of distinct page templates rather than pages, whether product photography exists or has to be produced, how much bespoke animation the design calls for, and whether content is supplied or written. A catalogue of the same size with stock templates and no motion work is a materially cheaper project than this one, and we would say so rather than quote the same figure.",
    },
    {
        question: "Why build an editorial homepage instead of a standard ecommerce template?",
        answer: "Because the product is judged by touch, and a grid of thumbnails removes exactly the information a buyer needs. A patch is assessed on stitch density, edge finish and how a material behaves in the light, none of which survives a 400px product card. The homepage is built as eight independent chapters that move a visitor from a flat drawing to an inspected object in the order the studio actually works. Keeping each chapter a separate component is what makes it maintainable — sections can be rewritten or reordered individually, so the page stays editable instead of becoming a bespoke artefact nobody dares touch.",
    },
    {
        question: "What is deliberately not finished?",
        answer: "Three things, and they are documented rather than hidden. The quote rate limiter is an in-memory counter, which does not survive a serverless instance restart and is not shared between instances -- adequate as a speed bump, not as durable abuse control. There is no automated test suite, so verification is typecheck, lint, build and manual browser testing. And submitted briefs are not persisted anywhere, so there is no CRM, retention policy or deletion workflow. Each of those is a defensible scope decision for this project, and each becomes a real requirement if volume or obligations change.",
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
            image: ogImageUrlForPath("/work/emblematic-studio"),
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-09-29T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Next.js", "Static site generation", "Web accessibility", "Technical SEO", "Structured data"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Case study",
            inLanguage: "en-US",
            wordCount: 1500,
            timeRequired: "PT8M",
            about: [
                { "@type": "Thing", name: "Static site generation" },
                { "@type": "Thing", name: "Web accessibility", sameAs: ["https://en.wikipedia.org/wiki/Web_accessibility"] },
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
                { "@type": "ListItem", position: 3, name: "Emblematic Studio", item: canonicalUrl },
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
            dateModified: "2026-09-29T00:00:00-05:00",
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

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/emblematic-studio).
// Metadata, structured data and the FAQ list stay in this file; the FAQ list is passed
// to the design so the visible questions and the FAQPage data are one array.
export default function EmblematicStudioCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <RedesignEmblematicStudioCaseStudy faqs={pageFaqs} />
        </>
    );
}
