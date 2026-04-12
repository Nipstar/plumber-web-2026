# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Marketing website for PlumberWebDesign.co.uk — a UK web design agency for plumbers, gas engineers, and heating engineers. Static site deployed to Cloudflare Pages.

## Stack

- **Next.js 16.2.3** (App Router, `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`)
- **React 19**, **TypeScript 5** (strict)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@theme` directive in `app/globals.css`, not a traditional `tailwind.config.ts`
- **Fonts**: Inter (`--font-sans`, body) + Outfit (`--font-display`, headings) via `next/font/google`
- **GA4**: Conditionally injected via `NEXT_PUBLIC_GA4_ID` env var

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Static export build
npm run lint     # ESLint
node generate_locations.js  # Regenerate all location pages from template
```

No test framework is configured.

## Architecture

**Root layout** (`app/layout.tsx`): Wraps all pages with Nav, Footer, fonts, metadata base, OpenGraph/Twitter defaults, skip-to-content link, and optional GA4 script.

**Page categories**:
- Core: home, contact, agency, packages, portfolio, blog, privacy-policy, terms
- Service: gas-engineer, heating-engineer, bathroom-fitter, seo-for-plumbers
- Location (generated): 6 cities via `generate_locations.js`
- Blog posts: 3 individual post directories under `app/blog/{slug}/page.tsx`

**Location page generation**: `generate_locations.js` defines a `locations` array where each entry includes 5 unique content fields (`intro`, `seoBody`, `whyLocal`, `areas`, `localFeature`) plus `city` and `slug`. The template function produces unique body copy per city to avoid duplicate content penalties. **Edit the generator, not the generated files** — regenerating overwrites any manual edits. After changes: `node generate_locations.js`.

**Shared components** (in `components/`): Nav, Footer, PricingCard, ContactForm, AddOnCard, FaqAccordion, SchemaScript.

**Contact form query params**: `/contact/?package=apprentice` pre-selects a pricing tier; `/contact/?location=london` indicates geographic origin; `/contact/?addon=chatbot|voice-agent|both` pre-selects an add-on enquiry.

## Metadata — Important Gotcha

The root layout (`app/layout.tsx`) defines `title.template: '%s | PlumberWebDesign.co.uk'`. If a page exports `title: 'some string'`, the template wraps it and the result exceeds Google's ~60 char cap.

**Always use the absolute form on every page**:

```ts
export const metadata = {
  title: { absolute: 'Page Title | PlumberWebDesign.co.uk' },
  description: '…',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/path/' },
};
```

Target title ≤60 chars, description 150-160 chars.

## Schema Markup

Every page has JSON-LD schema rendered via the `SchemaScript` component. Types in use:

- `LocalBusiness` — home, contact, location pages
- `ProfessionalService` — agency and service pages (gas/heating/bathroom/seo)
- `Service` + `OfferCatalog` — packages page
- `Article` — blog posts (with author, publisher, datePublished, dateModified)
- `FAQPage` — home FAQ section

LocalBusiness/ProfessionalService schemas include `address`, `openingHoursSpecification`, `hasOfferCatalog` with 3 pricing offers, `logo`, `areaServed`. When adding a new page, include matching schema.

## Design System

**Colours** (`@theme` vars in `globals.css`):
- `amber` (#F59E0B) — primary CTA, accents
- `navy-dark` (#0B1120) — hero sections
- `navy-card` (#1E293B) — cards
- `slate-blue` (#334155) — body text on LIGHT backgrounds only
- `light-gray` (#F8FAFC) — page backgrounds

**Contrast rule**: `text-slate-blue` is only readable on light backgrounds. On `bg-navy-dark` or `bg-navy-card` sections, use `text-white/60`, `text-white/70`, or `text-amber` instead. This is a recurring bug in this codebase — always check parent background colour when choosing body text colour.

**Visual style**: Dark premium theme. Highly rounded corners (`rounded-xl`, `rounded-2xl`). Soft shadows. Amber CTAs with dark text. All styling is Tailwind utility classes — no per-component CSS files.

**Typography**: Outfit for display/headings (font-display), Inter for body (font-sans). UK English throughout; no exclamation marks.

## SEO Assets

- `public/robots.txt` — crawl rules + sitemap pointer
- `public/sitemap.xml` — **must be updated manually when adding pages**
- `public/llms.txt` — AI-readable site index (also update when adding pages)
- `app/icon.png` — favicon (Next.js file convention)

## Key References

- `plumberwebdesign-build-prompt.md` — original build specification
- `AGENTS.md` — Next.js 16 breaking-changes warning
