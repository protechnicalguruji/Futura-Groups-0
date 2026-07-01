import { Building2, CheckCircle, Users, Trophy } from 'lucide-react';

export default function Statistics() {
  const stats = [
    { icon: Building2, label: 'Projects Completed', value: '15+' },
    { icon: CheckCircle, label: 'Happy Families', value: '1,200+' },
    { icon: Users, label: 'Years Experience', value: '12+' },
    { icon: Trophy, label: 'Legal Clearances', value: '100%' },
  ];

  return (
    <section className="py-20 bg-[#0D1321] text-white border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <stat.icon className="w-9 h-9 mx-auto text-brand-accent mb-4 transition-transform group-hover:scale-110 duration-300" />
              <div className="font-serif font-bold text-3xl sm:text-4xl mb-1.5 gold-gradient-text">{stat.value}</div>
              <div className="font-sans text-xs text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
