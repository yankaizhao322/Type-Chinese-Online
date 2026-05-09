
A website for typing Chinese with pinyin candidates and Chinese-English translation.
It includes a Netlify Forms feedback form for collecting missing words, wrong candidates, bugs, and ideas after deployment.

The translator uses a server-side translation API when configured, so API keys are never exposed in the browser. It supports Google Cloud Translation, DeepL, or OpenAI through environment variables, then falls back to browser translation or a weak local draft only when no provider is available.

Public site after GitHub Pages is enabled:

`https://yankaizhao322.github.io/Easy-Input-Tool/`

Project folder:

`/Users/zhaoyankai/Documents/Codex/Easy-Input-Tool`

## Use on this Mac

Open `index.html` directly in a browser, or double-click `start-local.command`.

For real translation quality locally, run the app through the Node server with one provider key:

```sh
GOOGLE_TRANSLATE_API_KEY=your_key npm run dev
```

Supported provider keys:

- `GOOGLE_TRANSLATE_API_KEY`
- `DEEPL_API_KEY`
- `OPENAI_API_KEY`

Optional settings:

- `TRANSLATION_PROVIDER=google|deepl|openai`
- `OPENAI_TRANSLATE_MODEL=gpt-5-mini`

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

Typing still runs in the browser. Production-quality translation needs one server-side provider key.
