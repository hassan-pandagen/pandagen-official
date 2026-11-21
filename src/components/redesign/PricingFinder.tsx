import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CalModalButton from "@/components/ui/CalModalButton";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { CAL_BOOKING_URL } from "@/lib/booking";
import HeadingEmphasis from "./HeadingEmphasis";
import PriceAmount from "./PriceAmount";
import { DISPLAY, T } from "./tokens";
import styles from "./PricingFinder.module.css";

const PROJECTS = [
  {
    name: "Website",
    price: "$1,500",
    body: "A custom website with a content editor you use yourself. Pay 30 / 70.",
  },
  {
    name: "Moving your website",
    price: "$1,500",
    body: "Off WordPress, Wix, Squarespace or Shopify, with every page and post mapped and a redirect for every old URL. MC Patches moved off WordPress with us. The price depends on how many pages and posts you have.",
  },
];

const MONTHLY_PLANS = [
  {
    name: "Website Care & SEO Plan",
    price: "$500",
    body: "Hosting, maintenance, fixes, support, 2 developer hours, 4 blog posts a month and on-page SEO, and keeping your AI-search setup current. You approve every post before it goes live.",
  },
  {
    name: "SEO + Google Ads Plan",
    price: "$1,300",
    body: "Everything in Care & SEO, plus Google Ads management. We send a plain write-up before changing anything, and you approve every change. Ad spend is paid to Google directly.",
  },
];

const palette = {
  "--paper": T.paper,
  "--paper-hi": T.paperHi,
  "--ink": T.ink,
  "--body": T.body,
  "--accent": T.accentText,
  "--on-dark": T.onDark,
  "--on-dark-quiet": T.onDarkQuiet,
  "--on-dark-accent": T.onDarkAccent,
  "--on-dark-rule": T.onDarkRule,
  "--display-font": DISPLAY,
} as CSSProperties;

export default function PricingFinder() {
  return (
    <section aria-labelledby="pricing-title" className={styles.section} style={palette}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="pricing-title" className={styles.heading}>
            A <HeadingEmphasis text="clear price" phrase="clear price" /> before we build.
          </h2>
          <p>Your written proposal names every part and the final price before work starts.</p>
        </header>

        <div className={styles.projects}>
          <article className={styles.featured}>
            <h3>Website + business system</h3>
            <p className={styles.featuredPrice}>
              <span>from</span> <PriceAmount value="$10,000" onDark />
            </p>
            <p className={styles.featuredBody}>
              Connect your website, client portal, bookings, payments, reminders, follow-ups and accounting around how your business works. Every build includes AI-search setup, and we start with a free written check.
            </p>
            <p className={styles.featuredDetail}>
              The full package is usually $12,000. We reach $10,000 by leaving out parts you don&apos;t need, such as the client portal or accounting sync. Pay 30 / 40 / 30.
            </p>
            <CalModalButton fallbackHref={CAL_BOOKING_URL} className={`${styles.button} ${styles.featuredAction}`}>
              Book a free 15-minute call <ArrowRight size={17} aria-hidden="true" />
            </CalModalButton>
          </article>

          <ul className={styles.projectList}>
            {PROJECTS.map(({ name, price, body }) => (
              <li key={name} className={styles.plan}>
                <div className={styles.planHeader}>
                  <h3>{name}</h3>
                  <p>from <PriceAmount value={price} /></p>
                </div>
                <p className={styles.planBody}>{body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.monthly}>
          <div className={styles.monthlyHeader}>
            <h3>Optional monthly plans</h3>
            <p>Your site keeps working without a monthly plan.</p>
          </div>
          <ul className={styles.monthlyList}>
            {MONTHLY_PLANS.map(({ name, price, body }) => (
              <li key={name} className={styles.plan}>
                <div className={styles.planHeader}>
                  <h4>{name}</h4>
                  <p>from <PriceAmount value={price} /><span className={styles.unit}> a month</span></p>
                </div>
                <p className={styles.planBody}>{body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <Link href="/pricing" className={`${styles.button} ${styles.primary}`}>
            Explore pricing <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <QuoteModalButton cta="pricing_project" location="pricing" className={`${styles.button} ${styles.secondary}`}>
            Tell us about your project
          </QuoteModalButton>
        </div>
      </div>
    </section>
  );
}
