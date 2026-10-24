# Draws the app icon: a soil core sample with strata on the app's green.
# Rendered large and downsampled for smooth edges. Content stays inside the
# central 80% "safe zone" so Android can crop it to any mask shape.
import random, sys
from PIL import Image, ImageDraw

N = 1024
GREEN, GREEN_D = (47, 107, 79), (36, 84, 62)
img = Image.new("RGB", (N, N), GREEN)
d = ImageDraw.Draw(img)
# subtle radial depth
for r in range(N // 2, 0, -8):
    t = r / (N / 2)
    c = tuple(int(GREEN[i] * (1 - 0.18 * t) + GREEN_D[i] * 0.18 * t) for i in range(3))
    d.ellipse([N/2 - r*1.3, N/2 - r*1.3, N/2 + r*1.3, N/2 + r*1.3], fill=c)

# core: rounded vertical bar centered, inside safe zone (width ~30%, height ~64%)
cw, ch = 380, 660
x0, y0 = (N - cw) // 2, (N - ch) // 2 + 10
x1, y1 = x0 + cw, y0 + ch
layers = [  # (fraction of height, color, kind)
    (0.10, (64, 45, 31), "solid"),      # topsoil
    (0.24, (176, 132, 82), "solid"),    # lean clay (till)
    (0.22, (226, 196, 140), "sand"),    # outwash sand
    (0.20, (150, 140, 128), "gravel"),  # gravel
    (0.24, (196, 196, 190), "rock"),    # dolomite bedrock
]
core = Image.new("RGB", (cw, ch))
cd = ImageDraw.Draw(core)
y = 0
random.seed(4)
bounds = []
for frac, col, kind in layers:
    h = int(round(frac * ch))
    cd.rectangle([0, y, cw, y + h], fill=col)
    if kind == "sand":
        for _ in range(260):
            px, py = random.randint(0, cw), random.randint(y, y + h)
            cd.ellipse([px, py, px + 4, py + 4], fill=(200, 168, 110))
    if kind == "gravel":
        for _ in range(26):
            px, py, r = random.randint(10, cw - 10), random.randint(y + 8, y + h - 8), random.randint(9, 17)
            cd.ellipse([px - r, py - r * 0.75, px + r, py + r * 0.75], fill=(112, 104, 96), outline=(90, 84, 78), width=3)
    if kind == "rock":
        for k in range(1, 3):  # bedding / fracture lines
            yy = y + h * k // 3
            cd.line([0, yy, cw, yy + 10], fill=(150, 150, 146), width=5)
        cd.line([cw * 0.6, y, cw * 0.52, y + h * 0.33], fill=(150, 150, 146), width=4)
    bounds.append(y)
    y += h
mask = Image.new("L", (cw, ch), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, cw - 1, ch - 1], radius=46, fill=255)
img.paste(core, (x0, y0), mask)
# water table: blue line with the standard inverted-triangle symbol, at top of sand
wt = y0 + bounds[2] + 6
d.line([x0 - 40, wt, x1 + 40, wt], fill=(84, 166, 232), width=12)
tri_x = x1 + 70
d.polygon([(tri_x - 34, wt - 62), (tri_x + 34, wt - 62), (tri_x, wt - 10)], fill=(84, 166, 232))
# core outline and highlight (cylinder feel)
d.rounded_rectangle([x0, y0, x1, y1], radius=46, outline=(245, 247, 244), width=14)
hl = Image.new("RGBA", (N, N), (0, 0, 0, 0))
ImageDraw.Draw(hl).rounded_rectangle([x0 + 34, y0 + 36, x0 + 70, y1 - 36], radius=18, fill=(255, 255, 255, 70))
img = Image.alpha_composite(img.convert("RGBA"), hl).convert("RGB")

big = img
# (1024 px master is generated in memory only)
for s in (512, 192, 180, 32):
    big.resize((s, s), Image.LANCZOS).save(sys.argv[1] + f"/icon-{s}.png", optimize=True)
print("ok")
