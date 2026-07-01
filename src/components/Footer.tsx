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
    <footer className="bg-[#05080E] text-gray-400 font-sans border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Company Profile Info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <div className="w-9 h-9 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif font-semibold text-xl tracking-wide text-white block leading-none">
                  FUTURA
                </span>
                <span className="font-sans font-bold text-[9px] tracking-[0.25em] text-brand-accent block leading-none mt-1">
                  GROUPS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm font-light">
              Futura Groups is a premium real estate development and consulting corporation based in Bangalore, specialized in BMRDA/STRR-compliant gated plots, luxury villa builds, and bespoke modular interior designs.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-accent hover:border-transparent transition-all"><Icon className="w-4 h-4 text-white" /></a>
              ))}
            </div>
          </div>

          {/* Column 2: Sitemap Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-widest">
              Sitemap
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {sitemapLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-brand-accent text-gray-400 transition-colors cursor-pointer text-left font-light"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-gray-300 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">Sector 4, HSR Layout, Bangalore, KA, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">+91 88845 44588</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">sales@futuragroups.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Location & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-widest">
              Corporate Desk
            </h4>
            
            <div className="flex flex-col space-y-4">
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Subscribe to our private investor newsletters to receive instant gated community launch announcements and off-market pre-sales brochure packets.
              </p>
              
              <div className="flex">
                <input type="email" placeholder="Email Address" className="bg-[#0D1321] border border-white/5 p-3 rounded-l-lg text-xs sm:text-sm w-full outline-none text-white placeholder-gray-600 focus:border-brand-accent transition-all" />
                <button className="bg-brand-accent hover:bg-brand-accent/90 px-4 py-3 rounded-r-lg text-xs sm:text-sm font-bold text-white uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-brand-accent/15">Subscribe</button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 font-light">
            © 2026 Futura Groups Private Limited. All Rights Reserved. Co-branded with elite developers.
          </p>
          <div className="flex items-center space-x-4 text-gray-500 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
