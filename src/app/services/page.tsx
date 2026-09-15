import type { Metadata } from "next";
import PageContent from "./PageContent";
import { ogImageForPath } from "@/lib/seo/og";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Website Design, Redesign and Development Services",
  description: "Website, online store and software development, redesigns and migrations. Website builds from $1,500, and you own the code. Scope and dates agreed before work starts.",
  alternates: alternatesFor("services", "en"),
  openGraph: {
    title: "Website Design, Redesign and Development Services | PandaCodeGen",
    description: "New websites, online stores, redesigns, migrations and custom software. Website builds from $1,500, and you own the code.",
    url: "https://www.pandacodegen.com/services",
    type: "website",
    images: [ogImageForPath("/services")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design, Redesign and Development Services | PandaCodeGen",
    description: "Website, store and software services scoped around evidence, acceptance, cutover, and handover.",
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
      description: "Service options for new website builds, redesigns, migrations, commerce diagnostics, and custom web engineering.",
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
