import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: "Why Your Plumber Website Isn't Ranking | PlumberWebDesign" },
  description: "Not seeing your plumbing website on page one? Learn the most common local SEO mistakes plumbers make and the quick wins you can implement today to start ranking.",
  alternates: { canonical: 'https://plumberwebdesign.co.uk/blog/plumber-website-not-ranking-google/' },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)",
    "description": "Not seeing your plumbing website on page one? Learn the most common local SEO mistakes plumbers make and the quick wins you can implement today.",
    "author": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "url": "https://plumberwebdesign.co.uk" },
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-03-15",
    "dateModified": "2026-04-12",
    "mainEntityOfPage": "https://plumberwebdesign.co.uk/blog/plumber-website-not-ranking-google/"
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog/' },
        { label: "Why Your Plumber Website Isn't Ranking", href: '/blog/plumber-website-not-ranking-google/' }
      ]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)</h1>
          <time className="text-white/60 text-sm">15 March 2026</time>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <p className="text-lg text-slate-blue leading-relaxed">
            You have invested in a website, maybe even paid a general web designer a decent fee for it. But when you search "plumber near me" or "emergency plumber" followed by your town, you are nowhere to be found. Meanwhile, your competitor with the worse-looking site is sitting in the top three. What is going on?
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">1. Your site has no local signals</h2>
          <p className="text-slate-blue leading-relaxed">
            Google needs explicit proof of where you operate. If your website just says "we cover the local area" without naming specific towns, postcodes, or neighbourhoods, Google has no way to connect your site to local searches. The fix is straightforward: create dedicated location pages for every area you serve. Each page should include the town name in the H1, title tag, meta description, and body content. Add your full address and embed a Google Map if you have a physical premises.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">2. Missing or incomplete Google Business Profile</h2>
          <p className="text-slate-blue leading-relaxed">
            Your Google Business Profile (GBP) is arguably more important than your website for local rankings. If you haven't claimed it, or if it's half-filled with a blurry logo and no opening hours, you are handing the Map Pack to your competitors. Fill in every single field. Upload at least 10 high-quality photos of your work. Choose the correct primary category ("Plumber") and add secondary categories for your other services. Post weekly updates — Google rewards active profiles.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">3. No reviews (or too few)</h2>
          <p className="text-slate-blue leading-relaxed">
            Reviews are one of the strongest ranking signals for local SEO. If you have 3 reviews and your competitor has 47, Google views them as the more trusted business. The solution isn't complicated: after every successful job, send the customer a direct link to your Google review page. Make it easy. A simple text message with a short link converts far better than an email request three days later. Aim for consistency — 2-3 new reviews per month is a solid target for most local plumbing businesses.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">4. Slow, mobile-unfriendly website</h2>
          <p className="text-slate-blue leading-relaxed">
            Over 70% of plumbing-related searches happen on mobile. If your site takes more than 3 seconds to load or forces users to pinch and zoom, Google will deprioritise it. Run your site through Google PageSpeed Insights. If you score below 80 on mobile, you have a problem. The usual culprits are uncompressed images, render-blocking JavaScript, and cheap shared hosting. A purpose-built plumber website on modern hosting should score 90+ consistently.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">5. No service-specific pages</h2>
          <p className="text-slate-blue leading-relaxed">
            A single "Services" page listing everything you do is a missed opportunity. Google ranks individual pages, not websites. If you want to rank for "boiler installation Manchester," you need a dedicated page targeting that exact phrase. Break your services out: boiler installation, boiler repair, central heating, bathroom fitting, emergency plumbing, gas safety certificates. Each page should have unique content explaining that specific service, not just a paragraph copied from the main services list.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">6. Inconsistent NAP data</h2>
          <p className="text-slate-blue leading-relaxed">
            NAP stands for Name, Address, and Phone number. If your business name is "J. Smith Plumbing" on your website but "J Smith Plumbing Ltd" on Yell and "John Smith Plumber" on Checkatrade, Google gets confused. Consistency matters. Audit every directory listing you can find and ensure your NAP is identical everywhere. This includes Yell, Thomson, Checkatrade, TrustATrader, FreeIndex, and any local directories.
          </p>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-8 my-8">
            <h3 className="font-display font-bold text-navy-dark text-xl mb-4">The quick-win checklist</h3>
            <ul className="space-y-3 text-slate-blue">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Claim and fully complete your Google Business Profile
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Create a dedicated page for each service you offer
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Create location pages for every town you serve
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Start collecting Google reviews after every job
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Audit and fix your NAP across all directories
              </li>
            </ul>
          </div>

          <p className="text-slate-blue leading-relaxed">
            None of these fixes require a computer science degree. But they do require a website that was built with local SEO in mind from the start. That is exactly what we do at PlumberWebDesign.co.uk — every site we build comes with these fundamentals baked in.
          </p>

          <div className="text-center mt-12">
            <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              Get your site ranking — free quote
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
