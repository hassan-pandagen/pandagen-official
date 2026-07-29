import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import PageContent from "./PageContent";

const canonical = "https://www.pandacodegen.com/services/ecommerce";

export const metadata: Metadata = {
  title: "Shopify & WooCommerce Storefront Engineering",
  description: "Evaluate theme repair, headless storefronts, and replatforming for Shopify or WooCommerce using measured constraints, operating costs, risks, and acceptance criteria.",
  alternates: { canonical: "/services/ecommerce" },
  openGraph: {
    title: "Shopify & WooCommerce Storefront Engineering | PandaCodeGen",
    description: "A measured path from storefront constraint to a scoped commerce architecture and migration plan.",
    url: canonical,
    siteName: "PandaCodeGen",
    type: "website",
    images: [ogImageForPath("/services/ecommerce")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify & WooCommerce Storefront Engineering | PandaCodeGen",
    description: "A measured path from storefront constraint to a scoped commerce architecture and migration plan.",
  },
};

export default function EcommercePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Shopify & WooCommerce Storefront Engineering",
        description: "A diagnostic and delivery approach for Shopify and WooCommerce storefront repair, headless architecture, and replatforming.",
        isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", position: 3, name: "E-commerce", item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageContent />
    </>
  );
}
