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
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            WHAT WE EXCEL IN
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight">
            End-to-End Solutions Crafted for Exceptional Property Ownership
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-base sm:text-lg">
            From discovering prime virgin plots in Bangalore\'s boomtowns to completing custom architectural constructions and exquisite modular interiors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-350 hover:bg-brand-primary hover:text-white hover:shadow-2xl hover:-translate-y-1.5 group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              {/* Subtle visual decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl group-hover:bg-brand-accent/10 transition-all" />

              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-150 group-hover:bg-brand-accent group-hover:text-white group-hover:border-transparent transition-all">
                  {getIcon(service.iconName, 'w-6 h-6')}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-brand-primary mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* View details CTA link */}
              <div className="flex items-center text-brand-accent font-sans font-semibold text-sm group-hover:text-brand-accent transition-colors pt-2">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="bg-brand-primary/5 rounded-2xl p-6 sm:p-8 mt-16 flex flex-col md:flex-row items-center justify-between border border-brand-primary/10 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-brand-primary">Need a complete turnkey package?</h4>
              <p className="font-sans text-sm text-gray-500">Combine plot acquisition, legal registration, and villa construction for exclusive cash savings.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiryModal('Full Turnkey Package')}
            className="bg-brand-primary hover:bg-brand-secondary text-white font-sans font-semibold text-sm px-6 py-3 rounded-xl shadow-md cursor-pointer transition-all shrink-0"
          >
            Request custom package quote
          </button>
        </div>
      </div>

      {/* Interactive Detail Modal / Overlay Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <div
            className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Card */}
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative z-10 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto animate-zoom-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-brand-accent/15 rounded-xl flex items-center justify-center text-brand-accent">
                {getIcon(selectedService.iconName, 'w-6 h-6')}
              </div>
              <div>
                <span className="text-[10px] tracking-widest font-sans font-semibold text-brand-accent uppercase block">
                  Service Portfolio
                </span>
                <h3 className="font-display font-bold text-2xl text-brand-primary">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Long Description */}
            <div className="font-sans text-sm text-gray-600 leading-relaxed space-y-4 mb-8 border-b border-gray-100 pb-6">
              <p>{selectedService.longDescription}</p>
            </div>

            {/* Key Features Bullet List */}
            <div className="mb-8">
              <h4 className="font-display font-bold text-sm text-brand-primary uppercase tracking-wider mb-4">
                What is included in this service:
              </h4>
              <ul className="space-y-3.5">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-gray-700 leading-normal">{feat}</span>
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
                className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-semibold text-sm py-3.5 rounded-xl shadow-md cursor-pointer text-center"
              >
                Enquire about {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="sm:px-6 bg-gray-100 hover:bg-gray-200 text-gray-600 font-sans font-semibold text-sm py-3.5 rounded-xl cursor-pointer text-center"
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
