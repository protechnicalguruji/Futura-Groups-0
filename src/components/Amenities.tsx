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
        return <Building className="w-5 h-5 text-brand-accent" />;
      case 'Cable':
        return <Cable className="w-5 h-5 text-brand-accent" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-brand-accent" />;
      case 'TreePine':
        return <TreePine className="w-5 h-5 text-brand-accent" />;
      case 'Dribbble':
        return <Dribbble className="w-5 h-5 text-brand-accent" />;
      case 'Milestone':
        return <Milestone className="w-5 h-5 text-brand-accent" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-brand-accent" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-brand-accent" />;
      default:
        return <Check className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-[#0D1321] relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-brand-accent uppercase block mb-3">
            WORLD-CLASS ECOSYSTEM
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
            Comprehensive Infrastructure Engineered for <span className="gold-gradient-text">Elite Living</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-400 mt-4 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Every Futura Groups development incorporates standard infrastructure and premium leisure installations, delivering immediate comfort.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-accent text-white shadow-lg'
                  : 'bg-[#05080E]/60 text-gray-400 border border-white/5 hover:text-white'
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
              className="bg-[#05080E]/40 rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-brand-accent/20 hover:bg-[#05080E]/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-11 h-11 bg-[#0D1321] group-hover:bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 border border-white/5 transition-all">
                  {getIcon(amenity.iconName)}
                </div>

                <h4 className="font-serif font-bold text-lg text-white mb-3">
                  {amenity.name}
                </h4>

                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 font-light">
                  {amenity.description}
                </p>
              </div>

              {/* Tag category badge */}
              <span className="inline-block text-[10px] font-bold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded border border-brand-accent/20 uppercase tracking-wider font-sans self-start">
                {amenity.category}
              </span>
            </div>
          ))}
        </div>

        {/* Infrastructure Standard Assured Card */}
        <div className="mt-16 bg-[#05080E]/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5 text-white backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl text-left space-y-3">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-brand-accent">
              Standards Assured by Futura Groups
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We certify that land values are supported by sound physical structures. Unlike typical real estate brokers, Futura Groups manages, funds, and executes layout developments directly, guaranteeing absolute quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 shrink-0 font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              <span>BMRDA / STRR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              <span>Underground Pipelines</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              <span>LED Solar Streets</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              <span>Multi-tier Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
