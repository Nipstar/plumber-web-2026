'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TradeTypeField, { TRADE_OPTIONS } from '@/components/TradeTypeField';

const DEFAULT_WEBHOOK = 'https://antekauto.app.n8n.cloud/webhook-test/plumber-web';

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [tradeError, setTradeError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    tradeType: '',
    businessName: '',
    phone: '',
    email: '',
    website: '', // honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTradeChange = (v: string) => {
    setFormData(prev => ({ ...prev, tradeType: v }));
    if (tradeError) setTradeError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      router.push('/thank-you/?type=quote');
      return;
    }

    if (!TRADE_OPTIONS.includes(formData.tradeType as (typeof TRADE_OPTIONS)[number])) {
      setTradeError('Please tell us your trade');
      setStatus('error');
      setErrorMessage('Please tell us your trade.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    setTradeError('');

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK || DEFAULT_WEBHOOK;

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'quote',
          name: formData.name,
          trade_type: formData.tradeType,
          business_name: formData.businessName,
          phone: formData.phone,
          email: formData.email,
          source: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer || null : null,
        }),
      });

      if (!res.ok) throw new Error('Failed to send message.');

      window.dataLayer?.push({
        event: 'lead_form_submit',
        form_name: 'quote',
        trade_type: formData.tradeType,
        business_name: formData.businessName,
      });
      router.push('/thank-you/?type=quote');
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-slate-blue/10">
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          {errorMessage}
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-card mb-1">Name</label>
          <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <TradeTypeField value={formData.tradeType} onChange={handleTradeChange} error={tradeError} />

        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-navy-card mb-1">Business name</label>
          <input required type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-card mb-1">Phone</label>
          <input required type="tel" inputMode="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-card mb-1">Email</label>
          <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-amber text-navy-dark font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'loading' ? 'Sending...' : 'Get My Free Quote'}
        </button>

        <p className="text-xs text-slate-blue/70 text-center">We reply within one working day. No hard sell.</p>
      </div>
    </form>
  );
}
