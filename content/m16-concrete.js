COURSE.addModule({
  id: "m16",
  track: "t4",
  title: "Concrete, Reinforcement, and Masonry",
  hours: 5,
  summary: "Concrete is the material CMT technicians test most. This module covers concrete ingredients and mix concepts, ordering and placing, the ASTM field tests (sampling, slump, air, temperature, unit weight, cylinders), compressive strength testing and ACI 318 acceptance, low-strength investigations, reinforcing steel inspection, and masonry testing.",
  objectives: [
    "Describe concrete ingredients — cement types, SCMs, aggregates, admixtures — and the role of water–cementitious ratio and air entrainment.",
    "Explain ready-mix delivery limits, placement, curing, and hot- and cold-weather practices.",
    "State the key procedures of ASTM C172, C143, C231/C173, C1064, C138, and C31.",
    "Calculate cylinder strengths and apply ACI 318 acceptance criteria, including core criteria.",
    "Inspect reinforcing steel and describe basic masonry materials and tests."
  ],
  lessons: [
    {
      title: "Concrete ingredients and mix fundamentals",
      html: `
<p>Concrete = <strong>cementitious paste</strong> (cement + supplementary cementitious materials + water) binding <strong>aggregates</strong> (typically 60–75% of the volume), plus <strong>air</strong> and <strong>admixtures</strong>. Cement reacts chemically with water (<strong>hydration</strong>) to form a hardened paste; concrete gains strength over weeks, which is why 28 days is the usual specified age.</p>
<h3>Portland cement types (ASTM C150)</h3>
<div class="tbl-wrap"><table>
<tr><th>Type</th><th>Use</th></tr>
<tr><td>I</td><td>General purpose</td></tr>
<tr><td>II</td><td>Moderate sulfate resistance (and moderate heat of hydration options)</td></tr>
<tr><td>III</td><td>High early strength</td></tr>
<tr><td>IV</td><td>Low heat of hydration (massive pours)</td></tr>
<tr><td>V</td><td>High sulfate resistance</td></tr>
</table></div>
<p><strong>Blended cements (ASTM C595)</strong> are increasingly common, especially <strong>Type IL (portland-limestone cement)</strong>, which has a lower carbon footprint. Others include IP (pozzolan), IS (slag), and IT (ternary).</p>
<h3>Supplementary cementitious materials (SCMs)</h3>
<ul>
<li><strong>Fly ash</strong> (ASTM C618, Class F and Class C) — coal combustion byproduct; improves workability, long-term strength, and durability; slows early strength.</li>
<li><strong>Slag cement</strong> (ASTM C989) — ground granulated blast-furnace slag.</li>
<li><strong>Silica fume</strong> (ASTM C1240) — very fine; high strength and low permeability.</li>
</ul>
<h3>Aggregates and admixtures</h3>
<ul>
<li>Concrete aggregates meet <strong>ASTM C33</strong> (gradation, deleterious materials, soundness).</li>
<li>Chemical admixtures (<strong>ASTM C494</strong>): Type A water-reducing, B retarding, C accelerating, D water-reducing and retarding, E water-reducing and accelerating, F high-range water-reducing ("superplasticizer"), G high-range water-reducing and retarding.</li>
<li><strong>Air-entraining admixtures</strong> (<strong>ASTM C260</strong>) create billions of microscopic bubbles.</li>
</ul>
<h3>The two most important mix concepts</h3>
<ol>
<li><strong>Water–cementitious materials ratio (w/cm)</strong> — weight of water ÷ weight of all cementitious materials. Lower w/cm = higher strength, lower permeability, better durability. Adding water at the site raises w/cm and lowers strength. Example: 270 lb water / 600 lb cementitious = 0.45.</li>
<li><strong>Entrained air for freeze–thaw durability</strong> — the bubbles give freezing water room to expand. Wisconsin exterior concrete exposed to freezing, thawing, and deicing salts (ACI 318 exposure classes F2/F3) typically requires around 6% air (varying with aggregate size), with tolerances such as ±1.5%. Too little air = scaling and freeze–thaw damage; too much = lower strength (roughly 5% strength loss per 1% excess air is a common rule of thumb).</li>
</ol>
<div class="mnemonic">Admixture types: "<strong>A</strong> <strong>B</strong>ig <strong>C</strong>at <strong>D</strong>oes <strong>E</strong>verything <strong>F</strong>ast, <strong>G</strong>ently" — A reducer, B retarder, C accelerator, D reduce+retard, E reduce+accelerate, F high-range reducer, G high-range+retard.</div>
`,
      check: [
        { type: "num", q: "A mix has 285 lb of water and 570 lb of total cementitious material per cubic yard. What is the w/cm?", answer: 0.5, tol: 0.001, unit: "", explain: "285 / 570 = 0.50." },
        { type: "mc", q: "Which cement type is designed for high early strength?", options: ["Type I", "Type II", "Type III", "Type V"], answer: 2, explain: "Type III." },
        { type: "mc", q: "Entrained air is required in Wisconsin exterior concrete primarily for:", options: ["Higher strength", "Freeze–thaw and deicer scaling resistance", "Faster setting", "Lower cost"], answer: 1, explain: "Microscopic air voids relieve freezing pressure." }
      ]
    },
    {
      title: "Ordering, placing, and curing concrete",
      html: `
<h3>Ready-mixed concrete (ASTM C94)</h3>
<ul>
<li>Every truck comes with a <strong>batch ticket</strong>: supplier, mix ID, volume, time batched, truck number, and (often) admixtures and water added. Check the mix ID against the approved mix design before the truck discharges.</li>
<li>ASTM C94 requires discharge to be completed within <strong>1½ hours</strong> or before the drum has revolved <strong>300 revolutions</strong> after water is added to cement, whichever comes first — unless the purchaser waives it. Project specs may be stricter.</li>
<li><strong>Water added at the site</strong> must not exceed the amount allowed by the approved mix design's maximum w/cm, must be authorized per the specifications, and must be recorded on the ticket. Excess water is the most common cause of low strength and poor durability.</li>
</ul>
<h3>Placing and finishing</h3>
<ul>
<li><strong>Consolidation</strong> with internal vibrators removes entrapped air (not entrained air) and eliminates honeycombing.</li>
<li>Avoid excessive drop heights and segregation.</li>
<li>Don't finish while bleed water is on the surface — it weakens the surface and causes scaling and dusting.</li>
<li><strong>Joints</strong>: <em>contraction (control) joints</em> are cut or tooled to control where shrinkage cracks occur — saw cut as soon as the concrete can be cut without raveling; <em>construction joints</em> are where placements stop; <em>isolation joints</em> separate slabs from columns and walls.</li>
</ul>
<h3>Curing</h3>
<p><strong>Curing</strong> means maintaining adequate moisture and temperature so hydration continues (ACI 308). Methods: wet burlap, plastic sheeting, curing compounds, ponding, insulated blankets. Poor curing reduces surface strength and durability and increases cracking.</p>
<h3>Weather</h3>
<ul>
<li><strong>Hot weather</strong> (ACI 305): faster slump loss and setting, plastic shrinkage cracking (when evaporation exceeds bleeding). Remedies: cool materials, retarders, sunshades, windbreaks, fogging, prompt curing. Many specs limit concrete temperature at placement (often around 90 °F).</li>
<li><strong>Cold weather</strong> (ACI 306): concrete must be protected from freezing until it reaches a minimum strength (ACI 306 cites about 500 psi as the strength at which concrete can withstand a single freeze). Never place on frozen subgrade. Use heated materials, accelerators, insulated blankets, heated enclosures — but vent combustion heaters to avoid carbonation of fresh surfaces.</li>
</ul>
<h3>Types of cracks</h3>
<ul>
<li><strong>Plastic shrinkage cracks</strong> — short, shallow, random, form before set when surface dries rapidly.</li>
<li><strong>Drying shrinkage cracks</strong> — form over weeks to months as concrete loses moisture; controlled by joints.</li>
<li><strong>Settlement and structural cracks</strong> — warrant engineering evaluation.</li>
</ul>
`,
      check: [
        { type: "mc", q: "ASTM C94 requires ready-mix discharge to be completed within:", options: ["30 minutes or 100 revolutions", "1½ hours or 300 revolutions", "3 hours", "Any time before setting"], answer: 1, explain: "90 minutes or 300 revolutions, unless waived." },
        { type: "mc", q: "Contraction (control) joints are placed to:", options: ["Add strength", "Control where shrinkage cracks form", "Separate slabs from columns", "Mark where a placement stopped"], answer: 1, explain: "They create planned weak planes for shrinkage cracking." }
      ]
    },
    {
      title: "Fresh concrete field tests",
      html: `
<p>These are the tests on the ACI Concrete Field Testing Technician – Grade I exam. Know the sequence and the timing.</p>
<h3>Sampling — ASTM C172</h3>
<ul>
<li>For a truck mixer, collect the sample at two or more regular intervals from the <strong>middle portion</strong> of the batch — not the very first or last concrete discharged.</li>
<li>Obtain the composite sample within <strong>15 minutes</strong>, remix it in a wheelbarrow, and start <strong>slump, temperature, and air tests within 5 minutes</strong> of obtaining it; start molding strength specimens within <strong>15 minutes</strong>.</li>
<li>Protect the sample from sun, wind, and contamination.</li>
</ul>
<h3>Temperature — ASTM C1064</h3>
<p>Thermometer accurate to ±1 °F, embedded at least 3 inches with 3 inches of concrete around it, read after at least 2 minutes and once stable; complete within 5 minutes of sampling.</p>
<h3>Slump — ASTM C143</h3>
<ul>
<li>Slump cone: 12 inches tall, 8-inch base, 4-inch top, on a firm, level, nonabsorbent surface; dampened.</li>
<li>Fill in <strong>three layers of equal volume</strong>, rodding each layer <strong>25 times</strong> with a 5/8-inch hemispherical-tip rod (penetrating slightly into the layer below).</li>
<li>Strike off, lift the cone straight up in <strong>5 ± 2 seconds</strong>; complete the whole test within <strong>2½ minutes</strong>.</li>
<li>Measure the vertical difference between the top of the cone and the displaced original center of the top surface, to the nearest <strong>¼ inch</strong>.</li>
<li>If the concrete shears off to one side, repeat on a new portion.</li>
</ul>
<p>Slump measures <strong>consistency (workability)</strong>, not strength — but a slump much higher than the mix design usually means added water.</p>
<h3>Air content</h3>
<ul>
<li><strong>Pressure method — ASTM C231</strong> (Type B meter is most common): for normal-weight aggregates. Consolidate in three layers (rodding 25 times each and tapping the sides), strike off, clamp the lid, add water through petcocks, pump to initial pressure, release, and read percent air. Apply an <strong>aggregate correction factor</strong> if determined.</li>
<li><strong>Volumetric method — ASTM C173</strong> ("roll-a-meter"): for lightweight or porous aggregates; air is removed by rolling and agitating with water and isopropyl alcohol.</li>
</ul>
<h3>Density (unit weight) and yield — ASTM C138</h3>
<p>Fill a calibrated measure, weigh it, and compute density (pcf). Used to compute <strong>yield</strong> (actual volume produced vs. ordered) and as a check on air content.</p>
<h3>Strength specimens — ASTM C31</h3>
<div class="tbl-wrap"><table>
<tr><th>Cylinder size</th><th>Layers</th><th>Rodding per layer</th><th>Rod diameter</th></tr>
<tr><td>4 × 8 in</td><td>2</td><td>25</td><td>3/8 in</td></tr>
<tr><td>6 × 12 in</td><td>3</td><td>25</td><td>5/8 in</td></tr>
</table></div>
<ul>
<li>After rodding each layer, tap the outside of the mold <strong>10–15 times</strong> with a mallet to close rod holes and release air.</li>
<li>Mold on a level, rigid surface where they'll stay; cap or cover to prevent moisture loss.</li>
<li><strong>Initial curing</strong>: up to 48 hours at <strong>60–80 °F</strong> (68–78 °F for specified strengths of 6,000 psi or more), protected from vibration, sun, and freezing. A curing box with a max/min thermometer is typical. Record the temperatures.</li>
<li>Transport to the lab protected from jarring and moisture loss; <strong>final curing</strong> in the lab is moist at 73.5 ± 3.5 °F.</li>
<li><strong>Standard-cured</strong> cylinders are for acceptance. <strong>Field-cured</strong> cylinders (cured alongside the structure) indicate in-place strength for decisions such as form removal or post-tensioning.</li>
</ul>
<div class="mnemonic">C172 timing "<strong>15–5–15</strong>": obtain the sample within 15 minutes, start slump/air/temp within 5, start cylinders within 15.</div>
`,
      check: [
        { type: "mc", q: "How many layers and roddings per layer are used for the slump test?", options: ["2 layers, 25 roddings", "3 layers, 25 roddings", "3 layers, 15 roddings", "4 layers, 25 roddings"], answer: 1, explain: "Three equal-volume layers, 25 strokes each." },
        { type: "mc", q: "Which air test is appropriate for lightweight aggregate concrete?", options: ["Pressure method (C231)", "Volumetric method (C173)", "Unit weight only", "Slump"], answer: 1, explain: "C231 isn't valid for porous/lightweight aggregates; use C173." },
        { type: "mc", q: "Initial curing temperature for standard cylinders (f'c below 6,000 psi) is:", options: ["32–50 °F", "60–80 °F", "80–100 °F", "Any temperature"], answer: 1, explain: "60–80 °F for up to 48 hours." }
      ]
    },
    {
      title: "Compressive strength and acceptance",
      html: `
<h3>Testing cylinders — ASTM C39</h3>
<p>The lab loads the cylinder axially to failure (with unbonded neoprene pads per ASTM C1231 or sulfur/gypsum caps per C617) and records the maximum load and the fracture type.</p>
<span class="formula">Compressive strength f = P / A
4 × 8 in cylinder: A = π(2)² = 12.57 in²
6 × 12 in cylinder: A = π(3)² = 28.27 in²</span>
<div class="callout"><strong>Example</strong>A 4 × 8 cylinder breaks at 56,500 lb. f = 56,500 / 12.57 = 4,496 psi ≈ 4,500 psi (reported to nearest 10 psi).</div>
<h3>What counts as a "strength test" (ACI 318)</h3>
<p>A <strong>strength test</strong> is the average strength of at least <strong>two 6 × 12</strong> cylinders or at least <strong>three 4 × 8</strong> cylinders made from the same sample and tested at 28 days (or the specified test age). Additional cylinders are often made for 7-day breaks (early indication) and spares.</p>
<h3>Sampling frequency (ACI 318)</h3>
<p>Samples for strength tests of each class of concrete are taken at least: once per day; once for each 150 cubic yards; and once for each 5,000 square feet of slab or wall surface area placed.</p>
<h3>Acceptance criteria (ACI 318)</h3>
<p>Strength is satisfactory when <strong>both</strong> are met:</p>
<ol>
<li>Every arithmetic average of any <strong>three consecutive strength tests</strong> equals or exceeds <strong>f'c</strong>.</li>
<li>No individual strength test falls below f'c by more than <strong>500 psi</strong> when f'c ≤ 5,000 psi, or by more than <strong>0.10 f'c</strong> when f'c &gt; 5,000 psi.</li>
</ol>
<div class="callout"><strong>Example</strong>f'c = 4,000 psi. Tests: 4,350; 3,620; 4,180. The average of three = 4,050 ≥ 4,000 ✔. Lowest individual = 3,620; limit = 4,000 − 500 = 3,500; 3,620 ≥ 3,500 ✔. Acceptable.</div>
<p>7-day results are not acceptance tests; a 7-day result around 65–75% of f'c is common for normal mixes, but mixes with fly ash or slag gain strength more slowly.</p>
<h3>When strength is low</h3>
<ol>
<li>First, check the testing: specimen handling, initial curing temperatures, fracture types, lab procedures. Many "low breaks" are testing problems.</li>
<li><strong>Nondestructive evaluation</strong>: rebound hammer (ASTM C805), ultrasonic pulse velocity (C597) — comparative only.</li>
<li><strong>Cores</strong> (ASTM C42): ACI 318 considers concrete in the area structurally adequate if the <strong>average of three cores is at least 85% of f'c</strong> and <strong>no single core is less than 75% of f'c</strong>.</li>
<li>The engineer of record decides on acceptance, analysis, load testing, or remediation.</li>
</ol>
<h3>Maturity method — ASTM C1074</h3>
<p>Temperature sensors embedded in the concrete record its temperature history; a pre-established strength–maturity relationship for the mix estimates in-place strength in real time — useful for form stripping, opening pavements to traffic, and cold-weather protection decisions.</p>
`,
      check: [
        { type: "num", q: "A 6 × 12 cylinder fails at 127,000 lb. What is its compressive strength (psi)? Round to the nearest 10 psi.", answer: 4490, tol: 10, unit: "psi", explain: "127,000 / 28.27 = 4,492 ≈ 4,490 psi." },
        { type: "mc", q: "f'c = 4,000 psi. Three consecutive tests: 3,900; 4,000; 3,950. Is criterion 1 met?", options: ["Yes", "No — the average is below f'c", "Yes, but criterion 2 fails", "Cannot tell"], answer: 1, explain: "Average = 3,950 < 4,000, so criterion 1 is not met." },
        { type: "mc", q: "Under ACI 318 core criteria, concrete is considered adequate if:", options: ["Any core exceeds f'c", "Average of 3 cores ≥ 0.85 f'c and no core < 0.75 f'c", "Average ≥ f'c", "Cores aren't used"], answer: 1, explain: "85% average, 75% minimum individual." }
      ]
    },
    {
      title: "Reinforcing steel and masonry",
      html: `
<h3>Reinforcing bars</h3>
<ul>
<li>Common specifications: <strong>ASTM A615</strong> (carbon steel; <strong>Grade 60</strong> = 60,000 psi yield is most common), <strong>ASTM A706</strong> (low-alloy, weldable, more ductile), <strong>ASTM A775/A934</strong> (epoxy-coated, used in bridge decks and parking structures exposed to deicing salts).</li>
<li><strong>Bar size numbers</strong> are the nominal diameter in eighths of an inch: #4 = ½ in, #5 = ⅝ in, #8 = 1 in.</li>
<li>Bars are rolled with markings for producer, size, steel type, and grade.</li>
</ul>
<h3>What a reinforcing inspection checks (before concrete placement)</h3>
<ul>
<li>Bar <strong>size</strong>, <strong>grade</strong>, <strong>number</strong>, and <strong>spacing</strong> per the drawings.</li>
<li><strong>Concrete cover</strong> — ACI 318 minimums for cast-in-place nonprestressed concrete include <strong>3 inches</strong> for concrete cast against and permanently exposed to earth, 1½–2 inches for concrete exposed to earth or weather (depending on bar size), and ¾ inch for slabs and walls not exposed to weather (#11 and smaller). The drawings may require more.</li>
<li><strong>Lap splice</strong> lengths and locations; hooks and development lengths.</li>
<li><strong>Supports</strong> — chairs, bolsters, and dobies hold bars at the right height; bars lying on the subgrade or "walked in" during placement are defects.</li>
<li>Bars free of mud, oil, loose rust, and form release; epoxy coating damage repaired.</li>
<li><strong>Embedded items</strong> — anchor bolts, sleeves, conduits — located and secured.</li>
<li>Formwork clean, tight, and braced.</li>
</ul>
<h3>Masonry</h3>
<ul>
<li><strong>Concrete masonry units (CMU)</strong> — ASTM C90 for load-bearing units.</li>
<li><strong>Mortar</strong> — ASTM C270 types <strong>M, S, N, O</strong> in decreasing strength (property-specification minimum compressive strengths of 2,500, 1,800, 750, and 350 psi). Type S is common for structural and below-grade work; N for general above-grade use.</li>
<li><strong>Grout</strong> — ASTM C476; fills cells containing reinforcement; tested by making specimens in CMU-formed molds per ASTM C1019.</li>
<li><strong>Masonry prisms</strong> — ASTM C1314; small assemblages tested to verify the specified masonry compressive strength (f'm).</li>
<li>Code: <strong>TMS 402/602</strong> (Building Code Requirements and Specification for Masonry Structures), referenced by the IBC. Cold-weather masonry requires protection of materials and new work from freezing.</li>
</ul>
<div class="mnemonic">Mortar types spell "<strong>MaSoNwOrK</strong>": M, S, N, O — strongest to weakest.</div>
`,
      check: [
        { type: "mc", q: "A #6 reinforcing bar has a nominal diameter of:", options: ["6 mm", "⅝ in", "¾ in", "6/10 in"], answer: 2, explain: "Bar numbers are eighths of an inch: 6/8 = ¾ in." },
        { type: "mc", q: "ACI 318's minimum cover for concrete cast against and permanently exposed to earth is:", options: ["¾ in", "1½ in", "2 in", "3 in"], answer: 3, explain: "3 inches." },
        { type: "mc", q: "Which mortar type is strongest?", options: ["M", "S", "N", "O"], answer: 0, explain: "M > S > N > O." }
      ]
    }
  ],
  terms: [
    { term: "Hydration", def: "Chemical reaction between cement and water that hardens concrete." },
    { term: "ASTM C150", def: "Portland cement specification: Types I (general), II (moderate sulfate), III (high early), IV (low heat), V (high sulfate)." },
    { term: "Type IL cement", def: "Portland-limestone blended cement (ASTM C595) with a lower carbon footprint." },
    { term: "SCM", def: "Supplementary cementitious material: fly ash (C618), slag cement (C989), silica fume (C1240)." },
    { term: "ASTM C33", def: "Specification for concrete aggregates." },
    { term: "ASTM C494", def: "Chemical admixture specification: Types A–G (water reducers, retarders, accelerators, high-range water reducers)." },
    { term: "Air-entraining admixture (ASTM C260)", def: "Admixture creating microscopic air bubbles for freeze–thaw resistance." },
    { term: "w/cm", def: "Water-to-cementitious materials ratio by weight; lower = stronger and more durable." },
    { term: "f'c", def: "Specified compressive strength of concrete, usually at 28 days." },
    { term: "Batch ticket", def: "Delivery ticket listing mix, volume, batch time, truck, and water/admixtures added." },
    { term: "ASTM C94", def: "Ready-mixed concrete specification; discharge within 90 minutes or 300 revolutions unless waived." },
    { term: "Consolidation", def: "Vibration to remove entrapped air and eliminate honeycombing." },
    { term: "Contraction (control) joint", def: "Sawed or tooled joint creating a planned plane of weakness for shrinkage cracks." },
    { term: "Isolation joint", def: "Joint separating slabs from columns, walls, or other elements." },
    { term: "Curing", def: "Maintaining moisture and temperature so concrete hydrates properly (ACI 308)." },
    { term: "ACI 305 / ACI 306", def: "Guides for hot-weather / cold-weather concreting." },
    { term: "Plastic shrinkage cracking", def: "Early cracking when surface evaporation exceeds bleeding before set." },
    { term: "ASTM C172", def: "Sampling freshly mixed concrete: middle of batch, within 15 min; tests start within 5 min; cylinders within 15 min." },
    { term: "ASTM C143 (slump)", def: "Consistency test: 3 layers, 25 rods each, lift cone in 5 ± 2 s, measure to nearest ¼ in." },
    { term: "ASTM C231", def: "Pressure method for air content of normal-weight concrete." },
    { term: "ASTM C173", def: "Volumetric (roll-a-meter) air content method for lightweight or porous aggregate concrete." },
    { term: "ASTM C1064", def: "Temperature of freshly mixed concrete." },
    { term: "ASTM C138", def: "Density (unit weight), yield, and air content (gravimetric) of concrete." },
    { term: "ASTM C31", def: "Making and curing test specimens in the field: 4×8 (2 layers) or 6×12 (3 layers), 25 rods per layer; initial cure 60–80 °F." },
    { term: "Standard-cured vs. field-cured cylinders", def: "Lab-cured for acceptance vs. cured with the structure to estimate in-place strength." },
    { term: "ASTM C39", def: "Compressive strength of cylindrical concrete specimens: f = P/A." },
    { term: "Strength test (ACI 318)", def: "Average of at least two 6×12 or three 4×8 cylinders from one sample at the test age." },
    { term: "ACI 318 acceptance", def: "Average of 3 consecutive tests ≥ f'c, and no test < f'c − 500 psi (f'c ≤ 5,000) or < 0.9 f'c (f'c > 5,000)." },
    { term: "ASTM C42 cores", def: "Drilled cores to evaluate in-place strength; ACI 318: average ≥ 0.85 f'c, none < 0.75 f'c." },
    { term: "Rebound hammer (ASTM C805)", def: "Surface hardness test for comparative in-place concrete evaluation." },
    { term: "Maturity method (ASTM C1074)", def: "Estimating in-place strength from temperature history and a calibrated strength–maturity curve." },
    { term: "ASTM A615 Grade 60", def: "Common carbon-steel deformed reinforcing bar with 60,000 psi yield strength." },
    { term: "Bar size number", def: "Nominal rebar diameter in eighths of an inch (#5 = ⅝ in)." },
    { term: "Concrete cover", def: "Distance from the concrete surface to the reinforcement; protects steel from corrosion and fire." },
    { term: "Lap splice", def: "Overlapping bars to transfer force between them." },
    { term: "Chairs / bolsters", def: "Supports holding reinforcement at the correct position before concreting." },
    { term: "CMU (ASTM C90)", def: "Load-bearing concrete masonry unit." },
    { term: "Mortar types M, S, N, O", def: "ASTM C270 mortar types in decreasing strength." },
    { term: "Masonry prism (ASTM C1314)", def: "Small masonry assemblage tested to verify f'm." },
    { term: "TMS 402/602", def: "Building code requirements and specification for masonry structures." }
  ],
  resources: [
    { title: "American Concrete Institute (ACI)", url: "https://www.concrete.org/", note: "ACI 318 code, ACI 305/306/308, and Field Testing Technician certification" },
    { title: "ACI Certification — Concrete Field Testing Technician Grade I", url: "https://www.concrete.org/certification.aspx", note: "Required on many projects" },
    { title: "NRMCA — Concrete in Practice (CIP) series", url: "https://www.nrmca.org/", note: "Free two-page technical briefs" },
    { title: "Portland Cement Association", url: "https://www.cement.org/", note: "Design and Control of Concrete Mixtures reference" },
    { title: "CRSI — Concrete Reinforcing Steel Institute", url: "https://www.crsi.org/", note: "Rebar placement and inspection resources" },
    { title: "The Masonry Society (TMS)", url: "https://masonrysociety.org/", note: "TMS 402/602" },
    { title: "WisDOT HTCP — PCC technician certifications", url: "https://www.uwplatt.edu/htcp", note: "Wisconsin concrete certifications for WisDOT work" }
  ],
  teach: [
    { prompt: "A truck arrives 100 minutes after batching. The driver offers to add 15 gallons of water because the slump looks low. Explain what you check and what you communicate.",
      model: "<p>Check the batch ticket: mix ID versus the approved mix, batch time, and water already added. At 100 minutes the load exceeds ASTM C94's 90-minute limit (and possibly 300 revolutions) unless the specifications or purchaser waived it — notify the contractor and the PM/EOR per protocol before it is placed. Water may be added only if the approved mix design and specs allow it (staying within the maximum w/cm, typically by tracking the 'water that can be added' on the ticket) and the authorized party approves; it must be recorded. Adding 15 gallons to an older load could exceed the w/cm and reduce strength and durability. Test slump, air, and temperature after any addition and make cylinders from the concrete as placed; document everything in the daily report. The technician reports and documents; acceptance or rejection is per the project's designated authority.</p>" },
    { prompt: "Describe how to make a set of 4 × 8 cylinders correctly, from sampling to delivery at the lab, and name three things that commonly cause falsely low breaks.",
      model: "<p>Sample per C172 from the middle portion of the load, compositing within 15 minutes and remixing; start molding within 15 minutes. On a level, rigid surface, fill each 4 × 8 mold in two layers, rodding each layer 25 times with a 3/8-inch rod (penetrating about 1 inch into the lower layer), tapping the mold 10–15 times after each layer, then strike off and cap to prevent moisture loss. Label them. Initial cure for up to 48 hours at 60–80 °F in a curing box protected from vibration, sun, and freezing, recording max/min temperatures. Transport carefully, protected from jarring and drying, to the lab for moist curing at 73.5 ± 3.5 °F until testing. Common causes of low breaks: cylinders left in the sun or allowed to freeze (bad initial curing temperatures), moved or jarred while setting, poor consolidation (honeycombing), moisture loss, and improper capping or end preparation.</p>" }
  ],
  exam: {
    count: 20,
    bank: [
      { type: "mc", q: "Which ASTM specification covers portland cement types I–V?", options: ["C33", "C150", "C494", "C595"], answer: 1, explain: "C150." },
      { type: "mc", q: "Type V portland cement is used for:", options: ["High early strength", "High sulfate resistance", "Low heat", "General purpose"], answer: 1, explain: "Type V = high sulfate resistance." },
      { type: "mc", q: "Class F and Class C refer to:", options: ["Cement types", "Fly ash classes (ASTM C618)", "Exposure categories", "Rebar grades"], answer: 1, explain: "Fly ash classes." },
      { type: "mc", q: "A Type F admixture is a:", options: ["Retarder", "Accelerator", "High-range water reducer", "Air entrainer"], answer: 2, explain: "Type F = high-range water-reducing." },
      { type: "mc", q: "Adding water to concrete at the site generally:", options: ["Increases strength", "Raises w/cm and reduces strength and durability", "Has no effect", "Increases air content"], answer: 1, explain: "Higher w/cm = weaker, more permeable concrete." },
      { type: "num", q: "A mix has 600 lb cementitious and a maximum w/cm of 0.45. What is the maximum water (lb/yd³)?", answer: 270, tol: 0, unit: "lb", explain: "0.45 × 600 = 270 lb." },
      { type: "mc", q: "Excess entrained air generally:", options: ["Increases strength", "Reduces strength", "Has no effect on strength", "Increases slump only"], answer: 1, explain: "Roughly 5% strength loss per 1% extra air (rule of thumb)." },
      { type: "mc", q: "Under C172, the sample from a truck mixer is taken from:", options: ["The first concrete discharged", "The middle portion of the batch", "The last concrete in the drum", "The chute after washout"], answer: 1, explain: "Middle portion at regular intervals." },
      { type: "mc", q: "Slump, air, and temperature tests should begin within how long after obtaining the composite sample?", options: ["1 minute", "5 minutes", "15 minutes", "30 minutes"], answer: 1, explain: "Within 5 minutes." },
      { type: "mc", q: "The slump cone is lifted in:", options: ["1 ± 0.5 s", "5 ± 2 s", "10 ± 2 s", "30 s"], answer: 1, explain: "5 ± 2 seconds." },
      { type: "mc", q: "Slump is reported to the nearest:", options: ["1/8 in", "1/4 in", "1/2 in", "1 in"], answer: 1, explain: "Nearest 1/4 inch." },
      { type: "mc", q: "The slump test measures:", options: ["Strength", "Consistency/workability", "Air content", "Density"], answer: 1, explain: "Consistency." },
      { type: "mc", q: "The pressure air meter (C231) should not be used for:", options: ["Normal-weight concrete", "Lightweight aggregate concrete", "Paving concrete", "Air-entrained concrete"], answer: 1, explain: "Porous aggregates invalidate the pressure method." },
      { type: "mc", q: "6 × 12 cylinders are rodded in:", options: ["2 layers with a 3/8-in rod", "3 layers with a 5/8-in rod", "4 layers", "1 layer"], answer: 1, explain: "3 layers, 25 strokes each, 5/8-in rod." },
      { type: "mc", q: "After rodding each cylinder layer, the mold is tapped:", options: ["2–3 times", "10–15 times", "25 times", "Not at all"], answer: 1, explain: "10–15 taps." },
      { type: "mc", q: "Field-cured cylinders are used to:", options: ["Determine acceptance", "Estimate in-place strength for decisions like form removal", "Measure air", "Calibrate the lab"], answer: 1, explain: "Standard-cured cylinders are for acceptance." },
      { type: "num", q: "A 4 × 8 cylinder fails at 62,800 lb. Strength (psi)? Round to the nearest 10.", answer: 5000, tol: 10, unit: "psi", explain: "62,800 / 12.57 = 4,996 ≈ 5,000 psi." },
      { type: "num", q: "Three 4 × 8 cylinders from one sample: 4,210; 4,350; 4,290 psi. What is the strength test result (psi)?", answer: 4283, tol: 1, unit: "psi", explain: "Average = 12,850 / 3 = 4,283 psi." },
      { type: "mc", q: "ACI 318 requires strength-test samples at least once per:", options: ["50 yd³", "100 yd³", "150 yd³", "500 yd³"], answer: 2, explain: "Once per 150 yd³ (also per day and per 5,000 ft²)." },
      { type: "num", q: "f'c = 4,500 psi. What is the lowest individual strength test allowed under ACI 318 (psi)?", answer: 4000, tol: 0, unit: "psi", explain: "f'c ≤ 5,000: f'c − 500 = 4,000 psi." },
      { type: "num", q: "f'c = 6,000 psi. What is the lowest individual strength test allowed (psi)?", answer: 5400, tol: 0, unit: "psi", explain: "f'c > 5,000: 0.90 × 6,000 = 5,400 psi." },
      { type: "mc", q: "f'c = 4,000 psi; three consecutive tests: 4,300; 3,450; 4,400. Acceptable?", options: ["Yes", "No — individual test below f'c − 500", "No — average below f'c", "Need cores always"], answer: 1, explain: "Average 4,050 passes, but 3,450 < 3,500 fails criterion 2." },
      { type: "num", q: "f'c = 5,000 psi. What minimum average core strength satisfies ACI 318 (psi)?", answer: 4250, tol: 0, unit: "psi", explain: "0.85 × 5,000 = 4,250 psi (and no core below 3,750)." },
      { type: "mc", q: "The maturity method estimates in-place strength from:", options: ["Rebound number", "Temperature history and a calibrated strength–maturity relationship", "Slump", "Air content"], answer: 1, explain: "ASTM C1074." },
      { type: "mc", q: "ACI 306 indicates concrete should be protected from freezing until it reaches about:", options: ["50 psi", "500 psi", "2,500 psi", "f'c"], answer: 1, explain: "About 500 psi." },
      { type: "mc", q: "A #5 bar has a nominal diameter of:", options: ["½ in", "⅝ in", "5 mm", "5/10 in"], answer: 1, explain: "5/8 inch." },
      { type: "mc", q: "Grade 60 rebar has a minimum yield strength of:", options: ["6,000 psi", "60,000 psi", "600 psi", "60 MPa"], answer: 1, explain: "60 ksi." },
      { type: "mc", q: "Which rebar specification is intended for welding?", options: ["A615", "A706", "A775", "C90"], answer: 1, explain: "A706 low-alloy weldable bars." },
      { type: "mc", q: "During a reinforcing inspection you find bars lying directly on the subgrade instead of on chairs. This is:", options: ["Acceptable for slabs", "A defect — cover and position are incorrect", "Only a cosmetic issue", "Required by ACI"], answer: 1, explain: "Bars must be supported at design position and cover." },
      { type: "mc", q: "Masonry grout specimens are made per:", options: ["ASTM C31", "ASTM C1019", "ASTM C143", "ASTM C39"], answer: 1, explain: "C1019 uses CMU-formed molds." },
      { type: "mc", q: "Masonry prisms (C1314) verify:", options: ["Mortar air", "Specified masonry compressive strength f'm", "Rebar grade", "Grout slump"], answer: 1, explain: "Prisms test f'm." }
    ]
  }
});
