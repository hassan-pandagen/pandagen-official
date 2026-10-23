import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import WorkCaseOpening from "@/components/redesign/case-study/WorkCaseOpening";
import WorkCasePreview from "@/components/redesign/case-study/WorkCasePreview";
import WorkCaseFacts from "@/components/redesign/case-study/WorkCaseFacts";
import WorkCaseLabel from "@/components/redesign/case-study/WorkCaseLabel";
import AStepAboveMedicalWalkthrough from "@/components/redesign/case-study/AStepAboveMedicalWalkthrough";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { BODY, DISPLAY, MONO, T } from "@/components/redesign/tokens";

const details = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;

// Shared with the page's FAQ schema. Every answer is in the initial HTML.
export const aStepAboveMedicalFaqs: CaseStudyFaq[] = [
  { question: "Is A Step Above Medical live?", answer: "Yes. The project is live, as confirmed by the owner on 20 October 2026. The screenshots were captured before launch and illustrate the website and operations portal; they are not live-site performance or business results." },
  { question: "What did you build for A Step Above Medical?", answer: "We rebuilt its medical training website from WordPress with Next.js and a Sanity content editor, and built a separate operations portal using Supabase. The website presents courses, locations and upcoming classes; the portal brings class schedules, student records, payments and certificates into the team's workspace." },
  { question: "Can the team update courses and locations themselves?", answer: "Yes. The Sanity editor has separate course and location entries with descriptions, durations, photographs and location availability controls. The team can change the content within those fields. New features or changes to how the website works are scoped separately." },
  { question: "Can staff export the portal's records?", answer: "The portal includes CSV downloads for students, classes, registrations, attendance, payments, certificates and accepted terms. These files open in spreadsheet tools. Uploaded documents are stored separately, and the export screen says each download is recorded in the activity log." },
  // 21 Oct 2026: from the owner's answers, relayed by Hassan. She approved naming the business
  // and the phone-number detail.
  { question: "What did the new system replace?", answer: "On the old WordPress site, a class enquiry came in through a form and the team emailed a Stripe payment link by hand. Certificates were made by hand, and the site recorded students' email addresses but never their phone numbers. Now students book and pay by Stripe directly, receive automatic emails with fees, dates and venue, and give a phone number when they register. Certificates are issued from the portal using a PDF template we designed. The new system also replaced plugins including The Events Calendar and its Pro add-on, Event Tickets, Ninja Forms, WP Mail Logging, Divi and Code Snippets." },
  { question: "What can the team manage in the medical training system?", answer: "The system brings course and location content together with class schedules, student records, instructor assignments, attendance, payments and certificates. The operations portal also has email, account-management and activity-log sections. The public website and the staff workspace support different parts of the same training business." },
];

// 21 Oct 2026: what the old WordPress site did and what the new system does, from the owner's
// answers and the plugin list on the old site. Disable Comments is left out: nothing replaced it.
const BEFORE_AFTER: [string, string, string][] = [
  ["Booking and payment", "An enquiry form. The team replied by email with a Stripe payment link.", "Students book a class and pay by Stripe directly on the website."],
  ["Messages to students", "Nothing automatic.", "Automatic emails, including reminders of fees, dates and venue."],
  ["Certificates", "Made by hand.", "Issued from the portal, using a PDF certificate template we designed."],
  ["Student contact details", "Email addresses only. The site never collected phone numbers.", "Registration collects a phone number. For students imported from the old site, the team collects it in class."],
  ["Class schedule", "The Events Calendar and Events Calendar Pro, with Event Tickets.", "Class schedule, enrolment and payments in the portal; course and location pages edited in Sanity."],
  ["Forms", "Ninja Forms.", "Booking and contact forms built into the website."],
  ["Email records", "WP Mail Logging.", "Email and activity-log sections in the portal."],
  ["Page design and custom code", "Divi page builder and the Code Snippets plugin.", "A custom Next.js website, with every code change recorded in GitHub."],
];

export function AStepAboveMedicalStatusPreview({ faqs = aStepAboveMedicalFaqs }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <WorkCaseOpening>
        <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
          <Link href="/work" style={{ color: T.quiet }}>Work</Link> / A Step Above Medical / {details.status}
        </p>
        <WorkCaseTitle>A Step Above Medical</WorkCaseTitle>
        <p className="mt-3 text-sm" style={{ color: T.body }}>Case study updated <time dateTime={details.contentUpdatedOn}>October 23, 2026</time></p>
        <p className="mt-3 max-w-[42rem]" style={{ fontFamily: BODY, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
          A complete medical training management system.
        </p>
        <p className="mt-6 max-w-[44rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>{details.summary}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-semibold" style={{ color: T.accentText }}>
          <a href={details.websiteUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Visit live website ↗</a>
          <a href="#a-step-above-medical-walkthrough" className="underline underline-offset-4">Explore the website and portal ↓</a>
          <Link href="/services/custom-engineering" className="underline underline-offset-4">Custom portal development →</Link>
          <Link href="/services/medical-website-design" className="underline underline-offset-4">Medical website design →</Link>
        </div>
        <WorkCasePreview src="/work/a-step-above-medical-preview-homepage.png" alt="New A Step Above Medical course website with location navigation and an upcoming IV therapy class" width={1912} height={914} caption="Live client project / Screenshot captured before launch" />
        <WorkCaseFacts items={[
          { label: "Status", value: details.status },
          { label: "Owner confirmation", value: <>{details.progress}, as of <time dateTime={details.confirmedOn}>October 20, 2026</time>.</> },
        ]} />
        <aside data-relationship-disclosure className="mb-0 mt-6 border-t pt-5 md:my-8" style={{ borderColor: T.rule }}>
          <WorkCaseLabel className="mb-3">Relationship and release status</WorkCaseLabel>
          <p className="max-w-[65rem] text-sm leading-relaxed" style={{ color: T.body }}>{details.disclosure}</p>
        </aside>
      </WorkCaseOpening>
      <AStepAboveMedicalWalkthrough />
      <section aria-labelledby="asam-before-after" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <WorkCaseLabel className="mb-3">Before and after</WorkCaseLabel>
          <h2 id="asam-before-after" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", lineHeight: 1.05, color: T.ink }}>What the new system replaced</h2>
          <p className="mt-4 max-w-[44rem] text-[16px] leading-[1.65]" style={{ color: T.body }}>
            The old WordPress site needed manual work around every booking. The owner confirmed each row below on 21 October 2026.
          </p>
          <div className="mt-6 overflow-x-auto border" style={{ borderColor: T.rule }} tabIndex={0} role="region" aria-label="Before and after table">
            <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
              <thead style={{ backgroundColor: T.paperHi }}>
                <tr style={{ color: T.ink }}>
                  <th scope="col" className="p-4 font-semibold">Job</th>
                  <th scope="col" className="p-4 font-semibold">Old WordPress site</th>
                  <th scope="col" className="p-4 font-semibold">New system</th>
                </tr>
              </thead>
              <tbody>
                {BEFORE_AFTER.map(([job, before, after]) => (
                  <tr key={job} className="border-t align-top" style={{ borderColor: T.rule }}>
                    <th scope="row" className="p-4 font-semibold" style={{ color: T.ink }}>{job}</th>
                    <td className="p-4 leading-relaxed" style={{ color: T.body }}>{before}</td>
                    <td className="p-4 leading-relaxed" style={{ color: T.ink }}>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section aria-labelledby="asam-similar-systems" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">
          <WorkCaseLabel className="mb-3">For your business</WorkCaseLabel>
          <h2 id="asam-similar-systems" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", lineHeight: 1.05, color: T.ink }}>Could a similar system work for your practice?</h2>
          <p className="mt-4 max-w-[44rem] text-[16px] leading-[1.65]" style={{ color: T.body }}>
            We can build websites and booking and administration systems for med spas, aesthetic and skin clinics, independent medical centres, dental practices, physiotherapy clinics and optometry practices. Depending on your workflow, the scope can include service pages your team can edit, appointment requests or bookings, payments, reminders and a staff portal, with connections to the tools you already use.
          </p>
          <p className="mt-4 max-w-[44rem] text-[16px] leading-[1.65]" style={{ color: T.body }}>
            A Step Above Medical demonstrates our work for a training provider. For a practice, we scope the records, staff permissions, integrations and privacy requirements around its own services and country. Patient records and clinical workflows require a separate assessment before we agree the build.
          </p>
          <Link href="/services/medical-website-design" className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold underline underline-offset-4" style={{ color: T.accentText }}>Explore websites and systems for your practice <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
      <CaseStudyFaqs faqs={faqs} />
      <section className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
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
