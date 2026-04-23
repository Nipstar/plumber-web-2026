import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Google Business Profile for Plumbers: Setup Guide | PlumberWebDesign' },
  description: "Your GBP is arguably more important than your website for local map pack rankings. Follow our comprehensive guide to set it up correctly and dominate local search.",
  alternates: { canonical: 'https://plumberwebdesign.co.uk/blog/google-business-profile-plumbers-guide/' },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Google Business Profile for Plumbers: A Complete Setup Guide",
    "description": "Your GBP is arguably more important than your website for local map pack rankings. Follow our comprehensive guide to set it up correctly.",
    "author": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "url": "https://plumberwebdesign.co.uk" },
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-12",
    "mainEntityOfPage": "https://plumberwebdesign.co.uk/blog/google-business-profile-plumbers-guide/"
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog/' },
        { label: 'Google Business Profile for Plumbers', href: '/blog/google-business-profile-plumbers-guide/' }
      ]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Google Business Profile for Plumbers: A Complete Setup Guide</h1>
          <time className="text-white/60 text-sm">1 April 2026</time>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-6">

          <p className="text-lg text-slate-blue leading-relaxed">
            When someone searches "plumber near me," the first thing they see is the Google Map Pack — three local businesses with reviews, phone numbers, and directions. If you are not in those three slots, you are invisible to the majority of local searchers. Your Google Business Profile (GBP) is the single most important factor in getting there.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 1: Claim or create your profile</h2>
          <p className="text-slate-blue leading-relaxed">
            Go to <strong>business.google.com</strong> and search for your business name. If it already exists (Google often creates listings automatically from directory data), claim it. If not, create a new one. You will need to verify ownership — Google typically sends a postcard with a code to your business address, though phone and email verification are sometimes available. Do not skip this step. An unverified profile will not rank.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 2: Choose the right categories</h2>
          <p className="text-slate-blue leading-relaxed">
            Your primary category is the single most important ranking factor in GBP. For most plumbers, choose <strong>"Plumber"</strong> as your primary category. Then add secondary categories for your specialisms: "Gas Engineer," "Heating Contractor," "Bathroom Remodeler," "Water Heater Installation Service," "Drain Cleaning Service." Be specific and accurate — don't add categories for services you don't actually provide.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 3: Complete every single field</h2>
          <p className="text-slate-blue leading-relaxed">
            Google rewards completeness. Fill in everything: business name (exactly as it appears on your van and website), address, phone number, website URL, opening hours, service area, business description, and the "Services" section. Your business description should be 750 characters and naturally include your key services and locations. Do not keyword-stuff — write for customers, not algorithms.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 4: Upload high-quality photos</h2>
          <p className="text-slate-blue leading-relaxed">
            Businesses with more than 100 photos get 520% more calls than the average listing, according to Google's own data. Upload photos of: your team, your van (branded), completed jobs (before and after), your office or workspace, equipment, and any certifications. Add new photos regularly — at least 2-3 per week from jobs you complete. Name your image files descriptively before uploading: "boiler-installation-manchester.jpg" not "IMG_4521.jpg."
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 5: Set up your service area correctly</h2>
          <p className="text-slate-blue leading-relaxed">
            If you work from home or travel to customers (as most plumbers do), set yourself as a "Service Area Business" rather than showing your home address. Define your service area by listing the specific cities, towns, and regions you cover. Google allows up to 20 service areas. Be honest — only list places you actually serve regularly. If a customer in one of your listed areas searches for a plumber, you are more likely to appear.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 6: Collect and respond to reviews</h2>
          <p className="text-slate-blue leading-relaxed">
            Reviews directly affect your Map Pack ranking. After every completed job, send your customer a direct link to leave a Google review. The easiest method: search for your business on Google, click "Write a review," and copy that URL. Send it via text message immediately after the job while the experience is fresh. Respond to every single review — positive and negative. A professional response to a complaint often does more for your reputation than ten five-star reviews.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 7: Post weekly updates</h2>
          <p className="text-slate-blue leading-relaxed">
            Google Business Profile has a built-in posting feature that most plumbers completely ignore. This is a competitive advantage. Post weekly updates: a completed job photo, a seasonal tip ("How to prevent frozen pipes this winter"), a special offer, or a new service announcement. Posts signal to Google that your business is active and engaged. They also appear directly on your listing, giving searchers more reasons to choose you.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 8: Answer Q&A</h2>
          <p className="text-slate-blue leading-relaxed">
            Your GBP listing has a Questions & Answers section. Anyone can ask a question, and anyone can answer — including your competitors. Seed this section yourself: ask and answer common questions about your services, pricing, areas covered, and emergency availability. This provides useful information to potential customers and adds keyword-rich content to your listing.
          </p>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-8 my-8">
            <h3 className="font-display font-bold text-navy-dark text-xl mb-4">Common GBP mistakes to avoid</h3>
            <ul className="space-y-3 text-slate-blue">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold flex-shrink-0">x</span>
                <span>Adding keywords to your business name (e.g. "Smith Plumbing - Best Plumber London") — this violates Google's guidelines and can get your listing suspended</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold flex-shrink-0">x</span>
                <span>Using a virtual office or PO Box address — Google can detect these and will remove your listing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold flex-shrink-0">x</span>
                <span>Creating multiple listings for the same business at the same address — this causes duplicate issues and can suppress all your listings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold flex-shrink-0">x</span>
                <span>Ignoring negative reviews — an unanswered complaint looks far worse than the complaint itself</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-blue leading-relaxed">
            Your GBP is a free marketing channel that most plumbers underutilise. Spend 15 minutes per week maintaining it — uploading photos, responding to reviews, and posting updates — and you will outperform the majority of your local competition. Pair it with a website built for local SEO and you have a lead generation engine that works around the clock.
          </p>

          <div className="text-center mt-12">
            <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              Get a site with GBP management built in
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
