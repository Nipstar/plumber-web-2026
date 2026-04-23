'use client';

import { useState, useEffect } from 'react';

const SERVICE_GROUPS = [
  {
    heading: 'Website Packages',
    options: ['Apprentice — £99/mo', 'Journeyman — £169/mo', 'Master — £249/mo', 'Not sure yet']
  },
  {
    heading: 'AI Add-ons',
    options: ['AI Chatbot', 'AI Voice Agent']
  }
];

const DEFAULT_WEBHOOK = 'https://antekauto.app.n8n.cloud/webhook-test/plumber-web';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceArea: '',
    message: '',
    website: '' // honeypot
  });
  const [servicesInterest, setServicesInterest] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    const addon = params.get('addon');
    const preSelected: string[] = [];

    if (pkg) {
      const pkgLower = pkg.toLowerCase();
      if (pkgLower.includes('apprentice')) preSelected.push('Apprentice — £99/mo');
      else if (pkgLower.includes('journeyman')) preSelected.push('Journeyman — £169/mo');
      else if (pkgLower.includes('master')) preSelected.push('Master — £249/mo');
    }
    if (addon === 'chatbot') preSelected.push('AI Chatbot');
    else if (addon === 'voice-agent') preSelected.push('AI Voice Agent');
    else if (addon === 'both') preSelected.push('AI Chatbot', 'AI Voice Agent');

    if (preSelected.length > 0) setServicesInterest(preSelected);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (opt: string) => {
    setServicesInterest(prev =>
      prev.includes(opt) ? prev.filter(s => s !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      setStatus('success');
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
          name: formData.name,
          businessName: formData.businessName,
          phone: formData.phone,
          email: formData.email,
          serviceArea: formData.serviceArea,
          message: formData.message,
          servicesInterest,
          source: window.location.href,
          referrer: document.referrer || null,
        })
      });

      if (!res.ok) throw new Error('Failed to send message.');

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-navy-card rounded-xl p-8 border border-slate-blue/30 text-center">
        <svg className="w-16 h-16 text-amber mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="font-display text-2xl text-white mb-2">Message Sent</h3>
        <p className="text-white/60">We'll be in touch within one working day.</p>
      </div>
    );
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy-card mb-1">Name</label>
            <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-navy-card mb-1">Business Name</label>
            <input required type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy-card mb-1">Phone Number</label>
            <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy-card mb-1">Email Address</label>
            <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
          </div>
        </div>

        <div>
          <label htmlFor="serviceArea" className="block text-sm font-medium text-navy-card mb-1">Main Service Area (e.g. Manchester)</label>
          <input required type="text" id="serviceArea" name="serviceArea" value={formData.serviceArea} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all" />
        </div>

        <div>
          <div className="block text-sm font-medium text-navy-card mb-3">What are you interested in? <span className="text-slate-blue/60 font-normal">(select all that apply)</span></div>
          <div className="space-y-4">
            {SERVICE_GROUPS.map(group => (
              <fieldset key={group.heading}>
                <legend className="text-xs font-bold uppercase tracking-wider text-amber mb-2">{group.heading}</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {group.options.map(opt => {
                    const checked = servicesInterest.includes(opt);
                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                          checked
                            ? 'border-amber bg-amber/10 text-navy-dark font-medium'
                            : 'border-slate-blue/20 bg-light-gray hover:border-amber/50 text-navy-card'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleService(opt)}
                        />
                        <span className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          checked ? 'bg-amber border-amber' : 'bg-white border-slate-blue/30'
                        }`}>
                          {checked && (
                            <svg className="w-3.5 h-3.5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy-card mb-1">Message (Optional)</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all resize-y"></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-amber text-navy-dark font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'loading' ? 'Sending...' : 'Get Your Free Quote'}
        </button>
      </div>
    </form>
  );
}
