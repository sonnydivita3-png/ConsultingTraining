COURSE.addModule({
  id: "m11",
  track: "t2",
  title: "Brownfield Redevelopment in Wisconsin",
  hours: 4,
  summary: "Brownfield redevelopment ties every environmental topic together with real estate, finance, and construction. This module covers definitions, Wisconsin and federal liability protections, funding tools, deal risk management, and how cleanup is integrated with building a new project.",
  objectives: [
    "Define a brownfield under federal and Wisconsin usage and identify the parties involved in a redevelopment.",
    "Explain Wisconsin liability tools — VPLE, local government, lender, and off-site discharge exemptions — alongside CERCLA protections.",
    "Describe major brownfield funding sources, including EPA grants, Wisconsin programs, and tax incremental financing.",
    "Explain how environmental risk is priced and allocated in a transaction (cost estimates, contingencies, indemnities, insurance).",
    "Integrate remediation with design and construction: caps, vapor mitigation, soil management, stormwater, utilities, and documentation."
  ],
  lessons: [
    {
      title: "What a brownfield is and who is at the table",
      html: `
<h3>Definitions</h3>
<p>Federally, CERCLA defines a brownfield site as <strong>"real property, the expansion, redevelopment, or reuse of which may be complicated by the presence or potential presence of a hazardous substance, pollutant, or contaminant."</strong> Wisconsin statutes describe brownfields as abandoned, idle, or underused commercial or industrial properties whose expansion or redevelopment is adversely affected by actual or perceived environmental contamination.</p>
<p>The word <em>perceived</em> matters: many brownfields turn out to have modest contamination, but uncertainty alone can stall a property for decades. Reducing uncertainty with good data is often the consultant's most valuable contribution.</p>
<h3>Why redevelop brownfields?</h3>
<ul>
<li>Reuses existing infrastructure (roads, utilities) instead of consuming farmland ("greenfields").</li>
<li>Returns idle property to the tax rolls and removes blight.</li>
<li>Addresses contamination that would otherwise remain unmanaged.</li>
<li>Often located in established neighborhoods and downtowns where communities want investment.</li>
</ul>
<p>Wisconsin has many well-known brownfield successes. Milwaukee's <strong>Menomonee Valley</strong>, for example, transformed former rail yards and industrial land into an industrial center, the Harley-Davidson Museum, and parkland through a public-private redevelopment effort over two decades.</p>
<h3>Who's at the table</h3>
<div class="tbl-wrap"><table>
<tr><th>Party</th><th>Main concern</th></tr>
<tr><td>Developer / buyer</td><td>Cost, schedule, liability, financing, return on investment</td></tr>
<tr><td>Seller</td><td>Getting out of liability; price</td></tr>
<tr><td>Municipality / redevelopment authority</td><td>Tax base, jobs, blight elimination; often acquires and assembles sites</td></tr>
<tr><td>Lender</td><td>Collateral value; borrower's ability to repay; lender liability</td></tr>
<tr><td>Wisconsin DNR (RR Program)</td><td>Protectiveness and compliance with ch. 292 and the NR 700 rules</td></tr>
<tr><td>EPA (Region 5)</td><td>Grant funding; federal sites</td></tr>
<tr><td>Environmental attorney</td><td>Liability allocation, exemptions, contracts</td></tr>
<tr><td>Environmental insurer</td><td>Pricing pollution risk</td></tr>
<tr><td>Consultants (environmental, geotechnical, civil)</td><td>Data, cost estimates, regulatory strategy, design, construction oversight</td></tr>
<tr><td>Community</td><td>Health, neighborhood character, jobs, environmental justice</td></tr>
</table></div>
`,
      check: [
        { type: "tf", q: "Under the federal definition, a property can be a brownfield based on the potential presence of contamination, not only confirmed contamination.", answer: true, explain: "'Presence or potential presence' — perceived contamination counts." },
        { type: "mc", q: "Which party typically focuses on collateral value and its own liability exposure?", options: ["DNR", "Lender", "Community", "Seller"], answer: 1, explain: "Lenders focus on collateral and borrower risk." }
      ]
    },
    {
      title: "Liability protection tools",
      html: `
<p>Remember from Module 6: under Wisconsin's spill law, a current owner can be responsible for contamination it didn't cause. Brownfield deals therefore depend on <strong>both</strong> federal and state liability tools.</p>
<h3>Federal (CERCLA)</h3>
<p>Bona fide prospective purchaser, contiguous property owner, and innocent landowner protections — each requiring All Appropriate Inquiries before acquisition and compliance with continuing obligations after (Modules 5 and 8).</p>
<h3>Wisconsin (Wis. Stat. ch. 292)</h3>
<div class="tbl-wrap"><table>
<tr><th>Tool</th><th>Statute</th><th>Who / what</th></tr>
<tr><td><strong>Voluntary Party Liability Exemption (VPLE)</strong></td><td>§ 292.15</td><td>Any person (including one who did not cause the contamination) who investigates and cleans up the <strong>entire property</strong> to the DNR's satisfaction receives a <strong>Certificate of Completion (COC)</strong>, which provides an exemption from future state liability for past discharges on the property, subject to conditions (such as maintaining continuing obligations). The exemption passes to future owners.</td></tr>
<tr><td><strong>Local governmental unit (LGU) exemption</strong></td><td>§ 292.11(9)(e)</td><td>Municipalities, counties, and redevelopment authorities that acquire property through specified means (e.g., tax delinquency, condemnation, blight elimination) are exempt from certain spill law responsibilities, subject to conditions.</td></tr>
<tr><td><strong>Lender exemption</strong></td><td>§ 292.21</td><td>Lenders (and certain representatives) that acquire property through foreclosure or similar means, subject to conditions.</td></tr>
<tr><td><strong>Off-site discharge exemption</strong></td><td>§ 292.13</td><td>Owners of property contaminated by a discharge that originated on <em>another</em> property, who did not cause it, subject to conditions (e.g., allowing access).</td></tr>
</table></div>
<p>The DNR also provides fee-based technical assistance under <strong>NR 749</strong>, including letters that clarify a party's liability or the regulatory status of a property — useful to lenders and buyers.</p>
<h3>VPLE vs. standard closure</h3>
<div class="tbl-wrap"><table>
<tr><th></th><th>Standard NR 726 closure</th><th>VPLE Certificate of Completion</th></tr>
<tr><td>Scope</td><td>The specific discharge(s) in the case</td><td>The entire property — all discharges</td></tr>
<tr><td>Liability</td><td>Closure, but the case can be reopened and the RP remains responsible</td><td>Statutory exemption from future liability for past discharges on the property (with conditions)</td></tr>
<tr><td>Cost/time</td><td>Lower</td><td>Higher — full property investigation, DNR fees</td></tr>
<tr><td>When chosen</td><td>Most cases</td><td>When certainty and transferable protection justify the cost (e.g., large redevelopments, lenders demanding it)</td></tr>
</table></div>
<div class="callout"><strong>The consultant's role</strong>Consultants don't give legal advice about which exemption applies. We provide the technical work — AAI-compliant Phase I, investigations, cleanup, documentation — that the attorney and client rely on to secure protection.</div>
`,
      check: [
        { type: "mc", q: "A VPLE Certificate of Completion requires investigation and cleanup of:", options: ["Only the source area", "The entire property", "Only groundwater", "Only areas above industrial RCLs"], answer: 1, explain: "VPLE covers the whole property, which is why it provides broad protection." },
        { type: "mc", q: "A homeowner whose property is affected by a plume from a gas station across the street may rely on which Wisconsin provision?", options: ["§ 292.13 off-site discharge exemption", "§ 292.21 lender exemption", "§ 292.11(9)(e) LGU exemption", "NR 140"], answer: 0, explain: "§ 292.13 addresses property affected by an off-site discharge." }
      ]
    },
    {
      title: "Funding and incentives",
      html: `
<h3>EPA Brownfields grants</h3>
<p>EPA's Brownfields Program (expanded significantly by the 2021 Bipartisan Infrastructure Law, which provided $1.5 billion for brownfields) offers competitive grants to eligible entities such as local governments, regional planning commissions, tribes, and nonprofits:</p>
<ul>
<li><strong>Assessment grants</strong> — inventory, Phase I/II, cleanup planning (community-wide, site-specific, or coalition).</li>
<li><strong>Cleanup grants</strong> — remediation of specific sites owned by the applicant.</li>
<li><strong>Revolving Loan Fund (RLF) grants</strong> — capitalize loan and subgrant programs for cleanup.</li>
<li><strong>Multipurpose grants</strong> — assessment and cleanup in a target area.</li>
<li><strong>Job training grants</strong> — environmental workforce training.</li>
<li><strong>State and tribal response program funding</strong> (CERCLA § 128(a)) — supports programs like Wisconsin's RR Program.</li>
</ul>
<p>EPA grant-funded work carries requirements: AAI-compliant Phase I ESAs, Quality Assurance Project Plans, property eligibility determinations, and reporting through EPA's systems.</p>
<h3>Wisconsin programs</h3>
<ul>
<li><strong>DNR Ready for Reuse</strong> — loans and grants for cleanup, funded through EPA RLF capitalization.</li>
<li><strong>Wisconsin Assessment Monies (WAM)</strong> — DNR-contracted environmental assessment services for eligible properties and applicants.</li>
<li><strong>WEDC brownfield programs</strong> — the Wisconsin Economic Development Corporation has offered grants for brownfield redevelopment tied to economic development outcomes.</li>
<li>Program names, eligibility, and funding levels change; check current DNR and WEDC pages before advising a client.</li>
</ul>
<h3>Tax incremental financing</h3>
<p>Under <strong>tax incremental financing (TIF)</strong>, a municipality creates a district and uses the increase in property tax revenue ("increment") generated by new development to pay for public costs, which can include environmental remediation. Wisconsin also authorizes <strong>Environmental Remediation TIF (ER TIF)</strong> under Wis. Stat. § 66.1106 specifically to recover remediation costs on contaminated property.</p>
<h3>Other tools</h3>
<ul>
<li>Federal and state historic tax credits for rehabilitating historic buildings.</li>
<li>New Markets Tax Credits in qualifying low-income areas.</li>
<li>Local land assembly, tax-delinquent property acquisition by counties and cities (with LGU exemption), and development agreements.</li>
</ul>
`,
      check: [
        { type: "mc", q: "Which EPA grant type capitalizes a loan and subgrant program for cleanups?", options: ["Assessment", "Cleanup", "Revolving Loan Fund", "Job training"], answer: 2, explain: "RLF grants capitalize revolving loan funds." },
        { type: "mc", q: "Wisconsin's statute authorizing Environmental Remediation TIF is:", options: ["§ 292.15", "§ 66.1106", "§ 289.43", "§ 182.0175"], answer: 1, explain: "§ 66.1106 ER TIF." }
      ]
    },
    {
      title: "Pricing and allocating environmental risk in a deal",
      html: `
<h3>Cost estimating</h3>
<p>Clients need a number. A good brownfield cost estimate:</p>
<ul>
<li>Separates <strong>known</strong> costs (characterized soil volumes, disposal rates) from <strong>uncertain</strong> costs (unknown USTs, fill variability, dewatering).</li>
<li>Distinguishes costs that are <strong>incremental to redevelopment</strong> (extra cost to dispose of contaminated soil the developer would excavate anyway) from stand-alone remediation.</li>
<li>Includes regulatory costs: DNR fees, reports, monitoring through closure, vapor system O&amp;M.</li>
<li>Carries <strong>contingency</strong> proportionate to uncertainty and states assumptions clearly.</li>
<li>May present scenarios (likely case, reasonable worst case).</li>
</ul>
<h3>Allocation tools</h3>
<ul>
<li><strong>Purchase agreement terms</strong> — due diligence periods, environmental contingencies, price reductions, escrows/holdbacks for cleanup, seller cleanup obligations.</li>
<li><strong>Indemnification</strong> — one party agrees to cover the other's environmental losses; only as good as the indemnitor's finances.</li>
<li><strong>Environmental insurance</strong> — e.g., pollution legal liability (PLL) policies covering unknown conditions and third-party claims; cost cap policies (less common today) covering overruns.</li>
<li><strong>Reliance letters</strong> — allow lenders or other parties to rely on a consultant's report under agreed terms.</li>
</ul>
<h3>Common deal-killers and how data fixes them</h3>
<div class="tbl-wrap"><table>
<tr><th>Fear</th><th>Data that resolves it</th></tr>
<tr><td>"There could be a huge plume."</td><td>Phase II groundwater data defining extent</td></tr>
<tr><td>"We might need to haul all the soil as hazardous."</td><td>Waste characterization sampling with TCLP</td></tr>
<tr><td>"Tenants could get sick from vapors."</td><td>Sub-slab vapor data; mitigation built into design</td></tr>
<tr><td>"DNR could make us do anything."</td><td>Early DNR meeting; technical assistance; clear regulatory strategy toward closure or VPLE</td></tr>
</table></div>
`,
      check: [
        { type: "mc", q: "An indemnification is only as valuable as:", options: ["The consultant's report", "The financial strength of the indemnitor", "The DNR's closure letter", "The property's zoning"], answer: 1, explain: "An indemnity depends on the indemnitor's ability to pay." },
        { type: "mc", q: "Which insurance product typically covers unknown pre-existing pollution conditions and third-party claims?", options: ["Builder's risk", "Pollution legal liability (PLL)", "Workers' compensation", "Title insurance"], answer: 1, explain: "PLL policies address pollution conditions and claims." }
      ]
    },
    {
      title: "Integrating cleanup with design and construction",
      html: `
<p>The best brownfield projects treat remediation as part of the building design, not an afterthought. That requires the environmental, geotechnical, and civil teams to talk early.</p>
<h3>Design integration checklist</h3>
<ul>
<li><strong>Caps as site features.</strong> The building footprint, parking lots, and sidewalks can serve as the engineered cap. Landscaped areas need a clean soil cover of approved thickness over a marker layer. Design grading so excess contaminated soil can stay on site under the cap where approved, reducing disposal costs.</li>
<li><strong>Vapor mitigation built in.</strong> Membrane and sub-slab venting in the foundation design; coordinate with the structural engineer and waterproofing.</li>
<li><strong>Foundations.</strong> Geotechnical recommendations must account for fill, debris, and soft soils common on brownfields; deep foundations through contaminated zones need controls to avoid dragging contamination down and must handle spoils. Excavation for footings and utilities is often the most economical source removal.</li>
<li><strong>Stormwater.</strong> Wisconsin's runoff rules (NR 151) restrict infiltration where it would pass through contaminated soil or mobilize contamination; designs may need lined ponds, filtration, or other non-infiltrating practices.</li>
<li><strong>Utilities.</strong> Place new utilities in clean backfill corridors so future repair crews aren't exposed; consider vapor migration along utility trenches.</li>
<li><strong>Dewatering.</strong> Plan for treatment and permitting of contaminated construction water.</li>
<li><strong>Schedule.</strong> DNR approvals (soil management, caps, vapor systems) should be in hand before construction.</li>
</ul>
<h3>During construction</h3>
<ul>
<li>Environmental oversight: soil screening and segregation, stockpile management, load tracking, confirmation sampling, response to unexpected finds.</li>
<li>Geotechnical and CMT oversight continues in parallel: subgrade evaluation, fill compaction, foundation bearing verification.</li>
<li>Photograph and document cap construction (thicknesses, materials, marker layers) and vapor system installation (membrane seams, smoke testing, piping) — DNR will want this in the construction documentation report.</li>
</ul>
<h3>After construction</h3>
<ul>
<li>Construction documentation report, vapor system commissioning, cap maintenance plan.</li>
<li>Closure request or VPLE Certificate of Completion with continuing obligations.</li>
<li>Owner education: the new property manager needs to understand what the continuing obligations mean — don't cut into the cap without a plan, keep the vapor fan running, inspect and report as required.</li>
</ul>
<div class="mnemonic">Brownfield design "<strong>CVF-SUDS</strong>": <strong>C</strong>aps, <strong>V</strong>apor, <strong>F</strong>oundations, <strong>S</strong>tormwater, <strong>U</strong>tilities, <strong>D</strong>ewatering, <strong>S</strong>chedule.</div>
`,
      check: [
        { type: "mc", q: "Why might a brownfield stormwater design avoid infiltration basins?", options: ["Infiltration is always illegal", "Infiltrating through contaminated soil can mobilize contaminants, and NR 151 restricts it", "Basins are too expensive", "Clay is always present"], answer: 1, explain: "NR 151 limits infiltration where contamination is present." },
        { type: "mc", q: "Placing new utilities in clean backfill corridors primarily protects:", options: ["The utility pipes from corrosion only", "Future utility workers from contact with contaminated soil", "The DNR", "Stormwater quality"], answer: 1, explain: "Clean corridors reduce future worker exposure and soil management costs." }
      ]
    }
  ],
  terms: [
    { term: "Brownfield (federal)", def: "Real property whose expansion, redevelopment, or reuse may be complicated by the presence or potential presence of a hazardous substance, pollutant, or contaminant." },
    { term: "Greenfield", def: "Previously undeveloped land, often agricultural." },
    { term: "VPLE", def: "Voluntary Party Liability Exemption (Wis. Stat. § 292.15): full-property investigation and cleanup leading to a Certificate of Completion." },
    { term: "Certificate of Completion (COC)", def: "DNR document granting a VPLE exemption from future state liability for past discharges, subject to conditions; transfers to future owners." },
    { term: "LGU exemption", def: "Wis. Stat. § 292.11(9)(e): spill law exemption for local governmental units acquiring property through specified means." },
    { term: "Lender exemption", def: "Wis. Stat. § 292.21: conditional exemption for lenders acquiring property through foreclosure or similar means." },
    { term: "Off-site discharge exemption", def: "Wis. Stat. § 292.13: conditional exemption for owners of property contaminated by a discharge originating elsewhere." },
    { term: "NR 749 technical assistance", def: "Fee-based DNR reviews and letters, including liability clarification and regulatory status letters." },
    { term: "EPA Assessment grant", def: "EPA brownfield grant funding inventories, Phase I/II ESAs, and cleanup planning." },
    { term: "EPA Cleanup grant", def: "EPA brownfield grant funding remediation of sites owned by the applicant." },
    { term: "Revolving Loan Fund (RLF)", def: "EPA-capitalized fund providing loans and subgrants for cleanup." },
    { term: "Ready for Reuse", def: "Wisconsin DNR loan and grant program for brownfield cleanup, capitalized by EPA RLF funds." },
    { term: "Wisconsin Assessment Monies (WAM)", def: "DNR program providing contracted environmental assessment services for eligible brownfields." },
    { term: "TIF", def: "Tax incremental financing: using increased property tax revenue from new development to pay for public costs." },
    { term: "ER TIF", def: "Environmental Remediation Tax Incremental Financing under Wis. Stat. § 66.1106." },
    { term: "Indemnification", def: "Contractual promise by one party to cover another's losses, here environmental liabilities." },
    { term: "Pollution legal liability (PLL)", def: "Environmental insurance covering pollution conditions, cleanup costs, and third-party claims." },
    { term: "Reliance letter", def: "Letter allowing a third party (e.g., a lender) to rely on a consultant's report under stated terms." },
    { term: "Escrow / holdback", def: "Funds set aside at closing to pay for environmental work." },
    { term: "Incremental cost", def: "Additional cost caused by contamination beyond what the redevelopment would cost anyway." },
    { term: "Construction documentation report", def: "Report documenting remedial construction (caps, excavation, vapor systems) for DNR closure." },
    { term: "Marker layer", def: "Geotextile or fabric placed between residual contaminated soil and clean cover to warn future excavators." },
    { term: "Clean utility corridor", def: "Utility trench backfilled with clean material to protect future workers and simplify soil management." }
  ],
  resources: [
    { title: "EPA — Brownfields", url: "https://www.epa.gov/brownfields", note: "Grants, AAI, and program information" },
    { title: "EPA — Types of Brownfields Grant Funding", url: "https://www.epa.gov/brownfields/types-brownfields-grant-funding", note: "Assessment, cleanup, RLF, multipurpose, job training" },
    { title: "Wisconsin DNR — Brownfields", url: "https://dnr.wisconsin.gov/topic/Brownfields", note: "Liability tools, VPLE, financial resources" },
    { title: "Wisconsin Statutes ch. 292", url: "https://docs.legis.wisconsin.gov/statutes/statutes/292", note: "§§ 292.11, 292.13, 292.15, 292.21" },
    { title: "Wisconsin Statutes § 66.1106 — ER TIF", url: "https://docs.legis.wisconsin.gov/statutes/statutes/66", note: "Environmental remediation tax increment financing (ch. 66)" },
    { title: "Wisconsin Economic Development Corporation (WEDC)", url: "https://wedc.org/", note: "Current economic development and brownfield programs" },
    { title: "Menomonee Valley Partners", url: "https://www.renewthevalley.org/", note: "Milwaukee brownfield redevelopment case study" }
  ],
  teach: [
    { prompt: "A city acquired a tax-delinquent former foundry and wants to sell it to a developer for a light-industrial building. Outline the liability, funding, and technical steps you would expect, naming specific Wisconsin and federal tools.",
      model: "<p>The city likely holds the LGU exemption under § 292.11(9)(e) as a tax-delinquent acquisition and could pursue EPA assessment or cleanup grants or DNR WAM services for a Phase I (AAI-compliant) and Phase II targeting foundry contaminants (metals, PAHs, foundry sand, possibly VOCs). The developer needs its own liability protection: CERCLA BFPP status via AAI before acquisition, and under state law either the DNR closure path with continuing obligations or a VPLE Certificate of Completion if full-property certainty is needed; NR 749 letters can clarify status for lenders. Funding could include EPA cleanup or RLF dollars, DNR Ready for Reuse, WEDC programs, and TIF or ER TIF (§ 66.1106). Technically, integrate cleanup with the design: building and pavement as cap, clean cover in green space, targeted excavation of hot spots during foundation work under an NR 718 soil management plan, vapor evaluation and mitigation if needed, non-infiltrating stormwater where fill is contaminated, then construction documentation and closure.</p>" },
    { prompt: "Explain to a developer why involving the geotechnical, civil, and environmental consultants together early saves money on a brownfield project. Give three concrete examples.",
      model: "<p>Each discipline's decisions change the others' costs. Examples: (1) Grading — if the civil designer raises site grades, contaminated soil can stay on site beneath the cap instead of being hauled to a landfill; (2) Foundations — the geotechnical engineer may choose footings or ground improvement that limit excavation of contaminated fill, or recommend a foundation excavation that doubles as source removal; (3) Stormwater — knowing where contamination is lets the civil engineer avoid infiltration through contaminated soil and pick compliant BMPs before NR 151 review; (4) Vapor — building a membrane and venting layer into the slab design costs far less than retrofitting. Early coordination also gets DNR approvals in hand before construction, avoiding delays.</p>" }
  ],
  exam: {
    count: 16,
    bank: [
      { type: "mc", q: "Which word in brownfield definitions captures why uncertainty alone can stall a property?", options: ["Abandoned", "Perceived (or potential)", "Commercial", "Industrial"], answer: 1, explain: "Perceived or potential contamination can block redevelopment." },
      { type: "mc", q: "A primary public benefit of brownfield redevelopment is:", options: ["Increasing farmland conversion", "Reusing existing infrastructure and restoring tax base", "Avoiding DNR oversight", "Eliminating all contamination everywhere"], answer: 1, explain: "Reuse of infrastructure and tax base restoration are core benefits." },
      { type: "mc", q: "The Wisconsin VPLE is found at:", options: ["§ 292.11", "§ 292.13", "§ 292.15", "§ 292.21"], answer: 2, explain: "§ 292.15." },
      { type: "mc", q: "The VPLE Certificate of Completion:", options: ["Expires when the property is sold", "Transfers to future owners, subject to conditions", "Applies only to groundwater", "Is issued by EPA"], answer: 1, explain: "The exemption runs with the property." },
      { type: "mc", q: "Compared with standard NR 726 closure, VPLE generally:", options: ["Costs less", "Covers the entire property and provides a statutory liability exemption", "Requires no DNR involvement", "Applies only to petroleum"], answer: 1, explain: "Broader scope and stronger protection at higher cost." },
      { type: "mc", q: "A county that took title to a property for tax delinquency may be protected by:", options: ["The lender exemption", "The LGU exemption", "The off-site exemption", "No exemption"], answer: 1, explain: "§ 292.11(9)(e) LGU exemption." },
      { type: "mc", q: "A bank that forecloses on a contaminated property may qualify for:", options: ["§ 292.21 lender exemption", "§ 292.13", "VPLE automatically", "CERCLA arranger status"], answer: 0, explain: "§ 292.21 lender exemption, with conditions." },
      { type: "mc", q: "Fee-based DNR technical assistance and liability clarification letters are provided under:", options: ["NR 714", "NR 726", "NR 749", "NR 140"], answer: 2, explain: "NR 749." },
      { type: "mc", q: "How much did the 2021 Bipartisan Infrastructure Law provide for EPA brownfields?", options: ["$150 million", "$500 million", "$1.5 billion", "$15 billion"], answer: 2, explain: "$1.5 billion." },
      { type: "mc", q: "Which EPA grant funds Phase I and II ESAs and cleanup planning?", options: ["Assessment", "Cleanup", "RLF", "Job training"], answer: 0, explain: "Assessment grants." },
      { type: "multi", q: "EPA brownfield grant-funded projects typically require which of the following? Select all that apply.", options: ["AAI-compliant Phase I ESAs", "A QAPP for sampling", "Property eligibility determination", "Waiving all state requirements"], answer: [0, 1, 2], explain: "State requirements still apply." },
      { type: "mc", q: "DNR's Ready for Reuse program provides:", options: ["Professional licenses", "Loans and grants for brownfield cleanup", "Building permits", "Stormwater permits"], answer: 1, explain: "Ready for Reuse funds cleanup." },
      { type: "mc", q: "TIF works by:", options: ["Charging the DNR", "Using the increase in property tax revenue from new development to pay public costs", "Federal grants only", "Taxing contamination"], answer: 1, explain: "Increment financing." },
      { type: "mc", q: "A cost estimate's 'incremental' cost refers to:", options: ["Total project cost", "The extra cost due to contamination beyond normal redevelopment", "Annual inflation", "Consultant fees"], answer: 1, explain: "Incremental cost isolates the environmental premium." },
      { type: "mc", q: "Which deal tool sets aside money at closing for environmental work?", options: ["Reliance letter", "Escrow/holdback", "Phase I", "NR 140"], answer: 1, explain: "Escrows or holdbacks fund future work." },
      { type: "mc", q: "A reliance letter allows:", options: ["DNR to approve closure", "A third party such as a lender to rely on a consultant's report", "Waiver of AAI", "Transfer of PE licenses"], answer: 1, explain: "Reliance letters extend use of reports under terms." },
      { type: "mc", q: "On a brownfield, building slabs and parking lots commonly serve as:", options: ["Groundwater treatment", "The engineered cap", "Monitoring wells", "Dewatering systems"], answer: 1, explain: "Impervious surfaces often function as the cap." },
      { type: "mc", q: "A marker layer beneath a clean soil cover serves to:", options: ["Increase infiltration", "Warn future excavators that contaminated soil lies below", "Treat contaminants", "Support foundations"], answer: 1, explain: "Marker layers provide a visual warning." },
      { type: "mc", q: "Raising site grades on a brownfield can save money because:", options: ["It eliminates the need for DNR", "Contaminated soil can stay on site beneath the cap rather than be hauled off", "It reduces foundation loads", "It avoids stormwater rules"], answer: 1, explain: "Keeping soil on site (with approval) avoids disposal costs." },
      { type: "mc", q: "During brownfield construction, documentation of cap thickness and vapor membrane seams is needed for:", options: ["The building inspector only", "The construction documentation report supporting DNR closure", "Marketing", "OSHA"], answer: 1, explain: "DNR relies on construction documentation." },
      { type: "tf", q: "Consultants should advise clients on which statutory liability exemption legally applies to them.", answer: false, explain: "That is legal advice for attorneys; consultants provide the technical basis." }
    ]
  }
});
