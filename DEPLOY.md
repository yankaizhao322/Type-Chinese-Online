# Deploy

This app is a static website. The whole site is `index.html`, so most static hosts can deploy it without a build step.

## Easiest online options

- Netlify: drag this folder into Netlify Drop, or connect a Git repository. Publish directory: `.`
- Vercel: import this folder/repository. Framework preset: Other. Build command: empty. Output directory: `.`
- GitHub Pages: push this folder to a repository and enable Pages from the main branch root.

## Use on your Mac without manually running it

Use `install-autostart.command` to create a macOS user LaunchAgent. After that, the local website starts automatically when you log in.

Local URL:

`http://localhost:8787`

Wi-Fi URL:

`http://YOUR-MAC-IP:8787`

Use `uninstall-autostart.command` if you want to remove the auto-start service later.
