import type { Metadata } from 'next';

const SITE = 'https://www.plumberwebdesign.co.uk';

/**
 * Single source of truth for page metadata. Passing one `title` guarantees the
 * document title, og:title and twitter:title can never diverge.
 *
 * Note: `title.absolute` is used deliberately so the root layout's
 * `title.template` ('%s | PlumberWebDesign.co.uk') does NOT wrap the title —
 * wrapping would push every title past Google's ~60-char cap.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string; // leading + trailing slash, e.g. "/seo-for-plumbers/"
}): Metadata {
  const url = `${SITE}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'PlumberWebDesign.co.uk',
      locale: 'en_GB',
      type: 'website',
      images: [{ url: `${SITE}/images/logo.webp`, width: 400, height: 400, alt: 'PlumberWebDesign.co.uk' }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [`${SITE}/images/logo.webp`],
    },
  };
}
