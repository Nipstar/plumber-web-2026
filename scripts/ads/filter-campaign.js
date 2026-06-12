// scripts/ads/filter-campaign.js
// Tighten an enriched-keywords.json so the campaign only keeps commercial
// BUYER-intent keywords (a tradesperson looking to buy a website / SEO),
// not CONSUMER queries (a homeowner looking for a plumber). Dropped keywords
// have their `vertical` set to null so build-campaign routes them to the
// review file instead of the live campaign. Pure + re-runnable.

const fs = require('node:fs');
const path = require('node:path');

const MIN_VOLUME = 10;

// Must contain a buyer/service signal — the searcher wants a web/marketing product.
const BUYER = /\b(web ?design|web ?designer|website|web site|webdesign|design|seo|marketing|ads|adwords|ppc|pay per click|leads|branding|brand|landing|builder|developer|agency|audit)\b/i;

// Hard consumer/wrong-intent exclusions even if they match BUYER loosely.
const CONSUMER = /\b(emergency|near me|repair|installation|boiler service|blocked|leak)\b/i;

function isBuyerIntent(k) {
  if (!k.vertical) return false;                 // already unclassified
  if ((k.volume || 0) < MIN_VOLUME) return false; // no real UK demand
  if (CONSUMER.test(k.keyword)) return false;     // homeowner intent
  if (!BUYER.test(k.keyword)) return false;       // no product signal
  return true;
}

function filter(enriched) {
  let kept = 0, dropped = 0;
  const keywords = enriched.keywords.map(k => {
    if (k.vertical && !isBuyerIntent(k)) {
      dropped++;
      return { ...k, vertical: null, droppedReason: 'non-buyer-or-low-volume' };
    }
    if (k.vertical) kept++;
    return k;
  });
  return { enriched: { ...enriched, keywords }, kept, dropped };
}

function main() {
  const p = path.join(__dirname, 'output', 'enriched-keywords.json');
  const enriched = JSON.parse(fs.readFileSync(p, 'utf8'));
  const { enriched: out, kept, dropped } = filter(enriched);
  fs.writeFileSync(p, JSON.stringify(out, null, 2));
  const byV = {};
  for (const k of out.keywords) if (k.vertical) byV[k.vertical] = (byV[k.vertical] || 0) + 1;
  console.log(`Filtered: kept ${kept} buyer-intent, dropped ${dropped} → review`);
  console.log('Campaign by vertical:', JSON.stringify(byV));
}

if (require.main === module) main();

module.exports = { filter, isBuyerIntent, MIN_VOLUME };
