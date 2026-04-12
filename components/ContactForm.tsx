'use client';

import { useState, useEffect } from 'react';

const PACKAGES = [
  'Apprentice',
  'Journeyman',
  'Master',
  'Not sure yet',
  'Add-on only — Chatbot',
  'Add-on only — Voice Agent',
  'Both Add-ons'
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceArea: '',
    packageInterest: 'Not sure yet',
    message: '',
    website: '' // honeypot
  });

  useEffect(() => {
    // Check URL search params to pre-fill
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    const addon = params.get('addon');
    
    if (pkg) {
      const match = PACKAGES.find(p => p.toLowerCase() === pkg.toLowerCase());
      if (match) setFormData(prev => ({ ...prev, packageInterest: match }));
    } else if (addon) {
      if (addon === 'chatbot') setFormData(prev => ({ ...prev, packageInterest: 'Add-on only — Chatbot' }));
      else if (addon === 'voice-agent') setFormData(prev => ({ ...prev, packageInterest: 'Add-on only — Voice Agent' }));
      else if (addon === 'both') setFormData(prev => ({ ...prev, packageInterest: 'Both Add-ons' }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.website) {
      setStatus('success'); // Silent success for bots
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK || '';
      if (!webhookUrl) {
        console.warn('No form webhook URL configured.');
        setStatus('success'); // Mock success if no webhook is set up yet
        return;
      }

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: window.location.href,
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
          <label htmlFor="packageInterest" className="block text-sm font-medium text-navy-card mb-1">What are you interested in?</label>
          <select id="packageInterest" name="packageInterest" value={formData.packageInterest} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-blue/20 bg-light-gray focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-all appearance-none cursor-pointer">
            {PACKAGES.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
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
