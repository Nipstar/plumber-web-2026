// One-off build pricing. Monthly package prices still live inline on the
// pages that render them; change one-off prices here only.

export type OneOffBuild = {
  slug: 'starter-build' | 'core-build';
  name: string;
  price: string; // display, e.g. '£600'
  priceNumber: string; // schema.org Offer price
  summary: string;
  features: string[];
  payment: string;
  timing: string;
};

export const ONE_OFF_BUILDS: OneOffBuild[] = [
  {
    slug: 'starter-build',
    name: 'Starter Build',
    price: '£600',
    priceNumber: '600',
    summary: 'A professional website at one fixed price. Best for new or smaller plumbing businesses.',
    features: [
      '5-page WordPress website',
      'Styled to your logo and colours',
      'Mobile friendly',
      'Gallery of your work',
      'Contact form, click-to-call and WhatsApp',
      'Basic local SEO setup',
      'Google Search Console and Analytics',
      'Google Business Profile guidance',
      'Hosting setup, security, and domain and email connection',
      'One round of changes and a full handover',
      'Full ownership and admin access',
    ],
    payment: '£300 to start, £300 on launch',
    timing: 'Around 2 weeks from receiving your logo, photos and information',
  },
  {
    slug: 'core-build',
    name: 'Core Build',
    price: '£995',
    priceNumber: '995',
    summary: 'A bespoke website with more room for your services.',
    features: [
      'Up to 8 pages',
      'Bespoke WordPress design matched to your branding',
      'Mobile friendly',
      'Gallery of your work',
      'Contact forms, click-to-call and WhatsApp',
      'On-page local SEO foundation',
      'Launch on your domain and email',
      'Full ownership and admin access',
    ],
    payment: '50% to start, 50% on launch',
    timing: 'Around 2 to 3 weeks from receiving your logo, photos and information',
  },
];

export const ONE_OFF_EXTRAS = [
  { name: 'Extra page', price: '£125' },
  { name: 'Town or service area page', price: '£125' },
];

/** `/contact/?package=<slug>` → label shown on the form and sent to the webhook. */
export const PACKAGE_LABELS: Record<string, string> = {
  apprentice: 'Apprentice',
  journeyman: 'Journeyman',
  master: 'Master',
  'starter-build': 'Starter Build',
  'core-build': 'Core Build',
};
