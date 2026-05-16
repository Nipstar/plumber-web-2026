import Link from 'next/link';
import Image from 'next/image';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'The 2026 Plumber SEO Checklist (UK)' },
  description:
    'The complete UK plumber SEO checklist for 2026 — 37 items across technical, on-page, local, and content SEO. Free, no signup, ranked by impact and effort.',
  alternates: {
    canonical: 'https://www.plumberwebdesign.co.uk/blog/plumber-seo-checklist-2026/',
  },
};

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The 2026 Plumber SEO Checklist (UK)',
    description:
      'Complete UK plumber SEO checklist — 37 items across technical, on-page, local, and content SEO, ranked by impact and effort.',
    author: authorPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: 'PlumberWebDesign.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.plumberwebdesign.co.uk/images/logo.webp' },
    },
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    mainEntityOfPage:
      'https://www.plumberwebdesign.co.uk/blog/plumber-seo-checklist-2026/',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is on a plumber SEO checklist?', acceptedAnswer: { '@type': 'Answer', text: 'A plumber SEO checklist covers technical SEO (Core Web Vitals, schema, mobile speed), on-page SEO (titles, descriptions, headings, internal linking), local SEO (Google Business Profile, NAP citations, reviews), and content SEO (service pages, location pages, blog content). The 2026 version totals 37 items, ranked by impact and effort.' } },
      { '@type': 'Question', name: 'How long does it take to work through a plumber SEO checklist?', acceptedAnswer: { '@type': 'Answer', text: 'A solo plumber working evenings can complete the high-impact items in 2-3 weekends. A full audit and fix across all 37 items typically takes 30-50 hours of work, spread over 4-8 weeks. Most of the time is in content writing for service and location pages, not the technical fixes.' } },
      { '@type': 'Question', name: 'Which items have the highest ROI?', acceptedAnswer: { '@type': 'Answer', text: 'Top five by impact: 1) Fully complete Google Business Profile with 30+ photos, 2) Consistent NAP citations across top 10 UK directories, 3) LocalBusiness JSON-LD schema on every page, 4) Mobile load speed under 2 seconds, 5) Review acquisition cadence (2-4 new Google reviews per month).' } }
    ]
  };

  const checklist = [
    {
      cat: 'Technical SEO',
      items: [
        { t: 'HTTPS enabled with valid SSL certificate', impact: 'High', effort: 'Low' },
        { t: 'Mobile page load under 2 seconds', impact: 'High', effort: 'Med' },
        { t: 'Core Web Vitals — LCP, INP, CLS all green', impact: 'High', effort: 'Med' },
        { t: 'XML sitemap submitted to Google Search Console', impact: 'High', effort: 'Low' },
        { t: 'robots.txt allows all major crawlers including AI bots', impact: 'Med', effort: 'Low' },
        { t: 'Canonical tags on every page', impact: 'Med', effort: 'Low' },
        { t: 'No broken internal links (404s)', impact: 'Med', effort: 'Low' },
        { t: 'Schema markup validated via Rich Results Test', impact: 'High', effort: 'Med' },
      ],
    },
    {
      cat: 'On-page SEO',
      items: [
        { t: 'Unique title tag on every page (under 60 characters)', impact: 'High', effort: 'Low' },
        { t: 'Meta description on every page (150-160 characters)', impact: 'High', effort: 'Low' },
        { t: 'Single H1 per page with primary keyword', impact: 'High', effort: 'Low' },
        { t: 'Logical H2/H3 hierarchy', impact: 'Med', effort: 'Low' },
        { t: 'All images have descriptive alt text', impact: 'Med', effort: 'Med' },
        { t: 'URLs short, descriptive, hyphenated', impact: 'Med', effort: 'Low' },
        { t: 'Internal links with descriptive anchor text', impact: 'High', effort: 'Med' },
        { t: 'No keyword-stuffing in headings or body', impact: 'Med', effort: 'Low' },
      ],
    },
    {
      cat: 'Local SEO',
      items: [
        { t: 'Google Business Profile claimed and verified', impact: 'High', effort: 'Low' },
        { t: 'GBP primary category = "Plumber" (or equivalent)', impact: 'High', effort: 'Low' },
        { t: 'GBP service area set to specific UK towns and postcodes', impact: 'High', effort: 'Low' },
        { t: '30+ photos uploaded to GBP', impact: 'High', effort: 'Med' },
        { t: 'Weekly GBP posts with completed-job photos', impact: 'High', effort: 'Med' },
        { t: 'NAP consistent across top 10 UK directories', impact: 'High', effort: 'Med' },
        { t: 'LocalBusiness JSON-LD schema with correct address', impact: 'High', effort: 'Low' },
        { t: 'Dedicated landing page for every town served', impact: 'High', effort: 'High' },
        { t: 'Review acquisition cadence — 2-4 new reviews per month', impact: 'High', effort: 'Med' },
        { t: 'Every review responded to within 7 days', impact: 'Med', effort: 'Low' },
        { t: 'GBP Q&A seeded with common customer questions', impact: 'Low', effort: 'Low' },
      ],
    },
    {
      cat: 'Content SEO',
      items: [
        { t: 'Dedicated page per service (boiler install, repair, gas safety, drains, etc)', impact: 'High', effort: 'High' },
        { t: 'FAQ section on every commercial page with FAQPage schema', impact: 'High', effort: 'Med' },
        { t: 'Direct-answer block in first 100 words on key pages', impact: 'Med', effort: 'Low' },
        { t: 'Named author with bio on all blog content', impact: 'Med', effort: 'Low' },
        { t: 'External citations to authority sources (Gas Safe, gov.uk, ONS)', impact: 'Med', effort: 'Med' },
        { t: 'Blog publishing cadence — 1-2 posts per month minimum', impact: 'Med', effort: 'High' },
        { t: 'dateModified updated on revised content', impact: 'Low', effort: 'Low' },
        { t: 'Service pages 800+ words; blog posts 1,500+ words', impact: 'Med', effort: 'High' },
        { t: 'Original visuals (charts, diagrams) not stock photos', impact: 'Low', effort: 'Med' },
        { t: 'llms.txt file present for AI search visibility', impact: 'Low', effort: 'Low' },
      ],
    },
  ];

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: 'Plumber SEO Checklist 2026', href: '/blog/plumber-seo-checklist-2026/' },
        ]}
      />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">The 2026 Plumber SEO Checklist (UK)</h1>
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
              src="/images/blog/seo_checklist.webp"
              alt="A digital tablet showing an SEO checklist next to plumbing tools"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              37 ranked items across technical, on-page, local, and content SEO. Designed for UK plumbers,
              gas engineers, heating engineers, and bathroom fitters. Each item tagged with impact
              (High/Med/Low) and effort (Low/Med/High). Work through high-impact, low-effort items first.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">How to use this checklist</h2>
          <p className="text-slate-blue leading-relaxed">
            Print it out or copy it into a spreadsheet. Tick off the high-impact / low-effort items
            first — these typically take a single weekend and move rankings in 4-8 weeks. The
            high-impact / high-effort items (location pages, service pages, content) are where most
            plumbers stall. Block out dedicated time or delegate to an agency.
          </p>
          <p className="text-slate-blue leading-relaxed">
            Where an item is technical and unfamiliar (schema markup, Core Web Vitals, sitemap
            submission), use{' '}
            <a href="https://search.google.com/test/rich-results" rel="noopener" className="text-amber hover:underline">Google&apos;s Rich Results Test</a>,{' '}
            <a href="https://pagespeed.web.dev/" rel="noopener" className="text-amber hover:underline">PageSpeed Insights</a>, and{' '}
            <a href="https://search.google.com/search-console" rel="noopener" className="text-amber hover:underline">Google Search Console</a>{' '}
            — all free, all official.
          </p>

          {checklist.map((section) => (
            <div key={section.cat} className="bg-white border border-slate-blue/10 rounded-2xl p-6 my-8">
              <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">{section.cat}</h2>
              <ul className="space-y-3">
                {section.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-blue">
                    <input type="checkbox" className="mt-1.5 flex-shrink-0" aria-label="check off" readOnly />
                    <span className="flex-1">
                      <span>{it.t}</span>{' '}
                      <span className="text-xs bg-amber/20 text-amber font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ml-1">
                        {it.impact}
                      </span>
                      <span className="text-xs bg-slate-blue/10 text-slate-blue font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ml-1">
                        {it.effort} effort
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="text-2xl font-display font-bold text-navy-dark">Top 5 by ROI</h2>
          <ol className="list-decimal pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>Fully complete Google Business Profile with 30+ photos</li>
            <li>Consistent NAP across the top 10 UK directories (start with Gas Safe Register, Yell, Checkatrade)</li>
            <li>LocalBusiness JSON-LD schema on every page (validated via Rich Results Test)</li>
            <li>Mobile load speed under 2 seconds (compress images, lazy-load below the fold)</li>
            <li>Review acquisition cadence — text customers a Google review link immediately after each job</li>
          </ol>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What to skip in 2026</h2>
          <p className="text-slate-blue leading-relaxed">
            Three items that used to feature on plumber SEO checklists no longer move the needle:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Meta keywords tag</strong> — ignored by Google since 2009</li>
            <li><strong>Mass directory submission services</strong> — Google devalues low-quality directories; stick to the top 10</li>
            <li><strong>Exact-match domains</strong> — domains like &quot;plumberlondon.co.uk&quot; no longer get automatic ranking boost; quality of content matters more</li>
          </ul>

          <p className="text-slate-blue leading-relaxed">
            If 37 items feels overwhelming, the{' '}
            <Link href="/seo-for-plumbers/" className="text-amber hover:underline">
              SEO for plumbers
            </Link>{' '}
            service implements all 37 as part of the Journeyman and Master website packages.
          </p>

          <RelatedLinks keys={['seo', 'home', 'blogGBP', 'blogRank', 'cost', 'packages']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
