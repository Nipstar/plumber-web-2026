import Link from 'next/link';

const ITEMS = [
  {
    n: '01',
    title: 'You get the founder',
    body: 'Big agencies put you on a junior account manager and offshore the build. With us, Andy handles every site personally. You get his mobile number. You speak to the person who writes the code.',
  },
  {
    n: '02',
    title: 'Launch pricing reflects launch reality',
    body: 'We&rsquo;re building our first portfolio. Founding clients get £79/month locked-in for 12 months instead of £99. In exchange, we&rsquo;d love to feature your finished site as a case study. No pressure if you&rsquo;d rather stay private.',
  },
  {
    n: '03',
    title: 'Antek Automation backs us',
    body: 'Plumber Web Design isn&rsquo;t a side project. It&rsquo;s a focused studio inside the Antek Automation group &mdash; already running AI automation, voice agents, and n8n workflows for UK businesses. The infrastructure and operational know-how are already in place.',
  },
];

export default function WhyNewStudio() {
  return (
    <section className="bg-light-gray py-20 lg:py-24 border-y border-slate-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight mb-4">
            Why work with a new studio?
          </h2>
          <p className="text-lg text-slate-blue">Fair question. Here&rsquo;s the honest answer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ITEMS.map(item => (
            <div
              key={item.n}
              className="bg-white rounded-2xl p-8 border border-slate-blue/10 shadow-md flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber/15 text-amber font-display font-bold text-lg mb-5">
                {item.n}
              </div>
              <h3 className="font-display text-xl font-bold text-navy-dark mb-3">{item.title}</h3>
              <p
                className="text-slate-blue leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 bg-navy-dark text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-card transition-colors"
          >
            See how we work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
