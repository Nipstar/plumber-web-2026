import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  ctaHref?: string; // Kept for backwards compatibility but we override it based on the name
  highlighted?: boolean;
  addOns?: string[];
  launchPrice?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  tagline,
  features,
  highlighted,
  addOns,
  launchPrice,
}: PricingCardProps) {
  const contactUrl = `/contact/?package=${name.toLowerCase()}`;

  return (
    <div className={`relative flex flex-col rounded-2xl p-8 shadow-xl border ${
      highlighted
        ? 'bg-navy-dark text-white border-amber/30 ring-1 ring-amber/50 shadow-amber/10'
        : 'bg-white text-navy-card border-slate-blue/10'
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber text-navy-dark text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold mb-2">{name}</h3>
        <p className={`text-sm mb-6 ${highlighted ? 'text-white/70' : 'text-slate-blue/80'}`}>{tagline}</p>
        {launchPrice ? (
          <>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-display font-bold text-amber">{launchPrice}</span>
              <span className={`text-sm ${highlighted ? 'text-white/70' : 'text-slate-blue/80'}`}>{period}</span>
              <span className={`text-2xl font-display line-through ${highlighted ? 'text-white/40' : 'text-slate-blue/40'}`}>{price}</span>
            </div>
            <div className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
              highlighted ? 'bg-amber/20 text-amber border border-amber/30' : 'bg-amber/15 text-amber border border-amber/30'
            }`}>
              Launch price · locked-in 12 months
            </div>
          </>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-display font-bold">{price}</span>
            <span className={`text-sm ${highlighted ? 'text-white/70' : 'text-slate-blue/80'}`}>{period}</span>
          </div>
        )}
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <svg className={`flex-shrink-0 w-5 h-5 ${highlighted ? 'text-amber' : 'text-amber'}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            <span className={highlighted ? 'text-white/90' : 'text-slate-blue'}>{feature}</span>
          </li>
        ))}
      </ul>

      {addOns && addOns.length > 0 && (
        <div className={`mb-8 p-4 rounded-xl border ${
          highlighted ? 'bg-slate-blue/10 border-slate-blue/20' : 'bg-navy-dark/5 border-slate-blue/15'
        }`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${
            highlighted ? 'text-white/50' : 'text-slate-blue/60'
          }`}>Compatible Add-ons</p>
          <div className="flex flex-wrap gap-2">
            {addOns.map(addon => (
              <span key={addon} className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                highlighted ? 'bg-navy-card text-amber' : 'bg-amber/20 text-amber border border-amber/30'
              }`}>
                {addon}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link 
        href={contactUrl}
        className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-200 shadow-md ${
          highlighted 
            ? 'bg-amber text-navy-dark hover:bg-white hover:shadow-lg hover:-translate-y-0.5' 
            : 'bg-navy-dark text-white hover:bg-navy-card hover:shadow-lg hover:-translate-y-0.5'
        }`}
      >
        Choose {name}
      </Link>
    </div>
  );
}
