COURSE.addModule({
  id: "m05",
  track: "t2",
  title: "The Federal Environmental Law Framework",
  hours: 4,
  summary: "The federal statutes that shape environmental consulting — CERCLA (Superfund), RCRA, the Clean Water Act, Clean Air Act, Safe Drinking Water Act, TSCA, and others — how they become regulations, how liability works, and how Wisconsin carries out delegated federal programs.",
  objectives: [
    "Explain how statutes, regulations, and guidance relate, and how federal programs are delegated to Wisconsin.",
    "Describe CERCLA liability, the four classes of potentially responsible parties, and the landowner liability protections created in 2002.",
    "Classify hazardous waste under RCRA (listed vs. characteristic) and identify generator categories.",
    "Identify Clean Water Act, Safe Drinking Water Act, and Clean Air Act programs consultants encounter, including NPDES, Section 404, SPCC, MCLs, and the asbestos NESHAP.",
    "Recognize TSCA PCB rules and other statutes that commonly affect projects."
  ],
  lessons: [
    {
      title: "How environmental law is built",
      html: `
<h3>Statutes, regulations, guidance</h3>
<ul>
<li><strong>Statutes</strong> are laws passed by Congress (e.g., the Comprehensive Environmental Response, Compensation, and Liability Act) and codified in the U.S. Code (U.S.C.).</li>
<li><strong>Regulations</strong> are rules issued by agencies to implement statutes. They are proposed and finalized in the <strong>Federal Register</strong> and compiled in the <strong>Code of Federal Regulations (CFR)</strong>. Environmental regulations are mostly in <strong>Title 40</strong> (40 CFR); worker safety is in Title 29.</li>
<li><strong>Guidance</strong> documents explain how an agency interprets and applies regulations. Guidance is not legally binding in the same way, but regulators expect you to follow it or justify why not.</li>
</ul>
<p>Wisconsin mirrors this structure: <strong>Wisconsin Statutes</strong> (e.g., ch. 292) are implemented by the <strong>Wisconsin Administrative Code</strong> (e.g., NR 700 series for DNR rules), supplemented by DNR guidance publications.</p>
<h3>Cooperative federalism and delegation</h3>
<p>Many federal programs allow EPA to <strong>authorize</strong> or <strong>delegate</strong> a state to run the program, provided state rules are at least as stringent as federal rules. Wisconsin administers, for example:</p>
<ul>
<li>The Clean Water Act NPDES permit program, as the <strong>Wisconsin Pollutant Discharge Elimination System (WPDES)</strong>.</li>
<li>The RCRA hazardous waste program, through DNR rules in the NR 660 series.</li>
<li>Safe Drinking Water Act public water system oversight (NR 809 and related rules).</li>
<li>Many Clean Air Act permitting programs.</li>
</ul>
<p>Superfund (CERCLA) is primarily a federal program, but Wisconsin has its own, broader cleanup law — the <strong>Hazardous Substance Discharge Law</strong>, or "spill law," Wis. Stat. § 292.11 — covered in the next module.</p>
<h3>NEPA</h3>
<p>The <strong>National Environmental Policy Act</strong> (NEPA, 1970) requires federal agencies to evaluate the environmental effects of their proposed major actions (including projects they fund or permit). Levels of review: <strong>Categorical Exclusion (CatEx)</strong>, <strong>Environmental Assessment (EA)</strong> leading to a Finding of No Significant Impact (FONSI) or to an <strong>Environmental Impact Statement (EIS)</strong>. Wisconsin's counterpart is the Wisconsin Environmental Policy Act (WEPA). Related review requirements, such as Section 106 of the National Historic Preservation Act and Section 7 of the Endangered Species Act, often travel with federally funded or permitted projects.</p>
<div class="mnemonic"><strong>S</strong>tatute → <strong>R</strong>egulation → <strong>G</strong>uidance: "Congress <strong>S</strong>ays, agencies <strong>R</strong>ule, staff <strong>G</strong>uide."</div>
`,
      check: [
        { type: "mc", q: "Federal environmental regulations are compiled primarily in:", options: ["Title 29 CFR", "Title 40 CFR", "Title 49 CFR", "The U.S. Code Title 42 only"], answer: 1, explain: "40 CFR contains EPA's environmental regulations. 29 CFR is labor/OSHA; 49 CFR is transportation." },
        { type: "mc", q: "Wisconsin's state-run version of the Clean Water Act NPDES permit program is called:", options: ["WEPA", "WPDES", "BRRTS", "VPLE"], answer: 1, explain: "WPDES — the Wisconsin Pollutant Discharge Elimination System." }
      ]
    },
    {
      title: "CERCLA (Superfund) and liability",
      html: `
<p>The <strong>Comprehensive Environmental Response, Compensation, and Liability Act</strong> (CERCLA), enacted in 1980 and amended by the Superfund Amendments and Reauthorization Act (SARA) in 1986, addresses releases of <strong>hazardous substances</strong> from contaminated sites. It is the source of much of the liability that drives environmental due diligence.</p>
<h3>Hazardous substances and the petroleum exclusion</h3>
<p>CERCLA hazardous substances are listed at 40 CFR 302.4. CERCLA's definition <strong>excludes petroleum</strong>, including crude oil and fractions of it, that is not otherwise specifically listed. (Petroleum releases are handled under other laws such as RCRA Subtitle I for USTs and, in Wisconsin, the state spill law.) In 2024 EPA designated <strong>PFOA and PFOS</strong>, two PFAS compounds, as CERCLA hazardous substances.</p>
<h3>Potentially responsible parties (PRPs)</h3>
<p>CERCLA § 107 imposes liability on four classes of PRPs:</p>
<ol>
<li><strong>Current owners and operators</strong> of the facility.</li>
<li><strong>Owners and operators at the time of disposal</strong>.</li>
<li><strong>Arrangers</strong> — persons who arranged for disposal or treatment (generators).</li>
<li><strong>Transporters</strong> who selected the disposal site.</li>
</ol>
<p>CERCLA liability is generally <strong>strict</strong> (no fault required), <strong>joint and several</strong> (any one PRP can be held liable for the entire cost when harm is indivisible), and <strong>retroactive</strong> (applies to disposal that occurred before 1980). This is why a buyer can inherit cleanup liability simply by purchasing property.</p>
<h3>The Superfund process</h3>
<ul>
<li><strong>Preliminary Assessment / Site Inspection (PA/SI)</strong> — initial evaluation.</li>
<li><strong>Hazard Ranking System (HRS)</strong> — sites scoring 28.50 or higher are eligible for the <strong>National Priorities List (NPL)</strong>.</li>
<li><strong>Remedial Investigation / Feasibility Study (RI/FS)</strong> — characterize the site and evaluate cleanup alternatives.</li>
<li><strong>Record of Decision (ROD)</strong> — documents the selected remedy.</li>
<li><strong>Remedial Design / Remedial Action (RD/RA)</strong>, then operation and maintenance and five-year reviews.</li>
<li><strong>Removal actions</strong> — shorter-term responses to more immediate threats.</li>
</ul>
<p>The rules for response actions are in the <strong>National Contingency Plan (NCP)</strong>, 40 CFR Part 300.</p>
<h3>Landowner liability protections</h3>
<p>The 2002 Small Business Liability Relief and Brownfields Revitalization Act (the "Brownfields Amendments") added or clarified defenses for landowners who did not cause contamination:</p>
<div class="tbl-wrap"><table>
<tr><th>Protection</th><th>Who</th></tr>
<tr><td><strong>Bona fide prospective purchaser (BFPP)</strong></td><td>Acquires property after January 11, 2002, knowing (or not) of contamination, and meets statutory requirements</td></tr>
<tr><td><strong>Contiguous property owner (CPO)</strong></td><td>Owns property contaminated by migration from an adjacent source they are not responsible for</td></tr>
<tr><td><strong>Innocent landowner</strong></td><td>Acquired property without knowing, and with no reason to know, of contamination</td></tr>
</table></div>
<p>All three require that the party conducted <strong>All Appropriate Inquiries (AAI)</strong> before acquisition — the federal standard at <strong>40 CFR Part 312</strong>, satisfied in practice by an ASTM E1527-21 Phase I ESA — and that they comply with <strong>continuing obligations</strong> after acquisition, such as taking reasonable steps to stop continuing releases, cooperating with response actions, complying with land use restrictions, and not impeding institutional controls. Module 8 covers AAI in depth.</p>
`,
      check: [
        { type: "multi", q: "Which are classes of CERCLA potentially responsible parties? Select all that apply.", options: ["Current owners and operators", "Owners/operators at the time of disposal", "Arrangers (generators)", "Transporters who selected the site", "Neighbors downwind"], answer: [0, 1, 2, 3], explain: "CERCLA § 107 names four PRP classes; neighbors are not a class." },
        { type: "tf", q: "Petroleum is generally excluded from CERCLA's definition of hazardous substance.", answer: true, explain: "The petroleum exclusion removes crude oil and fractions not specifically listed." }
      ]
    },
    {
      title: "RCRA: hazardous waste, solid waste, and USTs",
      html: `
<p>The <strong>Resource Conservation and Recovery Act</strong> (RCRA, 1976) governs the management of wastes being generated now — "cradle to grave" — whereas CERCLA addresses past contamination. RCRA has three subtitles you will encounter:</p>
<ul>
<li><strong>Subtitle C</strong> — hazardous waste.</li>
<li><strong>Subtitle D</strong> — non-hazardous solid waste, including municipal solid waste landfills (40 CFR Part 258).</li>
<li><strong>Subtitle I</strong> — underground storage tanks (USTs) containing petroleum or hazardous substances (40 CFR Part 280), added in 1984.</li>
</ul>
<h3>Is it a hazardous waste?</h3>
<p>First, it must be a <strong>solid waste</strong> — a discarded material (it can be solid, liquid, or contained gas). Then it is hazardous if it is <strong>listed</strong> or exhibits a <strong>characteristic</strong>:</p>
<div class="tbl-wrap"><table>
<tr><th>Listed wastes</th><th>Description</th></tr>
<tr><td>F-list</td><td>Wastes from non-specific sources — e.g., F001–F005 spent solvents (such as spent PCE and TCE degreasing solvents)</td></tr>
<tr><td>K-list</td><td>Wastes from specific industrial sources</td></tr>
<tr><td>P-list</td><td>Acutely hazardous discarded commercial chemical products</td></tr>
<tr><td>U-list</td><td>Toxic discarded commercial chemical products</td></tr>
</table></div>
<div class="tbl-wrap"><table>
<tr><th>Characteristic</th><th>Code</th><th>Test</th></tr>
<tr><td>Ignitability</td><td>D001</td><td>Liquids with flash point below 60 °C (140 °F), among other criteria</td></tr>
<tr><td>Corrosivity</td><td>D002</td><td>Aqueous pH ≤ 2 or ≥ 12.5</td></tr>
<tr><td>Reactivity</td><td>D003</td><td>Unstable, reacts violently with water, generates toxic gases</td></tr>
<tr><td>Toxicity</td><td>D004–D043</td><td><strong>TCLP</strong> (Toxicity Characteristic Leaching Procedure, EPA Method 1311) leachate exceeds regulatory levels — e.g., lead 5.0 mg/L, benzene 0.5 mg/L, arsenic 5.0 mg/L, mercury 0.2 mg/L</td></tr>
</table></div>
<p>Because the TCLP extraction dilutes the sample 20 to 1, a common screening rule of thumb is the "<strong>20 times rule</strong>": if the total concentration in soil (mg/kg) divided by 20 is below the TCLP limit (mg/L), the waste cannot fail TCLP for that constituent.</p>
<h3>Contaminated media</h3>
<p>Under EPA's "contained-in" policy, environmental media (soil, groundwater) that contain a listed hazardous waste are managed as hazardous waste until they no longer contain it. Soil from a dry cleaner site contaminated by spent PCE may carry an F002 listing — a major cost driver.</p>
<h3>Generator categories (per calendar month)</h3>
<div class="tbl-wrap"><table>
<tr><th>Category</th><th>Hazardous waste generated</th></tr>
<tr><td>Very Small Quantity Generator (VSQG)</td><td>≤ 100 kg (and ≤ 1 kg acute hazardous waste)</td></tr>
<tr><td>Small Quantity Generator (SQG)</td><td>&gt; 100 kg and &lt; 1,000 kg</td></tr>
<tr><td>Large Quantity Generator (LQG)</td><td>≥ 1,000 kg (or &gt; 1 kg acute hazardous waste)</td></tr>
</table></div>
<p>Hazardous waste shipments require an EPA identification number and the <strong>Uniform Hazardous Waste Manifest</strong> (tracked electronically through EPA's e-Manifest system) to a permitted Treatment, Storage, and Disposal Facility (TSDF). Land disposal restrictions require treatment before land disposal. RCRA <strong>corrective action</strong> requires cleanup of releases at permitted or interim-status facilities.</p>
<div class="mnemonic">Characteristics are "<strong>I C R T</strong>" — "<strong>I</strong> <strong>C</strong>an't <strong>R</strong>eally <strong>T</strong>ouch it": Ignitable, Corrosive, Reactive, Toxic.</div>
`,
      check: [
        { type: "mc", q: "A waste with an aqueous pH of 1.5 is hazardous for which characteristic?", options: ["Ignitability (D001)", "Corrosivity (D002)", "Reactivity (D003)", "Toxicity (D004–D043)"], answer: 1, explain: "pH ≤ 2 or ≥ 12.5 is corrosive (D002)." },
        { type: "num", q: "Using the 20-times rule, what is the maximum total lead concentration in soil (mg/kg) that cannot possibly fail the TCLP lead limit of 5.0 mg/L?", answer: 100, tol: 0, unit: "mg/kg", explain: "5.0 mg/L × 20 = 100 mg/kg. Above that, TCLP testing is needed to determine whether it fails." },
        { type: "mc", q: "A facility generates 450 kg of hazardous waste per month. Its generator category is:", options: ["VSQG", "SQG", "LQG", "Exempt"], answer: 1, explain: "Between 100 and 1,000 kg/month is a Small Quantity Generator." }
      ]
    },
    {
      title: "Water and air: CWA, SDWA, and CAA programs",
      html: `
<h3>Clean Water Act (CWA, 1972)</h3>
<ul>
<li><strong>NPDES (Section 402)</strong> — permits for point-source discharges to surface waters, including stormwater from construction sites and industrial facilities. In Wisconsin this is WPDES; the construction site stormwater general permit applies to land disturbance of one acre or more.</li>
<li><strong>Section 404</strong> — permits from the U.S. Army Corps of Engineers for discharge of dredged or fill material into waters of the United States, including many wetlands.</li>
<li><strong>Section 401</strong> — state water quality certification for federally permitted activities.</li>
<li><strong>Section 303(d)</strong> — states list impaired waters and develop Total Maximum Daily Loads (TMDLs).</li>
<li><strong>Spill Prevention, Control, and Countermeasure (SPCC)</strong> rule (40 CFR Part 112) — facilities with aboveground oil storage capacity greater than 1,320 gallons (counting containers of 55 gallons or more), or completely buried capacity greater than 42,000 gallons, that could reasonably discharge to navigable waters must prepare an SPCC plan.</li>
</ul>
<p>The scope of "waters of the United States" (WOTUS) has been repeatedly redefined by regulation and by the courts (most recently the Supreme Court's 2023 <em>Sackett v. EPA</em> decision). Wisconsin regulates wetlands and waterways under state law regardless of federal jurisdiction, so a wetland outside federal jurisdiction can still require a DNR permit.</p>
<h3>Safe Drinking Water Act (SDWA, 1974)</h3>
<p>The SDWA regulates public water systems. EPA sets <strong>Maximum Contaminant Levels (MCLs)</strong> — enforceable limits — and non-enforceable health goals (MCLGs). For example, the benzene and TCE MCLs are 5 µg/L. Wisconsin implements the SDWA for public water systems (NR 809). In 2024 EPA promulgated national primary drinking water regulations for certain PFAS; parts of that rule have since been subject to reconsideration, so check the current status before citing PFAS MCLs. The SDWA also governs underground injection control (UIC) — relevant when injecting remediation amendments.</p>
<h3>Clean Air Act (CAA, 1970; major amendments 1990)</h3>
<ul>
<li>National Ambient Air Quality Standards (NAAQS) and air permits for emission sources (state-administered in Wisconsin).</li>
<li><strong>National Emission Standards for Hazardous Air Pollutants (NESHAP)</strong> — the <strong>asbestos NESHAP</strong> (40 CFR Part 61, Subpart M) requires a thorough inspection for asbestos before demolition or renovation of regulated facilities, and written notification to the regulator at least <strong>10 working days</strong> before demolition (and before renovation removing threshold amounts of regulated asbestos-containing material). In Wisconsin the DNR administers the asbestos NESHAP (NR 447), and DHS certifies asbestos professionals.</li>
<li>Remediation systems (soil vapor extraction, air strippers) may need air permits or exemptions.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Which agency issues Clean Water Act Section 404 permits?", options: ["EPA", "U.S. Army Corps of Engineers", "Wisconsin DNR only", "FEMA"], answer: 1, explain: "USACE issues Section 404 dredge-and-fill permits." },
        { type: "mc", q: "Under the asbestos NESHAP, notification is required before demolition of a regulated facility at least:", options: ["24 hours", "5 working days", "10 working days", "30 days"], answer: 2, explain: "10 working days' advance notification is required." }
      ]
    },
    {
      title: "TSCA, EPCRA, and other statutes you'll bump into",
      html: `
<h3>Toxic Substances Control Act (TSCA, 1976)</h3>
<p>TSCA regulates chemical substances, and two TSCA programs touch consulting directly:</p>
<ul>
<li><strong>PCBs (40 CFR Part 761)</strong>. Polychlorinated biphenyls were banned from manufacture in 1979 but remain in old transformers, capacitors, hydraulic oils, caulk, and paints. Under TSCA, PCB remediation waste at concentrations of <strong>50 ppm</strong> or greater is regulated. The self-implementing cleanup option (40 CFR 761.61(a)) sets cleanup levels by occupancy: for example, ≤ 1 ppm in high-occupancy areas without further conditions, and ≤ 25 ppm in low-occupancy areas (with higher levels allowed under specified caps or fencing). EPA Region 5 oversees TSCA PCB cleanups in Wisconsin.</li>
<li><strong>Lead-based paint</strong> rules, including the Renovation, Repair and Painting (RRP) rule for pre-1978 housing and child-occupied facilities.</li>
</ul>
<h3>EPCRA</h3>
<p>The <strong>Emergency Planning and Community Right-to-Know Act</strong> (SARA Title III, 1986) requires facilities to report hazardous chemical inventories (Tier II) and certain toxic chemical releases (the Toxics Release Inventory, TRI). Tier II and TRI records are useful in Phase I ESAs to understand what chemicals a facility used.</p>
<h3>Oil Pollution Act (OPA, 1990)</h3>
<p>Expanded oil spill prevention and response requirements following the Exxon Valdez spill; works alongside the SPCC rule.</p>
<h3>Other federal requirements that affect projects</h3>
<ul>
<li><strong>Endangered Species Act</strong> — Section 7 consultation for federal actions; can restrict timing of tree clearing (e.g., protected bat species).</li>
<li><strong>National Historic Preservation Act Section 106</strong> — review of effects on historic properties for federal undertakings (federal funding or permits).</li>
<li><strong>FIFRA</strong> — pesticide registration and use; legacy pesticide contamination appears at agricultural and orchard properties.</li>
</ul>
<h3>Putting it together</h3>
<div class="tbl-wrap"><table>
<tr><th>Situation</th><th>Primary federal hook</th></tr>
<tr><td>Buyer wants liability protection for an old industrial property</td><td>CERCLA BFPP + AAI (40 CFR 312)</td></tr>
<tr><td>Contaminated soil being shipped off site</td><td>RCRA (is it hazardous waste?), plus state solid waste rules</td></tr>
<tr><td>Filling a wetland for a parking lot</td><td>CWA Section 404 (USACE) and state wetland rules</td></tr>
<tr><td>Demolishing an old school before redevelopment</td><td>CAA asbestos NESHAP; TSCA lead and PCB rules for building materials</td></tr>
<tr><td>Old transformer pad with stained soil</td><td>TSCA PCB rules</td></tr>
<tr><td>Construction site disturbing 3 acres</td><td>CWA NPDES/WPDES construction stormwater permit</td></tr>
</table></div>
`,
      check: [
        { type: "mc", q: "PCB remediation waste is regulated under TSCA at concentrations of:", options: ["≥ 1 ppm", "≥ 10 ppm", "≥ 50 ppm", "≥ 500 ppm"], answer: 2, explain: "TSCA regulates PCB remediation waste at ≥ 50 ppm." },
        { type: "mc", q: "Tier II chemical inventory reports are required under:", options: ["RCRA", "EPCRA", "CWA", "TSCA"], answer: 1, explain: "EPCRA (SARA Title III) requires Tier II reporting." }
      ]
    }
  ],
  terms: [
    { term: "CFR", def: "Code of Federal Regulations; environmental rules are mainly in Title 40." },
    { term: "Federal Register", def: "Daily publication where federal agencies propose and finalize regulations." },
    { term: "NEPA", def: "National Environmental Policy Act (1970): federal agencies must evaluate environmental effects of major actions (CatEx, EA/FONSI, or EIS)." },
    { term: "CERCLA", def: "Comprehensive Environmental Response, Compensation, and Liability Act (1980), 'Superfund': addresses releases of hazardous substances; strict, joint and several, retroactive liability." },
    { term: "SARA", def: "Superfund Amendments and Reauthorization Act (1986); amended CERCLA and created EPCRA (Title III)." },
    { term: "PRP", def: "Potentially responsible party under CERCLA: current owners/operators, owners/operators at time of disposal, arrangers, and transporters." },
    { term: "Joint and several liability", def: "Any one liable party can be held responsible for the entire cleanup cost when the harm is indivisible." },
    { term: "Petroleum exclusion", def: "CERCLA's exclusion of petroleum and its fractions from the definition of hazardous substance unless specifically listed." },
    { term: "NPL", def: "National Priorities List: the federal list of Superfund sites; eligibility based on a Hazard Ranking System score ≥ 28.50." },
    { term: "RI/FS", def: "Remedial Investigation / Feasibility Study: characterization and remedy evaluation phase under CERCLA." },
    { term: "ROD", def: "Record of Decision: document selecting the remedy at a Superfund site." },
    { term: "NCP", def: "National Contingency Plan, 40 CFR Part 300: the rules for CERCLA response actions." },
    { term: "BFPP", def: "Bona fide prospective purchaser: CERCLA liability protection for buyers acquiring after Jan. 11, 2002 who conduct AAI and meet continuing obligations." },
    { term: "Contiguous property owner", def: "CERCLA protection for owners whose property is contaminated by migration from an adjoining source they did not cause." },
    { term: "Innocent landowner defense", def: "CERCLA defense for a buyer who did not know and had no reason to know of contamination after conducting AAI." },
    { term: "All Appropriate Inquiries (AAI)", def: "Federal pre-acquisition inquiry standard at 40 CFR Part 312; met by an ASTM E1527-21 Phase I ESA." },
    { term: "Continuing obligations (CERCLA)", def: "Post-acquisition duties for landowner protections: reasonable steps, cooperation, compliance with land use restrictions, etc." },
    { term: "RCRA", def: "Resource Conservation and Recovery Act (1976): cradle-to-grave management of solid and hazardous waste (Subtitles C, D) and USTs (Subtitle I)." },
    { term: "Listed hazardous waste", def: "Wastes on RCRA's F, K, P, or U lists." },
    { term: "Characteristic hazardous waste", def: "Waste exhibiting ignitability (D001), corrosivity (D002), reactivity (D003), or toxicity (D004–D043)." },
    { term: "TCLP", def: "Toxicity Characteristic Leaching Procedure (EPA Method 1311): simulates landfill leaching to test for the toxicity characteristic." },
    { term: "20 times rule", def: "Screening rule: if total concentration (mg/kg) ÷ 20 is below the TCLP limit (mg/L), the waste cannot fail TCLP for that constituent." },
    { term: "Contained-in policy", def: "EPA policy that environmental media containing listed hazardous waste must be managed as hazardous waste until they no longer contain it." },
    { term: "VSQG / SQG / LQG", def: "Hazardous waste generator categories: ≤100 kg/month; >100 to <1,000 kg/month; ≥1,000 kg/month (or >1 kg acute)." },
    { term: "Uniform Hazardous Waste Manifest", def: "Shipping document tracking hazardous waste from generator to TSDF; tracked through EPA e-Manifest." },
    { term: "TSDF", def: "Treatment, Storage, and Disposal Facility permitted under RCRA." },
    { term: "NPDES / WPDES", def: "Clean Water Act Section 402 discharge permit program / its Wisconsin-administered counterpart." },
    { term: "Section 404", def: "CWA program regulating discharge of dredged or fill material into waters of the U.S., permitted by USACE." },
    { term: "SPCC", def: "Spill Prevention, Control, and Countermeasure plan (40 CFR 112) for facilities with >1,320 gal aboveground or >42,000 gal buried oil storage capacity." },
    { term: "MCL", def: "Maximum Contaminant Level: enforceable SDWA drinking water standard for public water systems." },
    { term: "Asbestos NESHAP", def: "40 CFR 61 Subpart M: requires inspection before demolition/renovation and 10-working-day notification; administered in Wisconsin by DNR (NR 447)." },
    { term: "TSCA PCB rules", def: "40 CFR Part 761: regulate PCBs; remediation waste regulated at ≥50 ppm; self-implementing cleanup levels by occupancy." },
    { term: "EPCRA", def: "Emergency Planning and Community Right-to-Know Act: Tier II chemical inventories and Toxics Release Inventory reporting." }
  ],
  resources: [
    { title: "EPA — Superfund: CERCLA overview", url: "https://www.epa.gov/superfund/superfund-cercla-overview", note: "Statute summary and liability" },
    { title: "EPA — Brownfields: landowner liability protections", url: "https://www.epa.gov/enforcement/brownfields-enforcement", note: "BFPP, contiguous owner, innocent landowner" },
    { title: "eCFR — 40 CFR Part 312 (All Appropriate Inquiries)", url: "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-J/part-312", note: "AAI standard" },
    { title: "EPA — Defining Hazardous Waste", url: "https://www.epa.gov/hw/defining-hazardous-waste-listed-characteristic-and-mixed-radiological-wastes", note: "Listed and characteristic wastes" },
    { title: "EPA — Hazardous Waste Generator Categories", url: "https://www.epa.gov/hwgenerators/categories-hazardous-waste-generators", note: "VSQG, SQG, LQG" },
    { title: "EPA — Oil Spill Prevention (SPCC)", url: "https://www.epa.gov/oil-spills-prevention-and-preparedness-regulations", note: "40 CFR 112" },
    { title: "EPA — Asbestos NESHAP", url: "https://www.epa.gov/asbestos/asbestos-neshap", note: "Demolition and renovation requirements" },
    { title: "EPA — PCBs", url: "https://www.epa.gov/pcbs", note: "TSCA PCB regulations and cleanup" },
    { title: "EPA — National Primary Drinking Water Regulations", url: "https://www.epa.gov/ground-water-and-drinking-water/national-primary-drinking-water-regulations", note: "MCLs" },
    { title: "eCFR — Title 40", url: "https://www.ecfr.gov/current/title-40", note: "Full text of federal environmental regulations" }
  ],
  teach: [
    { prompt: "A client is buying a former machine shop and says, 'I didn't put anything in the ground, so I can't be liable.' Explain why that's wrong under CERCLA and what they must do to protect themselves.",
      model: "<p>Under CERCLA, current owners are PRPs regardless of fault; liability is strict, joint and several, and retroactive. Simply buying contaminated property can make the buyer liable. To qualify as a bona fide prospective purchaser, the buyer must conduct All Appropriate Inquiries (40 CFR 312, met by an ASTM E1527-21 Phase I ESA) before acquisition, and after acquisition meet continuing obligations: take reasonable steps to stop continuing releases and prevent exposure, cooperate with response actions, comply with land use restrictions and institutional controls, provide required notices, and not be affiliated with a liable party. Wisconsin's spill law adds separate state liability considerations.</p>" },
    { prompt: "Explain how you would decide whether a stockpile of excavated soil from a former dry cleaner is a RCRA hazardous waste.",
      model: "<p>First, excavated soil being discarded is a solid waste. Then check listed wastes: if the PCE came from spent dry-cleaning solvent (an F-listed spent solvent such as F002), the contained-in policy means the soil is managed as listed hazardous waste while it contains it, unless the regulator determines otherwise. Next evaluate characteristics: toxicity by TCLP (PCE limit 0.7 mg/L), using the 20-times rule as a screen on total results, plus ignitability, corrosivity, and reactivity if relevant. Document the waste determination with lab data and site history, and coordinate with the DNR and the receiving facility.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Which document type is legally binding and published in the CFR?", options: ["Statute", "Regulation", "Guidance", "Fact sheet"], answer: 1, explain: "Regulations are codified in the CFR. Statutes are in the U.S. Code." },
      { type: "mc", q: "An EA under NEPA ends in either an EIS or a:", options: ["ROD", "FONSI", "NFA letter", "COC"], answer: 1, explain: "A Finding of No Significant Impact (FONSI) or a determination to prepare an EIS." },
      { type: "mc", q: "CERCLA was enacted in:", options: ["1970", "1976", "1980", "1986"], answer: 2, explain: "CERCLA: 1980. SARA: 1986. RCRA: 1976. NEPA: 1970." },
      { type: "mc", q: "'Strict' liability under CERCLA means:", options: ["Liability only if negligent", "Liability without regard to fault", "Liability only for intentional acts", "Criminal liability"], answer: 1, explain: "Strict liability does not require fault." },
      { type: "mc", q: "A company that arranged for its drums to be disposed of at a site is which type of PRP?", options: ["Current owner", "Operator", "Arranger", "Transporter"], answer: 2, explain: "Generators who arranged disposal are arrangers." },
      { type: "mc", q: "What HRS score makes a site eligible for the NPL?", options: ["≥ 10.00", "≥ 28.50", "≥ 50.00", "≥ 75.00"], answer: 1, explain: "HRS score of 28.50 or greater." },
      { type: "mc", q: "Which CERCLA document records the selected remedy?", options: ["RI/FS", "ROD", "PA/SI", "NCP"], answer: 1, explain: "Record of Decision." },
      { type: "mc", q: "To qualify as a BFPP, a purchaser must have acquired the property after:", options: ["December 11, 1980", "October 17, 1986", "January 11, 2002", "November 1, 2006"], answer: 2, explain: "The Brownfields Amendments were enacted January 11, 2002." },
      { type: "mc", q: "AAI regulations are found at:", options: ["40 CFR 261", "40 CFR 280", "40 CFR 300", "40 CFR 312"], answer: 3, explain: "40 CFR Part 312." },
      { type: "tf", q: "A BFPP has no obligations after acquiring the property.", answer: false, explain: "BFPPs must meet continuing obligations (reasonable steps, cooperation, compliance with land use restrictions, etc.)." },
      { type: "mc", q: "Which pair of PFAS were designated CERCLA hazardous substances in 2024?", options: ["GenX and PFBS", "PFOA and PFOS", "PFHxS and PFNA", "PFBA and PFHxA"], answer: 1, explain: "EPA designated PFOA and PFOS." },
      { type: "mc", q: "RCRA Subtitle I regulates:", options: ["Hazardous waste", "Municipal landfills", "Underground storage tanks", "Medical waste"], answer: 2, explain: "Subtitle I covers USTs." },
      { type: "mc", q: "Spent PCE degreasing solvent is an example of which RCRA listing?", options: ["F-list", "K-list", "P-list", "U-list"], answer: 0, explain: "Spent halogenated solvents are F-listed (F001/F002)." },
      { type: "mc", q: "A liquid with a flash point of 120 °F is hazardous for:", options: ["Ignitability", "Corrosivity", "Reactivity", "Not hazardous"], answer: 0, explain: "Flash point below 140 °F (60 °C) is ignitable (D001)." },
      { type: "mc", q: "The TCLP regulatory level for lead is:", options: ["0.2 mg/L", "1.0 mg/L", "5.0 mg/L", "100 mg/L"], answer: 2, explain: "Lead (D008) = 5.0 mg/L." },
      { type: "mc", q: "The TCLP regulatory level for benzene is:", options: ["0.005 mg/L", "0.5 mg/L", "5.0 mg/L", "50 mg/L"], answer: 1, explain: "Benzene (D018) = 0.5 mg/L." },
      { type: "num", q: "Soil has 40 mg/kg total arsenic. Using the 20-times rule, what is the maximum possible TCLP arsenic concentration (mg/L)?", answer: 2, tol: 0, unit: "mg/L", explain: "40 ÷ 20 = 2.0 mg/L, below the 5.0 mg/L limit, so it cannot fail for arsenic." },
      { type: "mc", q: "A facility that generates 1,200 kg/month of hazardous waste is a:", options: ["VSQG", "SQG", "LQG", "Transporter"], answer: 2, explain: "≥ 1,000 kg/month is LQG." },
      { type: "mc", q: "Which document accompanies hazardous waste shipments to a TSDF?", options: ["Bill of lading", "Uniform Hazardous Waste Manifest", "Chain of custody", "SDS"], answer: 1, explain: "The manifest tracks hazardous waste cradle to grave." },
      { type: "mc", q: "Under the 'contained-in' policy, soil containing a listed hazardous waste is:", options: ["Never hazardous", "Managed as hazardous waste until it no longer contains the waste", "Always non-hazardous after excavation", "Regulated under TSCA"], answer: 1, explain: "Environmental media are managed as hazardous waste while they contain listed waste." },
      { type: "mc", q: "A WPDES construction site stormwater permit is generally required for land disturbance of:", options: ["Any size", "≥ 1 acre", "≥ 5 acres", "≥ 10 acres"], answer: 1, explain: "One acre or more triggers construction stormwater permitting." },
      { type: "mc", q: "SPCC plans are required for facilities with aggregate aboveground oil storage capacity greater than:", options: ["55 gallons", "660 gallons", "1,320 gallons", "42,000 gallons"], answer: 2, explain: ">1,320 gallons aboveground (counting containers ≥55 gal) or >42,000 gal completely buried." },
      { type: "mc", q: "Section 401 of the Clean Water Act involves:", options: ["Wetland fill permits", "State water quality certification for federal permits", "Impaired waters listing", "Drinking water"], answer: 1, explain: "Section 401 = state certification." },
      { type: "tf", q: "Because of federal WOTUS changes, a Wisconsin wetland outside federal jurisdiction never needs any permit to fill.", answer: false, explain: "Wisconsin regulates wetlands under state law regardless of federal jurisdiction." },
      { type: "mc", q: "The benzene MCL under the SDWA is:", options: ["0.5 µg/L", "5 µg/L", "50 µg/L", "500 µg/L"], answer: 1, explain: "5 µg/L — the same value as Wisconsin's NR 140 enforcement standard for benzene." },
      { type: "mc", q: "Which rule requires an asbestos inspection before demolition of a commercial building?", options: ["TSCA PCB rule", "Asbestos NESHAP (40 CFR 61 Subpart M)", "RCRA Subtitle C", "SPCC"], answer: 1, explain: "The asbestos NESHAP requires a thorough inspection before demolition or renovation." },
      { type: "mc", q: "In Wisconsin, the asbestos NESHAP is administered by:", options: ["DHS", "DNR", "DSPS", "OSHA"], answer: 1, explain: "DNR administers NESHAP (NR 447); DHS certifies asbestos workers and professionals." },
      { type: "mc", q: "Under TSCA's self-implementing option, the cleanup level for PCBs in high-occupancy areas without further conditions is:", options: ["≤ 1 ppm", "≤ 10 ppm", "≤ 25 ppm", "≤ 50 ppm"], answer: 0, explain: "≤ 1 ppm for high-occupancy areas without further conditions." },
      { type: "mc", q: "Which statute's Section 106 requires review of effects on historic properties for federal undertakings?", options: ["NEPA", "National Historic Preservation Act", "ESA", "CWA"], answer: 1, explain: "NHPA Section 106." },
      { type: "mc", q: "Which program would most directly apply to filling 0.5 acre of jurisdictional wetland?", options: ["RCRA Subtitle C", "CWA Section 404", "CAA NESHAP", "TSCA"], answer: 1, explain: "Filling waters of the U.S. requires a Section 404 permit (plus state permits)." }
    ]
  }
});
