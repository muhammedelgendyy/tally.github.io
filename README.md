# Tally: deploy on GitHub Pages (free)

1. Create a **new GitHub repository** (Private works with Pages only on paid plans, so use **Public**. Your data is never in the repo, only the app code).
2. Upload everything in this folder to the repo root: `index.html`, `sw.js`, `manifest.webmanifest`, and the `icons/` folder.
3. Repo **Settings > Pages > Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.
5. On the iPhone open that link in **Safari > Share > Add to Home Screen**. Always open the app from the home-screen icon afterwards.
6. First launch: create your username and password.

## Updating later
Upload the changed files, then change `VER = 'tally-v1'` in `sw.js` to `'tally-v2'` so phones pick up the new version.

## Good to know
- Data is stored **only on the device where you use the app**, encrypted with your password. There is no password reset. Use Settings > Export backup regularly (iOS can clear website storage in rare cases).
- Laptop dashboard: export a backup on the iPhone, open the site on the laptop, choose "Import a backup instead", pick the file and enter your password.
- Receipt scanning needs internet the first time (it downloads the OCR engine and language data), and it is only as accurate as the photo. Always review the items before saving.
- Live exchange rates come from open.er-api.com (free, no key). Type a rate manually in Settings to override it.

## Receipt scanning with Gemini
- In the app go to **Settings > Receipt scanning**, paste your API keys (one per line, 3 to 5 is fine) and tap **Test keys**.
- Scans try the keys in order until one works and remember the winner. If a key is rejected or out of quota, the next one is used automatically. Within a key, several Gemini models are tried in turn.
- Keys are saved encrypted inside your vault on the device. They are never put in the repo. Paste them into the app only.
- If no key works, the app falls back to the free on-device reader.
- Get keys at https://aistudio.google.com/apikey
