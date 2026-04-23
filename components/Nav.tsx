import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-navy-dark text-white border-b border-slate-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="hover:opacity-90 transition-opacity duration-150">
              <Image src="/images/logo.webp" alt="PlumberWebDesign.co.uk" width={200} height={48} className="h-12 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-amber transition-colors duration-150">Home</Link>
            
            <div className="relative group">
              <button className="text-sm font-medium hover:text-amber transition-colors duration-150 py-2">
                Services
              </button>
              <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 bg-navy-card rounded-lg shadow-xl border border-slate-blue/30 overflow-hidden">
                <Link href="/gas-engineer-website-design/" className="block px-4 py-3 text-sm hover:bg-slate-blue/30 text-white transition-colors duration-150">Gas Engineers</Link>
                <Link href="/heating-engineer-website-design/" className="block px-4 py-3 text-sm hover:bg-slate-blue/30 text-white transition-colors duration-150">Heating Engineers</Link>
                <Link href="/bathroom-fitter-website-design/" className="block px-4 py-3 text-sm hover:bg-slate-blue/30 text-white transition-colors duration-150">Bathroom Fitters</Link>
                <Link href="/seo-for-plumbers/" className="block px-4 py-3 text-sm hover:bg-slate-blue/30 text-white transition-colors duration-150">SEO for Plumbers</Link>
              </div>
            </div>

            <Link href="/plumber-website-design-packages/" className="text-sm font-medium hover:text-amber transition-colors duration-150">Pricing</Link>
            <Link href="/blog/" className="text-sm font-medium hover:text-amber transition-colors duration-150">Blog</Link>
            <Link href="/contact/" className="text-sm font-medium hover:text-amber transition-colors duration-150">Contact</Link>
          </div>
          <div className="hidden md:flex items-center">
            <a 
              href="tel:03333356750"
              className="bg-amber text-navy-dark px-6 py-2.5 rounded-full font-semibold uppercase tracking-wide text-sm hover:bg-white transition-colors duration-150 shadow-md"
            >
              {process.env.NEXT_PUBLIC_PHONE || '0333 335 6750'}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile menu toggle button using a checkbox trick entirely with CSS classes in React */}
            <label htmlFor="mobile-menu-toggle" className="cursor-pointer p-2 text-white" aria-label="Open navigation menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
            
            <div className="fixed inset-0 bg-navy-dark z-40 hidden peer-checked:block pt-20 px-6 overflow-y-auto">
              <div className="flex justify-end absolute top-6 right-6">
                <label htmlFor="mobile-menu-toggle" className="cursor-pointer p-2 text-white" aria-label="Close navigation menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
              <div className="flex flex-col space-y-6 text-xl font-display mt-8">
                <Link href="/">Home</Link>
                <div className="text-amber text-sm font-sans font-bold uppercase tracking-widest mt-4">Services</div>
                <div className="flex flex-col space-y-4 pl-4 border-l border-slate-blue/30 text-lg">
                  <Link href="/gas-engineer-website-design/">Gas Engineers</Link>
                  <Link href="/heating-engineer-website-design/">Heating Engineers</Link>
                  <Link href="/bathroom-fitter-website-design/">Bathroom Fitters</Link>
                  <Link href="/seo-for-plumbers/">SEO for Plumbers</Link>
                </div>
                <Link href="/plumber-website-design-packages/">Pricing</Link>
                <Link href="/blog/">Blog</Link>
                <Link href="/contact/">Contact</Link>
                <a href="tel:03333356750" className="inline-block bg-amber text-navy-dark px-6 py-3 rounded-full font-semibold uppercase tracking-wide text-sm text-center mt-8">
                  {process.env.NEXT_PUBLIC_PHONE || '0333 335 6750'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
