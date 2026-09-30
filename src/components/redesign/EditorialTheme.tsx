import type { CSSProperties, ReactNode } from "react";
import { T } from "./tokens";
import styles from "./Editorial.module.css";

export default function EditorialTheme({ children }: { children: ReactNode }) {
  return <div className={styles.page} style={{ "--paper": T.paper, "--ink": T.ink, "--body": T.body, "--quiet": T.quiet, "--accent": T.accentText, "--rule": T.rule } as CSSProperties}>{children}</div>;
}
