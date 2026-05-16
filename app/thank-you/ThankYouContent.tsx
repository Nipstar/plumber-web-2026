'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const phone = '0333 335 6750';
const email = 'hello@plumberwebdesign.co.uk';

const STEPS = {
  quote: [
    { n: 1, title: 'We review your area, competition and current setup', body: 'We look at your local market and what your competitors are doing.' },
    { n: 2, title: 'We send a short, specific proposal with pricing', body: 'Clear scope, transparent pricing, no jargon.' },
    { n: 3, title: 'We book a 20-minute call to walk through it', body: 'A quick call to confirm the brief and answer questions.' },
  ],
  audit: [
    { n: 1, title: 'We open your site and run our checks (~30 mins)', body: 'Mobile speed, SEO basics, CTAs, content gaps.' },
    { n: 2, title: 'We record a Loom video walking through findings', body: 'Specific, honest feedback &mdash; what to fix, what to keep.' },
    { n: 3, title: 'We email it to you &mdash; no calendar bookings, no pressure', body: 'You decide what to do next. We will not chase.' },
  ],
};

export default function ThankYouContent() {
  const params = useSearchParams();
  const raw = params?.get('type') || 'quote';
  const type: 'quote' | 'audit' = raw === 'audit' ? 'audit' : 'quote';

  useEffect(() => {
    window.dataLayer?.push({ event: 'lead_thank_you_view', form_type: type });
  }, [type]);

  const heading = type === 'audit' ? 'Audit booked — Loom coming within 48 hours' : 'Thanks — we’ve got your details';

  const body =
    type === 'audit'
      ? 'We will review your site, record a 10-minute walkthrough, and email it to you. No follow-up unless you ask. If you change your mind and want to chat sooner, ring 0333 335 6750.'
      : 'Andy will personally review your enquiry and come back within one working day with a transparent quote. If it is urgent, ring 0333 335 6750 or email hello@plumberwebdesign.co.uk.';

  const steps = STEPS[type];

  return (
    <>
      <section className="bg-navy-dark text-white py-24 border-b border-slate-blue/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{heading}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {body.split(phone).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-amber font-semibold hover:underline">
                    {phone}
                  </a>
                </span>
              ) : (
                <span key={i}>
                  {part.split(email).map((p, j, a) =>
                    j < a.length - 1 ? (
                      <span key={j}>
                        {p}
                        <a href={`mailto:${email}`} className="text-amber font-semibold hover:underline">
                          {email}
                        </a>
                      </span>
                    ) : (
                      <span key={j}>{p}</span>
                    )
                  )}
                </span>
              )
            )}
          </p>
          <div className="mt-8">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-amber text-navy-dark font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Or call Andy directly · {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-dark mb-10 text-center">
            What happens next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(s => (
              <div key={s.n} className="bg-white rounded-xl p-6 shadow-md border border-slate-blue/10">
                <div className="w-10 h-10 rounded-full bg-amber text-navy-dark font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm text-slate-blue" dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block text-sm font-semibold text-navy-dark hover:text-amber transition-colors"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
