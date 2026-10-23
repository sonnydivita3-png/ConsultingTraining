// Run with: node tests/merge.test.js
// Verifies that merging two devices' progress never loses progress.
"use strict";
const { merge } = require("../js/progress-merge.js");
let pass = 0, fail = 0;
function ok(c, m) { if (c) pass++; else { fail++; console.log("FAIL: " + m); } }
const eq = (x, y) => JSON.stringify(x) === JSON.stringify(y);

const phone = {
  version: 1, name: "Pat", started: 1000, lastBackup: 5000,
  modules: {
    m01: { lessons: { 0: 1100, 1: 1200 }, cards: 1300, teach: { 0: "short" }, attempts: [{ at: 1400, score: 0.6 }], passed: false, best: 0.6, passedOn: null },
    m02: { lessons: { 0: 2100 }, cards: false, teach: {}, teachDraft: { 0: "draft on phone" }, attempts: [], passed: false, best: 0, cardSession: { queue: [3, 4], firstRating: { 1: "good" } } }
  },
  exams: {}, srs: { "t:m01:0": { box: 2, due: 9000, t: 3000 }, "q:m01:3": { box: 0, due: 1 } },
  streak: { last: "2026-10-22", count: 3 }
};
const laptop = {
  version: 1, name: "", started: 900,
  modules: {
    m01: { lessons: { 0: 1150, 2: 1250, 3: 1260, 4: 1270 }, cards: 1350, teach: { 0: "a much longer explanation", 1: "second" }, attempts: [{ at: 1400, score: 0.6 }, { at: 1500, score: 0.87 }], passed: true, best: 0.87, passedOn: 1500 },
    m03: { lessons: { 0: 3100 }, cards: false, teach: {}, attempts: [], passed: false, best: 0 }
  },
  exams: { "cp-t1": { attempts: [{ at: 4000, score: 0.9 }], passed: true, best: 0.9, passedOn: 4000 } },
  srs: { "t:m01:0": { box: 1, due: 2000, t: 4000 }, "t:m01:1": { box: 3, due: 7000, t: 3500 } },
  streak: { last: "2026-10-23", count: 4 }
};
const m = merge(phone, laptop);
ok(m.name === "Pat", "name kept from whichever device has it");
ok(m.started === 900, "earliest start date kept");
ok(m.lastBackup === 5000, "latest backup date kept");
ok(eq(Object.keys(m.modules.m01.lessons).sort(), ["0", "1", "2", "3", "4"]), "lessons from both devices unioned");
ok(m.modules.m01.lessons[0] === 1100, "earliest completion time kept");
ok(m.modules.m01.passed === true && m.modules.m01.passedOn === 1500 && m.modules.m01.best === 0.87, "pass on either device counts");
ok(m.modules.m01.attempts.length === 2, "duplicate attempts removed, distinct attempts kept");
ok(m.modules.m01.teach[0] === "a much longer explanation" && m.modules.m01.teach[1] === "second", "longer teach-back answers kept");
ok(!!m.modules.m02 && !!m.modules.m03, "modules started on only one device kept");
ok(m.modules.m02.teachDraft[0] === "draft on phone", "drafts kept");
ok(eq(m.modules.m02.cardSession.queue, [3, 4]), "unfinished flashcard session kept");
ok(m.exams["cp-t1"].passed, "checkpoint passed on one device kept");
ok(m.srs["t:m01:0"].t === 4000, "most recently reviewed card state wins");
ok(m.srs["t:m01:1"] && m.srs["q:m01:3"], "review items from both devices kept");
ok(m.streak.last === "2026-10-23" && m.streak.count === 4, "most recent streak kept");
// finished deck drops a stale session
const done = merge({ modules: { m02: { cards: 1, cardSession: { queue: [1] } } } }, {});
ok(!done.modules.m02.cardSession, "card session dropped once deck is complete");

// properties over random states
let seed = 7; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
function randomState() {
  const s = { name: rnd() < 0.5 ? "A" : "", started: Math.floor(rnd() * 1000), modules: {}, exams: {}, srs: {}, streak: { last: "2026-10-" + (10 + Math.floor(rnd() * 10)), count: Math.floor(rnd() * 5) } };
  ["m01", "m02", "m03"].forEach(id => {
    if (rnd() < 0.3) return;
    const lessons = {}; for (let i = 0; i < 5; i++) if (rnd() < 0.5) lessons[i] = Math.floor(rnd() * 1e6) + 1;
    const attempts = []; for (let i = 0; i < 3; i++) if (rnd() < 0.4) attempts.push({ at: Math.floor(rnd() * 100), score: Math.round(rnd() * 10) / 10 });
    const passed = attempts.some(a => a.score >= 0.8);
    s.modules[id] = { lessons, cards: rnd() < 0.5 ? Math.floor(rnd() * 1e6) + 1 : false, teach: rnd() < 0.5 ? { 0: "x".repeat(Math.floor(rnd() * 300)) } : {}, attempts, passed, passedOn: passed ? Math.floor(rnd() * 100) : null, best: attempts.reduce((m, a) => Math.max(m, a.score), 0) };
  });
  for (let i = 0; i < 6; i++) if (rnd() < 0.5) s.srs["t:m01:" + i] = { box: Math.floor(rnd() * 6), due: Math.floor(rnd() * 1e6), t: rnd() < 0.7 ? Math.floor(rnd() * 1e6) : undefined };
  return s;
}
for (let n = 0; n < 5000; n++) {
  const a = randomState(), b = randomState(), ab = merge(a, b), ba = merge(b, a);
  let good = true;
  [a, b].forEach(src => Object.keys(src.modules).forEach(id => {
    const s = src.modules[id], r = ab.modules[id];
    Object.keys(s.lessons).forEach(i => { if (!r.lessons[i]) good = false; });
    if (s.passed && !r.passed) good = false;
    if (s.cards && !r.cards) good = false;
    if (r.best < s.best) good = false;
    s.attempts.forEach(t => { if (!r.attempts.some(x => x.at === t.at && x.score === t.score)) good = false; });
  }));
  [a, b].forEach(src => Object.keys(src.srs).forEach(k => { if (!ab.srs[k]) good = false; }));
  if (!good) { ok(false, "progress lost in random merge #" + n); break; }
  // Same lessons, passes, and attempts regardless of which device merges first
  if (!eq(Object.keys(ab.modules).sort(), Object.keys(ba.modules).sort())) { ok(false, "merge order changed module set"); break; }
  const sameCore = Object.keys(ab.modules).every(id => eq(Object.keys(ab.modules[id].lessons).sort(), Object.keys(ba.modules[id].lessons).sort()) && ab.modules[id].passed === ba.modules[id].passed && eq(ab.modules[id].attempts, ba.modules[id].attempts));
  if (!sameCore) { ok(false, "merge order changed progress #" + n); break; }
  // Merging again changes nothing (safe to sync repeatedly)
  if (!eq(merge(ab, ab), ab) || !eq(merge(ab, b), merge(merge(ab, b), b))) { ok(false, "merge not idempotent #" + n); break; }
  pass++;
}
console.log(`${pass} merge checks passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
