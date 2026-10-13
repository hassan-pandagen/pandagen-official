# PandaCodeGen campaign videos

Workspace for the six-film campaign. **Status: Film 01 v4 (`01-bottlenecks`: question-led "Are you showing up?" ad, 44 s, reworked from the owner's feedback) is rendered and waiting for sign-off; v1 (`01-business-website`) is kept for reference. Films 02–06 have not started.**

Separate from the website: own `package.json`, no imports from `src/`, no changes to the site's code, pricing, dependencies or deployment settings.

## Layout

| Path | What |
|---|---|
| `Directions.html` | Three visual directions, the chosen one and why |
| `DECISIONS.md` · `SOURCES.md` · `LICENSES.md` | Decision log, claim sources, asset licences |
| `brand/` | Tokens (`tokens.css`), bundled OFL fonts and notices, wordmark (ink and paper), founder photos |
| `refs/` | Repository screenshots the films use (copied from `public/work/`) |
| `screens/` | Captures of the redesigned site running locally at `63a6bdce` |
| `tools/` | Engine, renderer, capture, voice, audio, captions, contact-sheet and ASR-check tools |
| `films/01-business-website/` | Editable source: `index.html`, `film.js`, `timeline.js`, `vo.json`, `audio/`, script, scene spec, render script |
| `out/01-business-website/` | Deliverables (below) |

## Film 01 outputs (`out/01-business-website/`)

| File | Spec |
|---|---|
| `master_16x9.mp4` | 1920×1080, 35.000 s, 60 fps (2100 frames), H.264 High, yuv420p, BT.709, CRF 16, AAC-LC 256 kb/s 48 kHz stereo |
| `social_9x16.mp4` | 1080×1920, same encode; recomposed for vertical (the priority version) |
| `square_1x1.mp4` | 1080×1080, same encode; recomposed |
| `reduced_motion_9x16.mp4` | 1080×1920, same encode; holds and fades, same sequence and timings |
| `captions_16x9.srt` · `captions_9x16.srt` · `captions_1x1.srt` | The burned-in captions as SRT, wrapped per aspect |
| `contact.png` | Frames from all four exports at every beat |
| `review/` | Design-review findings and resolutions, before/after frame pairs |
| `script.md` · `scene-spec.md` · `render-command.sh` | Final script, scene spec, exact render commands |

Files are 4.8–7.4 MB each, so no separate upload copy is needed. **The MP4s and `source.zip` aren't in git:** the repository ignores `*.mp4` (rendered video stays out of the site repo), and the zip repackages files already committed here. They were delivered as downloads; `bash films/01-business-website/render.sh` re-creates the MP4s exactly from the committed source and frozen audio.

## How to render

```bash
cd video-ads && npm install                      # playwright-core only
# Site captures (optional: screens/ already holds them). In the repo root: npx next dev -p 3001
node tools/capture-screens.mjs http://localhost:3001
# Voice: needs Python with kokoro-onnx + soundfile, and the Kokoro model files in ~/.cache/hyperframes/tts
#   (`npx hyperframes tts "x"` downloads them from github.com/thewh1teagle/kokoro-onnx releases)
python tools/tts.py films/01-business-website/vo.json
python tools/audio.py films/01-business-website  # bed, cues, ducking, loudnorm
bash films/01-business-website/render.sh         # four MP4s + SRTs
```

The renderer loads `films/<film>/index.html?format=16x9|9x16|1x1&motion=full|reduced` in headless Chromium, calls `window.seek(t)` for t = i/60, captures each frame over CDP and pipes the PNGs to FFmpeg. Work is split into three contiguous segments rendered in parallel and joined without re-encoding. Set `CHROME_PATH` if Chromium isn't at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`.

## Checks performed on Film 01

Only checks that were actually run are listed.

- **FFprobe** on all four MP4s: duration 35.000 s; 2100 video frames at 60/1; h264 High, yuv420p, bt709; aac, 2 channels, 48 kHz; dimensions 1920×1080, 1080×1920, 1080×1080 and 1080×1920.
- **Loudness** (FFmpeg `ebur128=peak=true` on each MP4's audio): integrated −15.9 LUFS and true peak −2.1 dBFS on all four (target about −16 LUFS, ceiling −1.5 dBTP). Linear loudnorm, no dynamic fallback.
- **Voice above music:** voice RMS about 13 dB above the ducked bed during speech, measured on the stems.
- **Deterministic frames:** 9 frames at 0.5–30 s gave identical MD5s across separate browser sessions and in reversed seek order, so each frame depends only on t, not on what was drawn before. Repeated on the final build.
- **Stills at every beat:** 14 timestamps × 4 exports extracted from the MP4s (`contact.png`). Each beat was inspected in all three aspect ratios and in reduced motion.
- **390 px preview:** 9:16 beat frames scaled to 390 px wide and inspected. Headlines, captions, disclosure tags, the CTA, the domain and the price line are legible. The phone's illustrative body text is not, and doesn't need to be.
- **Contrast:** every brand text/background pair the film uses was computed with the WCAG formula (DECISIONS.md). The lowest is 5.02:1 (cognac italic on paper, large type only).
- **Audio-only check:** the final mix (music and cues included) was transcribed per voice line with Whisper base.en (sherpa-onnx, offline). Mean word error rate against the captions was 0.06. Lines 1, 3 and 5 matched exactly. The differences are "Panda code Gen" for PandaCodeGen and "Hassen and Emran" for "Hassan and Imran". **A person still needs to listen to how the founders' names are pronounced.** No human listening was possible in this environment.
- **Muted review:** the beat frames, read in order, carry problem → example journey → two labelled client projects → founders and price → payoff → CTA without sound.
- **Safe areas:** 9:16 layout values keep essential text inside y 270–1248 and x ≤ 930. Confirmed by eye on the beat frames.
- **Design review:** an independent review agent inspected frames from all four MP4s against the brief's review questions. It found no blockers; all seven should-fix items were addressed, re-rendered and re-checked. Findings, resolutions and before/after frame pairs are in `out/01-business-website/review/`.

Not done: real-time human viewing and listening, playback on actual phones, and platform upload previews.
