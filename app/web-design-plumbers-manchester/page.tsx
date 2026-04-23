import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Web Design for Plumbers in Manchester | PlumberWebDesign.co.uk' },
  description: 'Specialist web design for plumbers in Manchester. Local SEO-optimised websites that rank when Manchester customers search for plumbers nearby. From £99/month.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/web-design-plumbers-manchester/' }
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
    "q": "Do you build pages for specific Manchester neighbourhoods?",
    "a": "Yes. Our Journeyman package includes up to 10 location landing pages so you can target individual areas like Didsbury, Chorlton, or Altrincham. Each page is optimised for local search terms specific to that neighbourhood."
  },
  {
    "q": "How do I compete against the big multi-engineer Manchester firms?",
    "a": "Niche down. Big firms dominate broad terms like \"plumber Manchester\" but lose long-tail searches like \"landlord gas certificate Didsbury\" or \"boiler replacement Chorlton\". We build your site to win those exact searches, which are higher-intent and easier to rank."
  },
  {
    "q": "Can you help with commercial plumbing leads in the city centre?",
    "a": "Yes. Manchester city centre has a strong commercial plumbing market — student lets, HMOs, restaurants, and office blocks. We build separate service pages for commercial work with the messaging and trust signals required to win B2B enquiries."
  },
  {
    "q": "What about the outer Greater Manchester boroughs?",
    "a": "We cover the full GM10 area plus outer commuter towns like Wilmslow and Knutsford in Cheshire. If you service it, we build a page for it."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Manchester",
    "url": "https://plumberwebdesign.co.uk/web-design-plumbers-manchester/",
    "logo": "https://plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Manchester, Greater Manchester. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Manchester"
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
      "name": "Plumber Website Packages — Manchester",
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
      "name": "Do you build pages for specific Manchester neighbourhoods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Journeyman package includes up to 10 location landing pages so you can target individual areas like Didsbury, Chorlton, or Altrincham. Each page is optimised for local search terms specific to that neighbourhood."
      }
    },
    {
      "@type": "Question",
      "name": "How do I compete against the big multi-engineer Manchester firms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Niche down. Big firms dominate broad terms like \"plumber Manchester\" but lose long-tail searches like \"landlord gas certificate Didsbury\" or \"boiler replacement Chorlton\". We build your site to win those exact searches, which are higher-intent and easier to rank."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with commercial plumbing leads in the city centre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Manchester city centre has a strong commercial plumbing market — student lets, HMOs, restaurants, and office blocks. We build separate service pages for commercial work with the messaging and trust signals required to win B2B enquiries."
      }
    },
    {
      "@type": "Question",
      "name": "What about the outer Greater Manchester boroughs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover the full GM10 area plus outer commuter towns like Wilmslow and Knutsford in Cheshire. If you service it, we build a page for it."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Manchester', href: '/web-design-plumbers-manchester/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Greater Manchester</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Manchester</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            The Manchester market is bustling, but with so many plumbers competing for attention, your website needs to instantly communicate trust and authority.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Manchester Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Manchester is one of the fastest-growing cities in the UK, with a booming property market driving constant demand for plumbing and heating services. The Greater Manchester conurbation covers 10 metropolitan boroughs and over 2.8 million residents, stretching from the city centre through Salford, Stockport, Trafford, Bolton, Bury, Oldham, Rochdale, Tameside, and Wigan. From new-build developments in Salford Quays and NOMA to Victorian terrace conversions in Didsbury, Chorlton, and Heaton, homeowners and landlords need reliable plumbing and heating contractors.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Manchester search volume for "plumber near me" is concentrated across dozens of distinct neighbourhoods, each with its own microclimate of demand. A homeowner in Altrincham will see completely different local results to someone in Rochdale — and each expects you to know their area. Without dedicated pages targeting each sub-region you cover, you are invisible to the majority of your potential customers even if you service the whole patch.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Manchester plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Manchester and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Manchester postcodes including M, BL, OL, SK, WN, WA.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Manchester map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Greater Manchester coverage across all 10 metropolitan boroughs with unique content for each local market, plus surrounding Cheshire and Lancashire towns.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Manchester areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Manchester City Centre, Salford, Stockport, Trafford, Bolton, Bury, Oldham, Rochdale, Tameside, Wigan, Altrincham, Sale, Didsbury, Chorlton, Prestwich, Whitefield, Eccles, Urmston, Cheadle, and Wilmslow.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                M, BL, OL, SK, WN, WA
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Manchester-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Manchester housing stock skews Victorian and Edwardian in the inner suburbs, creating specific plumbing realities: lead pipe replacement, high-pressure-system incompatible back boilers, flooded cellars during heavy rainfall, and damp-course issues caused by failed kitchen plumbing. New-build apartments in the city centre bring a different set: high-rise pressure boosters, communal heating system faults, and combi boiler flue regulations that vary between developments. A local specialist site that lists these specific services wins against generic competitors.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Manchester competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            The top-ranking Manchester plumber sites are split between large multi-engineer firms with dozens of reviews and nimble single-engineer operations who have invested in local SEO. The middle is empty. Plumbers without a proper website in Manchester are being squeezed out of the Map Pack entirely — local competitors with strong GBP listings and supporting websites dominate the top three organic positions across every borough.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Manchester plumbing rates sit around the national average but volume is significantly higher than smaller cities. A website that captures even 10 qualified enquiries a month pays for itself many times over — particularly with boiler installations and bathroom refits forming the bulk of high-ticket work. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Manchester plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Manchester plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Manchester plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Manchester plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=manchester" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Manchester plumbing website →
          </Link>
        </div>

      </div>
    </div>
  );
}