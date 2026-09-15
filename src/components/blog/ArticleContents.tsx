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
 * the headings, and this repo has spent two days proving what happens to second
 * copies: one of them gets edited and the other does not. There is no list here
 * to fall out of date.
 *
 * The cost of that choice, stated plainly: this renders after hydration, so the
 * links are not in the server HTML. That is acceptable because these are in-page
 * anchors for a reader who has already arrived. It would not be acceptable for
 * navigation between pages, and this component must not be used for that.
 *
 * Headings without an id are skipped rather than given a generated one, so the
 * contents can never point at an anchor that does not exist.
 */
export default function ArticleContents({ label = "On this page" }: { label?: string }) {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

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
        return !(h.id === "faq-heading" && seen.has("frequently asked questions"));
      });
    // Below four entries a contents list costs more attention than it saves.
    //
    // react-hooks/set-state-in-effect is disabled for this one line deliberately,
    // and it is a tradeoff rather than a case the rule does not cover. The rule is
    // about synchronous state updates in effects and the extra render they cause,
    // not only about values derived from props, so this does incur that extra
    // render. React documents DOM measurement as a legitimate reason to accept it.
    // The read happens once on an empty dependency list and the value never changes
    // afterwards. Do not "fix" this with a setTimeout: that would hide the lint
    // without removing the render, and would add a frame of delay on top.
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(found.length >= 4 ? found : []);
  }, []);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label={label}
      className="my-10 rounded-2xl border border-stone-300 bg-stone-50 p-6"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-600">{label}</p>
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
  );
}
