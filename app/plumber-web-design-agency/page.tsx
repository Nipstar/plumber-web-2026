import Link from 'next/link';
import SchemaScript from '@/components/SchemaScript';

export const metadata = {
  title: { absolute: 'Plumber Web Design Agency | Specialist for UK Trades' },
  description: 'Looking for a plumber web design agency? We build exclusively for UK plumbers and heating engineers. Trade-specific websites, local SEO, and ongoing support.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/plumber-web-design-agency/' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PlumberWebDesign.co.uk",
  "url": "https://plumberwebdesign.co.uk/",
  "telephone": "03333356750",
  "email": "hello@plumberwebdesign.co.uk",
  "description": "Specialist web design agency for UK plumbers, gas engineers, and heating engineers.",
  "areaServed": { "@type": "Country", "name": "GB" },
  "priceRange": "££"
};

export default function AgencyPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <SchemaScript schema={schema} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber/20 text-amber px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber/30">About Us</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">UK Plumber Web Design Agency</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            We don't build sites for cafes. We don't do e-commerce. We build high-performance lead generation engines exclusively for the UK trades.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-dark mb-6">Why hire a specialist?</h2>
              <p className="text-lg text-slate-blue mb-6 leading-relaxed">
                When you hire a generalist web designer, you spend half the project explaining what a Gas Safe register is or why emergency call-outs are your most profitable job.
              </p>
              <p className="text-lg text-slate-blue mb-8 leading-relaxed">
                We already know the plumbing industry. We know what customers search for when their boiler breaks down, and we know exactly how to design a site that converts those panicked searches into phone calls directly to you.
              </p>
              <ul className="space-y-4 text-navy-card font-medium">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Zero industry learning curve
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Built for rapid mobile conversion
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Ready-made Local SEO strategies out of the box
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-blue/10 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber opacity-10 rounded-full blur-3xl -z-10 absolute-center"></div>
               <h3 className="text-2xl font-bold text-navy-dark mb-8">Our Full Service Stack</h3>
               <div className="space-y-6">
                 {[
                   { name: 'Custom Web Design', desc: 'Sleek, premium, and lightning-fast.' },
                   { name: 'Local SEO', desc: 'Ranking you in the Google Map Pack.' },
                   { name: 'Google Business Profile', desc: 'Full setup and monthly optimisation.' },
                   { name: 'AI Voice & Chat', desc: 'Automated 24/7 lead handling.' }
                 ].map(service => (
                   <div key={service.name} className="flex gap-4">
                     <div className="w-12 h-12 bg-light-gray rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-blue/10">
                       <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <div>
                       <h4 className="font-bold text-navy-dark">{service.name}</h4>
                       <p className="text-sm text-slate-blue">{service.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* 4 Step Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-navy-dark mb-12 text-center">Our 4-Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Discovery', desc: 'We map out your business goals, target trades, and key service areas to structure the perfect site architecture.' },
                { step: '2', title: 'Design', desc: 'We craft a premium, modern design matching your brand, focusing heavily on mobile usability and click-to-call.' },
                { step: '3', title: 'Build', desc: 'We develop the site on Next.js for blazing fast performance, wiring up your contact forms and analytics.' },
                { step: '4', title: 'Launch', desc: 'We push the site live, configure your Google Business Profile, and kick off the ongoing local SEO strategy.' },
              ].map(process => (
                <div key={process.step} className="bg-white p-8 rounded-2xl border border-slate-blue/10 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className="text-6xl font-display font-black text-slate-blue/5 absolute -top-4 -right-4 z-0 group-hover:text-amber/10 transition-colors">{process.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy-dark mb-3">{process.title}</h3>
                    <p className="text-sm text-slate-blue leading-relaxed">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
             <Link href="/plumber-website-design-packages/" className="inline-block bg-amber text-navy-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
               View Our Pricing Packages →
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
