import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Web Design for Plumbers in Portsmouth | Plumber Websites',
  description: 'Web design for plumbers in Portsmouth. South coast Hampshire coverage including Gosport, Fareham, Havant and Southsea, with local SEO and GBP.',
  path: '/web-design-plumbers-portsmouth/',
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
    "q": "Do you cover Gosport and the Fareham peninsula?",
    "a": "Yes. Gosport, Fareham, Titchfield, and the surrounding peninsula are treated as distinct markets with dedicated landing pages. Gosport especially has strong search demand but surprisingly few well-optimised plumber websites competing for it."
  },
  {
    "q": "Can you help with ex-naval housing boiler replacements?",
    "a": "Yes. This is a specific market — standardised 1990s combi boiler installations reaching end-of-life. We build a landing page for \"boiler replacement Gosport\" or \"boiler replacement Portsmouth\" that speaks directly to this demographic."
  },
  {
    "q": "What about Hayling Island and the surrounding coastal villages?",
    "a": "Hayling Island (PO11), Emsworth (PO10), and the coastal villages between Portsmouth and Chichester are covered if you service them. These are low-competition, high-value postcodes."
  },
  {
    "q": "How does the salt air affect what services I should feature?",
    "a": "Coastal Hampshire homes need more frequent external pipework servicing, flue replacements, and cylinder inspections due to salt-accelerated corrosion. We build a specific service page for \"coastal plumbing maintenance\" that captures this unique local search intent."
  }
];

export default function LocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk — Portsmouth",
    "url": "https://www.plumberwebdesign.co.uk/web-design-plumbers-portsmouth/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist web design for plumbers in Portsmouth, Hampshire. Local SEO-optimised websites from £99/month.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portsmouth",
      "addressRegion": "Hampshire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "City",
      "name": "Portsmouth"
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
      "name": "Plumber Website Packages — Portsmouth",
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
      "name": "Do you cover Gosport and the Fareham peninsula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Gosport, Fareham, Titchfield, and the surrounding peninsula are treated as distinct markets with dedicated landing pages. Gosport especially has strong search demand but surprisingly few well-optimised plumber websites competing for it."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with ex-naval housing boiler replacements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This is a specific market — standardised 1990s combi boiler installations reaching end-of-life. We build a landing page for \"boiler replacement Gosport\" or \"boiler replacement Portsmouth\" that speaks directly to this demographic."
      }
    },
    {
      "@type": "Question",
      "name": "What about Hayling Island and the surrounding coastal villages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hayling Island (PO11), Emsworth (PO10), and the coastal villages between Portsmouth and Chichester are covered if you service them. These are low-competition, high-value postcodes."
      }
    },
    {
      "@type": "Question",
      "name": "How does the salt air affect what services I should feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coastal Hampshire homes need more frequent external pipework servicing, flue replacements, and cylinder inspections due to salt-accelerated corrosion. We build a specific service page for \"coastal plumbing maintenance\" that captures this unique local search intent."
      }
    }
  ]
};

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Web Design for Plumbers in Portsmouth', href: '/web-design-plumbers-portsmouth/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Local Service Area — Hampshire</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Web Design for Plumbers in Portsmouth</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            As a key south coast hub, Portsmouth presents a massive opportunity for local tradesmen. Take the lion's share of the local market with a site built exclusively for lead generation.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Portsmouth Plumbing Market</h2>
            <p className="text-lg text-slate-blue mb-6 leading-relaxed">
              Portsmouth and the surrounding Hampshire coast — Gosport, Fareham, Havant, Emsworth, and Waterlooville — form a densely populated area with strong demand for domestic plumbing and heating services. The city itself has over 200,000 residents, with another 400,000 across the wider south-east Hampshire conurbation. The mix of naval housing in Eastney and Hilsea, period terraces in Old Portsmouth and Southsea, and modern developments around Gunwharf Quays creates diverse plumbing needs across every price point.
            </p>
            <p className="text-lg text-slate-blue leading-relaxed">
              The south coast market is tight-knit. Homeowners trust local tradespeople and often search specifically for "plumber in Portsmouth" or "boiler engineer Gosport" rather than broader terms. Your website needs to rank for these exact phrases. We ensure every page targets the specific towns and postcodes you serve along the Hampshire coast — competition is moderate compared to larger cities, meaning there is genuine opportunity to dominate local search with the right website.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for Portsmouth plumbers:</h3>
            <ul className="space-y-4 text-slate-blue">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Schema Markup:</strong> Structured data telling Google your exact service area within Portsmouth and surrounding postcodes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Postcode-specific pages:</strong> Dedicated landing pages for Portsmouth postcodes including PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO11, PO12, PO13, PO14, PO15, PO16.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>GBP Optimisation:</strong> Full Google Business Profile setup and ongoing management for the Portsmouth map pack.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Local Coverage:</strong> Hampshire coastal coverage spanning Portsmouth through to Fareham, Havant, and the Meon Valley, with hyper-local pages for each town and conurbation.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl order-2 lg:order-1">
            <h3 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Portsmouth areas we build pages for</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Portsmouth city centre, Southsea, Old Portsmouth, Portsea, Hilsea, Cosham, Paulsgrove, Drayton, Farlington, Gosport, Lee-on-the-Solent, Fareham, Titchfield, Locks Heath, Park Gate, Warsash, Havant, Emsworth, Waterlooville, Clanfield, Denmead, and Hayling Island.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-blue/30">
              <h4 className="font-bold text-amber text-sm uppercase tracking-wider mb-3">Postcode coverage</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO11, PO12, PO13, PO14, PO15, PO16
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Portsmouth-specific plumbing challenges</h2>
            <p className="text-lg text-slate-blue leading-relaxed">
              Coastal Hampshire properties battle salt-laden air that accelerates corrosion on outdoor copper pipework, external boiler flues, and hot water cylinders. Many Portsmouth homes are converted Victorian and Edwardian terraces with original cast-iron waste stacks that fail regularly. The naval housing estates have a very specific plumbing profile — standardised combi boiler installations from the 1990s that are now at end-of-life. Gosport and Lee-on-the-Solent include a high concentration of ex-naval family homes facing boiler replacement en masse.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-blue/10 mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">The Portsmouth competitive landscape</h2>
          <p className="text-lg text-slate-blue mb-6 leading-relaxed">
            Portsmouth's top plumber search positions have been dominated by template-based agency sites for years. A specialist site with proper local schema, Portsmouth-specific service pages, and a named Portsmouth-area testimonial can overtake them within 4-6 months. The Gosport and Havant markets are even less contested.
          </p>
          <p className="text-lg text-slate-blue leading-relaxed">
            Portsmouth pricing sits just above the south-coast average, with a premium available for work in Emsworth, Old Portsmouth conservation zones, and parts of Lee-on-the-Solent. From £99/month.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Pricing for Portsmouth plumbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Portsmouth plumber website FAQs</h2>
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
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">Ready to dominate Portsmouth plumbing search?</h2>
          <p className="text-lg text-navy-dark/80 mb-6 max-w-2xl mx-auto">
            Tell us about your Portsmouth plumbing business and we'll send a free quote and SEO strategy within one working day.
          </p>
          <Link href="/contact/?location=portsmouth" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-navy-card hover:-translate-y-0.5 transition-all">
            Get a quote for your Portsmouth plumbing website →
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