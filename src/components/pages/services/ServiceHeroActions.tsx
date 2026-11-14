import QuoteModalButton from "@/components/ui/QuoteModalButton";
import CalModalButton from "@/components/ui/CalModalButton";
import { CAL_BOOKING_URL } from "@/lib/booking";
import commercial from "@/components/redesign/CommercialPreview.module.css";
import styles from "./ServiceHeroActions.module.css";

type ServiceHeroActionsProps = {
  cta: string;
  location: string;
  enquiryLabel?: string;
  workHref: string;
  workLabel?: string;
  /** Adds "Book a 15-minute call" beside the contact button. */
  bookCall?: boolean;
};

export default function ServiceHeroActions({
  cta,
  location,
  enquiryLabel = "Talk to the founders",
  workHref,
  workLabel = "See a completed project",
  bookCall = false,
}: ServiceHeroActionsProps) {
  return (
    <div className={styles.actions}>
      <div className={styles.buttons}>
        <QuoteModalButton cta={cta} location={location} className={`${commercial.button} ${styles.primary}`}>
          {enquiryLabel} <span aria-hidden="true">↗</span>
        </QuoteModalButton>
        {bookCall && (
          <CalModalButton fallbackHref={CAL_BOOKING_URL} className={`${commercial.buttonLight} ${styles.primary} ${styles.secondary}`}>
            Book a 15-minute call
          </CalModalButton>
        )}
      </div>
      <div className={styles.explore}>
        <a href={workHref}>
          <span>{workLabel}</span><span className={styles.arrow} aria-hidden="true">↓</span>
        </a>
        <a href="#questions">
          <span>Common questions</span><span className={styles.arrow} aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  );
}
