import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import VerticalConversionHero from '@/components/VerticalConversionHero';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'SEO for Plumbers UK | Local SEO for Plumbing Businesses',
  description: 'Local SEO for UK plumbers. Get found when customers search "plumber near me". Google Business Profile management, citations, and on-page optimisation.',
  path: '/seo-for-plumbers/',
});

export default function SeoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PlumberWebDesign.co.uk — SEO for Plumbers",
    "url": "https://www.plumberwebdesign.co.uk/seo-for-plumbers/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Local SEO services for UK plumbers. Google Business Profile management, citation building, review strategy, and on-page optimisation.",
    "address": { "@type": "PostalAddress", "addressCountry": "GB" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" },
    "priceRange": "££",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00", "closes": "17:30"
    }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is SEO for plumbers?", "acceptedAnswer": { "@type": "Answer", "text": "SEO for plumbers is local search engine optimisation tailored to UK plumbing businesses. It combines on-page optimisation of location and service pages, Google Business Profile management, NAP citation building across UK trade directories, review acquisition, and schema markup. The goal is to rank in the Google Map Pack and organic results for 'plumber near me' and 'boiler repair [city]' queries." } },
      { "@type": "Question", "name": "How long does plumber SEO take to work?", "acceptedAnswer": { "@type": "Answer", "text": "Local rankings for smaller towns and specific neighbourhoods typically take 3-6 months. Competitive city-wide queries like 'plumber London' take 9-18 months. Long-tail service-plus-location queries (boiler repair Stockport, emergency plumber Cosham) usually rank faster than broad terms because they have lower competition." } },
      { "@type": "Question", "name": "Do I need SEO if I already have Google Business Profile?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. GBP rules the Map Pack but cannot rank for service-specific or commercial queries below the map. Combining a well-optimised GBP with website SEO captures both Map Pack and organic blue-link traffic — typically 2-3x the lead volume of GBP alone." } },
      { "@type": "Question", "name": "What is included in your plumber SEO service?", "acceptedAnswer": { "@type": "Answer", "text": "On-page optimisation of location and service landing pages with LocalBusiness JSON-LD schema, NAP citation building across UK directories (Yell, Checkatrade, FreeIndex, TrustATrader, local council directories), full Google Business Profile setup and weekly posting, review acquisition strategy, and ongoing technical SEO monitoring." } },
      { "@type": "Question", "name": "Is SEO better than Google Ads for plumbers?", "acceptedAnswer": { "@type": "Answer", "text": "Different jobs. Google Ads and Local Services Ads deliver calls immediately but stop the moment budget runs out. SEO takes 3-6 months to ramp but each ranked page generates free clicks indefinitely. Most growing plumbers run both — paid for immediate fill, organic for compounding ROI over 12-24 months." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'SEO for Plumbers', href: '/seo-for-plumbers/' }]} />
      <VerticalConversionHero
        vertical="Local SEO"
        headline="SEO for Plumbers That Wins the Local Map Pack"
        subhead="Rankings are only useful if you rank where customers search. We focus on the Map Pack and 'emergency plumber [town]' queries that actually convert into booked jobs."
        painPoints={[
          "You're invisible in the Map Pack",
          'Your service-area pages have thin content',
          'Google Business Profile sitting at 60% complete',
        ]}
        demoUrl="https://emergency.plumberwebdesign.co.uk"
        demoLabel="See our local SEO demo →"
        demoThumb="/portfolio/emergency.webp"
      />

      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Why Local SEO matters for plumbers</h2>
            <p className="text-slate-blue mb-8">
              When a pipe bursts or a boiler stops firing in the middle of winter, people don't ask their neighbours for a recommendation anymore. They pull out their phones and search for "plumber near me" or "emergency plumber [City]".
            </p>
            <p className="text-slate-blue mb-12">
              If your business isn't showing up in the top 3 spots of the Google Map Pack, or on the first page of organic results, you are invisible to your most urgent, high-paying customers. Local SEO is the process of proving to Google that you are the most relevant, reliable, and closest solution to the customer's problem.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10 mb-12">
              <h2 className="text-2xl font-display font-bold text-navy-dark mb-6">What is included in our SEO services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-navy-dark mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber pb-1"></span> On-Page Optimisation
                  </h3>
                  <p className="text-sm text-slate-blue">We build perfect location and service landing pages with correct H1s, metadata, and local JSON-LD schema markup so Google understands exactly what you do and where you do it.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber pb-1"></span> Citation Building
                  </h3>
                  <p className="text-sm text-slate-blue">We ensure your Name, Address, and Phone number (NAP) are exactly consistent across directories like Yell, Checkatrade, and local business hubs.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber pb-1"></span> GBP Management
                  </h3>
                  <p className="text-sm text-slate-blue">We fully optimise your Google Business Profile, uploading photos, answering Q&As, and utilising weekly GBP posts to signal high activity to Google's local algorithm.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber pb-1"></span> Review Handling
                  </h3>
                  <p className="text-sm text-slate-blue">Reviews are a massive ranking factor. We help you implement a seamless review generation strategy to consistently pull in 5-star ratings from happy clients.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Organic SEO vs Paid Ads</h2>
            <p className="text-slate-blue mb-8">
              Paid ads (Google Ads/LSA) are excellent for immediate short-term calls, but you pay for every single click. As soon as your budget runs out, your phone stops ringing. Organic SEO is an investment. It takes time to build, but once you rank at the top, those clicks and calls are completely free, providing a massively higher ROI over a 12-to-24 month window.
            </p>

            <div className="flex gap-4 items-center bg-navy-card text-white p-6 rounded-xl border border-amber/30 mb-12">
              <div className="bg-amber/20 p-3 rounded-full flex-shrink-0">
                <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">UK Only, No Black-Hat Trash</h3>
                <p className="text-sm text-white/70">We only serve UK trades. We don't use spammy private blog networks or black-hat tactics that will get your domain penalised. 100% white-hat, sustainable growth.</p>
              </div>
            </div>

            <div className="bg-amber p-8 rounded-2xl shadow-lg border border-amber/50 text-center">
              <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">Want SEO built-in?</h2>
              <p className="text-navy-dark/80 mb-6">
                Our <strong>Journeyman</strong> and <strong>Master</strong> website packages include our advanced local SEO setups right out of the box, combining your high-converting website build with the sustained traffic generation you need to grow.
              </p>
              <Link href="/plumber-website-design-packages/" className="inline-block bg-navy-dark text-white font-bold text-lg px-8 py-4 rounded-xl shadow hover:bg-navy-card transition-all">
                View Packages with SEO
              </Link>
            </div>

            <RelatedLinks keys={['home', 'packages', 'cost', 'blogGBP', 'blogRank', 'gas']} />
          </div>

        </div>
      </div>
    </div>
  );
}
