export default function Blog() {
  const posts = [
    { title: 'Understanding RERA Regulations', excerpt: 'An essential guide for prospective land buyers on how to verify authentic RERA declarations in Karnataka.', date: 'Jun 25, 2026' },
    { title: 'Top Investment Corridors in Bangalore', excerpt: 'An in-depth analysis on why the North and East Bangalore bypass routes are yielding unmatched annual land appreciation.', date: 'Jun 15, 2026' },
    { title: 'The Value of Gated Layout Infrastructure', excerpt: 'Why purchasing in meticulously managed layouts guarantees superior long-term appreciation compared to unorganized plots.', date: 'Jun 01, 2026' },
  ];

  return (
    <section id="blog" className="py-24 bg-[#05080E] border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs tracking-wider text-brand-accent uppercase block mb-3">
            INSIGHTS & NEWS
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide">
            Latest Real Estate <span className="gold-gradient-text">Insights</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-[#0D1321]/50 p-8 rounded-3xl border border-white/5 shadow-2xl transition-all hover:border-brand-accent/20 group">
              <span className="text-xs font-sans text-brand-accent font-semibold tracking-wider uppercase block">{post.date}</span>
              <h3 className="font-serif font-bold text-lg text-white mt-3 mb-2 group-hover:text-brand-accent transition-colors">{post.title}</h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
