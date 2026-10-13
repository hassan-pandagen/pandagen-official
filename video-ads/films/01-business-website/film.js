/* Film 01 scenes. Pure function of t: render(t) sets every animated property every frame. */
(function () {
  "use strict";
  const { format: F, motion, W, H, ease, clamp, lerp, move, fade, life, place, show, Shot, captions, px } = PCG;
  const T = TIMELINE, C = T.cues;
  const reduced = motion === "reduced";
  const $ = (id) => document.getElementById(id);

  // ── Layout per format ────────────────────────────────────────────────────────
  // 9:16 keeps text inside y 270–1248 and x ≤ 930 (Meta Reels guidance: top 14%, bottom 35%
  // and the right-hand action rail stay clear). Screens may continue below, without text.
  const LAY = {
    "16x9": {
      wm: { x: 112, y: 60, w: 228 },
      lbl: { x: 112, y: 296, size: 28 }, head: { x: 112, y: 344, w: 740, size: 118 }, sub: { gap: 26, size: 40, w: 700 },
      page: { x: 1000, y: 200, w: 808, h: 560 }, tag: { size: 28 }, wideHead: 860,
      phone: { x: 1190, y: 96, w: 406, h: 836 },
      win: { x: 880, y: 178, w: 928, h: 580, ax: 0.5, ay: 0.5 },
      winHome: { x: 112, y: 132, w: 1400, h: 720, ax: 0.5, ay: 0.5 },
      cap: { cx: 960, bottom: 1040, w: 1640, size: 54 },
      mk: 26, founders: { x: 210, y: 636, size: 26, row: true },
      end: { wmW: 1000, wmY: 220, ctaY: 494, ctaSize: 58, domY: 676, domSize: 66, priceY: 778, priceSize: 42 },
    },
    "9x16": {
      wm: { x: 90, y: 286, w: 190 },
      lbl: { x: 90, y: 328, size: 34 }, head: { x: 90, y: 374, w: 840, size: 94 }, sub: { gap: 16, size: 36, w: 840 },
      page: null, tag: { size: 34 },
      phone: { x: 280, y: 630, w: 520, h: 1230 },
      win: { x: 40, y: 630, w: 1000, h: 460, ax: 0.5, ay: 0.478 },
      winHome: { x: 40, y: 630, w: 1000, h: 460, ax: 0.5, ay: 0.478 },
      cap: { cx: 515, bottom: 1244, w: 830, size: 44 },
      mk: 28, founders: { x: 90, y: 352, dy: 128, size: 30, inHead: true, stack: true },
      end: { wmW: 840, wmY: 400, ctaY: 640, ctaSize: 48, domY: 812, domSize: 54, priceY: 904, priceSize: 32 },
    },
    "1x1": {
      wm: { x: 70, y: 52, w: 190 },
      lbl: { x: 70, y: 108, size: 26 }, head: { x: 70, y: 150, w: 940, size: 80 }, sub: { gap: 12, size: 32, w: 900 },
      page: { x: 150, y: 382, w: 780, h: 500 }, tag: { size: 26 },
      phone: { x: 340, y: 386, w: 400, h: 860 },
      win: { x: 70, y: 352, w: 940, h: 540, ax: 0.5, ay: 0.46 },
      winHome: { x: 70, y: 352, w: 940, h: 540, ax: 0.5, ay: 0.46 },
      cap: { cx: 540, bottom: 1040, w: 1000, size: 40 },
      mk: 24, founders: { x: 70, y: 140, dx: 440, size: 26, inHead: true },
      end: { wmW: 760, wmY: 210, ctaY: 430, ctaSize: 44, domY: 588, domSize: 50, priceY: 676, priceSize: 30 },
    },
  }[F];

  // ── Real screenshots and their camera keys (image px; s = screen px per image px) ──
  const shotE = new Shot($("shotE"), "../../refs/emblematic-studio-quote-start.png", 1440, 900);
  const shotLh = new Shot($("shotLh"), "../../refs/ladies-4-jesus.png", 1912, 914);
  const shotLe = new Shot($("shotLe"), "../../refs/ladies-4-jesus-editor-devotional.png", 1912, 914);
  const homeMobile = F !== "16x9";
  const shotHome = homeMobile
    ? new Shot($("shotHome"), "../../screens/home-mobile-top.png", 1170, 3600)
    : new Shot($("shotHome"), "../../screens/home-desktop.png", 2880, 1800);

  const CAM = {
    "16x9": {
      E: [{ t: 0, x: 720, y: 450, s: 0.645 }, { t: 18.7, dur: 1.3, x: 1150, y: 380, s: 1.6 }],
      Lh: [{ t: 0, x: 956, y: 430, s: 0.64 }],
      Le: [{ t: 0, x: 956, y: 457, s: 0.64 }, { t: 16.0, dur: 1.1, x: 794, y: 290, s: 1.0 }],
      // Founders button and price line in one framing that starts and ends on whitespace.
      Home: [{ t: 0, x: 1167, y: 560, s: 0.6 }, { t: 21.55, dur: 1.1, x: 473, y: 1455, s: 1.48 }],
    },
    "9x16": {
      E: [{ t: 0, x: 440, y: 410, s: 1.3 }, { t: 18.7, dur: 1.3, x: 1118, y: 345, s: 1.5 }],
      Lh: [{ t: 0, x: 946, y: 330, s: 1.4 }],
      Le: [{ t: 0, x: 640, y: 220, s: 1.4 }, { t: 16.0, dur: 1.1, x: 1300, y: 284, s: 1.4 }],
      Home: [{ t: 0, x: 585, y: 570, s: 0.855 }, { t: 21.55, dur: 1.1, x: 585, y: 1797, s: 0.855 }, { t: 23.98, dur: 0.9, x: 585, y: 2087, s: 0.855 }],
    },
    "1x1": {
      E: [{ t: 0, x: 720, y: 420, s: 0.653 }, { t: 18.7, dur: 1.3, x: 1118, y: 372, s: 1.6 }],
      Lh: [{ t: 0, x: 946, y: 330, s: 0.84 }],
      Le: [{ t: 0, x: 700, y: 250, s: 1.0 }, { t: 16.0, dur: 1.1, x: 800, y: 290, s: 1.0 }],
      // Square uses the mobile homepage: one column, so button and price share a framing.
      Home: [{ t: 0, x: 585, y: 614, s: 0.803 }, { t: 21.55, dur: 1.1, x: 585, y: 1919, s: 0.803 }],
    },
  }[F];
  // Image-space anchors for annotations (checked against the files in refs/ and screens/).
  const PT = {
    // quote-start right-hand panel: below its last row (16:9, 1:1) or above its first (9:16)
    ePanel: F === "9x16" ? { x: 927, y: 214 } : { x: 927, y: 500 },
    // editor: right end of the selected entry, or the Body field when the crop is tighter (9:16)
    lBody: F === "9x16" ? { x: 1001, y: 152 } : { x: 689, y: 213 },
    priceBox: homeMobile ? { x: 60, y: 2085, w: 940, h: 165 } : { x: 66, y: 1420, w: 880, h: 120 },
  };

  // ── Setup (runs once) ───────────────────────────────────────────────────────
  const stage = $("stage");
  stage.style.width = px(W); stage.style.height = px(H);
  document.body.style.width = px(W); document.body.style.height = px(H);

  function splitLines(el) {
    el.innerHTML = el.innerHTML.split(/<br\s*\/?>/i).map((h) => `<span class="ln" style="display:inline-block">${h}</span>`).join("<br>");
    return [...el.querySelectorAll(".ln")];
  }
  const heads = ["h1", "h2", "h3", "st1", "st2", "st3", "h4e", "h4l", "h5", "h6"];
  const lines = {};
  for (const id of heads) {
    const el = $(id);
    place(el, { x: LAY.head.x, y: LAY.head.y, w: LAY.head.w });
    el.style.fontSize = px(LAY.head.size);
    lines[id] = splitLines(el);
  }
  for (const id of ["stLbl", "lblE", "lblL"]) { place($(id), { x: LAY.lbl.x, y: LAY.lbl.y }); $(id).style.fontSize = px(LAY.lbl.size); }
  for (const id of ["s4e", "s4l"]) {
    const el = $(id);
    el.style.fontSize = px(LAY.sub.size); el.style.width = px(LAY.sub.w);
    el.style.left = px(LAY.head.x); el.style.top = px(LAY.head.y + LAY.head.size * 0.96 + LAY.sub.gap);
  }
  $("wm").style.width = px(LAY.wm.w); place($("wm"), { x: LAY.wm.x, y: LAY.wm.y });
  for (const id of ["tagPage", "tagPhone"]) $(id).style.fontSize = px(LAY.tag.size);

  const page = $("page"), phone = $("phone");
  if (LAY.page) { place(page, LAY.page); page.style.fontSize = px(LAY.page.w / 52); }
  else page.style.display = "none";
  place(phone, LAY.phone); phone.style.fontSize = px(LAY.phone.w / 22.5);

  for (const [el, r] of [[$("shotE"), LAY.win], [$("shotLh"), LAY.win], [$("shotLe"), LAY.win], [$("shotHome"), LAY.winHome]]) place(el, r);
  for (const id of ["mkE", "mkL"]) $(id).style.fontSize = px(LAY.mk);
  $("mkP").style.fontSize = px(LAY.mk);
  for (const id of ["fHassan", "fImran"]) $(id).style.fontSize = px(LAY.founders.size);

  const cap = $("cap");
  cap.style.fontSize = px(LAY.cap.size);
  place(cap, { x: LAY.cap.cx - LAY.cap.w / 2, w: LAY.cap.w });

  const end = $("end");
  place(end, { x: 0, y: 0, w: W, h: H });
  const E = LAY.end;
  $("endWm").style.width = px(E.wmW);
  $("endCta").style.fontSize = px(E.ctaSize);
  $("endDomain").style.fontSize = px(E.domSize);
  $("endPrice").style.fontSize = px(E.priceSize);

  // Positions that depend on rendered sizes are measured once, after fonts and images load.
  const M = {};
  function offsetIn(el, root) {
    let x = 0, y = 0, n = el;
    while (n && n !== root) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  }
  function fitHeads() {
    for (const id of heads) {
      const el = $(id);
      el.style.fontSize = px(LAY.head.size);
      // Beats beside the example page/phone may use a wider column than the proof beats.
      const w = LAY.wideHead && !["h4e", "h4l"].includes(id) ? LAY.wideHead : LAY.head.w;
      el.style.width = px(w);
      const widest = Math.max(...lines[id].map((ln) => ln.offsetWidth));
      const size = widest > w ? LAY.head.size * (w / widest) : LAY.head.size;
      el.style.fontSize = px(Math.floor(size));
      M[id] = { h: el.offsetHeight, size: Math.floor(size) };
    }
    for (const [sub, h] of [["s4e", "h4e"], ["s4l", "h4l"]]) $(sub).style.top = px(LAY.head.y + M[h].h + LAY.sub.gap);
    for (const id of ["lblE", "lblL", "stLbl"]) {
      const el = $(id);
      if (id === "stLbl") el.textContent = "Example journey · 3 of 3";
      el.style.fontSize = px(LAY.lbl.size);
      const w = el.offsetWidth;
      if (w > LAY.head.w) el.style.fontSize = px(Math.floor(LAY.lbl.size * LAY.head.w / w));
    }
  }
  function measure() {
    fitHeads();
    for (const id of ["endWm", "endCta", "endDomain", "endPrice"]) M[id] = { w: $(id).offsetWidth, h: $(id).offsetHeight };
    if (LAY.page) M.slot = offsetIn($("pageBtnSlot"), page);
    M.homeSlot = offsetIn($("homeGap"), $("scrHome"));
    M.mart = offsetIn(document.querySelector("#scrHome .mart"), $("scrHome"));
    M.aBtn = offsetIn($("aBtn"), $("scrA"));
    M.pub = offsetIn($("pubBtn"), $("scrC"));
    M.fH = { w: $("fHassan").offsetWidth, h: $("fHassan").offsetHeight };
    M.fI = { w: $("fImran").offsetWidth, h: $("fImran").offsetHeight };
    M.tagPage = $("tagPage").offsetHeight;
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const RISE = reduced ? 0 : 26;
  /** Headline: lines arrive at their own times, leave together. */
  function head(id, t, ins, out, outDur = 0.3) {
    const el = $(id), ls = lines[id];
    const on = t >= ins[0] - 0.01 && t < out + outDur + 0.01;
    el.style.visibility = on ? "visible" : "hidden";
    const o = 1 - fade(t, out, outDur);
    ls.forEach((ln, i) => {
      const a = fade(t, ins[Math.min(i, ins.length - 1)], 0.45);
      const m = move(t, ins[Math.min(i, ins.length - 1)], 0.6);
      ln.style.opacity = String(Math.round(Math.min(a, o) * 1000) / 1000);
      ln.style.transform = `translateY(${px((1 - m) * RISE)})`;
    });
  }
  function simple(id, t, tin, tout, dur = 0.4) {
    const o = life(t, tin, tout, dur, 0.3);
    const m = move(t, tin, 0.6);
    show($(id), o, 0, (1 - m) * RISE);
  }
  // Tap ring: expands and fades once. Deterministic and single, so never a flash train.
  function ring(el, t, t0, base = 1) {
    const p = clamp((t - t0) / 0.6);
    const on = t >= t0 && p < 1;
    show(el, on ? (1 - p) * 0.9 : 0, 0, 0, base * (1 + (reduced ? 0.25 : 0.9) * ease.out(p)));
  }
  function rectLerp(a, b, p) { return { x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p), w: lerp(a.w, b.w, p), h: lerp(a.h, b.h, p) }; }
  function shotPoint(shot, keys, win, pt) {
    // Screen position (stage px) of an image point under the final framing of keys.
    const k = keys[keys.length - 1];
    const s = Math.max(k.s, win.w / shot.iw, win.h / shot.ih);
    const x = clamp(k.x, (win.w * win.ax) / s, shot.iw - (win.w * (1 - win.ax)) / s);
    const y = clamp(k.y, (win.h * win.ay) / s, shot.ih - (win.h * (1 - win.ay)) / s);
    return { x: win.x + win.w * win.ax + (pt.x - x) * s, y: win.y + win.h * win.ay + (pt.y - y) * s, s };
  }

  // ── Scenes ──────────────────────────────────────────────────────────────────
  function sceneExample(t) {
    // S1–S3 morph and S6: the example page (desktop formats) or the phone home screen (9:16).
    const inS1 = t < C.morph, inS6 = t >= C.payoff && t < C.end + 0.4;
    // Desktop page
    if (LAY.page) {
      let o = 0, r = LAY.page, s = 1;
      if (inS1) { o = 1; s = reduced ? 1 : lerp(1.025, 1, ease.settle(clamp(t / 1.6))); }
      else if (t < C.morph + 0.9) {
        const p = move(t, C.morph, 0.9, ease.inOut);
        r = rectLerp(LAY.page, LAY.phone, p);
        o = 1 - fade(t, C.morph, reduced ? 0.45 : 0.3);
      }
      if (inS6) { o = life(t, C.payoff, C.end, 0.45, 0.3); r = LAY.page; s = 1; }
      place(page, r);
      show(page, o, 0, 0, s);
      page.style.fontSize = px(LAY.page.w / 52);
      // Cursor wanders, then stops where a next step should be.
      const sl = M.slot;
      const pts = [
        { t: 0.2, x: 0.62 * r.w, y: 0.86 * r.h }, { t: 0.8, x: 0.86 * r.w, y: 0.13 * r.h },
        { t: 1.35, x: 0.24 * r.w, y: 0.44 * r.h }, { t: 1.95, x: sl.x + sl.w * 0.55, y: sl.y + sl.h * 0.45 },
      ];
      let cx = pts[pts.length - 1].x, cy = pts[pts.length - 1].y;
      if (!reduced) {
        for (let i = 0; i < pts.length - 1; i++) {
          if (t < pts[i + 1].t) { const p = ease.inOut(clamp((t - pts[i].t) / (pts[i + 1].t - pts[i].t))); cx = lerp(pts[i].x, pts[i + 1].x, p); cy = lerp(pts[i].y, pts[i + 1].y, p); break; }
        }
        if (t < pts[0].t) { cx = pts[0].x; cy = pts[0].y; }
      }
      const cur = $("cursor");
      place(cur, { x: cx, y: cy });
      show(cur, inS1 ? Math.min(fade(t, 0.15, 0.3), 1 - fade(t, C.morph - 0.3, 0.25)) : 0);
      show($("pageGap"), inS1 ? fade(t, C.gap, 0.35) : 0, 0, 0, reduced ? 1 : lerp(1.12, 1, move(t, C.gap, 0.5)));
      show($("pageBtn"), inS6 ? fade(t, C.payoffButton - 0.2, 0.35) : 0);
      ring($("pageRing"), t, C.payoffButton);
      const ask = $("pageAsk");
      place(ask, { x: sl.x + sl.w + 0.9 * parseFloat(page.style.fontSize), y: sl.y - 0.1 * sl.h });
      show(ask, inS1 ? Math.min(fade(t, C.gap + 0.15, 0.35), 1 - fade(t, C.morph - 0.2, 0.2)) : 0, 0, (1 - move(t, C.gap + 0.15, 0.5)) * 10);
      const tg = $("tagPage");
      place(tg, { x: r.x, y: r.y - M.tagPage - 14 });
      show(tg, inS1 ? 1 - fade(t, C.morph, 0.25) : inS6 ? life(t, C.payoff, C.end, 0.4, 0.3) : 0);
    } else {
      show($("tagPage"), 0);
    }
  }

  function scenePhone(t) {
    const P = LAY.phone;
    let o = 0, r = P;
    if (LAY.page) {
      // Desktop formats: the phone grows out of the page, holds the journey, leaves at S4.
      if (t >= C.morph && t < C.proofL + 0.5) {
        const p = move(t, C.morph, 0.9, ease.inOut);
        r = rectLerp(LAY.page, P, p);
        o = Math.min(reduced ? fade(t, C.morph + 0.2, 0.45) : fade(t, C.morph + 0.12, 0.45), 1 - fade(t, C.proofL - 0.15, 0.35));
      }
    } else {
      // 9:16: the phone is the page from the first frame.
      if (t < C.proofL + 0.5) o = 1 - fade(t, C.proofL - 0.15, 0.35);
      if (t >= C.payoff && t < C.end + 0.4) o = life(t, C.payoff, C.end, 0.45, 0.3);
    }
    const exitX = LAY.page ? -(1 - 0) * move(t, C.proofL - 0.15, 0.5) * (reduced ? 0 : 60) : 0;
    place(phone, r);
    phone.style.fontSize = px(r.w / 22.5);
    show(phone, o, t < C.payoff ? exitX : 0, 0);
    const em = r.w / 22.5;
    const inS6 = t >= C.payoff;

    // Screens: home → A (services) → B (enquiry) → C (editor)
    const swapA = 9.45, swapB = C.stepB, swapC = C.stepC;
    const sw = (t0) => move(t, t0, 0.5, ease.inOut);
    const home = $("scrHome"), A = $("scrA"), B = $("scrB"), Cc = $("scrC");
    const slide = reduced ? 0 : 1;
    const pA = sw(swapA), pB = sw(swapB), pC = sw(swapC);
    if (inS6) {
      show(home, 1); show(A, 0); show(B, 0); show(Cc, 0);
    } else {
      show(home, 1 - (reduced ? fade(t, swapA, 0.45) : pA), -pA * 0.3 * r.w * slide);
      show(A, t < swapA ? 0 : Math.min(reduced ? fade(t, swapA, 0.45) : 1, 1 - (reduced ? fade(t, swapB, 0.45) : pB)), ((1 - pA) * r.w - pB * 0.3 * r.w) * slide);
      show(B, t < swapB ? 0 : Math.min(reduced ? fade(t, swapB, 0.45) : 1, 1 - fade(t, swapC, 0.4)), ((1 - pB) * r.w) * slide);
      show(Cc, t < swapC ? 0 : fade(t, swapC, 0.4), 0, (1 - pC) * 2 * em * slide);
    }
    // Home screen next step: missing (S1–S2 in 9:16), present in S6.
    show($("homeGap"), !LAY.page && t < C.morph + 4 && !inS6 ? fade(t, C.gap, 0.35) : 0, 0, 0, reduced ? 1 : lerp(1.12, 1, move(t, C.gap, 0.5)));
    show($("homeBtn"), inS6 ? fade(t, C.payoffButton - 0.2, 0.35) : 0);
    ring($("homeRing"), t, C.payoffButton);
    // The services screen's button is the next step: it lands on the motif.
    show($("aBtn"), fade(t, C.nextStep, 0.35), 0, (1 - move(t, C.nextStep, 0.55)) * 0.8 * em * slide);
    // Editor: typed note, then publish.
    const note = "Spring visits are now booking.";
    const n = Math.round(clamp((t - 12.95) / 0.85) * note.length);
    const typed = $("typed");
    const txt = note.slice(0, n);
    if (typed.textContent !== txt) typed.textContent = txt;
    const blinkOn = t < 13.8 || Math.floor((t - 13.8) * 2) % 2 === 0;
    $("caret").style.opacity = t >= C.tapPublish ? "0" : blinkOn ? "1" : "0";
    const pub = $("pubBtn");
    const pubTxt = t >= C.tapPublish + 0.1 ? "Published ✓" : "Publish";
    if (pub.textContent !== pubTxt) pub.textContent = pubTxt;
    // Finger: taps the quote button, then Publish.
    const f = $("finger"), fr = $("fingerRing");
    const aC = { x: M.aBtn.x + M.aBtn.w * 0.62, y: M.aBtn.y + M.aBtn.h * 0.5 };
    const pC2 = { x: M.pub.x + M.pub.w * 0.5, y: M.pub.y + M.pub.h * 0.5 };
    const hC = { x: M.homeSlot.x + M.homeSlot.w * 0.6, y: M.homeSlot.y + M.homeSlot.h * 0.5 };
    const fsz = 2.6 * em;
    let fx = aC.x, fy = aC.y, fo = 0;
    if (!LAY.page && t < C.morph) {
      // 9:16 hook: a thumb looks for the next step and finds nothing.
      const p = move(t, 0.4, 1.5, ease.inOut);
      fx = lerp(r.w * 0.7, hC.x, p); fy = lerp(r.h * 0.75, hC.y, p);
      fo = Math.min(fade(t, 0.4, 0.3), 1 - fade(t, C.morph - 0.4, 0.3));
    } else if (t >= C.tapA - 0.55 && t < swapB + 0.1) {
      const p = move(t, C.tapA - 0.55, 0.5, ease.inOut);
      fx = lerp(r.w * 0.8, aC.x, p); fy = lerp(aC.y + 4 * em, aC.y, p);
      fo = Math.min(fade(t, C.tapA - 0.55, 0.2), 1 - fade(t, swapB - 0.1, 0.2));
    } else if (t >= C.tapPublish - 0.55 && t < C.tapPublish + 0.5) {
      const p = move(t, C.tapPublish - 0.55, 0.5, ease.inOut);
      fx = lerp(r.w * 0.8, pC2.x, p); fy = lerp(pC2.y + 4 * em, pC2.y, p);
      fo = Math.min(fade(t, C.tapPublish - 0.55, 0.2), 1 - fade(t, C.tapPublish + 0.3, 0.2));
    }
    place(f, { x: fx - fsz / 2, y: fy - fsz / 2 });
    show(f, inS6 ? 0 : fo * 0.95);
    place(fr, { x: fx - fsz / 2, y: fy - fsz / 2 });
    const tapT = t < swapB + 0.1 ? C.tapA : C.tapPublish;
    ring(fr, inS6 ? -1 : t, tapT);
    // Ask bubble for the 9:16 hook lives in stage space, beside the missing button.
    // Tag above the phone
    const tg = $("tagPhone");
    const label = (!LAY.page && (t < C.morph || inS6)) ? "Example page" : "Example journey";
    if (tg.textContent !== label) tg.textContent = label;
    place(tg, { x: r.x, y: r.y - tg.offsetHeight - 14 });
    const stepsOn = t >= C.stepA - 0.05 && t < C.proofL;
    show(tg, stepsOn ? Math.min(o, 1 - fade(t, C.stepA - 0.05, 0.25)) : o);
  }

  function sceneAsk9x16(t) {
    // In 9:16 the "How do I ask?" note sits above the phone's missing button.
    const ask = $("pageAsk");
    if (LAY.page) return;
    if (ask.parentElement !== stage) stage.appendChild(ask);
    ask.style.fontSize = px(LAY.mk);
    const em = LAY.phone.w / 22.5;
    // Over the illustration, clear of the page text, pointing at nothing in particular.
    const x = LAY.phone.x + 0.55 * em + M.mart.x + 0.6 * em;
    const y = LAY.phone.y + 0.55 * em + M.mart.y + M.mart.h * 0.3;
    place(ask, { x, y });
    show(ask, t < C.morph ? Math.min(fade(t, C.gap + 0.15, 0.35), 1 - fade(t, C.morph - 0.2, 0.2)) : 0, 0, (1 - move(t, C.gap + 0.15, 0.5)) * 10);
  }

  function sceneProof(t) {
    const W1 = LAY.win;
    // Ladies 4 Jesus first ("Improve your current website, build on WordPress"): its site, then its editor.
    show($("shotLh"), life(t, C.proofL, C.editL + 0.35, 0.45, 0.35), 0, (1 - move(t, C.proofL, 0.7)) * RISE);
    shotLh.render(t, CAM.Lh, W1.w, W1.h, W1.ax, W1.ay);
    show($("shotLe"), life(t, C.editL, C.proofE - 0.1, 0.45, 0.3));
    shotLe.render(t, CAM.Le, W1.w, W1.h, W1.ax, W1.ay);
    const pl = shotPoint(shotLe, CAM.Le, W1, PT.lBody);
    const mkL = $("mkL");
    place(mkL, { x: Math.max(W1.x + 16, pl.x - LAY.mk * 1.0), y: Math.max(W1.y + 16, pl.y - LAY.mk * 0.9) });
    show(mkL, life(t, C.markL, C.proofE - 0.15, 0.35, 0.25), 0, (1 - move(t, C.markL, 0.5)) * 12);
    simple("lblL", t, C.proofL + 0.15, C.proofE - 0.1);
    head("h4l", t, [C.proofL + 0.25], C.proofE - 0.1);
    simple("s4l", t, C.proofL + 0.45, C.proofE - 0.1);
    // Emblematic Studio second ("or choose a custom site where it fits")
    show($("shotE"), life(t, C.proofE, C.home - 0.1, 0.45, 0.3), 0, (1 - move(t, C.proofE, 0.7)) * RISE);
    shotE.render(t, CAM.E, W1.w, W1.h, W1.ax, W1.ay);
    const pe = shotPoint(shotE, CAM.E, W1, PT.ePanel);
    const mkE = $("mkE");
    place(mkE, { x: Math.max(W1.x + 16, pe.x - LAY.mk * 1.0), y: pe.y - LAY.mk * 0.9 });
    show(mkE, life(t, C.markE, C.home - 0.15, 0.35, 0.25), 0, (1 - move(t, C.markE, 0.5)) * 12);
    simple("lblE", t, C.proofE + 0.15, C.home - 0.1);
    head("h4e", t, [C.proofE + 0.25], C.home - 0.1);
    simple("s4e", t, C.proofE + 0.45, C.home - 0.1);
  }

  function sceneHome(t) {
    const WH = LAY.winHome;
    show($("shotHome"), life(t, C.home, C.payoff - 0.1, 0.45, 0.3));
    shotHome.render(t, CAM.Home, WH.w, WH.h, WH.ax, WH.ay);
    // Founder cards beside the "Talk to the founders" button
    const fo = (d) => life(t, C.founders + 0.2 + d, C.price - 0.25, 0.4, 0.3);
    const FD = LAY.founders;
    if (FD.inHead && FD.stack) {
      place($("fHassan"), { x: FD.x, y: FD.y }); place($("fImran"), { x: FD.x, y: FD.y + FD.dy });
    } else if (FD.inHead) {
      place($("fHassan"), { x: FD.x, y: FD.y }); place($("fImran"), { x: FD.x + Math.max(FD.dx, M.fH.w + 24), y: FD.y });
    } else {
      // 16:9: a row in the empty space under the price line, below the "Talk to the founders" button.
      place($("fHassan"), { x: FD.x, y: FD.y }); place($("fImran"), { x: FD.x + M.fH.w + 24, y: FD.y });
    }
    show($("fHassan"), fo(0), 0, (1 - move(t, C.founders + 0.2, 0.6)) * RISE);
    show($("fImran"), fo(0.15), 0, (1 - move(t, C.founders + 0.35, 0.6)) * RISE);
    // Price paragraph outlined once the camera arrives
    const k = CAM.Home[CAM.Home.length - 1];
    const tl = shotPoint(shotHome, CAM.Home, WH, { x: PT.priceBox.x, y: PT.priceBox.y });
    const br = shotPoint(shotHome, CAM.Home, WH, { x: PT.priceBox.x + PT.priceBox.w, y: PT.priceBox.y + PT.priceBox.h });
    const mkP = $("mkP");
    place(mkP, { x: tl.x - 10, y: tl.y - 8, w: br.x - tl.x + 20, h: br.y - tl.y + 16 });
    mkP.style.background = "transparent";
    mkP.style.border = `${px(Math.max(4, LAY.mk * 0.2))} solid var(--accent)`;
    mkP.style.borderRadius = px(10);
    show(mkP, life(t, C.price + (k.dur || 0.9) - 0.1, C.payoff - 0.2, 0.35, 0.25));
  }

  function sceneHeads(t) {
    head("h1", t, [-1, 1.15], 3.32);
    head("h2", t, [3.48, 3.62], C.morph - 0.15);
    head("h3", t, [6.25, 6.55], 9.35);
    const st = [["st1", C.stepA, C.stepB - 0.12], ["st2", C.stepB, C.stepC - 0.12], ["st3", C.stepC, C.proofL - 0.2]];
    let cur = null;
    for (const [id, a, b] of st) { head(id, t, [a], b, 0.2); if (t >= a && t < b + 0.2) cur = id; }
    const lbl = $("stLbl");
    const lt = cur ? `Example journey · ${cur.slice(2)} of 3` : "";
    if (lbl.textContent !== lt && lt) lbl.textContent = lt;
    show(lbl, life(t, C.stepA, C.proofL - 0.2, 0.3, 0.2));
    // Narrow formats have a free headline slot during the price beat; 16:9 shows the page itself.
    if (LAY.founders.inHead) head("h5", t, [C.price + 0.3, C.price + 0.5], C.payoff - 0.2, 0.25);
    else $("h5").style.visibility = "hidden";
    head("h6", t, [C.payoff + 0.1, C.payoff + 0.35], C.end - 0.05, 0.25);
  }

  function sceneEnd(t) {
    const p = move(t, C.end, 0.75, ease.inOut);
    if (reduced) show(end, fade(t, C.end, 0.5)); else show(end, t >= C.end ? 1 : 0, 0, (1 - p) * H);
    const E = LAY.end;
    const cx = (w) => (W - w) / 2;
    place($("endWm"), { x: cx(M.endWm.w), y: E.wmY });
    place($("endCta"), { x: cx(M.endCta.w), y: E.ctaY });
    place($("endDomain"), { x: cx(M.endDomain.w), y: E.domY });
    place($("endPrice"), { x: cx(M.endPrice.w), y: E.priceY });
    const item = (id, a) => show($(id), fade(t, a, 0.5), 0, (1 - move(t, a, 0.7)) * (reduced ? 0 : 22));
    item("endWm", C.end + 0.35); item("endCta", C.end + 0.6); item("endDomain", C.end + 0.8); item("endPrice", C.end + 1.0);
  }

  function render(t) {
    show($("wm"), 1 - fade(t, C.end + 0.5, 0.2));
    sceneExample(t);
    scenePhone(t);
    sceneAsk9x16(t);
    sceneProof(t);
    sceneHome(t);
    sceneHeads(t);
    sceneEnd(t);
    captions(t, T.captions, cap);
    cap.style.top = px(LAY.cap.bottom - M.capH);
  }

  window.seek = (t) => {
    render(t);
    return new Promise((ok) => requestAnimationFrame(() => ok(t)));
  };
  window.__ready = PCG.ready().then(() => {
    measure();
    // Fixed two-line box with the plate aligned to its bottom, so the plate's lower edge never moves.
    M.capH = Math.ceil(LAY.cap.size * (1.28 * 2 + 0.74));
    cap.style.alignItems = "flex-end";
    cap.style.height = px(M.capH);
    render(0);
    return true;
  });
})();
