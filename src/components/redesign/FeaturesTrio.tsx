import Link from "next/link";
import WrittenCheckButton from "@/components/ui/WrittenCheckButton";
import { ArrowRight } from "lucide-react";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// Homepage automation examples: customer questions with concrete trigger/result
// pairs. The service FAQ shares the same copy for fuller scoping answers.
//
// 21 Nov 2026, Imran's decisions: on the homepage the four feature cards become the
// owner's checklist (founder brief, business-checklist-v2.md). Each line is a problem
// the owner can check in their own week, so the section makes no claim about other
// businesses. businessFeatures stays as the service FAQ's source; only this section
// stops rendering it. Review requests stay off the list until a client has them live.
const CHECKLIST = [
  { problem: "Customers call or text to ask if you're free on Tuesday.", answer: "They see live times, then book and pay on your site, day or night." },
  { problem: "You chase deposits and payments.", answer: "Payment is taken when they book, and the receipt goes out on its own." },
  { problem: "People forget, don't show up, or ask what to bring.", answer: "Confirmations, reminders and follow-ups send themselves, with the date, the venue and what to bring." },
  { problem: "You type the same emails every week.", answer: "Welcome, reminder, certificate and thank-you messages are written once and sent automatically." },
  { problem: "Ask ChatGPT who's the best in your field in your city. Did it name you?", answer: "Every build is set up so ChatGPT and Google's AI can read and quote your answers." },
  { problem: "You copy payments into your books by hand.", answer: "Payments sync to QuickBooks." },
  { problem: "Changing your website means waiting for a developer.", answer: "You edit your own pages, and your accounts are in your name." },
  // 21 Nov 2026: the migration line, after the 58-buyer test (migration buyers asked how links and rankings are protected).
  { problem: "Your site is slow or breaks after updates, and moving it feels risky.", answer: "We move it off WordPress, Wix, Squarespace or Shopify with a redirect for every old URL, so your pages, posts and links keep working." },
];

export default function FeaturesTrio() {
  return (
    <section aria-labelledby="features-title" className="px-6 pb-6 pt-10 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>
              A quick check
            </p>
            <h2
              id="features-title"
              className="max-w-[36ch]"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.3rem, 4.6vw, 4.4rem)", lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}
            >
              Is your website costing you customers?
            </h2>
          </div>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
            Count how many of these happen in your business. Two or more is time and customers your website could be saving you.
          </p>
        </div>

        <ol className="feature-grid mt-6 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-0 md:border-t lg:grid-cols-4" style={{ borderColor: T.rule }}>
          {CHECKLIST.map((c, i) => (
            <li
              key={c.problem}
              className="feature-col relative flex min-w-0 flex-col border-b px-5 py-6 md:border-l md:px-7 md:pb-10 md:pt-8 md:first:border-l-0 lg:pb-12 lg:pt-10"
              style={{ borderColor: T.rule }}
            >
              <span className="feature-num" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accent, fontSize: "2.8rem", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.3rem", lineHeight: 1.3, textWrap: "pretty" }}>
                {c.problem}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: T.body }}>
                <strong style={{ fontFamily: MONO, color: T.ink }}>What we build:</strong> {c.answer}
              </p>
            </li>
          ))}
        </ol>

        {/* 14 Nov 2026: the A Step Above Medical card moved to SystemProof, directly
            above this section on the homepage. */}
        <div className="mt-8 border-t pt-6" style={{ borderColor: T.rule }}>
          <div className="max-w-[44rem]">
            <p className="text-[14px] font-semibold" style={{ color: T.accentText }}>Panda Patches / Founder-affiliated</p>
            <p className="mt-2 text-[16px] leading-[1.65]" style={{ color: T.body }}>
              Wholesale orders become invoices and payment links. The connected CRM tracks production, payments and delivery follow-up.
            </p>
            <Link href="/work/enterprise-ops" className="mt-3 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline underline-offset-4" style={{ color: T.accentText }}>
              See these workflows in Panda Patches <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div data-feature-costs className="mt-6 grid gap-6 md:mt-12 md:grid-cols-12 md:gap-8 md:pt-8">
          <p className="max-w-[46rem] text-[16px] leading-[1.7] md:col-span-8" style={{ color: T.body }}>
            Our free written check goes through each line for your business: what you do by hand today, what could run on its own, and what it would cost. No commitment.
          </p>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
            <WrittenCheckButton location="home_checklist" className="cta-solid inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium bg-[#1C1917] text-[#EBE9E4]">
              Get your free written check <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </WrittenCheckButton>
            <Link href="/services/custom-engineering" className="text-[15px] font-medium" style={{ color: T.ink }}>
              Explore custom workflow automation
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .feature-col { transition: background-color .3s ease, box-shadow .3s ease, transform .3s ease; }
        .feature-col:hover, .feature-col:focus-within {
          background-color: #fff;
          box-shadow: inset 0 4px 0 ${T.accent}, 0 18px 25px rgba(28,25,23,.1);
          transform: translateY(-4px);
        }
        .feature-num { transition: color .3s ease; }
        .feature-col:hover .feature-num, .feature-col:focus-within .feature-num { color: ${T.ink}; }
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (max-width: 767px) {
          .feature-col { background-color: #fff; border-top: 3px solid ${T.accent}; }
          .feature-num { font-size: 2rem !important; }
        }
        @media (hover: none), (pointer: coarse) {
          .feature-col:hover { transform: none; box-shadow: none; }
        }
        @media (prefers-reduced-motion: reduce) { .feature-col, .feature-num, .cta-solid { transition: none; } .feature-col:hover, .feature-col:focus-within { transform: none; } }
      `}</style>
    </section>
  );
}
