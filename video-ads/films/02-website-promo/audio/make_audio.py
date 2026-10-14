"""Film 02 soundtrack, synthesised from a fixed seed (no third-party music or samples).

A 100 BPM tech-promo track in C major (C - G - Am - F, one chord per bar): plucked 16th-note arpeggio,
pumping bass and pad, four-on-the-floor kick, claps and hats. It drops on the first cut (4.8 s), changes
scene every two bars, breaks down under "Talk directly to the founders" (33.6 s) and lands on the end
card (38.4 s). Whooshes mark every cut and page move; pops and ticks mark cards and screen changes.

Run from films/02-website-promo with a Python that has numpy and soundfile:
    python audio/make_audio.py
Writes audio/music.wav, audio/sfx.wav and audio/mix.wav (48 kHz, 24-bit; mix at about -16 LUFS,
true peak about -2 dBTP so the AAC in the MP4s stays at or below -1.5 dBTP).
"""
import json, os, subprocess
import numpy as np
import soundfile as sf

SR = 48000
DUR = 43.2
N = int(round(DUR * SR))
BPM = 100
BEAT = 60 / BPM          # 0.6 s
BAR = 4 * BEAT           # 2.4 s
rng = np.random.default_rng(2026)
HERE = os.path.dirname(os.path.abspath(__file__))

# Picture cues (seconds, global). Cuts land on bars; scene starts are in build.mjs.
CUTS = [4.8, 9.6, 14.4, 19.2, 24.0, 28.8, 33.6, 38.4]
DROP, BREAK, END = 4.8, 33.6, 38.4


def midi(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def lp(x, fc):
    """One-pole low-pass, exact recursion vectorised per block."""
    a = np.exp(-2 * np.pi * fc / SR); b = 1 - a
    y = np.empty_like(x); acc = 0.0
    block = int(max(16, min(4096, 30 / -np.log(a))))
    pw = a ** np.arange(block)
    for s0 in range(0, len(x), block):
        seg = x[s0:s0 + block]; n = len(seg); p = pw[:n]
        y[s0:s0 + n] = (a * p) * acc + b * p * np.cumsum(seg / p)
        acc = y[s0 + n - 1]
    return y


def hp(x, fc):
    return x - lp(x, fc)


def saw(f, tt, harmonics=None):
    """Band-limited sawtooth by additive synthesis."""
    k = harmonics or max(1, int((SR / 2.2) // f))
    k = min(k, 40)
    out = np.zeros_like(tt)
    for h in range(1, k + 1):
        out += np.sin(2 * np.pi * f * h * tt) / h
    return out * (2 / np.pi)


def add(buf, t0, sig, gain=1.0, pan=0.0):
    j0 = int(round(t0 * SR))
    if j0 >= N:
        return
    if j0 < 0:
        sig = sig[-j0:]; j0 = 0
    n = min(len(sig), N - j0)
    buf[j0:j0 + n, 0] += sig[:n] * gain * (1 - pan)
    buf[j0:j0 + n, 1] += sig[:n] * gain * (1 + pan)


def reverb(x, secs=1.4, mix=0.18):
    """Stereo room: convolution with decaying, filtered noise (different per channel)."""
    n = int(secs * SR); tt = np.arange(n) / SR
    out = np.zeros_like(x)
    for ch in range(2):
        ir = lp(rng.standard_normal(n), 5200) * np.exp(-tt * 5.2)
        ir[: int(0.012 * SR)] = 0
        ir /= np.sqrt(np.sum(ir ** 2))
        L = 1 << int(np.ceil(np.log2(len(x) + n)))
        wet = np.fft.irfft(np.fft.rfft(x[:, ch], L) * np.fft.rfft(ir, L), L)[: len(x)]
        out[:, ch] = x[:, ch] + mix * wet
    return out


def section(t):
    if t < DROP: return "intro"
    if t < 19.2: return "a"
    if t < BREAK: return "b"
    if t < END: return "break"
    return "end"


# ── Chords ──────────────────────────────────────────────────────────────────────
#            root  voicing (pad / arp)
PROG = [(48, [60, 64, 67, 72]),   # C
        (43, [59, 62, 67, 71]),   # G
        (45, [57, 60, 64, 69]),   # Am
        (41, [57, 60, 65, 69])]   # F
FINAL = (48, [60, 64, 67, 72, 74, 76])  # Cadd9 on the end card


def chord_at(t):
    if t >= END - 1e-6:
        return FINAL
    return PROG[int(t // BAR) % 4]


# ── Drums ───────────────────────────────────────────────────────────────────────
def kick():
    n = int(0.45 * SR); tt = np.arange(n) / SR
    f = 46 + 110 * np.exp(-tt * 30)
    body = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 6.5)
    click = hp(rng.standard_normal(n), 3000) * np.exp(-tt * 400) * 0.25
    return body + click


def clap():
    n = int(0.3 * SR); tt = np.arange(n) / SR
    nz = lp(hp(rng.standard_normal(n), 1100), 7000)
    env = np.exp(-tt * 18)
    for d in (0.0, 0.011, 0.022):
        j = int(d * SR); env[j:j + int(0.004 * SR)] += 0.7
    return nz * env * 0.8


def hat(open_=False):
    n = int((0.22 if open_ else 0.05) * SR); tt = np.arange(n) / SR
    return hp(rng.standard_normal(n), 8000) * np.exp(-tt * (16 if open_ else 95))


def shaker():
    n = int(0.06 * SR); tt = np.arange(n) / SR
    return lp(hp(rng.standard_normal(n), 5000), 11000) * np.sin(np.pi * tt / tt[-1]) ** 2


def impact():
    n = int(2.6 * SR); tt = np.arange(n) / SR
    boom = np.sin(2 * np.pi * np.cumsum(38 + 70 * np.exp(-tt * 9)) / SR) * np.exp(-tt * 2.2)
    crash = lp(hp(rng.standard_normal(n), 2500), 12000) * np.exp(-tt * 2.6) * 0.3
    return boom + crash


def riser(length):
    n = int(length * SR); tt = np.arange(n) / SR
    ramp = (tt / tt[-1]) ** 2
    nz = rng.standard_normal(n); out = np.zeros(n)
    for s0 in range(0, n, 2400):
        fc = 300 + 9000 * ramp[min(n - 1, s0)]
        seg = nz[s0:s0 + 2400]
        out[s0:s0 + len(seg)] = lp(hp(seg, fc * 0.35), fc)
    tone = np.sin(2 * np.pi * np.cumsum(180 + 900 * ramp) / SR) * 0.12
    return (out * 0.5 + tone) * ramp


drums = np.zeros((N, 2))
K, CL, HC, HO, SH = kick(), clap(), hat(), hat(True), shaker()
nbeats = int(DUR / BEAT) + 1
for b in range(nbeats):
    t = b * BEAT; sec = section(t); pos = b % 4
    if sec == "intro":
        if t >= BAR and pos in (0, 2):
            add(drums, t, K, 0.35)                       # soft kick in the second intro bar
        add(drums, t + BEAT / 2, HC, 0.05, 0.25)
    elif sec in ("a", "b"):
        add(drums, t, K, 0.66)
        if pos in (1, 3):
            add(drums, t, CL, 0.32, -0.08)
        add(drums, t + BEAT / 2, HO if pos == 3 else HC, 0.09 if pos == 3 else 0.075, 0.22)
        if sec == "b":
            for q in (0.25, 0.75):
                add(drums, t + q * BEAT, SH, 0.05, -0.3)
    elif sec == "break":                                   # half-time: soft kick on 1 and 3, clap on 3
        if pos in (0, 2):
            add(drums, t, K, 0.36)
        if pos == 2:
            add(drums, t, CL, 0.16, -0.08)
        add(drums, t + BEAT / 2, HC, 0.06, 0.22)
    elif sec == "end" and t < END + 0.01:
        add(drums, t, K, 0.85)
add(drums, DROP, impact(), 0.75)
add(drums, END, impact(), 0.85)
add(drums, DROP - BAR, riser(BAR), 0.55)
add(drums, END - BAR, riser(BAR), 0.6)

# ── Sidechain pump (ducks pad and bass after each kick) ────────────────────────
t_ax = np.arange(N) / SR
pump = np.ones(N)
for b in range(nbeats):
    t = b * BEAT
    if section(t) in ("a", "b"):
        j0 = int(t * SR); n = min(int(BEAT * SR), N - j0)
        tt = np.arange(n) / SR
        pump[j0:j0 + n] = 1 - 0.6 * np.exp(-tt / 0.11)

# ── Bass: 8th notes on the chord root ─────────────────────────────────────────
bass = np.zeros((N, 2))
for k in range(int(DUR / (BEAT / 2)) + 1):
    t = k * BEAT / 2; sec = section(t)
    if sec not in ("a", "b"):
        continue
    root = chord_at(t)[0] - 12 + (12 if (k % 2 and sec == "b") else 0)
    n = int(0.28 * SR); tt = np.arange(n) / SR
    f = midi(root)
    env = np.exp(-tt * 7) * np.minimum(1, tt / 0.004)
    sig = lp(saw(f, tt, 12) * env, 520) + 0.55 * np.sin(2 * np.pi * f * tt) * env
    add(bass, t, sig, 0.30 if k % 2 else 0.22)
for b in range(int(BREAK / BAR), int(END / BAR)):          # long roots under the breakdown
    t0 = b * BAR; n = int(BAR * SR); tt = np.arange(n) / SR; f = midi(chord_at(t0 + 0.01)[0] - 12)
    add(bass, t0, np.sin(2 * np.pi * f * tt) * np.minimum(1, tt / 0.02) * np.exp(-tt * 0.7), 0.26)
for t0, root in ((END, 36),):                               # one long low C under the end card
    n = int((DUR - t0) * SR); tt = np.arange(n) / SR
    add(bass, t0, np.sin(2 * np.pi * midi(root) * tt) * np.exp(-tt * 0.9), 0.32)

# ── Pad: detuned saws, filtered, one chord per bar ─────────────────────────────
pad = np.zeros((N, 2))
for b in range(int(DUR / BAR) + 1):
    t0 = b * BAR
    if t0 >= DUR:
        break
    sec = section(t0 + 0.01)
    root, notes = chord_at(t0 + 0.01)
    length = (BAR + 0.5) if sec != "end" else DUR - t0
    n = min(int(length * SR), N - int(t0 * SR)); tt = np.arange(n) / SR
    att = 0.9 if sec in ("intro", "break") else 0.25
    env = np.minimum(1, tt / att) * np.where(tt > length - 0.5, np.maximum(0, (length - tt) / 0.5), 1)
    if sec == "end":
        env = np.minimum(1, tt / 0.05) * np.exp(-tt * 0.55)
    g = {"intro": 0.085, "a": 0.035, "b": 0.04, "break": 0.1, "end": 0.07}[sec]
    for i, m in enumerate(notes):
        for ch, det in ((0, -0.004), (1, 0.004)):
            v = saw(midi(m) * (1 + det), tt, 10) + 0.6 * saw(midi(m) * (1 - det * 0.5), tt, 10)
            pad[int(t0 * SR):int(t0 * SR) + n, ch] += g * env * v / (1 + 0.25 * i)
pad[:, 0] = lp(lp(pad[:, 0], 1900), 2600); pad[:, 1] = lp(lp(pad[:, 1], 1900), 2600)

# ── Pluck arpeggio: 16ths, filter opens through the intro, ping-pong delay ─────
arp = np.zeros((N, 2))
PATTERN = [0, 1, 2, 3, 2, 1, 2, 3, 0, 1, 2, 3, 2, 3, 1, 2]
for k in range(int(DUR / (BEAT / 4)) + 1):
    t = k * BEAT / 4; sec = section(t)
    if sec == "end" or t >= DUR:
        continue
    root, notes = chord_at(t)
    m = notes[PATTERN[k % 16] % len(notes)] + (12 if sec == "b" and k % 8 == 7 else 0)
    n = int(0.22 * SR); tt = np.arange(n) / SR
    f = midi(m + 12)
    env = np.exp(-tt * 16) * np.minimum(1, tt / 0.002)
    tone = 0.6 * saw(f, tt, 8) + 0.4 * np.sign(np.sin(2 * np.pi * f * tt)) * 0.5
    fc = {"intro": 1200 + 2400 * min(1, t / DROP), "a": 3200, "b": 4200, "break": 2300}[sec]
    sig = lp(lp(tone * env, fc), fc * 1.6)
    acc = (1.0 if k % 4 == 0 else 0.72) * {"intro": 1.7, "a": 1.0, "b": 1.0, "break": 1.6}[sec]
    add(arp, t, sig, 0.085 * acc, -0.15 if k % 2 else 0.15)
# ping-pong delay: 3/16 note, feedback 0.35
dly = int(0.75 * BEAT * SR)
wet = np.zeros_like(arp); src = arp.copy()
for rep in range(4):
    sh = np.zeros_like(arp)
    sh[dly:, 0] = src[:-dly, 1]; sh[dly:, 1] = src[:-dly, 0]
    sh *= 0.35
    wet += sh; src = sh
arp = arp + lp(wet[:, 0], 3000)[:, None] * np.array([1, 0]) + lp(wet[:, 1], 3000)[:, None] * np.array([0, 1])

# ── Bell motif on the end card: C5 E5 G5 C6 ───────────────────────────────────
bell = np.zeros((N, 2))
for i, m in enumerate((72, 76, 79, 84)):
    t = END + 0.6 + i * BEAT / 2
    n = int(2.6 * SR); tt = np.arange(n) / SR; f = midi(m)
    env = np.exp(-tt * 1.8) * np.minimum(1, tt / 0.004)
    v = np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2.0 * f * tt) * np.exp(-tt * 3) + 0.15 * np.sin(2 * np.pi * 3.01 * f * tt) * np.exp(-tt * 5)
    add(bell, t, v * env, 0.07, (-0.3, -0.1, 0.1, 0.3)[i])

music = drums + (bass + pad) * pump[:, None] + arp * (0.6 + 0.4 * pump)[:, None] + bell
music = reverb(music, 1.3, 0.12)
# Fade the tail to silence by the last frame.
fade = np.clip((DUR - t_ax) / 1.2, 0, 1) ** 1.5
music *= fade[:, None]

# ── SFX ─────────────────────────────────────────────────────────────────────────
sfx = np.zeros((N, 2))


def whoosh(length=0.55, bright=5200):
    n = int(length * SR); tt = np.arange(n) / SR
    e = np.sin(np.pi * tt / tt[-1]) ** 2
    return lp(hp(rng.standard_normal(n), 700), bright) * e


def tick(f=2400, decay=110, noise=0.35):
    n = int(0.09 * SR); tt = np.arange(n) / SR
    return np.sin(2 * np.pi * f * tt) * np.exp(-tt * decay) + noise * hp(rng.standard_normal(n), 3500) * np.exp(-tt * 260)


def pop():
    n = int(0.14 * SR); tt = np.arange(n) / SR
    f = 700 + 900 * np.exp(-tt * 40)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 34)


def ding(m=84):
    n = int(0.9 * SR); tt = np.arange(n) / SR; f = midi(m)
    return (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * tt) * np.exp(-tt * 6)) * np.exp(-tt * 6) * np.minimum(1, tt / 0.003)


# Cut whooshes peak on the cut (each scene slides, pushes or rises in on a bar).
for c in CUTS[1:-1]:
    add(sfx, c - 0.32, whoosh(0.55), 0.10, 0.1)
add(sfx, 4.8 - 0.4, whoosh(0.6, 4200), 0.09)                 # panel rises over the wall of pages
for t in (5.9, 7.4):                                        # s02 page scrolls
    add(sfx, t, whoosh(1.1, 2600), 0.045, -0.2)
for t in (10.55, 11.75, 12.95):                             # s03 front window steps to the next site
    add(sfx, t, whoosh(0.4, 4800), 0.06, 0.2)
add(sfx, 12.0, whoosh(0.8, 3000), 0.05, -0.2)               # s03 back page wipes
for t in (15.95, 17.55):                                    # s04 laptop screen changes
    add(sfx, t, tick(2200, 120), 0.08)
for t in (19.6, 19.9, 20.2):                                # s05 form pieces pop out as cards
    add(sfx, t, pop(), 0.11, 0.2)
for t in (25.0, 26.2, 27.3):                                # s06 mobile page scrolls
    add(sfx, t, whoosh(0.7, 2600), 0.045, -0.2)
add(sfx, 31.15, tick(2200, 120), 0.08)                      # s07 laptop screen changes
for i, t in enumerate((34.7, 36.1)):                        # s08 ring on "Talk to the founders"
    add(sfx, t, ding((84, 88)[i]), 0.07)
add(sfx, 39.25, tick(1500, 90), 0.12)                       # end card button lands

mix = music * 0.9 + sfx
os.makedirs(HERE, exist_ok=True)


def write(name, x):
    sf.write(os.path.join(HERE, name), np.clip(x, -1, 1).astype(np.float32), SR, subtype="PCM_24")


peak = np.max(np.abs(mix))
write("music.wav", music / max(1.0, peak / 0.89))
write("sfx.wav", sfx / max(1.0, peak / 0.89))
write("mix_prenorm.wav", mix / max(1.0, peak / 0.89))

# Peak limiter, then two-pass linear loudnorm. The limiter ceiling is re-solved from the limited file's
# own loudness until the gain to -16 LUFS keeps true peak near -2.2 dBTP (so loudnorm stays linear). The
# extra margin under the -1.5 dBTP ceiling absorbs AAC encoding overshoot in the MP4s.
raw = os.path.join(HERE, "mix_prenorm.wav"); lim = os.path.join(HERE, "mix_limited.wav"); out = os.path.join(HERE, "mix.wav")


def measure(path):
    e = subprocess.run(["ffmpeg", "-hide_banner", "-i", path, "-af", "loudnorm=I=-16:TP=-2:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
    return json.loads(e[e.rindex("{"): e.rindex("}") + 1])


js = measure(raw)
limit = 0.89
for _ in range(10):
    gain = -16.0 - float(js["input_i"])
    excess = float(js["input_tp"]) + gain + 2.2      # dB over a -2.2 dBTP landing point
    if excess <= 0:
        break
    # First pass starts from the measured peak; later passes step the ceiling down by the excess
    # (the limiter's true peak sits a little above its sample ceiling).
    limit = 10 ** ((float(js["input_tp"]) - excess - 0.1) / 20) if limit >= 0.89 else limit * 10 ** (-(excess + 0.1) / 20)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", raw, "-af", f"alimiter=limit={limit:.4f}:attack=3:release=50:level=disabled:asc=1", "-c:a", "pcm_s24le", lim], check=True)
    js = measure(lim)
src = lim if os.path.exists(lim) and limit < 0.89 else raw
flt = (f"loudnorm=I=-16:TP=-2:LRA=11:measured_I={js['input_i']}:measured_TP={js['input_tp']}:measured_LRA={js['input_lra']}"
       f":measured_thresh={js['input_thresh']}:offset={js['target_offset']}:linear=true:print_format=json")
m2 = subprocess.run(["ffmpeg", "-hide_banner", "-y", "-i", src, "-af", flt + ",aresample=48000:resampler=soxr", "-c:a", "pcm_s24le", out], capture_output=True, text=True).stderr
js2 = json.loads(m2[m2.rindex("{"): m2.rindex("}") + 1])
print(json.dumps({"limit": round(limit, 4), "input_i": js["input_i"], "output_i": js2["output_i"], "output_tp": js2["output_tp"], "normalization": js2["normalization_type"]}))
