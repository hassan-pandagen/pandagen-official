import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import CalculatorToggle from "@/components/redesign/case-study/CalculatorToggle";
import EditorScrollDeck from "@/components/redesign/case-study/EditorScrollDeck";
import { requiredMetric } from "@/data/case-study-facts";
import { MIGRATION_PROJECT_DETAILS, PAYMENT_INTEGRATION_SCOPE } from "@/data/migration-projects";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

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
  { name: "Sanity CMS", role: "25 document types, the team edits content without a developer" },
  { name: "Supabase", role: "Database, auth and storage, shared with the operations platform" },
  { name: "Square", role: "Checkout, Apple/Google Pay, Cash App, Afterpay" },
  { name: "FAL (Flux Schnell)", role: "AI patch mockup generator" },
  { name: "Meta CAPI, GA4/GTM, Google Ads", role: "Server-side conversion tracking" },
  { name: "ZeptoMail", role: "Order and abandoned-cart email" },
  { name: "Vercel", role: "Hosting, CDN and cron" },
];

const fullScope = [
  "9 product category pages (embroidered, woven, PVC, chenille, leather, silicone, printed, sequin, 3D)",
  "4 additional product pages (lapel pins, challenge coins, keychains, PVC shoe charms)",
  "Configurator with backing, shape, border, size and quantity, feeding a quote request",
  "Square checkout: card, Apple Pay, Google Pay, Cash App Pay, Afterpay BNPL",
  "AI patch generator (FAL) with a prompt pipeline and abuse-blocking rules",
  "Customer portal: Supabase auth, order history, tracking, one-click reorder",
  "Server-side conversion stack: Meta CAPI, GA4/GTM, Google Ads, Pinterest, Bing, an OpenAI pixel",
  "Two-stage abandoned-cart recovery (email at 30 min, then 24h with a code)",
  "~30 SEO/AEO landing pages plus an /ai-info answer hub, llms.txt, hreflang, IndexNow",
  "Sanity CMS, 25 document types, content edited without code",
  "63-post blog library feeding the topical cluster",
  "Supabase ops portal: order pipeline, sales dashboards, clock in/out, role-based access, full audit log",
  "100% mobile responsive; Lighthouse 90+ on core web vitals",
];

export default function PandaPatchesCaseStudyPreview() {
  return (
    <PreviewShell condensed>
      {/* ── Pinned-deck rebuild, 27 Sep 2026. ─────────────────────────────
          Owner's call, after seeing the editor section's photo-stack: the
          whole page should read the same way -- each screen holds in place
          while the next one rises up and covers it, not a normal scroll.
          No GSAP, same reasoning as EditorScrollDeck: the covering element
          doesn't need any special CSS at all, since a later, ordinary block
          naturally paints over an earlier `position: sticky` one as it
          scrolls up over it -- only the element that should HOLD needs the
          .pin-run/.pin-card treatment. Each pinned screen is sized (tighter
          padding, capped image heights, smaller type) to fit inside one
          viewport, because a sticky element's content below the viewport at
          the moment it locks in place can't be reached by scrolling further
          -- it would just be hidden for as long as it's pinned. That's fine
          for cropping a LITTLE headroom off a screenshot; it is not fine for
          truncating a disclosed metric, so nothing that would cut a
          number, a row of the results table, or a stack-list item was
          forced to fit -- those stay their natural, un-cropped size and
          simply do not pin (a later section still slides up and covers
          them normally, which reads the same to a scrolling visitor).
          The editor section (now "the team edits it themselves") keeps its
          own internal multi-card scroll from the previous pass, unpinned at
          the outer level: nesting a tall, self-scrolling section inside an
          outer pin would freeze it before its own cards had a chance to
          settle in, so it sits between two pinned screens as a normal
          (if unusually long) scroll passage instead. ── */}

      {/* ── 1. Opening ────────────────────────────────────────────────── */}
      <div className="pin-run">
        <section className="pin-card px-6 pb-4 pt-16 md:px-10" style={{ backgroundColor: T.paper, top: "110px" }}>
          <div className="mx-auto max-w-[1100px]">
            <p className="mb-4 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
              <Link href="/preview/work" style={{ color: T.quiet }}>Work</Link> / Panda Patches / Founder-affiliated
            </p>

            <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
              Panda Patches.
            </h1>
            <p className="mt-2 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.1rem", lineHeight: 1.25 }}>
              A custom-patch storefront connected to the team&apos;s order-management system.
            </p>

            <p className="mt-3 max-w-[40rem] text-[14px] leading-[1.45]" style={{ color: T.body }}>
              A 3-year-old WordPress store, rebuilt on Next.js, Sanity and Square. The thing WordPress genuinely
              couldn&apos;t do was price a custom patch — every order needed a manual quote. We built a configurator to
              replace that, and connected the storefront to a separate system the team runs orders, production and
              payments through.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="https://pandapatches.com"
                target="_blank"
                rel="noopener"
                className="cta-solid inline-flex items-center gap-2 px-5 py-2 text-[14px] font-medium"
                style={{ backgroundColor: T.ink, color: T.paper }}
              >
                Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> pandapatches.com (opens in a new tab)</span>
              </a>
            </div>

            <RelationshipDisclosure slug="panda-patches" />

            <div className="mt-1 flex flex-wrap gap-x-10 gap-y-1.5 border-t pt-3" style={{ borderColor: T.rule }}>
              {[
                { label: "Revenue today", value: `${REVENUE} (owner-reported, 20 Sep 2026)` },
                { label: "Migration", value: "3-year-old site, no ranking losses in the 30 days after launch" },
                { label: "Payments", value: MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory },
              ].map((f) => (
                <div key={f.label} className="max-w-[20rem]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>{f.label}</p>
                  <p className="mt-0.5 text-[13px] leading-[1.35]" style={{ color: T.body }}>{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── The storefront, full reveal ──────────────────────────────── */}
      <div className="pin-run">
        <section className="pin-card px-6 md:px-10" style={{ backgroundColor: T.paper, top: "110px" }}>
          <div className="mx-auto max-w-[1100px]">
            <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>The storefront</p>
            <div className="relative mt-4 w-full border" style={{ height: "58vh", borderColor: T.rule }}>
              <Image
                src="/work/panda-patches.png"
                alt="The Panda Patches storefront home page, showing the product range and the calculator's entry point."
                fill
                sizes="(min-width: 1100px) 1050px, 100vw"
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── 2. How people use it. Own internal photo-stack deck, not
          pinned at the outer level -- see the file-level note above. ── */}
      <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.onDarkAccent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.1 }}>
            The team edits it themselves.
          </h2>
          <p className="mt-4 max-w-[36rem] text-[15px] leading-[1.7]" style={{ color: T.onDarkQuiet }}>
            This is Sanity Studio, the real editor behind the storefront. No deploy, no developer — the team opens
            it directly for copy, a new blog post, or a new case study.
          </p>

          <div className="mt-12">
            <EditorScrollDeck />
          </div>

          <p className="mt-4 max-w-[36rem] text-[15px] leading-[1.7]" style={{ color: T.onDarkQuiet }}>
            Customers get a portal of their own too — order history, tracking, and a one-click reorder at the price
            they paid before. It&apos;s behind a login, so there&apos;s no public screen to show yet; that&apos;s the
            one part of this build we&apos;re describing rather than picturing.
          </p>
        </div>
      </section>

      {/* ── 3. The calculator ─────────────────────────────────────────── */}
      <div className="pin-run">
        <section className="pin-card px-6 py-8 md:px-10" style={{ backgroundColor: T.paperHi, top: "110px" }}>
          <div className="mx-auto max-w-[1100px]">
            <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>03</span>
            <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.7rem, 3vw, 2.6rem)", lineHeight: 1 }}>
              Choose your patch. Send it for a price.
            </h2>
            <p className="mt-3 max-w-[40rem] text-[14px] leading-[1.55]" style={{ color: T.body }}>
              Before, a customer described what they wanted in a contact form and waited 24 hours or more for someone
              to work out a price by hand and email it back. Most didn&apos;t wait. Now they configure the patch
              exactly — backing, shape, border, size, quantity, artwork — on the product page itself, and send that
              configuration straight to the team for a price, instead of starting from a blank message.
            </p>
            <p className="mt-2 max-w-[40rem] text-[13px] leading-[1.5]" style={{ color: T.quiet }}>
              9 patch types · 4 backing options · 5 border styles · any size · 8+ quantity tiers, all captured before a
              person ever sees the request.
            </p>

            <div className="mt-5">
              <CalculatorToggle compact />
            </div>
          </div>
        </section>
      </div>

      {/* ── 4. Storefront -> operations ───────────────────────────────── */}
      <div className="pin-run">
        <section className="pin-card px-6 py-5 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark, top: "110px" }}>
          <div className="mx-auto max-w-[1100px]">
            <span style={{ fontFamily: MONO, color: T.onDarkAccent, fontSize: "13px" }}>04</span>
            <h2 className="mt-1.5" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)", lineHeight: 1 }}>
              One backend behind the storefront.
            </h2>
            <p className="mt-2 max-w-[40rem] text-[13px] leading-[1.4]" style={{ color: T.onDarkQuiet }}>
              The configurator hands off into a separate operations platform, built on the same Supabase backend, that
              the team runs the rest of the business through. It replaced a separate CRM, Google Sheets, a spreadsheet
              for attendance, and WhatsApp update chains.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2" style={{ fontFamily: MONO, fontSize: "12px" }}>
              {["Enquiry", "Quote", "Payment", "Production", "Delivery"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="border px-2.5 py-1" style={{ borderColor: T.onDarkRule }}>{step}</span>
                  {i < arr.length - 1 && <ArrowRight className="h-3 w-3" style={{ color: T.onDarkQuiet }} aria-hidden="true" />}
                </span>
              ))}
            </div>

            <div className="relative mt-3 w-full overflow-hidden border" style={{ height: "clamp(160px, 24vh, 240px)", borderColor: T.onDarkRule }}>
              <Image
                src="/work/enterprise-ops.png"
                alt="The Panda Patches operations dashboard with its production pipeline; sensitive customer and financial data is blurred."
                fill
                sizes="(min-width: 1100px) 1050px, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="mt-3 grid gap-2 border-t pt-3 md:grid-cols-3" style={{ borderColor: T.onDarkRule }}>
              {[
                { label: "At Quote", body: "7 sales agents work the same pipeline instead of 7 separate message threads. Every enquiry is one record from the moment it arrives." },
                { label: "At Production", body: "Role-based access: production sees pending orders, sales sees their own pipeline, admins see everything. Nobody sees data they don't need." },
                { label: "Throughout", body: "Every change is logged with a timestamp and an author, so a status dispute has an answer instead of a guess." },
              ].map((r) => (
                <div key={r.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.onDarkAccent }}>{r.label}</p>
                  <p className="mt-1 text-[13px] leading-[1.4]" style={{ color: T.onDarkQuiet }}>{r.body}</p>
                </div>
              ))}
            </div>

            <Link href="/work/enterprise-ops" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: T.onDarkAccent }}>
              Read the full operations case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>

      {/* ── 5. Results, consolidated. Not pinned: a disclosed metric that
          fell below the fold while this section was locked in place would
          be exactly as hidden as if it had been deleted, so this table
          scrolls normally, at full size, every row always reachable. ── */}
      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>05</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What&apos;s actually supported.
          </h2>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-[1.65]" style={{ color: T.quiet }}>
            Panda Patches is founder-affiliated: owned and operated by co-founder Imran Raza Ladhani, who holds a
            stake in both companies. These are first-party, owner-reported figures about the business, not
            independent client proof, and revenue is business context here, not a result attributed to the rebuild.
          </p>

          <dl className="mt-8 border-t" style={{ borderColor: T.rule }}>
            {[
              { term: "Revenue", detail: `${REVENUE}. Owner-reported, 20 September 2026.` },
              { term: "Search rankings", detail: "No ranking losses recorded in Google Search Console during the 30 days after launch. Full URL export, 301 redirects and a fresh sitemap preceded the cutover." },
              { term: "Wise / Nasdaq activation", detail: "9,600 woven patches across 16 designs, delivered in two shipments (4 and 7 May 2026) for Wise's Nasdaq listing activation in Times Square, ordered, produced and tracked through this platform." },
              { term: "Independent reputation", detail: "Panda Patches is rated 4.8/5 by 72+ customers on Trustpilot, with 1,000,000+ patches delivered historically." },
            ].map((r) => (
              <div key={r.term} className="grid gap-2 border-b py-5 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                <dt className="font-semibold md:col-span-3" style={{ color: T.ink }}>{r.term}</dt>
                <dd className="text-[14px] leading-[1.6] md:col-span-9" style={{ color: T.body }}>{r.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 6. Tech stack, secondary. Also not pinned, same reason as
          Results: the collapsed "full build scope" detail can hide behind a
          click by the reader's own choice, but the visible stack list and
          its $/mo figure never get hidden by a scroll effect. ── */}
      <section className="px-6 py-16 md:px-10 md:py-20" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.quiet }}>06 · Stack</p>
          <p className="mt-4 max-w-[40rem] text-[14px] leading-[1.6]" style={{ color: T.quiet }}>
            {PAYMENT_INTEGRATION_SCOPE} Total tooling runs about $55/month today (Supabase ~$25, Vercel ~$20, ~$10 for
            the AI patch generator) — a prose figure from the project record, not one this site independently
            re-measures each time it's shown.
          </p>
          <div className="mt-5 border-t" style={{ borderColor: T.rule }}>
            {techStack.map((t) => (
              <div key={t.name} className="grid gap-1 border-b py-3 md:grid-cols-12 md:gap-6" style={{ borderColor: T.rule }}>
                <span className="text-[14px] font-medium md:col-span-4" style={{ color: T.ink }}>{t.name}</span>
                <span className="text-[13px] md:col-span-8" style={{ color: T.quiet }}>{t.role}</span>
              </div>
            ))}
          </div>

          <details className="mt-6">
            <summary className="cursor-pointer text-[13px] font-medium" style={{ color: T.body }}>
              The full build scope (13 items)
            </summary>
            <ul className="mt-3 space-y-1.5">
              {fullScope.map((item) => (
                <li key={item} className="text-[13px] leading-[1.5]" style={{ color: T.quiet }}>· {item}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      {/* ── 7. Next step ────────────────────────────────────────────────── */}
      <div className="pin-run">
        <section className="pin-card px-6 py-16 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark, top: "110px" }}>
          <div className="mx-auto max-w-[1100px]">
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
              Need your website and order workflow to work together?
            </h2>
            <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
              Most sites stop at the storefront. This one hands off into the system the team actually runs orders
              through — tell us where yours breaks down, and we&apos;ll work out what that would take.
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
        /* Pin-and-cover only from md up. Below that, text reflows onto more
           lines and the calculator's two screenshots stack instead of
           sitting side by side, which pushes several of these screens well
           past one phone viewport -- pinning them there would hide the
           bottom of the content (the facts row, the second calculator
           image, the "read the full case study" link) for as long as they
           stayed stuck, with no way to scroll to it. Measured, not guessed:
           at 390x844 the calculator screen alone runs to just over 1000px
           against a ~714px budget. Mobile gets the plain, fully-reachable
           stacked layout instead; the scroll-in fade below still runs on
           every size, since it doesn't depend on pinning to look right. */
        .pin-run { position: relative; }
        @media (min-width: 768px) {
          .pin-run { min-height: 155vh; }
          .pin-card { position: sticky; }
        }
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .pin-run { view-timeline-name: --pin-reveal; view-timeline-axis: block; }
            .pin-card {
              animation: pin-in linear both;
              animation-timeline: --pin-reveal;
              animation-range: entry 0% entry 35%;
            }
            @keyframes pin-in {
              from { opacity: 0; transform: translateY(56px); }
              to { opacity: 1; transform: none; }
            }
          }
        }
      `}</style>
    </PreviewShell>
  );
}
