"use client";

import { Children, cloneElement, isValidElement, useRef, useState, type ReactElement, type ReactNode } from "react";

// 12 Oct 2026, owner: the blog index listed all 92 guides at once, about 68 screens on a phone.
// It now shows the first `initial` cards and reveals `step` more per click. Every card is still
// in the server HTML (later ones carry the `hidden` attribute), so all guide links stay crawlable.
// Focus moves to the first newly shown card so keyboard and screen-reader users keep their place.
export default function ShowMoreGuides({
  children,
  className,
  initial = 12,
  step = 12,
}: {
  children: ReactNode;
  className?: string;
  initial?: number;
  step?: number;
}) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<{ hidden?: boolean }>[];
  const [visible, setVisible] = useState(Math.min(initial, items.length));
  const listRef = useRef<HTMLDivElement>(null);
  const remaining = items.length - visible;

  function showMore() {
    const firstNew = visible;
    setVisible((count) => Math.min(count + step, items.length));
    requestAnimationFrame(() => {
      const next = listRef.current?.children[firstNew] as HTMLElement | undefined;
      next?.focus();
    });
  }

  return (
    <>
      <div ref={listRef} className={className}>
        {items.map((item, index) => (index < visible ? item : cloneElement(item, { hidden: true })))}
      </div>
      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={showMore}
            className="inline-flex min-h-12 items-center justify-center border border-[#1C1917] px-6 py-3 text-[15px] font-medium text-[#1C1917] transition-colors hover:bg-[#1C1917] hover:text-[#EBE9E4]"
          >
            Show more guides ({remaining} more)
          </button>
        </div>
      )}
    </>
  );
}
