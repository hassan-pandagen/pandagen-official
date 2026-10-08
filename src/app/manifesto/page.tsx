import type { Metadata } from "next";
import Link from "next/link";
import PreviewShell from "@/components/redesign/PreviewShell";
import styles from "@/components/redesign/PrinciplePages.module.css";
import { ogImageForPath } from "@/lib/seo/og";
import { PORTABILITY_GUIDE } from "@/data/platform-portability";

export const metadata: Metadata = {
  title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
  description: "The principles behind PandaCodeGen: diagnose before rebuilding, agree a written scope, and make quality and handover checkable.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
    description: "Diagnose before rebuilding, agree a written scope, and make quality and handover checkable.",
    url: "https://www.pandacodegen.com/manifesto",
    type: "article",
    images: [ogImageForPath("/manifesto")],
  },
  twitter: {
    card: "summary_large_image",
    title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
    description: "Diagnose before rebuilding, agree a written scope, and make quality and handover checkable.",
    images: [ogImageForPath("/manifesto")],
  },
};

const principles = [
  { title: "Diagnose before recommending a rebuild", body: "A migration is justified only when the business goal, current platform, operating cost, content, integrations, and measured constraints support it. Sometimes repair is the better answer." },
  { title: "Define the scope before the price", body: "A proposal should list deliverables, exclusions, dependencies, client responsibilities, third-party costs, acceptance criteria, payment milestones, and change terms." },
  { title: "Treat URLs and content as business assets", body: "Migration planning includes a URL inventory, redirect map, content model, metadata, analytics, forms, integrations, cutover sequence, monitoring, and rollback conditions." },
  { title: "Measure performance honestly", body: "A performance target is meaningful only when it names the pages, device and network profile, tools, number of runs, measurement date, third-party state, exclusions, and remedy." },
  { title: "Put control and handover in writing", body: "Repository, hosting, domains, credentials, data, pre-existing materials, open-source licenses, ownership-transfer timing, backups, and retention should not be implied." },
  { title: "Make changes explicit", body: "When a request falls outside the accepted scope, the effect on cost, timeline, testing, and responsibility is documented and approved before the work changes." },
  { title: "Ship accessibility, privacy, and security work", body: "Keyboard access, readable contrast, consent, data minimization, endpoint controls, dependency checks, monitoring, and rollback are release responsibilities, not decorative badges." },
  { title: "Do not promise systems we do not control", body: "A technical implementation can reduce risk and improve foundations, but it cannot guarantee rankings, revenue, conversions, field performance, uptime, or AI citations." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.pandacodegen.com/manifesto#webpage",
  url: "https://www.pandacodegen.com/manifesto",
  name: "PandaCodeGen Delivery Principles",
  description: "Principles for scoping and delivering website migrations.",
  isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
  inLanguage: "en-US",
};

const proposalChecks = [
  "What is included and excluded",
  "Who supplies content and access",
  "How acceptance is measured",
  "What happens when scope changes",
  "Who controls accounts and source",
  "How launch and rollback are handled",
];

export default function ManifestoPage() {
  return (
    <PreviewShell condensed compactFooter>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={styles.page}>
        <header className={`${styles.hero} ${styles.heroDark}`}>
          <div className={styles.wrap}>
            <div className={styles.heroTop}>
              <span className={styles.eyebrow}>PandaCodeGen / Delivery principles</span>
              <span className={styles.meta}>01 / How we work</span>
            </div>
            <div className={styles.heroGrid}>
              <h1>Make the risky parts <span className={styles.heroAccent}>explicit.</span></h1>
              <div className={styles.heroAside}>
                <p>We would rather tell you a repair is enough than sell you a rebuild you do not need. Scope, price, acceptance and handover belong in writing before work begins.</p>
                <p className={styles.byline}>Written by Hassan Jamal, Co-founder and Lead Engineer, with co-founder Imran Raza Ladhani.</p>
              </div>
            </div>
          </div>
        </header>

        <nav className={styles.jumpNav} aria-label="On this page">
          <div className={`${styles.wrap} ${styles.jumpNavInner}`}>
            <a href="#decision">01 / The decision</a>
            <a href="#principles">02 / Our principles</a>
            <a href="#proposal">03 / The written proposal</a>
          </div>
        </nav>

        <section id="decision" className={styles.splitSection} aria-labelledby="decision-title">
          <div className={`${styles.wrap} ${styles.splitGrid}`}>
            <div>
              <span className={styles.sectionNumber}>01 / Before the build</span>
              <h2 id="decision-title">A framework is not a strategy.</h2>
            </div>
            <div className={styles.splitCopy}>
              <p>The starting point is the current system: what your customers need to do, what your team has to maintain, and what the evidence says is getting in the way.</p>
              <p>Sometimes the right work is a focused repair. When a replacement is justified, we plan continuity, quality, control and acceptance before choosing the implementation.</p>
              {/* 4 Oct 2026: the ownership principle, at the owner's request. The "we"
                  half is COMMERCIAL "Ownership on handover" in company-facts.ts. */}
              <p>You should own what you pay for. At handover you get the code and design files we made for you, the documentation, and control of the accounts the site runs on, and a care plan later doesn&apos;t change that. Website builders differ in how much of a site you can export, so before you choose one, check what its own help pages say you can take with you.</p>
              <Link className={styles.textLink} href={PORTABILITY_GUIDE.href}>{PORTABILITY_GUIDE.label} <span aria-hidden="true">↗</span></Link>
              <Link className={styles.textLink} href="/work">See the work and its context <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section id="principles" className={styles.principlesSection} aria-labelledby="principles-heading">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div><span className={styles.sectionNumber}>02 / What guides the work</span><h2 id="principles-heading">Eight principles.{" "}<br />One clear standard.</h2></div>
              <p>These are the decisions and records we expect a client to be able to examine, from the first recommendation to handover.</p>
            </div>
            <ol className={styles.principleList}>
              {principles.map((principle, index) => (
                <li key={principle.title} className={styles.principleRow}>
                  <span className={styles.rowNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="proposal" className={`${styles.closing} ${styles.manifestoClosing}`} aria-labelledby="proposal-title">
          <div className={`${styles.wrap} ${styles.closingGrid}`}>
            <div><span className={styles.sectionNumber}>03 / A useful next step</span><h2 id="proposal-title">The proposal should make the work checkable.</h2></div>
            <div>
              <p className={styles.closingCopy}>Before you agree to a project, you should be able to find these answers in the written scope.</p>
              <ul className={styles.checkList}>
                {proposalChecks.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>
                ))}
              </ul>
              <div className={styles.closingLinks}>
                <Link href="/pricing">Review example scopes ↗</Link>
                <Link href="/contact#contact-quote-form">Tell us about your project ↗</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PreviewShell>
  );
}
