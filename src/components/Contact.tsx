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
        'Mobile: +91 9880 456 123',
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
                LET'S COORDINATE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight">
                Secure Your Site-Visit & Guided Layout Tour Today
              </h2>
              <p className="font-sans text-gray-500 mt-4 text-sm sm:text-base leading-relaxed">
                Futura Groups arranges complimentary luxury sedan pickups from your home or office in Bangalore for physical site inspection tours. Get in touch to schedule.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-gray-150 bg-gray-50/50 hover:bg-gray-50 hover:border-brand-accent/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-brand-primary mb-2">
                      {card.title}
                    </h4>
                    <div className="space-y-1 text-xs text-gray-500 font-sans leading-relaxed">
                      {card.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vector Map Placeholder */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden relative shadow-md h-52 sm:h-64 bg-gray-100">
              {/* Styled Vector Map Illustration */}
              <div className="absolute inset-0 bg-brand-primary/5 flex flex-col items-center justify-center p-6 text-center text-brand-primary space-y-4">
                <MapPin className="w-8 h-8 text-brand-accent animate-bounce" />
                <div className="space-y-1">
                  <h5 className="font-display font-bold text-sm">HSR Layout, Sector 4</h5>
                  <p className="font-sans text-[11px] text-gray-500">Corporate HQ Office • Bangalore, Karnataka</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-primary hover:bg-brand-secondary text-white font-sans font-semibold text-[10px] py-2 px-4 rounded-lg tracking-wider uppercase shadow"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Customer Security Compliance callout */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 flex items-center space-x-3 text-emerald-800">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="font-sans text-[11px] leading-relaxed">
                Your data is safe. **Futura Groups** respects digital privacy; your phone and email are never shared with 3rd-party brokers or external marketing agencies.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
}
