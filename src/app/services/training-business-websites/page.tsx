import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 14 Nov 2026, Imran's brief: training providers (class registration, payments, rosters,
// certificates), with A Step Above Medical as the example. Content lives in
// audience-services.ts. Linked both ways with /services/medical-website-design, which
// targets practices and clinics.

const path = "/services/training-business-websites";
const name = "Training Business Websites & Booking Systems";
const description = "Websites and booking systems for training providers: class registration, deposits and payments, rosters, attendance and certificates. See A Step Above Medical.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath(path)] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function TrainingBusinessWebsitesPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Training business websites" faqs={previewServiceFaqs("training-business-websites")} /><ServiceDetailPreview service={servicePreview("training-business-websites")} /></>;
}
