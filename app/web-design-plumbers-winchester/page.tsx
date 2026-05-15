import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Plumber Web Design Winchester | From £99/mo' },
  description: 'Web design for plumbers in Winchester. Central Hampshire coverage including Alresford, Twyford, and the Meon Valley. Premium cathedral-city market. From £99/month.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/web-design-plumbers-winchester/' }
};

const pricingPackages = [
  {
    name: 'Apprentice',
    price: '£99',
    period: '/month',
    tagline: 'Perfect for getting started.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '5-page responsive website',
      'Mobile-optimised for all screen sizes',
      'Free domain (if needed)',
      'Fast hosting + SSL certificate',
      'Basic local SEO setup',
      'Contact forms',
    ]
  },
  {
    name: 'Journeyman',
    price: '£169',
    period: '/month',
    tagline: 'Our most popular trades package.',
    highlighted: true,
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '10-page custom website',
      'Service and location pages included',
      'Advanced local SEO optimisation',
      'Fast hosting + SSL (Domain inc.)',
      'Google Business Profile + monthly posts',
      'Google Review management tracking'
    ]
  },
  {
    name: 'Master',
    price: '£249',
    period: '/month',
    tagline: 'Dominate your local area.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '20+ page custom website',
      'Advanced local SEO optimisation',
      'Fast hosting + SSL (Domain inc.)',
      'Monthly blog posts (2/month)',
      'GBP setup, optimisation & posting',
      'Optional link building service'
    ]
  }
];

const faqs = [
  {
    "q": "How do I win the premium Winchester market?",
    "a": "Match the market. We position your homepage around craftsmanship, trade-body memberships, real project photography, and detailed service explanations rather than emergency-response messaging. Winchester buyers are credibility-shopping, not price-shopping — they pick the plumber who communicates competence clearly."
  },
  {
    "q": "Can you cover Alresford, Twyford, and the Meon Valley separately?",
    "a": "Yes. Each surrounding village gets its own landing page, not folded into generic \"Winchester\" coverage. Alresford (SO24) especially has light plumber SEO competition and strong high-ticket work."
  },
  {
    "q": "What about the oil-heating and heat-pump conversion market?",
    "a": "Central Hampshire has significant off-grid housing. We build dedicated service pages for oil boiler servicing, LPG systems, and oil-to-heat-pump conversions — high-margin work concentrated in the villages surrounding Winchester that most local plumber websites ignore."
  },
  {
    "q": "How do you handle listed-building work in central Winchester?",
    "a": "We build a dedicated period-property plumbing service page speaking to conservation-area regulations, flue placement constraints, and heritage plumbing competence. This is exactly what Winchester city-centre homeowners search for before calling."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Winchester",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-winchester/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Winchester, Hampshire. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Winchester",
      "addressRegion": "Hampshire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Winchester"
    },
    "priceRange": "££",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30"
    }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumber Website Packages — Winchester",
      "itemListElement": [
        { "@type": "Offer", "name": "Apprentice", "price": "99", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Journeyman", "price": "169", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Master", "price": "249", "priceCurrency": "GBP" }
      ]
    }
  };

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I win the premium Winchester market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Match the market. We position your homepage around craftsmanship, trade-body memberships, real project photography, and detailed service explanations rather than emergency-response messaging. Winchester buyers are credibility-shopping, not price-shopping — they pick the plumber who communicates competence clearly."
      }
    },
    {
      "@type": "Question",
      "name": "Can you cover Alresford, Twyford, and the Meon Valley separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each surrounding village gets its own landing page, not folded into generic \"Winchester\" coverage. Alresford (SO24) especially has light plumber SEO competition and strong high-ticket work."
      }
    },
    {
      "@type": "Question",
      "name": "What about the oil-heating and heat-pump conversion market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Central Hampshire has significant off-grid housing. We build dedicated service pages for oil boiler servicing, LPG systems, and oil-to-heat-pump conversions — high-margin work concentrated in the villages surrounding Winchester that most local plumber websites ignore."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle listed-building work in central Winchester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build a dedicated period-property plumbing service page speaking to conservation-area regulations, flue placement constraints, and heritage plumbing competence. This is exactly what Winchester city-centre homeowners search for before calling."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Winchester', href: '/web-design-plumbers-winchester/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Hampshire</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Winchester</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Winchester is a wealthy Hampshire cathedral city with affluent surrounding villages and a plumbing market dominated by premium installation work. Your website must match the level of craftsmanship Winchester homeowners expect from their tradespeople.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Winchester Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Winchester has a population of around 45,000 with a wider SO22–SO24 catchment pushing past 130,000 across Alresford, Twyford, Colden Common, and the Meon Valley villages. The city is one of the most expensive places to live in the UK outside London, with average property prices well above the national average. The plumbing market skews high-ticket: full central heating refits, period-property bathroom renovations, air source heat pump installations, and listed-building restoration work dominate.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Winchester homeowners are cautious, research-heavy buyers. They read reviews thoroughly, check trade-body memberships, and often get three quotes before committing. Google searches skew toward specific installations — "boiler replacement Winchester", "bathroom fitter SO22", "heat pump installer central Hampshire" — rather than emergency call-outs. Rural village searches from Alresford, Twyford, and the Meon Valley focus on oil-heating conversions and off-grid property work.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Winchester plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Winchester and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Winchester postcodes including SO21, SO22, SO23, SO24.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Winchester map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Central Hampshire coverage across Winchester, Alresford, Twyford, Bishops Waltham, and the Meon Valley, with premium-market pages for listed city-centre work and oil-to-heat-pump conversions in the rural villages.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Winchester areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Winchester city centre, Fulflood, Stanmore, Weeke, Teg Down, St Cross, Badger Farm, Twyford, Colden Common, Alresford, New Alresford, Cheriton, Bishops Waltham, Owslebury, Kings Worthy, Headbourne Worthy, Micheldever, and the Meon Valley villages.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                SO21, SO22, SO23, SO24
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Winchester-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Winchester is heavily listed and conservation-restricted — the city centre, Fulflood, and St Cross have Grade II-dense streets where external boiler flue placement is a planning headache. Rural surrounding villages (Alresford, Cheriton, Bishops Waltham, the Meon Valley) are largely off the gas grid, running oil boilers, LPG, or increasingly air source heat pumps. Hard water from the Hampshire chalk aquifer drives constant descaling and shower valve replacement work. The combination — listed central-city + rural off-grid villages + hard water — creates a unique local plumbing skillset that deserves a dedicated website to communicate.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Winchester competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Winchester plumber SEO is significantly underdeveloped relative to the affluence of the market. Most top-ranking websites are generic south-central-Hampshire agency sites rather than Winchester-specific local authority builds. A properly built Winchester-focused site with postcode landing pages (SO21–SO24), oil-conversion content, and listed-property service pages can dominate local search within 4–5 months.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Winchester supports 20–35% premium pricing over the national average for installation work, with particularly strong margins available in central SO23 and affluent villages like Alresford, Twyford, and Bishops Waltham. Heat pump conversion work is high-ticket and growing. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Winchester plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Winchester plumber website FAQs</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-blue/20 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="p-6 cursor-pointer flex justify-between items-center text-navy-dark font-bold hover:text-amber transition-colors">
                  {item.q}
                  <span className="flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-slate-blue/10 text-navy-dark group-hover:bg-amber group-hover:text-navy-dark transition-all duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-blue leading-relaxed border-t border-slate-blue/10">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-amber p-10 rounded-2xl shadow-lg text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Winchester plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Winchester plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=winchester" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Winchester plumbing website →
          </Link>
        </div>

        <nav aria-label="Related pages" className="bg-white border border-slate-blue/10 rounded-2xl p-8">
          <h2 className="text-xl font-display font-bold text-navy-dark mb-4">Explore further</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-blue">
            <li>→ <Link href="/" className="text-amber hover:underline">Web design for plumbers</Link> — main UK service overview</li>
            <li>→ <Link href="/plumber-website-design-packages/" className="text-amber hover:underline">Plumber website packages</Link> — pricing from £99/month</li>
            <li>→ <Link href="/plumber-website-cost/" className="text-amber hover:underline">Plumber website cost guide</Link> — full UK breakdown</li>
            <li>→ <Link href="/seo-for-plumbers/" className="text-amber hover:underline">SEO for plumbers</Link> — local search optimisation</li>
            <li>→ <Link href="/gas-engineer-website-design/" className="text-amber hover:underline">Gas engineer websites</Link> — for Gas Safe registered engineers</li>
            <li>→ <Link href="/heating-engineer-website-design/" className="text-amber hover:underline">Heating engineer websites</Link> — boiler and heat pump landing pages</li>
          </ul>
        </nav>

      </div>
    </div>
  );
}