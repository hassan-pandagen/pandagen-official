import PreviewShell from "@/components/redesign/PreviewShell";
import styles from "./BlogRedesign.module.css";

// 30 Sep 2026: every page under /blog (index, 88 articles, 11 topic pages)
// gets the redesign's header and footer here, and BlogRedesign.module.css
// restyles the article templates, so the article files stay untouched.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <PreviewShell condensed contentTag="div">
      <div className={styles.surface}>{children}</div>
    </PreviewShell>
  );
}
