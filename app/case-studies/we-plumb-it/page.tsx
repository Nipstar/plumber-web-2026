import Link from 'next/link';
import Image from 'next/image';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import GoogleReviews from '@/components/GoogleReviews';
import { AUTHOR, authorPersonSchema } from '@/components/AuthorBio';
import { pageMeta } from '@/lib/seo';

const PATH = '/case-studies/we-plumb-it/';
const URL = `https://www.plumberwebdesign.co.uk${PATH}`;

export const metadata = pageMeta({
  title: 'Plumber Website Case Study: We Plumb It, Cheltenham',
  description: 'How we built a fast five-page website for We Plumb It Ltd, a new Cheltenham plumbing and heating company, and went live in 16 days.',
  path: PATH,
});

const atAGlance = [
  ['Client', 'Matt Reynolds, Director, We Plumb It Ltd'],
  ['Work', 'Plumbing, heating and bathroom installations'],
  ['Area', 'Cheltenham, Gloucestershire and the Cotswolds'],
  ['Website', 'weplumbit.co.uk'],
  ['Pages', 'Home, Plumbing & Bathrooms, Heating & Hot Water, Our Work, Contact'],
  ['Platform', "WordPress, in Matt's own GoDaddy account"],
  ['First email to live', '16 days'],
  ['PageSpeed test at launch', '100 across the board'],
  ['Package', 'Starter Build, £600 one-off'],
];

const timeline = [
  ['15 October', "Matt's enquiry arrived, and his quote went back in under two hours"],
  ['16 October', 'Matt gave the go-ahead and we planned the site'],
  ['22 October', 'Matt reviewed the first design screenshots'],
  ['29 October', 'Matt reviewed the full site on a private staging link'],
  ['31 October', 'The site went live on weplumbit.co.uk'],
  ['2 November', 'Matt left his 5-star review'],
];

const faqItems = [
  { question: 'Can a new plumbing company get a good website with no reviews?', answer: "Yes. Lead with your qualifications, your guarantee and real photos of your work. Be honest that you're new, and make it easy for each customer to leave a Google review." },
  { question: 'How long does a plumber website take?', answer: 'We Plumb It took 16 days from first email to live. The biggest factor is how quickly we get your logo, photos and service details.' },
  { question: 'Will a five-page website rank in every town I cover?', answer: 'No. Five pages can build a strong base around your main town and show the wider area you cover. To rank properly in other towns, each one needs its own page.' },
];

const h2 = 'text-3xl font-display font-bold text-navy-dark mt-16 mb-6';
const h3 = 'text-xl font-display font-bold text-navy-dark mt-10 mb-4';
const p = 'text-lg text-slate-blue mb-6 leading-relaxed';
const ul = 'list-disc pl-6 space-y-2 text-slate-blue text-lg mb-6 leading-relaxed';
const quote = 'border-l-4 border-amber bg-white rounded-r-xl p-6 my-8 text-navy-dark text-lg leading-relaxed';

export default function WePlumbItCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How a brand-new Cheltenham plumber got a fast website in 16 days",
    "description": "How we built a fast five-page website for We Plumb It Ltd, a new Cheltenham plumbing and heating company, and went live in 16 days.",
    "image": [
      "https://www.plumberwebdesign.co.uk/case-studies/we-plumb-it-home-desktop.webp",
      "https://www.plumberwebdesign.co.uk/case-studies/we-plumb-it-home-mobile.webp",
      "https://www.plumberwebdesign.co.uk/case-studies/we-plumb-it-our-work.webp",
    ],
    "author": authorPersonSchema(),
    "publisher": { "@type": "Organization", "name": "PlumberWebDesign.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.plumberwebdesign.co.uk/images/logo.webp" } },
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "mainEntityOfPage": URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[
        { label: 'Case Studies', href: '/case-studies/' },
        { label: 'We Plumb It', href: PATH },
      ]} />

      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/case-studies/" className="text-amber text-sm font-bold uppercase tracking-wider hover:underline mb-4 inline-block">Case study</Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">How a brand-new Cheltenham plumber got a fast website in 16 days</h1>
          <p className="text-white/60 text-sm">
            By <Link href={`/about/${AUTHOR.slug}/`} className="text-amber hover:underline">{AUTHOR.name}</Link>, Founder &middot; 2 November 2026
          </p>
        </div>
      </div>

      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className={p}>
          We Plumb It Ltd is a new plumbing and heating company in Bishop&rsquo;s Cleeve, Cheltenham, run by Matt Reynolds. Matt needed a professional website quickly to help grow his customer base. We took him from first email to a live five-page site in 16 days.
        </p>

        <figure className="my-10">
          <div className="rounded-2xl overflow-hidden border border-slate-blue/10 shadow-xl bg-navy-dark">
            <Image
              src="/case-studies/we-plumb-it-home-desktop.webp"
              alt="We Plumb It homepage on desktop: dark hero reading 'Your local plumber in Cheltenham' with call, WhatsApp and free quote buttons, and a four-field quote form on the right"
              width={1440}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
          <figcaption className="text-sm text-slate-blue/70 mt-3 text-center">The We Plumb It homepage at launch, with the quote form at the top.</figcaption>
        </figure>

        <div className="overflow-x-auto mb-12 rounded-xl border border-slate-blue/20 shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="p-4 font-bold" colSpan={2}>At a glance</th>
              </tr>
            </thead>
            <tbody className="text-navy-card">
              {atAGlance.map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? 'bg-light-gray/50' : 'bg-white'}>
                  <td className="p-4 border-b border-slate-blue/10 font-medium w-1/3">{k}</td>
                  <td className="p-4 border-b border-slate-blue/10">
                    {k === 'Website'
                      ? <a href="https://weplumbit.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber font-bold hover:underline">{v}</a>
                      : v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2}>The brief</h2>
        <p className={p}>
          Matt started We Plumb It Ltd in October 2026, after more than 7 years in the trade. He had his domain, logo and photos of his work, but no website.
        </p>
        <p className={p}>He needed the site to do six things:</p>
        <ul className={ul}>
          <li>Look modern and match his logo and colours</li>
          <li>Explain his plumbing, heating and bathroom work clearly</li>
          <li>Show real jobs in a gallery</li>
          <li>Make contact easy, with forms, click-to-call and WhatsApp</li>
          <li>Help Google recognise the areas he covers</li>
          <li>Work properly on a phone</li>
        </ul>
        <p className={p}>
          He also wanted a one-off build that he owned outright, with no compulsory monthly management. Our £600 Starter Build gave him exactly that: five pages, one fixed price and no monthly fees to us.
        </p>
        <p className={p}>
          Matt sent us three sites he liked. Two of them had the same thing he wanted: the quote request right there, without scrolling to the bottom of the page.
        </p>
        <p className={p}>
          The real challenge was trust. We Plumb It was a new company with 0 Google reviews. The website had to win over homeowners before a single review went up.
        </p>

        <h2 className={h2}>What we built</h2>
        <p className={p}>
          We built a custom WordPress theme around Matt&rsquo;s logo and colours, then planned every page around one job: getting a local homeowner to call or ask for a quote.
        </p>

        <h3 className={h3}>The quote form comes first</h3>
        <p className={p}>
          The form sits at the top of the homepage, just as Matt asked. It takes four details: name, phone, type of work and postcode. Customers can then add photos of the job, so Matt sees what he&rsquo;s quoting for.
        </p>

        <h3 className={h3}>Three ways to get in touch on a phone</h3>
        <p className={p}>
          Most plumbing searches happen on a mobile, so Call, WhatsApp and Free Quote buttons stay on screen as visitors scroll. WhatsApp opens with a message ready to send. A banner at the top of every page shows Matt is available 24/7 for emergencies.
        </p>

        <figure className="my-10 max-w-xs mx-auto">
          <div className="rounded-[2rem] overflow-hidden border-8 border-navy-dark shadow-2xl bg-navy-dark">
            <Image
              src="/case-studies/we-plumb-it-home-mobile.webp"
              alt="We Plumb It homepage on a phone: emergency banner, headline, intro paragraph and a Get a free quote button, with Call, WhatsApp and quote buttons fixed at the bottom"
              width={390}
              height={844}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-sm text-slate-blue/70 mt-3 text-center">On a phone, the contact buttons stay on screen as you scroll.</figcaption>
        </figure>

        <h3 className={h3}>Trust without a wall of reviews</h3>
        <p className={p}>We didn&rsquo;t pad the site with made-up testimonials. It leads with what Matt can prove instead:</p>
        <ul className={ul}>
          <li>His Level 3 Plumbing and Heating qualification</li>
          <li>His HWSS unvented hot water qualification</li>
          <li>More than 7 years in the trade</li>
          <li>A 12-month workmanship guarantee</li>
          <li>Free, no-obligation quotes</li>
        </ul>
        <p className={p}>
          The reviews section says plainly that We Plumb It is new, and links straight to Matt&rsquo;s Google review page. Every happy customer has a one-tap way to help the next one decide.
        </p>

        <h3 className={h3}>Real jobs on show</h3>
        <p className={p}>
          The Our Work page carries 36 photos and 2 videos of Matt&rsquo;s own jobs. Two full bathroom renovations run from the old room through strip-out to the finished result. Visitors can filter by bathrooms, plumbing or heating.
        </p>
        <p className={p}>
          Homeowners take weeks to choose a bathroom fitter. Proof like this gives them a reason to pick up the phone. Photos are shown without identifying details, to protect customers&rsquo; privacy.
        </p>

        <figure className="my-10">
          <div className="rounded-2xl overflow-hidden border border-slate-blue/10 shadow-xl bg-navy-dark">
            <Image
              src="/case-studies/we-plumb-it-our-work.webp"
              alt="The We Plumb It Our Work page on desktop: heading, filter buttons for All, Bathrooms, Plumbing and Heating, and the first project, a complete bathroom renovation"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-sm text-slate-blue/70 mt-3 text-center">The Our Work page, filterable by bathrooms, plumbing or heating.</figcaption>
        </figure>

        <h3 className={h3}>Local SEO, without the overpromising</h3>
        <p className={p}>
          The five pages are built around Cheltenham, with Gloucester, Tewkesbury, Stroud, Cirencester and the Cotswolds named as areas covered. Structured data tells Google and AI search tools who Matt is, what he does and what he&rsquo;s qualified in.
        </p>
        <p className={p}>
          We told Matt straight that five pages won&rsquo;t rank him in every town. Gloucester or Cirencester will each need a page of their own. The site is structured so those pages can be added later, with no rebuild.
        </p>

        <h3 className={h3}>His site, under his control</h3>
        <p className={p}>
          The site lives in Matt&rsquo;s own GoDaddy account, alongside his domain and business email. He owns it outright. Each section uses standard WordPress blocks, so he can change text and photos himself.
        </p>

        <h2 className={h2}>The launch</h2>
        <p className={p}>
          The site went live on 31 October 2026, and Matt gave us a 5-star Google review two days later.
        </p>

        <figure className="my-8 bg-white rounded-2xl border border-slate-blue/10 shadow-md p-6">
          <Image
            src="/case-studies/we-plumb-it-pagespeed.webp"
            alt="Google PageSpeed Insights desktop result for weplumbit.co.uk: Performance 100, Accessibility 100, Best Practices 100, SEO 100"
            width={942}
            height={94}
            className="w-full h-auto"
          />
          <figcaption className="text-sm text-slate-blue/70 mt-3 text-center">Google PageSpeed Insights, desktop, run on the live site.</figcaption>
        </figure>
        <blockquote className={quote}>
          <p className="mb-3">&ldquo;Andy worked quickly to deliver a great final product. He was very helpful throughout the process of the website being built, would definitely recommend.&rdquo;</p>
          <footer className="text-sm text-slate-blue font-bold">Matt Reynolds, Director, We Plumb It Ltd</footer>
        </blockquote>

        <div className="overflow-x-auto my-10 rounded-xl border border-slate-blue/20 shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-dark text-white">
                <th className="p-4 font-bold w-1/3">Date</th>
                <th className="p-4 font-bold">What happened</th>
              </tr>
            </thead>
            <tbody className="text-navy-card">
              {timeline.map(([d, what], i) => (
                <tr key={d} className={i % 2 === 0 ? 'bg-light-gray/50' : 'bg-white'}>
                  <td className="p-4 border-b border-slate-blue/10 font-medium">{d}</td>
                  <td className="p-4 border-b border-slate-blue/10">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={p}>Matt&rsquo;s reaction after seeing it live:</p>
        <blockquote className={quote}>
          <p>&ldquo;I&rsquo;m really pleased with the finished website and looking forward to getting it out there!&rdquo;</p>
        </blockquote>
        <p className={p}>
          It&rsquo;s too soon to report rankings or enquiries, and we won&rsquo;t guess at them. We&rsquo;ll add real figures here once there&rsquo;s enough data to be worth sharing.
        </p>

        <h2 className={h2}>What&rsquo;s next for We Plumb It</h2>
        <p className={p}>
          The next job is getting Google Search Console in place, so we can track how the site performs. As Matt&rsquo;s reviews come in, they&rsquo;ll strengthen his site and his Google Business Profile. Town pages can follow when he&rsquo;s ready to grow beyond Cheltenham.
        </p>

        <h2 className={h2}>Common questions</h2>
        <FaqAccordion items={faqItems} />

        <div className="bg-navy-dark text-white rounded-2xl p-10 text-center mt-16">
          <h2 className="text-3xl font-display font-bold mb-4">Want a website like this?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you&rsquo;re just starting out or your current site isn&rsquo;t bringing in calls, we&rsquo;ll tell you straight what it needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              Get a Free Quote
            </Link>
            <Link href="/free-audit/" className="inline-block border-2 border-amber/60 hover:border-amber text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:bg-amber/5">
              Get a Free Site Audit
            </Link>
          </div>
          <p className="mt-6 text-white/70">
            Call: <a href="tel:03330389960" className="text-amber font-bold hover:underline">0333 038 9960</a>
          </p>
        </div>
      </article>
      <GoogleReviews />
    </div>
  );
}
