import type { Metadata } from "next";
import ServicesPreviewIndex from "@/components/pages/services/ServicesIndexDesign";

// 30 Sep 2026: /services renders the redesign (built as /preview/services);
// metadata and structured data stay here.
import { ogImageForPath } from "@/lib/seo/og";
import { alternatesFor } from "@/lib/i18n/config";

const description = "Websites, stores, Sanity editors and custom software. Work with the founders on design, development and migration, with scope and price agreed.";

export const metadata: Metadata = {
  title: "Website Design, Redesign and Development Services",
  description,
  alternates: alternatesFor("services", "en"),
  openGraph: {
    title: "Website Design, Redesign and Development Services | PandaCodeGen",
    description,
    url: "https://www.pandacodegen.com/services",
    type: "website",
    images: [ogImageForPath("/services")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design, Redesign and Development Services | PandaCodeGen",
    description,
    images: [ogImageForPath("/services")],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.pandacodegen.com/services#webpage",
      url: "https://www.pandacodegen.com/services",
      name: "Website, Online Store and Custom Software Development Services",
      description: "Service options for WordPress websites, custom builds, redesigns, migrations, online stores and software.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.pandacodegen.com/services" },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicesPreviewIndex />
    </>
  );
}
