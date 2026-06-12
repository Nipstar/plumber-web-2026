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
