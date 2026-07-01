import { Home, Building, Store, Map } from 'lucide-react';

export default function PropertyCategories() {
  const categories = [
    { name: 'Villas', icon: Home, count: '12 Available' },
    { name: 'Flats', icon: Building, count: '18 Available' },
    { name: 'Commercial', icon: Store, count: '4 Available' },
    { name: 'Plots', icon: Map, count: '45 Available' },
  ];

  return (
    <section className="py-24 bg-[#05080E] border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-brand-accent uppercase block mb-3">
            EXPLORE PORTFOLIO
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide">
            Browse By <span className="gold-gradient-text">Property Categories</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#0D1321]/50 border border-white/5 p-8 rounded-3xl text-center shadow-xl hover:bg-[#0D1321] hover:border-brand-accent/30 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto bg-[#05080E]/70 group-hover:bg-brand-accent/10 border border-white/5 group-hover:border-transparent rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                <cat.icon className="w-6 h-6 text-brand-accent group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white group-hover:text-brand-accent transition-colors">{cat.name}</h3>
              <span className="font-sans text-[11px] text-gray-500 block mt-2 font-medium tracking-wide">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
