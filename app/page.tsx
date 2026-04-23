import Image from 'next/image';
import Link from 'next/link';
import PricingCard from '@/components/PricingCard';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import SchemaScript from '@/components/SchemaScript';

export const metadata = {
  title: { absolute: 'Plumber Web Design | Websites for Plumbers from £99/month' },
  description: 'Specialist web design for plumbers across the UK. Mobile-first, SEO-optimised websites built to generate calls and win jobs. Packages from £99/month.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/' }
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
      'Google Analytics + Search Console',
      'Google Business Profile setup',
      'Priority phone & email support'
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
      'Contact forms + blog integration',
      'Google Business Profile + monthly posts',
      'Google Review management tracking',
      'Priority phone & email support'
    ]
  },
  {
    name: 'Master',
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
      'Google Review management',
      'Optional link building service',
      'Priority phone & email support'
    ]
  }
];

const faqItems = [
  { question: 'How long does it take?', answer: '2–3 weeks from sign-off.' },
  { question: 'Do I own the website?', answer: 'Yes. Fully transferable. No lock-in.' },
  { question: 'Is SEO included?', answer: 'Yes. Local SEO setup in every package.' },
  { question: 'Do you work with gas and heating engineers?', answer: 'Yes. See our specialist pages.' },
  { question: 'What happens after the first year?', answer: 'Annual hosting renewal. We notify you in advance.' },
  { question: 'Can I see examples?', answer: 'Yes. Once you enquire, we can share live client examples relevant to your trade and location.' }
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PlumberWebDesign.co.uk",
    "url": "https://plumberwebdesign.co.uk",
    "logo": "https://plumberwebdesign.co.uk/images/logo.png",
    "image": "https://plumberwebdesign.co.uk/images/logo.png",
    "telephone": "03333356750",
    "email": "hello@plumberwebdesign.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Bank Transfer, Credit Card, Debit Card",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "sameAs": [],
    "knowsAbout": [
      "Web design for plumbers",
      "Plumber SEO",
      "Gas engineer websites",
      "Heating engineer websites",
      "AI chatbots for tradespeople",
      "Local SEO for trades"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumber Website Packages",
      "itemListElement": [
        { "@type": "Offer", "name": "Apprentice", "price": "99", "priceCurrency": "GBP", "description": "5-page responsive website with basic local SEO" },
        { "@type": "Offer", "name": "Journeyman", "price": "169", "priceCurrency": "GBP", "description": "10-page custom website with advanced local SEO" },
        { "@type": "Offer", "name": "Master", "price": "249", "priceCurrency": "GBP", "description": "20+ page custom website with full SEO and content" }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PlumberWebDesign.co.uk",
    "url": "https://plumberwebdesign.co.uk",
    "logo": "https://plumberwebdesign.co.uk/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+443333356750",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PlumberWebDesign.co.uk",
    "url": "https://plumberwebdesign.co.uk",
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk" },
    "inLanguage": "en-GB"
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Plumber Website Packages",
    "url": "https://plumberwebdesign.co.uk/",
    "priceCurrency": "GBP",
    "lowPrice": "99",
    "highPrice": "249",
    "offerCount": "3"
  };

  const serviceSchemas = pricingPackages.map(pkg => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${pkg.name} Plumber Website Package`,
    "provider": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "url": "https://plumberwebdesign.co.uk" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" },
    "description": pkg.tagline,
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace('£', ''),
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": pkg.price.replace('£', ''),
        "priceCurrency": "GBP",
        "unitCode": "MON"
      }
    }
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plumberwebdesign.co.uk/" }
    ]
  };

  return (
    <>
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={organizationSchema} />
      <SchemaScript schema={websiteSchema} />
      <SchemaScript schema={aggregateOfferSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      {serviceSchemas.map((s, i) => (
        <SchemaScript key={`service-${i}`} schema={s} />
      ))}

      {/* Hero Section */}
      <section className="relative bg-navy-dark text-white overflow-hidden py-24 lg:py-32 border-b border-slate-blue/20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_blueprint_dark.png" 
            alt="Technical schematic background" 
            fill
            className="object-cover opacity-[0.15]"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber/10 via-navy-dark/80 to-navy-dark/100" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight">
                Web Design for Plumbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber/80">Wins Jobs</span>
              </h1>
              <p className="text-xl text-light-gray/90 font-medium mb-6 max-w-xl leading-relaxed">
                We build websites exclusively for UK plumbers and heating engineers. Fast. Local SEO-ready. Built to generate calls.
              </p>
              <div className="bg-navy-card/60 border border-amber/30 rounded-xl p-5 mb-10 max-w-xl">
                <p className="text-sm text-amber font-bold uppercase tracking-wider mb-2">What is web design for plumbers?</p>
                <p className="text-base text-white/80 leading-relaxed">
                  Plumber web design is specialist website design for UK plumbing businesses. A proper plumber website is mobile-first, optimised for local Google searches, has click-to-call and emergency booking, and integrates with Google Business Profile. Prices start from £99 per month.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact/" className="bg-amber text-navy-dark font-bold px-8 py-4 rounded-full text-center hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get a Free Quote →
                </Link>
                <Link href="/plumber-website-design-packages/" className="bg-transparent border-2 border-slate-blue hover:border-white text-white font-bold px-8 py-4 rounded-full text-center transition-all hover:bg-white/5">
                  View Pricing
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/70">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Serving UK Plumbers
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  From £99/month
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Local SEO included
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber to-amber/30 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-navy-card border border-slate-blue/30 rounded-3xl p-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-display font-extrabold text-white mb-1">£99</div>
                    <div className="text-sm font-medium text-amber uppercase tracking-wider">Starting price /mo</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-extrabold text-white mb-1">2–3 wks</div>
                    <div className="text-sm font-medium text-amber uppercase tracking-wider">Average build</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-extrabold text-white mb-1">100%</div>
                    <div className="text-sm font-medium text-amber uppercase tracking-wider">Mobile-first</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-extrabold text-white mb-1">UK</div>
                    <div className="text-sm font-medium text-amber uppercase tracking-wider">Only market we serve</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar variant="home" />

      {/* Problem Block */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-dark mb-6">Your competitors are on page 1 of Google. <span className="text-amber">Where are you?</span></h2>
          <p className="text-lg text-slate-blue mb-16 max-w-3xl mx-auto">Most plumber websites act like digital business cards. That's a mistake. Your website should be a lead generation machine that works 24/7. When someone has a burst pipe at 2 AM, they don't look at business cards—they Google it.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-8 rounded-2xl border border-slate-blue/10 text-left hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-navy-card text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">1</div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">Invisible on Google</h3>
              <p className="text-slate-blue">If you're not in the top 3 spots or the map pack, competitors capture the call.</p>
            </div>
            <div className="bg-light-gray p-8 rounded-2xl border border-slate-blue/10 text-left hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-navy-card text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">2</div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">Broken on mobile</h3>
              <p className="text-slate-blue">Over 70% of plumbing searches happen on a phone. Your site must load instantly.</p>
            </div>
            <div className="bg-light-gray p-8 rounded-2xl border border-slate-blue/10 text-left hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-navy-card text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">3</div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">No clear booking</h3>
              <p className="text-slate-blue">Visitors get confused and leave instead of calling or submitting an emergency form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-24 bg-light-gray border-t border-slate-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-dark mb-4">Built for Your Trade</h2>
          <p className="text-lg text-slate-blue mb-16 max-w-2xl mx-auto">We don't build sites for restaurants or accountants. We build exclusively for the trade.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Plumbers', link: '/', img: '/images/trade_plumber.png' },
              { title: 'Gas Engineers', link: '/gas-engineer-website-design/', img: '/images/trade_gas.png' },
              { title: 'Heating Engineers', link: '/heating-engineer-website-design/', img: '/images/trade_heating.png' },
              { title: 'Bathroom Fitters', link: '/bathroom-fitter-website-design/', img: '/images/trade_bathroom.png' },
            ].map(trade => (
              <Link href={trade.link} key={trade.title} className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                <Image src={trade.img} alt={trade.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:-translate-y-1 transition-transform">
                    <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber transition-colors">{trade.title}</h3>
                  <p className="text-sm text-white/70">View specialist packages →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Mockup Section */}
      <section className="py-24 bg-navy-card text-white border-y border-slate-blue/20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">AI Add-Ons</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">Your website answers the phone when you can't.</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">You're under a sink. Your hands are dirty. A customer calls, gets voicemail, and immediately calls the next plumber on Google. <strong>Stop losing jobs to missed calls.</strong> Our AI receptionists and chatbots qualify leads and book jobs 24/7.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-navy-dark p-6 rounded-2xl border border-slate-blue/30">
                  <div className="w-10 h-10 bg-amber/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <h4 className="font-bold text-white mb-2">AI Chatbot</h4>
                  <p className="text-sm text-white/70">Engages website visitors, answers FAQs, and captures lead info.</p>
                </div>
                <div className="bg-navy-dark p-6 rounded-2xl border border-slate-blue/30">
                  <div className="w-10 h-10 bg-amber/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h4 className="font-bold text-white mb-2">Voice Agent</h4>
                  <p className="text-sm text-white/70">Answers your inbound calls automatically and books appointments.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact/?addon=both" className="bg-amber text-navy-dark font-bold px-6 py-3 rounded-xl hover:bg-white transition-all shadow-md">
                  Ask about Add-Ons →
                </Link>
                <Link href="/plumber-website-design-packages/" className="border border-slate-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-blue/20 transition-all">
                  See Packages
                </Link>
              </div>
            </div>

            <div className="relative mx-auto mt-12 lg:mt-0 max-w-sm w-full perspective-1000">
              <div className="relative shadow-2xl rounded-[2.5rem] border-8 border-navy-dark overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] bg-black">
                <Image 
                  src="/images/app_mockup.png" 
                  alt="AI Chatbot booking interface on mobile"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber rounded-full blur-[100px] opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-dark mb-6">Transparent pricing — no hidden costs</h2>
            <p className="text-lg text-slate-blue">All packages include premium cloud hosting and SSL. If you need a new domain, we'll provide it for free. Hosting renews annually after your first year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/plumber-website-design-packages/" className="inline-flex items-center gap-2 font-bold text-navy-dark hover:text-amber transition-colors">
              See full package feature comparison 
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-light-gray border-t border-slate-blue/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-dark mb-4">Common Questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-amber relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_blueprint_dark.png')] opacity-[0.05] bg-cover mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-dark mb-6">Ready to get more calls?</h2>
          <p className="text-xl text-navy-dark/80 font-medium mb-10 max-w-2xl mx-auto">
            Tell us about your business today and we'll put together a free quote and strategy mapping for your local area.
          </p>
          <Link href="/contact/" className="inline-block bg-navy-dark text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-navy-card hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
