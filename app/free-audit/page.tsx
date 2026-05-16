import type { Metadata } from 'next';
import AuditForm from './AuditForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaScript from '@/components/SchemaScript';

export const metadata: Metadata = {
  title: { absolute: 'Free Plumber Website Audit · Loom Within 48 Hours' },
  description: 'Send us your current plumber website. We will record a 10-minute Loom with honest, specific feedback. No sales pitch, no card needed. UK only.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/free-audit/' },
};

const auditSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Plumber Website Audit',
  provider: { '@type': 'Organization', name: 'Plumber Web Design', url: 'https://www.plumberwebdesign.co.uk/' },
  areaServed: 'GB',
  description: 'Free 10-minute Loom audit of an existing UK plumber, gas engineer, heating engineer or bathroom fitter website. Delivered within 48 working hours.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
};

const CHECKLIST = [
  'Mobile speed score and what to fix',
  'Three things competitors are doing better',
  'Specific copy and CTA improvements',
  'Local SEO wins you’re missing',
  'Honest opinion: rebuild or improve',
];

const REASSURANCE = [
  'We audit max 3 sites a week. We will reply within 48 working hours.',
  'Free means free — no card, no commitment, no follow-up spam.',
  'If your site is fine, we will say so.',
];

export default function FreeAuditPage() {
  return (
    <>
      <SchemaScript schema={auditSchema} />
      <Breadcrumbs items={[{ label: 'Free Audit', href: '/free-audit/' }]} />

      <section className="bg-navy-dark text-white py-20 lg:py-24 border-b border-slate-blue/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-amber/15 text-amber px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5 border border-amber/30">
            Free &mdash; 48 Hour Turnaround
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Free Plumber Website Audit
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            Send us your current site. We&rsquo;ll record a 10-minute Loom walking through what&rsquo;s working,
            what&rsquo;s broken, and what we&rsquo;d change. No sales pitch &mdash; just an honest review from someone who
            builds plumber sites for a living.
          </p>
        </div>
      </section>

      <section className="bg-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <AuditForm />
            </div>

            <div>
              <div className="bg-navy-dark text-white rounded-2xl p-8 shadow-xl border border-slate-blue/30">
                <h2 className="font-display text-2xl font-bold mb-6">What&rsquo;s in the audit</h2>
                <ul className="space-y-4">
                  {CHECKLIST.map(item => (
                    <li key={item} className="flex gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-amber mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 space-y-2 text-center">
            {REASSURANCE.map(r => (
              <p key={r} className="text-sm text-slate-blue/80">
                {r}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
