# Asset licences and permissions

| Asset | Where it's from | Terms | Notes |
|---|---|---|---|
| Anton, Inter, PT Serif (`brand/fonts/*.woff2`) | The site's own self-hosted files in `public/fonts/site/` | SIL Open Font License 1.1. Notices copied unchanged to `brand/fonts/OFL-anton.txt`, `OFL-inter.txt`, `OFL-ptserif.txt` | Latin subsets only. The files are unmodified. |
| PandaCodeGen wordmark (`brand/wordmark-ink.png`, `brand/wordmark-paper.png`) | `public/logo.png` | PandaCodeGen's own mark | The full stop is recoloured to the current site accent. The paper version is recoloured for charcoal. The letterforms are Zodiak as rendered in the original PNG; no Zodiak font file is included. |
| Founder photographs (`brand/founder-*.png`) | `public/team/hassan.png`, `public/team/imran-editorial.png` | Published by PandaCodeGen on its own site | Used as stills only. Nothing is animated to look like speech, and no voice is cloned. |
| Emblematic Studio screenshot (`refs/emblematic-studio-*.png`) | `public/work/`, published on /work/emblematic-studio | Shown on the site as client work. The film uses it the same way, with the same relationship label. | Independent client. Confirm the client is happy to appear in paid advertising before media spend. |
| Ladies 4 Jesus screenshots (`refs/ladies-4-jesus*.png`) | `public/work/`, published on /work/ladies-4-jesus | As above | Independent client. The editor screenshot shows Sanity Studio UI; Sanity's own promo panel at the bottom-left is outside every crop. Same paid-advertising confirmation applies. |
| Site captures (`screens/*.png`) | Captured in this session from the redesigned site running locally at `63a6bdce` | PandaCodeGen's own pages | The Next.js dev badge is hidden. The homepage's NorthDeck Group slide is visible briefly in the 16:9 and 1:1 homepage framing as part of the real page. |
| Voice (`films/*/audio/vo/*.wav`) | Generated with Kokoro-82M (`kokoro-v1.0.onnx`, `voices-v1.0.bin` from github.com/thewh1teagle/kokoro-onnx releases, the files `hyperframes tts` downloads) | Kokoro-82M weights: Apache-2.0. kokoro-onnx: MIT. | A synthetic voice (`af_heart`), not a real person's. No service fees. |
| Music and sound cues (`films/*/audio/bed.wav`, `sfx.wav`) | Synthesised by `tools/audio.py` from a fixed seed | Original to this project | No samples or third-party loops. |
| Example illustrations (the "Your Business" page, phone screens, landscape SVG) | Drawn in the film's HTML/CSS/SVG | Original to this project | Tagged EXAMPLE PAGE or EXAMPLE JOURNEY on screen. |
| Rendering tools | Chromium (Playwright build), playwright-core 1.56.1 (Apache-2.0), FFmpeg (LGPL/GPL build with libx264, used as an external program) | As stated | Not redistributed in the outputs. |
| ASR check model | sherpa-onnx (Apache-2.0) with Whisper base.en (MIT) from github.com/k2-fsa/sherpa-onnx releases | As stated | Verification only. Not part of any output. |
