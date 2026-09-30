import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import { caseStudy, requiredMetric } from "@/data/case-study-facts";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Enterprise operations platform, redesign preview, 30 Sep 2026. Our own
// internal CRM for Panda Patches, founder-affiliated (disclosure from
// case-study-facts.json).
//
// One screenshot only, the existing /work/enterprise-ops.png, whose customer
// names, order values and revenue are already blurred. This is live business
// data: never use an unredacted capture, and nothing from the CRM repository's
// exports, invoices or spreadsheets. More redacted screens can become a
// CaseStudyWalkthrough like the other studies once they are supplied.
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

export default function EnterpriseOpsCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Enterprise operations / Founder-affiliated
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Enterprise operations platform.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            The system Panda Patches runs on.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            The staff-facing CRM behind Panda Patches: orders, production, payments, attendance and reports in one
            place. It&apos;s our own system, built for a business owned by co-founder Imran Raza Ladhani, not work
            delivered to an outside client.
          </p>

          <RelationshipDisclosure slug="enterprise-ops" variant="editorial" />
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What&apos;s in it.
          </h2>

          <figure className="mt-8">
            <Image
              src="/work/enterprise-ops.png"
              alt="The operations dashboard: a sidebar of modules (orders, reports, clock in/out, inbox, quotes, payment forms, customers, user management), revenue and order totals, the production pipeline and a table of recent orders by status. Customer names, amounts and revenue are blurred."
              width={1711}
              height={919}
              sizes="(min-width: 1100px) 1050px, 100vw"
              className="w-full border"
              style={{ borderColor: T.rule }}
            />
            <figcaption className="mt-3 text-[13px]" style={{ fontFamily: MONO, color: T.quiet }}>
              The dashboard. Customer names, order values and revenue are blurred: this is the live business.
            </figcaption>
          </figure>

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

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
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
              Explore custom engineering
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
