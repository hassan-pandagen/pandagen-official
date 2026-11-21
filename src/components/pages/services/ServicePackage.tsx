import Link from "next/link";
import s from "@/components/redesign/CommercialPreview.module.css";

// 21 Nov 2026, Hassan, Imran and the board's service-page plan: every service page
// carries the whole package and the terms, after its own platform-specific content.
// Facts match the homepage and company-facts.ts (prices, payments, refund, support).
const PARTS: readonly [string, string][] = [
  ["A content editor you use yourself", "Change your pages, posts and photos in an editor built into your site, without waiting for a developer."],
  ["Backend and client portal", "Customer logins, staff roles and records, built around how your business already works."],
  ["Bookings and payments", "Live times, online payment, confirmations and reminders, where your business needs them."],
  // Google's guide to its AI features (May 2026) says no special schema or AI files are needed; clear, crawlable answers are what count.
  ["AI-search setup", "Clear answers to the questions your customers ask, on fast pages search engines and AI tools can crawl, so ChatGPT and Google's AI answers can find and quote them. We can't promise any AI tool will quote you."],
  ["Care & SEO, if you want it", "Hosting, fixes, support, 4 blog posts a month and on-page SEO, from $500 a month. Optional; the site keeps working without it."],
];

export default function ServicePackage() {
  return (
    <section aria-labelledby="package-title" className={`${s.section} ${s.sectionAlt}`}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>Included with your new website</p>
        <h2 id="package-title" className={s.heading}>One package, not a pile of add-ons.</h2>
        <ul style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 32, padding: 0, listStyle: "none" }}>
          {PARTS.map(([title, body]) => (
            <li key={title} style={{ borderTop: "1px solid rgba(28,25,23,.16)", paddingTop: 16 }}>
              <h3 style={{ fontSize: 19, fontWeight: 650, margin: 0 }}>{title}</h3>
              <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6, color: "#44403c" }}>{body}</p>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 28, maxWidth: 820, fontSize: 16, lineHeight: 1.65, color: "#44403c" }}>
          Fixed price in writing before work starts. Websites are paid 30 / 70; business systems 30 / 40 / 30, with the last 30% after a live
          test. If we don&apos;t deliver your signed scope, you get 100% back. Free support after launch: 15 days on the $1,500 website, 30 days on
          everything else. Your accounts are in your name.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 24 }}>
          <Link href="/contact" className={s.button}>Get your free written check</Link>
          <Link href="/pricing" className={s.textLink}>See prices</Link>
        </div>
      </div>
    </section>
  );
}
