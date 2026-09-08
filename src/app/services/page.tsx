import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageForPath } from "@/lib/seo/og";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Website Migration & Custom Web Engineering Services",
  description: "Website migration, store speed reviews and custom builds. Fixed prices from $1,500, 2 to 4 weeks, and you own the code.",
  alternates: alternatesFor("services", "en"),
  openGraph: {
    title: "Website Migration & Custom Web Engineering Services | PandaCodeGen",
    description: "Migration and custom build services. Fixed prices from $1,500, and you own the code.",
    url: "https://www.pandacodegen.com/services",
    type: "website",
    images: [ogImageForPath("/services")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Migration & Custom Web Engineering Services | PandaCodeGen",
    description: "Migration and engineering services scoped around evidence, acceptance, cutover, and handover.",
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
      name: "Website Migration and Custom Web Engineering Services",
      description: "Service options for website migration, commerce diagnostics, and custom web engineering.",
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
      <PageContent />
    </>
  );
}
