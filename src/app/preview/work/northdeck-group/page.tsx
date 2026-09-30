import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// NorthDeck Group, hero + facts pass, 28 Sep 2026. Built from the project's
// own repo (C:\Projects\Northdeckgroup), not guessed from the live site
// alone: README.md, package.json and the actual page.tsx source, which is
// the more reliable source since the live site's footer phone number
// (+1 701 234-4234) doesn't match the one in the repo's lib/company-facts.ts
// (+1 307 445-9643) -- worth a redeploy check, but not this page's problem
// to resolve.
//
// The one fact that shapes this whole page: README.md states plainly that
// the homepage's "Design scenario" section is a labelled REPRESENTATIVE
// study, not a real client result --
//   "It describes NorthDeckGroup's design method and intended system
//    outcome; it does not claim a client identity, project result,
//    location, certification, or performance metric."
// The live page repeats this in three separate places (the intro copy, an
// "ILLUSTRATIVE COVERAGE STUDY / NOT A LIVE FEED" caption, and a closing
// disclaimer). So this page describes that section as what it is -- an
// illustrative design walkthrough NorthDeckGroup uses to show its process
// -- and never as a proof point or a real deployment.
//
// No CMS, no database, no backend: README.md states "no required runtime
// environment variables, database, authentication, storage, CMS,
// analytics, or third-party API keys in the current build." A static,
// code-driven marketing site, same shape as Emblematic Studio.
//
// Deliberately does NOT use RelationshipDisclosure / case-study-facts.json
// -- no entry exists yet for this slug, and adding one now (without a live
// /work page to match) would trip link_guard.py's "case-study-not-built"
// check the same way it would have for A Step Above Medical. The sentence
// below matches the disclosure wording already established for Emblematic
// Studio, MyCustomPatches and Ladies 4 Jesus verbatim.
// ─────────────────────────────────────────────────────────────────────────────

const built = [
  {
    label: "Two businesses, one connected site",
    body: "NorthDeckGroup runs connected security systems (CCTV, access control, intrusion detection, intercom & entry, system care) alongside a 12-service back-office and BPO practice across operations, finance & compliance, and customer & digital. The site carries both without either reading like an afterthought.",
  },
  {
    label: "Real photography, self-hosted type, no CMS",
    body: "Built on Next.js 16, with real editorial photography and locally served fonts (Instrument Sans, Instrument Serif, IBM Plex Mono) rather than a font CDN. Per the project's own README, there's no database, authentication, storage, CMS or third-party API key in the build -- content lives in code.",
  },
  {
    label: "Motion that explains the system, not just decorates it",
    body: "Interactive system-layer panels (video, access, intrusion, intercom, system care) and a five-step tabbed walkthrough of how an incident is handled, from detect to respond, built with the `motion` library -- used to walk a visitor through how the pieces connect, not as ambient decoration. Every animation switches off for visitors who have reduced motion turned on.",
  },
  {
    label: "A design scenario, labelled as one",
    body: "The homepage's \u201cDesign scenario\u201d section is an illustrative walkthrough of NorthDeckGroup's own design method for a logistics property -- marked throughout as a representative study, not a real deployment. Its own copy states plainly that client identity, site data, project photography, measured results and testimonial evidence \u201cwill only be published when they are supplied and approved.\u201d",
  },
];

export function NorthDeckGroupCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / NorthDeck Group / Independent client
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            NorthDeck Group.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A motion-led site for a connected security and back-office services company.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            NorthDeckGroup designs and installs connected CCTV, access and intrusion systems, and separately runs a
            back-office services practice. The site had to carry both without either one reading like filler.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.northdeckgroup.com"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> northdeckgroup.com (opens in a new tab)</span>
            </a>
          </div>

          <div className="mt-10">
            <Image
              src="/work/northdeck-group-hero.png"
              alt="The NorthDeckGroup home page hero: a security camera installation with an overlaid 'You're already in frame' headline and a call to request a security assessment."
              width={1912}
              height={914}
              sizes="(min-width: 1100px) 1050px, 100vw"
              priority
              className="w-full border"
              style={{ borderColor: T.rule }}
            />
          </div>

          <aside data-relationship-disclosure className="my-8 border-t border-stone-400/30 pt-5">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-stone-600">Relationship disclosure</p>
            <p className="max-w-[65rem] text-sm leading-relaxed text-stone-700">
              Independent client. PandaCodeGen has no ownership or financial stake in the business.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What&apos;s actually built.
          </h2>

          <div className="mt-8">
            <Image
              src="/work/northdeck-group-services.png"
              alt="The NorthDeckGroup services page showing four of the site's twelve back-office and BPO service cards: Chat & Call Support, Digital Marketing, Web Development and App Development."
              width={1912}
              height={914}
              sizes="(min-width: 1100px) 1050px, 100vw"
              className="w-full border"
              style={{ borderColor: T.rule }}
            />
          </div>

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

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Selling more than one thing on one site?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what the different parts of your business actually do, and we&apos;ll work out how to give each
            one its due without the site feeling split in two.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_northdeck_group"
              location="work_northdeck_group"
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

// A page component cannot take custom props (the production type check
// rejects them), so the design above is a named export the live
// /work/northdeck-group route renders with its FAQs, and this default export is the
// preview route itself.
export default function Page() {
  return <NorthDeckGroupCaseStudyPreview />;
}
