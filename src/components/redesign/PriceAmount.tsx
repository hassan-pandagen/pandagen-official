import styles from "./PriceAmount.module.css";

export default function PriceAmount({ value, onDark = false }: { value: string; onDark?: boolean }) {
  const parts = value.match(/^(From\s+)?(\$[\d,]+)(.*)$/);
  if (!parts) return value;
  return <span className={`${styles.price} ${onDark ? styles.onDark : ""}`} data-price-amount>
    {parts[1] && <span className={styles.prefix}>{parts[1]}</span>}
    <span className={styles.amount}>{parts[2]}</span>{parts[3] && <span className={styles.suffix}>{parts[3]}</span>}
  </span>;
}
