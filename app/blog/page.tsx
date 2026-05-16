import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Plumber Web Design Blog | SEO Tips for UK Plumbers' },
  description: 'Web design and local SEO advice for UK plumbers, gas engineers, and heating engineers. Practical tips to rank on Google and win more jobs from organic search.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/blog/' },
};

const posts = [
  {
    title: "The 2026 Plumber SEO Checklist (UK)",
    slug: 'plumber-seo-checklist-2026',
    excerpt: "37 ranked items across technical, on-page, local, and content SEO. Each tagged with impact and effort. Designed for UK plumbers serious about ranking on Google.",
    date: '15 May 2026',
    image: '/images/blog/seo_checklist.webp'
  },
  {
    title: "What is Local SEO? A UK Plumber's Guide",
    slug: 'what-is-local-seo-plumber-guide',
    excerpt: "Plain-English guide to local SEO for UK plumbers. Map Pack vs blue links, NAP citations, review acquisition, and a six-month plan you can run yourself or outsource.",
    date: '15 May 2026',
    image: '/images/blog/local_seo.webp'
  },
  {
    title: "How Much Should a Plumber Spend on Marketing?",
    slug: 'how-much-should-plumber-spend-on-marketing',
    excerpt: "UK plumber marketing benchmarks for 2026. Channel split, ROI by tactic, worked example for a £100k/year solo plumber. Real numbers, no fluff.",
    date: '15 May 2026',
    image: '/images/blog/marketing_budget.webp'
  },
  {
    title: "Google Ads for Plumbers UK — Cost, Keywords, ROAS",
    slug: 'google-ads-for-plumbers-uk',
    excerpt: "Typical UK plumber Google Ads CPCs, top-performing keyword clusters, LSA vs Search Ads, and the ROAS maths most plumbers get wrong.",
    date: '15 May 2026',
    image: '/images/blog/google_ads.webp'
  },
  {
    title: "UK Plumber Website Examples — What Works in 2026",
    slug: 'plumber-website-examples-uk',
    excerpt: "Seven patterns the top-ranking UK plumber websites share — and the patterns the plumbers stuck on page 4 keep repeating. Use as a commissioning checklist.",
    date: '15 May 2026',
    image: '/images/blog/website_examples.webp'
  },
  {
    title: "Best Website Builder for UK Plumbers (2026 Comparison)",
    slug: 'best-website-builder-for-plumbers-uk',
    excerpt: "Wix vs Squarespace vs WordPress vs managed alternatives. 24-month total cost comparison including your time. No affiliate spin.",
    date: '15 May 2026',
    image: '/images/blog/website_builders.webp'
  },
  {
    title: "Do Plumbers Need Websites in 2026?",
    slug: 'do-plumbers-need-websites',
    excerpt: "Short answer: yes. Over 70% of plumbing searches happen on mobile and Google prioritises businesses with both a GBP listing and a proper website. A Google Business Profile alone is not enough.",
    date: '23 Apr 2026',
    image: '/images/blog/need_websites.webp'
  },
  {
    title: "Google Business Profile for Plumbers: A Complete Setup Guide",
    slug: 'google-business-profile-plumbers-guide',
    excerpt: "Your GBP is arguably more important than your website for local map pack rankings. Follow our comprehensive tutorial to establish your profile correctly and dominate local search.",
    date: '1 Apr 2026',
    image: '/images/blog/gbp_guide.webp'
  },
  {
    title: "What Should a Plumber Website Include in 2026?",
    slug: 'what-should-plumber-website-include',
    excerpt: "Having a contact form is no longer enough. From AI voice agents to Gas Safe verification loops, discover the features that turn standard websites into lead-generation machines.",
    date: '22 Mar 2026',
    image: '/images/blog/website_includes.webp'
  },
  {
    title: "Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)",
    slug: 'plumber-website-not-ranking-google',
    excerpt: "Not seeing your website on page one? Learn the most common local SEO mistakes plumbers make — and the quick wins you can implement today to start generating organic traffic.",
    date: '15 Mar 2026',
    image: '/images/blog/not_ranking.webp'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }]} />
       <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Plumber Web Design Blog</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Actionable strategies and technical advice to help UK plumbers generate more leads from their digital presence.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}/`} key={post.slug} className="bg-white rounded-2xl shadow-lg border border-slate-blue/10 overflow-hidden flex flex-col group">
              <div className="h-48 relative overflow-hidden bg-navy-dark">
                 <Image 
                   src={post.image} 
                   alt={post.title} 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105" 
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <time className="text-amber text-xs font-bold uppercase tracking-wider mb-3 block">{post.date}</time>
                <h2 className="text-2xl font-bold text-navy-dark mb-4 group-hover:text-amber transition-colors">{post.title}</h2>
                <p className="text-slate-blue leading-relaxed mb-8 flex-1">{post.excerpt}</p>
                <div className="mt-auto">
                  <span className="inline-block bg-slate-blue/5 group-hover:bg-amber group-hover:text-navy-dark text-slate-blue font-bold px-6 py-3 rounded-xl transition-colors">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
