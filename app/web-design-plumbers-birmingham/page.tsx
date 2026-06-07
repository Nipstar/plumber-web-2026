import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Web Design for Plumbers in Birmingham | Plumber Websites',
  description: 'Web design for plumbers in Birmingham. West Midlands coverage including Solihull, Sutton Coldfield and the Black Country, with local SEO built in.',
  path: '/web-design-plumbers-birmingham/',
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
    "q": "Can you target the Solihull and Sutton Coldfield markets specifically?",
    "a": "Yes. These are higher-ticket areas compared to inner Birmingham and deserve dedicated pages with messaging that reflects the premium market. We structure the site so you rank for both affluent and emergency-callout searches."
  },
  {
    "q": "How do you handle the West Midlands hard water problem?",
    "a": "We build service pages specifically for limescale-related issues — failing combi boilers, scaled shower valves, and descaling service contracts. This is a massive local search market that most plumber websites ignore."
  },
  {
    "q": "Do you cover the Black Country as well as Birmingham?",
    "a": "Yes. We build pages for Wolverhampton, Walsall, Dudley, and Sandwell as separate local landing pages. Each ranks independently for its local search terms rather than getting diluted under a generic \"West Midlands\" heading."
  },
  {
    "q": "What about Coventry and Warwickshire?",
    "a": "We can build Coventry (CV postcode) and northern Warwickshire landing pages if you cover those areas. They share enough search characteristics with Birmingham to benefit from the same site architecture."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Birmingham",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-birmingham/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Birmingham, West Midlands. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Birmingham"
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
      "name": "Plumber Website Packages — Birmingham",
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
      "name": "Can you target the Solihull and Sutton Coldfield markets specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. These are higher-ticket areas compared to inner Birmingham and deserve dedicated pages with messaging that reflects the premium market. We structure the site so you rank for both affluent and emergency-callout searches."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle the West Midlands hard water problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build service pages specifically for limescale-related issues — failing combi boilers, scaled shower valves, and descaling service contracts. This is a massive local search market that most plumber websites ignore."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover the Black Country as well as Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build pages for Wolverhampton, Walsall, Dudley, and Sandwell as separate local landing pages. Each ranks independently for its local search terms rather than getting diluted under a generic \"West Midlands\" heading."
      }
    },
    {
      "@type": "Question",
      "name": "What about Coventry and Warwickshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can build Coventry (CV postcode) and northern Warwickshire landing pages if you cover those areas. They share enough search characteristics with Birmingham to benefit from the same site architecture."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Birmingham', href: '/web-design-plumbers-birmingham/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — West Midlands</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Birmingham</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Operating in the heart of the Midlands? We build high-conversion websites for Birmingham plumbers looking to lock down local search rankings and capture more emergency call-outs.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Birmingham Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Birmingham is the UK's second city and the largest local authority by population with over 1.15 million residents. The West Midlands conurbation extends through Solihull, Wolverhampton, Walsall, Dudley, and Sandwell — creating a massive catchment area of nearly 3 million people. Competition is fierce but less saturated than London, meaning a properly optimised website can deliver Page 1 rankings faster.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              The Birmingham property market mixes everything from inner-city flats in the Jewellery Quarter and Digbeth to large detached homes in Sutton Coldfield, Edgbaston, Harborne, and Solihull. Each property type brings different plumbing needs. An Edgbaston homeowner searching for a plumber is often looking for heritage-property-competent specialists; a Digbeth apartment tenant needs emergency response. Your website needs to speak to each audience with targeted service pages and local modifiers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Birmingham plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Birmingham and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Birmingham postcodes including B, DY, WS, WV, CV.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Birmingham map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> West Midlands-wide coverage with landing pages spanning Birmingham's inner suburbs through to the wider Black Country conurbation, plus affluent border towns in Worcestershire and Warwickshire.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Birmingham areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Birmingham city centre, Solihull, Sutton Coldfield, Edgbaston, Harborne, Erdington, Kings Heath, Moseley, Selly Oak, Digbeth, Jewellery Quarter, Wolverhampton, Walsall, Dudley, Sandwell, West Bromwich, Halesowen, Stourbridge, and Bromsgrove.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                B, DY, WS, WV, CV
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Birmingham-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              The West Midlands has some of the hardest water in the UK, driving constant demand for limescale-related repairs — failing combi boilers, blocked showers, scaled-up immersion elements, and descaling service contracts. Properties in older areas like Handsworth and Aston present pre-war copper and lead pipe issues. The affluent corridor from Edgbaston through to Solihull brings high-ticket installation work: full central heating refits, air source heat pumps, and premium bathroom fitouts. Your website needs to cover the spread.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Birmingham competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Birmingham's top-ranking plumber sites rely heavily on generic templates with thin local content. A properly built local SEO site with proper schema markup, postcode-specific landing pages, and GBP optimisation consistently outranks them within 6-9 months. The opportunity is real and less contested than comparable markets.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Birmingham pricing is broadly in line with the national average, with a clear premium available for work in Solihull, Edgbaston, and Sutton Coldfield. Positioning your website to capture those postcodes specifically raises your average ticket significantly. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Birmingham plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Birmingham plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Birmingham plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Birmingham plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=birmingham" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Birmingham plumbing website →
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