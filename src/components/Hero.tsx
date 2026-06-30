import { useState, useEffect } from 'react';
import { Compass, CheckCircle, ArrowRight, ShieldAlert, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';

interface HeroProps {
  onSearch: (filters: { location: string; status: string }) => void;
  onOpenEnquiry: () => void;
}

export default function Hero({ onSearch, onOpenEnquiry }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Crafting Premium Spaces Where Dreams Take Root',
      subtitle: 'PRIME GATED COMMUNITY PLOTS',
      description: 'Discover premium RERA-approved residential villa plots in Bangalore\'s highest appreciating corridors, complete with luxurious clubhouse, landscaped parks, and underground utilities.',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1920&q=80',
    },
    {
      title: 'Build Your Custom Bespoke Luxury Villa',
      subtitle: 'TURNKEY HOME CONSTRUCTION',
      description: 'From concrete foundation to modular designer kitchens, we build your custom dream home with absolute transparency, high-grade specifications, and a 10-year warranty.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    },
    {
      title: 'The Sphere of Comfort, Quality & Integrity',
      subtitle: 'SECURE LAND INVESTMENTS',
      description: 'Futura Groups ensures 100% legally clear, litigation-free titles, multi-tier security layers, and STRR/BMRDA layouts engineered for immediate construction.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Filters State
  const [locationFilter, setLocationFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleSearchClick = () => {
    onSearch({ location: locationFilter, status: statusFilter });
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      const yOffset = -80;
      const y = projectsSec.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const uniqueLocations = Array.from(new Set(PROJECTS_DATA.map(p => p.location)));
  const uniqueStatuses = Array.from(new Set(PROJECTS_DATA.map(p => p.status)));

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden bg-brand-primary">
      {/* Background Image Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24 z-10">
        <div className="max-w-3xl text-left">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/45 px-3 py-1.5 rounded-full mb-6">
            <Compass className="w-4 h-4 text-brand-accent animate-spin-slow" />
            <span className="font-sans font-semibold text-xs tracking-wider text-brand-accent uppercase">
              {slides[currentSlide].subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={onOpenEnquiry}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold font-sans px-8 py-4 rounded-xl shadow-lg shadow-brand-accent/30 cursor-pointer flex items-center group transition-all"
            >
              Get Brochure
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const aboutSec = document.getElementById('about');
                if (aboutSec) {
                  const yOffset = -80;
                  const y = aboutSec.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="bg-white/10 hover:bg-white/15 text-white font-semibold font-sans px-8 py-4 rounded-xl border border-white/20 cursor-pointer transition-all"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Real Estate Quick Filter Form (Responsive layout) */}
        <div className="absolute bottom-12 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 max-w-5xl mx-auto bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-6 border border-gray-100 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">
                Desired Corridor / Area
              </label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-800 outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-sans"
              >
                <option value="">All Regions / Corridors</option>
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-sans">
                Development Stage
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-800 outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-sans"
              >
                <option value="">All Statuses</option>
                {uniqueStatuses.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearchClick}
              className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold font-sans py-3.5 rounded-lg text-sm tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Indicator slides dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-15 hidden lg:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-10 rounded-full transition-all cursor-pointer ${
              i === currentSlide ? 'bg-brand-accent h-14' : 'bg-white/30 hover:bg-white/55'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
