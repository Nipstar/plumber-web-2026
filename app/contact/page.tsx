import ContactForm from '@/components/ContactForm';
import SchemaScript from '@/components/SchemaScript';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Get a Free Quote for Your Plumber Website | PlumberWebDesign' },
  description: 'Get a free quote for your plumber website. Tell us about your business and we will come back to you within one working day. No hard sell, no hidden costs.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/contact/' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PlumberWebDesign.co.uk",
  "url": "https://www.plumberwebdesign.co.uk/",
  "telephone": "03333356750",
  "email": "hello@plumberwebdesign.co.uk",
  "areaServed": { "@type": "Country", "name": "GB" },
  "priceRange": "££"
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact/' }]} />
      <div className="bg-light-gray min-h-screen py-24 border-b border-slate-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-6">Get a Free Quote</h1>
          <p className="text-lg text-slate-blue">We'll review your current online presence and send over a clear, transparent quote within one working day. No hard sell.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right: Contact Block & Steps */}
          <div>
            <div className="bg-navy-dark text-white rounded-2xl p-8 mb-8 border border-slate-blue/30 shadow-xl">
              <h3 className="font-display text-2xl font-bold mb-6">Get in touch directly</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-amber">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-amber font-medium mb-1">Call Us</div>
                    <a href={`tel:${(process.env.NEXT_PUBLIC_PHONE || '0333 335 6750').replace(/\s+/g, '')}`} className="text-lg hover:text-amber transition-colors font-bold tracking-wide">
                      {process.env.NEXT_PUBLIC_PHONE || '0333 335 6750'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-amber">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-amber font-medium mb-1">Email Us</div>
                    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hello@plumberwebdesign.co.uk'}`} className="text-lg hover:text-amber transition-colors">
                      {process.env.NEXT_PUBLIC_EMAIL || 'hello@plumberwebdesign.co.uk'}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-blue/30 pt-8 mt-8">
                <h3 className="font-display text-xl font-bold mb-6">What happens next?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-navy-card border border-amber flex items-center justify-center text-amber font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Submit your details</h4>
                      <p className="text-sm text-white/60">Tell us what you need and what area you cover.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-navy-card border border-amber flex items-center justify-center text-amber font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">We review your market</h4>
                      <p className="text-sm text-white/60">We look at your local competitors and keyword search volumes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-navy-card border border-amber flex items-center justify-center text-amber font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Get your free quote</h4>
                      <p className="text-sm text-white/60">We send over a transparent proposal within one working day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
