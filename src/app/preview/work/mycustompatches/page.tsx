import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import { requiredMetric, clientIdentity } from "@/data/case-study-facts";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// MyCustomPatches, hero + facts pass, 28 Sep 2026. Same caveat as Emblematic
// Studio: only one screenshot exists (mycustompatches.png), so this stops
// after the hero and a plain "what's built" list rather than inventing
// chapter screenshots that don't exist yet.
//
// One open question before a full walkthrough gets built: the live
// /work/mycustompatches page's own Before/After list says "the team edits
// content directly, no deploy required," but nothing else on that page --
// not the tech stack table, not the FAQ, not the schema -- names a CMS.
// Every content/form system described there (product pages via a shared
// template, quote forms via React Hook Form + Web3Forms, blog posts) reads
// as code-level, not editor-level. That line is left OUT of this page until
// it's confirmed: either a real CMS exists and isn't documented yet, or the
// live claim is unsupported and needs fixing at the source.
//
// Metrics below come from case-study-facts.json via requiredMetric(), the
// same accessor Panda Patches uses -- if metrics_guard.py ever withdraws
// one of these, the build breaks here instead of silently going stale.
// ─────────────────────────────────────────────────────────────────────────────

const built = [
  {
    label: "Off a decade of WordPress, in about 22 days",
    body: "Migrated to Next.js in roughly three weeks: every existing URL, canonical tag, meta description and structured-data block preserved exactly, with 301 redirects wherever a URL structure changed.",
  },
  {
    label: "One product template, eight categories",
    body: "A shared product-page template drives all 8 product categories, so a change to how a product page works applies everywhere at once instead of needing eight separate edits.",
  },
  {
    label: "Forms with no server to maintain",
    body: "Quote and contact forms run on React Hook Form with Zod validation, delivered by Web3Forms -- no backend required. Design-file uploads go straight to Cloudinary.",
  },
  {
    label: "A single DNS cutover, not a slow migration",
    body: "The new build ran in parallel on staging while the WordPress site stayed live. After full QA -- every URL, form, image and SEO tag checked -- a single DNS cutover with pre-lowered TTL made the switch near-instant.",
  },
];

export default function MyCustomPatchesCaseStudyPreview() {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/preview/work" style={{ color: T.quiet }}>Work</Link> / MyCustomPatches / Independent client
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            MyCustomPatches.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A decade-old WordPress store, off it in about 22 days with zero downtime.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            {clientIdentity("mycustompatches")} ran on WordPress for years before moving to a custom Next.js build --
            every URL, redirect and search ranking carried across the cutover deliberately, not by accident.
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

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What&apos;s actually built.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            Search rankings lost, per Google Search Console: {requiredMetric("mycustompatches", "rankings")}.
            Performance and hosting figures from this project were withdrawn pending reconciliation of the original
            test records and aren&apos;t restated here.
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
