# Claude Code — plumberwebdesign.co.uk Full Build

You are building a complete marketing website for **plumberwebdesign.co.uk** — a UK-based web design agency that specialises exclusively in websites for plumbers, gas engineers, and heating engineers. The site must rank for commercial keywords already generating GSC impressions, pass Core Web Vitals, and convert paid AdWords traffic from day one.

Read this entire prompt before writing a single line of code.

---

## Stack

```
Next.js 16.2 (App Router, static export)
React 19
TypeScript (strict)
Tailwind CSS v4
next/image for all images
next/font for self-hosted fonts (Syne + IBM Plex Mono)
Deployment: Cloudflare Pages via static export
```

`next.config.ts`:
```ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}
export default nextConfig
```

No Vercel-specific features. No server actions. No API routes. Pure static export.

---

## Design system — read before writing any component

Modern, Premium & Dark-themed. Aesthetics must closely match the reference design: dark navy/black backgrounds with vibrant amber/orange accents.

```
--amber:       #F59E0B   primary CTA, accents, icons (or similar vibrant orange/yellow)
--navy-dark:   #0B1120   hero backgrounds, dark sections
--navy-card:   #1E293B   cards, secondary dark sections
--slate-blue:  #334155   borders, muted text
--light-gray:  #F8FAFC   light sections
--white:       #FFFFFF
```

Rules — enforce in every component:
- Border radius: Highly rounded corners on UI elements. Use `rounded-lg`, `rounded-xl`, or `rounded-full` for cards, inputs, and buttons.
- Borders: Subtle borders (e.g., 1px solid slate-blue) or borderless for most cards.
- Shadows: Yes, use soft, elegant drop shadows (`shadow-md`, `shadow-lg`, `shadow-xl`) to give depth.
- Gradients: Use subtle gradients, especially for the hero background (e.g., radial glow on a dark background) or text clip accents.
- Animations: Smooth transitions on hover.
- Buttons: Solid vibrant amber fill, rounded corners, dark text. Secondary buttons can be dark with amber outline or dark blue.
- Cards: Often feature image backgrounds or dark slate fills with rounded corners and distinct iconography.
- Imagery: Needs high-quality imagery overlaid with dark gradients and text elements (e.g., Trade cards).

Typography:
- Modern, clean sans-serif like Inter, Roboto, or Outfit.
- Display: Inter or Outfit weight 600/700/800 via next/font
- Body/UI: Inter weight 400/500/600 via next/font
- Apply as CSS vars --font-display and --font-sans to html element
- UK English throughout. No exclamation marks.
- Banned words: leverage, synergy, strategic, solutions, ecosystem, best practices, touch base, circle back, seamless, robust

---

## Site architecture

```
app/
  layout.tsx
  page.tsx                                      /
  contact/page.tsx                              /contact/
  plumber-web-design-agency/page.tsx            /plumber-web-design-agency/
  plumber-website-design-packages/page.tsx      /plumber-website-design-packages/
  portfolio/page.tsx                            /portfolio/
  gas-engineer-website-design/page.tsx          /gas-engineer-website-design/
  heating-engineer-website-design/page.tsx      /heating-engineer-website-design/
  bathroom-fitter-website-design/page.tsx       /bathroom-fitter-website-design/
  seo-for-plumbers/page.tsx                     /seo-for-plumbers/
  web-design-plumbers-london/page.tsx           /web-design-plumbers-london/
  web-design-plumbers-manchester/page.tsx       /web-design-plumbers-manchester/
  web-design-plumbers-birmingham/page.tsx       /web-design-plumbers-birmingham/
  web-design-plumbers-liverpool/page.tsx        /web-design-plumbers-liverpool/
  web-design-plumbers-portsmouth/page.tsx       /web-design-plumbers-portsmouth/
  web-design-plumbers-andover/page.tsx          /web-design-plumbers-andover/
  blog/page.tsx                                 /blog/

components/
  Nav.tsx
  Footer.tsx
  ContactForm.tsx
  PricingCard.tsx
  FaqAccordion.tsx     pure CSS details/summary, zero JS
  SchemaScript.tsx     renders JSON-LD script tag

public/
  robots.txt
  sitemap.xml
```

---

## Environment variables

```
NEXT_PUBLIC_FORM_WEBHOOK      n8n webhook URL
NEXT_PUBLIC_GA4_ID            GA4 measurement ID
NEXT_PUBLIC_PHONE             0333 335 6750
NEXT_PUBLIC_EMAIL             hello@plumberwebdesign.co.uk
```

No hardcoded contact details anywhere in the codebase. All from env vars.

---

## Root layout — app/layout.tsx

Load Syne (700, 800) and IBM Plex Mono (400, 500, 600) via next/font. Apply as CSS variables to html element. Set metadataBase to https://plumberwebdesign.co.uk. Load GA4 via next/script with strategy="afterInteractive". No external stylesheet links.

Default metadata:
```ts
title: {
  default: 'Plumber Web Design | Websites for Plumbers from £99/month',
  template: '%s | PlumberWebDesign.co.uk'
},
description: 'Specialist web design for plumbers across the UK. Mobile-first, SEO-optimised websites built to generate calls and win jobs. Packages from £99/month.'
```

---

## Nav — components/Nav.tsx

- Sticky, charcoal background, cream text
- Left: logo "PlumberWebDesign.co.uk" in Syne, coral on hover
- Centre: Home · Services (dropdown) · Pricing · Portfolio · Contact
- Services dropdown via CSS :hover — no JS: Gas Engineers · Heating Engineers · Bathroom Fitters · SEO for Plumbers
- Right: phone number as coral pill button, href="tel:03333356750"
- Mobile: CSS checkbox hamburger toggle, no JS
- Active route: coral left border

---

## Footer — components/Footer.tsx

Dark navy background, light gray text, 3 columns:

Column 1 Services: Web Design for Plumbers · Gas Engineer · Heating Engineer · Bathroom Fitter · SEO for Plumbers
Column 2 Locations: London · Manchester · Birmingham · Liverpool · Portsmouth · Andover
Column 3 Contact: phone (tel: link), email (mailto: link) from env vars

Bottom: © 2026 PlumberWebDesign.co.uk — Specialist Web Design for the Trades

No social links unless env var NEXT_PUBLIC_SOCIAL_FB etc are set and non-empty.

---

## ContactForm — components/ContactForm.tsx

'use client' component.

Fields: Name, Business name, Phone, Email, Service area (text), Package interest (select: Apprentice / Journeyman / Master / Not sure yet / Add-on only — Chatbot / Add-on only — Voice Agent), Message.

On mount: read ?package= URL param and pre-select the matching option.

Honeypot: hidden input name="website" — if populated on submit, show success silently and abort POST.

Submit: POST JSON to NEXT_PUBLIC_FORM_WEBHOOK with fields + source: window.location.href.

States: loading (disable button, show "Sending..."), success (replace form with "We'll be in touch within one working day."), error (inline message, preserve form data).

No redirect. No CAPTCHA.

Style: all inputs full width, 2px charcoal border, cream bg. Submit button coral fill, charcoal text, uppercase, full width.

---

## PricingCard — components/PricingCard.tsx

Props: name, price, period, tagline, features: string[], ctaHref, highlighted?: boolean

CTA always links to /contact/?package={name.toLowerCase()} — never an external URL.

Highlighted variant: charcoal bg, cream text, coral CTA.
Standard: cream bg, charcoal text.
Features prefixed with → not bullets. No radius. 2px border.

---

## FaqAccordion — components/FaqAccordion.tsx

Props: items: Array<{ question: string, answer: string }>

Use HTML details/summary elements only. CSS transition for open/close. Arrow indicator via CSS details[open] summary svg rotate. Zero JavaScript, zero useState.

---

## SchemaScript — components/SchemaScript.tsx

Accepts schema: object prop. Renders:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} suppressHydrationWarning />

---

## Homepage — app/page.tsx

```ts
metadata: {
  title: 'Plumber Web Design | Websites for Plumbers from £99/month',
  description: 'Specialist web design for plumbers across the UK. Mobile-first, SEO-optimised websites built to win jobs. Packages from £99/month. Free quote.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/' }
}
```

Schema: LocalBusiness + WebSite + FAQPage (see schema section below).

H1: Web Design for Plumbers That Wins Jobs

Section 1 — Hero
- H1 above
- Subheading: We build websites exclusively for UK plumbers and heating engineers. Fast. Local SEO-ready. Built to generate calls.
- CTAs: [Get a Free Quote →] coral → /contact/ and [View Pricing] outlined → /plumber-website-design-packages/
- Trust strip: 4 items in mono — Serving plumbers across the UK · From £99/month · Free domain & hosting · Local SEO included
- No stock photography. Hero right side: charcoal block with 4 large mono stats:
  - £99/mo — Starting price
  - 2–3 wks — Average build time
  - 100% — Mobile-first
  - UK — Only market we serve

Section 2 — Problem block (charcoal bg, cream text)
- H2: Most plumber websites don't work
- 3 numbered pain point cards:
  1. Invisible on Google — competitors take the call
  2. Broken on mobile — 70%+ of plumbing searches happen on a phone
  3. No clear way to book — visitors land and leave

Section 3 — What we build (cream bg)
- H2: What a proper plumber website looks like
- 4 feature cards, 2px border:
  Mobile-first · Local SEO baked in · Click-to-call + emergency booking · Google Business Profile integration

Section 4 — Pricing summary (sage bg)
- H2: Transparent pricing — no hidden costs
- 3 PricingCard components (Apprentice/Journeyman/Master, data as specified in packages section)
- Footnote: All packages include hosting and SSL. Domain included if needed. Hosting renewal after 12 months.
- [See full package details →] → /plumber-website-design-packages/

Section 5 — Trades (white bg)
- H2: We specialise in these trades
- 4 linked trade tiles: Plumbers (/) · Gas Engineers · Heating Engineers · Bathroom Fitters

Section 6 — FAQ (charcoal bg, cream text)
- H2: Common questions
- FaqAccordion with 6 items:
  1. How long does it take? → 2–3 weeks from sign-off
  2. Do I own the website? → Yes. Fully transferable. No lock-in.
  3. Is SEO included? → Yes. Local SEO setup in every package.
  4. Do you work with gas and heating engineers? → Yes. See our specialist pages.
  5. What happens after the first year? → Annual hosting renewal. We notify you in advance.
  6. Can I see examples? → Yes. [View our portfolio →] /portfolio/
- FAQPage JSON-LD matching these exactly

Section 7 — CTA (coral bg, charcoal text)
- H2: Ready to get more calls from your website?
- Body: Tell us about your business and we will put together a free quote.
- [Get a Free Quote →] → /contact/

---

## Package data (use consistently across all pages)

Apprentice — £99/month
- 5-page responsive website
- Mobile-optimised for all screen sizes
- Free domain (if needed)
- Fast hosting + SSL certificate
- Basic local SEO setup
- Contact forms
- Google Analytics + Search Console setup
- Google Business Profile setup
- Priority phone and email support

Journeyman — £169/month (highlighted — most popular)
- 10-page custom website with service and location pages
- Mobile-optimised for all screen sizes
- Advanced local SEO optimisation
- Free domain (if needed)
- Fast hosting + SSL certificate
- Contact forms + blog integration
- Google Analytics + Search Console setup
- Google Business Profile setup + monthly posting
- Google Review management
- Priority phone and email support

Master — £249/month
- 20+ page custom website with full service and location page structure
- Mobile-optimised for all screen sizes
- Advanced local SEO optimisation
- Free domain (if needed)
- Fast hosting + SSL certificate
- Contact forms + blog integration
- Monthly blog posts (2/month)
- Google Analytics + Search Console setup
- Google Business Profile setup, optimisation + monthly posting
- Google Review management
- Optional link building service
- Priority phone and email support

---

## Add-ons — components/AddOnCard.tsx

Build a separate AddOnCard component. Props: name, price, priceNote, description, features: string[], ctaHref.

Style: 2px charcoal border, cream background, coral accent strip on left edge (4px wide), no radius. CTA links to /contact/?addon={slug}.

### Add-on data — use on homepage (below pricing cards), /plumber-website-design-packages/, and all service pages

**AI Chatbot — from £49/month**
- Slug: chatbot
- Price note: + one-off £299 setup
- Description: A 24/7 AI chatbot on your website that answers customer questions, qualifies leads, and captures contact details — even at 2am when you're on a job.
- Features:
  → Answers questions about your services, prices, and coverage area
  → Captures name, phone, and job type from every visitor
  → Sends enquiry direct to your phone or email
  → Trained on your specific services and location
  → Works on any device, no app needed
  → Monthly conversation reports
- CTA: [Add a Chatbot →]

**AI Voice Agent — from £97/month**
- Slug: voice-agent
- Price note: + one-off £497 setup
- Description: A professional AI receptionist that answers your calls, qualifies the job, and books the appointment — so you never miss a call on the tools again.
- Features:
  → Answers calls 24/7 in your business name
  → Qualifies the caller: job type, location, urgency
  → Books appointments or takes a message
  → Handles overflow when you're busy or unavailable
  → UK voices, natural conversation
  → Call recordings and summary reports
- CTA: [Add a Voice Agent →]

### Add-ons section — display on homepage between pricing summary and trades section

Section heading (sage background, charcoal text):
- H2: Never miss a job again
- Subheading: Add AI-powered call answering and chat to your website. Your competitors are still letting calls go to voicemail.
- Two AddOnCard components side by side (Chatbot + Voice Agent)
- Below cards: small print — "Add-ons can be combined with any package. Setup fees are one-off. Monthly fee is in addition to your website package."
- CTA below: [Ask about add-ons →] → /contact/?addon=both

### Add-ons section on /plumber-website-design-packages/

Add a dedicated "Power up your package" section below the comparison table with the same two AddOnCard components. Include a short para explaining these are managed services, not plugins — fully set up and maintained for the plumber.

### Update PricingCard — components/PricingCard.tsx

Add an optional addOns?: string[] prop. If provided, render a small "Compatible add-ons" row below the features list showing the add-on names as coral pills. Example: [AI Chatbot] [AI Voice Agent].

---

## Service pages

### /gas-engineer-website-design/

```ts
title: 'Gas Engineer Website Design | Websites for Gas Engineers UK',
description: 'Specialist website design for gas engineers across the UK. Gas Safe display, emergency booking, local SEO. From £99/month.',
```

H1: Gas Engineer Website Design
Target keywords: "gas engineer website design" (97 imp, pos 11.7), "web design for gas engineers" (128 imp, pos 18.5)

Content:
1. Intro: what gas engineer websites need vs generic plumber sites
2. Must-have features: Gas Safe registration display, emergency call-out booking, boiler installation/service/safety cert pages, coverage area
3. All 3 pricing cards
4. FAQ: Gas Safe display requirements, certificate verification page, emergency booking setup
5. CTA

### /heating-engineer-website-design/

```ts
title: 'Heating Engineer Website Design | Websites for Heating Engineers UK',
description: 'Website design for UK heating engineers. Showcase qualifications, win boiler and heat pump jobs, rank locally. From £99/month.',
```

H1: Heating Engineer Website Design
Target keywords: "heating engineers web design" (44 imp), "central heating website design" (2 imp)

Focus on: heat pumps, underfloor heating, radiators, annual service contracts. Link to gas engineer page for overlap.

### /bathroom-fitter-website-design/

```ts
title: 'Bathroom Fitter Website Design | Websites for Bathroom Fitters UK',
description: 'Professional website design for bathroom fitters across the UK. Showcase your work, generate local enquiries. From £99/month.',
```

H1: Bathroom Fitter Website Design
Target keywords: "bathroom fitter website design" (10 imp)

Focus on: before/after galleries, project portfolio, suite and tile sourcing, local trade area.

### /seo-for-plumbers/

```ts
title: 'SEO for Plumbers UK | Local SEO for Plumbing Businesses',
description: 'Local SEO for UK plumbers. Get found when customers search for plumbers in your area. GBP management included. From £169/month.',
```

H1: SEO for Plumbers UK
Target keywords: "seo for plumbers uk" (5 imp, pos 63), "local plumber seo agency" (1 imp), "marketing agency for plumber" (1 imp)

Content:
1. Why local SEO matters for plumbers — near me search behaviour
2. What is included: on-page, citations, GBP, review management, monthly reporting
3. Organic vs paid ads — when to use each
4. UK-only, no black-hat
5. Journeyman and Master packages include SEO
6. CTA

---

## Location pages — build all 6

Same structure for each. Customise city name and intro paragraph — no copy-paste boilerplate.

GSC context to guide content priority:
- Portsmouth: 192 imp, pos 6.21 — build this one with most depth
- Manchester: 175 imp, pos 6.77
- Birmingham: 44 imp, pos 13.3
- Liverpool: 44 imp, pos 4.52
- London: 9 imp, high commercial value
- Andover: local, targets "awesome web design andover" query

Each page:
```ts
title: 'Web Design for Plumbers [City] | Plumber Websites in [City]',
description: 'Specialist web design for plumbers in [City]. Local SEO-optimised websites that rank when customers search for plumbers in your area.',
alternates: { canonical: 'https://plumberwebdesign.co.uk/web-design-plumbers-[city]/' }
```

H1: Web Design for Plumbers in [City]

Sections:
1. City-specific intro — mention local market, plumber competition in that city
2. Why local SEO in [City] — competition, search volume, near-me behaviour
3. What the site includes for a [City] plumber: local schema markup, [City] service pages, GBP [City] optimisation
4. All 3 pricing cards
5. CTA: [Get a quote for your [City] plumbing website →] → /contact/?location=[city]

LocalBusiness schema on each with city in areaServed field.

---

## /plumber-web-design-agency/

```ts
title: 'Plumber Web Design Agency UK | Specialist Agency for Plumbers',
description: 'Looking for a plumber web design agency? We build exclusively for UK plumbers and heating engineers. Trade-specific results, ongoing support.',
```

H1: UK Plumber Web Design Agency
Target: "plumber web design agency" (385 imp, pos 5.18, 0 clicks — this page should capture it)

Content:
1. What a specialist agency delivers vs a generalist or freelancer
2. Our 4-step process: Discovery · Design · Build · Launch & Ongoing
3. Full service stack: design + local SEO + GBP management
4. Pricing cards
5. CTA

---

## /plumber-website-design-packages/

```ts
title: 'Plumber Website Design Packages | Pricing from £99/month',
description: 'Transparent plumber website design pricing. Apprentice £99/mo, Journeyman £169/mo, Master £249/mo. No setup fees. Free domain and hosting.',
```

H1: Plumber Website Design Packages

All 3 PricingCard components with complete feature lists.

Below cards: full HTML comparison table. Rows = features. Columns = Apprentice / Journeyman / Master. Cells = tick or dash.

Features in table:
- Number of pages (5 / 10 / 20+)
- Custom design
- Mobile optimisation
- Local SEO setup (Basic / Advanced / Advanced)
- Free domain
- Hosting + SSL
- Contact forms
- Blog integration
- Google Analytics + Search Console
- GBP setup
- GBP monthly posting (— / ✓ / ✓)
- Review management (— / ✓ / ✓)
- Monthly blog posts (— / — / 2/month)
- Link building (— / — / Optional)
- Support (Priority / Priority / Priority)

Pricing FAQ below table:
1. Are there setup fees? — No setup fee on website packages. Add-ons have a one-off setup fee.
2. Can I upgrade my package? — Yes, at any time.
3. What happens after year one? — Annual hosting renewal applies. We notify you in advance.
4. What if I want to cancel? — 30 days notice.
5. Do you offer one-off builds? — Not currently. Packages only.
6. What are the AI add-ons? — The AI Chatbot and AI Voice Agent are managed services added to your package. The chatbot handles website enquiries 24/7. The voice agent answers your calls when you can't. Both are set up and maintained by us.

---

## /portfolio/

```ts
title: 'Plumber Website Design Portfolio | Examples of Our Work',
description: 'See examples of plumber websites we have designed and built across the UK. Real sites, real results.',
```

H1: Our Plumber Website Portfolio

6 placeholder portfolio cards in a 3-col grid. Each card: business name placeholder, location, package, charcoal block with "Screenshot coming soon" text and a [Visit site →] link set to #.

Add code comment: TODO: Replace with real client sites before launch.

Below cards: testimonials section with 3 blockquote cards. Use Dave R./Tom B./Simon M. from current site. Style as blockquote with cite attribute, star rating (5 stars), name, trade, location.

---

## /blog/

```ts
title: 'Blog | Plumber Web Design Tips and Advice',
description: 'Web design and SEO advice for UK plumbers and heating engineers.',
```

H1: Plumber Web Design Blog

3 placeholder blog post cards in a grid. Each: title, date (today), 2-line excerpt, [Read more →] linking to #.

Suggested post titles:
- Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)
- What Should a Plumber Website Include in 2026?
- Google Business Profile for Plumbers: A Complete Setup Guide

Add comment: TODO: Replace with real posts and dynamic routing.

---

## /contact/

```ts
title: 'Get a Free Quote | Plumber Web Design',
description: 'Get a free quote for your plumber website. Tell us about your business and we will come back to you within one working day.',
```

H1: Get a Free Quote

Two-column layout desktop, stacked mobile:
- Left: ContactForm component
- Right: contact block with phone, email, address from env vars + what happens next (3 steps: Submit → We review → Free quote within 1 working day)

---

## Schema — key structures

LocalBusiness (homepage + location pages):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PlumberWebDesign.co.uk",
  "url": "https://plumberwebdesign.co.uk",
  "telephone": "03333356750",
  "email": "hello@plumberwebdesign.co.uk",
  "areaServed": "GB",
  "priceRange": "££"
}
```

Add BreadcrumbList on every page except homepage.
Add Service schema on all service pages.
Add FAQPage on homepage with the 6 FAQ items.

---

## public/robots.txt

```
User-agent: *
Allow: /
Sitemap: https://plumberwebdesign.co.uk/sitemap.xml
```

## public/sitemap.xml

Include all page URLs. lastmod: today. changefreq: weekly for homepage and service pages, monthly for location and blog pages.

---

## Critical rules — must pass before completion

- next build exits 0
- out/ contains index.html for every route in the architecture
- Zero hardcoded phone, email, or address — all env vars
- Zero links to manodigital.agencyhandy.com or any external checkout
- Must use modern rounded corners (e.g. rounded-lg, rounded-xl, rounded-full) according to the new design
- Gradients, drop shadows, and dark mode thematic elements are encouraged
- All img tags use next/image
- FaqAccordion has zero JavaScript — pure details/summary
- ContactForm reads ?package= on mount and pre-selects option
- Footer social links only render if env var is set and non-empty
- Footer copyright reads: © 2026 PlumberWebDesign.co.uk
- All phone number instances use href="tel:03333356750"

---

## Build order

1. npx create-next-app@latest plumberwebdesign --typescript --tailwind --app --no-src-dir
2. Set output: 'export' and trailingSlash: true in next.config.ts
3. layout.tsx — fonts, metadata, GA4
4. Nav.tsx and Footer.tsx
5. Shared components: ContactForm, PricingCard, FaqAccordion, SchemaScript
6. Homepage — all 7 sections
7. /contact/
8. /plumber-website-design-packages/
9. /plumber-web-design-agency/
10. Trade pages: gas, heating, bathroom
11. /seo-for-plumbers/
12. All 6 location pages
13. /portfolio/ and /blog/
14. public/robots.txt and public/sitemap.xml
15. next build — verify out/ directory
16. Grep out/ for manodigital — confirm zero results
17. Grep out/ for hardcoded phone/email — confirm zero results
