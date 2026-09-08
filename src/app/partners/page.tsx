import type { Metadata } from "next";
import PartnersContent from "./PartnersContent";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Agency Partnership Pilot",
  description: "A one-project white-label pilot for agencies. Who does what, what stays confidential, and what it pays, all agreed in writing first.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Agency Partnership Pilot | PandaCodeGen",
    description: "Try one project together before committing to anything ongoing.",
    url: "https://www.pandacodegen.com/partners",
    type: "website",
    images: [ogImageForPath("/partners")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Partnership Pilot | PandaCodeGen",
    description: "Test one scoped engagement before agreeing repeat white-label delivery or partnership terms.",
    images: [ogImageForPath("/partners")],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/partners#webpage",
      url: "https://www.pandacodegen.com/partners",
      name: "Agency Partnership Pilot",
      description: "How to test whether we are a good delivery partner for your agency.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "For agencies", item: "https://www.pandacodegen.com/partners" },
      ],
    },
  ],
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PartnersContent />
    </>
  );
}
