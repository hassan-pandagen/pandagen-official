import type { Metadata } from "next";
import { WorkPreview } from "./WorkIndexDesign";

export const metadata: Metadata = {
  title: "Work preview",
  robots: { index: false, follow: false },
};

// The design and its helpers live in WorkIndexDesign.tsx: a page file may only
// export its default component and Next's own fields.
export default function Page() {
  return <WorkPreview />;
}
