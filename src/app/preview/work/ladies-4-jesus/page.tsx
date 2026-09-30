import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import Ladies4JesusWalkthrough from "@/components/redesign/case-study/Ladies4JesusWalkthrough";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Ladies 4 Jesus, rebuild 2, 28 Sep 2026. First pass (same day, earlier)
// stopped after a hero and a plain facts list -- only one screenshot existed.
// Five real screenshots arrived from the owner (3 of the live public site,
// 2 of the Sanity Studio), enough to build the same real CaseStudyWalkthrough
// pattern MyCustomPatches and Panda Patches use. The moderation workflow and
// video-upload cleanup are real, already-published facts (from the live
// /work page's own FAQ) but have no screenshot of their own yet, so they
// stay in the "also in scope" list below rather than becoming a chapter with
// no image to back it.
// ─────────────────────────────────────────────────────────────────────────────

const built = [
  {
    label: "Nothing goes public until she approves it",
    body: "Five of the site's nine content types are visitor-submitted -- testimonies, questions, comments, contact messages, content reports. Each is written to the CMS in a pending state by a server-side route, filtered out of every public query until the owner sets it to approved.",
  },
  {
    label: "Video uploads that clean up after themselves",
    body: "Testimonies accept a direct video upload or a YouTube/Vimeo link. A webhook deletes the stored file the moment a testimony is rejected or removed, and a separate scheduled job sweeps up anything abandoned mid-upload.",
  },
  {
    label: "A security policy scoped to where it's needed",
    body: "The public site runs a strict Content-Security-Policy with image, media and frame sources limited to the CMS, the blob store and the two video hosts actually embedded. The /studio route carries its own, deliberately scoped exemption, rather than loosening the policy site-wide.",
  },
];

export default function Ladies4JesusCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Ladies 4 Jesus / Independent client
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Ladies 4 Jesus.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A moderated community an owner runs alone.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            {MIGRATION_PROJECT_DETAILS.ladies4Jesus.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.ladies4jesus.com"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> ladies4jesus.com (opens in a new tab)</span>
            </a>
          </div>

          <RelationshipDisclosure slug="ladies-4-jesus" variant="editorial" />
        </div>
      </section>

      <Ladies4JesusWalkthrough />

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>03</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            Also in scope.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            No before-and-after performance numbers are quoted here -- nobody recorded the previous platform&apos;s
            load times or hosting costs before it was replaced, so there&apos;s no baseline to compare a launch
            reading against.
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
            Building a community you can&apos;t moderate alone?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what people will submit and what has to stay off the public site until you&apos;ve seen it, and
            we&apos;ll work out what that would take.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_ladies_4_jesus"
              location="work_ladies_4_jesus"
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
