import PortalWorkflow from "@/components/redesign/case-study/PortalWorkflow";
import AsamSearchEvidenceFigure from "@/components/redesign/case-study/AsamSearchEvidenceFigure";
import Link from "next/link";
import CalModalButton from "@/components/ui/CalModalButton";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { CAL_BOOKING_URL } from "@/lib/booking";
import ProjectReview from "@/components/redesign/case-study/ProjectReview";
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
import { ASAM_SEARCH_EVIDENCE } from "@/data/asam-search-evidence";
import { BODY, DISPLAY, MONO, T } from "@/components/redesign/tokens";

const details = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;

// 18 Nov 2026: certificates are approved by an admin first, then generated and emailed by the
// portal (portal database check), so the line no longer says they "send themselves".
const RESULT_LINE = "Students book and pay online. Reminders and class details send themselves, and certificates go out automatically once an instructor signs off. The team runs every class from one screen.";
// 18 Nov 2026: read from the live portal database by the portal repo's Claude (20 Oct to 18 Nov
// 2026, test booking excluded; the 39 are paid online seats, not staff-added). The old-site
// figure is the owner's: 52 registrations imported from WordPress, December 2025 to 19 October
// 2026. Owner, 18 Nov: ads ran on the old setup too. "About eight times" is arithmetic (39 in four
// weeks vs about 5 a month), not a causal claim. Revenue is deliberately not shown. WAITING for Jaime and Dillon to approve the wording.
const FIRST_MONTH_RESULT = "On the old website, A Step Above Medical took 52 registrations from December 2025 to October 2026, about five a month. In the first four weeks on the new system, students booked and paid for 39 seats online, the portal sent 170 automated student emails, and 9 certificates went out after the instructor's sign-off. That's about eight times the old site's monthly booking rate, with ads running in both periods.";
const TECH_LINE = "The website was rebuilt from WordPress with Next.js and a Sanity content editor. The team portal runs on Supabase, on the client's own account.";
// 18 Nov 2026: Lance asked for "Projects like this start from $X". The pricing page has no starting
// figure for a website + operations system ("no starting figure until Imran sets one", 14 Nov), so
// this stays empty, and hidden, until the owners set one.
const PRICE_SIGNAL: string = "";

// Shared with the page's FAQ schema. Every answer is in the initial HTML.
export const aStepAboveMedicalFaqs: CaseStudyFaq[] = [
  { question: "Did search visibility increase after the relaunch?", answer: ASAM_SEARCH_EVIDENCE.summary },
  { question: "Is A Step Above Medical live?", answer: "Yes. The project is live, as confirmed by the owner on 20 October 2026." },
  { question: "What did you build for A Step Above Medical?", answer: "We rebuilt its medical training website from WordPress with Next.js and a Sanity content editor, and built a separate operations portal using Supabase. The website presents courses, locations and upcoming classes; the portal brings class schedules, student records, payments and certificates into the team's workspace." },
  { question: "Can the team update courses and locations themselves?", answer: "Yes. The Sanity editor has separate course and location entries with descriptions, durations, photographs and location availability controls. The team can change the content within those fields. New features or changes to how the website works are scoped separately." },
  { question: "Can staff export the portal's records?", answer: "The portal includes CSV downloads for students, classes, registrations, attendance, payments, certificates and accepted terms. These files open in spreadsheet tools. Uploaded documents are stored separately, and the export screen says each download is recorded in the activity log." },
  // 21 Oct 2026: from the owner's answers, relayed by Hassan. She approved naming the business
  // and the phone-number detail.
  { question: "What did the new system replace?", answer: "On the old WordPress site, a class enquiry came in through a form and the team emailed a Stripe payment link by hand. Certificates were made by hand, and the site recorded students' email addresses but never their phone numbers. Now students book and pay by Stripe directly, receive automatic emails with fees, dates and venue, and give a phone number when they register. Certificates are issued from the portal using a PDF template we designed. The new system also replaced plugins including The Events Calendar and its Pro add-on, Event Tickets, Ninja Forms, WP Mail Logging, Divi and Code Snippets." },
  // 5 Nov 2026: TechBullion article, published that day (company-facts GOVERNANCE "Press").
  { question: "Has Hassan discussed this project in the press?", answer: "Yes. Hassan Jamal used it as his example in a TechBullion article, \"16 Keys to Successful Resource Allocation in Software Projects\", published on 5 November 2026. His point: before the build, we checked which services the project already had or could run on free plans, such as Supabase storage, the Sanity editor and Resend for emails, so the budget went into the custom website and portal instead. The article is at https://techbullion.com/16-keys-to-successful-resource-allocation-in-software-projects/." },
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
        <p className="mt-3 text-sm" style={{ color: T.body }}>Case study updated <time dateTime={details.contentUpdatedOn}>November 14, 2026</time></p>
        <p className="mt-3 max-w-[42rem]" style={{ fontFamily: BODY, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
          A complete medical training management system.
        </p>
        {/* 18 Nov 2026, Lance: Meta ad traffic lands here, so the opening states the result for a
            business owner. The technology line moved to the bottom of the page. */}
        <p className="mt-6 max-w-[44rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>{RESULT_LINE}</p>
        <p className="mt-4 max-w-[44rem] border-l-2 pl-4 text-[16px] leading-[1.6]" style={{ color: T.ink, borderColor: T.accentText }}>{FIRST_MONTH_RESULT}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <CalModalButton fallbackHref={CAL_BOOKING_URL} className="cta-solid inline-flex items-center justify-center bg-[#1C1917] px-6 py-3.5 text-[15px] font-medium text-white">Book a 15-minute workflow call</CalModalButton>
          <a href="#a-step-above-medical-walkthrough" className="text-[14px] font-semibold underline underline-offset-4" style={{ color: T.accentText }}>See how it works ↓</a>
        </div>
        {PRICE_SIGNAL && <p className="mt-3 text-[14px]" style={{ color: T.body }}><Link href="/pricing" className="underline underline-offset-4">{PRICE_SIGNAL}</Link></p>}
        <WorkCasePreview src="/work/a-step-above-medical-preview-homepage.png" alt="New A Step Above Medical course website with location navigation and an upcoming IV therapy class" width={1912} height={914} caption="Live client project" />
        <div className="mt-8 [&>section]:mt-0 [&>section]:p-6">
          <ProjectReview project="a-step-above-medical" inset />
        </div>
        <WorkCaseFacts items={[
          { label: "Status", value: details.status },
          { label: "Owner confirmation", value: <>{details.progress}, as of <time dateTime={details.confirmedOn}>October 20, 2026</time>.</> },
        ]} />
      </WorkCaseOpening>
      {/* 18 Nov 2026, Lance: the before-and-after table sits directly under the client quote. */}
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
          {/* 18 Nov 2026, dev handoff Part B: link into the class registration guide. */}
          <p className="mt-5 text-[15px]" style={{ color: T.body }}>Weighing software against a custom build? <Link href="/blog/class-registration-software-vs-custom-booking-system" className="font-semibold underline underline-offset-4" style={{ color: T.accentText }}>Class registration software or a custom booking system</Link></p>
        </div>
      </section>
      {/* Keep the workflow and detailed proof together before the mid-page booking CTA. */}
      <PortalWorkflow project="medical" />
      <AStepAboveMedicalWalkthrough />
      <section id="search-visibility" aria-labelledby="asam-search-title" className="px-6 py-10 md:px-10 md:py-16" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <WorkCaseLabel className="mb-3">After launch / Search visibility</WorkCaseLabel>
          <h2 id="asam-search-title" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", lineHeight: 1.1, color: T.ink }}>More visibility in generative AI search after relaunch.</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: T.body }}>{ASAM_SEARCH_EVIDENCE.pageSummary}</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {ASAM_SEARCH_EVIDENCE.aiSamples.map(sample => <div key={sample.date} className="border-t pt-4" style={{ borderColor: T.rule }}>
              <dt className="text-sm" style={{ color: T.body }}>Generative AI impressions / <time dateTime={sample.date}>{sample.label}</time></dt>
              <dd className="mt-2 text-4xl font-semibold" style={{ color: T.accentText }}>{sample.impressions}</dd>
            </div>)}
          </dl>
          <AsamSearchEvidenceFigure />
          <p className="mt-6 max-w-3xl text-base leading-relaxed" style={{ color: T.body }}>{ASAM_SEARCH_EVIDENCE.webSummary}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed" style={{ color: T.quiet }}>{ASAM_SEARCH_EVIDENCE.pageNote}</p>
          <Link href="/blog/ai-search-visibility-tracking#measure-ai-search-visibility" className="mt-5 inline-block font-semibold underline underline-offset-4" style={{ color: T.accentText }}>How to measure visibility, visits and enquiries separately</Link>
        </div>
      </section>
      {/* Invite the visitor to plan a project after the workflow, screens and search evidence. */}
      <section aria-labelledby="asam-workflow-call" className="px-6 py-10 md:px-10 md:py-14" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 id="asam-workflow-call" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.1 }}>Still managing registrations, reminders and certificates by hand?</h2>
          <p className="mt-4 max-w-[40rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>Show us how your training business works today. In a 15-minute call, we&apos;ll identify the steps worth connecting and whether a custom build makes sense.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CalModalButton fallbackHref={CAL_BOOKING_URL} className="cta-solid inline-flex items-center justify-center bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]">Plan a similar system for your business</CalModalButton>
            <QuoteModalButton cta="asam_workflow_process" location="a-step-above-medical" className="inline-flex items-center justify-center border border-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#EBE9E4]">Send us your current process</QuoteModalButton>
          </div>
        </div>
      </section>
      <CaseStudyFaqs faqs={faqs} />
      <section className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>A better website. Less work behind it.</h2>
          <p className="mt-4 max-w-[38rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>Tell us what visitors need to find and what your team currently manages by hand. We can scope the website, a custom portal, or an improvement to your existing system.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CalModalButton fallbackHref={CAL_BOOKING_URL} className="cta-solid inline-flex items-center justify-center bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]">Book a 15-minute workflow call</CalModalButton>
            <QuoteModalButton cta="asam_closing_requirements" location="a-step-above-medical" className="inline-flex items-center px-2 py-3.5 text-[15px] underline underline-offset-4">Send us your requirements</QuoteModalButton>
            <Link href="/services/wordpress-migration" className="inline-flex items-center gap-2 text-[15px] underline underline-offset-4">WordPress website migration <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="asam-built-with" className="px-6 pt-10 md:px-10 md:pt-14">
        <div className="mx-auto max-w-[1100px] border-t pt-6" style={{ borderColor: T.rule }}>
          <WorkCaseLabel className="mb-3">How it&apos;s built</WorkCaseLabel>
          <h2 id="asam-built-with" className="sr-only">How the system is built</h2>
          <p className="max-w-[44rem] text-[15px] leading-[1.65]" style={{ color: T.body }}>{TECH_LINE} <a href={details.websiteUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4" style={{ color: T.accentText }}>Visit the live website ↗</a></p>
        </div>
      </section>
      {/* 18 Nov 2026, Lance: ad visitors are training businesses, so the practices section is last. */}
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
    </PreviewShell>
  );
}
