import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ONE_TEAM } from "@/data/company-facts";
import { BODY, DISPLAY, T, UI } from "./tokens";
import styles from "./OneTeam.module.css";

const services = ["Website", "Backend", "SEO", "Ads", "Tracking"];

export default function OneTeam() {
  return (
    <section data-home-one-team aria-labelledby="one-team-title" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>Connected work. Clear responsibility.</p>
            <h2 id="one-team-title" className={styles.title} style={{ fontFamily: DISPLAY }}>
              One team.<br /><span style={{ color: T.accentText }}>One place to turn.</span>
            </h2>
            <div className={styles.summary} style={{ fontFamily: BODY }}>
              <p className={styles.lead}>Your website should do more than look good.</p>
              <p>It should bring in enquiries, connect customers to your team and keep work moving behind the scenes.</p>
              <p>We build your website, backend and marketing connections around that journey, so you spend less time joining the pieces together.</p>
            </div>
          </div>
          <div className={styles.visual}>
            <p className={styles.eyebrow}>Your website. Your systems. Working together.</p>
            <div className={styles.diagram} role="img" aria-label="Your website, backend, SEO, ads and tracking connected through PandaCodeGen, your team behind the scenes. Hassan and Imran work with you from the first idea to the next update.">
              <svg className={styles.lines} viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true">
                {[60, 180, 300, 420, 540].map((x, i) => (
                  <g key={x}><path d={`M ${x} 52 V ${100 + Math.abs(2 - i) * 16} Q ${x} 180 300 180 V 210`} pathLength="1" /><path className={styles.flow} style={{ animationDelay: `-${i * 0.7}s` }} d={`M ${x} 52 V ${100 + Math.abs(2 - i) * 16} Q ${x} 180 300 180 V 210`} pathLength="1" /></g>
                ))}

              </svg>
              <div className={styles.services}>{services.map((name) => <span key={name}>{name}</span>)}</div>
              <div className={styles.hub}>
                <span className={styles.eyebrow}>Your team behind the scenes</span>
                <strong style={{ fontFamily: BODY }}>PandaCodeGen<span>.</span></strong>
                <span>Hassan &amp; Imran. Working with you, every step.</span>
              </div>
              <span className={styles.endpoint}>One team to build, connect and support.</span>
            </div>
            <p className={styles.visualNote}>We take responsibility for the services you hire us to deliver.</p>
          </div>
        </div>

        <div className={styles.responses}>
          {[{ title: "Something breaks? Start with us.", text: ONE_TEAM.whenItBreaks }, { title: "Updates, with someone accountable.", text: ONE_TEAM.security }].map((item, i) => (
            <div className={styles.response} key={item.title}>
              <span className={styles.number}>0{i + 1}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </div>
          ))}
        </div>

        <div className={styles.examples}>
          {ONE_TEAM.examples.map((example) => (
            <Link key={example.href} href={example.href} className={styles.example}>
              <span className={styles.eyebrow}>{example.relationship}</span>
              <span className={styles.projectTitle} style={{ fontFamily: UI }}>{example.name}<ArrowUpRight aria-hidden="true" size={24} /></span>
              <span className={styles.projectDescription}>{example.did}</span>
              <span className={styles.read}>Explore the project</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
