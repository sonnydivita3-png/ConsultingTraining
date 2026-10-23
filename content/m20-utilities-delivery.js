COURSE.addModule({
  id: "m20",
  track: "t5",
  title: "Utilities, Roadways, and Project Delivery",
  hours: 5,
  summary: "Sanitary, water, and storm utilities and how they're built and tested; roadway geometry fundamentals; project delivery methods, contracts, specifications, and construction administration — ending with a walk-through of a Wisconsin brownfield project that uses every discipline in this course.",
  objectives: [
    "Describe gravity sanitary sewer, water distribution, and storm sewer systems, their materials, design criteria, and acceptance tests.",
    "Explain trench construction, utility testing (air, vacuum, deflection, pressure, disinfection), and trenchless methods.",
    "Use roadway geometry vocabulary: cross-slope, alignment, stationing, vertical curves, sight distance, and governing manuals.",
    "Compare project delivery methods and explain contract documents, CSI MasterFormat, and bidding.",
    "Explain submittals, RFIs, change orders, pay applications, and closeout — and how all four disciplines connect on one project."
  ],
  lessons: [
    {
      title: "Sanitary sewers and storm sewers",
      html: `
<h3>Gravity sanitary sewers</h3>
<ul>
<li>Wastewater flows by gravity in sloped pipes from buildings (<strong>building sewers/laterals</strong>, governed by the plumbing code, SPS 382) to <strong>public sewers</strong> (DNR approval under NR 110 for sewer extensions) and on to the treatment plant.</li>
<li><strong>Manholes</strong> are placed at changes in direction, grade, or pipe size, at junctions, and at maximum spacing intervals (commonly about 400 ft for small sewers under widely used standards).</li>
<li><strong>Minimum slopes</strong> keep velocities high enough (about 2 ft/s flowing full) to prevent solids from settling — for example, about 0.40% for an 8-inch sewer under the "Ten States Standards" (Recommended Standards for Wastewater Facilities), which Wisconsin's rules parallel. Public gravity sewers are generally at least 8 inches in diameter.</li>
<li>Common pipe: PVC gravity sewer pipe (e.g., ASTM D3034, SDR 35), ductile iron, reinforced concrete for large sizes.</li>
<li><strong>Lift stations</strong> and <strong>force mains</strong> pump wastewater where gravity won't work.</li>
<li><strong>Inflow and infiltration (I/I)</strong> — clear water entering sewers through leaky joints, manholes, and illicit connections (e.g., sump pumps); a major cause of overflows and treatment cost.</li>
</ul>
<h3>Pipe flow: Manning's equation</h3>
<span class="formula">Q = (1.49 / n) · A · R^(2/3) · S^(1/2)      (U.S. units)
n = roughness (≈ 0.013 commonly used for design of PVC and concrete)
A = flow area (ft²);  R = hydraulic radius = A / wetted perimeter (ft);  S = slope (ft/ft)</span>
<h3>Storm sewers</h3>
<ul>
<li><strong>Inlets</strong> and <strong>catch basins</strong> collect runoff (catch basins have a sump to trap sediment); storm sewers convey it to ponds, ditches, or receiving waters through <strong>outfalls</strong> with energy dissipation (riprap, endwalls).</li>
<li>Pipes: reinforced concrete pipe (RCP, ASTM C76), HDPE, PVC; <strong>culverts</strong> pass water under roads.</li>
<li>Storm sewers are commonly sized for a 10-year storm (local criteria vary), with an overland flow path designed to safely pass larger storms such as the 100-year event.</li>
</ul>
<h3>The "Yellow Book"</h3>
<p>Most Wisconsin municipal utility projects reference the <strong>Standard Specifications for Sewer &amp; Water Construction in Wisconsin</strong> — universally called the <strong>Yellow Book</strong> — plus project special provisions.</p>
`,
      check: [
        { type: "mc", q: "The main reason sanitary sewers have minimum slopes is to:", options: ["Reduce cost", "Maintain velocities that keep solids from settling", "Prevent freezing", "Allow inspection"], answer: 1, explain: "Self-cleansing velocity (~2 ft/s full)." },
        { type: "mc", q: "Clear water entering sanitary sewers through leaky joints and sump pumps is called:", options: ["Exfiltration", "Inflow and infiltration (I/I)", "Backflow", "Surcharge only"], answer: 1, explain: "I/I." }
      ]
    },
    {
      title: "Water distribution, trench construction, and utility testing",
      html: `
<h3>Water mains</h3>
<ul>
<li>Pressurized pipes (PVC per AWWA C900, ductile iron per AWWA C151, HDPE) with <strong>valves</strong> for isolation, <strong>hydrants</strong> for fire protection and flushing, and <strong>services</strong> (corporation stop, curb stop) to buildings.</li>
<li>Design considers domestic demand plus <strong>fire flow</strong>, maintaining minimum pressures (widely used standards call for at least 20 psi at all points under fire-flow conditions).</li>
<li><strong>Frost</strong>: Wisconsin water mains are buried deep — commonly 6 feet of cover or more — to prevent freezing.</li>
<li><strong>Thrust restraint</strong> (concrete thrust blocks or restrained joints) at bends, tees, and dead ends.</li>
<li><strong>Separation from sewers</strong>: Wisconsin rules for community water systems (NR 811) set minimum horizontal separations between water mains and sewers and vertical separation where they cross (with the water main preferably above), to protect drinking water.</li>
</ul>
<h3>Trench anatomy</h3>
<div class="tbl-wrap"><table>
<tr><th>Zone</th><th>Purpose</th></tr>
<tr><td><strong>Foundation</strong> (if needed)</td><td>Stabilize a soft trench bottom (often with crushed stone)</td></tr>
<tr><td><strong>Bedding</strong></td><td>Uniform support beneath the pipe</td></tr>
<tr><td><strong>Haunching</strong></td><td>Material worked under the lower sides of the pipe — critical for flexible pipe support</td></tr>
<tr><td><strong>Initial backfill</strong></td><td>Covers the pipe to a set height above the crown</td></tr>
<tr><td><strong>Final backfill</strong></td><td>To subgrade or surface; compacted in lifts, especially under pavements</td></tr>
</table></div>
<p>CMT technicians test trench backfill compaction (Module 15); settlement of poorly compacted trenches under pavement is one of the most common municipal complaints.</p>
<h3>Acceptance testing</h3>
<div class="tbl-wrap"><table>
<tr><th>Test</th><th>Applies to</th><th>Purpose</th></tr>
<tr><td>Low-pressure air test (e.g., ASTM F1417)</td><td>Gravity sanitary sewer</td><td>Leakage of joints</td></tr>
<tr><td>Vacuum test (ASTM C1244)</td><td>Concrete manholes</td><td>Manhole leakage</td></tr>
<tr><td>Deflection test (mandrel)</td><td>Flexible pipe (PVC, HDPE)</td><td>Pipe deformation within the allowable limit (commonly 5% for PVC sewer pipe, per specification)</td></tr>
<tr><td>CCTV inspection</td><td>Sewers</td><td>Defects, alignment, sags; rated with standardized coding (e.g., NASSCO PACP)</td></tr>
<tr><td>Hydrostatic pressure and leakage test (AWWA C600/C605)</td><td>Water mains</td><td>Integrity under pressure</td></tr>
<tr><td>Disinfection and bacteriological sampling (AWWA C651)</td><td>Water mains</td><td>Safe drinking water before service</td></tr>
</table></div>
<h3>Trenchless methods</h3>
<ul>
<li><strong>Horizontal directional drilling (HDD)</strong> — steerable drilling for pipes under roads, rivers, and wetlands.</li>
<li><strong>Jack and bore / auger boring</strong> — casing pipe pushed under railroads and highways.</li>
<li><strong>Pipe bursting</strong> — breaks old pipe while pulling in new pipe.</li>
<li><strong>Cured-in-place pipe (CIPP) lining</strong> — resin-saturated liner rehabilitates existing sewers without excavation.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Which test is used to check gravity sanitary sewer joints for leakage?", options: ["Hydrostatic test at 150 psi", "Low-pressure air test", "Slump test", "Rice test"], answer: 1, explain: "Low-pressure air testing (e.g., ASTM F1417)." },
        { type: "mc", q: "AWWA C651 governs:", options: ["Sewer CCTV", "Disinfection of water mains", "Manhole vacuum testing", "Asphalt density"], answer: 1, explain: "Disinfecting water mains." }
      ]
    },
    {
      title: "Roadway geometry fundamentals",
      html: `
<h3>Cross-section elements</h3>
<ul>
<li><strong>Travel lanes</strong> (commonly 10–12 ft), <strong>shoulders</strong>, <strong>curb and gutter</strong>, terrace, sidewalk, right-of-way.</li>
<li><strong>Crown and cross-slope</strong> — a typical normal crown of about 2% drains water off the pavement.</li>
<li><strong>Superelevation</strong> — banking on horizontal curves to counteract centrifugal force.</li>
</ul>
<h3>Horizontal alignment</h3>
<p>Tangents connected by circular curves. Key points: <strong>PI</strong> (point of intersection of tangents), <strong>PC</strong> (point of curvature, start of curve), <strong>PT</strong> (point of tangency, end of curve). Locations along the alignment are given by <strong>stationing</strong> (Module 4).</p>
<h3>Vertical alignment</h3>
<p>Grades (in percent) connected by <strong>parabolic vertical curves</strong>: <strong>crest</strong> curves (hilltops) and <strong>sag</strong> curves (valleys). Key points: <strong>PVI</strong> (point of vertical intersection), <strong>PVC</strong>, <strong>PVT</strong>. The <strong>K-value</strong> (length of curve per percent change in grade) relates curve length to sight distance and comfort. Sag curves need drainage at the low point.</p>
<h3>Sight distance and design speed</h3>
<p><strong>Stopping sight distance</strong> — the distance needed to perceive, react to, and stop for an object in the road — depends on <strong>design speed</strong> and controls curve lengths and intersection sight triangles.</p>
<h3>Governing manuals</h3>
<ul>
<li><strong>AASHTO "Green Book"</strong> — <em>A Policy on Geometric Design of Highways and Streets</em>.</li>
<li><strong>WisDOT Facilities Development Manual (FDM)</strong> — Wisconsin state highway design policy.</li>
<li><strong>MUTCD</strong> with the Wisconsin supplement — signs, signals, and pavement markings.</li>
<li><strong>2010 ADA Standards</strong> and the U.S. Access Board's public right-of-way guidelines — curb ramps and detectable warning surfaces.</li>
<li>Local street standards for municipal projects.</li>
</ul>
<h3>Traffic and intersections</h3>
<p>Large developments may require a <strong>traffic impact analysis (TIA)</strong>, which evaluates trip generation and intersection performance (level of service, LOS A–F). Wisconsin has built many modern <strong>roundabouts</strong>, which reduce severe crashes compared with many signalized and stop-controlled intersections.</p>
`,
      check: [
        { type: "mc", q: "On a horizontal curve, the point where the curve begins is the:", options: ["PI", "PC", "PT", "PVI"], answer: 1, explain: "PC = point of curvature." },
        { type: "mc", q: "Which manual is AASHTO's geometric design policy?", options: ["Yellow Book", "Green Book", "Red Book", "Blue Book"], answer: 1, explain: "The AASHTO Green Book." }
      ]
    },
    {
      title: "Project delivery, contracts, and specifications",
      html: `
<h3>Delivery methods</h3>
<div class="tbl-wrap"><table>
<tr><th>Method</th><th>How it works</th><th>Trade-offs</th></tr>
<tr><td><strong>Design-bid-build (DBB)</strong></td><td>Owner hires a designer; completed documents are bid; lowest responsive, responsible bidder builds</td><td>Traditional for public work; clear roles; sequential and slower; change orders when documents miss something</td></tr>
<tr><td><strong>Design-build (DB)</strong></td><td>One entity designs and builds under a single contract</td><td>Faster, single point of responsibility; owner has less control over design details</td></tr>
<tr><td><strong>Construction manager at risk (CMAR)</strong></td><td>CM joins during design, provides preconstruction services, then builds for a guaranteed maximum price (GMP)</td><td>Early contractor input; GMP negotiation</td></tr>
</table></div>
<h3>Design phases (typical)</h3>
<p>Planning/feasibility → schematic design (~30%) → design development (~60%) → construction documents (90%, 100%) → bidding → construction administration → closeout. Consultants' geotechnical and environmental input is most valuable early — before the design locks in.</p>
<h3>Contract documents</h3>
<ul>
<li><strong>Agreement</strong> (standard forms from AIA, EJCDC, or ConsensusDocs, or owner-specific).</li>
<li><strong>General and supplementary conditions</strong> — rights and responsibilities, changes, payment, claims.</li>
<li><strong>Drawings</strong> and <strong>specifications</strong>, plus <strong>addenda</strong> issued during bidding.</li>
<li><strong>Bonds</strong> — bid bond, performance bond, payment bond (common on public work).</li>
</ul>
<h3>CSI MasterFormat</h3>
<p>Specifications are organized by divisions. Ones you'll use constantly:</p>
<div class="tbl-wrap"><table>
<tr><th>Division</th><th>Subject</th></tr>
<tr><td>01</td><td>General Requirements (including testing, submittals, quality requirements)</td></tr>
<tr><td>02</td><td>Existing Conditions (including site remediation and demolition)</td></tr>
<tr><td>03</td><td>Concrete</td></tr>
<tr><td>04</td><td>Masonry</td></tr>
<tr><td>05</td><td>Metals</td></tr>
<tr><td>31</td><td>Earthwork</td></tr>
<tr><td>32</td><td>Exterior Improvements (paving, site concrete, landscaping)</td></tr>
<tr><td>33</td><td>Utilities</td></tr>
</table></div>
<p>Each section uses a three-part format: <strong>Part 1 General</strong> (scope, references, submittals, quality assurance), <strong>Part 2 Products</strong> (materials), <strong>Part 3 Execution</strong> (installation, field quality control, testing). Testing requirements for CMT staff are usually in Part 3 and Division 01.</p>
<h3>Bidding</h3>
<p>Bids may be <strong>lump sum</strong> or <strong>unit price</strong> (common for utilities and roads — e.g., $/lineal foot of pipe, $/ton of asphalt, $/cubic yard of undercut). A <strong>bid tabulation</strong> compares bids. Pre-bid meetings and addenda clarify questions. Public works in Wisconsin follow statutory competitive bidding requirements.</p>
`,
      check: [
        { type: "mc", q: "In which delivery method does one entity both design and build under a single contract?", options: ["Design-bid-build", "Design-build", "CMAR", "Unit price"], answer: 1, explain: "Design-build." },
        { type: "mc", q: "Earthwork specifications are found in CSI Division:", options: ["03", "31", "32", "33"], answer: 1, explain: "Division 31 Earthwork; 32 Exterior Improvements; 33 Utilities." },
        { type: "mc", q: "Field quality control and testing requirements are typically in which part of a spec section?", options: ["Part 1 General", "Part 2 Products", "Part 3 Execution", "The bid form"], answer: 2, explain: "Part 3 Execution (with Division 01 general testing requirements)." }
      ]
    },
    {
      title: "Construction administration and the whole-project view",
      html: `
<h3>Construction administration vocabulary</h3>
<ul>
<li><strong>Submittals</strong> — shop drawings, product data, samples, mix designs, test reports submitted by the contractor for the design professional's review. Typical review actions: <em>approved / no exceptions taken</em>, <em>approved as noted</em>, <em>revise and resubmit</em>, <em>rejected</em>. Approved submittals become a basis for field inspection.</li>
<li><strong>RFI</strong> — Request for Information to clarify documents.</li>
<li><strong>Change order</strong> — signed modification of contract scope, price, or time; a <strong>construction change directive</strong> directs a change before price agreement; a <strong>field order</strong> or <strong>ASI</strong> makes minor changes without cost or time impact.</li>
<li><strong>Pay application</strong> — the contractor's monthly request for payment against a <strong>schedule of values</strong>, often with <strong>retainage</strong> withheld until completion.</li>
<li><strong>Schedule</strong> — critical path method (CPM); activities on the <strong>critical path</strong> have no <strong>float</strong>, so delays to them delay the project.</li>
<li><strong>Substantial completion</strong> (usable for its intended purpose), <strong>punch list</strong> (remaining items), <strong>final completion</strong>, <strong>record drawings (as-builts)</strong>, and <strong>warranty</strong> period.</li>
</ul>
<h3>Putting it all together: a Waukesha brownfield, start to finish</h3>
<p>A former machine shop is redeveloped as a medical office building. Here is how this course's modules show up, in order:</p>
<ol>
<li><strong>Proposal and scope</strong> (Module 1) — the developer's attorney asks for a Phase I.</li>
<li><strong>Phase I ESA</strong> (Module 8) — Sanborn maps and city directories show a plating line and degreaser; BRRTS shows a closed LUST case next door, which is evaluated as a potential migration source onto the subject property. A REC is identified for the plating area.</li>
<li><strong>Phase II</strong> (Modules 7, 9) — borings find TCE in soil and groundwater above NR 140 ES and NR 720 RCLs, plus metals in fill; sub-slab vapor exceeds screening levels. The owner reports the discharge to the DNR under § 292.11 (Module 6); a BRRTS ERP case opens.</li>
<li><strong>Liability and funding</strong> (Modules 5, 11) — buyer completes AAI for BFPP status; city pursues an EPA cleanup grant and ER TIF; the parties weigh VPLE versus standard closure.</li>
<li><strong>Geotechnical exploration</strong> (Modules 3, 12, 13) — SPT borings show 6 ft of fill over stiff lean clay till and dolomite at 22 ft; groundwater at 9 ft.</li>
<li><strong>Design</strong> (Modules 14, 19, 20) — spread footings on till after removing fill beneath footings; building slab and parking lot serve as the cap; vapor barrier with sub-slab venting; stormwater uses lined bioretention and a proprietary device instead of infiltration through contaminated fill; clean utility corridors.</li>
<li><strong>Remedial design and DNR approvals</strong> (Module 10) — NR 718 soil management plan; source excavation of TCE hot spot; enhanced bioremediation injections for groundwater.</li>
<li><strong>Construction</strong> (Modules 2, 15–18) — HASP, Diggers Hotline, trench safety; environmental oversight segregates soil; CMT tests fill compaction and concrete; special inspections of footings, reinforcing, and concrete; asphalt density testing for the lot; daily field reports document the cap and vapor barrier.</li>
<li><strong>Closure</strong> (Module 10) — groundwater monitoring shows a receding plume; closure request with continuing obligations (cap, vapor system, groundwater use restriction); final special inspection report to the building official; record drawings to the owner.</li>
</ol>
<div class="callout"><strong>The point of this course</strong>Every discipline's decisions change the others' costs and risks. Fluency in all four languages is what lets you notice — in a boring log, a lab report, a grading plan, or a pour ticket — the detail that matters to someone else on the team.</div>
`,
      check: [
        { type: "mc", q: "A submittal returned 'revise and resubmit' means:", options: ["Proceed with fabrication", "Corrections are required and it must be submitted again before proceeding", "It is rejected permanently", "It is approved with no comments"], answer: 1, explain: "Revise and resubmit requires correction and resubmittal." },
        { type: "mc", q: "Activities on the critical path have:", options: ["Lots of float", "Zero float — delays to them delay the project", "No duration", "No predecessors"], answer: 1, explain: "Critical path activities have no float." }
      ]
    }
  ],
  terms: [
    { term: "Building sewer / lateral", def: "Private sewer from a building to the public main; governed by the plumbing code (SPS 382)." },
    { term: "NR 110", def: "Wisconsin DNR rule for sewerage system design and sewer extension approvals." },
    { term: "Manhole", def: "Access structure at sewer junctions, changes in direction, grade, or size, and at maximum spacing." },
    { term: "Ten States Standards", def: "Recommended Standards for Wastewater (and Water) Facilities by the Great Lakes–Upper Mississippi River Board; widely referenced design criteria." },
    { term: "Self-cleansing velocity", def: "Flow velocity (~2 ft/s full) preventing solids deposition in sewers." },
    { term: "Lift station / force main", def: "Pumping station and pressurized pipe moving wastewater where gravity flow isn't possible." },
    { term: "Inflow and infiltration (I/I)", def: "Clear water entering sanitary sewers through defects and improper connections." },
    { term: "Manning's equation", def: "Q = (1.49/n)·A·R^(2/3)·S^(1/2) for open-channel and gravity pipe flow." },
    { term: "Catch basin", def: "Storm inlet structure with a sump to trap sediment." },
    { term: "Outfall", def: "Point where a storm sewer discharges to a pond, ditch, or receiving water." },
    { term: "RCP", def: "Reinforced concrete pipe (ASTM C76)." },
    { term: "Yellow Book", def: "Standard Specifications for Sewer & Water Construction in Wisconsin." },
    { term: "AWWA C900", def: "PVC pressure pipe standard for water mains." },
    { term: "Fire flow", def: "Water flow required for firefighting, a key water main design condition." },
    { term: "Thrust restraint", def: "Thrust blocks or restrained joints resisting forces at bends, tees, and dead ends." },
    { term: "NR 811", def: "Wisconsin rule for community water system design, including water main–sewer separation." },
    { term: "Bedding / haunching", def: "Pipe support zones beneath and around the lower sides of a pipe." },
    { term: "Low-pressure air test", def: "Acceptance test for gravity sewer joint tightness (e.g., ASTM F1417)." },
    { term: "Manhole vacuum test (ASTM C1244)", def: "Acceptance test for concrete manhole leakage." },
    { term: "Mandrel deflection test", def: "Pulling a sized mandrel through flexible pipe to verify deflection limits." },
    { term: "CCTV inspection", def: "Television inspection of sewers, often coded with NASSCO PACP." },
    { term: "AWWA C651", def: "Standard for disinfecting water mains." },
    { term: "HDD", def: "Horizontal directional drilling, a steerable trenchless method." },
    { term: "CIPP", def: "Cured-in-place pipe lining for trenchless sewer rehabilitation." },
    { term: "Cross-slope / crown", def: "Transverse pavement slope (typically ~2%) draining water off the roadway." },
    { term: "Superelevation", def: "Banking of a roadway on horizontal curves." },
    { term: "PC / PI / PT", def: "Point of curvature / point of intersection / point of tangency on horizontal curves." },
    { term: "PVI / PVC / PVT", def: "Points of vertical intersection, curvature, and tangency on vertical curves." },
    { term: "K-value", def: "Vertical curve length per percent change in grade." },
    { term: "Stopping sight distance", def: "Distance needed to perceive, react, and stop; depends on design speed." },
    { term: "AASHTO Green Book", def: "A Policy on Geometric Design of Highways and Streets." },
    { term: "Traffic impact analysis (TIA)", def: "Study of a development's traffic effects and needed improvements; uses level of service A–F." },
    { term: "Design-bid-build", def: "Delivery method where design is completed, then bid and built by a separate contractor." },
    { term: "Design-build", def: "Single entity designs and builds under one contract." },
    { term: "CMAR", def: "Construction manager at risk: CM provides preconstruction input then builds under a GMP." },
    { term: "GMP", def: "Guaranteed maximum price." },
    { term: "Addendum", def: "Change to bidding documents issued before bids are due." },
    { term: "Performance / payment bond", def: "Surety bonds guaranteeing contract completion / payment of subcontractors and suppliers." },
    { term: "CSI MasterFormat", def: "Standard organization of specifications by division (e.g., 03 Concrete, 31 Earthwork, 33 Utilities)." },
    { term: "Three-part section format", def: "Part 1 General, Part 2 Products, Part 3 Execution." },
    { term: "Unit price bid", def: "Bid priced per unit quantity (e.g., $/lf, $/ton)." },
    { term: "Submittal", def: "Contractor-provided shop drawings, product data, samples, or mix designs for design review." },
    { term: "Construction change directive", def: "Written order directing a change before price/time agreement." },
    { term: "Schedule of values", def: "Breakdown of the contract sum used to evaluate pay applications." },
    { term: "Retainage", def: "Portion of payments withheld until completion." },
    { term: "Critical path / float", def: "Longest sequence of dependent activities / scheduling slack of non-critical activities." },
    { term: "Substantial completion", def: "Stage at which work is sufficiently complete for intended use." },
    { term: "Punch list", def: "List of remaining items to complete or correct before final completion." },
    { term: "Record drawings (as-builts)", def: "Drawings documenting how the project was actually constructed." }
  ],
  resources: [
    { title: "Wis. Admin. Code NR 110 and NR 811", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/100", note: "Sewerage and community water system design" },
    { title: "Ten States Standards (Recommended Standards for Wastewater Facilities)", url: "https://www.health.state.mn.us/communities/environment/water/tenstates/", note: "Widely used design criteria" },
    { title: "AASHTO — Green Book", url: "https://store.transportation.org/", note: "Geometric design policy (purchase)" },
    { title: "WisDOT Facilities Development Manual", url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/fdm.aspx", note: "Wisconsin roadway design policy" },
    { title: "FHWA — MUTCD", url: "https://mutcd.fhwa.dot.gov/", note: "Traffic control devices" },
    { title: "CSI — MasterFormat", url: "https://www.csiresources.org/standards/masterformat", note: "Specification organization" },
    { title: "EJCDC — Engineers Joint Contract Documents Committee", url: "https://www.ejcdc.org/", note: "Standard engineering and construction contracts" }
  ],
  teach: [
    { prompt: "Describe the acceptance tests for a new gravity sanitary sewer and a new water main on a Wisconsin municipal project, and explain what each protects against.",
      model: "<p>Gravity sewer: low-pressure air testing of pipe segments for joint leakage (protects against infiltration and exfiltration), vacuum testing of concrete manholes (leakage and I/I), mandrel deflection testing of flexible PVC pipe after backfill to confirm deformation is within the specified limit (commonly 5%) — which checks bedding and haunching — and CCTV inspection for sags, offsets, and defects. Trench backfill compaction testing protects the pavement from settlement. Water main: hydrostatic pressure and leakage testing (AWWA C600/C605) confirms integrity and joint tightness, and disinfection with bacteriological sampling (AWWA C651) confirms the water is safe before service. Separation from sewers per NR 811 protects drinking water. Specifications typically come from the Yellow Book plus special provisions.</p>" },
    { prompt: "Using the brownfield example from the last lesson as a model, explain how a finding in one discipline changed decisions in two others. Then describe one example from your own expected work.",
      model: "<p>In the example, the environmental finding of contaminated fill changed civil design (stormwater shifted from infiltration to lined bioretention and a proprietary device; clean utility corridors were added) and geotechnical/construction work (fill removal beneath footings became both a foundation improvement and a source removal, managed under an NR 718 soil management plan with environmental oversight alongside CMT compaction testing). The geotechnical finding of a 9-ft water table affected dewatering permits and treatment because groundwater contained TCE. A personal example might be: as a CMT technician, noticing petroleum odor in a utility trench and stopping to notify the PM and environmental team, which triggers screening, soil segregation, possible spill reporting, and a change in disposal and backfill plans.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Private building sewers in Wisconsin are governed by the:", options: ["NR 110", "Plumbing code (SPS 382)", "NR 140", "ATCP 93"], answer: 1, explain: "SPS 382; public sewer extensions fall under DNR NR 110." },
      { type: "mc", q: "Manholes are required at:", options: ["Only the end of a sewer", "Changes in direction, grade, or size, junctions, and maximum spacing", "Every 50 ft", "Only at the treatment plant"], answer: 1, explain: "Standard manhole placement rules." },
      { type: "mc", q: "A typical minimum self-cleansing velocity for sanitary sewers flowing full is about:", options: ["0.5 ft/s", "2 ft/s", "10 ft/s", "20 ft/s"], answer: 1, explain: "About 2 ft/s." },
      { type: "mc", q: "In Manning's equation, R is the:", options: ["Roughness", "Hydraulic radius (area ÷ wetted perimeter)", "Rainfall", "Radius of the pipe"], answer: 1, explain: "Hydraulic radius." },
      { type: "mc", q: "A catch basin differs from a simple inlet by having:", options: ["A grate", "A sump to trap sediment", "A pump", "A valve"], answer: 1, explain: "Sump." },
      { type: "mc", q: "The 'Yellow Book' in Wisconsin refers to:", options: ["WisDOT Standard Specifications", "Standard Specifications for Sewer & Water Construction in Wisconsin", "AASHTO Green Book", "OSHA manual"], answer: 1, explain: "Yellow Book = sewer and water specs." },
      { type: "mc", q: "Why are Wisconsin water mains buried with 6 ft or more of cover?", options: ["Aesthetics", "Frost protection", "Fire flow", "Traffic noise"], answer: 1, explain: "Prevent freezing." },
      { type: "mc", q: "Thrust blocks are placed at:", options: ["Straight runs only", "Bends, tees, and dead ends", "Manholes", "Catch basins"], answer: 1, explain: "Where unbalanced thrust occurs." },
      { type: "mc", q: "Which Wisconsin rule addresses separation between water mains and sewers in community systems?", options: ["NR 140", "NR 811", "NR 151", "SPS 383"], answer: 1, explain: "NR 811." },
      { type: "mc", q: "The haunch zone of a pipe trench is critical because:", options: ["It holds the pavement", "It supports the lower sides of flexible pipe", "It drains water", "It contains the utility marker"], answer: 1, explain: "Haunch support limits flexible pipe deflection." },
      { type: "mc", q: "A mandrel test checks:", options: ["Water pressure", "Deflection of flexible pipe", "Manhole leakage", "Disinfection"], answer: 1, explain: "Mandrel deflection test." },
      { type: "mc", q: "Which trenchless method rehabilitates an existing sewer with a resin-saturated liner?", options: ["HDD", "Pipe bursting", "CIPP", "Jack and bore"], answer: 2, explain: "Cured-in-place pipe." },
      { type: "mc", q: "A typical normal crown cross-slope for pavement is about:", options: ["0.2%", "2%", "8%", "12%"], answer: 1, explain: "~2%." },
      { type: "mc", q: "On a vertical curve, the point of vertical intersection is the:", options: ["PVC", "PVI", "PVT", "PI"], answer: 1, explain: "PVI." },
      { type: "mc", q: "Stopping sight distance depends primarily on:", options: ["Pavement color", "Design speed", "Number of lanes", "Utility locations"], answer: 1, explain: "Design speed." },
      { type: "mc", q: "Wisconsin's state highway design policy manual is the:", options: ["CMM", "FDM", "MUTCD", "Yellow Book"], answer: 1, explain: "Facilities Development Manual." },
      { type: "mc", q: "In CMAR delivery, the construction manager:", options: ["Only designs", "Provides preconstruction input and builds under a GMP", "Is the building official", "Only inspects"], answer: 1, explain: "CMAR with guaranteed maximum price." },
      { type: "mc", q: "An addendum is issued:", options: ["After construction", "During bidding to change bid documents", "Only for change orders", "By the contractor"], answer: 1, explain: "Addenda modify bid documents before bids are due." },
      { type: "mc", q: "CSI Division 33 covers:", options: ["Concrete", "Earthwork", "Utilities", "Metals"], answer: 2, explain: "Utilities." },
      { type: "mc", q: "Site remediation in CSI MasterFormat falls under Division:", options: ["01", "02", "31", "33"], answer: 1, explain: "Division 02 Existing Conditions." },
      { type: "mc", q: "A unit price bid item for undercut would be priced per:", options: ["Lump sum", "Cubic yard (or ton)", "Hour only", "Drawing sheet"], answer: 1, explain: "Unit quantities like yd³." },
      { type: "mc", q: "A signed modification of contract price or time is a:", options: ["RFI", "Change order", "Submittal", "Punch list"], answer: 1, explain: "Change order." },
      { type: "mc", q: "Retainage is:", options: ["A soil retaining wall", "A portion of payment withheld until completion", "A testing fee", "A bond"], answer: 1, explain: "Withheld payment." },
      { type: "mc", q: "The stage at which a building can be used for its intended purpose is:", options: ["Final completion", "Substantial completion", "Notice to proceed", "Bid opening"], answer: 1, explain: "Substantial completion." },
      { type: "mc", q: "Record drawings document:", options: ["The original bid design", "How the project was actually constructed", "Only utility locations", "Only change orders"], answer: 1, explain: "As-built conditions." },
      { type: "mc", q: "A CMT technician smells strong petroleum odor in a utility trench on a site with no known contamination. Best action?", options: ["Keep testing compaction", "Stop, notify the PM and environmental team, and document", "Backfill quickly", "Ignore it"], answer: 1, explain: "Cross-discipline awareness: possible contamination triggers screening, soil management, and potential reporting." }
    ]
  }
});
