import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Plumber Web Design Southampton | From £99/mo' },
  description: 'Web design for plumbers in Southampton. Solent-wide coverage including Woolston, Bitterne, Eastleigh, and the New Forest edge. Local SEO built in. From £99/month.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/web-design-plumbers-southampton/' }
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
    "q": "Can you help with the Southampton student HMO market?",
    "a": "Yes. Student-let compliance (annual gas safety certificates, CO alarm checks, boiler servicing) is a huge recurring-revenue market in SO14–SO17. We build a dedicated page for landlord and letting-agent services optimised for searches like \"landlord gas certificate Southampton\"."
  },
  {
    "q": "Do you cover Eastleigh and Chandlers Ford as well as Southampton?",
    "a": "Yes. Eastleigh, Chandlers Ford, Hedge End, and the northern suburbs get separate landing pages rather than being folded under a generic \"Southampton\" heading. Each ranks for its own local searches."
  },
  {
    "q": "How do waterside new-builds affect what services I should feature?",
    "a": "Ocean Village, Centenary Quay, and Woolston waterside flats have a specific plumbing profile — combi boilers reaching 10-year warranty end-of-life, communal heating faults, and low-pressure shower fixes. A dedicated page for waterside apartment plumbing wins these searches."
  },
  {
    "q": "What about the New Forest edge?",
    "a": "Totton, Marchwood, and Hythe are covered as separate New Forest-facing pages if you service them. Rural properties here often have oil heating similar to north Hampshire, which opens up heat pump conversion work."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Southampton",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-southampton/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Southampton, Hampshire. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Southampton",
      "addressRegion": "Hampshire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Southampton"
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
      "name": "Plumber Website Packages — Southampton",
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
      "name": "Can you help with the Southampton student HMO market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Student-let compliance (annual gas safety certificates, CO alarm checks, boiler servicing) is a huge recurring-revenue market in SO14–SO17. We build a dedicated page for landlord and letting-agent services optimised for searches like \"landlord gas certificate Southampton\"."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover Eastleigh and Chandlers Ford as well as Southampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Eastleigh, Chandlers Ford, Hedge End, and the northern suburbs get separate landing pages rather than being folded under a generic \"Southampton\" heading. Each ranks for its own local searches."
      }
    },
    {
      "@type": "Question",
      "name": "How do waterside new-builds affect what services I should feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ocean Village, Centenary Quay, and Woolston waterside flats have a specific plumbing profile — combi boilers reaching 10-year warranty end-of-life, communal heating faults, and low-pressure shower fixes. A dedicated page for waterside apartment plumbing wins these searches."
      }
    },
    {
      "@type": "Question",
      "name": "What about the New Forest edge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Totton, Marchwood, and Hythe are covered as separate New Forest-facing pages if you service them. Rural properties here often have oil heating similar to north Hampshire, which opens up heat pump conversion work."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Southampton', href: '/web-design-plumbers-southampton/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Hampshire</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Southampton</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Southampton is a busy south coast port city with a competitive plumbing market. Your website needs to cut through noise across the student lettings, waterside new-builds, and period-terrace markets that define the Solent plumbing trade.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Southampton Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Southampton and the wider Solent conurbation cover roughly 380,000 residents across the city, Eastleigh, Totton, Romsey, and the New Forest edge. The city itself has over 250,000 people and two universities (Southampton and Solent) generating constant HMO and landlord plumbing demand. Port-related housing in Woolston and Shirley, waterside new-build developments at Ocean Village and Centenary Quay, and the Victorian terrace belts of Portswood, Highfield, and St Denys create a diverse plumbing catchment.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Southampton plumbing searches divide sharply by neighbourhood. Students in Portswood, Highfield, and Bevois Valley generate boiler service and gas safety certificate searches. Waterside new-build owners in Ocean Village and Woolston search for warranty-period combi faults and shower pressure fixes. Suburban searches from Bitterne, Lordswood, and Eastleigh focus on emergency call-outs and bathroom refits. A website that mentions none of these specifically will not rank for any of them.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Southampton plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Southampton and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Southampton postcodes including SO14, SO15, SO16, SO17, SO18, SO19, SO30, SO31, SO40, SO45, SO50, SO53.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Southampton map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Solent-wide coverage spanning Southampton city through to Eastleigh, Romsey, Totton, and the Hamble peninsula, with dedicated pages for each student-heavy and waterside postcode.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Southampton areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Southampton City Centre, Portswood, Highfield, Bassett, Shirley, Millbrook, Lordswood, Bitterne, Woolston, Weston, St Denys, Bevois Valley, Netley, Hamble, Hedge End, West End, Eastleigh, Chandlers Ford, Romsey, Totton, Marchwood, and Fair Oak.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                SO14, SO15, SO16, SO17, SO18, SO19, SO30, SO31, SO40, SO45, SO50, SO53
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Southampton-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Southampton housing mixes Victorian terraces with failing cast-iron soil stacks in Portswood and Inner Avenue, Edwardian semis in Bassett, 1930s stock in Bitterne and Sholing, and modern apartments with communal heating systems at Ocean Village. The coastal and riverside air along the Itchen and Test drives corrosion on external pipework. Student HMO compliance — gas certificates, CO alarm servicing, annual boiler checks — is a massive recurring market for any plumber willing to target letting agents directly through their website.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Southampton competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            The top-ranking Southampton plumber websites lean heavily on generic template builds with city-wide targeting and thin content. A purpose-built site with postcode-specific landing pages (SO14–SO19 especially) and a dedicated HMO and student-let compliance page can overtake them within 4–6 months. Eastleigh, Totton, and Romsey are even less contested than central Southampton.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Southampton plumbing rates sit just above the national average on labour, with strong premium pricing available in waterside postcodes (SO14, SO31) and affluent Hampshire commuter villages. Annual student HMO compliance contracts are recurring revenue most competitors ignore. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Southampton plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Southampton plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Southampton plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Southampton plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=southampton" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Southampton plumbing website →
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