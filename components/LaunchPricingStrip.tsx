'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_NAME = 'pwd_launch_strip_dismissed';

function hasCookie(name: string): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.split('; ').some(c => c.startsWith(`${name}=`));
}

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

export default function LaunchPricingStrip() {
  const [dismissed, setDismissed] = useState(true); // hide during SSR, reveal on client if no cookie

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDismissed(hasCookie(COOKIE_NAME));
  }, []);

  if (dismissed) return null;

  const handleClick = () => {
    window.dataLayer?.push({ event: 'launch_strip_click' });
  };

  const dismiss = () => {
    setCookie(COOKIE_NAME, '1', 7);
    setDismissed(true);
  };

  return (
    <div className="relative bg-navy-dark text-white border-b border-slate-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
        <Link
          href="/contact/"
          onClick={handleClick}
          className="flex-1 text-center text-xs sm:text-sm font-medium tracking-wide hover:text-amber transition-colors pr-8"
        >
          {/* Desktop copy */}
          <span className="hidden sm:inline">
            LAUNCH PRICING · <span className="text-amber font-bold">£79/mo</span> locked-in for first 12 months · Until 30 November 2026 · 4 of 10 founding slots left{' '}
            <span className="text-amber">→</span>
          </span>
          {/* Mobile copy */}
          <span className="sm:hidden">
            LAUNCH · <span className="text-amber font-bold">£79/mo</span> · Limited slots{' '}
            <span className="text-amber">→</span>
          </span>
        </Link>
        <button
          type="button"
          aria-label="Dismiss launch pricing notice"
          onClick={dismiss}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-1 rounded transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
