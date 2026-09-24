import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CLIENT_REVIEWS, type ClientReview } from "@/data/reviews";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Proof: client words with a source. Redesign candidate, 24 Sep 2026.
// ─────────────────────────────────────────────────────────────────────────────
// Copy unchanged from SocialProof.tsx. Quotes come from reviews.ts and are
// rendered VERBATIM (`quote`, never a paraphrase), each linked to its source.
// Badges follow reviews.ts: "Unprompted" is Trustpilot's own label and is shown
// as Trustpilot's; "Verified" is Clutch's. No aggregate rating anywhere.
//
// The featured quote is Waqas Ahmed's because it is the one about the thing
// this page is selling, and it is short enough to set large without cutting.
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED = "emblematic-studio";

// Website named beside a review, ONLY where reviews.ts sets `caseStudy`, i.e.
// where the site already publishes that client relationship. Marshall James and
// James Peace have no case study, and reviews.ts is explicit that a Trustpilot
// review is not permission to name their business here.
const SITE_BY_CASE: Record<string, string> = {
  "/work/ladies-4-jesus": "Ladies 4 Jesus",
  "/work/emblematic-studio": "Emblematic Studio",
  "/work/mycustompatches": "MyCustomPatches",
};

function badge(r: ClientReview) {
  if (r.unprompted) return `${r.platform} label: Unprompted`;
  if (r.verified) return `${r.platform}: Verified review`;
  return r.platform;
}

export default function ProofSection() {
  const featured = CLIENT_REVIEWS.find((r) => r.id === FEATURED)!;
  const rest = CLIENT_REVIEWS.filter((r) => r.id !== FEATURED);

  return (
    <section aria-labelledby="proof-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2
            id="proof-title"
            className="lg:col-span-6"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            Client words with a source you can open.
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-[17px] leading-[1.6]" style={{ color: T.body }}>
              No stock portraits, rotating star theatre, or anonymous outcome claims. These are short excerpts from
              public review pages, linked so you can read the full context yourself. Four of them carry
              Trustpilot&rsquo;s own &ldquo;unprompted&rdquo; label, meaning we never asked for them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Clutch review", href: "https://clutch.co/profile/panda-code-gen#reviews" },
                { label: "Trustpilot reviews", href: "https://www.trustpilot.com/review/pandacodegen.com" },
              ].map((b) => (
                <a
                  key={b.href}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proof-btn inline-flex items-center gap-2 border px-4 py-2.5 text-[15px] font-medium"
                  style={{ borderColor: T.ink, color: T.ink }}
                >
                  {b.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Featured quote, set large. */}
        <figure className="mt-20 border-t pt-12 md:mt-28 md:pt-16" style={{ borderColor: T.rule }}>
          <blockquote
            className="max-w-[22ch]"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.2rem, 5vw, 4.6rem)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
          >
            <span aria-hidden="true" style={{ color: T.accent }}>&ldquo;</span>
            {featured.quote}
            <span aria-hidden="true" style={{ color: T.accent }}>&rdquo;</span>
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]" style={{ color: T.body }}>
            <span style={{ color: T.ink, fontWeight: 600 }}>{featured.name}</span>
            <a href={featured.href} target="_blank" rel="noopener noreferrer" style={{ color: T.accentText }}>
              {featured.platform}, {featured.date}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
              {badge(featured)}
            </span>
            {featured.caseStudy && (
              <Link href={featured.caseStudy} style={{ color: T.accentText }}>
                Website: {SITE_BY_CASE[featured.caseStudy] ?? "the project"}
              </Link>
            )}
          </figcaption>
        </figure>

        {/* The other reviews, verbatim, on a hairline grid. */}
        <ul className="mt-16 grid border-t md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: T.rule }}>
          {rest.map((r, i) => (
            <li
              key={r.id}
              className="flex flex-col justify-between gap-8 border-b py-8 md:px-6 md:first:pl-0 lg:border-b-0"
              style={{ borderColor: T.rule, borderLeft: i > 0 ? `1px solid ${T.rule}` : undefined }}
            >
              <blockquote className="text-[19px] leading-[1.5]" style={{ fontFamily: DISPLAY_SM, color: T.ink }}>
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="text-[14px]" style={{ color: T.body }}>
                <p style={{ color: T.ink, fontWeight: 600 }}>{r.name}</p>
                {r.caseStudy && SITE_BY_CASE[r.caseStudy] && (
                  <p className="mt-1">
                    <Link href={r.caseStudy} style={{ color: T.ink }}>
                      Website: {SITE_BY_CASE[r.caseStudy]}
                    </Link>
                  </p>
                )}
                <p className="mt-1">
                  <a href={r.href} target="_blank" rel="noopener noreferrer" style={{ color: T.accentText }}>
                    {r.platform}, {r.date}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                  {badge(r)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Press, and the founder-affiliated disclosure. Copy unchanged. */}
        <div className="mt-16 grid gap-10 border-t pt-10 md:grid-cols-12" style={{ borderColor: T.rule }}>
          <div className="md:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
              Featured in
            </p>
            <p className="mt-3 text-[17px] leading-[1.6]" style={{ color: T.body }}>
              <a
                href="https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "1.35rem" }}
              >
                Woman&rsquo;s World
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              quoted co-founder Hassan Jamal on how remote AI-training work operates.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
              Founder-affiliated, clearly labelled
            </p>
            <p className="mt-3 text-[20px] font-semibold" style={{ color: T.ink }}>
              Panda Patches is owned by a PandaCodeGen co-founder.
            </p>
            <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: T.body }}>
              We built its platform but hold no ownership stake. It is presented as operating experience, not as an
              independent client endorsement.
            </p>
            <Link href="/work" className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium" style={{ color: T.ink }}>
              See the project records <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .proof-btn { transition: background-color .25s ease, color .25s ease; }
        .proof-btn:hover, .proof-btn:focus-visible { background-color: ${T.ink}; color: ${T.paper} !important; }
      `}</style>
    </section>
  );
}
