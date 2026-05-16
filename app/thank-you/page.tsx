import type { Metadata } from 'next';
import { Suspense } from 'react';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = {
  title: { absolute: 'Thanks · Plumber Web Design' },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}
