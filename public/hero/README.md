# Hero Carousel Characters

4 character figurines that rotate through the hero carousel — one per skill.
Drop your generated PNGs here with **exactly** these filenames:

| Filename               | Skill          | Background tint  |
| ---------------------- | -------------- | ---------------- |
| `hero-char-vfx.png`    | VFX            | Orange `#F4845F` |
| `hero-char-3d.png`     | 3D & CGI       | Green  `#6BBF7A` |
| `hero-char-editor.png` | Video Editing  | Pink   `#E882B4` |
| `hero-char-color.png`  | Color Grading  | Blue   `#6EB5FF` |

## Image specs

- **Format:** PNG with **transparent background** (mandatory — the colored panel must show through)
- **Aspect ratio:** ~3:5 portrait (recommended **1080 × 1800 px**, or up to 1440 × 2400)
- **Composition:** full body, character standing, **feet touching the bottom edge** of the image
- **Style consistency:** same character (face, hair, outfit) across all 4 — only the prop/pose changes
- **File size:** keep each under **800 KB** (use TinyPNG / Squoosh to compress)

## How rendering works

- The center figurine scales up dramatically (~1.68× on desktop) — make sure the character is rendered sharp at large size
- Side figurines have a slight blur (2px) — okay if they're a bit soft
- The background figurine (4th slot, behind) has 4px blur — okay if soft

If you upload a different image filename (e.g. `.jpg`), edit `src/sections/HeroSection.tsx`
and update the matching `filename` field in the `SLIDES` array.
