#!/usr/bin/env bash
# Film 01 render commands. Run from video-ads/ after `npm install`.
# 1) voice (Kokoro-82M via kokoro-onnx; needs a Python env with kokoro-onnx + soundfile)
#    python tools/tts.py films/01-business-website/vo.json
# 2) soundtrack (bed, cues, ducking, -16 LUFS / -1.5 dBTP)
#    python tools/audio.py films/01-business-website
# 3) picture + mux (60 fps, H.264 High, yuv420p, BT.709, CRF 16, AAC 256k)
set -euo pipefail
F=films/01-business-website; A=$F/audio/mix.wav; O=out/01-business-website
node tools/render.mjs --film $F --format 16x9 --audio $A --out $O/master_16x9.mp4
node tools/render.mjs --film $F --format 9x16 --audio $A --out $O/social_9x16.mp4
node tools/render.mjs --film $F --format 1x1  --audio $A --out $O/square_1x1.mp4
node tools/render.mjs --film $F --format 9x16 --motion reduced --audio $A --out $O/reduced_motion_9x16.mp4
node tools/srt.mjs $F $O
