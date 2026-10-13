"""Contact sheet from frames extracted out of the finished MP4s.

Usage: python tools/contact.py <frames_dir> <out.png> "<title>"
Frames are named <export>-<seconds>.png (ffmpeg -ss <t> -i <export>.mp4 -frames:v 1 ...).
"""
import glob, os, sys
from PIL import Image, ImageDraw, ImageFont
d, out, title = sys.argv[1], sys.argv[2], sys.argv[3]
F = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
fb = ImageFont.truetype(F.replace("Sans.ttf", "Sans-Bold.ttf"), 34); f = ImageFont.truetype(F, 18); fl = ImageFont.truetype(F.replace("Sans.ttf", "Sans-Bold.ttf"), 22)
rows = [("master_16x9", "16:9 master", 370, 8), ("social_9x16", "9:16 social", 184, 15), ("square_1x1", "1:1 square", 184, 15), ("reduced_motion_9x16", "9:16 reduced motion", 184, 15)]
blocks = []
for key, label, tw, per in rows:
    fs = sorted(glob.glob(os.path.join(d, f"{key}-*.png")), key=lambda p: float(p.rsplit("-", 1)[1][:-4]))
    ims = [Image.open(p).convert("RGB") for p in fs]
    th = int(ims[0].size[1] * tw / ims[0].size[0])
    nrow = (len(ims) + per - 1) // per
    W = per * tw + (per - 1) * 8
    b = Image.new("RGB", (W, 34 + nrow * (th + 26)), (245, 244, 240)); dr = ImageDraw.Draw(b)
    dr.text((0, 2), label, fill=(122, 46, 14), font=fl)
    for i, (p, im) in enumerate(zip(fs, ims)):
        x = (i % per) * (tw + 8); y = 34 + (i // per) * (th + 26)
        b.paste(im.resize((tw, th), Image.LANCZOS), (x, y))
        dr.text((x, y + th + 3), f"{float(p.rsplit('-', 1)[1][:-4]):.1f} s", fill=(94, 91, 85), font=f)
    blocks.append(b)
W = max(b.size[0] for b in blocks) + 64
H = 90 + sum(b.size[1] + 24 for b in blocks) + 20
sheet = Image.new("RGB", (W, H), (245, 244, 240)); dr = ImageDraw.Draw(sheet)
dr.text((32, 28), title, fill=(28, 25, 23), font=fb)
y = 90
for b in blocks:
    sheet.paste(b, (32, y)); y += b.size[1] + 24
sheet.save(out); print(out, sheet.size)
