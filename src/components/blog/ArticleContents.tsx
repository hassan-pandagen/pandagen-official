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
    const found = Array.from(main.querySelectorAll<HTMLHeadingElement>("h2[id]"))
      .map((h) => ({ id: h.id, text: (h.textContent ?? "").trim() }))
      .filter((h) => h.id && h.text);
    // Below four entries a contents list costs more attention than it saves.
    //
    // react-hooks/set-state-in-effect is disabled for this one line deliberately.
    // The rule exists to stop effects that derive state from props or other state,
    // which should be computed during render instead. This reads the rendered DOM,
    // which does not exist until after mount and has no value to derive from. It
    // runs once, on an empty dependency list, and sets a value that never changes
    // afterwards. There is no external store to subscribe to, so useSyncExternalStore
    // would need a cached snapshot to avoid a render loop and would be more
    // machinery for the same single read.
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
