/* Cross-device sync settings (Supabase). Leave both blank to keep progress in
 * this browser only. See SYNC-SETUP.md for how to fill these in.
 *
 * The key here is the project's public "anon" (or "publishable") key. It is
 * designed to be visible in web pages; the database's row-level security
 * policies (supabase/setup.sql) are what keep each person's data private.
 * Never put the "service_role" or secret key here. */
window.WCA_SYNC_CONFIG = {
  url: "",  // e.g. "https://abcdefghijklmnop.supabase.co"
  key: ""   // the anon / publishable key
};
