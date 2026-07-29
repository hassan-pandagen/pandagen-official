import type { Metadata } from "next";
import PartnersContent from "./PartnersContent";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Agency Partnership Pilot",
  description: "A scoped white-label or delivery-partner pilot for agencies, with confidentiality, roles, acceptance, handover, and commercial terms agreed in writing.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Agency Partnership Pilot | PandaCodeGen",
    description: "Test one scoped engagement before agreeing repeat white-label delivery or partnership terms.",
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
      description: "A process for evaluating a scoped agency delivery partnership.",
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
