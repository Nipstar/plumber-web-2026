import PricingCard from '@/components/PricingCard';
import GoogleReviews from '@/components/GoogleReviews';
import AddOnCard from '@/components/AddOnCard';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import { pageMeta } from '@/lib/seo';
import { ONE_OFF_BUILDS, ONE_OFF_EXTRAS } from '@/lib/pricing';

export const metadata = pageMeta({
  title: 'Plumber Website Packages & Pricing UK | £79–£199/mo',
  description: 'Plumber website packages from £79/mo, or one-off builds from £600. Compare monthly and pay-once options, with local SEO built in.',
  path: '/plumber-website-design-packages/',
});

const pricingPackages = [
  {
    name: 'Apprentice', launchPrice: '£79',
    price: '£99',
    period: '/month',
    tagline: 'Perfect for getting started.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '5-page responsive website',
      'Mobile-optimised for all screen sizes',
      'Free domain (if needed)',
      'Fast hosting + SSL certificate',
      'Basic local SEO setup',
      'Contact forms',
      'Google Analytics + Search Console',
      'Google Business Profile setup',
      'Priority phone & email support'
    ]
  },
  {
    name: 'Journeyman', launchPrice: '£129',
    price: '£169',
    period: '/month',
    tagline: 'Our most popular trades package.',
    highlighted: true,
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '10-page custom website',
      'Service and location pages included',
      'Advanced local SEO optimisation',
      'Fast hosting + SSL (Domain inc.)',
      'Contact forms + blog integration',
      'Google Business Profile + monthly posts',
      'Google Review management tracking',
      'Priority phone & email support'
    ]
  },
  {
    name: 'Master', launchPrice: '£199',
    price: '£249',
    period: '/month',
    tagline: 'Dominate your local area.',
    addOns: ['AI Chatbot', 'AI Voice Agent'],
    features: [
      '20+ page custom website (full structure)',
      'Advanced local SEO optimisation',
      'Fast hosting + SSL (Domain inc.)',
      'Monthly blog posts (2/month)',
      'GBP setup, optimisation & posting',
      'Google Review management',
      'Optional link building service',
      'Priority phone & email support'
    ]
  }
];

const packageFaqs = [
  { q: 'Are there setup fees?', a: 'No setup fee on our monthly packages. One-off builds are a fixed price. AI add-ons have a one-off setup fee to cover the bespoke training.' },
  { q: 'Can I upgrade my package?', a: 'Yes, at any time. We can seamlessly scale you out of Apprentice into Journeyman or Master as you grow.' },
  { q: 'Is there a minimum term?', a: 'Yes, six months from launch. This covers our build costs and gives your local SEO time to start ranking. After six months you own the site and can cancel any time with 30 days notice.' },
  { q: 'What if I want to cancel?', a: 'Minimum term is six months. After that, give us 30 days written notice and we hand over the full website, domain, and files. No long tie-ins beyond the initial six-month period.' },
  { q: 'Do you offer one-off builds?', a: "Yes. Our Starter Build is £600 for 5 pages, and our Core Build is £995 for up to 8 pages. You pay once and own the site. You'll pay for your own hosting and domain, and ongoing SEO isn't included." },
  { q: 'What are the AI add-ons?', a: 'The AI Chatbot and AI Voice Agent are managed services. We train AI on your specific business rules to capture leads and book appointments automatically.' },
];

const oneOffComparison = [
  { row: 'Price', monthly: 'From £79/month', oneOff: '£600 or £995, paid once' },
  { row: 'Hosting and domain', monthly: 'Included', oneOff: 'You pay for these yourself' },
  { row: 'Ongoing local SEO', monthly: 'Depends on package', oneOff: 'Not included' },
  { row: 'Minimum term', monthly: '6 months', oneOff: 'None' },
  { row: 'Ownership', monthly: 'Yours after 6 months', oneOff: 'Yours once the final payment clears' },
];

export default function PackagesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": packageFaqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "ProfessionalService",
      "name": "PlumberWebDesign.co.uk",
      "url": "https://www.plumberwebdesign.co.uk/",
      "telephone": "03330389960"
    },
    "name": "Plumber Website Design Packages",
    "url": "https://www.plumberwebdesign.co.uk/plumber-website-design-packages/",
    "description": "Transparent plumber website design pricing with three tiers from £79/month.",
    "areaServed": { "@type": "Country", "name": "GB" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Design Packages",
      "itemListElement": [
        { "@type": "Offer", "name": "Apprentice", "price": "79", "priceCurrency": "GBP", "description": "5-page responsive website with basic local SEO" },
        { "@type": "Offer", "name": "Journeyman", "price": "129", "priceCurrency": "GBP", "description": "10-page custom website with advanced local SEO" },
        { "@type": "Offer", "name": "Master", "price": "199", "priceCurrency": "GBP", "description": "20+ page custom website with full SEO and content" },
        ...ONE_OFF_BUILDS.map(b => ({
          "@type": "Offer", "name": b.name, "price": b.priceNumber, "priceCurrency": "GBP", "description": `${b.summary} One-off build, paid once.`
        }))
      ]
    }
  };

  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <SchemaScript schema={faqSchema} />
      <Breadcrumbs items={[{ label: 'Packages', href: '/plumber-website-design-packages/' }]} />
      <div className="py-24 border-b border-slate-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-6">Plumber Website Design Packages</h1>
            <p className="text-lg text-slate-blue">Transparent pricing to suit where your plumbing business is right now. No setup fees on website packages. Free domain and premium hosting included.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-24">
            {pricingPackages.map(pkg => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-24 bg-white border-b border-slate-blue/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Package Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-blue/20 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-dark text-white">
                  <th className="p-4 border-b border-slate-blue/30 font-bold w-1/3">Feature</th>
                  <th className="p-4 border-b border-slate-blue/30 font-bold text-center">Apprentice</th>
                  <th className="p-4 border-b border-slate-blue/30 font-bold text-center text-amber">Journeyman</th>
                  <th className="p-4 border-b border-slate-blue/30 font-bold text-center">Master</th>
                </tr>
              </thead>
              <tbody className="text-navy-card">
                {[
                  { name: 'Pages', app: '5', jour: '10', mas: '20+' },
                  { name: 'Custom design', app: '✓', jour: '✓', mas: '✓' },
                  { name: 'Mobile optimisation', app: '✓', jour: '✓', mas: '✓' },
                  { name: 'Local SEO setup', app: 'Basic', jour: 'Advanced', mas: 'Advanced' },
                  { name: 'Free domain', app: '✓', jour: '✓', mas: '✓' },
                  { name: 'Hosting + SSL', app: '✓', jour: '✓', mas: '✓' },
                  { name: 'Contact forms', app: '✓', jour: '✓', mas: '✓' },
                  { name: 'Blog integration', app: '—', jour: '✓', mas: '✓' },
                  { name: 'Analytics & Console', app: '✓', jour: '✓', mas: '✓' },
                  { name: 'Google Business Profile', app: 'Setup', jour: 'Setup + Monthly', mas: 'Setup + Monthly' },
                  { name: 'Review management', app: '—', jour: '✓', mas: '✓' },
                  { name: 'Monthly blog posts', app: '—', jour: '—', mas: '2/month' },
                  { name: 'Link building', app: '—', jour: '—', mas: 'Optional' },
                  { name: 'Support', app: 'Priority', jour: 'Priority', mas: 'Priority' },
                ].map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? 'bg-light-gray/50' : 'bg-white'}>
                    <td className="p-4 border-b border-slate-blue/10 font-medium">{row.name}</td>
                    <td className="p-4 border-b border-slate-blue/10 text-center font-medium">{row.app}</td>
                    <td className="p-4 border-b border-slate-blue/10 text-center font-bold text-amber bg-amber/5">{row.jour}</td>
                    <td className="p-4 border-b border-slate-blue/10 text-center font-medium">{row.mas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* One-off builds */}
      <div id="one-off-builds" className="py-24 bg-light-gray border-b border-slate-blue/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Prefer to pay once?</h2>
            <p className="text-lg text-slate-blue">Monthly packages suit most plumbers, because hosting, local SEO and support are all included. If you&rsquo;d rather pay once and look after the running costs yourself, we do that too.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-16">
            {ONE_OFF_BUILDS.map(b => (
              <PricingCard
                key={b.slug}
                name={b.name}
                price={b.price}
                period=" one-off"
                tagline={b.summary}
                features={b.features}
                notes={[`Payment: ${b.payment}`, `Timing: ${b.timing}`]}
                ctaHref={`/contact/?package=${b.slug}`}
              />
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-blue/20 shadow-lg max-w-4xl mx-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-dark text-white">
                  <th className="p-4 border-b border-slate-blue/30 font-bold w-1/3"><span className="sr-only">Factor</span></th>
                  <th className="p-4 border-b border-slate-blue/30 font-bold text-center">Monthly package</th>
                  <th className="p-4 border-b border-slate-blue/30 font-bold text-center">One-off build</th>
                </tr>
              </thead>
              <tbody className="text-navy-card">
                {oneOffComparison.map((r, i) => (
                  <tr key={r.row} className={i % 2 === 0 ? 'bg-light-gray/50' : 'bg-white'}>
                    <td className="p-4 border-b border-slate-blue/10 font-medium">{r.row}</td>
                    <td className="p-4 border-b border-slate-blue/10 text-center">{r.monthly}</td>
                    <td className="p-4 border-b border-slate-blue/10 text-center">{r.oneOff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-blue text-center max-w-3xl mx-auto">
            You&rsquo;ll host a one-off build in your own account. Hosting is usually around £50 to £85 a year, plus your domain renewal. Extra pages and town pages are {ONE_OFF_EXTRAS[0].price} each. AI add-ons work with either option.
          </p>
        </div>
      </div>

      {/* Add ons */}
      <div className="py-24 bg-navy-card text-white border-b border-slate-blue/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">Power up your package</h2>
            <p className="text-lg text-white/70">These aren't just plugins—they are fully managed AI services set up, trained, and maintained exclusively for your plumbing business. Never miss another booking.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AddOnCard 
              name="AI Chatbot"
              price="from £49/mo"
              priceNote="+ one-off £299 setup"
              description="A 24/7 AI chatbot on your website that answers customer questions, qualifies leads, and captures contact details — even at 2am when you're on a job."
              features={[
                'Answers questions about services, prices & coverage',
                'Captures name, phone, and job type from visitors',
                'Sends enquiry straight to your phone',
                'Works on any device seamlessly'
              ]}
              slug="chatbot"
            />
            <AddOnCard 
              name="AI Voice Agent"
              price="from £97/mo"
              priceNote="+ one-off £497 setup"
              description="A professional AI receptionist that answers your calls, qualifies the job, and books the appointment — so you never miss a call on the tools again."
              features={[
                'Answers calls 24/7 in your business name',
                'Qualifies the caller: job type, location, urgency',
                'Books appointments or takes an urgent message',
                'UK voices, natural conversation logic'
              ]}
              slug="voice-agent"
            />
          </div>
        </div>
      </div>

      {/* Pricing FAQ */}
      <div className="py-24 bg-light-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Package FAQs</h2>
          <div className="space-y-6">
            {packageFaqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-blue/10">
                <h4 className="font-bold text-navy-dark mb-2 text-lg">{faq.q}</h4>
                <p className="text-slate-blue leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <RelatedLinks keys={['home', 'cost', 'agency', 'seo', 'gas', 'heating']} />
        </div>
      </div>
      <GoogleReviews />
    </div>
  );
}
