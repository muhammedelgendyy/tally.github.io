# Tally: deploy on GitHub Pages (free)

## Files (all in the SAME folder, no sub-folders)
`index.html`, `sw.js`, `manifest.webmanifest`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`

Upload all 7 files to the root of your GitHub repo (Add file > Upload files). Check the icon is reachable by opening
`https://<your-username>.github.io/<repo-name>/apple-touch-icon.png` in a browser. You should see the receipt icon.

## First install
1. Repo **Settings > Pages**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
2. Open `https://<your-username>.github.io/<repo-name>/` in **Safari** on the iPhone.
3. **Share > Add to Home Screen**. Always open Tally from that icon afterwards.
4. First launch: create your username and password.

## Updating
Upload the changed files. The app fetches the newest files whenever you are online and reloads itself once when a new version arrives. Settings (bottom) shows the running version: it should say **Tally version 9**.

The home-screen icon is fixed by iOS at the moment you add the app. If it was blank or wrong before, delete the old icon and add the app to the Home Screen again.

## Good to know
- Data is stored **only on the device**, encrypted with your password. There is no password reset. Use Settings > Export backup regularly (Tally reminds you every 14 days).
- Laptop dashboard: export a backup on the iPhone, open the site on the laptop, choose "Import a backup instead", pick the file and enter your password.
- Live exchange rates come from open.er-api.com. Type a rate in Settings to override it.

## Receipt scanning with Gemini
- Settings > Receipt scanning: paste your API keys (one per line) and tap **Test keys**. Scans try the keys in order until one works. If none work, you are asked whether to use the free on-device reader.
- Keys are saved encrypted inside your vault. Paste them into the app only. Get keys at https://aistudio.google.com/apikey

## What is inside
- **Dashboard** widgets: Summary, Budgets, Coming up, Insights, Income vs spending, Spending calendar, Where the money went, Top spending, Largest expenses, By weekday, By currency, Day cards. Tap **Widgets** to show, hide and reorder them.
- **Smart tagging**, **bank SMS** reading, **recurring transactions**, **monthly budgets**, undo for deletes, duplicate, search across all months.

## If a strip still shows at the bottom of the screen
1. Open Tally only from its Home Screen icon (not from Safari).
2. Delete the Home Screen icon, then add the app again (Safari > Share > Add to Home Screen). iOS decides full-screen behaviour when the app is added.
3. Settings (bottom) should say version 9. If not, swipe the app away and reopen it.
4. If it is still there, send a screenshot and your iPhone model.

## Forecast tab (new in version 7)
Build a savings scenario: add money coming in and going out (every month, one time, or between two months), edit any amount right in the list, switch items on and off, and try the What if? sliders. Set your savings today, a yearly return and a goal. Fill it from your last 3 months or your recurring items with one tap.

## Full-screen check
Version 9 changes how the screen is filled, based on reviewing your v4 project: instead of locking the app to a JS-measured height (fragile, and the cause of the last two bugs), the page now scrolls the normal, native way — like an ordinary webpage — and only the header and the bottom bar are pinned to the screen edges with `position:fixed`. This is the same technique your v4 project already uses successfully, and it needs no measuring or guessing at all.
