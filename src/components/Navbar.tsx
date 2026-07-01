import { useState, useEffect } from 'react';
import { Menu, X, Phone, Building } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiryModal: (projectName?: string) => void;
  activeSection: string;
}

export default function Navbar({ onOpenEnquiryModal, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Plot Calculator', id: 'calculator' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-primary/95 backdrop-blur-md py-4 shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div
            id="brand-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-md shadow-brand-accent/20 group-hover:bg-brand-accent/90 transition-colors">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-serif font-semibold text-2xl tracking-widest text-white block leading-none">
                FUTURA
              </span>
              <span className="font-sans font-medium text-[9px] tracking-[0.35em] text-brand-accent block leading-none mt-1.5">
                GROUPS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans font-medium text-sm transition-all relative py-2 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-brand-accent'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Contact Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+918046808080"
              className="flex items-center text-gray-300 hover:text-brand-accent transition-colors text-sm font-medium font-sans"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-accent" />
              +91 80 4680 8080
            </a>
            <button
              onClick={() => onOpenEnquiryModal()}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-md shadow-brand-accent/20 cursor-pointer hover:shadow-lg transition-all"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="tel:+918046808080"
              className="p-2 text-gray-300 hover:text-brand-accent transition-colors"
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-primary border-t border-white/10 shadow-2xl animate-fade-in">
          <div className="px-4 py-6 space-y-3 bg-brand-primary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-sans font-medium text-base transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-brand-accent/15 border-l-4 border-brand-accent'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4 px-4">
              <a
                href="tel:+918046808080"
                className="flex items-center text-gray-300 hover:text-brand-accent transition-colors text-base font-medium"
              >
                <Phone className="w-5 h-5 mr-3 text-brand-accent" />
                +91 80 4680 8080
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white text-center py-3 rounded-lg font-bold shadow-md shadow-brand-accent/20 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
