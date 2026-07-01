import { Home, Building, Store, Map } from 'lucide-react';

export default function PropertyCategories() {
  const categories = [
    { name: 'Villas', icon: Home },
    { name: 'Flats', icon: Building },
    { name: 'Commercial', icon: Store },
    { name: 'Plots', icon: Map },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-sm tracking-widest text-brand-accent uppercase block mb-3">
            EXPLORE
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-brand-primary tracking-wide">
            Property Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl text-center royal-shadow royal-shadow-hover hover:bg-brand-primary group cursor-pointer transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gray-50 group-hover:bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                <cat.icon className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-primary group-hover:text-white transition-colors">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
