import type { ReactNode } from "react";
import { T } from "@/components/redesign/tokens";
import WorkCaseLabel from "./WorkCaseLabel";

export type WorkCaseFact = { label: string; value: ReactNode };

/** A compact record of the project, directly below its preview. */
export default function WorkCaseFacts({ items }: { items: readonly WorkCaseFact[] }) {
  return (
    <dl data-work-facts aria-label="Project facts" className="grid gap-x-10 gap-y-7 pt-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ label, value }) => (
        <div key={label} className="min-w-0">
          <WorkCaseLabel as="dt">{label}</WorkCaseLabel>
          <dd className="mt-2 text-[15px] leading-[1.6]" style={{ color: T.body }}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
