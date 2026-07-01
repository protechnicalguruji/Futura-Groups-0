import { useState, useEffect } from 'react';
import { Compass, CheckCircle, ArrowRight, ShieldAlert, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import EnquiryForm from './EnquiryForm';

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
  const [typeFilter, setTypeFilter] = useState('Buy');
  const [budgetFilter, setBudgetFilter] = useState('');

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
  const budgetOptions = ['< 50 Lakhs', '50 Lakhs - 1 Cr', '> 1 Cr'];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/40 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(184,144,71,0.1)]">
              <Compass className="w-4 h-4 text-brand-accent animate-spin-slow" />
              <span className="font-sans font-bold text-[10px] tracking-widest text-brand-accent uppercase">
                {slides[currentSlide].subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-wide leading-[1.15] drop-shadow-md">
              {slides[currentSlide].title.split(' ').map((word, i) => {
                // Highlight words like 'Premium', 'Bespoke', 'Comfort', 'Dreams', 'Luxury', 'Secure', 'Custom', 'Elite'
                const highlightWords = ['Premium', 'Bespoke', 'Comfort', 'Dreams', 'Luxury', 'Secure', 'Custom', 'Elite'];
                const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
                return isHighlight ? (
                  <span key={i} className="gold-gradient-text mr-2">{word} </span>
                ) : (
                  <span key={i} className="mr-2">{word} </span>
                );
              })}
            </h1>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl font-light">
              {slides[currentSlide].description}
            </p>

            {/* Interactive Badge Pills */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {[
                { icon: '⭐', text: '4.9/5 Google Rating' },
                { icon: '👥', text: '500+ Gated Plot Owners' },
                { icon: '🛡️', text: 'RERA & STRR Approved' },
                { icon: '🏦', text: 'Pre-Approved by Major Banks' },
                { icon: '⚡', text: 'Immediate Registration' }
              ].map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="inline-flex items-center space-x-1.5 border border-white/5 bg-white/[0.04] backdrop-blur-sm rounded-full py-1.5 px-3.5 text-xs text-gray-300 font-sans tracking-wide"
                >
                  <span className="text-xs">{badge.icon}</span>
                  <span className="font-medium text-[10px] sm:text-xs">{badge.text}</span>
                </span>
              ))}
            </div>

            {/* Small Action Button for mobile */}
            <div className="flex flex-wrap gap-3 pt-2 lg:hidden">
              <button
                onClick={onOpenEnquiry}
                className="bg-brand-accent hover:bg-brand-accent/95 text-white font-bold font-sans px-6 py-3 rounded-xl shadow-lg shadow-brand-accent/30 cursor-pointer flex items-center group transition-all text-xs"
              >
                Get Price Brochure
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (Enquiry Form) */}
          <div className="lg:col-span-5 hidden lg:block xl:pl-6">
            <div className="p-1 rounded-3xl bg-gradient-to-b from-brand-accent/25 via-white/5 to-white/0 shadow-2xl">
              <EnquiryForm preFilledInterest={slides[currentSlide].subtitle} />
            </div>
          </div>

        </div>
      </div>

        {/* Real Estate Quick Filter Form (Responsive layout) */}
        <div className="absolute bottom-12 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 max-w-5xl mx-auto bg-[#0D1321]/95 backdrop-blur shadow-2xl rounded-3xl p-6 hidden md:block border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                Looking For
              </label>
              <div className="flex bg-[#05080E] p-1 rounded-lg border border-white/5">
                {['Buy', 'Rent'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all cursor-pointer ${typeFilter === type ? 'bg-brand-accent text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                Area
              </label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full bg-[#05080E] border border-white/10 rounded-lg py-3 px-4 text-sm font-medium text-white outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-sans animate-fade-in"
              >
                <option value="" className="bg-[#0D1321]">Any</option>
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#0D1321]">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-sans">
                Budget
              </label>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full bg-[#05080E] border border-white/10 rounded-lg py-3 px-4 text-sm font-medium text-white outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-sans animate-fade-in"
              >
                <option value="" className="bg-[#0D1321]">Any</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b} className="bg-[#0D1321]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearchClick}
              className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold font-sans py-3.5 rounded-lg text-sm tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Search Options</span>
            </button>
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
