import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import SiteNav from "@/components/layout/SiteNav";
import AskAssistantButton from "@/components/assistant/AskAssistantButton";
import { COMPANY } from "@/data/company-facts";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "This page isn't on our website. Explore our services, work and pricing, or return home.",
  // null clears the layout's index/follow tags. Next.js adds its own <meta name="robots" content="noindex">
  // to every 404 response, so a second tag here only duplicated it (owner, 10 Oct 2026).
  robots: null,
  openGraph: { images: [] },
  twitter: { images: [] },
};
const destinations = [
  { href: "/services", label: "Find help with your website", description: "New builds, improvements and moving platforms." },
  { href: "/work", label: "Explore the websites we've built", description: "See the work and the story behind each project." },
  { href: "/pricing", label: "See prices and what's included", description: "Build costs, agreed scope and ongoing care." },
  { href: "/contact", label: "Talk through your idea", description: "Speak directly with the founders." },
];
export default function NotFound() {
  const legalName = COMPANY.find(fact => fact.label === "Legal name")!.value;
  return <PreviewShell condensed showChrome={false} contentTag="div"><div className={styles.shell}>
    <SiteNav />
    <main className={styles.page}>
      <div className={styles.wrap}><section className={styles.layout} aria-labelledby="not-found-title">
        <div className={styles.copy}>
          <p className={styles.code} aria-label="Error 404">404<span>Page not found</span></p>
          <h1 id="not-found-title" className={styles.title}>This page isn&apos;t<br />on our website.</h1>
          <p className={styles.description}>The link may have changed, or the page may have moved. Explore these pages to find what you need.</p>
          <div className={styles.actions}><Link href="/" className={styles.home}>Return home <ArrowRight size={17} aria-hidden="true" /></Link><AskAssistantButton className={styles.assistant} /></div>
        </div>
        <nav aria-label="Useful destinations" className={styles.destinations}>
          <h2>Let&apos;s find your next step.</h2>
          <div className={styles.rows}>{destinations.map(({ href, label, description }, index) => <Link key={href} href={href} className={styles.destination}>
            <span className={styles.index} aria-hidden="true">0{index + 1}</span>
            <span><strong>{label}</strong><span className={styles.linkDescription}>{description}</span></span>
            <ArrowUpRight className={styles.arrow} size={23} aria-hidden="true" />
          </Link>)}</div>
          <div className={styles.more}><Link href="/blog">Read the guides <ArrowUpRight size={14} aria-hidden="true" /></Link><Link href="/free-audit">Get a free website audit <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
        </nav>
      </section></div>
    </main>
    <footer className={styles.footer}><div className={styles.footerInner}>
      <Link href="/" className={styles.brand}>PandaCodeGen.</Link>
      <p className={styles.legal}>© {new Date().getFullYear()} {legalName}</p>
      <div className={styles.footerLinks}><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    </div></footer>
  </div></PreviewShell>;
}
