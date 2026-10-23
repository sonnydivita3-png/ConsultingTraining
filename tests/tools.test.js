// Run with: node tests/tools.test.js
// Checks every tool engine against hand-worked reference cases and against an
// independent second implementation over large sets of random inputs.
"use strict";
const C = require("../js/tools-core.js");
const REF = require("../js/tools-reference.js");
let pass = 0, fail = 0;
function ok(cond, msg) { if (cond) pass++; else { fail++; console.log("FAIL: " + msg); } }
const near = (a, b, tol) => Math.abs(a - b) <= tol;
const angDiff = (a, b) => Math.abs(((a - b + 540) % 360) - 180);

// --- USCS reference cases
REF.uscs.cases.forEach(c => {
  const r = C.uscs(c.in);
  ok(r.symbol === c.expect, `USCS ${c.label}: got ${r.symbol || r.error}, expected ${c.expect}`);
  ok(C.uscsAlt(c.in) === c.expect, `USCS alt ${c.label}: got ${C.uscsAlt(c.in)}`);
});
// --- USCS: primary vs independent implementation on random inputs
let seed = 12345; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let i = 0; i < 100000; i++) {
  const fines = Math.round(rnd() * 1000) / 10, g = Math.round(rnd() * (100 - fines) * 10) / 10;
  const LL = Math.round((10 + rnd() * 90) * 10) / 10, PL = Math.round(rnd() * LL * 10) / 10;
  const inp = { gravel: g, sand: Math.round((100 - fines - g) * 10) / 10, fines, LL, PL,
    Cu: Math.round(rnd() * 120) / 10, Cc: Math.round(rnd() * 50) / 10, nonPlastic: rnd() < 0.05 };
  inp.sand = Math.max(0, Math.round((100 - fines - g) * 10) / 10);
  const a = C.uscs(inp).symbol, b = C.uscsAlt(inp);
  if (a !== b) { ok(false, `USCS mismatch ${JSON.stringify(inp)}: ${a} vs ${b}`); break; }
  pass++;
}
// --- Proctor fits: known parabolas recovered; two solvers agree
REF.proctor.fits.forEach(f => {
  const pts = f.w.map((w, i) => ({ w, wet: f.dry[i] * (1 + w / 100) }));
  const r = C.proctor(pts, 2.7);
  ok(near(r.omc, f.omc, 0.01) && near(r.mdd, f.mdd, 0.01), `Proctor ${f.label}: OMC ${r.omc}, MDD ${r.mdd}`);
  const A = C.fitQuadratic(f.w, f.dry), B = C.fitQuadraticAlt(f.w, f.dry);
  ok(near(A.a, B.a, 1e-6) && near(A.b, B.b, 1e-7) && near(A.c, B.c, 1e-8), `Proctor solvers agree (${f.label})`);
});
for (let i = 0; i < 20000; i++) {
  const xs = [0, 1, 2, 3, 4, 5].map(k => 5 + k * (1 + rnd() * 2)), ys = xs.map(x => 90 + rnd() * 40);
  const A = C.fitQuadratic(xs, ys), B = C.fitQuadraticAlt(xs, ys);
  if (!(near(A.c, B.c, 1e-6 * Math.max(1, Math.abs(B.c))) && near(A.b, B.b, 1e-4) && near(A.a, B.a, 1e-2))) { ok(false, "Proctor solver mismatch " + JSON.stringify({ xs, ys, A, B })); break; }
  pass++;
}
REF.proctor.zav.forEach(z => ok(near(C.zav(z.w, z.Gs), z.expect, 0.01), `ZAV ${z.label}: ${C.zav(z.w, z.Gs)}`));
// Identity: any point on the ZAV curve is 100% saturated
for (let w = 5; w <= 30; w += 2.5) ok(near(C.saturation(C.zav(w, 2.68), w, 2.68), 100, 1e-9), "ZAV saturation identity at w=" + w);
// --- Field density
REF.density.compaction.forEach(c => {
  const r = C.compaction(c.in);
  ok(near(r.dry, c.dry, 0.01) && near(r.pct, c.pct, 0.01) && r.pass === c.pass, `Compaction ${c.label}: ${r.dry} ${r.pct} ${r.pass}`);
});
REF.density.sandCone.forEach(c => {
  const r = C.sandCone(c.in);
  ok(near(r.volume, c.volume, 1e-6) && near(r.wet, c.wet, 0.01) && near(r.dry, c.dry, 0.01), `Sand cone ${c.label}: ${JSON.stringify(r)}`);
});
// --- Trench geometry
REF.trench.cases.forEach(c => {
  const r = C.trench(c.type, c.depth, c.bottom);
  ok(near(r.run, c.run, 1e-9) && near(r.top, c.top, 1e-9) && near(r.angle, c.angle, 0.01), `Trench ${c.label}: ${JSON.stringify(r)}`);
});
ok(C.trench("C", 22, 3).notes.some(n => /20 ft/.test(n.text)), "Trench >20 ft flags PE design");
ok(!C.trench("C", 4, 3).notes.some(n => /5 ft or deeper/.test(n.text)), "Trench <5 ft does not require protection note");
// --- Three-point problem: references, residuals, and graphical method agreement
REF.threePoint.cases.forEach(c => {
  const r = C.threePoint(c.wells);
  ok(near(r.gradient, c.gradient, 1e-6) && angDiff(r.azimuth, c.azimuth) < 0.01, `Three-point ${c.label}: i=${r.gradient} az=${r.azimuth}`);
  c.wells.forEach(w => ok(near(r.a * w.x + r.b * w.y + r.c, w.h, 1e-9), "plane passes through well"));
});
ok(!!C.threePoint([{ x: 0, y: 0, h: 1 }, { x: 10, y: 10, h: 2 }, { x: 20, y: 20, h: 3 }]).error, "Collinear wells rejected");
for (let i = 0; i < 50000; i++) {
  const wells = [0, 1, 2].map(() => ({ x: rnd() * 1000, y: rnd() * 1000, h: 800 + rnd() * 10 }));
  const A = C.threePoint(wells); if (A.error) continue;
  const triArea = Math.abs((wells[1].x - wells[0].x) * (wells[2].y - wells[0].y) - (wells[2].x - wells[0].x) * (wells[1].y - wells[0].y)) / 2;
  if (triArea < 1000) continue; // nearly collinear triangles are ill-conditioned for both methods
  const B = C.threePointAlt(wells);
  if (!(near(A.gradient, B.gradient, 1e-6 * Math.max(1, A.gradient)) && angDiff(A.azimuth, B.azimuth) < 1e-4)) { ok(false, "Three-point mismatch " + JSON.stringify({ wells, A, B })); break; }
  pass++;
}
console.log(`${pass} checks passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
