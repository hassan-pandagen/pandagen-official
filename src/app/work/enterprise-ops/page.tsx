import { FOUNDING_DATE, ORGANIZATION_DESCRIPTION } from "@/data/company-facts";
import { requiredMetric } from "@/data/case-study-facts";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { EnterpriseOpsCaseStudyPreview as RedesignEnterpriseOpsCaseStudy } from "@/components/pages/work/enterprise-ops/Design";

// 30 Sep 2026: "26 Edge Functions" and "86 tracked migrations" were typed into
// this file in six places and went stale when the CRM grew to 36 and 191, and
// a "3 roles" line contradicted the page's own 7. The figure tiles below
// already read the registry; the prose now reads it too.
const EDGE_FUNCTIONS = requiredMetric("enterprise-ops", "edge-functions");
const PAGE_TITLE = "Custom CRM Development: Panda Patches Case Study";
const PAGE_DESCRIPTION = "A custom CRM built for our Panda Patches team to manage customers, orders, production, payments and reports, with workflow automation and role-based access.";

export const metadata: Metadata = {
    title: { absolute: `${PAGE_TITLE} | PandaCodeGen` },
    description: PAGE_DESCRIPTION,
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        type: "article",
        url: "https://www.pandacodegen.com/work/enterprise-ops",
        images: [ogImageForPath("/work/enterprise-ops")],
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    },
    alternates: { canonical: "/work/enterprise-ops" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "What can a custom CRM help our team manage?",
        answer: "A custom CRM brings customer records and the team's agreed workflows into one application. We built the Panda Patches CRM for our own business to manage customers, quotes, orders, production, payments, attendance and reports. The build includes workflow automation for wholesale pricing, invoicing and delivery follow-up. A CRM for another business would be scoped around that team's work and access needs.",
    },
    {
        question: "Can you build a CRM around our existing workflow?",
        answer: "Yes. We first map how an enquiry becomes a quote, an order and a completed job, including who can see or change each record. We then agree a first release, integrations, data import and acceptance checks in the written proposal. This case study shows our own working system; it is not a fixed package of features every client must buy.",
    },
    {
        question: "Should we build a custom CRM or customise the one we already use?",
        answer: "Start with what your current CRM already does well. A focused integration or automation may solve the problem without replacing it. A custom build is worth considering when essential workflows or permissions do not fit the existing system. We compare the work involved, data migration, running costs and ongoing support before recommending a scope.",
    },
    {
        question: "How much does it cost to replace Google Sheets with a custom business dashboard?",
        answer: "A custom business dashboard replacing spreadsheets, a CRM, and manual reporting is quoted against the number of roles, data tables, and automation requirements. This platform replaced a spreadsheet estate, a disconnected CRM and manual attendance tracking. We have not published what those cost or how many hours they took, because no record of either was kept.",
    },
    {
        question: "What is role-based access control (RBAC) and why does a small business need it?",
        answer: "RBAC means each user only sees the data their role requires. In this platform: ADMIN sees full financials and all agents; SALES sees their own pipeline only; PRODUCTION sees pending orders with no financial data. We enforce this at two layers, application logic AND Supabase Row-Level Security policies at the database level, so even direct API access is blocked.",
    },
    {
        question: "How long did it take to build the Panda Patches CRM?",
        answer: "The full platform, a Supabase schema with Row-Level Security, a 17-status order pipeline, 12 reporting modules, RBAC with RLS policies, payments via Square, attendance with PKT timezone, automated profit calculations, and " + EDGE_FUNCTIONS + " Supabase Edge Functions, has been in continuous development since November 2025 and is still being added to. A code review was commissioned by us in 2026, but its scores are withdrawn from this site: the review document, its rubric and the reviewer could not be located during a source audit on 15 September 2026.",
    },
    {
        question: "Can a custom dashboard work offline?",
        answer: "Yes. We implemented a Service Worker that caches the critical UI and data. Team members in Pakistan with intermittent internet connectivity can still access order data and make updates, which sync automatically when the connection is restored.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#article",
            "headline": PAGE_TITLE,
            "description": PAGE_DESCRIPTION,
            "image": ogImageUrlForPath("/work/enterprise-ops"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-10-10T00:00:00Z",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "url": "https://www.pandacodegen.com/about/hassan"
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.pandacodegen.com/work/enterprise-ops"
            },
            "keywords": [
                "custom business dashboard",
                "custom CRM development",
                "CRM workflow automation",
                "supabase crm",
                "role-based access control",
                "real-time order tracking",
                "custom erp alternative",
                "employee attendance system",
                "business intelligence platform",
                "replace spreadsheets custom software"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#webpage",
            "url": "https://www.pandacodegen.com/work/enterprise-ops",
            "name": `${PAGE_TITLE} | PandaCodeGen`,
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "Panda Patches CRM", "item": "https://www.pandacodegen.com/work/enterprise-ops" }
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
                    "name": "Imran Raza",
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
                "Custom ERP and operations platforms",
                "Role-based access control (RBAC)",
                "Supabase",
                "PostgreSQL Row-Level Security (RLS)",
                "Real-time order pipelines",
                "Business intelligence and financial reporting"
            ],
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
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/enterprise-ops).
// Metadata, structured data and the FAQ list stay in this file; the FAQ list is passed
// to the design so the visible questions and the FAQPage data are one array.
export default function EnterpriseOpsCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <RedesignEnterpriseOpsCaseStudy faqs={pageFaqs} />
        </>
    );
}
