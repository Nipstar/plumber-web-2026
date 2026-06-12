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
