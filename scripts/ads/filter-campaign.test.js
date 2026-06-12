// scripts/ads/filter-campaign.test.js
const { test } = require('node:test');
const assert = require('node:assert');
const { isBuyerIntent, filter } = require('./filter-campaign');

const kw = (keyword, vertical, volume) => ({ keyword, vertical, volume });

test('keeps commercial buyer-intent with volume', () => {
  assert.strictEqual(isBuyerIntent(kw('seo for plumbers', 'seo', 800)), true);
  assert.strictEqual(isBuyerIntent(kw('web design for plumbers', 'plumber', 250)), true);
});

test('drops generic consumer query', () => {
  assert.strictEqual(isBuyerIntent(kw('plumbing', 'plumber', 6000)), false);
  assert.strictEqual(isBuyerIntent(kw('plumbing emergency near me', 'plumber', 200)), false);
  assert.strictEqual(isBuyerIntent(kw('plumber andover', 'plumber', 150)), false);
});

test('drops zero/low volume', () => {
  assert.strictEqual(isBuyerIntent(kw('website design for plumbers columbus', 'plumber', 0)), false);
  assert.strictEqual(isBuyerIntent(kw('plumber web design sussex', 'plumber', 5)), false);
});

test('already-unclassified stays out', () => {
  assert.strictEqual(isBuyerIntent(kw('random', null, 500)), false);
});

test('filter nulls dropped vertical, counts kept/dropped', () => {
  const { enriched, kept, dropped } = filter({
    keywords: [
      kw('seo for plumbers', 'seo', 800),
      kw('plumbing', 'plumber', 6000),
      kw('already review', null, 0),
    ],
  });
  assert.strictEqual(kept, 1);
  assert.strictEqual(dropped, 1);
  assert.strictEqual(enriched.keywords[1].vertical, null);
});
