COURSE.addModule({
  id: "m10",
  track: "t2",
  title: "Remediation, Waste Management, and Case Closure",
  hours: 5,
  summary: "How contaminated sites are cleaned up and closed: remedy selection, soil and groundwater technologies, managing excavated soil and water, vapor mitigation, and the path to a DNR closure letter.",
  objectives: [
    "Describe how remedies are evaluated under NR 722 and the federal NCP criteria.",
    "Explain common soil remedies — excavation, SVE, thermal, stabilization, capping — and when each fits.",
    "Explain common groundwater remedies — pump and treat, air sparging, ISCO, bioremediation, PRBs, MNA, and free product recovery.",
    "Manage excavated soil, investigation-derived waste, and dewatering water in compliance with Wisconsin rules.",
    "Describe vapor mitigation systems and the NR 726 closure process, including continuing obligations."
  ],
  lessons: [
    {
      title: "Selecting a remedy",
      html: `
<p>After the site investigation defines the problem, the consultant evaluates <strong>remedial action options</strong> and recommends one. In Wisconsin this follows <strong>NR 722</strong>, typically documented in a remedial action options report. The rule requires evaluating options for factors including technical and economic feasibility, long-term and short-term effectiveness, implementability, and the restoration time frame, and it calls for consideration of <strong>green and sustainable remediation</strong> practices (reducing energy use, emissions, and waste).</p>
<h3>The federal model: NCP nine criteria</h3>
<p>Superfund remedies are evaluated against nine criteria in three groups — a framework many consultants use generally:</p>
<div class="tbl-wrap"><table>
<tr><th>Group</th><th>Criteria</th></tr>
<tr><td><strong>Threshold</strong> (must be met)</td><td>1. Overall protection of human health and the environment; 2. Compliance with ARARs (applicable or relevant and appropriate requirements)</td></tr>
<tr><td><strong>Balancing</strong></td><td>3. Long-term effectiveness and permanence; 4. Reduction of toxicity, mobility, or volume through treatment; 5. Short-term effectiveness; 6. Implementability; 7. Cost</td></tr>
<tr><td><strong>Modifying</strong></td><td>8. State acceptance; 9. Community acceptance</td></tr>
</table></div>
<h3>Remedy building blocks</h3>
<ul>
<li><strong>Source removal or treatment</strong> — reduces mass and the duration of everything else.</li>
<li><strong>Active treatment</strong> of dissolved plumes or vapors.</li>
<li><strong>Containment</strong> — caps, barriers, hydraulic control.</li>
<li><strong>Engineering controls</strong> (physical: caps, vapor mitigation systems) and <strong>institutional controls</strong> (legal/administrative: land use restrictions, groundwater use restrictions, continuing obligations).</li>
<li><strong>Monitoring</strong> — to show the remedy is working.</li>
</ul>
<p>Most real remedies combine these — for example, excavation of a source area, a cap over residual fill, a vapor mitigation system in the new building, and monitored natural attenuation of the remaining groundwater plume.</p>
<div class="mnemonic">Threshold criteria are the "<strong>two P's</strong>": <strong>P</strong>rotective and <strong>P</strong>ermissible (meets ARARs). If a remedy fails either, cost doesn't matter.</div>
`,
      check: [
        { type: "multi", q: "Which are NCP threshold criteria? Select all that apply.", options: ["Overall protection of human health and the environment", "Compliance with ARARs", "Cost", "Community acceptance"], answer: [0, 1], explain: "Cost is a balancing criterion; community acceptance is modifying." },
        { type: "mc", q: "A recorded groundwater use restriction is an example of a(n):", options: ["Engineering control", "Institutional control", "Active treatment", "Source removal"], answer: 1, explain: "Legal or administrative restrictions are institutional controls." }
      ]
    },
    {
      title: "Soil remedies",
      html: `
<h3>Excavation and off-site disposal ("dig and haul")</h3>
<p>The most common remedy on brownfield redevelopment sites, because the developer is often excavating anyway. Key elements:</p>
<ul>
<li><strong>Field screening</strong> (PID, visual, odor) to segregate contaminated from clean soil during excavation.</li>
<li><strong>Confirmation sampling</strong> of the excavation sidewalls and base to document what remains.</li>
<li><strong>Waste characterization</strong> and landfill approval before hauling (see Lesson 4).</li>
<li>Documentation: quantities, weight tickets, photos, and figures of excavation limits.</li>
</ul>
<p>Pros: fast, certain, removes mass. Cons: cost of transport and disposal, truck traffic and emissions, impractical at depth or beneath buildings.</p>
<h3>Soil vapor extraction (SVE)</h3>
<p>A blower applies vacuum to wells in the <strong>vadose zone</strong>, pulling soil gas and volatilizing VOCs. Extracted vapor may need treatment (e.g., granular activated carbon or thermal oxidation) depending on emission rates and air permit requirements. Works best for <strong>volatile compounds in permeable soils</strong> (sand). Poor performance in clay or for low-volatility compounds. <strong>Bioventing</strong> uses low airflow to supply oxygen for biodegradation rather than volatilization.</p>
<h3>Thermal treatment</h3>
<p>Electrical resistance heating (ERH), thermal conduction heating (TCH), and steam injection raise subsurface temperatures to volatilize and recover contaminants. Effective for DNAPL source zones and clays, but energy-intensive and expensive.</p>
<h3>Stabilization / solidification (S/S)</h3>
<p>Mixing reagents (Portland cement, other binders) into soil to bind contaminants — particularly <strong>metals</strong> — and reduce leachability. Can make lead-contaminated soil pass TCLP before disposal or allow it to stay on site.</p>
<h3>Capping and covers</h3>
<p>A <strong>cap</strong> (asphalt, concrete, building slab, or a clean soil cover — often with a geotextile marker layer) breaks the direct contact pathway and reduces infiltration through contaminated soil. Caps are among the most common closure tools on Wisconsin brownfields, maintained as <strong>continuing obligations</strong> with an inspection and maintenance plan. The design thickness and materials must be approved as part of closure.</p>
<h3>Choosing among them</h3>
<div class="tbl-wrap"><table>
<tr><th>Condition</th><th>Strong candidates</th></tr>
<tr><td>Shallow petroleum source, site being redeveloped</td><td>Excavation and disposal</td></tr>
<tr><td>VOCs in sandy vadose zone beneath an occupied building</td><td>SVE</td></tr>
<tr><td>PAH and metals fill across a large site</td><td>Cap/cover with continuing obligations; targeted excavation of hot spots</td></tr>
<tr><td>Lead hot spot failing TCLP</td><td>Stabilization before disposal, or excavation as hazardous waste</td></tr>
<tr><td>Chlorinated DNAPL in clay</td><td>Thermal, or excavation if shallow</td></tr>
</table></div>
`,
      check: [
        { type: "mc", q: "SVE works best for:", options: ["Metals in clay", "Volatile compounds in permeable vadose-zone soils", "PCBs in sediment", "DNAPL below the water table"], answer: 1, explain: "SVE needs volatility and airflow." },
        { type: "mc", q: "Which remedy is most often used to reduce leachability of metals like lead?", options: ["SVE", "Air sparging", "Stabilization/solidification", "Bioventing"], answer: 2, explain: "S/S binds metals and reduces leachability." }
      ]
    },
    {
      title: "Groundwater remedies",
      html: `
<div class="tbl-wrap"><table>
<tr><th>Technology</th><th>How it works</th><th>Best for</th><th>Watch-outs</th></tr>
<tr><td><strong>Free product recovery</strong></td><td>Skimming, bailing, or vacuum-enhanced extraction of LNAPL from wells</td><td>Mobile LNAPL (required "to the extent practicable")</td><td>Residual LNAPL remains; recovery rates decline</td></tr>
<tr><td><strong>Pump and treat</strong></td><td>Extract groundwater; treat above ground (air stripping, granular activated carbon); discharge under permit</td><td>Hydraulic containment of plumes</td><td>Slow restoration — sorbed and NAPL mass keep feeding the plume; long O&amp;M</td></tr>
<tr><td><strong>Air sparging (AS)</strong></td><td>Inject air below the water table; strips VOCs into the vadose zone and adds oxygen</td><td>Petroleum and VOCs in permeable aquifers; usually paired with SVE</td><td>Channeling in heterogeneous soils; can push vapors toward buildings without SVE</td></tr>
<tr><td><strong>In situ chemical oxidation (ISCO)</strong></td><td>Inject oxidants — permanganate, activated persulfate, catalyzed hydrogen peroxide (Fenton's), ozone — to destroy contaminants</td><td>Source zones of chlorinated ethenes and petroleum</td><td>Natural oxidant demand of soil; delivery in low-K soils; <strong>rebound</strong> after treatment; injection permits</td></tr>
<tr><td><strong>Enhanced anaerobic bioremediation</strong> (enhanced reductive dechlorination)</td><td>Inject an electron donor (e.g., emulsified vegetable oil, lactate); optionally bioaugment with <em>Dehalococcoides</em> cultures</td><td>Chlorinated ethenes (PCE, TCE)</td><td>Must push through to ethene to avoid vinyl chloride accumulation; secondary water quality effects (iron, manganese, methane)</td></tr>
<tr><td><strong>Enhanced aerobic bioremediation</strong></td><td>Add oxygen (oxygen-release compounds, sparging)</td><td>Petroleum hydrocarbons</td><td>Oxygen delivery and distribution</td></tr>
<tr><td><strong>Permeable reactive barrier (PRB)</strong></td><td>A trench or injected zone of reactive media (e.g., zero-valent iron for chlorinated solvents) across the plume path</td><td>Long-term passive treatment of a migrating plume</td><td>Must intercept the whole plume; media can lose reactivity or clog</td></tr>
<tr><td><strong>Monitored natural attenuation (MNA)</strong></td><td>Rely on natural processes with monitoring</td><td>Small or stable plumes after source control</td><td>Must show the plume is stable or receding with lines of evidence</td></tr>
</table></div>
<h3>MNA lines of evidence</h3>
<ol>
<li><strong>Primary</strong>: historical data showing concentrations decreasing and the plume stable or shrinking.</li>
<li><strong>Secondary</strong>: geochemical data showing that attenuation processes (e.g., biodegradation) are occurring — electron acceptor depletion, daughter products.</li>
<li><strong>Tertiary</strong> (when needed): microbial or other studies confirming the mechanism.</li>
</ol>
<p>Statistical trend tests (such as the Mann-Kendall test) are commonly used to evaluate whether concentrations at each well are increasing, stable, or decreasing.</p>
<h3>Injection permits</h3>
<p>Injecting amendments into groundwater is regulated as underground injection. In Wisconsin, injections of remedial materials require DNR approval, and the work plan must address what is injected, where, and how its effects will be monitored.</p>
`,
      check: [
        { type: "mc", q: "Why does pump and treat often take decades to restore an aquifer?", options: ["Pumps are slow", "Sorbed and NAPL mass continue to feed dissolved contamination", "Carbon is expensive", "Permits expire"], answer: 1, explain: "Desorption and NAPL dissolution limit restoration rate." },
        { type: "mc", q: "Which amendment is commonly injected for enhanced reductive dechlorination?", options: ["Potassium permanganate", "Emulsified vegetable oil", "Ozone", "Zero-valent iron only"], answer: 1, explain: "EVO is a slow-release electron donor for anaerobic bioremediation." }
      ]
    },
    {
      title: "Managing excavated soil, investigation waste, and water",
      html: `
<h3>Soil management during response actions (NR 718)</h3>
<p>NR 718 governs contaminated soil and other solid wastes excavated during response actions: temporary storage, treatment, on-site reuse, and off-site disposal. Typical expectations for temporary stockpiles include placement on an impermeable surface or liner, covering to prevent infiltration and erosion, and controlling runoff. Reuse of contaminated soil on site or at another location generally requires DNR review or approval and must not create new exposure or groundwater problems.</p>
<p>On brownfield construction projects, a <strong>soil management plan</strong> (sometimes called a materials management plan) tells the contractor how to identify, segregate, stockpile, sample, and route soil — and who to call when something unexpected (drums, a buried tank, strong odors) turns up.</p>
<h3>Waste characterization and disposal</h3>
<ol>
<li><strong>Characterize</strong>: sample according to the receiving facility's requirements (and RCRA hazardous waste determination — listed? characteristic? TCLP?).</li>
<li><strong>Profile</strong>: the generator (the site owner, with consultant help) completes a waste profile for the landfill with analytical data.</li>
<li><strong>Approval</strong>: the landfill issues an acceptance or approval number.</li>
<li><strong>Transport</strong>: non-hazardous contaminated soil moves under a bill of lading or the landfill's tracking forms; hazardous waste requires a licensed hazardous waste transporter and a <strong>Uniform Hazardous Waste Manifest</strong>.</li>
<li><strong>Documentation</strong>: retain weight tickets and manifests; report tonnage in the remedial documentation.</li>
</ol>
<p>Non-hazardous petroleum-contaminated soil commonly goes to a DNR-licensed solid waste landfill (sometimes used as daily cover). Hazardous waste must go to a permitted RCRA Subtitle C facility. Disposal costs differ by an order of magnitude or more, so a correct waste determination matters.</p>
<h3>Investigation-derived waste (IDW)</h3>
<p>Soil cuttings, purge water, and decontamination water are containerized (often in labeled 55-gallon drums), characterized, and disposed of appropriately. Label drums with contents, date, location, and generator; don't abandon drums on a client's site.</p>
<h3>Dewatering and treated water discharge</h3>
<ul>
<li>Discharging contaminated groundwater (from remediation or from construction dewatering on a contaminated site) to surface water or storm sewers requires WPDES permit coverage — the DNR issues general permits for certain categories — with treatment and monitoring as required.</li>
<li>Discharge to a <strong>sanitary sewer</strong> requires approval from the municipality or treatment plant operator.</li>
<li>Construction dewatering on brownfields is a frequent surprise cost: plan for it during design.</li>
</ul>
<div class="callout warn"><strong>Unexpected finds during construction</strong>Buried drums, a UST, or free product found during excavation may trigger spill reporting obligations and must be handled under the HASP and soil management plan. Stop, secure the area, and call the PM.</div>
`,
      check: [
        { type: "mc", q: "Which document is required to ship hazardous waste soil to a TSDF?", options: ["Bill of lading only", "Uniform Hazardous Waste Manifest", "Chain of custody", "Daily field report"], answer: 1, explain: "Hazardous waste requires a manifest and licensed transporter." },
        { type: "mc", q: "Excavated contaminated soil during a Wisconsin response action is managed under:", options: ["NR 140", "NR 718", "NR 726", "ATCP 93"], answer: 1, explain: "NR 718." }
      ]
    },
    {
      title: "Vapor mitigation and case closure",
      html: `
<h3>Vapor mitigation systems</h3>
<p>The standard approach for existing buildings is <strong>sub-slab depressurization (SSD)</strong>: one or more suction points through the slab, connected by piping to a fan that creates a slight negative pressure beneath the slab relative to indoor air, so soil gas is drawn out and vented above the roof instead of entering the building. Key terms:</p>
<ul>
<li><strong>Pressure field extension (PFE) testing</strong> — diagnostic testing to measure how far vacuum extends beneath the slab and to place suction points.</li>
<li><strong>Differential pressure</strong> — measured at monitoring points to verify the slab is depressurized; a manometer on the riser shows the fan is working.</li>
<li><strong>Sealing</strong> slab cracks, sumps, and penetrations improves performance.</li>
<li><strong>Commissioning</strong> and post-mitigation sampling verify performance; an <strong>operation, maintenance, and monitoring plan</strong> is part of closure.</li>
</ul>
<p>For <strong>new construction</strong> on brownfields, mitigation is often built in: a vapor barrier membrane beneath the slab plus a sub-slab venting layer and piping that can operate passively or be converted to active with a fan. This is far cheaper than retrofitting.</p>
<h3>Case closure under NR 726</h3>
<p>Closure is the regulatory finish line. A closure request generally must demonstrate that:</p>
<ul>
<li>the degree and extent of contamination have been defined;</li>
<li>source areas have been removed or controlled to the extent practicable, and free product removed to the extent practicable;</li>
<li>residual groundwater contamination is <strong>stable or receding</strong> (e.g., with trend data);</li>
<li>all exposure pathways (direct contact, groundwater, vapor, surface water) are addressed; and</li>
<li>any residual contamination is managed by appropriate <strong>continuing obligations</strong>, with required maintenance plans, and affected parties have been notified (NR 725).</li>
</ul>
<p>The request includes a narrative, data tables, figures, maintenance plans, legal descriptions, and the required fee. The DNR reviews it and issues a <strong>closure letter</strong> (or a denial with required actions). After closure is approved, monitoring wells are properly abandoned under NR 141 and documented. The site's closed status and any continuing obligations appear on the RR Sites Map and in BRRTS.</p>
<p>The DNR can <strong>reopen</strong> a closed case if new information shows contamination poses a threat — for example, if a cap is removed without approval or if new standards reveal unaddressed risk.</p>
<h3>After closure: NR 727</h3>
<p>Property owners must comply with continuing obligations — maintaining caps, operating vapor systems, restricting wells — and some obligations require periodic inspection and reporting. When a building with a vapor system or a capped area is sold, the obligations transfer to the new owner.</p>
`,
      check: [
        { type: "mc", q: "In a sub-slab depressurization system, the fan creates:", options: ["Positive pressure under the slab", "Negative pressure under the slab relative to indoor air", "A sealed slab with no airflow", "Indoor air filtration only"], answer: 1, explain: "Negative sub-slab pressure prevents soil gas from entering the building." },
        { type: "mc", q: "NR 726 closure generally requires residual groundwater contamination to be:", options: ["Non-detect everywhere", "Stable or receding", "Below the PAL everywhere", "Unmonitored"], answer: 1, explain: "A stable or receding plume, with other criteria, can support closure." }
      ]
    }
  ],
  terms: [
    { term: "Remedial action options report", def: "Wisconsin submittal evaluating cleanup alternatives under NR 722 and recommending a remedy." },
    { term: "Green and sustainable remediation", def: "Practices reducing a cleanup's environmental footprint (energy, emissions, waste, water)." },
    { term: "NCP nine criteria", def: "Superfund remedy criteria: 2 threshold, 5 balancing, 2 modifying." },
    { term: "ARARs", def: "Applicable or relevant and appropriate requirements: other laws a CERCLA remedy must meet." },
    { term: "Engineering control", def: "Physical measure limiting exposure, such as a cap or vapor mitigation system." },
    { term: "Institutional control", def: "Legal or administrative measure limiting exposure, such as a land or groundwater use restriction." },
    { term: "Confirmation sampling", def: "Samples from excavation sidewalls and base documenting remaining contamination." },
    { term: "Soil vapor extraction (SVE)", def: "Applying vacuum to vadose-zone wells to remove volatile contaminants." },
    { term: "Bioventing", def: "Low-flow air delivery to the vadose zone to stimulate aerobic biodegradation." },
    { term: "Thermal remediation", def: "Heating the subsurface (ERH, TCH, steam) to volatilize and recover contaminants." },
    { term: "Stabilization/solidification", def: "Mixing binders into soil to immobilize contaminants, especially metals." },
    { term: "Cap", def: "Engineered cover (pavement, slab, clean soil) breaking direct contact and reducing infiltration; maintained as a continuing obligation." },
    { term: "Free product recovery", def: "Removal of mobile LNAPL by skimming, bailing, or vacuum-enhanced extraction." },
    { term: "Pump and treat", def: "Extracting and treating groundwater above ground; primarily a containment remedy." },
    { term: "Air stripper", def: "Treatment unit transferring VOCs from water to air." },
    { term: "Granular activated carbon (GAC)", def: "Adsorbent media treating water or vapor by sorbing organics." },
    { term: "Air sparging", def: "Injecting air below the water table to strip VOCs and add oxygen; usually paired with SVE." },
    { term: "ISCO", def: "In situ chemical oxidation using permanganate, persulfate, peroxide, or ozone." },
    { term: "Rebound", def: "Increase in groundwater concentrations after treatment stops, as residual mass re-equilibrates." },
    { term: "Enhanced reductive dechlorination", def: "Injecting electron donors (and sometimes bacteria) to drive anaerobic dechlorination of chlorinated ethenes." },
    { term: "Bioaugmentation", def: "Adding microbial cultures (e.g., Dehalococcoides) to the subsurface." },
    { term: "Permeable reactive barrier (PRB)", def: "Zone of reactive media (e.g., zero-valent iron) intercepting and treating a plume." },
    { term: "MNA lines of evidence", def: "Primary (declining trends), secondary (geochemical evidence), tertiary (microbial studies)." },
    { term: "Mann-Kendall test", def: "Non-parametric statistical test for monotonic trends in concentration data." },
    { term: "Soil management plan", def: "Plan directing contractors how to identify, segregate, stockpile, sample, and route soil on a contaminated site." },
    { term: "Waste profile", def: "Generator's description and analytical data submitted for landfill approval." },
    { term: "Investigation-derived waste (IDW)", def: "Cuttings, purge water, and decon water generated during investigation." },
    { term: "Sub-slab depressurization (SSD)", def: "Vapor mitigation using suction points and a fan to depressurize beneath a slab." },
    { term: "Pressure field extension test", def: "Diagnostic test measuring vacuum distribution beneath a slab." },
    { term: "Vapor barrier", def: "Membrane installed beneath new slabs to limit soil gas entry, often with venting." },
    { term: "Closure request", def: "NR 726 submittal demonstrating a site meets closure criteria." },
    { term: "Closure letter", def: "DNR letter approving case closure and listing any continuing obligations." },
    { term: "Case reopening", def: "DNR authority to reopen a closed case when new information shows a threat." }
  ],
  resources: [
    { title: "EPA — CLU-IN Contaminated Site Clean-Up Information", url: "https://clu-in.org/", note: "Technology descriptions and case studies" },
    { title: "Federal Remediation Technologies Roundtable — Screening Matrix", url: "https://www.frtr.gov/matrix/", note: "Technology screening reference" },
    { title: "ITRC — Technical guidance (ISCO, bioremediation, LNAPL, PRBs)", url: "https://itrcweb.org/", note: "State-regulator consensus guidance" },
    { title: "Wis. Admin. Code NR 722, 724, 726, 727", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/700", note: "Remedy selection through post-closure" },
    { title: "Wisconsin DNR — Remediation and Redevelopment guidance", url: "https://dnr.wisconsin.gov/topic/Brownfields", note: "Closure and continuing obligations guidance" },
    { title: "EPA — Institutional Controls", url: "https://www.epa.gov/superfund/institutional-controls", note: "IC concepts and types" }
  ],
  teach: [
    { prompt: "A former gas station will be redeveloped as a restaurant. The SI found a petroleum source near the former tank pit, a benzene plume extending 150 feet, and PAH fill across the site. Propose a remedy combination and explain how it leads to closure.",
      model: "<p>Excavate the petroleum source area during redevelopment, using PID screening to segregate soil, confirmation sampling of sidewalls and base, and disposal at a licensed landfill after profiling under NR 718. Recover any free product to the extent practicable. Leave PAH fill in place under a cap — the building slab, pavement, and clean soil in landscaped areas — maintained as a continuing obligation with a maintenance plan. Evaluate vapor; if needed, install a vapor barrier and passive venting under the new building. Monitor the benzene plume to show it is stable or receding (MNA with trend data and geochemical evidence). Notify affected owners and ROW holders under NR 725, then request closure under NR 726 with continuing obligations (cap, groundwater use restriction, vapor system if installed) shown on the RR Sites Map, then abandon wells under NR 141.</p>" },
    { prompt: "Explain why a chlorinated solvent plume treated with ISCO might 'rebound' and why an enhanced bioremediation design must watch vinyl chloride.",
      model: "<p>ISCO destroys contaminants the oxidant contacts, but much contaminant mass is sorbed to soil or present as residual DNAPL in low-permeability zones the oxidant doesn't reach. After the oxidant is consumed, this mass desorbs and back-diffuses into groundwater, so concentrations rise again — rebound. Enhanced reductive dechlorination converts PCE and TCE stepwise to cis-DCE, vinyl chloride, and ethene; if conditions or Dehalococcoides bacteria are insufficient, degradation stalls at cis-DCE or vinyl chloride. Vinyl chloride is a known carcinogen with a 0.2 µg/L ES, so monitoring must show complete conversion to ethene, and bioaugmentation may be needed.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "In Wisconsin, remedial action selection is governed by:", options: ["NR 716", "NR 718", "NR 722", "NR 726"], answer: 2, explain: "NR 722." },
      { type: "mc", q: "Under the NCP, cost is a:", options: ["Threshold criterion", "Balancing criterion", "Modifying criterion", "Not considered"], answer: 1, explain: "Cost is one of five balancing criteria." },
      { type: "mc", q: "State acceptance and community acceptance are:", options: ["Threshold criteria", "Balancing criteria", "Modifying criteria", "ARARs"], answer: 2, explain: "They are the two modifying criteria." },
      { type: "mc", q: "A building slab maintained over residual contaminated soil is a(n):", options: ["Institutional control", "Engineering control", "Active treatment", "Monitoring"], answer: 1, explain: "Physical barriers are engineering controls." },
      { type: "mc", q: "Why collect confirmation samples from excavation sidewalls and base?", options: ["To estimate truck counts", "To document what contamination remains", "To satisfy OSHA", "To profile waste"], answer: 1, explain: "Confirmation samples document residual conditions." },
      { type: "mc", q: "SVE performance is poorest in:", options: ["Dry sand with benzene", "Clay with low-volatility compounds", "Gravel with TCE", "Sandy fill with toluene"], answer: 1, explain: "Low permeability and low volatility limit SVE." },
      { type: "mc", q: "Bioventing differs from SVE in that it:", options: ["Uses higher airflow", "Uses low airflow to supply oxygen for biodegradation", "Treats metals", "Works below the water table"], answer: 1, explain: "Bioventing emphasizes biodegradation over volatilization." },
      { type: "mc", q: "Which technology is most suited to a chlorinated DNAPL source in clay when cost is secondary?", options: ["MNA", "Thermal treatment", "Capping only", "Bioventing"], answer: 1, explain: "Thermal methods work in clay and on DNAPL." },
      { type: "mc", q: "Air sparging is usually paired with:", options: ["SVE", "Stabilization", "Capping", "PRBs"], answer: 0, explain: "SVE captures vapors stripped by sparging." },
      { type: "multi", q: "Which are ISCO oxidants? Select all that apply.", options: ["Permanganate", "Activated persulfate", "Ozone", "Emulsified vegetable oil"], answer: [0, 1, 2], explain: "EVO is an electron donor for bioremediation, not an oxidant." },
      { type: "mc", q: "Rebound after ISCO is caused mainly by:", options: ["Lab error", "Desorption and back-diffusion of residual mass", "New spills", "Rainfall"], answer: 1, explain: "Untreated mass re-equilibrates with groundwater." },
      { type: "mc", q: "Zero-valent iron is commonly used in PRBs to treat:", options: ["Petroleum", "Chlorinated solvents", "PFAS", "Nitrate only"], answer: 1, explain: "ZVI reductively degrades chlorinated ethenes." },
      { type: "mc", q: "The primary line of evidence for MNA is:", options: ["Microbial DNA", "Historical data showing a stable or shrinking plume", "Pump test data", "Soil boring logs"], answer: 1, explain: "Declining concentrations and plume stability are primary evidence." },
      { type: "mc", q: "The Mann-Kendall test is used to:", options: ["Calculate K", "Evaluate concentration trends", "Classify soil", "Design caps"], answer: 1, explain: "It tests for monotonic trends." },
      { type: "mc", q: "Free product in Wisconsin must be recovered:", options: ["Only if over 1 foot thick", "To the extent practicable", "Never", "Only at federal sites"], answer: 1, explain: "Recovery to the extent practicable is required." },
      { type: "mc", q: "Pump and treat is best described as primarily a:", options: ["Fast restoration remedy", "Containment remedy", "Soil remedy", "Vapor remedy"], answer: 1, explain: "It controls plume migration; restoration is slow." },
      { type: "mc", q: "Temporary stockpiles of contaminated soil should typically be:", options: ["Left uncovered on bare soil", "Placed on a liner or impermeable surface and covered", "Spread across the site", "Mixed with clean soil"], answer: 1, explain: "Prevent leaching and erosion; never dilute contaminated soil with clean soil." },
      { type: "mc", q: "Who is the generator of contaminated soil excavated from a site?", options: ["The trucking company", "The site owner (generator), assisted by the consultant", "The landfill", "The DNR"], answer: 1, explain: "The site owner is the generator; consultants assist with profiles." },
      { type: "mc", q: "Discharging treated contaminated groundwater to a storm sewer requires:", options: ["Nothing", "WPDES permit coverage", "An OSHA permit", "Only landowner consent"], answer: 1, explain: "Storm sewers discharge to surface water; WPDES coverage is required." },
      { type: "mc", q: "Discharging dewatering water to a sanitary sewer requires approval from:", options: ["USACE", "The municipality or treatment plant", "DATCP", "FEMA"], answer: 1, explain: "Sanitary sewer discharges require POTW/municipal approval." },
      { type: "mc", q: "Pressure field extension testing in vapor mitigation measures:", options: ["Indoor air VOCs", "How far vacuum extends beneath the slab", "Radon only", "Fan noise"], answer: 1, explain: "PFE testing maps sub-slab vacuum to place suction points." },
      { type: "mc", q: "For new buildings on brownfields, vapor mitigation is commonly:", options: ["Never needed", "Built in with a membrane and venting layer", "Done only after occupancy complaints", "Achieved by opening windows"], answer: 1, explain: "Integrating mitigation into construction is cost-effective." },
      { type: "mc", q: "After DNR approves closure, monitoring wells are:", options: ["Left in place", "Properly abandoned and documented under NR 141", "Removed by excavator without forms", "Converted to water supply wells"], answer: 1, explain: "Wells are abandoned per NR 141 and documented." },
      { type: "tf", q: "The DNR can reopen a closed case if new information indicates a threat.", answer: true, explain: "Closed cases can be reopened." },
      { type: "mc", q: "Post-closure owner responsibilities are addressed in:", options: ["NR 714", "NR 724", "NR 727", "NR 140"], answer: 2, explain: "NR 727 continuing obligations after closure." },
      { type: "mc", q: "During excavation, a contractor uncovers buried drums. The first step is to:", options: ["Keep digging", "Stop, secure the area, and notify the PM per the HASP and soil management plan", "Crush the drums", "Bury them again"], answer: 1, explain: "Unexpected finds require stopping work and following the plan." }
    ]
  }
});
