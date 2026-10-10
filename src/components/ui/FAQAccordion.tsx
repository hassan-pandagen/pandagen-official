import FaqRows from "./FaqRows";
import styles from "./FaqRows.module.css";

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Native accordion with all answers rendered in the initial HTML.
 * Owner chose collapsible rows on 10 October 2026. Earlier extraction checks
 * used computed visibility; those tools may omit closed answers. Do not
 * conditionally mount answer text or describe collapsed answers as visible.
 * showHeading=false preserves a page's own FAQ heading and anchor.
 */
export function FAQAccordion({ faqs, showHeading = true }: { faqs: FAQ[]; showHeading?: boolean }) {
  if (!showHeading) {
    return (
      <section className="mb-0">
        <FaqRows faqs={faqs} />
      </section>
    );
  }
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Questions &amp; answers</p>
        <h2 id="faq-heading" className={styles.heading}>Frequently Asked Questions</h2>
      </div>
      <FaqRows faqs={faqs} />
    </section>
  );
}
