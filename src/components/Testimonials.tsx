import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#05080E] border-t border-b border-white/5 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-brand-accent uppercase block mb-3">
            VERIFIED VOICES
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
            Loved by Doctors, Specialists, & <span className="gold-gradient-text">Elite Investors</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-400 mt-4 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Read first-hand stories from families who secured their financial legacy and custom dream homes with the unmatched transparency of Futura Groups.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((test) => (
            <div
              key={test.id}
              className="bg-[#0D1321]/50 rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl relative flex flex-col justify-between group hover:border-brand-accent/20 transition-all duration-300"
            >
              {/* Giant quote icon behind text */}
              <Quote className="absolute right-8 top-8 w-16 h-16 text-white/[0.02] pointer-events-none group-hover:text-brand-accent/5 transition-colors" />

              <div className="space-y-4">
                {/* Ratings */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed italic relative z-10 font-light">
                  "{test.feedback}"
                </p>
              </div>

              {/* Bio Footer info */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6 mt-8">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-inner shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-white block leading-none">
                    {test.name}
                  </h4>
                  <span className="font-sans text-[11px] text-gray-400 block mt-1.5 leading-none">
                    {test.role}
                  </span>
                  
                  {/* Bought Project Badge */}
                  <span className="inline-flex items-center text-[10px] font-bold text-brand-accent uppercase tracking-wider mt-2.5">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Verified Allotment: {test.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
