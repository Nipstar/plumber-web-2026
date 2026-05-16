'use client';

import Image from 'next/image';

type Demo = {
  thumb: string;
  heading: string;
  subhead: string;
  url: string;
};

const DEMOS: Demo[] = [
  {
    thumb: '/portfolio/biomass.webp',
    heading: 'Heating & Biomass',
    subhead: 'Heat pump installer · MCS angle',
    url: 'https://biomass.plumberwebdesign.co.uk',
  },
  {
    thumb: '/portfolio/emergency.webp',
    heading: 'Emergency Plumber',
    subhead: '24/7 callout · Mobile-first urgency',
    url: 'https://emergency.plumberwebdesign.co.uk',
  },
  {
    thumb: '/portfolio/bathrooms.webp',
    heading: 'Bathroom Fitter',
    subhead: 'Gallery-led · Inspiration phase capture',
    url: 'https://bathrooms.plumberwebdesign.co.uk',
  },
  {
    thumb: '/portfolio/boiler.webp',
    heading: 'Gas & Boiler',
    subhead: 'Gas Safe verification · CP12 booking',
    url: 'https://boiler.plumberwebdesign.co.uk',
  },
];

export default function DemoGallery() {
  const track = (heading: string) => {
    window.dataLayer?.push({ event: 'demo_click', demo_name: heading });
  };

  return (
    <section className="bg-white py-20 lg:py-24 border-b border-slate-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight mb-4">
            See real plumber websites we&rsquo;ve built
          </h2>
          <p className="text-lg text-slate-blue mb-3">
            Four working demos covering the trades we specialise in. Click any to explore &mdash; they&rsquo;re live, fast,
            mobile-first.
          </p>
          <p className="text-sm text-slate-blue/70 italic">
            These are demo builds we&rsquo;ve created to showcase the design system. Real client sites coming soon &mdash;
            founding clients get featured here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DEMOS.map(d => (
            <a
              key={d.heading}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(d.heading)}
              className="group relative block bg-light-gray rounded-2xl overflow-hidden border border-slate-blue/10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-dark">
                <Image
                  src={d.thumb}
                  alt={`${d.heading} demo site preview`}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-dark mb-1">{d.heading}</h3>
                  <p className="text-sm text-slate-blue/70">{d.subhead}</p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center gap-1 text-sm font-bold text-amber group-hover:gap-2 transition-all">
                  View demo <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
