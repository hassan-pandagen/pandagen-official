/* Film 01 (v2) scenes. render(t) is a pure function of t: every animated property is set every frame. */
(function () {
  "use strict";
  const { format: F, motion, W, H, ease, clamp, lerp, move, fade, life, prng, place, show, captions, px } = PCG;
  const T = TIMELINE, C = T.cues;
  const reduced = motion === "reduced";
  const $ = (id) => document.getElementById(id);
  const RISE = reduced ? 0 : 28;

  // ── Layout per format. 9:16 keeps words inside y 220–1440 and x ≤ 940: clear of the top bar,
  // the bottom quarter and the right-hand action rail (TikTok / Shorts / Reels interface areas). ──
  const LAY = {
    "16x9": {
      wm: { x: 120, y: 64, w: 230 }, head: { x: 120, y: 330, w: 800, size: 128 }, sub: 40,
      vis: { x: 1000, y: 150, w: 800, h: 640 }, fine: { size: 24, below: true },
      cap: { cx: 960, bottom: 1040, w: 1640, size: 54 },
      photos: [{ x: 1000, y: 120, w: 390, h: 700 }, { x: 1420, y: 120, w: 390, h: 700 }], fname: 52, frole: 24,
      end: { wmW: 560, wmY: 150, h7Y: 290, h7Size: 150, ctaY: 640, ctaSize: 46, domY: 830, domSize: 60 },
    },
    "9x16": {
      wm: { x: 80, y: 236, w: 200 }, head: { x: 80, y: 300, w: 860, size: 118 }, sub: 36,
      vis: { x: 60, y: 600, w: 960, h: 680 }, fine: { size: 28, y: 548 },
      cap: { cx: 515, bottom: 1440, w: 850, size: 48 },
      photos: [{ x: 60, y: 600, w: 470, h: 680 }, { x: 550, y: 600, w: 470, h: 680 }], fname: 56, frole: 26,
      end: { wmW: 760, wmY: 450, h7Y: 610, h7Size: 136, ctaY: 920, ctaSize: 50, domY: 1110, domSize: 58 },
    },
    "1x1": {
      wm: { x: 70, y: 52, w: 180 }, head: { x: 70, y: 110, w: 940, size: 84 }, sub: 30,
      vis: { x: 140, y: 336, w: 800, h: 520 }, fine: { size: 22, below: true },
      cap: { cx: 540, bottom: 1040, w: 1000, size: 42 },
      photos: [{ x: 140, y: 330, w: 390, h: 540 }, { x: 550, y: 330, w: 390, h: 540 }], fname: 42, frole: 20,
      end: { wmW: 560, wmY: 140, h7Y: 280, h7Size: 104, ctaY: 530, ctaSize: 40, domY: 690, domSize: 48 },
    },
  }[F];

  // ── Icons (stroke drawings, coloured by the caller) ──
  const ICON = {
    calendar: '<rect x="2" y="3" width="12" height="11" rx="2"/><path d="M2 6.5h12M5 1.5v3M11 1.5v3"/>',
    receipt: '<path d="M3.5 1.5h9v13l-1.8-1.2-1.8 1.2-1.9-1.2-1.8 1.2-1.7-1.2z"/><path d="M5.5 5h5M5.5 8h5M5.5 11h3"/>',
    form: '<rect x="2.5" y="1.5" width="11" height="13" rx="1.5"/><path d="M5 5h6M5 8h6M5 11h3"/>',
    mail: '<rect x="1.5" y="3" width="13" height="10" rx="1.5"/><path d="M2 4l6 4.8L14 4"/>',
    person: '<circle cx="8" cy="5" r="2.8"/><path d="M2.5 14.5c1-3.2 3.2-4.6 5.5-4.6s4.5 1.4 5.5 4.6"/>',
    star: '<path d="M8 1.8l1.8 3.8 4.2.5-3.1 2.9.8 4.2L8 11.1l-3.7 2.1.8-4.2L2 6.1l4.2-.5z"/>',
    web: '<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><path d="M1.5 5.5h13"/>',
    bell: '<path d="M4 11V7.2a4 4 0 018 0V11l1.3 1.6H2.7z"/><path d="M6.6 14.4h2.8"/>',
    check: '<path d="M3 8.5l3 3 7-7"/>',
    bolt: '<path d="M9 1.5L3.5 9h4l-1 5.5L12.5 7h-4z"/>',
  };
  const svg = (name, color, sw = 1.6) => `<svg viewBox="0 0 16 16" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round">${ICON[name]}</svg>`;

  // ── Build generated parts ──
  const rnd = prng(T.seed);
  const APPS = [["Bookings", "calendar"], ["Invoices", "receipt"], ["Forms", "form"], ["Email", "mail"], ["Customers", "person"], ["Reviews", "star"]];
  $("apps").innerHTML = APPS.map(([n, i], k) => `<div class="card app" id="app${k}"><span class="ic">${svg(i, "#EBE9E4")}</span><div><b>${n}</b><br><small>per month</small></div></div>`).join("");
  const APP_ROT = APPS.map(() => (rnd() - 0.5) * 7);
  const TODO = ["Send booking confirmation", "Copy details into the CRM", "Remind client about Thursday", "Make invoice #1048", "Chase last month's payment", "Update holiday hours", "Reply to a quote request", "Resend the invoice"];
  $("titems").innerHTML = TODO.map((s, k) => `<div class="ti" id="ti${k}"><i></i>${s}</div>`).join("");
  const MODS = [["Website", "web"], ["Bookings", "calendar"], ["Invoices", "receipt"], ["Customer records", "person"]];
  $("mods4").innerHTML = MODS.map(([n, i], k) => `<div class="mod" id="m4${k}"><i>${svg(i, "#EBE9E4")}</i>${n}</div>`).join("");
  $("mods5").innerHTML = MODS.map(([n, i], k) => `<div class="mod" id="m5${k}"><i>${svg(i, "#EBE9E4")}</i>${n}</div>`).join("");
  const NODES = [["calendar", "Booking<br>confirmed"], ["mail", "Confirmation<br>sent"], ["bell", "Reminder<br>the day before"], ["receipt", "PDF invoice<br>emailed"]];
  $("flow").innerHTML = '<div class="wire" id="wire"></div><div class="wfill" id="wfill"></div><div class="pulse" id="pulse"></div>' +
    NODES.map(([i, l], k) => `<div class="node" id="nd${k}"><div class="c" id="ndc${k}">${svg(i, "#1C1917", 1.5)}</div><b>${l}</b></div>`).join("");

  // ── Setup ──
  const stage = $("stage");
  stage.style.width = px(W); stage.style.height = px(H);
  place($("night"), { x: 0, y: 0, w: W, h: H });
  place($("wipe"), { x: 0, y: 0, w: 70, h: H });
  for (const id of ["wmInk", "wmPaper"]) { $(id).style.width = px(LAY.wm.w); place($(id), { x: LAY.wm.x, y: LAY.wm.y }); }

  // Visual boxes: designed in em, scaled to fit the format's slot, centred.
  const BOX = { v1: [30, 21.5], v2: [31, 17.2], v3: [28, 19], v4: [28, 17], v5a: [30, 21], v5b: [37.4, 11.5], v5c: [28, 17] };
  const BR = {};
  for (const [id, [bw, bh]] of Object.entries(BOX)) {
    const s = Math.min(LAY.vis.w / bw, LAY.vis.h / bh);
    const r = { x: LAY.vis.x + (LAY.vis.w - bw * s) / 2, y: LAY.vis.y + (LAY.vis.h - bh * s) / 2, w: bw * s, h: bh * s, em: s };
    BR[id] = r;
    place($(id), r);
    $(id).style.fontSize = px(s);
  }
  // Workflow layout inside its box
  NODES.forEach((_, k) => { const n = $(`nd${k}`); n.style.left = `${k * 9.6}em`; n.style.top = "0em"; });

  const heads = ["h1", "h2", "h3a", "h3b", "h4a", "h4b", "h5a", "h5b", "h5c", "h6", "h7"];
  const lines = {};
  for (const id of heads) {
    const el = $(id);
    el.innerHTML = el.innerHTML.split(/<br\s*\/?>/i).map((h) => `<span class="ln">${h}</span>`).join("<br>");
    lines[id] = [...el.querySelectorAll(".ln")];
  }
  const cap = $("cap");
  cap.style.fontSize = px(LAY.cap.size);
  const capH = Math.ceil(LAY.cap.size * (1.28 * 2 + 0.74));
  place(cap, { x: LAY.cap.cx - LAY.cap.w / 2, y: LAY.cap.bottom - capH, w: LAY.cap.w, h: capH });

  const M = {};
  function measure() {
    // Headlines fit their column; end-card headline is centred and sized separately.
    for (const id of heads) {
      const el = $(id);
      const end = id === "h7";
      const base = end ? LAY.end.h7Size : LAY.head.size;
      const w = end ? W - 2 * LAY.head.x : LAY.head.w;
      el.style.fontSize = px(base);
      const widest = Math.max(...lines[id].map((l) => l.offsetWidth));
      el.style.fontSize = px(Math.floor(widest > w ? base * w / widest : base));
      M[id] = { w: el.offsetWidth, h: el.offsetHeight };
      if (end) { el.style.textAlign = "center"; }
    }
    for (const id of heads) if (id !== "h7") place($(id), { x: LAY.head.x, y: LAY.head.y });
    M.h7 = { w: $("h7").offsetWidth, h: $("h7").offsetHeight };
    place($("h7"), { x: (W - M.h7.w) / 2, y: LAY.end.h7Y });
    // Sub-lines
    const h6s = $("h6s"); h6s.style.fontSize = px(LAY.sub);
    place(h6s, { x: LAY.head.x, y: LAY.head.y + M.h6.h + LAY.sub * 0.6 });
    const fine = $("fine"); fine.style.fontSize = px(LAY.fine.size);
    if (LAY.fine.below) place(fine, { x: BR.v5a.x, y: BR.v5a.y + BR.v5a.h + 14 });
    else place(fine, { x: LAY.head.x, y: LAY.fine.y });
    // Founders
    const P = LAY.photos;
    place($("fH"), P[0]); place($("fI"), P[1]);
    for (const [n, r, p] of [["fHn", "fHr", P[0]], ["fIn", "fIr", P[1]]]) {
      $(n).style.fontSize = px(LAY.fname); $(r).style.fontSize = px(LAY.frole);
      M[n] = $(n).offsetHeight; M[r] = $(r).offsetHeight;
      place($(n), { x: p.x + 22, y: p.y + p.h - 22 - M[r] - 8 - M[n] });
      place($(r), { x: p.x + 22, y: p.y + p.h - 22 - M[r] });
    }
    // End card
    const E = LAY.end;
    $("endWm").style.width = px(E.wmW);
    $("endCta").style.fontSize = px(E.ctaSize);
    $("endDomain").style.fontSize = px(E.domSize);
    for (const id of ["endWm", "endCta", "endDomain"]) M[id] = { w: $(id).offsetWidth, h: $(id).offsetHeight };
    place($("endWm"), { x: (W - M.endWm.w) / 2, y: E.wmY });
    place($("endCta"), { x: (W - M.endCta.w) / 2, y: E.ctaY });
    place($("endDomain"), { x: (W - M.endDomain.w) / 2, y: E.domY });
    // Positions inside boxes
    const wf = $("flow");
    M.node = { w: $("nd0").offsetWidth, c: $("ndc0").offsetWidth };
    M.secs = [1, 2, 3, 4].map((k) => ({ y: $(`sec${k}`).offsetTop, h: $(`sec${k}`).offsetHeight }));
    M.siteH = $("v5a").firstElementChild.offsetHeight;
    M.titem = $("ti0").offsetHeight;
    M.todoView = $("tview").clientHeight;
    void wf;
  }

  // ── Helpers ──
  function head(id, t, ins, out, outDur = 0.22) {
    const el = $(id), ls = lines[id];
    const on = t >= ins[0] - 0.01 && t < out + outDur + 0.01;
    el.style.visibility = on ? "visible" : "hidden";
    const o = 1 - fade(t, out, outDur);
    const up = reduced ? 0 : -14 * move(t, out, outDur);
    ls.forEach((ln, i) => {
      const t0 = ins[Math.min(i, ins.length - 1)];
      const a = fade(t, t0, 0.32);
      const m = move(t, t0, 0.5);
      ln.style.opacity = String(Math.round(Math.min(a, o) * 1000) / 1000);
      ln.style.transform = `translateY(${px((1 - m) * RISE * 1.4 + up)})`;
    });
  }
  // A visual enters (rise + fade) and exits (slide left + fade).
  function vis(id, t, tin, tout) {
    const r = BR[id];
    const a = fade(t, tin, 0.4), b = fade(t, tout, 0.3);
    const dy = (1 - move(t, tin, 0.6)) * RISE * 1.5;
    const dx = reduced ? 0 : -90 * move(t, tout, 0.35, ease.in);
    const push = reduced ? 0 : 0.025 * clamp((t - tin) / Math.max(0.1, tout - tin));
    const s = reduced ? 1 : lerp(1.035, 1, move(t, tin, 0.8)) + push;
    const o = Math.min(a, 1 - b);
    $(id).style.opacity = String(Math.round(o * 1000) / 1000);
    $(id).style.visibility = o <= 0.001 ? "hidden" : "visible";
    $(id).style.transform = `translate(${px(dx + r.w * (1 - s) / 2)},${px(dy + r.h * (1 - s) / 2)}) scale(${s})`;
  }
  function el(id, t, tin, tout, dy0 = 0.8) {
    const o = Math.min(fade(t, tin, 0.3), 1 - fade(t, tout, 0.25));
    show($(id), o, 0, (1 - move(t, tin, 0.45)) * dy0 * (reduced ? 0 : 16));
  }
  // How much of the screen the charcoal panel covers: 0 = paper, 1 = charcoal.
  function nightAt(t) {
    const into = (t0) => move(t, t0, 0.5, ease.inOut);
    if (t < C.turn) return 0;
    if (t < C.s5) return into(C.turn);
    if (t < C.founders) return 1 - into(C.s5 - 0.1);
    return into(C.founders);
  }

  // ── Scenes ──
  function background(t) {
    const p = nightAt(t);
    let x;
    if (t < C.s5) x = (1 - p) * W;           // slides in from the right
    else if (t < C.founders) x = -(1 - p) * W; // leaves to the left
    else x = (1 - p) * W;
    const night = $("night"), wipe = $("wipe");
    if (reduced) { show(night, p); wipe.style.visibility = "hidden"; }
    else {
      night.style.opacity = "1"; night.style.visibility = p > 0.001 ? "visible" : "hidden";
      night.style.transform = `translateX(${px(x)})`;
      const moving = p > 0.001 && p < 0.999;
      wipe.style.visibility = moving ? "visible" : "hidden";
      wipe.style.transform = `translateX(${px(t < C.s5 || t >= C.founders ? x - 70 : x + W)})`;
    }
    const dark = p > 0.5;
    show($("wmInk"), dark || t >= C.end ? 0 : 1);
    show($("wmPaper"), dark && t < C.end ? 1 : 0);
  }

  function s1(t) {
    vis("v1", t, -1, C.s2 - 0.15);
    const q = "Who can build a booking site for my clinic?";
    const n = Math.round(clamp((t + 0.45) / 1.75) * q.length);
    const ut = $("utext"); const s = q.slice(0, n);
    if (ut.textContent !== s) ut.textContent = s;
    show($("ubub"), 1);
    show(document.querySelector("#v1 .adot"), t >= 1.9 ? 1 : 0);
    const seekOn = t >= 1.95 && t < 2.75;
    const sk = $("seek");
    sk.style.opacity = seekOn ? String(0.55 + 0.45 * Math.abs(Math.sin((t - 1.95) * Math.PI * 1.6))) : t >= 2.75 ? "0" : "0";
    for (const [id, t0] of [["ans1", 2.7], ["ans2", 2.85]]) {
      const p = move(t, t0, 0.45);
      $(id).style.transform = `scaleX(${reduced ? (t >= t0 ? 1 : 0) : p})`; $(id).style.transformOrigin = "0 50%";
      $(id).style.opacity = t >= t0 ? "1" : "0";
    }
    el("src1", t, 3.05, 99); el("src2", t, 3.25, 99);
    const y = $("src3");
    const o = fade(t, 3.99, 0.3);
    y.style.opacity = String(o); y.style.visibility = o > 0 ? "visible" : "hidden";
    y.style.transform = `scale(${reduced ? 1 : lerp(1.18, 1, move(t, 3.99, 0.5))})`;
    head("h1", t, [-1, -1], C.s2 - 0.2);
  }

  function s2(t) {
    vis("v2", t, C.s2 + 0.05, C.s3 - 0.15);
    const em = BR.v2.em;
    APPS.forEach((_, k) => {
      const t0 = C.s2 + 0.1 + k * 0.2;
      const p = move(t, t0, 0.5);
      const a = $(`app${k}`);
      const gx = (k % 3) * 10.7, gy = Math.floor(k / 3) * 8.6;
      a.style.left = `${gx}em`; a.style.top = `${gy}em`;
      a.style.opacity = String(fade(t, t0, 0.25));
      a.style.transform = `translateY(${px((1 - p) * -2.2 * em)}) rotate(${(APP_ROT[k] * (reduced ? 1 : p)).toFixed(2)}deg)`;
    });
    head("h2", t, [C.s2 + 0.05, C.s2 + 0.3], C.s3 - 0.2);
  }

  function s3(t) {
    vis("v3", t, C.s3 + 0.05, C.turn + 0.15);
    const em = BR.v3.em;
    const step = M.titem;
    let count = 0;
    TODO.forEach((_, k) => {
      const t0 = C.s3 + 0.2 + k * 0.38;
      if (t >= t0) count = k + 1;
      const r = $(`ti${k}`);
      r.style.opacity = String(fade(t, t0, 0.2));
      r.style.transform = `translateX(${px((1 - move(t, t0, 0.35)) * -1.2 * em)})`;
    });
    // Keep the newest item in view: the list scrolls as it grows.
    const visible = Math.floor(M.todoView / step);
    const over = Math.max(0, count - visible);
    const prev = Math.max(0, count - 1 - visible);
    const kLast = Math.max(0, count - 1);
    const p = move(t, C.s3 + 0.2 + kLast * 0.38, 0.3);
    const scroll = reduced ? over : lerp(prev, over, p);
    $("titems").style.transform = `translateY(${px(-scroll * step)})`;
    head("h3a", t, [C.s3 + 0.05, C.s3 + 0.25], C.ageAI - 0.15);
    head("h3b", t, [C.ageAI, C.ageAI + 0.18], C.turn - 0.1);
  }

  function s4(t) {
    vis("v4", t, C.turn + 0.25, C.s5 - 0.1);
    MODS.forEach((_, k) => el(`m4${k}`, t, C.turn + 0.3 + k * 0.18, 99, 0.5));
    // The frame draws on at "We'll build the engine."
    const fr = $("v4").firstElementChild;
    const p = reduced ? (t >= C.engine ? 1 : 0) : move(t, C.engine, 0.6, ease.inOut);
    fr.style.borderColor = `rgba(232,118,58,${p.toFixed(3)})`;
    fr.style.clipPath = "none";
    const nm = fr.querySelector(".name");
    nm.style.opacity = String(fade(t, C.engine + 0.1, 0.3));
    head("h4a", t, [C.turn + 0.1, C.turn + 0.3], C.engine - 0.15);
    head("h4b", t, [C.engine, C.engine + 0.15], C.s5 - 0.15);
  }

  function s5(t) {
    // a · readable website
    vis("v5a", t, C.s5 + 0.1, C.flow - 0.1);
    const em = BR.v5a.em;
    const scanT0 = C.s5 + 0.5, scanT1 = C.s5 + 3.0;
    const sp = reduced ? 1 : clamp((t - scanT0) / (scanT1 - scanT0));
    const sy = lerp(3.2 * em, M.siteH - 0.4 * em, sp);
    const scan = $("scan");
    scan.style.top = px(sy);
    scan.style.opacity = reduced ? "0" : String(Math.min(fade(t, scanT0, 0.2), 1 - fade(t, scanT1, 0.25)));
    M.secs.forEach((s, k) => {
      const reached = reduced ? t >= scanT0 + 0.3 * k : sy >= s.y + s.h * 0.5;
      const sec = $(`sec${k + 1}`);
      sec.style.background = reached ? "rgba(173,61,11,.07)" : "transparent";
      sec.style.borderColor = reached ? "rgba(173,61,11,.28)" : "transparent";
      const ok = sec.querySelector(".ok");
      const tr = scanT0 + (scanT1 - scanT0) * ((s.y + s.h * 0.5 - 3.2 * em) / (M.siteH - 3.6 * em));
      ok.style.opacity = reached ? String(fade(t, reduced ? scanT0 + 0.3 * k : tr, 0.2)) : "0";
    });
    el("fine", t, C.s5 + 0.9, C.flow - 0.15, 0.4);
    head("h5a", t, [C.s5 + 0.05, C.s5 + 0.25], C.flow - 0.2);

    // b · busywork automated
    vis("v5b", t, C.flow, C.tools - 0.1);
    const fem = BR.v5b.em;
    const nodeW = M.node.w / fem, cw = M.node.c / fem;
    const cx = (k) => k * 9.6 + nodeW / 2;
    const cy = cw / 2;
    const wire = $("wire"), wfill = $("wfill");
    wire.style.left = `${cx(0)}em`; wire.style.width = `${cx(3) - cx(0)}em`; wire.style.top = `${cy - 0.11}em`;
    wfill.style.left = `${cx(0)}em`; wfill.style.top = `${cy - 0.11}em`;
    const hits = [18.4, 19.25, 20.1, 21.0];
    let fx = cx(0);
    for (let k = 0; k < 3; k++) {
      const p = reduced ? (t >= hits[k + 1] ? 1 : 0) : clamp((t - hits[k]) / (hits[k + 1] - hits[k]));
      if (t >= hits[k]) fx = lerp(cx(k), cx(k + 1), ease.inOut(p));
    }
    wfill.style.width = `${Math.max(0, fx - cx(0)).toFixed(3)}em`;
    const pulse = $("pulse");
    pulse.style.left = `${(fx - 0.55).toFixed(3)}em`; pulse.style.top = `${(cy - 0.55).toFixed(3)}em`;
    pulse.style.opacity = t >= hits[0] && t < C.tools ? "1" : "0";
    hits.forEach((h, k) => {
      const on = t >= h;
      const nd = $(`nd${k}`);
      nd.classList.toggle("on", on);
      const c = $(`ndc${k}`);
      const sv = c.querySelector("svg");
      sv.setAttribute("stroke", on ? "#EBE9E4" : "#1C1917");
      c.style.transform = `scale(${on && !reduced ? lerp(1.12, 1, move(t, h, 0.4)) : 1})`;
    });
    head("h5b", t, [C.flow + 0.06, C.flow + 0.25], C.tools - 0.15);

    // c · built around how you work
    vis("v5c", t, C.tools, C.founders + 0.1);
    MODS.forEach((_, k) => {
      const t0 = C.tools + 0.15 + k * 0.25;
      const m = $(`m5${k}`);
      const on = t >= t0;
      m.classList.toggle("done", on);
      m.style.transform = `scale(${on && !reduced ? lerp(0.94, 1, move(t, t0, 0.35)) : 1})`;
    });
    head("h5c", t, [C.tools + 0.03, C.tools + 0.23], C.founders - 0.15);
  }

  function s6(t) {
    const P = LAY.photos;
    [["fH", 0, -1], ["fI", 1, 1]].forEach(([id, k, dir]) => {
      const t0 = C.founders + 0.15 + k * 0.15;
      const p = move(t, t0, 0.7);
      const o = Math.min(fade(t, t0, 0.35), 1 - fade(t, C.end - 0.05, 0.3));
      const e = $(id);
      e.style.opacity = String(Math.round(o * 1000) / 1000); e.style.visibility = o > 0.001 ? "visible" : "hidden";
      e.style.transform = `translateX(${px((1 - p) * dir * (reduced ? 0 : 80))})`;
      const img = e.firstElementChild;
      img.style.transform = `scale(${reduced ? 1 : lerp(1.08, 1.0, move(t, t0, 2.5, ease.out))})`;
    });
    for (const [id, t0] of [["fHn", 0.45], ["fIn", 0.6], ["fHr", 0.55], ["fIr", 0.7]]) el(id, t, C.founders + t0, C.end - 0.05, 0.6);
    head("h6", t, [C.founders + 0.2, C.founders + 0.4], C.end - 0.1);
    el("h6s", t, 27.74, C.end - 0.1, 0.5);
    void P;
  }

  function s7(t) {
    head("h7", t, [C.end + 0.15, C.end + 0.35], 99);
    el("endWm", t, C.end + 0.1, 99, 0.6);
    el("endCta", t, C.end + 0.6, 99, 0.6);
    el("endDomain", t, 31.67, 99, 0.6);
  }

  function render(t) {
    background(t);
    s1(t); s2(t); s3(t); s4(t); s5(t); s6(t); s7(t);
    captions(t, T.captions, cap);
  }

  window.seek = (t) => { render(t); return new Promise((ok) => requestAnimationFrame(() => ok(t))); };
  window.__ready = PCG.ready().then(() => { measure(); render(0); return true; });
})();
