"use client";

import { useEffect, useState } from "react";

/**
 * In-page contents for a long guide.
 *
 * Added 16 Sep 2026. A source audit sampled six long articles and found no
 * contents navigation in any of them: the only in-page link in the rendered
 * markup was the global skip link. These guides run 3,600 to 5,700 words.
 *
 * DERIVED, NOT DECLARED. The list is read from the rendered `h2[id]` elements
 * rather than hand-written per article. A hand-written list is a second copy of
 * the headings, and this repo has spent days proving what happens to second
 * copies: one of them gets edited and the other does not. There is no list here
 * to fall out of date.
 *
 * COLLAPSED, WITH A SERVER-RENDERED SHELL. Both of those are about layout shift.
 * The first version returned null until hydration and then inserted the whole
 * list, which on the WordPress comparison is 23 entries appearing at once and
 * pushing the article down under the reader. The summary bar now renders on the
 * server at a fixed height and the list fills in behind it, so hydration changes
 * nothing visible, and opening it is the reader's own click rather than a jump.
 *
 * One shift case remains: an article with no `h2[id]` at all, where the bar is
 * removed after mount. Every article this is mounted on has twelve or more, and
 * the fix for a new one is to give its headings ids, not to drop this component.
 *
 * The cost of deriving client-side, stated plainly: the links are not in the
 * server HTML. That is acceptable for in-page anchors aimed at a reader who has
 * already arrived. It would not be acceptable for navigation between pages, and
 * this component must not be used for that.
 *
 * Headings without an id are skipped rather than given a generated one, so the
 * contents can never point at an anchor that does not exist.
 */
export default function ArticleContents({ label = "On this page" }: { label?: string }) {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main") ?? document.body;
    const seen = new Set<string>();
    const found = Array.from(main.querySelectorAll<HTMLHeadingElement>("h2[id]"))
      .map((h) => ({ id: h.id, text: (h.textContent ?? "").trim() }))
      .filter((h) => h.id && h.text)
      // An article that writes its own "Frequently Asked Questions" heading above
      // <FAQAccordion> produces two entries: its BlogHeader and the accordion's own
      // h2#faq-heading. Different ids, one destination as far as a reader is
      // concerned. Keep whichever comes first in the document.
      .filter((h) => {
        const key = h.text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    // react-hooks/set-state-in-effect is disabled here deliberately, and it is a
    // tradeoff rather than a case the rule does not cover. The rule is about
    // synchronous state updates in effects and the extra render they cause, not
    // only about values derived from props, so this does incur that extra render.
    // React documents DOM measurement as a legitimate reason to accept it. The read
    // happens once on an empty dependency list and the value never changes after.
    // Do not "fix" this with a setTimeout: that hides the lint without removing the
    // render, and adds a frame of delay on top.
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(found);
    setMounted(true);
  }, []);

  // Only after mount, and only if the article genuinely has no anchored headings.
  if (mounted && items.length === 0) return null;

  return (
    <details className="group my-10 rounded-2xl border border-stone-300 bg-stone-50">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest text-stone-600 transition-colors hover:text-cognac">
        <span>
          {label}
          {items.length > 0 && (
            <span className="ml-2 font-normal normal-case tracking-normal text-stone-500">
              {items.length} sections
            </span>
          )}
        </span>
        <span aria-hidden="true" className="text-lg leading-none text-stone-400 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <nav aria-label={label} className="border-t border-stone-300 px-6 py-5">
        <ol className="space-y-2">
          {items.map((item, i) => (
            <li key={item.id} className="flex gap-3 text-base leading-snug">
              <span aria-hidden="true" className="w-5 shrink-0 text-right font-bold text-stone-400">
                {i + 1}
              </span>
              <a
                href={`#${item.id}`}
                className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-cognac hover:decoration-cognac"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
