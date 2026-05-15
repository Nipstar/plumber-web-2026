import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'Bathroom Fitter Website Design | Portfolio-Led UK Sites' },
  description: 'Bathroom fitter website design from £99/month. Portfolio galleries, before/after sliders, quote forms, and local SEO for UK bathroom fitting businesses.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/bathroom-fitter-website-design/' },
};

export default function BathroomFitterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PlumberWebDesign.co.uk — Bathroom Fitter Web Design",
    "url": "https://www.plumberwebdesign.co.uk/bathroom-fitter-website-design/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is bathroom fitter website design?", "acceptedAnswer": { "@type": "Answer", "text": "Bathroom fitter website design is specialist website design for UK bathroom installation businesses. The job is to capture homeowners during the multi-week research phase before a £5,000-£15,000 refit using before/after galleries, project case studies, materials sourcing detail, and quote-request forms. Pricing from £99/month." } },
      { "@type": "Question", "name": "How much does a bathroom fitter website cost?", "acceptedAnswer": { "@type": "Answer", "text": "Bathroom fitter websites cost £99-£249 per month. The Journeyman package (£169) is the most popular tier for bathroom fitters because it allows 10 pages — enough for separate landing pages for wetrooms, ensuites, family bathrooms, accessibility installations, and commercial work. Each package includes hosting, SSL, free domain, and local SEO." } },
      { "@type": "Question", "name": "Why do bathroom fitters need before-and-after galleries?", "acceptedAnswer": { "@type": "Answer", "text": "Bathroom installation is a considered purchase. Homeowners spend 4-12 weeks researching before signing a quote. Before/after galleries are the single highest-converting element on a bathroom fitter website — they prove craftsmanship in a way that words cannot. We build interactive slider galleries that load fast on mobile and rank in Google Image Search for queries like 'bathroom installation [city]'." } },
      { "@type": "Question", "name": "Can I show different bathroom styles on the site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Separate landing pages can be built for wetrooms, family bathrooms, ensuites, accessibility installations (level-access showers, grab rails), luxury bathrooms, and commercial work. Each gets its own gallery, FAQ section, pricing band, and SEO target." } },
      { "@type": "Question", "name": "Do you integrate with Houzz or Pinterest?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We add Houzz and Pinterest integration on Journeyman and Master packages so your latest projects auto-sync to the site, plus Pinterest-style Open Graph metadata so your images surface when potential customers share inspiration boards. The site also exports image sitemaps to help individual project photos rank in Google Image Search." } },
      { "@type": "Question", "name": "Will the website include a quote calculator?", "acceptedAnswer": { "@type": "Answer", "text": "An interactive quote estimator (selecting bathroom size, fittings tier, and extras) is an optional Master-package add-on. For most bathroom fitters a guided multi-step quote form captures more leads than a hard-priced calculator because final pricing depends on a survey." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
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

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-8">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              Bathroom fitter website design is specialist website design for UK bathroom installation
              businesses. The job is to capture homeowners during the multi-week research phase before a
              £5,000-£15,000 refit using before/after galleries, project case studies, materials sourcing
              detail, and quote-request forms. From £99/month including hosting, SSL, and local SEO.
            </p>
          </div>

          <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Visual Proof Drives Bathroom Sales</h2>
          <p className="text-slate-blue mb-8">
            Unlike emergency gas work, bathroom fitting is a considered purchase. Homeowners will spend
            weeks researching and looking for inspiration before dropping £5,000+ on a new suite. Your
            website must capture them during that research phase with high-quality visual proof of your
            craftsmanship.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">The bathroom fitter customer journey</h2>
          <p className="text-slate-blue mb-4">
            A typical bathroom installation customer takes 4-12 weeks from first search to signing a quote.
            They start broad ("bathroom design ideas", "wetroom inspiration"), then narrow to local
            ("bathroom fitter [city]"), then evaluate by browsing 3-5 fitter websites in detail before
            requesting quotes. Your site needs to do three jobs across that journey: rank for the broad
            inspirational searches via Pinterest-style imagery, rank for local commercial searches via
            location pages, and convert via deep case studies once they land.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">What converts on bathroom fitter websites</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue mb-8">
            <li><strong>Before/after sliders</strong> — interactive drag galleries that prove transformation</li>
            <li><strong>Cost-band guidance</strong> — "Standard refit £6-9k, Premium £10-15k, Wetroom £8-12k" — sets budget expectations</li>
            <li><strong>Materials sourcing</strong> — named suppliers (Crosswater, Roca, VitrA, Burlington) signal quality</li>
            <li><strong>Process diagram</strong> — survey → design → strip-out → first fix → tiling → second fix → snag (typical 5-day timeline)</li>
            <li><strong>Trade body memberships</strong> —{' '}
              <a
                href="https://www.bmf.org.uk/"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Builders Merchants Federation
              </a>
              ,{' '}
              <a
                href="https://www.fmb.org.uk/"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Federation of Master Builders
              </a>
              , Which? Trusted Trader
            </li>
            <li><strong>Insurance disclosure</strong> — public liability and workmanship guarantee figures</li>
            <li><strong>Photo-rich Google Business Profile</strong> — drives the Map Pack and provides retargeting fuel</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">Specialism landing pages</h2>
          <p className="text-slate-blue mb-4">
            Different bathroom types serve different customers and rank for different search terms. Our
            Journeyman tier (10 pages) lets you build dedicated landing pages for: family bathrooms,
            ensuites, wetrooms, accessibility installations (level-access showers, grab rails — see{' '}
            <a
              href="https://www.gov.uk/disabled-facilities-grants"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Disabled Facilities Grants
            </a>
            ), luxury bathrooms, and commercial bathroom installations. Each page targets its own keyword
            cluster and has its own gallery, FAQ, and quote form.
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

          <RelatedLinks keys={['home', 'packages', 'cost', 'seo', 'gas', 'blogInclude']} />
        </div>
      </div>
    </div>
  );
}
