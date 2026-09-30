import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import WordPressMigrationPreview, { migrationFaqs } from "@/app/preview/services/wordpress-migration/page";
// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.

const path = "/services/wordpress-migration";
const name = "WordPress Website Migration";
const description = "Plan a WordPress migration around content, URLs, metadata, forms, integrations, accessibility, analytics, launch validation, rollback, and ownership.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/wordpress-migration")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function MigrationPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="WordPress migration" faqs={migrationFaqs()} /><WordPressMigrationPreview /></>;
}
