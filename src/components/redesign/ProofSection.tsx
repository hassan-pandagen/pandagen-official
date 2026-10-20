import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CLIENT_REVIEWS, type ClientReview } from "@/data/reviews";
import { BODY, DISPLAY, MONO, T, UI } from "@/components/redesign/tokens";

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
// Lead with Etoy's account of deciding to trust the team, then show Waqas's
// Emblematic Studio review beside the linked project in the review grid.
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED = "ladies-4-jesus";
const GRID_ORDER = ["emblematic-studio", "mycustompatches", "ladies-4-jesus", "marshall-james"] as const;

// Website named beside a review, ONLY where reviews.ts sets `caseStudy`, i.e.
// where the site already publishes that client relationship. Marshall James has
// no case study, and a Trustpilot review alone is not permission to name one.
const SITE_BY_CASE: Record<string, string> = {
  "/work/ladies-4-jesus": "Ladies 4 Jesus",
  "/work/emblematic-studio": "Emblematic Studio",
  "/work/mycustompatches": "MyCustomPatches",
};

// Same screenshots WorkIndex.tsx already uses. Only reviews with both a case
// study and a screenshot on file get a hover preview below; Marshall's review
// (no case study) keeps the plain dark-invert hover.
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

// Native disclosure works on touch and keyboard without a hover or JS runtime.
function ProjectPreview({ href, className = "" }: { href: string; className?: string }) {
  const image = SITE_IMAGE_BY_CASE[href];
  const name = SITE_BY_CASE[href];
  if (!image || !name) return null;
  return (
    <details className={`proof-project-preview mt-3 max-w-[36rem] ${className}`}>
      <summary className="proof-preview-toggle flex w-fit min-h-11 cursor-pointer list-none items-center justify-start gap-2 text-[14px] font-semibold" style={{ color: T.accentText }}>
        Preview {name}
        <span className="proof-preview-plus text-xl" aria-hidden="true">+</span>
      </summary>
      <Link href={href} className="proof-preview-link mt-2 block border p-3" style={{ color: T.ink, borderColor: T.rule, backgroundColor: T.paper }}>
        <span className="relative block aspect-video overflow-hidden bg-white">
          <Image src={image} alt={`${name} website preview`} fill sizes="(min-width: 1024px) 480px, 90vw" className="object-contain" />
        </span>
        <span className="mt-3 flex min-h-11 items-center justify-between gap-3 text-[15px] font-semibold">
          View the project <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </span>
      </Link>
    </details>
  );
}

export default function ProofSection() {
  const featured = CLIENT_REVIEWS.find((r) => r.id === FEATURED)!;
  const rest = GRID_ORDER.map((id) => CLIENT_REVIEWS.find((r) => r.id === id)!);

  return (
    <section aria-labelledby="proof-title" className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <h2
            id="proof-title"
            className="lg:col-span-6"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            What our <HeadingEmphasis text="clients say." />
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-[17px] leading-[1.6]" style={{ color: T.body }}>
              Short excerpts from our public review pages, linked so you can read each one in full. The
              Trustpilot reviews carry that platform&rsquo;s &ldquo;unprompted&rdquo; label.
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
        <figure data-featured-review className="mt-8 border-t pt-6 md:mt-16 md:pt-12" style={{ borderColor: T.rule }}>
          <blockquote
            className="max-w-[30ch]"
            style={{ fontFamily: BODY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.4rem, 3.6vw, 3.4rem)", lineHeight: 1.35, letterSpacing: "-0.015em", textWrap: "pretty" }}
          >
            <span aria-hidden="true" style={{ color: T.accent }}>&ldquo;</span>
            {featured.quote}
            <span aria-hidden="true" style={{ color: T.accent }}>&rdquo;</span>
          </blockquote>
          <figcaption className="mt-5 flex flex-col items-start gap-2 text-[15px] md:mt-8 md:flex-row md:flex-wrap md:items-center md:gap-x-6" style={{ color: T.body }}>
            <span style={{ color: T.ink, fontWeight: 600 }}>{featured.name}</span>
            <a className="proof-text-link" href={featured.href} target="_blank" rel="noopener noreferrer" style={{ color: T.accentText }}>
              {featured.platform}, {featured.date}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="text-[12px] font-semibold uppercase leading-relaxed tracking-[0.06em]" style={{ fontFamily: MONO, color: T.body }}>
              {badge(featured)}
            </span>
            {featured.caseStudy && (
              <Link className="proof-text-link inline-flex min-h-11 items-center gap-2 font-semibold" href={featured.caseStudy} style={{ color: T.accentText }}>
                Website: {SITE_BY_CASE[featured.caseStudy] ?? "the project"}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </figcaption>
          {featured.caseStudy && <ProjectPreview href={featured.caseStudy} />}
        </figure>

        {/* Four compact reviews in the requested order. Etoy also appears above
            as the featured quote, and her card links to the project image. */}
        <ul className="mt-8 grid border-t md:mt-12 md:grid-cols-2 xl:grid-cols-4" style={{ borderColor: T.rule }}>
          {rest.map((r, i) => {
            const siteImage = r.caseStudy ? SITE_IMAGE_BY_CASE[r.caseStudy] : undefined;
            return (
              <li
                key={r.id}
                className={`proof-card relative overflow-hidden rounded-[4px] border-b xl:border-b-0 ${siteImage ? "proof-card-flip" : ""}`}
                style={{ borderColor: T.rule }}
              >
                <div className="proof-flip relative h-full">
                  <div className={`proof-face proof-face-front flex h-full flex-col justify-between gap-5 py-6 md:gap-8 md:px-8 md:py-8 ${i === 0 ? "md:pl-0" : i % 2 === 0 ? "md:pl-0 xl:pl-8" : ""}`}>
                    <blockquote className="proof-quote text-[19px] leading-[1.5]" style={{ fontFamily: BODY, color: T.ink }}>
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <div className="proof-meta text-[15px]" style={{ fontFamily: UI, color: T.body }}>
                      <p className="proof-name" style={{ color: T.ink, fontWeight: 600 }}>{r.name}</p>
                      {r.caseStudy && SITE_BY_CASE[r.caseStudy] && (
                        <p className="mt-1">
                          <Link href={r.caseStudy} className="proof-name proof-text-link inline-flex min-h-11 items-center gap-2" style={{ color: T.ink }}>
                            Website: {SITE_BY_CASE[r.caseStudy]}
                            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </Link>
                        </p>
                      )}
                      <p className="mt-1">
                        <a href={r.href} target="_blank" rel="noopener noreferrer" className="proof-source" style={{ color: T.accentText }}>
                          {r.platform}, {r.date}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </p>
                      <p className="proof-badge mt-2 text-[12px] font-semibold uppercase leading-relaxed tracking-[0.06em]" style={{ fontFamily: MONO, color: T.body }}>
                        {badge(r)}
                      </p>
                      {r.caseStudy && <ProjectPreview href={r.caseStudy} className="proof-touch-preview" />}
                    </div>
                  </div>

                  {siteImage && (
                    <Link
                      href={r.caseStudy!}
                      className="proof-face proof-face-back absolute inset-0 flex flex-col gap-4 p-4"
                      style={{ backgroundColor: T.paper, color: T.ink }}
                    >
                      <span className="relative block w-full shrink-0 overflow-hidden border border-[#1C1917]/15 bg-white aspect-video">
                        <Image src={siteImage} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain" />
                      </span>
                      <span className="mt-auto block border-t border-[#1C1917]/20 pt-4">
                        <span className="block text-[10px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.accentText }}>Client project</span>
                        <span className="mt-2 flex items-center justify-between gap-3 text-[17px] font-semibold">
                          {SITE_BY_CASE[r.caseStudy!]}
                          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                        </span>
                      </span>
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Publication links and the founder-affiliated disclosure. */}
        <div data-proof-notes className="mt-6 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-10 lg:border-t lg:pt-10" style={{ borderColor: T.rule }}>
          <div className="md:col-span-5">
            <p className="proof-note-label text-[13px] font-bold uppercase leading-relaxed tracking-[0.08em]" style={{ fontFamily: MONO, color: T.ink }}>
              Featured in
            </p>
            <div className="mt-4 grid gap-3">
              {[
                { name: "CIO Grid", href: "https://ciogrid.com/qa/how-it-leaders-decide-when-to-modernize-aging-systems/", topic: "when to modernize aging systems" },
                { name: "Woman\u2019s World", href: "https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay", topic: "how remote AI-training work operates" },
              ].map((publication) => (
                <a
                  key={publication.name}
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-l-[3px] p-5 no-underline transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
                  style={{ borderColor: T.accentText, backgroundColor: T.paperHi, outlineColor: T.accentText }}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-[28px] leading-[1.1] group-hover:underline group-focus-visible:underline underline-offset-4" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accentText }}>
                      {publication.name}
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0" style={{ color: T.accentText }} aria-hidden="true" />
                  </span>
                  <span className="mt-2 block text-[16px] leading-[1.6]" style={{ color: T.body }}>
                    Quoted co-founder Hassan Jamal on {publication.topic}.
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="proof-note-label text-[13px] font-bold uppercase leading-relaxed tracking-[0.08em]" style={{ fontFamily: MONO, color: T.ink }}>
              Founder-affiliated, clearly labelled
            </p>
            <p className="mt-3 text-[20px] font-semibold" style={{ color: T.ink }}>
              Panda Patches is owned by a PandaCodeGen co-founder.
            </p>
            <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: T.body }}>
              We built its platform but hold no ownership stake. It is presented as operating experience, not as an
              independent client endorsement.
            </p>
            <Link href="/work" className="proof-records-link mt-4 inline-flex items-center gap-2 border-b border-transparent pb-1 text-[15px] font-medium" style={{ color: T.ink }}>
              See the project records <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .proof-btn { transition: background-color .25s ease, color .25s ease; }
        .proof-btn:hover, .proof-btn:focus-visible { background-color: ${T.ink}; color: ${T.paper} !important; }
        .proof-records-link { transition: color .25s ease, border-color .25s ease; }
        .proof-records-link svg { transition: transform .25s ease; }
        .proof-records-link:hover, .proof-records-link:focus-visible { color: ${T.accentText} !important; border-color: currentColor; }
        .proof-records-link:hover svg, .proof-records-link:focus-visible svg { transform: translateX(4px); }
        .proof-text-link { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; }
        .proof-text-link:hover, .proof-text-link:active { color: ${T.accentText} !important; }
        .proof-text-link:focus-visible, .proof-preview-toggle:focus-visible, .proof-preview-link:focus-visible { outline: 2px solid ${T.accentText}; outline-offset: 4px; }
        .proof-preview-toggle::-webkit-details-marker { display: none; }
        .proof-project-preview[open] .proof-preview-plus { transform: rotate(45deg); }
        .proof-card { transition: background-color .35s ease; }
        .proof-card :is(.proof-quote, .proof-name, .proof-meta, .proof-badge, .proof-source) { transition: color .35s ease; }
        .proof-meta p { font-family: ${UI}; }
        .proof-face-back { visibility: hidden; opacity: 0; transition: opacity .25s ease; }
        @media (min-width: 768px) { .proof-card:nth-child(even) { border-left: 1px solid ${T.rule}; } }
        /* 13 Oct 2026: four columns from 1280px; at 1024px a quote column was only ~170px wide. */
        @media (min-width: 1280px) { .proof-card + .proof-card { border-left: 1px solid ${T.rule}; } }
        /* Touch uses the native disclosure. A flat desktop overlay avoids
           mirrored WebKit text and keeps keyboard project links stable. */
        @media (hover: hover) and (pointer: fine) {
          .proof-touch-preview { display: none; }
          .proof-card:hover { background-color: ${T.dark}; }
          .proof-card:hover .proof-quote, .proof-card:hover .proof-name { color: ${T.onDark} !important; }
          .proof-card:hover .proof-meta, .proof-card:hover .proof-badge { color: ${T.onDarkQuiet} !important; }
          .proof-card:hover .proof-source { color: ${T.onDarkAccent} !important; }
          .proof-card-flip:hover .proof-face-front, .proof-card-flip:has(.proof-face-back:focus-visible) .proof-face-front { visibility: hidden; }
          .proof-card-flip:hover .proof-face-back, .proof-card-flip:has(.proof-face-back:focus-visible) .proof-face-back { visibility: visible; opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) { .proof-card, .proof-card *, .proof-card-flip .proof-flip, .proof-records-link, .proof-records-link svg { transition: none !important; } }
      `}</style>
    </section>
  );
}
