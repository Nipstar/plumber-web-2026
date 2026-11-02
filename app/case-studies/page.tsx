import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleReviews from '@/components/GoogleReviews';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Plumber Website Case Studies | PlumberWebDesign.co.uk',
  description: 'Real websites we have built for UK plumbing and heating businesses, with what was asked for, what we built and how it went.',
  path: '/case-studies/',
});

export default function CaseStudiesPage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies/' }]} />
      <div className="py-24 bg-navy-dark text-white border-b border-slate-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Case studies</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Real client websites, what they asked for, and what we built.</p>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies/we-plumb-it/"
          className="group block bg-white rounded-2xl overflow-hidden border border-slate-blue/10 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-navy-dark">
            <Image
              src="/case-studies/we-plumb-it-home-desktop.webp"
              alt="We Plumb It homepage on desktop: dark hero reading 'Your local plumber in Cheltenham' with a quote form on the right"
              width={1440}
              height={900}
              className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-300"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <div className="p-8">
            <p className="text-amber text-sm font-bold uppercase tracking-wider mb-2">Plumbing &amp; heating &middot; Cheltenham</p>
            <h2 className="font-display text-2xl font-bold text-navy-dark mb-3">How a brand-new Cheltenham plumber got a fast website in 16 days</h2>
            <p className="text-slate-blue mb-4">We Plumb It Ltd needed a professional five-page site quickly. First email to live in 16 days, on a £600 Starter Build.</p>
            <span className="inline-flex items-center gap-1 font-bold text-navy-dark group-hover:text-amber transition-colors">Read the case study <span aria-hidden="true">&rarr;</span></span>
          </div>
        </Link>
      </div>
      <GoogleReviews />
    </div>
  );
}
