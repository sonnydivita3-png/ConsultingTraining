/* Calculation engines for the interactive tools. Pure functions only, so the
 * same code runs in the browser and in the Node test suite (tests/tools.test.js).
 * Each engine has an independent cross-check implementation (suffix "Alt")
 * that is written a different way on purpose; tests require them to agree. */
(function (root) {
  "use strict";
  var GAMMA_W = 62.4; // unit weight of water, pcf
  var EPS = 1e-9;   // tolerance so values exactly on a boundary are not lost to rounding

  // ---------- USCS (ASTM D2487) ----------
  function aLine(LL) { return 0.73 * (LL - 20); }
  function uLine(LL) { return 0.9 * (LL - 8); }

  // Classify fines from the plasticity chart. Returns CL, ML, CL-ML, CH, MH, OL, OH.
  function finesSymbol(LL, PI, nonPlastic, organic) {
    if (nonPlastic) return "ML";
    if (organic) return LL < 50 ? "OL" : "OH";
    var A = aLine(LL) - EPS; // "on or above the A-line" counts as above
    if (LL < 50) {
      if (PI > 7 && PI >= A) return "CL";
      if (PI >= 4 && PI <= 7 && PI >= A) return "CL-ML";
      return "ML";
    }
    return PI >= A ? "CH" : "MH";
  }

  var NAMES = {
    CL: "Lean clay", ML: "Silt", "CL-ML": "Silty clay", CH: "Fat clay", MH: "Elastic silt",
    OL: "Organic clay or silt (low LL)", OH: "Organic clay or silt (high LL)", Pt: "Peat",
    GW: "Well-graded gravel", GP: "Poorly graded gravel", GM: "Silty gravel", GC: "Clayey gravel", "GC-GM": "Silty, clayey gravel",
    SW: "Well-graded sand", SP: "Poorly graded sand", SM: "Silty sand", SC: "Clayey sand", "SC-SM": "Silty, clayey sand",
    "GW-GM": "Well-graded gravel with silt", "GW-GC": "Well-graded gravel with clay", "GP-GM": "Poorly graded gravel with silt", "GP-GC": "Poorly graded gravel with clay",
    "SW-SM": "Well-graded sand with silt", "SW-SC": "Well-graded sand with clay", "SP-SM": "Poorly graded sand with silt", "SP-SC": "Poorly graded sand with clay"
  };

  /* input: { gravel, sand, fines (percent of total, sum 100), Cu, Cc, LL, PL, nonPlastic, organic, peat }
   * returns { symbol, name, steps: [..], notes: [..] } or { error } */
  function uscs(inp) {
    var steps = [], notes = [];
    if (inp.peat) return { symbol: "Pt", name: NAMES.Pt, steps: ["Primarily organic matter, dark, odorous: peat (Pt)."], notes: notes };
    var g = +inp.gravel, s = +inp.sand, f = +inp.fines;
    if ([g, s, f].some(function (v) { return isNaN(v) || v < 0; })) return { error: "Enter gravel, sand, and fines percentages (0 or more)." };
    if (Math.abs(g + s + f - 100) > 0.5) return { error: "Gravel + sand + fines must total 100% (currently " + round(g + s + f, 1) + "%)." };
    var needPlast = f >= 5;
    var LL = +inp.LL, PL = +inp.PL, PI = NaN;
    if (needPlast && !inp.nonPlastic) {
      if (isNaN(LL) || isNaN(PL)) return { error: "Fines are 5% or more, so enter LL and PL (or mark the fines non-plastic)." };
      if (PL > LL) return { error: "PL cannot exceed LL." };
      PI = LL - PL;
    }
    if (f >= 50) {
      steps.push("Fines " + f + "% ≥ 50% passing No. 200 → fine-grained soil.");
      var sym = finesSymbol(LL, PI, inp.nonPlastic, inp.organic);
      steps.push(plastStep(LL, PI, inp.nonPlastic, inp.organic, sym));
      if (!inp.nonPlastic && PI > uLine(LL)) notes.push("Point plots above the U-line, which is the approximate upper limit for natural soils. Check the test data.");
      return { symbol: sym, name: NAMES[sym], steps: steps, notes: notes, LL: LL, PI: PI };
    }
    steps.push("Fines " + f + "% < 50% → coarse-grained soil.");
    var isGravel = g > s;
    steps.push("Gravel " + g + "% vs. sand " + s + "% of the coarse fraction: " + (isGravel ? "more than half retained on No. 4 → gravel (G)." : "half or more passes No. 4 → sand (S)."));
    var P = isGravel ? "G" : "S";
    var grade = null;
    if (f <= 12) {
      var Cu = +inp.Cu, Cc = +inp.Cc;
      if (isNaN(Cu) || isNaN(Cc)) return { error: "Fines are 12% or less, so enter Cu and Cc to determine gradation." };
      var cuMin = isGravel ? 4 : 6;
      var well = Cu >= cuMin && Cc >= 1 && Cc <= 3;
      grade = well ? "W" : "P";
      steps.push("Cu = " + Cu + " (needs ≥ " + cuMin + "), Cc = " + Cc + " (needs 1–3) → " + (well ? "well-graded (W)." : "poorly graded (P)."));
    }
    if (inp.organic) notes.push("Organic fines in a coarse soil are not given a separate symbol here; add 'with organic fines' to the description per D2487.");
    if (f < 5) {
      steps.push("Fines < 5% → clean " + (isGravel ? "gravel" : "sand") + ".");
      var s1 = P + grade;
      return { symbol: s1, name: NAMES[s1], steps: steps, notes: notes };
    }
    var fs = finesSymbol(LL, PI, inp.nonPlastic, false);
    steps.push(plastStep(LL, PI, inp.nonPlastic, false, fs).replace("→", "→ fines classify as"));
    var fm;
    if (f > 12) {
      steps.push("Fines > 12% → name by the fines.");
      fm = fs === "CL-ML" ? P + "C-" + P + "M" : P + (fs === "CL" || fs === "CH" ? "C" : "M");
      return { symbol: fm, name: NAMES[fm], steps: steps, notes: notes, LL: LL, PI: PI };
    }
    steps.push("Fines 5–12% → dual symbol.");
    var fl = (fs === "CL" || fs === "CH" || fs === "CL-ML") ? "C" : "M";
    if (fs === "CL-ML") notes.push("Fines plot in the CL-ML zone. D2487 has no triple symbol for this case; the clayey (C) form is shown. Confirm with the project engineer.");
    var s2 = P + grade + "-" + P + fl;
    return { symbol: s2, name: NAMES[s2], steps: steps, notes: notes, LL: LL, PI: PI };
  }
  function plastStep(LL, PI, np, org, sym) {
    if (np) return "Fines are non-plastic → ML behavior.";
    if (org) return "Organic (oven-dried LL < 0.75 × undried LL) → " + sym + ".";
    return "LL = " + LL + ", PI = " + round(PI, 1) + "; A-line PI at this LL = " + round(aLine(LL), 1) + " → " + sym + ".";
  }

  // Independent cross-check: region-based lookup written as a rule table.
  function finesSymbolAlt(LL, PI, nonPlastic, organic) {
    if (nonPlastic) return "ML";
    var high = !(LL < 50), below = PI < 0.73 * LL - 14.6 - EPS;
    var rules = [
      [function () { return organic && !high; }, "OL"],
      [function () { return organic && high; }, "OH"],
      [function () { return high && below; }, "MH"],
      [function () { return high; }, "CH"],
      [function () { return below || PI < 4; }, "ML"],
      [function () { return PI <= 7; }, "CL-ML"],
      [function () { return true; }, "CL"]
    ];
    for (var i = 0; i < rules.length; i++) if (rules[i][0]()) return rules[i][1];
  }
  function uscsAlt(inp) {
    if (inp.peat) return "Pt";
    var g = +inp.gravel, s = +inp.sand, f = +inp.fines;
    var PI = inp.nonPlastic ? NaN : inp.LL - inp.PL;
    if (!(f < 50)) return finesSymbolAlt(inp.LL, PI, inp.nonPlastic, inp.organic);
    var first = s >= g ? "S" : "G";
    var limit = { G: 4, S: 6 }[first];
    var wp = (inp.Cu >= limit && inp.Cc >= 1 && inp.Cc <= 3) ? "W" : "P";
    if (f < 5) return first + wp;
    var fsx = finesSymbolAlt(inp.LL, PI, inp.nonPlastic, false);
    var clayey = fsx.charAt(0) === "C";
    if (f > 12) return fsx === "CL-ML" ? first + "C-" + first + "M" : first + (clayey ? "C" : "M");
    return first + wp + "-" + first + (clayey ? "C" : "M");
  }

  // ---------- Compaction (Proctor) ----------
  function dryDensity(wet, wPct) { return wet / (1 + wPct / 100); }
  function zav(wPct, Gs) { return Gs * GAMMA_W / (1 + (wPct / 100) * Gs); }
  function saturation(dry, wPct, Gs) { var e = Gs * GAMMA_W / dry - 1; return (wPct / 100) * Gs / e * 100; }

  // Least-squares parabola y = a + b x + c x^2 via normal equations (Cramer's rule).
  function fitQuadratic(xs, ys) {
    var n = xs.length, S = [0, 0, 0, 0, 0], T = [0, 0, 0];
    for (var i = 0; i < n; i++) {
      var x = xs[i], y = ys[i], p = 1;
      for (var k = 0; k <= 4; k++) { S[k] += p; if (k <= 2) T[k] += p * y; p *= x; }
    }
    var M = [[S[0], S[1], S[2]], [S[1], S[2], S[3]], [S[2], S[3], S[4]]];
    var D = det3(M);
    if (Math.abs(D) < 1e-12) return null;
    function rep(col) { return M.map(function (r, i) { return r.map(function (v, j) { return j === col ? T[i] : v; }); }); }
    return { a: det3(rep(0)) / D, b: det3(rep(1)) / D, c: det3(rep(2)) / D };
  }
  function det3(m) {
    return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  }
  // Independent cross-check: Gaussian elimination on centered x values.
  function fitQuadraticAlt(xs, ys) {
    var n = xs.length, mx = xs.reduce(function (a, b) { return a + b; }, 0) / n;
    var A = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < n; i++) {
      var u = xs[i] - mx, row = [1, u, u * u];
      for (var r = 0; r < 3; r++) { for (var c = 0; c < 3; c++) A[r][c] += row[r] * row[c]; A[r][3] += row[r] * ys[i]; }
    }
    for (var p = 0; p < 3; p++) {
      for (var q = p + 1; q < 3; q++) { var f = A[q][p] / A[p][p]; for (var k = p; k < 4; k++) A[q][k] -= f * A[p][k]; }
    }
    var z = [0, 0, 0];
    for (var r2 = 2; r2 >= 0; r2--) { var sum = A[r2][3]; for (var k2 = r2 + 1; k2 < 3; k2++) sum -= A[r2][k2] * z[k2]; z[r2] = sum / A[r2][r2]; }
    // convert y = z0 + z1 u + z2 u^2 with u = x - mx back to powers of x
    return { a: z[0] - z[1] * mx + z[2] * mx * mx, b: z[1] - 2 * z[2] * mx, c: z[2] };
  }
  /* points: [{w, wet}] (moisture %, wet density pcf); Gs for ZAV.
   * returns { pts: [{w, dry, S}], fit, omc, mdd, warnings } */
  function proctor(points, Gs) {
    var warnings = [];
    var pts = points.filter(function (p) { return isFinite(p.w) && isFinite(p.wet); }).map(function (p) {
      var d = dryDensity(p.wet, p.w); return { w: p.w, wet: p.wet, dry: d, S: saturation(d, p.w, Gs) };
    }).sort(function (a, b) { return a.w - b.w; });
    if (pts.length < 4) return { error: "Enter at least four trial points (moisture % and wet density)." };
    var fit = fitQuadratic(pts.map(function (p) { return p.w; }), pts.map(function (p) { return p.dry; }));
    if (!fit || fit.c >= 0) return { pts: pts, error: "These points do not form a peaked curve, so there is no maximum to report. Check the data." };
    var omc = -fit.b / (2 * fit.c), mdd = fit.a + fit.b * omc + fit.c * omc * omc;
    if (omc <= pts[0].w || omc >= pts[pts.length - 1].w) warnings.push("The fitted peak falls outside the tested moisture range. Add points on the " + (omc <= pts[0].w ? "dry" : "wet") + " side so optimum is bracketed.");
    var dryOf = pts.filter(function (p) { return p.w < omc; }).length, wetOf = pts.length - dryOf;
    if (dryOf < 2 || wetOf < 2) warnings.push("Fewer than two points on one side of optimum (" + dryOf + " dry, " + wetOf + " wet). The peak is poorly defined.");
    pts.forEach(function (p) { if (p.S > 100.5) warnings.push("Point at " + p.w + "% plots above the zero-air-voids curve (S = " + round(p.S, 0) + "%). That is physically impossible; check the data or Gs."); });
    return { pts: pts, fit: fit, omc: omc, mdd: mdd, warnings: warnings };
  }

  // ---------- Field density ----------
  function compaction(inp) {
    var dry = dryDensity(inp.wet, inp.w), pct = dry / inp.mdd * 100, minDry = inp.req / 100 * inp.mdd;
    return { dry: dry, pct: pct, minDry: minDry, pass: round(pct, 1) >= inp.req };
  }
  function sandCone(inp) {
    var vol = (inp.sandUsed - inp.coneSand) / inp.sandDensity;
    var wetD = inp.soilMass / vol;
    return { volume: vol, wet: wetD, dry: dryDensity(wetD, inp.w) };
  }

  // ---------- OSHA trench slopes (29 CFR 1926 Subpart P, Appendix B, < 20 ft) ----------
  var OSHA = {
    rock: { label: "Stable rock", ratio: 0, desc: "Vertical (90°)" },
    A: { label: "Type A", ratio: 0.75, desc: "¾H:1V (53°)" },
    B: { label: "Type B", ratio: 1, desc: "1H:1V (45°)" },
    C: { label: "Type C", ratio: 1.5, desc: "1½H:1V (34°)" }
  };
  function trench(type, depth, bottom) {
    var t = OSHA[type], notes = [];
    var run = t.ratio * depth;
    var angle = t.ratio === 0 ? 90 : Math.atan(1 / t.ratio) * 180 / Math.PI;
    if (depth > 20) notes.push({ level: "bad", text: "Deeper than 20 ft: Appendix B slopes do not apply. The protective system must be designed by a registered professional engineer (1926.652(b))." });
    if (depth >= 5) notes.push({ level: "warn", text: "5 ft or deeper: a protective system (sloping, benching, shoring, or shielding) is required unless the excavation is entirely in stable rock (1926.652(a))." });
    else notes.push({ level: "ok", text: "Under 5 ft: protection is not required unless a competent person finds indications of a potential cave-in." });
    if (depth >= 4) notes.push({ level: "warn", text: "4 ft or deeper: a ladder, ramp, or stairway is required within 25 ft of lateral travel (1926.651(c)(2))." });
    notes.push({ level: "ok", text: "Keep spoil and equipment at least 2 ft back from the edge (1926.651(j)(2))." });
    if (type === "A" && depth <= 12) notes.push({ level: "ok", text: "Appendix B also allows a short-term ½H:1V slope in Type A soil for excavations 12 ft or less deep that are open 24 hours or less. The drawing uses the standard ¾:1." });
    if (type === "C") notes.push({ level: "ok", text: "Benching is not permitted in Type C soil." });
    return { run: run, top: bottom + 2 * run, angle: angle, ratio: t.ratio, notes: notes };
  }

  // ---------- Three-point groundwater problem ----------
  /* wells: [{x, y, h}] with x = feet east, y = feet north.
   * Solves h = a x + b y + c exactly. Flow is along -grad h. */
  function threePoint(wells) {
    var M = wells.map(function (w) { return [w.x, w.y, 1]; }), D = det3(M);
    var area = Math.abs(D) / 2;
    if (area < 1e-6) return { error: "The three wells are in a straight line, so they cannot define a plane. Use wells that form a triangle." };
    var hcol = wells.map(function (w) { return w.h; });
    function rep(col) { return M.map(function (r, i) { return r.map(function (v, j) { return j === col ? hcol[i] : v; }); }); }
    var a = det3(rep(0)) / D, b = det3(rep(1)) / D, c = det3(rep(2)) / D;
    var grad = Math.hypot(a, b);
    var az = grad === 0 ? null : (Math.atan2(-a, -b) * 180 / Math.PI + 360) % 360;
    return { a: a, b: b, c: c, gradient: grad, azimuth: az, compass: az === null ? "none (flat)" : compass(az) };
  }
  // Independent cross-check: the graphical (interpolation) method taught in Module 3.
  function threePointAlt(wells) {
    var s = wells.slice().sort(function (p, q) { return q.h - p.h; }), hi = s[0], mid = s[1], lo = s[2];
    if (hi.h === lo.h) return { gradient: 0, azimuth: null };
    var t = (hi.h - mid.h) / (hi.h - lo.h);
    var P = { x: hi.x + t * (lo.x - hi.x), y: hi.y + t * (lo.y - hi.y) }; // point on hi–lo line with head = mid.h
    var ex = P.x - mid.x, ey = P.y - mid.y, L = Math.hypot(ex, ey);
    var dist, nx, ny;
    if (L < 1e-9) { // mid lies on the hi-lo line at its own head: gradient along that line
      var dx = lo.x - hi.x, dy = lo.y - hi.y, len = Math.hypot(dx, dy);
      return { gradient: (hi.h - lo.h) / len, azimuth: (Math.atan2(dx, dy) * 180 / Math.PI + 360) % 360 };
    }
    nx = -ey / L; ny = ex / L; // unit normal to the equipotential line
    dist = (hi.x - mid.x) * nx + (hi.y - mid.y) * ny; // signed distance of hi well from the line
    if (dist < 0) { nx = -nx; ny = -ny; dist = -dist; } // normal now points toward the high well
    return { gradient: (hi.h - mid.h) / dist, azimuth: (Math.atan2(-nx, -ny) * 180 / Math.PI + 360) % 360 };
  }
  function compass(az) { return ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(az / 22.5) % 16]; }

  function round(v, d) { var m = Math.pow(10, d); return Math.round(v * m) / m; }

  var api = {
    GAMMA_W: GAMMA_W, aLine: aLine, uLine: uLine, finesSymbol: finesSymbol, finesSymbolAlt: finesSymbolAlt,
    uscs: uscs, uscsAlt: uscsAlt, NAMES: NAMES,
    dryDensity: dryDensity, zav: zav, saturation: saturation, fitQuadratic: fitQuadratic, fitQuadraticAlt: fitQuadraticAlt, proctor: proctor,
    compaction: compaction, sandCone: sandCone, OSHA: OSHA, trench: trench,
    threePoint: threePoint, threePointAlt: threePointAlt, compass: compass, round: round
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.WCA_CORE = api;
})(this);
