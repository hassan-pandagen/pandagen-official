import PortalWorkflow from "@/components/redesign/case-study/PortalWorkflow";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import WorkCaseOpening from "@/components/redesign/case-study/WorkCaseOpening";
import WorkCasePreview from "@/components/redesign/case-study/WorkCasePreview";
import WorkCaseFacts from "@/components/redesign/case-study/WorkCaseFacts";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import PandaPatchesWalkthrough from "@/components/redesign/case-study/PandaPatchesWalkthrough";
import { requiredMetric } from "@/data/case-study-facts";
import { MIGRATION_PROJECT_DETAILS, PAYMENT_INTEGRATION_SCOPE } from "@/data/migration-projects";
import { BODY, DISPLAY, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Panda Patches case study, rebuild 2, 27 Sep 2026. The first pass (same day)
// reskinned the old page's card-grid structure in the new colours -- that's
// the mistake this rebuild corrects. Repainting a grid of icon-boxes cognac
// doesn't change the template rhythm underneath; the rest of this redesign's
// identity is typography + imagery + interaction working together, and this
// page had none of the third thing. See REDESIGN_ROLLOUT_PLAN_2026-09-26.md.
// ─────────────────────────────────────────────────────────────────────────────
// Evidence pass before writing a word of copy, per the owner's brief:
//
// 1. IMAGES. Only two pre-existing screenshots exist for this project:
//    panda-patches.png (storefront homepage) and enterprise-ops.png (ops
//    dashboard, already redacted). No screenshot existed for the calculator
//    mid-flow, checkout, the customer portal, or the Sanity editor -- so
//    three new ones were taken live, 27 Sep 2026:
//      - panda-patches-calculator-configure.png / -submit.png: walked the
//        real calculator on pandapatches.com/custom-patches/embroidered.
//        Did NOT click "Check Best Prices" with test data -- that submits a
//        real name/email into the live lead system.
//      - panda-patches-editor.png: a real Sanity Studio screenshot, supplied
//        directly by the owner (cropped here to remove browser chrome). Shows
//        the "Home - Process Section" content type -- plain marketing copy,
//        no customer or financial data in frame.
//    Checkout and the customer portal still have no screenshot. Per the
//    brief's own rule ("use one strong static image until [screenshots are]
//    available" / "only where supported"), both are described in text below,
//    not illustrated.
//
// 2. RECONCILED CLAIMS, not copied from the old page:
//    - The old page said "16,000 patches" for the Wise Nasdaq activation.
//      Checked the live, dated case study at pandapatches.com/case-studies/
//      wise-nasdaq-times-square-activation: it says 9,600 woven patches
//      across 16 designs, delivered 4-7 May 2026. The old figure appears to
//      have conflated the design count with a patch count. Corrected here.
//    - The old page said the calculator shows "the exact price instantly...
//      no forms, no waiting" and "the calculator is the checkout." Walked it
//      live: it's a real, working configurator (backing, shape, border,
//      size, quantity), but the actual next step asks for Name and Email
//      before "Check Best Prices" -- no price renders on screen for a given
//      configuration. That's a materially different claim from "instant, no
//      forms," so the copy below describes what the calculator actually
//      does: configure precisely, then send it for a price.
//    - $55/mo tooling cost, 7-to-1 tools replaced, and the SEO/page-count
//      figures are NOT in case-study-facts.json's guarded metrics (only
//      monthly revenue is) -- they're prose the old page typed directly.
//      Kept here because nothing contradicts them and no better source
//      exists to check them against, but they're deliberately placed in a
//      secondary position (tech stack, not the opening) rather than
//      re-asserted as freshly verified.
//
// 3. WORKFLOW. The brief suggested Enquiry -> Quote -> Payment -> Production
//    -> Delivery. The live calculator walkthrough actually supports this
//    exactly: submitting the configurator IS the enquiry (a specific
//    configuration + contact details, not yet a price), and "Check Best
//    Prices" is the team returning a quote -- there is no instant on-screen
//    quote step to collapse it with. Used as suggested.
//
// Not applied to other case studies yet. This is one page, done properly;
// reusable pieces (the toggle, the disclosure, the section rhythm) get
// extracted once this one is confirmed to work, not before.
//
// JSON-LD omitted, matching every other /preview page: this is noindex at a
// different URL than the canonical /work/panda-patches, so schema pointing
// at that URL would be wrong until this page actually replaces it. The old
// page's schema (Article, Organization, FAQPage, and the 11 Aug 2026 note on
// why no Product node exists) carries over unchanged at that point.
// ─────────────────────────────────────────────────────────────────────────────

const REVENUE = requiredMetric("panda-patches", "monthly-revenue");

const techStack = [
  { name: "Next.js 16 + React 19", role: "Frontend and API routes" },
  { name: "Sanity CMS", role: "Structured content models, the team edits content without a developer" },
  { name: "Supabase", role: "Database, authentication, storage buckets and Edge Functions, shared with the operations platform" },
  { name: "Square", role: "Checkout, Apple/Google Pay, Cash App, Afterpay" },
  { name: "fal.ai (FLUX.1 [schnell])", role: "AI patch mockup generator" },
  { name: "Meta CAPI, GA4/GTM, Google Ads", role: "Server-side conversion tracking" },
  { name: "ZeptoMail", role: "Order and abandoned-cart email" },
  { name: "Vercel", role: "Hosting, CDN and cron" },
];

const fullScope = [
  "9 product category pages (embroidered, woven, PVC, chenille, leather, silicone, printed, sequin, 3D)",
  "4 additional product pages (lapel pins, challenge coins, keychains, PVC shoe charms)",
  "Configurator with backing, shape, border, size and quantity, feeding a quote request",
  "Square checkout: card, Apple Pay, Google Pay, Cash App Pay, Afterpay BNPL",
  "AI patch generator (fal.ai) with a prompt pipeline and abuse-blocking rules",
  "Free embroidery tools: thread colour chart with logo colour matching, DST and PES viewers, a DST and PES converter, a stitch count calculator",
  "Customer portal: Supabase auth, order history, tracking, one-click reorder",
  "Server-side conversion stack: Meta CAPI, GA4/GTM, Google Ads, Pinterest, Bing, an OpenAI pixel",
  "Two-stage abandoned-cart recovery (email at 30 min, then 24h with a code)",
  "~30 SEO/AEO landing pages plus an /ai-info answer hub, llms.txt, hreflang, IndexNow",
  "Sanity CMS, structured content edited without code",
  "63-post blog library feeding the topical cluster",
  "Supabase ops portal: order pipeline, sales dashboards, clock in/out, role-based access, full audit log",
  "Responsive storefront with a touch-friendly configuration flow",
];

// The six free tools on pandapatches.com, each opened live on 13 Oct 2026. The
// descriptions say only what each page itself shows.
const pandaTools = [
  { name: "Thread colour chart", href: "https://www.pandapatches.com/thread-color-chart", does: "719 thread codes, searchable by code, Pantone or hex. Drop in a logo and it suggests matching thread codes, working on the visitor's own device; the image is never uploaded." },
  { name: "DST file viewer", href: "https://www.pandapatches.com/tools/dst-viewer", does: "Opens a Tajima DST embroidery file and shows the stitch pattern, size, stitch count and colour blocks." },
  { name: "PES file viewer", href: "https://www.pandapatches.com/tools/pes-viewer", does: "Opens a Brother PES file and shows the design with its thread colour names, size and stitch count." },
  { name: "DST and PES converter", href: "https://www.pandapatches.com/tools/dst-pes-converter", does: "Converts between Tajima DST and Brother PES in both directions, downloaded straight to the visitor's device." },
  { name: "Stitch count calculator", href: "https://www.pandapatches.com/tools/stitch-count-calculator", does: "Estimates stitches from size, coverage and detail, or counts them exactly from an uploaded file, then prices the patch from the live pricing engine." },
  { name: "AI patch generator", href: "https://www.pandapatches.com/ai-patch-generator", does: "Turns a description into a patch concept in a chosen shape, style and border, using the FLUX.1 [schnell] model through fal.ai. A designer then prepares the real production mockup." },
];

export function PandaPatchesCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <div className="panda-story">
      {/* Natural page flow surrounds one connected product walkthrough. */}

      {/* ── 1. Opening ────────────────────────────────────────────────── */}
      <div className="story-block">
        <WorkCaseOpening>
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Panda Patches / Founder-affiliated
          </p>

          <WorkCaseTitle>Panda Patches</WorkCaseTitle>
          <p className="mt-3 text-sm" style={{ color: T.body }}>Case study updated <time dateTime={MIGRATION_PROJECT_DETAILS.pandaPatches.contentUpdatedOn}>October 30, 2026</time></p>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: BODY, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A custom-patch storefront connected to the team&apos;s order-management system.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            A 3-year-old WordPress store, rebuilt with a patch configurator, an editor the team controls,
            and a connected system for orders, production and payments.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://pandapatches.com"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> pandapatches.com (opens in a new tab)</span>
            </a>
          </div>

          <WorkCasePreview src="/work/panda-patches.png" alt="Panda Patches storefront preview. Explore the complete build below." width={1912} height={914} caption="Explore the website, editor & operations / Founder-affiliated" href="#panda-walkthrough" />
          <WorkCaseFacts items={[
            { label: "Revenue today", value: `${REVENUE} (owner-reported, 20 Sep 2026)` },
            { label: "Migration", value: "3-year-old site, no ranking losses in the 30 days after launch" },
            { label: "Payments", value: MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory },
          ]} />

          <RelationshipDisclosure slug="panda-patches" variant="editorial" />
      </WorkCaseOpening>
      </div>

      <PandaPatchesWalkthrough />

      {/* ── 5. Results, consolidated ───────────────────────────────────── */}
      <div className="story-block">
        <section className="story-section px-6 pb-10 pt-28 md:px-10" style={{ backgroundColor: T.paperHi }}>
          <div className="mx-auto max-w-[1100px]">
            <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>04</span>
            <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
              The business behind the build.
            </h2>
            <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
              Panda Patches is founder-affiliated: owned and operated by co-founder Imran Raza Ladhani, who holds a
              stake in both companies. These are first-party, owner-reported figures about the business, not
              independent client proof, and revenue is business context here, not a result attributed to the rebuild.
            </p>

            <dl className="mt-6 border-t" style={{ borderColor: T.rule }}>
              {[
                { term: "Revenue", detail: `${REVENUE}. Owner-reported, 20 September 2026.` },
                { term: "Search rankings", detail: "No ranking losses recorded in Google Search Console during the 30 days after launch. Full URL export, 301 redirects and a fresh sitemap preceded the cutover." },
                { term: "Wise / Nasdaq activation", detail: "9,600 woven patches across 16 designs, delivered in two shipments (4 and 7 May 2026) for Wise's Nasdaq listing activation in Times Square, ordered, produced and tracked through this platform." },
                { term: "Independent reputation", detail: "Customer reviews are available on Trustpilot. Panda Patches reports more than one million patches delivered historically; that is a business figure, not an independent platform measurement." },
              ].map((r) => (
                <div key={r.term} className="grid gap-2 border-b py-4 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                  <dt className="font-semibold md:col-span-3" style={{ color: T.ink }}>{r.term}</dt>
                  <dd className="text-[14px] leading-[1.55] md:col-span-9" style={{ color: T.body }}>{r.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      {/* ── 6. Tech stack, secondary ───────────────────────────────────── */}
      <div className="story-block">
        <section className="story-section px-6 pb-10 pt-28 md:px-10" style={{ backgroundColor: T.paper }} aria-labelledby="panda-stack-title">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.quiet }}>05</p>
            <h2 id="panda-stack-title" className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
              Technology <span style={{ color: T.accent }}>stack.</span>
            </h2>
            <p className="mt-4 max-w-[40rem] text-[14px] leading-[1.55]" style={{ color: T.quiet }}>
              {PAYMENT_INTEGRATION_SCOPE} The owner estimates current tooling at about $55/month (Supabase ~$25, Vercel
              ~$20, ~$10 for the AI patch generator). That&apos;s an owner estimate, not a reconciled accounting total.{" "}
              {MIGRATION_PROJECT_DETAILS.pandaPatches.aiGeneratorCost}
            </p>
            <div className="mt-4 border-t" style={{ borderColor: T.rule }}>
              {techStack.map((t) => (
                <div key={t.name} className="grid gap-1 border-b py-2.5 md:grid-cols-12 md:gap-6" style={{ borderColor: T.rule }}>
                  <span className="text-[14px] font-medium md:col-span-4" style={{ color: T.ink }}>{t.name}</span>
                  <span className="text-[13px] md:col-span-8" style={{ color: T.quiet }}>{t.role}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[48rem]">
              <h3 className="text-[20px] font-semibold" style={{ color: T.ink }}>The Supabase backend behind the storefront.</h3>
              <p className="mt-3 text-[16px] leading-[1.65]" style={{ color: T.body }}>{MIGRATION_PROJECT_DETAILS.pandaPatches.supabaseScope}</p>
              <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: T.quiet }}>{MIGRATION_PROJECT_DETAILS.pandaPatches.edgeFunctionsRecord}</p>
              <Link href="/work/enterprise-ops" className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium underline underline-offset-4" style={{ color: T.accent }}>
                Explore the Panda Patches CRM <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <details className="mt-5">
              <summary className="cursor-pointer text-[13px] font-medium" style={{ color: T.body }}>
                The full build scope ({fullScope.length} items)
              </summary>
              <ul className="mt-3 space-y-1.5">
                {fullScope.map((item) => (
                  <li key={item} className="text-[13px] leading-[1.5]" style={{ color: T.quiet }}>· {item}</li>
                ))}
              </ul>
            </details>
          </div>
        </section>
      </div>

      {/* ── 6b. Free tools on the store (each opened live 13 Oct 2026) ─────── */}
      <div className="story-block">
        <section className="story-section px-6 pb-10 pt-28 md:px-10" style={{ backgroundColor: T.paperHi }} aria-labelledby="panda-tools-title">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.quiet }}>06</p>
            <h2 id="panda-tools-title" className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
              Free tools on the <span style={{ color: T.accent }}>store.</span>
            </h2>
            <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.body }}>
              Alongside the shop we built six free tools for people working with embroidery files and patch designs.
              The file viewers, the stitch calculator and the AI generator each lead to a patch price or a quote.
            </p>
            <div className="mt-6 border-t" style={{ borderColor: T.rule }}>
              {pandaTools.map((tool) => (
                <div key={tool.href} className="grid gap-1 border-b py-3 md:grid-cols-12 md:gap-6" style={{ borderColor: T.rule }}>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium underline underline-offset-4 md:col-span-4"
                    style={{ color: T.accentText }}
                  >
                    {tool.name}
                    <span className="sr-only"> (opens pandapatches.com in a new tab)</span>
                  </a>
                  <span className="text-[14px] leading-[1.5] md:col-span-8" style={{ color: T.body }}>{tool.does}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-[42rem] text-[13px] leading-[1.55]" style={{ color: T.quiet }}>
              {MIGRATION_PROJECT_DETAILS.pandaPatches.aiGeneratorCost} All six were checked live on 13 October 2026.
            </p>
          </div>
        </section>
      </div>

      <PortalWorkflow project="patches" />
      <CaseStudyFaqs faqs={faqs} />

      {/* ── 7. Next step ────────────────────────────────────────────────── */}
      <div className="story-block">
        <section className="story-section px-6 pb-10 pt-28 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
          <div className="mx-auto max-w-[1100px]">
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
              Need your website and order workflow to work together?
            </h2>
            <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
              Most sites stop at the storefront. This one hands off into the system the team actually runs orders
              through. Tell us where yours breaks down, and we&apos;ll work out what that would take.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuoteModalButton
                cta="case_study_panda_patches"
                location="work_panda_patches"
                className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
              >
                Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </QuoteModalButton>
              <Link href="/services/ecommerce" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
                Explore e-commerce services
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        /* Vertical rhythm for the sections outside the walkthrough (
           results, stack, next step) -- generous, consistent top/bottom
           padding so each reads as its own beat in the page's scroll. */
        .panda-story .story-block { position: relative; }
        .panda-story .story-section { padding-top: clamp(4rem, 8vw, 7rem); padding-bottom: clamp(4rem, 8vw, 7rem); }
        @media (max-width: 767px) { .panda-story .story-section { padding-top: 2rem; padding-bottom: 1.5rem; } }
      `}
      </style>
      </div>
    </PreviewShell>
  );
}
