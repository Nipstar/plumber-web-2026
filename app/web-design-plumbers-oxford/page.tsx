import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Web Design for Plumbers in Oxford | Plumber Websites',
  description: 'Web design for plumbers in Oxford. Oxfordshire coverage from Cowley and Headington to Summertown and Abingdon, for the HMO and listed-property market.',
  path: '/web-design-plumbers-oxford/',
});

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
    "q": "Can you help with Oxford HMO landlord compliance?",
    "a": "Yes. OX1, OX3, and OX4 have some of the densest student HMO stock in the UK. We build a dedicated landlord-compliance page covering annual gas safety certificates, CO alarm servicing, and annual boiler checks optimised for searches like \"HMO gas certificate Oxford\"."
  },
  {
    "q": "Do you handle listed-property and conservation-area work?",
    "a": "Yes. Oxford has extensive Grade II and conservation-area stock. We build a dedicated service page for period-property plumbing with messaging that speaks to the regulatory and craftsmanship concerns specific to these buildings."
  },
  {
    "q": "Can I target Kidlington, Abingdon, and Witney separately?",
    "a": "Yes. Each outer OX town gets its own landing page rather than being folded under generic \"Oxford\" coverage. Abingdon (OX14) and Witney have notably light plumber SEO competition."
  },
  {
    "q": "What about rural villages with oil heating?",
    "a": "Wheatley, Eynsham, Cumnor, and the rural OX villages often have oil-fired heating or private water supplies. We build pages for oil boiler servicing, oil tank replacement, and heat pump conversions — services most Oxford plumber sites ignore."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Oxford",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-oxford/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Oxford, Oxfordshire. Local SEO-optimised websites from £79/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oxford",
      "addressRegion": "Oxfordshire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Oxford"
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
      "name": "Plumber Website Packages — Oxford",
      "itemListElement": [
        { "@type": "Offer", "name": "Apprentice", "price": "79", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Journeyman", "price": "129", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Master", "price": "199", "priceCurrency": "GBP" }
      ]
    }
  };

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you help with Oxford HMO landlord compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. OX1, OX3, and OX4 have some of the densest student HMO stock in the UK. We build a dedicated landlord-compliance page covering annual gas safety certificates, CO alarm servicing, and annual boiler checks optimised for searches like \"HMO gas certificate Oxford\"."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle listed-property and conservation-area work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Oxford has extensive Grade II and conservation-area stock. We build a dedicated service page for period-property plumbing with messaging that speaks to the regulatory and craftsmanship concerns specific to these buildings."
      }
    },
    {
      "@type": "Question",
      "name": "Can I target Kidlington, Abingdon, and Witney separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each outer OX town gets its own landing page rather than being folded under generic \"Oxford\" coverage. Abingdon (OX14) and Witney have notably light plumber SEO competition."
      }
    },
    {
      "@type": "Question",
      "name": "What about rural villages with oil heating?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wheatley, Eynsham, Cumnor, and the rural OX villages often have oil-fired heating or private water supplies. We build pages for oil boiler servicing, oil tank replacement, and heat pump conversions — services most Oxford plumber sites ignore."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Oxford', href: '/web-design-plumbers-oxford/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Oxfordshire</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Oxford</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Oxford is a historic university city with a unique plumbing market — conservation-area listed buildings, HMO-heavy student lettings, and a growing ring of modern commuter housing. Your website must handle all three audiences without confusing any of them.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Oxford Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Oxford has a population of around 152,000, rising past 250,000 including Abingdon, Kidlington, Witney, and the outer OX catchment. Two universities (Oxford and Oxford Brookes) create the densest student-letting market outside London, concentrated in OX1 (city centre), OX4 (Cowley), and OX3 (Headington). The listed-property stock across central Oxford, Summertown, and North Oxford is among the most regulatory-sensitive in England — conservation areas, Grade II buildings, and planning constraints that generic plumbers routinely get wrong.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              Oxford search demand splits into three clear buckets: landlord and letting-agent compliance searches ("gas safety certificate Cowley", "HMO plumber Oxford"), period-property searches ("boiler installation Summertown", "plumber Jericho"), and modern commuter-estate searches in Kidlington, Abingdon, and Witney. Each bucket behaves differently and rewards a different landing page. A single generic "plumber Oxford" page cannot convert any of them effectively.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Oxford plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Oxford and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Oxford postcodes including OX1, OX2, OX3, OX4, OX14, OX33, OX44.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Oxford map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Oxfordshire-wide coverage spanning Oxford city through to Abingdon, Kidlington, Witney, and the rural OX villages, with student HMO and listed-property service pages built in.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Oxford areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Oxford city centre, Jericho, Summertown, North Oxford, Cowley, Headington, Marston, Rose Hill, Iffley, Botley, Wolvercote, Kidlington, Abingdon, Radley, Wheatley, Witney, Eynsham, Kennington, and Cumnor.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                OX1, OX2, OX3, OX4, OX14, OX33, OX44
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Oxford-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Oxford central properties present unique plumbing challenges — Grade II listed terraces with restricted pipework routing, college-adjacent student houses with decades of bodged conversions, conservation-area restrictions on external boiler flues, and heritage plumbing elements (cast iron baths, original brass fittings) that need specialist not-generic maintenance. The Cowley and Headington student belt has high HMO density with corresponding compliance workload — annual gas certificates, CO alarms, boiler servicing, and landlord reporting. Rural villages (Wheatley, Eynsham, Cumnor) have oil heating and private water supplies.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Oxford competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Oxford plumber SEO is moderately developed but skewed heavily toward the emergency and central-city market. Specialists in HMO compliance, listed-property work, and the outer OX villages are underrepresented. A properly built site with dedicated HMO compliance pages, listed-property service content, and village landing pages (Wheatley, Kidlington, Abingdon, Witney) can reach top-three for its target terms within 4–6 months.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Oxford pricing is in line with Reading — 15–25% above the UK average in central OX1–OX4, premium pricing available in North Oxford, Summertown, and the listed-stock conservation areas. HMO compliance contracts are recurring revenue. From £79/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Oxford plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Oxford plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Oxford plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Oxford plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=oxford" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Oxford plumbing website →
          </Link>
        </div>

        <nav aria-label="Related pages" className="bg-white border border-slate-blue/10 rounded-2xl p-8">
          <h2 className="text-xl font-display font-bold text-navy-dark mb-4">Explore further</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-blue">
            <li>→ <Link href="/" className="text-amber hover:underline">Web design for plumbers</Link> — main UK service overview</li>
            <li>→ <Link href="/plumber-website-design-packages/" className="text-amber hover:underline">Plumber website packages</Link> — pricing from £79/month</li>
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