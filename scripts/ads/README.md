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
