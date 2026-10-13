import { T } from "./tokens";
import styles from "./HeadingEmphasis.module.css";

// Accents are editorial choices: only explicitly selected phrases receive one.
// Callers without a phrase render the ordinary heading text.
export default function HeadingEmphasis({ text, phrase, onDark = false }: {
  text: string; phrase?: string; onDark?: boolean;
}) {
  if (!phrase) return text;
  const start = text.toLowerCase().indexOf(phrase.toLowerCase());
  if (start < 0) return text;
  return <>{text.slice(0, start)}<span data-heading-emphasis className={styles.accent} style={{ color: onDark ? T.onDarkAccent : T.accentText }}>{text.slice(start, start + phrase.length)}</span>{text.slice(start + phrase.length)}</>;
}
