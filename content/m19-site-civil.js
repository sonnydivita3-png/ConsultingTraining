COURSE.addModule({
  id: "m19",
  track: "t5",
  title: "Site Development, Grading, and Stormwater",
  hours: 5,
  summary: "How civil engineers turn a parcel into a buildable site in Wisconsin: approvals and land division, grading and earthwork quantities, accessibility slopes, hydrology, construction erosion control and post-construction stormwater standards (NR 216 and NR 151), and site constraints such as floodplains, wetlands, and shorelands.",
  objectives: [
    "Describe the local and state approvals needed for site development, including land division by CSM or plat.",
    "Read grading plans, apply common slope criteria (drainage, foundations, accessibility), and estimate earthwork volumes.",
    "Compute peak runoff with the rational method and explain return periods, curve numbers, and hydrologic soil groups.",
    "Explain construction site erosion and sediment control requirements and post-construction stormwater performance standards in Wisconsin.",
    "Identify floodplain, wetland, shoreland, and other site constraints and the agencies that regulate them."
  ],
  lessons: [
    {
      title: "Approvals and land division",
      html: `
<p>Before a shovel goes in the ground, a site needs approvals at several levels. The civil engineer usually coordinates them.</p>
<h3>Local</h3>
<ul>
<li><strong>Zoning</strong> — permitted and conditional uses, setbacks, height, lot coverage, parking, landscaping. Variances come from a board of zoning appeals; conditional use permits from a plan commission.</li>
<li><strong>Site plan / architectural review</strong> by the plan commission or staff.</li>
<li><strong>Land division</strong> — under Wis. Stat. ch. 236: a <strong>Certified Survey Map (CSM)</strong> can create up to <strong>four</strong> parcels; a <strong>subdivision plat</strong> is required for larger divisions (state law defines a subdivision by the number and size of lots created within a period — five or more parcels of 1.5 acres or less within five years). Local ordinances add their own rules.</li>
<li><strong>Local stormwater and erosion control ordinance</strong> permits, often stricter than state minimums.</li>
<li><strong>Building permits</strong>; commercial plan review is done by DSPS or by municipalities with delegated authority.</li>
<li>Utility connection approvals and driveway/curb cut permits.</li>
</ul>
<h3>State and federal</h3>
<ul>
<li><strong>WPDES Construction Site Storm Water permit</strong> (DNR, NR 216) for land disturbance of one acre or more.</li>
<li><strong>Wetland and waterway permits</strong> (DNR under NR 103/ch. 30; USACE Section 404 where federal jurisdiction applies).</li>
<li><strong>Sanitary sewer extension and water main approvals</strong> (DNR) for public utility extensions.</li>
<li><strong>WisDOT</strong> access (driveway/connection) permits on state highways; county highway access permits.</li>
<li><strong>County shoreland and floodplain</strong> zoning permits where applicable.</li>
<li>Reviews for endangered resources (DNR Natural Heritage Inventory) and historic/archaeological sites when triggered (e.g., federal funding or permits).</li>
</ul>
<h3>Surveys you'll hear about</h3>
<ul>
<li><strong>ALTA/NSPS Land Title Survey</strong> — a standardized boundary and improvements survey for commercial real estate transactions.</li>
<li><strong>Topographic survey</strong> — existing contours, spot elevations, utilities, and features; the base for design.</li>
<li><strong>Construction staking</strong> and <strong>as-built (record) surveys</strong>.</li>
</ul>
`,
      check: [
        { type: "num", q: "What is the maximum number of parcels that can be created by a Certified Survey Map under Wis. Stat. ch. 236?", answer: 4, tol: 0, unit: "parcels", explain: "A CSM can create up to four parcels; larger divisions typically require a plat." },
        { type: "mc", q: "The WPDES construction site stormwater permit is generally required when land disturbance is:", options: ["Any amount", "One acre or more", "Five acres or more", "Only in cities"], answer: 1, explain: "One acre or more (including smaller parts of a larger common plan)." }
      ]
    },
    {
      title: "Grading and earthwork",
      html: `
<h3>Reading a grading plan</h3>
<p>Existing contours are dashed and lighter; proposed contours are solid and heavier. Spot elevations mark critical points: building corners, finished floor elevation (FFE), top and bottom of curb, high and low points, inlet rims. Arrows show drainage direction with slopes in percent.</p>
<h3>Common slope criteria (verify against the governing code and local standards)</h3>
<div class="tbl-wrap"><table>
<tr><th>Element</th><th>Typical criterion</th></tr>
<tr><td>Ground adjacent to building foundations</td><td>Slope away at least 5% for at least 10 ft (IBC requirement, with alternatives such as swales where space is limited)</td></tr>
<tr><td>Asphalt parking lots</td><td>About 1–5%; minimum around 1–2% for positive drainage</td></tr>
<tr><td>Accessible route (2010 ADA Standards)</td><td>Running slope no steeper than 1:20 (5%) unless designed as a ramp (max 1:12, 8.33%); cross slope no steeper than 1:48 (about 2%)</td></tr>
<tr><td>Accessible parking spaces and access aisles</td><td>No steeper than 1:48 (about 2%) in any direction</td></tr>
<tr><td>Lawn areas</td><td>Generally ≥ 2% to drain; mowable slopes no steeper than about 3H:1V (4H:1V preferred)</td></tr>
</table></div>
<h3>Cut, fill, and balance</h3>
<ul>
<li><strong>Cut</strong> — existing ground above proposed grade (excavate). <strong>Fill</strong> — existing below proposed (build up).</li>
<li>A <strong>balanced site</strong> has cut ≈ fill, avoiding expensive import or export. Topsoil stripping and respreading are tracked separately.</li>
<li><strong>Shrink and swell</strong>: excavated soil occupies more volume loose (swell), and compacted fill occupies less than its in-place cut volume (shrink). Earthwork estimates apply shrink/swell factors.</li>
<li>Unsuitable soils (organics, soft clay, contaminated soil on brownfields) change the balance — coordinate with the geotechnical and environmental reports.</li>
</ul>
<h3>Average end area method</h3>
<span class="formula">V (ft³) = [(A1 + A2) / 2] × L
V (yd³) = V (ft³) / 27
A1, A2 = cut (or fill) areas of adjacent cross-sections (ft²); L = distance between them (ft)</span>
<div class="callout"><strong>Example</strong>Cut areas of 120 ft² and 180 ft² at sections 50 ft apart: V = (120 + 180)/2 × 50 = 7,500 ft³ = 278 yd³.</div>
<p>Software computes volumes by comparing existing and proposed surface models (TIN-to-TIN), but the average end area method is still used for linear projects and checking.</p>
`,
      check: [
        { type: "num", q: "Fill areas of 60 ft² and 90 ft² at sections 100 ft apart. Fill volume in cubic yards? Round to the nearest whole yard.", answer: 278, tol: 1, unit: "yd³", explain: "(60 + 90)/2 × 100 = 7,500 ft³ ÷ 27 = 277.8 ≈ 278 yd³." },
        { type: "mc", q: "Under the 2010 ADA Standards, the maximum cross slope of an accessible route is:", options: ["1:12", "1:20", "1:48 (about 2%)", "1:10"], answer: 2, explain: "1:48." }
      ]
    },
    {
      title: "Hydrology: how much water, how fast",
      html: `
<h3>Design storms and return periods</h3>
<p>Storms are described by <strong>return period</strong> or <strong>annual exceedance probability</strong>: a "100-year" storm has a <strong>1%</strong> chance of being equaled or exceeded in any given year; a "10-year" storm has a 10% chance; a "2-year" storm 50%. A 100-year storm can occur in consecutive years. Rainfall depths and intensities come from <strong>NOAA Atlas 14</strong> (the volume covering the Midwest includes Wisconsin), which many Wisconsin agencies require for design.</p>
<h3>The rational method</h3>
<p>For small drainage areas (commonly up to roughly 100–200 acres, per local criteria), peak runoff is:</p>
<span class="formula">Q = C · i · A
Q = peak flow (cfs);  C = runoff coefficient (dimensionless)
i = rainfall intensity (in/hr) for a duration equal to the time of concentration
A = drainage area (acres)</span>
<div class="tbl-wrap"><table>
<tr><th>Surface</th><th>Typical C</th></tr>
<tr><td>Asphalt/concrete pavement, roofs</td><td>0.85–0.95</td></tr>
<tr><td>Gravel</td><td>0.5–0.7</td></tr>
<tr><td>Lawns, sandy soil</td><td>0.05–0.20</td></tr>
<tr><td>Lawns, clayey soil</td><td>0.15–0.35</td></tr>
</table></div>
<p>The <strong>time of concentration (Tc)</strong> is the time for runoff to travel from the hydraulically most distant point to the outlet. Shorter Tc → higher intensity → higher peak. Paving a site raises C and shortens Tc — both increase peak flow, which is why stormwater management is required.</p>
<div class="callout"><strong>Example</strong>A 2.0-acre parking lot (C = 0.90) with i = 4.0 in/hr: Q = 0.90 × 4.0 × 2.0 = 7.2 cfs.</div>
<h3>NRCS curve number method</h3>
<p>For larger areas and for runoff volumes and hydrographs, engineers use the NRCS (formerly SCS) methods in <strong>TR-55</strong> and TR-20. The <strong>curve number (CN)</strong>, from about 30 to 98, combines land cover and <strong>hydrologic soil group</strong>:</p>
<ul>
<li><strong>A</strong> — sands and gravels; high infiltration, low runoff.</li>
<li><strong>B</strong> — moderately fine to moderately coarse soils.</li>
<li><strong>C</strong> — fine-textured soils; slow infiltration.</li>
<li><strong>D</strong> — clays, high water table, shallow bedrock; very low infiltration, high runoff.</li>
</ul>
<p>Impervious surfaces have CN = 98. Hydrologic soil groups are listed in the NRCS soil survey.</p>
<h3>Wisconsin modeling tools</h3>
<p>Engineers use hydrologic/hydraulic software for peak flows and pond routing, and the DNR accepts specific water quality models — such as <strong>WinSLAMM</strong> and <strong>P8</strong> — to demonstrate total suspended solids (TSS) reductions under NR 151.</p>
`,
      check: [
        { type: "num", q: "A 3.5-acre site has C = 0.80 and design intensity 3.0 in/hr. Peak runoff (cfs)?", answer: 8.4, tol: 0.01, unit: "cfs", explain: "Q = 0.80 × 3.0 × 3.5 = 8.4 cfs." },
        { type: "mc", q: "A '100-year' storm has what annual chance of being equaled or exceeded?", options: ["100%", "10%", "1%", "0.1%"], answer: 2, explain: "1% annual exceedance probability." },
        { type: "mc", q: "Which hydrologic soil group produces the most runoff?", options: ["A", "B", "C", "D"], answer: 3, explain: "Group D: clays, high water tables, very low infiltration." }
      ]
    },
    {
      title: "Erosion control and stormwater management in Wisconsin",
      html: `
<h3>During construction: NR 216 and NR 151</h3>
<p>Sites disturbing one acre or more need coverage under the DNR's <strong>WPDES Construction Site Storm Water general permit</strong> (NR 216), obtained by filing a <strong>Notice of Intent (NOI)</strong>, with an <strong>erosion and sediment control plan</strong> meeting NR 151 construction site performance standards and DNR <strong>technical standards</strong>. Common practices:</p>
<ul>
<li><strong>Perimeter controls</strong> — silt fence, sediment logs.</li>
<li><strong>Stone tracking pads</strong> at construction exits to keep mud off streets; street sweeping.</li>
<li><strong>Storm drain inlet protection</strong>.</li>
<li><strong>Sediment traps and basins</strong> for larger drainage areas.</li>
<li><strong>Temporary and permanent stabilization</strong> — seeding, mulch, erosion control matting; minimize the area and duration of exposed soil.</li>
<li><strong>Dewatering</strong> through filter bags or settling before discharge.</li>
<li>Stockpile protection; concrete washout areas.</li>
</ul>
<p>The permit requires routine <strong>inspections</strong> (at least weekly and within 24 hours after a rainfall of 0.5 inch or more) and maintenance of practices, with records kept on site. When the site reaches <strong>final stabilization</strong> (e.g., established perennial vegetative cover at the required density), a <strong>Notice of Termination</strong> ends coverage.</p>
<h3>After construction: NR 151 post-construction performance standards</h3>
<p>NR 151 sets post-construction standards for new development and redevelopment (verify the current rule text and any stricter local ordinance — e.g., MMSD rules in the Milwaukee area):</p>
<div class="tbl-wrap"><table>
<tr><th>Standard</th><th>General requirement</th></tr>
<tr><td><strong>Total suspended solids (TSS)</strong></td><td>Reduce TSS from the developed site — e.g., 80% reduction for new development and 40% for redevelopment, compared with no controls</td></tr>
<tr><td><strong>Peak discharge</strong></td><td>Maintain or reduce post-development peak runoff rates relative to pre-development for specified design storms (the 1- and 2-year, 24-hour storms in the state standard)</td></tr>
<tr><td><strong>Infiltration</strong></td><td>Infiltrate a portion of runoff (percentages differ for residential and non-residential), with prohibitions and exemptions — e.g., not through contaminated soils, near drinking water wells, or where separation to groundwater or bedrock is insufficient</td></tr>
<tr><td><strong>Protective areas</strong></td><td>Vegetated buffers adjacent to lakes, streams, and wetlands</td></tr>
<tr><td><strong>Fueling and vehicle maintenance areas</strong></td><td>Control oil and grease (no visible sheen)</td></tr>
</table></div>
<h3>Best management practices (BMPs)</h3>
<ul>
<li><strong>Wet detention ponds</strong> (DNR Technical Standard 1001) — permanent pool settles solids; outlet structure controls peaks.</li>
<li><strong>Bioretention</strong> and <strong>rain gardens</strong> — engineered soil and plants filter and infiltrate.</li>
<li><strong>Infiltration basins and trenches</strong> — require site evaluation (DNR Technical Standard 1002) for soils and groundwater separation.</li>
<li><strong>Permeable pavement</strong>, <strong>green roofs</strong>, <strong>vegetated swales and filter strips</strong>.</li>
<li><strong>Proprietary devices</strong> — hydrodynamic separators and filters with DNR-accepted removal efficiencies.</li>
</ul>
<p>Long-term <strong>maintenance agreements</strong> recorded against the property make owners responsible for keeping BMPs working.</p>
`,
      check: [
        { type: "mc", q: "Under the WPDES construction permit, erosion control inspections are required at least weekly and within 24 hours after rainfall of:", options: ["0.1 inch", "0.5 inch", "1.0 inch", "2.0 inches"], answer: 1, explain: "0.5 inch or more." },
        { type: "mc", q: "Why might infiltration be prohibited on a brownfield site?", options: ["Infiltration is never allowed in Wisconsin", "Infiltrating through contaminated soil can mobilize contaminants", "It costs too much", "Ponds are required instead by federal law"], answer: 1, explain: "NR 151 excludes infiltration through contaminated soils." }
      ]
    },
    {
      title: "Site constraints: floodplains, wetlands, shorelands, and more",
      html: `
<h3>Floodplains</h3>
<ul>
<li><strong>FEMA Flood Insurance Rate Maps (FIRMs)</strong> show <strong>Special Flood Hazard Areas</strong> — the 1%-annual-chance (100-year) floodplain, Zones A and AE (AE has a determined <strong>base flood elevation, BFE</strong>).</li>
<li>The <strong>floodway</strong> (channel plus adjacent areas that must stay open to carry the flood) is highly restricted; the <strong>flood fringe</strong> allows development meeting standards, such as elevating the lowest floor above the regional flood elevation with freeboard.</li>
<li>Wisconsin floodplain management is under <strong>NR 116</strong> and local floodplain zoning ordinances. Map changes use FEMA <strong>LOMA</strong>/<strong>LOMR</strong> processes.</li>
</ul>
<h3>Wetlands</h3>
<ul>
<li>Wetlands are identified by three parameters: <strong>hydrophytic vegetation</strong>, <strong>hydric soils</strong>, and <strong>wetland hydrology</strong>, delineated using the 1987 USACE Wetland Delineation Manual and the applicable regional supplements.</li>
<li>Screening tools: the <strong>Wisconsin Wetland Inventory</strong> and DNR <strong>Surface Water Data Viewer</strong>; field delineation by qualified delineators confirms boundaries. The DNR offers wetland delineation confirmation services.</li>
<li>Permits: DNR under state law (and water quality standards in NR 103), and USACE Section 404 where federal jurisdiction applies. Avoid and minimize impacts first; compensatory mitigation may be required.</li>
</ul>
<h3>Navigable waters and shorelands</h3>
<ul>
<li>Work in or near navigable waters (grading on banks, outfalls, culverts, bridges) requires DNR permits under <strong>Wis. Stat. ch. 30</strong>. The <strong>ordinary high water mark (OHWM)</strong> is the key boundary.</li>
<li><strong>Shoreland zoning</strong> (NR 115, administered by counties) applies within 1,000 feet of the OHWM of navigable lakes, ponds, and flowages and within 300 feet of navigable rivers and streams (or to the landward side of the floodplain, if greater), with a typical 75-foot building setback from the OHWM and limits on impervious surfaces and vegetation removal. Cities and villages have separate shoreland rules for certain areas.</li>
</ul>
<h3>Other constraints</h3>
<ul>
<li><strong>Soils and groundwater</strong> — shallow bedrock, high water table, organic soils (geotechnical report).</li>
<li><strong>Contamination</strong> — Phase I/II results, continuing obligations (Module 6).</li>
<li><strong>Endangered resources</strong> — DNR Natural Heritage Inventory review.</li>
<li><strong>Historic and archaeological resources</strong> — Wisconsin Historical Society, especially for federally funded or permitted projects; Wisconsin also protects burial sites.</li>
<li><strong>Onsite wastewater</strong> — where no sewer exists, private onsite wastewater treatment systems (POWTS) are regulated by DSPS (SPS 383), with soil evaluations by a certified soil tester.</li>
<li><strong>Easements</strong> and existing utilities; airport height zoning; rail corridors.</li>
</ul>
`,
      check: [
        { type: "multi", q: "Which three parameters define a wetland for delineation? Select all that apply.", options: ["Hydrophytic vegetation", "Hydric soils", "Wetland hydrology", "Standing water year-round"], answer: [0, 1, 2], explain: "Standing water year-round is not required." },
        { type: "mc", q: "In a FEMA Zone AE, the map provides:", options: ["No flood information", "A determined base flood elevation (BFE)", "Only wetland boundaries", "Shoreland setbacks"], answer: 1, explain: "Zone AE includes BFEs; Zone A does not." }
      ]
    }
  ],
  terms: [
    { term: "Zoning", def: "Local regulation of land use, setbacks, height, coverage, and parking." },
    { term: "Conditional use permit", def: "Approval for a use allowed only under conditions set by the plan commission." },
    { term: "Variance", def: "Relief from a zoning requirement granted by a board of zoning appeals." },
    { term: "Certified Survey Map (CSM)", def: "Wisconsin land division instrument creating up to four parcels (Wis. Stat. ch. 236)." },
    { term: "Subdivision plat", def: "Land division map required for larger divisions under Wis. Stat. ch. 236." },
    { term: "ALTA/NSPS survey", def: "Standardized land title survey for commercial real estate transactions." },
    { term: "Topographic survey", def: "Survey of existing contours, elevations, utilities, and features for design." },
    { term: "Spot elevation", def: "Labeled elevation at a specific point on a grading plan." },
    { term: "Foundation drainage slope", def: "IBC: ground sloped away from foundations at least 5% for 10 ft (or alternatives)." },
    { term: "Accessible route slope", def: "2010 ADA Standards: running slope ≤ 1:20 unless a ramp (≤ 1:12); cross slope ≤ 1:48." },
    { term: "Balanced site", def: "Grading design where cut approximately equals fill." },
    { term: "Shrink / swell", def: "Volume decrease of soil when compacted / increase when excavated and loose." },
    { term: "Average end area method", def: "V = (A1 + A2)/2 × L; divide by 27 for cubic yards." },
    { term: "Return period", def: "Average recurrence interval of a storm; a 100-year storm has a 1% annual exceedance probability." },
    { term: "NOAA Atlas 14", def: "NOAA precipitation frequency estimates used for design storms." },
    { term: "Rational method", def: "Peak runoff Q = C·i·A for small drainage areas." },
    { term: "Runoff coefficient (C)", def: "Fraction of rainfall becoming runoff; ~0.9 for pavement, ~0.1–0.35 for lawns." },
    { term: "Time of concentration (Tc)", def: "Travel time of runoff from the most distant point to the outlet." },
    { term: "Curve number (CN)", def: "NRCS runoff parameter combining land cover and hydrologic soil group; 98 for impervious." },
    { term: "Hydrologic soil group", def: "NRCS soil infiltration classes A (high) to D (very low)." },
    { term: "TR-55", def: "NRCS Urban Hydrology for Small Watersheds methodology." },
    { term: "WinSLAMM / P8", def: "Water quality models accepted by the DNR for demonstrating TSS reductions." },
    { term: "Notice of Intent (NOI)", def: "Filing to obtain coverage under the WPDES construction stormwater general permit." },
    { term: "Notice of Termination", def: "Filing ending construction permit coverage after final stabilization." },
    { term: "Erosion and sediment control plan", def: "Plan of practices to prevent erosion and trap sediment during construction." },
    { term: "Silt fence", def: "Geotextile perimeter barrier that ponds runoff to settle sediment." },
    { term: "Stone tracking pad", def: "Stone construction entrance reducing tracking of soil onto roads." },
    { term: "Inlet protection", def: "Devices preventing sediment from entering storm drain inlets." },
    { term: "Final stabilization", def: "Permanent stabilization (e.g., established perennial vegetation at required density) ending construction permit obligations." },
    { term: "TSS reduction standard", def: "NR 151 post-construction requirement to reduce total suspended solids (e.g., 80% new development, 40% redevelopment)." },
    { term: "Peak discharge standard", def: "NR 151 requirement to maintain or reduce post-development peak flows for specified design storms." },
    { term: "Wet detention pond", def: "Stormwater pond with a permanent pool (DNR Technical Standard 1001)." },
    { term: "Bioretention", def: "Engineered soil and plant BMP that filters and infiltrates runoff." },
    { term: "Maintenance agreement", def: "Recorded document obligating owners to maintain stormwater BMPs." },
    { term: "FIRM", def: "FEMA Flood Insurance Rate Map." },
    { term: "Special Flood Hazard Area", def: "1%-annual-chance floodplain (Zones A, AE, etc.)." },
    { term: "Base flood elevation (BFE)", def: "Water surface elevation of the 1%-annual-chance flood." },
    { term: "Floodway / flood fringe", def: "Area that must remain open to convey floods / remainder of the floodplain where development may meet standards." },
    { term: "NR 116", def: "Wisconsin floodplain management rule." },
    { term: "Wetland delineation", def: "Field determination of wetland boundaries using vegetation, soils, and hydrology." },
    { term: "Wisconsin Wetland Inventory", def: "Statewide wetland mapping used for screening." },
    { term: "OHWM", def: "Ordinary high water mark: boundary of navigable waters for regulation." },
    { term: "NR 115 shoreland zoning", def: "County shoreland zoning: 1,000 ft from lakes, 300 ft from rivers; typical 75-ft setback." },
    { term: "POWTS", def: "Private onsite wastewater treatment system, regulated by DSPS (SPS 383)." }
  ],
  resources: [
    { title: "Wisconsin DNR — Construction Site Storm Water", url: "https://dnr.wisconsin.gov/topic/Stormwater/construction", note: "WPDES construction permit, NOI, inspections" },
    { title: "Wisconsin DNR — Stormwater technical standards", url: "https://dnr.wisconsin.gov/topic/Stormwater/standards", note: "Erosion control and post-construction technical standards" },
    { title: "Wis. Admin. Code NR 151 and NR 216", url: "https://docs.legis.wisconsin.gov/code/admin_code/nr/100/151", note: "Runoff management performance standards" },
    { title: "NOAA Atlas 14 Precipitation Frequency Data Server", url: "https://hdsc.nws.noaa.gov/pfds/", note: "Design rainfall" },
    { title: "NRCS — TR-55 Urban Hydrology for Small Watersheds", url: "https://www.nrcs.usda.gov/", note: "Curve number methodology (search TR-55)" },
    { title: "FEMA Flood Map Service Center", url: "https://msc.fema.gov/portal/home", note: "FIRMs and flood studies" },
    { title: "Wisconsin DNR — Surface Water Data Viewer", url: "https://dnr.wisconsin.gov/topic/SurfaceWater/SWDV", note: "Wetlands, floodplains, waters" },
    { title: "U.S. Access Board — 2010 ADA Standards", url: "https://www.access-board.gov/ada/", note: "Accessible route and parking slopes" },
    { title: "Wisconsin Statutes ch. 236 — Platting lands", url: "https://docs.legis.wisconsin.gov/statutes/statutes/236", note: "CSMs and plats" }
  ],
  teach: [
    { prompt: "A developer wants to build a 4-acre commercial site on a former farm field next to a small stream in Waukesha County. List the approvals and studies you'd expect and explain why each is needed.",
      model: "<p>Local: zoning compliance or rezoning/conditional use, site plan review, possibly a CSM to create the parcel, a local stormwater and erosion control permit, building permit (commercial plan review), utility connections, and driveway permits (WisDOT if on a state highway, county if on a county highway). State: WPDES construction stormwater permit coverage (NOI) because disturbance exceeds one acre, with an erosion and sediment control plan; post-construction stormwater design meeting NR 151 (TSS reduction, peak discharge, infiltration, protective area buffers) and any stricter local rules; DNR ch. 30 permits for any work at the stream or outfall; county shoreland zoning within 300 ft of the stream (or floodplain) under NR 115; floodplain review (FEMA FIRM, NR 116). Studies: topographic and boundary survey, wetland delineation (and DNR/USACE review if wetlands exist), geotechnical report, Phase I ESA (former farm: pesticides, fuel tanks), hydrology/water quality modeling (e.g., NOAA Atlas 14 rainfall, WinSLAMM), endangered resources and archaeological screening as needed.</p>" },
    { prompt: "Explain why paving a field increases peak runoff, using the rational method terms, and how a wet detention pond addresses both quantity and quality.",
      model: "<p>In Q = C·i·A, paving raises C from roughly 0.1–0.3 for grass to about 0.9, so far more of each storm runs off. Paved surfaces and pipes also move water faster, shortening the time of concentration, which raises the design intensity i. Both increase peak Q for the same area. A wet detention pond stores runoff and releases it through an outlet structure sized to keep post-development peaks at or below pre-development peaks for the required design storms (quantity). Its permanent pool slows water so suspended solids settle, achieving TSS reductions required by NR 151 (quality). DNR Technical Standard 1001 governs its design, and a maintenance agreement keeps it functioning.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Relief from a zoning setback requirement is typically granted by:", options: ["The DNR", "A board of zoning appeals (variance)", "FEMA", "The county surveyor"], answer: 1, explain: "Variances come from a zoning board of appeals." },
      { type: "mc", q: "Dividing a parcel into three lots in Wisconsin typically uses a:", options: ["Subdivision plat", "Certified Survey Map", "ALTA survey", "FIRM"], answer: 1, explain: "A CSM can create up to four parcels." },
      { type: "mc", q: "Which survey is standard for commercial real estate transactions?", options: ["Topographic survey", "ALTA/NSPS Land Title Survey", "As-built survey", "PLSS"], answer: 1, explain: "ALTA/NSPS." },
      { type: "mc", q: "On a grading plan, proposed contours are typically shown as:", options: ["Dashed, light lines", "Solid, heavier lines", "Dotted red lines", "Not shown"], answer: 1, explain: "Existing dashed; proposed solid." },
      { type: "mc", q: "The IBC requires ground adjacent to foundations to slope away at least:", options: ["1% for 5 ft", "2% for 5 ft", "5% for 10 ft", "10% for 20 ft"], answer: 2, explain: "5% for at least 10 ft, with alternatives." },
      { type: "mc", q: "Under the 2010 ADA Standards, a walking surface steeper than 1:20 must be designed as a:", options: ["Stair", "Ramp (max 1:12)", "Driveway", "Curb"], answer: 1, explain: "Ramps max 1:12 running slope." },
      { type: "num", q: "A sidewalk drops 0.9 ft over 30 ft. What is its running slope (%)?", answer: 3, tol: 0.01, unit: "%", explain: "0.9/30 = 3%." },
      { type: "num", q: "Cut areas 200 ft² and 240 ft², 50 ft apart. Volume in yd³? Round to the nearest whole.", answer: 407, tol: 1, unit: "yd³", explain: "(200 + 240)/2 × 50 = 11,000 ft³ ÷ 27 = 407.4 yd³." },
      { type: "mc", q: "Excavated soil occupying more volume when loose is called:", options: ["Shrink", "Swell", "Settlement", "Consolidation"], answer: 1, explain: "Swell." },
      { type: "mc", q: "A 10-year storm has an annual exceedance probability of:", options: ["1%", "10%", "50%", "90%"], answer: 1, explain: "1/10 = 10%." },
      { type: "mc", q: "Which source provides Wisconsin design rainfall depths and intensities?", options: ["FEMA FIRM", "NOAA Atlas 14", "Web Soil Survey only", "WisDOT CMM"], answer: 1, explain: "NOAA Atlas 14." },
      { type: "num", q: "A 1.5-acre roof and pavement area (C = 0.95) with i = 5.0 in/hr. Peak Q (cfs)? Two decimals.", answer: 7.13, tol: 0.01, unit: "cfs", explain: "0.95 × 5.0 × 1.5 = 7.125 ≈ 7.13 cfs." },
      { type: "mc", q: "Shortening the time of concentration generally:", options: ["Lowers peak flow", "Raises peak flow by increasing design intensity", "Has no effect", "Reduces runoff volume"], answer: 1, explain: "Shorter Tc → higher intensity → higher Q." },
      { type: "mc", q: "Impervious surfaces have a curve number of about:", options: ["30", "61", "80", "98"], answer: 3, explain: "CN = 98." },
      { type: "mc", q: "Hydrologic soil group A soils are typically:", options: ["Clays", "Sands and gravels with high infiltration", "Peat", "Shallow bedrock"], answer: 1, explain: "Group A = high infiltration." },
      { type: "mc", q: "Which models does the DNR accept to demonstrate TSS reductions?", options: ["HEC-RAS only", "WinSLAMM and P8", "AASHTOWare", "Excel only"], answer: 1, explain: "WinSLAMM and P8 are DNR-accepted." },
      { type: "mc", q: "Coverage under the WPDES construction stormwater permit begins with filing a(n):", options: ["Notice of Termination", "Notice of Intent", "RFI", "LOMA"], answer: 1, explain: "NOI." },
      { type: "mc", q: "A stone tracking pad is used to:", options: ["Stabilize slopes", "Reduce mud tracked onto streets", "Infiltrate stormwater", "Mark property lines"], answer: 1, explain: "Construction exit control." },
      { type: "mc", q: "NR 151's post-construction TSS reduction for new development is generally:", options: ["20%", "40%", "80%", "100%"], answer: 2, explain: "80% for new development (40% for redevelopment) — verify the current rule." },
      { type: "mc", q: "NR 151 peak discharge standards compare post- to pre-development peaks for the:", options: ["100-year storm only", "1- and 2-year, 24-hour storms", "500-year storm", "No storms"], answer: 1, explain: "1- and 2-year, 24-hour design storms in the state standard; locals may add more." },
      { type: "mc", q: "DNR Technical Standard 1001 addresses:", options: ["Silt fence", "Wet detention ponds", "Asphalt", "Wetland delineation"], answer: 1, explain: "1001 = wet detention pond." },
      { type: "mc", q: "Before designing an infiltration practice, a site evaluation per DNR Technical Standard ____ is needed.", options: ["1001", "1002", "1060", "1100"], answer: 1, explain: "1002 = site evaluation for stormwater infiltration." },
      { type: "mc", q: "The floodway is:", options: ["The area that must stay open to convey flood flows; development highly restricted", "The entire 500-year floodplain", "Any wetland", "The area above the BFE"], answer: 0, explain: "Floodway vs. flood fringe." },
      { type: "mc", q: "Wisconsin floodplain management rules are in:", options: ["NR 115", "NR 116", "NR 151", "NR 216"], answer: 1, explain: "NR 116." },
      { type: "mc", q: "County shoreland zoning under NR 115 applies within how far of a navigable lake's OHWM?", options: ["75 ft", "300 ft", "1,000 ft", "1 mile"], answer: 2, explain: "1,000 ft for lakes, 300 ft for rivers/streams; 75 ft is a typical building setback." },
      { type: "mc", q: "Private onsite wastewater treatment systems in Wisconsin are regulated by:", options: ["DNR NR 140", "DSPS SPS 383", "WisDOT", "FEMA"], answer: 1, explain: "SPS 383." }
    ]
  }
});
