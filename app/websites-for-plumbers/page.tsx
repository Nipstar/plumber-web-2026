import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';

export const metadata = {
  title: { absolute: 'Websites for Plumbers | UK Specialist from £99/month' },
  description:
    'Websites for plumbers built exclusively for UK plumbing businesses. Mobile-first, local SEO ready, no setup fees on website packages. Pricing from £99/month.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/websites-for-plumbers/' },
};

export default function WebsitesForPlumbersPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'PlumberWebDesign.co.uk — Websites for Plumbers',
    url: 'https://www.plumberwebdesign.co.uk/websites-for-plumbers/',
    logo: 'https://www.plumberwebdesign.co.uk/images/logo.webp',
    telephone: '03333356750',
    email: 'hello@plumberwebdesign.co.uk',
    description:
      'Websites for plumbers built exclusively for UK plumbing businesses. Mobile-first, local SEO baked in, transparent monthly pricing.',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    priceRange: '££',
    founder: authorPersonSchema(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumber Website Packages',
      itemListElement: [
        { '@type': 'Offer', name: 'Apprentice', price: '99', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Journeyman', price: '169', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Master', price: '249', priceCurrency: 'GBP' },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are websites for plumbers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Websites for plumbers are specialist business websites built around how UK plumbing customers actually search and convert. They include mobile-first design, click-to-call on every page, Gas Safe credential display, postcode landing pages, Google Business Profile integration, LocalBusiness schema, and emergency booking flows. UK monthly pricing starts at £99 with hosting, SSL, and local SEO included.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much do websites for plumbers cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UK plumber websites cost £99-£249 per month on a managed plan, or £1,500-£5,000+ as a one-off custom build. Monthly plans include hosting, domain, SSL, and ongoing local SEO. One-off builds are billed separately for hosting and SEO on top of the upfront fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why use a specialist instead of a generalist agency for a plumber website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A specialist agency already understands Gas Safe regulations, emergency call-out economics, local Map Pack ranking factors, and the search behaviour of UK plumbing customers. A generalist learns on your project. Specialists ship faster (1-2 weeks vs 8-12), charge less (£99/month vs £3,000+ one-off), and rank higher because the site is built on proven plumber-specific SEO patterns.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do plumber websites need separate location pages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every town, postcode, or neighbourhood you serve should have a dedicated landing page. Google matches search intent to specific locations — "boiler repair Stockport" and "boiler repair Manchester" return different results. Without location pages you rank for none of them.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a plumber website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'One to two weeks from sign-off. That covers design, content writing, schema markup, service and location pages, Google Business Profile integration, contact forms, and a staging review before launch.',
        },
      },
    ],
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Websites for Plumbers', href: '/websites-for-plumbers/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">
            UK Specialist Agency
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Websites for Plumbers</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Specialist websites for UK plumbers, gas engineers, heating engineers, and bathroom fitters.
            Mobile-first, local SEO ready, built to generate calls. Pricing from £99/month.
          </p>
        </div>
      </div>

      <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-sm uppercase tracking-wider text-amber font-bold mb-2">Quick answer</p>
            <p className="text-slate-blue mb-0 leading-relaxed">
              Websites for plumbers are specialist business websites built for UK plumbing businesses. They
              are mobile-first, optimised for local Google searches, integrate with Google Business
              Profile, display Gas Safe credentials, and include emergency booking flows. UK pricing from
              £99/month including hosting, SSL, and local SEO.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Why plumbers need specialist websites in 2026</h2>
          <p className="text-slate-blue leading-relaxed">
            A plumber website is not the same as a restaurant website or an e-commerce store. The customer
            journey is different (urgent, often mobile, frequently at 2am), the trust signals are
            different (
            <a
              href="https://www.gassaferegister.co.uk/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Gas Safe Register
            </a>{' '}
            number, CIPHE, WaterSafe), and the SEO landscape is different (Map Pack rankings, postcode
            targeting, service-area business rules). A generic template website rarely ranks for any of
            the queries that actually drive plumber revenue.
          </p>
          <p className="text-slate-blue leading-relaxed">
            UK plumbers competing with template sites built by generalist agencies routinely sit on page 4
            or page 5 of Google. Plumbers with purpose-built specialist sites sit in the Map Pack and the
            top 3 organic results. The difference is not budget. The difference is whether the website was
            engineered for plumber-specific search behaviour from day one.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What goes into a proper plumber website</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>
              <strong>Mobile-first design</strong> — over 70% of plumbing-related searches happen on a
              phone. Mobile loads under 2 seconds, click-to-call prominent on every page
            </li>
            <li>
              <strong>Dedicated service pages</strong> — boiler installation, boiler repair, bathroom
              fitting, drain unblocking, gas safety certificates, emergency call-out. Each page targeting
              its own search cluster
            </li>
            <li>
              <strong>Postcode landing pages</strong> — every town or borough you serve gets its own page
              with locally-relevant content
            </li>
            <li>
              <strong>JSON-LD schema markup</strong> — LocalBusiness, Service, FAQPage,
              OpeningHoursSpecification, AreaServed. Verified via{' '}
              <a
                href="https://search.google.com/test/rich-results"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Google&apos;s Rich Results Test
              </a>
            </li>
            <li>
              <strong>Google Business Profile integration</strong> — directly linked, with consistent NAP
              data across both
            </li>
            <li>
              <strong>Trust signals above the fold</strong> — Gas Safe number, review rating, years
              trading, trade body memberships
            </li>
            <li>
              <strong>Click-to-call buttons</strong> — sticky, mobile-prominent, on every page
            </li>
            <li>
              <strong>Emergency booking flows</strong> — short forms, 3 fields max, that capture the lead
              before they bounce
            </li>
            <li>
              <strong>Optional AI add-ons</strong> — 24/7 chatbot or voice agent that handles enquiries
              when you are on the tools
            </li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What plumber websites cost in the UK</h2>
          <p className="text-slate-blue leading-relaxed">
            Plumber website pricing in the UK falls into three brackets. Monthly managed packages run
            £99-£249 per month with everything included (hosting, SSL, domain, local SEO, ongoing
            support). One-off custom builds from generalist agencies are £1,500-£5,000+ with hosting and
            SEO billed separately. DIY template builders (Wix, Squarespace) cost £15-£40 per month but
            require you to do every part of SEO, content, and ongoing maintenance yourself.
          </p>
          <p className="text-slate-blue leading-relaxed">
            The maths favours monthly managed packages for most plumbers because the upfront cost is zero,
            ongoing SEO is included, and the site stays maintained without you having to chase your web
            designer six months after launch. Read the full{' '}
            <Link href="/plumber-website-cost/" className="text-amber hover:underline">
              plumber website cost guide
            </Link>{' '}
            for the year-by-year total cost comparison.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Specialist by trade</h2>
          <p className="text-slate-blue leading-relaxed">
            Within plumbing, the trade matters. Our service pages cover the main trade specialisms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>
              <Link href="/gas-engineer-website-design/" className="text-amber hover:underline">
                Gas engineer websites
              </Link>{' '}
              — Gas Safe display, CP12 booking flows, emergency call-out buttons
            </li>
            <li>
              <Link href="/heating-engineer-website-design/" className="text-amber hover:underline">
                Heating engineer websites
              </Link>{' '}
              — boiler installation, heat pump and underfloor heating landing pages, MCS credentials
            </li>
            <li>
              <Link href="/bathroom-fitter-website-design/" className="text-amber hover:underline">
                Bathroom fitter websites
              </Link>{' '}
              — before/after galleries, project case studies, quote-request forms
            </li>
            <li>
              <Link href="/seo-for-plumbers/" className="text-amber hover:underline">
                SEO for plumbers
              </Link>{' '}
              — local SEO, GBP management, citation building, review acquisition
            </li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pricing at a glance</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>
              <strong>Apprentice £99/month</strong> — 5-page responsive site, basic local SEO, hosting +
              SSL + free domain, Google Business Profile setup
            </li>
            <li>
              <strong>Journeyman £169/month</strong> — 10-page site, service and location pages, advanced
              local SEO, GBP monthly posting, review management
            </li>
            <li>
              <strong>Master £249/month</strong> — 20+ page site, 2 monthly blog posts, full GBP
              optimisation, optional link building
            </li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            No setup fees on website packages. Six-month minimum term, then full ownership transfers and
            you can cancel any time with 30 days notice. Full breakdown:{' '}
            <Link href="/plumber-website-design-packages/" className="text-amber hover:underline">
              plumber website packages
            </Link>
            .
          </p>

          <div className="text-center mt-12">
            <Link
              href="/contact/"
              className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all"
            >
              Get a free quote
            </Link>
          </div>

          <RelatedLinks
            keys={['packages', 'cost', 'seo', 'gas', 'heating', 'bathroom']}
            heading="Explore further"
          />
        </div>
      </div>
    </div>
  );
}
