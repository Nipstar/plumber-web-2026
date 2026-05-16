import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaScript from '@/components/SchemaScript';

export const metadata: Metadata = {
  title: { absolute: 'About Andy Norman · Plumber Web Design UK' },
  description: 'Plumber Web Design is run by Andy Norman from Andover. 30+ years in field service, now building websites for UK plumbers, heating and gas engineers.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/about/' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrew Norman',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Plumber Web Design',
    url: 'https://www.plumberwebdesign.co.uk/',
    parentOrganization: { '@type': 'Organization', name: 'Antek Automation', url: 'https://antekautomation.com/' },
  },
  image: 'https://www.plumberwebdesign.co.uk/andy-norman.webp',
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://www.plumberwebdesign.co.uk/about/',
  mainEntity: {
    '@type': 'Organization',
    name: 'Plumber Web Design',
    url: 'https://www.plumberwebdesign.co.uk/',
    founder: { '@type': 'Person', name: 'Andrew Norman' },
    parentOrganization: { '@type': 'Organization', name: 'Antek Automation', url: 'https://antekautomation.com/' },
    areaServed: 'GB',
  },
};

const BELIEFS = [
  'Trades businesses deserve websites built by people who understand trades',
  'Transparent pricing beats free-quote-then-sales-pressure every time',
  "A website that doesn't generate calls is a brochure, not a business asset",
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={aboutSchema} />
      <SchemaScript schema={personSchema} />
      <Breadcrumbs items={[{ label: 'About', href: '/about/' }]} />

      <section className="bg-navy-dark text-white py-24 border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            About Plumber Web Design
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl">
            A new UK studio, built on 30+ years in the trades.
          </p>
        </div>
      </section>

      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl border border-slate-blue/15">
                <Image
                  src="/andy-norman.webp"
                  alt="Andy Norman, founder of Plumber Web Design"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 80vw, 28rem"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-dark">
                Andy Norman, Founder
              </h2>
              <p className="text-slate-blue leading-relaxed">
                I&rsquo;ve spent 30+ years in field service and managed print service, running and supporting service
                operations for businesses across the UK. I have seen what makes trades businesses win, and what makes
                them lose &mdash; and a bad website is one of the most consistent losses.
              </p>
              <p className="text-slate-blue leading-relaxed">
                I started Plumber Web Design because there are too many plumbers, gas engineers, heating engineers and
                bathroom fitters bleeding jobs to badly-built websites every week. Big agencies don&rsquo;t understand
                the trade. Generalist freelancers don&rsquo;t care enough to learn. I do both.
              </p>
              <p className="text-slate-blue leading-relaxed">
                Plumber Web Design is a studio inside the{' '}
                <a
                  href="https://antekautomation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber font-semibold hover:underline"
                >
                  Antek Automation
                </a>{' '}
                group. Antek already runs AI automation, voice agents, and n8n workflows for UK businesses. We use
                that infrastructure to build sites that not only look good, but actually answer the phone when you
                can&rsquo;t.
              </p>
              <p className="text-slate-blue leading-relaxed">
                We&rsquo;re based in Andover, Hampshire. UK clients only. Always.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-y border-slate-blue/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-12 text-center">
            What we believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BELIEFS.map((b, i) => (
              <div
                key={i}
                className="bg-light-gray rounded-2xl p-6 border border-slate-blue/10 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber/15 text-amber font-display font-bold mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-navy-card font-medium leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-dark mb-6">
            The studio
          </h2>
          <ul className="space-y-3 text-slate-blue mb-10">
            <li>
              <strong className="text-navy-dark">Based:</strong> Andover, Hampshire (UK only)
            </li>
            <li>
              <strong className="text-navy-dark">ICO Registration:</strong> ZC133436
            </li>
            <li>
              <strong className="text-navy-dark">Group:</strong>{' '}
              <a
                href="https://antekautomation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber font-semibold hover:underline"
              >
                Antek Automation
              </a>{' '}
              company
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-amber text-navy-dark font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Get a Free Quote <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/free-audit/"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-navy-dark text-navy-dark font-bold px-6 py-3 rounded-xl hover:bg-navy-dark hover:text-white transition-all"
            >
              Free Site Audit <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
