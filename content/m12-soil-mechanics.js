COURSE.addModule({
  id: "m12",
  track: "t3",
  title: "Soil Mechanics and Soil Classification",
  hours: 5,
  summary: "The core vocabulary and math of geotechnical engineering: phase relationships, grain size and plasticity, the Unified Soil Classification System, AASHTO classification, effective stress, consolidation, and shear strength.",
  objectives: [
    "Define and compute moisture content, void ratio, porosity, degree of saturation, and unit weights using phase relationships.",
    "Interpret a gradation curve (D10, D30, D60, Cu, Cc) and Atterberg limits (LL, PL, PI).",
    "Classify soils using the USCS (ASTM D2487) and describe soils visually (ASTM D2488).",
    "Explain AASHTO soil classification and frost susceptibility for pavement subgrades.",
    "Compute effective stress and explain consolidation, overconsolidation, and Mohr-Coulomb shear strength."
  ],
  lessons: [
    {
      title: "Phase relationships",
      html: `
<p>Soil is a three-phase material: <strong>solids</strong> (mineral grains), <strong>water</strong>, and <strong>air</strong>. Almost every soil property is defined as a ratio of the weights or volumes of these phases.</p>
<figure>
<svg viewBox="0 0 420 230" role="img" aria-label="Soil phase diagram">
  <rect x="140" y="20" width="120" height="50" fill="#dfe9f5" stroke="currentColor"/>
  <text x="200" y="50" text-anchor="middle" font-size="13" fill="#333">Air</text>
  <rect x="140" y="70" width="120" height="60" fill="#8fb8e6" stroke="currentColor"/>
  <text x="200" y="104" text-anchor="middle" font-size="13" fill="#123">Water</text>
  <rect x="140" y="130" width="120" height="80" fill="#c8a46a" stroke="currentColor"/>
  <text x="200" y="174" text-anchor="middle" font-size="13" fill="#2a1d08">Solids</text>
  <g font-size="12" fill="currentColor">
    <text x="128" y="50" text-anchor="end">Va</text>
    <text x="128" y="104" text-anchor="end">Vw</text>
    <text x="128" y="174" text-anchor="end">Vs</text>
    <line x1="20" y1="20" x2="20" y2="130" stroke="currentColor"/><text x="28" y="78">Vv</text>
    <line x1="60" y1="20" x2="60" y2="210" stroke="currentColor"/><text x="66" y="118">V</text>
    <text x="272" y="50">Wa ≈ 0</text>
    <text x="272" y="104">Ww</text>
    <text x="272" y="174">Ws</text>
    <line x1="360" y1="70" x2="360" y2="210" stroke="currentColor"/><text x="366" y="144">W</text>
  </g>
</svg>
<figcaption>Volumes on the left, weights on the right. Voids (Vv) = air + water.</figcaption>
</figure>
<h3>Definitions</h3>
<span class="formula">Moisture (water) content   w  = Ww / Ws        (as %, by weight of SOLIDS — not total)
Void ratio                 e  = Vv / Vs
Porosity                   n  = Vv / V  = e / (1 + e)
Degree of saturation       S  = Vw / Vv        (0% dry to 100% saturated)
Moist (total) unit weight  γ  = W / V
Dry unit weight            γd = Ws / V = γ / (1 + w)
Specific gravity of solids Gs = γs / γw         (typically 2.65–2.75 for mineral soils)
Key relationship           S · e = w · Gs
Dry unit weight            γd = Gs · γw / (1 + e)</span>
<div class="callout warn"><strong>Common error</strong>Moisture content is water weight divided by the weight of <em>dry solids</em>, not total weight. A soil can have a moisture content over 100% (many peats and soft clays do).</div>
<h3>Worked example</h3>
<p>A field sample weighs 125.0 pcf (moist unit weight) with moisture content 12.0%.</p>
<span class="formula">γd = 125.0 / (1 + 0.120) = 111.6 pcf</span>
<p>If Gs = 2.70 and γw = 62.4 pcf: e = Gs·γw/γd − 1 = (2.70 × 62.4 / 111.6) − 1 = 0.510. Then S = w·Gs/e = (0.12 × 2.70)/0.510 = 0.635, or about 64% saturated.</p>
<p>Dry unit weight is the quantity used in compaction specifications (Module 15), which is why converting moist to dry unit weight is the most common calculation a CMT technician performs.</p>
<div class="mnemonic"><strong>"Se = wG"</strong> — "<strong>S</strong>ee <strong>w</strong>hat <strong>G</strong>ravity does." Remember it and you can solve for any one of the four if you know three.</div>
`,
      check: [
        { type: "num", q: "A sample has a wet weight of 220 g and an oven-dry weight of 190 g. What is its moisture content (%)? Round to one decimal.", answer: 15.8, tol: 0.1, unit: "%", explain: "w = (220 − 190)/190 = 30/190 = 15.8%." },
        { type: "num", q: "Moist unit weight 130.0 pcf, moisture content 8.0%. What is the dry unit weight (pcf)? Round to one decimal.", answer: 120.4, tol: 0.1, unit: "pcf", explain: "130.0 / 1.08 = 120.4 pcf." },
        { type: "num", q: "A saturated clay (S = 100%) has w = 30% and Gs = 2.70. What is its void ratio?", answer: 0.81, tol: 0.005, unit: "", explain: "Se = wGs → e = 0.30 × 2.70 / 1.0 = 0.81." }
      ]
    },
    {
      title: "Grain size and plasticity",
      html: `
<h3>Particle sizes (USCS)</h3>
<div class="tbl-wrap"><table>
<tr><th>Component</th><th>Size range</th><th>Sieve boundary</th></tr>
<tr><td>Boulders</td><td>&gt; 300 mm (12 in)</td><td>—</td></tr>
<tr><td>Cobbles</td><td>75–300 mm (3–12 in)</td><td>3-in sieve</td></tr>
<tr><td>Gravel</td><td>4.75–75 mm</td><td>No. 4 sieve (4.75 mm) to 3 in</td></tr>
<tr><td>Sand</td><td>0.075–4.75 mm</td><td>No. 200 (0.075 mm) to No. 4</td></tr>
<tr><td>Fines (silt and clay)</td><td>&lt; 0.075 mm</td><td>Passing No. 200</td></tr>
</table></div>
<p>Sand is further divided into coarse (No. 4–No. 10), medium (No. 10–No. 40), and fine (No. 40–No. 200). Silt and clay are distinguished not by size in the USCS but by <strong>plasticity</strong>.</p>
<h3>Gradation</h3>
<p>A sieve analysis (ASTM D6913; hydrometer analysis ASTM D7928 for fines) produces a <strong>gradation curve</strong> of percent passing versus particle size on a log scale. From it:</p>
<span class="formula">D10, D30, D60 = particle sizes at which 10%, 30%, 60% of the soil is finer
Coefficient of uniformity   Cu = D60 / D10
Coefficient of curvature    Cc = (D30)² / (D10 × D60)</span>
<ul>
<li><strong>Well-graded</strong> soils have a wide range of sizes filling each other's voids — they compact densely. USCS criteria: gravels Cu ≥ 4 and 1 ≤ Cc ≤ 3; sands Cu ≥ 6 and 1 ≤ Cc ≤ 3.</li>
<li><strong>Poorly graded</strong> soils are either uniform (one size) or gap-graded (missing sizes).</li>
</ul>
<h3>Atterberg limits (ASTM D4318)</h3>
<p>Fine-grained soils change behavior with water content:</p>
<span class="formula">solid ——— SL ——— semisolid ——— PL ——— plastic ——— LL ——— liquid
Plasticity index      PI = LL − PL
Liquidity index       LI = (w − PL) / PI</span>
<ul>
<li><strong>Liquid limit (LL)</strong> — moisture content at which soil begins to flow; measured with the Casagrande cup as the water content at which a groove closes at 25 blows.</li>
<li><strong>Plastic limit (PL)</strong> — moisture content at which a soil thread rolled to 1/8 inch (3 mm) diameter begins to crumble.</li>
<li><strong>Plasticity index (PI)</strong> — the range of moisture over which soil is plastic. High PI = more clayey, more shrink-swell potential.</li>
<li>Liquidity index near or above 1 means the natural moisture is near the LL — a sensitive, weak soil.</li>
</ul>
<h3>The plasticity chart</h3>
<p>Plotting PI versus LL separates clays from silts using the <strong>A-line</strong>: <code>PI = 0.73 (LL − 20)</code>. Soils plotting above the A-line are clays (C); below are silts (M). LL = 50 separates low plasticity (L) from high plasticity (H). Soils with PI between 4 and 7 plotting above the A-line fall in the hatched CL-ML zone.</p>
`,
      check: [
        { type: "num", q: "D10 = 0.15 mm, D30 = 0.40 mm, D60 = 1.2 mm. What is Cu?", answer: 8, tol: 0.01, unit: "", explain: "Cu = 1.2 / 0.15 = 8.0." },
        { type: "num", q: "Using the same values (D10 = 0.15, D30 = 0.40, D60 = 1.2 mm), what is Cc? Round to two decimals.", answer: 0.89, tol: 0.01, unit: "", explain: "Cc = 0.40² / (0.15 × 1.2) = 0.16 / 0.18 = 0.89 — outside 1–3, so the sand is poorly graded despite Cu ≥ 6." },
        { type: "num", q: "LL = 42, PL = 19. What is the PI?", answer: 23, tol: 0, unit: "", explain: "PI = 42 − 19 = 23." }
      ]
    },
    {
      title: "The Unified Soil Classification System (USCS)",
      html: `
<p>The <strong>USCS</strong> (ASTM D2487, laboratory; ASTM D2488, visual-manual) is the standard classification for geotechnical and environmental boring logs. Each soil gets a two-letter <strong>group symbol</strong> and a descriptive <strong>group name</strong> (e.g., <em>SC, clayey sand with gravel</em>).</p>
<h3>Letters</h3>
<div class="tbl-wrap"><table>
<tr><th>First letter (main type)</th><th>Second letter (modifier)</th></tr>
<tr><td>G = gravel<br>S = sand<br>M = silt<br>C = clay<br>O = organic<br>Pt = peat</td><td>W = well-graded<br>P = poorly graded<br>M = silty fines<br>C = clayey fines<br>L = low plasticity (LL &lt; 50)<br>H = high plasticity (LL ≥ 50)</td></tr>
</table></div>
<h3>The decision path</h3>
<ol>
<li><strong>Highly organic, fibrous, dark, odorous?</strong> → <strong>Pt</strong> (peat).</li>
<li><strong>More than 50% retained on the No. 200 sieve?</strong> → coarse-grained.
  <ul>
  <li>More than half of the coarse fraction retained on No. 4 → <strong>gravel (G)</strong>; otherwise <strong>sand (S)</strong>.</li>
  <li>Fines &lt; 5% → W or P based on Cu and Cc (GW, GP, SW, SP).</li>
  <li>Fines &gt; 12% → M or C based on the plasticity of the fines (GM, GC, SM, SC).</li>
  <li>Fines 5–12% → <strong>dual symbol</strong>, e.g., SP-SM, SW-SC, GP-GM.</li>
  </ul></li>
<li><strong>50% or more passing No. 200?</strong> → fine-grained. Use the plasticity chart:
  <ul>
  <li>LL &lt; 50: <strong>CL</strong> (PI &gt; 7, on or above A-line), <strong>ML</strong> (PI &lt; 4 or below A-line), <strong>CL-ML</strong> (PI 4–7, above A-line), <strong>OL</strong> (organic).</li>
  <li>LL ≥ 50: <strong>CH</strong> (on or above A-line), <strong>MH</strong> (below A-line), <strong>OH</strong> (organic).</li>
  </ul></li>
</ol>
<p>Group names follow the symbol: "<em>CL — lean clay with sand</em>," "<em>CH — fat clay</em>," "<em>ML — silt</em>," "<em>SP-SM — poorly graded sand with silt</em>." <strong>Lean clay</strong> = CL; <strong>fat clay</strong> = CH; <strong>elastic silt</strong> = MH.</p>
<h3>Visual-manual description (ASTM D2488)</h3>
<p>In the field you classify without lab tests, using simple manual tests on the fines:</p>
<ul>
<li><strong>Dry strength</strong> — crush a dried ball: clays are strong, silts weak.</li>
<li><strong>Dilatancy</strong> — shake a wet pat in your palm: silts quickly show water on the surface (and lose it when squeezed); clays show none.</li>
<li><strong>Toughness</strong> — stiffness of a thread rolled near the plastic limit: high for CH, low for ML.</li>
<li><strong>Plasticity</strong> — can it be rolled into a thread?</li>
</ul>
<p>A typical field description (order varies by firm): <em>"Brown, moist, stiff, lean CLAY with sand (CL), trace gravel — glacial till."</em> Include color, moisture (dry, moist, wet), consistency or density, soil name with symbol, minor components, and geologic interpretation where appropriate. Visual classifications are written in quotes or with "visual" noted when lab confirmation is lacking.</p>
<div class="mnemonic"><strong>50 / 50 / 5–12</strong>: 50% on the No. 200 splits coarse from fine; LL 50 splits L from H; 5–12% fines means a dual symbol.</div>
`,
      check: [
        { type: "mc", q: "A soil has 65% retained on the No. 200 sieve; of the coarse fraction, 70% passes the No. 4. Fines = 35% and plot above the A-line. Classification:", options: ["GC", "SC", "CL", "SM"], answer: 1, explain: "Coarse-grained (>50% retained), sand (most coarse fraction passes No. 4), fines >12% and clayey → SC." },
        { type: "mc", q: "A fine-grained soil has LL = 58 and plots above the A-line. Its symbol is:", options: ["CL", "CH", "MH", "ML"], answer: 1, explain: "LL ≥ 50 and above the A-line → CH (fat clay)." },
        { type: "mc", q: "A clean sand with 8% fines that are silty, and poorly graded, would be classified:", options: ["SP", "SM", "SP-SM", "SW"], answer: 2, explain: "5–12% fines requires a dual symbol: SP-SM." }
      ]
    },
    {
      title: "AASHTO classification and frost susceptibility",
      html: `
<p>Highway agencies, including WisDOT, also use the <strong>AASHTO soil classification system</strong> (AASHTO M 145) to rate soils as pavement subgrade. Groups run from <strong>A-1</strong> (best) to <strong>A-7</strong> (poorest), with organic soils as A-8.</p>
<div class="tbl-wrap"><table>
<tr><th>Group</th><th>Description</th><th>General subgrade rating</th></tr>
<tr><td>A-1-a, A-1-b</td><td>Well-graded gravel and sand mixtures, few fines</td><td>Excellent to good</td></tr>
<tr><td>A-3</td><td>Fine sand (non-plastic)</td><td>Excellent to good</td></tr>
<tr><td>A-2 (-4, -5, -6, -7)</td><td>Silty or clayey gravel and sand (≤ 35% passing No. 200)</td><td>Excellent to good</td></tr>
<tr><td>A-4</td><td>Silty soils, low plasticity</td><td>Fair to poor</td></tr>
<tr><td>A-5</td><td>Elastic silts, high LL</td><td>Fair to poor</td></tr>
<tr><td>A-6</td><td>Clayey soils, low LL</td><td>Fair to poor</td></tr>
<tr><td>A-7-5, A-7-6</td><td>Clayey soils, high LL</td><td>Fair to poor</td></tr>
</table></div>
<p>Granular materials have <strong>35% or less passing the No. 200 sieve</strong>; silt-clay materials have more than 35%. A <strong>group index (GI)</strong>, computed from percent passing No. 200, LL, and PI, refines the rating: higher GI = poorer subgrade (e.g., "A-6(12)").</p>
<p>Note the difference from USCS: the coarse/fine split is 50% passing No. 200 in USCS but 35% in AASHTO, and AASHTO uses the No. 10 sieve (2.0 mm) as the gravel/sand boundary.</p>
<h3>Frost action — a Wisconsin pavement and foundation issue</h3>
<p><strong>Frost heave</strong> occurs when water is drawn up to a freezing front and forms ice lenses that lift the ground. It requires three things at once:</p>
<ol>
<li>a <strong>frost-susceptible soil</strong>,</li>
<li>freezing temperatures penetrating the soil, and</li>
<li>a supply of <strong>water</strong>.</li>
</ol>
<p>Silts (ML, A-4) are the most frost-susceptible soils: their pores are small enough to pull water by capillarity but large enough to transmit it quickly. Clays are less permeable, and clean sands and gravels don't develop strong capillary suction. When the ground thaws in spring, the melted ice lenses leave soil saturated and weak — <strong>thaw weakening</strong> — which is why Wisconsin counties and municipalities impose <strong>seasonal weight restrictions</strong> ("frost laws") on some roads in spring. Foundations are placed below the design frost depth to avoid heave.</p>
<div class="mnemonic">Frost heave needs "<strong>S-W-F</strong>": <strong>S</strong>usceptible soil, <strong>W</strong>ater, <strong>F</strong>reezing. Remove any one and it stops. <strong>Silt</strong> is the <strong>S</strong>uper-susceptible soil.</div>
`,
      check: [
        { type: "mc", q: "Which soil type is generally the most frost-susceptible?", options: ["Clean gravel", "Clean sand", "Silt", "Fat clay"], answer: 2, explain: "Silts combine capillary suction with enough permeability to feed ice lenses." },
        { type: "mc", q: "In AASHTO classification, granular materials have what percentage passing the No. 200 sieve?", options: ["≤ 5%", "≤ 12%", "≤ 35%", "≤ 50%"], answer: 2, explain: "≤ 35% passing No. 200." }
      ]
    },
    {
      title: "Effective stress, consolidation, and shear strength",
      html: `
<h3>Effective stress</h3>
<p>Karl Terzaghi's <strong>principle of effective stress</strong> is the foundation of soil mechanics. The stress carried by the soil skeleton — which controls strength and compression — is the total stress minus the pore water pressure:</p>
<span class="formula">σ' = σ − u
σ  = total vertical stress = Σ (unit weight × thickness of each layer)
u  = pore water pressure = γw × depth below the water table (hydrostatic)</span>
<div class="callout"><strong>Example</strong>Water table at 5 ft. Soil γ = 120 pcf above, γsat = 125 pcf below. At 15 ft:<br>σ = 5(120) + 10(125) = 1,850 psf<br>u = 10(62.4) = 624 psf<br>σ' = 1,850 − 624 = 1,226 psf</div>
<p>Raising the water table reduces effective stress (and strength); lowering it — as in dewatering — increases effective stress and can cause settlement of nearby structures on compressible soils.</p>
<h3>Consolidation</h3>
<p>When a load is applied to saturated clay, the water initially carries it as <strong>excess pore pressure</strong>. Over time, water drains out, pore pressure dissipates, effective stress increases, and the clay compresses. This time-dependent process is <strong>primary consolidation</strong>, measured in the laboratory with a consolidation (oedometer) test (ASTM D2435).</p>
<ul>
<li><strong>Preconsolidation pressure (σ'p)</strong> — the maximum effective stress the soil has experienced.</li>
<li><strong>Normally consolidated (NC)</strong> — current effective stress equals σ'p; compresses a lot under new load.</li>
<li><strong>Overconsolidated (OC)</strong> — current effective stress is less than σ'p (it was once loaded more heavily, for example by glacial ice, or by erosion or desiccation). <strong>OCR = σ'p / σ'v0</strong>. OC soils compress much less until the load exceeds σ'p.</li>
<li><strong>Compression index (Cc)</strong> and <strong>recompression index (Cr)</strong> — slopes of the void ratio vs. log stress curve in the NC and OC ranges.</li>
<li><strong>Time rate</strong> — governed by the coefficient of consolidation (cv); time scales with the square of the drainage path length, so thick clay layers take much longer.</li>
<li><strong>Secondary compression (creep)</strong> — continued compression after primary consolidation; significant in organic soils and peat.</li>
</ul>
<span class="formula">NC clay settlement:  S = [Cc · H / (1 + e0)] · log10(σ'final / σ'0)</span>
<p>Wisconsin context: many glacial tills are heavily overconsolidated (loaded by thick ice) and make excellent bearing soils; soft lacustrine clays and organic soils in former lake basins may be normally consolidated and prone to large settlements.</p>
<h3>Shear strength</h3>
<p>Soils fail in shear. The <strong>Mohr-Coulomb</strong> failure criterion:</p>
<span class="formula">τf = c' + σ' tan φ'
c' = effective cohesion;  φ' = effective friction angle</span>
<ul>
<li><strong>Granular soils</strong> (sand, gravel) derive strength from friction: c' ≈ 0, φ' typically about 28°–40°+ depending on density and angularity.</li>
<li><strong>Clays loaded quickly</strong> don't drain, so engineers use the <strong>undrained shear strength (su or cu)</strong>. From an unconfined compression test (ASTM D2166), <strong>su = qu / 2</strong>.</li>
<li><strong>Drained</strong> (long-term) analyses use c' and φ'; <strong>undrained</strong> (short-term, end of construction) analyses in clay use su.</li>
</ul>
<p>Laboratory strength tests: unconfined compression (D2166), unconsolidated-undrained triaxial (UU, D2850), consolidated-undrained triaxial with pore pressure (CU, D4767), and direct shear (D3080).</p>
`,
      check: [
        { type: "num", q: "Water table at the ground surface; γsat = 120 pcf. What is the effective vertical stress at 10 ft depth (psf)? Use γw = 62.4 pcf.", answer: 576, tol: 1, unit: "psf", explain: "σ = 1,200; u = 624; σ' = 576 psf." },
        { type: "num", q: "An unconfined compression test gives qu = 2.4 tsf. What is the undrained shear strength su (tsf)?", answer: 1.2, tol: 0.001, unit: "tsf", explain: "su = qu/2 = 1.2 tsf." },
        { type: "mc", q: "A clay whose current effective stress is less than its preconsolidation pressure is:", options: ["Normally consolidated", "Overconsolidated", "Underconsolidated", "Liquefied"], answer: 1, explain: "OCR > 1 means overconsolidated." }
      ]
    }
  ],
  terms: [
    { term: "Moisture content (w)", def: "Weight of water divided by weight of dry solids, expressed as a percentage." },
    { term: "Void ratio (e)", def: "Volume of voids divided by volume of solids." },
    { term: "Porosity (n)", def: "Volume of voids divided by total volume; n = e/(1+e)." },
    { term: "Degree of saturation (S)", def: "Volume of water divided by volume of voids." },
    { term: "Dry unit weight (γd)", def: "Weight of solids per total volume; γd = γ/(1+w)." },
    { term: "Specific gravity of solids (Gs)", def: "Ratio of solid particle density to water density; typically 2.65–2.75." },
    { term: "Se = wGs", def: "Fundamental phase relationship linking saturation, void ratio, moisture content, and specific gravity." },
    { term: "No. 200 sieve", def: "0.075 mm sieve separating sand from fines (silt and clay)." },
    { term: "No. 4 sieve", def: "4.75 mm sieve separating gravel from sand in the USCS." },
    { term: "D10 / D30 / D60", def: "Particle sizes at which 10%, 30%, 60% of the sample is finer." },
    { term: "Coefficient of uniformity (Cu)", def: "D60/D10; measures range of particle sizes." },
    { term: "Coefficient of curvature (Cc)", def: "(D30)²/(D10·D60); measures shape of gradation curve." },
    { term: "Well-graded", def: "Wide, continuous range of sizes; USCS: gravel Cu ≥ 4, sand Cu ≥ 6, and 1 ≤ Cc ≤ 3." },
    { term: "Liquid limit (LL)", def: "Moisture content at which soil begins to behave as a liquid (25 blows in the Casagrande cup)." },
    { term: "Plastic limit (PL)", def: "Moisture content at which a 1/8-inch thread begins to crumble." },
    { term: "Plasticity index (PI)", def: "LL − PL; range of moisture over which soil is plastic." },
    { term: "Liquidity index (LI)", def: "(w − PL)/PI; near 1 means natural moisture near the liquid limit." },
    { term: "A-line", def: "PI = 0.73(LL − 20) on the plasticity chart; clays plot above, silts below." },
    { term: "USCS", def: "Unified Soil Classification System (ASTM D2487/D2488) using two-letter group symbols." },
    { term: "Dual symbol", def: "USCS classification for coarse soils with 5–12% fines, e.g., SP-SM." },
    { term: "Lean clay / fat clay", def: "CL (LL < 50) / CH (LL ≥ 50) clays above the A-line." },
    { term: "Peat (Pt)", def: "Highly organic soil of vegetable matter; dark, fibrous, very compressible." },
    { term: "Dilatancy test", def: "Visual-manual test: shaking a wet pat; silts show surface water quickly, clays don't." },
    { term: "AASHTO classification", def: "Highway soil classification (M 145), A-1 (best) to A-7 (poorest) subgrade, with group index." },
    { term: "Group index (GI)", def: "AASHTO index refining subgrade rating; higher = poorer." },
    { term: "Frost heave", def: "Ground uplift from ice lens growth; requires frost-susceptible soil, freezing, and water." },
    { term: "Thaw weakening", def: "Loss of strength when ice lenses melt in spring, saturating soil; basis of seasonal road weight limits." },
    { term: "Effective stress (σ')", def: "Total stress minus pore water pressure; controls soil strength and compression." },
    { term: "Pore water pressure (u)", def: "Pressure of water in soil pores; hydrostatic u = γw × depth below water table." },
    { term: "Primary consolidation", def: "Time-dependent compression of saturated clay as excess pore pressure dissipates." },
    { term: "Preconsolidation pressure (σ'p)", def: "Maximum past effective stress experienced by a soil." },
    { term: "OCR", def: "Overconsolidation ratio = σ'p / current σ'v." },
    { term: "Compression index (Cc)", def: "Slope of void ratio vs. log effective stress in the normally consolidated range." },
    { term: "Secondary compression", def: "Creep compression after primary consolidation; important in organic soils." },
    { term: "Mohr-Coulomb criterion", def: "τf = c' + σ' tan φ'." },
    { term: "Friction angle (φ')", def: "Effective-stress strength parameter; ~28–40°+ for sands and gravels." },
    { term: "Undrained shear strength (su)", def: "Short-term strength of saturated clay; su = qu/2 from unconfined compression." }
  ],
  resources: [
    { title: "FHWA — Soils and Foundations Reference Manual (FHWA-NHI-132012)", url: "https://www.fhwa.dot.gov/engineering/geotech/", note: "Free federal geotechnical reference; see publications" },
    { title: "ASTM D2487 — USCS (laboratory)", url: "https://www.astm.org/d2487-17.html", note: "Classification standard" },
    { title: "ASTM D2488 — Visual-manual procedure", url: "https://www.astm.org/", note: "Field description (search D2488)" },
    { title: "ASTM D4318 — Atterberg limits", url: "https://www.astm.org/", note: "LL, PL, PI (search D4318)" },
    { title: "USACE EM 1110-1-1906 — Soil Sampling (and other engineering manuals)", url: "https://www.publications.usace.army.mil/", note: "Free USACE geotechnical manuals" },
    { title: "WisDOT Geotechnical Manual", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/geotechmanual.aspx", note: "Wisconsin practice for highway geotechnical work" }
  ],
  teach: [
    { prompt: "Explain to a new field technician what the USCS symbols SP-SM, CL, and CH mean, how you'd tell CL from ML in the field without a lab, and why it matters for construction.",
      model: "<p>SP-SM is a poorly graded sand with 5–12% silty fines (dual symbol). CL is lean clay — fine-grained (≥50% passing No. 200), LL below 50, plotting above the A-line. CH is fat clay — LL 50 or more, above the A-line, highly plastic. In the field (ASTM D2488), CL has medium to high dry strength, little to no dilatancy, and medium toughness; ML has low dry strength, rapid dilatancy (water appears when shaken and disappears when squeezed), and low toughness, and won't roll into a tough thread. It matters because silts are frost-susceptible, erodible, and hard to compact when wet; clays are compressible and can shrink and swell (especially CH); sands drain and compact well with vibration. Classification drives compaction methods, subgrade decisions, and foundation design.</p>" },
    { prompt: "Using effective stress, explain why dewatering a deep excavation next to an old building on soft clay could damage the building.",
      model: "<p>Effective stress σ' = σ − u. Dewatering lowers the water table, reducing pore pressure u while total stress stays about the same, so effective stress in the soil around and beneath the neighboring building increases. Soft, normally consolidated clay compresses (consolidates) when effective stress increases beyond its preconsolidation pressure, so the ground beneath the old building settles — often unevenly, causing differential settlement and cracking. Mitigation includes cutoff walls, recharge, limiting drawdown, and monitoring.</p>" }
  ],
  exam: {
    count: 20,
    bank: [
      { type: "mc", q: "Moisture content is defined as the weight of water divided by:", options: ["Total weight", "Weight of dry solids", "Volume of voids", "Weight of air"], answer: 1, explain: "w = Ww/Ws." },
      { type: "tf", q: "A soil cannot have a moisture content greater than 100%.", answer: false, explain: "Peats and soft clays can exceed 100% since w is relative to solids." },
      { type: "num", q: "Wet weight 500 g, dry weight 400 g. Moisture content (%)?", answer: 25, tol: 0.1, unit: "%", explain: "100/400 = 25%." },
      { type: "num", q: "Moist unit weight 118.0 pcf at w = 18.0%. Dry unit weight (pcf)? One decimal.", answer: 100, tol: 0.1, unit: "pcf", explain: "118.0 / 1.18 = 100.0 pcf." },
      { type: "num", q: "Void ratio e = 0.60. What is the porosity n? Round to three decimals.", answer: 0.375, tol: 0.001, unit: "", explain: "n = e/(1+e) = 0.6/1.6 = 0.375." },
      { type: "num", q: "w = 20%, Gs = 2.70, S = 90%. Void ratio e? Two decimals.", answer: 0.6, tol: 0.005, unit: "", explain: "e = wGs/S = 0.20 × 2.70/0.90 = 0.60." },
      { type: "num", q: "Gs = 2.65, e = 0.55, γw = 62.4 pcf. Dry unit weight (pcf)? One decimal.", answer: 106.7, tol: 0.15, unit: "pcf", explain: "γd = 2.65 × 62.4 / 1.55 = 106.7 pcf." },
      { type: "mc", q: "The No. 200 sieve opening is:", options: ["4.75 mm", "2.0 mm", "0.425 mm", "0.075 mm"], answer: 3, explain: "0.075 mm." },
      { type: "mc", q: "In the USCS, gravel and sand are separated at the:", options: ["No. 4 sieve", "No. 10 sieve", "No. 40 sieve", "No. 200 sieve"], answer: 0, explain: "No. 4 (4.75 mm). AASHTO uses No. 10." },
      { type: "mc", q: "A sand with Cu = 7 and Cc = 1.5 is:", options: ["Well-graded", "Poorly graded", "Gap-graded", "Uniform"], answer: 0, explain: "Sand: Cu ≥ 6 and 1 ≤ Cc ≤ 3 → well-graded." },
      { type: "mc", q: "A gravel with Cu = 3 is:", options: ["Well-graded", "Poorly graded", "Cannot tell", "Silty"], answer: 1, explain: "Gravels need Cu ≥ 4 to be well-graded." },
      { type: "mc", q: "The plastic limit is determined by:", options: ["Casagrande cup at 25 blows", "Rolling a thread to 1/8 in until it crumbles", "Oven drying", "Hydrometer"], answer: 1, explain: "PL thread test; LL uses the cup." },
      { type: "num", q: "LL = 55, PL = 25. On the plasticity chart, what is the A-line PI at this LL? (PI = 0.73(LL − 20)) Round to one decimal.", answer: 25.6, tol: 0.1, unit: "", explain: "0.73 × 35 = 25.55 ≈ 25.6. Actual PI = 30 > 25.6, so it plots above the A-line → CH." },
      { type: "num", q: "Natural moisture 28%, PL = 18, LL = 38. Liquidity index? Two decimals.", answer: 0.5, tol: 0.005, unit: "", explain: "LI = (28 − 18)/(38 − 18) = 10/20 = 0.50." },
      { type: "mc", q: "A fine-grained soil with LL = 35 and PI = 18, above the A-line, is:", options: ["ML", "CL", "CH", "MH"], answer: 1, explain: "LL < 50, above A-line, PI > 7 → CL." },
      { type: "mc", q: "A fine-grained soil with LL = 30, PI = 2 is:", options: ["CL", "ML", "CH", "CL-ML"], answer: 1, explain: "PI < 4 → ML." },
      { type: "mc", q: "A fine-grained soil with LL = 25, PI = 6, above the A-line is:", options: ["CL", "ML", "CL-ML", "OL"], answer: 2, explain: "PI 4–7 above the A-line → CL-ML." },
      { type: "mc", q: "Coarse soil with 3% fines, mostly sand, Cu = 2.5:", options: ["SW", "SP", "SM", "SP-SM"], answer: 1, explain: "Fines < 5%; Cu < 6 → SP." },
      { type: "mc", q: "Gravel with 20% clayey fines:", options: ["GW", "GP", "GM", "GC"], answer: 3, explain: "Fines > 12% and clayey → GC." },
      { type: "mc", q: "'Fat clay' is the USCS group name for:", options: ["CL", "CH", "MH", "OH"], answer: 1, explain: "CH = fat clay." },
      { type: "mc", q: "In the dilatancy test, a soil that quickly shows water on its surface when shaken is likely:", options: ["Fat clay", "Silt", "Peat", "Gravel"], answer: 1, explain: "Rapid dilatancy indicates silt." },
      { type: "mc", q: "In AASHTO classification, which group is generally the best subgrade?", options: ["A-1", "A-4", "A-6", "A-7"], answer: 0, explain: "A-1 is best; A-7 is poorest (A-8 organic)." },
      { type: "mc", q: "AASHTO A-4 soils are predominantly:", options: ["Clean gravel", "Silty, low plasticity", "Fat clay", "Peat"], answer: 1, explain: "A-4 = silty soils." },
      { type: "multi", q: "Frost heave requires which of the following? Select all that apply.", options: ["Frost-susceptible soil", "Freezing temperatures in the soil", "A water supply", "Bedrock within 5 feet"], answer: [0, 1, 2], explain: "All three are needed; bedrock is irrelevant." },
      { type: "mc", q: "Why do Wisconsin roads have spring weight restrictions?", options: ["Snowplows", "Thaw weakening of saturated subgrade", "Asphalt hardening", "Tourist traffic"], answer: 1, explain: "Melting ice lenses leave weak, saturated soil." },
      { type: "num", q: "Water table at 4 ft. γ = 115 pcf above, γsat = 125 pcf below. Effective stress at 12 ft (psf)? Use γw = 62.4.", answer: 960.8, tol: 1, unit: "psf", explain: "σ = 4(115) + 8(125) = 1,460; u = 8(62.4) = 499.2; σ' = 960.8 ≈ 961 psf." },
      { type: "mc", q: "Lowering the water table by dewatering causes effective stress to:", options: ["Decrease", "Increase", "Stay the same", "Become zero"], answer: 1, explain: "Lower pore pressure → higher effective stress → potential settlement." },
      { type: "mc", q: "Primary consolidation is caused by:", options: ["Air compression", "Dissipation of excess pore water pressure as water drains", "Grain crushing", "Freezing"], answer: 1, explain: "Water drains, effective stress rises, clay compresses." },
      { type: "num", q: "Preconsolidation pressure 4,000 psf; current effective stress 1,000 psf. OCR?", answer: 4, tol: 0, unit: "", explain: "OCR = 4,000/1,000 = 4." },
      { type: "mc", q: "Why are many Wisconsin glacial tills overconsolidated?", options: ["Recent flooding", "They were loaded by thick glacial ice", "Organic content", "Chemical weathering"], answer: 1, explain: "Ice loading exceeded today's overburden." },
      { type: "mc", q: "The time for consolidation scales with:", options: ["The drainage path length", "The square of the drainage path length", "The cube of thickness", "The PI"], answer: 1, explain: "t ∝ H²dr." },
      { type: "mc", q: "Secondary compression is most significant in:", options: ["Clean gravel", "Dense sand", "Organic soils and peat", "Bedrock"], answer: 2, explain: "Creep is large in organic soils." },
      { type: "mc", q: "For clean sand, the Mohr-Coulomb parameters are typically:", options: ["c' high, φ' ≈ 0", "c' ≈ 0, φ' ≈ 30–40°", "c' and φ' both zero", "φ' > 60°"], answer: 1, explain: "Sands are frictional." },
      { type: "mc", q: "Which test directly gives qu for computing su = qu/2?", options: ["Direct shear", "Unconfined compression (D2166)", "Proctor", "Consolidation"], answer: 1, explain: "Unconfined compression." }
    ]
  }
});
