import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    q: 'Are all Futura Groups projects RERA approved?',
    a: 'Yes, every plot and villa project under Futura Groups is strictly RERA registered, ensuring complete transparency and legal compliance with the Real Estate Regulatory Authority.'
  },
  {
    q: 'Do you offer assistance with bank loans?',
    a: 'Absolutely. We have strategic tie-ups with leading national banks like SBI, HDFC, and ICICI to ensure fast-tracked home and plot loan approvals for our clients.'
  },
  {
    q: 'What is the typical timeframe for plot allotment and registration?',
    a: 'Registration can be initiated immediately upon booking and initial payment. We provide all necessary documentation to fast-track the process.'
  },
  {
    q: 'Do you provide maintenance services after possession?',
    a: 'Yes, we provide up to 10 years of maintenance guarantee on structural works for our constructed villas and oversee the layout maintenance for our plot projects.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            KNOW YOUR PROPERTY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="border border-gray-150 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans font-semibold text-brand-primary text-left">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-accent transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 font-sans text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
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
