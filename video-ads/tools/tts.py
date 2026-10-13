"""Generate voiceover lines with Kokoro-82M (Apache-2.0) via kokoro-onnx.

Usage: python tools/tts.py films/<film>/vo.json
vo.json: {"voice": "af_heart", "speed": 1.0, "lines": [{"id": "L1", "text": "...", "say": "optional TTS spelling"}]}
Writes films/<film>/audio/vo/<id>.wav (24 kHz mono) and films/<film>/audio/vo/manifest.json with durations.
Model files: the ones `npx hyperframes tts` downloads to ~/.cache/hyperframes/tts (github.com/thewh1teagle/kokoro-onnx releases).
Output is deterministic for a given model, voice, speed and text (CPU inference, no sampling).
"""
import json, os, sys
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

CACHE = os.path.expanduser("~/.cache/hyperframes/tts")
spec_path = sys.argv[1]
spec = json.load(open(spec_path))
out_dir = os.path.join(os.path.dirname(spec_path), "audio", "vo")
os.makedirs(out_dir, exist_ok=True)
k = Kokoro(f"{CACHE}/models/kokoro-v1.0.onnx", f"{CACHE}/voices/voices-v1.0.bin")
manifest = {"voice": spec["voice"], "speed": spec["speed"], "sample_rate": 24000, "lines": []}
for line in spec["lines"]:
    samples, sr = k.create(line.get("say", line["text"]), voice=spec["voice"], speed=spec["speed"], lang="en-us")
    samples = np.asarray(samples, dtype=np.float32)
    # Trim leading/trailing near-silence so cue times mean "first audible syllable".
    idx = np.where(np.abs(samples) > 0.01)[0]
    if len(idx):
        a, b = max(0, idx[0] - int(0.02 * sr)), min(len(samples), idx[-1] + int(0.06 * sr))
        samples = samples[a:b]
    path = os.path.join(out_dir, f"{line['id']}.wav")
    sf.write(path, samples, sr, subtype="PCM_16")
    manifest["lines"].append({"id": line["id"], "text": line["text"], "duration": round(len(samples) / sr, 3)})
    print(line["id"], round(len(samples) / sr, 2), "s")
json.dump(manifest, open(os.path.join(out_dir, "manifest.json"), "w"), indent=2)
