import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/ai-seo";
const name = "AI SEO & GEO Services";
const description =
  "AI SEO, AEO and generative engine optimization (GEO) services. From $500/month for buyer research, page improvements and AI search visibility reporting.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  keywords: [
    "ai seo",
    "ai seo services",
    "ai seo agency",
    "answer engine optimization",
    "answer engine optimization services",
    "aeo services",
    "generative engine optimization services",
    "geo services",
    "ai search optimization",
    "chatgpt seo",
  ],
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath(path)] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function AiSeoServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="AI SEO & GEO" faqs={previewServiceFaqs("ai-seo")} /><ServiceDetailPreview service={servicePreview("ai-seo")} /></>;
}
