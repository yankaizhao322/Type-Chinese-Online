# Deploy

This app is mostly static, with one optional serverless translation endpoint at `/api/translate`.

The Chinese-English translator should use a real translation provider in production. Configure one of these environment variables on Vercel or Netlify:

- `GOOGLE_TRANSLATE_API_KEY`
- `DEEPL_API_KEY`
- `OPENAI_API_KEY`

Optional:

- `TRANSLATION_PROVIDER=google|deepl|openai`
- `OPENAI_TRANSLATE_MODEL=gpt-5-mini`

If no provider key is configured, the app tries supported browser translation APIs and then falls back to a weak local draft. That fallback is only for keeping the UI usable; it is not meant to compete with Google Translate.

## Easiest online options

- GitHub Pages: this can host the static typing app, but it cannot run `/api/translate`; translation will fall back unless you point the frontend at a separate backend.
- Netlify: drag this folder into Netlify Drop, or connect a Git repository. Publish directory: `.`
- Vercel: import this folder/repository. Framework preset: Other. Build command: empty. Output directory: `.`

Expected GitHub Pages URL:

`https://yankaizhao322.github.io/Type-Chinese-Online/`

## Feedback collection

The feedback form uses Netlify Forms. GitHub Pages can host the app, but it does not store form submissions by itself. To collect feedback without a backend, deploy the same repo on Netlify, then open:

`Site configuration -> Forms`

Submissions will appear under the `feedback` form. No custom backend or database is needed.

On `file://`, `localhost`, and local Wi-Fi previews, the form shows a preview message and does not submit.

## Use on your Mac without manually running it

Use `install-autostart.command` to create a macOS user LaunchAgent. After that, the local website starts automatically when you log in.

Local URL:

`http://localhost:8787`

Wi-Fi URL:

`http://YOUR-MAC-IP:8787`

Use `uninstall-autostart.command` if you want to remove the auto-start service later.
