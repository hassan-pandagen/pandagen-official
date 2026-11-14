import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { BODY, DISPLAY, MONO, T } from "@/components/redesign/tokens";

// Homepage proof block, directly under the hero (Imran's brief, 14 Nov 2026).
// The four rows are shortened from the owner-confirmed before/after table on the
// case study (confirmed 21 Oct 2026). Don't add rows or strengthen them here: no
// savings, hours or booking-growth figures until the client supplies and approves them.
const ROWS: [string, string][] = [
  ["Enquiry form, then an emailed payment link", "Students book and pay online"],
  ["Nothing automatic", "Automatic emails with fees, dates and venue"],
  ["Certificates made by hand", "Certificates issued from the staff portal"],
  ["Plugin-based class schedule", "Class schedule, enrolment and payments in one portal"],
];

const review = CLIENT_REVIEWS.find((r) => r.id === "a-step-above-medical")!;

export default function SystemProof() {
  return (
    <section aria-labelledby="system-proof-title" className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <p className="mb-5 text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>
              A Step Above Medical / Live client project
            </p>
            <h2
              id="system-proof-title"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.1rem, 4vw, 3.6rem)", lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}
            >
              From manual registrations to one training workflow.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6]" style={{ color: T.body }}>
              For A Step Above Medical, we connected the course website to online booking, payments, student
              messages and a staff portal for classes and certificates.
            </p>
            <figure className="mt-7 border-l-2 pl-5" style={{ borderColor: T.accent }}>
              <blockquote className="text-[19px] leading-[1.45]" style={{ fontFamily: BODY, fontWeight: 700, color: T.ink }}>
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[14px]" style={{ color: T.body }}>
                {review.name}, on{" "}
                <a href={review.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: T.accentText }}>
                  {review.platform}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="overflow-x-auto border" style={{ borderColor: T.rule, backgroundColor: T.paperHi }} tabIndex={0} role="region" aria-label="Before and after at A Step Above Medical">
              <table className="w-full border-collapse text-left text-[15px]">
                <thead>
                  <tr style={{ color: T.ink }}>
                    <th scope="col" className="w-1/2 p-4 font-semibold">Before</th>
                    <th scope="col" className="w-1/2 p-4 font-semibold">Now</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([before, after]) => (
                    <tr key={before} className="border-t align-top" style={{ borderColor: T.rule }}>
                      <td className="p-4 leading-relaxed" style={{ color: T.body }}>{before}</td>
                      <td className="p-4 font-semibold leading-relaxed" style={{ color: T.ink }}>{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[15px] font-semibold">
              <Link href="/work/a-step-above-medical" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4" style={{ color: T.accentText }}>
                Explore the live project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={review.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4" style={{ color: T.accentText }}>
                Read Dillon&rsquo;s review <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
