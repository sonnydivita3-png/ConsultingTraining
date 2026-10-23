# Turning on cross-device sync (Supabase)

When sync is set up, learners sign in with an emailed link and their progress
follows them between phone and computer. If you skip this, the app works
exactly as before, with progress saved in each browser.

Setup takes about 10 minutes and the Supabase free tier is enough.

## 1. Create the project

1. Sign in at https://supabase.com/dashboard and click **New project**.
2. Pick a name (for example `consulting-academy`), set a database password
   (store it somewhere safe; the app doesn't need it), choose the region
   closest to you, and create the project.

## 2. Create the progress table

1. In the left menu, open **SQL Editor** and start a new query.
2. Paste in everything from `supabase/setup.sql` in this repository and click
   **Run**. You should see "Success. No rows returned."

This creates a `progress` table with row-level security, so each signed-in
person can read and write only their own row.

## 3. Tell Supabase where the app lives

1. Open **Authentication → URL Configuration**.
2. Set **Site URL** to your app's address:
   `https://sonnydivita3-png.github.io/ConsultingTraining/`
3. Under **Redirect URLs**, add the same address and click **Save**.

Sign-in links send people back to this address. Email sign-in is turned on by
default under **Authentication → Providers → Email**; leave it on.

## 4. Copy your project's URL and public key

1. Open **Project Settings → API** (in newer dashboards: **Project Settings →
   Data API** for the URL, and **API Keys** for the key).
2. Copy the **Project URL** (it looks like `https://abcdefgh.supabase.co`).
3. Copy the **anon public** key (newer projects may show a **publishable**
   key starting `sb_publishable_`; either works).

Never use the **service_role** or **secret** key. It bypasses security and
must never be put in a web page.

## 5. Put them in the app

Edit `js/sync-config.js` (you can do this right in GitHub: open the file,
click the pencil icon, edit, and commit):

```js
window.WCA_SYNC_CONFIG = {
  url: "https://abcdefgh.supabase.co",
  key: "your-anon-or-publishable-key"
};
```

Or send the two values to Claude and ask it to add them. The public key is
meant to be visible in web pages; row-level security is what protects the data.

## 6. Try it

1. Open the app (wait a minute or two after committing for GitHub Pages to
   update).
2. On the home page or **Transcript**, enter your email under **Sync across
   devices** and tap **Email me a sign-in link**.
3. Open the email **on the same device** and tap the link. You'll land back in
   the app, signed in. The menu shows "Synced" with a time.
4. Repeat on your other device. Your progress appears there.

## Good to know

- **Merging, not overwriting.** If you used two devices while offline, the
  app combines both: a lesson finished on either device stays finished, and a
  passed exam stays passed.
- **Offline.** Progress keeps saving on the device and syncs when you
  reconnect or reopen the app.
- **Signing out** keeps your progress on that device.
- **Email limits.** Supabase's built-in email service sends only a few
  sign-in emails per hour and is meant for testing. For one or a few people
  that's fine. For a whole team, set up your own email sender under
  **Authentication → Emails → SMTP Settings**.
- **The Claude preview link** can't reach Supabase (that viewer blocks outside
  connections), so sync works only on the GitHub Pages site or another normal
  web host.
