import type { Metadata } from "next";
import PreviewShell from "@/components/redesign/PreviewShell";
import ArticleReadingCue from "@/components/blog/ArticleReadingCue";
import styles from "./BlogRedesign.module.css";

// Blog posts opt out of the root "%s | PandaCodeGen" title template: post titles
// are written to fit the ~60-char SERP limit on their own, and the brand suffix
// was pushing every post title into truncation (audit, Jul 13 2026). Restored
// 3 Oct 2026: the 30 Sep redesign move dropped this block by mistake, which
// added the suffix to 104 titles carrying 157k impressions in 90 days.
export const metadata: Metadata = {
  title: { template: "%s", default: "Web Development & Performance Blog | PandaCodeGen" },
};

// 30 Sep 2026: every page under /blog (index, 88 articles, 11 topic pages)
// gets the redesign's header and footer here, and BlogRedesign.module.css
// restyles the article templates, so the article files stay untouched.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <PreviewShell condensed contentTag="div">
      <div className={styles.surface}>
        {children}
        <ArticleReadingCue />
      </div>
    </PreviewShell>
  );
}
