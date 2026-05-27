import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Calculator, 
  ShieldCheck, 
  FileCheck,
  ArrowRight
} from 'lucide-react';

export const Financing: React.FC = () => {
  // Interactive EMI calculator state
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // INR 30 Lakhs
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5%
  const [tenureYears, setTenureYears] = useState<number>(10); // 10 Years

  // Calculate EMI
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (r === 0) return P / n;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return isNaN(emi) || !isFinite(emi) ? 0 : Math.round(emi);
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenureYears * 12;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  // Format currency
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="relative z-1 pt-32 pb-24 px-6">
      
      {/* Page Header */}
      <div className="max-w-[1100px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 glass-premium px-3 py-1 rounded-full mb-4">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-amber-600">
            Education Financing
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-4">
          Fund Your <span className="text-gradient-gold">Global Future</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Access study loans via 15+ premium financial institutions with zero service charges — partnering with nationalized banks, private banks, NBFCs, and elite international lenders.
        </p>

        {/* Value badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {[
            'Zero Service Charges, Always',
            'Pre-Visa Loan Disbursal Available',
            'Secured & Unsecured Options',
            'Hassle-Free Documentation'
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-purple-950" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lending Partners Showcase */}
      <div className="max-w-[1150px] mx-auto mb-20">
        <div className="glass-premium p-8 sm:p-12 rounded-2xl border border-purple-950/10 bg-gradient-to-br from-purple-100/50 via-transparent to-transparent shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-amber-600 block mb-2">
                Network Strength
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                15+ Lending Partners
              </h2>
              <p className="text-xs sm:text-sm leading-[1.7] text-slate-700 mb-6">
                We manage the largest consolidated network of education loan partners in Vadodara and Ahmedabad. Submit a single unified application through our portal, and gain access to multiple customized, competing loan sanctions.
              </p>

              <div className="flex flex-wrap gap-2">
                {['SBI', 'HDFC Credila', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda', 'Avanse', 'InCred', 'Auxilo', 'Prodigy Finance', 'MPOWER'].map((partner, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold text-slate-800 bg-white border border-purple-950/10 px-3 py-1.5 rounded-lg shadow-2xs"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="glass-premium-strong p-6 rounded-xl border border-purple-950/10 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-amber-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Secured Loans</h3>
                <p className="text-xs text-slate-600 leading-[1.6]">
                  Property-backed educational loans offering lower competitive interest rates, extended flexible repayment moratoriums, and significantly higher sanction ceilings.
                </p>
              </div>

              <div className="glass-premium-strong p-6 rounded-xl border border-purple-950/10 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-amber-600 mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Unsecured Loans</h3>
                <p className="text-xs text-slate-600 leading-[1.6]">
                  No physical property collateral required. Tailored study loans evaluated primarily on co-applicant credit worthiness and future student earning potential.
                </p>
              </div>

              <div className="glass-premium-strong p-6 rounded-xl border border-purple-950/10 shadow-2xs sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-950 flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Pre-Visa Sanction Letters</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Crucial for destinations like Canada and the UK that require demonstrated liquid availability prior to formal consulate filing.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Interactive Real-Time EMI & Amortization Calculator */}
      <div className="max-w-[1150px] mx-auto mb-20">
        
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-amber-600" />
            <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-amber-600">
              Interactive Amortization
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Estimate Your <span className="text-gradient-gold">Repayment Matrix</span>
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Adjust the sliders below to dynamically calculate your estimated monthly installments.
          </p>
        </div>

        <div className="glass-premium p-8 sm:p-12 rounded-2xl border border-purple-950/10 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 flex flex-col gap-7">
              
              {/* Loan Amount Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-[1px]">
                    Target Loan Amount
                  </label>
                  <span className="text-sm font-extrabold text-purple-950 font-mono">
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-purple-950/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>₹5 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-[1px]">
                    Expected Interest Rate (p.a.)
                  </label>
                  <span className="text-sm font-extrabold text-purple-950 font-mono">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={8.0}
                  max={15.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-purple-950/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>8.0%</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-[1px]">
                    Repayment Tenure
                  </label>
                  <span className="text-sm font-extrabold text-purple-950 font-mono">
                    {tenureYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={15}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-purple-950/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>3 Years</span>
                  <span>15 Years</span>
                </div>
              </div>

            </div>

            {/* Output Amortization Readout */}
            <div className="lg:col-span-5 glass-premium-strong p-8 rounded-xl border border-amber-500/30 text-center flex flex-col justify-between relative overflow-hidden shadow-2xs">
              
              {/* Glowing accent circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-xl pointer-events-none" />

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500 block mb-1">
                  Estimated Monthly EMI
                </span>

                <div className="text-4xl sm:text-5xl font-black text-gradient-gold my-3 font-mono">
                  {formatINR(emi)}
                </div>

                <div className="text-[10px] text-slate-400 mb-6">
                  *Calculated post-moratorium / standard amortization
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-950/10 text-left">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[1px]">Principal</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5 font-mono">{formatINR(loanAmount)}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[1px]">Est. Interest</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5 font-mono">{formatINR(totalInterest)}</div>
                  </div>
                </div>

              </div>

              <Link
                to="/contact"
                className="mt-8 w-full block text-center text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 py-3 rounded-lg transition-all shadow-xs"
              >
                Apply For This Loan
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Document Preparation Index */}
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="glass-premium p-8 rounded-2xl border border-purple-950/10 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-5 h-5 text-purple-950" />
              <h3 className="text-sm font-bold text-slate-900">Student Core Documents</h3>
            </div>

            <ul className="flex flex-col gap-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>Valid Passport & Digital Photographs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>Unconditional University Offer / Admission Letter</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>Complete Academic Transcripts (10th, 12th, Degree)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>Standardized test readouts (IELTS, TOEFL, GRE)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                <span>Detailed estimation of tuition and local living costs</span>
              </li>
            </ul>
          </div>

          <div className="glass-premium p-8 rounded-2xl border border-purple-950/10 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-5 h-5 text-amber-600" />
              <h3 className="text-sm font-bold text-slate-900">Co-Applicant & Financial Index</h3>
            </div>

            <ul className="flex flex-col gap-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-950" />
                <span>Last 3 years Income Tax Returns (ITR)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-950" />
                <span>Last 6 months continuous auditable bank statements</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-950" />
                <span>Proof of relationship and PAN / Aadhar identification</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-950" />
                <span>Property title deeds (for Secured tracks only)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-950" />
                <span>Business continuity validation or corporate salary slips</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 px-6 py-3 rounded-xl transition-all shadow-xs"
          >
            Connect With Our Dedicated Finance Officer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};
