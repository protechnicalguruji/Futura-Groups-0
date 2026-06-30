import { Building, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

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
          <div className="lg:col-span-5 space-y-6">
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
              **Futura Groups** (formerly known as Home Ambit) is a premium real estate development and consulting corporation based in Bangalore, specialized in BMRDA/STRR-compliant gated plots, luxury villa builds, and modular interior design.
            </p>

            {/* Core credentials badges */}
            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-gray-100 uppercase tracking-wider">
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">RERA Approved layouts</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">BMRDA Approved</span>
            </div>
          </div>

          {/* Column 2: Sitemap Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
              Sitemap Links
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

          {/* Column 3: Contact quick facts */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
              Corporate Contacts
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Sector 4, HSR Layout, Bangalore, KA, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>+91 80 4680 8080 (Sales Hotline)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>sales@futuragroups.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* RERA and Legal Disclaimer Paragraph */}
        <div className="py-8 border-b border-white/5 space-y-4">
          <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest block">
            Regulatory Compliance Notice & Disclaimer
          </span>
          <p className="text-[11px] text-gray-400 leading-relaxed text-justify">
            Disclaimer: All real estate developments, project layout maps, plotted dimensions, floor plans, structural layouts, graphic illustrations, and 3D architectural renders published on this digital platform are representational assets compiled for branding and educational purposes only. Complete specifications, legal allotments, and land boundaries are governed solely by standard sale agreements, registered sale deeds, and Karnataka Real Estate Regulatory Authority (RERA) compliance files. Stamp duty charges and other layout maintenance estimates may undergo revision depending on guidelines issued by regional sub-registrar authorities.
          </p>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-400">
            © 2026 **Futura Groups Private Limited** (Formerly Home Ambit). All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#site-header" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#site-header" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-gray-400 flex items-center">
              CIN: U70109KA2021PTC147654 
              <ExternalLink className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
