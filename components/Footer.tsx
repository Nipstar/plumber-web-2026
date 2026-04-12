import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-light-gray py-16 border-t border-slate-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Services */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-sm text-white/70 hover:*:text-amber">
              <li><Link href="/" className="transition-colors duration-150">Web Design for Plumbers</Link></li>
              <li><Link href="/gas-engineer-website-design/" className="transition-colors duration-150">Gas Engineer Web Design</Link></li>
              <li><Link href="/heating-engineer-website-design/" className="transition-colors duration-150">Heating Engineer Web Design</Link></li>
              <li><Link href="/bathroom-fitter-website-design/" className="transition-colors duration-150">Bathroom Fitter Web Design</Link></li>
              <li><Link href="/seo-for-plumbers/" className="transition-colors duration-150">SEO for Plumbers</Link></li>
            </ul>
          </div>

          {/* Column 2: Locations */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Locations</h3>
            <ul className="space-y-4 text-sm text-white/70 hover:*:text-amber">
              <li><Link href="/web-design-plumbers-london/" className="transition-colors duration-150">London</Link></li>
              <li><Link href="/web-design-plumbers-manchester/" className="transition-colors duration-150">Manchester</Link></li>
              <li><Link href="/web-design-plumbers-birmingham/" className="transition-colors duration-150">Birmingham</Link></li>
              <li><Link href="/web-design-plumbers-liverpool/" className="transition-colors duration-150">Liverpool</Link></li>
              <li><Link href="/web-design-plumbers-portsmouth/" className="transition-colors duration-150">Portsmouth</Link></li>
              <li><Link href="/web-design-plumbers-andover/" className="transition-colors duration-150">Andover</Link></li>
            </ul>
          </div>

          {/* Column 3: Blog */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Blog</h3>
            <ul className="space-y-4 text-sm text-white/70 hover:*:text-amber">
              <li><Link href="/blog/plumber-website-not-ranking-google/" className="transition-colors duration-150">Why Your Site Isn't Ranking</Link></li>
              <li><Link href="/blog/what-should-plumber-website-include/" className="transition-colors duration-150">What to Include in 2026</Link></li>
              <li><Link href="/blog/google-business-profile-plumbers-guide/" className="transition-colors duration-150">GBP Setup Guide</Link></li>
              <li><Link href="/blog/" className="transition-colors duration-150 text-amber">View all posts →</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href={`tel:${(process.env.NEXT_PUBLIC_PHONE || '03333356750').replace(/\s+/g, '')}`} className="hover:text-amber transition-colors duration-150">
                  {process.env.NEXT_PUBLIC_PHONE || '0333 335 6750'}
                </a>
              </li>
              <li>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hello@plumberwebdesign.co.uk'}`} className="hover:text-amber transition-colors duration-150">
                  {process.env.NEXT_PUBLIC_EMAIL || 'hello@plumberwebdesign.co.uk'}
                </a>
              </li>
            </ul>
            
            {/* Social Links (Dynamic) */}
            <div className="flex space-x-4 mt-8">
              {process.env.NEXT_PUBLIC_SOCIAL_FB && (
                <a href={process.env.NEXT_PUBLIC_SOCIAL_FB} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-amber transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 PlumberWebDesign.co.uk</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-amber transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-amber transition-colors">Terms of Business</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
