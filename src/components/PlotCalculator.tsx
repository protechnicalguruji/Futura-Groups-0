import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { Calculator, Coins, Percent, Calendar, ArrowRight, Table, Info } from 'lucide-react';

interface PlotCalculatorProps {
  onOpenEnquiryModal: (estimationDetails: string) => void;
}

export default function PlotCalculator({ onOpenEnquiryModal }: PlotCalculatorProps) {
  // Plot cost parameters
  const [selectedProjectId, setSelectedProjectId] = useState('futura-meadows');
  const [dimensionPreset, setDimensionPreset] = useState<number>(1200); // Standard 30x40 = 1200 sqft
  const [customSqft, setCustomSqft] = useState<number>(1200);
  const [includeConstruction, setIncludeConstruction] = useState(false);

  // Home Loan parameters
  const [downPayment, setDownPayment] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(8.55); // Standard SBI Home Loan rate
  const [loanTenure, setLoanTenure] = useState<number>(20); // Years

  const selectedProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  // Recalculate cost when project or size changes
  const sqftArea = dimensionPreset === 0 ? customSqft : dimensionPreset;
  const basePricePerSqft = selectedProject.pricePerSqft;
  const plotCost = sqftArea * basePricePerSqft;
  
  // Construction pricing: standard quality in Bangalore is ~₹1,850 per sqft
  const constructionCost = includeConstruction ? sqftArea * 1850 : 0;
  
  const infraCharges = 150000; // Standard layout maintenance, water connection, and electrical deposit
  const subTotal = plotCost + constructionCost + infraCharges;

  // Stamp Duty & Registration in Bangalore (Approx 5.6% total)
  const stampDutyAndReg = Math.round(plotCost * 0.056);
  const totalEstimatedCost = subTotal + stampDutyAndReg;

  // Reset default down payment to 20% on total cost changes
  useEffect(() => {
    setDownPayment(Math.round(totalEstimatedCost * 0.20));
  }, [totalEstimatedCost]);

  // EMI Calculation: EMI = [P x R x (1+R)^N]/[((1+R)^N)-1]
  const loanPrincipal = totalEstimatedCost - downPayment;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTenure * 12;

  let emi = 0;
  if (loanPrincipal > 0 && monthlyInterestRate > 0) {
    emi = Math.round(
      (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    );
  }

  // Format money helper
  const formatRupees = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleBookVisitWithEstimate = () => {
    const detailsString = `${selectedProject.name} | Plot Area: ${sqftArea} sq.ft. | Total Estimated Cost: ${formatRupees(totalEstimatedCost)} | Turnkey Construction: ${includeConstruction ? 'Yes' : 'No'}`;
    onOpenEnquiryModal(detailsString);
  };

  return (
    <section id="calculator" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-bold text-sm tracking-wider text-brand-accent uppercase block mb-3">
            FINANCIAL TRANSPARENCY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary tracking-tight leading-tight">
            Interactive Plot Cost & Home Loan EMI Calculator
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-sm sm:text-base">
            No hidden charges. Simulate layouts, toggle customized villa construction, verify registration fees, and calculate instant monthly EMI paybacks.
          </p>
        </div>

        {/* Master Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Config (Left Column) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-8">
            
            {/* Step 1: Select Layout */}
            <div className="space-y-4">
              <span className="flex items-center space-x-2.5 text-xs font-bold text-brand-accent uppercase tracking-wider font-sans">
                <span className="w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center text-[10px]">1</span>
                <span>Select Development Project</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PROJECTS_DATA.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`p-4 rounded-xl text-left border cursor-pointer transition-all ${
                      selectedProjectId === proj.id
                        ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                        : 'border-gray-150 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-display font-bold text-sm text-brand-primary block">{proj.name}</span>
                    <span className="font-sans text-[11px] text-gray-500 block mt-1">₹{proj.pricePerSqft} / sq.ft.</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Plot Dimensions */}
            <div className="space-y-4">
              <span className="flex items-center space-x-2.5 text-xs font-bold text-brand-accent uppercase tracking-wider font-sans">
                <span className="w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center text-[10px]">2</span>
                <span>Choose Plot Sizing Area</span>
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => setDimensionPreset(1200)}
                  className={`p-3.5 rounded-xl text-center border cursor-pointer transition-all ${
                    dimensionPreset === 1200
                      ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                      : 'border-gray-150 bg-gray-50'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-brand-primary block">30 x 40</span>
                  <span className="font-sans text-[10px] text-gray-500 block mt-1">1,200 sq.ft.</span>
                </button>
                <button
                  onClick={() => setDimensionPreset(1500)}
                  className={`p-3.5 rounded-xl text-center border cursor-pointer transition-all ${
                    dimensionPreset === 1500
                      ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                      : 'border-gray-150 bg-gray-50'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-brand-primary block">30 x 50</span>
                  <span className="font-sans text-[10px] text-gray-500 block mt-1">1,500 sq.ft.</span>
                </button>
                <button
                  onClick={() => setDimensionPreset(2400)}
                  className={`p-3.5 rounded-xl text-center border cursor-pointer transition-all ${
                    dimensionPreset === 2400
                      ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                      : 'border-gray-150 bg-gray-50'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-brand-primary block">40 x 60</span>
                  <span className="font-sans text-[10px] text-gray-500 block mt-1">2,400 sq.ft.</span>
                </button>
                <button
                  onClick={() => {
                    setDimensionPreset(0);
                    setCustomSqft(1200);
                  }}
                  className={`p-3.5 rounded-xl text-center border cursor-pointer transition-all ${
                    dimensionPreset === 0
                      ? 'border-brand-accent bg-brand-accent/5 ring-1 ring-brand-accent'
                      : 'border-gray-150 bg-gray-50'
                  }`}
                >
                  <span className="font-sans text-xs font-bold text-brand-primary block">Custom Size</span>
                  <span className="font-sans text-[10px] text-gray-500 block mt-1">Choose manually</span>
                </button>
              </div>

              {/* Range Slider for Custom Sizing */}
              {dimensionPreset === 0 && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 animate-fade-in space-y-3">
                  <div className="flex justify-between items-center text-sm font-semibold font-sans">
                    <span className="text-gray-500">Custom Land Area:</span>
                    <span className="text-brand-primary font-mono">{customSqft} sq.ft.</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="4000"
                    step="50"
                    value={customSqft}
                    onChange={(e) => setCustomSqft(parseInt(e.target.value))}
                    className="w-full accent-brand-accent h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-gray-400">
                    <span>1,000 sq.ft.</span>
                    <span>2,500 sq.ft.</span>
                    <span>4,000 sq.ft.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Turnkey Construction Toggle */}
            <div className="space-y-4">
              <span className="flex items-center space-x-2.5 text-xs font-bold text-brand-accent uppercase tracking-wider font-sans">
                <span className="w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center text-[10px]">3</span>
                <span>Bespoke House Construction</span>
              </span>
              <div
                onClick={() => setIncludeConstruction(!includeConstruction)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                  includeConstruction
                    ? 'border-brand-accent bg-brand-accent/5'
                    : 'border-gray-150 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-primary">
                    I want to add Turnkey Villa Construction
                  </h4>
                  <p className="font-sans text-xs text-gray-500 leading-normal mt-1">
                    Adds structural building cost estimated at ₹1,850 per sq.ft. (A-grade materials, modular kitchen fittings, modular TV backdrop, wardrobes, paint handover).
                  </p>
                </div>
                <div className="relative shrink-0">
                  <input
                    type="checkbox"
                    checked={includeConstruction}
                    onChange={() => {}} // handled by parent click
                    className="w-5 h-5 accent-brand-accent rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Loan Parameters Sliders */}
            <div className="border-t border-gray-150 pt-6 space-y-6">
              <span className="flex items-center space-x-2.5 text-xs font-bold text-brand-accent uppercase tracking-wider font-sans">
                <span className="w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center text-[10px]">4</span>
                <span>Configure Home Loan Options</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Down Payment slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-500 font-sans">
                    <span>Down Payment</span>
                    <span className="font-mono text-brand-primary">{formatRupees(downPayment)}</span>
                  </div>
                  <input
                    type="range"
                    min={Math.round(totalEstimatedCost * 0.1)}
                    max={Math.round(totalEstimatedCost * 0.8)}
                    step={25000}
                    value={downPayment}
                    onChange={(e) => setDownPayment(parseInt(e.target.value))}
                    className="w-full accent-brand-accent h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <span className="block text-[9px] font-mono text-gray-400 text-right">
                    {Math.round((downPayment / totalEstimatedCost) * 100)}% of total cost
                  </span>
                </div>

                {/* Interest rate slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-500 font-sans">
                    <span>Interest Rate p.a.</span>
                    <span className="font-mono text-brand-primary">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7"
                    max="15"
                    step="0.05"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    className="w-full accent-brand-accent h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <span className="block text-[9px] font-mono text-gray-400 text-right">
                    Current bank average: ~8.5%
                  </span>
                </div>

                {/* Tenure years */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-500 font-sans">
                    <span>Payback Tenure</span>
                    <span className="font-mono text-brand-primary">{loanTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                    className="w-full accent-brand-accent h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <span className="block text-[9px] font-mono text-gray-400 text-right">
                    {loanTenure * 12} monthly installments
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Summary & EMI Readout (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Allotment Receipt Card */}
            <div className="bg-brand-primary text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-display font-bold text-lg text-brand-accent mb-6 flex items-center">
                <Table className="w-5 h-5 mr-2 text-brand-accent" />
                <span>Estimate Receipt</span>
              </h3>

              {/* Items Breakdown */}
              <div className="space-y-4 font-sans text-sm pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plot Area</span>
                  <span className="font-semibold text-gray-100">{sqftArea} sq.ft.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Project Allotment</span>
                  <span className="font-semibold text-gray-100">{selectedProject.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Land Value</span>
                  <span className="font-semibold text-gray-100">{formatRupees(plotCost)}</span>
                </div>

                {includeConstruction && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Bespoke House Build Cost</span>
                    <span className="font-semibold">{formatRupees(constructionCost)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-400">Utilities & Infra Connection</span>
                  <span className="font-semibold text-gray-100">{formatRupees(infraCharges)}</span>
                </div>

                <div className="flex justify-between text-amber-400">
                  <span className="text-amber-400/80">Govt Stamp Duty & Reg.</span>
                  <span className="font-semibold">{formatRupees(stampDutyAndReg)}</span>
                </div>
              </div>

              {/* Total readout */}
              <div className="pt-6 pb-6 flex justify-between items-baseline">
                <span className="font-display font-bold text-base text-gray-300">Total Est. Cost</span>
                <span className="font-display font-bold text-2xl text-brand-accent">{formatRupees(totalEstimatedCost)}</span>
              </div>

              <p className="font-sans text-[10px] text-gray-400 leading-normal leading-relaxed border-t border-white/5 pt-4">
                *The calculated estimates are non-binding approximations based on standard stamp registration rules in Karnataka (2026). Actual legal stamp paper fees are calculated during physical conveyance registration.
              </p>
            </div>

            {/* Monthly EMI readout Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm space-y-6">
              <span className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                <Coins className="w-4 h-4 text-brand-accent mr-2" />
                <span>Simulated Monthly EMI</span>
              </span>

              <div className="flex items-baseline justify-between">
                <span className="font-sans text-sm text-gray-500">EMI Monthly Outflow</span>
                <span className="font-display font-bold text-3xl text-brand-primary">{formatRupees(emi)} / mo.</span>
              </div>

              <div className="divide-y divide-gray-100 border-t border-b border-gray-100 py-3 text-xs font-sans text-gray-500 space-y-2.5">
                <div className="flex justify-between pt-2">
                  <span>Down Payment Outflow</span>
                  <span className="font-semibold text-brand-primary">{formatRupees(downPayment)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Total Loan Principal</span>
                  <span className="font-semibold text-brand-primary">{formatRupees(loanPrincipal)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Interest Rate</span>
                  <span className="font-semibold text-brand-primary">{interestRate}% p.a.</span>
                </div>
              </div>

              <button
                onClick={handleBookVisitWithEstimate}
                className="w-full bg-brand-accent hover:bg-brand-accent/95 text-white font-sans font-bold text-sm py-4 rounded-xl shadow-lg shadow-brand-accent/20 cursor-pointer flex items-center justify-center space-x-2 group transition-all"
              >
                <span>Request Allotment with Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
