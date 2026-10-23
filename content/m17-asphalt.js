COURSE.addModule({
  id: "m17",
  track: "t4",
  title: "Asphalt and Pavements",
  hours: 4,
  summary: "Pavement structures and design concepts, asphalt binders and mixtures (including performance grading and Superpave), paving operations, quality testing and density calculations, concrete pavements, and how pavements deteriorate and are rated and maintained in Wisconsin.",
  objectives: [
    "Describe flexible and rigid pavement structures and basic AASHTO design concepts (ESALs, structural number, resilient modulus).",
    "Interpret asphalt binder performance grades and explain Superpave mix design and volumetrics.",
    "Describe paving operations, tack coat, compaction, joints, segregation, and weather limits.",
    "Calculate in-place density as percent of Gmm and air voids, and describe acceptance tests.",
    "Identify pavement distresses, the PASER rating system, and common maintenance and rehabilitation treatments."
  ],
  lessons: [
    {
      title: "Pavement structures and design concepts",
      html: `
<h3>Flexible pavements</h3>
<p>A flexible (asphalt) pavement spreads wheel loads through layers of decreasing stiffness:</p>
<ol>
<li><strong>Surface (wearing) course</strong> — hot mix asphalt (HMA); provides smoothness, friction, and waterproofing.</li>
<li><strong>Binder / intermediate and base HMA courses</strong> (on thicker sections).</li>
<li><strong>Aggregate base course</strong> — e.g., WisDOT 305 dense graded base.</li>
<li><strong>Subbase</strong> (optional) — lower-quality granular material, sometimes for drainage or frost protection.</li>
<li><strong>Subgrade</strong> — the prepared native soil or fill.</li>
</ol>
<h3>Rigid pavements</h3>
<p>Portland cement concrete (PCC) slabs carry load mainly by slab bending, so the slab spreads load over a wide area. <strong>Jointed plain concrete pavement (JPCP)</strong> is most common: transverse joints with <strong>dowel bars</strong> for load transfer and longitudinal joints with <strong>tie bars</strong> to hold lanes together. Continuously reinforced concrete pavement (CRCP) uses continuous steel with no transverse joints. <strong>Composite</strong> pavements have asphalt over concrete.</p>
<h3>Design inputs (AASHTO 1993 Guide concepts)</h3>
<ul>
<li><strong>Traffic</strong> expressed as <strong>ESALs</strong> — equivalent 18,000-lb single axle loads. Damage rises steeply with axle weight (roughly the fourth power), so trucks, not cars, govern design.</li>
<li><strong>Subgrade strength</strong> as <strong>resilient modulus (Mr)</strong>, often estimated from CBR or other tests.</li>
<li><strong>Serviceability</strong> — the loss from initial to terminal present serviceability index (PSI) the design allows.</li>
<li><strong>Reliability</strong> and variability.</li>
<li><strong>Drainage</strong> — drainage coefficients reduce the contribution of layers that stay wet.</li>
</ul>
<h3>Structural number</h3>
<p>For flexible pavements, the required <strong>structural number (SN)</strong> is satisfied by the layers:</p>
<span class="formula">SN = a1·D1 + a2·D2·m2 + a3·D3·m3
a = layer coefficient, D = thickness (in), m = drainage coefficient</span>
<p>Layer coefficients from the AASHO Road Test commonly used as defaults are about <strong>0.44</strong> for dense HMA surface, <strong>0.14</strong> for crushed stone base, and <strong>0.11</strong> for granular subbase (agencies set their own values).</p>
<div class="callout"><strong>Example</strong>4 in HMA + 10 in crushed base (m = 1.0): SN = 0.44(4) + 0.14(10)(1.0) = 1.76 + 1.40 = 3.16.</div>
<p>Modern agencies increasingly use <strong>mechanistic-empirical</strong> design (AASHTOWare Pavement ME), which models stresses, strains, climate, and distresses. WisDOT's Facilities Development Manual governs state highway pavement design.</p>
<h3>Why drainage and frost matter in Wisconsin</h3>
<p>Water weakens the base and subgrade, and frost-susceptible subgrades heave in winter and lose strength at spring thaw (Module 12). Well-drained, non-frost-susceptible base layers, edge drains, and adequate cross-slope extend pavement life.</p>
`,
      check: [
        { type: "num", q: "Compute SN for 3 in HMA (a = 0.44) over 8 in crushed base (a = 0.14, m = 1.0).", answer: 2.44, tol: 0.005, unit: "", explain: "0.44(3) + 0.14(8) = 1.32 + 1.12 = 2.44." },
        { type: "mc", q: "In jointed concrete pavement, dowel bars at transverse joints provide:", options: ["Tie between lanes", "Load transfer across the joint", "Crack prevention everywhere", "Drainage"], answer: 1, explain: "Dowels transfer load; tie bars hold longitudinal joints together." }
      ]
    },
    {
      title: "Asphalt binders and mixtures",
      html: `
<h3>Asphalt binder and performance grading</h3>
<p>Asphalt binder is the viscous petroleum residue that glues aggregate together. Its stiffness changes with temperature — soft and prone to rutting when hot, brittle and prone to cracking when cold. The <strong>Performance Grade (PG)</strong> system (AASHTO M 320) names a binder by the climate it is designed for:</p>
<span class="formula">PG 58-28
58  = high pavement design temperature (°C) — resists rutting up to ~58 °C
-28 = low pavement design temperature (°C) — resists thermal cracking down to ~-28 °C</span>
<p>PG 58-28 is a common Wisconsin grade; colder northern locations may use PG 58-34. Under the <strong>Multiple Stress Creep Recovery (MSCR)</strong> grading (AASHTO M 332), a letter indicates traffic level: <strong>S</strong> (standard), <strong>H</strong> (heavy), <strong>V</strong> (very heavy), <strong>E</strong> (extremely heavy) — for example, PG 58-28S or PG 58-28H. Polymer-modified binders are used for heavier traffic.</p>
<h3>Mixture types</h3>
<ul>
<li><strong>Dense-graded HMA</strong> — the standard; designed with Superpave methods.</li>
<li><strong>Stone matrix asphalt (SMA)</strong> — gap-graded, stone-on-stone skeleton with rich binder and fibers; very rut-resistant; high-traffic surfaces.</li>
<li><strong>Open-graded friction course</strong> — porous surface that drains water.</li>
<li><strong>Warm mix asphalt (WMA)</strong> — produced at lower temperatures using additives or foaming.</li>
<li><strong>Recycled materials</strong> — reclaimed asphalt pavement (RAP) and recycled asphalt shingles (RAS) replace some virgin binder and aggregate within spec limits.</li>
<li><strong>Emulsions</strong> — asphalt dispersed in water; used for <strong>tack coat</strong>, chip seals, and other surface treatments.</li>
</ul>
<p>WisDOT designates HMA mixtures (Standard Specification section 460) with a code combining nominal aggregate size, traffic level (e.g., LT, MT, HT, and SMA), and binder grade. Check the current specification for the exact table used on your project.</p>
<h3>Superpave mix design and volumetrics</h3>
<p>Superpave ("Superior Performing Asphalt Pavements") mix design compacts specimens in a <strong>gyratory compactor</strong> to a design number of gyrations (Ndesign) based on traffic. The mix is proportioned to hit volumetric targets:</p>
<ul>
<li><strong>Air voids (Va)</strong> — typically <strong>4.0%</strong> at Ndesign in the lab.</li>
<li><strong>Voids in mineral aggregate (VMA)</strong> — space between aggregate particles available for binder and air; minimums depend on nominal maximum aggregate size (NMAS).</li>
<li><strong>Voids filled with asphalt (VFA)</strong> — percent of VMA filled with binder.</li>
<li><strong>Dust-to-binder ratio</strong> — fines relative to effective binder.</li>
</ul>
<p><strong>NMAS</strong> (nominal maximum aggregate size) is one sieve size larger than the first sieve to retain more than 10% — common sizes are 9.5, 12.5, and 19.0 mm.</p>
`,
      check: [
        { type: "mc", q: "In PG 58-28, the '-28' refers to:", options: ["Binder content", "The low pavement design temperature in °C", "Air voids", "Traffic level"], answer: 1, explain: "The low-temperature grade resists thermal cracking down to about −28 °C." },
        { type: "mc", q: "Superpave design air voids at Ndesign are typically:", options: ["1.0%", "4.0%", "8.0%", "12.0%"], answer: 1, explain: "4.0% design air voids." }
      ]
    },
    {
      title: "Paving operations",
      html: `
<h3>The paving train</h3>
<ul>
<li><strong>Haul trucks</strong> deliver mix (tarped to retain heat).</li>
<li>A <strong>material transfer vehicle</strong> (on some projects) remixes and feeds the paver, reducing segregation and paver stops.</li>
<li>The <strong>paver</strong> spreads the mix; the <strong>screed</strong> sets thickness and initial density and smoothness.</li>
<li><strong>Rollers</strong>: breakdown (often vibratory steel drum), intermediate (often pneumatic-tire), and finish (static steel) rolling, following an established <strong>rolling pattern</strong> while the mat is within its compaction temperature window.</li>
</ul>
<h3>Key practices and what inspectors watch</h3>
<ul>
<li><strong>Surface preparation and tack coat</strong> — clean surface; uniform tack coat (emulsion) applied to existing pavement and between lifts so layers bond. Tack should "break" (turn from brown to black) before paving. Poor bonding causes slippage and premature cracking.</li>
<li><strong>Temperature</strong> — monitor mix temperature at delivery and behind the screed; cold mix doesn't compact. Specifications set minimum air and surface temperatures and prohibit paving on wet or frozen surfaces; late-season paving in Wisconsin is a recurring density problem.</li>
<li><strong>Lift thickness</strong> — a common guideline is a compacted lift thickness of at least <strong>3 times the NMAS</strong> for fine-graded mixes and <strong>4 times</strong> for coarse-graded mixes, so the aggregate can orient and compact.</li>
<li><strong>Segregation</strong> — separation of coarse and fine particles (aggregate segregation) or of hot and cooler mix (thermal segregation); appears as rough, open-textured patches that ravel and let water in. Infrared cameras help detect thermal segregation.</li>
<li><strong>Longitudinal joints</strong> — the weakest, lowest-density part of most asphalt pavements. Techniques include echelon paving, notched wedge joints, joint heaters, and proper overlap and rolling of the hot side onto the cold side.</li>
<li><strong>Smoothness</strong> — avoid paver stops; continuous supply; checked with straightedge or inertial profilers (IRI).</li>
</ul>
<div class="mnemonic">Asphalt density killers "<strong>C-T-S-J</strong>": <strong>C</strong>old mix, <strong>T</strong>hin lifts, <strong>S</strong>egregation, <strong>J</strong>oints.</div>
`,
      check: [
        { type: "num", q: "Using the 4 × NMAS guideline for a coarse-graded 12.5 mm NMAS mix, what is the minimum compacted lift thickness in mm?", answer: 50, tol: 0, unit: "mm", explain: "4 × 12.5 = 50 mm (about 2 in)." },
        { type: "mc", q: "Tack coat is applied to:", options: ["Seal the subgrade", "Bond asphalt layers together", "Cool the mix", "Mark the centerline"], answer: 1, explain: "Tack coat bonds layers." }
      ]
    },
    {
      title: "Asphalt testing and acceptance",
      html: `
<h3>Specific gravities</h3>
<ul>
<li><strong>Gmm</strong> — theoretical maximum specific gravity of the loose mix (no air voids), by the "Rice" test (AASHTO T 209 / ASTM D2041).</li>
<li><strong>Gmb</strong> — bulk specific gravity of a compacted specimen or core (AASHTO T 166 / ASTM D2726).</li>
</ul>
<span class="formula">Air voids (%)         Va = (Gmm − Gmb) / Gmm × 100
In-place density (%)  = Gmb(core) / Gmm × 100   ("percent of Gmm")
Density + air voids = 100%</span>
<div class="callout"><strong>Example</strong>Gmm = 2.480; core Gmb = 2.290.<br>Density = 2.290 / 2.480 × 100 = 92.3% of Gmm; air voids = 7.7%.</div>
<p>Many specifications require in-place density around 92–93% of Gmm or higher (roughly 7–8% air voids or less) for dense-graded mixes, with requirements varying by layer, mix, and agency. Higher in-place density improves durability: each 1% increase in density has been associated with meaningful gains in pavement life in research by agencies and the National Center for Asphalt Technology.</p>
<h3>Measuring in-place density</h3>
<ul>
<li><strong>Cores</strong> — the reference method; Gmb measured in the lab.</li>
<li><strong>Nuclear gauge, thin-lift or backscatter mode</strong> (ASTM D2950) — fast; must be correlated to cores for each mix.</li>
<li><strong>Non-nuclear electromagnetic gauges</strong> (ASTM D7113) — also require correlation.</li>
</ul>
<h3>Mixture quality tests (QC/QA)</h3>
<ul>
<li><strong>Asphalt binder content</strong> — ignition oven (AASHTO T 308) with a mix-specific calibration factor.</li>
<li><strong>Gradation</strong> of the aggregate recovered after ignition.</li>
<li><strong>Volumetrics</strong> on plant-produced mix compacted in a gyratory compactor: air voids, VMA, VFA.</li>
<li>Temperature, mat thickness, smoothness, and visual inspection.</li>
</ul>
<p>On WisDOT projects, the contractor performs <strong>quality control (QC)</strong> testing and the department or its consultant performs <strong>quality verification (QV)</strong> and independent assurance, with HTCP-certified personnel. Pay adjustments may be tied to density and other test results.</p>
`,
      check: [
        { type: "num", q: "Gmm = 2.500; core Gmb = 2.325. In-place density as % of Gmm? One decimal.", answer: 93, tol: 0.05, unit: "%", explain: "2.325 / 2.500 = 0.930 → 93.0%." },
        { type: "num", q: "For the same core, what are the air voids (%)? One decimal.", answer: 7, tol: 0.05, unit: "%", explain: "100 − 93.0 = 7.0%." },
        { type: "mc", q: "The Rice test determines:", options: ["Gmb", "Gmm", "Binder grade", "Gradation"], answer: 1, explain: "Theoretical maximum specific gravity." }
      ]
    },
    {
      title: "Concrete pavements, distresses, and pavement management",
      html: `
<h3>Concrete pavement construction</h3>
<ul>
<li><strong>Slipform paving</strong> places, consolidates, and shapes concrete without fixed forms; fixed-form paving is used for smaller areas.</li>
<li><strong>Dowel baskets</strong> at transverse joints and <strong>tie bars</strong> at longitudinal joints must be properly aligned.</li>
<li><strong>Joint sawing</strong> must be timed: too early causes raveling, too late causes random cracking. Joints may be sealed.</li>
<li>Surface <strong>texture</strong> (e.g., tining or dragging) for friction; <strong>curing compound</strong> applied promptly.</li>
<li>Tests: slump, air, temperature (Module 16); <strong>flexural strength</strong> (modulus of rupture, ASTM C78 beams) or compressive strength correlations; thickness by cores.</li>
</ul>
<h3>Common distresses</h3>
<div class="tbl-wrap"><table>
<tr><th>Pavement</th><th>Distress</th><th>Typical cause</th></tr>
<tr><td rowspan="6">Asphalt</td><td>Rutting</td><td>Unstable mix, weak base/subgrade, heavy traffic</td></tr>
<tr><td>Fatigue (alligator) cracking</td><td>Repeated loading on an inadequate structure or weak base</td></tr>
<tr><td>Transverse (thermal) cracking</td><td>Cold-temperature shrinkage — very common in Wisconsin</td></tr>
<tr><td>Block cracking</td><td>Binder aging and shrinkage</td></tr>
<tr><td>Raveling</td><td>Loss of aggregate from low density, segregation, aging</td></tr>
<tr><td>Potholes</td><td>Water infiltration plus freeze–thaw and traffic</td></tr>
<tr><td rowspan="4">Concrete</td><td>Faulting</td><td>Poor load transfer at joints, pumping of fines</td></tr>
<tr><td>Joint spalling</td><td>Incompressibles in joints, poor consolidation</td></tr>
<tr><td>Corner breaks</td><td>Loss of support, poor load transfer</td></tr>
<tr><td>D-cracking</td><td>Freeze–thaw susceptible coarse aggregate</td></tr>
</table></div>
<h3>Rating pavements: PASER</h3>
<p>The <strong>PASER</strong> (Pavement Surface Evaluation and Rating) system, developed by the University of Wisconsin–Madison Transportation Information Center, rates pavement condition visually on a <strong>1 (failed) to 10 (excellent)</strong> scale, with manuals for asphalt, concrete, gravel, and other surfaces. Wisconsin counties and municipalities use it to report local road conditions to WisDOT's <strong>WISLR</strong> (Wisconsin Information System for Local Roads) on a regular (biennial) cycle. Another common index is the <strong>Pavement Condition Index (PCI)</strong>, 0–100, per ASTM D6433.</p>
<h3>Maintenance and rehabilitation</h3>
<div class="tbl-wrap"><table>
<tr><th>Treatment</th><th>Typical use</th></tr>
<tr><td>Crack sealing / filling</td><td>Early cracking; keeps water out</td></tr>
<tr><td>Chip seal, slurry seal, microsurfacing</td><td>Surface preservation on structurally sound pavements</td></tr>
<tr><td>Mill and overlay</td><td>Surface distress with a sound base</td></tr>
<tr><td>Full-depth reclamation (FDR) / pulverize and relay</td><td>Recycling the old asphalt and base into a new base, then paving</td></tr>
<tr><td>Reconstruction</td><td>Structural failure, base/subgrade problems</td></tr>
<tr><td>Concrete: joint resealing, diamond grinding, dowel bar retrofit, partial/full-depth repairs</td><td>Concrete pavement restoration</td></tr>
</table></div>
<p><strong>Pavement preservation</strong> means applying the right low-cost treatment at the right time — while the pavement is still in good condition — which costs far less over the pavement's life than waiting for reconstruction.</p>
`,
      check: [
        { type: "mc", q: "PASER rates pavements on a scale of:", options: ["0–100", "1–10", "A–F", "1–5"], answer: 1, explain: "PASER: 1 (failed) to 10 (excellent). PCI uses 0–100." },
        { type: "mc", q: "Transverse cracks across an asphalt road in Wisconsin, spaced fairly regularly, are most likely:", options: ["Fatigue cracking", "Thermal cracking", "Rutting", "D-cracking"], answer: 1, explain: "Low-temperature shrinkage causes transverse thermal cracks." }
      ]
    }
  ],
  terms: [
    { term: "Flexible pavement", def: "Asphalt-surfaced pavement distributing load through layers of decreasing stiffness." },
    { term: "Rigid pavement", def: "Portland cement concrete pavement carrying load by slab action." },
    { term: "JPCP", def: "Jointed plain concrete pavement with dowelled transverse joints and tied longitudinal joints." },
    { term: "Dowel bar", def: "Smooth steel bar across a transverse joint transferring load between slabs." },
    { term: "Tie bar", def: "Deformed bar across a longitudinal joint holding slabs together." },
    { term: "ESAL", def: "Equivalent 18,000-lb single axle load: standard unit of traffic loading for design." },
    { term: "Resilient modulus (Mr)", def: "Measure of subgrade or base stiffness under repeated loading." },
    { term: "Structural number (SN)", def: "AASHTO flexible pavement index: SN = Σ a·D·m." },
    { term: "Layer coefficient", def: "Relative structural strength per inch of a pavement layer (e.g., HMA ~0.44, crushed base ~0.14)." },
    { term: "Present serviceability index (PSI)", def: "AASHTO ride-quality index; design accounts for loss from initial to terminal PSI." },
    { term: "Pavement ME", def: "AASHTOWare mechanistic-empirical pavement design software." },
    { term: "Performance Grade (PG)", def: "Binder grade by high and low pavement design temperatures, e.g., PG 58-28." },
    { term: "MSCR grade (S, H, V, E)", def: "AASHTO M 332 binder designation for standard, heavy, very heavy, and extremely heavy traffic." },
    { term: "SMA", def: "Stone matrix asphalt: gap-graded, stone-on-stone, rut-resistant mixture." },
    { term: "Warm mix asphalt (WMA)", def: "Asphalt mixture produced at reduced temperatures." },
    { term: "RAP", def: "Reclaimed asphalt pavement used in new mixtures." },
    { term: "Asphalt emulsion", def: "Asphalt dispersed in water; used for tack coats and surface treatments." },
    { term: "Superpave", def: "Asphalt mix design system using gyratory compaction and volumetric criteria." },
    { term: "Gyratory compactor", def: "Lab device compacting asphalt specimens by gyration to simulate field compaction." },
    { term: "VMA", def: "Voids in mineral aggregate: intergranular space available for binder and air." },
    { term: "VFA", def: "Voids filled with asphalt: percent of VMA filled with binder." },
    { term: "NMAS", def: "Nominal maximum aggregate size: one sieve larger than the first to retain >10%." },
    { term: "Paver screed", def: "Paver component setting mat thickness, initial density, and smoothness." },
    { term: "Rolling pattern", def: "Planned sequence and number of roller passes to achieve density." },
    { term: "Tack coat", def: "Thin emulsion layer bonding asphalt lifts to each other or existing pavement." },
    { term: "Segregation (asphalt)", def: "Separation of coarse/fine aggregate or hot/cool mix causing open, weak areas." },
    { term: "Longitudinal joint", def: "Joint between paving passes; typically the lowest-density area of an asphalt pavement." },
    { term: "Gmm (Rice)", def: "Theoretical maximum specific gravity of loose asphalt mix (AASHTO T 209)." },
    { term: "Gmb", def: "Bulk specific gravity of a compacted asphalt specimen or core (AASHTO T 166)." },
    { term: "Percent of Gmm", def: "In-place density = Gmb/Gmm × 100; 100 minus air voids." },
    { term: "Ignition oven (AASHTO T 308)", def: "Test burning off binder to determine asphalt content." },
    { term: "QC / QV", def: "Contractor quality control testing / agency quality verification testing." },
    { term: "IRI", def: "International Roughness Index: pavement smoothness measure from profilers." },
    { term: "Thermal cracking", def: "Transverse cracking from low-temperature shrinkage of asphalt." },
    { term: "Fatigue (alligator) cracking", def: "Interconnected cracking from repeated loads on an inadequate structure." },
    { term: "D-cracking", def: "Durability cracking in concrete from freeze–thaw susceptible coarse aggregate." },
    { term: "PASER", def: "Pavement Surface Evaluation and Rating, 1–10 visual scale developed by UW–Madison TIC." },
    { term: "WISLR", def: "Wisconsin Information System for Local Roads: WisDOT system where local pavement ratings are reported." },
    { term: "PCI", def: "Pavement Condition Index (ASTM D6433), 0–100." },
    { term: "Full-depth reclamation (FDR)", def: "Pulverizing existing asphalt and base into a new stabilized base." },
    { term: "Pavement preservation", def: "Timely low-cost treatments on good pavements to extend life." }
  ],
  resources: [
    { title: "UW–Madison Transportation Information Center — PASER manuals", url: "https://tic.engr.wisc.edu/", note: "Free PASER rating manuals" },
    { title: "WisDOT Facilities Development Manual (FDM)", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/fdm.aspx", note: "Pavement design policy for Wisconsin highways" },
    { title: "WisDOT Standard Specifications (Section 460 HMA and others)", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/stndspec.aspx", note: "HMA and concrete pavement specifications" },
    { title: "Asphalt Institute", url: "https://www.asphaltinstitute.org/", note: "Binder and mix design references" },
    { title: "National Center for Asphalt Technology (NCAT)", url: "https://www.eng.auburn.edu/research/centers/ncat/", note: "Research on density, mixes, and performance" },
    { title: "Wisconsin Asphalt Pavement Association", url: "https://www.wispave.org/", note: "Wisconsin asphalt industry resources" },
    { title: "American Concrete Pavement Association", url: "https://www.acpa.org/", note: "Concrete pavement design and construction" },
    { title: "FHWA — Pavements", url: "https://highways.dot.gov/pavements", note: "Federal pavement technical resources" }
  ],
  teach: [
    { prompt: "Explain to a property owner why their new parking lot's asphalt is raveling along the paving seams after two winters, and what should have been done differently.",
      model: "<p>The seams are longitudinal joints between paving passes, typically the lowest-density part of an asphalt pavement. Low density means higher air voids, so water and air enter, the binder ages faster, freeze–thaw action loosens aggregate, and the surface ravels. Likely contributors: cold mix at the joint, insufficient overlap and rolling of the hot side onto the cold edge, thin lifts relative to aggregate size, segregation, or late-season paving. Better practice: maintain mix temperature, proper tack coat on the joint face, echelon paving or a notched wedge, rolling patterns that compact the joint while hot, adequate lift thickness (3–4 × NMAS), and density testing at joints. Now, crack sealing or a joint sealant and surface treatment may extend life.</p>" },
    { prompt: "Interpret the binder designation 'PG 58-28H' and explain why a Wisconsin agency would choose it.",
      model: "<p>PG 58-28 means the binder is graded to resist rutting at pavement temperatures up to about 58 °C and thermal cracking down to about −28 °C — matching typical southern and central Wisconsin pavement temperature extremes. The 'H' (MSCR grading per AASHTO M 332) indicates the binder is suitable for heavy traffic loading (more rutting resistance, often achieved with polymer modification) compared with 'S' standard traffic. An agency would choose it for a route with heavy truck traffic or slow-moving/standing loads in a climate that also needs good cold-cracking resistance.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Which layer in a flexible pavement provides waterproofing, smoothness, and friction?", options: ["Subgrade", "Aggregate base", "Surface (wearing) course", "Subbase"], answer: 2, explain: "The HMA surface course." },
      { type: "mc", q: "Tie bars in concrete pavement are placed at:", options: ["Transverse joints for load transfer", "Longitudinal joints to hold lanes together", "Every 2 ft randomly", "Only at bridges"], answer: 1, explain: "Tie bars hold longitudinal joints." },
      { type: "mc", q: "ESAL stands for:", options: ["Equivalent single axle load (18,000 lb)", "Estimated surface asphalt level", "Effective subgrade analysis load", "Equal stress at load"], answer: 0, explain: "Equivalent 18-kip single axle load." },
      { type: "mc", q: "Pavement damage increases with axle load approximately to the:", options: ["First power", "Second power", "Fourth power", "Tenth power"], answer: 2, explain: "The 'fourth power law' from the AASHO Road Test." },
      { type: "num", q: "Compute SN for 5 in HMA (0.44) + 12 in crushed base (0.14, m = 0.9).", answer: 3.712, tol: 0.005, unit: "", explain: "2.20 + 0.14 × 12 × 0.9 = 2.20 + 1.512 = 3.712." },
      { type: "mc", q: "In PG 64-22, '64' refers to:", options: ["Low temperature grade", "High pavement design temperature (°C)", "Penetration", "Viscosity"], answer: 1, explain: "High-temperature grade." },
      { type: "mc", q: "Which binder grade is better suited to colder northern Wisconsin?", options: ["PG 64-22", "PG 58-28", "PG 58-34", "PG 70-22"], answer: 2, explain: "−34 provides more low-temperature cracking resistance." },
      { type: "mc", q: "An MSCR grade letter 'V' indicates:", options: ["Very heavy traffic", "Virgin binder", "Viscosity grade", "Vertical"], answer: 0, explain: "S, H, V, E = standard, heavy, very heavy, extremely heavy traffic." },
      { type: "mc", q: "Stone matrix asphalt is characterized by:", options: ["Open, porous gradation", "Gap-graded stone-on-stone skeleton with rich binder", "No binder", "Concrete aggregate"], answer: 1, explain: "SMA is rut-resistant." },
      { type: "mc", q: "VMA represents:", options: ["Binder absorbed by aggregate", "Intergranular void space between aggregate particles in a compacted mix", "Air in the binder", "Volume of mix"], answer: 1, explain: "Voids in mineral aggregate." },
      { type: "mc", q: "Which equipment compacts asphalt specimens in Superpave mix design?", options: ["Marshall hammer only", "Gyratory compactor", "Proctor rammer", "Vibratory table"], answer: 1, explain: "Gyratory compactor." },
      { type: "mc", q: "Tack coat should be allowed to ________ before paving.", options: ["Freeze", "Break (turn from brown to black)", "Wash off", "Puddle"], answer: 1, explain: "Emulsions break as water separates." },
      { type: "num", q: "Using 3 × NMAS for a fine-graded 9.5 mm mix, minimum lift thickness (mm)? One decimal.", answer: 28.5, tol: 0.05, unit: "mm", explain: "3 × 9.5 = 28.5 mm." },
      { type: "mc", q: "Rough, open-textured patches in a new mat are a sign of:", options: ["Bleeding", "Segregation", "Rutting", "Over-compaction"], answer: 1, explain: "Segregation." },
      { type: "mc", q: "The weakest, lowest-density area in most asphalt pavements is the:", options: ["Center of the lane", "Longitudinal joint", "Wheel path", "Shoulder base"], answer: 1, explain: "Longitudinal joints." },
      { type: "num", q: "Gmm = 2.460; core Gmb = 2.250. Density as % of Gmm? One decimal.", answer: 91.5, tol: 0.05, unit: "%", explain: "2.250/2.460 = 0.9146 → 91.5%." },
      { type: "num", q: "Gmm = 2.520; Gmb = 2.419. Air voids (%)? One decimal.", answer: 4, tol: 0.05, unit: "%", explain: "(2.520 − 2.419)/2.520 = 4.0%." },
      { type: "mc", q: "Which method is the reference for in-place asphalt density?", options: ["Visual", "Cores tested for Gmb", "Slump", "Ignition oven"], answer: 1, explain: "Nuclear and non-nuclear gauges must be correlated to cores." },
      { type: "mc", q: "Asphalt binder content is commonly determined by:", options: ["Rice test", "Ignition oven (T 308)", "Slump", "LA abrasion"], answer: 1, explain: "Ignition oven with calibration factor." },
      { type: "mc", q: "On WisDOT projects, contractor testing is called ______ and agency testing ______.", options: ["QA; QC", "QC; QV", "IA; QC", "QV; QC"], answer: 1, explain: "Contractor QC; department QV." },
      { type: "mc", q: "Joint sawing in concrete pavement done too late typically causes:", options: ["Raveling", "Random uncontrolled cracking", "Better strength", "D-cracking"], answer: 1, explain: "Shrinkage cracks form before joints are cut." },
      { type: "mc", q: "D-cracking in concrete pavement is caused by:", options: ["Overloading", "Freeze–thaw susceptible coarse aggregate", "Low air in asphalt", "Tack coat"], answer: 1, explain: "Durability cracking." },
      { type: "mc", q: "Interconnected cracks in the wheel path resembling alligator skin indicate:", options: ["Thermal cracking", "Fatigue cracking", "Bleeding", "Shoving"], answer: 1, explain: "Fatigue (alligator) cracking." },
      { type: "mc", q: "PASER was developed by:", options: ["FHWA", "UW–Madison Transportation Information Center", "ASTM", "AASHTO"], answer: 1, explain: "UW–Madison TIC." },
      { type: "mc", q: "Wisconsin local road condition ratings are reported to WisDOT through:", options: ["BRRTS", "WISLR", "WPDES", "HTCP"], answer: 1, explain: "WISLR." },
      { type: "mc", q: "Pavement preservation emphasizes:", options: ["Waiting until failure", "Timely low-cost treatments on pavements still in good condition", "Only reconstruction", "Gravel roads"], answer: 1, explain: "Right treatment at the right time." },
      { type: "mc", q: "Full-depth reclamation:", options: ["Mills only the surface", "Pulverizes existing asphalt and base into a new base", "Adds a chip seal", "Replaces subgrade with concrete"], answer: 1, explain: "FDR recycles in place." }
    ]
  }
});
