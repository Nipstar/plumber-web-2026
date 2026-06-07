import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ogBase, twitterBase } from '@/app/shared-metadata';

const TITLE = 'Web Design for Plumbers in London | Plumber Websites';
const DESCRIPTION = 'Web design for plumbers in London. Borough-level landing pages across all 32 boroughs, M25-wide local SEO and GBP management. Get a free quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/web-design-plumbers-london/' },
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
    "q": "How long does it take to rank for \"plumber in London\" searches?",
    "a": "London is the most competitive plumbing search market in the UK. Expect 3-6 months for borough-level rankings (e.g. \"plumber Clapham\") and 9-18 months for competitive city-wide terms. Our Journeyman and Master packages include the ongoing SEO work required to achieve this."
  },
  {
    "q": "Do you cover the full M25 area?",
    "a": "Yes. We build out landing pages for every borough and postcode you cover, whether you work central London only or the full Greater London area out to the M25."
  },
  {
    "q": "How do you handle Gas Safe display for multi-engineer businesses?",
    "a": "We display your primary Gas Safe registration number prominently across the site and can list individual engineers with their own credentials where applicable. This matters for London landlords and commercial clients who require paper-trail verification."
  },
  {
    "q": "Is London pricing different to your standard packages?",
    "a": "No. The £99, £169, and £249 per month packages apply nationally. London businesses often earn back the full year of Master package costs from a single installation job won through organic search."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — London",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-london/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in London, Greater London. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
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
      "name": "Plumber Website Packages — London",
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
      "name": "How long does it take to rank for \"plumber in London\" searches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "London is the most competitive plumbing search market in the UK. Expect 3-6 months for borough-level rankings (e.g. \"plumber Clapham\") and 9-18 months for competitive city-wide terms. Our Journeyman and Master packages include the ongoing SEO work required to achieve this."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover the full M25 area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build out landing pages for every borough and postcode you cover, whether you work central London only or the full Greater London area out to the M25."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle Gas Safe display for multi-engineer businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We display your primary Gas Safe registration number prominently across the site and can list individual engineers with their own credentials where applicable. This matters for London landlords and commercial clients who require paper-trail verification."
      }
    },
    {
      "@type": "Question",
      "name": "Is London pricing different to your standard packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The £99, £169, and £249 per month packages apply nationally. London businesses often earn back the full year of Master package costs from a single installation job won through organic search."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in London', href: '/web-design-plumbers-london/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Greater London</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in London</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Standing out in the capital requires more than just a template. In a fiercely competitive market like London, your plumbing business needs a superior digital presence built specifically to convert traffic into booked jobs.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The London Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              London is the most competitive plumbing market in the UK, with over 12,000 registered plumbers across the Greater London area competing for emergency call-outs, boiler installations, bathroom refits, and landlord gas safety certificates. Search volume for "plumber near me" inside the M25 is the highest in the country — and so is the cost-per-click on paid ads. The plumbers winning this market are ranking organically in the Google Map Pack and the top three blue links. Everyone else pays through the nose for Google Ads or goes without work.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              London homeowners expect instant results. When a boiler fails in a Clapham flat at 10pm on a Sunday, they are not scrolling past the first three results. They call the first plumber with a professional website, strong reviews, and a prominent click-to-call button. Your website needs to load in under two seconds, display your Gas Safe credentials prominently, list the boroughs and postcodes you cover, and make booking trivially easy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for London plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within London and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for London postcodes including E, EC, N, NW, SE, SW, W, WC.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the London map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Borough-level targeting across all 32 London boroughs plus the City of London, with dedicated landing pages for each area you serve.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">London areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Islington, Camden, Hackney, Tower Hamlets, Southwark, Lambeth, Wandsworth, Hammersmith & Fulham, Kensington & Chelsea, Westminster, Brent, Ealing, Richmond, Kingston, Merton, Croydon, Bromley, Greenwich, Lewisham, Haringey, Enfield, Barnet, Harrow, Hillingdon, Hounslow, Waltham Forest, Redbridge, Newham, Barking & Dagenham, Havering, Bexley, Sutton, and the City of London.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                E, EC, N, NW, SE, SW, W, WC
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">London-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Properties in central London present unique plumbing challenges — Grade II listed homes, Victorian flat conversions with stacked soil pipes, restricted water pressure in high-rise apartments, hard water deposits from the Thames Water supply, and planning constraints that make boiler flue placement a legal headache. A generic plumber website will not communicate that you understand any of this. A specialist site positions your business as the one to call for London-specific problems.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The London competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            The top 3 Google Map Pack positions for "plumber London" searches are almost always held by agencies with 200+ reviews, rapid response messaging, and sub-two-second mobile load times. A new entrant cannot match review count overnight — but a properly built website with correct schema markup, borough-specific landing pages, and GBP integration closes the gap faster than any other marketing channel.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            London plumbing businesses charge 20-30% more than the national average, making a strong website an even higher ROI investment. A single boiler installation from an organic search inquiry pays for a year of our Master package. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for London plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">London plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate London plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your London plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=london" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your London plumbing website →
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