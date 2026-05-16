import Link from 'next/link';
import Image from 'next/image';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'Do Plumbers Need Websites in 2026? | PlumberWebDesign' },
  description: 'Do plumbers need websites in 2026? Yes — 70% of plumbing searches happen on mobile, and Google Business Profile alone is not enough. Here is why, with data.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/blog/do-plumbers-need-websites/' },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Do Plumbers Need Websites in 2026?",
    "description": "Why every UK plumber needs a website, backed by search data. Google Business Profile alone is not enough.",
    "author": authorPersonSchema(),
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-04-23",
    "dateModified": "2026-05-15",
    "mainEntityOfPage": "https://www.plumberwebdesign.co.uk/blog/do-plumbers-need-websites/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do plumbers need a website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Over 70% of plumbing-related searches happen on mobile, and Google prioritises businesses with both a Google Business Profile and a professional website. Plumbers without a website lose jobs to competitors who have one." } },
      { "@type": "Question", "name": "Is a Google Business Profile enough for a plumber?", "acceptedAnswer": { "@type": "Answer", "text": "No. A GBP listing alone shows basic contact info but cannot rank for service-specific or location-specific queries. A website lets you target searches like 'boiler repair Manchester' that GBP cannot reach." } },
      { "@type": "Question", "name": "How much does a plumber website cost?", "acceptedAnswer": { "@type": "Answer", "text": "UK plumber websites typically cost £99-£249 per month on a managed plan, or £1,500-£5,000+ as a one-off build. Monthly plans include hosting, SSL, local SEO, and ongoing support." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog/' },
        { label: 'Do Plumbers Need Websites?', href: '/blog/do-plumbers-need-websites/' }
      ]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Do Plumbers Need Websites in 2026?</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 23 April 2026 · Updated 15 May 2026</time>
            <p className="text-white/60 text-sm">
              By{' '}
              <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">
                {AUTHOR.name}
              </Link>
              , Founder
            </p>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <div className="relative w-full h-[400px] sm:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-lg border border-slate-blue/10">
            <Image
              src="/images/blog/need_websites.webp"
              alt="Smartphone displaying a premium plumbing service website in a modern bathroom"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-lg text-navy-dark font-bold mb-2">Short answer</p>
            <p className="text-slate-blue leading-relaxed">
              Yes. Over 70% of plumbing-related searches happen on mobile, and Google prioritises businesses that have both a Google Business Profile and a professional website. Plumbers without a website lose jobs to competitors who have one. A Google Business Profile alone is not enough in 2026.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">The short answer is yes, but the reasons have changed</h2>
          <p className="text-slate-blue leading-relaxed">
            Ten years ago the answer to "do plumbers need websites" was a soft maybe. Your customers came from word of mouth, Yellow Pages, and the odd leaflet. In 2026 the answer is a hard yes — and the reasons are not the same reasons. The question is no longer "will a website win me more jobs" but "how badly am I losing without one."
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Where plumbing customers actually come from now</h2>
          <p className="text-slate-blue leading-relaxed">
            Pull the data from any UK plumbing business still running and the acquisition sources collapse to three channels: Google Search, Google Maps (GBP), and repeat customers. That is it. Facebook drives almost nothing. Instagram is worse. Yell is dead. The Yellow Pages is a museum piece. Even Checkatrade and MyBuilder are shrinking — they now sit below direct Google searches for every plumber we have measured.
          </p>
          <p className="text-slate-blue leading-relaxed">
            Of Google Search and Google Maps, Maps is what most plumbers optimise first. That is correct — it is the fastest win. But it is also where most plumbers stop, and that is where they cap their growth.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Why a Google Business Profile alone is not enough</h2>
          <p className="text-slate-blue leading-relaxed">
            A GBP listing shows basic contact info: name, hours, phone, a few photos, reviews, a star rating. That is enough to rank in the Map Pack for broad, location-specific queries like "plumber Portsmouth." But it cannot rank for anything more specific. "Boiler installation Southsea." "Emergency plumber Cosham Sunday." "Landlord gas safety certificate Fareham." These queries get served from the organic results — the 10 blue links below the map — and the only businesses that appear there are businesses with websites.
          </p>
          <p className="text-slate-blue leading-relaxed">
            Google itself publishes guidance confirming this. The official{' '}
            <a
              href="https://support.google.com/business/answer/7091"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google Business Profile help documentation on local ranking
            </a>{' '}
            states that prominence — which factors in your website&apos;s authority and links — is one of
            three pillars determining Map Pack position, alongside relevance and distance. Without a
            website you are ranking on two of three signals.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">The trust gap</h2>
          <p className="text-slate-blue leading-relaxed">
            Even when customers find you through your GBP listing, many will then check your website before calling.{' '}
            <a
              href="https://www.brightlocal.com/research/local-consumer-review-survey/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              BrightLocal&apos;s Local Consumer Review Survey
            </a>{' '}
            found that the overwhelming majority of consumers researching a local business read reviews and
            visit the website before making contact. No website means either an immediate bounce or a call
            placed with hesitation. A cheap one-page site is often worse than none at all — it signals low
            professionalism.
          </p>
          <p className="text-slate-blue leading-relaxed">
            The trust gap is especially wide for larger jobs. For a £120 tap fix a customer might call you from Google Maps alone. For a £6,000 bathroom refit or a £3,500 boiler installation, they will absolutely visit your website, check your reviews, look at your portfolio, and read your about page. No website means no £6,000 jobs.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What a plumber website actually does</h2>
          <p className="text-slate-blue leading-relaxed">
            A website built specifically for plumbers does five things a GBP listing cannot:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-slate-blue leading-relaxed">
            <li><strong>Ranks for service-specific queries</strong> — boiler repair, bathroom fitting, drain unblocking, power flushing, Gas Safe certificates. Each of these gets its own page on a proper plumber website, each one ranking independently.</li>
            <li><strong>Ranks for location-specific queries</strong> — every town or neighbourhood you cover gets its own landing page. "Plumber Clapham" and "Plumber Brixton" are different searches; a dedicated page wins each one.</li>
            <li>
              <strong>Displays trade credentials</strong> — your{' '}
              <a
                href="https://www.gassaferegister.co.uk/"
                rel="noopener"
                className="text-amber hover:underline"
              >
                Gas Safe Register
              </a>{' '}
              number, WaterSafe membership, CIPHE qualifications, manufacturer certifications (Worcester
              Bosch Accredited, Vaillant Advance). GBP does not let you display these with the prominence
              they deserve.
            </li>
            <li><strong>Captures leads 24/7</strong> — contact forms, emergency booking buttons, quote request tools, AI chatbots that qualify leads while you are on the tools. GBP sends customers to your phone or a third-party chat widget and nothing else.</li>
            <li><strong>Builds topical authority</strong> — a blog with content about boiler problems, emergency plumbing, energy-efficient heating, bathroom design trends. Each post ranks for long-tail queries and sends traffic to your service pages. GBP has no equivalent.</li>
          </ol>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What happens if you do not have one</h2>
          <p className="text-slate-blue leading-relaxed">
            Plumbers without websites report three consistent outcomes. First, flat revenue — their GBP listing produces the same volume of calls month over month with no upside. Second, low average job value — they win small repairs and miss larger installation and renovation work. Third, high customer acquisition cost — they rely on paid lead-gen services (Checkatrade, Bark, Rated People) that charge per lead, eroding margin. A website flips all three.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What a website does NOT need to be</h2>
          <p className="text-slate-blue leading-relaxed">
            It does not need to be pretty. Beautiful design is a nice-to-have. What matters is mobile speed, click-to-call prominence, local SEO fundamentals, and clear information. Some of the highest-converting plumber websites in the UK look plain. They load in under two seconds, they tell you exactly what the plumber does and where, they have a phone number in the header, and they rank. That is the job.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">&quot;But I get all my work from word of mouth&quot;</h2>
          <p className="text-slate-blue leading-relaxed">
            This is the most common objection from established plumbers in their 50s and 60s. And the
            answer is that word of mouth is no longer what it was a decade ago. When your neighbour
            recommends you, the next thing the new customer does is Google your business name. If they
            cannot find you online, the recommendation gets diluted by competing search results — and the
            customer often picks the plumber Google surfaces instead. Word of mouth used to be a closed
            loop. In 2026 it routes through Google.
          </p>
          <p className="text-slate-blue leading-relaxed">
            There is also a generational shift in who is doing the recommending. Adult children handle
            plumbing decisions for elderly parents. Tenants are routed through landlords or property
            managers — both of whom search online for compliance reasons. The pure-referral plumber loses
            access to roughly 40-60% of the modern market without realising it.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">The ROI maths on a £99/month plumber website</h2>
          <p className="text-slate-blue leading-relaxed">
            Plumbers regularly ask whether the website ROI actually stacks. The maths is simple. The
            Apprentice tier is £99/month, £1,188/year. The average emergency call-out in the UK in 2026 is
            £150-£250 plus parts. A single new booking per quarter that the website wins covers the entire
            annual cost. A boiler installation at £2,500-£3,500 in net margin pays for two years.
          </p>
          <p className="text-slate-blue leading-relaxed">
            Realistic numbers: most newly-launched plumber websites generate 2-6 new enquiries per month
            in the first six months, ramping to 8-25 enquiries per month by month twelve as local rankings
            mature. At a 40-60% close rate (typical for emergency-led trades), that is 1-3 closed jobs per
            month from the website alone within a year. The break-even is the second job.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">When NOT to build a plumber website</h2>
          <p className="text-slate-blue leading-relaxed">
            Honesty matters. There are three scenarios where a plumber website is the wrong investment.
            First, if you are within 18 months of retirement and not selling the business — there is no
            ROI window. Second, if you are already maxed out on bookings six months ahead and have no
            intention of taking on staff — more leads becomes a problem, not an opportunity. Third, if
            your business is genuinely commercial-only (large contracts, councils, housing associations) —
            those buyers do not find you via Google search, they find you through procurement portals and
            framework agreements.
          </p>
          <p className="text-slate-blue leading-relaxed">
            For every other UK plumber — residential service, mixed residential and small commercial,
            growing single-trader, multi-van business — a proper website is non-negotiable in 2026.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What about DIY builders and templates?</h2>
          <p className="text-slate-blue leading-relaxed">
            Wix, Squarespace, GoDaddy templates. They work technically — the site loads, the pages exist. What they do not do is rank. Templates come with generic content, poor site structure, weak local SEO, and rarely include schema markup or proper heading hierarchy. The plumbers we see on page one of Google for competitive queries all have purpose-built websites. The plumbers on page five have templates.
          </p>
          <p className="text-slate-blue leading-relaxed">
            If budget is tight, a £99/month managed plumber website beats a £150 template-plus-hosting set-up every time on ranking potential. The maths is also cleaner — a managed package includes local SEO setup, GBP management, and ongoing fixes. A template gives you the site and leaves the rest to you.
          </p>


          <div className="text-center mt-12">
            <Link href="/plumber-website-design-packages/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              See our plumber website packages
            </Link>
          </div>

          <RelatedLinks keys={['home', 'cost', 'blogRank', 'blogInclude', 'blogGBP', 'seo']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
