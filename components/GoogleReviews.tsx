import reviewsData from '@/lib/reviews.json';

type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  location: string | null;
  source: string;
};

// Reviews are pulled from the Antek Automation Google Business Profile
// (Andy's agency) — refresh via `pull_reviews.py` in the Antek Rebrand repo
// and copy src/data/reviews.json here.
const reviews = (reviewsData.reviews as Review[]) || [];

/** Month + year only — avoids hydration drift and reads fine for old reviews. */
function monthYear(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span className="text-amber text-base tracking-wide" aria-label={`${full} out of 5 stars`}>
      {'★'.repeat(full)}
      <span className="text-white/20">{'★'.repeat(5 - full)}</span>
    </span>
  );
}

export default function GoogleReviews({ limit = 4 }: { limit?: number }) {
  const items = reviews.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <section className="bg-navy-dark py-20 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-amber font-bold uppercase tracking-wide text-sm mb-3">What clients say</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Rated {reviewsData.ratingAverageTotal.toFixed(1)} on Google
          </h2>
          <p className="text-lg text-white/70">
            Real reviews from clients Andy has built websites and automations for.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 lg:gap-8 items-stretch`}>
          {items.map(r => (
            <article
              key={r.id || r.author + r.date}
              className="bg-navy-card rounded-2xl border border-white/10 shadow-md p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <Stars rating={r.rating} />
                <span className="text-xs text-white/60 font-bold">{monthYear(r.date)}</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed flex-1 mb-4">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-white font-bold">&mdash; {r.author}</p>
                <span className="text-[11px] text-white/60 uppercase tracking-wide">via Google</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
