/* Cross-device sync settings (Supabase). Leave both blank to keep progress in
 * this browser only. See SYNC-SETUP.md for how to fill these in.
 *
 * The key here is the project's public "anon" (or "publishable") key. It is
 * designed to be visible in web pages; the database's row-level security
 * policies (supabase/setup.sql) are what keep each person's data private.
 * Never put the "service_role" or secret key here. */
window.WCA_SYNC_CONFIG = {
  url: "https://rhvtlidogxpgwcihgmfk.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJodnRsaWRvZ3hwZ3djaWhnbWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4NDYyMzksImV4cCI6MjEwODQyMjIzOX0.X0m1gnvuEVU8vOTkaOHNlluNFliknSbKu4ilPp3sYc8"   // the anon / publishable key
};
