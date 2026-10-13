"""Audio-only check: transcribe a film's mixed soundtrack and compare it with its captions.

Usage: python tools/asr_check.py films/<film> <path-to-sherpa-onnx-whisper-base.en>
Model: github.com/k2-fsa/sherpa-onnx/releases (asr-models/sherpa-onnx-whisper-base.en.tar.bz2).
Each VO line is cut from the final mix (music and cues included) at its TIMELINE time and
transcribed separately, so a failure points at one line.
"""
import json, re, subprocess, sys
import numpy as np
import sherpa_onnx

film, model = sys.argv[1].rstrip("/"), sys.argv[2].rstrip("/")
T = json.loads(subprocess.check_output(["node", "tools/timeline.mjs", film]))
man = json.load(open(f"{film}/audio/vo/manifest.json"))
dur = {l["id"]: l["duration"] for l in man["lines"]}
rec = sherpa_onnx.OfflineRecognizer.from_whisper(
    encoder=f"{model}/base.en-encoder.int8.onnx", decoder=f"{model}/base.en-decoder.int8.onnx",
    tokens=f"{model}/base.en-tokens.txt", language="en", task="transcribe", num_threads=4)
raw = subprocess.check_output(["ffmpeg", "-loglevel", "error", "-i", f"{film}/audio/mix.wav", "-ac", "1", "-ar", "16000", "-f", "f32le", "-"])
pcm = np.frombuffer(raw, dtype=np.float32)
norm = lambda s: re.sub(r"[^a-z0-9 ]", "", s.lower().replace("-", " ")).split()
def wer(ref, hyp):
    r, h = norm(ref), norm(hyp)
    d = np.zeros((len(r) + 1, len(h) + 1), int); d[:, 0] = range(len(r) + 1); d[0, :] = range(len(h) + 1)
    for i in range(1, len(r) + 1):
        for j in range(1, len(h) + 1):
            d[i, j] = min(d[i - 1, j] + 1, d[i, j - 1] + 1, d[i - 1, j - 1] + (r[i - 1] != h[j - 1]))
    return d[-1, -1] / max(1, len(r))
total = 0
for line in T["vo"]:
    a = int((line["t"] - 0.1) * 16000); b = int((line["t"] + dur[line["id"]] + 0.2) * 16000)
    st = rec.create_stream(); st.accept_waveform(16000, pcm[a:b]); rec.decode_stream(st)
    hyp = st.result.text.strip()
    ref = " ".join(c["text"] for c in T["captions"] if line["t"] - 0.05 <= c["t0"] < line["t"] + dur[line["id"]])
    e = wer(ref, hyp); total += e
    print(f"{line['id']}  WER {e:.2f}\n  captions: {ref}\n  heard:    {hyp}")
print(f"mean WER {total / len(T['vo']):.3f}")
