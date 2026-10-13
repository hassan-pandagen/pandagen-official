/* Film 01 — A website that fits your business. One TIMELINE holds every beat, cue and caption.
 * Times in seconds. VO phrase times come from silence detection on the frozen VO files
 * (audio/vo/*.wav, Kokoro af_heart), so captions and highlights land on the words. */
var TIMELINE = {
  id: "01-business-website",
  duration: 35.0,
  fps: 60,
  seed: 1015,
  beats: [
    { id: "S1", t0: 0.0, t1: 3.4, name: "Hook: looks good" },
    { id: "S2", t0: 3.4, t1: 5.7, name: "Tension: no clear next step" },
    { id: "S3", t0: 5.7, t1: 14.6, name: "Explain: a journey built around the next step (example)" },
    { id: "S4", t0: 14.6, t1: 21.3, name: "Proof: two independent clients (Ladies 4 Jesus, then Emblematic Studio)" },
    { id: "S5", t0: 21.3, t1: 26.9, name: "Turn: founders, scope and price first" },
    { id: "S6", t0: 26.9, t1: 28.7, name: "Payoff: the opening page, read correctly" },
    { id: "S7", t0: 28.7, t1: 35.0, name: "End card: Discuss your website" },
  ],
  // Voice lines start times (files in audio/vo). Durations: L1 4.60, L2 8.69, L3 4.85, L4 4.88, L5 3.98.
  vo: [
    { id: "L1", t: 0.35 },
    { id: "L2", t: 5.7 },
    { id: "L3", t: 15.0 },
    { id: "L4", t: 21.5 },
    { id: "L5", t: 28.8 },
  ],
  // Key moments the picture and the sound both mark.
  cues: {
    gap: 2.2,          // the missing enquiry path is outlined (inside the first 3 s)
    morph: 5.7,        // example page becomes a phone
    stepA: 9.68,       // "clear service pages"
    nextStep: 10.25,   // the Request a quote button lands: motif
    tapA: 10.95,
    stepB: 11.2,       // "useful enquiries"
    stepC: 12.59,      // "content your team can update"
    tapPublish: 13.95,
    proofL: 14.6,      // Ladies 4 Jesus over "Improve your current website, build on WordPress"
    editL: 15.6,
    markL: 16.9,
    proofE: 17.95,     // Emblematic Studio over "or choose a custom site where it fits"
    markE: 20.15,
    home: 21.3,
    founders: 21.5,
    price: 23.98,
    payoff: 26.9,
    payoffButton: 27.35, // motif returns
    end: 28.7,
  },
  sfx: [
    { t: 2.2, kind: "thud" },
    { t: 5.7, kind: "swell" },
    { t: 10.95, kind: "tap" },
    { t: 13.95, kind: "tap" },
    { t: 14.6, kind: "swell" },
    { t: 16.9, kind: "tick" },
    { t: 20.15, kind: "tick" },
    { t: 24.98, kind: "tick" },
    { t: 28.7, kind: "swell" },
  ],
  music: { bpm: 96, motif: [10.25, 27.35, 29.1] },
  // Captions transcribe the voiceover exactly (L2 is spoken "Panda Code Gen"). US spelling: "inquiries".
  captions: [
    { t0: 0.35, t1: 1.98, text: "Your website can look good" },
    { t0: 1.98, t1: 5.2, text: "and still make it hard for customers to take the next step." },
    { t0: 5.7, t1: 9.45, text: "PandaCodeGen builds business websites around what you need:" },
    { t0: 9.68, t1: 12.45, text: "clear service pages, useful inquiries" },
    { t0: 12.59, t1: 14.6, text: "and content your team can update." },
    { t0: 15.0, t1: 17.9, text: "Improve your current website, build on WordPress" },
    { t0: 18.02, t1: 20.15, text: "or choose a custom site where it fits." },
    { t0: 21.5, t1: 23.9, text: "Work directly with Hassan and Imran," },
    { t0: 23.98, t1: 26.6, text: "with the scope and price agreed before building." },
    { t0: 28.8, t1: 30.85, text: "Tell us what your website needs to do," },
    { t0: 30.95, t1: 33.2, text: "at pandacodegen.com." },
  ],
};

