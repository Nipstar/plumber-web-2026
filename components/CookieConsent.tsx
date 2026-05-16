'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_NAME = 'pwd_consent';
const COOKIE_DAYS = 180;

type ConsentChoice = 'granted' | 'denied';

function readConsent(): ConsentChoice | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.split('; ').find(c => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const v = match.split('=')[1];
  return v === 'granted' || v === 'denied' ? v : null;
}

function writeConsent(v: ConsentChoice) {
  const d = new Date();
  d.setTime(d.getTime() + COOKIE_DAYS * 24 * 60 * 60 * 1000);
  document.cookie = `${COOKIE_NAME}=${v}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

function applyConsent(v: ConsentChoice) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      ad_storage: v,
      analytics_storage: v,
      ad_user_data: v,
      ad_personalization: v,
    });
  }
  window.dataLayer?.push({ event: 'consent_update', consent_state: v });
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      applyConsent(existing);
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);
  }, []);

  const accept = () => {
    writeConsent('granted');
    applyConsent('granted');
    setShow(false);
  };

  const reject = () => {
    writeConsent('denied');
    applyConsent('denied');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] md:bottom-4 md:left-4 md:right-auto md:max-w-md"
    >
      <div className="bg-navy-dark text-white border-t md:border border-amber/40 md:rounded-2xl shadow-2xl p-5 md:p-6 mb-20 md:mb-0">
        <h2 className="font-display text-lg font-bold mb-2">Cookies on this site</h2>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          We use cookies for analytics and to measure Google Ads performance. Nothing is shared until you accept.
          See our{' '}
          <Link href="/privacy-policy/" className="text-amber font-semibold hover:underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={accept}
            className="flex-1 bg-amber text-navy-dark font-bold py-2.5 px-4 rounded-lg hover:bg-white transition-colors text-sm"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={reject}
            className="flex-1 bg-transparent border border-white/40 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
