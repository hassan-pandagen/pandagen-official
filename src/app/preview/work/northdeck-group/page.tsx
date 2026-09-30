import { NorthDeckGroupCaseStudyPreview } from "./Design";

// The design lives in Design.tsx: a page file may only export its default
// component and Next's own fields, and the live /work/northdeck-group route renders
// the same design with its FAQs.
export default function Page() {
  return <NorthDeckGroupCaseStudyPreview />;
}
