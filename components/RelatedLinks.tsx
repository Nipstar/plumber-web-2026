import Link from 'next/link';

type LinkItem = { href: string; anchor: string; note: string };

const ALL_LINKS: Record<string, LinkItem> = {
  home: { href: '/', anchor: 'Web design for plumbers', note: 'main UK service overview' },
  websites: { href: '/websites-for-plumbers/', anchor: 'Websites for plumbers', note: 'UK specialist agency overview' },
  packages: { href: '/plumber-website-design-packages/', anchor: 'Plumber website packages', note: 'pricing from £99/month' },
  cost: { href: '/plumber-website-cost/', anchor: 'Plumber website cost', note: 'full UK breakdown' },
  agency: { href: '/plumber-web-design-agency/', anchor: 'Plumber web design agency', note: 'about the specialist agency' },
  seo: { href: '/seo-for-plumbers/', anchor: 'SEO for plumbers', note: 'local search optimisation' },
  gas: { href: '/gas-engineer-website-design/', anchor: 'Gas engineer websites', note: 'for Gas Safe engineers' },
  heating: { href: '/heating-engineer-website-design/', anchor: 'Heating engineer websites', note: 'boiler and heat pump landing pages' },
  bathroom: { href: '/bathroom-fitter-website-design/', anchor: 'Bathroom fitter websites', note: 'portfolio-led, high-ticket' },
  blogDo: { href: '/blog/do-plumbers-need-websites/', anchor: 'Do plumbers need websites in 2026?', note: 'with UK search data' },
  blogRank: { href: '/blog/plumber-website-not-ranking-google/', anchor: 'Why your plumber website is not ranking', note: '6 fixes' },
  blogInclude: { href: '/blog/what-should-plumber-website-include/', anchor: 'What a plumber website should include in 2026', note: 'feature checklist' },
  blogGBP: { href: '/blog/google-business-profile-plumbers-guide/', anchor: 'Google Business Profile setup for plumbers', note: 'complete guide' },
  blogLocal: { href: '/blog/what-is-local-seo-plumber-guide/', anchor: 'What is local SEO?', note: 'UK plumber guide' },
  blogChecklist: { href: '/blog/plumber-seo-checklist-2026/', anchor: 'Plumber SEO checklist 2026', note: '37 ranked items' },
  blogMarketing: { href: '/blog/how-much-should-plumber-spend-on-marketing/', anchor: 'Plumber marketing spend benchmarks', note: 'UK 2026 numbers' },
  blogExamples: { href: '/blog/plumber-website-examples-uk/', anchor: 'UK plumber website examples', note: 'what works in 2026' },
  blogAds: { href: '/blog/google-ads-for-plumbers-uk/', anchor: 'Google Ads for plumbers UK', note: 'CPCs, keywords, ROAS' },
  blogBuilder: { href: '/blog/best-website-builder-for-plumbers-uk/', anchor: 'Best website builder for UK plumbers', note: 'Wix vs Squarespace vs managed' },
};

export default function RelatedLinks({ keys, heading = 'Explore further' }: { keys: (keyof typeof ALL_LINKS)[]; heading?: string }) {
  return (
    <nav aria-label="Related pages" className="bg-white border border-slate-blue/10 rounded-2xl p-8 my-12">
      <h2 className="text-xl font-display font-bold text-navy-dark mb-4">{heading}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-blue">
        {keys.map((k) => {
          const link = ALL_LINKS[k];
          return (
            <li key={k}>
              →{' '}
              <Link href={link.href} className="text-amber hover:underline">
                {link.anchor}
              </Link>{' '}
              — {link.note}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
