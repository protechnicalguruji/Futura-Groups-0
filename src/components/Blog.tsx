export default function Blog() {
  const posts = [
    { title: 'Understanding RERA Regulations', excerpt: 'A guide for new homebuyers on why RERA is crucial.', date: 'Jun 25, 2026' },
    { title: 'Top Investment Corridors in Bangalore', excerpt: 'Why North and East Bangalore are leading in appreciation.', date: 'Jun 15, 2026' },
    { title: 'The Benefits of Gated Communities', excerpt: 'Why gated layouts offer better lifestyle and security.', date: 'Jun 01, 2026' },
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            INSIGHTS & NEWS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight">
            Latest Real Estate Insights
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm">
              <span className="text-xs font-sans text-gray-400">{post.date}</span>
              <h3 className="font-display font-bold text-xl text-brand-primary mt-3 mb-2">{post.title}</h3>
              <p className="font-sans text-sm text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
