COURSE.addModule({
  id: "m03",
  track: "t1",
  title: "Wisconsin Geology and Hydrogeology",
  hours: 4,
  summary: "Every boring, well, and foundation in Wisconsin is shaped by bedrock laid down hundreds of millions of years ago and by glaciers that left only about 11,000 years ago. This module builds the geologic picture and the groundwater concepts you will use in every discipline.",
  objectives: [
    "Describe Wisconsin's major bedrock units and where they occur, including the Silurian dolomite and the Maquoketa Shale in eastern Wisconsin.",
    "Identify glacial deposits — till, outwash, lacustrine, loess, peat — and their engineering and environmental significance.",
    "Name Wisconsin's principal aquifers and common naturally occurring groundwater quality issues.",
    "Define hydraulic head, gradient, hydraulic conductivity, and porosity, and apply Darcy's law.",
    "Interpret groundwater flow direction and vertical gradients from well data."
  ],
  lessons: [
    {
      title: "Bedrock: the foundation under the glacial cover",
      html: `
<p>Wisconsin's bedrock falls into two broad groups:</p>
<ul>
<li><strong>Precambrian crystalline rocks</strong> (igneous and metamorphic — granite, basalt, gneiss, quartzite) dominate northern and north-central Wisconsin. They are over 1 billion years old. Groundwater exists only in fractures, so wells yield little water.</li>
<li><strong>Paleozoic sedimentary rocks</strong> (sandstone, dolomite, shale) cover southern, western, and eastern Wisconsin. They dip gently away from a high point in north-central Wisconsin called the <strong>Wisconsin Arch</strong> (or Wisconsin Dome), so younger rocks appear as you move east toward Lake Michigan.</li>
</ul>
<h3>Key sedimentary units (oldest at bottom)</h3>
<div class="tbl-wrap"><table>
<tr><th>Age</th><th>Unit (simplified)</th><th>Rock type</th><th>Significance</th></tr>
<tr><td>Devonian</td><td>Milwaukee-area units along the Lake Michigan shore</td><td>Dolomite, shale</td><td>Limited extent near Milwaukee</td></tr>
<tr><td>Silurian</td><td>Silurian dolomite</td><td>Dolomite</td><td>Forms the <strong>Niagara Escarpment</strong> from Door County south through eastern Wisconsin; shallow bedrock and an important, highly fractured aquifer in the east, including much of Waukesha County</td></tr>
<tr><td>Upper Ordovician</td><td><strong>Maquoketa Shale</strong></td><td>Shale</td><td>A regional <strong>confining unit (aquitard)</strong> in eastern Wisconsin separating the dolomite aquifer above from the deep sandstone aquifer below</td></tr>
<tr><td>Ordovician</td><td>Sinnipee Group (Galena, Platteville), St. Peter Sandstone, Prairie du Chien Group</td><td>Dolomite, sandstone</td><td>Part of the deep sandstone aquifer system in the south and east</td></tr>
<tr><td>Cambrian</td><td>Mount Simon and other sandstones</td><td>Sandstone</td><td>The deepest, highest-yield part of the Cambrian–Ordovician aquifer</td></tr>
</table></div>
<p><strong>Dolomite</strong> is a carbonate rock (calcium magnesium carbonate) similar to limestone. It dissolves slowly along fractures, creating <strong>karst</strong> features such as solution-enlarged joints, sinkholes, and springs. In fractured dolomite, contaminants can move quickly and unpredictably along fractures, and thin soil cover over the dolomite gives little natural protection. This is a recurring issue in eastern Wisconsin, including Door County.</p>
<div class="callout"><strong>Local connection</strong>In Waukesha County, the Silurian dolomite lies beneath glacial deposits at depths ranging from at or near the surface to well over 100 feet. Soil borings that "refuse" on rock and environmental investigations that must characterize fractured-bedrock groundwater are both common.</div>
`,
      check: [
        { type: "mc", q: "Which rock unit acts as a regional confining layer between the shallow dolomite and deep sandstone aquifers in eastern Wisconsin?", options: ["St. Peter Sandstone", "Maquoketa Shale", "Silurian dolomite", "Mount Simon Sandstone"], answer: 1, explain: "The Maquoketa Shale is the major aquitard in eastern Wisconsin." },
        { type: "tf", q: "Contaminants in fractured dolomite tend to move slowly and evenly, like water through a sponge.", answer: false, explain: "Flow in fractured and karst dolomite is concentrated along fractures and can be fast and unpredictable." }
      ]
    },
    {
      title: "The glacial legacy: landforms and deposits",
      html: `
<p>The most recent continental glaciation is formally named the <strong>Wisconsin Glaciation</strong> because its deposits are so well displayed here. Lobes of the Laurentide Ice Sheet — including the Superior, Chippewa, Wisconsin Valley, Langlade, Green Bay, and Lake Michigan lobes — advanced into the state, reached their maximum extent roughly 20,000 years ago, and had largely melted from the state by roughly 11,000 years ago. Earlier glaciations also left older deposits.</p>
<p>Southwestern Wisconsin, the <strong>Driftless Area</strong>, was not covered by ice during the most recent glaciation and lacks glacial drift. It has deeply eroded valleys, thin soils over bedrock, and wind-blown silt (loess) on the uplands.</p>
<p>The <strong>Kettle Moraine</strong>, which runs through Waukesha, Washington, Walworth, and Sheboygan counties, formed between the Green Bay and Lake Michigan lobes. It is an <em>interlobate</em> moraine full of kames, kettles, and eskers.</p>
<h3>Glacial deposits and why they matter</h3>
<div class="tbl-wrap"><table>
<tr><th>Deposit</th><th>How it formed</th><th>Typical character</th><th>Geotechnical significance</th><th>Environmental significance</th></tr>
<tr><td><strong>Till</strong></td><td>Deposited directly by ice</td><td>Unsorted, unstratified mix of clay, silt, sand, gravel, cobbles, and boulders. Lodgement till can be very dense ("hardpan")</td><td>Often good bearing; cobbles and boulders cause auger refusal and excavation difficulty; clayey tills are low permeability</td><td>Clay-rich till slows contaminant migration, but sand seams and fractures in till can carry contaminants</td></tr>
<tr><td><strong>Outwash</strong></td><td>Deposited by meltwater streams</td><td>Stratified, sorted sand and gravel</td><td>Good drainage and bearing when dense; dewatering challenges in excavations; source of construction aggregate</td><td>Highly permeable aquifer; contaminants travel far and fast</td></tr>
<tr><td><strong>Lacustrine</strong> (glacial lake)</td><td>Settled out in glacial lakes</td><td>Laminated or varved silts and clays; e.g., the reddish clays near Lake Michigan and the Fox Valley</td><td>Soft, compressible, and prone to settlement; low strength</td><td>Low permeability; can act as a confining layer</td></tr>
<tr><td><strong>Loess</strong></td><td>Wind-blown silt</td><td>Uniform silt</td><td>Erodible; can collapse when wetted; frost-susceptible</td><td>Moderate permeability</td></tr>
<tr><td><strong>Peat, muck, marl</strong></td><td>Accumulated in kettles, wetlands, and lake basins</td><td>Organic soils (peat, muck) and soft calcareous lake deposits (marl)</td><td>Very compressible; usually must be removed or bypassed by deep foundations</td><td>Can generate methane; may indicate wetland regulation</td></tr>
</table></div>
<h3>Landforms you'll see on maps and in the field</h3>
<ul>
<li><strong>End (terminal) moraine</strong> — a ridge of till marking where the ice margin stood.</li>
<li><strong>Ground moraine</strong> — gently rolling till plain left beneath the ice.</li>
<li><strong>Drumlin</strong> — streamlined, elongated till hill aligned with ice flow. The area of Dodge and Jefferson counties has one of the world's largest drumlin fields.</li>
<li><strong>Esker</strong> — sinuous ridge of sand and gravel deposited by a stream flowing in a tunnel within or beneath the ice.</li>
<li><strong>Kame</strong> — mound of sand and gravel deposited in a depression on or against the ice.</li>
<li><strong>Kettle</strong> — depression formed when a buried block of ice melted; many become lakes or wetlands.</li>
<li><strong>Outwash plain</strong> — broad, flat apron of meltwater sand and gravel (e.g., central Wisconsin's sand plain).</li>
</ul>
<div class="mnemonic"><strong>T</strong>ill is <strong>T</strong>umbled together (unsorted). <strong>O</strong>utwash is <strong>O</strong>rganized by water (sorted, layered). <strong>L</strong>acustrine is <strong>L</strong>ake mud (soft, layered fines).</div>
`,
      check: [
        { type: "mc", q: "An unsorted mixture of clay, silt, sand, gravel, and boulders deposited directly by glacial ice is:", options: ["Outwash", "Till", "Loess", "Lacustrine clay"], answer: 1, explain: "Till is deposited directly by ice and is unsorted." },
        { type: "mc", q: "Which glacial deposit is MOST likely to be soft and cause foundation settlement?", options: ["Dense lodgement till", "Outwash gravel", "Lacustrine clay", "Esker sand"], answer: 2, explain: "Lacustrine (lake-deposited) clays and silts are typically soft and compressible." }
      ]
    },
    {
      title: "Groundwater basics: where water lives underground",
      html: `
<h3>Zones beneath the surface</h3>
<ul>
<li><strong>Vadose (unsaturated) zone</strong> — between the ground surface and the water table; pores contain both air and water.</li>
<li><strong>Capillary fringe</strong> — a zone just above the water table where water is drawn up by capillary tension; thicker in fine-grained soils.</li>
<li><strong>Water table</strong> — the surface where pore water pressure equals atmospheric pressure; the top of the saturated zone in an unconfined aquifer.</li>
<li><strong>Saturated zone</strong> — all pores filled with water.</li>
</ul>
<h3>Aquifers and aquitards</h3>
<ul>
<li><strong>Aquifer</strong> — a saturated geologic unit that can transmit significant quantities of water to wells (sand and gravel, sandstone, fractured dolomite).</li>
<li><strong>Aquitard</strong> (confining unit) — a low-permeability unit that restricts flow (clay, shale such as the Maquoketa).</li>
<li><strong>Unconfined aquifer</strong> — its upper boundary is the water table.</li>
<li><strong>Confined aquifer</strong> — bounded above by an aquitard; water is under pressure, so it rises in a well above the top of the aquifer. The level to which it rises defines the <strong>potentiometric surface</strong>. If the potentiometric surface is above ground, the well flows without pumping (a flowing artesian well).</li>
<li><strong>Perched water</strong> — a local saturated zone sitting on a low-permeability lens above the main water table. Common in glacial deposits; can mislead you into thinking the water table is shallow.</li>
</ul>
<h3>Wisconsin's principal aquifers</h3>
<div class="tbl-wrap"><table>
<tr><th>Aquifer</th><th>Where</th><th>Notes</th></tr>
<tr><td>Sand and gravel (glacial)</td><td>Statewide where outwash is thick, especially central Wisconsin</td><td>Shallow, productive, vulnerable to surface contamination (e.g., nitrate)</td></tr>
<tr><td>Silurian dolomite (eastern dolomite)</td><td>Eastern Wisconsin along Lake Michigan</td><td>Fractured; yields vary widely; vulnerable where soil cover is thin</td></tr>
<tr><td>Cambrian–Ordovician sandstone ("deep sandstone")</td><td>Southern and eastern Wisconsin</td><td>Major municipal supply; confined beneath the Maquoketa Shale in the east; heavy pumping in southeastern Wisconsin has caused large historical declines in its potentiometric surface</td></tr>
<tr><td>Precambrian crystalline</td><td>Northern Wisconsin</td><td>Low yields from fractures</td></tr>
</table></div>
<h3>Naturally occurring water quality issues</h3>
<ul>
<li><strong>Radium</strong> — naturally elevated in parts of the deep sandstone aquifer. Combined with drawdown concerns, this led the City of Waukesha to seek Lake Michigan water under the Great Lakes Compact; the diversion was approved in 2016 and Waukesha began receiving Lake Michigan water in 2023.</li>
<li><strong>Arsenic</strong> — naturally occurring in some northeastern Wisconsin bedrock (notably associated with sulfide minerals in parts of the Ordovician sandstone and dolomite in the Fox Valley area).</li>
<li><strong>Nitrate</strong> — mostly from agricultural fertilizer, manure, and septic systems; Wisconsin's most widespread groundwater contaminant.</li>
<li><strong>Hardness and iron</strong> — common in carbonate aquifers.</li>
</ul>
<p>Roughly two-thirds or more of Wisconsin residents rely on groundwater for drinking water, which is why Wisconsin's groundwater protection law (Wis. Stat. ch. 160, implemented through NR 140) matters so much in environmental consulting.</p>
`,
      check: [
        { type: "mc", q: "The level to which water rises in a well screened in a confined aquifer defines the:", options: ["Water table", "Capillary fringe", "Potentiometric surface", "Vadose zone"], answer: 2, explain: "In confined aquifers, the pressure head defines the potentiometric surface." },
        { type: "mc", q: "Wisconsin's most widespread groundwater contaminant, largely from agricultural sources, is:", options: ["Radium", "Arsenic", "Nitrate", "Benzene"], answer: 2, explain: "Nitrate from fertilizer, manure, and septic systems is the most widespread." }
      ]
    },
    {
      title: "Head, gradient, conductivity, and Darcy's law",
      html: `
<h3>Hydraulic head</h3>
<p>Groundwater flows from high <strong>hydraulic head</strong> to low hydraulic head — not necessarily from high elevation to low elevation, and not from high pressure to low pressure. Head is the sum of elevation head and pressure head:</p>
<span class="formula">h = z + p / γw
h  = total hydraulic head (ft or m)
z  = elevation head (elevation of the measuring point above a datum)
p/γw = pressure head (water pressure divided by unit weight of water)</span>
<p>In practice, head in a monitoring well is simply the <strong>groundwater elevation</strong>: the surveyed top-of-casing elevation minus the measured depth to water.</p>
<span class="formula">Groundwater elevation = Top-of-casing elevation − Depth to water</span>
<h3>Hydraulic gradient</h3>
<span class="formula">i = Δh / L     (dimensionless; change in head over the flow distance)</span>
<h3>Hydraulic conductivity and porosity</h3>
<p><strong>Hydraulic conductivity (K)</strong> measures how easily water moves through a material, in units of velocity (cm/s, ft/day, m/day). It spans many orders of magnitude:</p>
<div class="tbl-wrap"><table>
<tr><th>Material</th><th>Typical K (cm/s), order of magnitude</th></tr>
<tr><td>Clean gravel</td><td>1 to 10⁻²</td></tr>
<tr><td>Clean sand</td><td>10⁻² to 10⁻⁴</td></tr>
<tr><td>Silty sand, silt</td><td>10⁻³ to 10⁻⁶</td></tr>
<tr><td>Clay (unfractured)</td><td>&lt; 10⁻⁷</td></tr>
</table></div>
<p><strong>Porosity (n)</strong> is the fraction of total volume that is voids. <strong>Effective porosity (nₑ)</strong> is the interconnected portion available for flow. Clay can have high total porosity but very low K, because its pores are tiny and water is held tightly.</p>
<h3>Darcy's law</h3>
<span class="formula">Q = K · i · A        (flow rate, volume/time)
q = K · i            (Darcy flux or specific discharge)
v = K · i / nₑ       (average linear or seepage velocity)</span>
<p>The <strong>seepage velocity</strong> is what tells you how fast a dissolved contaminant (ignoring retardation) moves. It is faster than the Darcy flux because water only moves through the pores.</p>
<div class="callout"><strong>Worked example</strong>Outwash sand: K = 10 ft/day, gradient i = 0.005, effective porosity nₑ = 0.25.<br>v = (10 × 0.005) / 0.25 = 0.2 ft/day ≈ 73 ft/year. A benzene plume (before accounting for retardation and biodegradation) could advance on the order of 70 feet per year.</div>
<div class="mnemonic">"<strong>Kia</strong> makes the <strong>Q</strong>": Q = K·i·A. Divide by nₑ when you want the speed of the water itself.</div>
`,
      check: [
        { type: "num", q: "A monitoring well has a top-of-casing elevation of 842.36 ft. Depth to water is 11.20 ft. What is the groundwater elevation?", answer: 831.16, tol: 0.01, unit: "ft", explain: "842.36 − 11.20 = 831.16 ft." },
        { type: "num", q: "K = 20 ft/day, i = 0.004, nₑ = 0.20. What is the seepage velocity in ft/day?", answer: 0.4, tol: 0.001, unit: "ft/day", explain: "v = Ki/nₑ = (20 × 0.004)/0.20 = 0.4 ft/day." }
      ]
    },
    {
      title: "Reading groundwater flow: maps, three-point problems, and vertical gradients",
      html: `
<h3>Groundwater contour (potentiometric) maps</h3>
<p>Plot groundwater elevations at each well on a site plan and contour them. Lines of equal head are <strong>equipotential lines</strong>. In isotropic material, groundwater flows <strong>perpendicular</strong> to the equipotentials, from high to low. Closely spaced contours mean a steep gradient; widely spaced contours mean a flat gradient (or high-K material).</p>
<p>Use only wells screened in the <strong>same water-bearing unit</strong> on one contour map. Mixing shallow water table wells with deep piezometers produces meaningless contours.</p>
<h3>The three-point problem</h3>
<p>With three wells that are not in a straight line, you can estimate flow direction and gradient: find the point along the line between the highest and lowest wells that has the same head as the middle well; connect it to the middle well — that is an equipotential line. Flow is perpendicular to it, toward lower head. The gradient is the head difference divided by the perpendicular distance between equipotentials.</p>
<h3>Vertical gradients</h3>
<p>A <strong>nested well</strong> or <strong>well nest</strong> places a water table well and a deeper piezometer side by side. Compare their heads:</p>
<ul>
<li>Deeper well has <strong>lower</strong> head → <strong>downward</strong> gradient → typical of <strong>recharge</strong> areas (uplands). Contamination can be driven deeper.</li>
<li>Deeper well has <strong>higher</strong> head → <strong>upward</strong> gradient → typical of <strong>discharge</strong> areas (near streams, lakes, wetlands).</li>
</ul>
<span class="formula">Vertical gradient = (h_shallow − h_deep) / (vertical distance between screen midpoints)
positive = downward; negative = upward</span>
<h3>Groundwater and surface water</h3>
<p>A <strong>gaining stream</strong> receives groundwater discharge (water table slopes toward the stream). A <strong>losing stream</strong> leaks water into the aquifer. Most Wisconsin streams, lakes, and wetlands are groundwater discharge features, which means contaminated groundwater can eventually discharge to surface water — a pathway regulators will ask you to evaluate.</p>
<h3>Where to find Wisconsin geologic data</h3>
<ul>
<li><strong>Wisconsin Geological and Natural History Survey (WGNHS)</strong> — bedrock and glacial geology maps, depth-to-bedrock maps, county groundwater studies.</li>
<li><strong>DNR well construction reports</strong> — logs submitted by well drillers, useful for stratigraphy and water levels near your site.</li>
<li><strong>USGS</strong> — topographic maps, National Water Information System data, groundwater studies.</li>
<li><strong>NRCS Web Soil Survey</strong> — near-surface soil series, drainage class, depth to water table and bedrock (upper ~5–6 feet).</li>
</ul>
`,
      check: [
        { type: "mc", q: "In a well nest, the deep piezometer has a head of 812.4 ft and the shallow well 814.1 ft. The vertical gradient is:", options: ["Upward, typical of a discharge area", "Downward, typical of a recharge area", "Zero", "Cannot be determined"], answer: 1, explain: "Head decreases with depth, so flow is downward — typical of recharge areas." },
        { type: "tf", q: "In isotropic material, groundwater flows parallel to equipotential lines.", answer: false, explain: "Flow is perpendicular to equipotential lines, from high head to low head." }
      ]
    }
  ],
  terms: [
    { term: "Wisconsin Arch (Dome)", def: "Structural high in north-central Wisconsin from which Paleozoic sedimentary rocks dip gently away; Precambrian rocks are exposed at its core." },
    { term: "Precambrian crystalline rock", def: "Igneous and metamorphic rock over 1 billion years old underlying northern Wisconsin; low groundwater yield from fractures." },
    { term: "Silurian dolomite", def: "Carbonate bedrock in eastern Wisconsin forming the Niagara Escarpment; shallow, fractured, and an important aquifer." },
    { term: "Niagara Escarpment", def: "Cuesta ridge of resistant Silurian dolomite running from Door County south through eastern Wisconsin." },
    { term: "Maquoketa Shale", def: "Upper Ordovician shale acting as the regional confining unit between the dolomite aquifer and deep sandstone aquifer in eastern Wisconsin." },
    { term: "Karst", def: "Terrain formed by dissolution of carbonate rock: solution-enlarged fractures, sinkholes, springs; allows rapid contaminant transport." },
    { term: "Driftless Area", def: "Southwestern Wisconsin, not covered by ice during the most recent glaciation; lacks glacial drift." },
    { term: "Kettle Moraine", def: "Interlobate moraine formed between the Green Bay and Lake Michigan lobes, running through Waukesha County and neighboring counties." },
    { term: "Till", def: "Unsorted, unstratified sediment deposited directly by glacial ice; clay to boulders." },
    { term: "Outwash", def: "Stratified, sorted sand and gravel deposited by glacial meltwater; permeable aquifer and aggregate source." },
    { term: "Lacustrine deposit", def: "Fine-grained, often laminated or varved silt and clay settled in a glacial lake; soft and compressible." },
    { term: "Loess", def: "Wind-deposited silt; erodible and frost-susceptible." },
    { term: "Marl", def: "Soft, calcareous lake deposit, often found with peat in kettle basins." },
    { term: "Drumlin", def: "Streamlined, elongated hill of till aligned with the direction of glacial ice flow." },
    { term: "Esker", def: "Sinuous ridge of sand and gravel deposited by a meltwater stream in a tunnel within or beneath glacial ice." },
    { term: "Kettle", def: "Depression formed when a buried block of glacial ice melted; often a lake or wetland." },
    { term: "Vadose zone", def: "The unsaturated zone between the ground surface and the water table." },
    { term: "Water table", def: "The surface in an unconfined aquifer at which pore water pressure equals atmospheric pressure." },
    { term: "Capillary fringe", def: "Zone just above the water table where pores are nearly saturated by capillary rise." },
    { term: "Aquifer", def: "A saturated geologic unit capable of transmitting significant quantities of water to wells." },
    { term: "Aquitard", def: "A low-permeability confining unit that restricts groundwater flow." },
    { term: "Confined aquifer", def: "An aquifer bounded above by an aquitard, with water under pressure above the aquifer top." },
    { term: "Potentiometric surface", def: "The imaginary surface representing the hydraulic head in an aquifer, especially a confined one." },
    { term: "Perched water", def: "A local saturated zone above the main water table, sitting on a low-permeability lens." },
    { term: "Hydraulic head", def: "Total mechanical energy of groundwater per unit weight: elevation head plus pressure head; measured as groundwater elevation." },
    { term: "Hydraulic gradient (i)", def: "Change in head divided by distance along the flow path; dimensionless." },
    { term: "Hydraulic conductivity (K)", def: "Ability of a material to transmit water, in velocity units; ranges from ~1 cm/s (gravel) to <10⁻⁷ cm/s (clay)." },
    { term: "Effective porosity", def: "The interconnected pore fraction available for groundwater flow." },
    { term: "Darcy's law", def: "Q = K·i·A; flow through porous media is proportional to hydraulic conductivity, gradient, and area." },
    { term: "Seepage velocity", def: "Average linear groundwater velocity, v = K·i / nₑ." },
    { term: "Equipotential line", def: "A contour of equal hydraulic head; flow is perpendicular to it in isotropic media." },
    { term: "Well nest", def: "Wells screened at different depths at one location, used to measure vertical gradients." },
    { term: "Gaining stream", def: "A stream that receives groundwater discharge." },
    { term: "WGNHS", def: "Wisconsin Geological and Natural History Survey: state source for geologic and groundwater maps and data." }
  ],
  resources: [
    { title: "Wisconsin Geological and Natural History Survey (WGNHS)", url: "https://home.wgnhs.wisc.edu/", note: "Bedrock and glacial maps, groundwater studies" },
    { title: "WGNHS — Wisconsin geology overview", url: "https://home.wgnhs.wisc.edu/wisconsin-geology/", note: "Bedrock, glaciation, and landforms" },
    { title: "USGS Upper Midwest Water Science Center", url: "https://www.usgs.gov/centers/upper-midwest-water-science-center", note: "Wisconsin groundwater studies" },
    { title: "Wisconsin DNR — Groundwater", url: "https://dnr.wisconsin.gov/topic/Groundwater", note: "Groundwater quality, contaminants, and protection" },
    { title: "NRCS Web Soil Survey", url: "https://websoilsurvey.nrcs.usda.gov/", note: "Near-surface soil properties" },
    { title: "Freeze & Cherry, Groundwater (1979) — free via the Groundwater Project", url: "https://gw-project.org/", note: "Classic hydrogeology text and free modern books" },
    { title: "Wisconsin Statutes ch. 160 — Groundwater protection standards", url: "https://docs.legis.wisconsin.gov/statutes/statutes/160", note: "Statutory basis for NR 140" }
  ],
  teach: [
    { prompt: "Explain to a new coworker why a petroleum release in outwash sand in central Wisconsin and one in clayey till in eastern Wisconsin would likely be investigated differently. Use the terms hydraulic conductivity, seepage velocity, and fractures.",
      model: "<p>Outwash sand has high hydraulic conductivity (roughly 10⁻² to 10⁻⁴ cm/s) and is often a water-table aquifer, so the seepage velocity (Ki/nₑ) can be tens of feet per year or more; a dissolved plume can travel far, so wells must be spaced over a larger area. Clayey till has very low K, so groundwater and dissolved contaminants move slowly and plumes tend to be smaller — but till can contain sand seams and fractures that act as fast pathways, and in eastern Wisconsin thin till may overlie fractured Silurian dolomite where flow is along fractures. The investigation in till must look for those preferential pathways and may need bedrock wells.</p>" },
    { prompt: "Describe how you would determine groundwater flow direction at a site with three monitoring wells, and what extra information a deeper well next to one of them would give you.",
      model: "<p>Survey the top-of-casing elevations, measure depth to water in each well on the same day, and compute groundwater elevations. Solve the three-point problem: find the point between the highest and lowest wells with the same head as the middle well, draw the equipotential line through it and the middle well, and draw flow perpendicular toward lower head; the gradient is the head drop over the perpendicular distance. A deeper well next to a shallow one creates a nest that shows the vertical gradient: lower head at depth means downward flow (recharge area), higher head at depth means upward flow (discharge area).</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Northern Wisconsin is dominantly underlain by:", options: ["Silurian dolomite", "Precambrian crystalline rocks", "Cambrian sandstone", "Devonian shale"], answer: 1, explain: "Precambrian igneous and metamorphic rocks dominate the north." },
      { type: "mc", q: "The Niagara Escarpment is formed by:", options: ["Cambrian sandstone", "Silurian dolomite", "Precambrian granite", "Glacial outwash"], answer: 1, explain: "The escarpment is resistant Silurian dolomite." },
      { type: "mc", q: "The Wisconsin Arch causes Paleozoic rocks in eastern Wisconsin to:", options: ["Dip gently east toward Lake Michigan", "Stand vertically", "Be absent", "Dip west toward Minnesota"], answer: 0, explain: "Rocks dip away from the arch, so they dip east in eastern Wisconsin with younger units toward the lake." },
      { type: "mc", q: "The Driftless Area is characterized by:", options: ["Thick glacial till", "Many kettle lakes", "Absence of glacial drift from the most recent glaciation", "Drumlin fields"], answer: 2, explain: "It was not glaciated during the last glaciation and lacks drift." },
      { type: "mc", q: "The Kettle Moraine formed:", options: ["At the southern tip of a single lobe", "Between the Green Bay and Lake Michigan lobes", "From wind-blown silt", "In the Driftless Area"], answer: 1, explain: "It is an interlobate moraine between the two lobes." },
      { type: "mc", q: "A sinuous ridge of stratified sand and gravel deposited by a subglacial stream is a(n):", options: ["Drumlin", "Esker", "Kettle", "Ground moraine"], answer: 1, explain: "Eskers are sinuous stream deposits from tunnels in or under ice." },
      { type: "mc", q: "Which deposit is the best source of construction sand and gravel and is also a highly permeable aquifer?", options: ["Till", "Outwash", "Lacustrine clay", "Peat"], answer: 1, explain: "Outwash is sorted sand and gravel." },
      { type: "mc", q: "Auger refusal at 12 feet in glacial till most likely indicates:", options: ["The water table", "A boulder or bedrock", "Peat", "Perched water"], answer: 1, explain: "Till commonly contains cobbles and boulders; refusal may also be bedrock — coring or offsetting can tell which." },
      { type: "mc", q: "Peat and marl encountered in a boring typically mean:", options: ["Excellent bearing soils", "Highly compressible soils that usually must be removed or bypassed", "Bedrock is near", "The site is in the Driftless Area"], answer: 1, explain: "Organic and soft calcareous soils are compressible and weak." },
      { type: "mc", q: "Where is the capillary fringe?", options: ["Below the water table", "Just above the water table", "At the ground surface", "In confined aquifers only"], answer: 1, explain: "The capillary fringe sits just above the water table." },
      { type: "mc", q: "Groundwater flows from:", options: ["High elevation to low elevation", "High pressure to low pressure", "High hydraulic head to low hydraulic head", "Fine soils to coarse soils"], answer: 2, explain: "Flow is driven by differences in total hydraulic head." },
      { type: "num", q: "Two wells 400 ft apart along the flow path have groundwater elevations of 856.8 ft and 854.8 ft. What is the hydraulic gradient (dimensionless)?", answer: 0.005, tol: 0.0001, unit: "", explain: "i = (856.8 − 854.8)/400 = 2.0/400 = 0.005." },
      { type: "num", q: "K = 5 ft/day, i = 0.01, nₑ = 0.25. Seepage velocity in ft/year? (Use 365 days/year.)", answer: 73, tol: 0.5, unit: "ft/yr", explain: "v = 5 × 0.01 / 0.25 = 0.2 ft/day × 365 = 73 ft/yr." },
      { type: "num", q: "Using Darcy's law with K = 30 ft/day, i = 0.002, cross-sectional area A = 5,000 ft². What is Q in ft³/day?", answer: 300, tol: 0.5, unit: "ft³/day", explain: "Q = KiA = 30 × 0.002 × 5,000 = 300 ft³/day." },
      { type: "mc", q: "Which material typically has the LOWEST hydraulic conductivity?", options: ["Clean gravel", "Clean sand", "Silty sand", "Unfractured clay"], answer: 3, explain: "Unfractured clay is typically below 10⁻⁷ cm/s." },
      { type: "tf", q: "Clay can have a high total porosity but a very low hydraulic conductivity.", answer: true, explain: "Clay pores are numerous but tiny and poorly connected for flow." },
      { type: "mc", q: "Seepage velocity is greater than Darcy flux because:", options: ["Water only flows through the effective pore space", "Gravity accelerates groundwater", "K increases with depth", "Darcy flux ignores the gradient"], answer: 0, explain: "Dividing Darcy flux by effective porosity gives the actual average velocity through pores." },
      { type: "mc", q: "A well nest shows higher head in the deep well than the shallow well. This indicates:", options: ["Downward gradient; recharge area", "Upward gradient; discharge area", "No flow", "A perched zone"], answer: 1, explain: "Higher head at depth drives flow upward, typical near discharge features." },
      { type: "mc", q: "Why shouldn't you contour water levels from a water table well and a deep bedrock well on the same map?", options: ["The surveyor charges more", "They measure heads in different hydrostratigraphic units", "Bedrock wells are always dry", "Contours must be straight"], answer: 1, explain: "Potentiometric maps should use wells screened in the same unit." },
      { type: "mc", q: "Which naturally occurring contaminant in the deep sandstone aquifer was a factor in Waukesha's switch to Lake Michigan water?", options: ["Arsenic", "Radium", "Nitrate", "Uranium mill tailings"], answer: 1, explain: "Radium in the deep sandstone aquifer, along with drawdown, drove the Great Lakes diversion request." },
      { type: "mc", q: "Under which compact was Waukesha's Lake Michigan diversion approved?", options: ["Colorado River Compact", "Great Lakes–St. Lawrence River Basin Water Resources Compact", "Mississippi River Compact", "Clean Water Act"], answer: 1, explain: "The Great Lakes Compact governs diversions; Waukesha's was approved in 2016." },
      { type: "mc", q: "Naturally occurring arsenic in groundwater in Wisconsin is especially associated with:", options: ["The Driftless Area loess", "Sulfide minerals in parts of the Ordovician bedrock in northeastern Wisconsin", "Lake Superior sandstone", "Peat bogs"], answer: 1, explain: "Arsenic problems in the Fox Valley area are linked to sulfide-bearing bedrock horizons." },
      { type: "mc", q: "Which source provides near-surface (upper ~5–6 ft) soil information including drainage class?", options: ["WGNHS bedrock map", "NRCS Web Soil Survey", "FEMA FIRM", "BRRTS"], answer: 1, explain: "The NRCS Web Soil Survey maps near-surface soil series and properties." },
      { type: "mc", q: "Groundwater in a confined aquifer rises above ground in a well without pumping. This is a:", options: ["Perched well", "Flowing artesian well", "Water table well", "Dry well"], answer: 1, explain: "When the potentiometric surface is above land surface, the well flows." },
      { type: "mc", q: "Most Wisconsin lakes, streams, and wetlands are:", options: ["Groundwater recharge features only", "Groundwater discharge features", "Disconnected from groundwater", "Perched"], answer: 1, explain: "Most are discharge features, so contaminated groundwater can reach surface water." },
      { type: "mc", q: "Why does thin soil over fractured dolomite create groundwater vulnerability?", options: ["Dolomite is radioactive", "Little natural filtration before contaminants reach rapid fracture flow paths", "Dolomite is impermeable", "Soil is always contaminated"], answer: 1, explain: "Thin cover provides little attenuation, and fractures carry contaminants quickly." }
    ]
  }
});
