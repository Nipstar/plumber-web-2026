# PlumberWebDesign.co.uk

Marketing website for a UK web design agency specialising in plumbers, gas engineers, heating engineers, and bathroom fitters. Static site exported with Next.js 16 and deployed to Cloudflare Pages.

## Stack

- Next.js 16.2.3 (App Router, static export)
- React 19, TypeScript 5
- Tailwind CSS v4 (`@theme` directive in `app/globals.css`)
- Fonts: Inter + Outfit via `next/font/google`

## Commands

```bash
npm install
npm run dev                # Dev server at localhost:3000
npm run build              # Static export
npm run lint               # ESLint
node generate_locations.js # Regenerate all location pages from template
```

## Pages

**Core** — home, contact, packages, agency, portfolio, blog, privacy policy, terms of business

**Service pages** — gas engineer, heating engineer, bathroom fitter, SEO for plumbers

**Location pages** (generated) — London, Manchester, Birmingham, Liverpool, Portsmouth, Andover. Each has unique body copy (local market context, coverage areas, neighbourhoods) — do not edit the generated files directly; edit `generate_locations.js` and re-run the script.

**Blog posts** — three long-form articles under `app/blog/[slug]/page.tsx` with Article schema.

## Environment Variables

All optional. Set in `.env.local`:

```
NEXT_PUBLIC_GA4_ID          # Google Analytics 4 ID (e.g. G-XXXXXXXXXX)
NEXT_PUBLIC_PHONE           # Display phone number (default: 0333 335 6750)
NEXT_PUBLIC_EMAIL           # Contact email (default: hello@plumberwebdesign.co.uk)
NEXT_PUBLIC_FORM_WEBHOOK    # Contact form POST endpoint
NEXT_PUBLIC_SOCIAL_FB       # Facebook profile URL (shows social icon in footer if set)
```

## Deployment

Cloudflare Pages. Build command `npm run build`, output directory `out/`. Set env vars in the Cloudflare Pages dashboard.

## SEO Assets

- `public/robots.txt` — crawl rules, sitemap pointer
- `public/sitemap.xml` — all indexed URLs (update when adding pages)
- `public/llms.txt` — AI-readable site index
- JSON-LD schema via the `SchemaScript` component — every page has appropriate type (LocalBusiness, ProfessionalService, Article, etc)

## See Also

- [CLAUDE.md](CLAUDE.md) — guidance for AI coding assistants
- [AGENTS.md](AGENTS.md) — Next.js 16 version warning (breaking changes from older Next versions)
