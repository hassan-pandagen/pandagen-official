"""Write timeline.js from the recorded voice, so the picture follows whatever voice is used.

Usage (from video-ads/): python films/01-bottlenecks/retime.py
Reads audio/vo/manifest.json and the VO files, finds the pauses inside each line with
FFmpeg silencedetect, lays the scenes out with breathing room around every line, and writes
timeline.js (beats, voice starts, cues, sound cues, music sections and the caption text that
becomes the .srt files). Swap the voice (tools/tts.py), run this, then tools/audio.py and render.
"""
import json, os, re, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
VO = os.path.join(HERE, "audio", "vo")
man = json.load(open(os.path.join(VO, "manifest.json")))
dur = {l["id"]: l["duration"] for l in man["lines"]}
text = {l["id"]: l["text"] for l in man["lines"]}


def phrases(lid):
    """Start/end of each spoken phrase inside a line (pauses of 0.12 s or more split it)."""
    out = subprocess.run(["ffmpeg", "-hide_banner", "-i", os.path.join(VO, f"{lid}.wav"), "-af",
                          "silencedetect=noise=-38dB:d=0.12", "-f", "null", "-"], capture_output=True, text=True).stderr
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", out)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", out)]
    segs, t0 = [], 0.0
    for s, e in zip(starts, ends):
        segs.append((t0, s)); t0 = e
    segs.append((t0, dur[lid]))
    return segs


# Scene plan: (scene id, voice line, seconds of quiet before the scene, voice delay into the scene)
PLAN = [("S1", "L1", 0.0, 0.4), ("S2", "L2", 0.8, 0.25), ("S3", "L3", 0.9, 0.25), ("S4", "L4", 0.9, 0.3),
        ("S5a", "L5", 1.15, 0.3), ("S5b", "L6", 0.85, 0.25), ("S5c", "L7", 0.85, 0.25), ("S6", "L8", 0.85, 0.3),
        ("S7", "L9", 0.85, 0.35)]
scene, vo_at, t = {}, {}, 0.0
prev_end = 0.0
for sid, lid, gap, delay in PLAN:
    t = 0.0 if sid == "S1" else round(prev_end + gap, 2)
    scene[sid] = t
    vo_at[lid] = round(t + delay, 2)
    prev_end = vo_at[lid] + dur[lid]
duration = round(prev_end + 3.0, 1)

P = {lid: [(round(vo_at[lid] + a, 2), round(vo_at[lid] + b, 2)) for a, b in phrases(lid)] for lid in vo_at}
cues = {
    "ask": vo_at["L1"], "showUp": P["L1"][-1][0],
    "s2": scene["S2"], "s3": scene["S3"], "ageAI": P["L3"][-1][0],
    "turn": scene["S4"], "engine": P["L4"][-1][0], "s5": scene["S5a"],
    "flow": scene["S5b"], "tools": scene["S5c"], "founders": scene["S6"],
    "direct": P["L8"][1][0] if len(P["L8"]) > 1 else vo_at["L8"] + 1.2,
    "notAgent": P["L8"][-1][0], "end": scene["S7"], "domain": P["L9"][-1][0],
}
# Workflow nodes light on "Confirmations," "reminders," "and invoices," and finish on "send themselves".
l6 = P["L6"]
mid = l6[1] if len(l6) > 1 else (vo_at["L6"] + 1.0, vo_at["L6"] + 2.6)
hits = [round(vo_at["L6"] - 0.35, 2), vo_at["L6"], mid[0], round(mid[0] + (mid[1] - mid[0]) * 0.55, 2)]
cues.update({f"hit{k}": h for k, h in enumerate(hits)})

beats = [
    ("S1", 0.0, scene["S2"], "Hook: when customers ask AI, are you showing up?"),
    ("S2", scene["S2"], scene["S3"], "Are you paying for apps that still don't do what you need?"),
    ("S3", scene["S3"], scene["S4"], "Are you still doing it all by hand, in the age of AI?"),
    ("S4", scene["S4"], scene["S5a"], "Turn: tell us what you need; we'll build it"),
    ("S5", scene["S5a"], scene["S6"], "What we build: readable website, busywork automated, tools around how you work"),
    ("S6", scene["S6"], scene["S7"], "Work with experts; talk directly to the founders, not a sales agent"),
    ("S7", scene["S7"], duration, "End card"),
]
sfx = [{"t": round(cues["ask"] - 0.3, 2), "kind": "type"}, {"t": cues["showUp"], "kind": "thud"}]
for k in ("s2", "s3", "turn", "s5", "flow", "tools", "founders"):
    sfx.append({"t": cues[k], "kind": "whoosh"})
sfx += [{"t": cues["engine"], "kind": "impact"}] + [{"t": h, "kind": "tick"} for h in hits]
sfx += [{"t": round(cues["direct"] + 0.05, 2), "kind": "tick"}, {"t": cues["end"], "kind": "impact"}]
sfx.sort(key=lambda x: x["t"])
music = {"style": "ad", "bpm": 96, "motif": [cues["engine"], round(cues["tools"] + 0.4, 2), round(cues["end"] + 0.3, 2)],
         "drop": [cues["turn"], round(cues["engine"] - 0.05, 2)], "breakdown": [cues["founders"], round(cues["end"] - 0.05, 2)]}

# Caption text per phrase (shipped as .srt only; nothing is burned into the picture).
CAP = {
    "L1": ["When customers ask ChatGPT or Claude who to hire,", "are you showing up?"],
    "L2": ["Are you paying for apps that still don't do what you need?"],
    "L3": ["Are you still doing it all by hand,", "in the age of AI?"],
    "L4": ["Tell us what you need.", "We'll build it."],
    "L5": ["A website that search engines and AI assistants can read."],
    "L6": ["Confirmations, reminders and invoices that send themselves."],
    "L7": ["And tools built around the way you work."],
    "L8": ["Work with experts.", "Talk directly to the founders who build it,", "not a sales agent."],
    "L9": ["Tell us what you need,", "at pandacodegen.com."],
}
captions = []
for lid, parts in CAP.items():
    segs = P[lid]
    if len(parts) == len(segs):
        spans = segs
    else:  # one caption for the whole line
        spans = [(segs[0][0], segs[-1][1])]
        parts = [" ".join(parts)]
    for (a, b), txt in zip(spans, parts):
        captions.append({"t0": a, "t1": round(b + 0.25, 2), "text": txt})
for i in range(len(captions) - 1):
    captions[i]["t1"] = min(captions[i]["t1"], round(captions[i + 1]["t0"] - 0.02, 2))

TL = {"id": "01-bottlenecks", "duration": duration, "fps": 60, "seed": 2026,
      "beats": [{"id": b, "t0": a, "t1": c, "name": n} for b, a, c, n in beats],
      "vo": [{"id": lid, "t": vo_at[lid]} for lid in vo_at], "cues": cues, "sfx": sfx, "music": music,
      "burnCaptions": False, "captions": captions}
js = ("/* Film 01 v4 — question-led ad: Are you showing up? Are you paying? Still by hand?\n"
      " * GENERATED by retime.py from the recorded voice (audio/vo). Edit the plan there, not here.\n"
      " * One TIMELINE for picture, sound and the .srt captions. */\n"
      f"var TIMELINE = {json.dumps(TL, indent=2)};\n")
open(os.path.join(HERE, "timeline.js"), "w").write(js)
print(f"duration {duration}s")
for k, v in cues.items():
    print(f"  {k:9s} {v}")
