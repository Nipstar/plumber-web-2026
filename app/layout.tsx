import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyMobileBar from '@/components/StickyMobileBar'
import LaunchPricingStrip from '@/components/LaunchPricingStrip'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.plumberwebdesign.co.uk'),
  title: {
    default: 'Plumber Web Design | Websites for Plumbers from £99/month',
    template: '%s | PlumberWebDesign.co.uk'
  },
  description: 'Specialist web design for plumbers across the UK. Mobile-first, SEO-optimised websites built to generate calls and win jobs. Packages from £99/month.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'PlumberWebDesign.co.uk',
    title: 'Plumber Web Design | Websites for Plumbers from £99/month',
    description: 'Specialist web design for plumbers across the UK. Mobile-first, SEO-optimised websites built to generate calls and win jobs.',
    images: [{ url: '/images/logo.webp', width: 400, height: 400, alt: 'PlumberWebDesign.co.uk' }],
  },
  twitter: {
    card: 'summary',
    title: 'Plumber Web Design | Websites for Plumbers from £99/month',
    description: 'Specialist web design for plumbers across the UK. Mobile-first, SEO-optimised websites built to generate calls and win jobs.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Plumber Web Design',
  alternateName: 'PlumberWebDesign.co.uk',
  url: 'https://www.plumberwebdesign.co.uk/',
  logo: 'https://www.plumberwebdesign.co.uk/images/logo.webp',
  telephone: '+44 333 335 6750',
  email: 'hello@plumberwebdesign.co.uk',
  areaServed: 'GB',
  founder: { '@type': 'Person', name: 'Andrew Norman' },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Antek Automation',
    url: 'https://antekautomation.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-light-gray text-slate-blue min-h-screen flex flex-col font-sans">
        {/*
          TODO_REPLACE: Demo subdomains noindex
          biomass.plumberwebdesign.co.uk, emergency.plumberwebdesign.co.uk,
          bathrooms.plumberwebdesign.co.uk, boiler.plumberwebdesign.co.uk,
          renewables.plumberwebdesign.co.uk
          must serve X-Robots-Tag: noindex, nofollow so they do not compete in search.
          If demos share this Vercel project: add a host-matched header in next.config.
          If demos are separate Vercel projects: add the header in each project's vercel.json.
        */}
        {/* CMP: lightweight self-hosted banner with Google Consent Mode v2. Consent defaults DENIED below; banner mounts at bottom of page. */}

        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-amber focus:text-navy-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">Skip to content</a>

        {/* Organization JSON-LD — plain script so static export emits parseable LD+JSON */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* dataLayer init + Google Consent Mode v2 defaults (denied until banner accepts) */}
        <Script id="datalayer-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            // Read existing consent cookie (set by previous accept/reject) so returning visitors do not flip back to denied
            (function(){
              var match = document.cookie.split('; ').find(function(c){ return c.indexOf('pwd_consent=') === 0; });
              var v = match ? match.split('=')[1] : 'denied';
              if (v !== 'granted' && v !== 'denied') v = 'denied';
              gtag('consent', 'default', {
                ad_storage: v,
                analytics_storage: v,
                ad_user_data: v,
                ad_personalization: v,
                wait_for_update: 500
              });
            })();
          `}
        </Script>

        {/* Google tag (gtag.js) — loads once, configures Google Ads conversion ID AW-17947994704 plus GA4 if set */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17947994704"
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-17947994704');
            ${process.env.NEXT_PUBLIC_GA4_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');` : ''}
          `}
        </Script>

        {/* Conversion bridge: tel: clicks + sticky-bar + form-submit + thank-you-view → Google Ads conversions.
            Conversion labels for AW-17947994704 to be filled in by Andy after creating each conversion action in Google Ads. */}
        <Script id="conversion-bridge" strategy="afterInteractive">
          {`
            // TODO_REPLACE: paste conversion labels from Google Ads after creating each conversion action
            var AW_LABELS = {
              tel_click: 'TODO_REPLACE_LABEL_TEL',
              lead_form_submit: 'TODO_REPLACE_LABEL_FORM',
              call_click_sticky: 'TODO_REPLACE_LABEL_STICKY_CALL',
              audit_click_sticky: 'TODO_REPLACE_LABEL_STICKY_AUDIT',
              quote_click_sticky: 'TODO_REPLACE_LABEL_STICKY_QUOTE',
              demo_click: 'TODO_REPLACE_LABEL_DEMO',
              launch_strip_click: 'TODO_REPLACE_LABEL_LAUNCH_STRIP',
              lead_thank_you_view: 'TODO_REPLACE_LABEL_THANK_YOU'
            };
            var AW_ID = 'AW-17947994704';

            // Global tel: click listener — pushes dataLayer event + fires GA4 gtag event
            document.addEventListener('click', function(e){
              var t = e.target;
              var a = t && t.closest && t.closest('a[href^="tel:"]');
              if (a) {
                var num = a.getAttribute('href').replace('tel:','');
                var loc = window.location.pathname;
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'tel_click', tel_number: num, location: loc });
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'tel_click', { tel_number: num, location: loc });
                }
              }
            });

            // Bridge dataLayer pushes → gtag conversion events
            (function(){
              var origPush = window.dataLayer.push.bind(window.dataLayer);
              window.dataLayer.push = function(){
                for (var i = 0; i < arguments.length; i++) {
                  var ev = arguments[i] && arguments[i].event;
                  var label = ev && AW_LABELS[ev];
                  if (label && label.indexOf('TODO_REPLACE') !== 0 && typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion', { send_to: AW_ID + '/' + label });
                  }
                }
                return origPush.apply(window.dataLayer, arguments);
              };
            })();
          `}
        </Script>
        <LaunchPricingStrip />
        <Nav />
        <main id="main" className="flex-grow pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
        <CookieConsent />
      </body>
    </html>
  )
}
