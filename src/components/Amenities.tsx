import { useState } from 'react';
import { AMENITIES_DATA } from '../data/mockData';
import { Building, Cable, ShieldAlert, TreePine, Dribbble, Milestone, Smile, Droplet, Check } from 'lucide-react';

export default function Amenities() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Infrastructure', 'Clubhouse & Leisure', 'Sports & Health', 'Security & Green'];

  const filteredAmenities = activeCategory === 'All'
    ? AMENITIES_DATA
    : AMENITIES_DATA.filter(a => a.category === activeCategory);

  // Map icon names to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="w-6 h-6 text-brand-accent" />;
      case 'Cable':
        return <Cable className="w-6 h-6 text-brand-accent" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-brand-accent" />;
      case 'TreePine':
        return <TreePine className="w-6 h-6 text-brand-accent" />;
      case 'Dribbble':
        return <Dribbble className="w-6 h-6 text-brand-accent" />;
      case 'Milestone':
        return <Milestone className="w-6 h-6 text-brand-accent" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-brand-accent" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-brand-accent" />;
      default:
        return <Check className="w-6 h-6 text-brand-accent" />;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            WORLD-CLASS ECOSYSTEM
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight">
            Comprehensive Infrastructure Engineered for Sophisticated Living
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-base">
            Every Futura Groups layout is developed with a standardized blueprint of top-tier utilities and leisure installations, ensuring immediate convenience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-brand-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-white group-hover:bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-all">
                  {getIcon(amenity.iconName)}
                </div>

                <h4 className="font-display font-bold text-lg text-brand-primary mb-3">
                  {amenity.name}
                </h4>

                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-4">
                  {amenity.description}
                </p>
              </div>

              {/* Tag category badge */}
              <span className="inline-block text-[10px] font-semibold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-md uppercase tracking-wider font-sans self-start">
                {amenity.category}
              </span>
            </div>
          ))}
        </div>

        {/* Infrastructure Standard callout */}
        <div className="mt-16 bg-brand-primary rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl text-left space-y-3">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-accent">
              Standards Assured by Futura Groups
            </h3>
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              We understand that the value of land lies in its physical support structures. Unlike typical real estate brokers, Futura Groups manages, funds, and executes 100% of the layouts in-house, certifying absolute engineering controls.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 shrink-0 font-sans font-semibold text-xs tracking-wider uppercase text-gray-100">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-accent rounded-full" />
              <span>BMRDA / STRR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-accent rounded-full" />
              <span>Underground Pipelines</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-accent rounded-full" />
              <span>LED Solar Streets</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-accent rounded-full" />
              <span>Multi-tier Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
