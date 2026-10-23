COURSE.addModule({
  id: "m02",
  track: "t1",
  title: "Health and Safety Fundamentals",
  hours: 4,
  summary: "The hazards consultants actually face — chemical exposure, excavations, buried and overhead utilities, drill rigs, traffic, confined spaces, weather, and radiation — and the regulations and plans used to control them. This is vocabulary and awareness; it does not replace required OSHA training.",
  objectives: [
    "Apply the hierarchy of controls and explain the purpose of a site-specific health and safety plan (HASP).",
    "Describe HAZWOPER training tiers, exposure routes, exposure limits, PPE levels, and common air monitoring instruments.",
    "State key OSHA excavation requirements and Wisconsin's utility locate (Diggers Hotline) obligations.",
    "Recognize drill rig, traffic, and confined space hazards and the controls for each.",
    "Identify heat, cold, noise, silica, biological, lightning, and radiation hazards and how they are managed."
  ],
  lessons: [
    {
      title: "Safety culture, the hierarchy of controls, and the HASP",
      html: `
<p>Consulting work puts people next to drill rigs, open excavations, contaminated soil, traffic, and heavy equipment — often alone, often on sites controlled by someone else. The single most important safety principle is that <strong>every employee has stop-work authority</strong>: if something looks unsafe, you stop, step back, and call your supervisor. No project budget justifies an injury.</p>
<h3>The hierarchy of controls</h3>
<p>NIOSH ranks hazard controls from most to least effective:</p>
<ol>
<li><strong>Elimination</strong> — physically remove the hazard (e.g., collect a sample from the surface instead of entering the trench).</li>
<li><strong>Substitution</strong> — replace the hazard with something less hazardous.</li>
<li><strong>Engineering controls</strong> — isolate people from the hazard (trench boxes, machine guards, ventilation, water suppression on saws).</li>
<li><strong>Administrative controls</strong> — change the way people work (procedures, training, work-rest schedules, signage).</li>
<li><strong>Personal protective equipment (PPE)</strong> — hard hat, safety glasses, gloves, respirator. PPE is the <em>last</em> line of defense, not the first.</li>
</ol>
<div class="mnemonic">"<strong>E</strong>very <strong>S</strong>afe <strong>E</strong>mployee <strong>A</strong>lways <strong>P</strong>lans": Elimination, Substitution, Engineering, Administrative, PPE.</div>
<h3>The health and safety plan (HASP)</h3>
<p>For hazardous waste site work, OSHA's HAZWOPER standard (29 CFR 1910.120 and the construction counterpart 29 CFR 1926.65) requires a written site-specific safety and health plan. Most firms write a HASP for every field project. A HASP typically includes:</p>
<ul>
<li>Site description, scope of field work, and known or suspected contaminants.</li>
<li>Hazard analysis for each task (often a <strong>Job Hazard Analysis</strong>, JHA, or Job Safety Analysis, JSA).</li>
<li>Required PPE and action levels for upgrading PPE or stopping work based on air monitoring.</li>
<li>Emergency contacts, nearest hospital with a route map, and evacuation/muster point.</li>
<li>Decontamination procedures and site control zones (exclusion zone, contamination reduction zone, support zone).</li>
</ul>
<p>Before work starts each day, crews hold a <strong>tailgate (toolbox) safety meeting</strong> to review the day's hazards. Everyone on site signs the HASP acknowledgment.</p>
<h3>Site control zones</h3>
<div class="tbl-wrap"><table>
<tr><th>Zone</th><th>Purpose</th></tr>
<tr><td>Exclusion zone ("hot zone")</td><td>Where contamination is present and the work happens; required PPE worn.</td></tr>
<tr><td>Contamination reduction zone</td><td>Transition area where personnel and equipment are decontaminated.</td></tr>
<tr><td>Support zone ("clean zone")</td><td>Uncontaminated area for vehicles, office functions, and breaks.</td></tr>
</table></div>
`,
      check: [
        { type: "mc", q: "According to the hierarchy of controls, which is the MOST effective way to protect a worker from a trench cave-in?", options: ["Wear a hard hat", "Train the worker to watch for cracks", "Eliminate the need to enter the trench", "Post warning signs"], answer: 2, explain: "Elimination removes the hazard entirely and sits at the top of the hierarchy; PPE is the least effective." },
        { type: "mc", q: "In site control for hazardous waste work, decontamination takes place in the:", options: ["Exclusion zone", "Contamination reduction zone", "Support zone", "Staging zone"], answer: 1, explain: "The contamination reduction zone is the transition area where decon occurs." }
      ]
    },
    {
      title: "HAZWOPER, chemical exposure, PPE levels, and air monitoring",
      html: `
<h3>HAZWOPER training tiers (29 CFR 1910.120(e))</h3>
<div class="tbl-wrap"><table>
<tr><th>Worker category</th><th>Initial training</th></tr>
<tr><td>General site workers (e.g., samplers, equipment operators) on uncontrolled hazardous waste sites</td><td>40 hours off-site instruction + 3 days supervised field experience</td></tr>
<tr><td>Workers on site only occasionally for a specific limited task, unlikely to be exposed over permissible limits</td><td>24 hours off-site + 1 day supervised field experience</td></tr>
<tr><td>Supervisors/managers</td><td>The above plus 8 additional hours of supervisor training</td></tr>
<tr><td>All</td><td>8 hours of refresher training annually</td></tr>
</table></div>
<h3>Exposure routes</h3>
<p>Chemicals enter the body by <strong>inhalation</strong> (the most common route on environmental sites — vapors and dust), <strong>ingestion</strong> (eating or smoking with dirty hands), <strong>dermal absorption</strong> (through skin — many solvents), and <strong>injection</strong> (punctures).</p>
<h3>Exposure limits</h3>
<ul>
<li><strong>PEL</strong> — Permissible Exposure Limit, OSHA's legally enforceable limit, usually an 8-hour time-weighted average (TWA).</li>
<li><strong>REL</strong> — Recommended Exposure Limit, from NIOSH (not enforceable, often more protective).</li>
<li><strong>TLV</strong> — Threshold Limit Value, from ACGIH (a professional guideline).</li>
<li><strong>STEL</strong> — Short-Term Exposure Limit, usually a 15-minute TWA.</li>
<li><strong>IDLH</strong> — Immediately Dangerous to Life or Health; exposure could cause death or irreversible effects or prevent escape.</li>
</ul>
<h3>Hazard Communication</h3>
<p>OSHA's Hazard Communication Standard (29 CFR 1910.1200), aligned with the Globally Harmonized System (GHS), requires labels and <strong>Safety Data Sheets (SDSs)</strong> in a standard 16-section format for hazardous chemicals you bring to a site — calibration gas, sample preservatives (hydrochloric acid, methanol), fuel.</p>
<h3>PPE levels (HAZWOPER Appendix B)</h3>
<div class="tbl-wrap"><table>
<tr><th>Level</th><th>Respiratory protection</th><th>Skin protection</th></tr>
<tr><td><strong>A</strong></td><td>Positive-pressure SCBA (self-contained breathing apparatus) or supplied air</td><td>Totally encapsulating chemical-protective suit (vapor protection)</td></tr>
<tr><td><strong>B</strong></td><td>SCBA or supplied air</td><td>Chemical-resistant clothing (splash protection)</td></tr>
<tr><td><strong>C</strong></td><td>Air-purifying respirator (APR) with cartridges</td><td>Chemical-resistant clothing as needed</td></tr>
<tr><td><strong>D</strong></td><td>None</td><td>Work uniform: coveralls, boots, hard hat, glasses, gloves</td></tr>
</table></div>
<p>Most consultant field work is <strong>Level D</strong> (often "modified D" with chemical-resistant gloves and Tyvek). Wearing a respirator (Level C) triggers OSHA's Respiratory Protection Standard (29 CFR 1910.134): a written program, medical evaluation, and annual fit testing.</p>
<h3>Air monitoring instruments</h3>
<div class="tbl-wrap"><table>
<tr><th>Instrument</th><th>What it measures</th><th>Key limitation</th></tr>
<tr><td><strong>PID</strong> — photoionization detector</td><td>Total ionizable organic vapors (most VOCs), in ppm. Common lamp is 10.6 eV. Usually calibrated with isobutylene.</td><td>Does not identify compounds; response varies by chemical; humidity and lamp energy affect readings. Some compounds (e.g., methane) are not detected by a 10.6 eV lamp.</td></tr>
<tr><td><strong>FID</strong> — flame ionization detector</td><td>Organic vapors including methane.</td><td>Requires hydrogen fuel; does not identify compounds.</td></tr>
<tr><td><strong>Multi-gas (4-gas) meter</strong></td><td>Oxygen (%), combustible gases (% LEL), carbon monoxide and hydrogen sulfide (ppm).</td><td>Must be bump-tested/calibrated; specific sensors only.</td></tr>
</table></div>
<p>Normal air is about 20.9% oxygen. OSHA defines an <strong>oxygen-deficient</strong> atmosphere as below 19.5% and an oxygen-enriched atmosphere as above 23.5%. <strong>LEL</strong> (lower explosive limit) is the lowest concentration of a flammable gas in air that will ignite; meters read in percent of the LEL.</p>
`,
      check: [
        { type: "mc", q: "How much initial off-site HAZWOPER training does a general site worker on an uncontrolled hazardous waste site need?", options: ["8 hours", "24 hours", "40 hours", "80 hours"], answer: 2, explain: "General site workers need 40 hours off-site plus 3 days of supervised field experience; 8-hour refreshers are annual." },
        { type: "mc", q: "Which PPE level uses an air-purifying respirator?", options: ["Level A", "Level B", "Level C", "Level D"], answer: 2, explain: "Level C uses an APR; Levels A and B use SCBA or supplied air; Level D has no respiratory protection." },
        { type: "tf", q: "A PID reading of 50 ppm tells you that benzene is present at 50 ppm.", answer: false, explain: "A PID measures total ionizable vapors relative to its calibration gas; it cannot identify specific compounds." }
      ]
    },
    {
      title: "Excavations, trenching, and utility locates",
      html: `
<p>Cave-ins are among the deadliest hazards in construction. A cubic yard of soil can weigh well over a ton. OSHA's excavation rules are in <strong>29 CFR 1926 Subpart P</strong> (1926.650–652).</p>
<h3>Key OSHA excavation requirements</h3>
<ul>
<li><strong>Protective systems</strong> (sloping, benching, shoring, or shielding such as a trench box) are required for excavations <strong>5 feet or deeper</strong>, unless the excavation is made entirely in stable rock. Excavations under 5 feet need protection if a competent person sees signs of potential cave-in.</li>
<li>Protective systems for excavations deeper than <strong>20 feet</strong> must be designed by a registered professional engineer.</li>
<li>A <strong>competent person</strong> — someone capable of identifying hazards and authorized to correct them — must inspect excavations daily, before work, and after rain or other hazard-increasing events.</li>
<li>A safe means of egress (ladder, ramp, stairway) is required in trenches <strong>4 feet or deeper</strong>, within <strong>25 feet</strong> of lateral travel.</li>
<li>Spoil piles and equipment must be kept at least <strong>2 feet</strong> back from the edge.</li>
<li>Where a hazardous atmosphere could reasonably be expected in excavations deeper than 4 feet, the atmosphere must be tested.</li>
</ul>
<h3>OSHA soil types and maximum allowable slopes (Appendices A and B, excavations under 20 ft)</h3>
<div class="tbl-wrap"><table>
<tr><th>Soil type</th><th>Description</th><th>Unconfined compressive strength</th><th>Max slope (H:V)</th></tr>
<tr><td>Stable rock</td><td>Natural solid mineral matter that stays intact</td><td>—</td><td>Vertical (90°)</td></tr>
<tr><td>Type A</td><td>Cohesive soils such as clay, silty clay; not fissured, not previously disturbed, not subject to vibration</td><td>≥ 1.5 tsf</td><td>¾ : 1 (53°)</td></tr>
<tr><td>Type B</td><td>Cohesive soils of medium strength, angular gravel, silt, previously disturbed soils that are not Type C</td><td>&gt; 0.5 and &lt; 1.5 tsf</td><td>1 : 1 (45°)</td></tr>
<tr><td>Type C</td><td>Granular soils (gravel, sand, loamy sand), submerged soil, soil from which water is freely seeping</td><td>≤ 0.5 tsf</td><td>1½ : 1 (34°)</td></tr>
</table></div>
<div class="mnemonic">Slopes get flatter as soil gets weaker: <strong>A = ¾:1, B = 1:1, C = 1½:1</strong>. "Type C is for Crumbly."</div>
<h3>Utility locates in Wisconsin — Diggers Hotline (811)</h3>
<p>Wisconsin law (Wis. Stat. § 182.0175) requires excavators to notify the one-call system, <strong>Diggers Hotline</strong>, at least <strong>three working days</strong> (excluding weekends and legal holidays) before excavating. This includes soil borings, monitoring wells, fence posts, and test pits. Utility owners then mark their facilities.</p>
<div class="tbl-wrap"><table>
<tr><th>Color (APWA uniform color code)</th><th>Meaning</th></tr>
<tr><td>Red</td><td>Electric power lines, cables, conduit</td></tr>
<tr><td>Yellow</td><td>Gas, oil, steam, petroleum, or gaseous materials</td></tr>
<tr><td>Orange</td><td>Communication, alarm or signal lines, cables, conduit</td></tr>
<tr><td>Blue</td><td>Potable water</td></tr>
<tr><td>Green</td><td>Sewers and drain lines</td></tr>
<tr><td>Purple</td><td>Reclaimed water, irrigation, slurry lines</td></tr>
<tr><td>Pink</td><td>Temporary survey markings</td></tr>
<tr><td>White</td><td>Proposed excavation limits</td></tr>
</table></div>
<p>Wisconsin uses a <strong>tolerance zone</strong> of 18 inches on either side of the marked facility; excavation within it requires extra care, typically hand digging or vacuum excavation. Diggers Hotline locates only facilities owned by member utilities — <strong>private utilities</strong> (site lighting, private water and sewer laterals, lines between buildings) are not marked and require a private utility locating contractor.</p>
<div class="mnemonic">Mark the dig site in <strong>white</strong> first. Then remember "<strong>R</strong>ed <strong>E</strong>lectric, <strong>Y</strong>ellow <strong>Y</strong>ikes-gas, <strong>B</strong>lue <strong>B</strong>everage, <strong>G</strong>reen <strong>G</strong>oes down the drain."</div>
<h3>Overhead power lines</h3>
<p>Drill rig masts and excavator booms contacting overhead lines kill workers every year. OSHA's general electrical rules require unqualified workers and equipment to stay at least 10 feet from lines up to 50 kV, with more clearance for higher voltages; the crane standard (29 CFR 1926.1408) uses 20 feet for lines up to 350 kV. Many firms adopt 20 feet as a minimum for drill rigs. Look up before raising a mast.</p>
`,
      check: [
        { type: "mc", q: "At what depth does OSHA generally require a protective system (unless in stable rock)?", options: ["3 feet", "4 feet", "5 feet", "20 feet"], answer: 2, explain: "Protective systems are required at 5 feet or deeper; 4 feet triggers egress requirements; 20 feet requires PE design." },
        { type: "mc", q: "In Wisconsin, how much notice must be given to Diggers Hotline before excavating?", options: ["24 hours", "48 hours", "Three working days", "One week"], answer: 2, explain: "Wisconsin requires at least three working days' notice, excluding weekends and legal holidays." },
        { type: "mc", q: "A utility marked with yellow paint is:", options: ["Electric", "Gas or petroleum", "Communications", "Sewer"], answer: 1, explain: "Yellow = gas, oil, steam, petroleum, gaseous materials." }
      ]
    },
    {
      title: "Drill rigs, heavy equipment, traffic, and confined spaces",
      html: `
<h3>Drill rig safety</h3>
<p>Environmental and geotechnical drilling uses hollow-stem auger, direct-push, sonic, and rotary rigs. Main hazards:</p>
<ul>
<li><strong>Rotating augers and rods</strong> — entanglement. No loose clothing, drawstrings, or long hair near rotating parts. Know where the <strong>emergency kill switch</strong> is and confirm it works before drilling begins.</li>
<li><strong>Overhead and underground utilities</strong> — see the previous lesson.</li>
<li><strong>Pinch points and falling objects</strong> — hard hat, steel-toe boots, gloves.</li>
<li><strong>Noise</strong> — hearing protection.</li>
<li><strong>Stability</strong> — rigs on soft ground or slopes can tip when the mast is raised.</li>
</ul>
<p>As the consultant, you are usually there to log samples, not to operate the rig. Stay out of the driller's work area unless invited and make eye contact before approaching.</p>
<h3>Heavy equipment</h3>
<p>Operators of excavators, loaders, rollers, and haul trucks have large blind spots. Rules of thumb: <strong>make eye contact</strong> with the operator before entering the swing radius or travel path; never stand behind backing equipment; stay out of the swing radius of excavators; never ride on equipment not designed for passengers. CMT technicians testing compaction work among rollers and scrapers all day — this is a leading hazard for them.</p>
<h3>Traffic and work zones</h3>
<p>Work zones on roads follow the <strong>Manual on Uniform Traffic Control Devices (MUTCD)</strong>, Part 6, adopted in Wisconsin with WisDOT supplements. Field staff in or near traffic must wear high-visibility safety apparel meeting <strong>ANSI/ISEA 107</strong> (Class 2 or 3 depending on traffic speed and exposure). Park so your vehicle shields you from traffic; use cones and a flashing beacon.</p>
<h3>Confined spaces</h3>
<p>A <strong>confined space</strong> (OSHA 29 CFR 1910.146 for general industry; 29 CFR 1926 Subpart AA for construction) is a space that:</p>
<ol>
<li>is large enough for a worker to enter and perform work,</li>
<li>has limited or restricted means of entry or exit, and</li>
<li>is not designed for continuous occupancy.</li>
</ol>
<p>Examples: manholes, vaults, tanks, wet wells, crawl spaces, deep test pits. It becomes a <strong>permit-required confined space</strong> if it has (or could have) a hazardous atmosphere, an engulfment hazard, an inwardly converging or sloping configuration that could trap someone, or any other serious hazard. Permit-space entry requires a written permit, atmospheric testing, an <strong>attendant</strong> outside, an <strong>entry supervisor</strong>, and a rescue plan.</p>
<p>Test the atmosphere in this order: <strong>oxygen</strong> first, then <strong>flammable gases</strong>, then <strong>toxic gases</strong>. Many confined-space deaths are would-be rescuers who entered without protection to help a collapsed coworker. <strong>Never enter a manhole or tank to sample unless you are trained and the entry is permitted.</strong> Most sampling can be done from outside with extension tools — elimination again.</p>
<div class="mnemonic">Confined space test order: "<strong>O</strong>h <strong>F</strong>or <strong>T</strong>oxic" — Oxygen, Flammables, Toxics.</div>
`,
      check: [
        { type: "multi", q: "Which conditions together define a confined space? Select all that apply.", options: ["Large enough to enter and perform work", "Limited or restricted means of entry or exit", "Not designed for continuous occupancy", "Contains a hazardous atmosphere"], answer: [0, 1, 2], explain: "The first three define a confined space. A hazardous atmosphere (or other serious hazard) makes it a permit-required confined space." },
        { type: "mc", q: "When testing the atmosphere of a confined space, what is tested first?", options: ["Toxic gases", "Flammable gases", "Oxygen", "Temperature"], answer: 2, explain: "Oxygen is tested first because combustible gas sensors may need adequate oxygen to read correctly." }
      ]
    },
    {
      title: "Weather, noise, silica, biological hazards, and radiation",
      html: `
<h3>Heat and cold</h3>
<div class="tbl-wrap"><table>
<tr><th>Condition</th><th>Signs</th><th>Response</th></tr>
<tr><td>Heat exhaustion</td><td>Heavy sweating, weakness, dizziness, headache, nausea, cool clammy skin</td><td>Move to shade, loosen clothing, cool, sip water; seek care if not improving</td></tr>
<tr><td><strong>Heat stroke</strong></td><td>Confusion, slurred speech, loss of consciousness, seizures, very high body temperature; skin may be hot and dry or sweating</td><td><strong>Medical emergency — call 911</strong>, cool the person aggressively while waiting</td></tr>
<tr><td>Frostbite</td><td>Numbness, white or grayish-yellow, firm or waxy skin (fingers, toes, ears, nose)</td><td>Get to warmth; do not rub; seek medical care</td></tr>
<tr><td>Hypothermia</td><td>Shivering, confusion, slurred speech, drowsiness; shivering may stop as it worsens</td><td>Medical emergency; get to warmth, remove wet clothing, call 911</td></tr>
</table></div>
<p>Wisconsin field seasons include both extremes. Acclimatization matters: new workers are at highest risk of heat illness during their first days on the job.</p>
<h3>Noise</h3>
<p>OSHA's occupational noise standard sets a PEL of <strong>90 dBA</strong> as an 8-hour TWA, and the general-industry hearing conservation program is triggered at an action level of <strong>85 dBA</strong>. Drill rigs, saws, and compactors routinely exceed these. If you must raise your voice to talk to someone an arm's length away, wear hearing protection.</p>
<h3>Respirable crystalline silica</h3>
<p>Cutting, coring, grinding, or drilling concrete, masonry, and stone generates respirable crystalline silica, which causes silicosis and lung cancer. OSHA's construction silica standard (29 CFR 1926.1153) sets a PEL of <strong>50 µg/m³</strong> (8-hour TWA) with an action level of 25 µg/m³, and its Table 1 lists engineering controls (usually water delivery or vacuum dust collection) for common tasks. Concrete coring for CMT and slab-penetration sampling for vapor intrusion are silica tasks.</p>
<h3>Biological and plant hazards in Wisconsin</h3>
<ul>
<li><strong>Ticks</strong> — the blacklegged (deer) tick transmits Lyme disease; Wisconsin has among the highest Lyme incidence in the U.S. Use repellent, tuck pant legs, and check yourself daily.</li>
<li><strong>Poison ivy</strong> and <strong>wild parsnip</strong> (sap plus sunlight causes severe burns and blisters) are common along roadsides, rail corridors, and vacant brownfields.</li>
<li><strong>Sharps and needles</strong> on vacant urban properties; stinging insects; animals.</li>
</ul>
<h3>Lightning</h3>
<p>The National Weather Service guidance is "<strong>When thunder roars, go indoors</strong>," and wait 30 minutes after the last thunder before resuming outdoor work. Drill masts are lightning rods.</p>
<h3>Radiation — nuclear density gauges</h3>
<p>CMT technicians use nuclear moisture-density gauges containing sealed radioactive sources: typically <strong>cesium-137</strong> (gamma source, for density) and <strong>americium-241:beryllium</strong> (neutron source, for moisture). Wisconsin is an NRC <strong>Agreement State</strong>, so the Department of Health Services licenses these sources. Users need gauge safety training and wear dosimetry badges. Exposure is controlled by <strong>ALARA</strong> (as low as reasonably achievable) using three principles:</p>
<ul><li><strong>Time</strong> — minimize time near the source.</li><li><strong>Distance</strong> — exposure drops sharply with distance (inverse square law).</li><li><strong>Shielding</strong> — keep the source rod retracted in its shielded position when not testing.</li></ul>
<p>Gauges must be under constant surveillance or secured with at least two independent physical controls (for example, a locked case chained inside a locked vehicle). Gauges are shipped as DOT Class 7 hazardous material. A lost, stolen, or damaged gauge is a reportable incident — call your radiation safety officer immediately. Module 15 covers gauge testing in detail.</p>
`,
      check: [
        { type: "mc", q: "A coworker on a hot day becomes confused and has slurred speech. This is most consistent with:", options: ["Heat cramps", "Heat exhaustion", "Heat stroke — call 911", "Dehydration only"], answer: 2, explain: "Confusion and altered mental status indicate heat stroke, a medical emergency." },
        { type: "mc", q: "Which three principles reduce radiation exposure under ALARA?", options: ["Time, distance, shielding", "Training, documentation, labeling", "Ventilation, PPE, monitoring", "Calibration, maintenance, storage"], answer: 0, explain: "Time, distance, and shielding are the ALARA principles." }
      ]
    }
  ],
  terms: [
    { term: "Hierarchy of controls", def: "Ranking of hazard controls from most to least effective: elimination, substitution, engineering controls, administrative controls, PPE." },
    { term: "HASP", def: "Health and Safety Plan: a written, site-specific plan covering hazards, controls, PPE, monitoring, decontamination, and emergency response." },
    { term: "Stop-work authority", def: "The right and obligation of any worker to halt work they believe is unsafe." },
    { term: "JHA / JSA", def: "Job Hazard Analysis / Job Safety Analysis: a step-by-step breakdown of a task, its hazards, and controls." },
    { term: "HAZWOPER", def: "OSHA's Hazardous Waste Operations and Emergency Response standard, 29 CFR 1910.120 (and 1926.65): 40-hour initial training for general site workers plus annual 8-hour refresher." },
    { term: "PEL", def: "Permissible Exposure Limit: OSHA's enforceable airborne exposure limit, typically an 8-hour time-weighted average." },
    { term: "IDLH", def: "Immediately Dangerous to Life or Health: a concentration that could cause death, irreversible effects, or prevent escape." },
    { term: "SDS", def: "Safety Data Sheet: standardized 16-section hazard document required under OSHA's Hazard Communication Standard." },
    { term: "Level D PPE", def: "Work uniform without respiratory protection: hard hat, safety glasses, boots, gloves, coveralls as needed." },
    { term: "Level C PPE", def: "Air-purifying respirator plus chemical-resistant clothing; used when contaminants are known and concentrations measured." },
    { term: "PID", def: "Photoionization detector: field instrument measuring total ionizable organic vapors in ppm; does not identify compounds." },
    { term: "LEL", def: "Lower explosive limit: the lowest concentration of a flammable gas in air that will ignite; meters read in percent of LEL." },
    { term: "Oxygen-deficient atmosphere", def: "Under OSHA, air containing less than 19.5% oxygen (normal air is about 20.9%)." },
    { term: "Competent person (excavation)", def: "A person capable of identifying existing and predictable hazards and authorized to take prompt corrective measures; inspects excavations daily." },
    { term: "Protective system", def: "Sloping, benching, shoring, or shielding (e.g., trench box) used to protect workers from cave-ins; required at 5 ft or deeper." },
    { term: "OSHA Type A / B / C soil", def: "Excavation soil classifications by strength: A ≥1.5 tsf (¾:1 slope), B >0.5 to <1.5 tsf (1:1), C ≤0.5 tsf or granular/seeping (1½:1)." },
    { term: "Diggers Hotline", def: "Wisconsin's 811 one-call utility locate system; requires at least three working days' notice before excavating (Wis. Stat. § 182.0175)." },
    { term: "Tolerance zone", def: "In Wisconsin, 18 inches on either side of a marked underground facility, where extra care (hand or vacuum digging) is required." },
    { term: "Private utility locate", def: "A locate by a private contractor for facilities not owned by Diggers Hotline members, such as site lighting or private laterals." },
    { term: "Permit-required confined space", def: "A confined space with a hazardous atmosphere, engulfment hazard, trapping configuration, or other serious hazard; entry requires a permit system." },
    { term: "Attendant", def: "A trained person stationed outside a permit space who monitors entrants and summons rescue; never enters." },
    { term: "ANSI/ISEA 107", def: "The standard for high-visibility safety apparel (Class 1, 2, 3) worn in traffic and equipment areas." },
    { term: "MUTCD", def: "Manual on Uniform Traffic Control Devices; Part 6 covers temporary traffic control in work zones." },
    { term: "Respirable crystalline silica", def: "Fine quartz dust from cutting or drilling concrete, masonry, and stone; OSHA construction PEL 50 µg/m³ (29 CFR 1926.1153)." },
    { term: "ALARA", def: "As Low As Reasonably Achievable: radiation protection philosophy using time, distance, and shielding." },
    { term: "Agreement State", def: "A state that has assumed NRC authority over certain radioactive materials; Wisconsin's DHS licenses nuclear gauges." }
  ],
  resources: [
    { title: "OSHA — Hazardous Waste Operations and Emergency Response (HAZWOPER)", url: "https://www.osha.gov/hazardous-waste", note: "29 CFR 1910.120 overview" },
    { title: "OSHA — Trenching and Excavation", url: "https://www.osha.gov/trenching-excavation", note: "Subpart P requirements and fact sheets" },
    { title: "eCFR — 29 CFR Part 1926 (Construction)", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926", note: "Subpart P excavations, Subpart AA confined spaces, 1926.1153 silica" },
    { title: "OSHA — Confined Spaces", url: "https://www.osha.gov/confined-spaces", note: "General industry and construction rules" },
    { title: "OSHA — Silica, Crystalline", url: "https://www.osha.gov/silica-crystalline", note: "Construction standard and Table 1" },
    { title: "NIOSH — Hierarchy of Controls", url: "https://www.cdc.gov/niosh/hierarchy-of-controls/", note: "Control ranking" },
    { title: "Diggers Hotline (Wisconsin 811)", url: "https://www.diggershotline.com/", note: "Locate requests and Wisconsin excavator requirements" },
    { title: "Wisconsin DHS — Radiation Protection", url: "https://www.dhs.wisconsin.gov/radiation/index.htm", note: "Radioactive materials licensing" },
    { title: "National Weather Service — Lightning Safety", url: "https://www.weather.gov/safety/lightning", note: "When thunder roars, go indoors" },
    { title: "CDC — Ticks", url: "https://www.cdc.gov/ticks/", note: "Tick-borne disease prevention" }
  ],
  teach: [
    { prompt: "You arrive to oversee soil borings at a former gas station. Walk through the safety steps you would take before the first auger turns, from paperwork to looking up.",
      model: "<p>Confirm the Diggers Hotline ticket is active (three working days' notice) and that private utilities were located if needed; check that boring locations are clear of marks and tolerance zones. Review and sign the HASP and hold a tailgate meeting covering hazards (petroleum vapors, rotating augers, traffic, noise). Check air monitoring equipment (PID, multi-gas) is calibrated and know the action levels. Put on Level D PPE plus hearing protection and nitrile gloves. Look up for overhead power lines and maintain safe clearance before the mast is raised. Confirm the rig's kill switch works, set up traffic control and high-visibility apparel, and identify the hospital route and muster point.</p>" },
    { prompt: "Explain why a trench 6 feet deep in sand needs a protective system, what options exist, and why the slope in sand is flatter than in stiff clay.",
      model: "<p>OSHA requires a protective system at 5 feet or deeper unless in stable rock. Options are sloping, benching (not allowed in Type C), shoring, or shielding such as a trench box. Sand is granular with no cohesion, so it is Type C; it can only stand at a flatter angle (1½H:1V, about 34°) because its strength comes only from friction between grains. Stiff, unfissured clay (Type A, ≥1.5 tsf) has cohesion and can stand at ¾H:1V. A competent person must inspect daily and after rain.</p>" }
  ],
  exam: {
    count: 18,
    bank: [
      { type: "mc", q: "Which control is LEAST effective according to the hierarchy of controls?", options: ["Engineering controls", "Administrative controls", "PPE", "Substitution"], answer: 2, explain: "PPE is the last line of defense." },
      { type: "mc", q: "Installing a trench box is an example of which type of control?", options: ["Elimination", "Engineering control", "Administrative control", "PPE"], answer: 1, explain: "A trench box physically isolates workers from the hazard — an engineering control." },
      { type: "mc", q: "How often is HAZWOPER refresher training required?", options: ["Every 6 months, 4 hours", "Annually, 8 hours", "Every 3 years, 24 hours", "Only once"], answer: 1, explain: "8 hours of refresher training annually." },
      { type: "mc", q: "Which exposure route is most common for field staff on contaminated sites?", options: ["Injection", "Inhalation", "Ingestion", "Ocular"], answer: 1, explain: "Inhalation of vapors and dust is the most common route." },
      { type: "mc", q: "Which exposure limit is legally enforceable in the U.S. workplace?", options: ["TLV", "REL", "PEL", "IDLH"], answer: 2, explain: "OSHA's PEL is enforceable; TLV (ACGIH) and REL (NIOSH) are recommendations." },
      { type: "mc", q: "Level B PPE differs from Level A mainly in that Level B:", options: ["Uses no respirator", "Uses an air-purifying respirator", "Uses splash protection instead of a vapor-tight encapsulating suit", "Is only for decontamination"], answer: 2, explain: "Both use SCBA; Level A adds a totally encapsulating vapor-protective suit." },
      { type: "mc", q: "Wearing an air-purifying respirator requires which of the following under OSHA 1910.134?", options: ["Only a dust mask", "A written program, medical evaluation, and fit testing", "A supervisor's verbal approval", "Nothing if voluntary"], answer: 1, explain: "Required respirator use triggers a written program, medical evaluation, and annual fit testing." },
      { type: "mc", q: "Normal air contains about what percentage of oxygen?", options: ["16.0%", "19.5%", "20.9%", "23.5%"], answer: 2, explain: "Normal air is ~20.9% O2. Below 19.5% is oxygen-deficient; above 23.5% is enriched." },
      { type: "mc", q: "A 4-gas meter typically measures:", options: ["O2, LEL, CO, H2S", "Benzene, toluene, ethylbenzene, xylene", "Radon, methane, CO2, VOCs", "pH, conductivity, temperature, turbidity"], answer: 0, explain: "Standard multi-gas meters measure oxygen, combustibles (%LEL), carbon monoxide, and hydrogen sulfide." },
      { type: "mc", q: "OSHA requires PE-designed protective systems for excavations deeper than:", options: ["10 feet", "15 feet", "20 feet", "25 feet"], answer: 2, explain: "Excavations deeper than 20 feet require protective systems designed by a registered PE." },
      { type: "mc", q: "In a trench 4 feet or deeper, a ladder or other egress must be within how many feet of lateral travel?", options: ["10 ft", "25 ft", "50 ft", "100 ft"], answer: 1, explain: "Means of egress within 25 feet of lateral travel." },
      { type: "mc", q: "Spoil piles must be kept at least how far from the edge of an excavation?", options: ["1 ft", "2 ft", "5 ft", "10 ft"], answer: 1, explain: "OSHA requires at least 2 feet." },
      { type: "mc", q: "Maximum allowable slope for OSHA Type B soil (under 20 ft deep) is:", options: ["¾H:1V", "1H:1V", "1½H:1V", "2H:1V"], answer: 1, explain: "Type B = 1:1 (45°)." },
      { type: "mc", q: "Which soil would be classified as OSHA Type C?", options: ["Unfissured stiff clay with qu of 2.0 tsf", "Dry, previously undisturbed silty clay with qu of 1.0 tsf", "Sand from which water is freely seeping", "Stable rock"], answer: 2, explain: "Granular soils and soils with freely seeping water are Type C." },
      { type: "num", q: "An excavation in Type C soil is 8 feet deep. Using the maximum allowable simple slope, how far back horizontally (in feet) must the slope extend from the toe on each side?", answer: 12, tol: 0.1, unit: "ft", explain: "Type C allows 1½H:1V. 8 ft × 1.5 = 12 ft horizontal." },
      { type: "mc", q: "White paint or flags at a site indicate:", options: ["Potable water", "Proposed excavation limits", "Electric", "Temporary survey"], answer: 1, explain: "White marks the proposed excavation, placed by the excavator before calling for locates." },
      { type: "mc", q: "Green utility marks indicate:", options: ["Reclaimed water", "Communications", "Sewer and drain lines", "Gas"], answer: 2, explain: "Green = sewers and drain lines. Purple = reclaimed water." },
      { type: "tf", q: "Diggers Hotline will locate the private electric line running from a building to a parking lot light pole on the same property.", answer: false, explain: "Private facilities are not located by member utilities; a private locator is needed." },
      { type: "mc", q: "Wisconsin's tolerance zone around a marked underground facility is:", options: ["6 inches each side", "12 inches each side", "18 inches each side", "36 inches each side"], answer: 2, explain: "Wisconsin uses 18 inches on either side of the marking." },
      { type: "mc", q: "A space that is large enough to enter, has limited entry/exit, is not designed for continuous occupancy, and contains an engulfment hazard is:", options: ["A non-permit confined space", "A permit-required confined space", "Not a confined space", "An exclusion zone"], answer: 1, explain: "Engulfment hazard makes it permit-required." },
      { type: "mc", q: "During a permit-required confined space entry, the attendant's role is to:", options: ["Enter first to test the air", "Remain outside, monitor entrants, and summon rescue", "Operate equipment inside", "Write the HASP"], answer: 1, explain: "Attendants stay outside and never enter, even to rescue." },
      { type: "mc", q: "OSHA's noise PEL as an 8-hour TWA is:", options: ["80 dBA", "85 dBA", "90 dBA", "100 dBA"], answer: 2, explain: "PEL = 90 dBA; the hearing conservation action level is 85 dBA." },
      { type: "mc", q: "OSHA's construction PEL for respirable crystalline silica is:", options: ["25 µg/m³", "50 µg/m³", "100 µg/m³", "5 mg/m³"], answer: 1, explain: "50 µg/m³ 8-hr TWA; action level 25 µg/m³." },
      { type: "mc", q: "Which Wisconsin plant causes severe skin burns when its sap contacts skin exposed to sunlight?", options: ["Wild parsnip", "Garlic mustard", "Buckthorn", "Reed canary grass"], answer: 0, explain: "Wild parsnip sap is phototoxic." },
      { type: "mc", q: "After lightning, the NWS recommends waiting how long after the last thunder before resuming outdoor work?", options: ["5 minutes", "15 minutes", "30 minutes", "60 minutes"], answer: 2, explain: "Wait 30 minutes after the last thunder." },
      { type: "mc", q: "In a nuclear density gauge, the cesium-137 source is used to measure:", options: ["Moisture", "Density", "Temperature", "Asphalt binder content"], answer: 1, explain: "Cs-137 emits gamma radiation for density; Am-241:Be emits neutrons for moisture." },
      { type: "mc", q: "When a nuclear gauge is not under constant surveillance, it must be secured by at least:", options: ["One lock", "Two independent physical controls", "A sign", "A tarp"], answer: 1, explain: "NRC/Agreement State rules require two independent physical controls." },
      { type: "mc", q: "Which agency licenses radioactive materials such as nuclear gauges in Wisconsin?", options: ["NRC directly", "Wisconsin DHS", "Wisconsin DNR", "DATCP"], answer: 1, explain: "Wisconsin is an Agreement State; DHS licenses radioactive materials." },
      { type: "mc", q: "When working near traffic, field staff should wear apparel meeting which standard?", options: ["ANSI Z87.1", "ANSI/ISEA 107", "ASTM F2413", "NFPA 70E"], answer: 1, explain: "ANSI/ISEA 107 covers high-visibility apparel. Z87.1 is eyewear; F2413 is footwear." },
      { type: "mc", q: "Which drill rig safety feature must be located and tested before drilling begins?", options: ["Cup holder", "Emergency kill switch", "Backup camera", "Mast light"], answer: 1, explain: "The kill switch stops rotation in an entanglement emergency." },
      { type: "tf", q: "OSHA's crane standard uses a 20-foot minimum clearance from power lines up to 350 kV, and many firms apply 20 feet to drill rigs as well.", answer: true, explain: "29 CFR 1926.1408 uses 20 ft for lines up to 350 kV; firms commonly adopt it for rigs." }
    ]
  }
});
