import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: "What is Local SEO? A UK Plumber's Guide (2026)" },
  description:
    'What is local SEO? Plain-English UK plumber guide — how Map Pack rankings work, what NAP means, how to measure progress, and what to expect month-by-month.',
  alternates: {
    canonical: 'https://www.plumberwebdesign.co.uk/blog/what-is-local-seo-plumber-guide/',
  },
};

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "What is Local SEO? A UK Plumber's Guide",
    description:
      'Plain-English UK plumber guide to local SEO — how Map Pack rankings work, what NAP means, how to measure progress, and what to expect month-by-month.',
    author: authorPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: 'PlumberWebDesign.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.plumberwebdesign.co.uk/images/logo.webp' },
    },
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    mainEntityOfPage:
      'https://www.plumberwebdesign.co.uk/blog/what-is-local-seo-plumber-guide/',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is local SEO?', acceptedAnswer: { '@type': 'Answer', text: "Local SEO is the practice of optimising a website and Google Business Profile so a business ranks for location-specific searches like 'plumber near me' or 'boiler repair Manchester'. It combines on-page optimisation, citation building, review acquisition, and schema markup to win Map Pack and organic local results." } },
      { '@type': 'Question', name: 'Why is local SEO important for UK plumbers?', acceptedAnswer: { '@type': 'Answer', text: 'Over 70% of UK plumbing-related searches happen on mobile and the majority include a location modifier or imply local intent. Without local SEO a plumbing business is invisible to the bulk of paying customers who use Google to find emergency or scheduled tradespeople.' } },
      { '@type': 'Question', name: 'How long does local SEO take to work?', acceptedAnswer: { '@type': 'Answer', text: 'Smaller towns and long-tail queries (boiler service Cosham) usually rank in 2-4 months. Mid-sized city queries (plumber Manchester) take 6-12 months. Capital-city head terms (plumber London) take 12-24 months. Map Pack rankings typically lift before organic blue-link rankings.' } },
      { '@type': 'Question', name: 'What is NAP and why does it matter for local SEO?', acceptedAnswer: { '@type': 'Answer', text: 'NAP stands for Name, Address, Phone number. Google uses NAP consistency across directories (Yell, Checkatrade, FreeIndex, Google Business Profile) as a trust signal. Inconsistent NAP suppresses local rankings.' } },
      { '@type': 'Question', name: 'Can a plumber do local SEO themselves?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the fundamentals are accessible. Claim and complete your Google Business Profile, ensure consistent NAP across major UK directories, collect Google reviews, and build a website with LocalBusiness schema. Advanced work (technical SEO audits, link building, content strategy) is where most plumbers run out of time and outsource.' } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: "What is Local SEO?", href: '/blog/what-is-local-seo-plumber-guide/' },
        ]}
      />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">What is Local SEO? A UK Plumber&apos;s Guide</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 15 May 2026 · Updated 15 May 2026</time>
            <p className="text-white/60 text-sm">
              By{' '}
              <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">{AUTHOR.name}</Link>, Founder
            </p>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              Local SEO is how a UK plumber gets found on Google for searches like &quot;plumber near me&quot;,
              &quot;emergency plumber Manchester&quot;, and &quot;boiler repair Stockport&quot;. It combines four moving
              parts: a properly-optimised website, a fully-completed Google Business Profile, consistent
              NAP citations across UK directories, and ongoing review acquisition. Plumbers who get all
              four right show up in the Map Pack and the top 3 blue links. Plumbers who get three out of
              four sit on page 2 onwards.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Local SEO vs general SEO</h2>
          <p className="text-slate-blue leading-relaxed">
            General SEO is what gets Wikipedia and the BBC to rank for broad informational queries —
            massive content libraries, heavy backlink profiles, brand authority built over decades. Local
            SEO is different. It is about proving to Google that a small business is the most relevant,
            closest, and most trustworthy answer for a customer searching from a specific UK postcode.
            Different signals, different timeline, different competitive landscape.
          </p>
          <p className="text-slate-blue leading-relaxed">
            For a plumber, general SEO is irrelevant. You are not competing with Wikipedia. You are
            competing with the other six plumbers in your service area. Local SEO is the one that
            matters.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">The three pillars of local ranking</h2>
          <p className="text-slate-blue leading-relaxed">
            Google&apos;s own{' '}
            <a
              href="https://support.google.com/business/answer/7091"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Local Search ranking documentation
            </a>{' '}
            describes three pillars: relevance, distance, and prominence.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Relevance</strong> — does your business profile and website match the searcher&apos;s query? Categories on your Google Business Profile, service pages on your website, and the words used in your reviews all feed this.</li>
            <li><strong>Distance</strong> — how close are you to the searcher? Service-area businesses use the listed service areas; storefront businesses use the address. You cannot control the searcher&apos;s location but you can control how Google understands yours.</li>
            <li><strong>Prominence</strong> — how well-known is the business? Review volume, review velocity, citation count across UK directories, backlinks to your site, and overall brand mentions all contribute.</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">The Map Pack vs the blue links</h2>
          <p className="text-slate-blue leading-relaxed">
            Most local searches return two distinct sets of results. At the top, the Map Pack — three
            business listings on a small map with phone, hours, directions, and reviews. Below that, the
            organic blue links — the traditional search results. Different ranking factors win each.
          </p>
          <p className="text-slate-blue leading-relaxed">
            The Map Pack is dominated by Google Business Profile signals: completeness, photo volume,
            review count, review recency, posting frequency, and proximity to the searcher. The blue
            links are dominated by website signals: page-level relevance, schema markup, backlinks, page
            speed (
            <a
              href="https://web.dev/articles/vitals"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Core Web Vitals
            </a>
            ), and overall site authority. A plumber who only invests in one channel is leaving the
            other&apos;s traffic on the table.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Citation building for UK plumbers</h2>
          <p className="text-slate-blue leading-relaxed">
            Citations are mentions of your business across the web that include your Name, Address, and
            Phone number. They are the foundation of UK local SEO. The directories that move the needle
            for plumbers, ranked roughly by impact:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><a href="https://www.gassaferegister.co.uk/" rel="noopener" className="text-amber hover:underline">Gas Safe Register</a> — for any plumber doing gas work, non-negotiable</li>
            <li>Google Business Profile — the single biggest local ranking factor</li>
            <li>Yell — the UK&apos;s largest legacy directory; still carries weight with Google</li>
            <li>Checkatrade — high authority, trade-specific, drives direct leads</li>
            <li>TrustATrader — secondary trade directory; useful for trust signals</li>
            <li>FreeIndex — free, easy to claim, helps NAP consistency</li>
            <li>Local council and Chamber of Commerce directories — surprisingly powerful local signals</li>
            <li>Apple Maps Connect — for iPhone Siri and Maps searches</li>
            <li>Bing Places — small audience but quick win</li>
          </ol>
          <p className="text-slate-blue leading-relaxed">
            The catch: every citation must use the exact same business name, address, and phone number.
            One inconsistency (Ltd vs Limited, 0203 vs 020 3) suppresses rankings.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Reviews — the multiplier</h2>
          <p className="text-slate-blue leading-relaxed">
            Reviews directly affect Map Pack rankings. Plumbers with 50+ Google reviews materially
            outrank plumbers with 5, even when everything else is equal. More important: reviews must be
            recent. A profile with 300 reviews from three years ago will lose to a profile with 30
            reviews from the last 90 days. Recency signals an active business.
          </p>
          <p className="text-slate-blue leading-relaxed">
            The acquisition mechanic that works for plumbers: text the customer a short Google review
            link immediately after the job, while the experience is fresh. Conversion rate on
            same-day-after-job text is roughly 35-50%. Email a week later converts at 5-10%. The
            difference is meaningful.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">How to measure progress</h2>
          <p className="text-slate-blue leading-relaxed">
            Three free tools cover the entire feedback loop:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong><a href="https://search.google.com/search-console" rel="noopener" className="text-amber hover:underline">Google Search Console</a></strong> — shows organic blue-link impressions, average position, and CTR per query and per page</li>
            <li><strong>Google Business Profile Insights</strong> — shows direct calls, direction requests, and how customers found the listing (Map Pack vs direct search)</li>
            <li><strong><a href="https://www.brightlocal.com/local-search-results-checker/" rel="noopener" className="text-amber hover:underline">BrightLocal Local Search Results Checker</a></strong> — shows the actual Map Pack from any UK postcode</li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            Track impressions and call counts weekly. Look at the trend over a quarter, not week-to-week
            noise.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What a six-month local SEO plan looks like</h2>
          <p className="text-slate-blue leading-relaxed">
            <strong>Month 1:</strong> claim and fully complete Google Business Profile, audit NAP across
            the top 10 UK directories, fix inconsistencies, upload 30+ real job photos.
          </p>
          <p className="text-slate-blue leading-relaxed">
            <strong>Month 2:</strong> on-page work — service and location pages with LocalBusiness
            schema, FAQ blocks, internal linking, click-to-call. Submit sitemap to{' '}
            <a
              href="https://search.google.com/search-console"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google Search Console
            </a>
            .
          </p>
          <p className="text-slate-blue leading-relaxed">
            <strong>Month 3-4:</strong> review acquisition cadence — text after every job, target 2-4 new
            reviews per month. Weekly GBP posts with job photos.
          </p>
          <p className="text-slate-blue leading-relaxed">
            <strong>Month 5-6:</strong> measure, refine, expand content. Add new location pages for
            adjacent towns. Acquire 2-3 high-quality backlinks from trade-relevant UK sites.
          </p>
          <p className="text-slate-blue leading-relaxed">
            By month 6 most plumbers see Map Pack visibility on at least their primary town and a
            handful of long-tail queries appearing in the top 10 organic results.
          </p>

          <p className="text-slate-blue leading-relaxed">
            Local SEO is not a one-time fix. It is a 12-24 month compounding investment that pays back
            many times over once rankings mature. Done right, it becomes the single largest source of
            booked work for a UK plumbing business. See the full{' '}
            <Link href="/seo-for-plumbers/" className="text-amber hover:underline">
              SEO for plumbers
            </Link>{' '}
            service if you want this handled for you.
          </p>

          <RelatedLinks keys={['seo', 'home', 'blogGBP', 'blogRank', 'cost', 'packages']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
