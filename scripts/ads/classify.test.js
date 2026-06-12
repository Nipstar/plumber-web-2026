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
