import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Zap, ShoppingBag, BarChart3, Lock, Users, Clock, Server, Sparkles, UserRound, CreditCard, LineChart, Search, Trophy, Star } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import CaseStudyShot from "@/components/work/CaseStudyShot";
import { requiredMetric } from "@/data/case-study-facts";
import { MIGRATION_PROJECT_DETAILS, PAYMENT_INTEGRATION_SCOPE } from "@/data/migration-projects";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Panda Patches case study, redesign candidate, 27 Sep 2026. First application
// of Group 1's case-study template (see REDESIGN_ROLLOUT_PLAN_2026-09-26.md),
// applied here first per the owner's instruction: this project can demonstrate
// the storefront, editor, checkout and operations platform in one place.
// ─────────────────────────────────────────────────────────────────────────────
// Every fact, figure and sentence below is carried over VERBATIM from the live
// page (src/app/work/panda-patches/page.tsx) or read fresh from the same
// canonical sources it reads (case-study-facts.json via requiredMetric,
// migration-projects.ts, tokens shared with the rest of the redesign). Nothing
// is summarised, trimmed or re-estimated -- this pass restructures under the
// 7-part case-study shape and restyles in the new visual system, it does not
// rewrite the evidence.
//
// Organised under the shape requested for this group: what the business
// needed, relevant screenshots, what was built, how the owner/team operates
// it, integrations and constraints, supported results and their measurement
// context, and a next step. "Integrations and constraints" carries the
// Stripe -> Square history explicitly (MIGRATION_PROJECT_DETAILS.pandaPatches.
// paymentHistory is already written as sequential, never simultaneous -- this
// page preserves that framing rather than fixing a bug that wasn't there).
// No "constraints / what we chose not to build" subsection is included: unlike
// Emblematic Studio, there is no documented scope-decision record for this
// project to draw from, and inventing one would be exactly the kind of claim
// this site's evidence rules exist to prevent.
//
// JSON-LD deliberately omitted here, matching /preview/hero and /preview/work:
// this is a noindex preview at a different URL than the canonical
// /work/panda-patches, so schema referencing that URL would be wrong until
// this page actually replaces it. The live page's schema (including the 11
// Aug 2026 governance note on why no Product node exists) carries over
// unchanged when that happens.
// ─────────────────────────────────────────────────────────────────────────────

const REVENUE = requiredMetric("panda-patches", "monthly-revenue");

const techStack = [
  { name: "Next.js 16", role: "Frontend + API routes" },
  { name: "React 19", role: "UI runtime" },
  { name: "TypeScript", role: "Type safety" },
  { name: "Tailwind CSS 3", role: "Styling" },
  { name: "Sanity CMS", role: "25 doc types · ISR content" },
  { name: "Supabase", role: "DB + Auth + Storage (shared)" },
  { name: "Square", role: "Checkout · Apple/Google Pay · Cash App · Afterpay" },
  { name: "FAL", role: "AI patch image generation" },
  { name: "Meta Pixel + CAPI", role: "Deduped server-side tracking" },
  { name: "GA4 + GTM + Google Ads", role: "Conversion measurement" },
  { name: "React Hook Form + Zod", role: "Validated forms + calculator" },
  { name: "ZeptoMail", role: "Transactional + abandoned-cart email" },
  { name: "Vercel", role: "Hosting + CDN + Cron" },
];

const storefrontFeatures = [
  { icon: Sparkles, title: "AI Patch Generator", desc: "Branded “Panda AI” — a FAL-powered mockup generator with no signup required, a shape/style prompt pipeline, 120+ abuse-blocking rules (trademarks, logos, hate symbols), 30-day artifact TTL, and a clean handoff straight into the order flow." },
  { icon: UserRound, title: "Customer Portal", desc: "Supabase-auth accounts auto-provisioned on first paid order: dashboard, order history, tracking, and one-click re-priced reorder with loyalty pricing." },
  { icon: CreditCard, title: "Square Checkout + BNPL", desc: "Hosted Square Payment Links: card, Apple Pay, Google Pay, Cash App Pay, and Afterpay “pay in installments.” Server-side re-pricing blocks tampering." },
  { icon: LineChart, title: "Conversion & Attribution", desc: "Meta Pixel + CAPI (deduped via shared eventID), GA4/GTM, Google Ads, Pinterest, Bing UET, and an OpenAI pixel, with fbp/fbc/gclid/UTM re-derived server-side on every order." },
  { icon: ShoppingBag, title: "Offers & Bulk Ordering", desc: "Fixed-price /offers packs with inline multi-step checkout, volume-tier bulk pricing, and a two-stage abandoned-cart recovery sequence (30 min, then 24 h with a code)." },
  { icon: Search, title: "SEO / AEO Surface", desc: "180+ indexed pages: a 63-post blog, US state & city location pages, product-category and competitor-comparison pages, partner & offers pages, and an /ai-info answer hub with topic cluster pages, all backed by llms.txt, JSON-LD, hreflang (US/UK/CA/AU), dynamic sitemap/robots, and IndexNow pinging." },
];

const pricingDimensions = [
  { label: "Patch Types", count: "9", examples: "Embroidered, Woven, PVC, Chenille, Leather, Silicone, Printed, Sequin, 3D" },
  { label: "Additional Products", count: "4", examples: "Lapel Pins, Challenge Coins, Keychains, PVC Shoe Charms" },
  { label: "Backing Options", count: "3", examples: "Iron-On, Velcro, Peel & Stick" },
  { label: "Border Types", count: "2", examples: "Merrowed, Hot-Cut" },
  { label: "Size Tiers", count: "∞", examples: "Custom dimensions with real-time price update" },
  { label: "Quantity Breaks", count: "8+", examples: "Volume discounts auto-calculated per order" },
];

const fullScope = [
  "9 product category pages (embroidered, woven, PVC, chenille, leather, silicone, printed, sequin, 3D)",
  "4 additional product pages (lapel pins, challenge coins, keychains, PVC shoe charms)",
  "Real-time pricing calculator with all dimensions",
  "Square checkout: card, Apple Pay, Google Pay, Cash App Pay, and Afterpay BNPL (server-side re-pricing)",
  "AI patch generator (FAL) with prompt pipeline, 120+ abuse rules, and 30-day artifact cleanup",
  "Customer portal: Supabase auth, order history, tracking, one-click re-priced reorder",
  "Server-side conversion stack: Meta CAPI + GA4/GTM + Google Ads + Pinterest + Bing + OpenAI pixel",
  "Two-stage abandoned-cart recovery (email at 30 min, then 24 h with a discount code)",
  "~30 SEO/AEO landing pages + /ai-info answer hub with cluster pages, partner & offers pages, llms.txt, hreflang, IndexNow",
  "Sanity CMS (25 doc types), content editors manage everything without code",
  "63-post blog library (dynamic, SEO-optimized) feeding the topical cluster",
  "Order confirmation emails + customer order history",
  "File upload for custom design mockups",
  "Supabase ops portal, order pipeline with real-time status",
  "Sales agent dashboards, 7 individual performance views",
  "Employee clock in/out with role-based access",
  "Full audit log, every change timestamped and attributed",
  "100% mobile responsive with touch-optimized UI",
  "Lighthouse 90+ on all core web vitals",
];

const replacedTools = [
  { tool: "WordPress + WooCommerce", cost: "$80/mo", problem: "Couldn't handle the pricing matrix, manual quotes only" },
  { tool: "Separate CRM (HubSpot/Zoho)", cost: "$50/mo", problem: "No integration with orders, duplicate data entry" },
  { tool: "Google Sheets / spreadsheets", cost: "Free but 10hrs/wk", problem: "7 team members, zero real-time visibility, version conflicts" },
  { tool: "Manual attendance tracker", cost: "$30/mo", problem: "Clock in/out via WhatsApp messages" },
  { tool: "Chat tool for order updates", cost: "$40/mo", problem: "WhatsApp chains to update team on order status" },
];

const opsFeatures = [
  { icon: ShoppingBag, title: "Order Pipeline", desc: "Every order from storefront to production to fulfillment in one real-time view. Status updates trigger automatically." },
  { icon: BarChart3, title: "Sales Agent Dashboard", desc: "7 sales reps tracked individually. Revenue, conversion rate, quote volume, and response time per agent." },
  { icon: Clock, title: "Employee Clock In/Out", desc: "Replaced WhatsApp updates. Timestamped, geofenced clock-in system with automated payroll export." },
  { icon: Lock, title: "Role-Based Access", desc: "Admins see everything. Sales agents see their pipeline only. Production sees pending orders. Zero data leakage." },
  { icon: Users, title: "Team Performance", desc: "Every change is logged. Manager sees who updated what, when. Full audit trail for accountability." },
  { icon: Server, title: "Single Source of Truth", desc: "One Supabase database feeds the storefront, ops portal, and admin panel. No duplicate entries, ever." },
];

const seoSteps = [
  { title: "Full URL audit before migration", desc: "We exported every indexed URL from Google Search Console and mapped each one to its new equivalent on the Next.js site. Zero orphan pages." },
  { title: "301 redirects for every old URL", desc: "Every WordPress URL gets a server-side 301 redirect to the matching Next.js page. Old product URLs, old blog posts, old category pages, everything. Configured in Next.js middleware." },
  { title: "Meta titles and descriptions preserved", desc: "We carried over the exact meta titles and descriptions from the WordPress site where they were already ranking. No rewriting. No experiments during migration." },
  { title: "Schema markup upgraded, not replaced", desc: "The old site had basic schema. We replaced it with a complete @graph structure (Article, Product, BreadcrumbList, Organization, FAQPage) without changing the existing entity signals Google already trusted." },
  { title: "New XML sitemap submitted day one", desc: "A fresh sitemap.xml with all new URLs submitted to Google Search Console immediately after launch. Google started recrawling within hours." },
  { title: "Core Web Vitals improved, not regressed", desc: "Load time dropped from 4+ seconds on WordPress to under 1 second on Next.js. Google rewarded the improvement with better rankings, not worse." },
];

const beforeAfter = [
  { before: "3 years of WordPress SEO equity at risk", after: "No ranking losses recorded in Search Console across the 30-day post-launch window." },
  { before: "Customers waited 24+ hours for a manual quote", after: "Customers see the price instantly. Self-serve checkout." },
  { before: "$200+/mo across 3 separate tools + hosting", after: "About $55/mo total (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). CRM, ops, store, and hosting." },
  { before: "7 disconnected tools, constant WhatsApp updates", after: "1 platform. All 7 team members on the same real-time data." },
  { before: "WordPress pricing ceiling blocked growth", after: `Revenue is now ${REVENUE}. Pricing engine scales to any complexity.` },
  { before: "Attendance tracked via WhatsApp messages", after: "Timestamped clock in/out with payroll export." },
  { before: "No visibility into sales agent performance", after: "Per-agent revenue, conversion rate, and response time tracked live." },
  { before: "Load time over 4 seconds on WordPress", after: "Under 1 second load time. Lighthouse 90+ on Core Web Vitals." },
];

const pageFaqs = [
  {
    question: "Did the Panda Patches WordPress migration preserve Google search rankings?",
    answer: "We migrated the 3-year-old WordPress site to Next.js and recorded no ranking losses in Google Search Console during the 30-day post-launch monitoring window. We exported every indexed URL before migration, built 301 redirects for each one in Next.js middleware, preserved existing meta titles and descriptions, upgraded schema markup without changing entity signals, and submitted a fresh sitemap to Google the day of launch. Rankings held through that 30-day window. Movement after that point reflects many factors outside our control and is not attributed to the rebuild. No provider controls search rankings.",
  },
  {
    question: "Can you replace Shopify with a custom coded e-commerce store?",
    answer: `Yes, but this project is not the evidence for it. Panda Patches ran on WordPress and WooCommerce and was never on Shopify, so it shows we can replace a WordPress commerce stack with a custom Next.js storefront, not that we have moved a store off Shopify. The current platform uses Sanity, Supabase and Square. ${MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} For a Shopify store there are two different jobs: a headless storefront that keeps Shopify running products, orders and payments, or a full replacement of commerce as well. We scope those separately. Panda Patches is founder-affiliated, not an independent client engagement.`,
  },
  {
    question: "How does a real-time pricing calculator work without API calls?",
    answer: "We built the pricing engine in TypeScript and run all calculations client-side. The full pricing matrix, 9 patch types, custom dimensions, 8+ quantity tiers, 3 backing options, 2 border types, is pre-compiled into a JavaScript function. Every price update takes under 5ms with zero server round-trips.",
  },
  {
    question: "How much does it cost to build a custom e-commerce platform like this?",
    answer: "A custom e-commerce platform with a real-time pricing engine, CMS, Square checkout (card, Apple Pay, Google Pay, Cash App Pay, and Afterpay BNPL), an AI mockup generator, a customer portal, and a full server-side conversion-tracking stack starts at $15,000 to $30,000 depending on complexity. Panda Patches runs on about $55/month in total tooling costs after launch (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).",
  },
  {
    question: "What tools did the custom platform replace?",
    answer: "One platform replaced: WordPress + WooCommerce ($80/mo), a separate CRM ($50/mo), Google Sheets for order tracking, a manual attendance tracker ($30/mo), and WhatsApp for team communication. Total savings: $200+/month plus 10+ hours per week of manual work.",
  },
  {
    question: "How long did it take to build the Panda Patches platform?",
    answer: `The initial storefront rebuild launched within 8 weeks. ${MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} The current storefront includes custom pricing, Sanity CMS, an AI patch generator, a customer portal and server-side conversion tracking; the current feature set should not be read as the original launch scope. The connected staff CRM is a separate application sharing the same Supabase backend.`,
  },
];

export default function PandaPatchesCaseStudyPreview() {
  return (
    <PreviewShell condensed>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/preview/hero" style={{ color: T.quiet }}>Home</Link> / <Link href="/preview/work" style={{ color: T.quiet }}>Work</Link> / Panda Patches
          </p>

          <div className="flex flex-wrap gap-2">
            {["WordPress migration", "Zero SEO drops", "Next.js + Sanity + Supabase + Square"].map((tag) => (
              <span key={tag} className="rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ borderColor: T.rule, color: T.body, fontFamily: MONO }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Panda Patches.<br />
            <span style={{ color: T.accent }}>{REVENUE}. $55 in tooling.</span>
          </h1>

          <p className="mt-6 max-w-[46rem] text-[18px] leading-[1.65]" style={{ color: T.body }}>
            A 3-year-old WordPress e-commerce site with real search traffic, existing customers, and a pricing
            problem WordPress couldn&apos;t solve. We rebuilt the storefront with Next.js, Sanity, Supabase and a
            custom pricing calculator, connected to a separate operations platform. {MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} No
            ranking losses were recorded in Google Search Console during the 30-day post-launch monitoring window.
            Revenue is {REVENUE} (owner-reported, 20 September 2026) on about $55/month in total tooling costs
            (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).
          </p>

          <RelationshipDisclosure slug="panda-patches" />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: REVENUE, label: "Monthly revenue", sub: "Owner-reported, 20 Sep 2026 · on $55/mo tooling" },
              { value: "No losses", label: "Rankings, monitored period", sub: "Search Console, 30 days post-launch" },
              { value: "7 → 1", label: "Tools replaced", sub: "CRM · ops · store · tracking" },
              { value: "3 yr", label: "Legacy site migrated", sub: "full content + SEO equity" },
            ].map((m) => (
              <div key={m.label} className="border-t pt-4" style={{ borderColor: T.rule }}>
                <div style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "1.8rem", lineHeight: 1 }}>{m.value}</div>
                <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: T.body }}>{m.label}</div>
                <div className="mt-1 text-[12px] leading-[1.4]" style={{ color: T.quiet }}>{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://pandapatches.com"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> pandapatches.com (opens in a new tab)</span>
            </a>
            <span className="text-[13px]" style={{ color: T.quiet }}>Real revenue-generating e-commerce site, not a mockup or portfolio screenshot.</span>
          </div>
        </div>
      </section>

      {/* ── Relevant screenshots ──────────────────────────────────────── */}
      <section className="px-6 pb-8 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1200px]">
          <CaseStudyShot
            src="/work/panda-patches.png"
            alt="The Panda Patches storefront home page, showing the product range, the instant pricing entry point and the ordering call to action."
            caption="Panda Patches, a headless Next.js storefront on Sanity, Supabase and Square with a real-time pricing calculator. Founder-affiliated."
          />
        </div>
      </section>

      {/* ── 01. What the business needed ──────────────────────────────── */}
      <Section n="01" title="What the business needed" note="The problem" bg={T.paperHi}>
        <h3 style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.6rem", lineHeight: 1.2 }}>
          WordPress couldn&apos;t quote a price.
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border p-5" style={{ borderColor: T.rule }}>
            <p className="mb-2 font-semibold" style={{ color: T.ink }}>No calculator. Every sale was a waiting game.</p>
            <p className="text-[15px] leading-[1.6]" style={{ color: T.body }}>
              Custom patches have complex pricing. The final price depends on patch type (9 options), size, quantity,
              backing, and border. That&apos;s thousands of combinations. WordPress had no way to calculate this live.
              So every customer filled out a contact form and waited 24+ hours for someone to manually work out a
              price and email it back. Most of them didn&apos;t wait — they went to a competitor who showed them the
              price instantly.
            </p>
          </div>
          <div className="border p-5" style={{ borderColor: T.rule }}>
            <p className="mb-2 font-semibold" style={{ color: T.ink }}>7 disconnected tools.</p>
            <p className="text-[15px] leading-[1.6]" style={{ color: T.body }}>
              The business ran on: WordPress for the store, a separate CRM, Google Sheets for order tracking, a
              spreadsheet for attendance, and WhatsApp for team updates. 7 team members touching 5 different tools
              with zero real-time sync. Every status update was a manual message.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t" style={{ borderColor: T.rule }}>
          {replacedTools.map((t) => (
            <div key={t.tool} className="grid gap-2 border-b py-4 md:grid-cols-12 md:gap-6" style={{ borderColor: T.rule }}>
              <div className="font-medium md:col-span-5" style={{ color: T.ink }}>{t.tool}</div>
              <div className="text-[13px] font-semibold md:col-span-2" style={{ fontFamily: MONO, color: T.accentText }}>{t.cost}</div>
              <div className="text-[14px] md:col-span-5" style={{ color: T.body }}>{t.problem}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 02. What we built or changed ──────────────────────────────── */}
      <Section n="02" title="What we built" note="Storefront">
        <h3 style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.6rem", lineHeight: 1.2 }}>
          An instant business calculator. Pick your options, see your price.
        </h3>
        <p className="mt-4 max-w-[42rem] text-[16px] leading-[1.7]" style={{ color: T.body }}>
          We built a custom quote calculator directly into the storefront. Customers select patch type, enter their
          dimensions, choose quantity and finish options — and the exact price appears instantly. No forms. No
          waiting. No back-and-forth emails. The calculator is the checkout. What used to take 24 hours now takes 30
          seconds.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricingDimensions.map((d) => (
            <div key={d.label} className="border p-4" style={{ borderColor: T.rule }}>
              <div className="flex items-baseline gap-2">
                <span style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accent, fontSize: "1.8rem" }}>{d.count}</span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: T.body }}>{d.label}</span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.5]" style={{ color: T.quiet }}>{d.examples}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6" style={{ backgroundColor: T.dark, color: T.onDark }}>
          <div className="flex items-start gap-4">
            <Zap className="mt-0.5 h-6 w-6 shrink-0" style={{ color: T.onDarkAccent }} aria-hidden="true" />
            <div>
              <p className="font-semibold">The pricing engine calculates live</p>
              <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
                9 patch types × custom dimensions × 8+ quantity tiers × 3 backing options × 2 border types = thousands
                of price combinations. All calculated client-side with a custom TypeScript pricing engine. Zero API
                calls per keystroke. Response time: &lt;5ms.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[42rem] text-[16px] leading-[1.7]" style={{ color: T.body }}>
          The storefront kept growing after launch. {MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} Today the
          site includes an AI mockup generator, checkout with installment options, a customer portal for reorders and
          server-side conversion tracking.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {storefrontFeatures.map((f) => (
            <div key={f.title} className="border p-5" style={{ borderColor: T.rule }}>
              <f.icon className="mb-3 h-5 w-5" style={{ color: T.accent }} aria-hidden="true" />
              <h4 className="mb-2 font-semibold" style={{ color: T.ink }}>{f.title}</h4>
              <p className="text-[14px] leading-[1.6]" style={{ color: T.body }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-6" style={{ borderColor: T.rule }}>
          <p className="mb-4 text-[14px] font-semibold" style={{ color: T.ink }}>
            The full build scope (19 items)
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {fullScope.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[14px] leading-[1.5]" style={{ color: T.body }}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: T.accent }} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 03. How the owner/team operates it ────────────────────────── */}
      <Section n="03" title="How the team operates it" note="Operations" dark>
        <h3 style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.onDark, fontSize: "1.6rem", lineHeight: 1.2 }}>
          One backend. The whole business runs on it.
        </h3>
        <p className="mt-4 max-w-[42rem] text-[16px] leading-[1.7]" style={{ color: T.onDarkQuiet }}>
          Beyond the storefront, we built the staff side too: a separate Supabase-backed CRM that replaced the old
          CRM, Google Sheets, attendance tracker, and WhatsApp update chains. It shares the same backend as this
          storefront, so leads, quotes, orders, and payments flow straight in. 7 team members, one source of truth,
          every change logged with a timestamp and author.
        </p>
        <Link href="/work/enterprise-ops" className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: T.onDarkAccent }}>
          Read the full CRM case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {opsFeatures.map((f) => (
            <div key={f.title} className="border p-5" style={{ borderColor: T.onDarkRule }}>
              <f.icon className="mb-3 h-5 w-5" style={{ color: T.onDarkAccent }} aria-hidden="true" />
              <h4 className="mb-2 font-semibold" style={{ color: T.onDark }}>{f.title}</h4>
              <p className="text-[14px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 04. Integrations and constraints ──────────────────────────── */}
      <Section n="04" title="Integrations and constraints" note="Tech stack" bg={T.paperHi}>
        <p className="max-w-[42rem] text-[16px] leading-[1.7]" style={{ color: T.body }}>
          Started free on Vercel, then $20/mo on Vercel Pro as the store grew; revenue is now {REVENUE}. Sanity and
          Cloudflare still run on free tiers. Total tooling: about $55/mo (Supabase ~$25, Vercel ~$20, and ~$10 for
          the FAL Flux Schnell AI patch generator).
        </p>
        <p className="mt-4 max-w-[42rem] text-[16px] leading-[1.7]" style={{ color: T.body }}>
          {PAYMENT_INTEGRATION_SCOPE} {MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span key={t.name} className="border px-3 py-2" style={{ borderColor: T.rule }}>
              <span className="block text-[13px] font-semibold" style={{ color: T.ink }}>{t.name}</span>
              <span className="block text-[11px]" style={{ color: T.quiet }}>{t.role}</span>
            </span>
          ))}
        </div>
      </Section>

      {/* ── 05. Supported results and their measurement context ──────── */}
      <Section n="05" title="Supported results" note="With their measurement context">
        <p className="max-w-[46rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
          This is a founder-affiliated project, not an independent client engagement. Panda Patches is owned and
          operated by PandaCodeGen co-founder Imran Raza Ladhani, who holds a stake in both companies, so the two
          businesses share an owner and this is not an arm&apos;s-length relationship. These are first-party
          operating figures reported by the owner, not projections and not independent client proof.
        </p>

        <h3 className="mt-8" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.5rem", lineHeight: 1.2 }}>
          3 years of SEO equity. Zero ranking drops.
        </h3>
        <p className="mt-3 max-w-[42rem] text-[15px] leading-[1.65]" style={{ color: T.body }}>
          Migrating a 3-year-old WordPress site is the hardest part of any replatform. Here is exactly what we did to
          preserve the search equity it already had.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {seoSteps.map((s) => (
            <div key={s.title} className="border p-4" style={{ borderColor: T.rule }}>
              <p className="mb-1.5 flex items-start gap-2 font-medium" style={{ color: T.ink }}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: T.accent }} aria-hidden="true" />
                {s.title}
              </p>
              <p className="text-[13px] leading-[1.55]" style={{ color: T.quiet }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 border-l-2 p-5" style={{ borderColor: T.accent, backgroundColor: T.paperHi }}>
          <p className="font-medium" style={{ color: T.ink }}>The result: zero ranking drops in Google Search Console</p>
          <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: T.body }}>
            We watched Search Console daily for 30 days after launch. Every ranked keyword held position. No 404
            spikes. No sudden impression drops. No manual actions. After 60 days, rankings improved as the new site
            began loading in under 1 second.
          </p>
        </div>

        <h3 className="mt-12" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.5rem", lineHeight: 1.2 }}>
          What changed after launch.
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {beforeAfter.map((r) => (
            <div key={r.before} className="flex gap-3 border-b pb-4" style={{ borderColor: T.rule }}>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: T.accent }} aria-hidden="true" />
              <div>
                <p className="text-[13px] leading-[1.5] line-through" style={{ color: T.quiet }}>{r.before}</p>
                <p className="mt-1 text-[14px] font-medium leading-[1.5]" style={{ color: T.ink }}>{r.after}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-12" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.5rem", lineHeight: 1.2 }}>
          Not a portfolio piece. A business that has shipped 1,000,000+ patches.
        </h3>
        <p className="mt-3 max-w-[42rem] text-[15px] leading-[1.65]" style={{ color: T.body }}>
          The platform we built runs a real, high-volume manufacturing business that has delivered custom patches to
          teams at some of the world&apos;s biggest brands.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2">
          {["Google", "Microsoft", "Coca-Cola", "Nissan", "Wise"].map((b) => (
            <span key={b} className="text-[18px] font-semibold" style={{ color: T.quiet }}>{b}</span>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border p-5" style={{ borderColor: T.rule }}>
            <div className="mb-2 flex items-center gap-2">
              <Trophy className="h-4 w-4" style={{ color: T.accent }} aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>Flagship activation</span>
            </div>
            <p className="font-medium" style={{ color: T.ink }}>16,000 patches for Wise&apos;s Nasdaq Times Square activation</p>
            <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: T.body }}>
              Designed, approved, and delivered in under two weeks to hit a Nasdaq listing date that could not move —
              ordered, produced, and tracked through the platform.
            </p>
            <a href="https://www.pandapatches.com/case-studies/wise-nasdaq-times-square-activation" target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold" style={{ color: T.accentText }}>
              Read the Wise case study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
          <div className="border p-5" style={{ borderColor: T.rule }}>
            <div className="mb-2 flex items-center gap-2">
              <Star className="h-4 w-4" style={{ color: T.accent }} aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>Reputation</span>
            </div>
            <p className="font-medium" style={{ color: T.ink }}>Rated 4.8/5 by 72+ customers on Trustpilot</p>
            <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: T.body }}>
              1,000,000+ patches delivered, with 5-piece minimums, mockups in 12 to 24 hours, and a money-back
              guarantee, all transacted through the custom storefront.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 06. A relevant next step ───────────────────────────────────── */}
      <Section n="06" title="A relevant next step" note="The method, and where to go from here" bg={T.paperHi}>
        <p className="max-w-[42rem] text-[15px] leading-[1.65]" style={{ color: T.body }}>
          The reasoning behind each decision in this build is documented in the guides, if you want the method
          rather than the result:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            { href: "/blog/nextjs-sanity-stack", label: "Next.js and Sanity: fit, cost and tradeoffs", tail: "the CMS pairing this storefront runs on, including where it is the wrong choice." },
            { href: "/blog/will-migrating-hurt-my-seo", label: "Will migrating hurt my SEO?", tail: "what actually causes ranking loss in a move, and what preserved the equity here." },
            { href: "/blog/wordpress-vs-custom-code-real-cost-3-years", label: "WordPress versus custom code over three years", tail: "the cost model behind replacing a platform that could not quote a price." },
            { href: "/blog/build-vs-buy-software-2026-cost-comparison", label: "Build versus buy for business software", tail: "the decision that produced the operations layer rather than another subscription." },
          ].map((l) => (
            <li key={l.href} className="text-[15px] leading-[1.6]" style={{ color: T.body }}>
              <Link href={l.href} className="font-semibold underline underline-offset-4" style={{ color: T.accentText }}>{l.label}</Link>{" "}— {l.tail}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { href: "/services/custom-engineering", title: "Custom Engineering", body: "SaaS platforms, dashboards, and AI-powered tools built from scratch." },
            { href: "/services/woocommerce", title: "WooCommerce Migration", body: "Escape plugin conflicts and slow checkouts. Own your store." },
            { href: "/services/ecommerce", title: "E-Commerce Solutions", body: "Custom storefronts with real-time pricing and zero platform fees." },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="work-link group border p-5" style={{ borderColor: T.rule }}>
              <h4 className="mb-2 font-semibold" style={{ color: T.ink }}>{s.title}</h4>
              <p className="text-[14px] leading-[1.5]" style={{ color: T.quiet }}>{s.body}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t pt-8" style={{ borderColor: T.rule }}>
          <dl>
            {pageFaqs.map((f, i) => (
              <div key={f.question} className="grid gap-3 border-b py-6 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                <dt className="md:col-span-5">
                  <span className="block text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.quiet }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-1 block font-semibold" style={{ color: T.ink }}>{f.question}</span>
                </dt>
                <dd className="max-w-[42rem] text-[14px] leading-[1.65] md:col-span-7" style={{ color: T.body }}>{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
              Want results like this?
            </h2>
            <p className="mt-4 max-w-[32rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
              Tell us what your business needs, and we&apos;ll help you work out the scope.
            </p>
          </div>
          <QuoteModalButton
            cta="case_study_panda_patches"
            location="work_panda_patches"
            className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
          >
            Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </QuoteModalButton>
        </div>
      </section>

      <style>{`
        .work-link h4 { transition: color .25s ease; }
        .work-link:hover h4, .work-link:focus-visible h4 { color: ${T.accentText} !important; }
        @media (prefers-reduced-motion: reduce) { .work-link h4 { transition: none; } }
      `}</style>
    </PreviewShell>
  );
}

function Section({ n, title, note, bg, dark = false, children }: { n: string; title: string; note: string; bg?: string; dark?: boolean; children: ReactNode }) {
  const backgroundColor = bg ?? (dark ? T.dark : T.paper);
  const fg = dark ? T.onDark : T.ink;
  const quiet = dark ? T.onDarkQuiet : T.quiet;
  const rule = dark ? T.onDarkRule : T.rule;
  return (
    <section className="px-6 py-16 md:px-10 md:py-20" style={{ backgroundColor, color: fg }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t pt-6" style={{ borderColor: rule }}>
          <div className="flex items-baseline gap-4">
            <span style={{ fontFamily: MONO, color: T.accent, fontSize: "14px" }}>{n}</span>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1 }}>{title}</h2>
          </div>
          <span className="text-[13px]" style={{ color: quiet }}>{note}</span>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
