import Image from 'next/image';
import Link from 'next/link';

interface Props {
  vertical: string;
  headline: string;
  subhead: string;
  painPoints: string[];
  demoUrl: string;
  demoLabel: string;
  demoThumb: string;
}

const TRUST_BADGES = [
  'Built by Andy in Andover',
  'Launch pricing: £79/mo locked-in',
  'Live in 1–2 weeks',
  '30+ years in trades',
];

export default function VerticalConversionHero({
  vertical,
  headline,
  subhead,
  painPoints,
  demoUrl,
  demoLabel,
  demoThumb,
}: Props) {
  return (
    <section className="bg-navy-dark text-white border-b border-slate-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="inline-block bg-amber/15 text-amber px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5 border border-amber/30">
          {vertical}
        </div>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mb-10">
          {headline}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-3">
            <p className="text-lg text-white/80 leading-relaxed mb-6">{subhead}</p>
            <ul className="space-y-3 mb-8">
              {painPoints.map(p => (
                <li key={p} className="flex gap-3 text-white/90">
                  <svg className="flex-shrink-0 w-5 h-5 text-amber mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-amber text-navy-dark font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/free-audit/"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
              >
                Free Audit <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-slate-blue/30 bg-navy-card shadow-2xl hover:-translate-y-1 transition-transform"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={demoThumb}
                  alt={`${vertical} demo site preview`}
                  width={1200}
                  height={750}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </a>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-amber hover:gap-2 transition-all"
            >
              {demoLabel}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-8 border-t border-slate-blue/30">
          {TRUST_BADGES.map(b => (
            <div key={b} className="flex items-center gap-2 text-sm">
              <svg className="flex-shrink-0 w-4 h-4 text-amber" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
