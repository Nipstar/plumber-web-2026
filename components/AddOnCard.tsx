import Link from 'next/link';

interface AddOnCardProps {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  slug: string;
}

export default function AddOnCard({
  name,
  price,
  priceNote,
  description,
  features,
  slug
}: AddOnCardProps) {
  return (
    <div className="flex flex-col bg-white text-navy-card rounded-2xl shadow-lg border border-slate-blue/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-amber" aria-hidden="true" />
      
      <div className="p-8 pb-6 bg-slate-blue/5 border-b border-slate-blue/10">
        <h3 className="font-display font-bold text-2xl mb-2 ml-4">{name}</h3>
        <div className="flex items-baseline gap-1 ml-4 mb-1">
          <span className="text-3xl font-display font-bold">{price}</span>
        </div>
        <p className="text-xs text-slate-blue font-medium ml-4">{priceNote}</p>
      </div>

      <div className="p-8 flex-1 flex flex-col pl-12">
        <p className="text-sm leading-relaxed text-slate-blue mb-6">
          {description}
        </p>

        <ul className="flex-1 space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <svg className="flex-shrink-0 w-5 h-5 text-amber" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-blue">{feature}</span>
            </li>
          ))}
        </ul>

        <Link 
          href={`/contact/?addon=${slug}`}
          className="w-full bg-navy-dark text-white font-bold py-3.5 px-6 rounded-xl text-center hover:bg-navy-card shadow-md hover:shadow-lg transition-all"
        >
          Add {name.split(' ')[1] || name} →
        </Link>
      </div>
    </div>
  );
}
