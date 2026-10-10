import styles from "./FaqRows.module.css";

export type FaqRow = { question: string; answer: string };

/**
 * Native accordion; every answer is rendered in the initial HTML, so crawlers that read
 * the page source (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot) and the FAQPage
 * data get the full text. Tools that read only rendered text see closed answers as empty.
 * No shared `name`: it made opening one answer close an answer in another list on the
 * same page (code review, 10 Oct 2026). Rows open independently.
 */
export default function FaqRows({ faqs, className = "" }: { faqs: FaqRow[]; className?: string }) {
  return (
    <div className={`${styles.list} ${className}`} data-faq-list>
      {faqs.map((faq, index) => (
        <details key={faq.question} className={styles.row}>
          <summary className={styles.question}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.questionText}>
              {faq.question}
            </span>
            <span className={styles.toggle} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
