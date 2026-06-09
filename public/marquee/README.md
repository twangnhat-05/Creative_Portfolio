# Marquee Media Slots

Two rows of tiles that scroll horizontally based on page scroll position
(row 1 → right, row 2 → left). Each tile is 420×270 px, rounded.

Drop video/image files here using **exactly** these filenames.
Until a file exists, the site shows a dashed placeholder with the expected filename.

Supported types:
- Videos: `.mp4` / `.webm` / `.mov` / `.m4v` (autoplay, loop, muted)
- Images: `.png` / `.jpg` / `.jpeg` / `.gif` / `.webp`

To change an extension (e.g. `.mp4` → `.gif`), edit the matching `filename`
in `src/sections/MarqueeSection.tsx`.

---

## Row 1 — Featured client work (scrolls right)

| Filename                       | Project                       |
| ------------------------------ | ----------------------------- |
| `marquee-bitis-reel.mp4`       | Bitis Reel                    |
| `marquee-bitis-kids.mp4`       | Bitis Kids Reel               |
| `marquee-bitis-hunter.mp4`     | Bitis Hunter Reel             |
| `marquee-bitis-gosto.mp4`      | Bitis Gosto Reel              |
| `marquee-vfis-tvc.mp4`         | VFIS School TVC               |
| `marquee-cee-mv.mp4`           | Tết Là Nhà — CEE TEAM MV      |

## Row 2 — Showreel / skill showcase (scrolls left)

| Filename                       | Project                       |
| ------------------------------ | ----------------------------- |
| `marquee-vfx-01.mp4`           | VFX Showcase 01               |
| `marquee-vfx-02.mp4`           | VFX Showcase 02               |
| `marquee-cgi-01.mp4`           | CGI Showcase 01               |
| `marquee-cgi-02.mp4`           | CGI Showcase 02               |
| `marquee-motion-01.mp4`        | Motion Showcase 01            |
| `marquee-motion-02.mp4`        | Motion Showcase 02            |

---

## Tips for marquee files

- Marquee tiles autoplay continuously — keep videos **short (3–8 sec) and small (< 3 MB each)** to avoid bandwidth blowout. The same file plays 3× per row for seamless looping.
- If file size is a concern, use `.gif` or compressed `.webp` instead of `.mp4` for marquee — purely visual previews don't need full video quality.
- Each tile renders at 420×270 — export at 840×540 (2×) or 1260×810 (3×) max for retina sharpness.
