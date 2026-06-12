# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Marketing website for PlumberWebDesign.co.uk — a UK web design agency for plumbers, gas engineers, heating engineers, and bathroom fitters. Static site, deployed to **Vercel** (the README's "Cloudflare Pages" line is stale; `vercel.json` is the source of truth).

Canonical domain is **www.plumberwebdesign.co.uk** (with `www`). Use that host in every canonical URL, OpenGraph URL, and schema `url`.

## Stack

- **Next.js 16.2.3** (App Router, `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`)
- **React 19**, **TypeScript 5** (strict)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@theme` directive in `app/globals.css`, not a traditional `tailwind.config.ts`
- **Fonts**: Inter (`--font-sans`, body) + Outfit (`--font-display`, headings) via `next/font/google`
- **GA4**: Conditionally injected via `NEXT_PUBLIC_GA4_ID`
- **Deploy**: Vercel — build `npm run build`, output `out/`. Env vars: Project → Settings → Environment Variables, scope Production + Preview.

### Env vars (all optional, prefix `NEXT_PUBLIC_`)

`GA4_ID`, `PHONE`, `EMAIL`, `SOCIAL_FB`, `ICO_NUMBER`, `FORM_WEBHOOK` (contact + free-audit form POST target; defaults to an n8n webhook in `components/ContactForm.tsx`).

## Commands

```bash
npm run dev                 # Dev server at localhost:3000
npm run build               # Static export to out/
npm run lint                # ESLint
node generate_locations.js  # Regenerate ALL location pages from template
node scripts/convert-images.js  # Convert source images to webp
```

No test framework is configured.

## Architecture

**Root layout** (`app/layout.tsx`): Wraps all pages with Nav, Footer, fonts, `metadataBase`, OpenGraph/Twitter defaults, skip-to-content link, and optional GA4 script. Defines the title template (see gotcha below).

### URL slugs are keyword-rich — directory name = live URL

Routes are SEO slugs, not short names. When referencing a page, use the actual directory:

- **Core**: `/` (home), `about`, `contact`, `plumber-web-design-agency`, `plumber-website-design-packages`, `plumber-website-cost`, `websites-for-plumbers`, `portfolio`, `blog`, `free-audit`, `thank-you`, `privacy-policy`, `terms`
- **Service**: `gas-engineer-website-design`, `heating-engineer-website-design`, `bathroom-fitter-website-design`, `seo-for-plumbers`
- **Location (generated)**: `web-design-plumbers-<slug>` for 11 cities — london, manchester, birmingham, liverpool, portsmouth, andover, southampton, reading, guildford, oxford, winchester
- **Blog posts**: individual directories under `app/blog/<slug>/page.tsx` with `Article` schema

### Location page generation

`generate_locations.js` holds a `locations` array; each entry has `city`, `slug`, plus unique content fields used to produce distinct body copy per city (avoids duplicate-content penalties). The script writes each page to `app/web-design-plumbers-<slug>/page.tsx` (canonical `https://www.plumberwebdesign.co.uk/web-design-plumbers-<slug>/`).

**Edit the generator, not the generated files** — re-running overwrites manual edits. Add a city by appending to the `locations` array, then `node generate_locations.js`. Also add the new URL to `sitemap.xml` and `llms.txt`.

### Redirects — `vercel.json`

All 301s (old URLs → current slugs, plus `/wp-admin` etc. honeypots) live in `vercel.json`. **When you rename or remove a page slug, add a `permanent` redirect from the old path** (both with and without trailing slash) so existing links and indexed URLs don't 404.

### Shared components (`components/`)

Nav, Footer, Breadcrumbs, RelatedLinks, PricingCard, LaunchPricingStrip, ContactForm, TradeTypeField, AddOnCard, FaqAccordion, SchemaScript, AuthorBio, FounderPanel, TrustBar, DemoGallery, VerticalConversionHero, WhyNewStudio, StickyMobileBar, CookieConsent. (`app/free-audit/` has its own `AuditForm`.)

### Forms

`ContactForm` and `AuditForm` POST JSON to `NEXT_PUBLIC_FORM_WEBHOOK` (n8n) and route to `/thank-you/` on success. `ContactForm` requires a trade type via `TradeTypeField` (validated against `TRADE_OPTIONS`).

## Metadata — use the `pageMeta()` helper

`app/layout.tsx` defines `title.template: '%s | PlumberWebDesign.co.uk'`. A page exporting `title: 'string'` gets wrapped by the template and overflows Google's ~60-char cap.

**Set page metadata via `pageMeta()` from `lib/seo.ts`** (the `@/lib/seo` alias) — the single source of truth. It applies `title.absolute` (bypassing the template), and keeps `title`/`og:title`/`twitter:title`/canonical in sync. Service, location, and conversion pages plus `generate_locations.js` use it; some blog/contact/legal pages still hand-roll `title: { absolute }` — migrate them to `pageMeta()` when you touch them.

```ts
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Page Title | PlumberWebDesign.co.uk', // ≤60 chars
  description: '…',                              // 150–160 chars
  path: '/path/',                               // leading + trailing slash
});
```

Don't hand-roll `title.absolute` / OpenGraph / canonical on new pages — extend or call `pageMeta()` instead. Canonical host is always `www`.

## Schema Markup

Every page renders JSON-LD via the `SchemaScript` component. Types in use:

- `LocalBusiness` — home, contact, location pages
- `ProfessionalService` — agency and service pages
- `Service` + `OfferCatalog` — packages page
- `Article` — blog posts (author, publisher, datePublished, dateModified)
- `FAQPage` — home FAQ section
- `BreadcrumbList` — via the `Breadcrumbs` component

LocalBusiness/ProfessionalService include `address`, `openingHoursSpecification`, `hasOfferCatalog` (3 pricing offers), `logo`, `areaServed`. When adding a page, include matching schema.

## Design System

**Colours** (`@theme` vars in `globals.css`):
- `amber` (#F59E0B) — primary CTA, accents
- `navy-dark` (#0B1120) — hero sections
- `navy-card` (#1E293B) — cards
- `slate-blue` (#334155) — body text on LIGHT backgrounds only
- `light-gray` (#F8FAFC) — page backgrounds

**Contrast rule (recurring bug)**: `text-slate-blue` is only readable on light backgrounds. On `bg-navy-dark` / `bg-navy-card`, use `text-white/60`, `text-white/70`, or `text-amber` instead. Always check the parent background colour before choosing body text colour.

**Visual style**: Dark premium theme. Highly rounded corners (`rounded-xl`, `rounded-2xl`), soft shadows, amber CTAs with dark text. All styling is Tailwind utilities — no per-component CSS files.

**Typography**: Outfit for display/headings (`font-display`), Inter for body (`font-sans`). UK English throughout; no exclamation marks.

## SEO Assets (update manually when adding pages)

- `public/robots.txt` — crawl rules + sitemap pointer
- `public/sitemap.xml` — all indexed URLs
- `public/llms.txt` — AI-readable site index
- `app/icon.png` / `app/apple-icon.png` / `app/favicon.ico` — icons (Next.js file conventions)

## Key References

- `lib/seo.ts` — `pageMeta()` metadata helper (use on every page; see Metadata section)
- `AGENTS.md` — Next.js 16 breaking-changes warning; read `node_modules/next/dist/docs/` before writing Next code
- `vercel.json` — redirect map
- `EEAT-AND-CONTENT-PLAN.md`, `SEO-AUDIT-REPORT.md` — content/SEO strategy notes
