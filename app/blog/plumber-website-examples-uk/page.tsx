import Link from 'next/link';
import Image from 'next/image';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'UK Plumber Website Examples — What Works in 2026' },
  description:
    'Plumber website examples from UK plumbing businesses ranking on page 1 of Google. What they share, what to copy, and what to avoid.',
  alternates: {
    canonical: 'https://www.plumberwebdesign.co.uk/blog/plumber-website-examples-uk/',
  },
};

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UK Plumber Website Examples — What Works in 2026',
    description:
      'What the top-ranking UK plumber websites share — design patterns, conversion mechanics, and SEO foundations.',
    author: authorPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: 'PlumberWebDesign.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.plumberwebdesign.co.uk/images/logo.webp' },
    },
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    mainEntityOfPage: 'https://www.plumberwebdesign.co.uk/blog/plumber-website-examples-uk/',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What makes a good plumber website?', acceptedAnswer: { '@type': 'Answer', text: 'A good plumber website loads in under 2 seconds on mobile, displays Gas Safe and trade credentials above the fold, has dedicated pages for each service and location served, integrates with Google Business Profile, captures leads via 3-field contact forms, and uses LocalBusiness schema markup. Aesthetics matter less than mobile speed and clear booking flows.' } },
      { '@type': 'Question', name: 'Can a plumber use a template website?', acceptedAnswer: { '@type': 'Answer', text: 'Templates technically work but rarely rank. Wix, Squarespace, and GoDaddy templates ship with generic content, weak local SEO, poor schema, and shared themes. A managed plumber website on Next.js or similar modern stack typically outranks template sites within 6 months because the underlying SEO foundations are stronger.' } },
      { '@type': 'Question', name: 'Should a plumber website show prices?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — show price ranges, not fixed prices. Customers researching for plumbing work want to qualify themselves out of the wrong tier. Publish ranges (e.g. emergency call-out £85-£125 first hour, boiler service £85-£135, combi installation £2,200-£3,800) with a "final price depends on survey" disclaimer.' } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: 'UK Plumber Website Examples', href: '/blog/plumber-website-examples-uk/' },
        ]}
      />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">UK Plumber Website Examples — What Works in 2026</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 15 May 2026 · Updated 15 May 2026</time>
            <p className="text-white/60 text-sm">By <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">{AUTHOR.name}</Link>, Founder</p>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <div className="relative w-full h-[400px] sm:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-lg border border-slate-blue/10">
            <Image
              src="/images/blog/website_examples.webp"
              alt="Laptop and mobile screens displaying premium plumber website layouts"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              The UK plumber websites ranking page 1 of Google in 2026 share six patterns: mobile load
              under 2 seconds, click-to-call above the fold, Gas Safe credentials prominently displayed,
              dedicated landing pages per service and per town, real project photos (not stock), and
              published price ranges. Visual design varies wildly. SEO foundations do not.
            </p>
          </div>

          <p className="text-slate-blue leading-relaxed">
            Rather than name specific competitor sites (which date quickly and become awkward), this guide
            describes the patterns that top-ranking UK plumber websites share — and the patterns the
            plumbers stuck on page 4 keep repeating. Use it as a checklist when commissioning a new site
            or auditing your current one.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 1 — Click-to-call above the fold</h2>
          <p className="text-slate-blue leading-relaxed">
            Every top-ranking UK plumber site we have audited shows a tappable phone number in the header
            on mobile, visible without scrolling. The button is typically a contrasting colour (amber,
            red, green) and large enough to tap with a thumb. Underperforming sites bury the phone number
            in a contact page footer.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 2 — Gas Safe credentials in the hero</h2>
          <p className="text-slate-blue leading-relaxed">
            Plumbers winning on trust display their{' '}
            <a
              href="https://www.gassaferegister.co.uk/help-and-advice/why-the-gas-safe-register-matters/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Gas Safe Register
            </a>{' '}
            number (or membership badge) in the hero section. Same goes for{' '}
            <a href="https://www.watersafe.org.uk/" rel="noopener" className="text-amber hover:underline">WaterSafe</a>,{' '}
            <a href="https://www.ciphe.org.uk/" rel="noopener" className="text-amber hover:underline">CIPHE</a>, and
            Worcester Bosch / Vaillant manufacturer accreditation badges. These are not vanity items —
            they are the visual difference between a credible website and a cowboy-front.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 3 — One page per service</h2>
          <p className="text-slate-blue leading-relaxed">
            Boiler installation, boiler repair, central heating, bathroom fitting, emergency plumbing,
            drain unblocking, power flushing, Gas Safe certificates — each gets its own dedicated page.
            Each page targets its own keyword cluster. Underperforming sites have a single &quot;Services&quot;
            page listing everything in bullet points; Google cannot rank a bullet point.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 4 — One page per town</h2>
          <p className="text-slate-blue leading-relaxed">
            Top-ranking sites have explicit location pages: &quot;Plumber in Stockport&quot;, &quot;Plumber in Salford&quot;,
            &quot;Plumber in Bolton&quot;. Each page mentions the town in the H1, title tag, meta description, and
            body content. Often includes specific local landmarks, postcodes covered, and an embedded
            Google Map. This is how a single plumbing business can dominate &quot;plumber [city]&quot; searches
            across an entire metro area.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 5 — Real project photos, not stock</h2>
          <p className="text-slate-blue leading-relaxed">
            Customers can spot stock photography from 20 yards. Every top-ranking plumber site uses real
            photos from real jobs — installed boilers, freshly-piped bathrooms, neat manifolds, branded
            vans on actual streets. Properties get blurred where needed for privacy. Quality matters less
            than authenticity.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 6 — Published price ranges</h2>
          <p className="text-slate-blue leading-relaxed">
            Customers Googling for plumbing work want to qualify themselves out of the wrong tier. The
            top-ranking sites publish ranges (&quot;Emergency call-out £85-£125 first hour&quot;, &quot;Combi boiler
            installation £2,200-£3,800&quot;) with a clear &quot;final pricing depends on survey&quot; disclaimer. This
            pre-qualifies high-value customers and filters time-wasters before they hit your phone.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pattern 7 — Trust strip on every page</h2>
          <p className="text-slate-blue leading-relaxed">
            Above the fold or just below it: a small horizontal strip showing Gas Safe, Worcester Bosch
            accreditation, CIPHE, WaterSafe, Which? Trusted Trader, Trustpilot rating. Five badges
            maximum — more becomes noise. Each badge links to the verifying authority (Gas Safe Register
            lookup, Trustpilot profile, etc).
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What underperforming plumber websites keep doing</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Hidden phone number.</strong> Buried in a footer, requires scrolling on mobile</li>
            <li><strong>Generic Services page.</strong> One page listing 12 services in bullets, none of them ranking</li>
            <li><strong>Stock photos.</strong> Same blue-overall plumber that 50 other sites use</li>
            <li><strong>Wix/Squarespace defaults.</strong> Theme leftovers, &quot;Lorem ipsum&quot; still visible, broken contact forms</li>
            <li><strong>Six-field contact form.</strong> Name, email, phone, address, urgency, photos, budget — kills conversion</li>
            <li><strong>No schema markup.</strong> Validated via{' '}
              <a href="https://search.google.com/test/rich-results" rel="noopener" className="text-amber hover:underline">Google Rich Results Test</a> — most underperforming sites fail
            </li>
            <li><strong>Auto-playing video in the hero.</strong> Tanks Core Web Vitals on mobile</li>
            <li><strong>Live chat widget that nobody answers.</strong> &quot;We&apos;re offline — leave a message&quot; is worse than no chat at all</li>
            <li><strong>&quot;We cover the surrounding area&quot;.</strong> Google cannot rank a vague catchment</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Visual design — surprising honesty</h2>
          <p className="text-slate-blue leading-relaxed">
            The visual quality of the top-ranking UK plumber sites varies enormously. Some look genuinely
            premium — dark hero, bold typography, branded illustrations. Some look plain — small logo,
            navy navigation, white background, no animations. Google rewards both equally. What matters
            is the underlying technical foundation: speed, schema, structure, trust signals, location
            specificity. Pretty design is a bonus, not a requirement. Mobile speed under 2 seconds is the
            requirement.
          </p>

          <p className="text-slate-blue leading-relaxed">
            If you want a site built around all seven patterns by default, that is what every{' '}
            <Link href="/plumber-website-design-packages/" className="text-amber hover:underline">
              plumber website package
            </Link>{' '}
            on this site delivers. Or read the full{' '}
            <Link href="/blog/what-should-plumber-website-include/" className="text-amber hover:underline">
              what should a plumber website include in 2026
            </Link>{' '}
            checklist.
          </p>

          <RelatedLinks keys={['home', 'cost', 'packages', 'blogInclude', 'blogRank', 'seo']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
