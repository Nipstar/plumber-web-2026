# Google Ads Campaign Planner — Design

**Date:** 2026-06-12
**Status:** Approved (pending spec review)
**Owner:** Andrew Norman

## Purpose

Generate a ready-to-upload Google Ads campaign for **PlumberWebDesign.co.uk** (own agency, selling web design to UK trades) from real Search Console query data. Output is a **Google Ads Editor import CSV** the user reviews and posts manually — no live Ads API, no dev token, no spend triggered by the tool.

## Decisions (locked)

| Decision | Choice |
|---|---|
| Advertiser | Own agency (PlumberWebDesign.co.uk) |
| Export format | Google Ads Editor bulk-import CSV |
| Geo targeting | UK national, single campaign |
| Campaign structure | By trade vertical (ad group per trade) |
| Keyword source | User-supplied GSC `Queries.csv` |
| Enrichment | Ahrefs **Keywords Explorer (KWE) MCP** — volume, KD, CPC (UK). No API key; MCP handles auth. |
| Copy | Claude-drafted RSAs in editable config; user edits before upload |

## Inputs

1. **GSC queries** — `GSC/.../Queries.csv`
   Columns: `Top queries, Clicks, Impressions, CTR, Position` (255 rows as of 2026-06-12).
   Clicks/Impressions/CTR/Position retained as proven-demand signal.
2. **Ahrefs KWE MCP** — `keywords-explorer-overview` (country `gb`) → `volume`, `difficulty`, `cpc`. Monetary in USD cents; divide by 100. Keywords missing from KWE kept with `volume: null`, flagged.
3. **`campaign.config.js`** — campaign name, daily budget, bid strategy, UK location targeting, per-vertical RSA copy + final URLs.

## Data Flow

```
GSC Queries.csv ──┐
                  ├─► [Claude] read + dedupe
Ahrefs KWE MCP ───┘        │
                           ▼  classify → vertical ; enrich → volume/KD/CPC
                  output/enriched-keywords.json   (user-editable)
                           │
campaign.config.js ────────┤
                           ▼
            node scripts/ads/build-campaign.js   (pure, testable)
                           ▼
            output/google-ads-editor-import.csv  → upload to Ads Editor
```

The Claude-driven steps (read GSC, KWE enrichment, classification) produce `enriched-keywords.json`. The build step is deterministic code consuming that JSON + config.

## File Layout

```
scripts/ads/
  build-campaign.js        # pure: enriched JSON + config → Editor CSV
  campaign.config.js       # budget, bid strategy, locations, RSA copy, final URLs
  classify.js              # keyword → vertical (rule-based)
  build-campaign.test.js   # unit tests on CSV output
  input/
    gsc-keywords.csv       # copy of GSC Queries.csv
  output/
    enriched-keywords.json # Claude writes after KWE enrichment
    google-ads-editor-import.csv
  README.md                # run steps
```

Lives inside the website repo (couples to its pages/copy; `scripts/` already exists). Not part of the Vercel build output.

## Classification → Verticals

Rule-based (`classify.js`), 5 buckets → live service pages:

| Vertical | Match signals | Final URL |
|---|---|---|
| plumber | "plumber", "plumbing" | `/websites-for-plumbers/` |
| gas | "gas engineer", "gas safe" | `/gas-engineer-website-design/` |
| heating | "heating", "boiler" | `/heating-engineer-website-design/` |
| bathroom | "bathroom", "fitter" | `/bathroom-fitter-website-design/` |
| seo | "seo", "ranking", "google" | `/seo-for-plumbers/` |
| _review | no match | (none — manual sort) |

- One ad group per vertical.
- Each keyword emitted as **exact + phrase** (two rows).
- Unmatched → `_review` bucket. **Never silently dropped.**
- Precedence order when multiple signals hit: seo > bathroom > gas > heating > plumber (most-specific first), documented in `classify.js`.

## RSA Copy (`campaign.config.js`)

Per vertical: **15 headlines** (≤30 chars), **4 descriptions** (≤90 chars). UK English, no exclamation marks (per CLAUDE.md). Pinned: Headline 1 = brand, Headline 2 = trade hook. Claude drafts; user edits. Path 1/2 set per vertical (e.g. `Plumber`, `Websites`).

## Google Ads Editor CSV

Standard Editor bulk-import columns (exact headers confirmed against Google Ads Editor import spec before coding):

`Campaign, Campaign Type, Campaign Daily Budget, Bid Strategy Type, Ad Group, Max CPC, Keyword, Match Type, Ad Type, Headline 1`…`Headline 15, Description 1`…`Description 4, Path 1, Path 2, Final URL`

(`Match Type` holds the keyword match — Exact/Phrase. This is the Editor keyword column; `Criterion Type` is a different field denoting criterion kind and is not used here.)

Editor infers entity type per row from which columns are populated (campaign row, ad-group row, keyword row, ad row). Build emits rows in that order per vertical.

## Error Handling

- **KWE miss** → keyword kept, `volume: null`, flagged in JSON.
- **Char overflow** (headline >30, description >90, path >15) → build **fails loud**, names offending vertical + field. No truncation.
- **Unmapped keyword** → `_review` bucket, logged count. No silent drop.
- **Empty RSA field** → build fails (Google requires ≥3 headlines, ≥2 descriptions; we enforce full set).
- **Missing config vertical** → build fails naming the vertical.

## Testing

Unit tests (`build-campaign.test.js`, Node built-in `node:test`):
- char limits enforced (headline/description/path)
- required columns present, correct order
- final URL matches vertical
- exact + phrase rows emitted per keyword
- no empty RSA fields
- sample row round-trips (parse back, assert fields)

No live MCP/API in tests — fixtures only.

## Out of Scope (YAGNI)

- Live Ads API / auto-posting
- PMax, Display, Shopping
- Local/geo campaigns (UK national only)
- Negative keyword research (manual add in Editor)
- A/B ad variants beyond one RSA per ad group

## Run Steps (README)

1. `cp "GSC/.../Queries.csv" scripts/ads/input/gsc-keywords.csv`
2. Ask Claude: enrich + classify → writes `output/enriched-keywords.json`
3. Review/edit JSON + `campaign.config.js` (copy, budget)
4. `node scripts/ads/build-campaign.js`
5. Open `output/google-ads-editor-import.csv` in Google Ads Editor → review → post
