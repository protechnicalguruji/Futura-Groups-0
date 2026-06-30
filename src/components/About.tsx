import { Shield, Award, Users, Star, Target, Check } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Shield,
      title: '100% Legal Transparency',
      description: 'We believe absolute trust is built on ironclad deeds. Every layout we develop has 100% clear titles, approved plans by authorized urban bodies (BMRDA, STRR, etc.), and complete RERA registration with no surprise overheads.'
    },
    {
      icon: Award,
      title: 'Premium Quality Engineering',
      description: 'We do not compromise. From standard 40/30-foot concrete roads and dense tree plantations to intelligent underground sewage treatment plants (STP), our infrastructure stands the test of time.'
    },
    {
      icon: Users,
      title: 'Customer-Centric Care',
      description: 'We guide you at every step. From choosing the perfect plot orientation to coordinating bank approvals, handling stamp duties, registration assistance, and bespoke villa construction, you are never alone.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Acres of Land Developed' },
    { value: '500+', label: 'Satisfied Plot Owners' },
    { value: '100%', label: 'Approval Rate (RERA/BMRDA)' },
    { value: '10+', label: 'Years of Engineering Trust' }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
              KNOW FUTURA GROUPS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight mb-6">
              Shaping Better Lifestyles through Clear Titles, Integrity, & Elegant Planning
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
              At **Futura Groups** (formerly known as Home Ambit), we are dedicated to transforming your vision of owning high-value real estate in Bangalore into an absolute reality. We specialize in building premier, state-of-the-art gated community plot developments and providing luxury bespoke home construction services.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed text-base mb-8">
              We handpick our project locations in Bangalore\'s fastest-growing real estate corridors, ensuring our clients receive excellent investment appreciation and structural convenience. Over the years, our meticulous planning, transparent pricing model, and commitment to clear legal deeds have established us as a preferred name for discerning landowners and elite investors.
            </p>

            {/* Check Bullet Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'STRR & BMRDA Approved layouts',
                'Aggressive investment corridors',
                'Underground power & high-speed fiber',
                '100% Vasthu compliant sizes',
                'Approved by major banks (SBI, HDFC)',
                '10-Year structural warranties'
              ].map((bullet, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-accent" />
                  </div>
                  <span className="font-sans text-sm font-semibold text-gray-700">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Visual Block */}
          <div className="relative">
            {/* Visual overlapping images */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
                alt="Elite gated development site"
                className="w-full h-full object-cover"
              />
              {/* Highlight card on top of image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-xl border-l-4 border-brand-accent">
                <div className="flex items-center space-x-3 mb-2">
                  <Target className="w-6 h-6 text-brand-accent" />
                  <h4 className="font-display font-bold text-lg text-brand-primary">Our Core Mission</h4>
                </div>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  To empower families to secure a legacy of wealth and happiness by providing impeccably legal, structurally sound, and beautiful gated layouts in Bengaluru.
                </p>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -top-6 -right-6 bg-brand-accent text-white py-4 px-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-white fill-white" />
                <span className="font-display font-bold text-2xl">4.9</span>
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-white/80 block mt-1">
                Google Rating
              </span>
            </div>
          </div>
        </div>

        {/* Brand Value Props Grid */}
        <div className="border-t border-gray-200/80 pt-16 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-bold text-2xl text-brand-primary tracking-tight">
              The Futura Advantage
            </h3>
            <p className="font-sans text-sm text-gray-500 mt-2">
              Why hundreds of families choose us to secure their dream land and built spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-brand-primary mb-3">
                    {val.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Numeric Stat Counters Bar */}
        <div className="bg-brand-primary rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-accent block">
                  {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm font-medium text-gray-400 block tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
