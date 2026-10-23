/* Wisconsin Consulting Academy — mastery-gated course runner.
 * Plain JavaScript, no dependencies. Progress is stored in localStorage
 * and can be exported/imported as JSON from the Transcript page. */
(function () {
  "use strict";

  var C = window.COURSE;
  var STORE_KEY = "wca.progress.v1";
  var DAY = 86400000;
  // Leitner intervals (days) by box index
  var INTERVALS = [0, 1, 3, 7, 16, 35, 75, 150];
  var REVIEW_SESSION_MAX = 30;

  // ---------- State ----------
  function blankState() {
    return { version: 1, name: "", started: Date.now(), modules: {}, exams: {}, srs: {}, streak: { last: "", count: 0 } };
  }
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) return Object.assign(blankState(), JSON.parse(raw));
    } catch (e) { /* storage unavailable */ }
    return blankState();
  }
  var S = load();
  function saveLocal() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
  }
  function save() {
    saveLocal();
    if (window.WCA_SYNC && window.WCA_SYNC.enabled) window.WCA_SYNC.changed();
  }
  function mstate(id) {
    if (!S.modules[id]) S.modules[id] = { lessons: {}, cards: false, teach: {}, attempts: [], passed: false, passedOn: null, best: 0 };
    return S.modules[id];
  }
  function estate(id) {
    if (!S.exams[id]) S.exams[id] = { attempts: [], passed: false, passedOn: null, best: 0 };
    return S.exams[id];
  }

  // ---------- Course structure ----------
  var MOD = {};
  C.modules.forEach(function (m, i) { m.n = i + 1; MOD[m.id] = m; });
  var UNITS = [];
  C.tracks.forEach(function (t) {
    var mods = C.modules.filter(function (m) { return m.track === t.id; });
    mods.forEach(function (m) { UNITS.push({ kind: "module", id: m.id, m: m, track: t }); });
    if (mods.length) UNITS.push({ kind: "checkpoint", id: "cp-" + t.id, track: t, mods: mods, count: Math.min(30, mods.length * 7) });
  });
  UNITS.push({ kind: "final", id: "final", mods: C.modules, count: Math.min(80, C.modules.length * 4) });

  function unitIndex(id) { for (var i = 0; i < UNITS.length; i++) if (UNITS[i].id === id) return i; return -1; }
  function unitPassed(u) { return u.kind === "module" ? !!mstate(u.id).passed : !!estate(u.id).passed; }
  function unitUnlocked(u) { var i = unitIndex(u.id); return i === 0 || unitPassed(UNITS[i - 1]); }
  function currentUnit() { for (var i = 0; i < UNITS.length; i++) if (!unitPassed(UNITS[i])) return UNITS[i]; return null; }
  function unitHref(u) { return u.kind === "module" ? "#/m/" + u.id : u.kind === "checkpoint" ? "#/cp/" + u.track.id : "#/final"; }
  function unitTitle(u) { return u.kind === "module" ? u.m.title : u.kind === "checkpoint" ? "Checkpoint: " + u.track.title.split("·")[1].trim() : "Final Comprehensive Exam"; }

  function lessonsDone(m) { var st = mstate(m.id); return m.lessons.filter(function (_, i) { return st.lessons[i]; }).length; }
  function teachDone(m) { var st = mstate(m.id); return (m.teach || []).every(function (_, i) { return st.teach[i]; }); }
  function stepState(m) {
    var st = mstate(m.id);
    var allLessons = lessonsDone(m) === m.lessons.length;
    return { allLessons: allLessons, cards: allLessons && st.cards, teach: allLessons && st.cards && teachDone(m), passed: st.passed };
  }

  // ---------- Helpers ----------
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pct(x) { return Math.round(x * 100) + "%"; }
  function today() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function fmtDate(ts) { return ts ? new Date(ts).toLocaleDateString() : "—"; }
  function el(html) { var d = document.createElement("div"); d.innerHTML = html; return d; }
  var main = document.getElementById("main");
  function render(html) { main.innerHTML = html; main.focus(); window.scrollTo(0, 0); }

  // ---------- Questions ----------
  function prepare(q, id) {
    var v = { q: q, id: id };
    if (q.type === "mc" || q.type === "multi") v.order = shuffle(q.options.map(function (_, i) { return i; }));
    return v;
  }
  function qHTML(v, n, name) {
    var q = v.q, h = '<div class="q" data-qid="' + esc(v.id) + '"><div class="qtext">' + (n ? '<span class="qnum">' + n + ".</span>" : "") + q.q + "</div>";
    if (q.type === "mc" || q.type === "multi") {
      var type = q.type === "mc" ? "radio" : "checkbox";
      if (q.type === "multi") h += '<div class="small muted">Select all that apply.</div>';
      v.order.forEach(function (oi) {
        h += '<label class="opt" data-oi="' + oi + '"><input type="' + type + '" name="' + name + '" value="' + oi + '"><span>' + q.options[oi] + "</span></label>";
      });
    } else if (q.type === "tf") {
      h += '<label class="opt" data-oi="1"><input type="radio" name="' + name + '" value="1"><span>True</span></label>';
      h += '<label class="opt" data-oi="0"><input type="radio" name="' + name + '" value="0"><span>False</span></label>';
    } else if (q.type === "num") {
      h += '<input class="num-input" type="text" inputmode="decimal" name="' + name + '" placeholder="Your answer"> ' + (q.unit ? '<span class="muted">' + esc(q.unit) + "</span>" : "");
    }
    return h + '<div class="fb"></div></div>';
  }
  function readAnswer(box, v, name) {
    var q = v.q;
    if (q.type === "num") {
      var t = box.querySelector('[name="' + name + '"]').value.replace(/,/g, "").trim();
      return t === "" ? null : parseFloat(t);
    }
    var picked = Array.prototype.slice.call(box.querySelectorAll('[name="' + name + '"]:checked')).map(function (i) { return +i.value; });
    if (!picked.length) return null;
    return q.type === "multi" ? picked : picked[0];
  }
  function isCorrect(v, a) {
    var q = v.q;
    if (a === null || a === undefined || (typeof a === "number" && isNaN(a))) return false;
    if (q.type === "mc") return a === q.answer;
    if (q.type === "tf") return (a === 1) === q.answer;
    if (q.type === "multi") { var x = a.slice().sort().join(","), y = q.answer.slice().sort().join(","); return x === y; }
    if (q.type === "num") return Math.abs(a - q.answer) <= (q.tol || 0);
    return false;
  }
  function correctText(q) {
    if (q.type === "mc") return q.options[q.answer];
    if (q.type === "multi") return q.answer.map(function (i) { return q.options[i]; }).join("; ");
    if (q.type === "tf") return q.answer ? "True" : "False";
    if (q.type === "num") return q.answer + (q.unit ? " " + q.unit : "") + (q.tol ? " (± " + q.tol + ")" : "");
  }
  function markQuestion(box, v, a) {
    var q = v.q, ok = isCorrect(v, a);
    box.querySelectorAll(".opt").forEach(function (o) {
      var oi = +o.getAttribute("data-oi");
      var right = q.type === "mc" ? oi === q.answer : q.type === "multi" ? q.answer.indexOf(oi) >= 0 : q.type === "tf" ? (oi === 1) === q.answer : false;
      o.classList.remove("correct", "wrong");
      var chosen = o.querySelector("input").checked;
      if (right) o.classList.add("correct"); else if (chosen) o.classList.add("wrong");
    });
    var fb = box.querySelector(".fb");
    fb.innerHTML = '<div class="feedback ' + (ok ? "good" : "bad") + '"><strong>' + (ok ? "Correct." : "Not quite.") + "</strong> " +
      (ok ? "" : "Answer: " + correctText(q) + ". ") + (q.explain || "") + "</div>";
    return ok;
  }

  // ---------- SRS ----------
  function srsSet(id, box, dueInDays) {
    S.srs[id] = { box: box, due: Date.now() + Math.round(dueInDays * DAY), t: Date.now() };
  }
  function srsSeed(id, box, dueInDays) { if (!S.srs[id]) srsSet(id, box, dueInDays); }
  function srsGrade(id, ok) {
    var cur = S.srs[id] || { box: 0 };
    if (ok) { var b = Math.min(cur.box + 1, INTERVALS.length - 1); srsSet(id, b, INTERVALS[b] * (0.9 + Math.random() * 0.2)); }
    else srsSet(id, 0, 0);
  }
  function lookupItem(id) {
    // ids: "t:<mod>:<i>" term card, "q:<mod>:<i>" exam question
    var p = id.split(":"), m = MOD[p[1]];
    if (!m) return null;
    var i = +p[2];
    if (p[0] === "t" && m.terms[i]) return { kind: "term", m: m, item: m.terms[i] };
    if (p[0] === "q" && m.exam.bank[i]) return { kind: "q", m: m, item: m.exam.bank[i] };
    return null;
  }
  function dueItems() {
    var now = Date.now();
    return Object.keys(S.srs).filter(function (id) { return S.srs[id].due <= now && lookupItem(id); });
  }
  function updateBadge() {
    var n = dueItems().length, b = document.getElementById("dueBadge");
    b.textContent = n; b.className = "badge" + (n ? "" : " zero");
  }


  // ---------- Backup (export / import) ----------
  function lastBackupText() {
    if (!S.lastBackup) return "You haven't backed up yet.";
    var days = Math.floor((Date.now() - S.lastBackup) / DAY);
    return "Last backup: " + fmtDate(S.lastBackup) + (days >= 1 ? " (" + days + " day" + (days === 1 ? "" : "s") + " ago)" : " (today)") + ".";
  }
  function backupDue() { return !S.lastBackup || Date.now() - S.lastBackup > 7 * DAY; }
  function backupControls(k) {
    return '<p class="small muted" id="' + k + '-when">' + lastBackupText() + '</p><div class="btn-row"><button class="btn secondary" id="' + k + '-exp">Export progress</button>' +
      '<label class="btn ghost">Import progress<input type="file" id="' + k + '-imp" accept="application/json" hidden></label></div><div id="' + k + '-msg"></div>';
  }
  function backupCard(k, title) {
    return '<div class="card noprint backup-card"><h3>' + (title || "Save your progress") + '</h3><p class="small">Your progress is saved in this browser only. Export a backup file now and then, especially before switching computers or browsers or clearing your browsing data.</p>' + backupControls(k) + "</div>";
  }
  function exportProgress(msg) {
    var json = JSON.stringify(Object.assign({}, S, { lastBackup: Date.now() }), null, 2);
    try {
      var blob = new Blob([json], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = "onboarding-progress-" + (S.name || "learner").replace(/\W+/g, "-") + "-" + today() + ".json"; a.click();
    } catch (x) { /* downloads may be blocked; the text below still works */ }
    S.lastBackup = Date.now(); save();
    // Some hosts block downloads, so also show the data for copy and paste into a .json file.
    msg.innerHTML = '<div class="feedback good">Backup created. Check your Downloads folder for the .json file.</div><details class="small"><summary>No file downloaded?</summary><p>Copy this text and save it as a <code>.json</code> file.</p><textarea readonly>' + esc(json) + '</textarea><div class="btn-row"><button class="btn ghost bk-copy">Copy</button></div></details>';
    msg.querySelector(".bk-copy").onclick = function () {
      var ta = msg.querySelector("textarea"), b = this;
      try { navigator.clipboard.writeText(ta.value).then(function () { b.textContent = "Copied"; }, function () { ta.select(); }); } catch (x) { ta.select(); }
    };
  }
  function wireBackup(k) {
    var msg = document.getElementById(k + "-msg");
    document.getElementById(k + "-exp").onclick = function () {
      exportProgress(msg);
      var w = document.getElementById(k + "-when"); if (w) w.textContent = lastBackupText();
    };
    document.getElementById(k + "-imp").onchange = function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try { var d = JSON.parse(rd.result); if (!d.modules) throw 0; S = Object.assign(blankState(), d); save(); route(); }
        catch (x) { msg.innerHTML = '<div class="feedback bad">That file is not a valid progress export. Choose a .json file created by Export progress.</div>'; }
      };
      rd.readAsText(f);
    };
  }


  // ---------- Cross-device sync UI ----------
  function syncStatusLine(s) {
    if (s.status === "synced") return "&#9729; Synced" + (s.lastSync ? " " + new Date(s.lastSync).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "");
    if (s.status === "syncing") return "&#9729; Syncing&hellip;";
    if (s.status === "error") return '&#9888; Not synced. <a href="#/progress">Details</a>';
    if (s.status === "connecting") return "&#9729; Connecting&hellip;";
    return '<a href="#/progress">Sign in to sync across devices</a>';
  }
  function syncPanel(k) {
    if (!(window.WCA_SYNC && window.WCA_SYNC.enabled)) return "";
    return '<div class="card noprint" id="' + k + '-sync"></div>';
  }
  function fillSyncPanel(k) {
    var box = document.getElementById(k + "-sync"); if (!box) return;
    var Y = window.WCA_SYNC, s = Y.state(), h = "<h3>Sync across devices</h3>";
    if (s.status === "signedout" || s.status === "sending") {
      h += '<p class="small">Sign in with your email to save progress online and pick up where you left off on any phone or computer. You\'ll get a sign-in link by email. No password needed.</p>' +
        '<form id="' + k + '-sf" class="sync-form"><label class="tfield" for="' + k + '-em"><span>Email</span><input id="' + k + '-em" type="email" autocomplete="email" required placeholder="you@example.com"></label>' +
        '<button class="btn" type="submit"' + (s.status === "sending" ? " disabled" : "") + ">" + (s.status === "sending" ? "Sending&hellip;" : "Email me a sign-in link") + "</button></form>";
    } else if (s.status === "linksent") {
      h += '<div class="feedback good">Sign-in link sent to <strong>' + esc(s.email || "") + '</strong>. Open that email <strong>on this device</strong> and tap the link. It can take a minute to arrive; check spam if you don\'t see it.</div><div class="btn-row"><button class="btn ghost" id="' + k + '-again">Use a different email</button></div>';
    } else if (s.status === "connecting") {
      h += '<p class="small muted">Connecting to sync&hellip;</p>';
    } else {
      h += '<p class="small">Signed in as <strong>' + esc(s.email || "") + "</strong>. Progress saves online automatically after every change and when you return to the app.</p>" +
        '<p class="small muted">' + syncStatusLine(s) + "</p>" +
        '<div class="btn-row"><button class="btn secondary" id="' + k + '-now">Sync now</button><button class="btn ghost" id="' + k + '-out">Sign out</button></div><p class="small muted">Signing out keeps your progress on this device.</p>';
    }
    if (s.error) h += '<div class="feedback bad">' + esc(s.error) + "</div>";
    box.innerHTML = h;
    var f = document.getElementById(k + "-sf");
    if (f) f.addEventListener("submit", function (e) { e.preventDefault(); var em = document.getElementById(k + "-em").value.trim(); if (em) Y.signIn(em); });
    var b;
    if ((b = document.getElementById(k + "-again"))) b.onclick = function () { Y.reset(); };
    if ((b = document.getElementById(k + "-now"))) b.onclick = function () { Y.syncNow(); };
    if ((b = document.getElementById(k + "-out"))) b.onclick = function () { Y.signOut(); };
  }
  function refreshSyncUI() {
    if (!(window.WCA_SYNC && window.WCA_SYNC.enabled)) return;
    ["home", "tr"].forEach(function (k) {
      var box = document.getElementById(k + "-sync");
      // Don't wipe an email the person is typing.
      if (box && !(document.activeElement && box.contains(document.activeElement) && document.activeElement.tagName === "INPUT")) fillSyncPanel(k);
    });
    var side = document.getElementById("sideSync"); if (side) side.innerHTML = syncStatusLine(window.WCA_SYNC.state());
  }
  // Called by sync after merging the cloud copy. Updates objects in place so
  // views that hold references to module or exam records keep working.
  function applyMerged(m) {
    ["name", "started", "lastBackup", "version"].forEach(function (k) { if (m[k] !== undefined) S[k] = m[k]; });
    S.srs = m.srs || {}; S.streak = m.streak || { last: "", count: 0 };
    ["modules", "exams"].forEach(function (group) {
      Object.keys(m[group] || {}).forEach(function (id) {
        var src = m[group][id], dst = S[group][id];
        if (!dst) { S[group][id] = src; return; }
        Object.keys(dst).forEach(function (key) { if (!(key in src)) delete dst[key]; });
        Object.keys(src).forEach(function (key) { dst[key] = src[key]; });
      });
    });
    saveLocal();
    var p = (location.hash || "#/").slice(2).split("/");
    var midTask = (p[0] === "m" && /^(l|cards|teach|exam)$/.test(p[2] || "")) || /^(review|cp|final|tools)$/.test(p[0]);
    if (midTask) { renderSidebar(lastActiveId); updateBadge(); } // never re-render under someone mid-question
    else route();
  }

  // ---------- Sidebar ----------
  var lastActiveId = null;
  function renderSidebar(activeId) {
    lastActiveId = activeId;
    var cur = currentUnit(), h = "", lastTrack = null, n = 0;
    // On phones the top bar only has room for Review, so the other pages live here (hidden on desktop by CSS).
    h += '<nav class="side-mobile-nav" aria-label="Pages"><a href="#/">Home</a><a href="#/tools">Tools</a><a href="#/glossary">Glossary</a><a href="#/resources">Library</a><a href="#/progress">Transcript</a></nav>';
    UNITS.forEach(function (u) {
      if (u.track && u.track !== lastTrack) { lastTrack = u.track; h += '<div class="side-track">' + esc(u.track.title) + "</div>"; }
      if (u.kind === "final") h += '<div class="side-track">Capstone</div>';
      var done = unitPassed(u), open = unitUnlocked(u);
      var cls = "side-item" + (done ? " done" : "") + (!open ? " locked" : "") + (cur && cur.id === u.id ? " current" : "") + (activeId === u.id ? " active" : "");
      var num = u.kind === "module" ? String(++n) : u.kind === "checkpoint" ? "CP" : "FX";
      if (done) num = "&#10003;";
      else if (!open) num = "&#128274;";
      h += '<a class="' + cls + '" href="' + (open ? unitHref(u) : "javascript:void(0)") + '"><span class="num">' + num + '</span><span class="lbl">' + esc(unitTitle(u)) + "</span></a>";
    });
    if (window.WCA_SYNC && window.WCA_SYNC.enabled) h += '<div class="side-sync" id="sideSync">' + syncStatusLine(window.WCA_SYNC.state()) + "</div>";
    document.getElementById("sidebar").innerHTML = h;
  }

  // ---------- Views ----------
  function viewHome() {
    renderSidebar(null);
    var passed = UNITS.filter(unitPassed).length, cur = currentUnit();
    var hours = C.modules.reduce(function (a, m) { return a + (m.hours || 0); }, 0);
    var terms = C.modules.reduce(function (a, m) { return a + m.terms.length; }, 0);
    var qs = C.modules.reduce(function (a, m) { return a + m.exam.bank.length; }, 0);
    var due = dueItems().length;
    var h = "<h1>" + esc(C.title) + "</h1>";
    if (!S.name) {
      h += '<div class="card"><h2>Welcome</h2><p>This course takes a new employee from zero to fluent in the language of environmental consulting, geotechnical engineering, construction materials testing, and civil engineering as practiced in Wisconsin. It is long by design. Plan on roughly <strong>' + hours + ' hours</strong> of study spread over several weeks, plus a few minutes of daily review.</p>' +
        '<label for="nm"><strong>Your name</strong> (for your transcript and certificate)</label><input id="nm" type="text" placeholder="First Last"><div class="btn-row"><button class="btn" id="nmGo">Start the course</button></div></div>';
    }
    h += '<div class="grid">' +
      stat(passed + " / " + UNITS.length, "Units passed") +
      stat(due, "Review items due") +
      stat(S.streak.count, "Day review streak") +
      stat(hours + " h", "Estimated study time") + "</div>";
    h += '<div class="progress" style="margin:14px 0"><span style="width:' + (passed / UNITS.length * 100) + '%"></span></div>';
    if (cur) {
      h += '<div class="card"><div class="muted small">Up next</div><h2 style="margin-top:4px">' + esc(unitTitle(cur)) + "</h2>" +
        (cur.kind === "module" ? "<p>" + cur.m.summary + "</p>" : "<p>A cumulative, interleaved exam. You must pass it to continue.</p>") +
        '<div class="btn-row"><a class="btn" href="' + unitHref(cur) + '">Continue</a>' +
        (due ? '<a class="btn secondary" href="#/review">Do today\'s review first (' + due + ")</a>" : "") + "</div></div>";
    } else {
      h += '<div class="card"><h2>Course complete</h2><p>You have passed every module, checkpoint, and the final exam. Keep your review streak going so it stays in long-term memory.</p><div class="btn-row"><a class="btn" href="#/cert">View certificate</a></div></div>';
    }
    var started = Object.keys(S.modules).some(function (k) { return Object.keys(S.modules[k].lessons || {}).length > 0; });
    if (S.name && started && backupDue()) {
      h += '<div class="callout warn"><strong>Back up your progress</strong>' + lastBackupText() + ' Progress is stored in this browser only, so a backup file protects it if you switch computers or clear your browsing data.' + backupControls("home") + "</div>";
    }
    if (S.name) h += syncPanel("home");
    h += '<div class="card"><h2>How this course makes it stick</h2>' +
      "<p>The structure follows learning techniques with the strongest experimental support (Dunlosky et al., 2013, <em>Psychological Science in the Public Interest</em> 14(1)):</p><ul>" +
      "<li><strong>Retrieval practice.</strong> Every lesson ends with questions you must answer correctly, and every module ends with a randomized exam. Testing yourself produces better long-term retention than rereading (Roediger &amp; Karpicke, 2006, <em>Psychological Science</em> 17(3)).</li>" +
      "<li><strong>Spaced repetition.</strong> Terms and exam questions you have seen return on an expanding schedule (1, 3, 7, 16, 35, 75, 150 days) in <a href=\"#/review\">Review</a>. Spacing beats cramming (Cepeda et al., 2006, <em>Psychological Bulletin</em> 132(3)).</li>" +
      "<li><strong>Interleaving.</strong> Track checkpoints and the final mix questions from different modules so you learn to tell similar concepts apart.</li>" +
      "<li><strong>Elaboration.</strong> Teach-back prompts make you explain concepts in your own words before you can sit the exam.</li></ul>" +
      '<p class="small muted">Course bank: ' + C.modules.length + " modules, " + terms + " glossary terms, " + qs + " exam questions. Pass marks: modules and checkpoints " + pct(C.passMark) + ", final " + pct(C.finalPassMark) + ".</p></div>";
    h += '<div class="card"><h2>Important</h2><p class="small">This course builds vocabulary and conceptual fluency. It does not certify field competence, replace required training (for example OSHA HAZWOPER, nuclear gauge safety, or WisDOT HTCP and ACI certifications), or substitute for the current text of a regulation, standard, or project specification. Regulations and standards are revised; always check the current edition before relying on a number in practice.</p></div>';
    render(h);
    if (document.getElementById("home-exp")) wireBackup("home");
    fillSyncPanel("home");
    var go = document.getElementById("nmGo");
    if (go) go.onclick = function () { S.name = document.getElementById("nm").value.trim() || "Learner"; save(); route(); };
  }
  function stat(v, k) { return '<div class="stat"><div class="v">' + v + '</div><div class="k">' + k + "</div></div>"; }

  function guardUnit(u) {
    if (!unitUnlocked(u)) {
      render('<h1>Locked</h1><div class="callout warn"><strong>Not yet.</strong>Pass the previous unit to unlock <em>' + esc(unitTitle(u)) + '</em>.</div><a class="btn" href="' + unitHref(currentUnit() || UNITS[0]) + '">Go to your current unit</a>');
      return false;
    }
    return true;
  }

  function viewModule(id) {
    var m = MOD[id]; if (!m) return viewHome();
    var u = UNITS[unitIndex(id)];
    renderSidebar(id);
    if (!guardUnit(u)) return;
    var st = mstate(id), ss = stepState(m), done = lessonsDone(m);
    var h = '<div class="crumbs"><a href="#/">Home</a> / ' + esc(u.track.title) + "</div>";
    h += "<h1>Module " + m.n + ": " + esc(m.title) + "</h1>";
    h += '<p><span class="pill">~' + m.hours + ' h</span><span class="pill">' + m.lessons.length + ' lessons</span><span class="pill">' + m.terms.length + ' terms</span>' +
      (st.passed ? '<span class="pill good">Passed ' + pct(st.best) + "</span>" : "") + "</p>";
    h += "<p>" + m.summary + "</p>";
    h += '<div class="card"><h3>Learning objectives</h3><p class="small muted">By the end of this module you should be able to:</p><ul>' + m.objectives.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ul></div>";
    h += '<h2>Steps</h2><div class="steps">';
    m.lessons.forEach(function (l, i) {
      var open = i === 0 || st.lessons[i - 1] || st.lessons[i];
      h += step("#/m/" + id + "/l/" + i, st.lessons[i], !open, String(i + 1), l.title, (l.check || []).length + " check question(s)");
    });
    h += step("#/m/" + id + "/cards", ss.cards, !ss.allLessons, "&#9851;", "Flashcards", "Study every term until you can recall it; this seeds your spaced-review deck.");
    if ((m.teach || []).length) h += step("#/m/" + id + "/teach", ss.teach, !ss.cards, "&#9998;", "Teach-back", "Explain key ideas in your own words, then compare with a model answer.");
    h += step("#/m/" + id + "/exam", st.passed, !(ss.teach || (!(m.teach || []).length && ss.cards)), "&#9733;", "Module exam",
      m.exam.count + " randomized questions from a bank of " + m.exam.bank.length + ". Pass mark " + pct(C.passMark) + "." + (st.attempts.length ? " Attempts: " + st.attempts.length + ", best " + pct(st.best) + "." : ""));
    h += "</div>";
    var tools = window.WCA_TOOLS ? window.WCA_TOOLS.list.filter(function (t) { return t.modules.indexOf(id) >= 0; }) : [];
    if (tools.length) {
      h += '<div class="card"><h3>Interactive tools for this module</h3><p class="small muted">Practice the calculations with verified tools. Optional, but recommended before the exam.</p><ul>' +
        tools.map(function (t) { return '<li><a href="#/tools/' + t.id + '">' + esc(t.title) + "</a> — " + esc(t.blurb) + "</li>"; }).join("") + "</ul></div>";
    }
    if (m.resources && m.resources.length) {
      h += '<div class="card"><h3>Primary sources for this module</h3><ul>' + m.resources.map(resLi).join("") + "</ul></div>";
    }
    h += backupCard("mod");
    var next = !st.passed ? (done < m.lessons.length ? "#/m/" + id + "/l/" + done : !ss.cards ? "#/m/" + id + "/cards" : !ss.teach && (m.teach || []).length ? "#/m/" + id + "/teach" : "#/m/" + id + "/exam") : null;
    if (next) h += '<div class="btn-row"><a class="btn" href="' + next + '">' + (done ? "Resume" : "Begin") + "</a></div>";
    else {
      var nu = UNITS[unitIndex(id) + 1];
      if (nu) h += '<div class="btn-row"><a class="btn" href="' + unitHref(nu) + '">Next: ' + esc(unitTitle(nu)) + "</a></div>";
    }
    render(h);
    wireBackup("mod");
  }
  function step(href, done, locked, ico, t, d) {
    return '<a class="step' + (done ? " done" : "") + (locked ? " locked" : "") + '" href="' + href + '"><span class="ico">' + (done ? "&#10003;" : ico) + '</span><span class="body"><span class="t">' + esc(t) + '</span><br><span class="d">' + d + "</span></span></a>";
  }
  function resLi(r) { return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + "</a>" + (r.note ? ' <span class="muted small">— ' + esc(r.note) + "</span>" : "") + "</li>"; }

  function viewLesson(id, i) {
    var m = MOD[id]; if (!m || !m.lessons[i]) return viewModule(id);
    var u = UNITS[unitIndex(id)]; renderSidebar(id);
    if (!guardUnit(u)) return;
    var st = mstate(id);
    if (i > 0 && !st.lessons[i - 1] && !st.lessons[i]) { location.hash = "#/m/" + id + "/l/" + lessonsDone(m); return; }
    var l = m.lessons[i], checks = (l.check || []).map(function (q, k) { return prepare(q, id + ":l" + i + ":" + k); });
    var h = '<div class="crumbs"><a href="#/">Home</a> / <a href="#/m/' + id + '">Module ' + m.n + ": " + esc(m.title) + "</a></div>";
    h += '<div class="muted small">Lesson ' + (i + 1) + " of " + m.lessons.length + "</div><h1>" + esc(l.title) + "</h1>";
    h += '<div class="lesson-body">' + l.html + "</div>";
    if (checks.length) {
      h += '<hr><h2>Check your understanding</h2><p class="small muted">Answer each question correctly to complete the lesson. Read the explanation even when you are right.</p>';
      checks.forEach(function (v, k) { h += qHTML(v, k + 1, "c" + k) + '<div class="btn-row" style="margin-top:-4px"><button class="btn ghost chk" data-k="' + k + '">Check</button></div>'; });
    }
    var isLast = i === m.lessons.length - 1;
    h += '<div class="btn-row">' + (i > 0 ? '<a class="btn ghost" href="#/m/' + id + "/l/" + (i - 1) + '">&larr; Previous</a>' : "") +
      '<button class="btn" id="nextBtn">' + (isLast ? "Finish lessons &rarr; Flashcards" : "Next lesson &rarr;") + "</button></div>";
    render(h);
    var okSet = {};
    var nextBtn = document.getElementById("nextBtn");
    function refresh() {
      var all = checks.every(function (_, k) { return okSet[k]; });
      nextBtn.disabled = !(all || st.lessons[i]);
      if (all && !st.lessons[i]) { st.lessons[i] = Date.now(); save(); }
    }
    main.querySelectorAll(".chk").forEach(function (b) {
      b.onclick = function () {
        var k = +b.getAttribute("data-k"), box = main.querySelectorAll(".q")[k], v = checks[k];
        var a = readAnswer(box, v, "c" + k);
        if (a === null) { box.querySelector(".fb").innerHTML = '<div class="feedback bad">Choose or enter an answer first.</div>'; return; }
        if (markQuestion(box, v, a)) okSet[k] = true;
        refresh();
      };
    });
    if (!checks.length && !st.lessons[i]) { st.lessons[i] = Date.now(); save(); }
    refresh();
    nextBtn.onclick = function () { location.hash = isLast ? "#/m/" + id + "/cards" : "#/m/" + id + "/l/" + (i + 1); };
  }

  function viewCards(id) {
    var m = MOD[id]; if (!m) return viewHome();
    var u = UNITS[unitIndex(id)]; renderSidebar(id);
    if (!guardUnit(u)) return;
    var ss = stepState(m), st = mstate(id);
    if (!ss.allLessons) { location.hash = "#/m/" + id; return; }
    // Resume an unfinished deck if one was saved (e.g., the app was closed mid-deck).
    var saved = st.cardSession, total = m.terms.length;
    var valid = saved && Array.isArray(saved.queue) && saved.queue.length && saved.queue.every(function (x) { return x >= 0 && x < total; });
    var queue = valid ? saved.queue.slice() : shuffle(m.terms.map(function (_, i) { return i; }));
    var firstRating = valid && saved.firstRating ? Object.assign({}, saved.firstRating) : {}, flipped = false, reverse = false;
    function persist() { st.cardSession = { queue: queue.slice(), firstRating: firstRating }; save(); }
    function draw() {
      if (!queue.length) {
        m.terms.forEach(function (_, i) {
          var r = firstRating[i];
          srsSeed("t:" + id + ":" + i, r === "easy" ? 2 : r === "good" ? 1 : 0, r === "easy" ? 3 : r === "good" ? 1 : 0.5);
        });
        st.cards = Date.now(); delete st.cardSession; save(); updateBadge();
        render('<div class="crumbs"><a href="#/m/' + id + '">Module ' + m.n + ": " + esc(m.title) + '</a></div><h1>Flashcards complete</h1><p>All ' + total + ' terms are now in your spaced-review deck. They will come back in <a href="#/review">Review</a> on an expanding schedule.</p><div class="btn-row"><a class="btn" href="#/m/' + id + ((m.teach || []).length ? "/teach" : "/exam") + '">Continue &rarr;</a><a class="btn ghost" href="#/glossary">Open glossary</a></div>');
        renderSidebar(id);
        return;
      }
      var i = queue[0], t = m.terms[i];
      var front = reverse ? '<div class="face">' + t.def + "</div>" : '<div class="face term">' + esc(t.term) + "</div>";
      var back = reverse ? '<div class="face term">' + esc(t.term) + "</div>" : '<div class="face">' + t.def + "</div>";
      var h = '<div class="crumbs"><a href="#/m/' + id + '">Module ' + m.n + ": " + esc(m.title) + "</a></div><h1>Flashcards</h1>" +
        '<p class="small muted">Say the answer out loud or in your head <em>before</em> you flip. Cards you miss come back until you get them. Remaining: ' + queue.length + " of " + total + ". Your place is saved if you leave.</p>" +
        '<div class="progress"><span style="width:' + ((total - queue.length) / total * 100) + '%"></span></div><br>' +
        '<div class="flash" id="flash"><div><div class="side-label">' + (flipped ? (reverse ? "Term" : "Definition") : (reverse ? "Definition → name the term" : "Term → recall the definition")) + "</div>" + (flipped ? back : front) + "</div></div>" +
        '<div class="btn-row">' + (flipped
          ? '<button class="btn danger" data-r="again">Missed it</button><button class="btn secondary" data-r="good">Got it</button><button class="btn" data-r="easy">Easy</button>'
          : '<button class="btn" id="flip">Flip (space)</button>') +
        '<label class="small muted" style="margin-left:auto"><input type="checkbox" id="rev"' + (reverse ? " checked" : "") + "> Show definition first</label></div>";
      render(h);
      document.getElementById("flash").onclick = function () { flipped = !flipped; draw(); };
      var f = document.getElementById("flip"); if (f) f.onclick = function () { flipped = true; draw(); };
      document.getElementById("rev").onchange = function (e) { reverse = e.target.checked; flipped = false; draw(); };
      main.querySelectorAll("[data-r]").forEach(function (b) {
        b.onclick = function () {
          var r = b.getAttribute("data-r");
          if (!(i in firstRating)) firstRating[i] = r;
          queue.shift();
          if (r === "again") queue.splice(Math.min(queue.length, 3), 0, i);
          if (queue.length) persist();
          flipped = false; draw();
        };
      });
    }
    keyHandler = function (e) {
      if (e.code === "Space" && document.getElementById("flash")) { e.preventDefault(); flipped = !flipped; draw(); }
    };
    draw();
  }

  function viewTeach(id) {
    var m = MOD[id]; if (!m) return viewHome();
    var u = UNITS[unitIndex(id)]; renderSidebar(id);
    if (!guardUnit(u)) return;
    var st = mstate(id), ss = stepState(m);
    if (!ss.cards) { location.hash = "#/m/" + id; return; }
    var MIN = 150;
    var h = '<div class="crumbs"><a href="#/m/' + id + '">Module ' + m.n + ": " + esc(m.title) + "</a></div><h1>Teach-back</h1>" +
      '<p>Explain each idea as if you were briefing a new coworker. Write at least ' + MIN + ' characters <em>without looking back at the lessons</em>, then reveal the model answer and compare. Generating an explanation, even an imperfect one, is what makes it stick.</p>';
    m.teach.forEach(function (t, i) {
      var saved = st.teach[i] || "", draft = (st.teachDraft || {})[i] || "";
      var shown = typeof saved === "string" && saved ? saved : draft;
      h += '<div class="card"><h3>Prompt ' + (i + 1) + "</h3><p>" + t.prompt + '</p><textarea data-i="' + i + '" placeholder="Your explanation (drafts save automatically)...">' + esc(shown) + '</textarea>' +
        '<div class="small muted cc" data-i="' + i + '"></div><div class="btn-row"><button class="btn secondary rv" data-i="' + i + '">Reveal model answer</button></div><div class="model" data-i="' + i + '"' + (saved ? "" : ' hidden') + '><div class="callout"><strong>Model answer</strong>' + t.model + '</div><p class="small muted">Did you miss anything important? Add it to your answer above in your own words before moving on.</p></div></div>';
    });
    h += '<div class="btn-row"><button class="btn" id="tdone">Save and continue to exam</button></div><div id="tmsg"></div>';
    render(h);
    function counts() {
      main.querySelectorAll("textarea").forEach(function (ta) {
        var i = ta.getAttribute("data-i"), n = ta.value.trim().length;
        main.querySelector('.cc[data-i="' + i + '"]').textContent = n + " / " + MIN + " characters";
        main.querySelector('.rv[data-i="' + i + '"]').disabled = n < MIN;
      });
    }
    var draftTimer = null;
    main.querySelectorAll("textarea").forEach(function (ta) {
      ta.oninput = function () {
        counts();
        st.teachDraft = st.teachDraft || {};
        st.teachDraft[ta.getAttribute("data-i")] = ta.value;
        clearTimeout(draftTimer); draftTimer = setTimeout(save, 600);
      };
    });
    main.querySelectorAll(".rv").forEach(function (b) {
      b.onclick = function () {
        var i = b.getAttribute("data-i"), ta = main.querySelector('textarea[data-i="' + i + '"]');
        main.querySelector('.model[data-i="' + i + '"]').hidden = false;
        st.teach[i] = ta.value.trim(); save();
      };
    });
    counts();
    document.getElementById("tdone").onclick = function () {
      var missing = [];
      main.querySelectorAll("textarea").forEach(function (ta) {
        var i = ta.getAttribute("data-i");
        if (ta.value.trim().length >= MIN && main.querySelector('.model[data-i="' + i + '"]').hidden === false) st.teach[i] = ta.value.trim();
        else missing.push(+i + 1);
      });
      save();
      if (missing.length) { document.getElementById("tmsg").innerHTML = '<div class="feedback bad">Finish prompt(s) ' + missing.join(", ") + ": write at least " + MIN + " characters and reveal the model answer.</div>"; return; }
      location.hash = "#/m/" + id + "/exam";
    };
  }

  // Exam engine shared by module exams, checkpoints, and the final
  function runExam(opts) {
    // opts: { title, crumbs, pool: [{q, id}], count, pass, onFinish(score, results) }
    var picked = shuffle(opts.pool).slice(0, Math.min(opts.count, opts.pool.length));
    var views = picked.map(function (p) { return prepare(p.q, p.id); });
    var h = opts.crumbs + "<h1>" + esc(opts.title) + "</h1>" +
      '<div class="callout"><strong>Rules</strong>' + views.length + " questions drawn at random. Pass mark " + pct(opts.pass) + ". No notes, no lessons — this is retrieval practice. Explanations for every question are shown after you submit. A retake draws a new set.</div>";
    h += '<div id="examForm">';
    views.forEach(function (v, k) { h += qHTML(v, k + 1, "x" + k); });
    h += '</div><div class="btn-row"><button class="btn" id="submitExam">Submit exam</button><span class="muted small" id="ansCount"></span></div><div id="submitMsg"></div>';
    render(h);
    function count() {
      var n = 0; views.forEach(function (v, k) { if (readAnswer(main.querySelectorAll(".q")[k], v, "x" + k) !== null) n++; });
      document.getElementById("ansCount").textContent = n + " of " + views.length + " answered";
      return n;
    }
    var form = document.getElementById("examForm");
    form.addEventListener("input", count); form.addEventListener("change", count); count();
    var warned = false;
    document.getElementById("submitExam").onclick = function () {
      var left = views.length - count();
      if (left > 0 && !warned) {
        warned = true;
        document.getElementById("submitMsg").innerHTML = '<div class="feedback bad">' + left + " question(s) unanswered. They will be marked wrong. Select Submit exam again to submit anyway.</div>";
        return;
      }
      var sm = document.getElementById("submitMsg"); if (sm) sm.remove();
      var results = views.map(function (v, k) {
        var box = main.querySelectorAll(".q")[k], a = readAnswer(box, v, "x" + k);
        box.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
        return { id: v.id, ok: markQuestion(box, v, a) };
      });
      var score = results.filter(function (r) { return r.ok; }).length / results.length;
      var passed = score >= opts.pass;
      opts.onFinish(score, results);
      var banner = '<div class="callout ' + (passed ? "" : "bad") + '"><strong>' + (passed ? "Passed — " : "Not yet — ") + pct(score) + " (" + results.filter(function (r) { return r.ok; }).length + "/" + results.length + ")</strong>" +
        (passed ? "Well done. Missed questions were added to your review deck. Read the explanations below before moving on." :
          "You need " + pct(opts.pass) + ". Every question you missed is now in your review deck. Read each explanation below, revisit the related lessons, and retake when ready — you will get a fresh set of questions.") + "</div>";
      var top = el(banner + '<div class="btn-row">' + (passed ? '<a class="btn" href="' + opts.nextHref + '">Continue &rarr;</a><button class="btn secondary" id="ex-exp">Back up progress now</button>' : '<button class="btn" id="retake">Retake with new questions</button>') + '<a class="btn ghost" href="' + opts.backHref + '">Back</a></div><div id="ex-msg"></div>');
      main.insertBefore(top, main.children[1]);
      document.getElementById("submitExam").remove();
      var rt = document.getElementById("retake"); if (rt) rt.onclick = function () { route(); };
      var bx = document.getElementById("ex-exp"); if (bx) bx.onclick = function () { exportProgress(document.getElementById("ex-msg")); };
      renderSidebar(opts.activeId); updateBadge(); window.scrollTo(0, 0);
    };
  }

  function recordAttempt(st, score, pass) {
    st.attempts.push({ at: Date.now(), score: score });
    st.best = Math.max(st.best || 0, score);
    if (score >= pass && !st.passed) { st.passed = true; st.passedOn = Date.now(); }
  }
  function seedFromResults(results) {
    results.forEach(function (r) {
      var parts = r.id.split(":");
      if (parts[0] !== "q") return;
      if (r.ok) srsSeed(r.id, 2, 3 + Math.random() * 4); else srsSet(r.id, 0, 0);
    });
  }

  function viewExam(id) {
    var m = MOD[id]; if (!m) return viewHome();
    var u = UNITS[unitIndex(id)]; renderSidebar(id);
    if (!guardUnit(u)) return;
    var ss = stepState(m), st = mstate(id);
    if (!(ss.teach || (!(m.teach || []).length && ss.cards)) && !st.passed) { location.hash = "#/m/" + id; return; }
    var nu = UNITS[unitIndex(id) + 1];
    runExam({
      title: "Module " + m.n + " Exam: " + m.title,
      crumbs: '<div class="crumbs"><a href="#/m/' + id + '">Module ' + m.n + ": " + esc(m.title) + "</a></div>",
      pool: m.exam.bank.map(function (q, i) { return { q: q, id: "q:" + id + ":" + i }; }),
      count: m.exam.count, pass: C.passMark, activeId: id,
      nextHref: nu ? unitHref(nu) : "#/", backHref: "#/m/" + id,
      onFinish: function (score, results) {
        recordAttempt(st, score, C.passMark);
        seedFromResults(results);
        if (score >= C.passMark) {
          // Once passed, every bank question joins the long-term review deck.
          m.exam.bank.forEach(function (_, i) { srsSeed("q:" + id + ":" + i, 2, 4 + Math.random() * 10); });
        }
        save();
      }
    });
  }

  function viewPooledExam(u) {
    renderSidebar(u.id);
    if (!guardUnit(u)) return;
    var pool = [], perMod = Math.ceil(u.count / u.mods.length) + 2;
    u.mods.forEach(function (m) {
      shuffle(m.exam.bank.map(function (q, i) { return { q: q, id: "q:" + m.id + ":" + i }; })).slice(0, perMod).forEach(function (p) { pool.push(p); });
    });
    var pass = u.kind === "final" ? C.finalPassMark : C.checkpointPassMark, st = estate(u.id), nu = UNITS[unitIndex(u.id) + 1];
    if (st.passed) {
      render('<h1>' + esc(unitTitle(u)) + '</h1><div class="callout"><strong>Passed ' + fmtDate(st.passedOn) + " with best score " + pct(st.best) + '.</strong>You can retake it for practice; your passing status is kept.</div><div class="btn-row"><button class="btn secondary" id="practice">Practice retake</button>' + (nu ? '<a class="btn" href="' + unitHref(nu) + '">Next: ' + esc(unitTitle(nu)) + "</a>" : '<a class="btn" href="#/cert">Certificate</a>') + "</div>");
      document.getElementById("practice").onclick = function () { start(); };
      return;
    }
    start();
    function start() {
      runExam({
        title: unitTitle(u),
        crumbs: '<div class="crumbs"><a href="#/">Home</a>' + (u.track ? " / " + esc(u.track.title) : "") + "</div>" +
          (u.kind === "final" ? "<p>The capstone draws from all " + u.mods.length + " modules. It is long; set aside an uninterrupted hour.</p>" : "<p>This checkpoint interleaves questions from every module in the track.</p>"),
        pool: pool, count: u.count, pass: pass, activeId: u.id,
        nextHref: nu ? unitHref(nu) : "#/cert", backHref: "#/",
        onFinish: function (score, results) { recordAttempt(st, score, pass); seedFromResults(results); save(); }
      });
    }
  }

  function viewReview() {
    renderSidebar(null);
    var ids = shuffle(dueItems()).slice(0, REVIEW_SESSION_MAX), total = ids.length, right = 0, attempts = {};
    if (!total) {
      var upcoming = Object.keys(S.srs).map(function (k) { return S.srs[k].due; }).sort(function (a, b) { return a - b; })[0];
      render('<h1>Review</h1><div class="card"><p>Nothing is due right now.' + (upcoming ? " Next item comes due " + new Date(upcoming).toLocaleString() + "." : " Complete a module's flashcards to start your deck.") + '</p><p class="small muted">Current streak: ' + S.streak.count + " day(s). Deck size: " + Object.keys(S.srs).length + ' items.</p></div><a class="btn" href="#/">Home</a>');
      return;
    }
    var queue = ids.slice();
    function finish() {
      var t = today();
      if (S.streak.last !== t) {
        var y = new Date(Date.now() - DAY); var ys = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
        S.streak.count = S.streak.last === ys ? S.streak.count + 1 : 1; S.streak.last = t;
      }
      save(); updateBadge();
      render('<h1>Review complete</h1><p>First-try accuracy: <strong>' + pct(right / total) + "</strong> on " + total + " items. Streak: " + S.streak.count + ' day(s).</p><div class="btn-row"><a class="btn" href="#/">Home</a>' + (dueItems().length ? '<a class="btn secondary" href="#/review">Another set (' + dueItems().length + " due)</a>" : "") + "</div>");
    }
    function next() {
      if (!queue.length) return finish();
      var id = queue[0], it = lookupItem(id);
      var head = '<h1>Review</h1><p class="small muted">' + queue.length + " left in this set · from Module " + it.m.n + ": " + esc(it.m.title) + '</p><div class="progress"><span style="width:' + ((total - queue.length) / total * 100) + '%"></span></div><br>';
      function graded(ok) {
        if (!(id in attempts)) { attempts[id] = ok; if (ok) right++; srsGrade(id, ok); }
        else if (!ok) srsGrade(id, false);
        queue.shift();
        if (!ok) queue.push(id);
        save(); updateBadge();
      }
      if (it.kind === "term") {
        var flipped = false;
        (function drawCard() {
          render(head + '<div class="flash" id="flash"><div><div class="side-label">' + (flipped ? "Definition" : "Recall the definition") + '</div><div class="face ' + (flipped ? "" : "term") + '">' + (flipped ? it.item.def : esc(it.item.term)) + "</div></div></div>" +
            '<div class="btn-row">' + (flipped ? '<button class="btn danger" id="miss">Missed it</button><button class="btn" id="hit">Got it</button>' : '<button class="btn" id="flip">Flip</button>') + "</div>");
          document.getElementById("flash").onclick = function () { flipped = !flipped; drawCard(); };
          if (!flipped) document.getElementById("flip").onclick = function () { flipped = true; drawCard(); };
          else {
            document.getElementById("miss").onclick = function () { graded(false); next(); };
            document.getElementById("hit").onclick = function () { graded(true); next(); };
          }
        })();
      } else {
        var v = prepare(it.item, id);
        render(head + qHTML(v, 0, "rv") + '<div class="btn-row"><button class="btn" id="chk">Check</button></div>');
        document.getElementById("chk").onclick = function () {
          var box = main.querySelector(".q"), a = readAnswer(box, v, "rv");
          if (a === null) return;
          var ok = markQuestion(box, v, a);
          box.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
          graded(ok);
          var b = document.getElementById("chk"); b.textContent = "Next →"; b.onclick = next;
        };
      }
    }
    next();
  }

  function viewGlossary() {
    renderSidebar(null);
    var h = '<h1>Glossary</h1><p class="muted">Every term in the course, grouped by module. Use it as a reference — but recall beats rereading, so lean on <a href="#/review">Review</a> for memorization.</p><input type="search" id="gq" placeholder="Search terms and definitions..."><div id="glist"></div>';
    render(h);
    var list = document.getElementById("glist");
    function draw(f) {
      f = (f || "").toLowerCase();
      var out = "";
      C.modules.forEach(function (m) {
        var items = m.terms.filter(function (t) { return !f || t.term.toLowerCase().indexOf(f) >= 0 || t.def.toLowerCase().indexOf(f) >= 0; });
        if (!items.length) return;
        out += "<h2>Module " + m.n + ": " + esc(m.title) + '</h2><dl class="gloss">' + items.map(function (t) { return "<dt>" + esc(t.term) + "</dt><dd>" + t.def + "</dd>"; }).join("") + "</dl>";
      });
      list.innerHTML = out || '<p class="muted">No matches.</p>';
    }
    document.getElementById("gq").oninput = function (e) { draw(e.target.value); };
    draw("");
  }

  function viewTools(id) {
    renderSidebar(null);
    var T = window.WCA_TOOLS;
    if (!T) { render("<h1>Tools</h1><p>The tools failed to load.</p>"); return; }
    var t = id && T.get(id);
    if (!t) {
      render('<h1>Interactive Tools</h1><p class="muted">Calculators and to-scale drawings for the course\'s core calculations. Each tool checks itself against hand-worked reference cases and measures its own drawing to confirm it matches the numbers. Open "How this tool is verified" under any tool to see the results.</p><div class="steps">' +
        T.list.map(function (x) {
          var mods = x.modules.map(function (mid) { return MOD[mid] ? "Module " + MOD[mid].n : ""; }).join(", ");
          return '<a class="step" href="#/tools/' + x.id + '"><span class="ico">&#9881;</span><span class="body"><span class="t">' + esc(x.title) + '</span><br><span class="d">' + esc(x.blurb) + " (" + mods + ")</span></span></a>";
        }).join("") + "</div>");
      return;
    }
    render('<div class="crumbs"><a href="#/tools">Tools</a></div><h1>' + esc(t.title) + '</h1><div id="toolRoot"></div>');
    t.run(document.getElementById("toolRoot"));
  }

  function viewResources() {
    renderSidebar(null);
    var h = '<h1>Library</h1><p class="muted">Primary sources cited in the course: statutes, administrative codes, federal regulations, agency guidance, and standards bodies. When a number matters on a project, read it here, in the current edition, not from memory.</p>';
    C.modules.forEach(function (m) {
      if (!m.resources || !m.resources.length) return;
      h += "<h2>Module " + m.n + ": " + esc(m.title) + "</h2><ul>" + m.resources.map(resLi).join("") + "</ul>";
    });
    render(h);
  }

  function viewProgress() {
    renderSidebar(null);
    var h = "<h1>Transcript</h1><p><strong>" + esc(S.name || "Learner") + "</strong> · started " + fmtDate(S.started) + "</p>";
    h += syncPanel("tr");
    h += '<div class="tbl-wrap"><table><thead><tr><th>Unit</th><th>Status</th><th>Best</th><th>Attempts</th><th>Passed on</th></tr></thead><tbody>';
    UNITS.forEach(function (u) {
      var st = u.kind === "module" ? mstate(u.id) : estate(u.id);
      var status = st.passed ? '<span class="pill good">Passed</span>' : unitUnlocked(u) ? '<span class="pill warn">In progress</span>' : '<span class="pill">Locked</span>';
      h += "<tr><td>" + esc(unitTitle(u)) + "</td><td>" + status + "</td><td>" + (st.attempts.length ? pct(st.best) : "—") + "</td><td>" + st.attempts.length + "</td><td>" + fmtDate(st.passedOn) + "</td></tr>";
    });
    h += "</tbody></table></div>";
    h += '<div class="card noprint"><h3>Backup and transfer</h3><p class="small">Progress lives in this browser only. Export a file to back it up, move to another device, or show your supervisor.</p>' + backupControls("tr") +
      '<div class="btn-row"><button class="btn danger" id="rst">Reset all progress</button></div><div id="pmsg"></div></div>';
    render(h);
    wireBackup("tr");
    fillSyncPanel("tr");
    var pmsg = document.getElementById("pmsg");
    var armed = false;
    document.getElementById("rst").onclick = function () {
      if (!armed) {
        armed = true; this.textContent = "Select again to erase everything";
        pmsg.innerHTML = '<div class="feedback bad">This erases all progress in this browser. It cannot be undone unless you exported a backup.</div>';
        return;
      }
      S = blankState(); save(); location.hash = "#/"; route();
    };
  }

  function viewCert() {
    renderSidebar(null);
    var fin = estate("final");
    if (!fin.passed) { render('<h1>Certificate</h1><p>The certificate unlocks when you pass the Final Comprehensive Exam.</p><a class="btn" href="#/">Home</a>'); return; }
    var hours = C.modules.reduce(function (a, m) { return a + (m.hours || 0); }, 0);
    render('<div class="cert"><div class="muted">Certificate of Completion</div><h1>' + esc(S.name || "Learner") + '</h1><p>has completed all ' + C.modules.length + ' modules, ' + C.tracks.length + ' track checkpoints, and the final comprehensive exam of the</p><h2>' + esc(C.title) + '</h2><p>Environmental Consulting · Geotechnical Engineering · Construction Materials Testing · Civil Engineering</p><p>Approximately ' + hours + ' hours of instruction · Final exam score ' + pct(fin.best) + ' · ' + fmtDate(fin.passedOn) + '</p><p class="small muted">Demonstrates conceptual fluency and vocabulary. Not a substitute for required safety training, technician certification, or professional licensure.</p></div><p class="small muted noprint">To keep a copy, use your browser&#39;s print or save-as-PDF command.</p>');
  }

  // ---------- Router ----------
  var keyHandler = null;
  document.addEventListener("keydown", function (e) { if (keyHandler) keyHandler(e); });
  function route() {
    keyHandler = null;
    document.getElementById("sidebar").classList.remove("open");
    var p = (location.hash || "#/").slice(2).split("/");
    updateBadge();
    if (p[0] === "m" && p[1]) {
      if (p[2] === "l") return viewLesson(p[1], +p[3]);
      if (p[2] === "cards") return viewCards(p[1]);
      if (p[2] === "teach") return viewTeach(p[1]);
      if (p[2] === "exam") return viewExam(p[1]);
      return viewModule(p[1]);
    }
    if (p[0] === "cp") { var u = UNITS[unitIndex("cp-" + p[1])]; return u ? viewPooledExam(u) : viewHome(); }
    if (p[0] === "final") return viewPooledExam(UNITS[UNITS.length - 1]);
    if (p[0] === "review") return viewReview();
    if (p[0] === "glossary") return viewGlossary();
    if (p[0] === "resources") return viewResources();
    if (p[0] === "tools") return viewTools(p[1]);
    if (p[0] === "progress") return viewProgress();
    if (p[0] === "cert") return viewCert();
    return viewHome();
  }
  document.getElementById("menuBtn").onclick = function () {
    var sb = document.getElementById("sidebar"), open = sb.classList.toggle("open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  };
  // Tapping the page outside the open menu closes it.
  document.getElementById("main").addEventListener("click", function () {
    var sb = document.getElementById("sidebar");
    if (sb.classList.contains("open")) { sb.classList.remove("open"); document.getElementById("menuBtn").setAttribute("aria-expanded", "false"); }
  });
  window.addEventListener("hashchange", route);
  route();
  if (window.WCA_SYNC) {
    window.WCA_SYNC.onChange(refreshSyncUI);
    window.WCA_SYNC.init({ getState: function () { return S; }, applyMerged: applyMerged, route: route });
  }
})();
