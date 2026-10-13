import type { ReactNode } from "react";
import { T } from "@/components/redesign/tokens";

/** The stacked, image-led opening used by every project page. */
export default function WorkCaseOpening({ children }: { children: ReactNode }) {
  return (
    <section data-work-opening className="px-6 pb-6 pt-12 md:px-10 md:pb-16 md:pt-16" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1100px]">{children}</div>
    </section>
  );
}
