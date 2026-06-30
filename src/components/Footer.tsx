import { Building, Phone, Mail, MapPin, ExternalLink, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const sitemapLinks = [
    { name: 'Home Layout', id: 'home' },
    { name: 'About Corporate', id: 'about' },
    { name: 'Projects Portfolio', id: 'projects' },
    { name: 'Bespoke Services', id: 'services' },
    { name: 'Premium Amenities', id: 'amenities' },
    { name: 'Plot & Loan Calculator', id: 'calculator' },
    { name: 'Contact Sales', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-primary text-gray-400 font-sans border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Company Profile Info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <div className="w-9 h-9 bg-brand-accent rounded-lg flex items-center justify-center shadow-md">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-white block leading-none">
                  FUTURA
                </span>
                <span className="font-sans font-medium text-[9px] tracking-[0.25em] text-brand-accent block leading-none mt-1">
                  GROUPS
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Futura Groups is a premium real estate development and consulting corporation based in Bangalore, specialized in BMRDA/STRR-compliant gated plots, luxury villa builds, and modular interior design.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors"><Icon className="w-4 h-4 text-white" /></a>
                ))}
            </div>
          </div>

          {/* Column 2: Sitemap Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
              Sitemap
            </h4>
            <ul className="space-y-3 text-sm">
              {sitemapLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-brand-accent transition-colors cursor-pointer text-left font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Sector 4, HSR Layout, Bangalore, KA, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>+91 80 4680 8080</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>sales@futuragroups.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Map & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
              Location
            </h4>
            <div className="bg-white/10 rounded-xl h-32 flex items-center justify-center border border-white/10 text-xs text-gray-500">Google Map Placeholder</div>
            
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest pt-4">
              Newsletter
            </h4>
            <div className="flex">
                <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-3 rounded-l-lg text-sm w-full outline-none text-white" />
                <button className="bg-brand-accent px-4 py-3 rounded-r-lg text-sm font-semibold text-white">Subscribe</button>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-400">
            © 2026 Futura Groups Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
