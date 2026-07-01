export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80', tag: 'Luxury Plots' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', tag: 'Bespoke Villas' },
    { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', tag: 'Aesthetic Parks' },
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80', tag: 'Eco Clubhouse' },
    { url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80', tag: 'Modern Streets' },
    { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', tag: 'Sanctuary Gates' },
  ];

  return (
    <section className="py-24 bg-[#05080E] border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs tracking-wider text-brand-accent uppercase block mb-3">
            GALLERY
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide">
            Our Gated <span className="gold-gradient-text">Masterpiece Portfolios</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group border border-white/5 shadow-2xl aspect-[4/3]">
              <img
                src={img.url}
                alt="Gallery Portfolio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif font-bold text-sm sm:text-base tracking-wide border-l-2 border-brand-accent pl-3">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
