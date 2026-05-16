import Link from 'next/link';
import Image from 'next/image';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio, { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: { absolute: 'Google Business Profile for Plumbers: Complete Setup Guide' },
  description: "Your Google Business Profile matters more than your website for local map pack rankings. Step-by-step guide to set it up correctly and dominate local search.",
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/blog/google-business-profile-plumbers-guide/' },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Google Business Profile for Plumbers: A Complete Setup Guide",
    "description": "Your GBP is arguably more important than your website for local map pack rankings. Follow our comprehensive guide to set it up correctly.",
    "author": authorPersonSchema(),
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-04-01",
    "dateModified": "2026-05-15",
    "mainEntityOfPage": "https://www.plumberwebdesign.co.uk/blog/google-business-profile-plumbers-guide/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do plumbers set up a Google Business Profile?", "acceptedAnswer": { "@type": "Answer", "text": "Go to business.google.com, search for your business name (claim if it exists, create if not), verify ownership via postcard/phone/email, choose 'Plumber' as primary category, complete every field including service area, upload 10+ photos, and start collecting reviews." } },
      { "@type": "Question", "name": "What is the best primary category for a plumber on GBP?", "acceptedAnswer": { "@type": "Answer", "text": "'Plumber' is the correct primary category for most UK plumbing businesses. Add secondary categories that reflect your actual specialisms: Gas Engineer, Heating Contractor, Bathroom Remodeler, Drain Cleaning Service, Water Heater Installation Service." } },
      { "@type": "Question", "name": "How many photos should a plumber upload to GBP?", "acceptedAnswer": { "@type": "Answer", "text": "Per Google's own published guidance, businesses with 100+ photos receive significantly more calls and direction requests than the median. Upload 2-3 new photos per week from completed jobs to keep the profile active." } },
      { "@type": "Question", "name": "Can plumbers use a service area instead of a physical address?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most plumbers work from home or travel to customers — set yourself as a 'Service Area Business' to hide the home address while listing up to 20 specific cities and towns you cover." } }
    ]
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog/' },
        { label: 'Google Business Profile for Plumbers', href: '/blog/google-business-profile-plumbers-guide/' }
      ]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Blog</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Google Business Profile for Plumbers: A Complete Setup Guide</h1>
          <div className="flex flex-col items-center gap-2">
            <time className="text-white/60 text-sm">Published 1 April 2026 · Updated 15 May 2026</time>
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
              src="/images/blog/gbp_guide.webp"
              alt="Glowing digital storefront card with 5-star reviews above a sleek tablet"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 mb-4">
            <p className="text-lg text-slate-blue leading-relaxed">
              When someone searches "plumber near me," the first thing they see is the Google Map Pack — three
              local businesses with reviews, phone numbers, and directions. If you are not in those three
              slots, you are invisible to the majority of local searchers. Your Google Business Profile (GBP)
              is the single most important factor in getting there. Google&apos;s own{' '}
              <a
                href="https://support.google.com/business/answer/7091"
                rel="noopener"
                className="text-amber hover:underline"
              >
                official ranking documentation
              </a>{' '}
              confirms that relevance, distance, and prominence determine Map Pack position — and your GBP is
              where you control all three.
            </p>
          </div>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Step 1: Claim or create your profile</h2>
          <p className="text-slate-blue leading-relaxed">
            Go to{' '}
            <a
              href="https://business.google.com/"
              rel="noopener"
              className="text-amber hover:underline"
            >
              business.google.com
            </a>{' '}
            and search for your business name. If it already exists (Google often creates listings
            automatically from directory data), claim it. If not, create a new one. You will need to verify
            ownership — Google typically sends a postcard with a code to your business address, though phone
            and email verification are sometimes available. Do not skip this step. An unverified profile
            will not rank.
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
            Per Google&apos;s published guidance on{' '}
            <a
              href="https://support.google.com/business/answer/6103862"
              rel="noopener"
              className="text-amber hover:underline"
            >
              adding photos to your Business Profile
            </a>
            , listings with regular fresh photography see materially higher direction requests and call
            volumes than those without. Upload photos of: your team, your van (branded), completed jobs
            (before and after), your office or workspace, equipment, and any certifications. Add new photos
            regularly — at least 2-3 per week from jobs you complete. Name your image files descriptively
            before uploading: "boiler-installation-manchester.jpg" not "IMG_4521.jpg."
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
                <span>
                  Adding keywords to your business name (e.g. "Smith Plumbing - Best Plumber London") —
                  this violates{' '}
                  <a
                    href="https://support.google.com/business/answer/3038177"
                    rel="noopener"
                    className="text-amber hover:underline"
                  >
                    Google&apos;s representation guidelines
                  </a>{' '}
                  and can get your listing suspended
                </span>
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

          <h2 className="text-2xl font-display font-bold text-navy-dark">GBP attributes plumbers should turn on</h2>
          <p className="text-slate-blue leading-relaxed">
            Google Business Profile has a list of business attributes that most plumbers leave blank.
            These attributes feed both the visible profile and the underlying entity graph Google uses to
            match queries. For UK plumbers, turn on every relevant one:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-blue leading-relaxed">
            <li><strong>Identifies as women-owned / veteran-owned / family-owned</strong> — if applicable. These attributes appear as badges and have measurable click-through impact.</li>
            <li><strong>Online estimates</strong> — Yes. Tell Google you provide quotes without a site visit (where you do).</li>
            <li><strong>On-site services</strong> — Yes. Tells Google you travel to customers.</li>
            <li><strong>Free Wi-Fi / wheelchair-accessible entrance</strong> — only if you have a physical office customers visit.</li>
            <li><strong>Payment methods</strong> — list every method (credit card, debit card, bank transfer, cash, BACS). Filters out customers expecting bartering, signals professionalism.</li>
            <li><strong>Service options</strong> — &quot;Emergency service&quot; if you offer it. Triggers visibility on emergency-intent queries.</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Handling negative reviews professionally</h2>
          <p className="text-slate-blue leading-relaxed">
            Every plumbing business gets a one-star review eventually. The plumbers who recover fastest
            follow a script. Acknowledge the customer&apos;s frustration without admitting liability. State the
            facts neutrally. Offer a path to resolution. Sign off with a real name and your business
            phone. Length: 3-4 sentences maximum. Anything longer reads defensive.
          </p>
          <p className="text-slate-blue leading-relaxed">
            Example response to a negative review about a late arrival: &quot;Hi [Name], thank you for letting
            us know about your experience on the 12th. I have looked into the diary — we were running 90
            minutes late due to an earlier emergency overrun, and our admin team should have called ahead.
            That was our miss and I apologise. I would like to make it right — please call me directly on
            [number]. — [Your Name], Owner.&quot; Professional, specific, factual, and visibly human. Future
            customers reading your review section see this and trust you more, not less.
          </p>
          <p className="text-slate-blue leading-relaxed">
            If a review is genuinely fake (wrong business, never used your service) or violates Google&apos;s{' '}
            <a
              href="https://support.google.com/business/answer/2622994"
              rel="noopener"
              className="text-amber hover:underline"
            >
              review content policy
            </a>
            , flag it for removal — but do not get drawn into public arguments. Google removes a single-
            digit percentage of flagged reviews, so the public response matters more than the takedown
            attempt.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark">Service-area vs storefront — the difference</h2>
          <p className="text-slate-blue leading-relaxed">
            Most UK plumbers should be set up as a Service Area Business, not a storefront. The difference
            is structural in how Google ranks you. A storefront listing requires a physical address that
            customers visit — Google uses that address as the distance-ranking anchor. A Service Area
            Business hides the physical address (so your home address does not appear) and ranks within
            the listed service areas instead.
          </p>
          <p className="text-slate-blue leading-relaxed">
            If you set yourself as a storefront from a home address, three problems occur. First, your
            home address becomes public — security and privacy risk. Second, Google may suspend the
            listing because Service Area Businesses are not allowed to display a home address. Third, your
            ranking is anchored to your home location, not the towns you actually serve — so you become
            invisible for customers searching from outside a 2-mile radius. The fix is to switch to
            Service Area Business in GBP settings and list every town and postcode you genuinely cover.
          </p>

          <p className="text-slate-blue leading-relaxed">
            Your GBP is a free marketing channel that most plumbers underutilise. Spend 15 minutes per
            week maintaining it — uploading photos, responding to reviews, and posting updates — and you
            will outperform the majority of your local competition. Pair it with a website built for local
            SEO and you have a lead generation engine that works around the clock. See the{' '}
            <Link href="/seo-for-plumbers/" className="text-amber hover:underline">
              SEO for plumbers
            </Link>{' '}
            page for how we integrate GBP management into every website package.
          </p>

          <div className="text-center mt-12">
            <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              Get a site with GBP management built in
            </Link>
          </div>

          <RelatedLinks keys={['home', 'seo', 'blogRank', 'blogInclude', 'blogDo', 'cost']} heading="Related reading" />

          <AuthorBio />
        </div>
      </article>
    </div>
  );
}
