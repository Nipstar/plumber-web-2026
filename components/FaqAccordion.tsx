export default function FaqAccordion({ items }: { items: Array<{question: string, answer: string}> }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details key={i} className="group bg-navy-card rounded-xl border border-slate-blue/20 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="p-6 cursor-pointer flex justify-between items-center text-white font-medium hover:text-amber transition-colors">
            {item.question}
            <span className="flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-slate-blue/20 text-white group-hover:bg-amber group-hover:text-navy-dark transition-all duration-200 group-open:rotate-180">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-white/80 leading-relaxed border-t border-slate-blue/10">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
