import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkReel, { type ReelProject } from "@/components/redesign/WorkReel";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { caseStudy } from "@/data/case-study-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import styles from "./WorkIndexDesign.module.css";

const clientWork: ReelProject[] = [
  { name: "A Step Above Medical", label: "Medical website and training management system", relationship: "Independent client", status: MIGRATION_PROJECT_DETAILS.aStepAboveMedical.status, href: "/work/a-step-above-medical", image: "/work/a-step-above-medical-preview-homepage.png" },
  { name: "NorthDeck Group", label: "Security systems", relationship: "Independent client", href: "/work/northdeck-group", image: "/work/northdeck-group.png" },
  { name: caseStudy("emblematic-studio").name, label: "Product catalogue", relationship: caseStudy("emblematic-studio").relationship, href: "/work/emblematic-studio", image: "/work/emblematic-studio.png" },
  { name: caseStudy("mycustompatches").name, label: "WordPress migration", relationship: caseStudy("mycustompatches").relationship, href: "/work/mycustompatches", image: "/work/mycustompatches.png" },
  { name: caseStudy("ladies-4-jesus").name, label: "Community and publishing", relationship: caseStudy("ladies-4-jesus").relationship, href: "/work/ladies-4-jesus", image: "/work/ladies-4-jesus-hero.png" },
  { name: "Saforne", label: "Leather goods store", relationship: "Independent client", status: "Preview build, not yet selling", href: "/work/saforne", image: "/work/saforne.png" },
];

const founderAffiliated: ReelProject[] = [
  { name: caseStudy("panda-patches").name, label: "Online store, customer tools and order management", relationship: caseStudy("panda-patches").relationship, href: "/work/panda-patches", image: "/work/panda-patches.png", thumbnailImage: "/work/panda-patches-calculator-configure.png", thumbnailLabel: "Panda Patches / configurator" },
  { name: caseStudy("enterprise-ops").name, label: "Custom CRM & workflow automation", relationship: caseStudy("enterprise-ops").relationship, href: "/work/enterprise-ops", image: "/work/enterprise-ops.png" },
];

const conceptBuilds: ReelProject[] = [
  { name: caseStudy("medical-template").name, label: "Medical website design", relationship: caseStudy("medical-template").relationship, href: "/work/medical-template", image: "/work/medical-template-hero.png" },
  { name: caseStudy("panda-publisher").name, label: "Author services", relationship: caseStudy("panda-publisher").relationship, href: "/work/panda-publisher", image: "/work/panda-publisher-library.png" },
  { name: caseStudy("sleek-jackets").name, label: "Outerwear store", relationship: caseStudy("sleek-jackets").relationship, href: "/work/sleek-jackets", image: "/work/sleek-jackets-hero.png" },
];

/** Display order also supplies the live page's structured project list. */
export function workIndexItems(): { name: string; href: string }[] {
  return [...clientWork, ...founderAffiliated, ...conceptBuilds].map(({ name, href }) => ({ name, href }));
}

export function WorkPreview() {
  return (
    <PreviewShell condensed footerLinksOnly>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Selected work / Website, commerce and software projects</p>
      <h1 className={styles.heroTitle}>Websites, stores <span style={{ color: "#ebe9e4" }}><HeadingEmphasis text="and software." phrase="software" onDark /></span></h1>
            <p className={styles.heroCopy}>Browse independent client work, founder-owned systems and portfolio concepts. Each project record explains what we built and the evidence behind it.</p>
            <nav className={styles.heroNav} aria-label="Work categories">
              <a href="#client-work"><span className={styles.heroNavNumber}>01</span><span>Client work</span><span aria-hidden="true">↓</span></a>
              <a href="#founder-work"><span className={styles.heroNavNumber}>02</span><span>Founder-affiliated</span><span aria-hidden="true">↓</span></a>
              <a href="#portfolio-concepts"><span className={styles.heroNavNumber}>03</span><span>Portfolio concepts</span><span aria-hidden="true">↓</span></a>
            </nav>
          </div>
        </div>
      </header>

      <WorkReel
        id="client-work"
        number="01"
        title="Client work."
        description="Sites and systems built for independent clients. Select a still to see the full project, then open its record for the details."
        projects={clientWork}
      />

      <WorkReel
        id="founder-work"
        number="02"
        title="Founder-affiliated."
        description="Products owned by a PandaCodeGen co-founder. They show operating experience and are labelled separately from independent client work."
        projects={founderAffiliated}
        dark
      />

      <WorkReel
        id="portfolio-concepts"
        number="03"
        title="Portfolio concepts."
        description="Self-initiated design and build examples that show the kind of work we can make. These are not client commissions."
        projects={conceptBuilds}
      />

      <section className={styles.closing}>
        <div className={[styles.wrap, styles.closingInner].join(" ")}>
          <div>
            <p className={styles.eyebrow}>Your project could be next</p>
            <h2>Have something <span>in mind?</span></h2>
            <p>Tell us what your site or system needs to do. We can start with a question, a rough idea or an existing brief.</p>
          </div>
          <div className={styles.closingActions}>
            <QuoteModalButton cta="work_index_talk" location="work" className={styles.primary}>
              Discuss your project <ArrowRight size={18} aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services" className={styles.secondary}>Explore services <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
