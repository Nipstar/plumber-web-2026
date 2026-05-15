import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'Google Ads for Plumbers UK — Cost, Keywords, ROAS' },
  description:
    'Google Ads for plumbers in the UK — typical CPCs, top-performing keywords, LSA vs Search Ads, and how to calculate ROAS. Real numbers for 2026.',
  alternates: {
    canonical: 'https://www.plumberwebdesign.co.uk/blog/google-ads-for-plumbers-uk/',
  },
};

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Google Ads for Plumbers UK — Cost, Keywords, ROAS in 2026',
    description:
      'UK Google Ads guide for plumbers — typical CPCs, top keywords, LSA vs Search Ads comparison, ROAS maths.',
    author: authorPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: 'PlumberWebDesign.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.plumberwebdesign.co.uk/images/logo.webp' },
    },
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    mainEntityOfPage:
      'https://www.plumberwebdesign.co.uk/blog/google-ads-for-plumbers-uk/',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much do Google Ads cost for plumbers in the UK?', acceptedAnswer: { '@type': 'Answer', text: 'UK plumber search ad CPCs typically range from £2-£25 depending on location and intent. "Boiler repair London" hits £15-£25 per click; "plumber Manchester" sits at £6-£12; long-tail queries like "boiler service Andover" can be £1-£3. Most plumbers spend £200-£800/month on Google Ads to start.' } },
      { '@type': 'Question', name: 'What is the difference between Google Ads and Local Services Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Google Search Ads (CPC) charge per click regardless of whether the click converts. Local Services Ads (LSA) charge per lead — Google vets the lead before passing it to you, and you only pay if it qualifies as a genuine enquiry. LSA is generally lower cost per booked job for plumbers, but harder to scale beyond your immediate service area.' } },
      { '@type': 'Question', name: 'Are Google Ads worth it for a UK plumber?', acceptedAnswer: { '@type': 'Answer', text: 'For most growing plumbing businesses, yes — particularly for emergency call-outs and boiler installations where job values cover the cost of multiple clicks. Established plumbers with strong organic rankings and word-of-mouth often scale ads down to seasonal peaks (winter for heating, summer for bathrooms). Diagnose your own funnel before committing more than £200/month.' } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: 'Google Ads for Plumbers UK', href: '/blog/google-ads-for-plumbers-uk/' },
        ]}
      />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Google Ads for Plumbers UK — Cost, Keywords, ROAS</h1>
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
              UK plumber Google Ads CPCs range from £2-£25 per click depending on location and intent.
              Most plumbers start with £200-£800/month and split spend between Google Search Ads (broad
              reach) and Local Services Ads (vetted leads, pay-per-call). Properly-managed ads deliver
              ROAS of 4-10x for emergency call-out queries. Badly-managed ads burn budget on broad-match
              clicks that never convert.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Two products, very different mechanics</h2>
          <p className="text-slate-blue leading-relaxed">
            &quot;Google Ads&quot; for a UK plumber actually covers two distinct products:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Google Search Ads</strong> — text ads that appear above organic results when someone searches. Pay per click, regardless of whether the click converts. Full control over keywords, ad copy, and bid strategy.</li>
            <li><strong>Google Local Services Ads (LSA)</strong> — the badge-style ads at the very top of plumber searches showing &quot;Google Guaranteed&quot;. Pay per lead, not per click. Google qualifies the lead before passing it. Limited geographic scope, restricted to certain trades.</li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            Most growing UK plumbers run both. LSA captures the highest-intent emergency clicks at low
            cost-per-job; Search Ads scale beyond LSA&apos;s geographic limits and capture longer-tail
            commercial intent.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Typical UK plumber CPCs in 2026</h2>
          <p className="text-slate-blue leading-relaxed">
            Cost per click varies wildly by location, intent, and time of year. Approximate UK ranges
            from typical campaign data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>&quot;Emergency plumber London&quot;:</strong> £15-£25 CPC. Sky-high competition</li>
            <li><strong>&quot;Boiler repair Manchester&quot;:</strong> £8-£15 CPC</li>
            <li><strong>&quot;Plumber near me&quot; (broad UK):</strong> £6-£12 CPC, varies by location</li>
            <li><strong>&quot;Bathroom installation Surrey&quot;:</strong> £4-£8 CPC</li>
            <li><strong>&quot;Boiler service Andover&quot;:</strong> £1-£3 CPC. Long-tail bargain</li>
            <li><strong>&quot;Power flushing [city]&quot;:</strong> £2-£5 CPC. Niche but high intent</li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            Winter increases CPCs across the board — particularly for boiler-related queries. Budget
            accordingly: £200/month in August often outperforms £400/month in January for the same
            campaign.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Which keywords actually convert</h2>
          <p className="text-slate-blue leading-relaxed">
            Best-converting plumber ad clusters in our experience:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Emergency + location:</strong> &quot;emergency plumber Camden&quot;, &quot;24 hour plumber Cardiff&quot;. High intent, immediate</li>
            <li><strong>Specific problem + location:</strong> &quot;burst pipe Brixton&quot;, &quot;no hot water Walthamstow&quot;</li>
            <li><strong>Boiler installation + city:</strong> &quot;new boiler Manchester&quot;, &quot;Worcester Bosch installer Leeds&quot;. High job value</li>
            <li><strong>Gas safety certificate + city:</strong> &quot;CP12 landlord certificate Birmingham&quot;. Recurring, scheduled, predictable</li>
            <li><strong>Branded competitor terms:</strong> &quot;Pimlico Plumbers alternative&quot;. Lower volume, higher conversion</li>
          </ol>
          <p className="text-slate-blue leading-relaxed">
            Worst-converting (burn budget): broad terms like &quot;plumbing&quot;, informational queries
            (&quot;how to fix leaky tap&quot;), and DIY-related keywords. Add these to negative keyword lists
            from day one.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Calculating ROAS — the maths</h2>
          <p className="text-slate-blue leading-relaxed">
            Return On Ad Spend (ROAS) is revenue earned divided by ad spend. For a UK plumber, the maths
            looks like this:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>Spend £800/month on Google Ads</li>
            <li>£8 average CPC = 100 clicks</li>
            <li>10% click-to-call conversion = 10 calls</li>
            <li>60% close rate on emergency calls = 6 booked jobs</li>
            <li>£300 average job value = £1,800 revenue</li>
            <li>ROAS = £1,800 / £800 = 2.25x</li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            For most service businesses, ROAS of 3-5x is the minimum threshold for sustained ad spend.
            Below that you are paying Google to stay busy. The biggest leverage points: improve the
            landing page (lift click-to-call rate from 10% to 15%), improve close rate (lift from 60% to
            80% via better phone scripts), or add a higher-value follow-on (push boiler installation
            quotes to repair customers).
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Local Services Ads — the cheaper path</h2>
          <p className="text-slate-blue leading-relaxed">
            UK LSA for plumbers typically charges £15-£40 per qualified lead. At a 60% close rate and
            £300 average job, that is £25-£67 cost per booked job — substantially better than search ads
            in most markets. The catch: LSA is restricted to the UK locations where it has rolled out,
            requires Google business verification (DBS or insurance documents), and caps scale at what
            Google&apos;s own demand surfaces.
          </p>
          <p className="text-slate-blue leading-relaxed">
            See{' '}
            <a
              href="https://ads.google.com/local-services-ads/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google&apos;s LSA documentation
            </a>{' '}
            for current UK eligibility.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Common mistakes that burn budget</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Running broad match without negative keywords.</strong> &quot;Plumber&quot; broad-match will trigger on &quot;plumber jobs&quot;, &quot;plumber salary&quot;, &quot;plumber training course&quot; — none convert</li>
            <li><strong>Sending traffic to the homepage.</strong> Build a dedicated landing page per service. &quot;Boiler repair Manchester&quot; should land on a page with that exact H1</li>
            <li><strong>No call tracking.</strong> If you cannot tell which ads produce calls, you cannot optimise. Set up Google Ads call tracking</li>
            <li><strong>Skipping mobile-only campaigns.</strong> Plumber searches are 70%+ mobile. Separate mobile campaigns to control bid strategy and ad copy</li>
            <li><strong>Bidding too high on broad geography.</strong> Start tight (your home town + immediate neighbours), expand once unit economics are proven</li>
            <li><strong>Pausing ads mid-test.</strong> Google&apos;s algorithm needs 2-4 weeks of data per campaign before stabilising. Constant on/off breaks the model</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Ads vs SEO — pick the right mix</h2>
          <p className="text-slate-blue leading-relaxed">
            Google Ads is a tap you turn on and off. Local SEO is a compounding asset. Most growing
            plumbers run both in parallel: ads provide immediate cash flow while SEO matures. Once
            organic rankings hit page 1 for primary queries (typically month 6-12), ad spend can drop
            and ROAS climbs because some of the same demand starts converting via free organic clicks
            instead of paid clicks.
          </p>
          <p className="text-slate-blue leading-relaxed">
            See the{' '}
            <Link
              href="/blog/how-much-should-plumber-spend-on-marketing/"
              className="text-amber hover:underline"
            >
              UK plumber marketing spend benchmarks
            </Link>{' '}
            for how to balance the two within a finite budget.
          </p>

          <RelatedLinks keys={['seo', 'home', 'blogGBP', 'blogRank', 'cost', 'packages']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
