import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AUTHOR } from '@/components/AuthorBio';

export const metadata = {
  title: { absolute: 'Andrew Norman — Founder | PlumberWebDesign.co.uk' },
  description:
    'Andrew Norman is the founder of PlumberWebDesign.co.uk. He writes about web design, local SEO, and Google Business Profile for UK plumbers, gas engineers, and bathroom fitters.',
  alternates: { canonical: AUTHOR.url },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': AUTHOR.url,
  name: AUTHOR.name,
  url: AUTHOR.url,
  image: AUTHOR.image,
  jobTitle: AUTHOR.jobTitle,
  description:
    'Founder of PlumberWebDesign.co.uk, a specialist UK web design agency for plumbers, gas engineers, heating engineers, and bathroom fitters.',
  knowsAbout: AUTHOR.knowsAbout,
  sameAs: [AUTHOR.linkedin],
  worksFor: {
    '@type': 'Organization',
    name: 'PlumberWebDesign.co.uk',
    url: 'https://www.plumberwebdesign.co.uk/',
  },
};

export default function AuthorPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={personSchema} />
      <Breadcrumbs items={[{ label: 'About', href: '/about/andrew-norman/' }]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">
            Author Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{AUTHOR.name}</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            {AUTHOR.jobTitle}, PlumberWebDesign.co.uk
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none space-y-6">
            <h2 className="text-2xl font-display font-bold text-navy-dark">Background</h2>
            <p className="text-slate-blue leading-relaxed">
              Andrew Norman has spent years building websites and running local SEO campaigns for UK
              service-area businesses. PlumberWebDesign.co.uk is the result of focusing that experience on a
              single industry: UK plumbers, gas engineers, heating engineers, and bathroom fitters.
            </p>
            <p className="text-slate-blue leading-relaxed">
              The premise behind the agency is simple. Generic web designers spend half a project explaining
              what a Gas Safe register is or why emergency call-outs are the most profitable jobs. A specialist
              who already understands the trade can ship a better website faster, with local SEO baked in from
              day one.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy-dark">What I write about</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
              <li>Local SEO and Google Business Profile for plumbers</li>
              <li>Mobile-first web design that converts emergency-search traffic into phone calls</li>
              <li>Schema.org structured data for trades businesses</li>
              <li>Pricing strategies for UK web design agencies serving small trades businesses</li>
              <li>AI receptionists and chatbots for plumbing call-handling</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-navy-dark">Methodology</h2>
            <p className="text-slate-blue leading-relaxed">
              Every blog post on this site is researched against primary sources where possible — the
              <a
                href="https://developers.google.com/search/docs/appearance/structured-data"
                rel="noopener"
                className="text-amber hover:underline"
              >
                {' '}
                Google Search Central documentation
              </a>
              , the{' '}
              <a
                href="https://www.gassaferegister.co.uk/"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Gas Safe Register
              </a>
              , the{' '}
              <a href="https://www.ons.gov.uk/" rel="noopener" className="text-amber hover:underline">
                Office for National Statistics
              </a>
              , and Google&apos;s own product documentation for Business Profile and Maps. Where statistics
              are quoted, the source is linked inline.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy-dark">Recent posts</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
              <li>
                <Link
                  href="/blog/do-plumbers-need-websites/"
                  className="text-amber hover:underline"
                >
                  Do Plumbers Need Websites in 2026?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/plumber-website-not-ranking-google/"
                  className="text-amber hover:underline"
                >
                  Why Your Plumber Website Isn&apos;t Ranking on Google
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/what-should-plumber-website-include/"
                  className="text-amber hover:underline"
                >
                  What Should a Plumber Website Include in 2026?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/google-business-profile-plumbers-guide/"
                  className="text-amber hover:underline"
                >
                  Google Business Profile for Plumbers: A Complete Setup Guide
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-navy-dark">Contact</h2>
            <p className="text-slate-blue leading-relaxed">
              For editorial questions, corrections, or to suggest a topic, email hello@plumberwebdesign.co.uk
              or connect on{' '}
              <a href={AUTHOR.linkedin} rel="noopener" className="text-amber hover:underline">
                LinkedIn
              </a>
              .
            </p>

            <div className="text-center mt-12">
              <Link
                href="/plumber-web-design-agency/"
                className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all"
              >
                About the agency →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
