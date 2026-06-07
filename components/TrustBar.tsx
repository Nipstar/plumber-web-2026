interface TrustBarProps {
  variant?: 'home' | 'service' | 'location';
}

const cells: Record<NonNullable<TrustBarProps['variant']>, Array<{ title: string; sub: string }>> = {
  home: [
    { title: 'UK-only agency', sub: 'Hampshire based, serving plumbers nationwide' },
    { title: 'From £79/month', sub: 'No setup fee on website packages' },
    { title: 'Gas Safe aware', sub: 'Built for Gas Safe registered engineers' },
    { title: '6 cities covered', sub: 'London · Manchester · Birmingham · Liverpool · Portsmouth · Andover' },
  ],
  service: [
    { title: 'UK-only agency', sub: 'Hampshire based' },
    { title: 'From £99/month', sub: 'No setup fee' },
    { title: 'Fully transferable', sub: 'You own your site. No lock-in.' },
    { title: '30-day notice', sub: 'Cancel any time' },
  ],
  location: [
    { title: 'Local schema built in', sub: 'Structured data for Google Map Pack' },
    { title: 'Neighbourhood targeting', sub: 'Dedicated pages per suburb' },
    { title: 'GBP management', sub: 'Included in Journeyman + Master' },
    { title: 'Free quote', sub: 'Response within one working day' },
  ],
};

export default function TrustBar({ variant = 'home' }: TrustBarProps) {
  const items = cells[variant];
  return (
    <section className="bg-white border-y border-slate-blue/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((cell) => (
            <div key={cell.title} className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="font-bold text-navy-dark text-sm">{cell.title}</div>
                <div className="text-xs text-slate-blue mt-1 leading-relaxed">{cell.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
