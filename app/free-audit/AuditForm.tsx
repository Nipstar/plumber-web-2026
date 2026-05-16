'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_WEBHOOK = 'https://antekauto.app.n8n.cloud/webhook-test/plumber-web';

export default function AuditForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    siteUrl: '',
    email: '',
    chatOptIn: false,
    website: '', // honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      router.push('/thank-you/?type=audit');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK || DEFAULT_WEBHOOK;

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'audit',
          name: formData.name,
          siteUrl: formData.siteUrl,
          email: formData.email,
          chatOptIn: formData.chatOptIn,
          source: typeof window !== 'undefined' ? window.location.href : '',
          referrer: typeof document !== 'undefined' ? document.referrer || null : null,
        }),
      });

      if (!res.ok) throw new Error('Failed to send. Please try again.');

      window.dataLayer?.push({ event: 'lead_form_submit', form_name: 'audit' });
      router.push('/thank-you/?type=audit');
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-slate-blue/10">
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-card mb-1">Name</label>
          <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <div>
          <label htmlFor="siteUrl" className="block text-sm font-medium text-navy-card mb-1">Current website URL</label>
          <input required type="url" id="siteUrl" name="siteUrl" value={formData.siteUrl} onChange={handleChange} placeholder="https://yoursite.co.uk" className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-card mb-1">Email</label>
          <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Where we send your Loom" className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" id="chatOptIn" name="chatOptIn" checked={formData.chatOptIn} onChange={handleChange} className="mt-1 w-4 h-4 text-amber border-slate-blue/30 rounded focus:ring-amber" />
          <span className="text-sm text-slate-blue">Also send me a quick chat about a new build</span>
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-amber text-navy-dark font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'loading' ? 'Sending...' : 'Send Me My Free Audit'}
        </button>
      </div>
    </form>
  );
}
