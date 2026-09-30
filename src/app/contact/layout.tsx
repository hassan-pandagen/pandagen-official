import RestyledShell from "@/components/redesign/RestyledShell";
// 30 Sep 2026: the redesign shell for this route; the page content is
// unchanged. See src/components/redesign/RestyledShell.tsx.
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RestyledShell kind="commercial">{children}</RestyledShell>
}
