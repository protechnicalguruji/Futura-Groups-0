import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            VERIFIED VOICES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight">
            Loved by Elite Engineers, Healthcare Specialists, & Investors
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-sm sm:text-base">
            Read first-hand accounts of families who secured their financial legacy and custom dream homes with the unmatched transparency of Futura Groups.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm relative flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              {/* Giant quote icon behind text */}
              <Quote className="absolute right-8 top-8 w-16 h-16 text-gray-50 pointer-events-none group-hover:text-brand-accent/5 transition-colors" />

              <div className="space-y-4">
                {/* Ratings */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-brand-accent fill-brand-accent" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed italic relative z-10">
                  "{test.feedback}"
                </p>
              </div>

              {/* Bio Footer info */}
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-6 mt-8">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-150 shadow-inner shrink-0"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-primary block leading-none">
                    {test.name}
                  </h4>
                  <span className="font-sans text-[11px] text-gray-400 block mt-1.5 leading-tight">
                    {test.role}
                  </span>
                  
                  {/* Bought Project Badge */}
                  <span className="inline-flex items-center text-[10px] font-bold text-brand-accent uppercase tracking-widest mt-2">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Verified Buyer: {test.project}
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
