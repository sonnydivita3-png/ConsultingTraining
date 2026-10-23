/*
 * Course registry. Each module file calls COURSE.addModule({...}).
 *
 * Module shape:
 *   id, track, title, hours, summary,
 *   objectives: [string],
 *   lessons: [{ title, html, check: [question] }],
 *   terms:   [{ term, def }],
 *   resources: [{ title, url, note }],
 *   teach:   [{ prompt, model }],          // written teach-back prompts
 *   exam:    { count, bank: [question] }
 *
 * Question shapes:
 *   { type: "mc",    q, options: [..], answer: index,    explain }
 *   { type: "multi", q, options: [..], answer: [idx..],  explain }
 *   { type: "tf",    q, answer: true|false,              explain }
 *   { type: "num",   q, answer: number, tol: number, unit, explain }
 */
window.COURSE = {
  title: "Giles Engineering Associates: On-boarding Training",
  passMark: 0.8,
  checkpointPassMark: 0.8,
  finalPassMark: 0.85,
  tracks: [
    { id: "t1", title: "Track 1 · Foundations of Consulting",
      blurb: "How the profession works, how to stay safe, the ground beneath Wisconsin, and how to read plans and numbers." },
    { id: "t2", title: "Track 2 · Environmental Consulting",
      blurb: "Federal and Wisconsin environmental law, contaminant behavior, Phase I/II ESAs, remediation, closure, and brownfield redevelopment." },
    { id: "t3", title: "Track 3 · Geotechnical Engineering",
      blurb: "Soil mechanics, classification, subsurface exploration, laboratory testing, foundations, and earthwork." },
    { id: "t4", title: "Track 4 · Construction Materials Testing",
      blurb: "Field and lab testing of soils, aggregates, concrete, masonry, and asphalt; special inspections and field documentation." },
    { id: "t5", title: "Track 5 · Civil Engineering",
      blurb: "Site development, grading, stormwater, utilities, roadways, and how projects are delivered." }
  ],
  modules: [],
  addModule: function (m) { this.modules.push(m); }
};
