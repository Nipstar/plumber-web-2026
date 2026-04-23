import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Terms of Business | PlumberWebDesign.co.uk' },
  description: 'Terms of business for PlumberWebDesign.co.uk. Outlines our service agreement, payment terms, intellectual property, and cancellation policy.',
  alternates: { canonical: 'https://plumberwebdesign.co.uk/terms/' },
};

export default function TermsPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <Breadcrumbs items={[{ label: 'Terms of Business', href: '/terms/' }]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Terms of Business</h1>
          <p className="text-light-gray/80">Last updated: 12 April 2026</p>
        </div>
      </div>

      <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">1. Agreement Overview</h2>
            <p className="text-slate-blue leading-relaxed">
              These terms govern the relationship between PlumberWebDesign.co.uk ("we", "us") and you ("the client") when you purchase any of our web design packages or add-on services. By placing an order or signing a proposal, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">2. Services</h2>
            <p className="text-slate-blue leading-relaxed">
              We provide website design, development, hosting, and optional add-on services (AI Chatbot, AI Voice Agent) as described on our packages page. The specific deliverables for your project will be confirmed in your proposal or order confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">3. Pricing and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue">
              <li>Website packages are billed monthly at the rate agreed at sign-up.</li>
              <li>AI add-on services include a one-off setup fee plus a monthly recurring charge.</li>
              <li>All prices are in GBP and inclusive of VAT where applicable.</li>
              <li>Payment is due on the date specified in your invoice. We accept bank transfer and major debit/credit cards.</li>
              <li>Late payments may incur a suspension of services after 14 days' written notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">4. Project Timeline</h2>
            <p className="text-slate-blue leading-relaxed">
              We aim to deliver your initial website within 2-3 weeks of receiving all required content and sign-off on the design. Timelines may vary depending on project complexity and client responsiveness. Delays caused by late content or feedback from the client will not be our responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">5. Client Responsibilities</h2>
            <p className="text-slate-blue leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue">
              <li>Provide all content, images, and brand materials required for the project in a timely manner</li>
              <li>Review and provide feedback on drafts within 5 working days</li>
              <li>Ensure all content you provide is accurate, lawful, and does not infringe third-party rights</li>
              <li>Maintain up-to-date payment details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">6. Intellectual Property</h2>
            <p className="text-slate-blue leading-relaxed">
              Upon full payment, you own the website design and content we create for you. The website is fully transferable with no lock-in. We retain the right to display the work in our portfolio unless you request otherwise in writing. Third-party assets (stock images, fonts, plugins) remain subject to their respective licences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">7. Hosting and Maintenance</h2>
            <p className="text-slate-blue leading-relaxed">
              All packages include hosting and SSL for the duration of your subscription. Hosting renews annually after the first year. We perform routine maintenance and security updates. We are not liable for downtime caused by third-party hosting infrastructure or force majeure events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">8. Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-blue">
              <li>You may cancel your subscription at any time with 30 days' written notice.</li>
              <li>Upon cancellation, we will provide all website files and assist with migration if requested.</li>
              <li>No refunds are given for partial months or unused services.</li>
              <li>AI add-on setup fees are non-refundable once the service has been configured.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-blue leading-relaxed">
              Our total liability to you for any claim arising from our services shall not exceed the total fees paid by you in the 12 months preceding the claim. We are not liable for indirect, consequential, or incidental damages, loss of profits, or loss of data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">10. Governing Law</h2>
            <p className="text-slate-blue leading-relaxed">
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-navy-dark mb-4">11. Contact</h2>
            <p className="text-slate-blue leading-relaxed">
              If you have questions about these terms, contact us at hello@plumberwebdesign.co.uk or call 0333 335 6750.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
