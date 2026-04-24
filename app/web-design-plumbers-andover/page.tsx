import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Web Design for Plumbers in Andover | PlumberWebDesign.co.uk' },
  description: 'Web design for plumbers in Andover. North Hampshire + Test Valley coverage including Whitchurch, Stockbridge, and Tidworth. Low competition, fast ranking. From £99/month.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/web-design-plumbers-andover/' }
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
    "q": "Can a small-town plumber really rank on page one?",
    "a": "In Andover, yes — faster than in any larger city we cover. Most local plumbers have no real website, making page-one rankings achievable within 3-4 months rather than the 9-18 month timeline typical in competitive markets like London or Manchester."
  },
  {
    "q": "Do you cover rural villages around Andover?",
    "a": "Yes. We build pages for Whitchurch, Stockbridge, Hurstbourne Tarrant, Tidworth, Ludgershall, and the surrounding Test Valley villages. These are low-competition, high-value search terms."
  },
  {
    "q": "What about oil boilers and off-grid heating?",
    "a": "North Hampshire has significant off-grid housing. We build service pages specifically for oil boiler servicing, oil tank replacements, LPG systems, and oil-to-heat-pump conversions — markets ignored by generic plumber sites."
  },
  {
    "q": "Do you handle MOD housing work for Tidworth and Thruxton?",
    "a": "Yes. MOD family housing in Tidworth and Perham Down brings steady plumbing demand, especially during tenancy changeovers. We build content that speaks to this market including landlord gas safety certificate services."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Andover",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-andover/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Andover, North Hampshire. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Andover",
      "addressRegion": "North Hampshire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Andover"
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
      "name": "Plumber Website Packages — Andover",
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
      "name": "Can a small-town plumber really rank on page one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Andover, yes — faster than in any larger city we cover. Most local plumbers have no real website, making page-one rankings achievable within 3-4 months rather than the 9-18 month timeline typical in competitive markets like London or Manchester."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover rural villages around Andover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build pages for Whitchurch, Stockbridge, Hurstbourne Tarrant, Tidworth, Ludgershall, and the surrounding Test Valley villages. These are low-competition, high-value search terms."
      }
    },
    {
      "@type": "Question",
      "name": "What about oil boilers and off-grid heating?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "North Hampshire has significant off-grid housing. We build service pages specifically for oil boiler servicing, oil tank replacements, LPG systems, and oil-to-heat-pump conversions — markets ignored by generic plumber sites."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle MOD housing work for Tidworth and Thruxton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MOD family housing in Tidworth and Perham Down brings steady plumbing demand, especially during tenancy changeovers. We build content that speaks to this market including landlord gas safety certificate services."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Andover', href: '/web-design-plumbers-andover/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — North Hampshire</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Andover</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Serving the local Andover community? We build tailored, mobile-first websites that establish your reputation and capture high-value local plumbing jobs right on your doorstep.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Andover Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Andover is a growing market town in north Hampshire with a strong community focus and a population of around 50,000, rising to 120,000 including the surrounding Test Valley district and nearby villages. The area benefits from significant MOD presence — Tidworth Garrison, Thruxton airfield, and various military housing estates — plus a growing commuter population working in Winchester, Basingstoke, and even London. Plumbing demand is steady year-round with strong spikes during winter freeze periods.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              In smaller towns like Andover, there are fewer plumbers competing online — which means ranking on page one is achievable significantly faster than in a major city. But you still need a website built for local SEO. Andover residents search specifically for "plumber Andover" or "boiler repair Andover" rather than broader terms, and they expect the result to feel genuinely local. A website that lists the specific villages and surrounding areas — Whitchurch, Hurstbourne Tarrant, Stockbridge — immediately signals trust.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Andover plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Andover and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Andover postcodes including SP10, SP11, SP9, SO20, SO21, RG28.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Andover map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Test Valley and north Hampshire coverage, turning a small-town presence into a regional one across the surrounding villages, market towns, and MOD housing estates.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Andover areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Andover town centre, Andover Down, Charlton, Weyhill, Penton Mewsey, Anna Valley, Abbotts Ann, Goodworth Clatford, Whitchurch, Hurstbourne Tarrant, Hurstbourne Priors, Tidworth, Ludgershall, Stockbridge, Longparish, Barton Stacey, Over Wallop, and Nether Wallop.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                SP10, SP11, SP9, SO20, SO21, RG28
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Andover-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              North Hampshire housing skews rural — many properties are off the gas grid and rely on oil heating systems, LPG, or electric immersion heaters. Oil boiler servicing, oil tank replacements, and conversions from oil to air source heat pumps are a growing local market. Village properties often have ageing lead pipework, private water supplies from boreholes, and septic tank drainage systems. A generic plumbing site will not communicate competency in any of this. A specialist site wins the work.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Andover competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Andover's plumber SEO is significantly underdeveloped — most local plumbers rely entirely on Checkatrade, Rated People, or word-of-mouth without any real website. A properly built site can rank in the top three for "plumber Andover" within 3-4 months with no serious competition in the way. This is the easiest of our six markets to dominate quickly.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Andover and the Test Valley market operates on rural-Hampshire rates — broadly in line with national average for emergency work but with strong premium pricing available for specialist services like oil-to-heat-pump conversions and off-grid installations. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Andover plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Andover plumber website FAQs</h2>
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

        <div className="bg-amber p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Andover plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Andover plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=andover" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Andover plumbing website →
          </Link>
        </div>

      </div>
    </div>
  );
}