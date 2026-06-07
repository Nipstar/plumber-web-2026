import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ogBase, twitterBase } from '@/app/shared-metadata';

const TITLE = 'Web Design for Plumbers in Liverpool | Plumber Websites';
const DESCRIPTION = 'Web design for plumbers in Liverpool. Merseyside coverage across both sides of the Mersey, including the Wirral and Southport. Get a free quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/web-design-plumbers-liverpool/' },
  openGraph: { ...ogBase, title: TITLE, description: DESCRIPTION },
  twitter: { ...twitterBase, title: TITLE, description: DESCRIPTION },
};

const pricingPackages = [
  {
    name: 'Apprentice',
    launchPrice: '£79',
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
    launchPrice: '£129',
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
    launchPrice: '£199',
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
    "q": "Do you cover both Liverpool and the Wirral?",
    "a": "Yes. We treat the Wirral as a separate local market with its own landing page because the search behaviour and customer base are distinct from Liverpool city itself. Covering both doubles your visible catchment."
  },
  {
    "q": "How do you help with the Liverpool student HMO market?",
    "a": "We build dedicated pages for landlord gas safety certificates, HMO compliance work, and annual boiler service contracts. These are exactly the searches Liverpool letting agents and landlords make — and they are higher-margin than emergency work."
  },
  {
    "q": "Can you target specific postcodes like L17 or L18?",
    "a": "Yes. Our Journeyman and Master packages include postcode-specific landing pages for affluent areas like Woolton, Allerton, and Mossley Hill where higher-ticket work is concentrated."
  },
  {
    "q": "What about Southport and Formby?",
    "a": "Sefton postcodes (PR8, PR9, L37, L38) are a strong secondary market with less competition than central Liverpool. We build dedicated pages for these if you cover them."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Liverpool",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-liverpool/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Liverpool, Merseyside. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Liverpool",
      "addressRegion": "Merseyside",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Liverpool"
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
      "name": "Plumber Website Packages — Liverpool",
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
      "name": "Do you cover both Liverpool and the Wirral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We treat the Wirral as a separate local market with its own landing page because the search behaviour and customer base are distinct from Liverpool city itself. Covering both doubles your visible catchment."
      }
    },
    {
      "@type": "Question",
      "name": "How do you help with the Liverpool student HMO market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build dedicated pages for landlord gas safety certificates, HMO compliance work, and annual boiler service contracts. These are exactly the searches Liverpool letting agents and landlords make — and they are higher-margin than emergency work."
      }
    },
    {
      "@type": "Question",
      "name": "Can you target specific postcodes like L17 or L18?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Journeyman and Master packages include postcode-specific landing pages for affluent areas like Woolton, Allerton, and Mossley Hill where higher-ticket work is concentrated."
      }
    },
    {
      "@type": "Question",
      "name": "What about Southport and Formby?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sefton postcodes (PR8, PR9, L37, L38) are a strong secondary market with less competition than central Liverpool. We build dedicated pages for these if you cover them."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Liverpool', href: '/web-design-plumbers-liverpool/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Merseyside</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Liverpool</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Whether you cover the city centre or the surrounding Merseyside areas, a specialist plumbing website ensures you are the first call a Liverpool homeowner makes when their boiler breaks.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Liverpool Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Liverpool and the wider Merseyside region offer strong demand for plumbing services, driven by a mix of period properties, student lettings, and ongoing regeneration projects. The L1-L40 postcode area covers nearly 1.4 million residents across the city itself plus Sefton, Knowsley, St Helens, and the Wirral. Recent years have seen major investment in new housing developments around the Baltic Triangle, Royal Albert Dock, and Liverpool Waters — each requiring plumbing and heating contractors.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Merseyside covers a large geographic area from Southport in the north to the Wirral peninsula across the water. Many Liverpool plumbers serve the full region but only rank for their home postcode. Customers search "plumber near me" from Birkenhead, Bootle, or Crosby — all technically Merseyside, all technically your catchment — and you miss them because your site does not have a dedicated page for those areas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Liverpool plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Liverpool and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Liverpool postcodes including L, CH, WA, PR.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Liverpool map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Merseyside-wide coverage including the Wirral peninsula, giving you visibility across both sides of the Mersey and into West Lancashire.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Liverpool areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Liverpool city centre, Aigburth, Woolton, Allerton, Mossley Hill, Childwall, West Derby, Walton, Anfield, Toxteth, Bootle, Crosby, Waterloo, Formby, Southport, Huyton, Prescot, St Helens, Birkenhead, Wallasey, Bebington, and Hoylake.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                L, CH, WA, PR
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Liverpool-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Liverpool housing stock mixes Victorian terraced streets in Anfield, Toxteth, and Walton with inter-war semis in West Derby and Aigburth, plus modern apartments in the city centre. The student letting market in L7 and L17 creates constant demand for boiler service contracts, HMO compliance work, and landlord gas safety certificates. The Wirral side of the Mersey brings a different mix — coastal corrosion issues on homes near the estuary, and high-ticket installation work in affluent Heswall, West Kirby, and Caldy.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Liverpool competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Liverpool's plumber SEO is notably less developed than comparable cities. Many plumbers rely on Checkatrade and word-of-mouth without a serious website presence. A properly built, schema-rich site can take top positions for major Liverpool search terms within 6 months. The Wirral side is even less contested and represents the biggest ranking opportunity in Merseyside.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Liverpool plumbing rates sit slightly below the UK average for labour, but volume and repeat business are strong. A website that consistently generates 15+ enquiries per month will drive a six-figure plumbing business from organic traffic alone. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Liverpool plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Liverpool plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Liverpool plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Liverpool plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=liverpool" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Liverpool plumbing website →
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