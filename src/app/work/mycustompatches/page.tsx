import { FOUNDING_DATE } from "@/data/company-facts";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { MyCustomPatchesCaseStudyPreview as RedesignMyCustomPatchesCaseStudy } from "@/app/preview/work/mycustompatches/Design";

export const metadata: Metadata = {
    // Metadata renders the same verified facts as the body. Do not type a metric
    // in here by hand: performance and hosting figures are withdrawn in
    // src/data/case-study-facts.json and scripts/metrics_guard.py fails the build
    // if one reappears. Metadata is where the last drift survived longest,
    // because nobody re-reads a <title> after correcting the body.
    title: { absolute: "MyCustomPatches Case Study: 200+ URLs Off WordPress in 22 Days | PandaCodeGen" },
    description: "A decade on WordPress, migrated to custom Next.js in 22 days. 200+ URLs on 13 templates, zero downtime, and no ranking losses recorded in the 30 days after launch. Performance figures temporarily withdrawn pending reconciliation. Full scope record and method inside.",
    openGraph: {
        title: "MyCustomPatches: 200+ URLs Off WordPress in 22 Days",
        description: "A decade-old WordPress site rebuilt in custom Next.js in 22 days. 200+ URLs across 13 templates, zero downtime at cutover, and no ranking losses recorded in the 30 days after launch. Performance figures withdrawn pending reconciliation.",
        type: "article",
        url: "https://www.pandacodegen.com/work/mycustompatches",
        images: [ogImageForPath("/work/mycustompatches")],
    },
    twitter: {
        card: "summary_large_image",
        title: "MyCustomPatches: 200+ URLs Off WordPress in 22 Days",
        description: "200+ URLs on 13 templates, zero downtime, and no ranking losses recorded in the 30 days after launch. Performance figures withdrawn pending reconciliation.",
    },
    alternates: { canonical: "/work/mycustompatches" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "How did you migrate 200+ WordPress pages without losing SEO rankings?",
        answer: "We inventoried more than 200 URLs, mapped the old paths to the rebuilt pages and added redirects where paths changed. The project record reports no ranking losses in the 30 days of post-launch Search Console monitoring. That observation has a defined window; it is not a guarantee about future rankings.",
    },
    {
        question: "What made the rebuilt site faster than the WordPress original?",
        answer: "The performance figures for this project are withdrawn pending reconciliation, so we do not claim a measured speed improvement. The rebuild removed WordPress plugin dependencies and uses Next.js image handling and page rendering, but those implementation choices alone do not establish a before-and-after result.",
    },
    {
        question: "How does the hosting model differ from managed WordPress?",
        answer: "The specific hosting figures for this project are retired: no invoices were kept and the client does not recall the amount. The original managed WordPress stack was replaced by a Next.js deployment on Vercel with Cloudflare. We do not have a verified traffic split or hosting-cost comparison for this project.",
    },
    {
        question: "Was there any downtime during the migration?",
        answer: "The project record reports zero downtime at cutover. The new site was prepared on staging while the WordPress site stayed live, then switched over after QA. We have no separate visitor-level timing measurement to quote.",
    },
    {
        question: "What happens to the quote forms and file uploads after migration?",
        answer: "Quote forms use React Hook Form and Zod validation with Web3Forms for delivery; customer design uploads use Cloudinary. We have not published a measured before-and-after form reliability result.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/mycustompatches#article",
            "headline": "MyCustomPatches: 200+ URLs Off WordPress in 22 Days",
            "description": "A decade-old WordPress ecommerce site migrated to a custom Next.js build in about 22 days: 200+ URLs across 13 distinct templates, zero downtime at cutover, and no rankings lost in the 30 days of Search Console monitoring after launch. Performance figures are withdrawn pending reconciliation; the old hosting-cost figure is retired.",
            "image": ogImageUrlForPath("/work/mycustompatches"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-09-28T00:00:00Z",
            "articleSection": "Case Study",
            "inLanguage": "en-US",
            "wordCount": 1800,
            "timeRequired": "PT8M",
            "about": [
                // The client as an entity, not just the topics. The Clutch review is
                // signed "Executive, MC Patches LLC" while this page is titled
                // MyCustomPatches; without legalName + sameAs, nothing tells a
                // grounding model those are one company, and the only
                // third-party-VERIFIED review on this site stays orphaned from the
                // case study it is about.
                // 29 Sep 2026: legalName removed while the owners confirm whether
                // this MC Patches LLC is Panda Patches' entity; see the dated note
                // in case-study-facts.json before adding it back.
                {
                    "@type": "Organization",
                    "name": "MyCustomPatches",
                    "url": "https://www.mycustompatches.net",
                    "sameAs": ["https://clutch.co/profile/panda-code-gen#reviews"]
                },
                { "@type": "Thing", "name": "WordPress to Next.js Migration" },
                { "@type": "Thing", "name": "E-Commerce Speed Optimization" },
                { "@type": "Thing", "name": "WordPress Hosting Cost Reduction" },
                { "@type": "Thing", "name": "Zero Downtime Migration" }
            ],
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Lead Full-Stack Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.pandacodegen.com/work/mycustompatches"
            },
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["[data-speakable='true']"]
            },
            "keywords": [
                "wordpress migration case study",
                "wordpress to nextjs migration",
                "ecommerce speed optimization",
                "wordpress slow site fix",
                "wordpress migration zero downtime",
                "custom patches website",
                "wordpress hosting cost reduction"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/mycustompatches#webpage",
            "url": "https://www.pandacodegen.com/work/mycustompatches",
            "name": "MyCustomPatches WordPress Migration Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "MyCustomPatches", "item": "https://www.pandacodegen.com/work/mycustompatches" }
            ]
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "email": "info@pandacodegen.com",
            "foundingDate": FOUNDING_DATE,
            "areaServed": "Worldwide",
            "sameAs": [
                "https://twitter.com/pandacodegen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/mycustompatches#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/mycustompatches).
// Metadata, structured data and the FAQ list stay in this file; the FAQ list is passed
// to the design so the visible questions and the FAQPage data are one array.
export default function MyCustomPatchesCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <RedesignMyCustomPatchesCaseStudy faqs={pageFaqs} />
        </>
    );
}
