# Deploy

This app is a static website. The whole site is `index.html`, so most static hosts can deploy it without a build step.

## Easiest online options

- GitHub Pages: this repo includes `.github/workflows/pages.yml`. In GitHub, set Pages source to `GitHub Actions`, then every push to `main` deploys the site.
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
