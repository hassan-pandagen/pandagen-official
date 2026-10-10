import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import AboutPreview from "@/components/pages/about/AboutDesign";
import { FOUNDING_DATE } from "@/data/company-facts";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: { absolute: "About PandaCodeGen | How We Scope and Deliver" },
    description: "Meet PandaCodeGen's co-founders. We scope business websites, online stores, redesigns and migrations with clear acceptance criteria and a written handover.",
    alternates: alternatesFor("about", "en"),
    openGraph: {
        title: "About PandaCodeGen | How We Scope and Deliver",
        description: "Meet PandaCodeGen's co-founders and review its delivery, acceptance, cutover and handover standards.",
        url: "https://www.pandacodegen.com/about",
        type: "website",
        images: [ogImageForPath("/about")],
    },
    twitter: {
        card: "summary_large_image",
        title: "About PandaCodeGen | How We Scope and Deliver",
        description: "Meet PandaCodeGen's co-founders and review its delivery, acceptance, cutover and handover standards.",
    },
};

// 30 Sep 2026: /about renders the redesign (built as /preview/about). The
// structured data moved here from AboutPageClient.tsx unchanged.
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.pandacodegen.com/about#webpage",
      url: "https://www.pandacodegen.com/about",
      name: "About PandaCodeGen",
      description: "How PandaCodeGen scopes and delivers custom websites, online stores, migrations and web engineering.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      about: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.pandacodegen.com/about" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.pandacodegen.com/#organization",
      name: "PandaCodeGen",
      url: "https://www.pandacodegen.com",
      foundingDate: FOUNDING_DATE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "12250 S Kirkwood Rd, Apt 1128",
        addressLocality: "Stafford",
        addressRegion: "TX",
        postalCode: "77477",
        addressCountry: "US",
      },
      founder: [
        { "@type": "Person", name: "Hassan Jamal", jobTitle: "Co-founder and Lead Engineer", url: "https://www.pandacodegen.com/about/hassan" },
        { "@type": "Person", name: "Imran Raza Ladhani", jobTitle: "Co-founder and Head of Marketing", url: "https://www.pandacodegen.com/about/imran" },
      ],
    },
  ],
};

export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
            <AboutPreview />
        </>
    );
}
