import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Bathroom Fitter Website Design | PlumberWebDesign.co.uk' },
  description: 'Professional website design for bathroom fitters across the UK. Showcase your work with before-and-after galleries and generate local enquiries. From £99/month.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/bathroom-fitter-website-design/' },
};

export default function BathroomFitterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PlumberWebDesign.co.uk — Bathroom Fitter Web Design",
    "url": "https://plumberwebdesign.co.uk/bathroom-fitter-website-design/",
    "logo": "https://plumberwebdesign.co.uk/images/logo.png",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Professional website design for bathroom fitters across the UK. Before-and-after galleries, project case studies, and local SEO.",
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
      "name": "Bathroom Fitter Website Packages",
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
      <Breadcrumbs items={[{ label: 'Bathroom Fitter Website Design', href: '/bathroom-fitter-website-design/' }]} />
       <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">Trade Speciality</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Bathroom Fitter Website Design</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            A picture is worth a thousand words. We build stunning, highly visual websites that let your beautiful bathroom installations sell themselves.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Visual Proof Drives Bathroom Sales</h2>
          <p className="text-slate-blue mb-8">
            Unlike emergency gas work, bathroom fitting is a considered purchase. Homeowners will spend weeks researching and looking for inspiration before dropping £5,000+ on a new suite. Your website must capture them during that research phase with high-quality visual proof of your craftsmanship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
              <h3 className="font-bold text-navy-dark text-xl mb-4 text-center">Before & After Galleries</h3>
              <p className="text-sm text-slate-blue mb-0 text-center">
                We implement sleek, fast-loading image sliders that allow customers to easily visualize the transformation you can provide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10">
              <h3 className="font-bold text-navy-dark text-xl mb-4 text-center">Project Case Studies</h3>
              <p className="text-sm text-slate-blue mb-0 text-center">
                Detailed breakdowns of wetroom installations or en-suite conversions, complete with the materials sourced and timelines achieved.
              </p>
            </div>
          </div>

          <div className="bg-amber p-8 rounded-2xl shadow-lg border border-amber/50 text-center">
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">Ready to showcase your work?</h2>
            <p className="text-navy-dark/80 mb-6">
              Our <strong>Journeyman</strong> package is ideal for bathroom fitters, allowing up to 10 pages to perfectly structure your different installation services (wetrooms, commercial, residential).
            </p>
            <Link href="/contact/?package=journeyman" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow hover:bg-navy-card transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
