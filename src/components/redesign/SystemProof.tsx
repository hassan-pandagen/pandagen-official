import styles from "./SalesActions.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { BODY, DISPLAY, UI, T } from "@/components/redesign/tokens";

// Owner-confirmed before/after facts; no unverified savings or growth claims.
const CHANGES = [
  { before: "Enquiry form, then an emailed payment link", after: "Students book and pay online", label: "Booking & payment" },
  { before: "Nothing automatic", after: "Automatic emails with fees, dates and venue", label: "Student communication" },
  { before: "Certificates made by hand", after: "Certificates issued from the staff portal", label: "Course completion" },
  { before: "Plugin-based class schedule", after: "Classes, enrolment and payments in one portal", label: "Day-to-day operations" },
];
const review = CLIENT_REVIEWS.find((r) => r.id === "a-step-above-medical")!;

export default function SystemProof() {
  return (
    <section aria-labelledby="system-proof-title" className="px-6 pt-8 pb-16 md:px-10 md:pt-10 md:pb-24" style={{ backgroundColor: T.paper, color: T.ink }}>
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
              <p className="px-2 pt-3 pb-1 text-xs leading-relaxed" style={{ fontFamily: UI, color: T.quiet }}>Screenshot captured before launch; project now live.</p>
            </Link>
            <figure className="mt-6 border-l-[3px] py-1 pl-6" style={{ borderColor: T.accent }}>
              <blockquote className="text-[22px] leading-[1.45] md:text-[26px]" style={{ fontFamily: BODY }}>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm leading-relaxed" style={{ fontFamily: UI, color: T.body }}>
                {review.name}<br />
                <a href={review.href} target="_blank" rel="noopener noreferrer" className={`${styles.link} inline-flex min-h-11 items-center gap-2 underline underline-offset-4`}>Read the review on {review.platform}<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
              </figcaption>
            </figure>
          </div>
          <ol className="border-t" style={{ borderColor: T.rule }}>
            {CHANGES.map(({ before, after, label }, index) => (
              <li key={label} className="grid grid-cols-[2rem_1fr] gap-3 border-b py-5 md:gap-5 md:py-6" style={{ borderColor: T.rule }}>
                <span className="pt-1 text-xs" style={{ fontFamily: UI, color: T.accentText }}>0{index + 1}</span>
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.13em]" style={{ fontFamily: UI, color: T.quiet }}>{label}</p>
                  <h3 className="flex items-start gap-3 text-xl font-semibold leading-snug md:text-[23px]" style={{ fontFamily: UI }}><Check className="mt-1 h-5 w-5 shrink-0" style={{ color: T.accentText }} aria-hidden="true" />{after}</h3>
                  <p className="mt-2 pl-8 text-[15px] leading-relaxed" style={{ color: T.quiet }}>Before: {before.charAt(0).toLowerCase() + before.slice(1)}.</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-5 border-t pt-7 md:flex-row md:items-center" style={{ borderColor: T.rule }}>
          <p className="max-w-[32rem] text-xl leading-snug md:text-2xl" style={{ fontFamily: BODY }}>What could your website take off your team&rsquo;s hands?</p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold" style={{ fontFamily: UI }}>
            <Link href="/work/a-step-above-medical" className={`${styles.link} inline-flex min-h-12 items-center gap-3 underline underline-offset-4`}>See how we built it<ArrowRight size={18} aria-hidden="true" /></Link>
            <Link href="/contact" className={`${styles.button} ${styles.solid} inline-flex min-h-12 items-center justify-between gap-6 px-6 py-3`}>Let&rsquo;s talk about your business<ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
