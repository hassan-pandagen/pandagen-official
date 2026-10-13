/* Film 01 (v2) — Tell us your bottlenecks. We build the engine.
 * One TIMELINE for picture, sound and captions. VO phrase times come from silence detection
 * on the frozen VO files (audio/vo/*.wav), so every cue lands on the word. */
var TIMELINE = {
  id: "01-bottlenecks",
  duration: 36.0,
  fps: 60,
  seed: 2026,
  beats: [
    { id: "S1", t0: 0.0, t1: 5.3, name: "Hook: when customers ask AI, do they find you?" },
    { id: "S2", t0: 5.3, t1: 7.8, name: "Still paying for apps that don't fit?" },
    { id: "S3", t0: 7.8, t1: 11.1, name: "Still running it by hand, in the age of AI?" },
    { id: "S4", t0: 11.1, t1: 14.1, name: "Turn: tell us your bottlenecks; we build the engine" },
    { id: "S5", t0: 14.1, t1: 25.0, name: "Engine: readable website, automated busywork, tools built around you" },
    { id: "S6", t0: 25.0, t1: 29.85, name: "Founders: Hassan and Imran, price agreed first" },
    { id: "S7", t0: 29.85, t1: 36.0, name: "End card" },
  ],
  // VO line starts. Durations: L1 4.78, L2 2.17, L3 2.86, L4 2.44, L5 10.55, L6 4.31, L7 3.51.
  vo: [
    { id: "L1", t: 0.25 }, { id: "L2", t: 5.35 }, { id: "L3", t: 7.85 }, { id: "L4", t: 11.2 },
    { id: "L5", t: 14.15 }, { id: "L6", t: 25.2 }, { id: "L7", t: 30.0 },
  ],
  cues: {
    s2: 5.3, s3: 7.8, ageAI: 9.61, turn: 11.1, engine: 12.65, s5: 14.1,
    flow: 18.3, tools: 22.65, founders: 25.0, end: 29.85,
  },
  sfx: [
    { t: 0.35, kind: "type" }, { t: 3.99, kind: "thud" },
    { t: 5.3, kind: "whoosh" }, { t: 7.8, kind: "whoosh" },
    { t: 11.1, kind: "whoosh" }, { t: 12.65, kind: "impact" },
    { t: 14.1, kind: "whoosh" }, { t: 18.4, kind: "tick" }, { t: 19.25, kind: "tick" }, { t: 20.1, kind: "tick" }, { t: 21.0, kind: "tick" },
    { t: 22.6, kind: "whoosh" }, { t: 25.0, kind: "whoosh" }, { t: 29.85, kind: "impact" },
  ],
  music: { style: "ad", bpm: 104, motif: [12.65, 23.0, 30.1], drop: [11.1, 12.6], breakdown: [25.0, 29.8] },
  captions: [
    { t0: 0.25, t1: 3.62, text: "When customers ask ChatGPT or Claude who to hire," },
    { t0: 3.99, t1: 5.3, text: "does your business come up?" },
    { t0: 5.35, t1: 7.65, text: "Still paying for apps that don't quite fit?" },
    { t0: 7.85, t1: 9.4, text: "Still running it all by hand," },
    { t0: 9.61, t1: 11.0, text: "in the age of AI?" },
    { t0: 11.2, t1: 12.45, text: "Tell us your bottlenecks." },
    { t0: 12.65, t1: 13.95, text: "We'll build the engine." },
    { t0: 14.15, t1: 17.95, text: "A website that search engines and AI assistants can read." },
    { t0: 18.36, t1: 22.3, text: "Confirmations, reminders and invoices that send themselves." },
    { t0: 22.68, t1: 24.95, text: "Tools built around how you work." },
    { t0: 25.2, t1: 27.45, text: "Work directly with Hassan and Imran," },
    { t0: 27.74, t1: 29.75, text: "with the price agreed before we build." },
    { t0: 30.0, t1: 31.45, text: "Tell us what's slowing you down," },
    { t0: 31.67, t1: 34.0, text: "at pandacodegen.com." },
  ],
};
