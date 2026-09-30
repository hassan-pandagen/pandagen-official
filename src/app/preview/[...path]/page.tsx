import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import RestyledShell from "@/components/redesign/RestyledShell";
import LocalePage from "@/components/i18n/LocalePage";
import type { LocalizedPage } from "@/lib/i18n/config";
import PrivacyPage from "@/app/privacy/page";
import CookiesPage from "@/app/cookies/page";
import TermsPage from "@/app/terms/page";
import EditorialPolicyPage from "@/app/editorial-policy/page";
import ContactPage from "@/app/contact/page";
import FreeAuditPage from "@/app/free-audit/page";
import PartnersPage from "@/app/partners/page";
import AiInfoPage from "@/app/ai-info/page";
import TeamAndCompanyPage from "@/app/ai-info/team-and-company/page";
import MigrationServicesPage from "@/app/ai-info/migration-services/page";
import PricingAndGuaranteesPage from "@/app/ai-info/pricing-and-guarantees/page";
import CaseStudiesPage from "@/app/ai-info/case-studies/page";
import HassanPage from "@/app/about/hassan/page";
import ImranPage from "@/app/about/imran/page";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const pages = {
  privacy: { component: PrivacyPage, kind: "legal" },
  cookies: { component: CookiesPage, kind: "legal" },
  terms: { component: TermsPage, kind: "legal" },
  "editorial-policy": { component: EditorialPolicyPage, kind: "legal" },
  contact: { component: ContactPage, kind: "commercial" },
  "free-audit": { component: FreeAuditPage, kind: "commercial" },
  partners: { component: PartnersPage, kind: "commercial" },
  "ai-info": { component: AiInfoPage, kind: "reference" },
  "ai-info/team-and-company": { component: TeamAndCompanyPage, kind: "reference" },
  "ai-info/migration-services": { component: MigrationServicesPage, kind: "reference" },
  "ai-info/pricing-and-guarantees": { component: PricingAndGuaranteesPage, kind: "reference" },
  "ai-info/case-studies": { component: CaseStudiesPage, kind: "reference" },
  "about/hassan": { component: HassanPage, kind: "profile" },
  "about/imran": { component: ImranPage, kind: "profile" },
} as const;

const localizedPages = ["home", "services", "pricing", "contact", "about"] as const;

export default async function RemainingPreview({ params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const route = path.join("/");
  let content: ReactNode;
  let kind: "legal" | "commercial" | "reference" | "profile" | "locale";

  if ((path[0] === "fr" || path[0] === "de") && path.length <= 2) {
    const page = path[1] ?? "home";
    if (!localizedPages.includes(page as LocalizedPage)) notFound();
    content = <LocalePage locale={path[0]} page={page as LocalizedPage} />;
    kind = "locale";
  } else {
    const entry = pages[route as keyof typeof pages];
    if (!entry) notFound();
    const Page = entry.component;
    content = <Page />;
    kind = entry.kind;
  }

  // Same wrapper the live routes use (RestyledShell), so preview and live match.
  return (
    <RestyledShell kind={kind} locale={kind === "locale" ? (path[0] as "fr" | "de") : undefined}>
      {content}
    </RestyledShell>
  );
}
