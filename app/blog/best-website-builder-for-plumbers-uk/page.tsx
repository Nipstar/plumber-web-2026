import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'Best Website Builder for UK Plumbers (2026 Comparison)' },
  description:
    'Wix vs Squarespace vs WordPress vs managed builds for UK plumbers. Real comparison of cost, SEO, speed, and ease across 6 options. No affiliate spin.',
  alternates: {
    canonical:
      'https://www.plumberwebdesign.co.uk/blog/best-website-builder-for-plumbers-uk/',
  },
};

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Website Builder for UK Plumbers (2026 Comparison)',
    description:
      'Honest UK comparison of website builders for plumbers — Wix, Squarespace, WordPress, GoDaddy, and managed alternatives.',
    author: authorPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: 'PlumberWebDesign.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.plumberwebdesign.co.uk/images/logo.webp' },
    },
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    mainEntityOfPage:
      'https://www.plumberwebdesign.co.uk/blog/best-website-builder-for-plumbers-uk/',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the best website builder for UK plumbers?', acceptedAnswer: { '@type': 'Answer', text: 'For UK plumbers who want to rank locally on Google, a managed Next.js or WordPress site outperforms drag-and-drop builders like Wix and Squarespace. Drag-and-drop builders work technically but rarely rank because they ship with generic templates, weak local SEO, and limited schema support. Most growing UK plumbers move off Wix/Squarespace within 18 months.' } },
      { '@type': 'Question', name: 'Can a plumber rank on Google using Wix or Squarespace?', acceptedAnswer: { '@type': 'Answer', text: 'Possible but rare. Wix and Squarespace handle basic on-page SEO but ship with generic themes, slow mobile speed, weak schema markup, and limited customisation for trade-specific layouts. Most page-1 UK plumber sites use WordPress, custom-built Next.js, or specialist plumber-focused agencies — not drag-and-drop builders.' } },
      { '@type': 'Question', name: 'What is the cheapest way to get a plumber website?', acceptedAnswer: { '@type': 'Answer', text: 'Cheapest entry: GoDaddy Website Builder at £8-£14/month. Realistically usable: Wix or Squarespace at £15-£40/month. Best value over 24 months including hosting, SEO, and updates: a managed plumber website package at £99-£249/month including everything. DIY templates look cheaper but cost more in time spent on SEO and updates.' } }
    ]
  };

  const builders = [
    { name: 'Wix', price: '£15-£40/mo', seoScore: '5/10', speedScore: '6/10', proSkills: 'Low', verdict: 'Easy to launch, hard to rank. Generic themes, weak schema. Plumber-specific local SEO requires manual work and rarely matches purpose-built alternatives.' },
    { name: 'Squarespace', price: '£15-£36/mo', seoScore: '5/10', speedScore: '6/10', proSkills: 'Low', verdict: 'Slightly nicer design defaults than Wix but identical SEO ceiling. Limited schema customisation. Templates feel premium but rank like everyone else using the same templates.' },
    { name: 'GoDaddy Website Builder', price: '£8-£14/mo', seoScore: '3/10', speedScore: '4/10', proSkills: 'Low', verdict: 'Cheapest entry but worst SEO foundation. Slow, limited customisation, ad-laden during trial. Avoid for a serious plumbing business.' },
    { name: 'WordPress + Astra/GeneratePress', price: '£100-£300/yr hosting + £0-£200 theme', seoScore: '8/10', speedScore: '7/10', proSkills: 'Medium', verdict: 'Massive flexibility, strong SEO if configured correctly. Requires plugin discipline (Yoast SEO + Schema Pro + WP Rocket). Best for plumbers who want full control and have technical patience.' },
    { name: 'Custom Next.js / managed agency', price: '£99-£249/mo all-in', seoScore: '9/10', speedScore: '10/10', proSkills: 'None (managed)', verdict: 'Highest performance ceiling. Static export with Core Web Vitals consistently green, full schema control, dedicated location pages built from a template engine. Best for plumbers who want to focus on plumbing, not webmastering.' },
    { name: 'Shopify', price: '£25-£300/mo', seoScore: '7/10', speedScore: '7/10', proSkills: 'Medium', verdict: 'E-commerce focused. Only relevant if you sell parts or installation kits direct to consumers. Overkill and over-priced for a pure-service plumbing business.' },
  ];

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: 'Best Website Builder for UK Plumbers', href: '/blog/best-website-builder-for-plumbers-uk/' },
        ]}
      />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Best Website Builder for UK Plumbers (2026)</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 15 May 2026 · Updated 15 May 2026</time>
            <p className="text-white/60 text-sm">By <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">{AUTHOR.name}</Link>, Founder</p>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              For UK plumbers serious about ranking locally on Google, a managed Next.js build or a
              well-configured WordPress install outperforms drag-and-drop builders (Wix, Squarespace,
              GoDaddy). Drag-and-drop builders ship templates that load slowly, lack proper local SEO
              foundations, and rarely make page 1. Disclosure: this site is a managed Next.js build —
              this article tries to be objective but the author has skin in the game.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Disclosure</h2>
          <p className="text-slate-blue leading-relaxed">
            PlumberWebDesign.co.uk runs on Next.js, the stack we recommend at the bottom of this
            comparison. The analysis below tries to be honest about each platform&apos;s genuine
            strengths — Wix and Squarespace are excellent at certain things — but the conclusion is not
            neutral. Use this as one input among several when choosing a stack.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What plumbers should be measuring</h2>
          <p className="text-slate-blue leading-relaxed">
            Most builder comparisons rank on look-and-feel. That is the wrong metric for a plumbing
            business. A plumber website succeeds or fails on five specific dimensions:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Mobile load speed</strong> — under 2 seconds, all{' '}
              <a
                href="https://web.dev/articles/vitals"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Core Web Vitals
              </a>{' '}
              green
            </li>
            <li><strong>Schema markup support</strong> — LocalBusiness, FAQPage, Service, BreadcrumbList. Validated via{' '}
              <a href="https://search.google.com/test/rich-results" rel="noopener" className="text-amber hover:underline">Rich Results Test</a>
            </li>
            <li><strong>Local SEO foundations</strong> — service pages, location pages, internal linking, customisable URLs</li>
            <li><strong>Conversion mechanics</strong> — sticky click-to-call, short forms, trust strip in hero</li>
            <li><strong>Total cost over 24 months</strong> — including hosting, SEO, content, and the time you spend maintaining it</li>
          </ol>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Comparison table</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-blue/10 p-4 my-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left bg-navy-card text-white">
                  <th className="px-3 py-2">Builder</th>
                  <th className="px-3 py-2">Price</th>
                  <th className="px-3 py-2">SEO</th>
                  <th className="px-3 py-2">Speed</th>
                  <th className="px-3 py-2">Skill</th>
                </tr>
              </thead>
              <tbody>
                {builders.map((b) => (
                  <tr key={b.name} className="border-b border-slate-blue/10">
                    <td className="px-3 py-3 font-bold text-navy-dark">{b.name}</td>
                    <td className="px-3 py-3 text-slate-blue">{b.price}</td>
                    <td className="px-3 py-3 text-slate-blue">{b.seoScore}</td>
                    <td className="px-3 py-3 text-slate-blue">{b.speedScore}</td>
                    <td className="px-3 py-3 text-slate-blue">{b.proSkills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {builders.map((b) => (
            <div key={b.name} className="bg-white border border-slate-blue/10 rounded-2xl p-6 my-4">
              <h3 className="text-xl font-display font-bold text-navy-dark mb-2">{b.name}</h3>
              <p className="text-sm text-slate-blue/70 mb-3">{b.price} · SEO {b.seoScore} · Speed {b.speedScore} · Required skill: {b.proSkills}</p>
              <p className="text-slate-blue mb-0">{b.verdict}</p>
            </div>
          ))}

          <h2 className="text-2xl font-display font-bold text-navy-dark">What to pick by stage</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Brand-new solo plumber, sub-£40k revenue, technical patience:</strong> WordPress + GeneratePress + Yoast SEO. Cheap, learnable, future-proof.</li>
            <li><strong>Brand-new solo plumber, no technical patience:</strong> managed Apprentice tier (£99/month all-in including hosting, SEO, GBP setup, support)</li>
            <li><strong>Established plumber on a tired Wix or Squarespace site:</strong> migrate to managed Journeyman tier. The migration usually pays for itself within 6 months in extra bookings</li>
            <li><strong>Multi-van plumbing business with in-house marketing:</strong> WordPress with a developer on retainer, or custom Next.js if budget allows</li>
            <li><strong>Plumber who already ranks page 1 and just needs maintenance:</strong> stay on whatever you have. Do not break what works</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">The 24-month total cost reality</h2>
          <p className="text-slate-blue leading-relaxed">
            Builders look cheaper than they are. A &quot;£18/month&quot; Wix site is £432 over 24 months — but does
            not include local SEO, content updates, ongoing maintenance, or your time learning the
            platform. Realistic 24-month totals for a UK plumber:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>DIY Wix/Squarespace</strong> — £432-£960 software + £2,000-£5,000 of your time at hourly rates = £2,432-£5,960</li>
            <li><strong>WordPress with hosting + plugins</strong> — £400-£800 + £1,000-£3,000 of time = £1,400-£3,800</li>
            <li><strong>One-off custom build £3,000 + hosting/SEO</strong> — £3,000 build + £1,000-£2,000 hosting/SEO over 24 months = £4,000-£5,000</li>
            <li><strong>Managed monthly £99-£249/month</strong> — £2,376-£5,976 over 24 months, everything included, zero of your time</li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            The right pick depends on whether your hourly rate as a plumber is higher than your hourly
            rate as an amateur webmaster. For most plumbers, it is.
          </p>

          <p className="text-slate-blue leading-relaxed">
            Full pricing breakdown: see the{' '}
            <Link href="/plumber-website-cost/" className="text-amber hover:underline">
              plumber website cost guide
            </Link>{' '}
            for year-by-year totals across every option above.
          </p>

          <RelatedLinks keys={['cost', 'home', 'packages', 'blogInclude', 'blogRank', 'seo']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
