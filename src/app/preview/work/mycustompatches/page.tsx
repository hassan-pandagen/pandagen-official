import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import MyCustomPatchesWalkthrough from "@/components/redesign/case-study/MyCustomPatchesWalkthrough";
import { requiredMetric, clientIdentity } from "@/data/case-study-facts";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// MyCustomPatches, rebuild 2, 28 Sep 2026. First pass (same day, earlier)
// stopped after a hero and a plain facts list because only one screenshot
// existed. Four chapter-specific screenshots arrived from the owner (real,
// taken live on mycustompatches.net) -- storefront category grid, one
// product-template page in detail, and the four-step order process page --
// enough to build the same real CaseStudyWalkthrough pattern Panda Patches
// and MyCustomPatches's sibling pages use, instead of describing these
// things in prose only.
//
// One open question still unresolved from the first pass: the live
// /work/mycustompatches page's own Before/After list says "the team edits
// content directly, no deploy required," but nothing else on that page --
// not the tech stack table, not the FAQ, not the schema -- names a CMS.
// Confirmed 28 Sep 2026: there genuinely is no CMS today; the owner is
// adding Sanity and will share screenshots once it's live. That line stays
// out of both this page and the walkthrough until then.
//
// Metrics below come from case-study-facts.json via requiredMetric(), the
// same accessor Panda Patches uses -- if metrics_guard.py ever withdraws
// one of these, the build breaks here instead of silently going stale.
// ─────────────────────────────────────────────────────────────────────────────

const built = [
  {
    label: "Off a decade of WordPress, in about 22 days",
    body: "Migrated more than 200 URLs to Next.js in roughly three weeks. The team inventoried search metadata and mapped redirects where URL paths changed.",
  },
  {
    label: "Forms with no server to maintain",
    body: "Quote and contact forms run on React Hook Form with Zod validation, delivered by Web3Forms -- no custom form backend to run. Design-file uploads go straight to Cloudinary.",
  },
  {
    label: "A single DNS cutover, not a slow migration",
    body: "The new build ran in parallel on staging while the WordPress site stayed live. After QA, a single DNS cutover with a pre-lowered TTL made the switch, and the project record shows zero downtime at cutover.",
  },
];

export default function MyCustomPatchesCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / MyCustomPatches / Independent client
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            MyCustomPatches.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A decade-old WordPress store, off it in about 22 days, with zero downtime recorded at cutover.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            {clientIdentity("mycustompatches")} ran on WordPress for years before moving to a custom Next.js build --
            URL mapping and redirects were planned before cutover. The project record reports no ranking losses
            in the 30-day post-launch monitoring window.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.mycustompatches.net"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> mycustompatches.net (opens in a new tab)</span>
            </a>
          </div>

          <div className="mt-10">
            <Image
              src="/work/mycustompatches.png"
              alt="The MyCustomPatches storefront home page after migration, showing the patch category navigation, the hero product imagery and the quote request entry point."
              width={1912}
              height={914}
              sizes="(min-width: 1100px) 1050px, 100vw"
              priority
              className="w-full border"
              style={{ borderColor: T.rule }}
            />
          </div>

          <RelationshipDisclosure slug="mycustompatches" variant="editorial" />

          <div className="mt-2 flex flex-wrap gap-x-10 gap-y-3 border-t pt-6" style={{ borderColor: T.rule }}>
            {[
              { label: "Migration completed in", value: requiredMetric("mycustompatches", "delivery-days") },
              { label: "URLs migrated", value: requiredMetric("mycustompatches", "urls-migrated") },
              { label: "Distinct templates rebuilt", value: requiredMetric("mycustompatches", "templates") },
              { label: "Downtime at cutover", value: requiredMetric("mycustompatches", "downtime") },
            ].map((f) => (
              <div key={f.label} className="max-w-[16rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>{f.label}</p>
                <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: T.body }}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MyCustomPatchesWalkthrough />

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>04</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            Also in scope.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            Search rankings lost, per Google Search Console: {requiredMetric("mycustompatches", "rankings")}.
            Performance figures were withdrawn pending reconciliation of the original test records. The old hosting
            cost figure was retired because no invoice or reliable recollection exists to support it.
          </p>

          <dl className="mt-8 border-t" style={{ borderColor: T.rule }}>
            {built.map((b) => (
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
            Stuck on an old platform you&apos;re afraid to touch?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what you&apos;re running and what you&apos;re afraid of losing, and we&apos;ll work out what a
            careful migration would take.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_mycustompatches"
              location="work_mycustompatches"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services/wordpress-migration" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Explore WordPress migration services
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
