COURSE.addModule({
  id: "m06",
  track: "t2",
  title: "Wisconsin's Environmental Cleanup Regulations",
  hours: 5,
  summary: "Wisconsin's spill law, the NR 700 rule series that governs every contaminated-site case from discovery to closure, the NR 140 groundwater and NR 720 soil standards, the DNR's tracking systems, and the related state programs you will encounter on brownfield projects.",
  objectives: [
    "Explain the Wisconsin hazardous substance discharge law (Wis. Stat. § 292.11): who is responsible, what must be reported, and how it differs from CERCLA.",
    "Navigate the NR 700 series by chapter and describe the path of a case from notification to closure.",
    "Apply NR 140 groundwater standards (ES and PAL) and describe how NR 720 residual contaminant levels are developed.",
    "Use BRRTS and the RR Sites Map vocabulary, including activity types and continuing obligations.",
    "Identify related Wisconsin rules for wells, borings, soil management, tanks, labs, and building materials."
  ],
  lessons: [
    {
      title: "The Wisconsin spill law",
      html: `
<p>Wisconsin's core cleanup statute is the <strong>Hazardous Substance Discharge Law</strong>, commonly called the "spill law," at <strong>Wis. Stat. § 292.11</strong>. It is the reason most Wisconsin contaminated sites are handled by the DNR rather than by EPA.</p>
<h3>The key duties</h3>
<ul>
<li><strong>Notify.</strong> A person who possesses or controls a hazardous substance that is discharged, or who causes the discharge, must <strong>notify the DNR immediately</strong>. The DNR's 24-hour spill hotline is <strong>1-800-943-0003</strong>. The notification rule, <strong>NR 706</strong>, includes limited exemptions for small, promptly cleaned-up spills of certain substances.</li>
<li><strong>Respond.</strong> The responsible person must take the actions necessary to <strong>restore the environment to the extent practicable</strong> and minimize harmful effects.</li>
</ul>
<h3>Key definitions that make it broad</h3>
<ul>
<li><strong>Hazardous substance</strong> is defined broadly and, unlike CERCLA, <strong>includes petroleum</strong>. That is why leaking gas station tanks are cleaned up under the same state law and rules as solvent spills.</li>
<li><strong>Discharge</strong> includes spilling, leaking, pumping, pouring, emitting, emptying, or dumping — and the DNR treats historical contamination that continues to affect the environment as a discharge requiring response.</li>
<li><strong>"Possesses or controls"</strong> has been interpreted to reach current property owners even when they did not cause the contamination (see <em>State v. Mauthe</em>, Wisconsin Supreme Court, 1985). Buying contaminated property in Wisconsin can therefore make you a responsible party under state law, independent of CERCLA — unless a statutory exemption applies (Module 11).</li>
</ul>
<h3>Spill law vs. CERCLA</h3>
<div class="tbl-wrap"><table>
<tr><th></th><th>CERCLA</th><th>Wisconsin spill law</th></tr>
<tr><td>Administered by</td><td>EPA</td><td>Wisconsin DNR</td></tr>
<tr><td>Petroleum</td><td>Excluded</td><td>Included</td></tr>
<tr><td>Responsible parties</td><td>Four PRP classes</td><td>Persons who possess or control the substance or caused the discharge (including current owners)</td></tr>
<tr><td>Owner protections</td><td>BFPP, contiguous owner, innocent landowner</td><td>VPLE, off-site discharge exemption, local government and lender exemptions, and others (Wis. Stat. ch. 292)</td></tr>
<tr><td>Typical sites</td><td>NPL and federal-lead sites</td><td>The vast majority of Wisconsin contaminated sites</td></tr>
</table></div>
<div class="callout warn"><strong>Consultants and the duty to report</strong>When your Phase II for a buyer finds contamination, the duty to report under § 292.11 falls on the person who possesses or controls the discharge (typically the property owner) — not automatically on the prospective buyer or the consultant. Your job is to tell your client promptly and clearly, in writing, so they can get legal advice and meet any reporting obligation. Firms have internal policies for this; know yours.</div>
`,
      check: [
        { type: "tf", q: "Wisconsin's spill law, like CERCLA, excludes petroleum from the definition of hazardous substance.", answer: false, explain: "Wisconsin's definition includes petroleum, which is why LUST sites fall under § 292.11 and the NR 700 rules." },
        { type: "mc", q: "When a hazardous substance discharge is discovered, Wisconsin law requires notification to the DNR:", options: ["Within 30 days", "Within 1 year", "Immediately", "Only if groundwater is affected"], answer: 2, explain: "§ 292.11 requires immediate notification (subject to NR 706 exemptions)." }
      ]
    },
    {
      title: "The NR 700 series: a chapter-by-chapter map",
      html: `
<p>The DNR implements the spill law and related statutes through the <strong>NR 700 rule series</strong> of the Wisconsin Administrative Code. You will cite these chapters constantly; memorize the most important ones.</p>
<div class="tbl-wrap"><table>
<tr><th>Chapter</th><th>Title / subject</th><th>What it does for you</th></tr>
<tr><td><strong>NR 700</strong></td><td>General provisions</td><td>Applicability, definitions, general reporting and submittal requirements</td></tr>
<tr><td><strong>NR 706</strong></td><td>Hazardous substance discharge notification</td><td>When and how to report discharges; exemptions</td></tr>
<tr><td><strong>NR 708</strong></td><td>Immediate and interim actions</td><td>Emergency responses and early actions (e.g., removing leaking drums, free product recovery)</td></tr>
<tr><td><strong>NR 712</strong></td><td>Personnel qualifications</td><td>Who may perform and certify the work</td></tr>
<tr><td><strong>NR 714</strong></td><td>Public information and participation</td><td>Public notice requirements</td></tr>
<tr><td><strong>NR 716</strong></td><td>Site investigations</td><td>Scope, work plans, and reports for defining the nature, degree, and extent of contamination</td></tr>
<tr><td><strong>NR 718</strong></td><td>Management of contaminated soil and other solid wastes excavated during response actions</td><td>Stockpiling, treatment, on-site reuse, and off-site disposal of contaminated soil</td></tr>
<tr><td><strong>NR 720</strong></td><td>Soil cleanup standards</td><td>Residual contaminant levels (RCLs) for soil</td></tr>
<tr><td><strong>NR 722</strong></td><td>Standards for selecting remedial actions</td><td>How to evaluate and choose a remedy</td></tr>
<tr><td><strong>NR 724</strong></td><td>Remedial and interim action design, implementation, operation, maintenance, and monitoring</td><td>Design reports, construction documentation, O&amp;M, monitoring</td></tr>
<tr><td><strong>NR 725</strong></td><td>Notification requirements for residual contamination and continuing obligations</td><td>Notifying affected property owners and right-of-way holders</td></tr>
<tr><td><strong>NR 726</strong></td><td>Case closure</td><td>Criteria and submittal for closure</td></tr>
<tr><td><strong>NR 727</strong></td><td>Continuing obligations after closure</td><td>Owner responsibilities for caps, vapor systems, and other conditions after closure</td></tr>
<tr><td><strong>NR 749</strong></td><td>Fees for providing assistance</td><td>Fee-based DNR technical assistance and reviews</td></tr>
</table></div>
<h3>The life of a typical case</h3>
<ol>
<li><strong>Discovery and notification</strong> (NR 706) → DNR opens a case in BRRTS and typically sends the responsible party a letter describing their obligations.</li>
<li><strong>Immediate or interim actions</strong> if needed (NR 708).</li>
<li><strong>Site investigation</strong> (NR 716): work plan, field investigation, site investigation report.</li>
<li><strong>Remedial action options report and selection</strong> (NR 722).</li>
<li><strong>Remedial design, implementation, and monitoring</strong> (NR 724); soil management under NR 718.</li>
<li><strong>Notifications</strong> to affected owners of residual contamination (NR 725).</li>
<li><strong>Closure request</strong> (NR 726), with any <strong>continuing obligations</strong> (NR 727) recorded on the DNR's public database.</li>
</ol>
<div class="mnemonic">The big four in order: <strong>716</strong> investigate → <strong>722</strong> choose → <strong>724</strong> build → <strong>726</strong> close. Standards are <strong>720</strong> (soil) and <strong>NR 140</strong> (groundwater). Soil you dig up is <strong>718</strong>.</div>
`,
      check: [
        { type: "mc", q: "Which chapter governs site investigations?", options: ["NR 706", "NR 716", "NR 720", "NR 726"], answer: 1, explain: "NR 716 sets site investigation requirements." },
        { type: "mc", q: "Contaminated soil excavated during a response action is managed under:", options: ["NR 708", "NR 712", "NR 718", "NR 727"], answer: 2, explain: "NR 718 covers management of excavated contaminated soil and other solid wastes." },
        { type: "mc", q: "Case closure requirements are found in:", options: ["NR 714", "NR 722", "NR 724", "NR 726"], answer: 3, explain: "NR 726 = case closure." }
      ]
    },
    {
      title: "Groundwater standards: NR 140",
      html: `
<p>Wisconsin's groundwater law (Wis. Stat. ch. 160) directs the DNR to set groundwater quality standards, which are in <strong>Wis. Admin. Code ch. NR 140</strong>. They apply to all groundwater in the state, not just drinking water aquifers.</p>
<h3>Two tiers: ES and PAL</h3>
<ul>
<li><strong>Enforcement Standard (ES)</strong> — the health- or welfare-based concentration that triggers enforcement and remedial response when exceeded at a point of standards application.</li>
<li><strong>Preventive Action Limit (PAL)</strong> — a lower, early-warning concentration. By statute, the PAL is a fraction of the ES: <strong>10%</strong> for substances with carcinogenic, mutagenic, or teratogenic properties; <strong>20%</strong> for other substances of public health concern; <strong>50%</strong> for substances of public welfare concern (aesthetic substances such as iron or chloride).</li>
</ul>
<p>NR 140 Table 1 lists public health standards; Table 2 lists public welfare (aesthetic) standards.</p>
<h3>Selected NR 140 standards (verify against the current rule)</h3>
<div class="tbl-wrap"><table>
<tr><th>Substance</th><th>ES (µg/L)</th><th>PAL (µg/L)</th></tr>
<tr><td>Benzene</td><td>5</td><td>0.5</td></tr>
<tr><td>Toluene</td><td>800</td><td>160</td></tr>
<tr><td>Ethylbenzene</td><td>700</td><td>140</td></tr>
<tr><td>Xylenes (total)</td><td>2,000</td><td>400</td></tr>
<tr><td>Methyl tert-butyl ether (MTBE)</td><td>60</td><td>12</td></tr>
<tr><td>Naphthalene</td><td>100</td><td>10</td></tr>
<tr><td>Tetrachloroethylene (PCE)</td><td>5</td><td>0.5</td></tr>
<tr><td>Trichloroethylene (TCE)</td><td>5</td><td>0.5</td></tr>
<tr><td>cis-1,2-Dichloroethylene</td><td>70</td><td>7</td></tr>
<tr><td>Vinyl chloride</td><td>0.2</td><td>0.02</td></tr>
<tr><td>Arsenic</td><td>10</td><td>1</td></tr>
<tr><td>Lead</td><td>15</td><td>1.5</td></tr>
<tr><td>Nitrate + nitrite (as N)</td><td>10,000 (10 mg/L)</td><td>2,000 (2 mg/L)</td></tr>
</table></div>
<p>Notice the pattern: benzene, PCE, TCE, vinyl chloride, and arsenic are carcinogens, so PAL = 10% of ES. Toluene, ethylbenzene, and xylenes are non-carcinogens of health concern, so PAL = 20% of ES.</p>
<h3>How exceedances are reported</h3>
<p>Tables in Wisconsin reports compare every result to both the PAL and the ES, with exceedances flagged using a consistent convention (the DNR and most firms use distinct formatting for PAL and ES exceedances). An ES exceedance in groundwater generally requires response; closure can still be possible with residual groundwater contamination above the ES if the plume is stable or receding and other NR 726 criteria are met, in which case the site carries a continuing obligation and is listed on the DNR's public database.</p>
<div class="mnemonic">Benzene's "5 and 0.5" is the anchor — PCE and TCE share it. Vinyl chloride is the outlier: <strong>0.2</strong> ES, <strong>0.02</strong> PAL.</div>
`,
      check: [
        { type: "num", q: "A carcinogen has an NR 140 ES of 30 µg/L. What is its PAL in µg/L?", answer: 3, tol: 0, unit: "µg/L", explain: "Carcinogens: PAL = 10% of ES = 3 µg/L." },
        { type: "mc", q: "A groundwater sample contains 2 µg/L benzene. Relative to NR 140 it:", options: ["Is below the PAL", "Exceeds the PAL but not the ES", "Exceeds the ES", "Cannot be compared"], answer: 1, explain: "Benzene PAL = 0.5, ES = 5. 2 µg/L is between them." }
      ]
    },
    {
      title: "Soil standards (NR 720), vapor, and other media",
      html: `
<h3>NR 720 residual contaminant levels (RCLs)</h3>
<p>Wisconsin does not use a single soil number per chemical. NR 720 requires that soil cleanup be protective of the relevant <strong>pathways</strong>:</p>
<ul>
<li><strong>Direct contact</strong> — protects people from ingestion, skin contact, and inhalation of soil. RCLs differ for <strong>non-industrial</strong> and <strong>industrial</strong> land use; non-industrial values are more stringent. Direct contact generally applies to the upper 4 feet of soil.</li>
<li><strong>Groundwater pathway</strong> (soil-to-groundwater) — protects groundwater from contaminants leaching out of soil, so groundwater does not exceed NR 140 standards.</li>
</ul>
<p>RCLs may be determined using the DNR's methodology based on EPA's Regional Screening Level (RSL) calculations, and the DNR publishes an <strong>RCL spreadsheet</strong> that is updated periodically. Direct-contact RCLs target an excess lifetime cancer risk of 1 in 1,000,000 (10⁻⁶) for individual carcinogens and a hazard quotient of 1 for non-carcinogens, and the rule also limits cumulative risk from multiple contaminants (10⁻⁵ cumulative cancer risk and a hazard index of 1). Site-specific RCLs can be developed with DNR approval.</p>
<p><strong>Background</strong> matters: some metals, notably arsenic, occur naturally in Wisconsin soils at concentrations that can exceed the risk-based direct-contact RCL. Background concentrations can be considered in setting cleanup goals.</p>
<p>When soil above direct-contact RCLs remains at closure, it is typically addressed with a <strong>cap</strong> or cover maintained as a <strong>continuing obligation</strong>; residual soil that threatens groundwater must be addressed through the groundwater pathway evaluation.</p>
<h3>Vapor intrusion</h3>
<p>Volatile contaminants in soil or groundwater can migrate as vapor into buildings. The DNR's vapor intrusion guidance (publication <strong>RR-800</strong>, "Addressing Vapor Intrusion at Remediation &amp; Redevelopment Sites in Wisconsin") describes when to evaluate the pathway, how to sample sub-slab vapor and indoor air, and how to compare results to <strong>vapor action levels</strong> derived from EPA methodology. Chlorinated solvents (PCE, TCE) drive most vapor intrusion concern because they are toxic at low concentrations and do not biodegrade readily in aerobic conditions; TCE also has short-term (developmental) toxicity concerns that can require rapid action. Mitigation is usually a <strong>sub-slab depressurization</strong> system, maintained as a continuing obligation.</p>
<h3>Other media</h3>
<ul>
<li><strong>Surface water</strong> — water quality standards in NR 102 and toxic substance criteria in NR 105.</li>
<li><strong>Sediment</strong> — evaluated with consensus-based sediment quality guidelines and DNR guidance.</li>
<li><strong>Drinking water</strong> — NR 809 standards for public water systems; private well sampling near contaminated sites is common.</li>
</ul>
`,
      check: [
        { type: "multi", q: "Which pathways do NR 720 soil RCLs address? Select all that apply.", options: ["Direct contact", "Protection of groundwater", "Noise", "Aesthetics only"], answer: [0, 1], explain: "NR 720 RCLs are pathway-based: direct contact and groundwater protection." },
        { type: "tf", q: "Non-industrial direct contact RCLs are generally more stringent (lower) than industrial RCLs.", answer: true, explain: "Non-industrial (residential-type) exposure assumptions are more conservative." }
      ]
    },
    {
      title: "BRRTS, the RR Sites Map, and continuing obligations",
      html: `
<h3>Tracking systems</h3>
<p>The DNR tracks contaminated sites in the <strong>Bureau for Remediation and Redevelopment Tracking System (BRRTS)</strong>. Each case receives a BRRTS activity number. The public can search case files through <strong>BRRTS on the Web</strong> and view sites spatially on the <strong>RR Sites Map</strong>. These are among the first places you look in any Wisconsin Phase I ESA.</p>
<h3>Common BRRTS activity types</h3>
<div class="tbl-wrap"><table>
<tr><th>Activity type</th><th>Meaning</th></tr>
<tr><td><strong>LUST</strong></td><td>Leaking Underground Storage Tank — petroleum contamination from a UST system</td></tr>
<tr><td><strong>ERP</strong></td><td>Environmental Repair Program — contamination from sources other than LUSTs (e.g., spills of solvents, historic industrial operations, landfills not otherwise regulated)</td></tr>
<tr><td><strong>Spills</strong></td><td>Recent discharges typically cleaned up quickly</td></tr>
<tr><td><strong>VPLE</strong></td><td>Voluntary Party Liability Exemption — a property going through the voluntary process for a Certificate of Completion</td></tr>
<tr><td><strong>NAR</strong></td><td>No Action Required — a discharge reported but determined to need no further action</td></tr>
<tr><td><strong>Abandoned container</strong></td><td>Abandoned drums or containers</td></tr>
</table></div>
<p>Each activity has a status: <strong>open</strong> (investigation or cleanup ongoing), <strong>closed</strong> (DNR has approved closure), and other administrative statuses. A "closed" case is not the same as "clean": many closures carry continuing obligations.</p>
<h3>Continuing obligations</h3>
<p>When a site is closed with contamination left in place, the DNR imposes <strong>continuing obligations</strong> that run with the property and bind current and future owners. Common examples:</p>
<ul>
<li>Maintain a <strong>cap</strong> (pavement, building, clean soil cover) over residual soil contamination.</li>
<li>Operate and maintain a <strong>vapor mitigation system</strong>, or install one if a building is constructed.</li>
<li>Do not construct a water supply well without DNR approval where <strong>residual groundwater contamination</strong> exceeds the ES.</li>
<li>Manage soil properly if residual contaminated soil is excavated in the future.</li>
<li>Restrictions to <strong>industrial land use</strong> when closure relied on industrial RCLs.</li>
</ul>
<p>These are documented in the closure letter and shown on the RR Sites Map and in BRRTS, giving future buyers notice. Under NR 725, the responsible party must notify other affected property owners and right-of-way holders (for example, a city whose street overlies a plume) before closure.</p>
<div class="callout"><strong>Why brownfield developers care</strong>A redevelopment that removes a cap, adds a basement, or changes from industrial to residential use may violate continuing obligations or require DNR approval and additional work. Reviewing the closure letter is essential in due diligence.</div>
`,
      check: [
        { type: "mc", q: "In BRRTS, contamination from a former dry cleaner's solvent use would typically be which activity type?", options: ["LUST", "ERP", "NAR", "VPLE only"], answer: 1, explain: "Non-UST contamination is tracked as ERP (unless the property is in the VPLE process)." },
        { type: "tf", q: "A 'closed' BRRTS case means no contamination remains on the property.", answer: false, explain: "Closure can be granted with residual contamination managed by continuing obligations." }
      ]
    },
    {
      title: "Related Wisconsin rules you'll use in the field",
      html: `
<h3>Wells, borings, and forms</h3>
<ul>
<li><strong>NR 141</strong> — groundwater monitoring well requirements: design, installation, development, and abandonment. Wells are documented on DNR forms, including <strong>Form 4400-113A</strong> (Monitoring Well Construction) and <strong>Form 4400-113B</strong> (Monitoring Well Development). Abandoned wells and boreholes are documented on <strong>Form 3300-005</strong> (Well/Drillhole/Borehole Filling &amp; Sealing).</li>
<li><strong>Form 4400-122</strong> — Soil Boring Log Information, the DNR's standard boring log format for environmental borings.</li>
<li><strong>NR 812</strong> — well construction and pump installation for water supply wells, including filling and sealing of unused wells.</li>
</ul>
<p>Check the DNR's forms page for current versions before field work.</p>
<h3>Soil and waste</h3>
<ul>
<li><strong>NR 718</strong> — management of excavated contaminated soil during response actions.</li>
<li><strong>NR 500 series</strong> — solid waste management, including landfills. Wisconsin law also provides a process for DNR approval of certain low-hazard waste uses (Wis. Stat. § 289.43(8)).</li>
<li><strong>NR 660 series</strong> — Wisconsin's hazardous waste rules (the state's authorized RCRA program).</li>
</ul>
<h3>Tanks and petroleum</h3>
<ul>
<li><strong>ATCP 93</strong> (DATCP) — design, operation, and closure of flammable, combustible, and hazardous liquid storage tanks, including site assessment at tank closure.</li>
<li><strong>PECFA</strong> (Petroleum Environmental Cleanup Fund Act) — a former reimbursement program for petroleum cleanup costs. It closed to new sites years ago, but you will see PECFA references throughout older LUST files.</li>
</ul>
<h3>Laboratories</h3>
<ul><li><strong>NR 149</strong> — laboratory accreditation. Data submitted to the DNR generally must come from a laboratory accredited or certified under NR 149 for the relevant tests.</li></ul>
<h3>Water resources</h3>
<ul>
<li><strong>NR 151 and NR 216</strong> — runoff management performance standards and WPDES stormwater permits.</li>
<li><strong>NR 103</strong> — water quality standards for wetlands; <strong>NR 299</strong> — water quality certification.</li>
<li><strong>Wis. Stat. ch. 30</strong> — permits for work in and near navigable waters.</li>
<li><strong>NR 115</strong> — shoreland zoning; <strong>NR 116</strong> — floodplain management.</li>
</ul>
<h3>Building materials and air</h3>
<ul>
<li><strong>NR 447</strong> — asbestos NESHAP implementation (DNR).</li>
<li><strong>DHS 159</strong> — asbestos certification and training (DHS); <strong>DHS 163</strong> — lead-based paint activities certification.</li>
<li><strong>NR 400 series</strong> — air pollution control, including permits that may apply to remediation system emissions.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Which DNR form documents monitoring well construction?", options: ["4400-122", "4400-113A", "3300-005", "4400-113B"], answer: 1, explain: "4400-113A = construction; 4400-113B = development; 3300-005 = filling and sealing; 4400-122 = soil boring log." },
        { type: "mc", q: "Laboratory accreditation for data submitted to the DNR is governed by:", options: ["NR 141", "NR 149", "NR 151", "ATCP 93"], answer: 1, explain: "NR 149 covers laboratory accreditation." }
      ]
    }
  ],
  terms: [
    { term: "Spill law (§ 292.11)", def: "Wisconsin Hazardous Substance Discharge Law: requires immediate notification and response by persons who possess or control a discharged hazardous substance or cause the discharge." },
    { term: "Hazardous substance (Wisconsin)", def: "Broadly defined under ch. 292; unlike CERCLA, includes petroleum." },
    { term: "Possess or control", def: "Spill-law trigger for responsibility; interpreted to include current owners who did not cause contamination (State v. Mauthe, 1985)." },
    { term: "DNR spill hotline", def: "Wisconsin DNR 24-hour discharge reporting line: 1-800-943-0003." },
    { term: "NR 706", def: "Hazardous substance discharge notification rule, including exemptions." },
    { term: "NR 708", def: "Immediate and interim actions rule." },
    { term: "NR 714", def: "Public information and participation requirements for response actions." },
    { term: "NR 716", def: "Site investigation rule: defines nature, degree, and extent of contamination; work plan and SI report." },
    { term: "NR 718", def: "Management of contaminated soil and other solid wastes excavated during response actions." },
    { term: "NR 720", def: "Soil cleanup standards: pathway-based residual contaminant levels (direct contact and groundwater)." },
    { term: "NR 722", def: "Standards for selecting remedial actions." },
    { term: "NR 724", def: "Remedial and interim action design, implementation, O&M, and monitoring." },
    { term: "NR 725", def: "Notification requirements for residual contamination and continuing obligations to affected owners and ROW holders." },
    { term: "NR 726", def: "Case closure criteria and procedures." },
    { term: "NR 727", def: "Continuing obligations after case closure." },
    { term: "NR 749", def: "Fees for DNR technical assistance." },
    { term: "NR 140", def: "Wisconsin groundwater quality standards: enforcement standards and preventive action limits." },
    { term: "Enforcement Standard (ES)", def: "NR 140 concentration that triggers enforcement and response when exceeded." },
    { term: "Preventive Action Limit (PAL)", def: "NR 140 early-warning level: 10% of ES (carcinogens), 20% (other health), 50% (public welfare)." },
    { term: "RCL", def: "Residual Contaminant Level: NR 720 soil cleanup value for a specific pathway and land use." },
    { term: "Direct contact pathway", def: "Exposure through ingestion, dermal contact, and inhalation of soil; non-industrial and industrial RCLs; generally top 4 feet." },
    { term: "Groundwater pathway (soil)", def: "Soil-to-groundwater leaching evaluation protecting NR 140 standards." },
    { term: "Vapor action level", def: "Indoor air or sub-slab concentration used by DNR to evaluate vapor intrusion (RR-800 guidance)." },
    { term: "BRRTS", def: "Bureau for Remediation and Redevelopment Tracking System: DNR database of contaminated site activities." },
    { term: "RR Sites Map", def: "DNR's online GIS map of contaminated sites and continuing obligations." },
    { term: "LUST", def: "Leaking Underground Storage Tank activity type in BRRTS." },
    { term: "ERP", def: "Environmental Repair Program activity type: non-LUST contamination." },
    { term: "NAR", def: "No Action Required BRRTS activity type." },
    { term: "Continuing obligation", def: "Post-closure condition that runs with the land, such as maintaining a cap or vapor system or restricting wells." },
    { term: "NR 141", def: "Groundwater monitoring well construction, development, and abandonment requirements." },
    { term: "Form 4400-122", def: "DNR Soil Boring Log Information form." },
    { term: "Form 3300-005", def: "DNR Well/Drillhole/Borehole Filling & Sealing form." },
    { term: "NR 149", def: "Wisconsin laboratory accreditation rule." },
    { term: "ATCP 93", def: "DATCP rule for flammable, combustible, and hazardous liquid storage tanks." },
    { term: "PECFA", def: "Petroleum Environmental Cleanup Fund Act: former Wisconsin reimbursement program for petroleum cleanups, now closed to new sites." }
  ],
  resources: [
    { title: "Wisconsin Statutes ch. 292 — Remedial Action", url: "https://docs.legis.wisconsin.gov/statutes/statutes/292", note: "Spill law and liability exemptions" },
    { title: "Wis. Admin. Code NR 700–799", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/700", note: "Investigation and remediation rules" },
    { title: "Wis. Admin. Code NR 140 — Groundwater Quality", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/100/140", note: "ES and PAL tables" },
    { title: "Wis. Admin. Code NR 141 — Monitoring Wells", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/100/141", note: "Well construction and abandonment" },
    { title: "Wisconsin DNR — Remediation and Redevelopment (Brownfields)", url: "https://dnr.wisconsin.gov/topic/Brownfields", note: "RR program, guidance, BRRTS, RR Sites Map" },
    { title: "Wisconsin DNR — Spills reporting", url: "https://dnr.wisconsin.gov/topic/Spills", note: "When and how to report" },
    { title: "Wisconsin DNR — Vapor intrusion", url: "https://dnr.wisconsin.gov/topic/Brownfields/VI", note: "RR-800 guidance and vapor action levels" },
    { title: "Wisconsin DNR — Forms", url: "https://dnr.wisconsin.gov/about/forms", note: "Current versions of 4400-113A/B, 4400-122, 3300-005" },
    { title: "DATCP — Storage tanks", url: "https://datcp.wi.gov/Pages/Programs_Services/PetroleumHazStorageTanks.aspx", note: "ATCP 93 program" }
  ],
  teach: [
    { prompt: "Walk a new client through what happens after contamination is reported on their Wisconsin property, naming the NR chapters that apply at each step and explaining what 'closure with continuing obligations' means for them.",
      model: "<p>After notification under § 292.11 and NR 706, the DNR opens a BRRTS case and sends a responsible-party letter. Emergency or interim actions fall under NR 708. The consultant prepares a work plan and conducts a site investigation under NR 716 to define nature, degree, and extent in soil, groundwater, and vapor. Results are compared to NR 720 soil RCLs and NR 140 groundwater standards. Remedial options are evaluated and selected under NR 722, designed, built, operated, and monitored under NR 724, with excavated soil managed under NR 718. Affected neighbors and ROW holders are notified under NR 725. Closure is requested under NR 726. Closure with continuing obligations means the case is closed while some contamination remains, and the owner (and future owners) must meet conditions under NR 727 — e.g., maintain a cap or vapor mitigation system, not install wells without approval, manage soil properly if disturbed — all shown on the DNR's public database.</p>" },
    { prompt: "Explain the relationship between the NR 140 ES and PAL, why PALs are different percentages of the ES for different substances, and how you would flag results in a data table.",
      model: "<p>The ES is the enforcement level that triggers response; the PAL is an early-warning level set as a fraction of the ES by statute: 10% for carcinogenic, mutagenic, or teratogenic substances, 20% for other public-health substances, and 50% for public-welfare (aesthetic) substances. The more serious the health effect, the earlier the warning. Benzene, for example, has an ES of 5 µg/L and PAL of 0.5 µg/L; toluene has 800 and 160. In data tables, each result is compared to both, and exceedances are flagged with distinct formatting for PAL and ES exceedances following DNR and firm conventions, with the standards listed in the table header.</p>" }
  ],
  exam: {
    count: 20,
    bank: [
      { type: "mc", q: "Wisconsin's hazardous substance discharge law is found at:", options: ["Wis. Stat. § 289.43", "Wis. Stat. § 292.11", "Wis. Stat. ch. 160", "Wis. Stat. ch. 30"], answer: 1, explain: "§ 292.11 is the spill law." },
      { type: "mc", q: "The DNR 24-hour spill reporting hotline number is:", options: ["1-800-943-0003", "811", "1-800-424-8802", "1-888-936-7463"], answer: 0, explain: "1-800-943-0003. (1-800-424-8802 is the federal National Response Center.)" },
      { type: "mc", q: "Which Wisconsin Supreme Court case is often cited for holding a property owner responsible for contamination they did not cause?", options: ["Sackett v. EPA", "State v. Mauthe", "Just v. Marinette County", "Kelo v. New London"], answer: 1, explain: "State v. Mauthe (1985) interpreted 'possesses or controls' under the spill law." },
      { type: "mc", q: "Which statement best contrasts CERCLA and the Wisconsin spill law?", options: ["Both exclude petroleum", "The spill law includes petroleum; CERCLA excludes it", "CERCLA includes petroleum; the spill law excludes it", "Neither addresses historical contamination"], answer: 1, explain: "Petroleum inclusion is a key difference." },
      { type: "mc", q: "Which chapter sets personnel qualifications for response actions?", options: ["NR 706", "NR 712", "NR 714", "NR 749"], answer: 1, explain: "NR 712." },
      { type: "mc", q: "Public information and participation requirements are in:", options: ["NR 714", "NR 716", "NR 725", "NR 727"], answer: 0, explain: "NR 714." },
      { type: "mc", q: "Remedial action selection criteria are found in:", options: ["NR 720", "NR 722", "NR 724", "NR 726"], answer: 1, explain: "NR 722." },
      { type: "mc", q: "Operation, maintenance, and monitoring of remedial systems are governed by:", options: ["NR 708", "NR 718", "NR 724", "NR 749"], answer: 2, explain: "NR 724." },
      { type: "mc", q: "Notifying a city that residual groundwater contamination extends under its street is required by:", options: ["NR 714", "NR 725", "NR 726", "NR 140"], answer: 1, explain: "NR 725 requires notification of affected owners and right-of-way holders." },
      { type: "mc", q: "The NR 140 enforcement standard for benzene is:", options: ["0.5 µg/L", "5 µg/L", "50 µg/L", "700 µg/L"], answer: 1, explain: "ES = 5 µg/L; PAL = 0.5 µg/L." },
      { type: "mc", q: "The NR 140 enforcement standard for vinyl chloride is:", options: ["0.02 µg/L", "0.2 µg/L", "2 µg/L", "5 µg/L"], answer: 1, explain: "ES = 0.2 µg/L; PAL = 0.02 µg/L." },
      { type: "mc", q: "The NR 140 enforcement standard for TCE is:", options: ["0.5 µg/L", "5 µg/L", "70 µg/L", "100 µg/L"], answer: 1, explain: "TCE ES = 5 µg/L; PAL = 0.5." },
      { type: "num", q: "Toluene's ES is 800 µg/L and it is a non-carcinogen of public health concern. What is its PAL?", answer: 160, tol: 0, unit: "µg/L", explain: "20% of 800 = 160 µg/L." },
      { type: "num", q: "A public-welfare (aesthetic) substance has an ES of 300 µg/L. What is its PAL?", answer: 150, tol: 0, unit: "µg/L", explain: "Public welfare: PAL = 50% of ES = 150 µg/L." },
      { type: "mc", q: "A groundwater sample shows TCE at 7.2 µg/L. Relative to NR 140:", options: ["Below PAL", "Between PAL and ES", "Exceeds ES", "Not regulated"], answer: 2, explain: "TCE ES = 5 µg/L; 7.2 exceeds it." },
      { type: "mc", q: "MTBE's NR 140 ES is:", options: ["5 µg/L", "12 µg/L", "60 µg/L", "800 µg/L"], answer: 2, explain: "MTBE ES = 60 µg/L, PAL = 12 µg/L." },
      { type: "mc", q: "NR 720 direct-contact RCLs are developed separately for:", options: ["Sand and clay", "Non-industrial and industrial land use", "Summer and winter", "Urban and rural counties"], answer: 1, explain: "Land use determines exposure assumptions." },
      { type: "mc", q: "The NR 720 groundwater pathway RCL protects against:", options: ["Children eating soil", "Contaminants leaching from soil to groundwater above NR 140 standards", "Vapor intrusion", "Dust"], answer: 1, explain: "Soil-to-groundwater leaching." },
      { type: "tf", q: "Naturally occurring arsenic in some Wisconsin soils can exceed risk-based direct-contact RCLs, so background can be considered.", answer: true, explain: "Background concentrations may be considered when setting cleanup goals." },
      { type: "mc", q: "DNR's vapor intrusion guidance publication is:", options: ["RR-800", "NR 800", "ATCP 93", "SPS 382"], answer: 0, explain: "RR-800, Addressing Vapor Intrusion at Remediation & Redevelopment Sites in Wisconsin." },
      { type: "mc", q: "Which contaminants drive most vapor intrusion concern in buildings?", options: ["Metals", "Chlorinated solvents such as PCE and TCE", "PCBs", "Nitrate"], answer: 1, explain: "Chlorinated VOCs are toxic at low concentrations and persistent in aerobic conditions." },
      { type: "mc", q: "In BRRTS, 'LUST' stands for:", options: ["Land Use Scheduling Tool", "Leaking Underground Storage Tank", "Licensed Underground Site Technician", "Liability Under State Terms"], answer: 1, explain: "Leaking Underground Storage Tank." },
      { type: "mc", q: "Which online DNR tool shows contaminated sites and continuing obligations spatially?", options: ["Surface Water Data Viewer", "RR Sites Map", "Web Soil Survey", "FEMA Map Service Center"], answer: 1, explain: "RR Sites Map." },
      { type: "multi", q: "Which are typical continuing obligations? Select all that apply.", options: ["Maintain a cap over residual soil contamination", "Operate a vapor mitigation system", "Restrict water supply well construction where groundwater exceeds the ES", "Pay annual property taxes to DNR"], answer: [0, 1, 2], explain: "The first three are classic continuing obligations." },
      { type: "mc", q: "Form 3300-005 is used to document:", options: ["Monitoring well construction", "Well/drillhole/borehole filling and sealing", "Soil boring logs", "Chain of custody"], answer: 1, explain: "3300-005 documents abandonment (filling and sealing)." },
      { type: "mc", q: "The DNR's standard soil boring log form is:", options: ["4400-113A", "4400-113B", "4400-122", "3300-005"], answer: 2, explain: "4400-122 Soil Boring Log Information." },
      { type: "mc", q: "Monitoring well construction, development, and abandonment requirements are in:", options: ["NR 140", "NR 141", "NR 812", "NR 149"], answer: 1, explain: "NR 141. NR 812 covers water supply wells." },
      { type: "mc", q: "Which agency administers ATCP 93 storage tank rules?", options: ["DNR", "DATCP", "DSPS", "EPA"], answer: 1, explain: "DATCP." },
      { type: "mc", q: "PECFA was a Wisconsin program that:", options: ["Licensed engineers", "Reimbursed eligible petroleum cleanup costs", "Regulated asbestos", "Set groundwater standards"], answer: 1, explain: "PECFA reimbursed petroleum cleanup costs; it is closed to new sites." },
      { type: "mc", q: "Lead-based paint activity certification in Wisconsin is under:", options: ["DHS 159", "DHS 163", "NR 447", "NR 149"], answer: 1, explain: "DHS 163 = lead; DHS 159 = asbestos." },
      { type: "mc", q: "Which statute chapter governs permits for work in navigable waters in Wisconsin?", options: ["Ch. 30", "Ch. 160", "Ch. 289", "Ch. 292"], answer: 0, explain: "Wis. Stat. ch. 30." },
      { type: "mc", q: "Which statute directs DNR to set groundwater standards implemented in NR 140?", options: ["Ch. 160", "Ch. 281", "Ch. 283", "Ch. 292"], answer: 0, explain: "Ch. 160, Groundwater Protection Standards." }
    ]
  }
});
