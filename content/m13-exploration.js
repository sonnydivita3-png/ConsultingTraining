COURSE.addModule({
  id: "m13",
  track: "t3",
  title: "Subsurface Exploration and Laboratory Testing",
  hours: 5,
  summary: "How geotechnical engineers find out what is underground: planning borings, the Standard Penetration Test, undisturbed sampling, cone penetration testing, rock coring, groundwater observations, the laboratory test menu, and reading boring logs and geotechnical reports.",
  objectives: [
    "Plan a geotechnical exploration: desk study, boring layout, depths, and methods.",
    "Explain the SPT procedure, compute N-values, and correlate them to density and consistency.",
    "Describe Shelby tube sampling, pocket penetrometer, vane shear, CPT, DCP, test pits, and rock coring (recovery and RQD).",
    "Match common geotechnical laboratory tests to their ASTM designations and purposes.",
    "Read a boring log and describe the contents of a geotechnical engineering report."
  ],
  lessons: [
    {
      title: "Planning a subsurface exploration",
      html: `
<p>The <strong>International Building Code (IBC) Section 1803</strong>, adopted in Wisconsin's commercial building code, requires geotechnical investigations for many buildings, and owners and lenders routinely require them. The goal: characterize soil, rock, and groundwater well enough to design foundations, floor slabs, pavements, and earthwork economically and safely.</p>
<h3>Desk study first</h3>
<ul>
<li>Site plan and proposed structure: building footprint, column loads, finished floor elevation, grading.</li>
<li>Geologic maps (WGNHS), depth-to-bedrock maps, NRCS soil survey, historical aerials and topographic maps (look for filled ravines, former ponds, quarries, and dumps).</li>
<li>Prior geotechnical and environmental reports; well construction reports.</li>
<li>Environmental status — a contaminated site requires drilling under a HASP and managing cuttings properly.</li>
</ul>
<h3>Number, location, and depth of borings</h3>
<p>There is no single rule; requirements depend on the structure, its loads, and site variability. General practice:</p>
<ul>
<li>Borings at building corners and interior column areas, plus pavement and stormwater pond areas.</li>
<li>Building borings extend below the depth at which the foundation load meaningfully affects the soil — often taken as where stress increase falls to about 10% of the existing overburden, or roughly 1.5 to 2 times the footing width below footing level for spread footings, and deeper for heavily loaded structures or where deep foundations are likely. Typical small commercial buildings: about 15–30 ft.</li>
<li>Pavement borings typically 5–10 ft below subgrade; stormwater ponds and infiltration areas below the pond bottom to assess groundwater and permeability.</li>
<li>Extend through any soft, organic, or fill soils into competent material.</li>
</ul>
<p>FHWA and USACE manuals give more detailed guidance for transportation and large projects; WisDOT's Geotechnical Manual governs state highway work.</p>
<h3>Logistics</h3>
<p>Diggers Hotline locate (three working days), private utility locate where needed, access for the rig (soft ground, overhead lines), permits in rights-of-way, and boring layout (by tape from building corners, GPS, or a surveyor). Ground surface elevations at borings are needed to relate soil layers to the proposed grades.</p>
<h3>Drilling methods for geotechnical work</h3>
<ul>
<li><strong>Hollow-stem auger</strong> with split-spoon sampling — the Wisconsin workhorse.</li>
<li><strong>Mud rotary</strong> (wash boring) — keeps the hole open in heaving sands below the water table and for deep borings.</li>
<li><strong>Rock coring</strong> with a diamond bit and core barrel.</li>
<li><strong>Direct push</strong> — limited geotechnical use (no SPT), useful for shallow pavement or environmental sampling.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Which section of the International Building Code addresses geotechnical investigations?", options: ["Chapter 7", "Section 1803", "Section 1705", "Chapter 11"], answer: 1, explain: "IBC Section 1803 covers geotechnical investigations; Chapter 17 covers special inspections." },
        { type: "mc", q: "Which desk-study source would best reveal a filled ravine on a site?", options: ["Historical topographic maps and aerial photos", "The project budget", "OSHA logs", "Lab invoices"], answer: 0, explain: "Historical topo maps and aerials reveal former drainage features later filled." }
      ]
    },
    {
      title: "The Standard Penetration Test (SPT)",
      html: `
<p>The <strong>SPT (ASTM D1586)</strong> is the most widely used in-situ test in U.S. geotechnical practice. It produces both a disturbed soil sample and a measure of resistance.</p>
<h3>Procedure</h3>
<ul>
<li>A <strong>2-inch outside-diameter split-barrel (split-spoon) sampler</strong> is driven into the bottom of the borehole.</li>
<li>Driving is done with a <strong>140-lb hammer</strong> dropping <strong>30 inches</strong>.</li>
<li>The sampler is driven <strong>18 inches</strong> in three 6-inch increments, and the blows for each increment are recorded (e.g., 4–6–7).</li>
<li>The <strong>N-value</strong> is the sum of the blows for the <strong>second and third</strong> increments (the first 6 inches is a seating drive through disturbed soil). For 4–6–7, N = 13.</li>
<li>Typical sampling intervals: every 2.5 ft to 10 ft, then every 5 ft below.</li>
<li><strong>Refusal</strong> under D1586 includes 50 blows in any 6-inch increment, 100 total blows, or no advance over 10 successive blows. Logged as, e.g., "50/3 in." (50 blows for 3 inches).</li>
</ul>
<h3>Energy corrections</h3>
<p>Hammer systems deliver different energy. Correlations are based on 60% of theoretical free-fall energy, so N is often normalized to <strong>N60</strong>:</p>
<span class="formula">N60 = N × (ER / 60)       ER = measured hammer energy ratio (%)</span>
<p>Automatic hammers commonly deliver more energy (often around 80% or more) than older rope-and-cathead safety hammers, so uncorrected N-values from an automatic hammer understate N60. Further corrections for overburden stress (N1)60 are used in liquefaction and some sand correlations.</p>
<h3>Correlations (Terzaghi and Peck, widely used)</h3>
<div class="tbl-wrap"><table>
<tr><th colspan="2">Granular soils — relative density</th><th colspan="3">Cohesive soils — consistency</th></tr>
<tr><th>N (blows/ft)</th><th>Density</th><th>N (blows/ft)</th><th>Consistency</th><th>qu (tsf)</th></tr>
<tr><td>0–4</td><td>Very loose</td><td>&lt; 2</td><td>Very soft</td><td>&lt; 0.25</td></tr>
<tr><td>4–10</td><td>Loose</td><td>2–4</td><td>Soft</td><td>0.25–0.5</td></tr>
<tr><td>10–30</td><td>Medium dense</td><td>4–8</td><td>Medium stiff</td><td>0.5–1.0</td></tr>
<tr><td>30–50</td><td>Dense</td><td>8–15</td><td>Stiff</td><td>1.0–2.0</td></tr>
<tr><td>&gt; 50</td><td>Very dense</td><td>15–30</td><td>Very stiff</td><td>2.0–4.0</td></tr>
<tr><td></td><td></td><td>&gt; 30</td><td>Hard</td><td>&gt; 4.0</td></tr>
</table></div>
<p>SPT N-values in clay are crude strength indicators; for design, engineers prefer direct strength measurements (unconfined compression, pocket penetrometer, vane, triaxial).</p>
<div class="mnemonic">SPT = "<strong>140 / 30 / 2 / 18</strong>": 140-lb hammer, 30-inch drop, 2-inch OD spoon, 18-inch drive. N = last two 6-inch counts.</div>
<div class="callout warn"><strong>Logging tip</strong>Below the water table in sand, "heave" (sand flowing up into the augers) gives falsely low N-values. Note heave, keep the augers full of water, or switch to mud rotary.</div>
`,
      check: [
        { type: "num", q: "SPT blow counts for three 6-inch increments are 5, 8, 11. What is N?", answer: 19, tol: 0, unit: "blows/ft", explain: "N = 8 + 11 = 19." },
        { type: "mc", q: "A sand with N = 22 is described as:", options: ["Loose", "Medium dense", "Dense", "Very dense"], answer: 1, explain: "10–30 = medium dense." },
        { type: "num", q: "Field N = 15 with an automatic hammer of ER = 80%. What is N60?", answer: 20, tol: 0, unit: "", explain: "N60 = 15 × 80/60 = 20." }
      ]
    },
    {
      title: "Undisturbed sampling, other in-situ tests, and rock coring",
      html: `
<h3>Undisturbed samples</h3>
<p>Split-spoon samples are disturbed — fine for classification and moisture, not for consolidation or reliable strength testing. For those, a <strong>thin-walled (Shelby) tube</strong> (ASTM D1587), typically 3-inch OD, is <strong>pushed</strong> hydraulically (not driven) into cohesive soil, sealed at both ends, and transported upright and protected from shock and freezing to the lab.</p>
<h3>Quick field strength tests on clay</h3>
<ul>
<li><strong>Pocket penetrometer</strong> — a spring-loaded pin pressed into the sample; reads an estimate of unconfined compressive strength (qu) in tsf. Quick and crude.</li>
<li><strong>Torvane</strong> — a small vane twisted on the sample face; estimates undrained shear strength.</li>
<li><strong>Field vane shear test</strong> (ASTM D2573) — a vane pushed into soft clay at the bottom of a boring and rotated; measures in-situ undrained shear strength and sensitivity.</li>
</ul>
<h3>Cone penetration test (CPT / CPTu)</h3>
<p>A cone on a rod string is pushed at a constant rate (ASTM D5778), continuously measuring:</p>
<ul>
<li><strong>Tip resistance (qc)</strong></li>
<li><strong>Sleeve friction (fs)</strong></li>
<li><strong>Pore pressure (u2)</strong> on piezocones (CPTu)</li>
</ul>
<p>The <strong>friction ratio</strong> Rf = fs/qc × 100% helps identify soil type: sands have high qc and low Rf; clays have low qc and higher Rf. Soil behavior type charts (e.g., Robertson's) interpret the profile. CPT gives a continuous, repeatable profile and is excellent for soft soils and liquefaction analysis, but recovers no sample and can't penetrate dense gravel, cobbles, or rock — a real limitation in Wisconsin tills.</p>
<h3>Dynamic cone penetrometer (DCP)</h3>
<p>A hand-operated device (ASTM D6951) with a sliding hammer drives a cone; penetration per blow correlates to strength (and CBR). Used for shallow subgrade checks and footing bearing verification during construction (Module 14).</p>
<h3>Test pits</h3>
<p>Excavated with a backhoe to observe soil layering, fill, debris, groundwater seepage, and bedrock surface directly. Great for fill sites and for estimating excavation difficulty. Never enter an unprotected pit deeper than OSHA allows.</p>
<h3>Rock coring</h3>
<p>When borings reach bedrock (commonly dolomite in eastern Wisconsin), a diamond bit and core barrel recover rock core. Common core sizes include <strong>NQ</strong> (about 1.9-inch diameter core) and <strong>HQ</strong> (about 2.5-inch). Two key measurements per core run:</p>
<span class="formula">Recovery (%) = length of core recovered / length of run × 100
RQD (%)      = Σ length of intact pieces ≥ 4 in (100 mm) / length of run × 100</span>
<div class="tbl-wrap"><table>
<tr><th>RQD (%)</th><th>Rock quality (Deere)</th></tr>
<tr><td>0–25</td><td>Very poor</td></tr>
<tr><td>25–50</td><td>Poor</td></tr>
<tr><td>50–75</td><td>Fair</td></tr>
<tr><td>75–90</td><td>Good</td></tr>
<tr><td>90–100</td><td>Excellent</td></tr>
</table></div>
<p>Only natural fractures count; breaks caused by drilling or handling are fitted back together.</p>
<h3>Groundwater observations</h3>
<p>Record water level <strong>during drilling</strong>, <strong>at completion</strong>, and, where possible, after a delay (e.g., 24 hours) — water in low-permeability clay takes time to stabilize. Note the depth of borehole <strong>cave-in</strong>. Drilling fluids mask true water levels. Long-term levels require observation wells or piezometers.</p>
`,
      check: [
        { type: "num", q: "A 5-ft (60-in) core run recovers 54 in of core. Intact pieces ≥ 4 in total 39 in. What is the RQD (%)?", answer: 65, tol: 0, unit: "%", explain: "RQD = 39/60 × 100 = 65% (fair). Recovery = 90%." },
        { type: "mc", q: "Shelby tubes are advanced by:", options: ["Driving with a 140-lb hammer", "Pushing hydraulically in one continuous stroke", "Rotating with a diamond bit", "Vibration"], answer: 1, explain: "Thin-walled tubes are pushed to minimize disturbance." },
        { type: "mc", q: "A CPT sounding shows high tip resistance and a low friction ratio. The soil is most likely:", options: ["Soft clay", "Sand", "Peat", "Silty clay"], answer: 1, explain: "Sands: high qc, low Rf." }
      ]
    },
    {
      title: "The laboratory test menu",
      html: `
<div class="tbl-wrap"><table>
<tr><th>Test</th><th>ASTM</th><th>What it tells you</th></tr>
<tr><td>Moisture (water) content</td><td>D2216</td><td>Water content by oven drying (110 ± 5 °C); the most common lab test</td></tr>
<tr><td>Atterberg limits</td><td>D4318</td><td>LL, PL, PI for classification and behavior</td></tr>
<tr><td>Particle-size (sieve) analysis</td><td>D6913</td><td>Gradation of coarse fraction</td></tr>
<tr><td>Hydrometer analysis</td><td>D7928</td><td>Gradation of fines (silt and clay sizes)</td></tr>
<tr><td>Amount finer than No. 200 (wash)</td><td>D1140</td><td>Percent fines — quick classification aid</td></tr>
<tr><td>Specific gravity of solids</td><td>D854</td><td>Gs for phase calculations</td></tr>
<tr><td>Organic content (loss on ignition)</td><td>D2974</td><td>Organic matter and ash content of peat and organic soils</td></tr>
<tr><td>Unconfined compression</td><td>D2166</td><td>qu of cohesive soil; su = qu/2</td></tr>
<tr><td>Unconsolidated-undrained triaxial (UU)</td><td>D2850</td><td>Undrained shear strength under confinement</td></tr>
<tr><td>Consolidated-undrained triaxial (CU)</td><td>D4767</td><td>Effective strength parameters (c', φ') with pore pressure measurement</td></tr>
<tr><td>Direct shear</td><td>D3080</td><td>Drained strength (φ', c') — often sands or interfaces</td></tr>
<tr><td>One-dimensional consolidation</td><td>D2435</td><td>σ'p, Cc, Cr, cv for settlement</td></tr>
<tr><td>Standard Proctor</td><td>D698</td><td>Maximum dry density and optimum moisture (standard effort)</td></tr>
<tr><td>Modified Proctor</td><td>D1557</td><td>Maximum dry density and optimum moisture (higher effort)</td></tr>
<tr><td>California Bearing Ratio (CBR)</td><td>D1883</td><td>Subgrade/base strength for pavement design</td></tr>
<tr><td>Hydraulic conductivity (flexible wall)</td><td>D5084</td><td>Permeability of fine-grained soils (liners, caps)</td></tr>
<tr><td>Density by drive cylinder</td><td>D2937</td><td>In-place density of cohesive soil samples</td></tr>
<tr><td>Rock unconfined compressive strength</td><td>D7012</td><td>Strength of intact rock core</td></tr>
</table></div>
<h3>Choosing tests</h3>
<ul>
<li><strong>Classify everything</strong>: moisture content on nearly every sample; Atterberg limits and gradation on representative samples to confirm visual classifications.</li>
<li><strong>Strength</strong> for bearing capacity, slopes, and walls: UC, UU, CU, direct shear.</li>
<li><strong>Compressibility</strong> for settlement on clays and organics: consolidation, organic content.</li>
<li><strong>Compaction</strong> for fill: Proctor tests on proposed borrow or on-site soils; CBR for pavements.</li>
</ul>
<p>Laboratories performing construction materials and geotechnical testing are often accredited through programs such as AASHTO re:source, and WisDOT has its own qualification requirements for testing on state projects.</p>
`,
      check: [
        { type: "mc", q: "Which test provides the data needed to estimate settlement of a clay layer?", options: ["D2216 moisture", "D2435 consolidation", "D698 Proctor", "D6913 sieve"], answer: 1, explain: "Consolidation tests give σ'p, Cc, Cr, and cv." },
        { type: "mc", q: "ASTM D2974 measures:", options: ["Liquid limit", "Organic content (loss on ignition)", "CBR", "Specific gravity"], answer: 1, explain: "D2974 = moisture, ash, and organic matter of peat and organic soils." }
      ]
    },
    {
      title: "Reading boring logs and geotechnical reports",
      html: `
<h3>Anatomy of a boring log</h3>
<ul>
<li><strong>Header</strong>: project, boring number, location (station/offset or coordinates), ground surface elevation, dates, driller, rig, hammer type (automatic or safety), drilling method, and backfill.</li>
<li><strong>Depth and elevation</strong> columns.</li>
<li><strong>Sample</strong> columns: number and type (SS = split spoon; ST = Shelby tube; AU = auger cuttings; NQ = rock core), recovery, blows per 6 inches, N-value.</li>
<li><strong>Field tests</strong>: pocket penetrometer (tsf), PID for environmental work.</li>
<li><strong>Soil description</strong> with USCS symbol and stratum boundaries (solid lines where observed, dashed where approximate/gradual), and geologic interpretation (FILL, TOPSOIL, TILL, OUTWASH, LACUSTRINE, DOLOMITE).</li>
<li><strong>Laboratory results</strong>: moisture content, LL/PL, % fines, qu, dry density.</li>
<li><strong>Groundwater</strong>: symbols for water encountered during drilling, at completion, and after delay; cave-in depth.</li>
</ul>
<p>Typical Wisconsin profile you might see: <em>0–0.8 ft TOPSOIL; 0.8–4 ft FILL — brown clayey sand with gravel, brick fragments; 4–18 ft lean CLAY with sand (CL), brown to gray, stiff to very stiff — TILL; 18–25 ft poorly graded SAND with gravel (SP), wet, dense — OUTWASH; 25 ft auger refusal — DOLOMITE.</em></p>
<h3>The geotechnical engineering report</h3>
<ol>
<li><strong>Project description</strong> and assumed loads, finished floor elevation, and grading — recommendations are only valid for these assumptions.</li>
<li><strong>Field exploration and laboratory testing</strong> — methods and locations.</li>
<li><strong>Site and subsurface conditions</strong> — geology, soil profile, groundwater.</li>
<li><strong>Recommendations</strong>:
  <ul>
  <li>Site preparation: stripping topsoil, removing unsuitable fill or organics, proof-rolling, undercutting, structural fill requirements, compaction criteria.</li>
  <li>Foundations: type, <strong>allowable bearing pressure</strong> (e.g., 3,000 psf), minimum dimensions, minimum frost depth, estimated total and differential settlement; deep foundation capacities if needed.</li>
  <li>Floor slabs: subgrade preparation, base course, <strong>modulus of subgrade reaction (k)</strong>, vapor retarder.</li>
  <li>Seismic site class (per ASCE 7/IBC).</li>
  <li>Lateral earth pressures for walls; slope recommendations.</li>
  <li>Pavement sections or subgrade design parameters.</li>
  <li>Excavation, dewatering, and construction considerations (e.g., boulders, OSHA soil type).</li>
  <li>Construction observation and testing — the geotechnical engineer should verify that actual conditions match assumptions.</li>
  </ul></li>
<li><strong>Limitations</strong> — conditions between borings may differ; recommendations depend on construction-phase observation.</li>
</ol>
<div class="callout"><strong>Why the CMT tech should read the geotech report</strong>The report sets the compaction requirements, the bearing pressure you'll verify at footings, the soils that are unsuitable, and the proof-rolling expectations. If what you see in the field doesn't match the report, that's important information for the geotechnical engineer.</div>
`,
      check: [
        { type: "mc", q: "On a boring log, 'ST' in the sample type column means:", options: ["Standard test", "Shelby tube", "Split tube", "Stratum top"], answer: 1, explain: "ST = Shelby (thin-walled) tube; SS = split spoon." },
        { type: "mc", q: "Why must a geotechnical report state the assumed structural loads and finished floor elevation?", options: ["For marketing", "Recommendations are valid only for those assumptions", "It is required by OSHA", "To set the fee"], answer: 1, explain: "If loads or grades change, the engineer must re-evaluate recommendations." }
      ]
    }
  ],
  terms: [
    { term: "IBC Section 1803", def: "International Building Code section requiring geotechnical investigations for buildings." },
    { term: "Desk study", def: "Review of maps, prior reports, aerials, and project data before field exploration." },
    { term: "Split-spoon (split-barrel) sampler", def: "2-in OD sampler driven in the SPT; yields disturbed samples." },
    { term: "SPT (ASTM D1586)", def: "Standard Penetration Test: 140-lb hammer, 30-in drop, sampler driven 18 in in three 6-in increments." },
    { term: "N-value", def: "SPT blow count: sum of blows for the second and third 6-in increments (blows per foot)." },
    { term: "N60", def: "SPT N-value normalized to 60% hammer energy: N60 = N × ER/60." },
    { term: "SPT refusal", def: "Per D1586: 50 blows in any 6-in increment, 100 total blows, or no advance in 10 blows." },
    { term: "Heave (running sand)", def: "Sand flowing up into hollow augers below the water table, causing falsely low N-values." },
    { term: "Relative density (granular)", def: "SPT-based descriptors: very loose (0–4), loose (4–10), medium dense (10–30), dense (30–50), very dense (>50)." },
    { term: "Consistency (cohesive)", def: "Descriptors: very soft, soft, medium stiff, stiff, very stiff, hard — correlated to N and qu." },
    { term: "Shelby tube (ASTM D1587)", def: "Thin-walled tube pushed into cohesive soil to obtain relatively undisturbed samples." },
    { term: "Pocket penetrometer", def: "Hand device estimating unconfined compressive strength (tsf) of clay samples." },
    { term: "Field vane shear (ASTM D2573)", def: "In-situ test measuring undrained shear strength of soft clay with a rotated vane." },
    { term: "CPT / CPTu (ASTM D5778)", def: "Cone penetration test measuring tip resistance, sleeve friction, and (CPTu) pore pressure continuously." },
    { term: "Friction ratio (Rf)", def: "CPT sleeve friction divided by tip resistance × 100%; higher in clays, lower in sands." },
    { term: "DCP (ASTM D6951)", def: "Dynamic cone penetrometer for shallow strength profiling and bearing checks." },
    { term: "Test pit", def: "Excavation to directly observe subsurface conditions." },
    { term: "Rock core recovery", def: "Length of core recovered divided by core run length × 100." },
    { term: "RQD", def: "Rock Quality Designation: sum of intact core pieces ≥ 4 in divided by run length × 100." },
    { term: "NQ / HQ core", def: "Common wireline core sizes (~1.9-in and ~2.5-in core diameter)." },
    { term: "Cave-in depth", def: "Depth at which a borehole collapses after auger removal; recorded with groundwater data." },
    { term: "ASTM D2216", def: "Laboratory determination of soil moisture content by oven drying." },
    { term: "ASTM D2166", def: "Unconfined compressive strength of cohesive soil." },
    { term: "ASTM D2435", def: "One-dimensional consolidation test." },
    { term: "ASTM D2850 / D4767", def: "UU triaxial / CU triaxial compression tests." },
    { term: "ASTM D3080", def: "Direct shear test." },
    { term: "ASTM D698 / D1557", def: "Standard / modified Proctor compaction tests." },
    { term: "ASTM D1883", def: "California Bearing Ratio of laboratory-compacted soils." },
    { term: "ASTM D5084", def: "Hydraulic conductivity of saturated porous materials using a flexible-wall permeameter." },
    { term: "Allowable bearing pressure", def: "Recommended maximum foundation contact pressure including a factor of safety and settlement limits." },
    { term: "Modulus of subgrade reaction (k)", def: "Slab-on-grade design parameter: pressure per unit deflection (pci)." },
    { term: "Seismic site class", def: "ASCE 7/IBC classification of site soils (A–F) affecting seismic design." }
  ],
  resources: [
    { title: "FHWA — Geotechnical Engineering publications", url: "https://www.fhwa.dot.gov/engineering/geotech/", note: "Subsurface Investigations manual, Soils and Foundations manual" },
    { title: "WisDOT Geotechnical Manual", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/geotechmanual.aspx", note: "Wisconsin highway geotechnical practice" },
    { title: "ICC — International Building Code (public access)", url: "https://codes.iccsafe.org/", note: "Chapter 18 (Soils and Foundations)" },
    { title: "ASTM Volume 04.08 — Soil and Rock", url: "https://www.astm.org/", note: "D1586, D1587, D2216, D2166, D2435, D5778 and others" },
    { title: "Wisconsin Geological and Natural History Survey", url: "https://home.wgnhs.wisc.edu/", note: "Depth-to-bedrock and Quaternary geology for desk studies" },
    { title: "AASHTO re:source", url: "https://www.aashtoresource.org/", note: "Laboratory accreditation programs" }
  ],
  teach: [
    { prompt: "Describe how the SPT is performed and how the N-value is used, including one limitation. Then explain when you would take a Shelby tube instead.",
      model: "<p>A 2-inch OD split spoon is driven 18 inches in three 6-inch increments by a 140-lb hammer dropped 30 inches; blows per increment are recorded and N is the sum of the second and third increments. N (normalized to N60 for hammer energy) correlates to relative density in granular soils and roughly to consistency in clays, and is used for bearing capacity, settlement estimates, and seismic site class. Limitations: the sample is disturbed; N-values are affected by hammer energy, heave in sands below the water table, and gravel or cobbles that inflate counts; and it's a crude indicator of clay strength. Take a Shelby tube in cohesive soils when you need relatively undisturbed samples for consolidation or reliable strength tests — e.g., soft lacustrine clay under a heavy structure or embankment.</p>" },
    { prompt: "A boring log shows: 0–3 ft FILL with brick and cinders; 3–9 ft dark brown organic SILT (OL) and PEAT (Pt), N = 2–3; 9–30 ft lean CLAY (CL), very stiff, N = 20–28. What do you tell the project team?",
      model: "<p>The upper fill contains debris and may be contaminated (cinders can contain PAHs and metals), so it is unsuitable for support and may need environmental management. The 3–9 ft organic silt and peat is very soft and highly compressible, with secondary compression — unsuitable for foundations or slabs. Options: remove and replace the fill and organics with compacted structural fill if depth and groundwater allow, use ground improvement, or use deep foundations bearing in the very stiff lean clay below 9 ft (with a structurally supported floor or careful slab design). Estimated bearing and settlement must be confirmed by the geotechnical engineer, and construction-phase observation is needed to verify the removal limits.</p>" }
  ],
  exam: {
    count: 20,
    bank: [
      { type: "mc", q: "The SPT hammer weight and drop are:", options: ["140 lb, 30 in", "100 lb, 24 in", "140 lb, 18 in", "300 lb, 30 in"], answer: 0, explain: "140 lb dropping 30 in." },
      { type: "mc", q: "The SPT sampler is driven a total of:", options: ["12 in", "18 in", "24 in", "30 in"], answer: 1, explain: "18 in, in three 6-in increments." },
      { type: "num", q: "Blow counts: 3, 3, 4. N-value?", answer: 7, tol: 0, unit: "", explain: "3 + 4 = 7." },
      { type: "num", q: "Blow counts: 12, 18, 25. N-value?", answer: 43, tol: 0, unit: "", explain: "18 + 25 = 43." },
      { type: "mc", q: "A sand with N = 43 is:", options: ["Medium dense", "Dense", "Very dense", "Loose"], answer: 1, explain: "30–50 = dense." },
      { type: "mc", q: "A clay with N = 3 is:", options: ["Very soft", "Soft", "Medium stiff", "Stiff"], answer: 1, explain: "2–4 = soft." },
      { type: "mc", q: "A clay with qu = 2.5 tsf is:", options: ["Medium stiff", "Stiff", "Very stiff", "Hard"], answer: 2, explain: "2.0–4.0 tsf = very stiff." },
      { type: "num", q: "N = 24 with a safety hammer of ER = 60%. N60?", answer: 24, tol: 0, unit: "", explain: "24 × 60/60 = 24." },
      { type: "num", q: "N = 12 with an automatic hammer of ER = 85%. N60? Round to the nearest whole number.", answer: 17, tol: 0.5, unit: "", explain: "12 × 85/60 = 17.0." },
      { type: "mc", q: "A log entry of '50/2\"' means:", options: ["50 blows per foot", "50 blows drove the sampler 2 inches — refusal", "50 ft depth, 2 samples", "N = 52"], answer: 1, explain: "Refusal notation: blows for partial penetration." },
      { type: "mc", q: "Falsely low N-values in sand below the water table are often caused by:", options: ["Boulders", "Heave of sand into the augers", "Frozen ground", "Overconsolidation"], answer: 1, explain: "Heave loosens the soil at the sampling depth." },
      { type: "mc", q: "Which sampler gives relatively undisturbed samples of clay for consolidation testing?", options: ["Split spoon", "Shelby tube", "Auger cuttings", "DCP"], answer: 1, explain: "Thin-walled Shelby tubes." },
      { type: "mc", q: "A pocket penetrometer estimates:", options: ["N-value", "Unconfined compressive strength", "Moisture content", "Permeability"], answer: 1, explain: "It estimates qu in tsf." },
      { type: "mc", q: "Which in-situ test measures undrained shear strength of soft clay with a rotating vane?", options: ["SPT", "CPT", "Field vane shear (D2573)", "DCP"], answer: 2, explain: "Field vane shear." },
      { type: "multi", q: "Which does a piezocone (CPTu) measure? Select all that apply.", options: ["Tip resistance", "Sleeve friction", "Pore pressure", "Soil sample recovery"], answer: [0, 1, 2], explain: "CPT recovers no sample." },
      { type: "mc", q: "A key limitation of CPT in many Wisconsin glacial soils is:", options: ["Too slow", "Inability to penetrate dense till, cobbles, and gravel", "Requires a sample", "Only works in clay"], answer: 1, explain: "Cones meet refusal in dense, cobbly materials." },
      { type: "num", q: "Core run 10 ft (120 in). Intact pieces ≥ 4 in total 102 in. RQD (%)?", answer: 85, tol: 0, unit: "%", explain: "102/120 = 85% (good)." },
      { type: "mc", q: "RQD of 40% indicates rock quality of:", options: ["Very poor", "Poor", "Fair", "Good"], answer: 1, explain: "25–50 = poor." },
      { type: "mc", q: "When computing RQD, mechanical breaks caused by drilling are:", options: ["Counted as fractures", "Fitted together and not counted", "Ignored entirely, and the pieces discarded", "Counted double"], answer: 1, explain: "Only natural fractures reduce RQD." },
      { type: "mc", q: "Why record groundwater after a delay (e.g., 24 hours) in clay borings?", options: ["Drillers request it", "Water levels in low-permeability soils take time to stabilize", "To measure cave-in only", "OSHA requires it"], answer: 1, explain: "Clay recharges slowly." },
      { type: "mc", q: "ASTM D2216 determines:", options: ["Grain size", "Moisture content", "Liquid limit", "Consolidation"], answer: 1, explain: "Moisture content by oven drying." },
      { type: "mc", q: "Which test yields effective strength parameters with pore pressure measurement?", options: ["UU triaxial (D2850)", "CU triaxial (D4767)", "Unconfined compression", "Pocket penetrometer"], answer: 1, explain: "CU with pore pressure measurement gives c' and φ'." },
      { type: "mc", q: "Which test is used to determine maximum dry density at higher compactive effort?", options: ["D698", "D1557", "D1883", "D2435"], answer: 1, explain: "D1557 modified Proctor." },
      { type: "mc", q: "Which test is used for pavement subgrade strength in many designs?", options: ["CBR (D1883)", "Atterberg limits", "D2974", "D854"], answer: 0, explain: "California Bearing Ratio." },
      { type: "mc", q: "Organic content of peat is measured by:", options: ["D2974 loss on ignition", "D4318", "D6913", "D1586"], answer: 0, explain: "D2974." },
      { type: "mc", q: "Allowable bearing pressure in a geotech report:", options: ["Is the ultimate failure load", "Includes a factor of safety and considers settlement", "Is set by the contractor", "Applies to any loads"], answer: 1, explain: "It is a design value with safety factor and settlement considerations." },
      { type: "mc", q: "The modulus of subgrade reaction (k) is used to design:", options: ["Retaining walls", "Slabs on grade", "Piles", "Stormwater ponds"], answer: 1, explain: "k is a slab-on-grade parameter." },
      { type: "mc", q: "A dashed stratum line on a boring log indicates:", options: ["An observed sharp contact", "An approximate or gradual boundary", "Groundwater", "Refusal"], answer: 1, explain: "Dashed = approximate/gradual." },
      { type: "tf", q: "Soil conditions between borings are guaranteed to match the boring logs.", answer: false, explain: "Reports note that conditions between borings may differ — hence construction observation." }
    ]
  }
});
