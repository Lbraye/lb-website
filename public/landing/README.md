# Landing background clips

Drop muted anime/cinematic clips here. The landing page probes these filenames
and auto-starts whichever exist, crossfading between them.

Expected filenames (any subset works — missing ones are skipped):

- `clip-01.mp4`
- `clip-02.mp4`
- `clip-03.mp4`
- `clip-04.mp4`

## Encoding recommendations

- Format: **MP4 / H.264** (broad browser support; AV1 or HEVC if you're comfortable dropping older browsers)
- Resolution: **1920×1080 max** — anything larger is wasted; clips are behind a heavy overlay
- Duration: **6–15 seconds** each — they crossfade to the next clip 1.4s before the end
- Bitrate: **1.5–2.5 Mbps** (the red duotone filter hides compression artifacts; don't ship 20 MB clips)
- Audio: **stripped** (the `<video>` is muted anyway; save the bytes)

Example ffmpeg command:

```bash
ffmpeg -i input.mp4 -an -c:v libx264 -preset slow -crf 26 \
  -vf "scale=1920:-2,fps=24" -t 10 -movflags +faststart clip-01.mp4
```

## Licensing

Only ship clips you own or have rights to distribute. If these are personal
favorites you don't have rights to, keep them to local dev only — add each file
to `.gitignore` before committing.

## Fallback

If zero clips are present, the page shows a dark radial-gradient fallback. No
layout shift — the design is intentional without video.
