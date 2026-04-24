import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Web Design for Plumbers in Reading | PlumberWebDesign.co.uk' },
  description: 'Web design for plumbers in Reading. M4 corridor coverage including Caversham, Lower Earley, Tilehurst, and Woodley. Tech-savvy customers, fast ranking. From £99/month.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/web-design-plumbers-reading/' }
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
    "q": "How important is page speed for Reading customers?",
    "a": "Critical. Reading has a tech-savvy, mobile-first customer base with higher-than-average drop-off rates on slow sites. We build every page to load under 2 seconds on 4G and score 90+ on Google PageSpeed Insights."
  },
  {
    "q": "Can you help target the affluent Reading sub-markets?",
    "a": "Yes. Sonning, Pangbourne, Caversham Heights, and the Thames-side villages support premium installation pricing. We build dedicated landing pages for these postcodes targeting high-ticket terms like \"boiler installation Sonning\" or \"heat pump Pangbourne\"."
  },
  {
    "q": "Do you handle the Wokingham and Woodley markets too?",
    "a": "Yes. Wokingham (RG40, RG41) and Woodley are treated as separate markets with their own landing pages. Both have very light plumber SEO competition compared to central Reading."
  },
  {
    "q": "What about hard water content for Reading?",
    "a": "Reading is in a hard-water zone. We build a dedicated service page for limescale-related issues — failing combis, scaled shower valves, descaling contracts. This captures high-volume searches other plumber sites ignore."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Reading",
    "url": "https://plumberwebdesign.co.uk/web-design-plumbers-reading/",
    "logo": "https://plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Reading, Berkshire. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Reading",
      "addressRegion": "Berkshire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Reading"
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
      "name": "Plumber Website Packages — Reading",
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
      "name": "How important is page speed for Reading customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Critical. Reading has a tech-savvy, mobile-first customer base with higher-than-average drop-off rates on slow sites. We build every page to load under 2 seconds on 4G and score 90+ on Google PageSpeed Insights."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help target the affluent Reading sub-markets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sonning, Pangbourne, Caversham Heights, and the Thames-side villages support premium installation pricing. We build dedicated landing pages for these postcodes targeting high-ticket terms like \"boiler installation Sonning\" or \"heat pump Pangbourne\"."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle the Wokingham and Woodley markets too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Wokingham (RG40, RG41) and Woodley are treated as separate markets with their own landing pages. Both have very light plumber SEO competition compared to central Reading."
      }
    },
    {
      "@type": "Question",
      "name": "What about hard water content for Reading?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reading is in a hard-water zone. We build a dedicated service page for limescale-related issues — failing combis, scaled shower valves, descaling contracts. This captures high-volume searches other plumber sites ignore."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Reading', href: '/web-design-plumbers-reading/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Berkshire</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Reading</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Reading is an M4 corridor tech hub with affluent commuter housing and a digital-first customer base. Your plumbing website must load fast, book appointments instantly, and look sharp on the iPhones Reading homeowners live on.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Reading Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Reading is one of the most economically active towns in the UK, with a population of around 240,000 and a total catchment including Wokingham, Earley, Tilehurst, and Woodley pushing past 400,000. The M4 corridor concentration of tech companies (Microsoft, Oracle, SAP, Huawei) drives affluent commuter housing demand. Reading homeowners expect digital-first service — online booking, instant quotes, reviews verified on Google — and they will not tolerate a slow or clunky plumber website.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Reading searchers are tech-native and mobile-first. Over 78% of plumbing searches in RG postcodes happen on mobile devices, and the drop-off rate for sites loading over 2 seconds is significantly higher than the UK average. "Emergency plumber Reading" and "boiler repair Caversham" are high-intent queries that reward the fastest, cleanest websites. The affluent sub-markets (Sonning, Pangbourne, Caversham Heights) search for premium installation work — combi replacements with smart thermostats, bathroom refits, and air source heat pump consultations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Reading plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Reading and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Reading postcodes including RG1, RG2, RG4, RG5, RG6, RG30, RG31, RG7, RG8, RG10.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Reading map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> M4 corridor coverage across Reading, Wokingham, Earley, Tilehurst, Caversham, and the Thames-side villages, with dedicated affluent-market pages for Sonning, Pangbourne, and Twyford.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Reading areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Reading town centre, Caversham, Caversham Heights, Lower Earley, Earley, Woodley, Tilehurst, Calcot, Purley-on-Thames, Pangbourne, Sonning, Twyford, Wokingham, Winnersh, Burghfield, Theale, and Mortimer.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                RG1, RG2, RG4, RG5, RG6, RG30, RG31, RG7, RG8, RG10
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Reading-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Reading housing splits between Victorian and Edwardian terraces in central RG1 (Oxford Road, Newtown), 1930s semis in Tilehurst and Caversham, and modern estates in Lower Earley and Woodley. Hard water from the Thames Water supply drives constant combi boiler scale failures and shower valve issues. Affluent river-facing properties in Sonning, Pangbourne, and Caversham Heights have period plumbing that needs specialist restoration rather than rip-and-replace. A website that speaks to both budget-conscious student-area work and premium-period restoration wins the full market.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Reading competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            The top-ranking Reading plumber websites are mostly generic tradesperson listing sites (Checkatrade front-pages) rather than proper agency-built plumber sites. A specialist plumbing site with proper schema, M4 corridor postcode targeting, and a clear premium-installation service page can overtake them within 3–5 months. Wokingham and Woodley have almost zero dedicated plumber SEO competition.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Reading plumbing rates are 15–25% above the national average due to the affluent commuter catchment, with premium pricing available in Sonning, Pangbourne, and Caversham Heights. Single-job average ticket is high — smart thermostat installations, heat pump consultations, and bathroom refits dominate. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Reading plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Reading plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Reading plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Reading plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=reading" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Reading plumbing website →
          </Link>
        </div>

      </div>
    </div>
  );
}