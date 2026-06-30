import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import PropertyCategories from './components/PropertyCategories';
import Services from './components/Services';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import PlotCalculator from './components/PlotCalculator';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryForm from './components/EnquiryForm';
import { X, Phone, Building2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState('');

  // Hero Quick Search filters
  const [filters, setFilters] = useState({
    location: '',
    status: ''
  });

  // Track scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'amenities', 'calculator', 'contact'];
      const scrollPos = window.scrollY + 120; // offset for fixed navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnquiryModal = (prefillValue = '') => {
    setEnquiryPrefill(prefillValue);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryPrefill('');
  };

  const handleSearchFilters = (newFilters: { location: string; status: string }) => {
    setFilters(newFilters);
  };

  return (
    <div className="relative min-h-screen bg-white text-brand-text-dark font-sans selection:bg-brand-accent selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Navbar
        onOpenEnquiryModal={handleOpenEnquiryModal}
        activeSection={activeSection}
      />

      {/* 2. Primary Layout Page Sections */}
      <main className="overflow-x-hidden">
        
        {/* Hero Banner Section */}
        <Hero
          onSearch={handleSearchFilters}
          onOpenEnquiry={() => handleOpenEnquiryModal('General Allotment Request')}
        />

        {/* Corporate Profile About section */}
        <About />

        {/* Real Estate Developments section */}
        <Projects
          onOpenEnquiryModal={handleOpenEnquiryModal}
          locationFilter={filters.location}
          statusFilter={filters.status}
        />

        {/* Property Categories section */}
        <PropertyCategories />

        {/* Statistics section */}
        <Statistics />

        {/* Modular Developer Services section */}
        <Services
          onOpenEnquiryModal={handleOpenEnquiryModal}
        />

        {/* Gallery section */}
        <Gallery />

        {/* Premium Amenities section */}
        <Amenities />

        {/* Interactive Cost Calculator tool section */}
        <PlotCalculator
          onOpenEnquiryModal={handleOpenEnquiryModal}
        />

        {/* Client Success Testimonials section */}
        <Testimonials />

        {/* FAQ section */}
        <FAQ />

        {/* Blog section */}
        <Blog />

        {/* Coordinates and Direct Enquiries form section */}
        <Contact />

      </main>

      {/* 3. Footer Site Sitemap and Disclaimers */}
      <Footer />

      {/* 4. global overlay Enquiry Callback Modal Popup */}
      {isEnquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay with click-to-close behavior */}
          <div
            className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseEnquiryModal}
          />

          {/* Modal Container */}
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative z-10 shadow-2xl border border-gray-100 animate-zoom-in max-h-[90vh] overflow-y-auto">
            {/* Close Cross button */}
            <button
              onClick={handleCloseEnquiryModal}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embed actual Lead Form */}
            <EnquiryForm
              preFilledInterest={enquiryPrefill}
              isModal={true}
              onCloseModal={handleCloseEnquiryModal}
            />
          </div>
        </div>
      )}

      {/* 5. Sticky Floating Callout Buttons (Phone + Brochure) for mobile conversion */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 lg:hidden">
        <a
          href="tel:+918046808080"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="Instant Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>
        <button
          onClick={() => handleOpenEnquiryModal('Mobile Sticky Request')}
          className="w-12 h-12 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
          title="Enquire"
        >
          <Building2 className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
