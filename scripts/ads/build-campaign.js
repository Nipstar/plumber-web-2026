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
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
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
    if (v.paths && v.paths.length !== 2) {
      throw new Error(`Vertical "${key}" must have exactly 2 paths, got ${v.paths.length}`);
    }
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

    const seen = new Set();
    const deduped = kws.filter(k => {
      const key2 = k.keyword.toLowerCase();
      if (seen.has(key2)) return false;
      seen.add(key2);
      return true;
    });

    const ag = emptyRow();
    ag.Campaign = campaign.name;
    ag['Ad Group'] = key;
    ag['Max CPC'] = campaign.maxCpc;
    rows.push(ag);

    for (const k of deduped) {
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
  let enriched;
  try {
    enriched = JSON.parse(fs.readFileSync(enrichedPath, 'utf8'));
  } catch (e) {
    console.error(`Failed to parse ${enrichedPath}: ${e.message}`);
    process.exit(1);
  }
  const { rows, review } = buildRows(enriched, CAMPAIGN, VERTICALS);

  const outCsv = path.join(__dirname, 'output', 'google-ads-editor-import.csv');
  fs.writeFileSync(outCsv, rowsToCsv(rows) + '\n', 'utf8');

  const reviewCsv = path.join(__dirname, 'output', 'review-keywords.csv');
  fs.writeFileSync(reviewCsv, ['Keyword', ...review.map(csvField)].join('\n') + '\n', 'utf8');

  const adGroups = new Set(rows.filter(r => r['Ad Group']).map(r => r['Ad Group']));
  console.log(`Wrote ${outCsv}`);
  console.log(`Ad groups: ${[...adGroups].join(', ')}`);
  console.log(`Editor rows: ${rows.length} | Unclassified (review): ${review.length} → ${reviewCsv}`);
}

if (require.main === module) main();

module.exports = { COLUMNS, csvField, buildRows, rowsToCsv, validateConfig, LIMITS };
