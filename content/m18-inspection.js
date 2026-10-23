COURSE.addModule({
  id: "m18",
  track: "t4",
  title: "Special Inspections and Field Documentation",
  hours: 4,
  summary: "Code-required special inspections under IBC Chapter 17 — what they are, who performs them, and what is inspected for soils, foundations, concrete, masonry, and structural steel — plus the documentation and communication practices that make a field professional trusted.",
  objectives: [
    "Explain the purpose of special inspections, the Statement of Special Inspections, and the roles of owner, special inspector, contractor, engineer of record, and building official.",
    "Describe soils and foundation special inspection requirements, including continuous versus periodic inspection.",
    "Describe concrete, anchor, and masonry special inspection tasks.",
    "Describe structural steel bolting and welding inspection vocabulary, and other common special inspection items.",
    "Write complete daily field reports and manage non-conforming work through to resolution."
  ],
  lessons: [
    {
      title: "The special inspection framework",
      html: `
<p><strong>Special inspections</strong> are inspections and tests required by the building code, in addition to the building official's own inspections, for work where the quality of construction is critical to structural safety. They are defined in <strong>International Building Code (IBC) Chapter 17</strong>, "Special Inspections and Tests." Wisconsin's Commercial Building Code (SPS 361–366) adopts the IBC with state amendments, so Chapter 17 applies to most Wisconsin commercial construction (check the adopted edition and amendments).</p>
<h3>Key players</h3>
<div class="tbl-wrap"><table>
<tr><th>Party</th><th>Role</th></tr>
<tr><td><strong>Owner</strong></td><td>Employs the special inspector (not the contractor) — so inspections are independent of the party doing the work</td></tr>
<tr><td><strong>Registered design professional in responsible charge</strong> (often the structural engineer of record)</td><td>Prepares the <strong>Statement of Special Inspections</strong> listing what must be inspected, how often, and by whom; submitted with the permit application</td></tr>
<tr><td><strong>Special inspector / approved agency</strong></td><td>A qualified person or firm (often a CMT/geotechnical consultant) that performs the inspections and tests, reports results, and notifies the contractor of discrepancies — and, if not corrected, the design professional and building official</td></tr>
<tr><td><strong>Contractor</strong></td><td>Performs the work, provides access and notice, corrects deficiencies; may have its own quality control</td></tr>
<tr><td><strong>Building official</strong></td><td>Approves the special inspection program; receives reports and the <strong>final report</strong> documenting completion and resolution of discrepancies</td></tr>
</table></div>
<h3>Continuous vs. periodic</h3>
<ul>
<li><strong>Continuous special inspection</strong> — the inspector is present full-time while the work is performed (e.g., placement and compaction of controlled fill; concrete sampling and placement).</li>
<li><strong>Periodic special inspection</strong> — part-time or intermittent observation, with inspection at completion of defined stages (e.g., verifying footing excavations; reinforcing steel placement before a pour).</li>
</ul>
<h3>Special inspection vs. other testing</h3>
<ul>
<li><strong>Special inspection</strong> — code-required, for the building official, paid by the owner.</li>
<li><strong>Quality assurance testing</strong> — owner-directed testing beyond code (e.g., pavement density testing for a private lot).</li>
<li><strong>Quality control</strong> — the contractor's own testing and inspection of its work.</li>
</ul>
<p>The basis of inspection is the <strong>approved construction documents</strong> — the permitted drawings and specifications, plus approved submittals (shop drawings, mix designs) and approved revisions. Inspect against what was approved, not against what the contractor says.</p>
`,
      check: [
        { type: "mc", q: "Who should normally employ the special inspector?", options: ["The general contractor", "The owner", "The concrete supplier", "The building official"], answer: 1, explain: "The owner employs the special inspector to keep inspections independent of the contractor." },
        { type: "mc", q: "The Statement of Special Inspections is prepared by:", options: ["The special inspector", "The registered design professional in responsible charge", "The contractor", "The lender"], answer: 1, explain: "The design professional prepares it and submits it with the permit application." }
      ]
    },
    {
      title: "Soils and foundation special inspections",
      html: `
<p>The IBC soils special inspection table (Section 1705.6 in recent editions) lists the core tasks that geotechnical and CMT staff perform:</p>
<div class="tbl-wrap"><table>
<tr><th>Task</th><th>Frequency</th></tr>
<tr><td>Verify materials below shallow foundations are adequate to achieve the design bearing capacity</td><td>Periodic</td></tr>
<tr><td>Verify excavations are extended to proper depth and have reached proper material</td><td>Periodic</td></tr>
<tr><td>Perform classification and testing of compacted fill materials</td><td>Periodic</td></tr>
<tr><td>Verify use of proper materials, densities, and lift thicknesses during placement and compaction of controlled fill</td><td>Continuous</td></tr>
<tr><td>Prior to placement of controlled fill, inspect the subgrade and verify the site has been prepared properly</td><td>Periodic</td></tr>
</table></div>
<p>The geotechnical report's recommendations (bearing pressure, fill requirements, compaction criteria) define "adequate" and "proper." This is where Modules 13–15 come together: bearing verification with DCP and hand auger, proof-roll observation, Proctor tests and density testing, lift thickness checks.</p>
<h3>Deep foundations</h3>
<p>The IBC also lists inspections for <strong>driven</strong> deep foundations (e.g., verify element materials, sizes, lengths; observe driving and record blow counts, tip and cutoff elevations; verify capacity testing), <strong>cast-in-place</strong> deep foundations (e.g., observe drilling, verify diameters, lengths, embedment into bearing strata; record concrete or grout volumes), and <strong>helical piles</strong> (record installation torque, depth, and configuration). Deep foundation installation is typically continuous inspection.</p>
<h3>Practical tips</h3>
<ul>
<li>Get the approved geotechnical report and foundation plan before your first site visit.</li>
<li>Know the design bearing pressure and the minimum footing depth for frost.</li>
<li>Record footing locations by gridline, bottom elevations, soil description, test results, and conclusion ("suitable for 3,000 psf as designed" or "unsuitable — undercut recommended").</li>
<li>Do not allow concrete to be placed on soils you haven't verified if your scope includes that verification — notify the contractor and your PM if the pour is scheduled before inspection.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Under IBC soils special inspection, placement and compaction of controlled fill requires:", options: ["Periodic inspection", "Continuous inspection", "No inspection", "Only a final report"], answer: 1, explain: "Fill placement and compaction is the continuous task in the soils table." },
        { type: "mc", q: "What defines the bearing capacity a special inspector verifies at footing excavations?", options: ["The contractor's estimate", "The approved construction documents and geotechnical report", "The weather", "The inspector's preference"], answer: 1, explain: "Inspect against approved documents and the geotechnical recommendations." }
      ]
    },
    {
      title: "Concrete, anchors, and masonry inspections",
      html: `
<h3>Concrete construction (IBC concrete table, Section 1705.3 in recent editions)</h3>
<p>Typical required tasks:</p>
<ul>
<li>Inspect <strong>reinforcement</strong>, including prestressing tendons, and verify placement (periodic).</li>
<li>Inspect reinforcing bar <strong>welding</strong> where applicable.</li>
<li>Inspect <strong>anchors cast in concrete</strong> (periodic).</li>
<li>Inspect <strong>post-installed anchors</strong> (adhesive anchors installed horizontally or upwardly inclined under sustained tension typically require continuous inspection; others periodic, per the approved evaluation report).</li>
<li>Verify use of the required <strong>mix design</strong> (periodic).</li>
<li>At the time fresh concrete is sampled to fabricate specimens for strength tests, perform <strong>slump and air content tests</strong> and determine the <strong>temperature</strong> of the concrete (continuous).</li>
<li>Inspect <strong>concrete placement</strong> for proper application techniques (continuous).</li>
<li>Verify maintenance of specified <strong>curing temperature and techniques</strong> (periodic).</li>
<li>Inspect formwork for shape, location, and dimensions of members (periodic).</li>
</ul>
<p>Things to look for during placement: correct mix on the ticket, time since batching, water additions recorded, proper consolidation, no excessive free fall, cold joints avoided, embedded items not displaced, finishing not done with bleed water present, and cold- or hot-weather protection in place.</p>
<h3>Masonry</h3>
<p>Masonry special inspection follows the IBC and TMS 402/602 quality assurance levels, which scale with the structure's risk category and design method. Tasks include verifying materials (units, mortar, grout) against submittals, mortar joint and grout space preparation, reinforcement size and location, grout placement (consolidation and lift heights), cold-weather and hot-weather protection, and preparation of grout specimens and prisms when required.</p>
<h3>Fire-resistant materials (also often handled by CMT firms)</h3>
<p>Sprayed fire-resistant materials (SFRM) applied to structural steel are inspected for <strong>thickness</strong> and <strong>density</strong> (ASTM E605) and <strong>bond strength / cohesion–adhesion</strong> (ASTM E736) per the code and the listed fire-resistance design.</p>
`,
      check: [
        { type: "mc", q: "At the time concrete is sampled for strength specimens, which tests are performed under the IBC concrete table?", options: ["Only cylinders", "Slump, air content, and temperature", "Rebound hammer", "Cores"], answer: 1, explain: "Slump, air, and temperature at the time of sampling (continuous)." },
        { type: "mc", q: "SFRM fireproofing is commonly inspected for:", options: ["Slump and air", "Thickness, density, and bond strength", "Blow counts", "RQD"], answer: 1, explain: "ASTM E605 and E736." }
      ]
    },
    {
      title: "Structural steel: bolting and welding vocabulary",
      html: `
<p>Steel special inspection is often performed by inspectors with welding credentials, but every field professional should know the vocabulary. Requirements come from the IBC, <strong>AISC 360</strong> (Specification for Structural Steel Buildings, including its quality control/quality assurance chapter), <strong>AWS D1.1</strong> (Structural Welding Code — Steel), and the <strong>RCSC Specification</strong> for structural joints using high-strength bolts.</p>
<h3>High-strength bolting</h3>
<ul>
<li>Bolts commonly conform to <strong>ASTM F3125</strong> (which includes Grades A325 and A490).</li>
<li>Joint types: <strong>snug-tight</strong> (plies in firm contact, tightened by a few impacts of an impact wrench or full effort with a spud wrench), <strong>pretensioned</strong>, and <strong>slip-critical</strong> (relying on friction between faying surfaces; surface preparation matters).</li>
<li>Pretensioning methods (RCSC): <strong>turn-of-nut</strong>, <strong>calibrated wrench</strong>, <strong>twist-off-type tension-control (TC) bolts</strong> (the spline shears off at the target tension), and <strong>direct tension indicators (DTIs)</strong> (washers with protrusions that compress to a specified gap).</li>
<li><strong>Pre-installation verification</strong> testing of bolt assemblies in a tension calibrator (e.g., a Skidmore-Wilhelm device) confirms the method works with the actual fasteners and crew.</li>
</ul>
<h3>Welding</h3>
<ul>
<li>Welds are inspected visually by qualified inspectors, commonly an <strong>AWS Certified Welding Inspector (CWI)</strong>.</li>
<li>Inspectors verify welder qualifications, welding procedure specifications (WPS), joint preparation and fit-up, preheat, weld size, length, and profile, and look for defects such as cracks, porosity, undercut, incomplete fusion, and overlap.</li>
<li><strong>Nondestructive testing (NDT)</strong>: ultrasonic testing (UT) for complete-joint-penetration welds, magnetic particle (MT), dye penetrant (PT), and radiographic (RT).</li>
<li><strong>Shear studs</strong> on composite beams are checked by visual inspection and bend testing.</li>
<li>Steel deck attachment (welds or mechanical fasteners) is inspected per the approved design.</li>
</ul>
<div class="mnemonic">Pretension methods "<strong>T-C-T-D</strong>": <strong>T</strong>urn-of-nut, <strong>C</strong>alibrated wrench, <strong>T</strong>wist-off TC bolts, <strong>D</strong>TIs.</div>
`,
      check: [
        { type: "multi", q: "Which are RCSC-recognized bolt pretensioning methods? Select all that apply.", options: ["Turn-of-nut", "Calibrated wrench", "Twist-off-type tension-control bolts", "Direct tension indicators", "Hand-tight with a screwdriver"], answer: [0, 1, 2, 3], explain: "The four RCSC methods." },
        { type: "mc", q: "Which code governs structural steel welding in the U.S.?", options: ["ACI 318", "AWS D1.1", "TMS 402", "ASTM C31"], answer: 1, explain: "AWS D1.1 Structural Welding Code — Steel." }
      ]
    },
    {
      title: "Field documentation and managing non-conforming work",
      html: `
<h3>The daily field report</h3>
<p>Every site visit produces a report that a stranger could read years later and understand exactly what happened. Include:</p>
<ul>
<li>Project name and number, date, report number, your name, arrival/departure times, weather and temperature.</li>
<li>Who you met (name, company, role) and who was on site.</li>
<li>Work observed — what, where (gridlines, stations, elevations), how, and by whom.</li>
<li>Tests performed with results and the specification requirement; references to test report numbers.</li>
<li>Samples taken (cylinders, soil, aggregate) with identification.</li>
<li>Deviations from the approved documents and the specific requirement not met.</li>
<li>Communications: who you told, when, and what they said or decided.</li>
<li>Status of previously reported open items.</li>
<li>Photos with captions.</li>
</ul>
<p>Write <strong>facts, not opinions or accusations</strong>: "Reinforcing at the north wall of the elevator pit had 1¼ in cover at three locations measured; drawings require 3 in. Informed J. Smith (superintendent, ABC Construction) at 9:40 a.m.; bars were raised and re-chaired; re-inspected 11:15 a.m.; cover 3 in min. Item closed." — not "The rebar crew did sloppy work."</p>
<h3>Non-conforming work</h3>
<ol>
<li><strong>Identify</strong> the deficiency against a specific requirement (drawing, spec section, code).</li>
<li><strong>Notify</strong> the contractor's responsible person immediately so it can be corrected — the IBC expects discrepancies to be brought to the contractor's attention first.</li>
<li><strong>Document</strong> it in the daily report or a formal non-conformance report (NCR) with a tracking number.</li>
<li><strong>Escalate</strong> uncorrected items to the registered design professional and the building official per the special inspection program.</li>
<li><strong>Verify</strong> correction or an approved engineering disposition (e.g., the EOR accepts as-is with justification, or specifies a repair), and <strong>close</strong> the item in writing.</li>
</ol>
<p>The final report of special inspections must document that discrepancies were corrected or resolved.</p>
<h3>Boundaries — what field staff must not do</h3>
<ul>
<li>Don't approve design changes or substitutions — only the EOR (and building official where applicable) can.</li>
<li>Don't direct the contractor's means and methods or take charge of site safety.</li>
<li>Don't report or sign off on work you didn't observe; say "not observed" when that's the truth.</li>
<li>Don't negotiate test results.</li>
</ul>
<h3>Site conduct</h3>
<p>Wear required PPE (hard hat, high-visibility vest, safety glasses, boots, hearing protection as needed); check in with the superintendent; follow the site safety plan. Many sites require OSHA 10-hour construction training. A professional, calm, factual inspector earns cooperation; one who argues or ambushes the contractor in reports does not.</p>
`,
      check: [
        { type: "mc", q: "When a special inspector finds a discrepancy, who should be notified first so it can be corrected?", options: ["The newspaper", "The contractor's responsible person", "The lender", "No one until the final report"], answer: 1, explain: "Discrepancies go to the contractor first; uncorrected items are escalated to the design professional and building official." },
        { type: "mc", q: "Which daily report entry is best?", options: ["'The crew was careless again.'", "'Cover at north pit wall 1¼ in at 3 locations; 3 in required. Informed J. Smith 9:40 a.m.; corrected and re-inspected 11:15 a.m.'", "'Rebar looked OK, I think.'", "'Didn't check rebar but it's probably fine.'"], answer: 1, explain: "Specific, factual, referenced, and closed out." }
      ]
    }
  ],
  terms: [
    { term: "Special inspection", def: "Code-required inspection and testing (IBC Chapter 17) of critical structural work, in addition to building official inspections." },
    { term: "IBC Chapter 17", def: "International Building Code chapter on special inspections and tests." },
    { term: "Statement of Special Inspections", def: "Document by the registered design professional listing required inspections, tests, frequency, and agencies; submitted with the permit." },
    { term: "Special inspector / approved agency", def: "Qualified person or firm performing special inspections and tests, typically employed by the owner." },
    { term: "Continuous special inspection", def: "Full-time observation while work is performed." },
    { term: "Periodic special inspection", def: "Part-time or intermittent observation with inspection at completion of stages." },
    { term: "Final report of special inspections", def: "Report to the building official documenting completed inspections and resolution of discrepancies." },
    { term: "Approved construction documents", def: "Permitted drawings, specifications, and approved submittals and revisions — the basis of inspection." },
    { term: "Building official", def: "The code enforcement authority approving permits and receiving special inspection reports." },
    { term: "Controlled fill", def: "Engineered fill placed under specified material, lift, moisture, and compaction requirements with inspection." },
    { term: "Post-installed anchor", def: "Adhesive or mechanical anchor installed in hardened concrete; inspected per its evaluation report." },
    { term: "SFRM", def: "Sprayed fire-resistant material on structural steel; inspected for thickness, density (E605), and bond (E736)." },
    { term: "AISC 360", def: "Specification for Structural Steel Buildings, including QC/QA requirements." },
    { term: "AWS D1.1", def: "Structural Welding Code — Steel." },
    { term: "CWI", def: "AWS Certified Welding Inspector." },
    { term: "RCSC Specification", def: "Specification for structural joints using high-strength bolts." },
    { term: "ASTM F3125", def: "Specification for high-strength structural bolts, including Grades A325 and A490." },
    { term: "Snug-tight", def: "Bolted joint with plies in firm contact, not pretensioned." },
    { term: "Slip-critical joint", def: "Bolted joint designed to resist slip by friction between faying surfaces." },
    { term: "Turn-of-nut method", def: "Pretensioning by a specified nut rotation beyond snug-tight." },
    { term: "Tension-control (TC) bolt", def: "Twist-off bolt whose spline shears at the target pretension." },
    { term: "Direct tension indicator (DTI)", def: "Washer with protrusions that compress to a specified gap at proper pretension." },
    { term: "Pre-installation verification", def: "Testing bolt assemblies in a tension calibrator before installation." },
    { term: "NDT (UT, MT, PT, RT)", def: "Nondestructive weld testing: ultrasonic, magnetic particle, penetrant, radiographic." },
    { term: "Shear stud bend test", def: "Bending a welded stud to verify weld quality." },
    { term: "Daily field report", def: "Factual record of observations, tests, deviations, and communications for each site visit." },
    { term: "Non-conformance report (NCR)", def: "Formal record of work not meeting requirements, tracked to resolution." },
    { term: "Engineering disposition", def: "EOR decision on non-conforming work: accept as-is, repair, or replace." },
    { term: "OSHA 10-hour construction", def: "Introductory construction safety training commonly required on job sites." }
  ],
  resources: [
    { title: "ICC — International Building Code (Chapter 17)", url: "https://codes.iccsafe.org/", note: "Special inspections and tests" },
    { title: "Wisconsin DSPS — Commercial Building Code", url: "https://dsps.wi.gov/Pages/Programs/CommercialBuildings/Default.aspx", note: "Wisconsin adoption of the IBC" },
    { title: "AISC — Specifications and Codes", url: "https://www.aisc.org/publications/steel-standards/", note: "AISC 360 and RCSC Specification (free downloads)" },
    { title: "American Welding Society — CWI", url: "https://www.aws.org/", note: "AWS D1.1 and inspector certification" },
    { title: "ICC Special Inspector certifications", url: "https://www.iccsafe.org/professional-development/certification/", note: "Soils, concrete, masonry, steel special inspector exams" },
    { title: "OSHA Outreach Training (10/30-hour)", url: "https://www.osha.gov/training/outreach", note: "Construction safety training" }
  ],
  teach: [
    { prompt: "Explain the special inspection process on a Wisconsin commercial building from permit to final report, naming each party's role.",
      model: "<p>The registered design professional (usually the structural EOR) prepares the Statement of Special Inspections under IBC Chapter 17, listing required inspections and tests (soils, foundations, concrete, masonry, steel, fireproofing), their frequency (continuous or periodic), and qualified agencies; it is submitted with the permit application and approved by the building official (Wisconsin adopts the IBC through SPS 361–366). The owner hires the special inspection agency, independent of the contractor. During construction the special inspector inspects against the approved construction documents and submittals, performs tests, and reports; discrepancies are brought to the contractor first, and uncorrected items go to the design professional and building official. The contractor gives notice, provides access, and corrects work. At the end, the special inspector submits a final report documenting the inspections and resolution of discrepancies to the building official.</p>" },
    { prompt: "You arrive for a scheduled concrete pour and find the reinforcing hasn't been inspected, the mix on the first ticket doesn't match the approved mix design, and the superintendent wants to start immediately. Describe your actions and what you document.",
      model: "<p>Calmly inform the superintendent of both issues against specific requirements: reinforcing inspection is required before placement, and the ticket mix ID differs from the approved mix design. Perform the reinforcing inspection immediately if possible (size, spacing, cover, laps, supports, embeds), noting any deficiencies for correction. For the mix, contact the PM and EOR to verify whether a different mix was approved; the inspector doesn't approve substitutions. If the contractor proceeds anyway, document it and escalate per the program to the design professional and building official. Document times, names, ticket numbers, mix IDs, inspection findings, communications, decisions, and any concrete placed before resolution, plus field tests and cylinders from the concrete actually placed.</p>" }
  ],
  exam: {
    count: 16,
    bank: [
      { type: "mc", q: "Special inspections are defined primarily in which part of the IBC?", options: ["Chapter 7", "Chapter 16", "Chapter 17", "Chapter 33"], answer: 2, explain: "Chapter 17." },
      { type: "mc", q: "Wisconsin's Commercial Building Code that adopts the IBC is:", options: ["NR 700", "SPS 361–366", "ATCP 93", "DHS 159"], answer: 1, explain: "SPS 361–366." },
      { type: "mc", q: "Why does the owner, rather than the contractor, employ the special inspector?", options: ["Lower cost", "Independence from the party performing the work", "Code requires the lender", "Contractors are not allowed on site"], answer: 1, explain: "Independence." },
      { type: "mc", q: "Continuous special inspection means:", options: ["Inspection once per week", "Full-time observation while work is performed", "Only a final inspection", "Video monitoring"], answer: 1, explain: "Full-time presence." },
      { type: "mc", q: "Verifying that footing excavations reached proper material is typically:", options: ["Continuous", "Periodic", "Not required", "Done by the contractor only"], answer: 1, explain: "Periodic per the soils table." },
      { type: "mc", q: "The basis for special inspection is:", options: ["The contractor's verbal instructions", "Approved construction documents and approved submittals", "The inspector's experience", "The previous project"], answer: 1, explain: "Approved documents govern." },
      { type: "mc", q: "Under the IBC concrete table, inspection of concrete placement for proper application techniques is:", options: ["Periodic", "Continuous", "Optional", "Done after curing"], answer: 1, explain: "Continuous." },
      { type: "mc", q: "Verifying the required mix design is used is:", options: ["Continuous", "Periodic", "Not required", "Contractor only"], answer: 1, explain: "Periodic." },
      { type: "mc", q: "Adhesive anchors installed upwardly inclined under sustained tension typically require:", options: ["No inspection", "Periodic inspection", "Continuous inspection", "Only proof loading"], answer: 2, explain: "Continuous inspection is typical per code and evaluation reports." },
      { type: "mc", q: "ASTM E605 is used to inspect SFRM for:", options: ["Bond strength", "Thickness and density", "Compressive strength", "Slump"], answer: 1, explain: "E605 thickness/density; E736 cohesion/adhesion." },
      { type: "mc", q: "ASTM F3125 covers:", options: ["Reinforcing bars", "High-strength structural bolts", "Welding electrodes", "Concrete cylinders"], answer: 1, explain: "Includes Grades A325 and A490." },
      { type: "mc", q: "A slip-critical joint resists load by:", options: ["Bolt bearing only", "Friction between faying surfaces", "Welds", "Adhesive"], answer: 1, explain: "Friction from pretension." },
      { type: "mc", q: "A twist-off tension-control bolt indicates proper pretension when:", options: ["The nut is hand-tight", "The spline shears off", "It turns 1/8 turn", "The washer cracks"], answer: 1, explain: "The spline twists off at target tension." },
      { type: "mc", q: "Pre-installation verification of bolts uses a:", options: ["Nuclear gauge", "Tension calibrator (e.g., Skidmore-Wilhelm)", "Slump cone", "DCP"], answer: 1, explain: "Tension calibrator." },
      { type: "mc", q: "Which NDT method is commonly used for complete-joint-penetration welds?", options: ["Ultrasonic testing (UT)", "Slump", "Rebound hammer", "Proctor"], answer: 0, explain: "UT." },
      { type: "mc", q: "Weld visual inspection is commonly performed by a(n):", options: ["ACI Technician", "AWS Certified Welding Inspector", "HTCP Aggregate Tech", "EIT"], answer: 1, explain: "CWI." },
      { type: "multi", q: "Which belong in a daily field report? Select all that apply.", options: ["Locations of work observed", "Test results with the specification requirement", "Who was notified of deficiencies and when", "Personal opinions about workers' character"], answer: [0, 1, 2], explain: "Facts, results, and communications — not personal opinions." },
      { type: "mc", q: "If a contractor does not correct a discrepancy, the special inspector should:", options: ["Drop it", "Escalate to the registered design professional and building official", "Fix it personally", "Charge the contractor"], answer: 1, explain: "Uncorrected discrepancies are escalated." },
      { type: "mc", q: "Who can approve a substitution of a different concrete mix?", options: ["The technician", "The EOR (through the project's approval process)", "The truck driver", "The concrete finisher"], answer: 1, explain: "Field staff don't approve design changes." },
      { type: "mc", q: "If you didn't observe a portion of work you were supposed to inspect, your report should:", options: ["Say it was acceptable", "State that it was not observed", "Omit it", "Ask the contractor to sign"], answer: 1, explain: "Never report on work you didn't observe." },
      { type: "mc", q: "The final report of special inspections is submitted to:", options: ["The DNR", "The building official", "The concrete supplier", "OSHA"], answer: 1, explain: "Building official." }
    ]
  }
});
