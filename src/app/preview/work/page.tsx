import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { caseStudy } from "@/data/case-study-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Work index, redesign candidate, 27 Sep 2026. Group 1 of the site-wide
// rollout (see REDESIGN_ROLLOUT_PLAN_2026-09-26.md). Built beside the live
// /work so the two can be compared before anything replaces it. Not linked
// from anywhere, not in the sitemap, noindex below.
// ─────────────────────────────────────────────────────────────────────────────
// Differs from WorkIndex.tsx (the homepage teaser) in one deliberate way: a
// design review found the homepage's image-on-hover-only device left touch
// and keyboard users with no image at all on most rows. This is the full
// index, not a teaser, so every row's image is visible at all times; hover
// still adds a lift and a zoom for mouse users, it just isn't the only way
// to see the picture.
//
// Every name/relationship/status below reads from case-study-facts.json or
// migration-projects.ts -- nothing here is retyped from WorkIndex.tsx's own
// (not yet reconciled) copy of these facts.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Work preview",
  robots: { index: false, follow: false },
};

function formatIsoDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

type Row = {
  name: string;
  label: string;
  relationship: string;
  href: string;
  image?: string;
  status?: string;
  external?: boolean;
};

const clientWork: Row[] = [
  { name: "NorthDeck Group", label: "Security systems", relationship: "Client", href: "https://northdeckgroup.com/", image: "/work/northdeck-group.png", external: true },
  { name: caseStudy("emblematic-studio").name, label: "Product catalogue", relationship: caseStudy("emblematic-studio").relationship, href: caseStudy("emblematic-studio").href, image: "/work/emblematic-studio.png" },
  { name: caseStudy("mycustompatches").name, label: "WordPress migration", relationship: caseStudy("mycustompatches").relationship, href: caseStudy("mycustompatches").href, image: "/work/mycustompatches.png" },
  { name: caseStudy("ladies-4-jesus").name, label: "Community & publishing", relationship: caseStudy("ladies-4-jesus").relationship, href: caseStudy("ladies-4-jesus").href, image: "/work/ladies-4-jesus.png" },
];

// In progress, not a built case study: migration-projects.ts is explicit that
// the public domain still serves the client's previous WordPress site and
// must not be presented as our delivered build. No screenshot, on purpose.
const inProgress: Row = {
  name: "A Step Above Medical",
  label: "WordPress migration",
  relationship: "Client, in progress",
  status: `Testing begins ${formatIsoDate(MIGRATION_PROJECT_DETAILS.aStepAboveMedical.testingStarts)}`,
  href: "/services/wordpress-migration",
};

const founderAffiliated: Row[] = [
  { name: caseStudy("panda-patches").name, label: "Custom commerce", relationship: caseStudy("panda-patches").relationship, href: caseStudy("panda-patches").href, image: "/work/panda-patches.png" },
  { name: caseStudy("enterprise-ops").name, label: "Internal operations", relationship: caseStudy("enterprise-ops").relationship, href: caseStudy("enterprise-ops").href, image: "/work/enterprise-ops.png" },
  { name: caseStudy("panda-codelab").name, label: "Agency website", relationship: caseStudy("panda-codelab").relationship, href: caseStudy("panda-codelab").href, image: "/work/pandacodelab.png" },
];

const conceptBuilds: Row[] = [
  { name: caseStudy("medical-template").name, label: "Practice website", relationship: caseStudy("medical-template").relationship, href: caseStudy("medical-template").href, image: "/work/medical-template.png" },
  { name: caseStudy("panda-publisher").name, label: "Author services", relationship: caseStudy("panda-publisher").relationship, href: caseStudy("panda-publisher").href, image: "/work/panda-publisher.png" },
  { name: caseStudy("sleek-jackets").name, label: "Outerwear store", relationship: caseStudy("sleek-jackets").relationship, href: caseStudy("sleek-jackets").href, image: "/work/sleek-jackets.png" },
];

export default function WorkPreview() {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10 md:pb-24" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-12">
            <h1
              className="lg:col-span-7"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5.6rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
            >
              Look at the work before you read about it.
            </h1>
            <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
              Every screenshot below is a site that is live right now, unless the row says otherwise. Open any of them
              and check it yourself. Where a project has measured figures they are on its record, and where it does
              not, we say nothing about speed or traffic rather than estimate.
            </p>
          </div>
        </div>
      </section>

      <WorkSection title="Client work" note="Independent clients" rows={clientWork} />

      <div className="px-6 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1440px] border-t" style={{ borderColor: T.rule }} />
      </div>
      <WorkSection title="In progress" note="Not yet launched" rows={[inProgress]} compact />

      <div className="px-6 md:px-10" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1440px] py-10 md:py-14">
          <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            Preview — not yet confirmed
          </p>
          <div className="mt-4 grid gap-6 border-t pt-6 md:grid-cols-12" style={{ borderColor: T.rule }}>
            <div className="overflow-hidden rounded-[4px] md:col-span-4">
              <a href="https://dtc-brand-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                <Image src="/work/saforne.png" alt="Saforne preview build, a leather goods storefront design not yet confirmed as a live client relationship." width={640} height={306} className="w-full object-cover" />
              </a>
            </div>
            <div className="md:col-span-8">
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "1.6rem", lineHeight: 1.1 }}>
                Saforne
              </h2>
              <p className="mt-3 max-w-[40rem] text-[15px] leading-[1.6]" style={{ color: T.body }}>
                A leather-goods storefront design. The build itself is labelled &ldquo;design preview, not yet for
                sale&rdquo; on its own site, and the client relationship shown here has not yet been personally
                reconfirmed, so it is held separately from the client work above rather than presented alongside it.
              </p>
              <a
                href="https://dtc-brand-alpha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium"
                style={{ color: T.ink }}
              >
                View the preview build <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <WorkSection title="Founder-affiliated" note="Owned by co-founder Imran Raza Ladhani" rows={founderAffiliated} dark />
      <WorkSection
        title="Concept builds"
        note="Sites we designed and built to show what's possible. Not client work."
        rows={conceptBuilds}
      />

      <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1 }}>
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-[32rem] text-[17px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
              Tell us what your website needs to do, what&apos;s getting in the way and what you want to keep.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <QuoteModalButton
              cta="work_index_talk"
              location="work"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-[15px] font-medium"
              style={{ borderColor: T.onDarkRule, color: T.onDark }}
            >
              Explore our services
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}

function WorkSection({ title, note, rows, dark = false, compact = false }: { title: string; note: string; rows: Row[]; dark?: boolean; compact?: boolean }) {
  const bg = dark ? T.dark : T.paper;
  const fg = dark ? T.onDark : T.ink;
  const quiet = dark ? T.onDarkQuiet : T.quiet;
  const rule = dark ? T.onDarkRule : T.rule;
  return (
    <section className={`px-6 md:px-10 ${compact ? "py-10 md:py-14" : "py-16 md:py-24"}`} style={{ backgroundColor: bg, color: fg }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t pt-6" style={{ borderColor: rule }}>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: compact ? "1.8rem" : "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1 }}>
            {title}
          </h2>
          <span className="text-[13px]" style={{ color: quiet }}>{note}</span>
        </div>

        <ul className="work-index-full mt-6 border-t" style={{ borderColor: rule }}>
          {rows.map((r) => (
            <li key={r.name} className="border-b" style={{ borderColor: rule }}>
              <Link
                href={r.href}
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="work-row-full group grid items-center gap-x-6 gap-y-3 rounded-[6px] py-6 no-underline outline-none md:grid-cols-12 md:py-7"
                style={{ textDecoration: "none" }}
              >
                <span className="col-span-full md:col-span-3">
                  <span className="block text-[12px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: quiet }}>
                    {r.label} · {r.relationship}
                    {r.status ? ` · ${r.status}` : ""}
                  </span>
                  <span className="mt-1 block" style={{ fontFamily: DISPLAY, fontWeight: 700, color: fg, fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1 }}>
                    {r.name}
                  </span>
                </span>

                {r.image ? (
                  <span className="work-row-full-thumb relative col-span-full block h-[160px] shrink-0 overflow-hidden rounded-[4px] md:col-span-7 md:h-[130px]">
                    <Image src={r.image} alt="" fill sizes="(min-width: 768px) 480px, 90vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                  </span>
                ) : (
                  <span
                    className="col-span-full flex h-[80px] items-center rounded-[4px] px-4 text-[13px] md:col-span-7"
                    style={{ fontFamily: MONO, backgroundColor: dark ? "rgba(235,233,228,0.06)" : T.paperHi, color: quiet }}
                  >
                    Not yet launched — screenshot withheld until the migration is confirmed live.
                  </span>
                )}

                <span className="work-row-full-arrow col-span-full flex justify-start md:col-span-2 md:justify-end" style={{ color: fg }}>
                  <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  {r.external && <span className="sr-only"> (opens in a new tab)</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .work-row-full { transition: background-color .3s ease; }
        .work-row-full:hover, .work-row-full:focus-visible { background-color: ${dark ? "rgba(235,233,228,0.05)" : "rgba(28,25,23,0.03)"}; }
        .work-row-full:focus-visible { box-shadow: 0 0 0 3px ${T.accent}; }
        @media (prefers-reduced-motion: reduce) {
          .work-row-full, .work-row-full * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
