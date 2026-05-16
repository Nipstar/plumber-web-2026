'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const PHONE_TEL = '03333356750';

export default function StickyMobileBar() {
  const pathname = usePathname() || '';
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;

  if (normalized === '/thank-you/' || normalized === '/contact/' || normalized === '/free-audit/') {
    return null;
  }

  const trackCall = () => {
    window.dataLayer?.push({ event: 'call_click_sticky' });
  };
  const trackAudit = () => {
    window.dataLayer?.push({ event: 'audit_click_sticky' });
  };
  const trackQuote = () => {
    window.dataLayer?.push({ event: 'quote_click_sticky' });
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-navy-dark border-t-2 border-amber shadow-2xl pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={trackCall}
          className="flex flex-col items-center justify-center h-14 bg-amber text-navy-dark font-bold text-xs tracking-wide"
        >
          <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <Link
          href="/free-audit/"
          onClick={trackAudit}
          className="flex flex-col items-center justify-center h-14 bg-navy-card text-white font-bold text-xs tracking-wide border-x border-slate-blue/40"
        >
          <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          Free Audit
        </Link>
        <Link
          href="/contact/"
          onClick={trackQuote}
          className="flex flex-col items-center justify-center h-14 bg-light-gray text-navy-dark font-bold text-xs tracking-wide"
        >
          <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Get Quote
        </Link>
      </div>
    </div>
  );
}
