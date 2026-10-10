import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

const path = "/services/backend-development";
// 8 Oct 2026, owner: renamed from /services/supabase-development. "Supabase developer"
// and "Supabase agency" show no measurable hiring searches, while "backend development
// services" (320 a month) and "backend development company" (210) do (Google Ads data via
// seodata.dev, read 8 Oct 2026). Naming one vendor also told buyers with another database
// that we were not for them. Supabase stays the usual choice, named in the title and body.
const name = "Backend Development Services: Supabase & APIs";
const description = "Backend development for logins, private files and business records. Scope Supabase or your existing database, access rules, APIs and admin screens.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/backend-development")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function StackServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Backend Development" faqs={previewServiceFaqs("backend-development")} /><ServiceDetailPreview service={servicePreview("backend-development")} /></>;
}
