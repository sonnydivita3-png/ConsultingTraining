/* Reference cases for the interactive tools. Expected values are worked by hand
 * from the published criteria cited with each group, independent of the code.
 * Used by the in-app self-check panel and by tests/tools.test.js. */
(function (root) {
  "use strict";
  var REF = {
    uscs: {
      source: "ASTM D2487 criteria: No. 200 split at 50%; fines <5% / 5–12% / >12%; Cu ≥ 4 (gravel) or ≥ 6 (sand) with 1 ≤ Cc ≤ 3; A-line PI = 0.73(LL − 20); LL 50; CL-ML zone PI 4–7.",
      cases: [
        { label: "Lean clay well above A-line", in: { gravel: 0, sand: 0, fines: 100, LL: 35, PL: 17 }, expect: "CL" },
        { label: "Low PI silt", in: { gravel: 0, sand: 0, fines: 100, LL: 30, PL: 28 }, expect: "ML" },
        { label: "Hatched zone (PI 6)", in: { gravel: 0, sand: 0, fines: 100, LL: 25, PL: 19 }, expect: "CL-ML" },
        { label: "Fat clay", in: { gravel: 0, sand: 0, fines: 100, LL: 58, PL: 28 }, expect: "CH" },
        { label: "Elastic silt (below A-line, LL ≥ 50)", in: { gravel: 0, sand: 0, fines: 100, LL: 60, PL: 40 }, expect: "MH" },
        { label: "Below A-line, LL < 50, PI > 7", in: { gravel: 0, sand: 0, fines: 100, LL: 45, PL: 30 }, expect: "ML" },
        { label: "LL exactly 50 is high plasticity", in: { gravel: 0, sand: 0, fines: 100, LL: 50, PL: 25 }, expect: "CH" },
        { label: "LL 49.9 is low plasticity", in: { gravel: 0, sand: 0, fines: 100, LL: 49.9, PL: 24.9 }, expect: "CL" },
        { label: "Point exactly on the A-line counts as clay", in: { gravel: 0, sand: 0, fines: 100, LL: 40, PL: 25.4 }, expect: "CL" },
        { label: "PI exactly 7 stays in CL-ML", in: { gravel: 0, sand: 0, fines: 100, LL: 25, PL: 18 }, expect: "CL-ML" },
        { label: "PI 7.1 becomes CL", in: { gravel: 0, sand: 0, fines: 100, LL: 25, PL: 17.9 }, expect: "CL" },
        { label: "PI exactly 4 is CL-ML", in: { gravel: 0, sand: 0, fines: 100, LL: 20, PL: 16 }, expect: "CL-ML" },
        { label: "Non-plastic fines", in: { gravel: 0, sand: 0, fines: 100, nonPlastic: true }, expect: "ML" },
        { label: "Fines exactly 50% are fine-grained", in: { gravel: 0, sand: 50, fines: 50, LL: 30, PL: 12 }, expect: "CL" },
        { label: "Well-graded gravel", in: { gravel: 60, sand: 37, fines: 3, Cu: 5, Cc: 2 }, expect: "GW" },
        { label: "Gravel with Cu below 4", in: { gravel: 60, sand: 37, fines: 3, Cu: 3, Cc: 2 }, expect: "GP" },
        { label: "Well-graded sand", in: { gravel: 7, sand: 90, fines: 3, Cu: 7, Cc: 1.5 }, expect: "SW" },
        { label: "Sand with Cc below 1 (Module 12 example)", in: { gravel: 0, sand: 97, fines: 3, Cu: 8, Cc: 0.89 }, expect: "SP" },
        { label: "Cc exactly 3 is well-graded", in: { gravel: 2, sand: 95, fines: 3, Cu: 6, Cc: 3 }, expect: "SW" },
        { label: "Cc 3.01 is poorly graded", in: { gravel: 2, sand: 95, fines: 3, Cu: 6, Cc: 3.01 }, expect: "SP" },
        { label: "Equal gravel and sand goes to sand", in: { gravel: 40, sand: 40, fines: 20, LL: 30, PL: 25 }, expect: "SM" },
        { label: "Clayey sand", in: { gravel: 0, sand: 65, fines: 35, LL: 30, PL: 15 }, expect: "SC" },
        { label: "Clayey gravel", in: { gravel: 55, sand: 25, fines: 20, LL: 40, PL: 18 }, expect: "GC" },
        { label: "Fines in CL-ML zone, > 12%", in: { gravel: 0, sand: 70, fines: 30, LL: 22, PL: 16 }, expect: "SC-SM" },
        { label: "Fines exactly 5% take a dual symbol", in: { gravel: 0, sand: 95, fines: 5, Cu: 7, Cc: 2, nonPlastic: true }, expect: "SW-SM" },
        { label: "Fines exactly 12% take a dual symbol", in: { gravel: 0, sand: 88, fines: 12, Cu: 4, Cc: 1, LL: 30, PL: 12 }, expect: "SP-SC" },
        { label: "Poorly graded sand with silt", in: { gravel: 12, sand: 80, fines: 8, Cu: 2.5, Cc: 1, nonPlastic: true }, expect: "SP-SM" },
        { label: "Peat", in: { peat: true }, expect: "Pt" }
      ]
    },
    proctor: {
      source: "Dry density = wet density / (1 + w); peak of a known parabola; zero-air-voids γd = Gs·γw / (1 + w·Gs) with γw = 62.4 pcf.",
      fits: [
        { label: "Symmetric curve, peak 120.0 pcf at 10.0%", w: [6, 8, 10, 12, 14], dry: [112, 118, 120, 118, 112], omc: 10, mdd: 120 },
        { label: "Unevenly spaced points, peak 115.0 pcf at 10.0%", w: [5, 8, 11, 14, 17], dry: [112.5, 114.6, 114.9, 113.4, 110.1], omc: 10, mdd: 115 }
      ],
      zav: [
        { label: "Gs 2.70, w 12% (Module 15 exam)", Gs: 2.70, w: 12, expect: 127.25 },
        { label: "Gs 2.65, w 15%", Gs: 2.65, w: 15, expect: 118.33 }
      ]
    },
    density: {
      source: "Dry density = wet / (1 + w); % compaction = dry / MDD × 100; sand cone volume = (sand used − sand in cone) / sand density (ASTM D1556 calculation).",
      compaction: [
        { label: "Module 15 lesson example", in: { wet: 128.5, w: 9.2, mdd: 122.0, req: 95 }, dry: 117.67, pct: 96.45, pass: true },
        { label: "Module 15 check question", in: { wet: 132.0, w: 10.0, mdd: 125.0, req: 95 }, dry: 120.0, pct: 96.0, pass: true },
        { label: "Failing test", in: { wet: 125.0, w: 18.0, mdd: 112.0, req: 95 }, dry: 105.93, pct: 94.58, pass: false }
      ],
      sandCone: [
        { label: "Sand cone hand calculation", in: { sandUsed: 8.50, coneSand: 3.20, sandDensity: 92.0, soilMass: 7.35, w: 10.0 }, volume: 0.057609, wet: 127.585, dry: 115.986 }
      ]
    },
    trench: {
      source: "29 CFR 1926 Subpart P, Appendix B: stable rock vertical; Type A ¾:1; Type B 1:1; Type C 1½:1 (H:V).",
      cases: [
        { label: "Type C, 8 ft deep, 3 ft bottom", type: "C", depth: 8, bottom: 3, run: 12, top: 27, angle: 33.69 },
        { label: "Type A, 10 ft deep, 4 ft bottom", type: "A", depth: 10, bottom: 4, run: 7.5, top: 19, angle: 53.13 },
        { label: "Type B, 6 ft deep, 2 ft bottom", type: "B", depth: 6, bottom: 2, run: 6, top: 14, angle: 45 },
        { label: "Stable rock, 12 ft deep", type: "rock", depth: 12, bottom: 5, run: 0, top: 5, angle: 90 }
      ]
    },
    threePoint: {
      source: "Exact plane h = ax + by + c through three wells; gradient = √(a² + b²); flow toward −∇h. Cases built from known planes.",
      cases: [
        { label: "Head drops 1 ft per 100 ft to the east", wells: [{ x: 0, y: 0, h: 100 }, { x: 100, y: 0, h: 99 }, { x: 0, y: 100, h: 100 }], gradient: 0.01, azimuth: 90 },
        { label: "h = 50 − 0.003x − 0.004y (3-4-5 triangle)", wells: [{ x: 0, y: 0, h: 50 }, { x: 400, y: 0, h: 48.8 }, { x: 0, y: 300, h: 48.8 }], gradient: 0.005, azimuth: 36.87 },
        { label: "Module 3 exam wells, gradient 0.005", wells: [{ x: 0, y: 0, h: 856.8 }, { x: 400, y: 0, h: 854.8 }, { x: 0, y: 400, h: 856.8 }], gradient: 0.005, azimuth: 90 },
        { label: "Flow toward the southwest", wells: [{ x: 0, y: 0, h: 20 }, { x: 500, y: 0, h: 21 }, { x: 0, y: 500, h: 21 }], gradient: 0.0028284, azimuth: 225 }
      ]
    }
  };
  if (typeof module !== "undefined" && module.exports) module.exports = REF;
  else root.WCA_REF = REF;
})(this);
