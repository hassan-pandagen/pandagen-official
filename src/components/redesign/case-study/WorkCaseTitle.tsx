import type { ReactNode } from "react";
import styles from "./WorkCaseTitle.module.css";

export default function WorkCaseTitle({ children }: { children: ReactNode }) {
  return <h1 className={styles.title}>{children}<span aria-hidden="true">.</span></h1>;
}
