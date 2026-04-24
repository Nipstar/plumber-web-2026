import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Plumber Website Portfolio | Examples of Our Work' },
  description: 'See examples of plumber websites we have designed and built across the UK. Real sites generating real leads for plumbing and heating businesses nationwide.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/portfolio/' },
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio/' }]} />
       <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Plumber Website Portfolio</h1>
          <p className="text-xl text-light-gray/80 leading-relaxed max-w-2xl mx-auto">
            Real sites, real results. See how we help plumbers across the UK build authority and win high-paying jobs.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TODO: Replace with real client sites before launch. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-lg border border-slate-blue/10 overflow-hidden flex flex-col">
              <div className="h-48 bg-navy-card/5 flex items-center justify-center border-b border-slate-blue/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero_blueprint_dark.webp')] opacity-5 mix-blend-overlay"></div>
                <span className="text-slate-blue font-medium">Screenshot coming soon</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-navy-dark text-xl mb-1">Business Name Placeholder</h3>
                <p className="text-sm text-slate-blue mb-4">Location • Package Tier</p>
                <div className="mt-auto">
                  <a href="#" className="text-amber font-bold hover:underline transition-all">Visit site →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-navy-dark mb-4">What our clients say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: 'Dave R.', trade: 'Emergency Plumber', loc: 'London', text: 'I was hesitant about spending money on a new site, but within the first month the Journeyman package paid for itself in emergency call-outs alone.' },
             { name: 'Tom B.', trade: 'Gas Engineer', loc: 'Manchester', text: 'The automated booking features have saved me hours of phone tag. Customers can just book a boiler service slot while I am out on a job.' },
             { name: 'Simon M.', trade: 'Heating & Renewables', loc: 'Portsmouth', text: 'Top tier service. The AI Chatbot alone qualifies the heat pump leads so I only speak to people who are actually serious about proceeding.' }
           ].map(test => (
             <blockquote key={test.name} className="bg-navy-dark text-white p-8 rounded-2xl border border-slate-blue/30 shadow-xl relative mt-4">
               <div className="absolute -top-4 left-8 text-4xl text-amber">"</div>
               <div className="flex gap-1 mb-4 text-amber">
                 {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
               </div>
               <p className="text-light-gray italic mb-6 leading-relaxed">"{test.text}"</p>
               <footer>
                 <div className="font-bold">{test.name}</div>
                 <div className="text-sm text-white/60">{test.trade}, {test.loc}</div>
               </footer>
             </blockquote>
           ))}
        </div>
      </div>
    </div>
  );
}
