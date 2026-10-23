/* Interactive tools: forms, to-scale drawings, and a live self-check panel.
 * All math comes from WCA_CORE (js/tools-core.js). After each drawing is made,
 * the self-check reads the drawn coordinates back out of the SVG and confirms
 * they match the computed values, so the pictures are verified, not assumed. */
(function () {
  "use strict";
  var K = window.WCA_CORE, REF = window.WCA_REF;
  var NS = "http://www.w3.org/2000/svg";
  var r = K.round;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function num(id) { var v = document.getElementById(id).value.trim(); return v === "" ? NaN : parseFloat(v); }
  function field(id, label, value, unit, hint) {
    return '<label class="tfield" for="' + id + '"><span>' + label + (unit ? ' <span class="muted">(' + unit + ")</span>" : "") + '</span><input id="' + id + '" type="text" inputmode="decimal" value="' + value + '">' + (hint ? '<span class="small muted">' + hint + "</span>" : "") + "</label>";
  }
  function check(label, okv, detail) { return { label: label, ok: okv, detail: detail }; }
  function renderChecks(el, groups) {
    var all = [], h = "";
    groups.forEach(function (g) { all = all.concat(g.items); });
    var passed = all.filter(function (c) { return c.ok; }).length;
    h += '<details class="checks"' + (passed === all.length ? "" : " open") + '><summary><span class="pill ' + (passed === all.length ? "good" : "bad") + '">' + passed + " / " + all.length + " checks pass</span> How this tool is verified</summary>";
    groups.forEach(function (g) {
      h += "<h4>" + esc(g.title) + "</h4>" + (g.source ? '<p class="small muted">' + esc(g.source) + "</p>" : "") + '<ul class="checklist">';
      g.items.forEach(function (c) { h += '<li class="' + (c.ok ? "ok" : "no") + '"><span>' + (c.ok ? "&#10003;" : "&#10007;") + "</span> " + esc(c.label) + (c.detail ? ' <span class="muted small">' + esc(c.detail) + "</span>" : "") + "</li>"; });
      h += "</ul>";
    });
    el.innerHTML = h + '<p class="small muted">The same reference cases, plus 170,000 randomized cross-checks against independent second implementations, run in the repository test suite (<code>tests/tools.test.js</code>).</p></details>';
  }

  // --- SVG helpers
  function svgEl(tag, attrs, text) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (text !== undefined) e.textContent = text; return e; }
  function scale(d0, d1, p0, p1) { var f = function (v) { return p0 + (v - d0) / (d1 - d0) * (p1 - p0); }; f.inv = function (p) { return d0 + (p - p0) / (p1 - p0) * (d1 - d0); }; return f; }
  function niceStep(span, target) { var raw = span / target, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p; }
  function axes(svg, sx, sy, x0, x1, y0, y1, xl, yl, box) {
    var xs = niceStep(x1 - x0, 6), ys = niceStep(y1 - y0, 6), v;
    for (v = Math.ceil(x0 / xs) * xs; v <= x1 + 1e-9; v += xs) {
      svg.appendChild(svgEl("line", { x1: sx(v), x2: sx(v), y1: box.t, y2: box.b, class: "gridline" }));
      svg.appendChild(svgEl("text", { x: sx(v), y: box.b + 16, class: "tick", "text-anchor": "middle" }, r(v, 2)));
    }
    for (v = Math.ceil(y0 / ys) * ys; v <= y1 + 1e-9; v += ys) {
      svg.appendChild(svgEl("line", { x1: box.l, x2: box.r, y1: sy(v), y2: sy(v), class: "gridline" }));
      svg.appendChild(svgEl("text", { x: box.l - 6, y: sy(v) + 4, class: "tick", "text-anchor": "end" }, r(v, 2)));
    }
    svg.appendChild(svgEl("rect", { x: box.l, y: box.t, width: box.r - box.l, height: box.b - box.t, class: "frame" }));
    svg.appendChild(svgEl("text", { x: (box.l + box.r) / 2, y: box.b + 36, class: "axlabel", "text-anchor": "middle" }, xl));
    svg.appendChild(svgEl("text", { x: 14, y: (box.t + box.b) / 2, class: "axlabel", "text-anchor": "middle", transform: "rotate(-90 14 " + (box.t + box.b) / 2 + ")" }, yl));
  }
  function poly(pts, sx, sy) { return pts.map(function (p) { return r(sx(p[0]), 2) + "," + r(sy(p[1]), 2); }).join(" "); }

  // ===================== USCS =====================
  function uscsTool(root) {
    root.innerHTML = '<p>Enter laboratory results to classify a soil by the Unified Soil Classification System (ASTM D2487). The tool shows each decision step and plots the fines on the plasticity chart.</p>' +
      '<div class="tgrid">' + field("u-g", "Gravel", 12, "% retained on No. 4") + field("u-s", "Sand", 58, "% No. 4 to No. 200") + field("u-f", "Fines", 30, "% passing No. 200") +
      field("u-ll", "Liquid limit (LL)", 32, "") + field("u-pl", "Plastic limit (PL)", 17, "") + field("u-cu", "Cu", "", "", "Needed when fines ≤ 12%") + field("u-cc", "Cc", "", "", "Needed when fines ≤ 12%") + "</div>" +
      '<div class="btn-row small"><label><input type="checkbox" id="u-np"> Fines non-plastic</label><label><input type="checkbox" id="u-org"> Organic (oven-dried LL &lt; 0.75 × undried)</label><label><input type="checkbox" id="u-pt"> Peat</label></div>' +
      '<p class="small muted">Example values are filled in. Replace them with your own.</p>' +
      '<div id="u-out" class="card"></div><figure><div class="chart-wrap" id="u-chart"></div><figcaption>Plasticity chart (ASTM D2487). A-line: PI = 0.73(LL − 20), horizontal at PI = 4 between the U-line and LL 25.5. U-line: PI = 0.9(LL − 8), vertical at LL 16 below PI 7. Shaded: CL-ML zone.</figcaption></figure><div id="u-checks"></div>' +
      '<p class="small muted">Limits: gives the group symbol and basic group name. Full D2487 group names also add modifiers such as "with sand" or "with gravel" based on percentages; add those per the standard.</p>';
    var ids = ["u-g", "u-s", "u-f", "u-ll", "u-pl", "u-cu", "u-cc", "u-np", "u-org", "u-pt"];
    function run() {
      var inp = { gravel: num("u-g"), sand: num("u-s"), fines: num("u-f"), LL: num("u-ll"), PL: num("u-pl"), Cu: num("u-cu"), Cc: num("u-cc"),
        nonPlastic: document.getElementById("u-np").checked, organic: document.getElementById("u-org").checked, peat: document.getElementById("u-pt").checked };
      var res = K.uscs(inp), out = document.getElementById("u-out");
      if (res.error) out.innerHTML = '<div class="feedback bad">' + esc(res.error) + "</div>";
      else out.innerHTML = '<div class="tresult"><span class="tsym">' + res.symbol + "</span><span>" + esc(res.name) + "</span></div><ol class='small'>" + res.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
        res.notes.map(function (n) { return '<div class="callout warn small">' + esc(n) + "</div>"; }).join("");
      var drawn = drawPlasticity(document.getElementById("u-chart"), res.error || inp.nonPlastic || inp.peat ? null : { LL: inp.LL, PI: inp.LL - inp.PL });
      var g1 = REF.uscs.cases.map(function (c) { var got = K.uscs(c.in).symbol; return check(c.label + " → " + c.expect, got === c.expect, got === c.expect ? "" : "got " + got); });
      var g2 = [];
      var aOk = [25.5, 40, 60, 90].every(function (LL) { var y = drawn.sy.inv(drawn.aLineY(LL)); return Math.abs(y - K.aLine(LL)) < 0.05; });
      g2.push(check("A-line as drawn passes through PI = 0.73(LL − 20) at LL 25.5, 40, 60, 90", aOk));
      g2.push(check("LL = 50 divider drawn at LL 50.0", Math.abs(drawn.sx.inv(drawn.ll50x) - 50) < 0.05, "measured " + r(drawn.sx.inv(drawn.ll50x), 2)));
      if (drawn.pt) g2.push(check("Plotted point reads back as LL " + r(inp.LL, 1) + ", PI " + r(inp.LL - inp.PL, 1), Math.abs(drawn.sx.inv(drawn.pt.x) - inp.LL) < 0.05 && Math.abs(drawn.sy.inv(drawn.pt.y) - (inp.LL - inp.PL)) < 0.05));
      renderChecks(document.getElementById("u-checks"), [{ title: "Reference classifications", source: REF.uscs.source, items: g1 }, { title: "Drawing measured back", items: g2 }]);
    }
    ids.forEach(function (id) { document.getElementById(id).addEventListener("input", run); document.getElementById(id).addEventListener("change", run); });
    run();
  }
  function drawPlasticity(host, point) {
    var W = 560, H = 380, box = { l: 52, r: W - 16, t: 14, b: H - 50 };
    var sx = scale(0, 100, box.l, box.r), sy = scale(0, 60, box.b, box.t);
    var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Plasticity chart" });
    axes(svg, sx, sy, 0, 100, 0, 60, "Liquid limit, LL", "Plasticity index, PI", box);
    var aBreak = 20 + 4 / 0.73; // A-line meets PI = 4 at LL ≈ 25.48
    var zone = [[4 / 0.9 + 8, 4], [aBreak, 4], [7 / 0.73 + 20, 7], [7 / 0.9 + 8, 7]];
    svg.appendChild(svgEl("polygon", { points: poly(zone, sx, sy), class: "zone" }));
    svg.appendChild(svgEl("polyline", { points: poly([[4 / 0.9 + 8, 4], [aBreak, 4], [100, K.aLine(100)]], sx, sy), class: "aline" }));
    svg.appendChild(svgEl("polyline", { points: poly([[16, 0], [16, 7.2], [8 + 60 / 0.9, 60]], sx, sy), class: "uline" }));
    svg.appendChild(svgEl("line", { x1: sx(50), x2: sx(50), y1: box.b, y2: box.t, class: "divider" }));
    [["CL or OL", 40, 20], ["CH or OH", 66, 44], ["ML or OL", 40, 5], ["MH or OH", 78, 18], ["A-line", 86, 50], ["U-line", 60, 53], ["CL-ML", 21, 8.2]].forEach(function (t) {
      svg.appendChild(svgEl("text", { x: sx(t[1]), y: sy(t[2]), class: "zlabel", "text-anchor": "middle" }, t[0]));
    });
    var pt = null;
    if (point && isFinite(point.LL) && isFinite(point.PI)) {
      var cx = sx(Math.max(0, Math.min(100, point.LL))), cy = sy(Math.max(0, Math.min(60, point.PI)));
      svg.appendChild(svgEl("circle", { cx: r(cx, 3), cy: r(cy, 3), r: 6, class: "pt" }));
      pt = { x: cx, y: cy };
    }
    host.innerHTML = ""; host.appendChild(svg);
    var aPts = svg.querySelector(".aline").getAttribute("points").split(" ").map(function (s) { return s.split(",").map(Number); });
    return { sx: sx, sy: sy, pt: pt, ll50x: +svg.querySelector(".divider").getAttribute("x1"),
      aLineY: function (LL) { // read the A-line's y at LL from the drawn polyline segment
        var x = sx(LL), p = aPts[1], q = aPts[2]; return p[1] + (x - p[0]) / (q[0] - p[0]) * (q[1] - p[1]); } };
  }

  // ===================== PROCTOR =====================
  function proctorTool(root) {
    var ex = [[8.2, 121.6], [10.1, 128.3], [12.0, 132.9], [14.1, 132.0], [16.0, 129.1]];
    var rows = "";
    for (var i = 0; i < 6; i++) rows += "<tr><td>" + (i + 1) + '</td><td><input id="p-w' + i + '" class="num-input" type="text" inputmode="decimal" value="' + (ex[i] ? ex[i][0] : "") + '"></td><td><input id="p-d' + i + '" class="num-input" type="text" inputmode="decimal" value="' + (ex[i] ? ex[i][1] : "") + '"></td><td class="p-dry"></td><td class="p-s"></td></tr>';
    root.innerHTML = '<p>Enter Proctor trial points (moisture content and wet density). The tool computes dry density, fits the moisture–density curve, and finds maximum dry density and optimum moisture content. It also draws the zero-air-voids curve.</p>' +
      '<div class="tbl-wrap"><table class="ptable"><thead><tr><th>#</th><th>Moisture (%)</th><th>Wet density (pcf)</th><th>Dry density (pcf)</th><th>Saturation</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<div class="tgrid">' + field("p-gs", "Specific gravity, Gs", 2.70, "", "Measured by ASTM D854; 2.65–2.75 is typical for mineral soils") + "</div>" +
      '<p class="small muted">Example values are filled in. Replace them with your own; leave unused rows blank.</p>' +
      '<div id="p-out" class="card"></div><figure><div class="chart-wrap" id="p-chart"></div><figcaption>Dots: trial points. Solid curve: least-squares parabola. Dashed curve: zero air voids (100% saturation). Real data must plot below it.</figcaption></figure><div id="p-checks"></div>' +
      '<p class="small muted">Method: the standard asks you to draw a smooth curve through the points. A least-squares parabola is a common computational stand-in. When points are lopsided around the peak, compare it with a hand-drawn curve.</p>';
    function run() {
      var pts = [];
      for (var i = 0; i < 6; i++) pts.push({ w: num("p-w" + i), wet: num("p-d" + i) });
      var Gs = num("p-gs"), res = K.proctor(pts, Gs);
      var cells = root.querySelectorAll(".p-dry"), scells = root.querySelectorAll(".p-s");
      pts.forEach(function (p, i) {
        var ok = isFinite(p.w) && isFinite(p.wet), d = ok ? K.dryDensity(p.wet, p.w) : NaN;
        cells[i].textContent = ok ? r(d, 1) : "";
        scells[i].textContent = ok && isFinite(Gs) ? r(K.saturation(d, p.w, Gs), 0) + "%" : "";
      });
      var out = document.getElementById("p-out");
      if (res.error) out.innerHTML = '<div class="feedback bad">' + esc(res.error) + "</div>";
      else out.innerHTML = '<div class="grid"><div class="stat"><div class="v">' + r(res.mdd, 1) + ' pcf</div><div class="k">Maximum dry density</div></div><div class="stat"><div class="v">' + r(res.omc, 1) + '%</div><div class="k">Optimum moisture content</div></div><div class="stat"><div class="v">' + r(0.95 * res.mdd, 1) + ' pcf</div><div class="k">95% of MDD (a common field requirement)</div></div></div>' +
        res.warnings.map(function (w) { return '<div class="callout warn small">' + esc(w) + "</div>"; }).join("");
      var drawn = drawProctor(document.getElementById("p-chart"), res, Gs);
      var g1 = REF.proctor.fits.map(function (f) {
        var rr = K.proctor(f.w.map(function (w, j) { return { w: w, wet: f.dry[j] * (1 + w / 100) }; }), 2.7);
        return check(f.label, Math.abs(rr.omc - f.omc) < 0.01 && Math.abs(rr.mdd - f.mdd) < 0.01, "fit gives " + r(rr.mdd, 2) + " pcf at " + r(rr.omc, 2) + "%");
      });
      REF.proctor.zav.forEach(function (z) { var v = K.zav(z.w, z.Gs); g1.push(check("Zero air voids, " + z.label + " = " + z.expect + " pcf", Math.abs(v - z.expect) < 0.01, "computed " + r(v, 2))); });
      var g2 = [];
      if (drawn) {
        g2.push(check("Peak marker reads back as " + r(res.mdd, 1) + " pcf at " + r(res.omc, 1) + "%", Math.abs(drawn.sx.inv(drawn.peak.x) - res.omc) < 0.02 && Math.abs(drawn.sy.inv(drawn.peak.y) - res.mdd) < 0.05));
        g2.push(check("Every plotted dot reads back to its dry density within 0.05 pcf", drawn.dots.every(function (d, i) { return Math.abs(drawn.sy.inv(d.y) - res.pts[i].dry) < 0.05 && Math.abs(drawn.sx.inv(d.x) - res.pts[i].w) < 0.02; })));
        g2.push(check("Drawn ZAV curve reads back to Gs·γw/(1 + w·Gs) at its sampled points", drawn.zavPts.every(function (p) { var w = drawn.sx.inv(p[0]); return Math.abs(drawn.sy.inv(p[1]) - K.zav(w, Gs)) < 0.05; })));
      }
      renderChecks(document.getElementById("p-checks"), [{ title: "Reference calculations", source: REF.proctor.source, items: g1 }, { title: "Drawing measured back", items: g2 }]);
    }
    root.querySelectorAll("input").forEach(function (el) { el.addEventListener("input", run); });
    run();
  }
  function drawProctor(host, res, Gs) {
    host.innerHTML = "";
    if (!res.pts || !res.pts.length) return null;
    var W = 560, H = 360, box = { l: 58, r: W - 16, t: 14, b: H - 50 };
    var ws = res.pts.map(function (p) { return p.w; }), ds = res.pts.map(function (p) { return p.dry; });
    var x0 = Math.floor(Math.min.apply(null, ws) - 2), x1 = Math.ceil(Math.max.apply(null, ws) + 2);
    var y0 = Math.floor(Math.min.apply(null, ds) - 4), y1 = Math.ceil(Math.max.apply(null, ds.concat(res.mdd || 0)) + 6);
    var sx = scale(x0, x1, box.l, box.r), sy = scale(y0, y1, box.b, box.t);
    var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Moisture-density curve" });
    axes(svg, sx, sy, x0, x1, y0, y1, "Moisture content, %", "Dry density, pcf", box);
    var clip = svgEl("clipPath", { id: "pclip" }); clip.appendChild(svgEl("rect", { x: box.l, y: box.t, width: box.r - box.l, height: box.b - box.t })); svg.appendChild(clip);
    var zavPts = [];
    if (isFinite(Gs)) for (var w = x0; w <= x1 + 1e-9; w += (x1 - x0) / 60) zavPts.push([sx(w), sy(K.zav(w, Gs))]);
    svg.appendChild(svgEl("polyline", { points: zavPts.map(function (p) { return r(p[0], 3) + "," + r(p[1], 3); }).join(" "), class: "zav", "clip-path": "url(#pclip)" }));
    var peak = null;
    if (res.fit && !res.error) {
      var cpts = [], a = ws[0] - 0.5, b = ws[ws.length - 1] + 0.5;
      for (var t = 0; t <= 60; t++) { var x = a + (b - a) * t / 60; cpts.push([x, res.fit.a + res.fit.b * x + res.fit.c * x * x]); }
      svg.appendChild(svgEl("polyline", { points: poly(cpts, sx, sy), class: "fit", "clip-path": "url(#pclip)" }));
      peak = { x: sx(res.omc), y: sy(res.mdd) };
      svg.appendChild(svgEl("line", { x1: peak.x, x2: peak.x, y1: peak.y, y2: box.b, class: "guide" }));
      svg.appendChild(svgEl("line", { x1: box.l, x2: peak.x, y1: peak.y, y2: peak.y, class: "guide" }));
      svg.appendChild(svgEl("circle", { cx: r(peak.x, 3), cy: r(peak.y, 3), r: 5, class: "peak" }));
      svg.appendChild(svgEl("text", { x: peak.x + 8, y: peak.y - 8, class: "zlabel" }, r(res.mdd, 1) + " pcf @ " + r(res.omc, 1) + "%"));
    }
    var dots = res.pts.map(function (p) { var d = { x: sx(p.w), y: sy(p.dry) }; svg.appendChild(svgEl("circle", { cx: r(d.x, 3), cy: r(d.y, 3), r: 4.5, class: "pt" })); return d; });
    host.appendChild(svg);
    return { sx: sx, sy: sy, peak: peak || { x: NaN, y: NaN }, dots: dots, zavPts: zavPts.filter(function (p) { return p[1] >= box.t && p[1] <= box.b; }) };
  }

  // ===================== FIELD DENSITY =====================
  function densityTool(root) {
    root.innerHTML = '<p>Calculate dry density and percent compaction from a nuclear gauge (ASTM D6938) reading, or compute field density from sand cone (ASTM D1556) data.</p>' +
      "<h3>Nuclear gauge reading</h3>" + '<div class="tgrid">' + field("d-wet", "Wet density", 128.5, "pcf") + field("d-w", "Moisture content", 9.2, "%") + field("d-mdd", "Maximum dry density (Proctor)", 122.0, "pcf") + field("d-req", "Required compaction", 95, "% of MDD") + "</div>" +
      '<div id="d-out" class="card"></div><div class="chart-wrap" id="d-bar"></div>' +
      "<h3>Sand cone</h3>" + '<div class="tgrid">' + field("s-used", "Sand used (hole + cone)", 8.50, "lb") + field("s-cone", "Sand to fill cone and plate", 3.20, "lb", "From calibration") + field("s-dens", "Calibrated sand density", 92.0, "pcf") + field("s-soil", "Wet soil removed from hole", 7.35, "lb") + field("s-w", "Moisture of removed soil", 10.0, "%") + "</div>" +
      '<div id="s-out" class="card"></div><p class="small muted">Example values are filled in. Replace them with your own.</p><div id="d-checks"></div>';
    function run() {
      var inp = { wet: num("d-wet"), w: num("d-w"), mdd: num("d-mdd"), req: num("d-req") }, o = document.getElementById("d-out"), drawn = null;
      if ([inp.wet, inp.w, inp.mdd, inp.req].some(isNaN)) o.innerHTML = '<div class="feedback bad">Enter all four values.</div>';
      else {
        var c = K.compaction(inp);
        o.innerHTML = '<div class="grid"><div class="stat"><div class="v">' + r(c.dry, 1) + ' pcf</div><div class="k">Dry density = ' + inp.wet + " / (1 + " + r(inp.w / 100, 3) + ')</div></div><div class="stat"><div class="v">' + r(c.pct, 1) + '%</div><div class="k">Compaction = dry / MDD × 100</div></div><div class="stat"><div class="v">' + r(c.minDry, 1) + ' pcf</div><div class="k">Minimum passing dry density</div></div></div>' +
          '<p><span class="pill ' + (c.pass ? "good" : "bad") + '">' + (c.pass ? "PASSES" : "FAILS") + "</span> the " + inp.req + "% requirement." + (c.pass ? "" : " Verify the Proctor reference, gauge seating, and moisture before reporting, then notify and retest after corrective work.") + "</p>";
        drawn = drawBar(document.getElementById("d-bar"), c.pct, inp.req);
      }
      var s = { sandUsed: num("s-used"), coneSand: num("s-cone"), sandDensity: num("s-dens"), soilMass: num("s-soil"), w: num("s-w") }, so = document.getElementById("s-out");
      if (Object.keys(s).some(function (k) { return isNaN(s[k]); })) so.innerHTML = '<div class="feedback bad">Enter all five values.</div>';
      else { var sc = K.sandCone(s); so.innerHTML = '<div class="grid"><div class="stat"><div class="v">' + r(sc.volume, 4) + ' ft³</div><div class="k">Hole volume</div></div><div class="stat"><div class="v">' + r(sc.wet, 1) + ' pcf</div><div class="k">Wet density</div></div><div class="stat"><div class="v">' + r(sc.dry, 1) + ' pcf</div><div class="k">Dry density</div></div></div>'; }
      var g1 = REF.density.compaction.map(function (c) { var rr = K.compaction(c.in); return check(c.label + ": " + c.dry + " pcf, " + c.pct + "%, " + (c.pass ? "pass" : "fail"), Math.abs(rr.dry - c.dry) < 0.01 && Math.abs(rr.pct - c.pct) < 0.01 && rr.pass === c.pass); });
      REF.density.sandCone.forEach(function (c) { var rr = K.sandCone(c.in); g1.push(check(c.label + ": " + c.wet + " pcf wet, " + c.dry + " pcf dry", Math.abs(rr.wet - c.wet) < 0.01 && Math.abs(rr.dry - c.dry) < 0.01)); });
      var g2 = drawn ? [check("Bar length reads back as " + r(drawn.pct, 1) + "% compaction", Math.abs(drawn.read - Math.min(105, Math.max(80, drawn.pct))) < 0.02), check("Requirement line reads back as " + inp.req + "%", Math.abs(drawn.readReq - inp.req) < 0.02)] : [];
      renderChecks(document.getElementById("d-checks"), [{ title: "Reference calculations", source: REF.density.source, items: g1 }, { title: "Drawing measured back", items: g2 }]);
    }
    root.querySelectorAll("input").forEach(function (el) { el.addEventListener("input", run); });
    run();
  }
  function drawBar(host, pct, req) {
    var W = 560, H = 70, l = 20, rr = W - 20, sx = scale(80, 105, l, rr);
    var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Compaction compared with requirement" });
    svg.appendChild(svgEl("rect", { x: l, y: 14, width: rr - l, height: 20, class: "track" }));
    var end = sx(Math.min(105, Math.max(80, pct)));
    var bar = svgEl("rect", { x: l, y: 14, width: r(end - l, 3), height: 20, class: pct >= req ? "barok" : "barbad" }); svg.appendChild(bar);
    svg.appendChild(svgEl("line", { x1: sx(req), x2: sx(req), y1: 8, y2: 40, class: "reqline" }));
    [80, 85, 90, 95, 100, 105].forEach(function (v) { svg.appendChild(svgEl("text", { x: sx(v), y: 56, class: "tick", "text-anchor": "middle" }, v + "%")); });
    host.innerHTML = ""; host.appendChild(svg);
    return { pct: pct, read: sx.inv(l + parseFloat(bar.getAttribute("width"))), readReq: sx.inv(parseFloat(svg.querySelector(".reqline").getAttribute("x1"))) };
  }

  // ===================== TRENCH =====================
  function trenchTool(root) {
    root.innerHTML = '<p>Pick an OSHA soil type and trench dimensions to draw the maximum allowable simple slope to scale (29 CFR 1926 Subpart P, Appendix B). The drawing uses the same scale horizontally and vertically, so the angles on screen are true.</p>' +
      '<div class="tgrid"><label class="tfield" for="t-type"><span>Soil type</span><select id="t-type"><option value="rock">Stable rock</option><option value="A">Type A (qu ≥ 1.5 tsf)</option><option value="B">Type B (0.5 &lt; qu &lt; 1.5 tsf)</option><option value="C" selected>Type C (qu ≤ 0.5 tsf, granular, seeping)</option></select></label>' +
      field("t-d", "Depth", 8, "ft") + field("t-b", "Bottom width", 3, "ft") + "</div>" +
      '<div id="t-out" class="card"></div><figure><div class="chart-wrap" id="t-chart"></div><figcaption>Cross-section to scale. The orange bands mark the 2-ft setback for spoil and equipment.</figcaption></figure><div id="t-notes"></div><div id="t-checks"></div>' +
      '<p class="small muted">Classifying the soil and deciding the protective system is the competent person\'s job in the field. This tool shows the geometry the regulation allows; it is not a substitute for that determination.</p>';
    function run() {
      var type = document.getElementById("t-type").value, d = num("t-d"), b = num("t-b"), o = document.getElementById("t-out");
      if (!(d > 0) || !(b >= 0)) { o.innerHTML = '<div class="feedback bad">Enter a depth greater than 0 and a bottom width of 0 or more.</div>'; return; }
      var res = K.trench(type, d, b), t = K.OSHA[type];
      o.innerHTML = '<div class="grid"><div class="stat"><div class="v">' + t.desc + '</div><div class="k">' + t.label + ' maximum slope</div></div><div class="stat"><div class="v">' + r(res.run, 2) + ' ft</div><div class="k">Horizontal setback each side (' + t.ratio + " × " + d + ' ft)</div></div><div class="stat"><div class="v">' + r(res.top, 2) + ' ft</div><div class="k">Top width</div></div><div class="stat"><div class="v">' + r(res.top + 4, 2) + ' ft</div><div class="k">Width incl. 2-ft setbacks</div></div></div>';
      document.getElementById("t-notes").innerHTML = res.notes.map(function (n) { return '<div class="callout ' + (n.level === "bad" ? "bad" : n.level === "warn" ? "warn" : "") + ' small">' + esc(n.text) + "</div>"; }).join("");
      var drawn = drawTrench(document.getElementById("t-chart"), res, d, b);
      var g1 = REF.trench.cases.map(function (c) { var rr = K.trench(c.type, c.depth, c.bottom); return check(c.label + ": run " + c.run + " ft, top " + c.top + " ft, " + c.angle + "°", Math.abs(rr.run - c.run) < 1e-9 && Math.abs(rr.top - c.top) < 1e-9 && Math.abs(rr.angle - c.angle) < 0.01); });
      var g2 = [check("Drawn slope measures " + r(drawn.ratio, 3) + "H:1V (required " + res.ratio + ":1)", Math.abs(drawn.ratio - res.ratio) < 0.002),
        check("Drawn slope angle measures " + r(drawn.angle, 2) + "° (required " + r(res.angle, 2) + "°)", Math.abs(drawn.angle - res.angle) < 0.05),
        check("Drawn depth and widths read back to " + d + " ft deep, " + r(res.top, 2) + " ft top, " + b + " ft bottom", Math.abs(drawn.depth - d) < 0.01 && Math.abs(drawn.top - res.top) < 0.01 && Math.abs(drawn.bottom - b) < 0.01),
        check("Horizontal and vertical drawing scales are equal", Math.abs(drawn.kx - drawn.ky) < 1e-9)];
      renderChecks(document.getElementById("t-checks"), [{ title: "Reference geometry", source: REF.trench.source, items: g1 }, { title: "Drawing measured back", items: g2 }]);
    }
    ["t-type", "t-d", "t-b"].forEach(function (id) { document.getElementById(id).addEventListener("input", run); document.getElementById(id).addEventListener("change", run); });
    run();
  }
  function drawTrench(host, res, d, b) {
    var W = 560, H = 300, pad = 30, totalW = res.top + 12, totalH = d + 3;
    var k = Math.min((W - 2 * pad) / totalW, (H - 2 * pad) / totalH); // px per ft, same both axes
    var ox = W / 2, gy = pad + 1.5 * k; // ground line
    var X = function (ft) { return ox + ft * k; }, Y = function (ft) { return gy + ft * k; }; // ft below ground positive
    var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Trench cross-section to scale" });
    svg.appendChild(svgEl("rect", { x: 0, y: gy, width: W, height: H - gy, class: "soil" }));
    var cut = [[-res.top / 2, 0], [-b / 2, d], [b / 2, d], [res.top / 2, 0]];
    svg.appendChild(svgEl("polygon", { points: cut.map(function (p) { return r(X(p[0]), 4) + "," + r(Y(p[1]), 4); }).join(" "), class: "cut" }));
    svg.appendChild(svgEl("line", { x1: 0, x2: W, y1: gy, y2: gy, class: "groundline" }));
    [-1, 1].forEach(function (sgn) {
      var x0 = X(sgn * res.top / 2), x1 = X(sgn * (res.top / 2 + 2));
      svg.appendChild(svgEl("rect", { x: Math.min(x0, x1), y: gy - 6, width: Math.abs(x1 - x0), height: 6, class: "setback" }));
    });
    svg.appendChild(svgEl("text", { x: X(0), y: Y(d) - 6, class: "zlabel", "text-anchor": "middle" }, b + " ft"));
    svg.appendChild(svgEl("text", { x: X(0), y: gy - 10, class: "zlabel", "text-anchor": "middle" }, r(res.top, 2) + " ft"));
    svg.appendChild(svgEl("text", { x: X(res.top / 2) + 6, y: Y(d / 2), class: "zlabel" }, r(res.angle, 1) + "°"));
    var dimX = X(-res.top / 2 - 2) - 8;
    svg.appendChild(svgEl("line", { x1: dimX, x2: dimX, y1: Y(0), y2: Y(d), class: "groundline" }));
    [0, d].forEach(function (yy) { svg.appendChild(svgEl("line", { x1: dimX - 5, x2: dimX + 5, y1: Y(yy), y2: Y(yy), class: "groundline" })); });
    svg.appendChild(svgEl("line", { x1: dimX, x2: X(-b / 2), y1: Y(d), y2: Y(d), class: "guide" }));
    svg.appendChild(svgEl("text", { x: dimX - 6, y: Y(d / 2) + 4, class: "zlabel", "text-anchor": "end" }, d + " ft"));
    host.innerHTML = ""; host.appendChild(svg);
    var P = svg.querySelector(".cut").getAttribute("points").split(" ").map(function (s) { return s.split(",").map(Number); });
    var dx = P[3][0] - P[2][0], dy = P[2][1] - P[3][1]; // right wall: from bottom-right to top-right
    return { ratio: dx / dy, angle: dx === 0 ? 90 : Math.atan(dy / dx) * 180 / Math.PI, depth: dy / k, top: (P[3][0] - P[0][0]) / k, bottom: (P[2][0] - P[1][0]) / k, kx: (X(1) - X(0)), ky: (Y(1) - Y(0)) };
  }

  // ===================== THREE-POINT =====================
  function threePointTool(root) {
    var ex = [["MW-1", 0, 0, 856.80], ["MW-2", 400, 0, 854.80], ["MW-3", 120, 350, 856.10]];
    var rows = ex.map(function (w, i) { return "<tr><td>" + w[0] + '</td><td><input id="g-x' + i + '" class="num-input" type="text" inputmode="decimal" value="' + w[1] + '"></td><td><input id="g-y' + i + '" class="num-input" type="text" inputmode="decimal" value="' + w[2] + '"></td><td><input id="g-h' + i + '" class="num-input" type="text" inputmode="decimal" value="' + w[3] + '"></td></tr>'; }).join("");
    root.innerHTML = '<p>Enter the locations and groundwater elevations of three wells screened in the same unit. The tool solves the three-point problem for hydraulic gradient and flow direction (Module 3) and draws the plan view to scale.</p>' +
      '<div class="tbl-wrap"><table class="ptable"><thead><tr><th>Well</th><th>East, x (ft)</th><th>North, y (ft)</th><th>GW elevation (ft)</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<div class="tgrid">' + field("g-k", "Hydraulic conductivity K (optional)", 10, "ft/day") + field("g-n", "Effective porosity nₑ (optional)", 0.25, "") + "</div>" +
      '<p class="small muted">Example values are filled in. Use coordinates from your site plan with x increasing east and y increasing north.</p>' +
      '<div id="g-out" class="card"></div><figure><div class="chart-wrap" id="g-chart"></div><figcaption>Plan view to scale (north up). Thin lines: groundwater contours. Arrow: flow direction, perpendicular to the contours.</figcaption></figure><div id="g-checks"></div>' +
      '<p class="small muted">Assumes a planar water table between the wells and isotropic conditions. Real sites often need more wells.</p>';
    function run() {
      var wells = [0, 1, 2].map(function (i) { return { x: num("g-x" + i), y: num("g-y" + i), h: num("g-h" + i), name: ex[i][0] }; });
      var o = document.getElementById("g-out"), chart = document.getElementById("g-chart");
      if (wells.some(function (w) { return isNaN(w.x) || isNaN(w.y) || isNaN(w.h); })) { o.innerHTML = '<div class="feedback bad">Enter x, y, and elevation for all three wells.</div>'; chart.innerHTML = ""; return; }
      var res = K.threePoint(wells);
      if (res.error) { o.innerHTML = '<div class="feedback bad">' + esc(res.error) + "</div>"; chart.innerHTML = ""; return; }
      var Kc = num("g-k"), ne = num("g-n"), v = Kc * res.gradient / ne;
      o.innerHTML = '<div class="grid"><div class="stat"><div class="v">' + r(res.gradient, 5) + '</div><div class="k">Hydraulic gradient, i</div></div><div class="stat"><div class="v">' + (res.azimuth === null ? "—" : r(res.azimuth, 1) + "° (" + res.compass + ")") + '</div><div class="k">Flow direction (azimuth from north)</div></div>' +
        (isFinite(v) ? '<div class="stat"><div class="v">' + r(v, 3) + ' ft/day</div><div class="k">Seepage velocity Ki/nₑ ≈ ' + r(v * 365, 0) + " ft/yr</div></div>" : "") + "</div>";
      var drawn = drawPlan(chart, wells, res);
      var g1 = REF.threePoint.cases.map(function (c) { var rr = K.threePoint(c.wells); var dA = Math.abs(((rr.azimuth - c.azimuth + 540) % 360) - 180); return check(c.label + ": i = " + c.gradient + ", " + c.azimuth + "°", Math.abs(rr.gradient - c.gradient) < 1e-6 && dA < 0.01); });
      var alt = K.threePointAlt(wells), dAlt = Math.abs(((alt.azimuth - res.azimuth + 540) % 360) - 180);
      g1.push(check("Your wells: graphical method gives i = " + r(alt.gradient, 5) + ", " + r(alt.azimuth, 2) + "°", Math.abs(alt.gradient - res.gradient) < 1e-6 && dAlt < 0.01, "independent second method"));
      g1.push(check("Fitted plane passes exactly through all three wells", wells.every(function (w) { return Math.abs(res.a * w.x + res.b * w.y + res.c - w.h) < 1e-6; })));
      var g2 = [check("Drawn flow arrow measures " + r(drawn.arrowAz, 2) + "° (computed " + r(res.azimuth, 2) + "°)", Math.abs(((drawn.arrowAz - res.azimuth + 540) % 360) - 180) < 0.05),
        check("Drawn contour spacing reads back as gradient " + r(drawn.gradRead, 5), Math.abs(drawn.gradRead - res.gradient) < res.gradient * 0.002 + 1e-9),
        check("Wells plotted at their coordinates (equal x and y scale)", drawn.wellsOk)];
      renderChecks(document.getElementById("g-checks"), [{ title: "Reference problems and cross-check", source: REF.threePoint.source, items: g1 }, { title: "Drawing measured back", items: g2 }]);
    }
    root.querySelectorAll("input").forEach(function (el) { el.addEventListener("input", run); });
    run();
  }
  function drawPlan(host, wells, res) {
    var W = 560, H = 420, pad = 40;
    var xs = wells.map(function (w) { return w.x; }), ys = wells.map(function (w) { return w.y; });
    var xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs), ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys);
    var span = Math.max(xmax - xmin, ymax - ymin) || 1, m = span * 0.2;
    xmin -= m; xmax += m; ymin -= m; ymax += m;
    var k = Math.min((W - 2 * pad) / (xmax - xmin), (H - 2 * pad) / (ymax - ymin));
    var ox = (W - k * (xmax - xmin)) / 2, oy = (H - k * (ymax - ymin)) / 2;
    var X = function (x) { return ox + (x - xmin) * k; }, Y = function (y) { return H - oy - (y - ymin) * k; };
    var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Plan view of wells, contours, and flow direction" });
    svg.appendChild(svgEl("rect", { x: X(xmin), y: Y(ymax), width: (xmax - xmin) * k, height: (ymax - ymin) * k, class: "frame" }));
    // contours h = a x + b y + c at a nice interval, clipped to the frame
    var corners = [[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax]].map(function (p) { return res.a * p[0] + res.b * p[1] + res.c; });
    var hmin = Math.min.apply(null, corners), hmax = Math.max.apply(null, corners), step = niceStep(hmax - hmin || 1, 8), lines = [];
    if (res.gradient > 0) for (var h = Math.ceil(hmin / step) * step; h <= hmax; h += step) {
      var seg = clipLine(res.a, res.b, res.c - h, xmin, xmax, ymin, ymax);
      if (!seg) continue;
      lines.push({ h: h, seg: seg });
      svg.appendChild(svgEl("line", { x1: X(seg[0][0]), y1: Y(seg[0][1]), x2: X(seg[1][0]), y2: Y(seg[1][1]), class: "contour" }));
      var mx = (seg[0][0] + seg[1][0]) / 2, my = (seg[0][1] + seg[1][1]) / 2;
      svg.appendChild(svgEl("text", { x: X(mx) + 3, y: Y(my) - 3, class: "tick" }, r(h, 2)));
    }
    // flow arrow from the centroid along -grad h
    var cx = (xs[0] + xs[1] + xs[2]) / 3, cy = (ys[0] + ys[1] + ys[2]) / 3, len = span * 0.35;
    var ux = -res.a / res.gradient, uy = -res.b / res.gradient;
    var defs = svgEl("defs", {}), mk = svgEl("marker", { id: "ah", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" });
    mk.appendChild(svgEl("path", { d: "M0,0 L10,5 L0,10 z", class: "arrowhead" })); defs.appendChild(mk); svg.appendChild(defs);
    var arrow = svgEl("line", { x1: X(cx), y1: Y(cy), x2: X(cx + ux * len), y2: Y(cy + uy * len), class: "flow", "marker-end": "url(#ah)" });
    if (res.gradient > 0) svg.appendChild(arrow);
    var wellsOk = true;
    wells.forEach(function (w) {
      var c = svgEl("circle", { cx: X(w.x), cy: Y(w.y), r: 6, class: "pt" }); svg.appendChild(c);
      svg.appendChild(svgEl("text", { x: X(w.x) + 9, y: Y(w.y) + 16, class: "zlabel" }, w.name + " (" + w.h + ")"));
      var bx = xmin + (parseFloat(c.getAttribute("cx")) - ox) / k, by = ymin + (H - oy - parseFloat(c.getAttribute("cy"))) / k;
      if (Math.abs(bx - w.x) > 1e-6 || Math.abs(by - w.y) > 1e-6) wellsOk = false;
    });
    // north arrow
    svg.appendChild(svgEl("text", { x: W - 22, y: 22, class: "axlabel", "text-anchor": "middle" }, "N"));
    svg.appendChild(svgEl("line", { x1: W - 22, y1: 50, x2: W - 22, y2: 28, class: "flow thin", "marker-end": "url(#ah)" }));
    host.innerHTML = ""; host.appendChild(svg);
    // read back the drawn arrow and contour spacing
    var ax1 = +arrow.getAttribute("x1"), ay1 = +arrow.getAttribute("y1"), ax2 = +arrow.getAttribute("x2"), ay2 = +arrow.getAttribute("y2");
    var arrowAz = (Math.atan2(ax2 - ax1, -(ay2 - ay1)) * 180 / Math.PI + 360) % 360;
    var gradRead = NaN;
    var drawnLines = svg.querySelectorAll(".contour");
    if (drawnLines.length >= 2) {
      var L0 = drawnLines[0], L1 = drawnLines[1];
      var p = [+L0.getAttribute("x1"), +L0.getAttribute("y1")], q = [+L0.getAttribute("x2"), +L0.getAttribute("y2")], s0 = [+L1.getAttribute("x1"), +L1.getAttribute("y1")];
      var nx = -(q[1] - p[1]), ny = q[0] - p[0], nl = Math.hypot(nx, ny);
      var distFt = Math.abs((s0[0] - p[0]) * nx + (s0[1] - p[1]) * ny) / nl / k;
      gradRead = (lines[1].h - lines[0].h) / distFt;
    }
    return { arrowAz: arrowAz, gradRead: gradRead, wellsOk: wellsOk };
  }
  // Intersect the line a x + b y + c = 0 with a rectangle; returns two points or null.
  function clipLine(a, b, c, x0, x1, y0, y1) {
    var pts = [];
    if (Math.abs(b) > 1e-15) [x0, x1].forEach(function (x) { var y = -(a * x + c) / b; if (y >= y0 - 1e-9 && y <= y1 + 1e-9) pts.push([x, y]); });
    if (Math.abs(a) > 1e-15) [y0, y1].forEach(function (y) { var x = -(b * y + c) / a; if (x >= x0 - 1e-9 && x <= x1 + 1e-9) pts.push([x, y]); });
    var uniq = [];
    pts.forEach(function (p) { if (!uniq.some(function (u) { return Math.abs(u[0] - p[0]) < 1e-9 && Math.abs(u[1] - p[1]) < 1e-9; })) uniq.push(p); });
    return uniq.length >= 2 ? [uniq[0], uniq[1]] : null;
  }

  window.WCA_TOOLS = {
    list: [
      { id: "uscs", title: "USCS Soil Classifier", blurb: "Classify a soil from gradation and Atterberg limits and see it on the plasticity chart.", modules: ["m12", "m13"], run: uscsTool },
      { id: "proctor", title: "Proctor Curve Builder", blurb: "Plot trial points, fit the moisture–density curve, and find MDD and optimum moisture.", modules: ["m12", "m15"], run: proctorTool },
      { id: "density", title: "Field Density Calculator", blurb: "Percent compaction from nuclear gauge readings, and sand cone density.", modules: ["m15"], run: densityTool },
      { id: "trench", title: "Trench Slope Visualizer", blurb: "Draw OSHA maximum allowable slopes to scale for each soil type.", modules: ["m02", "m14"], run: trenchTool },
      { id: "threepoint", title: "Groundwater Flow Solver", blurb: "Three-point problem: hydraulic gradient, flow direction, and seepage velocity.", modules: ["m03", "m09"], run: threePointTool }
    ],
    get: function (id) { return this.list.filter(function (t) { return t.id === id; })[0]; }
  };
})();
