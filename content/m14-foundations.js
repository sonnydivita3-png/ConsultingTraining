COURSE.addModule({
  id: "m14",
  track: "t3",
  title: "Foundations, Earthwork, Retaining Walls, and Slopes",
  hours: 5,
  summary: "How geotechnical recommendations become structures: shallow and deep foundations, frost protection, site preparation and fill, ground improvement, excavation support and dewatering, earth pressures, slope stability, seismic site class, and the geotechnical engineer's role during construction.",
  objectives: [
    "Distinguish shallow foundation types, explain bearing capacity versus settlement, and apply frost-depth concepts in Wisconsin.",
    "Describe deep foundation types, how they carry load, and how their capacity is verified.",
    "Explain site preparation, proof rolling, undercutting, structural fill, and ground improvement methods.",
    "Compute active and passive earth pressure coefficients and explain wall drainage and slope factor of safety.",
    "Describe seismic site class, construction monitoring, and the geotechnical engineer's construction-phase role."
  ],
  lessons: [
    {
      title: "Shallow foundations and frost protection",
      html: `
<h3>Types</h3>
<ul>
<li><strong>Spread (isolated) footings</strong> — square or rectangular pads under columns.</li>
<li><strong>Continuous (strip or wall) footings</strong> — under bearing walls and foundation walls.</li>
<li><strong>Mat (raft) foundations</strong> — one thick slab under the whole structure; spreads load where soils are weaker or loads are heavy.</li>
<li><strong>Slab-on-grade</strong> — floor slab supported directly on prepared subgrade and base course.</li>
</ul>
<h3>Two design checks</h3>
<ol>
<li><strong>Bearing capacity</strong> — the soil must not fail in shear beneath the footing. Terzaghi's bearing capacity equation estimates the ultimate capacity from cohesion, overburden, footing width, and bearing capacity factors (Nc, Nq, Nγ) that depend on the friction angle:
<span class="formula">q_ult = c·Nc + q·Nq + 0.5·γ·B·Nγ     (strip footing form; shape/depth factors added for others)
q_allowable = q_ult / FS               (FS commonly 2.5–3 for bearing)</span></li>
<li><strong>Settlement</strong> — even without shear failure, the soil compresses. Total settlement and especially <strong>differential settlement</strong> (difference between adjacent footings) must be within what the structure tolerates. Many commercial buildings are designed for about 1 inch total and about ½ to ¾ inch differential settlement, but limits are set project by project.</li>
</ol>
<p>The <strong>allowable bearing pressure</strong> in a geotechnical report (e.g., 3,000 psf) usually reflects whichever controls — bearing capacity with a factor of safety, or a pressure that keeps settlement within limits. On soft or variable soils, settlement nearly always controls.</p>
<h3>Frost protection in Wisconsin</h3>
<p>Footings must bear below the depth of frost penetration or be otherwise protected, to prevent frost heave (Module 12).</p>
<ul>
<li>Wisconsin's <strong>Uniform Dwelling Code</strong> (one- and two-family dwellings, SPS 320–325) generally requires footings to be at least <strong>48 inches</strong> below adjacent grade, with alternatives such as frost-protected shallow foundations meeting code criteria.</li>
<li>Commercial buildings follow the Wisconsin Commercial Building Code (which adopts the IBC with amendments) and project-specific geotechnical recommendations; minimum frost depths of about 4 feet in southern Wisconsin and deeper in the north are common in practice.</li>
<li><strong>Exterior</strong> footings and footings of <strong>unheated</strong> structures (canopies, unheated garages, retaining walls, light pole bases) need frost depth. Interior footings in heated buildings generally don't.</li>
<li>Footings and subgrades must <strong>never be placed on frozen soil</strong>, and completed footings must be protected from freezing beneath them during winter construction.</li>
</ul>
<h3>Footing bearing verification</h3>
<p>During construction, a geotechnical engineer or technician observes footing excavations to confirm that the exposed soils match the report and can support the design bearing pressure — using visual classification, hand augers, and the <strong>DCP</strong> or similar penetrometer. If soft, organic, or fill soils are found, they are typically <strong>undercut</strong> and replaced with compacted structural fill or lean concrete, with the excavation widened beyond the footing edges (often on a 1H:1V outward spread or as the geotechnical engineer recommends) so the load spreads through the new fill.</p>
`,
      check: [
        { type: "num", q: "A footing's ultimate bearing capacity is 9,000 psf. With a factor of safety of 3, what is the allowable bearing pressure (psf)?", answer: 3000, tol: 0, unit: "psf", explain: "9,000 / 3 = 3,000 psf." },
        { type: "mc", q: "Which footing typically needs to be placed at frost depth?", options: ["Interior column footing in a heated building", "Exterior footing of an unheated canopy", "Interior slab thickening in a heated warehouse", "None in Wisconsin"], answer: 1, explain: "Unheated and exterior footings need frost protection." }
      ]
    },
    {
      title: "Deep foundations",
      html: `
<p>When competent soil is too deep for shallow foundations, or loads are very high, loads are carried down to stronger strata by deep foundations.</p>
<h3>Types</h3>
<div class="tbl-wrap"><table>
<tr><th>Type</th><th>Description</th><th>Notes</th></tr>
<tr><td><strong>Driven piles</strong></td><td>Steel H-piles, steel pipe piles (closed-end, concrete-filled), precast concrete, timber — driven by impact or vibratory hammers</td><td>Common on Wisconsin bridges and heavy buildings; noise and vibration</td></tr>
<tr><td><strong>Drilled shafts</strong> (caissons)</td><td>Large-diameter holes drilled and filled with reinforced concrete</td><td>High capacity; can socket into rock; need inspection of the base and careful concrete placement (tremie below water)</td></tr>
<tr><td><strong>Auger-cast piles</strong> (ACIP / CFA)</td><td>Hollow-stem auger drilled in; grout pumped through the stem as it is withdrawn; reinforcement inserted</td><td>Low vibration; requires careful monitoring of grout volume and pressure</td></tr>
<tr><td><strong>Helical piles</strong></td><td>Steel shafts with helical plates screwed into the ground</td><td>Light to moderate loads, tight access, additions; capacity correlated to installation torque</td></tr>
<tr><td><strong>Micropiles</strong></td><td>Small-diameter drilled and grouted piles</td><td>Underpinning, low headroom, difficult ground</td></tr>
</table></div>
<h3>How piles carry load</h3>
<ul>
<li><strong>End bearing</strong> — load transferred through the tip into a strong layer (dense sand, hard till, bedrock).</li>
<li><strong>Side (skin) friction</strong> — load transferred along the shaft by friction or adhesion.</li>
<li><strong>Downdrag (negative skin friction)</strong> — when soft soils or fill around the pile settle (e.g., under new fill over peat), they drag the pile down, <em>adding</em> load instead of resisting it.</li>
</ul>
<h3>Verifying capacity</h3>
<ul>
<li><strong>Static load test</strong> (ASTM D1143) — the most direct: load a test pile with a reaction frame and measure movement.</li>
<li><strong>Dynamic testing</strong> (ASTM D4945) — strain gauges and accelerometers on the pile measure each hammer blow with a <strong>Pile Driving Analyzer (PDA)</strong>; signal matching (e.g., CAPWAP) estimates capacity.</li>
<li><strong>Wave equation analysis</strong> — predicts driveability, stresses, and the blow count needed for a given capacity; used to develop <strong>driving criteria</strong>.</li>
<li><strong>Dynamic formulas</strong> — empirical relationships between hammer energy and set per blow; transportation agencies, including WisDOT, have used formulas such as the modified Gates formula for driven pile acceptance when other methods aren't specified.</li>
<li><strong>Restrike</strong> — re-driving after a waiting period to measure <strong>setup</strong> (capacity gain over time, common in clays) or <strong>relaxation</strong> (loss, sometimes in dense fine sands and some shales).</li>
</ul>
<p>A pile inspector records for each pile: location, length, hammer, blows per foot (and blows per inch near the end), final set, elevation of tip and cutoff, plumbness, and any damage. For auger-cast piles: grout volume versus theoretical, pressure, and auger withdrawal rate.</p>
`,
      check: [
        { type: "mc", q: "New fill placed over peat causes the peat to settle around existing piles. The resulting effect on the piles is:", options: ["Increased capacity", "Downdrag (negative skin friction) adding load", "Setup", "Relaxation"], answer: 1, explain: "Settling soils drag down on piles." },
        { type: "mc", q: "A Pile Driving Analyzer measures:", options: ["Static load-settlement", "Strain and acceleration during hammer blows", "Grout volume", "Concrete slump"], answer: 1, explain: "PDA dynamic testing per ASTM D4945." }
      ]
    },
    {
      title: "Site preparation, earthwork, and ground improvement",
      html: `
<h3>Site preparation sequence (typical)</h3>
<ol>
<li><strong>Clearing and stripping</strong> — remove vegetation, topsoil (organic, compressible), and root mat from building and pavement areas.</li>
<li><strong>Remove unsuitable materials</strong> — uncontrolled fill, debris, organic soils, soft soils, as identified by the geotechnical report and field observation.</li>
<li><strong>Proof roll</strong> the exposed subgrade with heavy rubber-tired equipment (commonly a loaded tandem-axle dump truck) while the geotechnical representative watches for <strong>rutting, pumping</strong> (soil moving up and down like a waterbed), or deflection. Unstable areas are marked.</li>
<li><strong>Correct unstable areas</strong> — scarify, moisture-condition, and recompact; or <strong>undercut</strong> and replace with granular fill; or stabilize with geotextile/geogrid and coarse stone (WisDOT "breaker run" and "select crushed material" are common Wisconsin choices) or with chemical stabilization (lime, cement, fly ash).</li>
<li><strong>Place structural fill</strong> in controlled lifts.</li>
</ol>
<h3>Structural (engineered) fill</h3>
<p>Specifications define:</p>
<ul>
<li><strong>Material</strong> — gradation, maximum particle size, plasticity limits, no organics or debris.</li>
<li><strong>Lift thickness</strong> — commonly 8–12 inches loose, thinner for hand-operated compactors.</li>
<li><strong>Compaction</strong> — a percent of maximum dry density from a Proctor test, e.g., ≥ 95% of standard Proctor (ASTM D698) beneath buildings, sometimes 98–100% beneath footings or ≥ 95% of modified Proctor (D1557) for some pavements.</li>
<li><strong>Moisture</strong> — within a range around optimum (e.g., −2% to +2%); clays placed too wet pump, too dry may later swell or collapse.</li>
<li><strong>Testing frequency</strong> — e.g., one test per lift per a set area (Module 15).</li>
</ul>
<p>Wet, silty and clayey Wisconsin soils in spring can be nearly impossible to compact until dried by disking and aerating, or replaced with granular fill. Winter earthwork: never place fill that is frozen or contains frozen clods, and never place fill on frozen subgrade.</p>
<h3>Ground improvement</h3>
<div class="tbl-wrap"><table>
<tr><th>Method</th><th>How it works</th><th>Used for</th></tr>
<tr><td><strong>Rammed aggregate piers</strong></td><td>Drilled holes filled with aggregate rammed in thin lifts, creating stiff piers that reinforce soil</td><td>Supporting shallow footings and slabs on soft to medium soils</td></tr>
<tr><td><strong>Stone columns</strong> (vibro-replacement)</td><td>Vibrating probe displaces soil; stone backfill forms columns</td><td>Reinforcement and drainage of soft soils, loose sands</td></tr>
<tr><td><strong>Preloading / surcharging with wick drains</strong></td><td>Temporary fill load pre-consolidates soft clay before construction; prefabricated vertical (wick) drains shorten the drainage path</td><td>Soft clays and organic soils under embankments and slabs</td></tr>
<tr><td><strong>Dynamic compaction</strong></td><td>Heavy weight dropped repeatedly from a crane</td><td>Loose granular fills, old dumps</td></tr>
<tr><td><strong>Rigid inclusions</strong>, <strong>deep soil mixing</strong></td><td>Grout or cement columns, or soil mixed with cement in place</td><td>Very soft soils, high loads, settlement control</td></tr>
<tr><td><strong>Vibro-compaction</strong></td><td>Vibration densifies clean sands</td><td>Loose sands</td></tr>
</table></div>
<h3>Excavation support and dewatering</h3>
<ul>
<li><strong>Support systems</strong>: soldier piles and lagging, steel sheet piles, secant/tangent pile walls, braced or tied-back systems, soil nails.</li>
<li><strong>Dewatering</strong>: sumps and pumps (for small inflows), wellpoints, deep wells; must consider treatment and permits if groundwater is contaminated, and settlement of nearby structures (effective stress!).</li>
<li><strong>Underpinning</strong> of adjacent foundations when excavating below them.</li>
</ul>
`,
      check: [
        { type: "mc", q: "During proof rolling, 'pumping' refers to:", options: ["Running a water pump", "Subgrade soil moving up and down under the wheel load", "Fuel delivery", "Dewatering"], answer: 1, explain: "Pumping indicates unstable, often wet subgrade." },
        { type: "mc", q: "Wick drains are used with preloading to:", options: ["Dewater sand", "Shorten the drainage path and speed consolidation of soft clay", "Increase frost heave", "Support piles"], answer: 1, explain: "Consolidation time scales with drainage path squared." }
      ]
    },
    {
      title: "Earth pressure, retaining walls, and slope stability",
      html: `
<h3>Lateral earth pressure</h3>
<p>Soil pushes sideways on walls. The lateral pressure depends on how much the wall moves:</p>
<ul>
<li><strong>At-rest (K₀)</strong> — no wall movement (e.g., a basement wall braced by floors). For normally consolidated soil, K₀ ≈ 1 − sin φ'.</li>
<li><strong>Active (Ka)</strong> — wall moves slightly away from the soil (e.g., a cantilever retaining wall); lowest pressure.</li>
<li><strong>Passive (Kp)</strong> — wall pushes into the soil (e.g., soil in front of a footing resisting sliding); highest resistance.</li>
</ul>
<span class="formula">Rankine (level backfill, vertical smooth wall, c' = 0):
Ka = tan²(45° − φ'/2)        Kp = tan²(45° + φ'/2)
Active force per foot of wall:  Pa = ½ · Ka · γ · H²   (acts at H/3 above the base)</span>
<div class="callout"><strong>Example</strong>φ' = 30°: Ka = tan²(30°) = 0.333; Kp = tan²(60°) = 3.0. For a 10-ft wall retaining soil at 120 pcf: Pa = 0.5 × 0.333 × 120 × 10² = 2,000 lb per foot of wall.</div>
<h3>Water is the enemy</h3>
<p>Water pressure behind a wall acts with K = 1 (full hydrostatic), roughly doubling the load compared with drained soil. That's why walls have <strong>free-draining granular backfill</strong>, drainage composites, perforated drain pipes at the base, and weep holes. Many wall failures are drainage failures. Clayey backfill also adds frost and swelling pressures.</p>
<h3>Retaining wall types</h3>
<ul>
<li><strong>Cantilever reinforced concrete</strong> walls.</li>
<li><strong>Gravity</strong> walls (mass concrete, stone, gabions).</li>
<li><strong>Segmental retaining walls (SRW)</strong> — dry-stacked concrete blocks, often with geogrid reinforcement.</li>
<li><strong>Mechanically stabilized earth (MSE)</strong> — reinforced soil mass using geogrid or steel strips with a facing; common on highway projects.</li>
<li><strong>Sheet pile and soldier pile walls</strong> — often temporary excavation support, sometimes permanent.</li>
</ul>
<p>Walls are checked for sliding, overturning, bearing, and global stability. In Wisconsin, taller walls generally require engineered design and may require building permits.</p>
<h3>Slope stability</h3>
<span class="formula">Factor of safety (FS) = resisting forces (shear strength) / driving forces (shear stress)</span>
<p>FS = 1.0 means failure is imminent. A minimum FS of about 1.5 is a common target for permanent slopes under long-term (static) conditions, with lower values sometimes accepted for temporary conditions, as the engineer of record determines. Failures are often rotational (circular slip surfaces in clay) or translational (sliding along a weak layer). Common triggers:</p>
<ul>
<li>Rising groundwater or saturation after heavy rain or snowmelt (effective stress drops).</li>
<li>Steepening the slope or excavating the <strong>toe</strong>.</li>
<li>Adding load at the <strong>crest</strong> (fill, stockpiles, buildings).</li>
<li>Erosion, especially on lake bluffs — Lake Michigan bluff recession is a well-known Wisconsin coastal hazard.</li>
</ul>
`,
      check: [
        { type: "num", q: "For φ' = 30°, Ka = 0.333. What is the active force per foot of wall (lb/ft) for an 8-ft wall retaining soil at γ = 120 pcf? Round to the nearest 10.", answer: 1280, tol: 10, unit: "lb/ft", explain: "Pa = 0.5 × 0.333 × 120 × 64 = 1,279 ≈ 1,280 lb/ft." },
        { type: "mc", q: "Which earth pressure condition gives the highest resistance?", options: ["Active", "At-rest", "Passive", "Hydrostatic"], answer: 2, explain: "Passive pressure develops when the wall pushes into the soil." },
        { type: "tf", q: "Excavating the toe of a slope tends to decrease its factor of safety.", answer: true, explain: "Removing toe support reduces resisting forces." }
      ]
    },
    {
      title: "Seismic site class, monitoring, and construction-phase geotechnical services",
      html: `
<h3>Seismic site class</h3>
<p>Wisconsin has low seismic hazard, but the building code still requires a <strong>seismic site class</strong> for structural design. ASCE 7 (referenced by the IBC) assigns classes from <strong>A</strong> (hard rock) through <strong>F</strong> (soils requiring site-specific evaluation, such as liquefiable soils, peats, and very thick soft clays), based on the average shear wave velocity, SPT N-value, or undrained shear strength in the upper 100 feet (30 m). Recent editions (ASCE 7-22) added intermediate classes (e.g., BC, CD, DE). Soft soils amplify ground shaking, so a softer site class increases design forces.</p>
<p><strong>Liquefaction</strong> — loss of strength of loose, saturated sands during earthquake shaking — is a minor concern in most of Wisconsin but is part of the same vocabulary.</p>
<h3>Geotechnical instrumentation and monitoring</h3>
<div class="tbl-wrap"><table>
<tr><th>Instrument</th><th>Measures</th></tr>
<tr><td>Settlement plates / survey points</td><td>Settlement under fills and structures</td></tr>
<tr><td>Piezometers</td><td>Pore water pressure (e.g., during preloading of soft clay)</td></tr>
<tr><td>Inclinometers</td><td>Lateral movement with depth (slopes, excavation walls)</td></tr>
<tr><td>Seismographs / vibration monitors</td><td>Ground vibration from pile driving, compaction, blasting — protects neighboring structures</td></tr>
<tr><td>Crack monitors and preconstruction surveys</td><td>Documentation of existing conditions of nearby buildings</td></tr>
</table></div>
<h3>The geotechnical engineer during construction</h3>
<p>The geotechnical report is a prediction based on a few borings. Construction is when the prediction is tested. Typical construction-phase services:</p>
<ul>
<li>Observe stripping, undercuts, and proof rolling; recommend corrective work.</li>
<li>Verify footing bearing soils.</li>
<li>Monitor fill placement and compaction (with CMT testing).</li>
<li>Observe pile installation and dynamic testing; drilled shaft bottoms.</li>
<li>Evaluate unexpected conditions (soft zones, groundwater, buried debris) and issue recommendations.</li>
</ul>
<h3>Roles and boundaries</h3>
<ul>
<li>Your job is to <strong>observe, test, report, and recommend</strong> — not to direct the contractor's <strong>means and methods</strong> (how they do the work) or site safety, which are the contractor's responsibility. Report non-conforming work to the appropriate party (often the owner's representative and the engineer of record) per the project's communication protocol.</li>
<li>Communicate discrepancies promptly: "Soft clay encountered at footing grade along line C, 2–3 ft deeper than in boring B-4; recommended undercut to firm till and replacement with compacted granular fill; EOR notified at 10:15 a.m."</li>
<li>Document everything in daily field reports with locations, observations, test results, and who was notified.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Soft soils generally cause a seismic site class that:", options: ["Reduces design forces", "Amplifies shaking and increases design forces", "Has no effect", "Applies only to bridges"], answer: 1, explain: "Soft soils amplify ground motion." },
        { type: "mc", q: "Who is responsible for construction means and methods?", options: ["The geotechnical technician", "The contractor", "The DNR", "The lender"], answer: 1, explain: "Consultants observe and test; contractors control means, methods, and site safety." }
      ]
    }
  ],
  terms: [
    { term: "Spread footing", def: "Isolated pad footing under a column." },
    { term: "Strip (continuous) footing", def: "Continuous footing under a bearing wall." },
    { term: "Mat (raft) foundation", def: "Single thick slab supporting an entire structure." },
    { term: "Bearing capacity", def: "Pressure a soil can carry without shear failure; ultimate capacity divided by a factor of safety gives allowable." },
    { term: "Terzaghi bearing capacity equation", def: "q_ult = cNc + qNq + 0.5γBNγ (strip footing form)." },
    { term: "Differential settlement", def: "Difference in settlement between parts of a structure; causes distress." },
    { term: "Frost depth", def: "Depth of seasonal frost penetration; footings must bear below it or be protected." },
    { term: "Uniform Dwelling Code (UDC)", def: "Wisconsin building code for one- and two-family dwellings (SPS 320–325); generally 48-in footing depth for frost." },
    { term: "Frost-protected shallow foundation", def: "Shallow foundation using insulation to prevent frost penetration beneath footings." },
    { term: "Undercut", def: "Removing unsuitable soil below design grade and replacing with compacted fill or lean concrete." },
    { term: "Driven pile", def: "Steel, concrete, or timber pile driven by a hammer." },
    { term: "Drilled shaft", def: "Large-diameter drilled hole filled with reinforced concrete (caisson)." },
    { term: "Auger-cast pile (ACIP)", def: "Pile formed by pumping grout through a hollow auger as it is withdrawn." },
    { term: "Helical pile", def: "Steel shaft with helical plates screwed into the ground; capacity correlated to torque." },
    { term: "End bearing", def: "Pile load transfer through the tip." },
    { term: "Skin (side) friction", def: "Pile load transfer along the shaft." },
    { term: "Downdrag", def: "Negative skin friction from settling soils adding load to a pile." },
    { term: "Static load test (ASTM D1143)", def: "Direct measurement of pile load versus movement." },
    { term: "PDA (ASTM D4945)", def: "Pile Driving Analyzer: dynamic measurements during driving to estimate capacity and stresses." },
    { term: "Wave equation analysis", def: "Analysis predicting pile driveability and blow count vs. capacity." },
    { term: "Setup / relaxation", def: "Gain / loss of pile capacity with time after driving; measured by restrike." },
    { term: "Proof rolling", def: "Driving heavy rubber-tired equipment over subgrade to reveal soft areas by rutting or pumping." },
    { term: "Structural fill", def: "Engineered fill placed in controlled lifts to specified material, moisture, and compaction requirements." },
    { term: "Breaker run", def: "WisDOT coarse crushed stone/rock material commonly used to stabilize soft subgrades." },
    { term: "Rammed aggregate pier", def: "Ground improvement column of rammed aggregate stiffening soil beneath footings." },
    { term: "Wick drain (PVD)", def: "Prefabricated vertical drain shortening drainage paths to accelerate consolidation." },
    { term: "Surcharge / preload", def: "Temporary fill used to pre-consolidate soft soils before construction." },
    { term: "Soldier pile and lagging", def: "Excavation support of vertical steel piles with horizontal lagging boards." },
    { term: "At-rest pressure (K₀)", def: "Lateral earth pressure with no wall movement; ≈ 1 − sin φ' for NC soil." },
    { term: "Active pressure (Ka)", def: "Lateral pressure when a wall yields away from soil; Ka = tan²(45° − φ'/2)." },
    { term: "Passive pressure (Kp)", def: "Resistance when a wall pushes into soil; Kp = tan²(45° + φ'/2)." },
    { term: "MSE wall", def: "Mechanically stabilized earth wall using reinforcement (geogrid or steel strips) in compacted fill." },
    { term: "Segmental retaining wall (SRW)", def: "Dry-stacked concrete block wall, often geogrid-reinforced." },
    { term: "Slope factor of safety", def: "Ratio of resisting shear strength to driving shear stress; ~1.5 common long-term target." },
    { term: "Seismic site class", def: "ASCE 7 classification (A–F, with intermediate classes in ASCE 7-22) based on upper 100 ft soil stiffness." },
    { term: "Liquefaction", def: "Loss of strength of loose saturated sand during earthquake shaking." },
    { term: "Inclinometer", def: "Instrument measuring lateral ground movement with depth." },
    { term: "Means and methods", def: "The contractor's procedures for performing work; not directed by testing consultants." }
  ],
  resources: [
    { title: "FHWA — Geotechnical Engineering Circulars and manuals", url: "https://www.fhwa.dot.gov/engineering/geotech/", note: "Shallow foundations, drilled shafts, driven piles, ground improvement, MSE walls" },
    { title: "Wisconsin Uniform Dwelling Code (SPS 320–325)", url: "https://docs.legis.wisconsin.gov/code/admin_code/sps", note: "Footing and frost requirements for dwellings" },
    { title: "Wisconsin Commercial Building Code (SPS 361–366)", url: "https://docs.legis.wisconsin.gov/code/admin_code/sps", note: "IBC adoption with Wisconsin amendments" },
    { title: "WisDOT Bridge Manual", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/strct/bridge-manual.aspx", note: "Foundation design for Wisconsin bridges" },
    { title: "OSHA — Trenching and Excavation", url: "https://www.osha.gov/trenching-excavation", note: "Excavation support context" },
    { title: "USGS — Seismic Hazard Maps", url: "https://www.usgs.gov/programs/earthquake-hazards/hazards", note: "National seismic hazard model" }
  ],
  teach: [
    { prompt: "You're observing footing excavations and find 2 feet of soft, dark organic soil at design bearing elevation along one wall. Explain what you do, what the likely fix is, and how you document it.",
      model: "<p>Stop and notify the geotechnical engineer (and the EOR/owner's representative per protocol) because the soil doesn't match the report and can't support the design bearing pressure. Probe to find the bottom of the organic layer (hand auger, DCP) and the limits along the wall. The likely recommendation is to undercut through the organics to competent soil and backfill with compacted structural fill or lean concrete, widening the undercut beyond the footing edges so load spreads (commonly about 1H:1V outward), with compaction testing of each lift. The contractor decides how to excavate and protect the excavation (means, methods, safety). Document in the daily report: locations (gridlines/stations), depths, soil descriptions, DCP results, photos, who was notified and when, the recommendation, and follow-up test results.</p>" },
    { prompt: "Explain why the drainage behind a retaining wall matters so much, using earth pressure concepts.",
      model: "<p>A drained granular backfill with φ' = 30° exerts active pressure with Ka ≈ 0.33 times the soil's vertical stress. If water builds up behind the wall, the water exerts full hydrostatic pressure (coefficient of 1.0 on γw) in addition to the submerged soil's earth pressure, so total lateral load can roughly double. Saturation also adds frost and swelling pressures in clayey backfill. That's why walls use free-draining backfill, drainage composites, perforated toe drains, and weep holes — and why many wall failures trace back to clogged or missing drainage.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "A mat foundation is used primarily when:", options: ["Loads are light and soils are strong", "Loads are heavy or soils are weak, so a single slab spreads load", "Frost depth is shallow", "Piles are required"], answer: 1, explain: "Mats spread load over the full footprint." },
      { type: "mc", q: "On soft or variable soils, the allowable bearing pressure is most often controlled by:", options: ["Shear failure", "Settlement", "Frost", "Seismic"], answer: 1, explain: "Settlement usually governs on compressible soils." },
      { type: "num", q: "Allowable bearing pressure is 2,500 psf. A column load is 100,000 lb. What footing area (ft²) is required?", answer: 40, tol: 0, unit: "ft²", explain: "100,000 / 2,500 = 40 ft² (e.g., about 6.3 × 6.3 ft)." },
      { type: "mc", q: "Wisconsin's UDC generally requires dwelling footings to be at least how deep below adjacent grade for frost?", options: ["24 in", "36 in", "48 in", "72 in"], answer: 2, explain: "48 inches, unless an alternative such as a frost-protected shallow foundation is used." },
      { type: "tf", q: "Placing a footing on frozen soil is acceptable if the concrete is heated.", answer: false, explain: "Footings must never bear on frozen soil; thaw causes settlement." },
      { type: "mc", q: "When an undercut is backfilled beneath a footing, the excavation is widened beyond the footing edges to:", options: ["Save concrete", "Allow load to spread through the new fill", "Improve drainage only", "Meet OSHA rules"], answer: 1, explain: "Load spreads outward with depth." },
      { type: "mc", q: "Which deep foundation is formed by pumping grout through a hollow auger as it is withdrawn?", options: ["Drilled shaft", "Auger-cast pile", "H-pile", "Helical pile"], answer: 1, explain: "ACIP/CFA piles." },
      { type: "mc", q: "Helical pile capacity is commonly correlated to:", options: ["Hammer blows", "Installation torque", "Grout volume", "Concrete slump"], answer: 1, explain: "Torque-capacity correlations." },
      { type: "mc", q: "The most direct way to verify pile capacity is:", options: ["Dynamic formula", "Static load test", "Visual inspection", "Wave equation"], answer: 1, explain: "Static load test (ASTM D1143)." },
      { type: "mc", q: "Capacity gain of a pile in clay days after driving is called:", options: ["Relaxation", "Setup", "Downdrag", "Heave"], answer: 1, explain: "Setup." },
      { type: "mc", q: "Proof rolling is typically performed with:", options: ["A smooth drum vibratory roller only", "A loaded tandem-axle dump truck or similar heavy rubber-tired equipment", "A hand tamper", "A crane"], answer: 1, explain: "Heavy rubber-tired loads reveal unstable subgrade." },
      { type: "mc", q: "A typical loose lift thickness for structural fill compacted by large equipment is:", options: ["2–4 in", "8–12 in", "24–36 in", "48 in"], answer: 1, explain: "8–12 inches loose is common." },
      { type: "mc", q: "Clay fill placed well above optimum moisture tends to:", options: ["Compact easily", "Pump and fail to reach density", "Freeze", "Liquefy"], answer: 1, explain: "Wet clays pump under compaction equipment." },
      { type: "mc", q: "Which ground improvement method uses temporary fill to pre-consolidate soft clay?", options: ["Dynamic compaction", "Surcharge/preload", "Vibro-compaction", "Soil nailing"], answer: 1, explain: "Preloading." },
      { type: "mc", q: "Rammed aggregate piers are primarily used to:", options: ["Dewater excavations", "Stiffen soils to support shallow footings and slabs", "Anchor walls", "Treat contamination"], answer: 1, explain: "They reinforce soft to medium soils." },
      { type: "num", q: "Compute Ka for φ' = 34° using Ka = tan²(45° − φ'/2). Round to three decimals.", answer: 0.283, tol: 0.003, unit: "", explain: "tan²(28°) = 0.5317² = 0.283." },
      { type: "num", q: "Compute Kp for φ' = 30°.", answer: 3, tol: 0.01, unit: "", explain: "tan²(60°) = 3.0." },
      { type: "num", q: "Ka = 0.30, γ = 125 pcf, wall height 12 ft. Active force per foot (lb/ft)?", answer: 2700, tol: 1, unit: "lb/ft", explain: "0.5 × 0.30 × 125 × 144 = 2,700 lb/ft." },
      { type: "mc", q: "The resultant active force on a wall with triangular pressure acts at:", options: ["H/2", "H/3 above the base", "The top", "2H/3 above the base"], answer: 1, explain: "Triangular distribution → H/3 from the base." },
      { type: "mc", q: "A basement wall braced by the floor framing is usually designed for:", options: ["Active pressure", "At-rest pressure", "Passive pressure", "No pressure"], answer: 1, explain: "Restrained walls don't yield enough to reach active conditions." },
      { type: "mc", q: "Why is free-draining backfill specified behind retaining walls?", options: ["It is cheaper", "To prevent hydrostatic pressure buildup", "To increase passive pressure", "To freeze faster"], answer: 1, explain: "Water pressure can double wall loads." },
      { type: "mc", q: "A slope factor of safety of 1.0 means:", options: ["Very safe", "Failure is imminent", "The slope is vertical", "Seismic design"], answer: 1, explain: "Resisting = driving." },
      { type: "multi", q: "Which actions tend to reduce slope stability? Select all that apply.", options: ["Raising groundwater", "Loading the crest", "Excavating the toe", "Flattening the slope"], answer: [0, 1, 2], explain: "Flattening increases stability." },
      { type: "mc", q: "Seismic site class is based on soil properties in the upper:", options: ["10 ft", "30 ft", "100 ft (30 m)", "500 ft"], answer: 2, explain: "Upper 100 ft (30 m)." },
      { type: "mc", q: "Which instrument measures lateral ground movement with depth?", options: ["Piezometer", "Inclinometer", "Settlement plate", "Seismograph"], answer: 1, explain: "Inclinometer." },
      { type: "mc", q: "Vibration monitors during pile driving primarily protect:", options: ["The pile", "Nearby structures", "The hammer", "Groundwater"], answer: 1, explain: "They document and limit vibration at neighboring structures." },
      { type: "mc", q: "If a geotechnical technician sees conditions that differ from the report, they should:", options: ["Ignore it if the contractor agrees", "Promptly notify the geotechnical engineer and document it", "Redesign the foundation", "Tell the contractor how to dig"], answer: 1, explain: "Discrepancies go to the engineer and into the record." }
    ]
  }
});
