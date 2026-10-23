COURSE.addModule({
  id: "m08",
  track: "t2",
  title: "Phase I Environmental Site Assessments and Due Diligence",
  hours: 4,
  summary: "The Phase I ESA is the most common environmental deliverable in the industry and the gateway to most brownfield projects. This module covers the federal All Appropriate Inquiries rule, the ASTM E1527-21 standard, every component of the report, and how findings are classified.",
  objectives: [
    "Explain why Phase I ESAs are performed and how ASTM E1527-21 relates to the federal AAI rule (40 CFR 312).",
    "Describe each Phase I component: records review, historical research, site reconnaissance, interviews, and user responsibilities.",
    "Classify findings as RECs, CRECs, HRECs, or de minimis conditions.",
    "Apply viability timing rules and identify data gaps.",
    "Recognize non-scope considerations and related ASTM standards, and use Wisconsin-specific records sources."
  ],
  lessons: [
    {
      title: "Why Phase I ESAs exist: AAI and ASTM E1527-21",
      html: `
<p>A <strong>Phase I Environmental Site Assessment (ESA)</strong> is a non-intrusive investigation — no sampling — of a property's current and historical uses to identify environmental concerns. Clients order them for three main reasons:</p>
<ol>
<li><strong>Liability protection.</strong> To qualify for CERCLA landowner liability protections (bona fide prospective purchaser, contiguous property owner, innocent landowner), a buyer must conduct <strong>All Appropriate Inquiries (AAI)</strong> before acquisition, as defined at <strong>40 CFR Part 312</strong>.</li>
<li><strong>Lender requirements.</strong> Lenders (including SBA-guaranteed loan programs) require Phase I ESAs to evaluate collateral risk.</li>
<li><strong>Business decisions.</strong> Understanding potential cleanup costs before buying, leasing, or redeveloping.</li>
</ol>
<h3>The standard</h3>
<p>EPA recognizes <strong>ASTM E1527-21</strong>, <em>Standard Practice for Environmental Site Assessments: Phase I Environmental Site Assessment Process</em>, as compliant with AAI. (The previous version, E1527-13, is no longer recognized for AAI.) EPA also recognizes ASTM E2247 for forestland or rural property.</p>
<h3>The Environmental Professional (EP)</h3>
<p>AAI requires that certain parts of the Phase I be performed by or under the supervision of an <strong>Environmental Professional</strong>, defined at 40 CFR 312.10 as someone who has:</p>
<ul>
<li>a current PE or PG license (or equivalent state certification) plus <strong>3 years</strong> of relevant full-time experience; or</li>
<li>a baccalaureate or higher degree in science or engineering plus <strong>5 years</strong> of relevant full-time experience; or</li>
<li><strong>10 years</strong> of relevant full-time experience.</li>
</ul>
<p>The EP signs a declaration in the report. Staff can perform much of the research and site visit under the EP's supervision.</p>
<h3>Viability: the 180-day and one-year rules</h3>
<p>For AAI purposes, the Phase I must be completed within <strong>one year</strong> before the date of acquisition. In addition, these components must be conducted or updated within <strong>180 days</strong> before acquisition:</p>
<ul>
<li>interviews with past and present owners, operators, and occupants;</li>
<li>searches for recorded environmental cleanup liens;</li>
<li>reviews of government records;</li>
<li>the visual inspection (site reconnaissance); and</li>
<li>the declaration by the Environmental Professional.</li>
</ul>
<p>E1527-21 requires the report to identify the date each of these components was completed so the user can track viability.</p>
<div class="mnemonic"><strong>3–5–10</strong> years for the EP (license / degree / experience only). <strong>180 days</strong> for the "fresh five" components; <strong>1 year</strong> for the report overall.</div>
`,
      check: [
        { type: "mc", q: "Which ASTM standard does EPA currently recognize as satisfying AAI for typical commercial property?", options: ["ASTM E1527-13", "ASTM E1527-21", "ASTM E1528", "ASTM E1903"], answer: 1, explain: "E1527-21. E1528 is a transaction screen (not AAI); E1903 is a Phase II." },
        { type: "mc", q: "A person with a geology degree and no license would need how many years of relevant full-time experience to qualify as an Environmental Professional?", options: ["3", "5", "10", "None"], answer: 1, explain: "Degree in science or engineering + 5 years." },
        { type: "tf", q: "Under AAI, the site visit must be conducted or updated within 180 days before acquisition.", answer: true, explain: "The visual inspection is one of the components with a 180-day requirement." }
      ]
    },
    {
      title: "Findings: RECs, CRECs, HRECs, and de minimis conditions",
      html: `
<p>The purpose of a Phase I is to identify <strong>recognized environmental conditions (RECs)</strong>. Getting the classification right is the heart of the report.</p>
<h3>Recognized environmental condition (REC)</h3>
<p>Under ASTM E1527-21, a REC is:</p>
<ol>
<li>the <strong>presence</strong> of hazardous substances or petroleum products in, on, or at the subject property due to a release to the environment;</li>
<li>the <strong>likely presence</strong> of hazardous substances or petroleum products in, on, or at the subject property due to a release or likely release to the environment; or</li>
<li>the presence of hazardous substances or petroleum products in, on, or at the subject property under conditions that pose a <strong>material threat of a future release</strong> to the environment.</li>
</ol>
<p>"Likely" means more probable than not, based on available evidence and the EP's judgment. De minimis conditions are not RECs.</p>
<h3>Controlled REC (CREC)</h3>
<p>A REC resulting from a past release that has been addressed to the satisfaction of the applicable regulatory authority (e.g., a DNR closure), but with hazardous substances or petroleum allowed to remain in place <strong>subject to required controls</strong> — such as a cap, vapor mitigation, groundwater use restriction, or industrial land use limitation. A Wisconsin site closed with continuing obligations is the classic CREC. CRECs are listed as RECs in the findings.</p>
<h3>Historical REC (HREC)</h3>
<p>A previous release that has been addressed to the satisfaction of the regulatory authority or that meets unrestricted use criteria <strong>without any required controls</strong>. An HREC is <strong>not</strong> a REC. The EP should consider whether newer standards or information change that conclusion (e.g., a site closed decades ago before vapor intrusion was evaluated).</p>
<h3>De minimis condition</h3>
<p>A condition that generally does not present a threat to human health or the environment and that generally would not be the subject of an enforcement action if brought to regulators' attention — for example, minor staining from a parked car on pavement. Not a REC.</p>
<div class="tbl-wrap"><table>
<tr><th>Scenario</th><th>Classification</th></tr>
<tr><td>Former gas station on the property; tanks removed in 1990 with no closure documentation or sampling</td><td>REC (likely presence)</td></tr>
<tr><td>LUST case closed by DNR with residual soil under a required pavement cap</td><td>CREC</td></tr>
<tr><td>LUST case closed by DNR to unrestricted standards with no continuing obligations</td><td>HREC (not a REC)</td></tr>
<tr><td>Small oil drip stain under a dumpster, concrete intact</td><td>De minimis</td></tr>
<tr><td>Leaking drums of unknown liquid stored on bare soil</td><td>REC (presence and/or material threat)</td></tr>
<tr><td>Dry cleaner with on-site PCE use from 1955–2005 and no investigation</td><td>REC</td></tr>
</table></div>
<p>Phase I reports also commonly discuss <strong>business environmental risks (BERs)</strong> — issues outside the REC definition that could affect the transaction (e.g., asbestos in an old building, wetlands, an off-site plume that might affect future development).</p>
<div class="mnemonic"><strong>REC</strong> = a problem. <strong>CREC</strong> = a <strong>C</strong>ontrolled problem (still a REC). <strong>HREC</strong> = <strong>H</strong>istory, handled with no strings attached (not a REC).</div>
`,
      check: [
        { type: "mc", q: "A DNR-closed LUST site where residual soil contamination must remain under a maintained cap is a:", options: ["REC", "CREC", "HREC", "De minimis condition"], answer: 1, explain: "Addressed to the regulator's satisfaction but with required controls = CREC." },
        { type: "tf", q: "An HREC is reported as a recognized environmental condition.", answer: false, explain: "HRECs are not RECs, though the EP must evaluate whether current standards change that." }
      ]
    },
    {
      title: "Records review and historical research",
      html: `
<h3>Government records review</h3>
<p>Consultants typically purchase a <strong>regulatory database report</strong> from a commercial provider that searches federal, state, tribal, and local databases within ASTM's approximate minimum search distances around the property. Examples:</p>
<div class="tbl-wrap"><table>
<tr><th>Database type</th><th>Approximate minimum search distance</th></tr>
<tr><td>Federal NPL; RCRA CORRACTS facilities; state equivalent NPL</td><td>1 mile</td></tr>
<tr><td>Federal delisted NPL; SEMS (formerly CERCLIS); RCRA non-CORRACTS TSD facilities; state equivalent CERCLIS; state landfill/solid waste disposal sites; state leaking UST lists; state voluntary cleanup and brownfield sites</td><td>0.5 mile</td></tr>
<tr><td>RCRA generators; SEMS-archive (no further remedial action planned); state registered USTs</td><td>Subject property and adjoining properties</td></tr>
<tr><td>Federal and state institutional/engineering control registries; ERNS (spill reports)</td><td>Subject property</td></tr>
</table></div>
<p>The EP then evaluates which listed sites could affect the subject property, considering distance, groundwater flow direction (inferred from topography if no data), case status, and contaminants. A closed LUST site 0.4 mile downgradient is usually not a concern; an open dry cleaner case 200 feet upgradient may be.</p>
<h3>Wisconsin-specific records</h3>
<ul>
<li><strong>BRRTS on the Web</strong> and the <strong>RR Sites Map</strong> — DNR contaminated site cases, documents, and continuing obligations. Read the actual case documents, not just the database listing.</li>
<li><strong>DATCP storage tank database</strong> — registered USTs and ASTs, including closed tanks.</li>
<li>DNR waste management records — landfills, hazardous waste generators, and the historical registry of waste disposal sites.</li>
<li><strong>Well construction reports</strong> — nearby wells, depth to water, stratigraphy.</li>
<li>Local fire department records (tank installation and removal permits, hazardous materials inspections), building and zoning permits, and assessor records.</li>
</ul>
<h3>Historical research</h3>
<p>The goal is to identify all obvious uses of the property from the present back to the property's first developed use, or back to 1940, whichever is earlier. ASTM's standard historical sources:</p>
<ul>
<li><strong>Aerial photographs</strong> — show land use, buildings, staining, ponds, debris, at intervals over decades.</li>
<li><strong>Fire insurance maps</strong> (Sanborn maps) — detailed maps of urban areas from the late 1800s through the mid-1900s showing building footprints, construction, uses, and often tanks ("gas tank," "oil house"). Invaluable in older Wisconsin cities.</li>
<li><strong>City directories</strong> — list occupants by address over time (e.g., "Main St. Cleaners" in 1962).</li>
<li><strong>Historical topographic maps</strong> — show buildings, pits, quarries, landfills, filled wetlands.</li>
<li>Also: building department records, property tax files, recorded land title records, and interviews.</li>
</ul>
<p>Adjoining properties' historical uses are also evaluated, because contamination migrates. Gaps in the historical record are identified as <strong>data gaps</strong>, and the report must say whether each is <strong>significant</strong> — that is, whether it affects the ability to identify RECs.</p>
<h3>Red-flag historical uses</h3>
<p>Gas stations and auto repair; dry cleaners; metal plating, finishing, and machine shops; foundries; printing; tanneries; rail yards; chemical and petroleum bulk storage; manufactured gas plants; landfills and dumps; junkyards; and agricultural chemical mixing areas and orchards.</p>
`,
      check: [
        { type: "mc", q: "What is the ASTM approximate minimum search distance for state leaking UST lists?", options: ["Subject property only", "Property and adjoining", "0.5 mile", "1 mile"], answer: 2, explain: "State LUST lists = 0.5 mile." },
        { type: "mc", q: "Which historical source typically shows building uses, construction, and tanks in older urban areas?", options: ["USGS topographic maps", "Fire insurance (Sanborn) maps", "Web Soil Survey", "FEMA FIRMs"], answer: 1, explain: "Sanborn fire insurance maps are detailed building-level maps." },
        { type: "mc", q: "Historical research should extend back to first developed use or to what year, whichever is earlier?", options: ["1900", "1940", "1960", "1980"], answer: 1, explain: "First developed use or 1940." }
      ]
    },
    {
      title: "Site reconnaissance, interviews, and user responsibilities",
      html: `
<h3>Site reconnaissance</h3>
<p>The EP (or staff under supervision) walks the property and the exterior of buildings, views adjoining properties from the subject property or public right-of-way, and documents observations with photographs. Look for:</p>
<ul>
<li><strong>Storage tanks</strong> — fill ports, vent pipes, dispenser islands, concrete pads, tank manways, aboveground tanks, and evidence of former tanks (patched concrete).</li>
<li><strong>Containers</strong> — drums, totes, unlabeled containers, especially leaking or on bare ground.</li>
<li><strong>Stains, odors, pools of liquid, stressed vegetation</strong>.</li>
<li><strong>Floor drains, sumps, trench drains, oil-water separators</strong> — where do they discharge?</li>
<li><strong>Hydraulic lifts</strong> in auto service areas (in-ground lifts have reservoirs of hydraulic oil).</li>
<li><strong>Electrical and hydraulic equipment</strong> possibly containing PCBs — pad- or pole-mounted transformers (note owner and labeling).</li>
<li><strong>Pits, ponds, lagoons</strong>; fill piles; solid waste; evidence of dumping.</li>
<li><strong>Wells</strong> (water supply, monitoring) and <strong>septic systems</strong>.</li>
<li>Heating fuel source (fuel oil tank?), wastewater discharge, stormwater features.</li>
</ul>
<p>If access is limited (locked areas, snow cover, tenants refusing entry), document it — it may be a data gap.</p>
<h3>Interviews</h3>
<p>Interview the owner, a <strong>key site manager</strong> (someone with good knowledge of the property's uses and physical characteristics), occupants (for multi-tenant properties, a reasonable sample), and, as appropriate, past owners/operators and local government officials (fire department, health department, building department, DNR). Ask about past uses, tanks, spills, environmental permits, lawsuits, and prior environmental reports.</p>
<h3>User responsibilities</h3>
<p>Under AAI, the <strong>user</strong> (the party seeking liability protection — usually the buyer) has responsibilities that the consultant cannot perform alone. Users should provide:</p>
<ul>
<li>Results of a search for <strong>environmental liens</strong> and <strong>activity and use limitations (AULs)</strong> recorded against the property (or engage the consultant or a title company to do it).</li>
<li>Any <strong>specialized knowledge or experience</strong> relevant to the property.</li>
<li><strong>Actual knowledge</strong> of liens or AULs.</li>
<li>Whether the <strong>purchase price reflects fair market value</strong>; if it is significantly lower, whether contamination explains the difference.</li>
<li><strong>Commonly known or reasonably ascertainable information</strong> about the property.</li>
<li>The reason the Phase I is being performed.</li>
</ul>
<p>These are usually gathered with a <strong>user questionnaire</strong>. Missing user information is noted in the report and can affect liability protection.</p>
`,
      check: [
        { type: "multi", q: "Which are user responsibilities under AAI? Select all that apply.", options: ["Searching for environmental liens and AULs", "Disclosing specialized knowledge", "Considering whether the purchase price reflects fair market value", "Signing the EP declaration"], answer: [0, 1, 2], explain: "The EP — not the user — signs the EP declaration." },
        { type: "mc", q: "During a site visit, you observe a vent pipe and fill port near the building with no tank records. This most likely indicates:", options: ["A septic system", "An underground storage tank", "A monitoring well", "A storm sewer"], answer: 1, explain: "Fill ports and vent pipes are classic signs of USTs." }
      ]
    },
    {
      title: "Scope limits, related standards, and writing the report",
      html: `
<h3>Non-scope considerations</h3>
<p>E1527-21 lists issues that are outside its scope unless the user adds them. Common examples:</p>
<ul>
<li>Asbestos-containing building materials</li>
<li>Lead-based paint and lead in drinking water</li>
<li>Radon</li>
<li>Mold</li>
<li>Wetlands</li>
<li>Regulatory compliance of current operations</li>
<li>Cultural and historic resources; endangered species</li>
<li>Industrial hygiene and health and safety</li>
<li>Emerging contaminants that are not CERCLA hazardous substances (PFOA and PFOS became CERCLA hazardous substances in 2024, bringing them within scope)</li>
</ul>
<p>Vapor migration, by contrast, is <strong>within scope</strong> as a pathway by which hazardous substances can migrate onto or beneath the property. ASTM <strong>E2600</strong> provides a separate vapor encroachment screening methodology.</p>
<h3>Related ASTM standards</h3>
<div class="tbl-wrap"><table>
<tr><th>Standard</th><th>What it is</th><th>Satisfies AAI?</th></tr>
<tr><td>E1527-21</td><td>Phase I ESA</td><td>Yes</td></tr>
<tr><td>E2247</td><td>Phase I ESA for forestland or rural property</td><td>Yes</td></tr>
<tr><td>E1528</td><td>Transaction Screen Process (questionnaire-based)</td><td>No</td></tr>
<tr><td>E1903</td><td>Phase II ESA process</td><td>N/A (sampling)</td></tr>
<tr><td>E2600</td><td>Vapor encroachment screening</td><td>N/A</td></tr>
<tr><td>E2091</td><td>Activity and use limitations</td><td>N/A</td></tr>
</table></div>
<h3>Report structure (typical)</h3>
<ol>
<li>Summary of findings, opinions, and conclusions — list of RECs, CRECs, HRECs, de minimis conditions, and significant data gaps</li>
<li>Introduction — purpose, scope, user, limitations, deviations</li>
<li>Site description and physical setting (topography, geology, inferred groundwater flow)</li>
<li>User-provided information</li>
<li>Records review (database, Wisconsin agency files, historical sources)</li>
<li>Site reconnaissance</li>
<li>Interviews</li>
<li>Evaluation and findings</li>
<li>Opinions and conclusions; optional recommendations (e.g., Phase II)</li>
<li>EP declaration and qualifications; appendices (maps, photos, database report, historical documents)</li>
</ol>
<h3>Common mistakes to avoid</h3>
<ul>
<li>Listing every database hit as a REC without evaluating distance, gradient, and status.</li>
<li>Calling a closed site with continuing obligations an HREC instead of a CREC.</li>
<li>Copying a prior report's findings without independent evaluation.</li>
<li>Failing to evaluate adjoining properties' history.</li>
<li>Not reading the actual DNR case file — the closure letter tells you what controls apply.</li>
<li>Ignoring viability dates when the closing is delayed.</li>
</ul>
`,
      check: [
        { type: "tf", q: "Vapor migration is within the scope of an ASTM E1527-21 Phase I ESA.", answer: true, explain: "Vapor is a migration pathway for hazardous substances and petroleum and is within scope." },
        { type: "mc", q: "Which is a non-scope consideration under E1527-21 (unless added)?", options: ["Historical gas station on site", "Asbestos-containing building materials", "Open LUST case on adjoining property", "Stained soil near drums"], answer: 1, explain: "Asbestos is a non-scope consideration." }
      ]
    }
  ],
  terms: [
    { term: "Phase I ESA", def: "Non-intrusive assessment of a property's current and historical uses to identify recognized environmental conditions; no sampling." },
    { term: "ASTM E1527-21", def: "Current ASTM standard practice for Phase I ESAs; recognized by EPA as AAI-compliant." },
    { term: "All Appropriate Inquiries (AAI)", def: "Federal standard (40 CFR 312) for pre-acquisition inquiry required for CERCLA landowner liability protections." },
    { term: "Environmental Professional (EP)", def: "Per 40 CFR 312.10: PE/PG + 3 years, or science/engineering degree + 5 years, or 10 years of relevant full-time experience." },
    { term: "Viability (Phase I)", def: "AAI timing: report within 1 year of acquisition; interviews, lien search, records review, site visit, and EP declaration within 180 days." },
    { term: "REC", def: "Recognized environmental condition: presence or likely presence of hazardous substances/petroleum due to a release, or a material threat of future release." },
    { term: "CREC", def: "Controlled REC: past release addressed to regulator satisfaction but with contamination remaining subject to required controls." },
    { term: "HREC", def: "Historical REC: past release addressed to regulator satisfaction or unrestricted criteria without required controls; not a REC." },
    { term: "De minimis condition", def: "A condition that generally poses no threat and would not be subject to enforcement; not a REC." },
    { term: "Business environmental risk (BER)", def: "An environmental issue outside the REC definition that may affect a transaction, e.g., asbestos or wetlands." },
    { term: "Data gap", def: "A lack of or inability to obtain information required by the standard; 'significant' if it affects the ability to identify RECs." },
    { term: "Approximate minimum search distance", def: "ASTM-specified radius for each type of regulatory database search (e.g., NPL 1 mile, LUST 0.5 mile)." },
    { term: "Sanborn map", def: "Fire insurance map showing building footprints, construction, uses, and often tanks in urban areas." },
    { term: "City directory", def: "Historical listing of occupants by address used to trace property uses over time." },
    { term: "Key site manager", def: "Person with good knowledge of a property's uses and physical characteristics, identified for interview." },
    { term: "User", def: "The party seeking to use the Phase I, typically to qualify for landowner liability protections; has specific AAI responsibilities." },
    { term: "Environmental lien", def: "A charge or encumbrance on property to secure payment of environmental cleanup costs." },
    { term: "Activity and use limitation (AUL)", def: "Legal or physical restrictions on property use due to residual contamination (institutional and engineering controls)." },
    { term: "User questionnaire", def: "Form collecting user-provided information: liens, specialized knowledge, purchase price, and commonly known information." },
    { term: "Non-scope considerations", def: "Issues outside E1527-21 unless added, e.g., asbestos, lead paint, radon, mold, wetlands." },
    { term: "ASTM E1528", def: "Transaction screen questionnaire process; does not satisfy AAI." },
    { term: "ASTM E2600", def: "Standard guide for vapor encroachment screening on property involved in real estate transactions." },
    { term: "ASTM E2247", def: "Phase I ESA standard for forestland or rural property; AAI-compliant." },
    { term: "Adjoining property", def: "Property sharing a border with the subject property or that would share one but for a street or road." },
    { term: "Hydraulic lift", def: "Vehicle lift with an oil reservoir; in-ground units are a potential release source at auto service sites." }
  ],
  resources: [
    { title: "EPA — All Appropriate Inquiries rule", url: "https://www.epa.gov/brownfields/brownfields-all-appropriate-inquiries", note: "AAI overview and recognized standards" },
    { title: "eCFR — 40 CFR Part 312", url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-J/part-312", note: "Full text of the AAI rule" },
    { title: "ASTM E1527-21", url: "https://www.astm.org/e1527-21.html", note: "Phase I ESA standard (purchase required)" },
    { title: "Library of Congress — Sanborn Maps collection", url: "https://www.loc.gov/collections/sanborn-maps/", note: "Free historical fire insurance maps" },
    { title: "UW–Milwaukee AGS Library", url: "https://uwm.edu/libraries/agsl/", note: "Historical maps and aerial photos for Wisconsin" },
    { title: "USGS EarthExplorer", url: "https://earthexplorer.usgs.gov/", note: "Historical aerial photography" },
    { title: "Wisconsin DNR — RR Sites Map and BRRTS", url: "https://dnr.wisconsin.gov/topic/Brownfields", note: "Wisconsin contaminated site records" }
  ],
  teach: [
    { prompt: "Explain the difference between a REC, CREC, HREC, and de minimis condition to a client who is a first-time buyer, using one Wisconsin example for each.",
      model: "<p>A REC is a known or likely release of hazardous substances or petroleum, or a material threat of one — e.g., a former gas station on the property with tanks pulled in 1990 and no sampling. A CREC is a past release the DNR has closed but with contamination left in place under required controls — e.g., a closed LUST case requiring a pavement cap and a groundwater use restriction; it is still a REC because those obligations come with the property. An HREC is a past release closed to unrestricted standards with no required controls — e.g., a spill excavated to below RCLs and closed without continuing obligations; it is not a REC, though the EP checks whether newer standards change that. A de minimis condition is minor and wouldn't draw enforcement — e.g., a small oil stain on intact pavement.</p>" },
    { prompt: "The closing on a property is delayed. The Phase I site visit was eight months ago and the report was issued seven months ago. What must be done for the buyer to rely on it for AAI, and why?",
      model: "<p>The report is within one year, so it can still be used, but the components with a 180-day requirement are stale: interviews, lien search, government records review, site visit, and EP declaration must be updated within 180 days before acquisition. The consultant should perform an update — a new site visit, refreshed database and agency records, new interviews, updated lien/AUL search, and a new EP declaration — documenting the new dates. If the acquisition slips past one year from the original report, a new Phase I is needed.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "A Phase I ESA includes:", options: ["Soil and groundwater sampling", "Records review, site reconnaissance, interviews, and reporting", "Remedial design", "Asbestos sampling by default"], answer: 1, explain: "Phase I is non-intrusive." },
      { type: "mc", q: "Which federal regulation defines All Appropriate Inquiries?", options: ["40 CFR 261", "40 CFR 300", "40 CFR 312", "29 CFR 1910.120"], answer: 2, explain: "40 CFR Part 312." },
      { type: "mc", q: "A licensed PE needs how many years of relevant full-time experience to be an EP?", options: ["1", "3", "5", "10"], answer: 1, explain: "License + 3 years." },
      { type: "mc", q: "With no degree or license, how many years of relevant full-time experience qualify someone as an EP?", options: ["5", "7", "10", "15"], answer: 2, explain: "10 years." },
      { type: "mc", q: "For AAI, a Phase I report must be completed within how long before acquisition?", options: ["90 days", "180 days", "1 year", "2 years"], answer: 2, explain: "One year, with certain components within 180 days." },
      { type: "multi", q: "Which components must be within 180 days of acquisition? Select all that apply.", options: ["Interviews", "Lien search", "Government records review", "Site visit", "EP declaration"], answer: [0, 1, 2, 3, 4], explain: "All five are 180-day components." },
      { type: "mc", q: "Under E1527-21, 'likely' presence means:", options: ["Any possibility", "More probable than not", "Confirmed by lab data", "Reported to DNR"], answer: 1, explain: "Likely = more probable than not based on evidence and judgment." },
      { type: "mc", q: "An open DNR ERP case on the subject property for chlorinated solvents is a:", options: ["REC", "CREC", "HREC", "De minimis condition"], answer: 0, explain: "Known presence from a release, not yet closed = REC." },
      { type: "mc", q: "A spill closed by DNR in 2015 to unrestricted standards with no continuing obligations is a:", options: ["REC", "CREC", "HREC", "BER"], answer: 2, explain: "Closed without required controls = HREC." },
      { type: "mc", q: "A closed site with a vapor mitigation system required as a continuing obligation is a:", options: ["REC", "CREC", "HREC", "De minimis"], answer: 1, explain: "Contamination remains subject to required controls = CREC." },
      { type: "mc", q: "Minor staining on intact pavement under a parked vehicle is usually a:", options: ["REC", "CREC", "HREC", "De minimis condition"], answer: 3, explain: "De minimis." },
      { type: "mc", q: "Asbestos in a building being purchased would typically be reported as a:", options: ["REC", "Business environmental risk / non-scope consideration", "CREC", "HREC"], answer: 1, explain: "Asbestos is a non-scope consideration, often discussed as a BER." },
      { type: "mc", q: "The ASTM approximate minimum search distance for the federal NPL is:", options: ["0.25 mile", "0.5 mile", "1 mile", "2 miles"], answer: 2, explain: "NPL = 1 mile." },
      { type: "mc", q: "State registered UST lists are searched for:", options: ["1 mile", "0.5 mile", "Subject property and adjoining properties", "Subject property only"], answer: 2, explain: "Registered USTs = property and adjoining." },
      { type: "mc", q: "Which factor is LEAST relevant when evaluating a database-listed site's potential to affect the subject property?", options: ["Distance", "Inferred groundwater flow direction", "Case status and contaminants", "The listed site's architectural style"], answer: 3, explain: "Distance, gradient, status, and contaminant type matter." },
      { type: "mc", q: "Which Wisconsin source shows DNR contaminated site cases and continuing obligations?", options: ["BRRTS on the Web / RR Sites Map", "WisDOT FDM", "DSPS license lookup", "FEMA Map Service Center"], answer: 0, explain: "BRRTS and the RR Sites Map." },
      { type: "mc", q: "Which agency's database would list registered petroleum storage tanks in Wisconsin?", options: ["DATCP", "DSPS", "DHS", "WisDOT"], answer: 0, explain: "DATCP administers storage tanks under ATCP 93." },
      { type: "mc", q: "City directories are useful because they:", options: ["Show groundwater flow", "List occupants by address over time", "Show building construction", "Provide lab data"], answer: 1, explain: "They trace occupants (e.g., a dry cleaner) at an address." },
      { type: "mc", q: "A significant data gap is one that:", options: ["Exists in any Phase I", "Affects the ability of the EP to identify RECs", "Is caused by the user", "Only involves interviews"], answer: 1, explain: "Significance relates to the ability to identify RECs." },
      { type: "mc", q: "Who must provide information on environmental liens and AULs, or arrange for a search?", options: ["The EP", "The user", "The DNR", "The seller only"], answer: 1, explain: "It is a user responsibility." },
      { type: "mc", q: "A purchase price significantly below fair market value is relevant because:", options: ["It affects the consultant's fee", "It may reflect known contamination", "It changes search distances", "It voids the Phase I"], answer: 1, explain: "Users must consider whether a lower price reflects contamination." },
      { type: "mc", q: "In-ground hydraulic lifts at a former auto service station are a concern because:", options: ["They contain asbestos", "Their oil reservoirs can leak to subsurface soil", "They are radioactive", "They are always PFAS sources"], answer: 1, explain: "Hydraulic oil releases from in-ground lifts are a common REC." },
      { type: "mc", q: "Which ASTM document does NOT satisfy AAI?", options: ["E1527-21", "E2247", "E1528", "None of these"], answer: 2, explain: "E1528 transaction screen does not satisfy AAI." },
      { type: "mc", q: "ASTM E2600 addresses:", options: ["Phase II sampling", "Vapor encroachment screening", "Asbestos surveys", "Wetland delineation"], answer: 1, explain: "E2600 = vapor encroachment screening." },
      { type: "tf", q: "Because PFOA and PFOS were designated CERCLA hazardous substances in 2024, they are within the scope of an E1527-21 Phase I.", answer: true, explain: "CERCLA hazardous substances are within scope." },
      { type: "mc", q: "Which is a common Phase I mistake?", options: ["Reading the DNR closure letter", "Evaluating adjoining property history", "Listing every database hit as a REC without evaluation", "Documenting access limitations"], answer: 2, explain: "Database hits must be evaluated, not automatically listed." },
      { type: "mc", q: "Adjoining property history matters in a Phase I because:", options: ["It affects zoning", "Contamination can migrate onto the subject property", "ASTM requires a sample there", "It sets the purchase price"], answer: 1, explain: "Migrating contamination from adjoining properties can be a REC." }
    ]
  }
});
