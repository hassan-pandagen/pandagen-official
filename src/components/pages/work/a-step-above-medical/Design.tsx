import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import AStepAboveMedicalWalkthrough from "@/components/redesign/case-study/AStepAboveMedicalWalkthrough";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

const details = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;

// Shared with the page's FAQ schema. Every answer is in the initial HTML.
export const aStepAboveMedicalFaqs: CaseStudyFaq[] = [
  { question: "Is the A Step Above Medical build finished?", answer: "The website and operations portal are built and undergoing pre-launch testing, as confirmed on 10 October 2026. The screenshots show the replacement build. We are not claiming that it has launched or reporting live-site results." },
  { question: "What did you build for A Step Above Medical?", answer: "We rebuilt its medical training website from WordPress with Next.js and a Sanity content editor, and built a separate operations portal using Supabase. The website presents courses, locations and upcoming classes; the portal brings class schedules, student records, payments and certificates into the team's workspace." },
  { question: "Can the team update courses and locations themselves?", answer: "Yes. The Sanity editor has separate course and location entries with descriptions, durations, photographs and location availability controls. The team can change the content within those fields. New features or changes to how the website works are scoped separately." },
  { question: "Can staff export the portal's records?", answer: "The portal includes CSV downloads for students, classes, registrations, attendance, payments, certificates and accepted terms. These files open in spreadsheet tools. Uploaded documents are stored separately, and the export screen says each download is recorded in the activity log." },
  { question: "What can the team manage in the medical training system?", answer: "The system brings course and location content together with class schedules, student records, instructor assignments, attendance, payments and certificates. The operations portal also has email, account-management and activity-log sections. The public website and the staff workspace support different parts of the same training business." },
];

export function AStepAboveMedicalStatusPreview({ faqs = aStepAboveMedicalFaqs }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <section className="px-6 pb-16 pt-8 md:pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / A Step Above Medical / {details.status}
          </p>
          <WorkCaseTitle>A Step Above Medical</WorkCaseTitle>
          <p className="mt-3 max-w-[42rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A complete medical training management system.
          </p>
          <p className="mt-6 max-w-[44rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>{details.summary}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-semibold" style={{ color: T.accentText }}>
            <a href="#a-step-above-medical-walkthrough" className="underline underline-offset-4">Explore the website and portal ↓</a>
            <Link href="/services/custom-engineering" className="underline underline-offset-4">Custom portal development →</Link>
            <Link href="/services/medical-website-design" className="underline underline-offset-4">Medical website design →</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t pt-6" style={{ borderColor: T.rule }}>
            <div className="max-w-[20rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>Status</p>
              <p className="mt-1 text-[16px] font-semibold leading-[1.5]" style={{ color: T.accentText }}>Built · In testing</p>
            </div>
            <div className="max-w-[30rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>Owner confirmation</p>
              <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: T.body }}>{details.progress}, as of <time dateTime={details.confirmedOn}>October 10, 2026</time>.</p>
            </div>
          </div>
          <figure className="mt-10 border" style={{ borderColor: T.rule, backgroundColor: T.paperHi }}>
            <Image src="/work/a-step-above-medical-preview-homepage.png" alt="New A Step Above Medical course website with location navigation and an upcoming IV therapy class" width={1912} height={914} sizes="(min-width: 1100px) 1100px, 100vw" preload />
            <figcaption className="px-4 py-3 text-[12px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: T.quiet }}>Replacement website / Independent client / Pre-launch testing</figcaption>
          </figure>
          <aside data-relationship-disclosure className="my-8 border-t pt-5" style={{ borderColor: T.rule }}>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: T.quiet }}>Relationship and release status</p>
            <p className="max-w-[65rem] text-sm leading-relaxed" style={{ color: T.body }}>{details.disclosure}</p>
          </aside>
        </div>
      </section>
      <AStepAboveMedicalWalkthrough />
      <CaseStudyFaqs faqs={faqs} />
      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>A better website. Less work behind it.</h2>
          <p className="mt-4 max-w-[38rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>Tell us what visitors need to find and what your team currently manages by hand. We can scope the website, a custom portal, or an improvement to your existing system.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/services/custom-engineering" className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]">Explore custom software and portals <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/services/wordpress-migration" className="inline-flex items-center gap-2 text-[15px] underline underline-offset-4">WordPress website migration <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
