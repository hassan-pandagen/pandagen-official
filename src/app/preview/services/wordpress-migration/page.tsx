import type { Metadata } from "next";
import { WordPressMigrationPreview } from "./MigrationDesign";

export const metadata: Metadata = { title: "WordPress migration preview", robots: { index: false, follow: false } };

// The design and its helpers live in MigrationDesign.tsx: a page file may only
// export its default component and Next's own fields.
export default function Page() {
  return <WordPressMigrationPreview />;
}
