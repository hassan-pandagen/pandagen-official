/* PandaCodeGen film engine (films 01–03).
 *
 * Contract: window.seek(t) paints the frame at time t (seconds). Every visible
 * property is a pure function of t and the page's query string; nothing reads the
 * clock, and nothing animates by itself (no CSS transitions, no keyframes).
 *
 * Query string: ?format=16x9|9x16|1x1&motion=full|reduced
 * In reduced motion, moves resolve at their start time and arrive with a fade;
 * camera framings change by cross-fade instead of travelling.
 */
(function () {
  "use strict";
  const q = new URLSearchParams(location.search);
  const SIZES = { "16x9": [1920, 1080], "9x16": [1080, 1920], "1x1": [1080, 1080] };
  const format = SIZES[q.get("format")] ? q.get("format") : "16x9";
  const motion = q.get("motion") === "reduced" ? "reduced" : "full";
  const [W, H] = SIZES[format];
  document.documentElement.dataset.format = format;
  document.documentElement.dataset.motion = motion;

  // Cubic-bezier easing (same maths as CSS), solved by Newton iterations with a bisection fallback.
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = (u) => ((ax * u + bx) * u + cx) * u;
    const sy = (u) => ((ay * u + by) * u + cy) * u;
    const dx = (u) => (3 * ax * u + 2 * bx) * u + cx;
    return (x) => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let u = x;
      for (let i = 0; i < 8; i++) {
        const e = sx(u) - x;
        if (Math.abs(e) < 1e-6) return sy(u);
        const d = dx(u);
        if (Math.abs(d) < 1e-6) break;
        u -= e / d;
      }
      let lo = 0, hi = 1; u = x;
      for (let i = 0; i < 30; i++) { const v = sx(u); if (Math.abs(v - x) < 1e-6) break; if (v < x) lo = u; else hi = u; u = (lo + hi) / 2; }
      return sy(u);
    };
  }
  // "settle" decelerates into place without overshoot; no easing here bounces.
  const ease = {
    settle: bezier(0.16, 1, 0.3, 1),
    inOut: bezier(0.65, 0, 0.35, 1),
    out: bezier(0.33, 1, 0.68, 1),
    in: bezier(0.32, 0, 0.67, 0),
    linear: (x) => x,
  };
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, p) => a + (b - a) * p;

  /** Movement progress 0..1. Reduced motion: jumps to 1 at t0 (pair it with fade()). */
  function move(t, t0, dur, e = ease.settle) {
    if (motion === "reduced") return t >= t0 ? 1 : 0;
    return e(clamp((t - t0) / dur));
  }
  /** Opacity progress 0..1. Reduced motion keeps fades but never shorter than 0.45 s. */
  function fade(t, t0, dur = 0.4, e = ease.out) {
    const d = motion === "reduced" ? Math.max(dur, 0.45) : dur;
    return e(clamp((t - t0) / d));
  }
  /** Visible window: fades in at a, out at b. */
  function life(t, a, b, fi = 0.4, fo = 0.35) {
    return Math.min(fade(t, a, fi), 1 - fade(t, b, fo));
  }
  /** Seeded PRNG (mulberry32), for any procedural detail; same seed, same frame. */
  function prng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let r = Math.imul(a ^ (a >>> 15), 1 | a);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  const px = (v) => `${Math.round(v * 100) / 100}px`;
  function place(el, r) {
    if (!el) return;
    if (r.x !== undefined) el.style.left = px(r.x);
    if (r.y !== undefined) el.style.top = px(r.y);
    if (r.w !== undefined) el.style.width = px(r.w);
    if (r.h !== undefined) el.style.height = px(r.h);
  }
  function show(el, o, dx = 0, dy = 0, s = 1) {
    if (!el) return;
    el.style.opacity = String(Math.round(clamp(o) * 1000) / 1000);
    el.style.visibility = o <= 0.001 ? "hidden" : "visible";
    el.style.transform = `translate(${px(dx)},${px(dy)}) scale(${Math.round(s * 10000) / 10000})`;
  }

  /**
   * A framed real screenshot with a camera. Camera keys: {t, x, y, s} where (x, y)
   * is the image point placed at the window's anchor and s is screen px per image px.
   * The image always covers the window (camera is clamped). Two layers let reduced
   * motion cross-fade between framings instead of travelling.
   */
  class Shot {
    constructor(el, src, iw, ih) {
      this.el = el; this.iw = iw; this.ih = ih;
      el.classList.add("shot");
      this.a = document.createElement("img"); this.b = document.createElement("img");
      for (const im of [this.a, this.b]) { im.src = src; im.alt = ""; im.decoding = "sync"; el.appendChild(im); }
    }
    frame(cam, w, h, ax, ay) {
      const s = Math.max(cam.s, w / this.iw, h / this.ih);
      const x = clamp(cam.x, (w * ax) / s, this.iw - (w * (1 - ax)) / s);
      const y = clamp(cam.y, (h * ay) / s, this.ih - (h * (1 - ay)) / s);
      return `translate(${px(w * ax - x * s)},${px(h * ay - y * s)}) scale(${Math.round(s * 100000) / 100000})`;
    }
    // Keys travel: key k starts moving at k.t and arrives at k.t + k.dur (default 1 s).
    // Reduced motion: each key's framing cross-fades in at k.t instead.
    render(t, keys, w, h, ax = 0.5, ay = 0.5) {
      if (motion === "reduced") {
        let i = 0;
        while (i + 1 < keys.length && t >= keys[i + 1].t) i++;
        const prev = keys[Math.max(0, i - 1)], k = keys[i];
        this.b.style.transform = this.frame(prev, w, h, ax, ay);
        this.a.style.transform = this.frame(k, w, h, ax, ay);
        this.b.style.opacity = "1"; this.b.style.zIndex = "0"; this.a.style.zIndex = "1";
        this.a.style.opacity = i === 0 ? "1" : String(fade(t, k.t, 0.5));
        return;
      }
      let cam = keys[0];
      for (let i = 1; i < keys.length; i++) {
        const k = keys[i];
        if (t < k.t) break;
        const p = ease.inOut(clamp((t - k.t) / (k.dur ?? 1)));
        cam = { x: lerp(cam.x, k.x, p), y: lerp(cam.y, k.y, p), s: Math.exp(lerp(Math.log(cam.s), Math.log(k.s), p)) };
      }
      this.a.style.transform = this.frame(cam, w, h, ax, ay);
      this.a.style.opacity = "1"; this.b.style.opacity = "0";
    };
  }


  /** Burned-in captions: the same cue list that writes the .srt files. */
  function captions(t, cues, el) {
    let cur = null;
    for (const c of cues) if (t >= c.t0 && t < c.t1) cur = c;
    const span = el.firstElementChild;
    if (!cur) { el.style.opacity = "0"; el.style.visibility = "hidden"; return; }
    if (span.textContent !== cur.text) span.textContent = cur.text;
    const o = Math.min(clamp((t - cur.t0) / 0.12), clamp((cur.t1 - t) / 0.12));
    el.style.opacity = String(Math.round(o * 1000) / 1000);
    el.style.visibility = "visible";
  }

  async function ready(extraFonts = []) {
    const faces = ['400 100px "Anton"', '500 40px "Inter"', '600 40px "Inter"', '700 40px "Inter"', '400 40px "PT Serif"', 'italic 400 40px "PT Serif"', '700 40px "PT Serif"', ...extraFonts];
    await Promise.all(faces.map((f) => document.fonts.load(f)));
    await document.fonts.ready;
    await Promise.all([...document.images].map((im) => (im.complete && im.naturalWidth ? im.decode().catch(() => {}) : new Promise((ok) => { im.onload = () => im.decode().then(ok, ok); im.onerror = ok; }))));
  }

  window.PCG = { format, motion, W, H, ease, clamp, lerp, move, fade, life, prng, place, show, Shot, captions, ready, px };
})();
