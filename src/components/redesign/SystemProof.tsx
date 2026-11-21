import styles from "./SalesActions.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, GraduationCap, Mail, PanelsTopLeft, Plus } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { BODY, DISPLAY, UI, T } from "@/components/redesign/tokens";

// Owner-confirmed before/after facts; no unverified savings or growth claims.
const CHANGES = [
  { before: "Enquiry form, then an emailed payment link", after: "Students book and pay online", label: "Booking & payment", icon: CalendarDays },
  { before: "Nothing automatic", after: "Automatic emails with fees, dates and venue", label: "Student communication", icon: Mail },
  { before: "Certificates made by hand", after: "Certificates issued from the staff portal", label: "Course completion", icon: GraduationCap },
  { before: "Plugin-based class schedule", after: "Classes, enrolment and payments in one portal", label: "Day-to-day operations", icon: PanelsTopLeft },
];
const review = CLIENT_REVIEWS.find((r) => r.id === "a-step-above-medical")!;

export default function SystemProof() {
  return (
    <section aria-labelledby="system-proof-title" className="px-6 pb-5 pt-8 md:px-10 md:pb-6 md:pt-10" style={{ backgroundColor: T.paper, color: T.ink }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p className="mb-5 text-xs uppercase tracking-[0.16em]" style={{ fontFamily: UI, color: T.accentText }}>Built by us. Used by a real business.</p>
            <h2 id="system-proof-title" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.6rem, 4.8vw, 5rem)", lineHeight: 1.06, letterSpacing: "-0.02em", textWrap: "balance" }}>
              A website that takes bookings.<br /><span style={{ color: T.accentText }}>A system that handles the next steps.</span>
            </h2>
          </div>
          <p className="max-w-[28rem] text-[17px] leading-relaxed lg:col-span-4" style={{ color: T.body }}>
            For A Step Above Medical, we connected the course website, payments, student emails and staff portal. Here is what changed for their team.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <Link href="/work/a-step-above-medical" className={`${styles.preview} block border border-[rgba(28,25,23,0.16)] p-2 md:p-3`} style={{ backgroundColor: T.paperHi }} aria-label="Explore the A Step Above Medical case study">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-2 py-2 text-xs uppercase tracking-[0.12em]" style={{ fontFamily: UI }}>
                <span>A Step Above Medical</span><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-700" />Live client project</span>
              </div>
              <Image src="/work/a-step-above-medical-preview-homepage.png" alt="A Step Above Medical website showing medical courses, upcoming classes and online seat reservations" width={1912} height={914} sizes="(min-width: 1024px) 48vw, 100vw" className="h-auto w-full" />
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-2 pb-1 pt-3" style={{ fontFamily: UI }}>
                <p className="text-xs leading-relaxed" style={{ color: T.quiet }}>Screenshot captured before launch; project now live.</p>
                <span className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold" style={{ color: T.accentText }}>
                  View case study <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
            {/* 21 Nov 2026, Imran: Dillon's 6x is approved in his exact words, without
                "revenue" or dollar amounts, beside 7 to 37 with the ads note. The counts and
                the 27% come from migration-projects.ts. */}
            <div className="mt-6 border p-5 md:p-6" style={{ borderColor: T.rule, backgroundColor: T.paperHi }}>
              <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.4vw, 3rem)", lineHeight: 1.05 }}>
                7 <span style={{ color: T.quiet }}>to</span> <span style={{ color: T.accentText }}>37</span> bookings
              </p>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: T.body }}>
                Website bookings in the 30 days before launch, then online bookings in the first 30 days on the new system.
              </p>
              <p className="mt-4 text-[18px] leading-[1.45]" style={{ fontFamily: BODY }}>
                &ldquo;We did 6x technically since the business launched the new website.&rdquo;
                <span className="mt-1 block text-sm" style={{ fontFamily: UI, color: T.body }}>{review.name}</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed" style={{ fontFamily: UI, color: T.quiet }}>
                The new Google Ads campaigns ran over the same period, with about 27% more ad spend.
              </p>
            </div>
            <figure className="mt-6 border-l-[3px] py-1 pl-6" style={{ borderColor: T.accent }}>
              <blockquote className="text-[22px] leading-[1.45] md:text-[26px]" style={{ fontFamily: BODY }}>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm leading-relaxed" style={{ fontFamily: UI, color: T.body }}>
                {review.name}<br />
                <a href={review.href} target="_blank" rel="noopener noreferrer" className={`${styles.link} inline-flex min-h-11 items-center gap-2 underline underline-offset-4`}>Read the review on {review.platform}<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
              </figcaption>
            </figure>
          </div>
          <div className="min-w-0">
            <ul className="space-y-3">
              {CHANGES.map(({ before, after, label, icon: Icon }, index) => (
                <li key={label}>
                  <details open={index === 0} className="group border" style={{ borderColor: T.rule, backgroundColor: T.paperHi }}>
                    <summary className="grid cursor-pointer list-none grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-4 hover:bg-black/[0.025] focus-visible:outline-2 focus-visible:outline-offset-2 sm:gap-4 sm:p-5 [&::-webkit-details-marker]:hidden"
                      style={{ outlineColor: T.accent, fontFamily: UI }}>
                      <span className="flex h-10 w-10 items-center justify-center border sm:h-11 sm:w-11" style={{ color: T.accentText, borderColor: T.rule }}>
                        <Icon size={21} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="mb-1 block text-[11px] uppercase tracking-[0.13em]" style={{ color: T.quiet }}>{label}</span>
                        <span className="block text-[17px] font-semibold leading-snug sm:text-[20px]">{after}</span>
                      </span>
                      <Plus className="h-[18px] w-[18px] group-open:rotate-45 motion-safe:transition-transform" style={{ color: T.accentText }} aria-hidden="true" />
                    </summary>
                    <p className="border-t px-4 py-3 text-[15px] leading-relaxed sm:px-5" style={{ color: T.body, borderColor: T.rule }}>
                      <strong style={{ fontFamily: UI }}>Before</strong> <span className="mx-1" aria-hidden="true">&middot;</span> {before}.
                    </p>
                  </details>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t pt-5" style={{ borderColor: T.rule }}>
              <p className="max-w-[32rem] text-xl leading-snug md:text-2xl" style={{ fontFamily: BODY }}>What could your website take off your team&rsquo;s hands?</p>
              <div className="mt-4 text-sm font-semibold" style={{ fontFamily: UI }}>
                <Link href="/contact" className={`${styles.button} ${styles.solid} inline-flex min-h-12 max-w-full items-center justify-between gap-3 px-5 py-3`}>
                  Let&rsquo;s talk about your business<ArrowRight size={18} className="shrink-0" aria-hidden="true" />
                </Link>
                <div className="mt-1 flex flex-wrap gap-x-5">
                  <Link href="/work/a-step-above-medical" className={`${styles.link} inline-flex min-h-11 items-center gap-2 underline underline-offset-4`}>
                    See how we built it<ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                  </Link>
                  <Link href="/services/training-business-websites" className={`${styles.link} inline-flex min-h-11 items-center gap-2 underline underline-offset-4`}>
                    Websites for training businesses<ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
