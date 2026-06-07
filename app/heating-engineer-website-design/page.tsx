import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import VerticalConversionHero from '@/components/VerticalConversionHero';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Heating Engineer Website Design | Boiler & Heat Pump Sites',
  description: 'Website design for UK heating engineers. Boiler installation and heat pump landing pages, built-in local SEO, and annual service booking. From £99/month.',
  path: '/heating-engineer-website-design/',
});

export default function HeatingEngineerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PlumberWebDesign.co.uk — Heating Engineer Web Design",
    "url": "https://www.plumberwebdesign.co.uk/heating-engineer-website-design/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Website design for UK heating engineers. Boiler installations, heat pump landing pages, and underfloor heating portfolios with local SEO.",
    "address": { "@type": "PostalAddress", "addressCountry": "GB" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" },
    "priceRange": "££",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00", "closes": "17:30"
    }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heating Engineer Website Packages",
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
      { "@type": "Question", "name": "What is heating engineer website design?", "acceptedAnswer": { "@type": "Answer", "text": "Heating engineer website design is specialist website design for UK heating businesses — covering boiler installation, boiler repair, central heating, heat pump installation, and underfloor heating. A proper heating engineer website ranks for high-ticket service searches like 'boiler installation Manchester' or 'air source heat pump Reading' and includes booking flows for annual services. Pricing from £99/month." } },
      { "@type": "Question", "name": "How much does a heating engineer website cost?", "acceptedAnswer": { "@type": "Answer", "text": "Heating engineer websites cost £99-£249 per month on a managed plan. The Apprentice tier (£99) covers a 5-page site with basic local SEO. Journeyman (£169) adds 10 pages with service-specific landing pages for boilers, heat pumps and underfloor heating. Master (£249) adds 20+ pages plus monthly blog posts. All packages include hosting, SSL, and a free domain." } },
      { "@type": "Question", "name": "Do heating engineers need a different website to plumbers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A generic plumber website does not rank well for heat pump, MCS-accredited installer, or commercial heating searches. Heating engineers need dedicated landing pages for boiler installation, heat pump installation (with MCS certification display), underfloor heating, annual service contracts, and Gas Safe or OFTEC credentials. The customer journey is also different — heating jobs are considered purchases, so trust signals and case studies matter more than emergency call-out buttons." } },
      { "@type": "Question", "name": "Can a heating engineer website handle annual service bookings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Journeyman and Master packages include recurring booking forms for annual boiler service, landlord gas safety (CP12) certificates, and heat pump service checks. These flow into your existing diary or calendar system and let customers self-book without phoning." } },
      { "@type": "Question", "name": "Will the website display Gas Safe and OFTEC registration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both registrations are displayed prominently in the header, footer, and on service pages, with verifying links back to gassaferegister.co.uk and oftec.org. We also include the registration number in JSON-LD schema so search engines can verify credentials." } },
      { "@type": "Question", "name": "How long does a heating engineer website take to build?", "acceptedAnswer": { "@type": "Answer", "text": "One to two weeks from sign-off. That includes design, content writing, service and location pages, schema markup, Google Business Profile integration, and a staging review before launch." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Heating Engineer Website Design', href: '/heating-engineer-website-design/' }]} />
      <VerticalConversionHero
        vertical="Heating Engineer"
        headline="Heating Engineer Website Design for High-Ticket Jobs"
        subhead="Generic plumber websites don't rank for 'air source heat pump installer'. We build dedicated heating engineer sites that capture £8,000+ MCS-certified installations, not £150 leak callouts."
        painPoints={[
          'Your current site treats heating as a footnote, not a specialism',
          "You're missing the £7,500 Boiler Upgrade Scheme search traffic",
          'No annual service contract booking flow = recurring revenue lost',
        ]}
        demoUrl="https://biomass.plumberwebdesign.co.uk"
        demoLabel="See our heating engineer demo →"
        demoThumb="/portfolio/biomass.webp"
      />

      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none">

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-8">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              Heating engineer website design is specialist website design for UK heating businesses
              covering boiler installation, repair, central heating, heat pump installation, and underfloor
              heating. Sites are built to rank locally for high-ticket service searches and include
              recurring service-booking flows. From £99/month including hosting, SSL, and local SEO.
            </p>
          </div>

          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Focus on the High-Value Jobs</h2>
          <p className="text-slate-blue mb-8">
            A heating engineer&apos;s business model is fundamentally different from generic plumbing. While
            an emergency leak gets you £150, a full central heating refit or an air source heat pump
            installation is a high-ticket project. Your website needs to reflect that premium value.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">The heating engineer search landscape in 2026</h2>
          <p className="text-slate-blue mb-4">
            UK heating searches fall into three buckets. First, emergency repair queries — "boiler not
            working", "no hot water [city]", "boiler repair near me" — these get served from the Map Pack
            and convert in minutes. Second, considered-purchase queries — "new boiler cost UK", "air source
            heat pump installer Reading", "underfloor heating quote" — these need long-form service pages
            with pricing guidance and credentials. Third, compliance queries — "landlord gas safety
            certificate", "CP12 certificate booking" — recurring annual revenue.
          </p>
          <p className="text-slate-blue mb-4">
            A generic plumber website rarely ranks well for any of the second or third buckets because the
            content treats heating as a footnote. A dedicated heating engineer website wins all three.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">Heat pumps — the biggest UK opportunity</h2>
          <p className="text-slate-blue mb-4">
            The UK government&apos;s{' '}
            <a
              href="https://www.gov.uk/government/publications/boiler-upgrade-scheme"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Boiler Upgrade Scheme
            </a>{' '}
            offers £7,500 grants for air source heat pumps, which has driven a sharp rise in homeowner
            search demand. Heating engineers who rank for "air source heat pump installer [city]" or "MCS
            accredited heat pump engineer" are capturing average job values of £8,000-£14,000. Your
            website needs a dedicated heat pump landing page with: MCS certification badge,{' '}
            <a
              href="https://mcscertified.com/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              MCS Certified
            </a>{' '}
            installer lookup link, BUS grant eligibility checker, sample quote breakdown, and case studies
            with before/after running cost figures.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">Annual service contracts as recurring revenue</h2>
          <p className="text-slate-blue mb-4">
            Every heating engineer with a customer base sitting on installed boilers has an annual revenue
            stream waiting to be automated. Our Journeyman and Master packages include a recurring-booking
            form that lets customers book their annual service, landlord{' '}
            <a
              href="https://www.gassaferegister.co.uk/help-and-advice/landlords/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              gas safety inspection (CP12)
            </a>
            , or heat pump check directly from the website. The form ties into your existing diary so the
            slot is reserved the moment the customer hits submit. No phone tag, no missed renewals.
          </p>


          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10 mb-12">
            <h3 className="font-bold text-navy-dark text-xl mb-6">What we build for heating engineers:</h3>
            <ul className="space-y-4 text-slate-blue mb-0">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Specialist heat pump landing pages:</strong> Capturing the massive growing demand for eco-heating solutions in the UK.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Underfloor heating portfolios:</strong> Visual galleries showing your clean pipework and manifold installations.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-amber"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                <div><strong>Annual service contracts:</strong> Setup recurring booking forms for winter boiler and system checks.</div>
              </li>
            </ul>
          </div>

          <div className="bg-navy-card text-white p-8 rounded-2xl border border-slate-blue/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Gas Safe & OFTEC Ready</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              If you also handle gas or oil, we seamlessly integrate those specialities. See our <Link href="/gas-engineer-website-design/" className="text-amber hover:underline">Gas Engineer</Link> page for more details.
            </p>
            <Link href="/plumber-website-design-packages/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-3 rounded-full hover:bg-white transition-all shadow-md">
              View Our Packages
            </Link>
          </div>

          <RelatedLinks keys={['home', 'packages', 'cost', 'gas', 'seo', 'blogGBP']} />
        </div>
      </div>
    </div>
  );
}
