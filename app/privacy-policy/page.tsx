import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Privacy Policy | PlumberWebDesign.co.uk' },
  description: 'Privacy policy for PlumberWebDesign.co.uk. How we collect, use, and protect your personal data when you use our website and services.',
  alternates: { canonical: 'https://www.plumberwebdesign.co.uk/privacy-policy/' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy/' }]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Privacy Policy</h1>
          <p className="text-light-gray/80">Last updated: 12 April 2026</p>
        </div>
      </div>

      <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">1. Who We Are</h2>
            <p className="text-slate-blue leading-relaxed">
              PlumberWebDesign.co.uk ("we", "us", "our") is a web design agency specialising in websites for UK plumbers, gas engineers, and heating engineers. Our contact email is hello@plumberwebdesign.co.uk and our telephone number is 0333 335 6750.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">2. What Data We Collect</h2>
            <p className="text-slate-blue leading-relaxed mb-4">When you use our website or contact us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue">
              <li>Your name, email address, phone number, and business name (via our contact form)</li>
              <li>Your main service area and package interest</li>
              <li>Technical data such as IP address, browser type, and pages visited (via Google Analytics)</li>
              <li>Any additional information you provide in messages to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-blue leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue">
              <li>Respond to your enquiry and provide a quote</li>
              <li>Deliver the web design services you have purchased</li>
              <li>Send you project updates and relevant service information</li>
              <li>Improve our website and understand how visitors use it</li>
            </ul>
            <p className="text-slate-blue leading-relaxed mt-4">
              We will never sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">4. Legal Basis for Processing</h2>
            <p className="text-slate-blue leading-relaxed">
              We process your data on the basis of legitimate interest (responding to enquiries), contractual necessity (delivering services you have purchased), and consent (where you have opted in to marketing communications). You may withdraw consent at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">5. Cookies and Analytics</h2>
            <p className="text-slate-blue leading-relaxed">
              We use Google Analytics 4 to understand how visitors interact with our website. GA4 collects anonymised usage data including pages visited, time on site, and referral source. No personally identifiable information is stored in cookies. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">6. Data Retention</h2>
            <p className="text-slate-blue leading-relaxed">
              We retain contact form submissions for up to 24 months from the date of your last interaction with us. If you become a client, we retain project-related data for the duration of our business relationship plus 6 years as required by UK tax law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">7. Your Rights</h2>
            <p className="text-slate-blue leading-relaxed mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>
            <p className="text-slate-blue leading-relaxed mt-4">
              To exercise any of these rights, contact us at hello@plumberwebdesign.co.uk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">8. Third-Party Services</h2>
            <p className="text-slate-blue leading-relaxed">
              Our website is hosted on Cloudflare Pages. Form submissions may be processed via third-party webhook services. We ensure all third-party processors comply with UK data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-blue leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
