COURSE.addModule({
  id: "m04",
  track: "t1",
  title: "Units, Maps, Plans, and Field Measurements",
  hours: 4,
  summary: "The quantitative language shared by all four disciplines: unit conversions and concentration units, topographic maps and Wisconsin's survey systems, how construction plans are organized and read, basic surveying, and the data conventions used in reports.",
  objectives: [
    "Convert between common engineering and environmental units, including pressure (psf, tsf, psi, kPa) and concentration (ppm, ppb, mg/kg, µg/L).",
    "Read a topographic map and a Public Land Survey System legal description, and distinguish horizontal and vertical datums.",
    "Navigate a civil plan set: sheet types, scales, stationing, offsets, and common abbreviations.",
    "Compute elevations by differential leveling and interpret construction stakes.",
    "Apply basic data conventions: significant figures, detection limits, and relative percent difference."
  ],
  lessons: [
    {
      title: "Units and conversions you will use every day",
      html: `
<p>U.S. consulting work mixes U.S. customary and SI units — sometimes in the same report. Laboratory concentrations are metric; geotechnical and construction work is mostly customary. Getting units wrong is one of the most common and most embarrassing errors in consulting.</p>
<h3>Length, area, volume</h3>
<div class="tbl-wrap"><table>
<tr><th>Quantity</th><th>Conversion</th></tr>
<tr><td>Length</td><td>1 in = 25.4 mm (exact); 1 m = 3.281 ft</td></tr>
<tr><td>Area</td><td>1 acre = 43,560 ft²; 1 hectare = 2.471 acres; 1 mi² = 640 acres</td></tr>
<tr><td>Volume</td><td>1 yd³ = 27 ft³; 1 ft³ = 7.48 gal; 1 gal = 3.785 L</td></tr>
<tr><td>Mass/weight</td><td>1 lb = 0.4536 kg; 1 ton (short) = 2,000 lb</td></tr>
</table></div>
<h3>Pressure and stress</h3>
<div class="tbl-wrap"><table>
<tr><th>Unit</th><th>Meaning</th><th>Conversions</th></tr>
<tr><td>psi</td><td>pounds per square inch</td><td>1 psi = 144 psf = 6.895 kPa</td></tr>
<tr><td>psf</td><td>pounds per square foot</td><td>1 psf = 0.0479 kPa</td></tr>
<tr><td>tsf</td><td>tons per square foot</td><td>1 tsf = 2,000 psf ≈ 13.9 psi ≈ 95.8 kPa</td></tr>
<tr><td>ksf</td><td>kips per square foot (1 kip = 1,000 lb)</td><td>1 ksf = 1,000 psf; 2 ksf = 1 tsf</td></tr>
<tr><td>kPa, MPa</td><td>SI pressure</td><td>1 MPa = 1,000 kPa ≈ 145 psi</td></tr>
</table></div>
<p>Concrete strength is reported in psi (e.g., 4,000 psi). Soil bearing pressures are often in psf or ksf. Unconfined compressive strength of clay and pocket penetrometer readings are often in tsf.</p>
<h3>Unit weight and density</h3>
<p>Soil unit weight is expressed in pounds per cubic foot (pcf). The unit weight of water is <strong>62.4 pcf</strong> (9.81 kN/m³). A typical compacted granular fill might weigh 120–135 pcf.</p>
<h3>Concentration units</h3>
<div class="tbl-wrap"><table>
<tr><th>Medium</th><th>Parts per million (ppm)</th><th>Parts per billion (ppb)</th><th>Parts per trillion (ppt)</th></tr>
<tr><td>Soil/solids</td><td>mg/kg</td><td>µg/kg</td><td>ng/kg</td></tr>
<tr><td>Water</td><td>mg/L</td><td>µg/L</td><td>ng/L</td></tr>
</table></div>
<p>For dilute water, 1 mg/L ≈ 1 ppm because a liter of water weighs about a kilogram. Each step (ppm → ppb → ppt) is a factor of <strong>1,000</strong>. Wisconsin's benzene groundwater enforcement standard is 5 µg/L = 0.005 mg/L. PFAS are discussed in ng/L (ppt).</p>
<p>Air concentrations are reported either by mass per volume (µg/m³, mg/m³) or by volume (ppmv, ppbv). Field PID readings are in ppm by volume relative to the calibration gas.</p>
<div class="callout warn"><strong>Classic mistake</strong>Reporting a groundwater result of 0.005 mg/L as "5 mg/L" overstates it 1,000 times. Always carry units through every step and check the lab report's units column.</div>
<h3>Slopes and grades</h3>
<p>Slopes are given as percent grade (rise/run × 100), as a ratio <strong>H:V</strong> (horizontal to vertical — e.g., 3:1), or in degrees. A 3H:1V slope is a 33.3% grade (1 ÷ 3). A 2% pavement cross-slope drops 0.02 ft per foot. Be careful: geotechnical and civil engineers write H:V, but always confirm which number is horizontal.</p>
`,
      check: [
        { type: "num", q: "Convert 3.0 tsf to psf.", answer: 6000, tol: 1, unit: "psf", explain: "1 tsf = 2,000 psf, so 3.0 × 2,000 = 6,000 psf." },
        { type: "num", q: "A groundwater result is 0.012 mg/L. Express it in µg/L.", answer: 12, tol: 0.01, unit: "µg/L", explain: "Multiply mg/L by 1,000 to get µg/L: 12 µg/L (12 ppb)." },
        { type: "num", q: "What percent grade is a 4H:1V slope?", answer: 25, tol: 0.1, unit: "%", explain: "1 ÷ 4 × 100 = 25%." }
      ]
    },
    {
      title: "Maps, coordinates, and legal descriptions",
      html: `
<h3>Topographic maps</h3>
<p>USGS 7.5-minute quadrangle maps are at a scale of <strong>1:24,000</strong> (1 inch = 2,000 feet). <strong>Contour lines</strong> connect points of equal elevation. Rules for reading contours:</p>
<ul>
<li>Closely spaced contours = steep slope; widely spaced = gentle slope.</li>
<li>Contours crossing a stream form a "V" that <strong>points upstream</strong> (uphill).</li>
<li>Closed contours indicate a hill; closed contours with hachure marks (tick marks pointing inward) indicate a depression — common for Wisconsin kettles.</li>
<li>Contours never cross (except at an overhang) and never split.</li>
</ul>
<p>Topographic maps are a standard historical source in Phase I ESAs and help estimate groundwater flow direction (shallow groundwater often mimics topography toward surface water).</p>
<h3>Public Land Survey System (PLSS)</h3>
<p>Wisconsin's land was surveyed under the PLSS. Townships are measured north from a baseline at the Wisconsin–Illinois border, and ranges are measured east or west of the <strong>Fourth Principal Meridian</strong>.</p>
<ul>
<li>A <strong>township</strong> is 6 miles × 6 miles = 36 <strong>sections</strong>.</li>
<li>A <strong>section</strong> is 1 mile × 1 mile = 640 acres. Sections are numbered 1 to 36 starting in the northeast corner and snaking back and forth (1–6 westward, 7–12 eastward, and so on), ending with 36 in the southeast corner.</li>
<li>A quarter section is 160 acres; a quarter-quarter ("forty") is 40 acres.</li>
</ul>
<p>A legal description such as <em>"the NE ¼ of the SW ¼ of Section 12, T6N, R19E"</em> is read from the smallest unit to the largest: the northeast quarter of the southwest quarter of section 12, in township 6 north, range 19 east. That parcel is 40 acres.</p>
<h3>Horizontal coordinate systems</h3>
<ul>
<li><strong>Latitude/longitude</strong> — geographic coordinates; consumer GPS reports these in WGS 84.</li>
<li><strong>State Plane Coordinate System</strong> — Wisconsin has North, Central, and South zones on NAD 83, in feet.</li>
<li><strong>WISCRS</strong> (Wisconsin Coordinate Reference Systems, county coordinates) — county-specific projections designed so grid distances closely match ground distances; widely used by Wisconsin counties and surveyors.</li>
<li><strong>UTM</strong> — Universal Transverse Mercator, in meters; Wisconsin lies mainly in zones 15 and 16.</li>
</ul>
<h3>Vertical datums</h3>
<p>Elevations are referenced to a <strong>vertical datum</strong>. The current U.S. standard is <strong>NAVD 88</strong> (North American Vertical Datum of 1988). Older documents may use NGVD 29, and some municipalities use local datums. Mixing datums can shift elevations by a foot or more and is a classic source of errors in groundwater elevation and floodplain work. Many sites use an <strong>assumed datum</strong> (e.g., a benchmark set at 100.00 ft) for relative elevations — fine for flow direction, but not comparable to anything off-site.</p>
<div class="mnemonic">Contour V's point <strong>U</strong>pstream — "<strong>V</strong> for <strong>V</strong>alley points <strong>U</strong>p the valley."</div>
`,
      check: [
        { type: "num", q: "How many acres are in the NW ¼ of the NE ¼ of a section?", answer: 40, tol: 0, unit: "acres", explain: "A section is 640 acres; a quarter is 160; a quarter of that is 40." },
        { type: "mc", q: "The current standard U.S. vertical datum is:", options: ["NGVD 29", "NAD 83", "NAVD 88", "WGS 84"], answer: 2, explain: "NAVD 88 is vertical. NAD 83 and WGS 84 are horizontal datums." }
      ]
    },
    {
      title: "Reading a plan set",
      html: `
<h3>How a plan set is organized</h3>
<p>Construction drawings are grouped by discipline, identified by a sheet prefix:</p>
<div class="tbl-wrap"><table>
<tr><th>Prefix</th><th>Discipline</th><th>Examples</th></tr>
<tr><td>G / T</td><td>General / title</td><td>Cover sheet, sheet index, general notes, legend, abbreviations</td></tr>
<tr><td>C</td><td>Civil</td><td>Existing conditions and demolition, site layout, grading, utilities, erosion control, details</td></tr>
<tr><td>L</td><td>Landscape</td><td>Planting plans</td></tr>
<tr><td>S</td><td>Structural</td><td>Foundation plan, framing, structural notes (including geotechnical design values)</td></tr>
<tr><td>A</td><td>Architectural</td><td>Floor plans, elevations, sections</td></tr>
<tr><td>M / E / P</td><td>Mechanical / Electrical / Plumbing</td><td>HVAC, power, plumbing layouts</td></tr>
</table></div>
<p>The plans are accompanied by the <strong>project specifications</strong> (the written requirements — materials, testing frequencies, compaction requirements). When drawings and specifications conflict, the contract documents state which governs; in either case, ask through the proper channel (a Request for Information, RFI) rather than guessing.</p>
<h3>Views</h3>
<ul>
<li><strong>Plan view</strong> — looking down from above.</li>
<li><strong>Profile</strong> — a vertical slice along a line (e.g., a road centerline or a sewer), showing existing and proposed grade and pipe elevations versus stationing.</li>
<li><strong>Cross-section</strong> — a vertical slice perpendicular to the alignment.</li>
<li><strong>Detail</strong> — an enlarged drawing of a specific element (a footing, a catch basin, a pavement section), referenced by a detail callout (e.g., detail 4 on sheet C-501).</li>
</ul>
<h3>Scale</h3>
<p>Civil drawings use an <strong>engineer's scale</strong> (1" = 20', 30', 40', 50', 60', 100'); architectural and structural drawings often use an <strong>architect's scale</strong> (¼" = 1'-0"). Always check the bar scale — a reduced-size print (e.g., 11×17 of a 22×34 sheet) is half scale.</p>
<h3>Stationing and offsets</h3>
<p>Linear projects (roads, pipelines) are located by <strong>station</strong> along a centerline. Station <code>12+50</code> means 1,250 feet from the starting point (station 0+00). An <strong>offset</strong> is the perpendicular distance left (LT) or right (RT) of centerline, looking up-station. A test location might be recorded as "Sta. 12+50, 15' RT."</p>
<h3>Common abbreviations</h3>
<div class="tbl-wrap"><table>
<tr><th>Abbrev.</th><th>Meaning</th><th>Abbrev.</th><th>Meaning</th></tr>
<tr><td>FFE</td><td>Finished floor elevation</td><td>EG / FG</td><td>Existing grade / finished grade</td></tr>
<tr><td>TC / BC</td><td>Top of curb / bottom (or back) of curb</td><td>TW / BW</td><td>Top of wall / bottom of wall</td></tr>
<tr><td>INV</td><td>Invert (inside bottom of a pipe)</td><td>RIM</td><td>Rim elevation of a manhole or structure</td></tr>
<tr><td>BM</td><td>Benchmark</td><td>CL / ℄</td><td>Centerline</td></tr>
<tr><td>TYP</td><td>Typical (applies to similar locations)</td><td>NTS</td><td>Not to scale</td></tr>
<tr><td>BOF / TOF</td><td>Bottom / top of footing</td><td>ROW</td><td>Right-of-way</td></tr>
</table></div>
<p>Existing features are usually drawn with lighter or dashed lines; proposed features with heavier, solid lines. Existing contours are typically dashed; proposed contours solid. Revisions are marked with a revision cloud and a delta (triangle) symbol tied to the revision block.</p>
`,
      check: [
        { type: "num", q: "Station 23+75 is how many feet from station 0+00?", answer: 2375, tol: 0, unit: "ft", explain: "Station notation is hundreds of feet + feet: 23 × 100 + 75 = 2,375 ft." },
        { type: "mc", q: "On a sewer plan, 'INV' refers to:", options: ["The top of the manhole lid", "The inside bottom elevation of the pipe", "The inventory of pipe", "An inverted siphon"], answer: 1, explain: "The invert is the inside bottom of the pipe — the elevation that controls flow." }
      ]
    },
    {
      title: "Surveying and field measurement basics",
      html: `
<h3>Differential leveling</h3>
<p>The classic way to determine elevations uses a level and a rod. Start from a <strong>benchmark (BM)</strong> of known elevation:</p>
<span class="formula">Height of instrument:  HI = BM elevation + backsight (BS)
Elevation of a point: Elev = HI − foresight (FS)</span>
<div class="callout"><strong>Example</strong>BM elevation = 100.00 ft. Backsight on BM = 4.62 ft → HI = 104.62 ft. Foresight on the top of a monitoring well casing = 3.18 ft → TOC elevation = 104.62 − 3.18 = 101.44 ft.</div>
<p>Modern surveys use <strong>total stations</strong> (electronic angle and distance measurement) and <strong>GNSS/GPS with RTK</strong> (real-time kinematic) correction, which can achieve centimeter-level positioning. Monitoring well top-of-casing elevations are typically surveyed to the nearest 0.01 ft because groundwater gradients are small.</p>
<h3>Construction staking</h3>
<p>Surveyors set stakes to guide contractors. A grade stake might be labeled with an offset and a cut or fill: "<strong>C 2.4</strong>" means cut 2.4 ft from the reference (often the top of the stake or a mark on a lath) to reach design grade; "<strong>F 1.5</strong>" means fill 1.5 ft. Offset stakes are placed a set distance away from the actual feature so they survive construction (e.g., "10' O/S" — 10-foot offset). CMT technicians use stakes to locate and record test locations.</p>
<h3>Common field measurements</h3>
<ul>
<li><strong>Water level meter</strong> — an electric tape that beeps when the probe contacts water; read to 0.01 ft from the surveyed measuring point (usually a notch on the north side of the inner casing).</li>
<li><strong>Interface probe</strong> — distinguishes free product (LNAPL) from water to measure product thickness.</li>
<li><strong>Measuring tape and wheel</strong> — for distances and test locations.</li>
<li><strong>Hand-held GPS</strong> — for approximate locations (meter-level), not survey-grade elevations.</li>
</ul>
<h3>Accuracy versus precision</h3>
<p><strong>Accuracy</strong> is closeness to the true value; <strong>precision</strong> is repeatability. A miscalibrated instrument can be precise (consistent) but inaccurate. Calibration against standards before use — PID with isobutylene, pH meter with buffers, nuclear gauge standard counts — is how you defend accuracy.</p>
`,
      check: [
        { type: "num", q: "A benchmark is at elevation 853.20 ft. The backsight is 5.10 ft and the foresight on a point is 2.85 ft. What is the point's elevation?", answer: 855.45, tol: 0.01, unit: "ft", explain: "HI = 853.20 + 5.10 = 858.30; elevation = 858.30 − 2.85 = 855.45 ft." },
        { type: "mc", q: "A grade stake reads 'F 1.5'. This means:", options: ["Fill 1.5 ft to reach design grade", "Footing 1.5 ft wide", "Cut 1.5 ft", "Flag 1.5 ft offset"], answer: 0, explain: "F = fill, C = cut, relative to the stake reference." }
      ]
    },
    {
      title: "Data conventions: significant figures, detection limits, and duplicates",
      html: `
<h3>Significant figures and rounding</h3>
<p>Report results to a precision that reflects the measurement. A nuclear gauge dry density reported as 118.4 pcf is appropriate; 118.4372 pcf implies precision that doesn't exist. Standard rounding practice for test results is described in <strong>ASTM E29</strong>; individual test methods often specify how to round (e.g., compaction to the nearest 0.1% or whole percent, concrete strength to the nearest 10 psi).</p>
<h3>Laboratory detection limits</h3>
<ul>
<li><strong>Limit of detection (LOD)</strong> or method detection limit (MDL) — the lowest concentration the lab can distinguish from zero with confidence.</li>
<li><strong>Limit of quantitation (LOQ)</strong> or reporting limit — the lowest concentration the lab can measure with acceptable accuracy.</li>
<li>A result between the LOD and LOQ is reported as an estimated value with a <strong>"J" qualifier</strong>.</li>
<li>A non-detect is reported as less than the limit, e.g., "&lt;0.25 µg/L" — not as zero.</li>
</ul>
<p>If the detection limit is <em>higher</em> than the regulatory standard you are comparing against, a "non-detect" does not demonstrate compliance. Always check that detection limits are below the applicable standards when planning a sampling program.</p>
<h3>Field duplicates and relative percent difference</h3>
<p>A <strong>field duplicate</strong> is a second sample collected at the same time and place, submitted to the lab (often blind). Agreement is measured by the <strong>relative percent difference (RPD)</strong>:</p>
<span class="formula">RPD (%) = |A − B| / ((A + B) / 2) × 100</span>
<div class="callout"><strong>Example</strong>Sample = 40 µg/L; duplicate = 50 µg/L. RPD = 10 / 45 × 100 = 22%.</div>
<h3>Basic statistics</h3>
<p>You will often summarize test series: <strong>mean</strong> (average), <strong>median</strong> (middle value), <strong>range</strong>, and <strong>standard deviation</strong> (spread). Concrete strength acceptance, for example, relies on averages of consecutive tests. The <strong>coefficient of variation</strong> (standard deviation ÷ mean) expresses spread relative to the average.</p>
<h3>Presenting data</h3>
<p>Environmental reports present results in tables comparing each result to the applicable standard, with exceedances highlighted (e.g., bold for a preventive action limit exceedance, bold and shaded for an enforcement standard exceedance — follow your firm's and the DNR's conventions). Geotechnical and CMT reports tabulate test locations, results, and the specification requirement side by side.</p>
`,
      check: [
        { type: "num", q: "A field sample is 80 mg/kg and its duplicate is 100 mg/kg. What is the RPD (%)? Round to the nearest whole percent.", answer: 22, tol: 0.5, unit: "%", explain: "|80 − 100| / 90 × 100 = 22.2%." },
        { type: "tf", q: "A non-detect result with a detection limit above the regulatory standard demonstrates compliance with that standard.", answer: false, explain: "If the detection limit exceeds the standard, the true concentration could still be above the standard." }
      ]
    }
  ],
  terms: [
    { term: "tsf", def: "Tons per square foot: 1 tsf = 2,000 psf ≈ 13.9 psi ≈ 95.8 kPa." },
    { term: "ksf", def: "Kips per square foot: 1 ksf = 1,000 psf; 2 ksf = 1 tsf." },
    { term: "pcf", def: "Pounds per cubic foot; unit for soil and concrete unit weight. Water = 62.4 pcf." },
    { term: "ppm / ppb / ppt", def: "Parts per million / billion / trillion. In water ≈ mg/L / µg/L / ng/L; in soil = mg/kg / µg/kg / ng/kg. Each step is a factor of 1,000." },
    { term: "H:V slope", def: "Slope expressed as horizontal to vertical distance, e.g., 3H:1V = 33.3% grade." },
    { term: "Percent grade", def: "Rise divided by run, times 100." },
    { term: "Contour line", def: "A line connecting points of equal elevation on a map." },
    { term: "USGS 7.5-minute quadrangle", def: "Standard topographic map at 1:24,000 scale (1 inch = 2,000 feet)." },
    { term: "PLSS", def: "Public Land Survey System: townships (36 sections), sections (640 acres), quarters (160), quarter-quarters (40). Wisconsin uses the Fourth Principal Meridian." },
    { term: "State Plane Coordinate System", def: "Grid coordinate system by state zone; Wisconsin has North, Central, and South zones on NAD 83." },
    { term: "WISCRS", def: "Wisconsin Coordinate Reference Systems: county-specific projections minimizing differences between grid and ground distances." },
    { term: "NAVD 88", def: "North American Vertical Datum of 1988: the current U.S. vertical datum for elevations." },
    { term: "Assumed datum", def: "An arbitrary local elevation reference (e.g., BM = 100.00 ft) used for relative elevations on a site." },
    { term: "Plan / profile / section", def: "Views from above / along an alignment showing elevations / perpendicular vertical slice." },
    { term: "Station", def: "Distance along a centerline in hundreds of feet + feet; 12+50 = 1,250 ft from 0+00." },
    { term: "Offset (LT/RT)", def: "Perpendicular distance left or right of centerline, looking up-station." },
    { term: "Invert (INV)", def: "Elevation of the inside bottom of a pipe or channel." },
    { term: "FFE", def: "Finished floor elevation of a building." },
    { term: "RFI", def: "Request for Information: formal question to the design team about plans or specifications." },
    { term: "Benchmark (BM)", def: "A point of known elevation used as the reference for leveling." },
    { term: "Backsight / foresight", def: "Rod readings on a point of known elevation (BS, added to get HI) and on an unknown point (FS, subtracted from HI)." },
    { term: "Height of instrument (HI)", def: "Elevation of the level's line of sight: BM elevation + backsight." },
    { term: "RTK GNSS", def: "Real-time kinematic satellite positioning with correction data, achieving centimeter-level accuracy." },
    { term: "Cut / fill stake", def: "Survey stake marked C (cut) or F (fill) with the vertical distance to design grade." },
    { term: "Accuracy vs. precision", def: "Accuracy is closeness to the true value; precision is repeatability." },
    { term: "LOD / LOQ", def: "Limit of detection (lowest distinguishable from zero) and limit of quantitation (lowest reliably measured)." },
    { term: "J qualifier", def: "Laboratory flag for an estimated concentration between the detection and quantitation limits." },
    { term: "RPD", def: "Relative percent difference: |A − B| / mean(A, B) × 100; used to evaluate duplicate agreement." },
    { term: "Field duplicate", def: "A second sample collected at the same location and time to assess sampling and analytical precision." }
  ],
  resources: [
    { title: "USGS — Topographic maps (topoView)", url: "https://ngmdb.usgs.gov/topoview/", note: "Current and historical topographic maps" },
    { title: "Wisconsin State Cartographer's Office", url: "https://www.sco.wisc.edu/", note: "PLSS, WISCRS, datums, and Wisconsin geospatial data" },
    { title: "NOAA National Geodetic Survey", url: "https://geodesy.noaa.gov/", note: "Datums, benchmarks, and coordinate tools" },
    { title: "ASTM E29 — Using Significant Digits in Test Data", url: "https://www.astm.org/", note: "Rounding practice for test results (search E29)" },
    { title: "EPA — Data quality and QA/QC guidance", url: "https://www.epa.gov/quality", note: "Detection limits, data qualifiers, quality systems" },
    { title: "NIST — Unit conversion (SP 811 guide)", url: "https://www.nist.gov/pml/special-publication-811", note: "Authoritative SI conversion factors" }
  ],
  teach: [
    { prompt: "A lab report lists benzene at 0.0062 mg/L in groundwater, and the Wisconsin enforcement standard is 5 µg/L. Explain step by step how you compare these and what you conclude. Then explain why the lab's detection limit matters for non-detect results.",
      model: "<p>Convert to the same units: 0.0062 mg/L × 1,000 = 6.2 µg/L. Compare to the 5 µg/L enforcement standard: 6.2 exceeds 5, so the sample exceeds the ES. For non-detects, the result is reported as less than the detection or reporting limit; if that limit is higher than the standard, a non-detect cannot show compliance because the true value could be between the standard and the limit. Sampling programs should require detection limits below the applicable standards.</p>" },
    { prompt: "Explain how to find a test location described as 'Sta. 8+40, 20 ft LT' on a road project, and how a CMT technician would record a location on a building pad without stationing.",
      model: "<p>Station 8+40 is 840 feet along the centerline from station 0+00; find it using survey stakes or by measuring from the nearest marked station. 'LT' means left of centerline when facing up-station (toward higher stations); measure 20 feet perpendicular to that side. On a building pad without stationing, record locations relative to fixed references such as gridlines on the structural drawings (e.g., 'Column line C-4, 10 ft north'), building corners, offset stakes, or GPS coordinates, along with elevation relative to finished grade.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "num", q: "Convert 4,500 psf to tsf.", answer: 2.25, tol: 0.001, unit: "tsf", explain: "4,500 ÷ 2,000 = 2.25 tsf." },
      { type: "num", q: "Convert 50 psi to psf.", answer: 7200, tol: 1, unit: "psf", explain: "1 psi = 144 psf; 50 × 144 = 7,200 psf." },
      { type: "num", q: "Convert 4,000 psi to MPa (1 MPa ≈ 145 psi). Round to one decimal.", answer: 27.6, tol: 0.15, unit: "MPa", explain: "4,000 ÷ 145 ≈ 27.6 MPa." },
      { type: "num", q: "How many cubic yards are in an excavation 30 ft × 20 ft × 9 ft?", answer: 200, tol: 0.1, unit: "yd³", explain: "5,400 ft³ ÷ 27 = 200 yd³." },
      { type: "num", q: "How many gallons are in 10 ft³ of water? (1 ft³ = 7.48 gal)", answer: 74.8, tol: 0.1, unit: "gal", explain: "10 × 7.48 = 74.8 gal." },
      { type: "num", q: "A parcel is 2.5 acres. How many square feet is it?", answer: 108900, tol: 1, unit: "ft²", explain: "2.5 × 43,560 = 108,900 ft²." },
      { type: "mc", q: "In soil, 1 ppm equals:", options: ["1 µg/kg", "1 mg/kg", "1 mg/L", "1 ng/kg"], answer: 1, explain: "ppm in solids = mg/kg." },
      { type: "num", q: "A soil result is 2,300 µg/kg. Express it in mg/kg.", answer: 2.3, tol: 0.001, unit: "mg/kg", explain: "Divide by 1,000: 2.3 mg/kg." },
      { type: "mc", q: "PFAS concentrations in drinking water are typically discussed in:", options: ["mg/L", "µg/L", "ng/L (ppt)", "percent"], answer: 2, explain: "PFAS standards are in the parts-per-trillion range (ng/L)." },
      { type: "num", q: "A 2% cross-slope over a 24-foot wide pavement drops how many feet?", answer: 0.48, tol: 0.001, unit: "ft", explain: "0.02 × 24 = 0.48 ft." },
      { type: "mc", q: "A 2H:1V slope corresponds to a grade of:", options: ["20%", "50%", "200%", "66.7%"], answer: 1, explain: "1 ÷ 2 × 100 = 50%." },
      { type: "mc", q: "On a topographic map, where a contour crosses a stream, the 'V' points:", options: ["Downstream", "Upstream", "North", "Toward the steepest slope"], answer: 1, explain: "Contour V's point upstream (uphill)." },
      { type: "mc", q: "Closed contours with inward-pointing hachures indicate:", options: ["A hill", "A depression", "A cliff", "A river"], answer: 1, explain: "Hachured closed contours mark depressions such as kettles." },
      { type: "mc", q: "In the PLSS, a township contains:", options: ["16 sections", "36 sections", "640 sections", "100 sections"], answer: 1, explain: "6 mi × 6 mi = 36 sections." },
      { type: "mc", q: "Section 1 of a PLSS township is located in which corner?", options: ["Northwest", "Northeast", "Southeast", "Southwest"], answer: 1, explain: "Numbering starts at the NE corner (1) and ends at the SE corner (36)." },
      { type: "mc", q: "Wisconsin's PLSS ranges are measured from the:", options: ["Fourth Principal Meridian", "Sixth Principal Meridian", "Prime Meridian", "Mississippi River"], answer: 0, explain: "Wisconsin uses the Fourth Principal Meridian; townships are counted north from the Illinois border baseline." },
      { type: "mc", q: "Which is a horizontal datum?", options: ["NAVD 88", "NGVD 29", "NAD 83", "Mean sea level"], answer: 2, explain: "NAD 83 is horizontal; NAVD 88 and NGVD 29 are vertical." },
      { type: "mc", q: "WISCRS coordinates are:", options: ["A national lat/long grid", "County-specific Wisconsin coordinate systems", "A vertical datum", "Township and range"], answer: 1, explain: "WISCRS are county-level projections used across Wisconsin." },
      { type: "mc", q: "A sheet numbered S-201 belongs to which discipline?", options: ["Survey", "Structural", "Site", "Sanitary"], answer: 1, explain: "S = structural by standard convention." },
      { type: "mc", q: "A drawing showing elevations of existing ground, proposed grade, and a sewer pipe along a centerline versus stationing is a:", options: ["Plan view", "Profile", "Detail", "Legend"], answer: 1, explain: "Profiles show elevations along an alignment." },
      { type: "num", q: "On a half-size print of a 1\" = 40' drawing, 1 inch on paper represents how many feet?", answer: 80, tol: 0, unit: "ft", explain: "Half size doubles the represented distance: 1\" = 80'." },
      { type: "mc", q: "'Sta. 5+20, 12 ft RT' means:", options: ["520 ft along centerline, 12 ft right of centerline looking up-station", "5.2 miles, 12 ft right", "520 ft left, 12 ft up", "Station 5, 20 ft, 12 ft elevation"], answer: 0, explain: "Station 5+20 = 520 ft; RT is to the right looking up-station." },
      { type: "mc", q: "When the drawings and specifications appear to conflict, field staff should:", options: ["Pick whichever is easier", "Follow the contractor's preference", "Raise it through the proper channel (e.g., RFI via the PM/EOR)", "Ignore it"], answer: 2, explain: "Conflicts are resolved by the design team through formal channels." },
      { type: "num", q: "BM elevation 100.00 ft, BS = 3.42 ft, FS on a well casing = 1.97 ft. What is the casing elevation?", answer: 101.45, tol: 0.01, unit: "ft", explain: "HI = 103.42; 103.42 − 1.97 = 101.45 ft." },
      { type: "mc", q: "A grade stake marked 'C 3.0' means:", options: ["Fill 3.0 ft", "Cut 3.0 ft", "Curb 3.0 ft", "Centerline 3.0 ft"], answer: 1, explain: "C = cut." },
      { type: "mc", q: "Which instrument measures the thickness of floating free product in a well?", options: ["Water level meter", "Interface probe", "PID", "Nuclear gauge"], answer: 1, explain: "Interface probes detect both product and water." },
      { type: "mc", q: "A PID that reads 99, 100, and 101 ppm on 50 ppm calibration gas is:", options: ["Accurate and precise", "Precise but not accurate", "Accurate but not precise", "Neither"], answer: 1, explain: "Readings are repeatable (precise) but far from the true value (inaccurate)." },
      { type: "mc", q: "A lab result reported as '3.1 J µg/L' means:", options: ["Rejected data", "An estimated value between the detection and quantitation limits", "Exceeds the standard", "Lab error"], answer: 1, explain: "J flags estimated concentrations below the quantitation limit but above detection." },
      { type: "num", q: "Sample = 12 µg/L, duplicate = 18 µg/L. What is the RPD (%)?", answer: 40, tol: 0.5, unit: "%", explain: "|12 − 18| / 15 × 100 = 40%." },
      { type: "mc", q: "How should a non-detect be reported in a data table?", options: ["As 0", "As blank", "As less than the reporting limit (e.g., <0.5 µg/L)", "As the detection limit without a symbol"], answer: 2, explain: "Non-detects are shown as less than the limit." }
    ]
  }
});
