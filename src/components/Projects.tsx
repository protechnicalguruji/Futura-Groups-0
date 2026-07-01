import { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project } from '../types';
import { MapPin, Info, ArrowRight, Table, Check, Layers, Image as ImageIcon, X } from 'lucide-react';

interface ProjectsProps {
  onOpenEnquiryModal: (projectName: string) => void;
  locationFilter: string;
  statusFilter: string;
}

export default function Projects({ onOpenEnquiryModal, locationFilter, statusFilter }: ProjectsProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('futura-meadows');
  const [showMasterplan, setShowMasterplan] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);

  // Filter project lists
  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchLoc = locationFilter ? p.location === locationFilter : true;
    const matchStatus = statusFilter ? p.status === statusFilter : true;
    return matchLoc && matchStatus;
  });

  const selectedProject =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  // Simulated Masterplan plots data
  const plotsList = Array.from({ length: 24 }, (_, i) => {
    const plotNo = i + 101;
    const isPremium = [105, 106, 112, 118, 122].includes(plotNo);
    let status: 'Available' | 'Sold' | 'Reserved' = 'Available';
    if ([102, 104, 107, 108, 111, 115, 119, 120, 124].includes(plotNo)) {
      status = 'Sold';
    } else if ([103, 113, 117].includes(plotNo)) {
      status = 'Reserved';
    }
    const size = isPremium ? '40 x 60 (2400 sq.ft.)' : '30 x 40 (1200 sq.ft.)';
    return { plotNo: `Plot ${plotNo}`, isPremium, status, size };
  });

  const handlePlotClick = (plot: typeof plotsList[0]) => {
    if (plot.status === 'Available') {
      setSelectedPlot(plot.plotNo);
    }
  };

  const handleEnquirePlot = () => {
    if (selectedPlot) {
      setShowMasterplan(false);
      onOpenEnquiryModal(`${selectedProject.name} - ${selectedPlot}`);
      setSelectedPlot(null);
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans font-bold text-sm tracking-widest text-brand-accent uppercase block mb-3">
              FEATURED DEVELOPMENTS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-primary tracking-wide leading-tight">
              Elite Gated Layouts Under Futura Groups
            </h2>
            <p className="font-sans text-gray-500 mt-2 text-base max-w-2xl font-light">
              Strictly RERA registered layouts featuring elite infrastructure, clear legal verification, and premium structural lifestyle amenities in Bangalore.
            </p>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {PROJECTS_DATA.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-5 py-3 rounded-xl font-sans font-semibold text-sm transition-all cursor-pointer ${
                  selectedProjectId === proj.id
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-100 shadow-sm hover:bg-gray-50 hover:shadow'
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Focus Display */}
        {selectedProject ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Media Showcase & Key Highlights */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />

                {/* Status Badge overlay */}
                <div className="absolute top-6 left-6 bg-brand-primary/90 text-white px-4 py-2 rounded-lg font-sans font-bold text-xs tracking-wider uppercase backdrop-blur shadow">
                  {selectedProject.status}
                </div>

                {/* Masterplan trigger overlay button */}
                <button
                  onClick={() => setShowMasterplan(true)}
                  className="absolute bottom-6 right-6 bg-white hover:bg-brand-accent hover:text-white text-brand-primary font-sans font-bold text-sm py-2.5 px-4 rounded-xl shadow-lg flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Interactive Masterplan</span>
                </button>
              </div>

              {/* Highlights List */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 royal-shadow">
                <h4 className="font-serif font-bold text-lg text-brand-primary mb-6">
                  Project Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.highlights.map((high, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-accent" />
                      </div>
                      <span className="font-sans text-sm text-gray-600 leading-normal font-light">{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications & Description Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 royal-shadow">
                <div className="flex items-center space-x-2.5 mb-4 text-gray-500">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                  <span className="font-sans font-semibold text-sm">{selectedProject.sublocation}</span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-primary mb-4">
                  {selectedProject.name}
                </h3>

                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 font-light">
                  {selectedProject.description}
                </p>

                {/* Specs Technical Table Grid */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden mb-8">
                  <div className="bg-gray-50/50 p-4 border-b border-gray-100 flex items-center space-x-2">
                    <Table className="w-4 h-4 text-brand-accent" />
                    <span className="font-sans font-semibold text-xs text-brand-primary uppercase tracking-wider">
                      Technical Specifications
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="flex justify-between p-4 text-sm font-sans">
                      <span className="text-gray-400">Total Plotted Layout</span>
                      <span className="font-semibold text-brand-primary">{selectedProject.totalPlottedArea}</span>
                    </div>
                    <div className="flex justify-between p-4 text-sm font-sans">
                      <span className="text-gray-400">Plotted Demarcations</span>
                      <span className="font-semibold text-brand-primary">{selectedProject.totalUnits} Units</span>
                    </div>
                    <div className="flex justify-between p-4 text-sm font-sans">
                      <span className="text-gray-400">Plot Dimensions</span>
                      <span className="font-semibold text-brand-primary">{selectedProject.sqftRange}</span>
                    </div>
                    <div className="flex justify-between p-4 text-sm font-sans">
                      <span className="text-gray-400">RERA Registration</span>
                      <span className="font-mono text-xs font-semibold text-brand-primary leading-tight text-right break-all">
                        {selectedProject.reraNumber}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cost callout and Enquiry Trigger */}
                <div className="bg-brand-primary/5 rounded-2xl p-6 mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Price Starts From
                    </span>
                    <span className="font-display font-bold text-2xl text-brand-accent">
                      {selectedProject.priceStart}*
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-gray-400 leading-normal">
                    *Excludes registration, stamp duty, and infrastructural charges. Contact support for detailed allotment costing.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenEnquiryModal(selectedProject.name)}
                    className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-sm py-4 rounded-xl shadow-lg shadow-brand-accent/25 text-center cursor-pointer transition-all"
                  >
                    Allotment Enquiry
                  </button>
                  <button
                    onClick={() => setShowMasterplan(true)}
                    className="flex-1 bg-brand-primary hover:bg-brand-secondary text-white font-sans font-bold text-sm py-4 rounded-xl text-center cursor-pointer transition-all"
                  >
                    View Layout Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center bg-white p-12 rounded-3xl border border-gray-150">
            <p className="font-sans text-gray-500">No projects found matching the filters.</p>
          </div>
        )}
      </div>

      {/* Interactive Vector Masterplan Simulator Modal */}
      {showMasterplan && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-primary/70 backdrop-blur-sm" onClick={() => setShowMasterplan(false)} />

          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative z-10 shadow-2xl border border-gray-100 max-h-[95vh] overflow-y-auto animate-zoom-in">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <div>
                <span className="font-sans font-bold text-xs text-brand-accent uppercase tracking-widest block">
                  Interactive Site Layout Map
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-primary">
                  {selectedProject.name} Allotments
                </h3>
              </div>
              <button
                onClick={() => setShowMasterplan(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instruction Callout */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2.5">
                <Info className="w-4 h-4 text-brand-accent" />
                <p className="font-sans text-xs text-gray-600 leading-normal">
                  Hover or tap any **Green (Available)** plot to inspect dimensions. Click/tap to lock a plot and initiate a price enquiry.
                </p>
              </div>

              {/* Color legends */}
              <div className="flex items-center space-x-4 shrink-0 text-xs font-sans font-medium">
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-emerald-500 rounded-sm" />
                  <span className="text-gray-600">Available</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-red-400 rounded-sm" />
                  <span className="text-gray-600">Sold</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-3 bg-amber-500 rounded-sm" />
                  <span className="text-gray-600">Reserved</span>
                </div>
              </div>
            </div>

            {/* Simulated Grid of Plots */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 mb-8">
              {plotsList.map((plot) => {
                const isSelected = selectedPlot === plot.plotNo;
                let bgClass = 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100 hover:scale-105';
                if (plot.status === 'Sold') {
                  bgClass = 'bg-red-50 border-red-200 text-red-400 opacity-60 cursor-not-allowed';
                } else if (plot.status === 'Reserved') {
                  bgClass = 'bg-amber-50 border-amber-200 text-amber-700 opacity-70 cursor-not-allowed';
                }

                if (isSelected) {
                  bgClass = 'bg-brand-accent border-brand-accent text-white scale-105 ring-2 ring-brand-accent/30';
                }

                return (
                  <div
                    key={plot.plotNo}
                    onClick={() => handlePlotClick(plot)}
                    className={`border rounded-lg p-3 text-center transition-all cursor-pointer ${bgClass}`}
                  >
                    <span className="font-mono text-xs font-bold block">{plot.plotNo}</span>
                    <span className="text-[9px] font-sans block opacity-80 mt-1 truncate">
                      {plot.isPremium ? 'Premium' : 'Standard'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Selected Plot Allotment form footer */}
            {selectedPlot ? (
              <div className="bg-brand-accent/10 border border-brand-accent/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                <div>
                  <h4 className="font-display font-bold text-brand-primary text-base">
                    Selected: {selectedPlot} in {selectedProject.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 leading-normal mt-1">
                    Dimensions: {plotsList.find((p) => p.plotNo === selectedPlot)?.size}. Approved STRR gated plots.
                  </p>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedPlot(null)}
                    className="flex-1 sm:px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-sans font-semibold text-xs rounded-lg text-center cursor-pointer"
                  >
                    Clear Selection
                  </button>
                  <button
                    onClick={handleEnquirePlot}
                    className="flex-1 sm:px-6 py-2.5 bg-brand-accent hover:bg-brand-accent/95 text-white font-sans font-bold text-xs rounded-lg text-center cursor-pointer shadow flex items-center justify-center space-x-1.5"
                  >
                    <span>Request Allotment Price</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <button
                  onClick={() => setShowMasterplan(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-sans font-semibold text-sm px-6 py-2.5 rounded-lg cursor-pointer"
                >
                  Close Map
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
