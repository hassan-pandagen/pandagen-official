import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Closing block and footer. Redesign candidate, 24 Sep 2026.
// ─────────────────────────────────────────────────────────────────────────────
// Every link, label and description is carried over from Footer.tsx, including
// the LocaleSwitcher with fallbackToHome: that is the 23 Sep fix that links the
// locale roots from every page (only 7 of 146 sitemap URLs did before). Do not
// drop it. The oversized wordmark at the bottom is decorative and aria-hidden;
// the real brand link is the one in the first column.
// ─────────────────────────────────────────────────────────────────────────────

const services = [
  { href: "/services/wordpress-migration", text: "WordPress Migration" },
  { href: "/services/custom-engineering", text: "Custom software" },
  { href: "/services/ai-seo", text: "AI SEO" },
  { href: "/services/ecommerce", text: "E-Commerce" },
  { href: "/services/wix", text: "Wix Migration" },
  { href: "/services/squarespace", text: "Squarespace Migration" },
  { href: "/services/webflow", text: "Webflow Migration" },
  { href: "/services/woocommerce", text: "WooCommerce Migration" },
  { href: "/services/gohighlevel", text: "GoHighLevel" },
];

const company = [
  { href: "/work", title: "Project Evidence", desc: "Method, permission, and publication controls." },
  { href: "/partners", title: "Agency Pilot", desc: "Test one scoped engagement first." },
  { href: "/about", title: "About", desc: "Migration delivery standards." },
  { href: "/about/hassan", title: "Hassan Jamal", desc: "Co-founder and Lead Engineer." },
  { href: "/about/imran", title: "Imran Raza Ladhani", desc: "Co-founder and Lead Architect." },
  { href: "/blog", title: "Engineering Blog", desc: "Deep dives into Next.js and performance." },
  { href: "/manifesto", title: "Delivery Principles", desc: "Scope, evidence, control, and acceptance." },
  { href: "/contact", title: "Contact", desc: "Talk directly with Hassan or Imran." },
];

const resources = [
  { href: "/pricing", title: "Example Scopes", desc: "Price drivers and proposal controls." },
  { href: "/services", title: "Migration Services", desc: "Platform and engineering options." },
  { href: "/ai-info", title: "Facts and Figures", desc: "Pricing, team, case studies and guarantees, stated plainly." },
  { href: "/security", title: "Security", desc: "Reporting and disclosure process." },
  { href: "/editorial-policy", title: "Editorial Policy", desc: "Sources, evidence, freshness, and corrections." },
  { href: "/privacy", title: "Privacy", desc: "Data use and visitor choices." },
  { href: "/cookies", title: "Cookie Choices", desc: "Optional services and consent." },
  { href: "/terms", title: "Website Terms", desc: "Use of the site and inquiries." },
];

function Heading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-5 text-[12px] uppercase tracking-[0.14em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
      {children}
    </h3>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: T.dark, color: T.onDark }}>
      {/* Closing block. Copy unchanged. */}
      <section aria-labelledby="closing-title" className="px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
            Work directly with the founders
          </p>
          <h2
            id="closing-title"
            className="mx-auto mt-6 max-w-[12ch]"
            style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(3.2rem, 9vw, 9rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}
          >
            Have something in mind?
          </h2>
          <p className="mx-auto mt-8 max-w-[36rem] text-[18px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            A new website, a store to improve, or a workflow to simplify. Tell Hassan or Imran what you need, even if you
            are still figuring it out.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteModalButton
              cta="footer_talk"
              location="footer"
              className="inline-flex items-center gap-3 bg-[#EBE9E4] px-7 py-4 text-[17px] font-medium text-[#1C1917] transition-opacity hover:opacity-90"
            >
              <span className="flex -space-x-2" aria-hidden="true">
                <Image src="/team/hassan.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-[#1C1917]" />
                <Image src="/team/imran.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-[#1C1917]" />
              </span>
              Talk to the founders
            </QuoteModalButton>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border px-7 py-4 text-[17px] font-medium"
              style={{ borderColor: T.onDarkRule, color: T.onDark }}
            >
              Explore pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-lg text-[14px]" style={{ color: T.onDarkQuiet }}>
            A founder replies by email, usually within one business day. No obligation to start a project.
          </p>
        </div>
      </section>

      {/* Links. */}
      <div className="border-t px-6 pb-10 pt-16 md:px-10" style={{ borderColor: T.onDarkRule }}>
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" className="text-[22px]" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.onDark, textDecoration: "none" }}>
              PandaCodeGen<span style={{ color: T.onDarkAccent }}>.</span>
            </Link>
            <p className="mt-4 max-w-[22rem] text-[15px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
              Custom websites, online stores and software. New builds, redesigns and migrations, with founders involved
              from the first conversation.
            </p>
            <ul className="mt-6 space-y-2 text-[15px]">
              <li>
                <a href="mailto:info@pandacodegen.com" style={{ color: T.onDark }}>
                  info@pandacodegen.com
                </a>
              </li>
              <li>
                <Link href="/contact" style={{ color: T.onDark }}>
                  Contact form
                </Link>
              </li>
              <li>
                <address className="not-italic" style={{ color: T.onDarkQuiet }}>
                  12250 S Kirkwood Rd, Apt 1128
                  <br />
                  Stafford, TX 77477, United States
                </address>
              </li>
            </ul>
            {/* Keep fallbackToHome: it links the locale roots from every page. */}
            <div className="foot-lang mt-8 text-[14px]">
              <LocaleSwitcher label="Language" className="normal-case tracking-normal" fallbackToHome />
            </div>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <Heading>Services</Heading>
            <ul className="space-y-2.5 text-[15px]">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="foot-link" style={{ color: T.onDark }}>
                    {s.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {[
            { label: "Company", links: company },
            { label: "Resources", links: resources },
          ].map((col) => (
            <nav key={col.label} aria-label={col.label} className="lg:col-span-3">
              <Heading>{col.label}</Heading>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l.href + l.title}>
                    <Link href={l.href} className="foot-link block" style={{ color: T.onDark, textDecoration: "none" }}>
                      <span className="text-[15px] font-medium">{l.title}</span>
                      <span className="mt-0.5 block text-[13px]" style={{ color: T.onDarkQuiet }}>
                        {l.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal line. */}
        <div
          className="mx-auto mt-16 flex max-w-[1440px] flex-col gap-4 border-t pt-8 text-[13px] md:flex-row md:items-center md:justify-between"
          style={{ borderColor: T.onDarkRule, color: T.onDarkQuiet }}
        >
          <p>
            &copy; 2026 <strong className="font-semibold" style={{ color: T.onDark }}>Panda Group Ventures L.L.C.</strong>, trading as
            PandaCodeGen &middot; 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              ["/privacy", "Privacy"],
              ["/terms", "Terms"],
              ["/cookies", "Cookies"],
              ["/security", "Security"],
              ["/editorial-policy", "Editorial"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} style={{ color: T.onDarkQuiet }}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:info@pandacodegen.com?subject=Security%20report" style={{ color: T.onDarkQuiet }}>
                Report a security issue
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark, decorative. */}
      <div aria-hidden="true" className="overflow-hidden px-4 pb-4 md:px-8">
        <p
          className="select-none whitespace-nowrap text-center"
          style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "11.6vw", lineHeight: 0.8, letterSpacing: "-0.04em", color: "#2A2623" }}
        >
          PandaCodeGen.
        </p>
      </div>

      <style>{`
        .foot-link { transition: color .25s ease; }
        .foot-link:hover, .foot-link:focus-visible { color: ${T.onDarkAccent} !important; }
        .foot-lang li, .foot-lang a { color: ${T.onDark} !important; }
        .foot-lang li:first-child { color: ${T.onDarkQuiet} !important; }
        .foot-lang a:hover, .foot-lang a:focus-visible { color: ${T.onDarkAccent} !important; }
        .foot-lang [aria-hidden="true"] { color: ${T.onDarkRule} !important; }
      `}</style>
    </footer>
  );
}
