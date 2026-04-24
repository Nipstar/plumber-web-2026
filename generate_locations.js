const fs = require('fs');
const path = require('path');

const locations = [
  {
    city: 'London',
    slug: 'london',
    region: 'Greater London',
    postcodes: ['E', 'EC', 'N', 'NW', 'SE', 'SW', 'W', 'WC'],
    metaDesc: 'Web design for plumbers in London. Borough-level landing pages across all 32 London boroughs, M25-wide local SEO, GBP management. From £99/month.',
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
    metaDesc: 'Web design for plumbers in Manchester. Landing pages for all 10 Greater Manchester boroughs from Didsbury to Salford, GBP management. From £99/month.',
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
    metaDesc: 'Web design for plumbers in Birmingham. West Midlands-wide coverage including Solihull, Sutton Coldfield, and the Black Country. Local SEO built in. From £99/month.',
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
    metaDesc: 'Web design for plumbers in Liverpool. Merseyside-wide coverage across both sides of the Mersey including the Wirral and Southport. Local SEO built in. From £99/month.',
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
    metaDesc: 'Web design for plumbers in Portsmouth. South coast Hampshire coverage including Gosport, Fareham, Havant, and Southsea. Local SEO and GBP management. From £99/month.',
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
    metaDesc: 'Web design for plumbers in Andover. North Hampshire + Test Valley coverage including Whitchurch, Stockbridge, and Tidworth. Low competition, fast ranking. From £99/month.',
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
  },
  {
    city: 'Southampton',
    slug: 'southampton',
    region: 'Hampshire',
    postcodes: ['SO14', 'SO15', 'SO16', 'SO17', 'SO18', 'SO19', 'SO30', 'SO31', 'SO40', 'SO45', 'SO50', 'SO53'],
    metaDesc: 'Web design for plumbers in Southampton. Solent-wide coverage including Woolston, Bitterne, Eastleigh, and the New Forest edge. Local SEO built in. From £99/month.',
    intro: 'Southampton is a busy south coast port city with a competitive plumbing market. Your website needs to cut through noise across the student lettings, waterside new-builds, and period-terrace markets that define the Solent plumbing trade.',
    marketStats: 'Southampton and the wider Solent conurbation cover roughly 380,000 residents across the city, Eastleigh, Totton, Romsey, and the New Forest edge. The city itself has over 250,000 people and two universities (Southampton and Solent) generating constant HMO and landlord plumbing demand. Port-related housing in Woolston and Shirley, waterside new-build developments at Ocean Village and Centenary Quay, and the Victorian terrace belts of Portswood, Highfield, and St Denys create a diverse plumbing catchment.',
    searchBehaviour: 'Southampton plumbing searches divide sharply by neighbourhood. Students in Portswood, Highfield, and Bevois Valley generate boiler service and gas safety certificate searches. Waterside new-build owners in Ocean Village and Woolston search for warranty-period combi faults and shower pressure fixes. Suburban searches from Bitterne, Lordswood, and Eastleigh focus on emergency call-outs and bathroom refits. A website that mentions none of these specifically will not rank for any of them.',
    boroughs: 'Southampton City Centre, Portswood, Highfield, Bassett, Shirley, Millbrook, Lordswood, Bitterne, Woolston, Weston, St Denys, Bevois Valley, Netley, Hamble, Hedge End, West End, Eastleigh, Chandlers Ford, Romsey, Totton, Marchwood, and Fair Oak',
    localPain: 'Southampton housing mixes Victorian terraces with failing cast-iron soil stacks in Portswood and Inner Avenue, Edwardian semis in Bassett, 1930s stock in Bitterne and Sholing, and modern apartments with communal heating systems at Ocean Village. The coastal and riverside air along the Itchen and Test drives corrosion on external pipework. Student HMO compliance — gas certificates, CO alarm servicing, annual boiler checks — is a massive recurring market for any plumber willing to target letting agents directly through their website.',
    competitorInsight: 'The top-ranking Southampton plumber websites lean heavily on generic template builds with city-wide targeting and thin content. A purpose-built site with postcode-specific landing pages (SO14–SO19 especially) and a dedicated HMO and student-let compliance page can overtake them within 4–6 months. Eastleigh, Totton, and Romsey are even less contested than central Southampton.',
    priceContext: 'Southampton plumbing rates sit just above the national average on labour, with strong premium pricing available in waterside postcodes (SO14, SO31) and affluent Hampshire commuter villages. Annual student HMO compliance contracts are recurring revenue most competitors ignore. From £99/month.',
    localFeature: 'Solent-wide coverage spanning Southampton city through to Eastleigh, Romsey, Totton, and the Hamble peninsula, with dedicated pages for each student-heavy and waterside postcode.',
    faqs: [
      { q: 'Can you help with the Southampton student HMO market?', a: 'Yes. Student-let compliance (annual gas safety certificates, CO alarm checks, boiler servicing) is a huge recurring-revenue market in SO14–SO17. We build a dedicated page for landlord and letting-agent services optimised for searches like "landlord gas certificate Southampton".' },
      { q: 'Do you cover Eastleigh and Chandlers Ford as well as Southampton?', a: 'Yes. Eastleigh, Chandlers Ford, Hedge End, and the northern suburbs get separate landing pages rather than being folded under a generic "Southampton" heading. Each ranks for its own local searches.' },
      { q: 'How do waterside new-builds affect what services I should feature?', a: 'Ocean Village, Centenary Quay, and Woolston waterside flats have a specific plumbing profile — combi boilers reaching 10-year warranty end-of-life, communal heating faults, and low-pressure shower fixes. A dedicated page for waterside apartment plumbing wins these searches.' },
      { q: 'What about the New Forest edge?', a: 'Totton, Marchwood, and Hythe are covered as separate New Forest-facing pages if you service them. Rural properties here often have oil heating similar to north Hampshire, which opens up heat pump conversion work.' }
    ]
  },
  {
    city: 'Reading',
    slug: 'reading',
    region: 'Berkshire',
    postcodes: ['RG1', 'RG2', 'RG4', 'RG5', 'RG6', 'RG30', 'RG31', 'RG7', 'RG8', 'RG10'],
    metaDesc: 'Web design for plumbers in Reading. M4 corridor coverage including Caversham, Lower Earley, Tilehurst, and Woodley. Tech-savvy customers, fast ranking. From £99/month.',
    intro: 'Reading is an M4 corridor tech hub with affluent commuter housing and a digital-first customer base. Your plumbing website must load fast, book appointments instantly, and look sharp on the iPhones Reading homeowners live on.',
    marketStats: 'Reading is one of the most economically active towns in the UK, with a population of around 240,000 and a total catchment including Wokingham, Earley, Tilehurst, and Woodley pushing past 400,000. The M4 corridor concentration of tech companies (Microsoft, Oracle, SAP, Huawei) drives affluent commuter housing demand. Reading homeowners expect digital-first service — online booking, instant quotes, reviews verified on Google — and they will not tolerate a slow or clunky plumber website.',
    searchBehaviour: 'Reading searchers are tech-native and mobile-first. Over 78% of plumbing searches in RG postcodes happen on mobile devices, and the drop-off rate for sites loading over 2 seconds is significantly higher than the UK average. "Emergency plumber Reading" and "boiler repair Caversham" are high-intent queries that reward the fastest, cleanest websites. The affluent sub-markets (Sonning, Pangbourne, Caversham Heights) search for premium installation work — combi replacements with smart thermostats, bathroom refits, and air source heat pump consultations.',
    boroughs: 'Reading town centre, Caversham, Caversham Heights, Lower Earley, Earley, Woodley, Tilehurst, Calcot, Purley-on-Thames, Pangbourne, Sonning, Twyford, Wokingham, Winnersh, Burghfield, Theale, and Mortimer',
    localPain: 'Reading housing splits between Victorian and Edwardian terraces in central RG1 (Oxford Road, Newtown), 1930s semis in Tilehurst and Caversham, and modern estates in Lower Earley and Woodley. Hard water from the Thames Water supply drives constant combi boiler scale failures and shower valve issues. Affluent river-facing properties in Sonning, Pangbourne, and Caversham Heights have period plumbing that needs specialist restoration rather than rip-and-replace. A website that speaks to both budget-conscious student-area work and premium-period restoration wins the full market.',
    competitorInsight: 'The top-ranking Reading plumber websites are mostly generic tradesperson listing sites (Checkatrade front-pages) rather than proper agency-built plumber sites. A specialist plumbing site with proper schema, M4 corridor postcode targeting, and a clear premium-installation service page can overtake them within 3–5 months. Wokingham and Woodley have almost zero dedicated plumber SEO competition.',
    priceContext: 'Reading plumbing rates are 15–25% above the national average due to the affluent commuter catchment, with premium pricing available in Sonning, Pangbourne, and Caversham Heights. Single-job average ticket is high — smart thermostat installations, heat pump consultations, and bathroom refits dominate. From £99/month.',
    localFeature: 'M4 corridor coverage across Reading, Wokingham, Earley, Tilehurst, Caversham, and the Thames-side villages, with dedicated affluent-market pages for Sonning, Pangbourne, and Twyford.',
    faqs: [
      { q: 'How important is page speed for Reading customers?', a: 'Critical. Reading has a tech-savvy, mobile-first customer base with higher-than-average drop-off rates on slow sites. We build every page to load under 2 seconds on 4G and score 90+ on Google PageSpeed Insights.' },
      { q: 'Can you help target the affluent Reading sub-markets?', a: 'Yes. Sonning, Pangbourne, Caversham Heights, and the Thames-side villages support premium installation pricing. We build dedicated landing pages for these postcodes targeting high-ticket terms like "boiler installation Sonning" or "heat pump Pangbourne".' },
      { q: 'Do you handle the Wokingham and Woodley markets too?', a: 'Yes. Wokingham (RG40, RG41) and Woodley are treated as separate markets with their own landing pages. Both have very light plumber SEO competition compared to central Reading.' },
      { q: 'What about hard water content for Reading?', a: 'Reading is in a hard-water zone. We build a dedicated service page for limescale-related issues — failing combis, scaled shower valves, descaling contracts. This captures high-volume searches other plumber sites ignore.' }
    ]
  },
  {
    city: 'Guildford',
    slug: 'guildford',
    region: 'Surrey',
    postcodes: ['GU1', 'GU2', 'GU3', 'GU4', 'GU5', 'GU6', 'GU7', 'GU8', 'GU10'],
    metaDesc: 'Web design for plumbers in Guildford. Affluent Surrey coverage including Godalming, Cranleigh, and Woking. Premium-market local SEO. From £99/month.',
    intro: 'Guildford is one of the most affluent towns in the UK and a premium market for plumbing services. Your website needs to communicate craftsmanship, Gas Safe credibility, and period-property competency before a Guildford homeowner will call.',
    marketStats: 'Guildford has a population of around 77,000 and sits at the heart of one of the wealthiest postcodes in England. The wider GU catchment — Godalming, Cranleigh, Woking, Farnham, Haslemere, and Milford — pushes over 250,000 affluent residents. Average property prices in GU1, GU2, GU3, and GU5 are nearly double the UK average, which translates directly to higher average job values for plumbers. Boiler installations, bathroom refits, and heat pump consultations are the dominant work types, not emergency call-outs.',
    searchBehaviour: 'Guildford searchers skew higher-intent and higher-ticket. They search "boiler installation Guildford", "bathroom fitter Godalming", and "heat pump installer Surrey" rather than purely emergency terms. They also check reviews more carefully — Google ratings below 4.8 stars see significantly higher drop-off than the national average. Your website needs premium-feel design, trust signals (Gas Safe, CIPHE, trade-body memberships) above the fold, and a clear portfolio of previous high-ticket work.',
    boroughs: 'Guildford town centre, Stoughton, Onslow Village, Merrow, Burpham, Park Barn, Westborough, Shalford, Peaslake, Shere, Albury, Godalming, Farncombe, Cranleigh, Bramley, Ewhurst, Haslemere, Milford, Woking, Horsell, Knaphill, and Byfleet',
    localPain: 'Guildford and the wider Surrey Hills are rich in Grade II listed properties, conservation area restrictions, and Victorian-era plumbing that requires specialist (not generic) maintenance. Oil-fired heating is common in rural villages like Shere, Peaslake, and Albury — properties off the gas grid that need oil boiler servicing, oil tank replacements, or heat pump conversions. Affluent properties often have complex unvented cylinder systems, underfloor heating, and smart home integrations. A generic plumber website cannot communicate competence in any of this.',
    competitorInsight: 'Guildford plumber SEO is less developed than the wealth of the catchment suggests. Most top-ranking sites are generic Surrey-wide agency builds rather than Guildford-specific local authority sites. A proper Guildford-focused plumbing site with postcode landing pages for affluent sub-markets (Shere, Godalming, Cranleigh, Haslemere), Grade II content, and premium-installation service pages can reach top-three positions within 4–6 months.',
    priceContext: 'Guildford and the wider GU postcode area support 25–40% premium pricing over the national average, particularly for bathroom refits, underfloor heating installs, and full central heating refits. A single premium job can pay for years of Master package subscription. From £99/month.',
    localFeature: 'Affluent Surrey coverage across Guildford, Godalming, Cranleigh, Haslemere, and Woking, with premium-market landing pages for conservation areas, Grade II stock, and rural off-grid villages.',
    faqs: [
      { q: 'How should I position for the Guildford premium market?', a: 'Trust signals and craftsmanship first. We position your homepage around Gas Safe display, trade-body memberships (CIPHE, WaterSafe, APHC), real project photography, and review integration rather than emergency-response messaging. Guildford homeowners are not price-shopping — they are credibility-shopping.' },
      { q: 'Can you target conservation area and Grade II listed work?', a: 'Yes. Guildford and the Surrey Hills have significant listed and conservation stock. We build a dedicated service page for period-property plumbing that speaks to the regulatory and craftsmanship-competence concerns of these homeowners.' },
      { q: 'Do you handle off-grid rural villages in the GU area?', a: 'Yes. Shere, Peaslake, Albury, and the Surrey Hills villages often have oil-fired heating or LPG. We build service pages for oil boiler servicing, oil-to-heat-pump conversions, and LPG systems — higher-margin work ignored by generic sites.' },
      { q: 'What about Woking and Godalming as separate markets?', a: 'Woking (GU21–GU24) and Godalming (GU7, GU8) are treated as separate markets with their own landing pages. Both have affluent catchments and are underserved by local plumber SEO.' }
    ]
  },
  {
    city: 'Oxford',
    slug: 'oxford',
    region: 'Oxfordshire',
    postcodes: ['OX1', 'OX2', 'OX3', 'OX4', 'OX14', 'OX33', 'OX44'],
    metaDesc: 'Web design for plumbers in Oxford. Oxfordshire coverage including Cowley, Headington, Summertown, and Abingdon. Student HMO + listed-property market. From £99/month.',
    intro: 'Oxford is a historic university city with a unique plumbing market — conservation-area listed buildings, HMO-heavy student lettings, and a growing ring of modern commuter housing. Your website must handle all three audiences without confusing any of them.',
    marketStats: 'Oxford has a population of around 152,000, rising past 250,000 including Abingdon, Kidlington, Witney, and the outer OX catchment. Two universities (Oxford and Oxford Brookes) create the densest student-letting market outside London, concentrated in OX1 (city centre), OX4 (Cowley), and OX3 (Headington). The listed-property stock across central Oxford, Summertown, and North Oxford is among the most regulatory-sensitive in England — conservation areas, Grade II buildings, and planning constraints that generic plumbers routinely get wrong.',
    searchBehaviour: 'Oxford search demand splits into three clear buckets: landlord and letting-agent compliance searches ("gas safety certificate Cowley", "HMO plumber Oxford"), period-property searches ("boiler installation Summertown", "plumber Jericho"), and modern commuter-estate searches in Kidlington, Abingdon, and Witney. Each bucket behaves differently and rewards a different landing page. A single generic "plumber Oxford" page cannot convert any of them effectively.',
    boroughs: 'Oxford city centre, Jericho, Summertown, North Oxford, Cowley, Headington, Marston, Rose Hill, Iffley, Botley, Wolvercote, Kidlington, Abingdon, Radley, Wheatley, Witney, Eynsham, Kennington, and Cumnor',
    localPain: 'Oxford central properties present unique plumbing challenges — Grade II listed terraces with restricted pipework routing, college-adjacent student houses with decades of bodged conversions, conservation-area restrictions on external boiler flues, and heritage plumbing elements (cast iron baths, original brass fittings) that need specialist not-generic maintenance. The Cowley and Headington student belt has high HMO density with corresponding compliance workload — annual gas certificates, CO alarms, boiler servicing, and landlord reporting. Rural villages (Wheatley, Eynsham, Cumnor) have oil heating and private water supplies.',
    competitorInsight: 'Oxford plumber SEO is moderately developed but skewed heavily toward the emergency and central-city market. Specialists in HMO compliance, listed-property work, and the outer OX villages are underrepresented. A properly built site with dedicated HMO compliance pages, listed-property service content, and village landing pages (Wheatley, Kidlington, Abingdon, Witney) can reach top-three for its target terms within 4–6 months.',
    priceContext: 'Oxford pricing is in line with Reading — 15–25% above the UK average in central OX1–OX4, premium pricing available in North Oxford, Summertown, and the listed-stock conservation areas. HMO compliance contracts are recurring revenue. From £99/month.',
    localFeature: 'Oxfordshire-wide coverage spanning Oxford city through to Abingdon, Kidlington, Witney, and the rural OX villages, with student HMO and listed-property service pages built in.',
    faqs: [
      { q: 'Can you help with Oxford HMO landlord compliance?', a: 'Yes. OX1, OX3, and OX4 have some of the densest student HMO stock in the UK. We build a dedicated landlord-compliance page covering annual gas safety certificates, CO alarm servicing, and annual boiler checks optimised for searches like "HMO gas certificate Oxford".' },
      { q: 'Do you handle listed-property and conservation-area work?', a: 'Yes. Oxford has extensive Grade II and conservation-area stock. We build a dedicated service page for period-property plumbing with messaging that speaks to the regulatory and craftsmanship concerns specific to these buildings.' },
      { q: 'Can I target Kidlington, Abingdon, and Witney separately?', a: 'Yes. Each outer OX town gets its own landing page rather than being folded under generic "Oxford" coverage. Abingdon (OX14) and Witney have notably light plumber SEO competition.' },
      { q: 'What about rural villages with oil heating?', a: 'Wheatley, Eynsham, Cumnor, and the rural OX villages often have oil-fired heating or private water supplies. We build pages for oil boiler servicing, oil tank replacement, and heat pump conversions — services most Oxford plumber sites ignore.' }
    ]
  },
  {
    city: 'Winchester',
    slug: 'winchester',
    region: 'Hampshire',
    postcodes: ['SO21', 'SO22', 'SO23', 'SO24'],
    metaDesc: 'Web design for plumbers in Winchester. Central Hampshire coverage including Alresford, Twyford, and the Meon Valley. Premium cathedral-city market. From £99/month.',
    intro: 'Winchester is a wealthy Hampshire cathedral city with affluent surrounding villages and a plumbing market dominated by premium installation work. Your website must match the level of craftsmanship Winchester homeowners expect from their tradespeople.',
    marketStats: 'Winchester has a population of around 45,000 with a wider SO22–SO24 catchment pushing past 130,000 across Alresford, Twyford, Colden Common, and the Meon Valley villages. The city is one of the most expensive places to live in the UK outside London, with average property prices well above the national average. The plumbing market skews high-ticket: full central heating refits, period-property bathroom renovations, air source heat pump installations, and listed-building restoration work dominate.',
    searchBehaviour: 'Winchester homeowners are cautious, research-heavy buyers. They read reviews thoroughly, check trade-body memberships, and often get three quotes before committing. Google searches skew toward specific installations — "boiler replacement Winchester", "bathroom fitter SO22", "heat pump installer central Hampshire" — rather than emergency call-outs. Rural village searches from Alresford, Twyford, and the Meon Valley focus on oil-heating conversions and off-grid property work.',
    boroughs: 'Winchester city centre, Fulflood, Stanmore, Weeke, Teg Down, St Cross, Badger Farm, Twyford, Colden Common, Alresford, New Alresford, Cheriton, Bishops Waltham, Owslebury, Kings Worthy, Headbourne Worthy, Micheldever, and the Meon Valley villages',
    localPain: 'Winchester is heavily listed and conservation-restricted — the city centre, Fulflood, and St Cross have Grade II-dense streets where external boiler flue placement is a planning headache. Rural surrounding villages (Alresford, Cheriton, Bishops Waltham, the Meon Valley) are largely off the gas grid, running oil boilers, LPG, or increasingly air source heat pumps. Hard water from the Hampshire chalk aquifer drives constant descaling and shower valve replacement work. The combination — listed central-city + rural off-grid villages + hard water — creates a unique local plumbing skillset that deserves a dedicated website to communicate.',
    competitorInsight: 'Winchester plumber SEO is significantly underdeveloped relative to the affluence of the market. Most top-ranking websites are generic south-central-Hampshire agency sites rather than Winchester-specific local authority builds. A properly built Winchester-focused site with postcode landing pages (SO21–SO24), oil-conversion content, and listed-property service pages can dominate local search within 4–5 months.',
    priceContext: 'Winchester supports 20–35% premium pricing over the national average for installation work, with particularly strong margins available in central SO23 and affluent villages like Alresford, Twyford, and Bishops Waltham. Heat pump conversion work is high-ticket and growing. From £99/month.',
    localFeature: 'Central Hampshire coverage across Winchester, Alresford, Twyford, Bishops Waltham, and the Meon Valley, with premium-market pages for listed city-centre work and oil-to-heat-pump conversions in the rural villages.',
    faqs: [
      { q: 'How do I win the premium Winchester market?', a: 'Match the market. We position your homepage around craftsmanship, trade-body memberships, real project photography, and detailed service explanations rather than emergency-response messaging. Winchester buyers are credibility-shopping, not price-shopping — they pick the plumber who communicates competence clearly.' },
      { q: 'Can you cover Alresford, Twyford, and the Meon Valley separately?', a: 'Yes. Each surrounding village gets its own landing page, not folded into generic "Winchester" coverage. Alresford (SO24) especially has light plumber SEO competition and strong high-ticket work.' },
      { q: 'What about the oil-heating and heat-pump conversion market?', a: 'Central Hampshire has significant off-grid housing. We build dedicated service pages for oil boiler servicing, LPG systems, and oil-to-heat-pump conversions — high-margin work concentrated in the villages surrounding Winchester that most local plumber websites ignore.' },
      { q: 'How do you handle listed-building work in central Winchester?', a: 'We build a dedicated period-property plumbing service page speaking to conservation-area regulations, flue placement constraints, and heritage plumbing competence. This is exactly what Winchester city-centre homeowners search for before calling.' }
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
  description: '${loc.metaDesc}',
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
    "logo": "https://plumberwebdesign.co.uk/images/logo.webp",
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
