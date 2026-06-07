import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';
import { ogBase, twitterBase } from '@/app/shared-metadata';

const TITLE = 'Plumber Web Design Agency UK | Founder-Led, Trade-Only';
const DESCRIPTION = 'A UK plumber web design agency building only for plumbing and heating trades. Founder-led, no offshore handoffs. Free site audit and quote.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/plumber-web-design-agency/' },
  openGraph: { ...ogBase, title: TITLE, description: DESCRIPTION },
  twitter: { ...twitterBase, title: TITLE, description: DESCRIPTION },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PlumberWebDesign.co.uk",
  "url": "https://www.plumberwebdesign.co.uk/",
  "telephone": "03333356750",
  "email": "hello@plumberwebdesign.co.uk",
  "description": "Specialist web design agency for UK plumbers, gas engineers, and heating engineers.",
  "areaServed": { "@type": "Country", "name": "GB" },
  "priceRange": "££",
  "founder": authorPersonSchema(),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a plumber web design agency?", "acceptedAnswer": { "@type": "Answer", "text": "A plumber web design agency is a specialist agency that builds and maintains websites exclusively for plumbing, gas engineering, heating engineering, and bathroom-fitting businesses. Specialist agencies ship faster, rank higher locally, and charge less than generalist agencies because they reuse trade-specific templates, schema, and local SEO patterns." } },
    { "@type": "Question", "name": "Why use a specialist agency instead of a generalist?", "acceptedAnswer": { "@type": "Answer", "text": "Generalist agencies spend half a project learning your trade — what Gas Safe is, why emergency call-outs matter, how Map Pack rankings work for service-area businesses. A specialist agency already knows. The result is shorter timelines (1-2 weeks vs 8-12 weeks), lower price (£99/month vs £3,000+ one-off), and stronger rankings because the site is built around proven plumber-specific SEO patterns." } },
    { "@type": "Question", "name": "Do you only serve UK plumbers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. UK only. No US, no Europe, no Australia. The agency focuses on UK plumbers, gas engineers, heating engineers, and bathroom fitters — the entire product is built around UK Gas Safe regulations, UK Google Business Profile settings, UK postcode targeting, and UK consumer search behaviour." } },
    { "@type": "Question", "name": "What is the build process?", "acceptedAnswer": { "@type": "Answer", "text": "Four steps: Discovery (we map your goals, target trades, and service areas), Design (custom premium design with mobile-first focus), Build (Next.js development with schema, analytics, and contact forms), and Launch (go-live plus Google Business Profile setup and ongoing local SEO). Total time: 1-2 weeks from sign-off." } },
    { "@type": "Question", "name": "Do I own the website at the end?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. After a minimum six-month subscription, ownership transfers — all files, domain, and content. The site is portable to any host. Before six months, the site stays managed by us so we can recoup build costs." } }
  ]
};

export default function AgencyPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Agency', href: '/plumber-web-design-agency/' }]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">About Us</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">UK Plumber Web Design Agency</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            We don't build sites for cafes. We don't do e-commerce. We build high-performance lead generation engines exclusively for the UK trades.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Why hire a specialist?</h2>
              <p className="text-lg text-slate-blue mb-6 leading-relaxed">
                When you hire a generalist web designer, you spend half the project explaining what a Gas Safe register is or why emergency call-outs are your most profitable job.
              </p>
              <p className="text-lg text-slate-blue mb-8 leading-relaxed">
                We already know the plumbing industry. We know what customers search for when their boiler breaks down, and we know exactly how to design a site that converts those panicked searches into phone calls directly to you.
              </p>
              <ul className="space-y-4 text-navy-card font-medium">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Zero industry learning curve
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Built for rapid mobile conversion
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Ready-made Local SEO strategies out of the box
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber opacity-10 rounded-full blur-3xl -z-10 absolute-center"></div>
               <h3 className="text-2xl font-bold text-navy-dark mb-8">Our Full Service Stack</h3>
               <div className="space-y-6">
                 {[
                   { name: 'Custom Web Design', desc: 'Sleek, premium, and lightning-fast.' },
                   { name: 'Local SEO', desc: 'Ranking you in the Google Map Pack.' },
                   { name: 'Google Business Profile', desc: 'Full setup and monthly optimisation.' },
                   { name: 'AI Voice & Chat', desc: 'Automated 24/7 lead handling.' }
                 ].map(service => (
                   <div key={service.name} className="flex gap-4">
                     <div className="w-12 h-12 bg-light-gray rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-blue/10">
                       <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <div>
                       <h4 className="font-bold text-navy-dark">{service.name}</h4>
                       <p className="text-sm text-slate-blue">{service.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Founder Story */}
          <div className="mb-24 bg-white rounded-2xl p-10 shadow-sm border border-slate-blue/10">
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy-card flex items-center justify-center text-white font-display font-bold text-4xl">
                  {AUTHOR.name
                    .split(' ')
                    .map((p) => p[0])
                    .join('')}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-amber font-bold mb-2">
                  Founder&apos;s note
                </p>
                <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">
                  Why I started PlumberWebDesign.co.uk
                </h2>
                <p className="text-slate-blue mb-4 leading-relaxed">
                  I have spent years building websites and running local SEO for UK service businesses —
                  electricians, accountants, gyms, plumbers. The pattern was always the same. Generalist
                  agencies would charge £3,000 for a generic site that took six months to ship and never
                  ranked. I got tired of fixing other people&apos;s work.
                </p>
                <p className="text-slate-blue mb-4 leading-relaxed">
                  PlumberWebDesign.co.uk exists because UK plumbers deserve better. One specialism, one
                  market, one outcome: a site that ranks locally and turns emergency searches into booked
                  jobs. No restaurants. No e-commerce. No distractions. Every page is built, written, and
                  reviewed by a single named editor — not outsourced or AI-generated without review.
                </p>
                <p className="text-slate-blue leading-relaxed">
                  If you have been burned by a generalist before, you are not alone — and you are the exact
                  customer we built this for.
                </p>
                <div className="mt-6">
                  <Link
                    href={`/about/${AUTHOR.slug}/`}
                    className="text-amber font-bold hover:underline"
                  >
                    More about Andrew →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Step Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Our 4-Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Discovery', desc: 'We map out your business goals, target trades, and key service areas to structure the perfect site architecture.' },
                { step: '2', title: 'Design', desc: 'We craft a premium, modern design matching your brand, focusing heavily on mobile usability and click-to-call.' },
                { step: '3', title: 'Build', desc: 'We develop the site on Next.js for blazing fast performance, wiring up your contact forms and analytics.' },
                { step: '4', title: 'Launch', desc: 'We push the site live, configure your Google Business Profile, and kick off the ongoing local SEO strategy.' },
              ].map(process => (
                <div key={process.step} className="bg-white p-8 rounded-2xl border border-slate-blue/10 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className="text-6xl font-display font-black text-slate-blue/5 absolute -top-4 -right-4 z-0 group-hover:text-amber/10 transition-colors">{process.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy-dark mb-3">{process.title}</h3>
                    <p className="text-sm text-slate-blue leading-relaxed">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
             <Link href="/plumber-website-design-packages/" className="inline-block bg-amber text-navy-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
               View Our Pricing Packages →
             </Link>
          </div>

          <RelatedLinks keys={['home', 'packages', 'cost', 'seo', 'gas', 'heating']} />
        </div>
      </div>
    </div>
  );
}
