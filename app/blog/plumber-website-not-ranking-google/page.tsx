import Link from 'next/link';
import Image from 'next/image';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: "Why Your Plumber Website Isn't Ranking | PlumberWebDesign" },
  description: "Not seeing your plumber website on page one? Six common local SEO mistakes plumbers make and the quick wins you can implement today to start ranking on Google.",
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/blog/plumber-website-not-ranking-google/' },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)",
    "description": "Not seeing your plumbing website on page one? Learn the most common local SEO mistakes plumbers make and the quick wins you can implement today.",
    "author": authorPersonSchema(),
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-03-15",
    "dateModified": "2026-05-15",
    "mainEntityOfPage": "https://www.plumberwebdesign.co.uk/blog/plumber-website-not-ranking-google/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why is my plumber website not ranking on Google?", "acceptedAnswer": { "@type": "Answer", "text": "The most common reasons are: missing local signals (no location pages or city-specific content), incomplete Google Business Profile, too few reviews, slow mobile site, no dedicated service pages, and inconsistent NAP data across directories. Fix these six and rankings typically improve within 6-12 weeks." } },
      { "@type": "Question", "name": "How long does it take a plumber website to rank?", "acceptedAnswer": { "@type": "Answer", "text": "A new plumber website with proper local SEO foundations typically takes 3-6 months to rank on page one for moderately competitive local queries. Established sites with poor SEO can see improvements in 6-12 weeks after fixes are applied." } },
      { "@type": "Question", "name": "Does my Google Business Profile affect my website ranking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Business Profile signals contribute to local pack rankings and indirectly support organic web rankings. A complete, active GBP with regular posts, photos, and reviews boosts both Map Pack visibility and website authority." } },
      { "@type": "Question", "name": "What is NAP and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "NAP stands for Name, Address, Phone number. Google uses NAP consistency across directories (Yell, Checkatrade, FreeIndex, GBP) as a trust signal. Inconsistent NAP data confuses Google and suppresses local rankings." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog/' },
        { label: "Why Your Plumber Website Isn't Ranking", href: '/blog/plumber-website-not-ranking-google/' }
      ]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 15 March 2026 · Updated 15 May 2026</time>
            <p className="text-white/60 text-sm">
              By{' '}
              <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">
                {AUTHOR.name}
              </Link>
              , Founder
            </p>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <div className="relative w-full h-[400px] sm:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-lg border border-slate-blue/10">
            <Image
              src="/images/blog/not_ranking.webp"
              alt="Red and green trend line graph on a monitor with a wrench adjusting a gear"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <p className="text-lg text-slate-blue leading-relaxed">
            You have invested in a website, maybe even paid a general web designer a decent fee for it. But when you search "plumber near me" or "emergency plumber" followed by your town, you are nowhere to be found. Meanwhile, your competitor with the worse-looking site is sitting in the top three. What is going on?
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">1. Your site has no local signals</h2>
          <p className="text-slate-blue leading-relaxed">
            Google needs explicit proof of where you operate. If your website just says "we cover the local
            area" without naming specific towns, postcodes, or neighbourhoods, Google has no way to connect
            your site to local searches.{' '}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google&apos;s own Search Central documentation
            </a>{' '}
            recommends LocalBusiness schema with explicit `areaServed` and `address` properties to
            disambiguate service areas. The fix is straightforward: create dedicated location pages for
            every area you serve. Each page should include the town name in the H1, title tag, meta
            description, and body content. Add your full address and embed a Google Map if you have a
            physical premises.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">2. Missing or incomplete Google Business Profile</h2>
          <p className="text-slate-blue leading-relaxed">
            Your Google Business Profile (GBP) is arguably more important than your website for local rankings. If you haven't claimed it, or if it's half-filled with a blurry logo and no opening hours, you are handing the Map Pack to your competitors. Fill in every single field. Upload at least 10 high-quality photos of your work. Choose the correct primary category ("Plumber") and add secondary categories for your other services. Post weekly updates — Google rewards active profiles.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">3. No reviews (or too few)</h2>
          <p className="text-slate-blue leading-relaxed">
            Reviews are one of the strongest ranking signals for local SEO. If you have 3 reviews and your competitor has 47, Google views them as the more trusted business. The solution isn't complicated: after every successful job, send the customer a direct link to your Google review page. Make it easy. A simple text message with a short link converts far better than an email request three days later. Aim for consistency — 2-3 new reviews per month is a solid target for most local plumbing businesses.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">4. Slow, mobile-unfriendly website</h2>
          <p className="text-slate-blue leading-relaxed">
            Over 70% of plumbing-related searches happen on mobile. If your site takes more than 3 seconds
            to load or forces users to pinch and zoom, Google will deprioritise it. Run your site through{' '}
            <a
              href="https://pagespeed.web.dev/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google PageSpeed Insights
            </a>{' '}
            and check the three{' '}
            <a
              href="https://web.dev/articles/vitals"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Core Web Vitals
            </a>{' '}
            metrics: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. If
            you score below 80 on mobile, you have a problem. The usual culprits are uncompressed images,
            render-blocking JavaScript, and cheap shared hosting. A purpose-built plumber website on
            modern hosting should score 90+ consistently.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">5. No service-specific pages</h2>
          <p className="text-slate-blue leading-relaxed">
            A single "Services" page listing everything you do is a missed opportunity. Google ranks individual pages, not websites. If you want to rank for "boiler installation Manchester," you need a dedicated page targeting that exact phrase. Break your services out: boiler installation, boiler repair, central heating, bathroom fitting, emergency plumbing, gas safety certificates. Each page should have unique content explaining that specific service, not just a paragraph copied from the main services list.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">6. Inconsistent NAP data</h2>
          <p className="text-slate-blue leading-relaxed">
            NAP stands for Name, Address, and Phone number. If your business name is "J. Smith Plumbing" on
            your website but "J Smith Plumbing Ltd" on Yell and "John Smith Plumber" on Checkatrade, Google
            gets confused. Consistency matters. The exact business name registered at{' '}
            <a
              href="https://www.gov.uk/government/organisations/companies-house"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Companies House
            </a>{' '}
            should match your website, GBP, and every directory. Audit every directory listing you can find
            and ensure your NAP is identical everywhere. This includes Yell, Thomson, Checkatrade,
            TrustATrader, FreeIndex, and any local directories.
          </p>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-8 my-8">
            <h3 className="font-display font-bold text-navy-dark text-xl mb-4">The quick-win checklist</h3>
            <ul className="space-y-3 text-slate-blue">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Claim and fully complete your Google Business Profile
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Create a dedicated page for each service you offer
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Create location pages for every town you serve
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Start collecting Google reviews after every job
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Audit and fix your NAP across all directories
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">How long should you wait before assuming SEO isn&apos;t working?</h2>
          <p className="text-slate-blue leading-relaxed">
            The most common mistake plumbers make is calling SEO a failure too early. A new website with
            no prior domain authority typically takes 3-6 months to ramp up for moderate local terms, and
            9-18 months for competitive city-wide queries like &quot;plumber London&quot; or &quot;boiler repair
            Manchester&quot;. If you are 8 weeks in and not seeing top-3 results, that is normal — not broken.
          </p>
          <p className="text-slate-blue leading-relaxed">
            What you should see in the first 6-8 weeks is a steady upward trend in{' '}
            <a
              href="https://search.google.com/search-console"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google Search Console
            </a>{' '}
            impressions for your target queries. If impressions are still flat at week 8, that is the
            signal that something is genuinely wrong — usually one of the six issues above, or a deeper
            indexation problem. If impressions are climbing but clicks are not, the issue is CTR (meta
            descriptions and snippet competition), not rankings.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Tools to diagnose ranking problems yourself</h2>
          <p className="text-slate-blue leading-relaxed">
            Before paying anyone for an audit, run through this free toolkit:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>
              <strong>
                <a
                  href="https://search.google.com/search-console"
                  rel="noopener"
                  className="text-amber hover:underline"
                >
                  Google Search Console
                </a>
              </strong>{' '}
              — shows which queries you appear for, average position, click-through rate, and impressions.
              The Performance report tells you exactly where the gap is: rankings, snippets, or both.
            </li>
            <li>
              <strong>
                <a
                  href="https://pagespeed.web.dev/"
                  rel="noopener"
                  className="text-amber hover:underline"
                >
                  PageSpeed Insights
                </a>
              </strong>{' '}
              — scores your mobile load speed and{' '}
              <a
                href="https://web.dev/articles/vitals"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Core Web Vitals
              </a>
              . Score under 80 on mobile = ranking handicap.
            </li>
            <li>
              <strong>
                <a
                  href="https://www.brightlocal.com/local-search-results-checker/"
                  rel="noopener"
                  className="text-amber hover:underline"
                >
                  BrightLocal Local Search Results Checker
                </a>
              </strong>{' '}
              — shows the actual Map Pack from any UK postcode without the personalisation that distorts
              your own searches.
            </li>
            <li>
              <strong>
                <a
                  href="https://search.google.com/test/rich-results"
                  rel="noopener"
                  className="text-amber hover:underline"
                >
                  Rich Results Test
                </a>
              </strong>{' '}
              — verifies your LocalBusiness, FAQPage, and Service schema renders correctly. Broken schema
              means missed rich-result opportunities.
            </li>
            <li>
              <strong>incognito Chrome window</strong> — run your target queries from incognito on a phone
              network (not WiFi). This shows roughly what a real searcher sees, without your personalised
              browsing history influencing results.
            </li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">When a rebuild beats more SEO work</h2>
          <p className="text-slate-blue leading-relaxed">
            Sometimes the problem is not the SEO — it is the site itself. If your existing plumber website
            was built on Wix or Squarespace with no proper schema, no service-specific pages, and a poorly
            structured navigation, adding more SEO work is putting paint on rotten wood. The honest test:
            run your site through PageSpeed Insights, check the rendered HTML for{' '}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
              rel="noopener"
              className="text-amber hover:underline"
            >
              LocalBusiness JSON-LD schema
            </a>
            , and count your indexed pages in Search Console. If speed is below 60, schema is absent, and
            you have fewer than 8 indexed pages despite 6 months of SEO work — rebuild. Anything else and
            you are flushing money.
          </p>

          <p className="text-slate-blue leading-relaxed">
            None of these fixes require a computer science degree. But they do require a website that was
            built with local SEO in mind from the start. That is exactly what we do at PlumberWebDesign.co.uk —
            every site we build comes with these fundamentals baked in. See the{' '}
            <Link href="/plumber-website-design-packages/" className="text-amber hover:underline">
              plumber website packages
            </Link>{' '}
            or the{' '}
            <Link href="/plumber-website-cost/" className="text-amber hover:underline">
              full plumber website cost guide
            </Link>{' '}
            for pricing.
          </p>

          <div className="text-center mt-12">
            <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              Get your site ranking — free quote
            </Link>
          </div>

          <RelatedLinks keys={['home', 'seo', 'blogGBP', 'blogInclude', 'blogDo', 'cost']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
