import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 12 Oct 2026: added for "medical website design" after the Search Console check found
// only a demo work page aimed at it. Content lives in audience-services.ts. A Step Above
// Medical is a live medical training project; no HIPAA claim is made.

const path = "/services/medical-website-design";
const name = "Medical Website Design & Development";
const description = "Medical website design for practices and training providers: Next.js with a Sanity editor, plus Supabase for logins and records. See A Step Above Medical.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath(path)] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function MedicalWebsiteDesignPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Medical website design" faqs={previewServiceFaqs("medical-website-design")} /><ServiceDetailPreview service={servicePreview("medical-website-design")} /></>;
}
