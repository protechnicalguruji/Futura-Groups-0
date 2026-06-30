import { Building2, CheckCircle, Users, Trophy } from 'lucide-react';

export default function Statistics() {
  const stats = [
    { icon: Building2, label: 'Projects Completed', value: '15+' },
    { icon: CheckCircle, label: 'Happy Families', value: '1,200+' },
    { icon: Users, label: 'Years Experience', value: '12+' },
    { icon: Trophy, label: 'Legal Clearances', value: '100%' },
  ];

  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto text-brand-accent mb-4" />
              <div className="font-display font-bold text-3xl sm:text-4xl mb-1">{stat.value}</div>
              <div className="font-sans text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
