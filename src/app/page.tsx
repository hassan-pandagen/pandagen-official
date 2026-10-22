import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n/config";
import { FOUNDING_DATE, ORGANIZATION_DESCRIPTION, ORGANIZATION_PROFILES } from "@/data/company-facts";
import { homepageFaqs } from "@/components/redesign/FaqOpen";
import HeroPreview from "@/components/pages/home/HomeDesign";

// Tell Next.js to statically generate this page at build time
// so critters can inline critical CSS into the HTML output
export const dynamic = "force-static";

export const metadata: Metadata = {
  // 4 Oct 2026, SEO audit. This is the site's top click page (40 clicks, 1,011
  // impressions in 90 days). All 25 clicks that GSC ties to a query came from brand
  // searches (pandacodegen, panda codegen and close spellings), so the title stays. The redesign's description had dropped the starting
  // price and "code you own", which the live description carried and this page's
  // body still says ("Custom builds from $1,500", "Code you own"). Both are back,
  // worded from COMMERCIAL in company-facts.ts. Keep it under about 155 characters.
  title: "Custom Website Design & Development | PandaCodeGen",
  description:
    "Work directly with the founders on WordPress sites, custom websites, stores and migrations. Custom builds from $1,500. Code you own, price agreed upfront.",
  // Self-referencing canonical plus reciprocal hreflang to the French and
  // German versions of this page. x-default points at English.
  alternates: alternatesFor("home", "en"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pandacodegen.com",
    siteName: "PandaCodeGen",
    title: "Custom Website Design & Development | PandaCodeGen",
    description:
      "Work directly with the founders on WordPress sites, custom websites, stores and migrations. Custom builds from $1,500. Code you own, price agreed upfront.",
    images: [
      ogImageForPath("/"),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Design & Development | PandaCodeGen",
    description:
      "Work directly with the founders on WordPress sites, custom websites, stores and migrations. Custom builds from $1,500. Code you own, price agreed upfront.",
    images: [ogImageForPath("/")],
  },
};

// homeFaqs moved to src/data/home-faqs.ts (24 Sep 2026), unchanged.
export default function Home() {
  // Schema.org structured data for homepage
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "url": "https://www.pandacodegen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 655,
          "height": 113
        },
        "description": ORGANIZATION_DESCRIPTION,
        "email": "info@pandacodegen.com",
        "foundingDate": FOUNDING_DATE,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12250 S Kirkwood Rd, Apt 1128",
          "addressLocality": "Stafford",
          "addressRegion": "TX",
          "postalCode": "77477",
          "addressCountry": "US"
        },
        "areaServed": "Worldwide",
        "founder": [
          {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/about/hassan#person",
            "name": "Hassan Jamal",
            "jobTitle": "Co-founder and Lead Engineer",
            "url": "https://www.pandacodegen.com/about/hassan",
            // Personal profiles belong on the Person entity, not on the
            // Organization's sameAs.
            "sameAs": [
              "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
              "https://github.com/hassan-pandagen"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/about/imran#person",
            "name": "Imran Raza Ladhani",
            "jobTitle": "Co-founder and Head of Marketing",
            "url": "https://www.pandacodegen.com/about/imran",
            "sameAs": [
              "https://www.linkedin.com/in/imran-raza-ladhani/"
            ]
          }
        ],
        // Company-owned profiles, confirmed by the owner as controlled and live
        // (2026-07-27). sameAs is an identity assertion, so a URL that starts
        // 404ing should be removed rather than left asserted.
        "sameAs": [...ORGANIZATION_PROFILES],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@pandacodegen.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "serviceType": [
          "WordPress Website Design and Development",
          "Custom Web Development",
          "WordPress Migration",
          "Shopify Headless Commerce",
          "E-Commerce Development",
          "Web Performance Optimization",
          "Answer Engine Optimization (AEO)"
        ],
        "knowsAbout": [
          "Next.js development",
          "WordPress migration",
          "Shopify headless commerce",
          "WooCommerce migration",
          "Wix migration",
          "Squarespace migration",
          "Webflow migration",
          "GoHighLevel migration",
          "URL and redirect planning",
          "Core Web Vitals measurement",
          "Custom e-commerce development",
          "Server-side ad tracking (Meta Conversions API)",
          "Answer Engine Optimization (AEO)",
          "Technical SEO",
          "Headless CMS architecture",
          "Vercel deployment"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pandacodegen.com/#website",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen",
        "description": ORGANIZATION_DESCRIPTION,
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/#webpage",
        "url": "https://www.pandacodegen.com",
        "name": "Custom Website Design & Development | PandaCodeGen",
        "description": ORGANIZATION_DESCRIPTION,
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "about": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/#faqpage",
        "mainEntity": homepageFaqs().map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      }
    ]
  };

  // 30 Sep 2026: the homepage renders the redesign (built as /preview/hero).
  // The structured data above is unchanged except that the FAQPage lists only
  // the five questions the redesign shows. The page stays static, so the
  // redesign gets the default (condensed) font rather than reading ?font=.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroPreview searchParams={Promise.resolve({})} />
    </>
  );
}
