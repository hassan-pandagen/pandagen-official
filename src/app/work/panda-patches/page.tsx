import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { FOUNDING_DATE, ORGANIZATION_DESCRIPTION, ORGANIZATION_PROFILES } from "@/data/company-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { PandaPatchesCaseStudyPreview as RedesignPandaPatchesCaseStudy } from "@/components/pages/work/panda-patches/Design";

const description = `A founder-owned WordPress store rebuilt with Next.js, a Sanity editor and custom pricing. ${MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory}`;

export const metadata: Metadata = {
    title: "Panda Patches: WordPress to Next.js Store Migration",
    description,
    openGraph: {
        title: "Panda Patches: WordPress to Next.js Store Migration",
        description,
        type: "article",
        url: "https://www.pandacodegen.com/work/panda-patches",
        images: [ogImageForPath("/work/panda-patches")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Panda Patches: WordPress to Next.js Store Migration",
        description,
    },
    alternates: { canonical: "/work/panda-patches" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Did the Panda Patches WordPress migration preserve Google search rankings?",
        answer: "We migrated the 3-year-old WordPress site to Next.js and recorded no ranking losses in Google Search Console during the 30-day post-launch monitoring window. We exported every indexed URL before migration, built 301 redirects for each one in Next.js middleware, preserved existing meta titles and descriptions, upgraded schema markup without changing entity signals, and submitted a fresh sitemap to Google the day of launch. Rankings held through that 30-day window. Movement after that point reflects many factors outside our control and is not attributed to the rebuild. No provider controls search rankings.",
    },
    {
        question: "Can you replace Shopify with a custom coded e-commerce store?",
        answer: `Yes, but this project is not the evidence for it. Panda Patches ran on WordPress and WooCommerce and was never on Shopify, so it shows we can replace a WordPress commerce stack with a custom Next.js storefront, not that we have moved a store off Shopify. The current platform uses Sanity, Supabase and Square. ${MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} For a Shopify store there are two different jobs: a headless storefront that keeps Shopify running products, orders and payments, or a full replacement of commerce as well. We scope those separately. Panda Patches is founder-affiliated, not an independent client engagement.`,
    },
    {
        question: "How does the custom patch configurator work?",
        answer: "Customers select a patch type, dimensions, quantity and finish, then provide contact details to request a price. The team receives the selected options with the enquiry. The current storefront does not show an instant price for every configuration or turn the configurator itself into checkout.",
    },
    {
        question: "How much does it cost to build a custom e-commerce platform like this?",
        answer: "A custom e-commerce platform with a real-time pricing engine, CMS, Square checkout (card, Apple Pay, Google Pay, Cash App Pay, and Afterpay BNPL), an AI mockup generator, a customer portal, and a full server-side conversion-tracking stack starts at $15,000 to $30,000 depending on complexity. The owner estimates Panda Patches' current tooling at about $55/month (Supabase ~$25, Vercel ~$20, and ~$10 for the AI patch generator); this is not a reconciled accounting total.",
    },
    {
        question: "What tools did the custom platform replace?",
        answer: "The storefront and connected operations platform replaced a WordPress and WooCommerce stack, separate CRM, spreadsheets and manual team workflows. We have not published reconciled invoices or time records for the previous tools, so we do not quote a savings amount or hours recovered.",
    },
    {
        question: "How long did it take to build the Panda Patches platform?",
        answer: `The initial storefront rebuild launched within 8 weeks. ${MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} The current storefront includes custom pricing, Sanity CMS, an AI patch generator, a customer portal and server-side conversion tracking; the current feature set should not be read as the original launch scope. The connected staff CRM is a separate application sharing the same Supabase backend.`,
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/panda-patches#article",
            "headline": "Panda Patches: WordPress to Next.js Store Migration",
            "description": description,
            "image": ogImageUrlForPath("/work/panda-patches"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-09-29T00:00:00Z",
            "articleSection": "Case Study",
            "inLanguage": "en-US",
            "wordCount": 2100,
            "about": [
                { "@type": "Thing", "name": "WordPress to Next.js Migration" },
                { "@type": "Thing", "name": "SEO Preservation During Migration" },
                { "@type": "Thing", "name": "Headless Commerce Architecture" },
                { "@type": "Thing", "name": "Real-Time Pricing Engine" },
                { "@type": "SoftwareApplication", "name": "Sanity CMS" },
                { "@type": "SoftwareApplication", "name": "Supabase" },
                { "@type": "SoftwareApplication", "name": "Square" }
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
                "@id": "https://www.pandacodegen.com/work/panda-patches"
            },
            "keywords": [
                "wordpress to nextjs migration",
                "seo preservation wordpress migration",
                "zero google ranking drops migration",
                "headless commerce case study",
                "next.js sanity supabase square",
                "real-time pricing calculator",
                "ai patch generator",
                "square checkout bnpl afterpay",
                "custom e-commerce development",
                "3 year old wordpress migration",
                "custom ops platform",
                "replace wordpress with next.js"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#webpage",
            "url": "https://www.pandacodegen.com/work/panda-patches",
            "name": "Panda Patches Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "Panda Patches", "item": "https://www.pandacodegen.com/work/panda-patches" }
            ]
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "description": ORGANIZATION_DESCRIPTION,
            "email": "info@pandacodegen.com",
            "foundingDate": FOUNDING_DATE,
            "areaServed": "Worldwide",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stafford",
                "addressRegion": "TX",
                "addressCountry": "US"
            },
            "founder": [
                {
                    "@type": "Person",
                    "name": "Imran Raza Ladhani",
                    "jobTitle": "Co-Founder"
                },
                {
                    "@type": "Person",
                    "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                    "name": "Hassan Jamal",
                    "jobTitle": "Co-Founder & Lead Full-Stack Engineer",
                    "url": "https://www.pandacodegen.com/about/hassan"
                }
            ],
            "knowsAbout": [
                "WordPress to Next.js migration",
                "Headless commerce architecture",
                "Real-time pricing engines",
                "Sanity CMS",
                "Supabase",
                "Square checkout and BNPL",
                "Server-side conversion tracking",
                "Custom ERP and operations platforms"
            ],
            "sameAs": [...ORGANIZATION_PROFILES]
        },
        // A "Product" node for the Panda Patches platform was removed on 11 Aug
        // 2026. Search Console flagged it: "Either 'offers', 'review' or
        // 'aggregateRating' should be specified".
        //
        // All three ways of satisfying that are wrong here, which is the tell that
        // the node itself was wrong:
        //   offers          - the platform is not for sale; it is a website we built
        //   review          - a self-authored review of a founder-owned property,
        //                     and Google dropped rich results for self-serving reviews
        //   aggregateRating - banned outright by this site's evidence policy, and on
        //                     an affiliated asset it is the entity liability the July
        //                     audit named first
        //
        // This page is a case study, not a product listing. The work is already
        // described by the Article node and the visible copy. Do not re-add it.
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/panda-patches).
// Metadata, structured data and the FAQ list stay in this file; the FAQ list is passed
// to the design so the visible questions and the FAQPage data are one array.
export default function PandaPatchesCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <RedesignPandaPatchesCaseStudy faqs={pageFaqs} />
        </>
    );
}
