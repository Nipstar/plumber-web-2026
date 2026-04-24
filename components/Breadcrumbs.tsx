import Link from 'next/link';
import SchemaScript from './SchemaScript';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

const BASE_URL = 'https://www.plumberwebdesign.co.uk';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const full: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": full.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.label,
      "item": `${BASE_URL}${item.href}`
    }))
  };

  return (
    <>
      <SchemaScript schema={schema} />
      <nav aria-label="Breadcrumb" className="bg-light-gray border-b border-slate-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {full.map((item, i) => {
              const last = i === full.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-2">
                  {last ? (
                    <span className="text-navy-dark font-medium" aria-current="page">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="text-slate-blue hover:text-amber transition-colors">{item.label}</Link>
                  )}
                  {!last && (
                    <svg className="w-3 h-3 text-slate-blue/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
