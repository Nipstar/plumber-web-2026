// Shared Open Graph / Twitter fields.
//
// Next.js merges metadata shallowly: when a page sets its own `openGraph`
// (or `twitter`) object, it REPLACES the one from the root layout rather than
// merging into it. To give each page a matching og:title / twitter:title while
// keeping the shared image and other defaults, spread these bases into the
// page's openGraph/twitter and override `title` + `description` per page.

export const ogBase = {
  type: 'website' as const,
  locale: 'en_GB',
  siteName: 'PlumberWebDesign.co.uk',
  images: [{ url: '/images/logo.webp', width: 400, height: 400, alt: 'PlumberWebDesign.co.uk' }],
};

export const twitterBase = {
  card: 'summary' as const,
};
