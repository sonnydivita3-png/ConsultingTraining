COURSE.addModule({
  id: "m09",
  track: "t2",
  title: "Phase II ESAs, Site Investigation, and Sampling",
  hours: 5,
  summary: "How environmental data are actually collected: planning a sampling program, drilling and soil sampling, monitoring well installation and groundwater sampling, soil vapor and vapor intrusion sampling, and the QA/QC that makes the data defensible.",
  objectives: [
    "Design a Phase II scope from a conceptual site model: locations, depths, media, and analytes tied to historical use.",
    "Compare drilling methods and describe soil logging, field screening, and VOC sample preservation.",
    "Describe monitoring well components, development, purging, and groundwater sample collection and preservation.",
    "Explain sub-slab vapor, soil gas, and indoor air sampling for vapor intrusion.",
    "Identify field and laboratory QC samples, common analytical methods, data qualifiers, and the content of a site investigation report."
  ],
  lessons: [
    {
      title: "Planning: from CSM to sampling plan",
      html: `
<p>A <strong>Phase II ESA</strong> (ASTM E1903) or a DNR-required <strong>site investigation</strong> (NR 716) collects samples to test hypotheses developed in the Phase I and the conceptual site model. Every sample should answer a question.</p>
<h3>Data quality objectives (DQOs)</h3>
<p>EPA's DQO process is a structured way to decide what data you need: state the problem, identify the decision, identify inputs, define boundaries, develop a decision rule, specify tolerable error, and optimize the design. In plain terms: <em>What decision will these data support, and how many samples of what kind, where, are needed to make it with confidence?</em></p>
<h3>Planning documents</h3>
<ul>
<li><strong>Sampling and Analysis Plan (SAP)</strong> / work plan — locations, depths, methods, analytes, schedule.</li>
<li><strong>Quality Assurance Project Plan (QAPP)</strong> — data quality requirements, QC samples, detection limits, validation.</li>
<li><strong>HASP</strong> — health and safety (Module 2).</li>
<li>Access agreements, utility locates (Diggers Hotline plus private locate), and any permits (e.g., right-of-way permits for borings in streets).</li>
</ul>
<h3>Choosing analytes from historical use</h3>
<div class="tbl-wrap"><table>
<tr><th>Historical use</th><th>Typical analytes</th></tr>
<tr><td>Gasoline station</td><td>PVOCs (BTEX, MTBE, trimethylbenzenes), naphthalene, GRO; lead for older leaded-gasoline sites; DRO if diesel or waste oil</td></tr>
<tr><td>Auto repair / waste oil</td><td>VOCs (including chlorinated degreasers), DRO, PAHs, metals, possibly PCBs</td></tr>
<tr><td>Dry cleaner</td><td>Chlorinated VOCs (PCE and daughter products); vapor intrusion evaluation</td></tr>
<tr><td>Plating / metal finishing</td><td>Metals including hexavalent chromium, cyanide, chlorinated VOCs, possibly PFAS</td></tr>
<tr><td>Foundry</td><td>Metals, PAHs, phenols; foundry sand fill</td></tr>
<tr><td>Historic urban fill</td><td>PAHs, RCRA metals; sometimes PCBs and VOCs</td></tr>
<tr><td>Transformer areas</td><td>PCBs</td></tr>
<tr><td>Fire training areas, AFFF use</td><td>PFAS</td></tr>
</table></div>
<h3>Placing samples</h3>
<ul>
<li><strong>Biased (judgmental) sampling</strong> targets suspected source areas — next to the former tank pit, below the floor drain, at the dry cleaning machine location. This is the norm for Phase II work.</li>
<li><strong>Systematic or grid sampling</strong> characterizes areas without a known source, such as fill across a site.</li>
<li>Step out from sources to define extent: NR 716 site investigations must define the <strong>nature, degree, and extent</strong> of contamination in each affected medium, which usually means sampling until you find "clean" boundaries.</li>
</ul>
<p>Before field work, confirm the laboratory's <strong>detection limits are below the applicable standards</strong> (NR 140 PALs and NR 720 RCLs). A non-detect above the standard is useless.</p>
`,
      check: [
        { type: "mc", q: "For a former dry cleaner, which analyte group is most essential?", options: ["PAHs only", "Chlorinated VOCs", "PCBs", "Pesticides"], answer: 1, explain: "Dry cleaners used PCE; chlorinated VOCs and daughter products are the priority." },
        { type: "mc", q: "Sampling directly beside a former UST pit and beneath a floor drain is an example of:", options: ["Random sampling", "Biased (judgmental) sampling", "Grid sampling", "Composite sampling"], answer: 1, explain: "Targeting suspected sources is biased or judgmental sampling." }
      ]
    },
    {
      title: "Drilling, soil logging, and soil sampling",
      html: `
<h3>Drilling and excavation methods</h3>
<div class="tbl-wrap"><table>
<tr><th>Method</th><th>How it works</th><th>Strengths</th><th>Limitations</th></tr>
<tr><td><strong>Direct push</strong> (e.g., Geoprobe-type rigs)</td><td>Hydraulically pushes or hammers a sampler with a plastic liner (typically 4–5 ft runs)</td><td>Fast, continuous cores, minimal waste, small rigs</td><td>Refusal in dense till, cobbles, and bedrock; limited well diameter</td></tr>
<tr><td><strong>Hollow-stem auger (HSA)</strong></td><td>Rotating augers with a hollow center; samples taken through the stem with a split spoon</td><td>Standard for monitoring wells and geotechnical SPT sampling</td><td>Slower; generates cuttings; difficulty in heaving sands and boulders</td></tr>
<tr><td><strong>Sonic</strong></td><td>High-frequency vibration advances casing</td><td>Continuous, high-quality cores through till, cobbles; less waste</td><td>Expensive; sample heating possible</td></tr>
<tr><td><strong>Rotary</strong> (mud, air)</td><td>Rotating bit with circulating fluid</td><td>Bedrock wells, deep wells</td><td>No continuous soil samples (rock coring separate); fluids can affect samples</td></tr>
<tr><td><strong>Hand auger</strong></td><td>Manual</td><td>Shallow soil, limited access</td><td>Shallow only</td></tr>
<tr><td><strong>Test pits</strong></td><td>Excavator</td><td>See fill and debris directly; large samples</td><td>Disturbs site; depth limited; OSHA entry restrictions</td></tr>
</table></div>
<h3>Logging soil</h3>
<p>For each sample interval record: depth, recovery, USCS soil description (Module 12) — color, moisture, consistency/density, grain size, structure — and observations of staining, odor, sheen, fill materials (ash, cinders, brick, glass, slag), and the depth to saturation. Environmental borings submitted to the DNR are typically logged on <strong>Form 4400-122</strong>.</p>
<h3>Field screening with a PID: headspace method</h3>
<ol>
<li>Fill a resealable bag or jar about half full with soil and seal it.</li>
<li>Allow vapors to equilibrate (often 10 minutes or more, warmer in cold weather), and agitate.</li>
<li>Insert the PID probe into the headspace and record the <strong>peak reading</strong>.</li>
</ol>
<p>Headspace readings guide which intervals go to the lab — typically the interval with the highest PID reading or visual impact, the interval at the water table, and the bottom of the boring (to show vertical extent).</p>
<h3>VOC soil sampling — preservation matters</h3>
<p>VOCs escape quickly from disturbed soil. EPA Method <strong>5035</strong> procedures require collecting a small, undisturbed core with a coring syringe and immediately placing it into a pre-weighed vial with <strong>methanol</strong> preservative (or using a sealed coring device). Wisconsin expects field methanol preservation for soil VOC and GRO samples. Collect a separate unpreserved jar for percent moisture so results can be reported on a <strong>dry-weight basis</strong>. Always collect VOC samples <strong>first</strong>, from the least-disturbed part of the core, before logging and homogenizing.</p>
<h3>Decontamination and borehole abandonment</h3>
<p>Non-dedicated sampling equipment is decontaminated between samples (e.g., detergent wash, potable rinse, distilled water rinse) to prevent cross-contamination. Borings not converted to wells must be properly filled and sealed (typically with bentonite or grout) and documented on DNR <strong>Form 3300-005</strong>. Cuttings and decon water from contaminated sites are containerized (often in drums) until characterized for disposal.</p>
`,
      check: [
        { type: "mc", q: "When collecting soil samples from a core for VOC analysis, you should:", options: ["Homogenize the whole core first", "Collect VOCs first from undisturbed soil with a coring device into methanol", "Dry the soil in the sun", "Collect VOCs last"], answer: 1, explain: "VOCs are lost with disturbance; collect them first using Method 5035 procedures." },
        { type: "mc", q: "Which drilling method is most commonly used to install conventional 2-inch monitoring wells in unconsolidated soil and to take SPT samples?", options: ["Direct push", "Hollow-stem auger", "Hand auger", "Test pit"], answer: 1, explain: "HSA drilling is the standard for monitoring wells and SPT sampling." }
      ]
    },
    {
      title: "Monitoring wells and groundwater sampling",
      html: `
<h3>Anatomy of a monitoring well</h3>
<figure>
<svg viewBox="0 0 360 300" role="img" aria-label="Monitoring well cross-section">
  <rect x="0" y="40" width="360" height="260" fill="#c8b48a" opacity=".35"/>
  <line x1="0" y1="40" x2="360" y2="40" stroke="currentColor"/>
  <line x1="0" y1="170" x2="360" y2="170" stroke="#3b7dd8" stroke-dasharray="6 4"/>
  <text x="250" y="165" font-size="11" fill="#3b7dd8">water table</text>
  <rect x="150" y="45" width="60" height="18" fill="#999"/>
  <text x="215" y="58" font-size="11" fill="currentColor">concrete pad / flush mount</text>
  <rect x="160" y="60" width="40" height="40" fill="#777" opacity=".6"/>
  <text x="215" y="85" font-size="11" fill="currentColor">annular seal (grout/bentonite)</text>
  <rect x="160" y="100" width="40" height="30" fill="#5b4a2f" opacity=".7"/>
  <text x="215" y="120" font-size="11" fill="currentColor">bentonite seal</text>
  <rect x="160" y="130" width="40" height="130" fill="#e3d7b0"/>
  <text x="215" y="215" font-size="11" fill="currentColor">filter pack (sand)</text>
  <rect x="175" y="40" width="10" height="100" fill="#fff" stroke="currentColor"/>
  <text x="20" y="100" font-size="11" fill="currentColor">riser (solid PVC)</text>
  <line x1="110" y1="97" x2="175" y2="97" stroke="currentColor"/>
  <rect x="175" y="140" width="10" height="110" fill="url(#slots)" stroke="currentColor"/>
  <defs><pattern id="slots" width="10" height="6" patternUnits="userSpaceOnUse"><rect width="10" height="6" fill="#fff"/><line x1="0" y1="3" x2="10" y2="3" stroke="#444"/></pattern></defs>
  <text x="20" y="200" font-size="11" fill="currentColor">screen (slotted)</text>
  <line x1="110" y1="197" x2="175" y2="197" stroke="currentColor"/>
</svg>
<figcaption>Simplified water table well: the screen straddles the water table so LNAPL and seasonal fluctuations are captured.</figcaption>
</figure>
<ul>
<li><strong>Riser</strong> — solid casing (usually 2-inch PVC) from the screen to the surface.</li>
<li><strong>Screen</strong> — slotted section (commonly 0.010-inch slots) where water enters.</li>
<li><strong>Filter pack</strong> — sand placed around the screen to keep fines out.</li>
<li><strong>Bentonite seal</strong> — above the filter pack to prevent surface water from short-circuiting down the borehole.</li>
<li><strong>Annular seal</strong> and <strong>surface completion</strong> — grout or bentonite to the surface; a flush-mount vault or stick-up protective casing, locking cap, and concrete pad.</li>
</ul>
<p>A <strong>water table well</strong> is screened across the water table. A <strong>piezometer</strong> (or deep well) is screened entirely below the water table to measure deeper heads and water quality. Wells are constructed and documented under NR 141 (Form 4400-113A), then <strong>developed</strong> (surged and pumped to remove fines and restore natural conditions; Form 4400-113B), and the top of casing is surveyed.</p>
<h3>Sampling sequence</h3>
<ol>
<li>Measure depth to water (and LNAPL with an interface probe) in all wells before purging any — this gives a synoptic water level round.</li>
<li><strong>Purge</strong> to bring formation water into the well:
  <ul>
  <li><em>Volume-based</em>: remove a set number of well volumes (traditionally 3–5).</li>
  <li><em>Low-flow (low-stress)</em>: pump slowly (often 0.1–0.5 L/min) with minimal drawdown while monitoring water quality parameters (pH, specific conductance, temperature, dissolved oxygen, oxidation-reduction potential, turbidity) until they stabilize.</li>
  <li><em>No-purge / passive</em>: passive diffusion bags or grab samplers, where accepted.</li>
  </ul></li>
<li>Collect samples in order of volatility — VOCs first.</li>
</ol>
<span class="formula">Well volume (gal) = water column height (ft) × gallons per foot
2-inch well ≈ 0.163 gal/ft      4-inch well ≈ 0.653 gal/ft</span>
<h3>Containers, preservation, holding times (typical)</h3>
<div class="tbl-wrap"><table>
<tr><th>Analysis (water)</th><th>Container</th><th>Preservation</th><th>Holding time</th></tr>
<tr><td>VOCs (EPA 8260)</td><td>40 mL VOA vials, <strong>no headspace</strong> (no bubbles)</td><td>HCl to pH &lt; 2; cool</td><td>14 days</td></tr>
<tr><td>SVOCs/PAHs (8270)</td><td>Amber glass</td><td>Cool</td><td>7 days to extraction; 40 days after</td></tr>
<tr><td>Metals (6010/6020)</td><td>Plastic</td><td>HNO₃ to pH &lt; 2</td><td>6 months (mercury 28 days)</td></tr>
</table></div>
<p>Samples are kept at or below 6 °C (without freezing) during shipment. <strong>Total</strong> metals are unfiltered; <strong>dissolved</strong> metals are field-filtered (0.45 µm) before preservation — the DNR's expectations for which to report should be confirmed in the work plan. Purge water from contaminated wells is containerized for proper disposal.</p>
`,
      check: [
        { type: "num", q: "A 2-inch well has a total depth of 20.0 ft and depth to water of 8.0 ft. How many gallons are in three well volumes? (0.163 gal/ft)", answer: 5.87, tol: 0.05, unit: "gal", explain: "Water column 12 ft × 0.163 = 1.956 gal per volume × 3 = 5.87 gal." },
        { type: "mc", q: "VOC water sample vials must be filled:", options: ["Halfway", "With headspace for expansion", "With no headspace or bubbles", "Without preservative"], answer: 2, explain: "Headspace allows VOCs to partition out of the water." }
      ]
    },
    {
      title: "Soil gas and vapor intrusion sampling",
      html: `
<p>Vapor intrusion (VI) investigations follow a lines-of-evidence approach, typically guided in Wisconsin by DNR publication RR-800.</p>
<h3>Sample types</h3>
<div class="tbl-wrap"><table>
<tr><th>Sample type</th><th>Where</th><th>Purpose</th></tr>
<tr><td><strong>Sub-slab vapor</strong></td><td>Beneath a building's floor slab via a small permanent or temporary probe</td><td>Measures vapor directly under the building — the most commonly used VI line of evidence</td></tr>
<tr><td><strong>Soil gas</strong> (exterior)</td><td>Probes driven into the vadose zone outside buildings</td><td>Maps vapor plumes; evaluates undeveloped lots for future buildings</td></tr>
<tr><td><strong>Indoor air</strong></td><td>Breathing zone inside the building</td><td>Measures actual exposure, but is affected by indoor sources (paints, cleaners, dry-cleaned clothes)</td></tr>
<tr><td><strong>Outdoor (ambient) air</strong></td><td>Outside, upwind</td><td>Background comparison for indoor air</td></tr>
</table></div>
<h3>How samples are collected</h3>
<ul>
<li>Air and vapor are commonly collected in evacuated stainless steel canisters (e.g., 1-liter for sub-slab grab samples, 6-liter for time-integrated indoor air, often 24 hours in residences) and analyzed by EPA Method <strong>TO-15</strong> for VOCs. Sorbent tubes (Method TO-17) are an alternative.</li>
<li><strong>Leak checks</strong> are essential for sub-slab and soil gas probes — commonly a tracer gas (helium) shroud and a shut-in test of the sampling train — so ambient air isn't drawn in and diluting the sample.</li>
<li>Before indoor air sampling, conduct a <strong>building survey</strong>: identify and remove indoor chemical sources where possible, note HVAC operation, slab penetrations, sumps, and occupancy.</li>
<li>Vapor concentrations vary seasonally; regulators often want more than one round, including the heating season when stack effect pulls more soil gas into buildings.</li>
</ul>
<h3>Interpreting results</h3>
<p>Sub-slab results are compared to screening levels derived by dividing indoor air action levels by an <strong>attenuation factor</strong> (EPA's default sub-slab-to-indoor attenuation factor is 0.03 — meaning indoor air is assumed to be about 3% of sub-slab concentration). Agreement between sub-slab and indoor air data, with consistent compound ratios, supports VI; indoor detections with no sub-slab source suggest background indoor sources.</p>
<div class="callout warn"><strong>Radon is not VI from contamination</strong>Radon enters buildings through the same pathways, and radon mitigation systems look like vapor mitigation systems, but radon is a naturally occurring non-scope issue — don't confuse the two in reports.</div>
`,
      check: [
        { type: "mc", q: "Why is a helium leak check used when sampling sub-slab vapor?", options: ["To calibrate the PID", "To confirm the probe and sampling train are not drawing in ambient air", "To preserve the sample", "To measure radon"], answer: 1, explain: "Leaks dilute the sample and bias results low." },
        { type: "num", q: "An indoor air action level is 2.1 µg/m³. Using an attenuation factor of 0.03, what is the corresponding sub-slab screening level in µg/m³?", answer: 70, tol: 0.5, unit: "µg/m³", explain: "2.1 / 0.03 = 70 µg/m³." }
      ]
    },
    {
      title: "QA/QC, laboratory methods, data qualifiers, and the SI report",
      html: `
<h3>Field QC samples</h3>
<div class="tbl-wrap"><table>
<tr><th>QC sample</th><th>What it is</th><th>What it detects</th></tr>
<tr><td><strong>Trip blank</strong></td><td>Lab-prepared VOC vials of clean water that travel unopened with the samples</td><td>VOC contamination during shipping and storage (VOCs only)</td></tr>
<tr><td><strong>Equipment (rinsate) blank</strong></td><td>Clean water poured over decontaminated equipment and collected</td><td>Inadequate decontamination / cross-contamination</td></tr>
<tr><td><strong>Field blank</strong></td><td>Clean water exposed to the sampling environment</td><td>Ambient contamination during sampling</td></tr>
<tr><td><strong>Field duplicate</strong></td><td>Second sample from the same location and time</td><td>Sampling and analytical precision (RPD)</td></tr>
<tr><td><strong>Matrix spike / matrix spike duplicate (MS/MSD)</strong></td><td>Extra sample volume the lab spikes with known analytes</td><td>Matrix interference affecting accuracy</td></tr>
<tr><td><strong>Temperature blank</strong></td><td>Container of water in the cooler</td><td>Cooler temperature on receipt</td></tr>
</table></div>
<p>The QAPP sets the frequency (for example, one duplicate per 10 or 20 samples). The laboratory runs its own QC: method blanks, laboratory control samples (LCS), surrogates, and calibration checks.</p>
<h3>Common analytical methods</h3>
<div class="tbl-wrap"><table>
<tr><th>Method</th><th>Analytes</th></tr>
<tr><td>EPA 8260</td><td>VOCs (GC/MS) — includes PVOCs and chlorinated VOCs</td></tr>
<tr><td>EPA 8270 (and 8270 SIM)</td><td>SVOCs, including PAHs (SIM for low detection limits)</td></tr>
<tr><td>EPA 6010 / 6020</td><td>Metals by ICP-AES / ICP-MS</td></tr>
<tr><td>EPA 7470 / 7471</td><td>Mercury in water / soil</td></tr>
<tr><td>EPA 8082</td><td>PCBs (as Aroclors)</td></tr>
<tr><td>EPA 8081</td><td>Organochlorine pesticides</td></tr>
<tr><td>EPA 1311</td><td>TCLP extraction (waste characterization)</td></tr>
<tr><td>EPA 1633</td><td>PFAS in non-drinking-water matrices (water, soil, sediment, biosolids, tissue)</td></tr>
<tr><td>EPA 537.1 / 533</td><td>PFAS in drinking water</td></tr>
<tr><td>Wisconsin GRO / DRO</td><td>Gasoline and diesel range organics</td></tr>
<tr><td>TO-15</td><td>VOCs in air and soil gas</td></tr>
</table></div>
<p>Laboratories must be accredited under <strong>NR 149</strong> for data submitted to the DNR.</p>
<h3>Data qualifiers (common)</h3>
<ul>
<li><strong>U</strong> — not detected above the reported limit.</li>
<li><strong>J</strong> — estimated concentration (e.g., between detection and quantitation limits, or QC issues).</li>
<li><strong>B</strong> — analyte also detected in a blank; result may be biased high.</li>
<li><strong>R</strong> — rejected; not usable.</li>
</ul>
<p>Before using data, review the lab report narrative, holding times, blank results, surrogate and spike recoveries, and duplicate RPDs. A trip blank with toluene in it tells you low toluene hits in samples may not be real.</p>
<h3>The site investigation report (NR 716)</h3>
<p>Typical content: background and history; field methods; geology and hydrogeology (boring logs, cross-sections, groundwater flow maps, hydraulic conductivity); results in tables compared to NR 720 and NR 140 standards; figures showing soil and groundwater concentrations and the extent of contamination; vapor evaluation; receptor survey (wells, basements, utilities, surface water); an updated conceptual site model; and conclusions on whether the degree and extent are defined and what comes next.</p>
`,
      check: [
        { type: "mc", q: "A trip blank is used to detect:", options: ["Poor decontamination", "VOC contamination during shipping and storage", "Matrix interference", "Duplicate precision"], answer: 1, explain: "Trip blanks travel unopened with VOC samples." },
        { type: "mc", q: "A result flagged 'B' means:", options: ["Below detection", "The analyte was also found in a blank", "Background", "Biodegraded"], answer: 1, explain: "B indicates blank contamination." }
      ]
    }
  ],
  terms: [
    { term: "Phase II ESA", def: "Intrusive investigation (ASTM E1903) sampling soil, groundwater, or vapor to evaluate RECs." },
    { term: "Site investigation (NR 716)", def: "DNR-required investigation defining the nature, degree, and extent of contamination in all affected media." },
    { term: "DQO process", def: "EPA's systematic planning process to define the data needed to support a decision with acceptable error." },
    { term: "SAP", def: "Sampling and Analysis Plan: locations, depths, methods, analytes, and schedule." },
    { term: "QAPP", def: "Quality Assurance Project Plan: data quality requirements, QC samples, detection limits, and validation procedures." },
    { term: "Biased sampling", def: "Judgmental sampling targeting suspected sources." },
    { term: "Direct push", def: "Drilling method that pushes or hammers a lined sampler; fast, continuous cores; refusal in dense or cobbly soil." },
    { term: "Hollow-stem auger", def: "Drilling with hollow augers allowing split-spoon sampling and well installation through the stem." },
    { term: "Sonic drilling", def: "Vibratory drilling producing continuous cores through difficult glacial soils." },
    { term: "PID headspace screening", def: "Field screening by sealing soil in a bag or jar, allowing vapors to equilibrate, and recording peak PID reading." },
    { term: "EPA Method 5035", def: "Soil VOC sample collection and preservation using coring devices and methanol or sealed samplers." },
    { term: "Methanol preservation", def: "Field preservation of soil VOC/GRO samples by placing a measured soil core into methanol." },
    { term: "Dry-weight basis", def: "Soil results corrected for moisture content using a separate moisture sample." },
    { term: "Decontamination", def: "Cleaning non-dedicated equipment between samples to prevent cross-contamination." },
    { term: "Riser", def: "Solid well casing from the screen to the surface." },
    { term: "Well screen", def: "Slotted casing section (often 0.010-inch slots) where groundwater enters a well." },
    { term: "Filter pack", def: "Sand placed around a well screen to limit fine sediment entry." },
    { term: "Bentonite seal", def: "Low-permeability clay seal above the filter pack preventing vertical migration along the borehole." },
    { term: "Water table well", def: "Well screened across the water table." },
    { term: "Piezometer", def: "Well screened fully below the water table to measure deeper head and water quality." },
    { term: "Well development", def: "Surging and pumping a new well to remove fines and restore formation conditions." },
    { term: "Low-flow sampling", def: "Purging at low rates with minimal drawdown until water quality parameters stabilize." },
    { term: "Well volume", def: "Water column height × gal/ft (2-in ≈ 0.163; 4-in ≈ 0.653 gal/ft)." },
    { term: "VOA vial", def: "40 mL glass vial for VOC water samples, preserved with HCl and filled with no headspace." },
    { term: "Holding time", def: "Maximum time between sample collection and extraction or analysis (e.g., VOCs 14 days)." },
    { term: "Total vs. dissolved metals", def: "Unfiltered vs. field-filtered (0.45 µm) metals samples." },
    { term: "Sub-slab vapor sample", def: "Soil gas sample collected directly beneath a building slab." },
    { term: "TO-15", def: "EPA method for VOCs in air and soil gas collected in evacuated canisters." },
    { term: "Leak check (tracer)", def: "Use of helium or another tracer and shut-in testing to confirm vapor samples aren't diluted by ambient air." },
    { term: "Attenuation factor", def: "Ratio of indoor air to sub-slab (or soil gas) concentration; EPA default sub-slab value 0.03." },
    { term: "Trip blank", def: "Lab-prepared VOC blank that travels unopened with samples to detect shipping contamination." },
    { term: "Equipment blank", def: "Rinse water from decontaminated equipment, analyzed to check decon effectiveness." },
    { term: "MS/MSD", def: "Matrix spike / matrix spike duplicate: lab-spiked sample aliquots evaluating matrix effects." },
    { term: "EPA 8260 / 8270", def: "Standard methods for VOCs / SVOCs (including PAHs) by GC/MS." },
    { term: "EPA 1633", def: "EPA method for PFAS in non-drinking-water matrices." },
    { term: "Data qualifiers U / J / B / R", def: "Non-detect / estimated / found in blank / rejected." }
  ],
  resources: [
    { title: "EPA — Data Quality Objectives process (QA/G-4)", url: "https://www.epa.gov/quality/guidance-systematic-planning-using-data-quality-objectives-process-epa-qag-4", note: "Systematic planning" },
    { title: "EPA SW-846 — Test Methods for Evaluating Solid Waste", url: "https://www.epa.gov/hw-sw846", note: "Methods 5035, 8260, 8270, 6010, 1311, and others" },
    { title: "EPA Region 1 — Low-Stress (Low-Flow) Purging and Sampling Procedure", url: "https://www.epa.gov/quality/low-stress-low-flow-purging-and-sampling-procedure-collection-groundwater-samples-monitoring", note: "Widely cited groundwater SOP" },
    { title: "EPA — Vapor Intrusion", url: "https://www.epa.gov/vaporintrusion", note: "OSWER technical guide and VISL calculator" },
    { title: "Wisconsin DNR — Vapor intrusion (RR-800)", url: "https://dnr.wisconsin.gov/topic/Brownfields/VI", note: "Wisconsin VI guidance" },
    { title: "Wis. Admin. Code NR 716", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/700/716", note: "Site investigation requirements" },
    { title: "Wis. Admin. Code NR 149", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/100/149", note: "Laboratory accreditation" },
    { title: "ITRC — Vapor Intrusion and other guidance", url: "https://itrcweb.org/", note: "Practical technical guidance" }
  ],
  teach: [
    { prompt: "Describe, step by step, how you would collect a soil sample for VOC analysis from a direct-push core and choose which interval to send to the lab.",
      model: "<p>As soon as the liner is opened, collect VOC samples first from the least disturbed soil using a coring syringe, placing the measured core into a pre-weighed methanol-preserved vial (Method 5035), and fill an unpreserved jar for percent moisture. Then log the core (USCS, color, moisture, odor, staining, fill) and perform PID headspace screening on each interval by sealing soil in a bag, letting it equilibrate, and recording the peak reading. Select intervals for analysis based on the highest PID or visual impact, the water table interval, and the bottom of the boring to show vertical extent, per the work plan. Label, record on the chain of custody, keep cool (≤6 °C), and decontaminate equipment before the next sample.</p>" },
    { prompt: "Explain what each of these QC samples tells you: trip blank, equipment blank, field duplicate, and MS/MSD. Then explain what you would conclude if the trip blank contained PCE.",
      model: "<p>A trip blank detects VOC contamination during transport and storage. An equipment blank checks whether decontamination of reusable equipment was adequate. A field duplicate measures overall precision of sampling and analysis via RPD. MS/MSD samples show whether the sample matrix interferes with analytical accuracy. PCE in the trip blank means VOC contamination was introduced during shipping, storage, or in the lab; low-level PCE detections in samples from that cooler are suspect and may need qualification (B flags) or resampling, and the source (e.g., cooler stored near dry-cleaned items or lab background) should be investigated.</p>" }
  ],
  exam: {
    count: 20,
    bank: [
      { type: "mc", q: "Which ASTM standard addresses Phase II ESAs?", options: ["E1527", "E1528", "E1903", "E2600"], answer: 2, explain: "E1903." },
      { type: "mc", q: "NR 716 requires the site investigation to define contamination's:", options: ["Cost", "Nature, degree, and extent", "Ownership", "Insurance coverage"], answer: 1, explain: "Nature, degree, and extent in each affected medium." },
      { type: "mc", q: "Before sampling, why confirm lab detection limits?", options: ["To reduce cost", "So non-detects are below applicable standards", "To choose bottle colors", "To meet OSHA rules"], answer: 1, explain: "Detection limits must be below standards to show compliance." },
      { type: "mc", q: "For an older gas station that likely sold leaded gasoline, which analyte would you add to PVOCs?", options: ["PCBs", "Lead", "Pesticides", "PFAS"], answer: 1, explain: "Leaded gasoline can leave lead contamination." },
      { type: "mc", q: "Which drilling method commonly meets refusal in dense, cobbly till?", options: ["Sonic", "Direct push", "Rotary", "None"], answer: 1, explain: "Direct push has limited penetration in dense or cobbly soils." },
      { type: "mc", q: "Test pits are especially useful for:", options: ["Deep bedrock wells", "Directly observing fill and buried debris", "Low-flow sampling", "Vapor sampling"], answer: 1, explain: "Test pits expose fill and debris for observation." },
      { type: "mc", q: "In PID headspace screening, you record:", options: ["The first reading", "The peak reading", "The average over an hour", "The reading after the bag is opened"], answer: 1, explain: "The peak reading is recorded." },
      { type: "mc", q: "Which three intervals are commonly selected for laboratory analysis from a boring?", options: ["Top, middle, bottom regardless of data", "Highest PID/visual impact, water table, bottom of boring", "Only the surface", "Every foot"], answer: 1, explain: "These intervals target worst case, the water table, and vertical extent." },
      { type: "mc", q: "Soil VOC samples in Wisconsin are typically preserved in the field with:", options: ["Hydrochloric acid", "Nitric acid", "Methanol", "No preservative"], answer: 2, explain: "Methanol preservation per Method 5035 procedures." },
      { type: "mc", q: "Why is a separate unpreserved jar collected with soil VOC samples?", options: ["For TCLP", "For percent moisture to report on a dry-weight basis", "As a duplicate", "For the client"], answer: 1, explain: "Moisture content corrects results to dry weight." },
      { type: "mc", q: "Which DNR form documents abandonment of a boring?", options: ["4400-113A", "4400-113B", "4400-122", "3300-005"], answer: 3, explain: "3300-005 Well/Drillhole/Borehole Filling & Sealing." },
      { type: "mc", q: "What is the purpose of the bentonite seal in a monitoring well?", options: ["To filter fines", "To prevent surface water from migrating down the borehole into the screen", "To hold the screen in place", "To preserve samples"], answer: 1, explain: "The seal isolates the screened interval." },
      { type: "mc", q: "A water table well is screened:", options: ["Entirely below the water table", "Across the water table", "Above the water table", "In bedrock only"], answer: 1, explain: "Straddling the water table captures LNAPL and fluctuations." },
      { type: "mc", q: "Well development is performed to:", options: ["Survey the well", "Remove fines and restore natural formation conditions", "Add preservative", "Abandon the well"], answer: 1, explain: "Development removes fines from drilling." },
      { type: "mc", q: "Before purging any wells on sampling day, you should:", options: ["Collect VOCs", "Measure water levels (and product) in all wells", "Add HCl to wells", "Filter samples"], answer: 1, explain: "A synoptic water level round is collected first." },
      { type: "num", q: "A 4-inch well has 15.0 ft of water. What is one well volume in gallons? (0.653 gal/ft)", answer: 9.8, tol: 0.05, unit: "gal", explain: "15 × 0.653 = 9.80 gal." },
      { type: "multi", q: "Which parameters are commonly monitored for stabilization during low-flow purging? Select all that apply.", options: ["pH", "Specific conductance", "Dissolved oxygen", "ORP", "Turbidity", "Benzene concentration"], answer: [0, 1, 2, 3, 4], explain: "Field water quality parameters are monitored; contaminant concentrations are lab results." },
      { type: "mc", q: "Groundwater VOC samples are preserved with:", options: ["HNO₃", "HCl to pH < 2", "Methanol", "Sodium hydroxide"], answer: 1, explain: "HCl is the standard VOC water preservative." },
      { type: "mc", q: "Groundwater metals samples are preserved with:", options: ["HCl", "HNO₃ to pH < 2", "Methanol", "Nothing"], answer: 1, explain: "Nitric acid." },
      { type: "mc", q: "The typical holding time for preserved VOC water samples is:", options: ["48 hours", "7 days", "14 days", "6 months"], answer: 2, explain: "14 days." },
      { type: "mc", q: "Samples should be cooled during shipment to:", options: ["≤ 0 °C (frozen)", "≤ 6 °C without freezing", "Room temperature", "≤ 15 °C"], answer: 1, explain: "≤ 6 °C, not frozen." },
      { type: "mc", q: "Dissolved metals samples differ from total metals samples because they are:", options: ["Collected from soil", "Field-filtered through 0.45 µm before preservation", "Not preserved", "Collected in VOA vials"], answer: 1, explain: "Dissolved = filtered." },
      { type: "mc", q: "Which sample type is most affected by indoor background sources like cleaning products?", options: ["Sub-slab vapor", "Exterior soil gas", "Indoor air", "Groundwater"], answer: 2, explain: "Indoor air includes indoor sources." },
      { type: "mc", q: "Which EPA method is used for VOCs in air canisters?", options: ["8260", "TO-15", "1633", "6020"], answer: 1, explain: "TO-15." },
      { type: "mc", q: "Why are heating-season vapor samples often requested?", options: ["Labs are less busy", "Stack effect can draw more soil gas into buildings", "Snow preserves samples", "Regulations require January only"], answer: 1, explain: "Heating creates negative pressure that increases soil gas entry." },
      { type: "mc", q: "An equipment blank detects:", options: ["Shipping contamination", "Inadequate decontamination", "Matrix interference", "Lab calibration errors"], answer: 1, explain: "Rinsate over decontaminated equipment checks decon effectiveness." },
      { type: "mc", q: "Which QC sample evaluates matrix interference?", options: ["Trip blank", "Field duplicate", "MS/MSD", "Temperature blank"], answer: 2, explain: "Matrix spikes show matrix effects." },
      { type: "mc", q: "EPA Method 1633 is used for:", options: ["VOCs in air", "PFAS in non-drinking-water matrices", "Metals by ICP-MS", "TCLP extraction"], answer: 1, explain: "Method 1633 is for PFAS in water, soil, sediment, and other matrices." },
      { type: "mc", q: "A data qualifier of 'R' means:", options: ["Reported", "Rejected — not usable", "Replicate", "Recovered"], answer: 1, explain: "R = rejected." },
      { type: "mc", q: "PAHs at low detection limits are commonly analyzed by:", options: ["8260", "8270 SIM", "6010", "TO-15"], answer: 1, explain: "8270 in selected ion monitoring mode achieves low PAH detection limits." }
    ]
  }
});
