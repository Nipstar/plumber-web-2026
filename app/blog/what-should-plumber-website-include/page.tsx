import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'What Should a Plumber Website Include in 2026?' },
  description: "A contact form is no longer enough. Discover the essential features that turn a plumber website into a lead-generation machine — AI chatbots, Gas Safe trust loops, more.",
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/blog/what-should-plumber-website-include/' },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Should a Plumber Website Include in 2026?",
    "description": "Having a contact form is no longer enough. Discover the features that turn standard plumber websites into lead-generation machines.",
    "author": authorPersonSchema(),
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-03-22",
    "dateModified": "2026-05-15",
    "mainEntityOfPage": "https://www.plumberwebdesign.co.uk/blog/what-should-plumber-website-include/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What should a plumber website include in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "A modern plumber website needs click-to-call on every page, dedicated service pages for each trade specialism, location pages per service area, visible trust signals (Gas Safe number, reviews, qualifications), real project photos, an AI chatbot or voice agent for 24/7 lead capture, sub-2-second mobile load time, and JSON-LD schema markup." } },
      { "@type": "Question", "name": "Do plumber websites need AI chatbots?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — 2026 is the year AI receptionists became affordable for small trades businesses. A chatbot or voice agent typically pays for itself in the first month by capturing leads that would otherwise hit voicemail and call the next plumber on Google." } },
      { "@type": "Question", "name": "How fast should a plumber website load?", "acceptedAnswer": { "@type": "Answer", "text": "Under 2 seconds on mobile. Google PageSpeed Insights should score 90+ on the mobile test. Core Web Vitals (LCP, INP, CLS) should all be in the green band — these are direct ranking factors." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog/' },
        { label: 'What Should a Plumber Website Include in 2026', href: '/blog/what-should-plumber-website-include/' }
      ]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">What Should a Plumber Website Include in 2026?</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 22 March 2026 · Updated 15 May 2026</time>
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

          <p className="text-lg text-slate-blue leading-relaxed">
            A decade ago, a plumber website just needed a phone number, an "About" page, and maybe a photo of a van. Those days are over. In 2026, your website competes against dozens of other plumbers in every local search result. If it doesn't convert visitors into calls within seconds, they move on. Here is what a modern plumber website actually needs.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Click-to-call on every page</h2>
          <p className="text-slate-blue leading-relaxed">
            More than 70% of plumbing-related Google searches happen on mobile. When someone has a burst pipe at 11pm, they do not want to fill out a contact form and wait until Monday. Every page on your site needs a prominent, tappable phone number. Ideally in the header, fixed at the top of the screen as they scroll. Make the call-to-action unmissable: "Call Now — 24/7 Emergency."
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Dedicated service pages</h2>
          <p className="text-slate-blue leading-relaxed">
            A single "Services" page with a bulleted list does not cut it for SEO or conversion. You need a separate page for each core service: boiler installation, boiler repair, bathroom fitting, emergency plumbing, gas safety checks, central heating installation. Each page should explain the service in detail, include relevant pricing guidance, and answer the questions customers are actually asking. This is how you rank for "boiler installation [your town]" rather than just "plumber."
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Location pages for every area you cover</h2>
          <p className="text-slate-blue leading-relaxed">
            If you cover Manchester, Salford, Stockport, and Bolton, you need a page for each. Google matches search intent to specific locations. A page titled "Plumber in Stockport" with locally relevant content will rank for Stockport searches. Your competitors who only have a "We cover Greater Manchester" line buried in their footer will not.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Trust signals above the fold</h2>
          <p className="text-slate-blue leading-relaxed">
            Customers need to trust you before they call. The first thing they see on your homepage should
            include: your{' '}
            <a
              href="https://www.gassaferegister.co.uk/help-and-advice/why-the-gas-safe-register-matters/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Gas Safe Register
            </a>{' '}
            number (if applicable), your Google review rating, years of experience, and any trade body
            memberships ({' '}
            <a
              href="https://www.ciphe.org.uk/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              CIPHE
            </a>
            ,{' '}
            <a
              href="https://www.watersafe.org.uk/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              WaterSafe
            </a>
            , APHC). These aren&apos;t vanity badges — they are the difference between a visitor calling
            you or hitting the back button.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Photo galleries and case studies</h2>
          <p className="text-slate-blue leading-relaxed">
            Stock photos of generic plumbers in blue overalls do nothing for your credibility. Customers want to see your actual work. Before-and-after photos of bathroom refits. Photos of neat pipework behind a boiler. A case study of a commercial heating installation. Real photos build real trust. Take them on every job — even a quick snap on your phone is better than a stock image.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">AI chatbots and voice agents</h2>
          <p className="text-slate-blue leading-relaxed">
            This is the biggest shift in 2026. When you are under a sink or up a ladder, you cannot answer the phone. An AI voice agent answers inbound calls in your business name, qualifies the job (location, urgency, type of work), and books an appointment or takes a message. Similarly, an AI chatbot on your website engages visitors at 2am, captures their name, phone number, and job details, and sends you the lead instantly. These tools pay for themselves in the first month for most tradespeople.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Fast loading and mobile-first design</h2>
          <p className="text-slate-blue leading-relaxed">
            Google uses page speed as a ranking factor. If your site takes more than 3 seconds to load on a
            mobile connection, you lose visitors and rankings. A modern plumber website should load in under
            2 seconds, score 90+ on{' '}
            <a
              href="https://pagespeed.web.dev/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              Google PageSpeed Insights
            </a>
            , and look just as good on a phone as it does on a desktop. This means proper image
            optimisation, modern hosting, and clean code — not a bloated WordPress theme with 40 plugins.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Local SEO foundations built in</h2>
          <p className="text-slate-blue leading-relaxed">
            Your website needs proper technical SEO from day one: correct meta titles and descriptions on
            every page,{' '}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
              rel="noopener"
              className="text-amber hover:underline"
            >
              JSON-LD LocalBusiness schema
            </a>{' '}
            telling Google you are a local business, a sitemap, proper heading structure, and internal
            linking between service and location pages. These are not "nice to have" — they are the bare
            minimum for ranking in 2026.
          </p>

          <div className="bg-navy-dark text-white rounded-2xl p-8 my-8">
            <h3 className="font-display font-bold text-xl mb-4">The 2026 plumber website checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                'Click-to-call on every page',
                'Dedicated service pages',
                'Location pages for each area',
                'Gas Safe / trust badges',
                'Real project photos',
                'Google reviews displayed',
                'AI chatbot or voice agent',
                'Under 2-second load time',
                'Mobile-first responsive design',
                'JSON-LD schema markup',
                'Google Business Profile linked',
                'Blog with regular content'
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Pricing transparency — should you publish your rates?</h2>
          <p className="text-slate-blue leading-relaxed">
            One of the most debated questions on plumber websites is whether to publish prices. The honest
            answer: publish ranges, never fixed prices. Customers Googling for plumbing work want to
            qualify themselves out of the wrong tier — if they cannot work out roughly what a job costs
            on your site, they bounce to a competitor whose site signals affordability or quality through
            visible price bands.
          </p>
          <p className="text-slate-blue leading-relaxed">
            Best practice: an emergency call-out band (e.g. &quot;Emergency call-out £85-£125 first hour, then
            £55/hour parts at cost&quot;), a boiler service band (&quot;Annual gas boiler service £85-£135&quot;), and an
            installation band (&quot;Combi boiler installation £2,200-£3,800 supply and fit&quot;). Add a clear
            disclaimer that final pricing depends on survey. This pre-qualifies high-value customers and
            filters time-wasters before they hit your phone.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Service area maps — shape, not list</h2>
          <p className="text-slate-blue leading-relaxed">
            Most plumber websites still list service areas as bullet points: &quot;We cover Manchester,
            Salford, Stockport, Bolton...&quot;. That works for Google but is bad UX. A static SVG map of your
            actual coverage area — a coloured shape over Greater Manchester or the M25 — answers the
            customer&apos;s real question (&quot;will they come to me?&quot;) in 0.5 seconds. Embed an interactive
            Google Map with your service area outlined where possible. This also helps the{' '}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
              rel="noopener"
              className="text-amber hover:underline"
            >
              LocalBusiness schema
            </a>{' '}
            because you can reference a{' '}
            <code>GeoShape</code> in the <code>areaServed</code> property — a stronger signal to Google
            than a list of city strings.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">What plumber websites are dropping in 2026</h2>
          <p className="text-slate-blue leading-relaxed">
            Three features that used to be standard are quietly being removed from high-performing plumber
            websites this year:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li>
              <strong>Stock-photo &quot;our team&quot; pages.</strong> Either show your real face or do not have a
              team page. Stock photos of fake plumbers are an instant trust killer in 2026 — customers
              recognise them.
            </li>
            <li>
              <strong>Live chat widgets that nobody answers.</strong> A chat widget that loads &quot;We&apos;re
              offline — leave a message&quot; signals abandonment. Either staff it with an AI chatbot that
              responds 24/7, or remove it. Half-staffed chat is worse than no chat.
            </li>
            <li>
              <strong>Contact forms with 9 fields.</strong> Asking name, address, phone, email, type of
              property, type of work, urgency, photos of the problem, and budget collapses conversion.
              Trim to 3 fields max (name, phone, &quot;what&apos;s the job?&quot;) and qualify on the call.
            </li>
          </ul>
          <p className="text-slate-blue leading-relaxed">
            Replacing all three with mobile-first, AI-augmented equivalents typically lifts site
            conversion 20-40% within 8 weeks.
          </p>

          <p className="text-slate-blue leading-relaxed">
            If your current website ticks fewer than half of these boxes, it is costing you jobs. Every
            feature on this list is included as standard in our{' '}
            <Link href="/plumber-website-design-packages/" className="text-amber hover:underline">
              Journeyman and Master packages
            </Link>
            .
          </p>

          <div className="text-center mt-12">
            <Link href="/plumber-website-design-packages/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              See our packages
            </Link>
          </div>

          <RelatedLinks keys={['home', 'cost', 'blogDo', 'blogRank', 'blogGBP', 'seo']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
