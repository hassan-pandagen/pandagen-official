import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Emblematic Studio, hero + facts pass, 28 Sep 2026. Part of applying the
// Panda Patches redesign to the rest of /work -- but not a copy of its
// section sequence. Emblematic Studio has no CMS, no storefront, no ops
// dashboard, so a walkthrough built around those chapters would just be
// wrong for this project. What it actually has, per the live /work page's
// own FAQ and schema (src/app/work/emblematic-studio/page.tsx): a single
// typed product registry driving 20 product types across 7 consumers, a
// 4-step quote form with in-memory file handling (nothing persisted), a
// GSAP-driven motion system, and exactly one runtime route on the whole
// site.
//
// Only one screenshot exists for this project (emblematic-studio.png, the
// homepage). Real chapter screenshots -- the catalogue, the quote form
// mid-flow, an animated section -- haven't been captured yet, so this page
// stops after the hero and a plain "what's built" list instead of inventing
// a walkthrough with shots that don't exist. Add the chapters once those
// exist, per CaseStudyWalkthrough.tsx's own usage note.
// ─────────────────────────────────────────────────────────────────────────────

const built = [
  {
    label: "One catalogue, one source of truth",
    body: "A single typed product registry drives all 20 product types across every place they appear -- the mega-menu, mobile nav, catalogue index, product pages, related-product cards, the quote form and the sitemap. Add a product once; everything else follows from it.",
  },
  {
    label: "A quote form that keeps nothing it doesn't need",
    body: "Four steps, with artwork upload, validated on both the browser and the server. There's no database and no object storage behind it -- the file is read into memory just long enough to attach it to one outgoing email, then it's gone.",
  },
  {
    label: "Motion that respects the reader",
    body: "The homepage's scroll-driven animation (GSAP, ScrollTrigger and related plugins) is gated off for reduced-motion preferences and lower-powered devices, not applied uniformly regardless of who's viewing.",
  },
  {
    label: "One runtime route, sitewide",
    body: "Every page is pre-rendered at build time. The only route that runs server code per request is the quote endpoint itself, because sending an email needs it -- everything else simply can't fail at request time.",
  },
];

export default function EmblematicStudioCaseStudyPreview() {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/preview/work" style={{ color: T.quiet }}>Work</Link> / Emblematic Studio / Independent client
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Emblematic Studio.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A material-led product catalogue and quote experience for a custom patch studio.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            Twenty product types generated from a single typed registry, a quote form that keeps nothing it doesn't
            need, and exactly one runtime route on the entire site.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.emblematicstudio.com"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> emblematicstudio.com (opens in a new tab)</span>
            </a>
          </div>

          <div className="mt-10">
            <Image
              src="/work/emblematic-studio.png"
              alt="The Emblematic Studio home page, showing an embroidered patch specimen alongside its vector source drawing, with the product and process navigation."
              width={1912}
              height={914}
              sizes="(min-width: 1100px) 1050px, 100vw"
              priority
              className="w-full border"
              style={{ borderColor: T.rule }}
            />
          </div>

          <RelationshipDisclosure slug="emblematic-studio" variant="editorial" />
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What&apos;s actually built.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            No traffic or ranking figures are quoted here -- the production build only became indexable on 7 August
            2026, so there isn&apos;t a meaningful search history yet. What&apos;s verifiable today is the build itself.
          </p>

          <dl className="mt-8 border-t" style={{ borderColor: T.rule }}>
            {built.map((b) => (
              <div key={b.label} className="grid gap-2 border-b py-5 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                <dt className="font-semibold md:col-span-3" style={{ color: T.ink }}>{b.label}</dt>
                <dd className="text-[14px] leading-[1.6] md:col-span-9" style={{ color: T.body }}>{b.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Need a catalogue that carries a material well?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what you make and how a buyer needs to judge it, and we&apos;ll work out what that would take.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_emblematic_studio"
              location="work_emblematic_studio"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services/custom-engineering" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Explore custom engineering services
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
