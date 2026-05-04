# Type Chinese

A small frontend-only website for typing Chinese with pinyin candidates and Chinese-English translation.
It includes a Netlify Forms feedback form for collecting missing words, wrong candidates, bugs, and ideas after deployment.

The translator prioritizes supported browser translation APIs for full-sentence translation and falls back to local term-based drafts with long-sentence clause breakdowns.

Public site after GitHub Pages is enabled:

`https://yankaizhao322.github.io/Type-Chinese-Online/`

Project folder:

`/Users/zhaoyankai/Documents/Codex/Type-Chinese`

## Use on this Mac

Open `index.html` directly in a browser, or double-click `start-local.command`.

## Use from another computer

1. Make sure both computers are on the same Wi-Fi.
2. Double-click `start-local.command` on this Mac.
3. Open the printed Network URL on the other computer, for example:

   `http://192.168.1.20:8787`

## Keyboard

- Type pinyin such as `nihao`, `zhongwen`, or `woaini`.
- Press Space to commit the first candidate.
- Press 1-9 to choose a candidate.
- Press Enter to commit the visible pinyin.
- Press Backspace with an empty pinyin box to delete the last Chinese character.

Everything runs in the browser. No API key or build step is needed.

## Deploy

See `DEPLOY.md`.
