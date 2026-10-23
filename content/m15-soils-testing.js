COURSE.addModule({
  id: "m15",
  track: "t4",
  title: "Field and Laboratory Testing of Soils and Aggregates",
  hours: 5,
  summary: "The daily work of a construction materials technician on earthwork: Proctor tests, nuclear gauge and sand cone density testing, percent compaction, test frequency and failing-test procedures, aggregate properties and tests, WisDOT aggregate materials, and the certifications technicians hold.",
  objectives: [
    "Explain standard and modified Proctor tests and interpret a moisture–density curve.",
    "Perform (conceptually) nuclear gauge and sand cone density tests and calculate percent compaction.",
    "Apply testing frequency, reporting, and failing-test procedures correctly.",
    "Describe aggregate properties and tests (gradation, abrasion, soundness, fractured faces) and common WisDOT aggregate materials.",
    "Identify other field tests (DCP, LWD, plate load) and Wisconsin technician certifications."
  ],
  lessons: [
    {
      title: "Compaction and the Proctor test",
      html: `
<p><strong>Compaction</strong> densifies soil by removing air, increasing strength and stiffness and reducing settlement and permeability. To know whether field compaction is adequate, we compare field dry density to a laboratory <strong>maximum dry density</strong>.</p>
<h3>Standard vs. modified Proctor</h3>
<div class="tbl-wrap"><table>
<tr><th></th><th>Standard (ASTM D698 / AASHTO T 99)</th><th>Modified (ASTM D1557 / AASHTO T 180)</th></tr>
<tr><td>Rammer weight</td><td>5.5 lb</td><td>10 lb</td></tr>
<tr><td>Drop height</td><td>12 in</td><td>18 in</td></tr>
<tr><td>Layers</td><td>3</td><td>5</td></tr>
<tr><td>Blows per layer (4-in mold)</td><td>25</td><td>25</td></tr>
<tr><td>Compactive effort</td><td>≈ 12,400 ft-lbf/ft³</td><td>≈ 56,000 ft-lbf/ft³</td></tr>
</table></div>
<p>Each standard has methods (A, B, C) based on the amount of gravel-size particles; Method C uses a 6-inch mold with 56 blows per layer for soils with more coarse gravel. Particles larger than the method allows are removed, and an <strong>oversize (rock) correction</strong> (ASTM D4718) adjusts the maximum density when field material contains them.</p>
<h3>The moisture–density curve</h3>
<p>The test compacts specimens at several moisture contents and plots dry density versus moisture. The curve rises to a peak and falls:</p>
<ul>
<li><strong>Maximum dry density (MDD)</strong> — the peak, in pcf.</li>
<li><strong>Optimum moisture content (OMC)</strong> — the moisture at the peak.</li>
<li>Dry of optimum, water lubricates particles and density increases with added water; wet of optimum, water takes up space that solids could occupy, so density decreases.</li>
<li>The <strong>zero air voids (ZAV) curve</strong> (100% saturation) is a theoretical upper bound; real data must plot below it — a quick check on lab work.</li>
<li><strong>Higher compactive effort</strong> (modified Proctor) gives a higher MDD at a lower OMC.</li>
</ul>
<span class="formula">Zero air voids:  γ_zav = Gs · γw / (1 + w · Gs)</span>
<p>Typical values: clean granular fill MDD 120–140 pcf with OMC 6–10%; lean clay MDD 105–118 pcf with OMC 13–20%. Each distinct soil type on a project needs its own Proctor; using the wrong one is the most common CMT error.</p>
<div class="mnemonic">Standard = "<strong>5½ - 12 - 3 - 25</strong>". Modified = "<strong>10 - 18 - 5 - 25</strong>". Modified hits harder, so it gives a <strong>higher</strong> peak at <strong>lower</strong> moisture.</div>
`,
      check: [
        { type: "mc", q: "The modified Proctor test uses a:", options: ["5.5-lb rammer, 12-in drop, 3 layers", "10-lb rammer, 18-in drop, 5 layers", "10-lb rammer, 12-in drop, 3 layers", "140-lb hammer, 30-in drop"], answer: 1, explain: "Modified: 10 lb, 18 in, 5 layers." },
        { type: "mc", q: "Compared to standard Proctor results for the same soil, modified Proctor gives:", options: ["Lower MDD, higher OMC", "Higher MDD, lower OMC", "Same MDD and OMC", "Higher MDD, higher OMC"], answer: 1, explain: "More energy → denser at less water." }
      ]
    },
    {
      title: "Field density: nuclear gauge and sand cone",
      html: `
<h3>Nuclear moisture-density gauge (ASTM D6938)</h3>
<p>The gauge contains a <strong>gamma source</strong> (cesium-137) for density and a <strong>neutron source</strong> (americium-241:beryllium) for moisture (Module 2 covers safety and licensing).</p>
<ul>
<li><strong>Direct transmission</strong> — the source rod is lowered into a hole made with a drill rod and guide plate to a set depth (commonly in 2-inch increments up to about 8–12 inches). Gamma rays travel from the source to detectors in the gauge base. Used for soils and aggregate base. The test depth should match the lift being tested.</li>
<li><strong>Backscatter</strong> — the source stays at the surface; used for thin layers such as asphalt.</li>
</ul>
<p>Procedure essentials:</p>
<ol>
<li>Take the daily <strong>standard count</strong> on the reference block and confirm it is within limits — this verifies the gauge is working.</li>
<li>Prepare a smooth, level test site on the compacted surface (remove loose material; fill minor voids with fines).</li>
<li>Drive the pin to make the hole, seat the gauge, lower the source rod, and take a count (typically one minute).</li>
<li>Read <strong>wet density</strong> and <strong>moisture</strong>; the gauge computes <strong>dry density</strong> and, with the entered Proctor value, <strong>percent compaction</strong>.</li>
<li>Return the source to the safe (shielded) position immediately.</li>
</ol>
<p><strong>Moisture corrections</strong>: the neutron moisture reading responds to all hydrogen, so soils with organic matter, certain minerals, or hydrocarbons can read falsely high. Specs and D6938 call for verifying gauge moisture against oven-dried samples (ASTM D2216) and applying a correction (offset) when needed. Density offsets may also be needed for unusual materials.</p>
<h3>Percent compaction</h3>
<span class="formula">Dry density = Wet density / (1 + w)
Percent compaction = Field dry density / Maximum dry density × 100</span>
<div class="callout"><strong>Example</strong>Wet density 128.5 pcf; moisture 9.2%; Proctor MDD 122.0 pcf (standard).<br>Dry density = 128.5 / 1.092 = 117.7 pcf<br>Compaction = 117.7 / 122.0 × 100 = 96.5% → passes a 95% requirement.</div>
<h3>Sand cone (ASTM D1556)</h3>
<p>A non-nuclear method and the classic check on gauge results:</p>
<ol>
<li>Dig a small hole through a base plate and save <em>all</em> the soil (weigh it; determine its moisture content).</li>
<li>Fill the hole with calibrated sand of known density from the cone apparatus.</li>
<li>Volume of hole = mass of sand used (minus the amount in the cone and plate) ÷ sand density.</li>
<li>Field density = mass of soil removed ÷ volume of hole.</li>
</ol>
<p>Slower and sensitive to vibration and technique, but direct and requires no radioactive source.</p>
<h3>Moisture tests in the field</h3>
<p>Field moisture can also be checked by oven drying (D2216), field stoves or microwave methods (ASTM D4643), and the calcium carbide pressure method ("Speedy," ASTM D4944).</p>
`,
      check: [
        { type: "num", q: "Wet density 132.0 pcf, moisture 10.0%, MDD 125.0 pcf. What is the percent compaction? Round to one decimal.", answer: 96, tol: 0.1, unit: "%", explain: "Dry = 132.0/1.10 = 120.0 pcf; 120.0/125.0 = 96.0%." },
        { type: "mc", q: "Which nuclear gauge mode is used for thin asphalt layers?", options: ["Direct transmission", "Backscatter", "Standard count", "Moisture only"], answer: 1, explain: "Backscatter keeps the source at the surface." },
        { type: "mc", q: "The daily standard count on the reference block verifies:", options: ["The Proctor value", "That the gauge is functioning within limits", "Soil moisture", "Lift thickness"], answer: 1, explain: "Standard counts confirm gauge stability." }
      ]
    },
    {
      title: "Test frequency, failing tests, and reporting",
      html: `
<h3>Where the requirements come from</h3>
<p>The <strong>project specifications</strong> (often Division 31, Earthwork) and the <strong>geotechnical report</strong> set compaction percentages, moisture ranges, lift thickness, and testing frequency. WisDOT projects follow the Standard Specifications and the Construction and Materials Manual (CMM). If a project has no specified frequency, follow your firm's standard and document it.</p>
<p>Frequency examples you might see (always check the project): one test per lift per several thousand square feet of building pad; one test per lift per 100–200 linear feet of utility trench; tests at each footing or column pad; additional tests where material or compaction method changes.</p>
<h3>Choosing test locations</h3>
<ul>
<li>Spread tests across the area and through the lifts; don't test only where it looks good.</li>
<li>Test areas that look suspect: edges, around structures and manholes, areas compacted by small equipment, wet spots.</li>
<li>Record locations precisely (gridlines, stationing and offset, distance from fixed features) and the elevation or depth below finished grade.</li>
</ul>
<h3>When a test fails</h3>
<ol>
<li><strong>Verify</strong> — right Proctor for this material? Gauge seated properly? Correct depth? Moisture offset needed? Is the material different from what the Proctor represents (perform a one-point Proctor check or collect a new sample)?</li>
<li><strong>Notify</strong> the contractor's superintendent or foreman right away, and your PM per protocol. State the result and the requirement — not how to fix it.</li>
<li><strong>Document</strong> the failing test in the report. It stays on the record.</li>
<li><strong>Retest</strong> the same location after corrective work (recompaction, moisture conditioning, removal) and report the retest, referencing the original test number.</li>
</ol>
<div class="callout bad"><strong>Never</strong>Don't "move over a few feet" to find a passing number and discard the failure. Don't skip testing a lift because the contractor is in a hurry. Both are integrity failures.</div>
<h3>Common sources of error</h3>
<ul>
<li>Wrong or outdated Proctor; soil changed (e.g., clay mixed into sand fill).</li>
<li>Testing loose surface material or not removing the disturbed top.</li>
<li>Lifts thicker than allowed, so the test zone isn't representative of the full lift.</li>
<li>Frozen material, or oversized rock affecting the reading.</li>
<li>Not applying a needed moisture correction.</li>
</ul>
<h3>The field density report</h3>
<p>Each test record includes: test number; date; location; elevation or depth below finished grade; lift; material description; Proctor reference (lab number, MDD, OMC); wet density; moisture; dry density; percent compaction; required compaction; pass/fail; retest reference; gauge serial number and standard counts; technician name. Daily field reports summarize what was observed, tested, and communicated.</p>
`,
      check: [
        { type: "mc", q: "After a failing compaction test, the technician should:", options: ["Retest nearby until it passes and report only that", "Notify the contractor and PM, document the failure, and retest after corrective work", "Tell the contractor which roller to use", "Change the Proctor value"], answer: 1, explain: "Notify, document, and retest the same location after rework." },
        { type: "tf", q: "Testing frequency and compaction requirements come primarily from the project specifications and geotechnical report.", answer: true, explain: "The project documents govern." }
      ]
    },
    {
      title: "Aggregates: properties, tests, and Wisconsin materials",
      html: `
<h3>Sampling and reducing</h3>
<ul>
<li><strong>Sampling</strong> (ASTM D75 / AASHTO T 2) — obtain representative samples from belts, stockpiles (from multiple locations, avoiding segregated outer layers), or in place.</li>
<li><strong>Reducing</strong> to test size (ASTM C702 / AASHTO T 248) — mechanical splitter or quartering.</li>
</ul>
<h3>Key aggregate tests</h3>
<div class="tbl-wrap"><table>
<tr><th>Property</th><th>Test</th><th>Why it matters</th></tr>
<tr><td>Gradation</td><td>Sieve analysis, ASTM C136 / AASHTO T 27; material finer than No. 200 by washing, C117 / T 11</td><td>Density, stability, drainage; fines content controls frost susceptibility and permeability</td></tr>
<tr><td>Abrasion / degradation</td><td>Los Angeles abrasion, ASTM C131 / AASHTO T 96</td><td>Resistance to breakdown under traffic and handling</td></tr>
<tr><td>Soundness</td><td>Sodium or magnesium sulfate soundness, ASTM C88 / AASHTO T 104</td><td>Resistance to freeze–thaw weathering — critical in Wisconsin</td></tr>
<tr><td>Fractured faces</td><td>ASTM D5821</td><td>Crushed, angular particles interlock for stability</td></tr>
<tr><td>Flat and elongated particles</td><td>ASTM D4791</td><td>Shape affects compaction and breakage</td></tr>
<tr><td>Specific gravity and absorption</td><td>ASTM C127 (coarse) / C128 (fine)</td><td>Mix design calculations for concrete and asphalt</td></tr>
<tr><td>Deleterious materials</td><td>Various (e.g., clay lumps and friable particles, C142)</td><td>Weak or reactive particles reduce durability</td></tr>
</table></div>
<h3>Gradation terms</h3>
<ul>
<li><strong>Dense-graded</strong> — well-graded with fines; compacts to high density; used for base course.</li>
<li><strong>Open-graded</strong> — few fines; drains freely; used for drainage layers.</li>
<li><strong>Clear stone</strong> / single-size stone (e.g., ASTM No. 57) — drainage and bedding.</li>
</ul>
<h3>Common WisDOT aggregate materials</h3>
<p>Wisconsin specifications for private and municipal work frequently reference WisDOT Standard Specification sections:</p>
<div class="tbl-wrap"><table>
<tr><th>WisDOT Standard Spec section</th><th>Material</th><th>Typical use</th></tr>
<tr><td>305</td><td>Dense graded base (e.g., 3-inch, 1¼-inch, ¾-inch)</td><td>Pavement base and building pad base; 1¼-inch is very common</td></tr>
<tr><td>310</td><td>Open graded base</td><td>Drainable base layers</td></tr>
<tr><td>311</td><td>Breaker run</td><td>Large crushed stone for stabilizing soft subgrade</td></tr>
<tr><td>312</td><td>Select crushed material</td><td>Subgrade improvement and working platforms</td></tr>
<tr><td>209</td><td>Granular backfill (Grade 1 and Grade 2)</td><td>Backfill, embankment, undercut replacement</td></tr>
<tr><td>210</td><td>Structure backfill</td><td>Backfill around structures such as walls and culverts</td></tr>
</table></div>
<p>Recycled materials such as reclaimed asphalt pavement (RAP) and recycled concrete aggregate may be permitted within specification limits. Always confirm the exact section and edition the project references.</p>
`,
      check: [
        { type: "mc", q: "Which test measures an aggregate's resistance to freeze–thaw type weathering?", options: ["LA abrasion", "Sulfate soundness", "Fractured faces", "Specific gravity"], answer: 1, explain: "Sodium/magnesium sulfate soundness simulates weathering." },
        { type: "mc", q: "In WisDOT specifications, breaker run is in section:", options: ["209", "305", "311", "312"], answer: 2, explain: "311 Breaker Run; 312 Select Crushed Material; 305 Dense Graded Base; 209 Granular Backfill." }
      ]
    },
    {
      title: "Other field tests and technician certifications",
      html: `
<h3>Strength and stiffness tests in the field</h3>
<ul>
<li><strong>Dynamic cone penetrometer (DCP, ASTM D6951)</strong> — penetration per blow; used for subgrade evaluation and footing bearing checks. Many firms correlate DCP results to allowable bearing pressure or CBR.</li>
<li><strong>Light weight deflectometer (LWD)</strong> — a falling weight on a plate measures deflection to estimate stiffness modulus (ASTM E2583/E2835); increasingly used for subgrade and base acceptance.</li>
<li><strong>Plate load test</strong> — a loaded plate measures settlement to estimate bearing or the modulus of subgrade reaction (k) for slabs.</li>
<li><strong>Field CBR</strong> — in-place California Bearing Ratio.</li>
<li><strong>Proof roll observation</strong> — visual, but documented: equipment, load, areas, rut depths, and findings.</li>
</ul>
<h3>Where CMT technicians test soils</h3>
<ul>
<li>Building pads and footing subgrades</li>
<li>Utility trench backfill (often in lifts around pipes, with special attention to haunches)</li>
<li>Pavement subgrade and aggregate base</li>
<li>Wall backfill (with lighter equipment near walls to avoid overstressing them)</li>
<li>Embankments and berms</li>
</ul>
<h3>Wisconsin technician certifications</h3>
<p>Many projects — and all WisDOT work — require testing by certified personnel:</p>
<ul>
<li><strong>WisDOT Highway Technician Certification Program (HTCP)</strong> — administered with the University of Wisconsin–Platteville; certifications cover areas such as aggregate testing, nuclear density testing, Portland cement concrete, and hot mix asphalt. Required for quality control and quality verification testing on WisDOT projects.</li>
<li><strong>ACI Concrete Field Testing Technician – Grade I</strong> — widely required for concrete testing (Module 16).</li>
<li><strong>Nuclear gauge safety training</strong> — required by the radioactive materials license before operating a gauge; plus DOT hazmat awareness for transporting it.</li>
<li><strong>NICET</strong> certification (National Institute for Certification in Engineering Technologies) — in construction materials testing, for career progression.</li>
<li>Laboratories may hold <strong>AASHTO re:source</strong> accreditation and WisDOT laboratory qualification.</li>
</ul>
<div class="callout"><strong>Fluency vs. competence</strong>This course gives you the vocabulary. Field competence comes from supervised practice and the certification courses above, which include hands-on performance exams.</div>
`,
      check: [
        { type: "mc", q: "Which device measures deflection under a falling weight to estimate subgrade stiffness?", options: ["Nuclear gauge", "Light weight deflectometer", "Sand cone", "Speedy moisture tester"], answer: 1, explain: "The LWD estimates stiffness modulus from deflection." },
        { type: "mc", q: "Which program certifies technicians for testing on WisDOT projects?", options: ["NICET only", "HTCP", "OSHA 30", "NCEES"], answer: 1, explain: "The Highway Technician Certification Program." }
      ]
    }
  ],
  terms: [
    { term: "Compaction", def: "Densification of soil by removing air, increasing strength and reducing settlement." },
    { term: "Standard Proctor (ASTM D698 / AASHTO T 99)", def: "Compaction test: 5.5-lb rammer, 12-in drop, 3 layers, 25 blows (4-in mold); ~12,400 ft-lbf/ft³." },
    { term: "Modified Proctor (ASTM D1557 / AASHTO T 180)", def: "Compaction test: 10-lb rammer, 18-in drop, 5 layers, 25 blows (4-in mold); ~56,000 ft-lbf/ft³." },
    { term: "Maximum dry density (MDD)", def: "Peak dry density on the Proctor moisture–density curve." },
    { term: "Optimum moisture content (OMC)", def: "Moisture content at which maximum dry density is achieved." },
    { term: "Zero air voids curve", def: "Theoretical dry density at 100% saturation; Proctor data must plot below it." },
    { term: "Oversize correction (ASTM D4718)", def: "Adjustment of Proctor values for oversize particles present in field material." },
    { term: "One-point Proctor", def: "Single-point compaction check used with a family of curves to verify or estimate MDD for a material." },
    { term: "Nuclear gauge (ASTM D6938)", def: "Device measuring in-place wet density (gamma) and moisture (neutron) of soil and aggregate." },
    { term: "Direct transmission", def: "Nuclear gauge mode with the source rod lowered into the material." },
    { term: "Backscatter", def: "Nuclear gauge mode with the source at the surface; used for thin layers." },
    { term: "Standard count", def: "Daily reference reading on the gauge's block confirming proper function." },
    { term: "Moisture correction (offset)", def: "Adjustment to nuclear moisture readings based on oven-dry comparisons for hydrogen-bearing materials." },
    { term: "Percent compaction", def: "Field dry density ÷ maximum dry density × 100." },
    { term: "Sand cone (ASTM D1556)", def: "Field density test measuring hole volume with calibrated sand." },
    { term: "Speedy moisture tester (ASTM D4944)", def: "Calcium carbide gas pressure method for field moisture content." },
    { term: "Retest", def: "A new test at the location of a failing test after corrective work, referencing the original." },
    { term: "Division 31", def: "CSI MasterFormat division for earthwork specifications." },
    { term: "ASTM C136 / AASHTO T 27", def: "Sieve analysis of aggregates." },
    { term: "ASTM C117 / AASHTO T 11", def: "Material finer than No. 200 sieve by washing." },
    { term: "LA abrasion (ASTM C131)", def: "Los Angeles abrasion test of aggregate resistance to degradation." },
    { term: "Sulfate soundness (ASTM C88)", def: "Test of aggregate resistance to weathering using sodium or magnesium sulfate." },
    { term: "Fractured faces (ASTM D5821)", def: "Percentage of particles with fractured (crushed) faces." },
    { term: "Dense-graded aggregate", def: "Well-graded aggregate with fines that compacts to high density." },
    { term: "Open-graded aggregate", def: "Aggregate with few fines that drains freely." },
    { term: "WisDOT 305 dense graded base", def: "Common Wisconsin base course material (e.g., 1¼-inch)." },
    { term: "WisDOT 311 breaker run", def: "Large crushed stone for soft subgrade stabilization." },
    { term: "WisDOT 312 select crushed material", def: "Crushed material for subgrade improvement and working platforms." },
    { term: "WisDOT 209 granular backfill", def: "Grade 1 / Grade 2 granular backfill material." },
    { term: "Light weight deflectometer (LWD)", def: "Portable falling-weight device estimating stiffness modulus from deflection." },
    { term: "Plate load test", def: "Loaded plate test measuring settlement to estimate bearing or modulus of subgrade reaction." },
    { term: "HTCP", def: "WisDOT Highway Technician Certification Program, administered with UW–Platteville." },
    { term: "NICET", def: "National Institute for Certification in Engineering Technologies." }
  ],
  resources: [
    { title: "WisDOT Standard Specifications for Highway and Structure Construction", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/stndspec.aspx", note: "Sections 209, 305, 310, 311, 312 and testing requirements" },
    { title: "WisDOT Construction and Materials Manual (CMM)", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/cmm.aspx", note: "Sampling and testing procedures and frequencies" },
    { title: "WisDOT Highway Technician Certification Program (HTCP)", url: "https://www.uwplatt.edu/htcp", note: "Wisconsin technician certification courses" },
    { title: "ASTM D6938 — Nuclear methods for in-place density and water content", url: "https://www.astm.org/", note: "Search D6938" },
    { title: "NRC — Portable Gauges", url: "https://www.nrc.gov/materials/miau/portable-gauges.html", note: "Gauge security and safety" },
    { title: "FHWA — Geotechnical publications (compaction, subgrade)", url: "https://www.fhwa.dot.gov/engineering/geotech/", note: "Reference manuals" }
  ],
  teach: [
    { prompt: "Walk through how you would perform a nuclear density test on a lift of granular fill and decide whether it passes 95% of standard Proctor. Include the checks you'd make before calling a failure.",
      model: "<p>Take and record the daily standard count. Confirm which Proctor applies to this material (MDD/OMC) and that the material looks like the Proctor sample. Prepare a smooth, level site, drive the pin to the lift depth through the guide plate, seat the gauge, lower the source rod to the test depth, take a one-minute count, read wet density and moisture, and return the source to safe position. Compute dry density = wet/(1+w) and percent compaction = dry/MDD × 100; compare to 95%. Before calling a failure: verify the Proctor matches the material (one-point check if needed), the gauge was seated and the depth correct, any moisture offset is applied, the lift isn't thicker than the test depth, and the material isn't frozen or full of oversize rock. If it still fails, notify the superintendent and PM, document it, and retest the same spot after rework.</p>" },
    { prompt: "Explain to a new technician why using the wrong Proctor value is so damaging, with a numerical example.",
      model: "<p>Percent compaction is the field dry density divided by MDD, so the result is only as good as the MDD. Example: field dry density 116 pcf. If the correct Proctor for the clayey fill is 112 pcf, compaction is 103.6% (passes). If the technician mistakenly uses the sand Proctor of 128 pcf, it reads 90.6% (fails) — causing unnecessary rework. The reverse is worse: testing dense sand (true MDD 128) against a clay Proctor of 112 could show 'passing' compaction on poorly compacted fill, leading to settlement. Each distinct material needs its own Proctor, and changes in material should trigger a check.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "The standard Proctor rammer weighs:", options: ["5.5 lb", "10 lb", "140 lb", "2.5 lb"], answer: 0, explain: "5.5 lb, 12-in drop." },
      { type: "mc", q: "The modified Proctor drop height is:", options: ["12 in", "18 in", "24 in", "30 in"], answer: 1, explain: "18 inches." },
      { type: "mc", q: "On a Proctor curve, the moisture at the peak dry density is the:", options: ["Liquid limit", "Optimum moisture content", "Plastic limit", "Saturation point"], answer: 1, explain: "OMC." },
      { type: "mc", q: "Proctor test points plotting above the zero air voids curve indicate:", options: ["Excellent compaction", "An error in testing or calculation", "High clay content", "Low moisture"], answer: 1, explain: "Nothing can exceed 100% saturation density." },
      { type: "num", q: "Gs = 2.70, w = 12%. Zero air voids dry density (pcf)? γ_zav = Gs·γw/(1 + w·Gs), γw = 62.4. One decimal.", answer: 127.3, tol: 0.2, unit: "pcf", explain: "2.70 × 62.4 = 168.48; 1 + 0.12 × 2.70 = 1.324; 168.48 / 1.324 = 127.3 pcf." },
      { type: "mc", q: "In a nuclear gauge, moisture is measured using:", options: ["Gamma radiation from cesium-137", "Neutrons from americium-241:beryllium", "Infrared", "Electrical resistance"], answer: 1, explain: "Neutron source/thermal neutron detection." },
      { type: "mc", q: "Why might a nuclear gauge read moisture too high in organic soil?", options: ["Organic soil is radioactive", "The neutron method responds to all hydrogen, not just water", "The gauge is cold", "Backscatter mode"], answer: 1, explain: "Hydrogen in organics inflates moisture readings; verify with oven tests." },
      { type: "num", q: "Wet density 125.0 pcf, moisture 15.0%, MDD 110.0 pcf. Percent compaction? One decimal.", answer: 98.8, tol: 0.1, unit: "%", explain: "Dry = 125.0/1.15 = 108.7; 108.7/110.0 = 98.8%." },
      { type: "num", q: "Dry density 112.0 pcf, MDD 120.0 pcf. Percent compaction? One decimal.", answer: 93.3, tol: 0.1, unit: "%", explain: "112/120 = 93.3% — fails a 95% spec." },
      { type: "num", q: "Spec requires 95% of MDD = 128.0 pcf. What is the minimum passing field dry density (pcf)? One decimal.", answer: 121.6, tol: 0.05, unit: "pcf", explain: "0.95 × 128.0 = 121.6 pcf." },
      { type: "mc", q: "In the sand cone test, the volume of the hole is determined from:", options: ["The nuclear gauge", "The mass of calibrated sand used and its known density", "Measuring with a ruler", "The Proctor mold"], answer: 1, explain: "Volume = mass of sand in hole / sand density." },
      { type: "mc", q: "The calcium carbide ('Speedy') method measures:", options: ["Density", "Moisture content", "Gradation", "Strength"], answer: 1, explain: "ASTM D4944 moisture." },
      { type: "mc", q: "A contractor asks the technician to test only the center of the pad where the big roller worked. The technician should:", options: ["Comply", "Distribute tests across the area, including edges and suspect areas, per the spec", "Refuse to test at all", "Average results"], answer: 1, explain: "Tests must be representative." },
      { type: "mc", q: "Which is NOT an appropriate response to a failing compaction test?", options: ["Check the Proctor reference", "Notify the superintendent", "Move a few feet away and report only a passing result", "Retest after corrective work"], answer: 2, explain: "Discarding failures is an integrity violation." },
      { type: "mc", q: "The field density report should reference the Proctor by:", options: ["The contractor's name", "Lab number with MDD and OMC", "The weather", "The gauge serial number only"], answer: 1, explain: "Traceability to the correct Proctor is essential." },
      { type: "mc", q: "Which test evaluates aggregate degradation under impact and abrasion?", options: ["LA abrasion (C131)", "C88 soundness", "D5821 fractured faces", "C127 specific gravity"], answer: 0, explain: "Los Angeles abrasion." },
      { type: "mc", q: "Percent finer than No. 200 by washing is determined by:", options: ["ASTM C117 / AASHTO T 11", "ASTM C39", "ASTM D1586", "ASTM C143"], answer: 0, explain: "C117/T 11." },
      { type: "mc", q: "Which aggregate type drains freely because it has few fines?", options: ["Dense-graded", "Open-graded", "Well-graded base", "Clay gravel"], answer: 1, explain: "Open-graded aggregates drain." },
      { type: "mc", q: "WisDOT 305 refers to:", options: ["Granular backfill", "Dense graded base", "Breaker run", "Concrete"], answer: 1, explain: "Section 305 Dense Graded Base." },
      { type: "mc", q: "To reduce a field aggregate sample to test size, use:", options: ["A shovel scoop from the top", "A mechanical splitter or quartering (C702)", "Sieving first", "Discarding fines"], answer: 1, explain: "Splitting or quartering keeps it representative." },
      { type: "mc", q: "Which field device is commonly used for footing bearing verification?", options: ["DCP", "Slump cone", "Rice test", "Air meter"], answer: 0, explain: "Dynamic cone penetrometer." },
      { type: "mc", q: "Before operating a nuclear gauge, a technician must have:", options: ["A PE license", "Gauge safety training required by the license (and hazmat awareness for transport)", "An HTCP HMA certification only", "Nothing"], answer: 1, explain: "Licensed sources require trained users." }
    ]
  }
});
