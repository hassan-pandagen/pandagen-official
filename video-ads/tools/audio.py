"""Build a film's frozen soundtrack from its TIMELINE.

Usage: python tools/audio.py films/<film>
Reads   films/<film>/timeline.js (via node) and films/<film>/audio/vo/*.wav
Writes  films/<film>/audio/{vo_track,bed,sfx,mix_prenorm,mix}.wav  (48 kHz stereo, 24-bit)

Everything is synthesised here from a fixed seed: a tempo-locked pad, bass and soft pulse,
one three-note motif that returns on the film's key idea, and short cues on meaningful
actions. The bed is ducked under the voice. mix.wav is normalised with FFmpeg's two-pass
loudnorm to about -16 LUFS integrated with a -1.5 dBTP ceiling.
"""
import json, os, subprocess, sys
import numpy as np
import soundfile as sf

SR = 48000
film = sys.argv[1].rstrip("/")
T = json.loads(subprocess.check_output(["node", "tools/timeline.mjs", film]))
DUR = T["duration"]
N = int(round(DUR * SR))
rng = np.random.default_rng(T.get("seed", 1))
aud = os.path.join(film, "audio")
t = np.arange(N) / SR


def midi(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def env_adsr(n, a, d, s, r, sr=SR):
    a, d, r = int(a * sr), int(d * sr), int(r * sr)
    e = np.full(n, s, dtype=np.float64)
    a = min(a, n); e[:a] = np.linspace(0, 1, a, endpoint=False) if a else e[:a]
    dd = min(d, n - a)
    if dd > 0:
        e[a:a + dd] = np.linspace(1, s, dd, endpoint=False)
    rr = min(r, n)
    if rr > 0:
        e[n - rr:] *= np.linspace(1, 0, rr)
    return e


def lp(x, fc):
    # Fast one-pole low-pass using cumulative trick on blocks (exact recursion, numpy-friendly).
    a = np.exp(-2 * np.pi * fc / SR)
    b = 1 - a
    y = np.empty_like(x)
    acc = 0.0
    # Block length keeps a^-n within float range (exact recursion, vectorised per block).
    block = int(max(16, min(4096, 30 / -np.log(a))))
    powers = a ** np.arange(1, block + 1)
    for s0 in range(0, len(x), block):
        seg = x[s0:s0 + block]
        n = len(seg)
        p = powers[:n]
        # y[k] = a^(k+1) acc + b * sum_{j<=k} a^(k-j) seg[j]
        scaled = seg / (a ** np.arange(n))
        y[s0:s0 + n] = p * acc + b * (a ** np.arange(n)) * np.cumsum(scaled)
        acc = y[s0 + n - 1]
    return y


def hp(x, fc):
    return x - lp(x, fc)


# ── Music ────────────────────────────────────────────────────────────────────
bpm = T["music"]["bpm"]
beat = 60.0 / bpm
bar = 4 * beat
# D major colour: Dmaj9 – Bm7 – Gmaj7 – A6sus, two beats per chord change is too busy; one chord per bar.
CHORDS = [[50, 57, 62, 66, 69, 76], [47, 54, 62, 66, 69, 74], [43, 55, 59, 62, 66, 74], [45, 52, 57, 62, 64, 71]]
FINAL = [50, 57, 62, 66, 69, 74, 78]
C = T["cues"]
end_t = C.get("end", DUR - 6)

pad = np.zeros((N, 2))
bass = np.zeros(N)
nbars = int(np.ceil(DUR / bar))
for b in range(nbars):
    t0 = b * bar
    chord = FINAL if t0 >= end_t - 0.01 else CHORDS[b % 4]
    length = bar + 0.9 if t0 < end_t else DUR - t0
    i0 = int(t0 * SR); n = min(int(length * SR), N - i0)
    if n <= 0:
        continue
    tt = np.arange(n) / SR
    e = env_adsr(n, 0.9, 0.6, 0.85, 0.9 if t0 < end_t else min(3.5, length))
    for k, m in enumerate(chord[1:]):
        f = midi(m)
        for ch, det in ((0, -0.0018), (1, 0.0018)):
            ph = rng.uniform(0, 2 * np.pi)
            v = np.sin(2 * np.pi * f * (1 + det) * tt + ph) + 0.18 * np.sin(2 * np.pi * 2 * f * (1 + det) * tt + ph)
            pad[i0:i0 + n, ch] += 0.055 * e * v / (1 + 0.15 * k)
    # Bass: root on beats 1 and 3 once the explanation starts
    if t0 >= C.get("morph", 5.7) - bar:
        for q in (0, 2):
            s = t0 + q * beat
            if s >= DUR - 1.5:
                continue
            j0 = int(s * SR); m = min(int(1.6 * SR), N - j0)
            tb = np.arange(m) / SR
            eb = np.exp(-tb * 2.4) * np.minimum(1, tb / 0.012)
            f = midi(chord[0] - 12 if chord[0] > 45 else chord[0])
            bass[j0:j0 + m] += 0.16 * eb * (np.sin(2 * np.pi * f * tb) + 0.25 * np.sin(4 * np.pi * f * tb))

# Global dynamics: quiet hook, fuller from the morph, settle after proof, resolve at the end.
shape = np.interp(t, [0, 3.3, C.get("morph", 5.7), C.get("proofE", 14.6), C.get("home", 21.3), end_t, end_t + 1.2, DUR - 2.2, DUR],
                     [0.55, 0.7, 0.95, 1.0, 0.9, 0.95, 1.05, 0.85, 0.0])
pad[:, 0] = lp(pad[:, 0], 2200) * shape
pad[:, 1] = lp(pad[:, 1], 2200) * shape
bass = lp(bass, 600) * shape

# Soft pulse: filtered-noise ticks on the off-beats through the explanation and proof.
pulse = np.zeros(N)
p_start, p_end = C.get("stepA", 9.6) - 0.01, C.get("home", 21.3)
k = 0
while True:
    s = k * beat + beat / 2
    k += 1
    if s >= DUR:
        break
    if not (p_start <= s < p_end):
        continue
    j0 = int(s * SR); m = min(int(0.08 * SR), N - j0)
    burst = rng.standard_normal(m) * np.exp(-np.arange(m) / SR * 70)
    pulse[j0:j0 + m] += 0.05 * burst
pulse = hp(pulse, 4000)

# Motif: A4 – D5 – F#5, a soft bell, on the key idea (the next step appears) and its returns.
motif = np.zeros((N, 2))
for s in T["music"]["motif"]:
    for i, m in enumerate((69, 72, 76) if T["music"].get("style") == "ad" else (69, 74, 78)):
        st = s + i * beat / 2
        j0 = int(st * SR); n = min(int(2.4 * SR), N - j0)
        if n <= 0:
            continue
        tb = np.arange(n) / SR
        f = midi(m)
        e = np.exp(-tb * 2.0) * np.minimum(1, tb / 0.006)
        v = np.sin(2 * np.pi * f * tb) + 0.32 * np.sin(2 * np.pi * 2.0 * f * tb) * np.exp(-tb * 3) + 0.12 * np.sin(2 * np.pi * 3.01 * f * tb) * np.exp(-tb * 5)
        pan = (-0.25, 0.0, 0.25)[i]
        motif[j0:j0 + n, 0] += 0.11 * e * v * (1 - pan)
        motif[j0:j0 + n, 1] += 0.11 * e * v * (1 + pan)

bed = pad + np.stack([bass, bass], 1) + np.stack([pulse, pulse * 0.9], 1)


# ── Ad-style track (music.style == "ad"): drums, bass, pad, riser into the turn, hits on key lines ──
def ad_track():
    bpm = T["music"]["bpm"]; beat = 60.0 / bpm; bar = 4 * beat
    out = np.zeros((N, 2))
    # A minor pop loop: Am7 – Fmaj7 – C – G (one chord per bar)
    LOOP = [[45, 57, 60, 64, 67], [41, 57, 60, 64, 65], [48, 55, 60, 64, 67], [43, 55, 59, 62, 67]]
    drop0, drop1 = T["music"].get("drop", [None, None])
    br0, br1 = T["music"].get("breakdown", [None, None])
    end_t = T["cues"].get("end", DUR - 6)
    def section(tt):
        if drop0 is not None and drop0 <= tt < drop1: return "drop"
        if br0 is not None and br0 <= tt < br1: return "break"
        if tt >= end_t: return "end"
        if tt < T["cues"].get("s2", 5.3): return "intro"
        return "groove"
    def add(buf, t0, sig, gain=1.0, pan=0.0):
        j0 = int(round(t0 * SR)); n = min(len(sig), N - j0)
        if n <= 0 or j0 < 0: return
        buf[j0:j0 + n, 0] += sig[:n] * gain * (1 - pan)
        buf[j0:j0 + n, 1] += sig[:n] * gain * (1 + pan)
    def kick():
        n = int(0.42 * SR); tt = np.arange(n) / SR
        f = 48 + 90 * np.exp(-tt * 28)
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 7.5) + 0.25 * np.exp(-tt * 140) * rng.standard_normal(n) * 0.2
    def clap():
        n = int(0.25 * SR); tt = np.arange(n) / SR
        nz = hp(rng.standard_normal(n), 900)
        e = np.exp(-tt * 22) * (1 + 0.6 * (np.sin(2 * np.pi * 90 * tt) > 0) * np.exp(-tt * 60))
        return lp(nz * e, 6500)
    def hat(open_=False):
        n = int((0.2 if open_ else 0.06) * SR); tt = np.arange(n) / SR
        return hp(rng.standard_normal(n), 7000) * np.exp(-tt * (18 if open_ else 80))
    def pluck_bass(freq, length):
        n = int(length * SR); tt = np.arange(n) / SR
        saw = 2 * ((freq * tt) % 1) - 1
        return lp(saw * np.exp(-tt * 3.2) * np.minimum(1, tt / 0.004), 700) + 0.4 * np.sin(2 * np.pi * freq * tt) * np.exp(-tt * 3)
    K, CL, HC, HO = kick(), clap(), hat(), hat(True)
    nbeats = int(DUR / beat) + 1
    for b in range(nbeats):
        tt = b * beat
        sec = section(tt); pos = b % 4
        chord = LOOP[(b // 4) % 4]
        if sec in ("intro",):
            if pos in (0, 2): add(out, tt, K, 0.32)
            add(out, tt + beat / 2, HC, 0.035, 0.2)
        elif sec == "groove":
            add(out, tt, K, 0.55)
            if pos in (1, 3): add(out, tt, CL, 0.16, -0.05)
            add(out, tt, HC, 0.04, 0.25); add(out, tt + beat / 2, HO if pos == 3 else HC, 0.05, -0.2)
            for half in (0, 0.5):
                add(out, tt + half * beat, pluck_bass(midi(chord[0] - 12 + (12 if (pos == 3 and half) else 0)), beat * 0.48), 0.2)
        elif sec == "end":
            if tt < end_t + bar: 
                if pos in (0, 2): add(out, tt, K, 0.4)
        # drop and break: no drums
    # Pad on every bar (softer in the drop, warm in the break)
    nb = int(DUR / bar) + 1
    for k in range(nb):
        t0 = k * bar; sec = section(t0 + 0.01)
        chord = LOOP[k % 4] if sec != "end" else [45, 57, 60, 64, 69, 72]
        length = min(bar + 0.6, DUR - t0) if sec != "end" else DUR - t0
        n = int(length * SR); tt = np.arange(n) / SR
        e = env_adsr(n, 0.25, 0.4, 0.8, 0.6 if sec != "end" else min(3.5, length))
        g = {"intro": 0.05, "groove": 0.045, "drop": 0.03, "break": 0.06, "end": 0.06}[sec]
        for i, m in enumerate(chord[1:]):
            f = midi(m)
            for ch, det in ((0, -0.002), (1, 0.002)):
                v = np.sin(2 * np.pi * f * (1 + det) * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * (1 + det) * tt) * np.exp(-tt * 1.5)
                j0 = int(t0 * SR); m2 = min(n, N - j0)
                out[j0:j0 + m2, ch] += (g * e * v / (1 + 0.2 * i))[:m2]
    # Riser into "We'll build the engine", and impacts on the key lines
    if drop0 is not None:
        n = int((drop1 - drop0 + 0.05) * SR); tt = np.arange(n) / SR
        ramp = (tt / tt[-1]) ** 2.2
        nz = rng.standard_normal(n)
        swept = np.zeros(n)
        for s0 in range(0, n, 2048):
            fc = 400 + 7000 * ramp[min(n - 1, s0)]
            seg = nz[s0:s0 + 2048]
            swept[s0:s0 + len(seg)] = lp(hp(seg, max(200, fc * 0.4)), fc)
        tone = np.sin(2 * np.pi * np.cumsum(220 + 660 * ramp) / SR) * 0.15
        add(out, drop0, (swept * 0.22 + tone) * ramp, 0.9)
    def impact():
        n = int(1.8 * SR); tt = np.arange(n) / SR
        boom = np.sin(2 * np.pi * np.cumsum(40 + 60 * np.exp(-tt * 12)) / SR) * np.exp(-tt * 2.8)
        crash = lp(hp(rng.standard_normal(n), 3000), 12000) * np.exp(-tt * 3.2) * 0.25
        return boom * 0.9 + crash
    for s_ in [x["t"] for x in T.get("sfx", []) if x["kind"] == "impact"]:
        add(out, s_, impact(), 0.55)
    return lp(out[:, 0], 14000), lp(out[:, 1], 14000)

if T["music"].get("style") == "ad":
    _l, _r = ad_track()
    bed = np.stack([_l, _r], 1)

# ── SFX ──────────────────────────────────────────────────────────────────────
sfx = np.zeros((N, 2))
for cue in T.get("sfx", []):
    s, kind = cue["t"], cue["kind"]
    j0 = int(s * SR)
    if kind == "thud":
        m = int(0.5 * SR); tb = np.arange(m) / SR
        v = 0.35 * np.sin(2 * np.pi * (62 + 30 * np.exp(-tb * 30)) * tb) * np.exp(-tb * 9) + 0.04 * lp(rng.standard_normal(m), 400) * np.exp(-tb * 25)
        sfx[j0:j0 + m] += np.stack([v, v], 1)[: N - j0]
    elif kind == "swell":
        m = int(0.7 * SR); j0 = max(0, j0 - m + int(0.06 * SR)); tb = np.arange(m) / SR
        noise = lp(hp(rng.standard_normal(m), 600), 3500)
        e = (tb / tb[-1]) ** 2 * np.exp(-np.maximum(0, tb - tb[-1] + 0.06) * 40)
        v = 0.06 * noise * e
        sfx[j0:j0 + m] += np.stack([v, v * 0.95], 1)[: N - j0]
    elif kind == "whoosh":
        m = int(0.45 * SR); j0 = max(0, j0 - int(0.22 * SR)); tb = np.arange(m) / SR
        e = np.sin(np.pi * tb / tb[-1]) ** 2
        v = 0.07 * lp(hp(rng.standard_normal(m), 900), 5000) * e
        sfx[j0:j0 + m] += np.stack([v * 1.1, v * 0.9], 1)[: N - j0]
    elif kind == "type":
        for k in range(14):
            tk = j0 + int(k * 0.105 * SR + rng.uniform(0, 0.02) * SR); m = int(0.03 * SR); tb = np.arange(m) / SR
            v = 0.05 * hp(rng.standard_normal(m), 2500) * np.exp(-tb * 220)
            sfx[tk:tk + m] += np.stack([v, v], 1)[: max(0, N - tk)]
    elif kind == "impact":
        pass  # drawn into the music track
    elif kind in ("tap", "tick"):
        m = int(0.09 * SR); tb = np.arange(m) / SR
        f = 1500 if kind == "tap" else 2300
        v = (0.16 if kind == "tap" else 0.11) * (np.sin(2 * np.pi * f * tb) * np.exp(-tb * 90) + 0.4 * hp(rng.standard_normal(m), 3000) * np.exp(-tb * 250))
        sfx[j0:j0 + m] += np.stack([v, v], 1)[: N - j0]

# ── Voice ────────────────────────────────────────────────────────────────────
vo = np.zeros(N)
for line in T["vo"]:
    src = os.path.join(aud, "vo", f"{line['id']}.wav")
    raw = subprocess.check_output(["ffmpeg", "-loglevel", "error", "-i", src, "-af",
                                   "aresample=48000:resampler=soxr:precision=28,highpass=f=70,acompressor=threshold=-22dB:ratio=2.2:attack=8:release=160:makeup=2",
                                   "-f", "f32le", "-ac", "1", "-"])
    x = np.frombuffer(raw, dtype=np.float32).astype(np.float64)
    j0 = int(round(line["t"] * SR)); n = min(len(x), N - j0)
    vo[j0:j0 + n] += x[:n]

# Ducking: bed follows the inverse of the voice envelope (attack 40 ms, release 350 ms).
rms = np.sqrt(lp(vo ** 2, 12))
env = np.zeros(N); acc = 0.0
att, rel = np.exp(-1 / (0.04 * SR)), np.exp(-1 / (0.35 * SR))
# Envelope follower on a decimated signal for speed, then upsampled.
dec = 48
r = rms[::dec]; e2 = np.empty_like(r)
a_d, r_d = att ** dec, rel ** dec
for i, v in enumerate(r):
    acc = a_d * acc + (1 - a_d) * v if v > acc else r_d * acc + (1 - r_d) * v
    e2[i] = acc
env = np.interp(np.arange(N), np.arange(len(e2)) * dec, e2)
env = np.clip(env / (np.percentile(env[env > 1e-4], 90) + 1e-9), 0, 1)
AD = T["music"].get("style") == "ad"
duck = 1 - (0.75 if AD else 0.66) * env  # about -12 dB (ad) / -9.4 dB under full voice
bed_d = bed * duck[:, None]
motif_d = motif * (1 - 0.35 * env)[:, None]

music = bed_d + motif_d
mix = np.stack([vo, vo], 1) * 1.0 + music * (0.42 if AD else 0.7) + sfx * 0.8

os.makedirs(aud, exist_ok=True)
def write(name, x):
    sf.write(os.path.join(aud, name), np.clip(x, -1, 1).astype(np.float32), SR, subtype="PCM_24")
write("vo_track.wav", np.stack([vo, vo], 1))
write("bed.wav", music)
write("sfx.wav", sfx)
peak = np.max(np.abs(mix))
write("mix_prenorm.wav", mix / max(1.0, peak / 0.89))

# Gentle peak limiter (-4 dBFS ceiling) so the loudness gain stays linear, then
# two-pass loudnorm to -16 LUFS / -1.5 dBTP.
raw_pre = os.path.join(aud, "mix_prenorm.wav"); pre = os.path.join(aud, "mix_limited.wav"); out = os.path.join(aud, "mix.wav")
# The limiter ceiling is chosen from a first loudness reading so the later gain stays linear.
m0 = subprocess.run(["ffmpeg", "-hide_banner", "-i", raw_pre, "-af", "loudnorm=I=-16:TP=-1.5:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
gain = -16.0 - float(json.loads(m0[m0.rindex("{"): m0.rindex("}") + 1])["input_i"])
limit = min(0.89, 10 ** ((-1.5 - gain - 0.8) / 20))
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", raw_pre, "-af", f"alimiter=limit={limit:.4f}:attack=4:release=60:level=disabled:asc=1",
                "-c:a", "pcm_s24le", pre], check=True)
m1 = subprocess.run(["ffmpeg", "-hide_banner", "-i", pre, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
js = json.loads(m1[m1.rindex("{"): m1.rindex("}") + 1])
flt = (f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={js['input_i']}:measured_TP={js['input_tp']}:measured_LRA={js['input_lra']}"
       f":measured_thresh={js['input_thresh']}:offset={js['target_offset']}:linear=true:print_format=json")
m2 = subprocess.run(["ffmpeg", "-hide_banner", "-y", "-i", pre, "-af", flt + ",aresample=48000:resampler=soxr", "-c:a", "pcm_s24le", out], capture_output=True, text=True).stderr
js2 = json.loads(m2[m2.rindex("{"): m2.rindex("}") + 1])
print(json.dumps({"input_i": js["input_i"], "input_tp": js["input_tp"], "output_i": js2["output_i"], "output_tp": js2["output_tp"], "normalization": js2["normalization_type"]}))
