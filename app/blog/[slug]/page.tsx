import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const posts = [
  {
    title: "Why Your Plumber Website Isn't Ranking on Google (And How to Fix It)",
    slug: 'plumber-website-not-ranking-google',
    excerpt: "Not seeing your website on page one? Learn the most common local SEO mistakes plumbers make — and the quick wins you can implement today to start generating organic traffic.",
    date: '15 Mar 2026',
    image: '/images/blog_seo_ranking.png',
    content: `
      <h2>The Local SEO Landscape for Plumbers</h2>
      <p>In the plumbing industry, Local SEO is your most powerful lead generation tool. When a homeowner has a burst pipe or a cold boiler, they don't look beyond the first few results on Google. If you aren't there, you're losing money every single day.</p>
      
      <h3>Mistake #1: Ignoring Your Google Business Profile</h3>
      <p>Your Google Business Profile (GBP) is often the first thing customers see. Many plumbers set it up once and forget it. To rank, you need to be active: respond to every review, upload fresh photos of your work weekly, and use the Google Posts feature to share updates and offers.</p>

      <h3>Mistake #2: Weak Service Pages</h3>
      <p>Does your website just have a single page listing your services? That's a huge mistake. Google wants to see specific authority. You should have dedicated pages for "Emergency Plumber", "Boiler Repair", "Gas Safety Certificates", and "Bathroom Fitting". Each of these should be optimized for your primary location.</p>

      <h3>The Fix: Focus on Local Citations</h3>
      <p>Consistency is key. Ensure your Name, Address, and Phone number (NAP) are identical across your website, GBP, and all directories like Yell, Checkatrade, and Rated People. This signals to Google that you are a legitimate, established local business.</p>
    `
  },
  {
    title: "What Should a Plumber Website Include in 2026?",
    slug: 'what-should-plumber-website-include',
    excerpt: "Having a contact form is no longer enough. From AI voice agents to Gas Safe verification loops, discover the features that turn standard websites into lead-generation machines.",
    date: '22 Mar 2026',
    image: '/images/blog_website_features.png',
    content: `
      <h2>Moving Beyond the Digital Business Card</h2>
      <p>The days when a simple five-page website was enough to win jobs are long gone. In 2026, your website needs to be an interactive part of your sales team. It needs to solve problems for your customers before you even pick up the phone.</p>

      <h3>1. Automated AI Booking</h3>
      <p>Customers now expect instant gratification. If they have to wait for a call back, they've already moved on to the next plumber. Integrating an AI chatbot or voice agent that can qualify a job and book it directly into your calendar is no longer a luxury—it's a necessity.</p>

      <h3>2. Trust Signals and Verification Loops</h3>
      <p>Trust is everything in the trades. Your Gas Safe number shouldn't just be tucked away in the footer. It should be prominently displayed with a direct link to the Gas Safe register. Use real-time review widgets that pull your latest 5-star ratings directly from Google to build instant credibility.</p>

      <h3>3. Mobile-First Emergency Interface</h3>
      <p>Over 80% of plumbing searches are performed on mobile devices under stress. Your site must load in under 2 seconds and have a persistent "Click to Call" button that follows the user down the page. If the user has to hunt for your phone number, you've already lost the lead.</p>
    `
  },
  {
    title: "Google Business Profile for Plumbers: A Complete Setup Guide",
    slug: 'google-business-profile-plumbers-guide',
    excerpt: "Your GBP is arguably more important than your website for local map pack rankings. Follow our comprehensive tutorial to establish your profile correctly and dominate local search.",
    date: '1 Apr 2026',
    image: '/images/blog_gbp_guide.png',
    content: `
      <h2>The Core of Your Local Leads</h2>
      <p>For a local plumber, the "Map Pack" (those top 3 results on a map) is where the majority of calls come from. Ranking in the Map Pack is almost entirely determined by how well you manage your Google Business Profile.</p>

      <h3>Optimization Step 1: Categories Matter</h3>
      <p>Don't just set your category to "Plumber". Use the secondary categories to tell Google about everything else you do, such as "Heating Contractor", "Gas Engineer", and "Drainage Service". This expands the range of searches your profile will show up for.</p>

      <h3>Optimization Step 2: The Power of Reviews</h3>
      <p>Reviews are the #1 ranking factor for local maps. But it's not just the quantity—it's the frequency and keywords. Encourage your customers to mention the specific service you provided (e.g., "Great job on the boiler installation") and the area you were in. This helps Google associate your business with those terms.</p>

      <h3>Optimization Step 3: Use Q&A to Your Advantage</h3>
      <p>Did you know you can ask and answer your own questions on your GBP? This is a great way to address common customer concerns like "Do you offer emergency 24/7 call-outs?" or "Are you Gas Safe registered?". Not only does this help customers, it also gives Google more context about your business.</p>
    `
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-light-gray">
      {/* Blog Hero */}
      <header className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy-dark">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-amber font-bold mb-6 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/80 font-medium uppercase tracking-widest text-sm">
            <span>Posted on {post.date}</span>
            <span className="w-1 h-1 bg-amber rounded-full"></span>
            <span>By Specialist Team</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-blue/10">
          <div 
            className="max-w-none 
              [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-navy-dark [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:first:mt-0
              [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-navy-dark [&_h3]:text-2xl [&_h3]:mt-10 [&_h3]:mb-4
              [&_p]:text-slate-blue [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-slate-blue
              [&_li]:mb-2 [&_li]:text-lg
              [&_strong]:text-navy-dark [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 pt-16 border-t border-slate-blue/10 text-center">
            <h3 className="text-2xl font-display font-bold text-navy-dark mb-6">Want results like this for your business?</h3>
            <p className="text-slate-blue mb-10 max-w-2xl mx-auto italic text-lg">
              "We don't just build websites; we build lead-generation machines designed exclusively for plumbers and heating engineers across the UK."
            </p>
            <Link href="/contact/" className="inline-block bg-amber text-navy-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
              Get a Free Quote and Strategy Map →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
