import type { Metadata } from "next";

// Blog posts opt out of the root "%s | PandaCodeGen" title template: post titles
// are written to fit the ~60-char SERP limit on their own, and the brand suffix
// was pushing every post title into truncation (audit, Jul 13 2026).
export const metadata: Metadata = {
  title: { template: "%s", default: "Web Development & Performance Blog | PandaCodeGen" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
