import type { ReactNode } from "react";
import { T } from "@/components/redesign/tokens";

/** Small editorial headings use the existing brand serif, rather than metadata type. */
export default function WorkCaseLabel({ children, as: Tag = "p", className = "" }: { children: ReactNode; as?: "p" | "dt"; className?: string }) {
  return (
    <Tag data-work-label className={`text-[20px] font-bold normal-case leading-[1.3] tracking-[-0.02em] ${className}`} style={{ fontFamily: "Zodiak, Georgia, serif", color: T.ink }}>
      {children}
    </Tag>
  );
}
