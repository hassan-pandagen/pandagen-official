import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

const path = "/services/sanity-development";
const name = "Sanity CMS & Next.js Website Development";
const description = "Custom websites with a Sanity editor your team can use. Scope content models, migration, preview, publishing and an editing walkthrough with the founders.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/sanity-development")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function StackServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Sanity CMS & Next.js Website Development" faqs={previewServiceFaqs("sanity-development")} /><ServiceDetailPreview service={servicePreview("sanity-development")} /></>;
}
