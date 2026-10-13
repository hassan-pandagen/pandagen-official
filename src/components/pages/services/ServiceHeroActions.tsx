import QuoteModalButton from "@/components/ui/QuoteModalButton";
import commercial from "@/components/redesign/CommercialPreview.module.css";
import styles from "./ServiceHeroActions.module.css";

type ServiceHeroActionsProps = {
  cta: string;
  location: string;
  enquiryLabel?: string;
  workHref: string;
  workLabel?: string;
};

export default function ServiceHeroActions({
  cta,
  location,
  enquiryLabel = "Discuss your project",
  workHref,
  workLabel = "See a completed project",
}: ServiceHeroActionsProps) {
  return (
    <div className={styles.actions}>
      <QuoteModalButton cta={cta} location={location} className={`${commercial.button} ${styles.primary}`}>
        {enquiryLabel} <span aria-hidden="true">↗</span>
      </QuoteModalButton>
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
