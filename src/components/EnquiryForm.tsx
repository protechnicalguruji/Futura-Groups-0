import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, Compass, MessageSquare, CheckCircle, Sparkles, X, Clock, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { Enquiry } from '../types';

interface EnquiryFormProps {
  preFilledInterest?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export default function EnquiryForm({ preFilledInterest = '', isModal = false, onCloseModal }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectInterest: preFilledInterest,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [myHistory, setMyHistory] = useState<Enquiry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Sync preFilledInterest when it changes
  useEffect(() => {
    if (preFilledInterest) {
      setFormData((prev) => ({ ...prev, projectInterest: preFilledInterest }));
    }
  }, [preFilledInterest]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('futura_enquiries');
    if (saved) {
      try {
        setMyHistory(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse saved enquiries', err);
      }
    }
  }, []);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.projectInterest) {
      tempErrors.projectInterest = 'Please select your area of interest';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as they type
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database registration delay
    setTimeout(() => {
      const newEnquiry: Enquiry = {
        id: `enq-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectInterest: formData.projectInterest,
        message: formData.message || 'Requested callback from project specialist.',
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updatedHistory = [newEnquiry, ...myHistory];
      localStorage.setItem('futura_enquiries', JSON.stringify(updatedHistory));
      setMyHistory(updatedHistory);

      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectInterest: '',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <div className={`bg-[#0D1321] text-white rounded-3xl overflow-hidden ${isModal ? '' : 'p-5 sm:p-6 lg:p-5 xl:p-8 border border-white/5 shadow-2xl royal-shadow'}`}>
      
      {/* If form submitted successfully */}
      {submitSuccess ? (
        <div className="text-center py-10 px-4 space-y-6 animate-zoom-in">
          <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto text-brand-accent shadow-inner border border-brand-accent/30">
            <CheckCircle className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-2xl text-white">Enquiry Registered!</h3>
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
              Thank you <strong className="text-brand-accent">{formData.name}</strong>. Your allotment enquiry regarding <strong className="text-white">{formData.projectInterest}</strong> has been registered in our database. Our relationship manager will coordinate with you shortly.
            </p>
          </div>

          <div className="bg-[#05080E]/70 rounded-2xl p-4 max-w-sm mx-auto text-left border border-white/5 divide-y divide-white/5 text-xs font-sans">
            <div className="flex justify-between py-2 text-gray-400">
              <span>Customer Name</span>
              <span className="font-semibold text-white">{formData.name}</span>
            </div>
            <div className="flex justify-between py-2 text-gray-400">
              <span>Assigned Contact</span>
              <span className="font-semibold text-white">{formData.phone}</span>
            </div>
            <div className="flex justify-between py-2 text-gray-400">
              <span>Allotment Interest</span>
              <span className="font-semibold text-brand-accent text-right truncate max-w-[150px]">
                {formData.projectInterest}
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-3 pt-4">
            <button
              onClick={handleResetForm}
              className="px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-sm rounded-xl cursor-pointer shadow-lg shadow-brand-accent/20 transition-all"
            >
              Submit Another Request
            </button>
            {isModal && onCloseModal && (
              <button
                onClick={onCloseModal}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-sans font-semibold text-sm rounded-xl cursor-pointer transition-all"
              >
                Close Modal
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header */}
          <div className="text-left">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              {isModal ? 'Secure Allotment Callback' : 'Connect with Futura Groups'}
            </h3>
            <p className="font-sans text-xs text-gray-400 leading-normal mt-1 font-light">
              Our relationship managers will contact you within 2 business hours.
            </p>
          </div>

          {/* Actual HTML Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-accent/70" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full bg-[#05080E]/70 border rounded-xl py-2.5 pl-11 pr-4 text-sm font-sans font-medium text-white outline-none placeholder-gray-600 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all ${
                    errors.name ? 'border-red-400/50 focus:border-red-400' : 'border-white/5'
                  }`}
                />
              </div>
              {errors.name && <p className="text-[11px] font-sans text-red-400">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-accent/70" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rahul@gmail.com"
                    className={`w-full bg-[#05080E]/70 border rounded-xl py-2.5 pl-11 pr-4 text-sm font-sans font-medium text-white outline-none placeholder-gray-600 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all ${
                      errors.email ? 'border-red-400/50 focus:border-red-400' : 'border-white/5'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] font-sans text-red-400">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-accent/70" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-Digit Mobile"
                    className={`w-full bg-[#05080E]/70 border rounded-xl py-2.5 pl-11 pr-4 text-sm font-sans font-medium text-white outline-none placeholder-gray-600 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all ${
                      errors.phone ? 'border-red-400/50 focus:border-red-400' : 'border-white/5'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] font-sans text-red-400">{errors.phone}</p>}
              </div>
            </div>

            {/* Project / Service dropdown */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Project / Service Allotment
              </label>
              <div className="relative">
                <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-accent/70" />
                <select
                  name="projectInterest"
                  value={formData.projectInterest}
                  onChange={handleInputChange}
                  className={`w-full bg-[#05080E]/70 border rounded-xl py-2.5 pl-11 pr-4 text-sm font-sans font-medium text-white outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all ${
                    errors.projectInterest ? 'border-red-400/50 focus:border-red-400' : 'border-white/5'
                  }`}
                >
                  <option value="" className="bg-[#0D1321] text-white">-- Choose Allotment Interest --</option>
                  <optgroup label="Real Estate Layouts" className="bg-[#0D1321] text-brand-accent font-semibold">
                    {PROJECTS_DATA.map((proj) => (
                      <option key={proj.id} value={proj.name} className="bg-[#0D1321] text-white font-normal">
                        {proj.name} ({proj.location})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Developer Services" className="bg-[#0D1321] text-brand-accent font-semibold">
                    <option value="Gated Plot Development" className="bg-[#0D1321] text-white font-normal">Gated Plot Development</option>
                    <option value="Custom Villa Construction" className="bg-[#0D1321] text-white font-normal">Custom Villa Construction</option>
                    <option value="Consulting & Legal Advisory" className="bg-[#0D1321] text-white font-normal">Consulting & Legal Advisory</option>
                    <option value="Bespoke Interior Styling" className="bg-[#0D1321] text-white font-normal">Bespoke Interior Styling</option>
                  </optgroup>
                  <optgroup label="Custom Estimates" className="bg-[#0D1321] text-brand-accent font-semibold">
                    <option value="General Callback Request" className="bg-[#0D1321] text-white font-normal">General Legal Inquiry</option>
                    <option value="Full Turnkey Package" className="bg-[#0D1321] text-white font-normal">Full Custom Package Estimate</option>
                  </optgroup>
                </select>
              </div>
              {errors.projectInterest && (
                <p className="text-[11px] font-sans text-red-400">{errors.projectInterest}</p>
              )}
            </div>

            {/* Custom Message */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Specific Message / Request Details (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3 w-4.5 h-4.5 text-brand-accent/70" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="E.g. I would like to schedule a virtual site tour this Sunday."
                  className="w-full bg-[#05080E]/70 border border-white/5 rounded-xl py-2.5 pl-11 pr-4 text-sm font-sans font-medium text-white outline-none placeholder-gray-600 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-brand-accent hover:bg-brand-accent/95 disabled:bg-gray-700 text-white font-sans font-bold text-sm py-3 rounded-xl shadow-lg shadow-brand-accent/20 cursor-pointer flex items-center justify-center space-x-2 transition-all`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Registering Allotment...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Secure Price Brochure & Callback</span>
                </>
              )}
            </button>
          </form>

          {/* Client Local History Log */}
          {myHistory.length > 0 && (
            <div className="pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center justify-between w-full text-xs font-bold text-gray-400 hover:text-brand-accent uppercase tracking-wider font-sans cursor-pointer transition-colors"
              >
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1.5" />
                  <span>My Submitted Enquiries ({myHistory.length})</span>
                </span>
                <span>{showHistory ? 'Hide' : 'Show'}</span>
              </button>

              {showHistory && (
                <div className="mt-3 divide-y divide-white/5 max-h-[160px] overflow-y-auto pr-1 space-y-2 animate-fade-in">
                  {myHistory.map((h) => (
                    <div key={h.id} className="pt-2 text-[11px] font-sans">
                      <div className="flex justify-between items-baseline font-semibold text-white">
                        <span className="truncate max-w-[150px]">{h.projectInterest}</span>
                        <span className="text-gray-400 flex items-center shrink-0">
                          <Clock className="w-3 h-3 mr-1" />
                          {h.date.split(',')[0]}
                        </span>
                      </div>
                      <p className="text-gray-400 mt-1 line-clamp-1 italic">"{h.message}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
