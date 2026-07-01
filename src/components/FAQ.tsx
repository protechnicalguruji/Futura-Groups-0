import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    q: 'Are all Futura Groups layouts RERA approved?',
    a: 'Yes, every single plot and villa community under Futura Groups is strictly RERA registered and certified, guaranteeing complete structural transparency and absolute compliance with regional authority regulations.'
  },
  {
    q: 'Do you facilitate bank loan applications?',
    a: 'Absolutely. We hold long-standing corporate relationships with major nationalized and private banking institutions (including SBI, HDFC, and ICICI) to provide fast-tracked plot and home build loans for our buyers.'
  },
  {
    q: 'What is the standard timeframe for layout allotment registration?',
    a: 'Registration can be executed instantly upon initial token booking confirmation. Our legal concierge desk prepares all title reports, occupancy clearances, and draft deeds to ensure a swift handover.'
  },
  {
    q: 'Do you provide structural guarantees on custom villas?',
    a: 'Yes, we provide up to 10 years of structural engineering warranty for every bespoke villa built under our Turnkey Construction packages, alongside continuing layout estate maintenance.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0D1321] border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs tracking-wider text-brand-accent uppercase block mb-3">
            KNOW YOUR PROPERTY
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-white tracking-wide">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent/40 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-[#05080E]/40">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 bg-[#05080E]/10 hover:bg-[#05080E]/60 transition-all text-left cursor-pointer"
              >
                <span className="font-serif font-bold text-sm sm:text-base text-white">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-accent transition-transform shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 bg-[#05080E]/40 font-light">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
