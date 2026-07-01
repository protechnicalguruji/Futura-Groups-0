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
    <section id="projects" className="py-24 bg-[#0D1321] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans font-bold text-xs tracking-widest text-brand-accent uppercase block mb-3">
              FEATURED DEVELOPMENTS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
              Elite Gated Layouts Under <span className="gold-gradient-text">Futura Groups</span>
            </h2>
            <p className="font-sans text-gray-400 mt-2 text-sm sm:text-base max-w-2xl font-light">
              Strictly RERA registered plots featuring premium infrastructural handovers, water facilities, concrete roads, and lifestyle amenities.
            </p>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-2">
            {PROJECTS_DATA.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2.5 rounded-xl font-sans font-bold text-xs tracking-wide transition-all cursor-pointer ${
                  selectedProjectId === proj.id
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25 border border-brand-accent/30'
                    : 'bg-[#05080E]/60 text-gray-400 border border-white/5 hover:text-white hover:bg-[#05080E]/90'
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Focus Display */}
        {selectedProject ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Visual Media Showcase & Highlights */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] group">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080E]/90 via-[#05080E]/20 to-transparent" />

                {/* Status Badge overlay */}
                <div className="absolute top-6 left-6 bg-brand-accent text-white px-3.5 py-1.5 rounded-lg font-sans font-bold text-xs tracking-wider uppercase shadow-md">
                  {selectedProject.status}
                </div>

                {/* Masterplan trigger overlay button */}
                <button
                  onClick={() => setShowMasterplan(true)}
                  className="absolute bottom-6 right-6 bg-[#05080E]/95 hover:bg-brand-accent text-white font-sans font-bold text-xs py-3 px-5 rounded-xl shadow-lg border border-white/10 flex items-center space-x-2 transition-all cursor-pointer hover:scale-102"
                >
                  <Layers className="w-4 h-4 text-brand-accent group-hover:text-white" />
                  <span>Interactive Layout Map</span>
                </button>
              </div>

              {/* Highlights List */}
              <div className="bg-[#05080E]/60 rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
                <h4 className="font-serif font-bold text-lg text-white mb-6">
                  Project Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.highlights.map((high, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center shrink-0 mt-0.5 text-brand-accent">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-sm text-gray-300 leading-normal font-light">{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications & Description Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#05080E]/60 rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
                <div className="flex items-center space-x-2 mb-4 text-gray-400">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span className="font-sans font-bold text-xs tracking-wide uppercase">{selectedProject.sublocation}</span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
                  {selectedProject.name}
                </h3>

                <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6 font-light">
                  {selectedProject.description}
                </p>

                {/* Specs Technical Table Grid */}
                <div className="border border-white/5 rounded-2xl overflow-hidden mb-8">
                  <div className="bg-[#05080E]/80 p-4 border-b border-white/5 flex items-center space-x-2">
                    <Table className="w-4 h-4 text-brand-accent" />
                    <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                      Technical Specifications
                    </span>
                  </div>
                  <div className="divide-y divide-white/5">
                    <div className="flex justify-between p-4 text-xs sm:text-sm font-sans">
                      <span className="text-gray-400">Total Plotted Layout</span>
                      <span className="font-semibold text-white">{selectedProject.totalPlottedArea}</span>
                    </div>
                    <div className="flex justify-between p-4 text-xs sm:text-sm font-sans">
                      <span className="text-gray-400">Plotted Demarcations</span>
                      <span className="font-semibold text-white">{selectedProject.totalUnits} Units</span>
                    </div>
                    <div className="flex justify-between p-4 text-xs sm:text-sm font-sans">
                      <span className="text-gray-400">Plot Dimensions</span>
                      <span className="font-semibold text-white">{selectedProject.sqftRange}</span>
                    </div>
                    <div className="flex justify-between p-4 text-xs sm:text-sm font-sans items-center">
                      <span className="text-gray-400">RERA Registration</span>
                      <span className="font-mono text-[11px] font-semibold text-brand-accent bg-brand-accent/10 px-2 py-1 rounded border border-brand-accent/20 leading-tight text-right break-all max-w-[180px]">
                        {selectedProject.reraNumber}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cost callout and Enquiry Trigger */}
                <div className="bg-[#05080E] border border-white/5 rounded-2xl p-6 mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Price Starts From
                    </span>
                    <span className="font-serif font-bold text-xl sm:text-2xl text-brand-accent">
                      {selectedProject.priceStart}*
                    </span>
                  </div>
                  <p className="font-sans text-[10px] text-gray-500 leading-normal">
                    *Excludes government registration and stamp duty metrics. Call relationship managers for complete layout allotment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenEnquiryModal(selectedProject.name)}
                    className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-sm py-4 rounded-xl shadow-lg shadow-brand-accent/25 text-center cursor-pointer transition-all hover:scale-102"
                  >
                    Allotment Enquiry
                  </button>
                  <button
                    onClick={() => setShowMasterplan(true)}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-sm py-4 rounded-xl text-center cursor-pointer border border-white/10 transition-all hover:scale-102"
                  >
                    View Layout Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center bg-[#05080E]/60 p-12 rounded-3xl border border-white/5">
            <p className="font-sans text-gray-400">No projects found matching the current criteria.</p>
          </div>
        )}
      </div>

      {/* Interactive Vector Masterplan Simulator Modal */}
      {showMasterplan && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#05080E]/80 backdrop-blur-md" onClick={() => setShowMasterplan(false)} />

          <div className="bg-[#0D1321] rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative z-10 shadow-2xl border border-white/10 max-h-[95vh] overflow-y-auto animate-zoom-in text-white">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div>
                <span className="font-sans font-bold text-xs text-brand-accent uppercase tracking-widest block">
                  Interactive Site Layout Map
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mt-1">
                  {selectedProject.name} Gated Plots
                </h3>
              </div>
              <button
                onClick={() => setShowMasterplan(false)}
                className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instruction Callout */}
            <div className="bg-[#05080E] p-4 rounded-xl border border-white/5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2.5">
                <Info className="w-4 h-4 text-brand-accent shrink-0" />
                <p className="font-sans text-xs text-gray-400 leading-normal">
                  Hover or select any <strong className="text-emerald-400">Green (Available)</strong> plot to inspect sizing. Lock plot and submit callback to secure official quote.
                </p>
              </div>

              {/* Color legends */}
              <div className="flex items-center space-x-4 shrink-0 text-xs font-sans font-medium">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" />
                  <span className="text-gray-300">Available</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-red-500/70 rounded-sm" />
                  <span className="text-gray-400">Sold</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-amber-500/80 rounded-sm" />
                  <span className="text-gray-400">Reserved</span>
                </div>
              </div>
            </div>

            {/* Simulated Grid of Plots */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 mb-8">
              {plotsList.map((plot) => {
                const isSelected = selectedPlot === plot.plotNo;
                let bgClass = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 cursor-pointer';
                if (plot.status === 'Sold') {
                  bgClass = 'bg-red-500/5 border-red-500/10 text-red-500/40 opacity-50 cursor-not-allowed';
                } else if (plot.status === 'Reserved') {
                  bgClass = 'bg-amber-500/5 border-amber-500/10 text-amber-500/50 opacity-60 cursor-not-allowed';
                }

                if (isSelected) {
                  bgClass = 'bg-brand-accent border-brand-accent text-white scale-105 ring-4 ring-brand-accent/20 cursor-pointer';
                }

                return (
                  <div
                    key={plot.plotNo}
                    onClick={() => handlePlotClick(plot)}
                    className={`border rounded-lg p-3 text-center transition-all ${bgClass}`}
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
              <div className="bg-brand-accent/10 border border-brand-accent/25 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    Locking: {selectedPlot} ({selectedProject.name})
                  </h4>
                  <p className="font-sans text-xs text-gray-400 leading-normal mt-1">
                    Dimensions: {plotsList.find((p) => p.plotNo === selectedPlot)?.size}. Approved layout allotments.
                  </p>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedPlot(null)}
                    className="flex-1 sm:px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-sans font-semibold text-xs rounded-lg text-center cursor-pointer"
                  >
                    Clear Selection
                  </button>
                  <button
                    onClick={handleEnquirePlot}
                    className="flex-1 sm:px-6 py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-bold text-xs rounded-lg text-center cursor-pointer shadow-lg shadow-brand-accent/20 flex items-center justify-center space-x-1.5"
                  >
                    <span>Enquire Plot Price</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-2">
                <button
                  onClick={() => setShowMasterplan(false)}
                  className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 font-sans font-semibold text-xs px-6 py-3 rounded-lg cursor-pointer transition-all"
                >
                  Close Site Layout Map
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
