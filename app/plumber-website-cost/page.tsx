import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import PricingCard from '@/components/PricingCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'Plumber Website Cost UK 2026 · From £79/mo Launch Price' },
  description: 'Real UK plumber website costs in 2026. Launch pricing £79/mo locked-in for 12 months. Three transparent tiers. No hidden fees.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/plumber-website-cost/' },
};

const pricingPackages = [
  {
    name: 'Apprentice', launchPrice: '£79',
    price: '£99',
    period: '/month',
    tagline: 'Perfect for getting started.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '5-page responsive website',
      'Mobile-optimised',
      'Free domain (if needed)',
      'Fast hosting + SSL',
      'Basic local SEO setup',
      'Contact forms',
    ]
  },
  {
    name: 'Journeyman', launchPrice: '£129',
    price: '£169',
    period: '/month',
    tagline: 'Our most popular trades package.',
    highlighted: true,
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '10-page custom website',
      'Service + location pages',
      'Advanced local SEO',
      'Hosting + SSL (domain inc.)',
      'GBP + monthly posts',
      'Review management'
    ]
  },
  {
    name: 'Master', launchPrice: '£199',
    price: '£249',
    period: '/month',
    tagline: 'Dominate your local area.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '20+ page custom website',
      'Advanced local SEO',
      'Hosting + SSL (domain inc.)',
      'Monthly blog posts (2/month)',
      'GBP setup + posting',
      'Optional link building'
    ]
  }
];

const faqItems = [
  { question: 'How much does a plumber website cost in the UK?', answer: 'A plumber website in the UK typically costs between £99 and £249 per month on a packaged plan, or £1,500 to £5,000+ as a one-off custom build. Monthly packages include hosting, SSL, local SEO, and ongoing support.' },
  { question: 'Are there setup fees?', answer: 'No setup fee on our website packages. AI add-ons (chatbot or voice agent) have a one-off setup fee to cover bespoke training for your business.' },
  { question: 'What is the cheapest plumber website?', answer: 'Our Apprentice package at £99 per month is the cheapest option that still delivers a professional, mobile-optimised website with local SEO, hosting, SSL, and a free domain. Cheaper DIY templates exist but lack local SEO and hosting.' },
  { question: 'Is a £99/month website worth it compared to a one-off build?', answer: 'Yes for most plumbers. A monthly plan includes ongoing hosting, security, and SEO maintenance — costs that add up quickly on one-off builds. After 24 months our Apprentice package is still cheaper than most £3,000 custom builds once hosting and maintenance are factored in.' },
  { question: 'What hidden costs should I watch for with other agencies?', answer: 'Common hidden costs include inflated hosting fees after year one, per-page editing charges, lock-in contracts that prevent migration, premium charges for SSL or backups, and hidden GBP management fees. Our pricing is transparent and fully inclusive.' },
  { question: 'Can I cancel my plumber website package?', answer: 'Yes. Give 30 days written notice. We will provide all website files and assist with migration. No long tie-ins.' }
];

export default function CostPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does a Plumber Website Cost in the UK? (2026)",
    "description": "Complete guide to plumber website costs in the UK. Monthly packages vs one-off builds, hidden costs to avoid, and transparent pricing from £99/month.",
    "author": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "url": "https://www.plumberwebdesign.co.uk" },
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-04-12",
    "dateModified": "2026-04-23",
    "mainEntityOfPage": "https://www.plumberwebdesign.co.uk/plumber-website-cost/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Plumber Website Packages",
    "url": "https://www.plumberwebdesign.co.uk/plumber-website-cost/",
    "priceCurrency": "GBP",
    "lowPrice": "99",
    "highPrice": "249",
    "offerCount": "3",
    "offers": [
      { "@type": "Offer", "name": "Apprentice", "price": "99", "priceCurrency": "GBP" },
      { "@type": "Offer", "name": "Journeyman", "price": "169", "priceCurrency": "GBP" },
      { "@type": "Offer", "name": "Master", "price": "249", "priceCurrency": "GBP" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.plumberwebdesign.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Plumber Website Cost", "item": "https://www.plumberwebdesign.co.uk/plumber-website-cost/" }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={aggregateOfferSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <Breadcrumbs items={[{ label: 'Plumber Website Cost', href: '/plumber-website-cost/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Pricing Guide</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">How Much Does a Plumber Website Cost in the UK?</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-3xl mx-auto">
            A plumber website in the UK costs between £99 and £249 per month on a packaged plan, or £1,500 to £5,000+ as a one-off custom build. Monthly packages include hosting, local SEO, and ongoing support.
          </p>
        </div>
      </div>

      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-amber/10 border border-amber/30 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">Quick answer</h2>
          <ul className="space-y-2 text-slate-blue">
            <li><strong>Entry-level plumber website:</strong> £99/month (5 pages, hosting, SSL, basic SEO)</li>
            <li><strong>Most popular plumber website:</strong> £169/month (10 pages, advanced SEO, GBP posts)</li>
            <li><strong>Premium plumber website:</strong> £249/month (20+ pages, blog posts, link building)</li>
            <li><strong>One-off custom build:</strong> £1,500 — £5,000+ (no ongoing support)</li>
          </ul>
        </div>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">What you get at each price point</h2>
        <p className="text-lg text-slate-blue mb-6 leading-relaxed">
          Price alone means nothing — what matters is what's included. Every UK plumber website costs should include hosting, SSL, a domain, mobile optimisation, and local SEO. If an agency quotes you £99/month but charges extra for hosting, the real cost is 2x what they advertised.
        </p>
        <p className="text-lg text-slate-blue mb-12 leading-relaxed">
          Here's what our three tiers include. Every feature, every month. No hidden add-ons.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map(pkg => (
            <PricingCard key={pkg.name} {...pkg} />
          ))}
        </div>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Monthly package vs one-off custom build</h2>
        <p className="text-lg text-slate-blue mb-8 leading-relaxed">
          Most UK agencies offer both. Here's how they compare over 24 months, which is roughly how long a plumber website stays current before needing a refresh:
        </p>

        <div className="overflow-x-auto mb-16 rounded-xl border border-slate-blue/20 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="p-4 font-bold">Factor</th>
                <th className="p-4 font-bold text-center">Monthly £99-£249</th>
                <th className="p-4 font-bold text-center">One-off £1,500-£5,000</th>
              </tr>
            </thead>
            <tbody className="text-navy-card">
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Upfront cost</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">£0</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">£1,500-£5,000</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Hosting included</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">✓</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">+£100-£300/yr extra</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Domain included</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">✓</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">+£15/yr extra</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Ongoing SEO</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">✓</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">+£200-£500/mo extra</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Security + updates</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">✓</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">+£50-£100/mo extra</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Content changes</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">Included</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">£50-£100/hour</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-medium">Total cost year 1</td>
                <td className="p-4 text-center font-bold">£1,188-£2,988</td>
                <td className="p-4 text-center font-bold">£3,540-£9,800</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Managed package vs DIY website builder (Wix, Squarespace, GoDaddy)</h2>
        <p className="text-lg text-slate-blue mb-6 leading-relaxed">
          DIY drag-and-drop builders look cheaper on the sticker price. Once you factor in the time you
          spend building, the SEO work nobody does for you, and the ongoing maintenance, the gap narrows
          considerably — and often reverses.
        </p>
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-blue/10 mb-8">
          <table className="w-full text-left bg-white">
            <thead className="bg-navy-card text-white">
              <tr>
                <th className="p-4">Factor</th>
                <th className="p-4 text-center">Managed (£99-£249/mo)</th>
                <th className="p-4 text-center">DIY Wix / Squarespace / GoDaddy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Monthly software cost</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">£99-£249</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">£8-£40</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Plumber-specific design</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">✓</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">Generic template</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Local SEO setup</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">Included</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">You do it / extra cost</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Schema markup (LocalBusiness, FAQ)</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">Full</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">Basic / none</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Google Business Profile setup</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">Included</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">You do it</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Your time per month</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">0-2 hours</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">8-15 hours</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 border-b border-slate-blue/10 font-medium">Typical Google ranking outcome</td>
                <td className="p-4 border-b border-slate-blue/10 text-center text-amber font-bold">Page 1 in 6-12 months</td>
                <td className="p-4 border-b border-slate-blue/10 text-center">Page 4-5 usually</td>
              </tr>
              <tr className="bg-light-gray/50">
                <td className="p-4 font-medium">24-month total (incl. your time at £50/hr)</td>
                <td className="p-4 text-center font-bold">£2,376-£5,976</td>
                <td className="p-4 text-center font-bold">£9,600-£18,960</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-blue/70 mb-8">
          Full comparison: <Link href="/blog/best-website-builder-for-plumbers-uk/" className="text-amber hover:underline">Best website builder for UK plumbers — Wix vs Squarespace vs managed</Link>.
        </p>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Hidden costs to watch for</h2>
        <p className="text-lg text-slate-blue mb-8 leading-relaxed">
          Every UK plumber who has been burned by a web agency can list the same culprits. Before signing any contract, ask:
        </p>
        <div className="space-y-6 mb-16">
          {[
            { h: 'Hosting mark-up after year one', b: 'A £10/month hosting cost billed to you at £40/month once you are locked in. Always ask for written hosting cost for years 2, 3, and 5.' },
            { h: 'Lock-in contracts', b: 'Some agencies own your domain, hosting, and code — making it impossible to leave without rebuilding. Your contract should say the site is transferable at any time.' },
            { h: 'Per-page content charges', b: 'Want to update your services page? That will be £50. Add a new area? £150. Pages should be editable within a reasonable monthly support allowance.' },
            { h: 'Premium SSL and backup fees', b: 'SSL and daily backups should be included. If they are billed separately, the agency is padding margin.' },
            { h: 'GBP management as an add-on', b: 'Google Business Profile management is core to local SEO for plumbers. If an agency charges an extra £200/month for it, compare against packages that include it (Journeyman and Master here do).' },
            { h: 'Exit fees and data ransom', b: 'Some agencies will not release your site files without a "migration fee" of £500+. Make sure your contract explicitly says you own everything built for you.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-blue/10">
              <h3 className="font-bold text-navy-dark text-lg mb-2">{item.h}</h3>
              <p className="text-slate-blue leading-relaxed">{item.b}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">What drives cost up between tiers?</h2>
        <p className="text-lg text-slate-blue mb-4 leading-relaxed">
          Every tier has a reason for its price. Here is what specifically changes as you go up:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-blue text-lg mb-16 leading-relaxed">
          <li><strong>Number of pages.</strong> A 5-page site (Apprentice) is a brochure. A 10-page site (Journeyman) has dedicated service and location pages. A 20-page site (Master) has service × location matrices for maximum search coverage.</li>
          <li><strong>Depth of local SEO.</strong> Apprentice is basic setup. Journeyman adds citations, schema, and GBP monthly posting. Master adds link building and 2 blog posts per month.</li>
          <li><strong>Google Business Profile work.</strong> Apprentice sets it up once. Journeyman adds weekly posts. Master optimises it monthly with photo uploads, Q&A, and review tracking.</li>
          <li><strong>Content production.</strong> Only Master includes monthly blog posts. Blogs build topical authority and rank for long-tail queries your competitors ignore.</li>
        </ul>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Can I pay once and own the site?</h2>
        <p className="text-lg text-slate-blue mb-4 leading-relaxed">
          We don't currently offer one-off builds. Reason: one-off builds without ongoing support stagnate fast. Google algorithm updates, new competitors, plugin security patches, and content refreshes all need attention. A £3,000 website with zero maintenance is often worth nothing after 18 months.
        </p>
        <p className="text-lg text-slate-blue mb-16 leading-relaxed">
          Every package on this page is still fully transferable. You own everything. If you want to leave after 12 months, give us 30 days notice and we hand over all files.
        </p>

        <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Frequently asked questions</h2>
        <div className="space-y-4 mb-16">
          {faqItems.map((item, i) => (
            <details key={i} className="group bg-white rounded-xl border border-slate-blue/20 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="p-6 cursor-pointer flex justify-between items-center text-navy-dark font-bold hover:text-amber transition-colors">
                {item.question}
                <span className="flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-slate-blue/10 text-navy-dark group-hover:bg-amber group-hover:text-navy-dark transition-all duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-blue leading-relaxed border-t border-slate-blue/10">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="bg-navy-dark text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Still not sure which package is right?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Tell us about your plumbing business and we will recommend the right tier. Free, no hard sell, reply within one working day.
          </p>
          <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
            Get a free quote →
          </Link>
        </div>

        <RelatedLinks keys={['home', 'packages', 'agency', 'seo', 'blogInclude', 'blogDo']} />

      </article>
    </div>
  );
}
