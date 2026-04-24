import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Web Design for Plumbers in Guildford | PlumberWebDesign.co.uk' },
  description: 'Web design for plumbers in Guildford. Affluent Surrey coverage including Godalming, Cranleigh, and Woking. Premium-market local SEO. From £99/month.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/web-design-plumbers-guildford/' }
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
    "q": "How should I position for the Guildford premium market?",
    "a": "Trust signals and craftsmanship first. We position your homepage around Gas Safe display, trade-body memberships (CIPHE, WaterSafe, APHC), real project photography, and review integration rather than emergency-response messaging. Guildford homeowners are not price-shopping — they are credibility-shopping."
  },
  {
    "q": "Can you target conservation area and Grade II listed work?",
    "a": "Yes. Guildford and the Surrey Hills have significant listed and conservation stock. We build a dedicated service page for period-property plumbing that speaks to the regulatory and craftsmanship-competence concerns of these homeowners."
  },
  {
    "q": "Do you handle off-grid rural villages in the GU area?",
    "a": "Yes. Shere, Peaslake, Albury, and the Surrey Hills villages often have oil-fired heating or LPG. We build service pages for oil boiler servicing, oil-to-heat-pump conversions, and LPG systems — higher-margin work ignored by generic sites."
  },
  {
    "q": "What about Woking and Godalming as separate markets?",
    "a": "Woking (GU21–GU24) and Godalming (GU7, GU8) are treated as separate markets with their own landing pages. Both have affluent catchments and are underserved by local plumber SEO."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Guildford",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-guildford/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Guildford, Surrey. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guildford",
      "addressRegion": "Surrey",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Guildford"
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
      "name": "Plumber Website Packages — Guildford",
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
      "name": "How should I position for the Guildford premium market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trust signals and craftsmanship first. We position your homepage around Gas Safe display, trade-body memberships (CIPHE, WaterSafe, APHC), real project photography, and review integration rather than emergency-response messaging. Guildford homeowners are not price-shopping — they are credibility-shopping."
      }
    },
    {
      "@type": "Question",
      "name": "Can you target conservation area and Grade II listed work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Guildford and the Surrey Hills have significant listed and conservation stock. We build a dedicated service page for period-property plumbing that speaks to the regulatory and craftsmanship-competence concerns of these homeowners."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle off-grid rural villages in the GU area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Shere, Peaslake, Albury, and the Surrey Hills villages often have oil-fired heating or LPG. We build service pages for oil boiler servicing, oil-to-heat-pump conversions, and LPG systems — higher-margin work ignored by generic sites."
      }
    },
    {
      "@type": "Question",
      "name": "What about Woking and Godalming as separate markets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Woking (GU21–GU24) and Godalming (GU7, GU8) are treated as separate markets with their own landing pages. Both have affluent catchments and are underserved by local plumber SEO."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Guildford', href: '/web-design-plumbers-guildford/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Surrey</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Guildford</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Guildford is one of the most affluent towns in the UK and a premium market for plumbing services. Your website needs to communicate craftsmanship, Gas Safe credibility, and period-property competency before a Guildford homeowner will call.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Guildford Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Guildford has a population of around 77,000 and sits at the heart of one of the wealthiest postcodes in England. The wider GU catchment — Godalming, Cranleigh, Woking, Farnham, Haslemere, and Milford — pushes over 250,000 affluent residents. Average property prices in GU1, GU2, GU3, and GU5 are nearly double the UK average, which translates directly to higher average job values for plumbers. Boiler installations, bathroom refits, and heat pump consultations are the dominant work types, not emergency call-outs.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Guildford searchers skew higher-intent and higher-ticket. They search "boiler installation Guildford", "bathroom fitter Godalming", and "heat pump installer Surrey" rather than purely emergency terms. They also check reviews more carefully — Google ratings below 4.8 stars see significantly higher drop-off than the national average. Your website needs premium-feel design, trust signals (Gas Safe, CIPHE, trade-body memberships) above the fold, and a clear portfolio of previous high-ticket work.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Guildford plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Guildford and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Guildford postcodes including GU1, GU2, GU3, GU4, GU5, GU6, GU7, GU8, GU10.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Guildford map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Affluent Surrey coverage across Guildford, Godalming, Cranleigh, Haslemere, and Woking, with premium-market landing pages for conservation areas, Grade II stock, and rural off-grid villages.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Guildford areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Guildford town centre, Stoughton, Onslow Village, Merrow, Burpham, Park Barn, Westborough, Shalford, Peaslake, Shere, Albury, Godalming, Farncombe, Cranleigh, Bramley, Ewhurst, Haslemere, Milford, Woking, Horsell, Knaphill, and Byfleet.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                GU1, GU2, GU3, GU4, GU5, GU6, GU7, GU8, GU10
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Guildford-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Guildford and the wider Surrey Hills are rich in Grade II listed properties, conservation area restrictions, and Victorian-era plumbing that requires specialist (not generic) maintenance. Oil-fired heating is common in rural villages like Shere, Peaslake, and Albury — properties off the gas grid that need oil boiler servicing, oil tank replacements, or heat pump conversions. Affluent properties often have complex unvented cylinder systems, underfloor heating, and smart home integrations. A generic plumber website cannot communicate competence in any of this.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Guildford competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Guildford plumber SEO is less developed than the wealth of the catchment suggests. Most top-ranking sites are generic Surrey-wide agency builds rather than Guildford-specific local authority sites. A proper Guildford-focused plumbing site with postcode landing pages for affluent sub-markets (Shere, Godalming, Cranleigh, Haslemere), Grade II content, and premium-installation service pages can reach top-three positions within 4–6 months.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Guildford and the wider GU postcode area support 25–40% premium pricing over the national average, particularly for bathroom refits, underfloor heating installs, and full central heating refits. A single premium job can pay for years of Master package subscription. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Guildford plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Guildford plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Guildford plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Guildford plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=guildford" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Guildford plumbing website →
          </Link>
        </div>

      </div>
    </div>
  );
}