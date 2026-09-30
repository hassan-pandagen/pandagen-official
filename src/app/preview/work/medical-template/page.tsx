import { MedicalTemplateCaseStudyPreview } from "./Design";

// The design lives in Design.tsx: a page file may only export its default
// component and Next's own fields, and the live /work/medical-template route renders
// the same design with its FAQs.
export default function Page() {
  return <MedicalTemplateCaseStudyPreview />;
}
