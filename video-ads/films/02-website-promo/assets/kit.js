// Shared helpers for the Film 02 scenes. Loaded once by each root (index.html and formats/*/index.html)
// after window.FILM = { format, motion } is set. Every helper adds tweens to a paused GSAP timeline at
// scene-local times, so each frame depends only on the time HyperFrames seeks to.
(function () {
  const F = window.FILM || { format: "16x9", motion: "full" };
  const R = F.motion === "reduced";
  const SIZE = { "16x9": [1920, 1080], "9x16": [1080, 1920], "1x1": [1080, 1080] }[F.format];
  // Format and motion classes for scene CSS (set here so they survive however the root is compiled).
  document.documentElement.classList.add("f" + F.format, "m-" + F.motion);

  // Where the headline and the visual sit in each format. 9:16 keeps text inside y 220-1440, x <= 940
  // (clear of the top bar, the caption/CTA zone and the right-hand rail).
  const SLOT = {
    "16x9": { head: { x: 120, y: 540, w: 760, size: 118, anchor: "mid" }, vis: { x: 930, y: 100, w: 900, h: 880 } },
    "9x16": { head: { x: 80, y: 250, w: 860, size: 124, anchor: "top" }, vis: { x: 50, y: 640, w: 980, h: 940 } },
    "1x1": { head: { x: 90, y: 74, w: 900, size: 86, anchor: "top" }, vis: { x: 80, y: 300, w: 920, h: 730 } },
  }[F.format];

  // Shrink a headline until its widest line fits maxW. Runs once, after fonts load.
  function fit(head, maxW, size) {
    let s = size;
    head.style.fontSize = s + "px";
    const widest = () => Math.max(...[...head.querySelectorAll(".in")].map((e) => e.scrollWidth));
    for (let i = 0; i < 60 && widest() > maxW; i++) { s *= 0.97; head.style.fontSize = s + "px"; }
    return s;
  }

  // Put a headline in its slot. opts can override x, y, w, size, anchor.
  function head(el, opts) {
    const h = Object.assign({}, SLOT.head, opts || {});
    el.style.left = h.x + "px";
    el.style.width = h.w + "px";
    fit(el, h.w, h.size);
    const hh = el.getBoundingClientRect().height;
    el.style.top = (h.anchor === "mid" ? h.y - hh / 2 : h.anchor === "bottom" ? h.y - hh : h.y) + "px";
    return { top: parseFloat(el.style.top), height: hh, bottom: parseFloat(el.style.top) + hh };
  }

  // Scale a fixed-size visual (designed at refW x refH) into a slot, centred. The wrapper is never tweened.
  function place(wrap, refW, refH, slot) {
    const v = Object.assign({}, SLOT.vis, slot || {});
    const s = Math.min(v.w / refW, v.h / refH);
    Object.assign(wrap.style, {
      position: "absolute", width: refW + "px", height: refH + "px", transformOrigin: "0 0",
      left: v.x + (v.w - refW * s) / 2 + "px", top: v.y + (v.h - refH * s) / 2 + "px",
      transform: `scale(${s})`,
    });
    return s;
  }

  // Headline lines rise out of a mask, one after another (135 % clears the mask's descender padding).
  // Reduced motion: a plain fade.
  function reveal(tl, el, t, stagger = 0.14) {
    const lines = el.querySelectorAll(".in");
    if (R) return tl.fromTo(lines, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none", stagger: 0.08 }, t);
    tl.fromTo(lines, { yPercent: 135 }, { yPercent: 0, duration: 0.8, ease: "power4.out", stagger }, t);
  }
  function conceal(tl, el, t) {
    const lines = el.querySelectorAll(".in");
    if (R) return tl.fromTo(lines, { opacity: 1 }, { opacity: 0, duration: 0.45, ease: "none", immediateRender: false }, t);
    tl.fromTo(lines, { yPercent: 0 }, { yPercent: -135, duration: 0.45, ease: "power3.in", stagger: 0.06, immediateRender: false }, t);
  }

  // Entrance: from -> to. Reduced motion: appear in the final pose with a fade (at least 0.45 s).
  function inn(tl, el, from, to, t, d = 0.9, ease = "power3.out") {
    if (R) {
      const still = Object.assign({}, to, { opacity: 0 });
      return tl.fromTo(el, still, Object.assign({}, to, { opacity: to.opacity ?? 1, duration: Math.max(0.45, d * 0.6), ease: "none" }), t);
    }
    tl.fromTo(el, from, Object.assign({}, to, { duration: d, ease }), t);
  }
  // Exit: from -> to. Reduced motion: fade out where it is.
  function out(tl, el, from, to, t, d = 0.5, ease = "power2.in") {
    if (R) return tl.fromTo(el, { opacity: from.opacity ?? 1 }, { opacity: 0, duration: Math.max(0.45, d), ease: "none", immediateRender: false }, t);
    tl.fromTo(el, from, Object.assign({}, to, { duration: d, ease, immediateRender: false }), t);
  }
  // A move inside a scene (page scroll, camera drift). Reduced motion: hold, then a short dip to the new state.
  function move(tl, el, from, to, t, d = 0.9, ease = "power2.inOut", dip) {
    if (!R) return tl.fromTo(el, from, Object.assign({}, to, { duration: d, ease, immediateRender: false }), t);
    const target = dip || el;
    tl.fromTo(target, { opacity: 1 }, { opacity: 0, duration: 0.25, ease: "none", immediateRender: false }, t);
    tl.fromTo(el, from, Object.assign({}, to, { duration: 0.01, immediateRender: false }), t + 0.25);
    tl.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none", immediateRender: false }, t + 0.27);
  }
  // A long settle into a pose. Reduced motion: start in the final pose.
  function settle(tl, el, from, to, t, d, ease = "sine.out") {
    if (R) return gsap.set(el, to);
    tl.fromTo(el, from, Object.assign({}, to, { duration: d, ease }), t);
  }
  // Slow ambient motion (parallax, breathing). Skipped in reduced motion.
  function drift(tl, el, from, to, t, d) {
    if (R) return;
    tl.fromTo(el, from, Object.assign({}, to, { duration: d, ease: "none", immediateRender: false }), t);
  }
  // Small pop for chips and badges.
  function pop(tl, el, t, d = 0.5) {
    if (R) return tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: "none" }, t);
    tl.fromTo(el, { opacity: 0, scale: 0.6, y: 18 }, { opacity: 1, scale: 1, y: 0, duration: d, ease: "back.out(2.2)" }, t);
  }

  // HyperFrames keeps a scene's host at display:none until its slot starts, so nothing inside can be
  // measured. While a scene lays itself out, any hidden ancestor is shown (still visibility:hidden),
  // then put back exactly as it was.
  function unhide(el) {
    const changed = [];
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      if (getComputedStyle(n).display === "none") { changed.push([n, n.style.getPropertyValue("display"), n.style.getPropertyPriority("display")]); n.style.setProperty("display", "block", "important"); }
    }
    return () => changed.reverse().forEach(([n, v, p]) => (v ? n.style.setProperty("display", v, p) : n.style.removeProperty("display")));
  }
  // Build once the brand fonts are loaded (they are requested explicitly: text in a hidden scene does
  // not trigger a load), then register the timeline last, as the HyperFrames contract asks.
  const FONTS = ["400 100px Anton", "italic 400 100px 'PT Serif'", "400 100px 'PT Serif'", "500 30px Inter", "600 30px Inter"];
  function ready(id, build) {
    Promise.all(FONTS.map((f) => document.fonts.load(f))).then(() => document.fonts.ready).then(() => {
      // The runtime drops the scene root's own id when it mounts it, so start from the host slot.
      const restore = unhide(document.querySelector(`[data-composition-id="${id}"]`));
      const tl = gsap.timeline({ paused: true });
      build(tl);
      restore();
      window.__timelines[id] = tl;
    });
  }

  window.KIT = { F, R, SIZE, SLOT, fit, head, place, reveal, conceal, inn, out, move, settle, drift, pop, ready };
})();
