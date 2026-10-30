import PortalWorkflow from "@/components/redesign/case-study/PortalWorkflow";
import Link from "next/link";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { ArrowRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import WorkCaseOpening from "@/components/redesign/case-study/WorkCaseOpening";
import WorkCasePreview from "@/components/redesign/case-study/WorkCasePreview";
import WorkCaseFacts from "@/components/redesign/case-study/WorkCaseFacts";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import { caseStudy, requiredMetric } from "@/data/case-study-facts";
import { BODY, DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";
import PandaPatchesCrmWalkthrough from "@/components/redesign/case-study/PandaPatchesCrmWalkthrough";

// ─────────────────────────────────────────────────────────────────────────────
// Enterprise operations platform, redesign preview, 30 Sep 2026. Our own
// internal CRM for Panda Patches, founder-affiliated (disclosure from
// case-study-facts.json).
//
// The overview has customer and revenue details blurred. The owner supplied
// five further public screenshots on 10 Oct 2026; the permissions screen uses
// the supplied redacted version. Its original remains outside public/.
//
// Every figure below comes through requiredMetric(), so it reads the dated,
// verified record in case-study-facts.json, and the build fails if any of them
// is ever withdrawn rather than quietly rendering a stale number. The date
// they were counted is read from the same records and shown on the page.
//
// "Added since the last count" comes from the CRM's README as of 30 Sep 2026,
// supplied by the owners: capabilities only, no figures, and no partner
// names (those are Panda Patches' business relationships, not ours to
// publish). The README's own Edge Function count disagrees with itself (25,
// 36 and a list of 37), so no new count is taken from it; the 15 Sep record
// stands until a live listing is repeated.
// ─────────────────────────────────────────────────────────────────────────────

const SLUG = "enterprise-ops";

const FIGURES = [
  "order-statuses",
  "roles-permissions",
  "rls-coverage",
  "production-rows-imported",
  "production-pipeline-states",
  "reporting-modules",
  "integrations",
  "staff-routes",
];

function countedOn(): string {
  const dates = [...new Set(FIGURES.map((id) => caseStudy(SLUG).metrics.find((m) => m.id === id)?.method?.date).filter(Boolean))].sort() as string[];
  const fmt = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return dates.length > 1 ? `between ${fmt(dates[0])} and ${fmt(dates[dates.length - 1])}` : `on ${fmt(dates[0])}`;
}

const added = [
  {
    label: "Wholesale orders, priced automatically",
    body: "Wholesale partners order through their own portal. Each order is priced by the same engine as the public storefront, then invoiced and sent a payment link without anyone touching it. If any line can't be priced, the whole order goes to a manual quote instead of a guess, and nothing is ever invoiced at zero.",
  },
  {
    label: "Mockup work, ranked by deadline",
    body: "Free quote requests become mockup tasks with due dates counted in working days, holidays included. The queue ranks them by urgency and warns the team before a deadline is missed.",
  },
  {
    label: "Deliveries confirmed by the carrier",
    body: "DHL shipments are checked daily and marked delivered from the carrier's own record, so the review request goes out after a real delivery, not a guessed one.",
  },
];

const built = [
  {
    label: "Orders, from quote to delivery",
    body: `Order statuses: ${requiredMetric(SLUG, "order-statuses")}. An order moves from new order through digitizing, customer approval, production, quality check and shipping to delivery, and every change is logged with who made it and when.`,
  },
  {
    label: "Access the database enforces",
    body: `${requiredMetric(SLUG, "roles-permissions")}. Production staff can't see payment information, and that's enforced in the database, not just hidden on screen. Access rules are switched on for ${requiredMetric(SLUG, "rls-coverage")}.`,
  },
  {
    label: "A factory floor off the spreadsheet",
    body: `The production floor ran on a Google Sheet until this replaced it: ${requiredMetric(SLUG, "production-rows-imported")} rows were imported and reconciled line by line into a ${requiredMetric(SLUG, "production-pipeline-states")}-step pipeline, from new order to dispatched.`,
  },
  {
    label: "Reports the owner actually uses",
    body: `${requiredMetric(SLUG, "reporting-modules")} reporting modules, including sales, profit and loss, income statement, product mix and lead attribution, each filtered by date range and exportable as CSV.`,
  },
  {
    label: "Payments, email and the working day",
    body: `Connected to ${requiredMetric(SLUG, "integrations")}. Staff clock in and out on it, and a shift someone forgets to close closes itself.`,
  },
  {
    label: "Still growing",
    body: `${requiredMetric(SLUG, "staff-routes")} signed-in app routes when last counted, built and extended since November 2025 while the business runs on it every day.`,
  },
];

export function EnterpriseOpsCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <WorkCaseOpening>
        <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
          <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Panda Patches CRM / Founder-affiliated
        </p>

        <WorkCaseTitle>Custom CRM development for Panda Patches</WorkCaseTitle>
        <p className="mt-3 text-sm" style={{ color: T.body }}>Case study updated <time dateTime={MIGRATION_PROJECT_DETAILS.enterpriseOps.contentUpdatedOn}>{new Date(`${MIGRATION_PROJECT_DETAILS.enterpriseOps.contentUpdatedOn}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p>
        <p className="mt-3 max-w-[38rem]" style={{ fontFamily: BODY, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
          One place for our team to manage the working day.
        </p>

        <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
          We built a custom CRM for the Panda Patches team to manage customers, orders, production,
          payments, attendance and reports in one place. Workflow automation handles steps such as
          wholesale pricing, invoices and delivery follow-up. It&apos;s our own system, built for the
          business owned by co-founder Imran Raza Ladhani.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-medium" style={{ color: T.accentText }}>
          <a href="#panda-patches-crm-walkthrough" className="underline underline-offset-4">Explore the CRM screens ↓</a>
          <Link href="/services/custom-engineering" className="underline underline-offset-4">Custom CRM development services →</Link>
        </div>

        <WorkCasePreview src="/work/enterprise-ops.png" alt="The Panda Patches custom CRM dashboard for orders, production and payments; customer and revenue figures are blurred" width={1711} height={919} caption="The operations dashboard, customer and revenue figures blurred / Founder-affiliated" />
        <WorkCaseFacts items={[
          { label: "Project", value: "Custom CRM and workflow automation" },
          { label: "Team workspace", value: "Customers, orders, production and payments" },
          { label: "Access", value: "Private staff workspace" },
        ]} />
        <RelationshipDisclosure slug="enterprise-ops" variant="editorial" />
      </WorkCaseOpening>

      <PandaPatchesCrmWalkthrough />

      <section className="px-6 py-8 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What the CRM <span style={{ color: T.accentText }}>handles.</span>
          </h2>

          <dl className="mt-10 border-t" style={{ borderColor: T.rule }}>
            {built.map((b) => (
              <div key={b.label} className="grid gap-2 border-b py-5 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                <dt className="font-semibold md:col-span-3" style={{ color: T.ink }}>{b.label}</dt>
                <dd className="text-[14px] leading-[1.6] md:col-span-9" style={{ color: T.body }}>{b.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-[42rem] text-[14px] leading-[1.6]" style={{ color: T.quiet }}>
            Every figure above comes from the project record and was counted or checked {countedOn()}. Earlier
            claims about time saved and efficiency gains were withdrawn because no measurement backed them, and
            they are not repeated.
          </p>

          <h3 className="mt-14" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.2 }}>
            Added since the last count.
          </h3>
          <dl className="mt-5 border-t" style={{ borderColor: T.rule }}>
            {added.map((b) => (
              <div key={b.label} className="grid gap-2 border-b py-5 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                <dt className="font-semibold md:col-span-3" style={{ color: T.ink }}>{b.label}</dt>
                <dd className="text-[14px] leading-[1.6] md:col-span-9" style={{ color: T.body }}>{b.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PortalWorkflow project="patches" />
      <CaseStudyFaqs faqs={faqs} />
      <p className="mx-auto max-w-[1100px] px-6 pb-8 text-sm" style={{ color: T.body }}>
        Technical reference: <a href="https://supabase.com/docs/guides/database/postgres/row-level-security" className="underline underline-offset-4">Supabase row-level security and privileged access</a>.
        Project counts retain their original measurement dates; this editorial review did not rerun the production access tests.
      </p>

      <section className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Still running the business on spreadsheets and group chats?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us which tools your team juggles today, and we&apos;ll work out what one system would need to do.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_enterprise_ops"
              location="work_enterprise_ops"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services/custom-engineering" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Explore custom CRM development and workflow automation
            </Link>
            <Link href="/services/backend-development" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Backend development for team tools
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
