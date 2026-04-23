import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Heating Engineer Website Design | PlumberWebDesign.co.uk' },
  description: 'Website design for UK heating engineers. Showcase qualifications, win boiler installation and heat pump jobs, and rank locally with built-in SEO. From £99/month.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/heating-engineer-website-design/' },
};

export default function HeatingEngineerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PlumberWebDesign.co.uk — Heating Engineer Web Design",
    "url": "https://plumberwebdesign.co.uk/heating-engineer-website-design/",
    "logo": "https://plumberwebdesign.co.uk/images/logo.png",
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

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <Breadcrumbs items={[{ label: 'Heating Engineer Website Design', href: '/heating-engineer-website-design/' }]} />
       <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Trade Speciality</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Heating Engineer Website Design</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Win high-ticket heating jobs. From underfloor heating to air source heat pumps, we build sites that convert traffic into profitable projects.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Focus on the High-Value Jobs</h2>
          <p className="text-slate-blue mb-8">
            A heating engineer's business model is fundamentally different from generic plumbing. While an emergency leak gets you £150, a full central heating refit or an air source heat pump installation is a high-ticket project. Your website needs to reflect that premium value.
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
        </div>
      </div>
    </div>
  );
}
