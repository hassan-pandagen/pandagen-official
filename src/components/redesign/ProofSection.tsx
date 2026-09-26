import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CLIENT_REVIEWS, type ClientReview } from "@/data/reviews";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Proof: client words with a source. Redesign candidate, 24 Sep 2026.
// ─────────────────────────────────────────────────────────────────────────────
// Heading and intro changed by the owner, 24 Sep 2026: the old wording ("with a
// source you can open", "no star theatre") read as defensive. Otherwise copy
// unchanged from SocialProof.tsx. Quotes come from reviews.ts and are
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

// Same screenshots WorkIndex.tsx already uses. Only reviews with both a case
// study and a screenshot on file get the hover flip below; the other two
// reviews (no case study) keep the plain dark-invert hover.
const SITE_IMAGE_BY_CASE: Record<string, string> = {
  "/work/ladies-4-jesus": "/work/ladies-4-jesus.png",
  "/work/emblematic-studio": "/work/emblematic-studio.png",
  "/work/mycustompatches": "/work/mycustompatches.png",
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
            What our clients say.
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-[17px] leading-[1.6]" style={{ color: T.body }}>
              Short excerpts from our public review pages, linked so you can read each one in full. Four of them
              carry Trustpilot&rsquo;s own &ldquo;unprompted&rdquo; label, meaning the client left it without being
              asked.
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
          {rest.map((r, i) => {
            const siteImage = r.caseStudy ? SITE_IMAGE_BY_CASE[r.caseStudy] : undefined;
            return (
              <li
                key={r.id}
                className={`proof-card relative overflow-hidden rounded-[4px] border-b lg:border-b-0 ${siteImage ? "proof-card-flip" : ""}`}
                style={{ borderColor: T.rule, borderLeft: i > 0 ? `1px solid ${T.rule}` : undefined, perspective: "1600px" }}
              >
                <div className="proof-flip relative h-full">
                  <div className={`proof-face proof-face-front flex h-full flex-col justify-between gap-8 py-8 md:px-6 ${i === 0 ? "md:pl-0" : ""}`}>
                    <blockquote className="proof-quote text-[19px] leading-[1.5]" style={{ fontFamily: DISPLAY_SM, color: T.ink }}>
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <div className="proof-meta text-[14px]" style={{ color: T.body }}>
                      <p className="proof-name" style={{ color: T.ink, fontWeight: 600 }}>{r.name}</p>
                      {r.caseStudy && SITE_BY_CASE[r.caseStudy] && (
                        <p className="mt-1">
                          <Link href={r.caseStudy} className="proof-name" style={{ color: T.ink }}>
                            Website: {SITE_BY_CASE[r.caseStudy]}
                          </Link>
                        </p>
                      )}
                      <p className="mt-1">
                        <a href={r.href} target="_blank" rel="noopener noreferrer" className="proof-source" style={{ color: T.accentText }}>
                          {r.platform}, {r.date}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </p>
                      <p className="proof-badge mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                        {badge(r)}
                      </p>
                    </div>
                  </div>

                  {siteImage && (
                    <Link
                      href={r.caseStudy!}
                      className="proof-face proof-face-back absolute inset-0 block"
                      aria-label={`Visit the ${SITE_BY_CASE[r.caseStudy!]} website`}
                    >
                      <Image src={siteImage} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-top" />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(28,25,23,0.9), rgba(28,25,23,0) 60%)" }}
                      />
                      <span
                        className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-5 text-[15px] font-medium"
                        style={{ color: T.onDark }}
                      >
                        {SITE_BY_CASE[r.caseStudy!]}
                        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                      </span>
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
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
        .proof-card { transition: background-color .35s ease; }
        .proof-card :is(.proof-quote, .proof-name, .proof-meta, .proof-badge, .proof-source) { transition: color .35s ease; }
        .proof-card:hover, .proof-card:focus-within { background-color: ${T.dark}; }
        .proof-card:hover .proof-quote, .proof-card:focus-within .proof-quote,
        .proof-card:hover .proof-name, .proof-card:focus-within .proof-name { color: ${T.onDark} !important; }
        .proof-card:hover .proof-meta, .proof-card:focus-within .proof-meta,
        .proof-card:hover .proof-badge, .proof-card:focus-within .proof-badge { color: ${T.onDarkQuiet} !important; }
        .proof-card:hover .proof-source, .proof-card:focus-within .proof-source { color: ${T.onDarkAccent} !important; }
        .proof-card-flip .proof-flip { transition: transform .6s cubic-bezier(.2,.7,.2,1); transform-style: preserve-3d; }
        .proof-card-flip:hover .proof-flip, .proof-card-flip:focus-within .proof-flip { transform: rotateY(180deg); }
        .proof-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .proof-face-back { transform: rotateY(180deg); }
        @media (prefers-reduced-motion: reduce) { .proof-card, .proof-card *, .proof-card-flip .proof-flip { transition: none !important; } }
      `}</style>
    </section>
  );
}
