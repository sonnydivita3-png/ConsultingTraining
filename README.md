# Wisconsin Consulting Academy

A mastery-gated onboarding course that teaches new employees the language of
**environmental consulting, geotechnical engineering, construction materials
testing, and civil engineering** as practiced in Wisconsin.

The goal is conceptual fluency and vocabulary, not field competence. Field
competence still comes from supervised work and the required certifications
(OSHA HAZWOPER, nuclear gauge safety, ACI, WisDOT HTCP, and so on).

## Running it

It's a static site with no build step and no server-side code.

- **Locally:** open `index.html` in a browser.
- **GitHub Pages:** enable Pages for this repository (Settings → Pages → deploy
  from branch, root folder). The `.nojekyll` file is already in place.
- **Any static host or intranet share:** copy the folder as-is.

Progress is saved in the browser's `localStorage`. Learners can export and
import a JSON backup from the **Transcript** page, which is also how a
supervisor can review someone's progress.

## Course structure

| Track | Modules |
|---|---|
| 1. Foundations of Consulting | The profession in Wisconsin · Health and safety · Wisconsin geology and hydrogeology · Units, maps, plans, and measurements |
| 2. Environmental Consulting | Federal environmental law · Wisconsin cleanup regulations (ch. 292, NR 700 series, NR 140) · Contaminant chemistry · Phase I ESAs · Phase II / site investigation · Remediation and closure · Brownfield redevelopment |
| 3. Geotechnical Engineering | Soil mechanics and classification · Subsurface exploration and lab testing · Foundations, earthwork, walls, and slopes |
| 4. Construction Materials Testing | Soils and aggregates testing · Concrete, reinforcement, and masonry · Asphalt and pavements · Special inspections and documentation |
| 5. Civil Engineering | Site development, grading, and stormwater · Utilities, roadways, and project delivery |

There are 20 modules, 101 lessons, 675 glossary terms, and 547 exam questions,
for roughly 89 hours of study.

## How it makes knowledge stick

Each module runs through the same steps, and a step unlocks only after the one
before it is finished:

1. **Lessons.** Each one ends with check questions that must be answered
   correctly before the learner can move on (retrieval practice).
2. **Flashcards.** Every term must be recalled. Cards the learner misses come
   back within the same session.
3. **Teach-back.** The learner writes an explanation of at least 150
   characters before seeing the model answer (elaboration).
4. **Module exam.** Questions are drawn at random from the bank, and the pass
   mark is 80%. A retake draws a new set, and every missed question goes into
   the review deck.

Each track ends with an interleaved **checkpoint exam** (80% to pass), and the
course ends with an 80-question **final exam** (85% to pass) that unlocks a
printable certificate.

The **Review** page runs a spaced-repetition (Leitner) schedule over every
term and question the learner has seen. Intervals are 1, 3, 7, 16, 35, 75, and
150 days.

The design draws on Dunlosky et al. (2013), Roediger & Karpicke (2006), and
Cepeda et al. (2006). Citations are on the app's home page.

## Sources and accuracy

Lessons cite primary sources: Wisconsin Statutes and Administrative Code (NR,
SPS, ATCP, DHS), the CFR, EPA, OSHA, Wisconsin DNR, WisDOT, WGNHS, FHWA, ASTM,
AASHTO, ACI, and ICC. Each module links its sources, and the **Library** page
collects all of them.

Regulations and standards change. Numeric values in this course should be
checked against the current edition before anyone relies on them in practice.

## Editing content

Each module is a single file in `content/` that calls `COURSE.addModule({...})`.
The schema is documented at the top of `content/course.js`. To add a module,
create the file, add a `<script>` tag for it in `index.html`, and give it a
`track` id from `course.js`. Checkpoints and the final exam pick up the new
questions automatically.
