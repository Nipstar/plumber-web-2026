import Link from 'next/link';

export const AUTHOR = {
  name: 'Andrew Norman',
  slug: 'andrew-norman',
  jobTitle: 'Founder',
  bio: 'Andrew founded PlumberWebDesign.co.uk after a decade building websites and local SEO campaigns for UK trades businesses. He writes about plumber marketing, local search, and what actually moves the needle for service-area businesses on Google.',
  url: 'https://www.plumberwebdesign.co.uk/about/andrew-norman/',
  image: 'https://www.plumberwebdesign.co.uk/images/andrew-norman.jpg',
  linkedin: 'https://www.linkedin.com/in/andrew-norman-plumberwebdesign/',
  knowsAbout: [
    'Web design for plumbers',
    'Local SEO for trades',
    'Google Business Profile optimisation',
    'Next.js static site delivery',
    'Schema.org structured data',
  ],
};

export function authorPersonSchema() {
  return {
    '@type': 'Person',
    '@id': AUTHOR.url,
    name: AUTHOR.name,
    url: AUTHOR.url,
    image: AUTHOR.image,
    jobTitle: AUTHOR.jobTitle,
    knowsAbout: AUTHOR.knowsAbout,
    sameAs: [AUTHOR.linkedin],
    worksFor: {
      '@type': 'Organization',
      name: 'PlumberWebDesign.co.uk',
      url: 'https://www.plumberwebdesign.co.uk/',
    },
  };
}

export default function AuthorBio({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="text-white/60 text-sm">
        By{' '}
        <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">
          {AUTHOR.name}
        </Link>
        , {AUTHOR.jobTitle}
      </div>
    );
  }
  return (
    <aside className="bg-white border border-slate-blue/10 rounded-2xl p-6 my-8 flex flex-col sm:flex-row gap-5">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full bg-navy-card flex items-center justify-center text-white font-display font-bold text-2xl">
          {AUTHOR.name
            .split(' ')
            .map((p) => p[0])
            .join('')}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-amber font-bold mb-1">About the author</p>
        <Link
          href={`/about/${AUTHOR.slug}/`}
          className="text-navy-dark font-display font-bold text-lg hover:text-amber transition-colors"
        >
          {AUTHOR.name}
        </Link>
        <p className="text-sm text-slate-blue/80 mb-2">{AUTHOR.jobTitle}, PlumberWebDesign.co.uk</p>
        <p className="text-sm text-slate-blue leading-relaxed">{AUTHOR.bio}</p>
      </div>
    </aside>
  );
}
