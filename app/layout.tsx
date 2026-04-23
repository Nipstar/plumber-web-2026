import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
  metadataBase: new URL('https://plumberwebdesign.co.uk'),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-light-gray text-slate-blue min-h-screen flex flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-amber focus:text-navy-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">Skip to content</a>
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
              `}
            </Script>
          </>
        )}
        <Nav />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
