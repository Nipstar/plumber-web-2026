const fs = require('fs');
const path = require('path');

const locations = [
  {
    city: 'London',
    slug: 'london',
    region: 'Greater London',
    postcodes: ['E', 'EC', 'N', 'NW', 'SE', 'SW', 'W', 'WC'],
    intro: 'Standing out in the capital requires more than just a template. In a fiercely competitive market like London, your plumbing business needs a superior digital presence built specifically to convert traffic into booked jobs.',
    marketStats: 'London is the most competitive plumbing market in the UK, with over 12,000 registered plumbers across the Greater London area competing for emergency call-outs, boiler installations, bathroom refits, and landlord gas safety certificates. Search volume for "plumber near me" inside the M25 is the highest in the country — and so is the cost-per-click on paid ads. The plumbers winning this market are ranking organically in the Google Map Pack and the top three blue links. Everyone else pays through the nose for Google Ads or goes without work.',
    searchBehaviour: 'London homeowners expect instant results. When a boiler fails in a Clapham flat at 10pm on a Sunday, they are not scrolling past the first three results. They call the first plumber with a professional website, strong reviews, and a prominent click-to-call button. Your website needs to load in under two seconds, display your Gas Safe credentials prominently, list the boroughs and postcodes you cover, and make booking trivially easy.',
    boroughs: 'Islington, Camden, Hackney, Tower Hamlets, Southwark, Lambeth, Wandsworth, Hammersmith & Fulham, Kensington & Chelsea, Westminster, Brent, Ealing, Richmond, Kingston, Merton, Croydon, Bromley, Greenwich, Lewisham, Haringey, Enfield, Barnet, Harrow, Hillingdon, Hounslow, Waltham Forest, Redbridge, Newham, Barking & Dagenham, Havering, Bexley, Sutton, and the City of London',
    localPain: 'Properties in central London present unique plumbing challenges — Grade II listed homes, Victorian flat conversions with stacked soil pipes, restricted water pressure in high-rise apartments, hard water deposits from the Thames Water supply, and planning constraints that make boiler flue placement a legal headache. A generic plumber website will not communicate that you understand any of this. A specialist site positions your business as the one to call for London-specific problems.',
    competitorInsight: 'The top 3 Google Map Pack positions for "plumber London" searches are almost always held by agencies with 200+ reviews, rapid response messaging, and sub-two-second mobile load times. A new entrant cannot match review count overnight — but a properly built website with correct schema markup, borough-specific landing pages, and GBP integration closes the gap faster than any other marketing channel.',
    priceContext: 'London plumbing businesses charge 20-30% more than the national average, making a strong website an even higher ROI investment. A single boiler installation from an organic search inquiry pays for a year of our Master package. From £99/month.',
    localFeature: 'Borough-level targeting across all 32 London boroughs plus the City of London, with dedicated landing pages for each area you serve.',
    faqs: [
      { q: 'How long does it take to rank for "plumber in London" searches?', a: 'London is the most competitive plumbing search market in the UK. Expect 3-6 months for borough-level rankings (e.g. "plumber Clapham") and 9-18 months for competitive city-wide terms. Our Journeyman and Master packages include the ongoing SEO work required to achieve this.' },
      { q: 'Do you cover the full M25 area?', a: 'Yes. We build out landing pages for every borough and postcode you cover, whether you work central London only or the full Greater London area out to the M25.' },
      { q: 'How do you handle Gas Safe display for multi-engineer businesses?', a: 'We display your primary Gas Safe registration number prominently across the site and can list individual engineers with their own credentials where applicable. This matters for London landlords and commercial clients who require paper-trail verification.' },
      { q: 'Is London pricing different to your standard packages?', a: 'No. The £99, £169, and £249 per month packages apply nationally. London businesses often earn back the full year of Master package costs from a single installation job won through organic search.' }
    ]
  },
  {
    city: 'Manchester',
    slug: 'manchester',
    region: 'Greater Manchester',
    postcodes: ['M', 'BL', 'OL', 'SK', 'WN', 'WA'],
    intro: 'The Manchester market is bustling, but with so many plumbers competing for attention, your website needs to instantly communicate trust and authority.',
    marketStats: 'Manchester is one of the fastest-growing cities in the UK, with a booming property market driving constant demand for plumbing and heating services. The Greater Manchester conurbation covers 10 metropolitan boroughs and over 2.8 million residents, stretching from the city centre through Salford, Stockport, Trafford, Bolton, Bury, Oldham, Rochdale, Tameside, and Wigan. From new-build developments in Salford Quays and NOMA to Victorian terrace conversions in Didsbury, Chorlton, and Heaton, homeowners and landlords need reliable plumbing and heating contractors.',
    searchBehaviour: 'Manchester search volume for "plumber near me" is concentrated across dozens of distinct neighbourhoods, each with its own microclimate of demand. A homeowner in Altrincham will see completely different local results to someone in Rochdale — and each expects you to know their area. Without dedicated pages targeting each sub-region you cover, you are invisible to the majority of your potential customers even if you service the whole patch.',
    boroughs: 'Manchester City Centre, Salford, Stockport, Trafford, Bolton, Bury, Oldham, Rochdale, Tameside, Wigan, Altrincham, Sale, Didsbury, Chorlton, Prestwich, Whitefield, Eccles, Urmston, Cheadle, and Wilmslow',
    localPain: 'Manchester housing stock skews Victorian and Edwardian in the inner suburbs, creating specific plumbing realities: lead pipe replacement, high-pressure-system incompatible back boilers, flooded cellars during heavy rainfall, and damp-course issues caused by failed kitchen plumbing. New-build apartments in the city centre bring a different set: high-rise pressure boosters, communal heating system faults, and combi boiler flue regulations that vary between developments. A local specialist site that lists these specific services wins against generic competitors.',
    competitorInsight: 'The top-ranking Manchester plumber sites are split between large multi-engineer firms with dozens of reviews and nimble single-engineer operations who have invested in local SEO. The middle is empty. Plumbers without a proper website in Manchester are being squeezed out of the Map Pack entirely — local competitors with strong GBP listings and supporting websites dominate the top three organic positions across every borough.',
    priceContext: 'Manchester plumbing rates sit around the national average but volume is significantly higher than smaller cities. A website that captures even 10 qualified enquiries a month pays for itself many times over — particularly with boiler installations and bathroom refits forming the bulk of high-ticket work. From £99/month.',
    localFeature: 'Greater Manchester coverage across all 10 metropolitan boroughs with unique content for each local market, plus surrounding Cheshire and Lancashire towns.',
    faqs: [
      { q: 'Do you build pages for specific Manchester neighbourhoods?', a: 'Yes. Our Journeyman package includes up to 10 location landing pages so you can target individual areas like Didsbury, Chorlton, or Altrincham. Each page is optimised for local search terms specific to that neighbourhood.' },
      { q: 'How do I compete against the big multi-engineer Manchester firms?', a: 'Niche down. Big firms dominate broad terms like "plumber Manchester" but lose long-tail searches like "landlord gas certificate Didsbury" or "boiler replacement Chorlton". We build your site to win those exact searches, which are higher-intent and easier to rank.' },
      { q: 'Can you help with commercial plumbing leads in the city centre?', a: 'Yes. Manchester city centre has a strong commercial plumbing market — student lets, HMOs, restaurants, and office blocks. We build separate service pages for commercial work with the messaging and trust signals required to win B2B enquiries.' },
      { q: 'What about the outer Greater Manchester boroughs?', a: 'We cover the full GM10 area plus outer commuter towns like Wilmslow and Knutsford in Cheshire. If you service it, we build a page for it.' }
    ]
  },
  {
    city: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    postcodes: ['B', 'DY', 'WS', 'WV', 'CV'],
    intro: 'Operating in the heart of the Midlands? We build high-conversion websites for Birmingham plumbers looking to lock down local search rankings and capture more emergency call-outs.',
    marketStats: 'Birmingham is the UK\'s second city and the largest local authority by population with over 1.15 million residents. The West Midlands conurbation extends through Solihull, Wolverhampton, Walsall, Dudley, and Sandwell — creating a massive catchment area of nearly 3 million people. Competition is fierce but less saturated than London, meaning a properly optimised website can deliver Page 1 rankings faster.',
    searchBehaviour: 'The Birmingham property market mixes everything from inner-city flats in the Jewellery Quarter and Digbeth to large detached homes in Sutton Coldfield, Edgbaston, Harborne, and Solihull. Each property type brings different plumbing needs. An Edgbaston homeowner searching for a plumber is often looking for heritage-property-competent specialists; a Digbeth apartment tenant needs emergency response. Your website needs to speak to each audience with targeted service pages and local modifiers.',
    boroughs: 'Birmingham city centre, Solihull, Sutton Coldfield, Edgbaston, Harborne, Erdington, Kings Heath, Moseley, Selly Oak, Digbeth, Jewellery Quarter, Wolverhampton, Walsall, Dudley, Sandwell, West Bromwich, Halesowen, Stourbridge, and Bromsgrove',
    localPain: 'The West Midlands has some of the hardest water in the UK, driving constant demand for limescale-related repairs — failing combi boilers, blocked showers, scaled-up immersion elements, and descaling service contracts. Properties in older areas like Handsworth and Aston present pre-war copper and lead pipe issues. The affluent corridor from Edgbaston through to Solihull brings high-ticket installation work: full central heating refits, air source heat pumps, and premium bathroom fitouts. Your website needs to cover the spread.',
    competitorInsight: 'Birmingham\'s top-ranking plumber sites rely heavily on generic templates with thin local content. A properly built local SEO site with proper schema markup, postcode-specific landing pages, and GBP optimisation consistently outranks them within 6-9 months. The opportunity is real and less contested than comparable markets.',
    priceContext: 'Birmingham pricing is broadly in line with the national average, with a clear premium available for work in Solihull, Edgbaston, and Sutton Coldfield. Positioning your website to capture those postcodes specifically raises your average ticket significantly. From £99/month.',
    localFeature: 'West Midlands-wide coverage with landing pages spanning Birmingham\'s inner suburbs through to the wider Black Country conurbation, plus affluent border towns in Worcestershire and Warwickshire.',
    faqs: [
      { q: 'Can you target the Solihull and Sutton Coldfield markets specifically?', a: 'Yes. These are higher-ticket areas compared to inner Birmingham and deserve dedicated pages with messaging that reflects the premium market. We structure the site so you rank for both affluent and emergency-callout searches.' },
      { q: 'How do you handle the West Midlands hard water problem?', a: 'We build service pages specifically for limescale-related issues — failing combi boilers, scaled shower valves, and descaling service contracts. This is a massive local search market that most plumber websites ignore.' },
      { q: 'Do you cover the Black Country as well as Birmingham?', a: 'Yes. We build pages for Wolverhampton, Walsall, Dudley, and Sandwell as separate local landing pages. Each ranks independently for its local search terms rather than getting diluted under a generic "West Midlands" heading.' },
      { q: 'What about Coventry and Warwickshire?', a: 'We can build Coventry (CV postcode) and northern Warwickshire landing pages if you cover those areas. They share enough search characteristics with Birmingham to benefit from the same site architecture.' }
    ]
  },
  {
    city: 'Liverpool',
    slug: 'liverpool',
    region: 'Merseyside',
    postcodes: ['L', 'CH', 'WA', 'PR'],
    intro: 'Whether you cover the city centre or the surrounding Merseyside areas, a specialist plumbing website ensures you are the first call a Liverpool homeowner makes when their boiler breaks.',
    marketStats: 'Liverpool and the wider Merseyside region offer strong demand for plumbing services, driven by a mix of period properties, student lettings, and ongoing regeneration projects. The L1-L40 postcode area covers nearly 1.4 million residents across the city itself plus Sefton, Knowsley, St Helens, and the Wirral. Recent years have seen major investment in new housing developments around the Baltic Triangle, Royal Albert Dock, and Liverpool Waters — each requiring plumbing and heating contractors.',
    searchBehaviour: 'Merseyside covers a large geographic area from Southport in the north to the Wirral peninsula across the water. Many Liverpool plumbers serve the full region but only rank for their home postcode. Customers search "plumber near me" from Birkenhead, Bootle, or Crosby — all technically Merseyside, all technically your catchment — and you miss them because your site does not have a dedicated page for those areas.',
    boroughs: 'Liverpool city centre, Aigburth, Woolton, Allerton, Mossley Hill, Childwall, West Derby, Walton, Anfield, Toxteth, Bootle, Crosby, Waterloo, Formby, Southport, Huyton, Prescot, St Helens, Birkenhead, Wallasey, Bebington, and Hoylake',
    localPain: 'Liverpool housing stock mixes Victorian terraced streets in Anfield, Toxteth, and Walton with inter-war semis in West Derby and Aigburth, plus modern apartments in the city centre. The student letting market in L7 and L17 creates constant demand for boiler service contracts, HMO compliance work, and landlord gas safety certificates. The Wirral side of the Mersey brings a different mix — coastal corrosion issues on homes near the estuary, and high-ticket installation work in affluent Heswall, West Kirby, and Caldy.',
    competitorInsight: 'Liverpool\'s plumber SEO is notably less developed than comparable cities. Many plumbers rely on Checkatrade and word-of-mouth without a serious website presence. A properly built, schema-rich site can take top positions for major Liverpool search terms within 6 months. The Wirral side is even less contested and represents the biggest ranking opportunity in Merseyside.',
    priceContext: 'Liverpool plumbing rates sit slightly below the UK average for labour, but volume and repeat business are strong. A website that consistently generates 15+ enquiries per month will drive a six-figure plumbing business from organic traffic alone. From £99/month.',
    localFeature: 'Merseyside-wide coverage including the Wirral peninsula, giving you visibility across both sides of the Mersey and into West Lancashire.',
    faqs: [
      { q: 'Do you cover both Liverpool and the Wirral?', a: 'Yes. We treat the Wirral as a separate local market with its own landing page because the search behaviour and customer base are distinct from Liverpool city itself. Covering both doubles your visible catchment.' },
      { q: 'How do you help with the Liverpool student HMO market?', a: 'We build dedicated pages for landlord gas safety certificates, HMO compliance work, and annual boiler service contracts. These are exactly the searches Liverpool letting agents and landlords make — and they are higher-margin than emergency work.' },
      { q: 'Can you target specific postcodes like L17 or L18?', a: 'Yes. Our Journeyman and Master packages include postcode-specific landing pages for affluent areas like Woolton, Allerton, and Mossley Hill where higher-ticket work is concentrated.' },
      { q: 'What about Southport and Formby?', a: 'Sefton postcodes (PR8, PR9, L37, L38) are a strong secondary market with less competition than central Liverpool. We build dedicated pages for these if you cover them.' }
    ]
  },
  {
    city: 'Portsmouth',
    slug: 'portsmouth',
    region: 'Hampshire',
    postcodes: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO11', 'PO12', 'PO13', 'PO14', 'PO15', 'PO16'],
    intro: 'As a key south coast hub, Portsmouth presents a massive opportunity for local tradesmen. Take the lion\'s share of the local market with a site built exclusively for lead generation.',
    marketStats: 'Portsmouth and the surrounding Hampshire coast — Gosport, Fareham, Havant, Emsworth, and Waterlooville — form a densely populated area with strong demand for domestic plumbing and heating services. The city itself has over 200,000 residents, with another 400,000 across the wider south-east Hampshire conurbation. The mix of naval housing in Eastney and Hilsea, period terraces in Old Portsmouth and Southsea, and modern developments around Gunwharf Quays creates diverse plumbing needs across every price point.',
    searchBehaviour: 'The south coast market is tight-knit. Homeowners trust local tradespeople and often search specifically for "plumber in Portsmouth" or "boiler engineer Gosport" rather than broader terms. Your website needs to rank for these exact phrases. We ensure every page targets the specific towns and postcodes you serve along the Hampshire coast — competition is moderate compared to larger cities, meaning there is genuine opportunity to dominate local search with the right website.',
    boroughs: 'Portsmouth city centre, Southsea, Old Portsmouth, Portsea, Hilsea, Cosham, Paulsgrove, Drayton, Farlington, Gosport, Lee-on-the-Solent, Fareham, Titchfield, Locks Heath, Park Gate, Warsash, Havant, Emsworth, Waterlooville, Clanfield, Denmead, and Hayling Island',
    localPain: 'Coastal Hampshire properties battle salt-laden air that accelerates corrosion on outdoor copper pipework, external boiler flues, and hot water cylinders. Many Portsmouth homes are converted Victorian and Edwardian terraces with original cast-iron waste stacks that fail regularly. The naval housing estates have a very specific plumbing profile — standardised combi boiler installations from the 1990s that are now at end-of-life. Gosport and Lee-on-the-Solent include a high concentration of ex-naval family homes facing boiler replacement en masse.',
    competitorInsight: 'Portsmouth\'s top plumber search positions have been dominated by template-based agency sites for years. A specialist site with proper local schema, Portsmouth-specific service pages, and a named Portsmouth-area testimonial can overtake them within 4-6 months. The Gosport and Havant markets are even less contested.',
    priceContext: 'Portsmouth pricing sits just above the south-coast average, with a premium available for work in Emsworth, Old Portsmouth conservation zones, and parts of Lee-on-the-Solent. From £99/month.',
    localFeature: 'Hampshire coastal coverage spanning Portsmouth through to Fareham, Havant, and the Meon Valley, with hyper-local pages for each town and conurbation.',
    faqs: [
      { q: 'Do you cover Gosport and the Fareham peninsula?', a: 'Yes. Gosport, Fareham, Titchfield, and the surrounding peninsula are treated as distinct markets with dedicated landing pages. Gosport especially has strong search demand but surprisingly few well-optimised plumber websites competing for it.' },
      { q: 'Can you help with ex-naval housing boiler replacements?', a: 'Yes. This is a specific market — standardised 1990s combi boiler installations reaching end-of-life. We build a landing page for "boiler replacement Gosport" or "boiler replacement Portsmouth" that speaks directly to this demographic.' },
      { q: 'What about Hayling Island and the surrounding coastal villages?', a: 'Hayling Island (PO11), Emsworth (PO10), and the coastal villages between Portsmouth and Chichester are covered if you service them. These are low-competition, high-value postcodes.' },
      { q: 'How does the salt air affect what services I should feature?', a: 'Coastal Hampshire homes need more frequent external pipework servicing, flue replacements, and cylinder inspections due to salt-accelerated corrosion. We build a specific service page for "coastal plumbing maintenance" that captures this unique local search intent.' }
    ]
  },
  {
    city: 'Andover',
    slug: 'andover',
    region: 'North Hampshire',
    postcodes: ['SP10', 'SP11', 'SP9', 'SO20', 'SO21', 'RG28'],
    intro: 'Serving the local Andover community? We build tailored, mobile-first websites that establish your reputation and capture high-value local plumbing jobs right on your doorstep.',
    marketStats: 'Andover is a growing market town in north Hampshire with a strong community focus and a population of around 50,000, rising to 120,000 including the surrounding Test Valley district and nearby villages. The area benefits from significant MOD presence — Tidworth Garrison, Thruxton airfield, and various military housing estates — plus a growing commuter population working in Winchester, Basingstoke, and even London. Plumbing demand is steady year-round with strong spikes during winter freeze periods.',
    searchBehaviour: 'In smaller towns like Andover, there are fewer plumbers competing online — which means ranking on page one is achievable significantly faster than in a major city. But you still need a website built for local SEO. Andover residents search specifically for "plumber Andover" or "boiler repair Andover" rather than broader terms, and they expect the result to feel genuinely local. A website that lists the specific villages and surrounding areas — Whitchurch, Hurstbourne Tarrant, Stockbridge — immediately signals trust.',
    boroughs: 'Andover town centre, Andover Down, Charlton, Weyhill, Penton Mewsey, Anna Valley, Abbotts Ann, Goodworth Clatford, Whitchurch, Hurstbourne Tarrant, Hurstbourne Priors, Tidworth, Ludgershall, Stockbridge, Longparish, Barton Stacey, Over Wallop, and Nether Wallop',
    localPain: 'North Hampshire housing skews rural — many properties are off the gas grid and rely on oil heating systems, LPG, or electric immersion heaters. Oil boiler servicing, oil tank replacements, and conversions from oil to air source heat pumps are a growing local market. Village properties often have ageing lead pipework, private water supplies from boreholes, and septic tank drainage systems. A generic plumbing site will not communicate competency in any of this. A specialist site wins the work.',
    competitorInsight: 'Andover\'s plumber SEO is significantly underdeveloped — most local plumbers rely entirely on Checkatrade, Rated People, or word-of-mouth without any real website. A properly built site can rank in the top three for "plumber Andover" within 3-4 months with no serious competition in the way. This is the easiest of our six markets to dominate quickly.',
    priceContext: 'Andover and the Test Valley market operates on rural-Hampshire rates — broadly in line with national average for emergency work but with strong premium pricing available for specialist services like oil-to-heat-pump conversions and off-grid installations. From £99/month.',
    localFeature: 'Test Valley and north Hampshire coverage, turning a small-town presence into a regional one across the surrounding villages, market towns, and MOD housing estates.',
    faqs: [
      { q: 'Can a small-town plumber really rank on page one?', a: 'In Andover, yes — faster than in any larger city we cover. Most local plumbers have no real website, making page-one rankings achievable within 3-4 months rather than the 9-18 month timeline typical in competitive markets like London or Manchester.' },
      { q: 'Do you cover rural villages around Andover?', a: 'Yes. We build pages for Whitchurch, Stockbridge, Hurstbourne Tarrant, Tidworth, Ludgershall, and the surrounding Test Valley villages. These are low-competition, high-value search terms.' },
      { q: 'What about oil boilers and off-grid heating?', a: 'North Hampshire has significant off-grid housing. We build service pages specifically for oil boiler servicing, oil tank replacements, LPG systems, and oil-to-heat-pump conversions — markets ignored by generic plumber sites.' },
      { q: 'Do you handle MOD housing work for Tidworth and Thruxton?', a: 'Yes. MOD family housing in Tidworth and Perham Down brings steady plumbing demand, especially during tenancy changeovers. We build content that speaks to this market including landlord gas safety certificate services.' }
    ]
  }
];

const template = (loc) => {
  const postcodeList = loc.postcodes.join(', ');
  const faqSchemaObj = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return `import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Web Design for Plumbers in ${loc.city} | PlumberWebDesign.co.uk' },
  description: 'Specialist web design for plumbers in ${loc.city}. Local SEO-optimised websites that rank when ${loc.city} customers search for plumbers nearby. From £99/month.',
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

const faqs = ${JSON.stringify(loc.faqs, null, 2)};

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — ${loc.city}",
    "url": "https://plumberwebdesign.co.uk/web-design-plumbers-${loc.slug}/",
    "logo": "https://plumberwebdesign.co.uk/images/logo.png",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in ${loc.city}, ${loc.region}. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${loc.city}",
      "addressRegion": "${loc.region}",
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

  const faqSchema = ${JSON.stringify(faqSchemaObj, null, 2)};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in ${loc.city}', href: '/web-design-plumbers-${loc.slug}/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — ${loc.region}</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in ${loc.city}</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            ${loc.intro}
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The ${loc.city} Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              ${loc.marketStats}
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              ${loc.searchBehaviour}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for ${loc.city} plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within ${loc.city} and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for ${loc.city} postcodes including ${postcodeList}.</div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">${loc.city} areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              ${loc.boroughs}.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                ${postcodeList}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">${loc.city}-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              ${loc.localPain}
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The ${loc.city} competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            ${loc.competitorInsight}
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            ${loc.priceContext}
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for ${loc.city} plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">${loc.city} plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate ${loc.city} plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your ${loc.city} plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=${loc.slug}" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your ${loc.city} plumbing website →
          </Link>
        </div>

      </div>
    </div>
  );
}`;
};

locations.forEach((loc) => {
  const dirPath = path.join(__dirname, 'app', 'web-design-plumbers-' + loc.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(loc));
  console.log('Generated location page for ' + loc.city);
});
