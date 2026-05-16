import Image from 'next/image';
import Link from 'next/link';

const BADGES = [
  '30+ years in field service',
  'Part of Antek Automation group',
  'ICO Registered: ZC133436',
  'UK-based, Andover, Hampshire',
];

export default function FounderPanel() {
  return (
    <section className="bg-light-gray py-20 lg:py-24 border-b border-slate-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl border border-slate-blue/15 bg-navy-dark">
              <Image
                src="/andy-norman.webp"
                alt="Andy Norman, founder of Plumber Web Design"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 80vw, 32rem"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight mb-4">
              Built by Andy. From Andover.
            </h2>
            <p className="text-lg text-amber font-display font-semibold mb-6">
              30 years in the trades &mdash; now building websites for them.
            </p>

            <p className="text-slate-blue leading-relaxed mb-4">
              I&rsquo;m Andy Norman, founder of Plumber Web Design. I spent 30+ years in field service and managed print
              service, building service operations for businesses across the UK. I learned what makes trades businesses
              tick &mdash; and what makes their websites fail.
            </p>
            <p className="text-slate-blue leading-relaxed mb-8">
              Plumber Web Design is part of the{' '}
              <a
                href="https://antekautomation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber font-semibold hover:underline"
              >
                Antek Automation
              </a>{' '}
              group. We&rsquo;re a new studio with a focused mission: build websites exclusively for UK plumbers, gas
              engineers, heating engineers and bathroom fitters. No generalist agency overhead. No offshore handoffs.
              Just one operator who answers the phone and writes the code.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {BADGES.map(b => (
                <div
                  key={b}
                  className="flex items-center gap-2 bg-white border border-slate-blue/15 rounded-xl px-4 py-3 shadow-sm"
                >
                  <svg className="flex-shrink-0 w-4 h-4 text-amber" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-navy-card">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-amber text-navy-dark font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/about/"
                className="text-sm font-semibold text-navy-dark hover:text-amber transition-colors"
              >
                or read more about Andy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
