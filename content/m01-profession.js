COURSE.addModule({
  id: "m01",
  track: "t1",
  title: "The Consulting Profession in Wisconsin",
  hours: 3,
  summary: "What environmental and engineering consulting firms actually do, who does what, how a project moves from proposal to invoice, and the professional and ethical rules that govern the work.",
  objectives: [
    "Describe the four service lines covered by this course and the clients each serves.",
    "Distinguish field, staff, project management, and principal roles, and explain what a professional license allows.",
    "Name the Wisconsin agencies and boards that license professionals and regulate the work.",
    "Walk through the lifecycle of a consulting project and explain common contract and fee structures.",
    "Apply basic documentation and ethics rules to field and office work."
  ],
  lessons: [
    {
      title: "What a consulting firm does",
      html: `
<p>A consulting firm sells <strong>professional judgment backed by data</strong>. Clients hire consultants to answer questions they cannot answer themselves: Is this property contaminated? Will this soil hold up a building? Was this concrete placed to specification? How should this site drain? The deliverable is almost always a combination of <strong>field data</strong>, <strong>laboratory data</strong>, and a <strong>professional opinion</strong> written in a report, letter, or set of plans.</p>
<h3>The four service lines in this course</h3>
<div class="tbl-wrap"><table>
<tr><th>Service line</th><th>Core question</th><th>Typical deliverables</th><th>Typical clients</th></tr>
<tr><td><strong>Environmental consulting</strong></td><td>Is there contamination, who is responsible, and what must be done about it under the law?</td><td>Phase I and II Environmental Site Assessments, site investigation reports, remedial action plans, closure requests, permits, compliance reports</td><td>Buyers, sellers, lenders, attorneys, developers, municipalities, industrial facilities</td></tr>
<tr><td><strong>Geotechnical engineering</strong></td><td>How will the ground behave under and around a structure?</td><td>Subsurface exploration (boring) reports, foundation recommendations, pavement design support, slope and retaining wall analysis</td><td>Architects, structural and civil engineers, developers, WisDOT, municipalities</td></tr>
<tr><td><strong>Construction materials testing (CMT)</strong></td><td>Do the materials and workmanship in the field meet the plans and specifications?</td><td>Field density tests, concrete test reports, asphalt density reports, special inspection reports, daily field reports</td><td>Owners, contractors, engineers of record, building officials</td></tr>
<tr><td><strong>Civil engineering</strong></td><td>How should the site be laid out, graded, drained, and served by utilities and roads?</td><td>Site plans, grading and stormwater plans, utility plans, specifications, permit applications, construction observation</td><td>Developers, municipalities, institutions, WisDOT, counties</td></tr>
</table></div>
<p>These lines overlap constantly. A single brownfield redevelopment in Waukesha might need a Phase I and II (environmental), soil borings for the new building (geotechnical), a soil management plan for contaminated fill (environmental), a stormwater plan that avoids infiltrating through contaminated soil (civil), and density and concrete testing during construction (CMT). New employees who understand the vocabulary of all four become valuable fast, because they can see how one discipline's findings change another's work.</p>
<div class="callout"><strong>Why "fluency" matters</strong>Most early-career mistakes in consulting are not math errors; they are communication errors — misunderstanding a scope, using the wrong term with a regulator, or not recognizing that a field observation matters to someone in a different discipline.</div>
<h3>How firms make money</h3>
<p>Consulting is a <strong>billable-hours</strong> business. Each employee has a billing rate, and time is charged to project numbers. The percentage of your paid time charged to projects is your <strong>utilization</strong> (also called chargeability). Equipment (for example, a photoionization detector or a nuclear density gauge), laboratory analyses, subcontractors (drillers, surveyors, laboratories), and mileage are billed as <strong>expenses</strong> or <strong>units</strong>, often with a markup. Accurate timesheets are therefore not clerical busywork — they are how the firm invoices and how project managers track budgets.</p>
`,
      check: [
        { type: "mc", q: "A developer wants to know whether existing fill soils can support a new warehouse floor slab. Which service line primarily answers that question?", options: ["Environmental consulting", "Geotechnical engineering", "Construction materials testing", "Civil engineering"], answer: 1, explain: "How the ground behaves under a structure is the core geotechnical question. CMT would later verify that any new fill is compacted to specification." },
        { type: "tf", q: "Utilization (chargeability) is the percentage of an employee's paid time that is charged to client projects.", answer: true, explain: "Utilization is a key business metric in consulting because revenue comes from billable time." }
      ]
    },
    {
      title: "Roles, responsibility, and professional licensure",
      html: `
<h3>Typical career ladder</h3>
<ul>
<li><strong>Field technician</strong> — performs tests and observations in the field (density testing, concrete sampling, drilling oversight). Often holds technician certifications such as ACI Concrete Field Testing Technician – Grade I or WisDOT Highway Technician Certification Program (HTCP) credentials.</li>
<li><strong>Staff engineer / staff scientist / staff geologist</strong> — entry-level degreed professional. Logs borings, collects samples, reduces data, drafts report sections. Works under the supervision of licensed professionals.</li>
<li><strong>Project engineer / project scientist</strong> — runs the technical work on projects, writes reports, coordinates field staff and subcontractors.</li>
<li><strong>Project manager (PM)</strong> — owns scope, schedule, budget, client communication, and invoicing. Often (not always) licensed.</li>
<li><strong>Senior / principal</strong> — licensed professional who reviews and signs reports, takes professional responsibility, develops clients, and manages risk.</li>
</ul>
<h3>Professional licenses you will hear about</h3>
<div class="tbl-wrap"><table>
<tr><th>Credential</th><th>What it is</th><th>Wisconsin authority</th></tr>
<tr><td><strong>EIT</strong> (Engineer-in-Training)</td><td>Certification after passing the NCEES Fundamentals of Engineering (FE) exam; first step toward the PE.</td><td>DSPS, Examining Board of Architects, Landscape Architects, Professional Engineers, Designers and Professional Land Surveyors (Wis. Stat. ch. 443)</td></tr>
<tr><td><strong>PE</strong> (Professional Engineer)</td><td>License to practice engineering for the public and to seal (stamp) engineering documents. Requires an accredited degree, qualifying experience, and passing the NCEES Principles and Practice of Engineering (PE) exam.</td><td>Same board, Wis. Stat. ch. 443</td></tr>
<tr><td><strong>PLS</strong> (Professional Land Surveyor)</td><td>License to establish property boundaries and prepare legal surveys.</td><td>Same board, Wis. Stat. ch. 443</td></tr>
<tr><td><strong>PG</strong> (Professional Geologist)</td><td>License to practice geology for the public.</td><td>Geologists, Hydrologists and Soil Scientists Examining Board (Wis. Stat. ch. 470)</td></tr>
<tr><td><strong>PH</strong> (Professional Hydrologist)</td><td>License to practice hydrology, including groundwater hydrology.</td><td>Same board, ch. 470</td></tr>
<tr><td><strong>PSS</strong> (Professional Soil Scientist)</td><td>License to practice soil science (for example, soil evaluations for onsite wastewater systems are a separate DSPS credential, the Certified Soil Tester).</td><td>Same board, ch. 470</td></tr>
</table></div>
<p>All of these are administered through the <strong>Wisconsin Department of Safety and Professional Services (DSPS)</strong>. Licenses require renewal and continuing education.</p>
<div class="callout"><strong>"Responsible charge"</strong>When a PE seals a document, they certify that the work was prepared by them or under their direct supervision and control. That is why staff work is reviewed before it goes out: the licensee is personally accountable for it.</div>
<h3>Licensed work in Wisconsin environmental cleanups</h3>
<p>Wisconsin's remediation rules include a chapter on who may do the work: <strong>Wis. Admin. Code ch. NR 712</strong>, "Personnel Qualifications for Conducting Environmental Response Actions." It requires that certain response-action work be performed or supervised by qualified professionals (for example, professional engineers, and hydrogeologists or scientists meeting the rule's education and experience criteria) and that submittals to the DNR carry signed certification statements. You will see these certification pages at the front of every site investigation report and closure request.</p>
<div class="mnemonic">Engineers are chapter <strong>443</strong>; geologists, hydrologists, and soil scientists are chapter <strong>470</strong>. Both boards sit under <strong>DSPS</strong>.</div>
`,
      check: [
        { type: "mc", q: "Which exam must be passed to become an Engineer-in-Training (EIT)?", options: ["NCEES PE exam", "NCEES Fundamentals of Engineering (FE) exam", "ASBOG Fundamentals of Geology exam", "ACI Field Technician exam"], answer: 1, explain: "The FE exam is the first NCEES exam; passing it (with education requirements) leads to EIT certification." },
        { type: "mc", q: "Which Wisconsin administrative code chapter sets personnel qualifications for environmental response actions?", options: ["NR 140", "NR 712", "NR 720", "SPS 361"], answer: 1, explain: "NR 712 covers who may conduct and certify response-action work submitted to the DNR." }
      ]
    },
    {
      title: "The project lifecycle",
      html: `
<p>Nearly every consulting project, from a $2,500 Phase I to a multi-year remediation, follows the same arc.</p>
<ol>
<li><strong>Business development.</strong> A client calls, or a public agency issues a <strong>Request for Proposals (RFP)</strong> or <strong>Request for Qualifications (RFQ)</strong>. Public engineering contracts are often awarded through qualifications-based selection, where the most qualified firm is chosen first and the fee is negotiated afterward.</li>
<li><strong>Proposal.</strong> Defines the <strong>scope of work (SOW)</strong>, assumptions, exclusions, schedule, and <strong>fee</strong>. A clear scope is the PM's best protection against "scope creep."</li>
<li><strong>Contract.</strong> Either a project-specific agreement or a work order under a <strong>Master Services Agreement (MSA)</strong>. Contracts allocate risk: limitation of liability, indemnification, insurance, standard of care, and payment terms.</li>
<li><strong>Notice to proceed (NTP)</strong> and kickoff. Assign staff, order utility locates, schedule subcontractors (drillers, surveyors, laboratories), write the health and safety plan.</li>
<li><strong>Execution.</strong> Field work, laboratory testing, data reduction, analysis.</li>
<li><strong>Deliverable.</strong> Draft, internal technical review (QA/QC), licensed professional sign-off, issue to client (and, where required, to the regulator).</li>
<li><strong>Invoicing and closeout.</strong> Bill against the contract, archive the project file.</li>
</ol>
<h3>Fee structures</h3>
<div class="tbl-wrap"><table>
<tr><th>Structure</th><th>How it works</th><th>Who carries the risk</th></tr>
<tr><td><strong>Lump sum</strong> (fixed fee)</td><td>One price for a defined scope.</td><td>Consultant — if the work takes longer, the firm absorbs the overrun.</td></tr>
<tr><td><strong>Time and materials (T&amp;M)</strong></td><td>Billed at hourly rates plus expenses as incurred.</td><td>Client — but usually capped.</td></tr>
<tr><td><strong>T&amp;M, not-to-exceed (NTE)</strong></td><td>T&amp;M with a ceiling that cannot be passed without written authorization.</td><td>Shared; the PM must request a budget increase before exceeding.</td></tr>
<tr><td><strong>Unit rates</strong></td><td>Price per test, per boring foot, per sample, per trip.</td><td>Common in CMT and drilling; quantity risk falls on the client.</td></tr>
</table></div>
<p>When the client asks for something outside the scope — "while you're out there, can you also sample the other building?" — the correct response is a <strong>change order</strong> or written scope amendment before the work is done, not after.</p>
<div class="callout warn"><strong>Field staff and scope</strong>You will often be the person on site when a client representative asks for extra work. You are not being unhelpful by calling your PM first; you are protecting the client relationship and the firm.</div>
`,
      check: [
        { type: "mc", q: "Under which fee structure does the consultant carry the most risk of a cost overrun?", options: ["Time and materials", "Unit rates", "Lump sum", "Cost-plus"], answer: 2, explain: "In a lump-sum (fixed fee) contract the price is set; extra effort is absorbed by the consultant unless scope changes are documented." },
        { type: "tf", q: "If a client asks for out-of-scope work in the field, the best practice is to perform it and sort out the billing later.", answer: false, explain: "Out-of-scope work should be authorized in writing (change order or scope amendment) before it is performed." }
      ]
    },
    {
      title: "Documentation, standard of care, and ethics",
      html: `
<h3>If it isn't written down, it didn't happen</h3>
<p>Field records may end up in court, in front of a regulator, or in a dispute between an owner and a contractor years later. Good field notes record:</p>
<ul>
<li>Date, project name and number, location, and weather.</li>
<li>Arrival and departure times; everyone on site (names and companies).</li>
<li>What was done, where (with measurements or stationing), and how.</li>
<li>Equipment used, with calibration information.</li>
<li>Observations, test results, deviations from the plan, and who was notified.</li>
<li>Photos with a photo log (number, direction, description).</li>
</ul>
<p>Write in permanent ink. Correct errors with a <strong>single line</strong> through the mistake, initialed and dated, so the original remains readable. Never erase, white-out, or "clean up" field data after the fact.</p>
<h3>Chain of custody</h3>
<p>Environmental samples travel to the laboratory with a <strong>chain-of-custody (COC)</strong> form. Every person who takes possession signs and dates it. An unbroken COC is what makes the analytical results legally defensible.</p>
<h3>Standard of care</h3>
<p>Consultants are generally held to the <strong>standard of care</strong>: the level of skill and care ordinarily exercised by members of the same profession practicing under similar circumstances at the same time and place. It is not a guarantee of perfection. A geotechnical report, for example, describes conditions at the boring locations; conditions between borings can differ, and reports say so in their limitations sections. That is why construction-phase observation by the geotechnical engineer is so valuable.</p>
<h3>Ethics</h3>
<p>The National Society of Professional Engineers (NSPE) Code of Ethics opens with the fundamental canon that engineers shall <strong>"hold paramount the safety, health, and welfare of the public."</strong> In practice for new staff:</p>
<ul>
<li>Never falsify, alter, or selectively omit data — including "failing" test results.</li>
<li>Report test results honestly even when the client or contractor is unhappy.</li>
<li>Keep client information confidential, except where law requires disclosure.</li>
<li>Do not perform work outside your competence; ask.</li>
<li>Disclose conflicts of interest.</li>
</ul>
<div class="callout bad"><strong>Bright line</strong>Changing a failing compaction test to a passing one, or "losing" a lab result that shows contamination, is not a judgment call. It can end careers and, in environmental matters, can be a crime.</div>
`,
      check: [
        { type: "mc", q: "You wrote the wrong depth in your field book. What is the correct fix?", options: ["Erase it and rewrite", "Use correction fluid", "Draw a single line through it, write the correct value, and initial and date the change", "Tear out the page and recopy"], answer: 2, explain: "A single-line strikeout keeps the original legible and shows who changed it and when." },
        { type: "mc", q: "The 'standard of care' means a consultant must:", options: ["Guarantee that conclusions are correct", "Exercise the skill and care ordinarily exercised by similar professionals under similar circumstances", "Follow the client's instructions in all cases", "Perform the minimum work required by regulation"], answer: 1, explain: "The standard of care is reasonableness compared to peers, not perfection." }
      ]
    },
    {
      title: "Who's who: agencies and the acronym survival guide",
      html: `
<h3>Regulators and authorities you will deal with in Wisconsin</h3>
<div class="tbl-wrap"><table>
<tr><th>Agency</th><th>What they regulate (relevant to this course)</th></tr>
<tr><td><strong>Wisconsin Department of Natural Resources (DNR)</strong></td><td>Contaminated site cleanup (Remediation and Redevelopment Program, "RR"), groundwater, wastewater and stormwater permits (WPDES), solid and hazardous waste, air, wetlands, waterways, well construction.</td></tr>
<tr><td><strong>U.S. Environmental Protection Agency (EPA), Region 5</strong></td><td>Federal environmental programs; Region 5 (Chicago) covers Wisconsin, Illinois, Indiana, Michigan, Minnesota, and Ohio. Superfund, TSCA PCB cleanups, brownfield grants.</td></tr>
<tr><td><strong>Wisconsin Department of Agriculture, Trade and Consumer Protection (DATCP)</strong></td><td>Petroleum and hazardous substance storage tanks (ATCP 93); agricultural chemical cleanups.</td></tr>
<tr><td><strong>Wisconsin Department of Safety and Professional Services (DSPS)</strong></td><td>Professional licensing; commercial building and plumbing codes (SPS chapters); onsite wastewater (POWTS).</td></tr>
<tr><td><strong>Wisconsin Department of Health Services (DHS)</strong></td><td>Asbestos and lead professional certification; radioactive materials licensing (including nuclear density gauges — Wisconsin is an NRC Agreement State).</td></tr>
<tr><td><strong>Wisconsin Department of Transportation (WisDOT)</strong></td><td>State highways; publishes the Standard Specifications for Highway and Structure Construction, the Construction and Materials Manual, and the Facilities Development Manual.</td></tr>
<tr><td><strong>U.S. Army Corps of Engineers (USACE)</strong></td><td>Clean Water Act Section 404 permits for fill in waters of the U.S., including wetlands. Most of Wisconsin is handled by the St. Paul District.</td></tr>
<tr><td><strong>OSHA</strong></td><td>Worker safety, including excavations, HAZWOPER, and confined spaces. Wisconsin private-sector employers fall under federal OSHA.</td></tr>
<tr><td><strong>Municipalities and counties</strong></td><td>Zoning, building permits and inspection, local stormwater and erosion control ordinances, shoreland zoning (counties), sewer and water utilities.</td></tr>
</table></div>
<h3>Acronyms you will hear in your first week</h3>
<div class="tbl-wrap"><table>
<tr><th>Acronym</th><th>Meaning</th><th>Acronym</th><th>Meaning</th></tr>
<tr><td>ESA</td><td>Environmental Site Assessment</td><td>REC</td><td>Recognized Environmental Condition</td></tr>
<tr><td>RR</td><td>DNR Remediation &amp; Redevelopment Program</td><td>BRRTS</td><td>Bureau for Remediation and Redevelopment Tracking System</td></tr>
<tr><td>CMT</td><td>Construction Materials Testing</td><td>QA/QC</td><td>Quality Assurance / Quality Control</td></tr>
<tr><td>SOW</td><td>Scope of Work</td><td>NTP</td><td>Notice to Proceed</td></tr>
<tr><td>T&amp;M / NTE</td><td>Time &amp; Materials / Not-to-Exceed</td><td>MSA</td><td>Master Services Agreement</td></tr>
<tr><td>HASP</td><td>Health and Safety Plan</td><td>PPE</td><td>Personal Protective Equipment</td></tr>
<tr><td>RFI</td><td>Request for Information</td><td>EOR</td><td>Engineer of Record</td></tr>
<tr><td>COC</td><td>Chain of Custody</td><td>bgs</td><td>below ground surface</td></tr>
</table></div>
<div class="mnemonic"><strong>DNR</strong> = the land and water. <strong>DATCP</strong> = the tanks (and the farms). <strong>DSPS</strong> = the licenses and the buildings. <strong>DHS</strong> = asbestos, lead, and radiation.</div>
`,
      check: [
        { type: "mc", q: "Which Wisconsin agency administers petroleum storage tank rules under ATCP 93?", options: ["DNR", "DSPS", "DATCP", "DHS"], answer: 2, explain: "Storage tank regulation (ATCP 93) is administered by the Department of Agriculture, Trade and Consumer Protection." },
        { type: "mc", q: "Which EPA region covers Wisconsin?", options: ["Region 3", "Region 5", "Region 7", "Region 8"], answer: 1, explain: "EPA Region 5, headquartered in Chicago, covers WI, IL, IN, MI, MN, and OH." }
      ]
    }
  ],
  terms: [
    { term: "Scope of work (SOW)", def: "The defined tasks, assumptions, and exclusions a consultant agrees to perform; the basis for the fee and the reference point for change orders." },
    { term: "Change order", def: "A written amendment to a contract that changes scope, fee, or schedule. Should be approved before out-of-scope work is performed." },
    { term: "Lump sum", def: "A fixed fee for a defined scope; the consultant bears the risk of overruns." },
    { term: "Time and materials (T&M)", def: "Billing at agreed hourly rates plus expenses as incurred, often with a not-to-exceed (NTE) ceiling." },
    { term: "Master Services Agreement (MSA)", def: "An umbrella contract with standard terms under which individual projects are authorized by work orders." },
    { term: "Utilization", def: "Also chargeability: the percentage of an employee's paid time charged to client projects." },
    { term: "EIT", def: "Engineer-in-Training: certification after passing the NCEES Fundamentals of Engineering (FE) exam." },
    { term: "PE", def: "Professional Engineer: licensed to practice engineering for the public and seal engineering documents (Wis. Stat. ch. 443)." },
    { term: "PG / PH / PSS", def: "Professional Geologist, Professional Hydrologist, Professional Soil Scientist — licensed in Wisconsin under Wis. Stat. ch. 470." },
    { term: "DSPS", def: "Wisconsin Department of Safety and Professional Services: professional licensing and building/plumbing codes." },
    { term: "Responsible charge", def: "Direct control and personal supervision of engineering work by the licensee who seals it." },
    { term: "NR 712", def: "Wisconsin rule setting personnel qualifications for conducting environmental response actions and requiring signed certifications on DNR submittals." },
    { term: "Standard of care", def: "The skill and care ordinarily exercised by members of the same profession under similar circumstances; not a guarantee." },
    { term: "Chain of custody (COC)", def: "A form documenting every transfer of possession of samples from collection to the laboratory, making results defensible." },
    { term: "QA/QC", def: "Quality assurance (the planned system for quality) and quality control (the checks and tests that verify it)." },
    { term: "RFP / RFQ", def: "Request for Proposals / Request for Qualifications: solicitations by clients, often public agencies, for consulting services." },
    { term: "Notice to proceed (NTP)", def: "Written authorization from the client to begin work under a contract." },
    { term: "Engineer of record (EOR)", def: "The licensed engineer responsible for the design documents for a project." },
    { term: "DATCP", def: "Wisconsin Department of Agriculture, Trade and Consumer Protection; regulates storage tanks (ATCP 93) and agricultural chemical cleanups." },
    { term: "EPA Region 5", def: "The EPA regional office in Chicago serving Wisconsin, Illinois, Indiana, Michigan, Minnesota, and Ohio." },
    { term: "USACE St. Paul District", def: "The Army Corps of Engineers district that handles Clean Water Act Section 404 permitting for most of Wisconsin." },
    { term: "bgs", def: "Below ground surface — the standard reference for depths in borings and wells." }
  ],
  resources: [
    { title: "Wisconsin DSPS — professional licensing", url: "https://dsps.wi.gov/", note: "License requirements for PE, PG, PH, PSS, PLS" },
    { title: "NCEES — FE and PE exams", url: "https://ncees.org/", note: "Exam specifications and licensure pathway" },
    { title: "NSPE Code of Ethics for Engineers", url: "https://www.nspe.org/resources/ethics/code-ethics", note: "Fundamental canons and rules of practice" },
    { title: "Wis. Admin. Code NR 700 series (incl. NR 712)", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/700", note: "Remediation rules, including personnel qualifications" },
    { title: "Wisconsin Statutes ch. 443 and ch. 470", url: "https://docs.legis.wisconsin.gov/statutes/statutes", note: "Licensing statutes for engineers and for geologists/hydrologists/soil scientists" },
    { title: "Wisconsin DNR", url: "https://dnr.wisconsin.gov/", note: "State environmental regulator" },
    { title: "EPA Region 5", url: "https://www.epa.gov/aboutepa/epa-region-5", note: "Federal regional office for Wisconsin" }
  ],
  teach: [
    { prompt: "A client calls and asks for a 'quick look' at whether a property is contaminated and whether the soil can support a building. Explain which service lines are involved, what each would produce, and why the scope needs to be written down before anyone goes to the field.",
      model: "<p>Two service lines are involved: environmental (a Phase I ESA, possibly followed by a Phase II with sampling) and geotechnical (soil borings, lab testing, and foundation recommendations). Each produces field and lab data plus a professional opinion in a report. The scope must be written because it defines what will and will not be done, what the fee covers, and what assumptions apply. Without it, extra requests become unpaid scope creep and there is no shared understanding of the deliverable or the limits of the opinion.</p>" },
    { prompt: "Explain what it means when a PE seals a report, and how that affects the way staff-level work is produced and reviewed.",
      model: "<p>Sealing a document certifies that it was prepared by the licensee or under their responsible charge — their direct control and personal supervision — and the licensee takes professional and legal responsibility for it. Therefore staff work must be produced in a way the licensee can supervise and verify: clear field records, traceable calculations, and internal QA/QC review before issue. Staff should never issue engineering opinions on their own.</p>" }
  ],
  exam: {
    count: 15,
    bank: [
      { type: "mc", q: "Which deliverable is most characteristic of construction materials testing?", options: ["Phase I ESA", "Field density test report", "Foundation recommendation report", "Grading plan"], answer: 1, explain: "CMT verifies materials and workmanship in the field, e.g., compaction (density) tests." },
      { type: "mc", q: "What does a PE's seal on a report signify?", options: ["The report was reviewed by the client", "The work was prepared by or under the responsible charge of the licensee", "The regulator has approved the report", "The data are guaranteed accurate"], answer: 1, explain: "A seal signifies the licensee prepared or directly supervised the work and accepts responsibility." },
      { type: "mc", q: "Professional Geologists in Wisconsin are licensed under which statute chapter?", options: ["Ch. 443", "Ch. 470", "Ch. 292", "Ch. 281"], answer: 1, explain: "Ch. 470 covers geologists, hydrologists, and soil scientists. Ch. 443 covers engineers, architects, and surveyors." },
      { type: "mc", q: "Which agency licenses professional engineers in Wisconsin?", options: ["DNR", "DSPS", "DATCP", "WisDOT"], answer: 1, explain: "DSPS administers professional licensing through its examining boards." },
      { type: "mc", q: "A T&M contract with an NTE of $20,000 has reached $19,000 and more work is needed. The PM should:", options: ["Keep working; the client will pay", "Stop and request written authorization to increase the budget", "Switch to lump sum", "Bill the overrun to another project"], answer: 1, explain: "An NTE ceiling cannot be exceeded without written authorization." },
      { type: "tf", q: "In a unit-rate contract, the client generally carries the risk of quantity changes.", answer: true, explain: "Unit rates price each test or foot; more units means a higher bill to the client." },
      { type: "mc", q: "Which form documents each transfer of environmental samples from the field to the laboratory?", options: ["Bill of lading", "Chain of custody", "Daily field report", "Boring log"], answer: 1, explain: "The chain-of-custody form records every person who held the samples." },
      { type: "mc", q: "Which of the following best describes the standard of care?", options: ["Perfection in all professional opinions", "The care a reasonable peer would exercise in similar circumstances", "Compliance with the client's preferences", "Whatever the contract allows"], answer: 1, explain: "Standard of care is measured against similarly situated professionals." },
      { type: "multi", q: "Which items belong in good daily field notes? Select all that apply.", options: ["Weather and personnel on site", "Equipment used and calibration", "Deviations from the plan and who was notified", "Your opinion of the contractor's personality"], answer: [0, 1, 2], explain: "Field notes record objective facts, conditions, equipment, results, and communications — not personal commentary." },
      { type: "mc", q: "Which is the first fundamental canon of the NSPE Code of Ethics?", options: ["Perform services only in areas of competence", "Hold paramount the safety, health, and welfare of the public", "Avoid deceptive acts", "Act as faithful agents for employers"], answer: 1, explain: "Holding paramount public safety, health, and welfare is the first fundamental canon." },
      { type: "mc", q: "Which agency handles Section 404 wetland fill permits for most of Wisconsin?", options: ["EPA Region 5", "USACE St. Paul District", "DSPS", "WisDOT"], answer: 1, explain: "USACE issues Section 404 permits; the St. Paul District covers most of Wisconsin." },
      { type: "mc", q: "In Wisconsin, certification of asbestos professionals and licensing of radioactive materials such as nuclear gauge sources are handled by:", options: ["DNR", "DHS", "DSPS", "OSHA"], answer: 1, explain: "The Department of Health Services certifies asbestos and lead professionals and licenses radioactive materials as an NRC Agreement State." },
      { type: "mc", q: "'bgs' on a boring log means:", options: ["Base grade surface", "Below ground surface", "Bulk gravel sample", "Bottom of geotechnical sample"], answer: 1, explain: "Depths are referenced in feet below ground surface (bgs)." },
      { type: "tf", q: "Public engineering contracts are often awarded through qualifications-based selection, where fee is negotiated after the most qualified firm is chosen.", answer: true, explain: "Qualifications-based selection is common for public engineering services." },
      { type: "mc", q: "A field technician finds a failing compaction test. The contractor asks the technician to 'retest somewhere better' and not report the failure. The correct action is:", options: ["Retest elsewhere and report only the passing result", "Report the failing test, notify the PM and appropriate parties, and retest after corrective work", "Average the two results", "Leave the site"], answer: 1, explain: "All results must be reported. Failing tests are documented, communicated, and retested after correction." },
      { type: "mc", q: "Which credential allows a person to establish legal property boundaries in Wisconsin?", options: ["PE", "PG", "PLS", "EIT"], answer: 2, explain: "Professional Land Surveyors perform boundary and legal surveys." },
      { type: "mc", q: "What is a Master Services Agreement?", options: ["A one-time contract for a single task", "An umbrella contract of standard terms under which projects are authorized by work orders", "A license to practice", "A regulatory permit"], answer: 1, explain: "MSAs set standard terms; individual projects proceed under work orders." },
      { type: "mc", q: "Which department publishes the Standard Specifications for Highway and Structure Construction?", options: ["DNR", "WisDOT", "DSPS", "USACE"], answer: 1, explain: "WisDOT publishes the Standard Specifications, along with the Construction and Materials Manual and Facilities Development Manual." },
      { type: "tf", q: "Wisconsin private-sector employers are covered by federal OSHA rather than a state OSHA plan.", answer: true, explain: "Wisconsin does not operate a state plan for private-sector employers; federal OSHA has jurisdiction." },
      { type: "mc", q: "The main purpose of internal QA/QC review before a report is issued is to:", options: ["Increase billable hours", "Catch technical, data, and communication errors before the client or regulator sees them", "Satisfy marketing", "Delay delivery"], answer: 1, explain: "Technical review protects the client, the public, and the licensee who signs." },
      { type: "mc", q: "In Wisconsin, a DNR submittal for a contaminated site typically includes signed certification statements by qualified professionals because of:", options: ["NR 712", "NR 151", "SPS 321", "ATCP 93"], answer: 0, explain: "NR 712 sets personnel qualifications and certification requirements for response-action submittals." },
      { type: "mc", q: "Which best describes 'scope creep'?", options: ["Planned project phases", "Gradual addition of unauthorized work beyond the agreed scope", "Delays caused by weather", "A type of soil movement"], answer: 1, explain: "Scope creep is unauthorized expansion of work, which erodes budgets unless managed through change orders." }
    ]
  }
});
