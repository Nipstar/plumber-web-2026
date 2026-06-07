import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import FaqAccordion from '@/components/FaqAccordion';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import VerticalConversionHero from '@/components/VerticalConversionHero';
import { ogBase, twitterBase } from '@/app/shared-metadata';

const TITLE = 'Gas Engineer Website Design UK | Gas Safe-Ready Sites';
const DESCRIPTION = 'Website design for gas engineers and gas fitters across the UK. Gas Safe credentials, emergency booking and local SEO. Founder-led from Andover.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/gas-engineer-website-design/' },
  openGraph: { ...ogBase, title: TITLE, description: DESCRIPTION },
  twitter: { ...twitterBase, title: TITLE, description: DESCRIPTION },
};

const pricingPackages = [
  {
    name: 'Apprentice', launchPrice: '£79',
    price: '£99',
    period: '/month',
    tagline: 'Perfect for getting started.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '5-page responsive website',
      'Gas Safe prominent display',
      'Free domain (if needed)',
      'Fast hosting + SSL certificate',
      'Basic local SEO setup',
      'Contact & booking forms'
    ]
  },
  {
    name: 'Journeyman', launchPrice: '£129',
    price: '£169',
    period: '/month',
    tagline: 'Our most popular trades package.',
    highlighted: true,
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '10-page custom website',
      'Gas certificate & boiler service pages',
      'Advanced local SEO optimisation',
      'Fast hosting + SSL (Domain inc.)',
      'Google Business Profile + monthly posts',
      'Google Review management'
    ]
  },
  {
    name: 'Master', launchPrice: '£199',
    price: '£249',
    period: '/month',
    tagline: 'Dominate your local area.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '20+ page custom website (full structure)',
      'Advanced local SEO optimisation',
      'Fast hosting + SSL (Domain inc.)',
      'Monthly blog posts (2/month)',
      'GBP setup, optimisation & posting',
      'Priority phone & email support'
    ]
  }
];

const gasFaqs = [
  { question: 'Do I need a special page for my Gas Safe credentials?', answer: 'Yes, we prominently display your Gas Safe registration number and logo across the site. We can also add a verification link back to the official register.' },
  { question: 'Can customers book a boiler service online?', answer: 'Absolutely. We can integrate smart contact forms that allow customers to request specific dates for automated boiler servicing or landlord safety certificates.' },
  { question: 'What about emergency call-outs?', answer: 'We build your mobile layout with a persistent "sticky" click-to-call button specifically for emergency gas leaks or boiler breakdowns.' }
];

export default function GasEngineerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": gasFaqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PlumberWebDesign.co.uk — Gas Engineer Web Design",
    "url": "https://www.plumberwebdesign.co.uk/gas-engineer-website-design/",
    "logo": "https://www.plumberwebdesign.co.uk/images/logo.webp",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "description": "Specialist website design for Gas Safe registered engineers across the UK. Prominent Gas Safe display, emergency booking forms, and local SEO.",
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
      "name": "Gas Engineer Website Packages",
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
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Gas Engineer Website Design', href: '/gas-engineer-website-design/' }]} />
      <VerticalConversionHero
        vertical="Gas Engineer"
        headline="Gas Engineer Website Design, Built Gas Safe-First"
        subhead="When customers are dealing with potentially dangerous gas work, they aren't searching for a 'handyman' — they need certified authority. Your website needs to lead with Gas Safe verification and CP12 credentials."
        painPoints={[
          "Customers can't find your Gas Safe number in 5 seconds",
          'No CP12 / landlord certificate booking flow',
          'Generic plumber sites lose trust on first impression',
        ]}
        demoUrl="https://boiler.plumberwebdesign.co.uk"
        demoLabel="See our gas engineer demo →"
        demoThumb="/portfolio/boiler.webp"
      />

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Generic plumber websites don't cut it.</h2>
              <p className="text-lg text-slate-blue mb-6 leading-relaxed">
                As a gas engineer, trust is your ultimate currency. When customers are dealing with potentially dangerous gas work, they aren't looking for a "handyman"—they are looking for certified authority.
              </p>
              <ul className="space-y-4 text-navy-card font-medium mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Prominent Gas Safe verification
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Landlord CP12 Certificate booking flows
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Fast emergency call-out buttons for mobile
                </li>
              </ul>
              <Link href="/contact/?package=apprentice" className="bg-amber text-navy-dark font-bold px-8 py-4 rounded-full inline-block hover:bg-white hover:shadow-lg transition-all shadow-md">
                Get Your Quote →
              </Link>
            </div>
            <div className="bg-navy-card rounded-2xl p-10 shadow-2xl border border-slate-blue/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('/images/hero_blueprint_dark.webp')] opacity-10 mix-blend-overlay"></div>
               <div className="relative z-10 text-center">
                 <div className="w-20 h-20 bg-amber rounded-full mx-auto mb-6 flex items-center justify-center">
                   {/* Simplified flame icon */}
                   <svg className="w-10 h-10 text-navy-dark" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C12 2 7 6 7 12c0 2.8 2.2 5 5 5s5-2.2 5-5c0-6-5-10-5-10zm0 18c-3.9 0-7-3.1-7-7 0-4.2 3.1-7.8 7-8V2c4.4.2 8 3.8 8 8 0 3.9-3.1 7-7 7v3z"/></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Boiler Installation Focus</h3>
                 <p className="text-white/70 mb-0">
                   We create dedicated landing pages for new boiler installations vs repairs, allowing you to capture high-value jobs from customers actively searching for replacements.
                 </p>
               </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Packages for Gas Engineers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map(pkg => (
                <PricingCard key={pkg.name} {...pkg} />
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-8 text-center">Gas Engineer FAQs</h2>
            <FaqAccordion items={gasFaqs} />
          </div>

          <div className="max-w-4xl mx-auto">
            <RelatedLinks keys={['home', 'packages', 'cost', 'heating', 'seo', 'blogGBP']} />
          </div>

        </div>
      </div>
    </div>
  );
}
