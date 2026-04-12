const fs = require('fs');
const path = require('path');

const locations = [
  {
    city: 'London',
    slug: 'london',
    intro: 'Standing out in the capital requires more than just a template. In a fiercely competitive market like London, your plumbing business needs a superior digital presence built specifically to convert traffic into booked jobs.',
    seoBody: 'London is the most competitive plumbing market in the UK. There are over 12,000 registered plumbers across the Greater London area competing for the same emergency call-outs, boiler installations, and bathroom refits. The plumbers who win are the ones showing up in the Google Map Pack for searches like "emergency plumber Hackney" or "boiler repair Croydon" — not the ones relying on word of mouth alone.',
    whyLocal: 'London homeowners expect instant results. When a boiler fails in a Clapham flat at 10pm on a Sunday, they are not scrolling past page one. They call the first plumber with a professional website, strong reviews, and a clear "Call Now" button. Your website needs to load in under 2 seconds, display your Gas Safe credentials prominently, and make it trivially easy to call or book.',
    areas: 'We build dedicated landing pages targeting the specific boroughs and neighbourhoods you serve — from Islington and Camden to Bromley and Sutton. Each page is optimised for hyper-local search terms so you rank where your customers actually are.',
    localFeature: 'Borough-level targeting across all 32 London boroughs with dedicated landing pages for each area you serve.'
  },
  {
    city: 'Manchester',
    slug: 'manchester',
    intro: 'The Manchester market is bustling, but with so many plumbers competing for attention, your website needs to instantly communicate trust and authority.',
    seoBody: 'Manchester is one of the fastest-growing cities in the UK, with a booming property market driving constant demand for plumbing and heating services. From new-build developments in Salford Quays to Victorian terrace conversions in Didsbury, homeowners and landlords need reliable tradespeople. The plumbers capturing this demand are the ones ranking for "plumber near me" across Greater Manchester — not those still handing out flyers.',
    whyLocal: 'Manchester\'s population spans a wide area from the city centre through Stockport, Oldham, Bolton, and Wigan. Each of these areas has its own search demand. A homeowner in Altrincham searching for a plumber will see completely different results to someone in Rochdale. Without dedicated pages targeting each area, you are invisible to most of your potential customers.',
    areas: 'We create targeted service pages for areas across Greater Manchester — Salford, Stockport, Trafford, Bolton, Bury, Oldham, Tameside, and beyond. Each page ranks independently for its local search terms.',
    localFeature: 'Greater Manchester area targeting covering 10 metropolitan boroughs with unique content for each local market.'
  },
  {
    city: 'Birmingham',
    slug: 'birmingham',
    intro: 'Operating in the heart of the Midlands? We build high-conversion websites for Birmingham plumbers looking to lock down local search rankings and capture more emergency call-outs.',
    seoBody: 'Birmingham is the UK\'s second city and the largest local authority by population. The West Midlands conurbation extends through Solihull, Wolverhampton, Walsall, and Dudley — creating a massive catchment area for plumbing businesses. Competition is fierce but less saturated than London, meaning a properly optimised website can deliver results faster.',
    whyLocal: 'The Birmingham property market mixes everything from inner-city flats in the Jewellery Quarter to large detached homes in Sutton Coldfield and Edgbaston. Each property type brings different plumbing needs — from first-fix on new builds to full central heating replacements in older homes. Your website needs to speak to each of these audiences with targeted service pages.',
    areas: 'We build out landing pages for specific West Midlands areas — Solihull, Sutton Coldfield, Edgbaston, Erdington, Wolverhampton, Walsall, and Dudley — so you appear in local search results right where your customers live.',
    localFeature: 'West Midlands-wide coverage with landing pages spanning Birmingham\'s inner suburbs through to the wider Black Country conurbation.'
  },
  {
    city: 'Liverpool',
    slug: 'liverpool',
    intro: 'Whether you cover the city centre or the surrounding Merseyside areas, a specialist plumbing website ensures you are the first call a Liverpool homeowner makes when their boiler breaks.',
    seoBody: 'Liverpool and the wider Merseyside region offer strong demand for plumbing services, driven by a mix of period properties, student lettings, and ongoing regeneration projects. The city has seen major investment in new housing developments, each requiring plumbing and heating contractors. Plumbers who rank locally for areas like Aigburth, Woolton, Crosby, and St Helens can build highly profitable businesses.',
    whyLocal: 'Merseyside covers a large geographic area from Southport in the north to the Wirral peninsula across the water. Many Liverpool plumbers serve the full region but only rank in one or two postcodes. We build your site so that when someone in Birkenhead or Bootle searches for emergency plumbing, your business appears alongside — or above — the local competition.',
    areas: 'Dedicated pages for Liverpool city centre, Aigburth, Woolton, Crosby, Bootle, St Helens, Wirral, and the wider Merseyside region. Each page targets local search terms specific to that area.',
    localFeature: 'Merseyside-wide coverage including the Wirral peninsula, giving you visibility across both sides of the Mersey.'
  },
  {
    city: 'Portsmouth',
    slug: 'portsmouth',
    intro: 'As a key south coast hub, Portsmouth presents a massive opportunity for local tradesmen. Take the lion\'s share of the local market with a site built exclusively for lead generation.',
    seoBody: 'Portsmouth and the surrounding Hampshire coast — Gosport, Fareham, Havant, and Waterlooville — form a densely populated area with strong demand for domestic plumbing and heating services. The mix of naval housing, period terraces in Old Portsmouth, and modern developments in Gunwharf creates diverse plumbing needs. Competition is moderate compared to larger cities, meaning there is genuine opportunity to dominate local search with the right website.',
    whyLocal: 'The south coast market is tight-knit. Homeowners trust local tradespeople and often search specifically for "plumber in Portsmouth" or "boiler engineer Gosport" rather than broader terms. Your website needs to rank for these exact phrases. We ensure every page targets the specific towns and postcodes you serve along the Hampshire coast.',
    areas: 'We build pages targeting Portsmouth, Southsea, Cosham, Gosport, Fareham, Havant, Waterlooville, and surrounding Hampshire towns. Each page captures search traffic from residents in that specific area.',
    localFeature: 'Hampshire coastal coverage spanning Portsmouth through to Fareham and Havant, with hyper-local pages for each town.'
  },
  {
    city: 'Andover',
    slug: 'andover',
    intro: 'Serving the local Andover community? We build tailored, mobile-first websites that establish your reputation and capture high-value local plumbing jobs right on your doorstep.',
    seoBody: 'Andover is a growing market town in north Hampshire with a strong community focus. Plumbing businesses here benefit from loyal repeat customers and word-of-mouth referrals — but increasingly, even local recommendations start with a Google search. If a neighbour recommends you, the first thing the homeowner does is look you up online. Without a professional website, you lose credibility before the conversation even starts.',
    whyLocal: 'In smaller towns like Andover, there are fewer plumbers competing online — which means ranking on page one is achievable faster than in a major city. But you still need a website built for local SEO. We target not just Andover itself but surrounding villages and towns like Whitchurch, Tidworth, Ludgershall, and Stockbridge, expanding your reach without expanding your drive time.',
    areas: 'We cover Andover, Whitchurch, Tidworth, Ludgershall, Stockbridge, and the surrounding Test Valley district. Each area page captures searches from residents who might otherwise call a competitor in Winchester or Basingstoke.',
    localFeature: 'Test Valley and north Hampshire coverage, turning a small-town presence into a regional one across the surrounding villages and market towns.'
  }
];

const template = (loc) => `import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';

export const metadata = {
  title: { absolute: 'Web Design for Plumbers in ${loc.city} | PlumberWebDesign.co.uk' },
  description: 'Specialist web design for plumbers in ${loc.city}. Local SEO-optimised websites that rank when customers search for plumbers in your area. Packages from £99/month.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/web-design-plumbers-${loc.slug}/' }
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

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — ${loc.city}",
    "url": "https://plumberwebdesign.co.uk/web-design-plumbers-${loc.slug}/",
    "logo": "https://plumberwebdesign.co.uk/images/logo.png",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in ${loc.city}. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${loc.city}",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "${loc.city}"
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
      "name": "Plumber Website Packages — ${loc.city}",
      "itemListElement": [
        { "@type": "Offer", "name": "Apprentice", "price": "99", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Journeyman", "price": "169", "priceCurrency": "GBP" },
        { "@type": "Offer", "name": "Master", "price": "249", "priceCurrency": "GBP" }
      ]
    }
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
       <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in ${loc.city}</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            ${loc.intro}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The ${loc.city} Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              ${loc.seoBody}
            </p>
            <p className="text-lg text-slate-blue mb-8 leading-relaxed">
              ${loc.whyLocal}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">Included in your ${loc.city} build:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service radius within ${loc.city} and surrounding areas.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Area-Specific Pages:</strong> ${loc.areas}</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the ${loc.city} map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> ${loc.localFeature}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact/?location=${loc.slug}" className="inline-block bg-amber text-navy-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
            Get a quote for your ${loc.city} plumbing website →
          </Link>
        </div>

      </div>
    </div>
  );
}`;

locations.forEach((loc) => {
  const dirPath = path.join(__dirname, 'app', 'web-design-plumbers-' + loc.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(loc));
  console.log('Generated location page for ' + loc.city);
});
