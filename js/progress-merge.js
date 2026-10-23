/* Merges two copies of a learner's progress (e.g., phone and laptop) without
 * losing anything either device recorded. Pure function; tested in
 * tests/merge.test.js. Rules favor keeping progress: a lesson done on either
 * device is done, an exam passed on either is passed, attempts are unioned. */
(function (root) {
  "use strict";
  function keys(a, b) { var k = {}; Object.keys(a || {}).forEach(function (x) { k[x] = 1; }); Object.keys(b || {}).forEach(function (x) { k[x] = 1; }); return Object.keys(k); }
  function minDefined(x, y) { if (x == null) return y == null ? null : y; if (y == null) return x; return Math.min(x, y); }
  function maxDefined(x, y) { if (x == null) return y == null ? null : y; if (y == null) return x; return Math.max(x, y); }
  function earliestTruthy(x, y) { if (!x) return y || x; if (!y) return x; return (typeof x === "number" && typeof y === "number") ? Math.min(x, y) : x; }
  function longer(x, y) { x = typeof x === "string" ? x : ""; y = typeof y === "string" ? y : ""; return y.length > x.length ? y : x; }
  function attemptsUnion(a, b) {
    var seen = {}, out = [];
    (a || []).concat(b || []).forEach(function (t) { var k = t.at + ":" + t.score; if (!seen[k]) { seen[k] = 1; out.push({ at: t.at, score: t.score }); } });
    return out.sort(function (p, q) { return p.at - q.at || p.score - q.score; }); // total order so merge direction never matters
  }
  function mergeExamLike(a, b) {
    a = a || {}; b = b || {};
    var attempts = attemptsUnion(a.attempts, b.attempts);
    var best = attempts.reduce(function (m, t) { return Math.max(m, t.score); }, Math.max(a.best || 0, b.best || 0));
    return { attempts: attempts, best: best, passed: !!(a.passed || b.passed), passedOn: minDefined(a.passed ? a.passedOn : null, b.passed ? b.passedOn : null) };
  }
  function mergeModule(a, b) {
    a = a || {}; b = b || {};
    var m = mergeExamLike(a, b);
    m.lessons = {}; keys(a.lessons, b.lessons).forEach(function (i) { var v = earliestTruthy((a.lessons || {})[i], (b.lessons || {})[i]); if (v) m.lessons[i] = v; });
    m.cards = earliestTruthy(a.cards, b.cards) || false;
    m.teach = {}; keys(a.teach, b.teach).forEach(function (i) { var v = longer((a.teach || {})[i], (b.teach || {})[i]); if (v) m.teach[i] = v; });
    m.teachDraft = {}; keys(a.teachDraft, b.teachDraft).forEach(function (i) { var v = longer((a.teachDraft || {})[i], (b.teachDraft || {})[i]); if (v) m.teachDraft[i] = v; });
    if (!m.cards) { var cs = a.cardSession || b.cardSession; if (cs) m.cardSession = cs; }
    return m;
  }
  function ymd(s) { if (!s) return 0; var p = String(s).split("-").map(Number); return p[0] * 10000 + p[1] * 100 + p[2]; }
  function mergeSrsItem(x, y) {
    if (!x) return y; if (!y) return x;
    if (x.t != null && y.t != null) return y.t > x.t ? y : x; // most recently reviewed wins
    if (x.t != null) return x; if (y.t != null) return y;
    return (y.box > x.box || (y.box === x.box && y.due > x.due)) ? y : x;
  }
  function merge(a, b) {
    a = a || {}; b = b || {};
    var out = {
      version: Math.max(a.version || 1, b.version || 1),
      name: a.name || b.name || "",
      started: minDefined(a.started, b.started) || Date.now(),
      lastBackup: maxDefined(a.lastBackup, b.lastBackup),
      modules: {}, exams: {}, srs: {}, streak: { last: "", count: 0 }
    };
    if (out.lastBackup == null) delete out.lastBackup;
    keys(a.modules, b.modules).forEach(function (id) { out.modules[id] = mergeModule((a.modules || {})[id], (b.modules || {})[id]); });
    keys(a.exams, b.exams).forEach(function (id) { out.exams[id] = mergeExamLike((a.exams || {})[id], (b.exams || {})[id]); });
    keys(a.srs, b.srs).forEach(function (id) { out.srs[id] = mergeSrsItem((a.srs || {})[id], (b.srs || {})[id]); });
    var sa = a.streak || {}, sb = b.streak || {};
    if (ymd(sa.last) === ymd(sb.last)) out.streak = { last: sa.last || sb.last || "", count: Math.max(sa.count || 0, sb.count || 0) };
    else out.streak = ymd(sa.last) > ymd(sb.last) ? { last: sa.last, count: sa.count || 0 } : { last: sb.last, count: sb.count || 0 };
    return out;
  }
  var api = { merge: merge };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.WCA_MERGE = api;
})(this);
