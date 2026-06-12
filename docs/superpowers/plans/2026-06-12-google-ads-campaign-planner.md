# Google Ads Campaign Planner Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a Google Ads Editor import CSV for PlumberWebDesign.co.uk from GSC query data enriched with Ahrefs KWE, structured by trade vertical.

**Architecture:** Claude reads the GSC `Queries.csv`, classifies each query into a trade vertical, enriches with Ahrefs KWE MCP, and writes `output/enriched-keywords.json`. A pure, deterministic Node script (`build-campaign.js`) consumes that JSON plus `campaign.config.js` (budget, bids, RSA copy, URLs) and emits the Editor import CSV. Single UK-national Search campaign, one ad group per vertical.

**Tech Stack:** Node 22 (CommonJS), built-in `node:test` + `node:assert`, no external deps. Ahrefs KWE via MCP (Claude-driven step, not script).

---

## File Structure

```
scripts/ads/
  classify.js              # classify(keyword) → vertical key | null. Pure.
  campaign.config.js        # CAMPAIGN settings + VERTICALS (finalUrl, paths, 15 headlines, 4 descriptions)
  build-campaign.js         # pure builder: enriched JSON + config → rows → CSV. Has main() CLI.
  classify.test.js          # node:test for classify
  build-campaign.test.js    # node:test for builder + validation
  fixtures/
    enriched-sample.json    # small enriched-keywords fixture for tests
  input/.gitkeep            # GSC export dropped here (gitignored)
  output/.gitkeep           # generated artefacts (gitignored)
  README.md                 # run steps + enrichment workflow
.gitignore                  # add scripts/ads/input/*, scripts/ads/output/* (keep .gitkeep)
```

**Editor CSV columns (canonical, `COLUMNS` constant in build-campaign.js):**

```
Campaign, Campaign Type, Campaign Daily Budget, Bid Strategy Type,
Ad Group, Max CPC, Keyword, Match Type, Ad Type,
Headline 1 … Headline 15, Description 1 … Description 4,
Path 1, Path 2, Final URL
```

Editor infers entity type per row from populated columns: campaign row (Campaign + budget + bid strategy), ad-group row (Campaign + Ad Group + Max CPC), keyword row (Campaign + Ad Group + Keyword + Match Type), ad row (Campaign + Ad Group + Ad Type=`Responsive search ad` + Headlines + Descriptions + Paths + Final URL). User reviews in Editor before posting, so column tolerance is acceptable.

**Char limits:** Headline ≤30, Description ≤90, Path ≤15. **Match types emitted:** `Exact`, `Phrase`.

---

### Task 1: Scaffold directory + gitignore

**Files:**
- Create: `scripts/ads/input/.gitkeep`, `scripts/ads/output/.gitkeep`, `scripts/ads/fixtures/.gitkeep`
- Modify: `.gitignore`

- [ ] **Step 1: Create dirs and placeholders**

```bash
mkdir -p scripts/ads/input scripts/ads/output scripts/ads/fixtures
touch scripts/ads/input/.gitkeep scripts/ads/output/.gitkeep scripts/ads/fixtures/.gitkeep
```

- [ ] **Step 2: Append to `.gitignore`**

Add these lines to `.gitignore`:

```
# Google Ads planner — local inputs/outputs
scripts/ads/input/*
!scripts/ads/input/.gitkeep
scripts/ads/output/*
!scripts/ads/output/.gitkeep
```

- [ ] **Step 3: Commit**

```bash
git add scripts/ads/.gitkeep scripts/ads/input/.gitkeep scripts/ads/output/.gitkeep scripts/ads/fixtures/.gitkeep .gitignore
git commit -m "chore(ads): scaffold ads planner directories"
```

---

### Task 2: Keyword classifier

**Files:**
- Create: `scripts/ads/classify.js`
- Test: `scripts/ads/classify.test.js`

- [ ] **Step 1: Write the failing test**

```js
// scripts/ads/classify.test.js
const { test } = require('node:test');
const assert = require('node:assert');
const { classify } = require('./classify');

test('classifies plumber queries', () => {
  assert.strictEqual(classify('emergency plumber website'), 'plumber');
  assert.strictEqual(classify('plumbing company web design'), 'plumber');
});

test('classifies gas queries', () => {
  assert.strictEqual(classify('gas safe engineer website'), 'gas');
  assert.strictEqual(classify('gas engineer web design'), 'gas');
});

test('classifies heating queries', () => {
  assert.strictEqual(classify('boiler repair website'), 'heating');
  assert.strictEqual(classify('heating engineer site'), 'heating');
});

test('classifies bathroom queries', () => {
  assert.strictEqual(classify('bathroom fitter web design'), 'bathroom');
});

test('classifies seo queries', () => {
  assert.strictEqual(classify('seo for plumbers'), 'seo');
  assert.strictEqual(classify('how to rank plumber on google'), 'seo');
});

test('precedence: seo beats trade words', () => {
  assert.strictEqual(classify('plumber seo services'), 'seo');
});

test('returns null when unmatched', () => {
  assert.strictEqual(classify('random unrelated term'), null);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/ads/classify.test.js`
Expected: FAIL — `Cannot find module './classify'`

- [ ] **Step 3: Write minimal implementation**

```js
// scripts/ads/classify.js
// Order = precedence (most specific first). First match wins.
const RULES = [
  { vertical: 'seo', re: /\b(seo|ranking|rank|google ads|ppc|search engine)\b/i },
  { vertical: 'bathroom', re: /\b(bathroom|fitter|wet ?room|tiling)\b/i },
  { vertical: 'gas', re: /\b(gas safe|gas engineer|gas)\b/i },
  { vertical: 'heating', re: /\b(heating|boiler|central heating|radiator)\b/i },
  { vertical: 'plumber', re: /\b(plumber|plumbing)\b/i },
];

function classify(keyword) {
  const k = String(keyword || '').toLowerCase();
  for (const { vertical, re } of RULES) {
    if (re.test(k)) return vertical;
  }
  return null;
}

module.exports = { classify, RULES };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/ads/classify.test.js`
Expected: PASS — 7 tests

- [ ] **Step 5: Commit**

```bash
git add scripts/ads/classify.js scripts/ads/classify.test.js
git commit -m "feat(ads): keyword-to-vertical classifier"
```

---

### Task 3: Campaign config with RSA copy

**Files:**
- Create: `scripts/ads/campaign.config.js`

No test (pure data; validated by build-campaign in Task 5). Copy is UK English, no exclamation marks (CLAUDE.md). Headlines ≤30 chars, descriptions ≤90, paths ≤15.

- [ ] **Step 1: Write the config**

```js
// scripts/ads/campaign.config.js
// Edit copy/budget here. Build fails loud if any limit is exceeded.
const SITE = 'https://www.plumberwebdesign.co.uk';

const CAMPAIGN = {
  name: 'PlumberWebDesign — Search — UK',
  type: 'Search',
  dailyBudget: '15.00',            // GBP/day — edit before upload
  bidStrategy: 'Maximize conversions',
  maxCpc: '2.50',                  // ad-group default — edit before upload
};

// Each vertical: finalUrl, two display paths (≤15), 15 headlines (≤30), 4 descriptions (≤90).
const VERTICALS = {
  plumber: {
    finalUrl: `${SITE}/websites-for-plumbers/`,
    paths: ['Plumber', 'Websites'],
    headlines: [
      'Plumber Web Design',
      'Websites For Plumbers',
      'Get More Plumbing Jobs',
      'Built To Convert Calls',
      'UK Plumber Specialists',
      'Mobile-First Plumber Site',
      'Rank In Your Local Area',
      'Free Website Audit',
      'Fast Two-Second Load',
      'Gas Safe Ready Design',
      'Click-To-Call Built In',
      'No Templates, Custom Built',
      'From £499 To Launch',
      'Book More Local Work',
      'See Our Plumber Demos',
    ],
    descriptions: [
      'Websites that turn searches into booked plumbing jobs. Built for UK plumbers.',
      'Mobile-first, fast-loading plumber websites with click-to-call and local SEO.',
      'Stop losing jobs to rivals. Get a website built to win local plumbing work.',
      'Custom plumber web design from a UK studio. Free audit, clear fixed pricing.',
    ],
  },
  gas: {
    finalUrl: `${SITE}/gas-engineer-website-design/`,
    paths: ['Gas-Engineer', 'Websites'],
    headlines: [
      'Gas Engineer Websites',
      'Web Design Gas Safe',
      'Win More Boiler Work',
      'Gas Engineer Web Design',
      'Show Your Gas Safe ID',
      'Built To Convert Calls',
      'UK Gas Engineer Sites',
      'Mobile-First Design',
      'Rank In Your Local Area',
      'Free Website Audit',
      'Fast Two-Second Load',
      'Click-To-Call Built In',
      'No Templates, Custom Built',
      'From £499 To Launch',
      'See Our Demos',
    ],
    descriptions: [
      'Websites built for gas engineers. Show Gas Safe credentials, win more work.',
      'Mobile-first gas engineer sites with click-to-call and strong local SEO.',
      'Turn boiler searches into booked jobs with a site built to convert.',
      'Custom gas engineer web design. Free audit and clear fixed pricing.',
    ],
  },
  heating: {
    finalUrl: `${SITE}/heating-engineer-website-design/`,
    paths: ['Heating', 'Websites'],
    headlines: [
      'Heating Engineer Sites',
      'Web Design For Heating',
      'Win More Boiler Jobs',
      'Heating Engineer Design',
      'Built To Convert Calls',
      'UK Heating Specialists',
      'Mobile-First Design',
      'Rank In Your Local Area',
      'Free Website Audit',
      'Fast Two-Second Load',
      'Click-To-Call Built In',
      'Show Your Credentials',
      'No Templates, Custom Built',
      'From £499 To Launch',
      'See Our Demos',
    ],
    descriptions: [
      'Websites for heating engineers built to turn searches into booked jobs.',
      'Mobile-first heating engineer sites with click-to-call and local SEO.',
      'Win more boiler and central heating work with a site built to convert.',
      'Custom heating engineer web design. Free audit and clear fixed pricing.',
    ],
  },
  bathroom: {
    finalUrl: `${SITE}/bathroom-fitter-website-design/`,
    paths: ['Bathroom', 'Websites'],
    headlines: [
      'Bathroom Fitter Sites',
      'Web Design Bathrooms',
      'Win More Bathroom Jobs',
      'Bathroom Fitter Design',
      'Show Off Your Best Work',
      'Built To Convert Leads',
      'UK Bathroom Specialists',
      'Mobile-First Design',
      'Rank In Your Local Area',
      'Free Website Audit',
      'Fast Two-Second Load',
      'Gallery That Sells',
      'No Templates, Custom Built',
      'From £499 To Launch',
      'See Our Demos',
    ],
    descriptions: [
      'Websites for bathroom fitters with project galleries that win new work.',
      'Mobile-first bathroom fitter sites with strong local SEO and clear quotes.',
      'Turn bathroom searches into booked installs with a site built to convert.',
      'Custom bathroom fitter web design. Free audit and clear fixed pricing.',
    ],
  },
  seo: {
    finalUrl: `${SITE}/seo-for-plumbers/`,
    paths: ['SEO', 'For-Trades'],
    headlines: [
      'SEO For Plumbers',
      'Rank Higher On Google',
      'Get Found Locally',
      'Plumber SEO Experts',
      'More Calls From Search',
      'Local Map Pack SEO',
      'UK Trade SEO Studio',
      'Free SEO Audit',
      'Beat Local Rivals',
      'Built For Conversions',
      'Transparent Reporting',
      'No Long Contracts',
      'From £499 To Start',
      'Win Organic Leads',
      'See Our Results',
    ],
    descriptions: [
      'SEO for plumbers and trades. Rank in the local map pack and win more calls.',
      'Get found by local customers searching for your trade. Free SEO audit first.',
      'Climb Google for your services with SEO built around booked jobs, not vanity.',
      'Transparent trade SEO with no long contracts. Clear fixed monthly pricing.',
    ],
  },
};

module.exports = { CAMPAIGN, VERTICALS };
```

- [ ] **Step 2: Commit**

```bash
git add scripts/ads/campaign.config.js
git commit -m "feat(ads): campaign config with per-vertical RSA copy"
```

---

### Task 4: Test fixture for enriched keywords

**Files:**
- Create: `scripts/ads/fixtures/enriched-sample.json`

Shape mirrors what Claude writes to `output/enriched-keywords.json`. `volume`/`difficulty`/`cpcGbp` may be `null` (KWE miss). `vertical` is `null` for `_review`.

- [ ] **Step 1: Write the fixture**

```json
{
  "generatedAt": "2026-06-12",
  "country": "gb",
  "keywords": [
    { "keyword": "plumber website design", "vertical": "plumber", "gscClicks": 5, "gscImpressions": 120, "gscPosition": 8.4, "volume": 90, "difficulty": 12, "cpcGbp": 3.10 },
    { "keyword": "websites for plumbers", "vertical": "plumber", "gscClicks": 2, "gscImpressions": 60, "gscPosition": 11.0, "volume": 70, "difficulty": 9, "cpcGbp": 2.80 },
    { "keyword": "gas engineer website", "vertical": "gas", "gscClicks": 1, "gscImpressions": 40, "gscPosition": 14.2, "volume": 50, "difficulty": 8, "cpcGbp": null },
    { "keyword": "boiler service website design", "vertical": "heating", "gscClicks": 0, "gscImpressions": 15, "gscPosition": 22.0, "volume": null, "difficulty": null, "cpcGbp": null },
    { "keyword": "bathroom fitter web design", "vertical": "bathroom", "gscClicks": 0, "gscImpressions": 9, "gscPosition": 30.0, "volume": 20, "difficulty": 5, "cpcGbp": 1.90 },
    { "keyword": "seo for plumbers", "vertical": "seo", "gscClicks": 3, "gscImpressions": 80, "gscPosition": 6.1, "volume": 110, "difficulty": 15, "cpcGbp": 4.20 },
    { "keyword": "unrelated random query", "vertical": null, "gscClicks": 0, "gscImpressions": 3, "gscPosition": 55.0, "volume": null, "difficulty": null, "cpcGbp": null }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git add scripts/ads/fixtures/enriched-sample.json
git commit -m "test(ads): enriched-keywords fixture"
```

---

### Task 5: CSV builder — escaping, columns, row assembly

**Files:**
- Create: `scripts/ads/build-campaign.js`
- Test: `scripts/ads/build-campaign.test.js`

- [ ] **Step 1: Write the failing test**

```js
// scripts/ads/build-campaign.test.js
const { test } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const {
  COLUMNS, csvField, buildRows, rowsToCsv, validateConfig, LIMITS,
} = require('./build-campaign');
const { CAMPAIGN, VERTICALS } = require('./campaign.config');

const fixture = require('./fixtures/enriched-sample.json');

test('csvField quotes and escapes', () => {
  assert.strictEqual(csvField('plain'), 'plain');
  assert.strictEqual(csvField('a,b'), '"a,b"');
  assert.strictEqual(csvField('he said "hi"'), '"he said ""hi"""');
  assert.strictEqual(csvField(null), '');
});

test('config passes validation', () => {
  assert.doesNotThrow(() => validateConfig(CAMPAIGN, VERTICALS));
});

test('validation fails loud on headline overflow', () => {
  const bad = JSON.parse(JSON.stringify(VERTICALS));
  bad.plumber.headlines[0] = 'X'.repeat(31);
  assert.throws(() => validateConfig(CAMPAIGN, bad), /plumber.*Headline 1.*30/);
});

test('validation fails when fewer than 15 headlines', () => {
  const bad = JSON.parse(JSON.stringify(VERTICALS));
  bad.gas.headlines = bad.gas.headlines.slice(0, 14);
  assert.throws(() => validateConfig(CAMPAIGN, bad), /gas.*15 headlines/);
});

test('buildRows emits one campaign row first', () => {
  const { rows } = buildRows(fixture, CAMPAIGN, VERTICALS);
  const campaignRows = rows.filter(r => r.Campaign && r['Campaign Daily Budget']);
  assert.strictEqual(campaignRows.length, 1);
  assert.strictEqual(campaignRows[0].Campaign, CAMPAIGN.name);
});

test('buildRows emits exact + phrase per classified keyword', () => {
  const { rows } = buildRows(fixture, CAMPAIGN, VERTICALS);
  const kw = rows.filter(r => r.Keyword === 'seo for plumbers');
  const matchTypes = kw.map(r => r['Match Type']).sort();
  assert.deepStrictEqual(matchTypes, ['Exact', 'Phrase']);
});

test('buildRows ad row has 15 headlines and correct final url', () => {
  const { rows } = buildRows(fixture, CAMPAIGN, VERTICALS);
  const ad = rows.find(r => r['Ad Type'] === 'Responsive search ad' && r['Ad Group'] === 'seo');
  assert.strictEqual(ad['Headline 15'].length > 0, true);
  assert.strictEqual(ad['Final URL'], VERTICALS.seo.finalUrl);
});

test('buildRows routes unclassified to review, not Editor rows', () => {
  const { rows, review } = buildRows(fixture, CAMPAIGN, VERTICALS);
  assert.ok(review.includes('unrelated random query'));
  assert.ok(!rows.some(r => r.Keyword === 'unrelated random query'));
});

test('rowsToCsv header matches COLUMNS', () => {
  const { rows } = buildRows(fixture, CAMPAIGN, VERTICALS);
  const csv = rowsToCsv(rows);
  assert.strictEqual(csv.split('\n')[0], COLUMNS.join(','));
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/ads/build-campaign.test.js`
Expected: FAIL — `Cannot find module './build-campaign'`

- [ ] **Step 3: Write minimal implementation**

```js
// scripts/ads/build-campaign.js
const fs = require('node:fs');
const path = require('node:path');

const LIMITS = { headline: 30, description: 90, path: 15 };
const N_HEADLINES = 15;
const N_DESCRIPTIONS = 4;

const COLUMNS = [
  'Campaign', 'Campaign Type', 'Campaign Daily Budget', 'Bid Strategy Type',
  'Ad Group', 'Max CPC', 'Keyword', 'Match Type', 'Ad Type',
  ...Array.from({ length: N_HEADLINES }, (_, i) => `Headline ${i + 1}`),
  ...Array.from({ length: N_DESCRIPTIONS }, (_, i) => `Description ${i + 1}`),
  'Path 1', 'Path 2', 'Final URL',
];

function csvField(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function emptyRow() {
  const r = {};
  for (const c of COLUMNS) r[c] = '';
  return r;
}

function validateConfig(campaign, verticals) {
  for (const [key, v] of Object.entries(verticals)) {
    if (!Array.isArray(v.headlines) || v.headlines.length !== N_HEADLINES) {
      throw new Error(`Vertical "${key}" must have exactly ${N_HEADLINES} headlines`);
    }
    if (!Array.isArray(v.descriptions) || v.descriptions.length !== N_DESCRIPTIONS) {
      throw new Error(`Vertical "${key}" must have exactly ${N_DESCRIPTIONS} descriptions`);
    }
    v.headlines.forEach((h, i) => {
      if (h.length > LIMITS.headline) {
        throw new Error(`Vertical "${key}" Headline ${i + 1} is ${h.length} chars, max ${LIMITS.headline}: "${h}"`);
      }
    });
    v.descriptions.forEach((d, i) => {
      if (d.length > LIMITS.description) {
        throw new Error(`Vertical "${key}" Description ${i + 1} is ${d.length} chars, max ${LIMITS.description}: "${d}"`);
      }
    });
    (v.paths || []).forEach((p, i) => {
      if (p.length > LIMITS.path) {
        throw new Error(`Vertical "${key}" Path ${i + 1} is ${p.length} chars, max ${LIMITS.path}: "${p}"`);
      }
    });
    if (!v.finalUrl) throw new Error(`Vertical "${key}" missing finalUrl`);
  }
}

function buildRows(enriched, campaign, verticals) {
  validateConfig(campaign, verticals);
  const rows = [];
  const review = [];

  // 1. Campaign row (once)
  const camp = emptyRow();
  camp.Campaign = campaign.name;
  camp['Campaign Type'] = campaign.type;
  camp['Campaign Daily Budget'] = campaign.dailyBudget;
  camp['Bid Strategy Type'] = campaign.bidStrategy;
  rows.push(camp);

  // Group keywords by vertical
  const byVertical = {};
  for (const k of enriched.keywords) {
    if (!k.vertical || !verticals[k.vertical]) { review.push(k.keyword); continue; }
    (byVertical[k.vertical] ||= []).push(k);
  }

  // 2. Per vertical: ad group row, keyword rows (exact+phrase), ad row
  for (const [key, v] of Object.entries(verticals)) {
    const kws = byVertical[key];
    if (!kws || kws.length === 0) continue;

    const ag = emptyRow();
    ag.Campaign = campaign.name;
    ag['Ad Group'] = key;
    ag['Max CPC'] = campaign.maxCpc;
    rows.push(ag);

    for (const k of kws) {
      for (const mt of ['Exact', 'Phrase']) {
        const kr = emptyRow();
        kr.Campaign = campaign.name;
        kr['Ad Group'] = key;
        kr.Keyword = k.keyword;
        kr['Match Type'] = mt;
        rows.push(kr);
      }
    }

    const ad = emptyRow();
    ad.Campaign = campaign.name;
    ad['Ad Group'] = key;
    ad['Ad Type'] = 'Responsive search ad';
    v.headlines.forEach((h, i) => { ad[`Headline ${i + 1}`] = h; });
    v.descriptions.forEach((d, i) => { ad[`Description ${i + 1}`] = d; });
    ad['Path 1'] = v.paths?.[0] || '';
    ad['Path 2'] = v.paths?.[1] || '';
    ad['Final URL'] = v.finalUrl;
    rows.push(ad);
  }

  return { rows, review };
}

function rowsToCsv(rows) {
  const lines = [COLUMNS.join(',')];
  for (const r of rows) lines.push(COLUMNS.map(c => csvField(r[c])).join(','));
  return lines.join('\n');
}

function main() {
  const { CAMPAIGN, VERTICALS } = require('./campaign.config');
  const enrichedPath = path.join(__dirname, 'output', 'enriched-keywords.json');
  if (!fs.existsSync(enrichedPath)) {
    console.error(`Missing ${enrichedPath}. Run the enrichment step first (see README).`);
    process.exit(1);
  }
  const enriched = JSON.parse(fs.readFileSync(enrichedPath, 'utf8'));
  const { rows, review } = buildRows(enriched, CAMPAIGN, VERTICALS);

  const outCsv = path.join(__dirname, 'output', 'google-ads-editor-import.csv');
  fs.writeFileSync(outCsv, rowsToCsv(rows) + '\n', 'utf8');

  const reviewCsv = path.join(__dirname, 'output', 'review-keywords.csv');
  fs.writeFileSync(reviewCsv, ['Keyword', ...review].join('\n') + '\n', 'utf8');

  const adGroups = new Set(rows.filter(r => r['Ad Group']).map(r => r['Ad Group']));
  console.log(`Wrote ${outCsv}`);
  console.log(`Ad groups: ${[...adGroups].join(', ')}`);
  console.log(`Editor rows: ${rows.length} | Unclassified (review): ${review.length} → ${reviewCsv}`);
}

if (require.main === module) main();

module.exports = { COLUMNS, csvField, buildRows, rowsToCsv, validateConfig, LIMITS };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/ads/build-campaign.test.js`
Expected: PASS — all tests green. If a config headline exceeds 30 chars, the `config passes validation` test fails naming the field; fix the copy in `campaign.config.js`.

- [ ] **Step 5: Commit**

```bash
git add scripts/ads/build-campaign.js scripts/ads/build-campaign.test.js
git commit -m "feat(ads): deterministic Editor CSV builder with fail-loud validation"
```

---

### Task 6: End-to-end run on fixture + README

**Files:**
- Create: `scripts/ads/README.md`

- [ ] **Step 1: Smoke-test the CLI against the fixture**

```bash
cp scripts/ads/fixtures/enriched-sample.json scripts/ads/output/enriched-keywords.json
node scripts/ads/build-campaign.js
```

Expected stdout: `Wrote .../google-ads-editor-import.csv`, `Ad groups: plumber, gas, heating, bathroom, seo`, `Unclassified (review): 1`.
Verify `scripts/ads/output/google-ads-editor-import.csv` opens and the first line equals the `COLUMNS` header.

- [ ] **Step 2: Clean the generated artefacts (gitignored, don't commit)**

```bash
rm scripts/ads/output/enriched-keywords.json scripts/ads/output/google-ads-editor-import.csv scripts/ads/output/review-keywords.csv
```

- [ ] **Step 3: Write README**

````markdown
# Google Ads Campaign Planner

Builds a Google Ads Editor import CSV for PlumberWebDesign.co.uk from GSC query
data enriched with Ahrefs Keywords Explorer (KWE). UK-national Search campaign,
one ad group per trade vertical.

## Workflow

1. **Drop GSC export:**
   ```bash
   cp "GSC/<export>/Queries.csv" scripts/ads/input/gsc-keywords.csv
   ```

2. **Enrich (Claude-driven, uses Ahrefs KWE MCP):**
   Ask Claude: "Enrich the GSC keywords and write enriched-keywords.json."
   Claude reads `input/gsc-keywords.csv`, classifies each query via `classify.js`,
   calls the Ahrefs KWE MCP (`keywords-explorer-overview`, country `gb`) for
   volume / difficulty / CPC (USD cents ÷ 100 = GBP-ish; recorded as `cpcGbp`),
   and writes `output/enriched-keywords.json`. Schema: see
   `fixtures/enriched-sample.json`. KWE misses → `volume: null`. Unmatched
   queries → `vertical: null` (land in the review file, never the campaign).

3. **Review / edit** `output/enriched-keywords.json` and `campaign.config.js`
   (budget, max CPC, RSA copy). Copy is UK English, no exclamation marks.

4. **Build:**
   ```bash
   node scripts/ads/build-campaign.js
   ```
   Outputs `output/google-ads-editor-import.csv` (upload) and
   `output/review-keywords.csv` (unclassified — sort manually).

5. **Upload:** Google Ads Editor → Account → Import → CSV → review → Post.

## Tests

```bash
node --test scripts/ads/
```

## Limits enforced (build fails loud)

Headline ≤30, Description ≤90, Path ≤15 chars; exactly 15 headlines + 4
descriptions per vertical; every vertical needs a `finalUrl`.
````

- [ ] **Step 4: Commit**

```bash
git add scripts/ads/README.md
git commit -m "docs(ads): planner README and enrichment workflow"
```

---

### Task 7: Full test sweep

- [ ] **Step 1: Run all ads tests**

Run: `node --test scripts/ads/`
Expected: all tests pass (classify + build-campaign).

- [ ] **Step 2: Lint the new scripts**

Run: `npm run lint`
Expected: no new errors in `scripts/ads/`. Fix any flagged (e.g. unused vars).

- [ ] **Step 3: Final commit if lint changed anything**

```bash
git add -A scripts/ads/
git commit -m "chore(ads): lint clean"
```

---

## Notes for the implementer

- **No live API.** Nothing here touches Google Ads or spends money. Output is a file the user uploads manually.
- **Enrichment is Claude-driven**, not scripted — the script's input is `output/enriched-keywords.json`, whose shape is fixed by `fixtures/enriched-sample.json`. Don't build an Ahrefs API client.
- **Editor CSV column tolerance:** the `COLUMNS` set is the canonical contract; Editor infers entity type per row from populated columns. If Editor rejects a column on real upload, adjust the `COLUMNS` constant — tests assert structure, not Google's acceptance.
- **Match types:** Exact + Phrase only (no Broad), two rows per keyword.
