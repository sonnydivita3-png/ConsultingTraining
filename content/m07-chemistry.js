COURSE.addModule({
  id: "m07",
  track: "t2",
  title: "Contaminants and Environmental Chemistry",
  hours: 4,
  summary: "What the common contaminants are, where they come from, and why they behave the way they do in soil, groundwater, and air. This is the chemistry that lets you predict where contamination went before you drill the first boring.",
  objectives: [
    "Identify the major contaminant families, their typical sources, and the Wisconsin terms used for them (e.g., PVOCs, GRO, DRO).",
    "Use solubility, vapor pressure, Henry's law constant, density, and sorption to predict contaminant behavior.",
    "Explain LNAPL and DNAPL behavior and the four phases in which contaminants exist in the subsurface.",
    "Describe aerobic and anaerobic biodegradation, including the reductive dechlorination sequence for chlorinated ethenes.",
    "Explain basic risk concepts: complete exposure pathways, conceptual site models, cancer risk, and hazard quotients."
  ],
  lessons: [
    {
      title: "Contaminant families and their sources",
      html: `
<h3>Petroleum hydrocarbons</h3>
<p><strong>Gasoline</strong> is a mixture of hundreds of light hydrocarbons. Investigations focus on the most toxic and mobile components:</p>
<ul>
<li><strong>BTEX</strong> — benzene, toluene, ethylbenzene, and xylenes. Benzene is a known human carcinogen and usually drives cleanup.</li>
<li><strong>Trimethylbenzenes</strong> (1,2,4-TMB and 1,3,5-TMB) and <strong>naphthalene</strong>.</li>
<li><strong>MTBE</strong> (methyl tert-butyl ether) — a fuel oxygenate used widely until the mid-2000s; very soluble and mobile.</li>
</ul>
<p>In Wisconsin these petroleum compounds are commonly analyzed as <strong>PVOCs</strong> (petroleum volatile organic compounds). Bulk petroleum is measured as <strong>GRO</strong> (gasoline range organics) and <strong>DRO</strong> (diesel range organics), using Wisconsin-specific methods. <strong>Diesel, fuel oil, and heavier products</strong> contain fewer volatile compounds and more <strong>polycyclic aromatic hydrocarbons (PAHs)</strong>.</p>
<h3>Chlorinated solvents (chlorinated VOCs)</h3>
<p>Used for dry cleaning and metal degreasing: <strong>tetrachloroethylene (PCE</strong>, also "perc"), <strong>trichloroethylene (TCE)</strong>, 1,1,1-trichloroethane (TCA), carbon tetrachloride, and methylene chloride. Former dry cleaners and machine shops are classic sources. These compounds are denser than water, toxic at very low concentrations, and persistent.</p>
<h3>PAHs and other SVOCs</h3>
<p>PAHs (e.g., benzo(a)pyrene, naphthalene, phenanthrene) come from incomplete combustion and coal tar: former manufactured gas plants (MGPs), coal storage, creosote-treated wood, asphalt, and — very commonly in urban Wisconsin — <strong>historic fill</strong> containing ash, cinders, and slag. Several PAHs, notably benzo(a)pyrene, are probable carcinogens.</p>
<h3>Metals</h3>
<p>The <strong>RCRA 8 metals</strong> are arsenic, barium, cadmium, chromium, lead, mercury, selenium, and silver. Sources: plating, foundries, batteries, lead paint, pesticides, fill. <strong>Chromium</strong> exists as trivalent Cr(III) (relatively low toxicity, low mobility) and hexavalent Cr(VI) (toxic, carcinogenic, mobile in groundwater) — speciation matters. Arsenic also occurs naturally and was used in historic pesticides (lead arsenate in orchards).</p>
<div class="mnemonic">RCRA 8 metals: "<strong>A B</strong>ig <strong>C</strong>at <strong>Cr</strong>ept <strong>P</strong>ast <strong>H</strong>er <strong>S</strong>ilver <strong>Se</strong>at" — As, Ba, Cd, Cr, Pb, Hg, Ag (silver), Se.</div>
<h3>PCBs and pesticides</h3>
<p><strong>PCBs</strong> (sold as Aroclor mixtures, e.g., Aroclor 1242, 1254, 1260) were used in transformers, capacitors, hydraulic fluids, caulk, and paint. They are persistent and bind tightly to soil and sediment. Legacy <strong>pesticides</strong> (DDT, chlordane, dieldrin, arsenicals) appear on former farms, orchards, and at pesticide mixing areas.</p>
<h3>PFAS</h3>
<p>Per- and polyfluoroalkyl substances are a family of thousands of synthetic compounds with extremely strong carbon–fluorine bonds, making them highly persistent ("forever chemicals"). Sources include aqueous film-forming foam (AFFF) used for firefighting, chrome plating, paper and textile coatings, and some landfills and wastewater residuals. They are analyzed at ng/L (ppt) levels, and regulatory standards are evolving quickly — always check the current DNR and EPA status.</p>
<h3>Building materials</h3>
<p>Asbestos, lead-based paint, PCB-containing caulk and light ballasts, and mercury-containing equipment are evaluated in pre-demolition surveys for redevelopment projects.</p>
`,
      check: [
        { type: "mc", q: "Which compound typically drives cleanup decisions at gasoline release sites because of its carcinogenicity?", options: ["Toluene", "Benzene", "Xylene", "Ethylbenzene"], answer: 1, explain: "Benzene is a known human carcinogen with a low (5 µg/L) groundwater standard." },
        { type: "mc", q: "Which form of chromium is more toxic and more mobile in groundwater?", options: ["Trivalent, Cr(III)", "Hexavalent, Cr(VI)", "Elemental chromium", "They are identical"], answer: 1, explain: "Cr(VI) is carcinogenic and mobile; Cr(III) is far less toxic and tends to precipitate." }
      ]
    },
    {
      title: "Properties that control fate and transport",
      html: `
<p>Five properties let you predict where a contaminant goes:</p>
<div class="tbl-wrap"><table>
<tr><th>Property</th><th>What it tells you</th><th>High value means</th></tr>
<tr><td><strong>Water solubility</strong></td><td>How much dissolves in water</td><td>Forms larger dissolved plumes; travels with groundwater</td></tr>
<tr><td><strong>Vapor pressure</strong></td><td>Tendency of the pure compound to evaporate</td><td>Volatilizes readily; vapor in soil gas</td></tr>
<tr><td><strong>Henry's law constant</strong></td><td>Partitioning between water and air</td><td>Dissolved compound moves readily from groundwater into soil gas — drives vapor intrusion from groundwater</td></tr>
<tr><td><strong>Density</strong> (vs. water, 1.0 g/cm³)</td><td>Whether the pure liquid floats or sinks</td><td>&gt;1 sinks (DNAPL); &lt;1 floats (LNAPL)</td></tr>
<tr><td><strong>Organic carbon partition coefficient (Koc)</strong>, related to the octanol-water coefficient (Kow)</td><td>Tendency to sorb to organic matter in soil</td><td>Sticks to soil; moves slowly; stays near the source</td></tr>
</table></div>
<h3>Comparing common contaminants (approximate)</h3>
<div class="tbl-wrap"><table>
<tr><th>Compound</th><th>Density (g/cm³)</th><th>Water solubility</th><th>Sorption / mobility</th></tr>
<tr><td>Gasoline (mixture)</td><td>~0.7–0.8</td><td>Components vary</td><td>—</td></tr>
<tr><td>Benzene</td><td>0.88</td><td>~1,800 mg/L</td><td>Low sorption, mobile</td></tr>
<tr><td>MTBE</td><td>0.74</td><td>Tens of thousands of mg/L</td><td>Very low sorption, very mobile, biodegrades slowly</td></tr>
<tr><td>PCE</td><td>1.62</td><td>~150–200 mg/L</td><td>Moderate sorption</td></tr>
<tr><td>TCE</td><td>1.46</td><td>~1,100 mg/L</td><td>Low–moderate sorption</td></tr>
<tr><td>Benzo(a)pyrene</td><td>solid</td><td>Very low (µg/L range)</td><td>Strongly sorbed, immobile</td></tr>
<tr><td>PCBs</td><td>&gt;1 (oils)</td><td>Very low</td><td>Strongly sorbed</td></tr>
</table></div>
<p>So: MTBE plumes outrun benzene plumes; PAHs and PCBs mostly stay in the soil where they were spilled; PCE sinks as a separate liquid.</p>
<h3>Sorption and retardation</h3>
<p>Sorbing compounds move slower than groundwater. The <strong>retardation factor</strong> expresses how much slower:</p>
<span class="formula">Kd = Koc × foc        (distribution coefficient; foc = fraction organic carbon)
R  = 1 + (ρb / n) × Kd   (ρb = dry bulk density, n = porosity)
Contaminant velocity = groundwater seepage velocity / R</span>
<p>Clean outwash sand has very low organic carbon (low foc), so even moderately sorbing compounds travel relatively fast in it. Organic-rich soils (peat) sorb strongly.</p>
<div class="callout"><strong>The 1% rule of thumb</strong>Dissolved concentrations greater than about 1% of a compound's solubility suggest that non-aqueous phase liquid (NAPL) may be present nearby. For TCE (solubility ~1,100 mg/L), groundwater above roughly 11 mg/L (11,000 µg/L) is a DNAPL warning sign.</div>
`,
      check: [
        { type: "mc", q: "Which property most directly tells you whether a pure liquid contaminant will float or sink in groundwater?", options: ["Vapor pressure", "Density", "Koc", "Henry's law constant"], answer: 1, explain: "Density relative to water (1.0) determines LNAPL vs DNAPL behavior." },
        { type: "num", q: "Groundwater seepage velocity is 0.6 ft/day and a compound's retardation factor is 3. What is the contaminant's velocity in ft/day?", answer: 0.2, tol: 0.001, unit: "ft/day", explain: "0.6 / 3 = 0.2 ft/day." }
      ]
    },
    {
      title: "NAPLs and the four phases",
      html: `
<p>A <strong>non-aqueous phase liquid (NAPL)</strong> is a liquid that does not mix readily with water — gasoline, diesel, solvents, coal tar. Once released, a contaminant can exist in four phases:</p>
<ol>
<li><strong>NAPL phase</strong> — either <em>mobile/free</em> (can flow and accumulate in wells) or <em>residual</em> (trapped as blobs and films in pores, not mobile but a long-term source).</li>
<li><strong>Dissolved phase</strong> — in groundwater (forms the plume).</li>
<li><strong>Sorbed phase</strong> — attached to soil particles and organic matter.</li>
<li><strong>Vapor phase</strong> — in soil gas in the vadose zone.</li>
</ol>
<p>The NAPL and sorbed mass near the release is the <strong>source zone</strong>; it feeds the dissolved <strong>plume</strong> and the vapor plume for years or decades. Removing or treating the source is usually the key to closure.</p>
<h3>LNAPL (light NAPL) — e.g., gasoline, diesel</h3>
<ul>
<li>Migrates down through the vadose zone, leaving residual behind, and spreads laterally on top of the water table and capillary fringe.</li>
<li>As the water table rises and falls seasonally, LNAPL is smeared vertically, creating a <strong>smear zone</strong> of residual contamination.</li>
<li>The thickness of LNAPL measured in a monitoring well (<strong>apparent thickness</strong>) typically exaggerates the true thickness in the formation.</li>
<li>Free product must be recovered "to the extent practicable" — a recurring Wisconsin regulatory requirement.</li>
</ul>
<h3>DNAPL (dense NAPL) — e.g., PCE, TCE, coal tar, PCB oils</h3>
<ul>
<li>Sinks through the water table and continues downward until it hits a low-permeability layer, where it forms <strong>pools</strong>; it leaves residual "ganglia" along its path.</li>
<li>Can follow fractures in clayey till and dolomite to great depths, and can flow down the slope of a clay layer — even <em>against</em> the direction of groundwater flow.</li>
<li>Very hard to locate and remove; source zones persist for decades.</li>
<li>Drilling through a DNAPL pool without care can create a pathway that drags contamination deeper — a reason to plan deep borings carefully.</li>
</ul>
<div class="mnemonic"><strong>L</strong>NAPL = <strong>L</strong>ight, <strong>L</strong>ies on top. <strong>D</strong>NAPL = <strong>D</strong>ense, <strong>D</strong>ives <strong>D</strong>own.</div>
`,
      check: [
        { type: "multi", q: "In which phases can a contaminant exist in the subsurface? Select all that apply.", options: ["NAPL", "Dissolved", "Sorbed", "Vapor"], answer: [0, 1, 2, 3], explain: "All four phases occur and partition among each other." },
        { type: "tf", q: "DNAPL always moves in the direction of groundwater flow.", answer: false, explain: "DNAPL movement is controlled largely by gravity and the shape of low-permeability layers, so it can move against groundwater flow." }
      ]
    },
    {
      title: "Biodegradation and natural attenuation",
      html: `
<h3>Petroleum biodegrades</h3>
<p>Microorganisms use petroleum hydrocarbons as food (an <strong>electron donor</strong>) and need an <strong>electron acceptor</strong>. They use acceptors in order of energy yield:</p>
<ol>
<li>Oxygen (aerobic respiration — fastest)</li>
<li>Nitrate</li>
<li>Manganese(IV)</li>
<li>Iron(III)</li>
<li>Sulfate</li>
<li>Carbon dioxide (methanogenesis)</li>
</ol>
<p>In the core of a petroleum plume, oxygen is consumed, so you see <strong>geochemical indicators</strong>: low dissolved oxygen, low nitrate and sulfate, elevated dissolved ferrous iron (Fe²⁺) and manganese, and methane. These are evidence that biodegradation is happening — useful for documenting natural attenuation. Benzene biodegrades readily under aerobic conditions; this is why petroleum vapor intrusion is less common than chlorinated solvent vapor intrusion (oxygen in the vadose zone breaks down petroleum vapors before they reach buildings, if there is enough clean soil between the source and the building).</p>
<h3>Chlorinated ethenes: reductive dechlorination</h3>
<p>PCE and TCE do not readily biodegrade aerobically. Under strongly <strong>anaerobic</strong> (reducing) conditions with an electron donor (natural organic carbon or petroleum, or an added substrate such as emulsified vegetable oil), bacteria replace chlorine atoms with hydrogen one at a time:</p>
<span class="formula">PCE → TCE → cis-1,2-DCE → vinyl chloride (VC) → ethene → (ethane)</span>
<p>Complete dechlorination to ethene requires specific bacteria — notably <em>Dehalococcoides mccartyi</em>. If conditions or organisms are lacking, degradation can <strong>"stall" at cis-DCE or vinyl chloride</strong>. Vinyl chloride is more toxic (a known human carcinogen) and has the lowest groundwater standard (0.2 µg/L in Wisconsin), so partial degradation can make risk worse before it gets better.</p>
<p>The presence of daughter products (cis-DCE, VC) in a PCE plume tells you that dechlorination is occurring. Note that <strong>cis</strong>-1,2-DCE is the predominant biological product; a high proportion of trans-1,2-DCE or 1,1-DCE suggests a different source or process.</p>
<h3>Natural attenuation</h3>
<p><strong>Natural attenuation</strong> is the reduction of contaminant concentration, mass, toxicity, or mobility by natural processes: biodegradation, dispersion, dilution, sorption, volatilization, and abiotic reactions. <strong>Monitored natural attenuation (MNA)</strong> is a remedy that relies on these processes with monitoring to show the plume is stable or shrinking. Only biodegradation and other destructive processes actually reduce mass; dilution and dispersion only spread it out.</p>
<div class="mnemonic">Electron acceptor order: "<strong>O</strong>ld <strong>N</strong>ick <strong>M</strong>ade <strong>I</strong>ron <strong>S</strong>teel <strong>C</strong>ans" — Oxygen, Nitrate, Manganese, Iron, Sulfate, CO₂.</div>
`,
      check: [
        { type: "mc", q: "What is the correct reductive dechlorination sequence?", options: ["TCE → PCE → VC → DCE", "PCE → TCE → cis-1,2-DCE → VC → ethene", "VC → DCE → TCE → PCE", "PCE → VC → TCE → ethene"], answer: 1, explain: "One chlorine is removed at each step: PCE (4 Cl), TCE (3), DCE (2), VC (1), ethene (0)." },
        { type: "mc", q: "Elevated dissolved ferrous iron and methane inside a petroleum plume indicate:", options: ["The lab made an error", "Anaerobic biodegradation is occurring", "The plume is aerobic", "DNAPL is present"], answer: 1, explain: "After oxygen is depleted, microbes use iron(III), sulfate, and CO2, producing Fe²⁺ and methane." }
      ]
    },
    {
      title: "Exposure pathways, conceptual site models, and risk",
      html: `
<h3>Complete exposure pathways</h3>
<p>Contamination only poses risk if someone is exposed. An exposure pathway is <strong>complete</strong> only when all five elements are present:</p>
<ol>
<li>A <strong>source</strong> of contamination (and release mechanism)</li>
<li>A <strong>transport medium</strong> (soil, groundwater, air, surface water)</li>
<li>An <strong>exposure point</strong> (a well, a basement, a playground)</li>
<li>An <strong>exposure route</strong> (ingestion, inhalation, dermal contact)</li>
<li>A <strong>receptor</strong> (a person or ecological receptor)</li>
</ol>
<p>Breaking any link — capping soil, providing municipal water, installing a vapor mitigation system — eliminates the risk from that pathway. Much of modern site management is pathway management.</p>
<h3>The conceptual site model (CSM)</h3>
<p>A <strong>CSM</strong> is a written and graphical summary of what you know and believe about a site: sources, geology and hydrogeology, contaminant distribution, migration pathways, and receptors. It is built early, tested by every round of data, and revised. A good CSM drives where you put the next boring; a weak one leads to drilling holes randomly. Regulators expect a CSM in site investigation reports.</p>
<h3>Toxicity basics</h3>
<ul>
<li><strong>Carcinogens</strong> are evaluated with a <strong>cancer slope factor</strong> (or inhalation unit risk). Risk is expressed as an <strong>excess lifetime cancer risk</strong> — e.g., 1 × 10⁻⁶ means one additional cancer in a million exposed people. Under the federal NCP, EPA's generally acceptable range for remedial decisions is 10⁻⁶ to 10⁻⁴. Wisconsin's NR 720 uses 10⁻⁶ per compound and 10⁻⁵ cumulative for soil.</li>
<li><strong>Non-carcinogens</strong> are evaluated with a <strong>reference dose (RfD)</strong> or reference concentration (RfC). The <strong>hazard quotient (HQ)</strong> = exposure dose ÷ RfD. An HQ ≤ 1 is generally considered unlikely to cause adverse effects. The sum of HQs is the <strong>hazard index (HI)</strong>.</li>
<li>Toxicity values come from sources such as EPA's <strong>Integrated Risk Information System (IRIS)</strong>, and EPA's <strong>Regional Screening Levels (RSLs)</strong> combine toxicity with standard exposure assumptions into screening concentrations.</li>
</ul>
<h3>Acute vs. chronic</h3>
<p>Most standards protect against chronic (long-term) exposure. Some contaminants have short-term effects that matter: TCE has been associated with fetal heart malformations in some studies, so regulators — including the Wisconsin DNR — may require rapid response when indoor air TCE exceeds short-term action levels in places where women of childbearing age may be exposed.</p>
`,
      check: [
        { type: "mc", q: "A site has contaminated groundwater, but all nearby properties use municipal water from Lake Michigan and there are no buildings over the plume. Which pathway is likely incomplete?", options: ["Groundwater ingestion via wells", "Soil direct contact", "Surface water", "None"], answer: 0, explain: "Without a well (exposure point), the groundwater ingestion pathway is incomplete — though it may need to be protected with a continuing obligation." },
        { type: "num", q: "Exposure dose = 0.003 mg/kg-day and RfD = 0.006 mg/kg-day. What is the hazard quotient?", answer: 0.5, tol: 0.001, unit: "", explain: "HQ = 0.003 / 0.006 = 0.5." }
      ]
    }
  ],
  terms: [
    { term: "BTEX", def: "Benzene, toluene, ethylbenzene, and xylenes: key gasoline constituents." },
    { term: "PVOCs", def: "Petroleum volatile organic compounds: Wisconsin's term for the petroleum VOC analyte list (BTEX, MTBE, trimethylbenzenes, naphthalene)." },
    { term: "GRO / DRO", def: "Gasoline range organics / diesel range organics: bulk petroleum measurements using Wisconsin methods." },
    { term: "MTBE", def: "Methyl tert-butyl ether: fuel oxygenate that is very soluble, poorly sorbed, and highly mobile in groundwater." },
    { term: "Chlorinated solvents", def: "Halogenated VOCs such as PCE, TCE, and TCA used in dry cleaning and degreasing; dense and persistent." },
    { term: "PAHs", def: "Polycyclic aromatic hydrocarbons from combustion and coal tar; strongly sorbed; several are carcinogenic (e.g., benzo(a)pyrene)." },
    { term: "Historic fill", def: "Urban fill containing ash, cinders, slag, brick, and debris; commonly contains PAHs and metals." },
    { term: "RCRA 8 metals", def: "Arsenic, barium, cadmium, chromium, lead, mercury, selenium, and silver." },
    { term: "Hexavalent chromium", def: "Cr(VI): toxic, carcinogenic, and mobile form of chromium; Cr(III) is far less toxic." },
    { term: "Aroclor", def: "Trade name for commercial PCB mixtures (e.g., Aroclor 1254, 1260)." },
    { term: "PFAS", def: "Per- and polyfluoroalkyl substances: highly persistent synthetic compounds from AFFF, plating, coatings; analyzed at ng/L." },
    { term: "Solubility", def: "Maximum concentration of a compound that dissolves in water." },
    { term: "Vapor pressure", def: "Tendency of a pure compound to evaporate." },
    { term: "Henry's law constant", def: "Ratio describing partitioning between water and air; high values favor volatilization from groundwater." },
    { term: "Koc", def: "Organic carbon partition coefficient: tendency of a compound to sorb to soil organic carbon." },
    { term: "Retardation factor (R)", def: "Ratio of groundwater velocity to contaminant velocity; R = 1 + (ρb/n)·Kd." },
    { term: "1% rule", def: "Dissolved concentrations above ~1% of solubility suggest nearby NAPL." },
    { term: "NAPL", def: "Non-aqueous phase liquid: a liquid that does not mix readily with water." },
    { term: "LNAPL", def: "Light NAPL (density < water), e.g., gasoline; floats on the water table." },
    { term: "DNAPL", def: "Dense NAPL (density > water), e.g., PCE, TCE, coal tar; sinks and pools on low-permeability layers." },
    { term: "Residual NAPL", def: "Immobile NAPL trapped in pores as blobs and films; a long-term source." },
    { term: "Smear zone", def: "Vertical interval of residual LNAPL created as the water table fluctuates." },
    { term: "Apparent thickness", def: "LNAPL thickness measured in a well, typically greater than the true formation thickness." },
    { term: "Source zone", def: "Area of NAPL and highly sorbed mass that feeds dissolved and vapor plumes." },
    { term: "Electron acceptor", def: "Compound microbes use to respire: O₂, nitrate, Mn(IV), Fe(III), sulfate, CO₂ in order of preference." },
    { term: "Reductive dechlorination", def: "Anaerobic biodegradation removing chlorine atoms: PCE → TCE → cis-DCE → VC → ethene." },
    { term: "Dehalococcoides mccartyi", def: "Bacteria capable of complete dechlorination of chlorinated ethenes to ethene." },
    { term: "DCE/VC stall", def: "Incomplete dechlorination that accumulates cis-DCE or vinyl chloride." },
    { term: "Natural attenuation", def: "Natural reduction of contaminant concentration, mass, toxicity, or mobility by biodegradation, dispersion, sorption, etc." },
    { term: "MNA", def: "Monitored natural attenuation: remedy relying on natural processes with monitoring to demonstrate effectiveness." },
    { term: "Complete exposure pathway", def: "Source, transport medium, exposure point, exposure route, and receptor all present." },
    { term: "Conceptual site model (CSM)", def: "Written and graphical summary of sources, pathways, and receptors; updated as data are collected." },
    { term: "Excess lifetime cancer risk", def: "Probability of additional cancer from exposure, e.g., 1×10⁻⁶ = one in a million." },
    { term: "Hazard quotient (HQ)", def: "Exposure dose divided by reference dose for a non-carcinogen; HQ ≤ 1 is generally acceptable. Sum = hazard index." },
    { term: "Reference dose (RfD)", def: "Estimated daily exposure likely without appreciable risk of harmful non-cancer effects over a lifetime." },
    { term: "IRIS", def: "EPA's Integrated Risk Information System: a source of toxicity values." }
  ],
  resources: [
    { title: "EPA — Regional Screening Levels (RSLs)", url: "https://www.epa.gov/risk/regional-screening-levels-rsls", note: "Screening values and chemical properties" },
    { title: "EPA — Integrated Risk Information System (IRIS)", url: "https://www.epa.gov/iris", note: "Toxicity values" },
    { title: "ATSDR — Toxicological Profiles and ToxFAQs", url: "https://www.atsdr.cdc.gov/", note: "Plain-language contaminant fact sheets" },
    { title: "ITRC — Interstate Technology & Regulatory Council", url: "https://itrcweb.org/", note: "Technical guidance on LNAPL, DNAPL, PFAS, vapor intrusion, bioremediation" },
    { title: "EPA — PFAS", url: "https://www.epa.gov/pfas", note: "Current federal PFAS actions" },
    { title: "Wisconsin DNR — PFAS", url: "https://dnr.wisconsin.gov/topic/PFAS", note: "Wisconsin PFAS standards and initiatives" },
    { title: "The Groundwater Project — free books on contaminant hydrogeology", url: "https://gw-project.org/", note: "DNAPL, sorption, and biodegradation texts" }
  ],
  teach: [
    { prompt: "A former dry cleaner (PCE) and a former gas station (gasoline) sit side by side on sandy outwash over clayey till. Predict how each contaminant is distributed in the subsurface and explain why, using density, solubility, sorption, and biodegradation.",
      model: "<p>Gasoline is an LNAPL (density ~0.75), so it moves down through the sand to the water table, spreads on top of it, and forms a smear zone as the water table fluctuates. Benzene and MTBE dissolve into groundwater; MTBE (very soluble, barely sorbed) travels farthest, while benzene is mobile but biodegrades aerobically, limiting plume length, with geochemical indicators of anaerobic degradation in the plume core. PCE is a DNAPL (density 1.62), so it sinks through the sand and the water table and pools on top of the clayey till, possibly following fractures into it or flowing down the till surface. It dissolves slowly (~150–200 mg/L solubility) and creates a long-lived plume; it biodegrades only under anaerobic conditions — which the adjacent petroleum plume may provide as an electron donor — producing TCE, cis-DCE, and vinyl chloride. Vapor intrusion is a bigger concern for PCE because petroleum vapors biodegrade in aerobic soil.</p>" },
    { prompt: "Explain what a complete exposure pathway is and give two examples of how a pathway can be cut at a brownfield redevelopment site.",
      model: "<p>A pathway is complete when there is a source, a transport medium, an exposure point, an exposure route, and a receptor. If any element is missing, there is no exposure through that pathway. Examples at a brownfield: (1) a cap of pavement, a building slab, or clean soil cover breaks the direct contact pathway to residual contaminated soil; (2) a sub-slab depressurization system breaks the vapor intrusion pathway into a new building; (3) municipal water service plus a well restriction breaks the groundwater ingestion pathway. These controls are typically maintained as DNR continuing obligations.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Which of these is a fuel oxygenate known for very high mobility in groundwater?", options: ["Naphthalene", "MTBE", "Benzo(a)pyrene", "Xylene"], answer: 1, explain: "MTBE is highly soluble and poorly sorbed." },
      { type: "mc", q: "In Wisconsin, the petroleum VOC analyte list is commonly referred to as:", options: ["PVOCs", "SVOCs", "PAHs", "TPH-G"], answer: 0, explain: "PVOCs — petroleum volatile organic compounds." },
      { type: "mc", q: "Former manufactured gas plants are most associated with which contaminants?", options: ["PFAS", "PAHs and coal tar", "MTBE", "Asbestos only"], answer: 1, explain: "MGP sites produce coal tar rich in PAHs." },
      { type: "multi", q: "Which are RCRA 8 metals? Select all that apply.", options: ["Arsenic", "Copper", "Mercury", "Selenium", "Zinc"], answer: [0, 2, 3], explain: "RCRA 8: As, Ba, Cd, Cr, Pb, Hg, Se, Ag. Copper and zinc are not." },
      { type: "mc", q: "PFAS are especially persistent because of their:", options: ["Carbon–fluorine bonds", "High vapor pressure", "Metal content", "Low molecular weight"], answer: 0, explain: "The C–F bond is one of the strongest in organic chemistry." },
      { type: "mc", q: "Aqueous film-forming foam (AFFF) is a common source of:", options: ["PCBs", "PFAS", "Chlorinated solvents", "Lead"], answer: 1, explain: "AFFF used in firefighting contains PFAS." },
      { type: "mc", q: "Which compound is a DNAPL?", options: ["Benzene", "Gasoline", "PCE", "MTBE"], answer: 2, explain: "PCE density is 1.62 g/cm³." },
      { type: "mc", q: "A high Henry's law constant means a compound:", options: ["Sorbs strongly to soil", "Partitions readily from water into air", "Sinks in water", "Is insoluble"], answer: 1, explain: "Henry's constant describes air–water partitioning." },
      { type: "mc", q: "High Koc means a compound:", options: ["Moves quickly with groundwater", "Sorbs strongly and moves slowly", "Is a gas", "Is very soluble"], answer: 1, explain: "High organic carbon partitioning means strong sorption." },
      { type: "mc", q: "Which compound would you expect to stay closest to where it was spilled?", options: ["MTBE", "Benzene", "Benzo(a)pyrene", "TCE"], answer: 2, explain: "Benzo(a)pyrene is very insoluble and strongly sorbed." },
      { type: "num", q: "Kd = 0.5 L/kg, dry bulk density ρb = 1.6 kg/L, porosity n = 0.32. What is the retardation factor R?", answer: 3.5, tol: 0.01, unit: "", explain: "R = 1 + (1.6/0.32)(0.5) = 1 + 2.5 = 3.5." },
      { type: "num", q: "Using the 1% rule with PCE solubility of 200 mg/L, above what dissolved concentration (µg/L) would you suspect nearby DNAPL?", answer: 2000, tol: 1, unit: "µg/L", explain: "1% of 200 mg/L = 2 mg/L = 2,000 µg/L." },
      { type: "mc", q: "Residual NAPL is:", options: ["Free product that flows into wells", "NAPL trapped in pores that does not flow", "Dissolved contamination", "NAPL in soil gas"], answer: 1, explain: "Residual NAPL is immobile but acts as a long-term source." },
      { type: "mc", q: "The smear zone is created by:", options: ["Drilling", "Water table fluctuations moving LNAPL vertically", "DNAPL pooling", "Rainfall infiltration only"], answer: 1, explain: "Rising and falling water tables smear LNAPL through a vertical interval." },
      { type: "tf", q: "LNAPL thickness measured in a monitoring well usually overstates the true thickness in the formation.", answer: true, explain: "Apparent thickness in wells generally exceeds formation thickness." },
      { type: "mc", q: "Where does DNAPL tend to accumulate as pools?", options: ["On top of the water table", "On low-permeability layers", "In the capillary fringe only", "At the ground surface"], answer: 1, explain: "DNAPL sinks until stopped by low-permeability layers." },
      { type: "mc", q: "Which electron acceptor is used first by microbes degrading petroleum?", options: ["Sulfate", "Nitrate", "Oxygen", "Iron(III)"], answer: 2, explain: "Oxygen yields the most energy and is used first." },
      { type: "mc", q: "Methane in a petroleum plume indicates:", options: ["Aerobic conditions", "Methanogenesis — strongly anaerobic biodegradation", "Contamination by natural gas only", "Sampling error"], answer: 1, explain: "Methanogenesis occurs after other acceptors are depleted." },
      { type: "mc", q: "Which daughter product of PCE is a known human carcinogen with Wisconsin's lowest chlorinated ethene groundwater standard?", options: ["TCE", "cis-1,2-DCE", "Vinyl chloride", "Ethene"], answer: 2, explain: "Vinyl chloride ES = 0.2 µg/L." },
      { type: "mc", q: "Reductive dechlorination of PCE requires:", options: ["Aerobic conditions", "Anaerobic conditions and an electron donor", "High pH only", "Sunlight"], answer: 1, explain: "It is an anaerobic process requiring an electron donor such as organic carbon." },
      { type: "mc", q: "Detecting cis-1,2-DCE and vinyl chloride in a PCE plume indicates:", options: ["A separate DCE spill only", "Reductive dechlorination is occurring", "Aerobic degradation", "Lab contamination"], answer: 1, explain: "Daughter products show dechlorination." },
      { type: "mc", q: "Why is petroleum vapor intrusion less common than chlorinated solvent vapor intrusion?", options: ["Petroleum is not volatile", "Petroleum vapors biodegrade aerobically in the vadose zone", "Buildings filter petroleum", "Petroleum is denser"], answer: 1, explain: "Aerobic biodegradation in clean vadose-zone soil attenuates petroleum vapors." },
      { type: "multi", q: "Which processes actually destroy contaminant mass? Select all that apply.", options: ["Biodegradation", "Dilution", "Abiotic chemical degradation", "Dispersion"], answer: [0, 2], explain: "Dilution and dispersion only spread mass out." },
      { type: "mc", q: "Which is NOT one of the five elements of a complete exposure pathway?", options: ["Source", "Exposure point", "Receptor", "Regulatory standard"], answer: 3, explain: "Standards are not part of the pathway; source, medium, exposure point, route, receptor are." },
      { type: "mc", q: "A conceptual site model should be:", options: ["Prepared only at closure", "Built early and revised as data are collected", "A single map", "Prepared only by the DNR"], answer: 1, explain: "CSMs are living tools." },
      { type: "mc", q: "An excess lifetime cancer risk of 1 × 10⁻⁵ means:", options: ["One in 10,000", "One in 100,000", "One in 1,000,000", "Ten in a million per year"], answer: 1, explain: "10⁻⁵ = 1 in 100,000." },
      { type: "mc", q: "EPA's generally acceptable cancer risk range for remedial decisions under the NCP is:", options: ["10⁻² to 10⁻³", "10⁻⁴ to 10⁻⁶", "10⁻⁷ to 10⁻⁹", "Zero only"], answer: 1, explain: "10⁻⁴ to 10⁻⁶." },
      { type: "num", q: "Three non-carcinogens have hazard quotients of 0.3, 0.4, and 0.5. What is the hazard index?", answer: 1.2, tol: 0.001, unit: "", explain: "HI = sum of HQs = 1.2, which exceeds 1." },
      { type: "mc", q: "Why might regulators require urgent action for TCE in indoor air?", options: ["It is flammable", "Short-term exposure has been associated with developmental (fetal heart) effects", "It smells bad", "It is a DNAPL"], answer: 1, explain: "TCE's potential developmental effects drive short-term action levels." }
    ]
  }
});
