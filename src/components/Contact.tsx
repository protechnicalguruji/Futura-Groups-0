import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function Contact() {
  const contactCards = [
    {
      icon: MapPin,
      title: 'Corporate HQ Office',
      details: [
        'Futura Groups Private Limited',
        'No. 456, 17th Cross, Sector 4, HSR Layout,',
        'Bangalore, Karnataka, India - 560102'
      ]
    },
    {
      icon: Phone,
      title: 'Sales & Allotments Hotline',
      details: [
        'Main: +91 80 4680 8080',
        'Mobile: +91 88845 44588',
        'Toll Free: 1800 120 4560'
      ]
    },
    {
      icon: Mail,
      title: 'Digital Support & Queries',
      details: [
        'Sales: sales@futuragroups.com',
        'General: info@futuragroups.com',
        'Legal Desk: legal@futuragroups.com'
      ]
    },
    {
      icon: Clock,
      title: 'Site Visit & Working Hours',
      details: [
        'Mon - Sat: 9:00 AM - 7:00 PM',
        'Sunday Site Tours: 10:00 AM - 6:00 PM',
        'Virtual Call Desk: 24/7 Available'
      ]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0D1321] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8 text-white">
            <div>
              <span className="font-sans font-bold text-xs tracking-wider text-brand-accent uppercase block mb-3">
                LET'S COORDINATE
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
                Secure Your Site-Visit & <span className="gold-gradient-text">Guided Tour Today</span>
              </h2>
              <p className="font-sans text-gray-400 mt-4 text-xs sm:text-sm leading-relaxed font-light">
                Futura Groups arranges complimentary luxury sedan pickups from your home or office in Bangalore for physical site inspection tours. Get in touch to schedule.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/5 bg-[#05080E]/70 hover:border-brand-accent/20 transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-brand-accent/15 border border-brand-accent/30 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5 text-brand-accent" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-white mb-2">
                      {card.title}
                    </h4>
                    <div className="space-y-1 text-xs text-gray-400 font-sans leading-relaxed font-light">
                      {card.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vector Map Placeholder */}
            <div className="rounded-2xl border border-white/5 overflow-hidden relative shadow-2xl h-52 sm:h-64 bg-[#05080E]/70">
              {/* Styled Vector Map Illustration */}
              <div className="absolute inset-0 bg-[#05080E] flex flex-col items-center justify-center p-6 text-center space-y-4">
                <MapPin className="w-7 h-7 text-brand-accent animate-bounce" />
                <div className="space-y-1">
                  <h5 className="font-serif font-bold text-sm text-white">HSR Layout, Sector 4</h5>
                  <p className="font-sans text-[11px] text-gray-400">Corporate HQ Office • Bangalore, Karnataka</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-[10px] tracking-wider uppercase py-2.5 px-5 rounded-lg shadow-lg shadow-brand-accent/20 transition-all hover:scale-102 cursor-pointer"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Customer Security Compliance callout */}
            <div className="bg-[#05080E]/40 rounded-2xl p-4 border border-brand-accent/20 flex items-center space-x-3 text-brand-accent">
              <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
              <p className="font-sans text-[11px] leading-relaxed text-gray-400 font-light">
                Your data is completely safe. <strong className="text-white">Futura Groups</strong> respects digital privacy; your contact numbers are never shared with third-party brokers.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-1 rounded-3xl bg-gradient-to-b from-brand-accent/25 to-transparent shadow-2xl">
              <EnquiryForm />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
