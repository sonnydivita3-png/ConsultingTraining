/* Optional cross-device sync through Supabase. Turns on only when
 * js/sync-config.js has a project URL and key; otherwise the app keeps
 * progress in this browser exactly as before.
 *
 * Flow: sign in with an emailed magic link. After any change, and whenever
 * the app regains focus or comes back online, it reads the cloud copy,
 * merges it with this device's copy (js/progress-merge.js, which never drops
 * progress), and writes the merged result back. */
(function () {
  "use strict";
  var LIB = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";
  var cfg = window.WCA_SYNC_CONFIG || {};
  var enabled = !!(cfg.url && cfg.key);
  var st = { status: enabled ? "connecting" : "off", email: null, lastSync: null, error: null };
  var app = null, client = null, user = null, timer = null, busy = false, again = false, listeners = [];

  function emit() { listeners.forEach(function (f) { try { f(st); } catch (e) { /* ignore UI errors */ } }); }
  function set(patch) { for (var k in patch) st[k] = patch[k]; emit(); }
  function loadLib(cb) {
    if (window.supabase && window.supabase.createClient) return cb();
    var s = document.createElement("script");
    s.src = LIB; s.onload = cb;
    s.onerror = function () { set({ status: "error", error: "Couldn't load the sync service. Check your internet connection; progress is still saved on this device." }); };
    document.head.appendChild(s);
  }

  function init(appApi) {
    app = appApi;
    if (!enabled) return;
    loadLib(function () {
      try {
        client = window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "implicit", storageKey: "wca.auth" } });
      } catch (e) { set({ status: "error", error: "Sync isn't configured correctly (check js/sync-config.js)." }); return; }
      client.auth.onAuthStateChange(function (event, session) {
        var u = session && session.user ? session.user : null;
        var was = user; user = u;
        if (u) {
          st.email = u.email;
          if (/access_token=|error_description=/.test(location.hash)) { history.replaceState(null, "", location.pathname + location.search + "#/"); app.route(); }
          if (!was || event === "SIGNED_IN") syncNow();
        } else set({ status: "signedout", email: null });
      });
      client.auth.getSession().then(function (r) {
        var s = r && r.data && r.data.session;
        if (s && s.user) { user = s.user; st.email = user.email; syncNow(); }
        else if (st.status !== "linksent") set({ status: "signedout" });
      });
      window.addEventListener("online", function () { syncNow(); });
      document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible") syncNow(); else if (timer) { clearTimeout(timer); timer = null; syncNow(); } });
    });
  }

  // Read the cloud copy, merge with local, write back. Serialized so overlapping calls coalesce.
  function syncNow() {
    if (!client || !user) return;
    if (busy) { again = true; return; }
    busy = true; set({ status: "syncing", error: null });
    client.from("progress").select("data, updated_at").eq("user_id", user.id).maybeSingle().then(function (r) {
      if (r.error) throw r.error;
      var local = app.getState();
      var merged = r.data && r.data.data ? window.WCA_MERGE.merge(local, r.data.data) : local;
      if (JSON.stringify(merged) !== JSON.stringify(local)) app.applyMerged(merged);
      if (r.data && JSON.stringify(merged) === JSON.stringify(r.data.data)) return null; // cloud already current
      return client.from("progress").upsert({ user_id: user.id, data: app.getState(), updated_at: new Date().toISOString() }).then(function (w) { if (w.error) throw w.error; });
    }).then(function () {
      busy = false; set({ status: "synced", lastSync: Date.now() });
      if (again) { again = false; syncNow(); }
    }, function (err) {
      busy = false; again = false;
      var offline = typeof navigator !== "undefined" && navigator.onLine === false;
      set({ status: "error", error: offline ? "You're offline. Progress is saved on this device and will sync when you reconnect." : "Sync failed: " + ((err && err.message) || "unknown error") + ". Progress is still saved on this device." });
    });
  }

  window.WCA_SYNC = {
    enabled: enabled,
    init: init,
    onChange: function (f) { listeners.push(f); },
    state: function () { return st; },
    changed: function () { if (!client || !user) return; if (timer) clearTimeout(timer); timer = setTimeout(function () { timer = null; syncNow(); }, 1500); },
    syncNow: syncNow,
    signIn: function (email) {
      if (!client) return;
      set({ status: "sending", error: null });
      client.auth.signInWithOtp({ email: email, options: { emailRedirectTo: location.origin + location.pathname } }).then(function (r) {
        if (r.error) set({ status: "signedout", error: r.error.message });
        else set({ status: "linksent", email: email });
      });
    },
    signOut: function () { if (client) client.auth.signOut().then(function () { user = null; set({ status: "signedout", email: null }); }); },
    reset: function () { set({ status: "signedout", error: null }); }
  };
})();
