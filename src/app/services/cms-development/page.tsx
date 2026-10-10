import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

const path = "/services/cms-development";
const name = "CMS Website Development & Integration";
const description = "CMS website development with an editor your team can use. Build with Sanity and Next.js, improve WordPress, or plan a content migration with the founders.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/cms-development")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function StackServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="CMS Website Development & Integration" faqs={previewServiceFaqs("cms-development")} /><ServiceDetailPreview service={servicePreview("cms-development")} /></>;
}
