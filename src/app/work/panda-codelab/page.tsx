import { FOUNDING_DATE, ORGANIZATION_DESCRIPTION } from "@/data/company-facts";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { PandaCodeLabCaseStudyPreview as RedesignPandaCodelabCaseStudy } from "@/app/preview/work/panda-codelab/page";

export const metadata: Metadata = {
    title: { absolute: "Panda CodeLab, Custom Agency Website, Spline 3D + Framer Motion + WCAG 2.1 AA | PandaCodeGen" },
    description: "How we built pandacodelab.com, a separate brand, fully custom. Next.js 16, React 19, Framer Motion spring physics, magnetic interactions, Spline 3D scenes, WCAG 2.1 AA. Zero templates. Zero page builders. Under a second load.",
    openGraph: {
        title: "Panda CodeLab, Custom Agency Website Built by PandaCodeGen",
        description: "Live at pandacodelab.com. Next.js 16. Spring physics. Magnetic buttons. Spline 3D. WCAG 2.1 AA. Full case study.",
        type: "article",
        url: "https://www.pandacodegen.com/work/panda-codelab",
        images: [ogImageForPath("/work/panda-codelab")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Panda CodeLab, Custom Agency Website Built by PandaCodeGen",
        description: "Live at pandacodelab.com. Next.js 16. Spring physics. Magnetic buttons. Spline 3D. WCAG 2.1 AA. Full case study.",
    },
    alternates: { canonical: "/work/panda-codelab" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Why build an agency website in Next.js 16 instead of a website builder?",
        answer: "We couldn't sell custom-code performance to clients while running our own site on Webflow or WordPress. Next.js 16 gave us App Router, React 19, server components, and full control over every render. The result: sub-700ms load times, 90+ PageSpeed, and zero platform fees. It's our live proof of concept.",
    },
    {
        question: "Do Framer Motion animations hurt performance?",
        answer: "Not when implemented correctly. We use hardware-accelerated CSS properties only (transform, opacity), never layout-triggering properties. Spring physics are calculated in the browser compositor thread. We also detect prefers-reduced-motion and disable all animations for users who request it. The animated site scores the same as a static site on Lighthouse.",
    },
    {
        question: "What is WCAG 2.1 AA compliance and why does it matter for a business website?",
        answer: "WCAG 2.1 Level AA is the international accessibility standard that covers keyboard navigation, screen reader compatibility, focus indicators, color contrast ratios, and motion preferences. In the US, ADA compliance lawsuits against websites are increasing. Every interactive element on this site has focus rings, ARIA labels, and keyboard navigation. Accessibility is also a direct ranking signal in Google's Page Experience algorithm.",
    },
    {
        question: "How does the Spline 3D integration affect page load time?",
        answer: "The 3D scene is lazy-loaded, it only initializes after the critical above-the-fold content has rendered. We use Next.js dynamic imports with a lightweight placeholder, so the initial page load is unaffected. The 3D scene loads progressively in the background while the user reads the page.",
    },
    {
        question: "Can you build a site like this for my agency or business?",
        answer: "Yes. We build premium agency and business websites on this exact stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scroll. Pricing starts from $5,900 for a full custom coded agency site. Timeline is typically 4-6 weeks. Every site includes schema markup, Core Web Vitals optimization, and WCAG 2.1 AA compliance.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/panda-codelab#article",
            "headline": "Panda CodeLab: Building Our Agency Site on the Tech We Sell",
            "description": "How we built our own agency website using Next.js 16, React 19, Framer Motion 12 spring physics, Spline 3D scenes, and full WCAG 2.1 AA accessibility compliance. Zero TypeScript errors. Zero ESLint errors. Live proof we practice what we sell.",
            "image": ogImageUrlForPath("/work/panda-codelab"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-08-10T00:00:00Z",
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
                "@id": "https://www.pandacodegen.com/work/panda-codelab"
            },
            "keywords": [
                "agency website Next.js 16",
                "React 19 agency site",
                "Framer Motion spring physics",
                "WCAG 2.1 AA compliance",
                "custom agency website build",
                "magnetic button interactions",
                "Spline 3D website",
                "premium web animations"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/panda-codelab#webpage",
            "url": "https://www.pandacodegen.com/work/panda-codelab",
            "name": "Panda CodeLab Agency Website Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "Panda CodeLab", "item": "https://www.pandacodegen.com/work/panda-codelab" }
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
                "Custom agency website development",
                "Next.js and React",
                "Framer Motion animation",
                "Spline 3D integration",
                "WCAG 2.1 AA accessibility",
                "Core Web Vitals optimization"
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
            "@id": "https://www.pandacodegen.com/work/panda-codelab#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/panda-codelab).
// Metadata, structured data and the FAQ list stay in this file; the FAQ list is passed
// to the design so the visible questions and the FAQPage data are one array.
export default function PandaCodelabCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <RedesignPandaCodelabCaseStudy faqs={pageFaqs} />
        </>
    );
}
