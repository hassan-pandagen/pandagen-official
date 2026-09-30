import type { Metadata } from "next";
import { PricingPreview } from "./PricingDesign";

export const metadata: Metadata = { title: "Pricing preview", robots: { index: false, follow: false } };

// The design and its helpers live in PricingDesign.tsx: a page file may only
// export its default component and Next's own fields.
export default function Page() {
  return <PricingPreview />;
}
