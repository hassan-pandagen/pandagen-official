import type { Metadata } from "next";
import PreviewShell from "@/components/redesign/PreviewShell";
import styles from "@/components/redesign/PrinciplePages.module.css";
import { ogImageForPath } from "@/lib/seo/og";

const reportEmail = "mailto:info@pandacodegen.com?subject=Security%20report";

export const metadata: Metadata = {
  title: { absolute: "Security Reporting | PandaCodeGen" },
  description: "How to report a suspected security vulnerability affecting PandaCodeGen's website or first-party APIs.",
  alternates: { canonical: "/security" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Security Reporting | PandaCodeGen",
    description: "How to report a suspected security vulnerability affecting PandaCodeGen's website or first-party APIs.",
    type: "website",
    url: "https://www.pandacodegen.com/security",
    images: [ogImageForPath("/security")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Reporting | PandaCodeGen",
    description: "How to report a suspected security vulnerability affecting PandaCodeGen's website or first-party APIs.",
    images: [ogImageForPath("/security")],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/security#webpage",
      url: "https://www.pandacodegen.com/security",
      name: "Security Reporting",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/security#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Security Reporting", item: "https://www.pandacodegen.com/security" },
      ],
    },
  ],
};

const reportDetails = [
  "The affected URL or component",
  "Minimal steps that reproduce the issue",
  "What you expected and what happened",
  "The potential impact, without personal data or credentials",
];

const responseSteps = [
  { title: "Send it privately", body: "Email the report to info@pandacodegen.com with the subject Security report. Please do not publish details in an issue or social post while we investigate." },
  { title: "We assess the report", body: "We review reproducibility, affected systems and potential severity. We may ask for clarification using the contact details you provide." },
  { title: "We share material updates", body: "We use your contact details for relevant updates. This public page does not promise a fixed response or remediation deadline." },
];

export default function SecurityPage() {
  return (
    <PreviewShell condensed>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className={styles.page}>
        <header className={`${styles.hero} ${styles.heroLight}`}>
          <div className={styles.wrap}>
            <div className={styles.heroTop}>
              <span className={styles.eyebrow}>PandaCodeGen / Security reporting</span>
              <span className={styles.meta}>Private disclosure channel</span>
            </div>
            <div className={styles.heroGrid}>
              <h1>Report a <span className={styles.heroAccent}>security issue.</span></h1>
              <div className={styles.heroAside}>
                <p>Found a suspected vulnerability in our public website or first-party APIs? Tell us privately so we can investigate without exposing visitors or customer data.</p>
                <a className={styles.heroAction} href={reportEmail}>Email a security report <span aria-hidden="true">↗</span></a>
                <p className={styles.byline}>Send to info@pandacodegen.com with the subject “Security report.”</p>
              </div>
            </div>
          </div>
        </header>

        <nav className={styles.jumpNav} aria-label="On this page">
          <div className={`${styles.wrap} ${styles.jumpNavInner}`}>
            <a href="#report">01 / What to send</a>
            <a href="#scope">02 / Scope and boundaries</a>
            <a href="#response">03 / What happens next</a>
          </div>
        </nav>

        <section id="report" className={styles.securityIntro} aria-labelledby="report-title">
          <div className={`${styles.wrap} ${styles.splitGrid}`}>
            <div><span className={styles.sectionNumber}>01 / A useful report</span><h2 id="report-title">Enough detail to investigate. No sensitive data.</h2></div>
            <div className={styles.splitCopy}>
              <p>Use test data and the minimum activity needed to demonstrate the issue. A concise report helps us reproduce it without unnecessary access or disruption.</p>
              <ol className={styles.securityList}>
                {reportDetails.map((detail, index) => <li key={detail}><span>{String(index + 1).padStart(2, "0")}</span>{detail}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section id="scope" className={styles.scopeSection} aria-labelledby="scope-title">
          <div className={styles.wrap}>
            <span className={styles.sectionNumber}>02 / Scope and boundaries</span>
            <div className={styles.sectionHead}>
              <h2 id="scope-title">Keep the test limited to our systems.</h2>
              <p>Third-party services have their own disclosure channels. Please avoid activity that could harm availability or expose someone else&apos;s information.</p>
            </div>
            <div className={styles.scopeGrid}>
              <div className={styles.scopeColumn}>
                <h3>In scope</h3>
                <ul><li>The public PandaCodeGen website</li><li>Its first-party API routes</li><li>Minimal, non-destructive verification using test data</li></ul>
              </div>
              <div className={styles.scopeColumn}>
                <h3>Out of scope</h3>
                <ul><li>Third-party services and accounts</li><li>Social engineering or denial-of-service testing</li><li>Traffic that degrades the service or access to another person&apos;s data</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section id="response" className={styles.processSection} aria-labelledby="response-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div><span className={styles.sectionNumber}>03 / After you write</span><h2 id="response-title">A clear reporting path.</h2></div>
              <p>Reports are triaged by severity and reproducibility. We keep the communication private while the issue is assessed.</p>
            </div>
            <ol className={styles.processList}>
              {responseSteps.map((step, index) => (
                <li key={step.title} className={styles.processRow}>
                  <span className={styles.rowNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.securityClose} aria-labelledby="security-close-title">
          <div className={styles.wrap}>
            <span className={styles.sectionNumber}>Private channel</span>
            <h2 id="security-close-title">Ready to send the report?</h2>
            <p>Use the subject “Security report” and include only the details needed to reproduce the issue safely.</p>
            <a className={styles.heroAction} href={reportEmail}>info@pandacodegen.com <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </PreviewShell>
  );
}
