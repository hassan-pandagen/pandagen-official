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
  // A move inside a scene (page scroll, screen change). Reduced motion: hold, then a plain cut to the
  // new state halfway through (no slide, no fade to blank).
  function move(tl, el, from, to, t, d = 0.9, ease = "power2.inOut") {
    if (!R) return tl.fromTo(el, from, Object.assign({}, to, { duration: d, ease, immediateRender: false }), t);
    tl.fromTo(el, from, Object.assign({}, to, { duration: 0.001, immediateRender: false }), t + d / 2);
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

  // Portfolio pages (assets/work, copied from public/work by tools/prepare_work.py) and site captures.
  const W = (n) => `assets/work/${n}.jpg`;
  const P = {
    sleek: W("sleek-jackets-hero"), sleekCol: W("sleek-jackets-collection"), sleekCore: W("sleek-jackets-core-edit"), sleekDet: W("sleek-jackets-details"),
    med: W("medical-template-hero"), medAreas: W("medical-template-areas"), medCare: W("medical-template-care"), medNon: W("medical-template-non-surgical"),
    nd: W("northdeck-group-home"), ndEnv: W("northdeck-group-environments"), ndProc: W("northdeck-group-process"), ndScen: W("northdeck-group-scenario"),
    ndIntro: W("northdeck-group-services-intro"), ndSys: W("northdeck-group-systems"),
    emb: W("emblematic-studio-home"), embEmb: W("emblematic-studio-embroidered"), embLib: W("emblematic-studio-library"), embDir: W("emblematic-studio-direction-test"),
    mcp: W("mycustompatches"), mcpCat: W("mycustompatches-categories"), mcpProc: W("mycustompatches-process"), mcpProd: W("mycustompatches-product-template"),
    l4j: W("ladies-4-jesus-hero"), l4jSec: W("ladies-4-jesus-sections"), l4jDev: W("ladies-4-jesus-devotionals"),
    pub: W("panda-publisher"), pubLib: W("panda-publisher-library"), pubJour: W("panda-publisher-journey"),
    saf: W("saforne"), asm: W("a-step-above-medical-preview-homepage"),
    pcgHead: "assets/site/home-head.png", pcgServ: "assets/site/home-services.png", pcgAuto: "assets/site/home-automation.png",
    mHead: "assets/site/m-home-head.png", mServ: "assets/site/m-home-services.png", mAuto: "assets/site/m-home-automation.png", mAudit: "assets/site/m-audit-top.png",
  };
  // Mobile screens for phones: the PandaCodeGen mobile homepage, stacked (header + services), or the audit page.
  const MOBILE = [[P.mHead, P.mServ], [P.mAudit], [P.mServ], [P.mAuto]];
  const bg = (srcs, offs) => `background-image:${srcs.map((s) => `url(${s})`).join(",")};background-position:${srcs.map((_, i) => `0 ${offs ? offs[i] : 0}px`).join(",")};background-size:100% auto;background-repeat:no-repeat`;

  // A wall column: items are page keys, "phones" (two small phones side by side) or {title, eyebrow}.
  function wallColumn(id, items, x) {
    const el = document.createElement("div");
    el.className = "wcol"; el.id = id; el.style.left = x + "px"; el.setAttribute("data-layout-allow-overflow", "");
    let ph = 0;
    el.innerHTML = items.map((it) => {
      if (it === "phones") {
        const a = MOBILE[ph++ % MOBILE.length], b = MOBILE[ph++ % MOBILE.length];
        const scr = (m) => `<div class="mphone"><div class="screen" style="${bg(m, m.length > 1 ? [0, 227] : null)}"></div></div>`;
        return `<div class="pair">${scr(a)}${scr(b)}</div>`;
      }
      if (typeof it === "object") return `<div class="wtitle"><div class="w0">${it.eyebrow}</div><div class="w1">${it.title}</div></div>`;
      return `<div class="card" style="background-image:url(${P[it]})"></div>`;
    }).join("");
    return el;
  }

  // 3D laptop markup; the page images stack in #<id>-page so the screen can scroll.
  function laptop(id, srcs, lid = -76) {
    return `<div class="lp" id="${id}"><div class="lp-shadow"></div><div class="lp-deck"><div class="lp-keys"></div><div class="lp-pad"></div></div>` +
      `<div class="lp-lid" style="transform: rotateX(${lid}deg)"><div class="lp-screen"><div class="page" id="${id}-page" data-layout-allow-overflow>` +
      srcs.map((s) => `<img src="${s}" alt="" />`).join("") + `</div></div></div></div>`;
  }

  window.KIT = { F, R, SIZE, SLOT, fit, head, place, reveal, conceal, inn, out, move, settle, drift, pop, ready, P, MOBILE, bg, wallColumn, laptop };
})();
