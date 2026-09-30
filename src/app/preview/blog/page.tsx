import type { Metadata } from "next";
import PreviewShell from "@/components/redesign/PreviewShell";
import { BlogIndexDesign } from "./BlogIndexDesign";

export const metadata: Metadata = { title: "Guides preview", robots: { index: false, follow: false } };

// The design lives in BlogIndexDesign.tsx, shared with the live /blog, which
// is now the canonical address; its links point there.
export default async function BlogPreview({ searchParams }: { searchParams: Promise<{ q?: string; topic?: string }> }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q.trim() : "";
  return <PreviewShell condensed><BlogIndexDesign q={q} topicSlug={params.topic} /></PreviewShell>;
}
