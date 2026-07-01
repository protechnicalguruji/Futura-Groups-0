import { useState } from 'react';
import { Map, Home, FileCheck, Palette, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { Service } from '../types';

interface ServicesProps {
  onOpenEnquiryModal: (serviceTitle: string) => void;
}

export default function Services({ onOpenEnquiryModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon strings to actual components
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Map':
        return <Map className={className} />;
      case 'Home':
        return <Home className={className} />;
      case 'FileCheck':
        return <FileCheck className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#05080E] relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-bold text-xs tracking-widest text-brand-accent uppercase block mb-3">
            WHAT WE EXCEL IN
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
            End-to-End Solutions for <span className="gold-gradient-text">Premium Real Estate</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-400 mt-4 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            From identifying premium gated layouts to executing custom structural villa architecture and luxury modular interiors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#0D1321]/50 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-350 hover:bg-[#0D1321] hover:border-brand-accent/30 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              {/* Subtle visual decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl group-hover:bg-brand-accent/10 transition-all" />

              <div>
                {/* Icon Wrapper */}
                <div className="w-11 h-11 bg-[#05080E]/70 text-brand-accent rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-brand-accent group-hover:text-white group-hover:border-transparent transition-all">
                  {getIcon(service.iconName, 'w-5 h-5')}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              {/* View details CTA link */}
              <div className="flex items-center text-brand-accent font-sans font-bold text-xs tracking-wider uppercase pt-2">
                <span>View Portfolio Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="bg-[#0D1321]/50 rounded-3xl p-6 sm:p-8 mt-16 flex flex-col md:flex-row items-center justify-between border border-white/5 gap-6 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-brand-accent/15 border border-brand-accent/30 rounded-lg flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-brand-accent" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-white">Looking for a complete turnkey estimate package?</h4>
              <p className="font-sans text-xs text-gray-400 mt-1 font-light">Combine layout reservation, stamp conveyancing, and custom villa construction for guaranteed savings.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiryModal('Full Turnkey Package')}
            className="bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-xs tracking-wide uppercase px-6 py-3.5 rounded-xl shadow-lg shadow-brand-accent/25 cursor-pointer transition-all shrink-0 hover:scale-102"
          >
            Request Turnkey Package Estimate
          </button>
        </div>
      </div>

      {/* Interactive Detail Modal / Overlay Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <div
            className="absolute inset-0 bg-[#05080E]/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Card */}
          <div className="bg-[#0D1321] rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative z-10 shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto animate-zoom-in text-white">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-brand-accent/15 border border-brand-accent/30 rounded-xl flex items-center justify-center text-brand-accent">
                {getIcon(selectedService.iconName, 'w-5 h-5')}
              </div>
              <div>
                <span className="text-[10px] tracking-widest font-sans font-bold text-brand-accent uppercase block">
                  Service Portfolio
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Long Description */}
            <div className="font-sans text-sm text-gray-300 leading-relaxed space-y-4 mb-8 border-b border-white/5 pb-6 font-light">
              <p>{selectedService.longDescription}</p>
            </div>

            {/* Key Features Bullet List */}
            <div className="mb-8">
              <h4 className="font-serif font-bold text-xs text-brand-accent uppercase tracking-wider mb-4">
                What is included in this service:
              </h4>
              <ul className="space-y-3.5">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-gray-300 leading-normal font-light">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenEnquiryModal(title);
                }}
                className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-xs tracking-wide uppercase py-4 rounded-xl shadow-lg shadow-brand-accent/25 cursor-pointer text-center hover:scale-102 transition-all"
              >
                Enquire about {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="sm:px-6 bg-white/5 hover:bg-white/10 text-gray-300 font-sans font-semibold text-xs py-4 rounded-xl cursor-pointer text-center border border-white/5 transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
