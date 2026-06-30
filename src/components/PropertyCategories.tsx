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
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            EXPLORE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight">
            Property Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl text-center hover:bg-brand-primary group transition-colors">
              <cat.icon className="w-12 h-12 mx-auto text-brand-accent mb-6 group-hover:text-white" />
              <h3 className="font-display font-bold text-xl text-brand-primary group-hover:text-white">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
