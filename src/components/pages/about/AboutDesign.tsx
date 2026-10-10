import Image from "next/image";
import Link from "next/link";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import styles from "./AboutPreview.module.css";


const founders = [
  { name: "Hassan Jamal", role: "Co-founder / Lead Engineer", image: "/team/hassan.png", href: "/about/hassan", body: "Hassan handles development, technical SEO and the engineering decisions behind each build. He works through what the site needs to do and how it will be checked.", link: "Read Hassan's technical guides", linkHref: "/blog" },
  { name: "Imran Raza Ladhani", role: "Co-founder / Head of Marketing", image: "/team/imran-editorial-alternative.png", href: "/about/imran", body: "Imran brings marketing experience across different fields to PandaCodeGen. He leads positioning, messaging and customer journeys, helping businesses explain their offer clearly and reach the people it is meant for.", link: "See our work", linkHref: "/work" },
];

const steps = [
  { title: "Understand the problem", body: "We review what your site does today, what gets in the way, and your budget and timeline. Repairing the current setup can be the right answer." },
  { title: "Agree the scope", body: "You see the deliverables, exclusions, third-party costs and what counts as finished before implementation begins." },
  { title: "Build and check", body: "We test the pages and interactions that matter, including forms, redirects, analytics and accessibility, against the agreed scope." },
  { title: "Launch and hand over", body: "Launch responsibilities, a rollback path, account access and handover are documented in your project terms." },
];

export default function AboutPreview() {
  return <PreviewShell condensed><div className={styles.page}>
    <header className={styles.hero}><div className={styles.wrap}>
      <div className={styles.heroTop}><span>About PandaCodeGen</span><span>Founder-led / built around real work</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>The people behind the work</p><h1>Know who{" "}<br />you&apos;re <em>building</em>{" "}<br />with.</h1>
          <p className={styles.heroLead}>You speak with the founders who scope the project and stay involved as it is built. Your business problem stays connected to the people making the decisions.</p>
          <div className={styles.heroActions}><a className={styles.primaryLink} href="#founders">Meet the founders <span aria-hidden="true">↘</span></a><a className={styles.textLink} href="#how-we-work">See how we work <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className={styles.heroVisual}><div className={styles.heroImage}><Image src="/team/imran-editorial.png" alt="Imran Raza Ladhani, PandaCodeGen co-founder" fill priority sizes="(max-width: 900px) 100vw, 48vw" className={styles.image} /></div><div className={styles.imageCaption}><span>01 / Imran Raza Ladhani</span><span>Head of Marketing</span></div></div>
      </div>
    </div></header>

    <nav className={styles.sectionNav} aria-label="About page sections"><div className={styles.wrap}><a href="#why">01 / Why we exist</a><a href="#founders">02 / The founders</a><a href="#how-we-work">03 / How we work</a><a href="#start">04 / Start a project</a></div></nav>

    <section id="why" className={styles.whySection} aria-labelledby="why-title"><div className={`${styles.wrap} ${styles.whyGrid}`}>
      <div><p className={styles.kicker}>01 / Why this business exists</p><h2 id="why-title">The work has to hold up <em>after launch.</em></h2></div>
      <div className={styles.whyCopy}><p>We build business websites, online stores and the systems behind them. The starting point is what your team and customers need to do.</p><p>Engineering and marketing work together from the first conversation. We look at how a site is built, how clearly it explains the offer, where an enquiry goes and what your team has to do next.</p><p className={styles.disclosure}>Our project records distinguish client work, founder-affiliated work and concepts, so you can understand the relationship behind each example.</p><Link className={styles.inlineLink} href="/work">See the projects and their context <span aria-hidden="true">↗</span></Link></div>
    </div></section>

    <section id="founders" className={styles.foundersSection} aria-labelledby="founders-title"><div className={styles.wrap}>
      <div className={styles.sectionHead}><p className={styles.kicker}>02 / The founders</p><h2 id="founders-title">Two people. <em>Clear responsibilities.</em></h2><p>Open a profile to see the person behind each part of the work.</p></div>
      <div className={styles.founderGrid}>{founders.map((founder, index) => <article className={styles.founderCard} key={founder.name}><div className={styles.founderImage}><Image src={founder.image} alt={founder.name} fill sizes="(max-width: 700px) 100vw, 50vw" className={styles.image} /></div><div className={styles.founderInfo}><div className={styles.founderMeta}><span>0{index + 1} / Founder</span><span>{founder.role}</span></div><h3>{founder.name}</h3><p>{founder.body}</p><div className={styles.founderLinks}><Link href={founder.href}>Meet {founder.name.split(" ")[0]} <span aria-hidden="true">↗</span></Link><Link href={founder.linkHref}>{founder.link} <span aria-hidden="true">↗</span></Link></div></div></article>)}</div>
    </div></section>

    <section id="how-we-work" className={styles.processSection} aria-labelledby="process-title"><div className={`${styles.wrap} ${styles.processGrid}`}>
      <div className={styles.processIntro}><p className={styles.kicker}>03 / How we work</p><h2 id="process-title">No mystery between the first call and <em>handover.</em></h2><p>Open each step to see what is decided and checked along the way.</p><Link href="/manifesto" className={styles.inlineLink}>Read our scope, acceptance and handover principles</Link></div>
      <div className={styles.accordion}>{steps.map((step, index) => <details key={step.title} className={styles.step} open={index === 0}><summary><span className={styles.stepNumber}>0{index + 1}</span><span>{step.title}</span><span className={styles.plus} aria-hidden="true">+</span></summary><p>{step.body}</p></details>)}</div>
    </div></section>

    <section id="start" className={styles.closingSection}><div className={`${styles.wrap} ${styles.closingGrid}`}><div><p className={styles.kicker}>04 / Start here</p><h2>Tell us where your website <em>gets in the way.</em></h2></div><div><p>Bring your current site, the work your team repeats, or the idea you want to build. We can start with the problem and work out the next step together.</p><QuoteModalButton cta="about_preview_closing" location="about" className={styles.primaryLink}>Talk to the founders <span aria-hidden="true">↗</span></QuoteModalButton><Link className={styles.inlineLink} href="/work">Browse the work <span aria-hidden="true">↗</span></Link></div></div></section>
  </div></PreviewShell>;
}
