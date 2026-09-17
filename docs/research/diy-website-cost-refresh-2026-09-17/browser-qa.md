# Browser QA, and the contents-link defect it found

Run 17 September 2026 against a local production build. This closes the gap the
[README](README.md) recorded as its one open item: "no browser was available ... Desktop/mobile
screenshots, visual table layout and a real keyboard walkthrough were not completed."

Playwright 1.63.0, Chromium, two viewports: 1440x900 desktop and the iPhone 13 profile at
390x664. The local production server was stopped afterwards.

## What passed

| Check | Desktop | Mobile |
| --- | --- | --- |
| Page scrolls sideways | no | no |
| Elements overflowing the viewport, outside the table scroll boxes | 0 | 0 |
| Console errors and page errors | 0 | 0 |
| `h1` count, heading level skips | 1, none | 1, none |
| In-page anchors whose target is missing | 0 of 9 | 0 of 9 |
| Tab stops reached, any with no visible focus ring | 45, none | n/a |
| FAQ accordion opens from the keyboard | yes, `aria-expanded` flips on Enter | n/a |

Both tables carry `role="region"`, an `aria-label` and `tabindex="0"`. At 390px the options
table is wider than the viewport and scrolls inside its own box rather than clipping, so a
keyboard user can reach and scroll it. The costs table fits without scrolling. Three columns
at 390px are tight, with some cells wrapping to one word per line; that is legible and was
left alone.

## The defect

**Clicking a contents link on desktop did not take the reader to the section.** On a freshly
loaded page the target heading settled far below where it belongs, and the further down the
page the target was, the worse it got.

| Page | Contents link | Heading position after the click | |
| --- | --- | --- | --- |
| `/blog/is-it-cheaper-to-build-your-own-website` | `#cost-example` | 750px | should be 100px |
| `/blog/how-to-speed-up-your-website` | `#where-to-start` | 1,162px | below the fold |
| `/blog/wordpress-vs-nextjs` | `#different` | 2,966px | far below the fold |
| `/blog/aeo-playbook-built-into-every-website` | `#are-you-losing` | 3,356px | far below the fold |

On a 900px-tall viewport, anything past about 800px is off-screen. On three of those pages the
reader clicked a contents entry and the section they asked for was nowhere in view.

It did not reproduce everywhere, which is why it survived this long:

- Mobile was correct. Lenis only initialises at `min-width: 768px`.
- Reduced motion was correct. Lenis does not initialise at all.
- Loading a URL that already carries the hash was correct, on both viewports. Only clicking a
  link on an already-open page was affected.
- Scrolling with the wheel first and then clicking was correct, which is the detail that
  points at the cause.

## Cause

`src/components/layout/SmoothScroll.tsx` passed `anchors: { offset: -96 }` to Lenis, handing
anchor handling to the library. Lenis resolves an element target like this, in
`node_modules/lenis/dist/lenis.mjs`:

```js
const rect = node.getBoundingClientRect();
target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
```

`this.animatedScroll` is Lenis's own scroll value, not the document's. Before Lenis has
processed a real scroll event that value has not synced, so the computed destination is wrong
by the drift. A wheel scroll syncs it, which is exactly the behaviour observed.

Lenis does not call `preventDefault` on these clicks, so the native jump runs too and lands
correctly. Lenis then animates away from it. The reader sees the right position for a frame
and is then moved off it.

A dispatched `resize` event did not fix it, and neither did waiting for `document.fonts.ready`,
so stale measurements were ruled out before the change was made.

## Fix

`anchors: false`, plus a delegated click handler that computes the absolute position itself and
passes a number, which skips the `animatedScroll` arithmetic:

```ts
lenis.scrollTo(target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
```

`HEADER_OFFSET` is 100 and matches `scroll-padding-top` on `html` in `globals.css`, so the
native jump and the Lenis animation settle on the same pixel instead of disagreeing by the 4px
the old `-96` introduced. The handler ignores modified clicks, non-primary buttons and
already-defaulted events, and is removed on unmount. The native jump is left alone, so the URL
hash and the focus target are unchanged.

After the change, every case lands at exactly 100px: all four pages above, fresh load and after
scrolling, Lenis on and off, desktop and mobile.

This is a shared component. Eight published pages carry an in-page contents nav, and all of them
were affected on desktop.

## Scope and limits

Chromium only. Safari and Firefox were not exercised, and no real assistive technology was used,
so this is a keyboard and structure check rather than a full accessibility audit. The consent
banner overlays content on a first visit, as designed; screenshots were taken with it dismissed.
No form was submitted, no payment was made and nothing was deployed.
