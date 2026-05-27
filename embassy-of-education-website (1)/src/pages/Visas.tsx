import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  FileCheck, 
  AlertCircle, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export const Visas: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState('United States');
  
  // Interactive Visa Quest form
  const [questForm, setQuestForm] = useState({
    country: 'United States',
    category: 'Student Visa',
    marital: '',
    refusal: '',
    travel: ''
  });

  const [questResult, setQuestResult] = useState<{
    score: number | null;
    verdict: string;
    description: string;
    error: boolean;
  }>({
    score: null,
    verdict: '',
    description: '',
    error: false
  });

  const countriesData = [
    {
      name: 'United States',
      flag: '🇺🇸',
      visaType: 'F-1 / J-1 Student Visa',
      timeline: '2 - 4 Weeks',
      workPermit: 'Up to 3 Years (STEM OPT)',
      unis: 'MIT, Stanford, Harvard, UC Berkeley, Columbia',
      fundsRequired: '1 Year Tuition + Living (Liquid)',
      insiderNote: 'U.S. consular officers evaluate non-immigrant intent strictly. Our ex-visa officers specialize in preparing candidates to articulate clear academic goals and unshakeable home-country ties during the mandatory face-to-face interview.'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      visaType: 'Tier 4 (General) Student Visa',
      timeline: '3 - 5 Weeks',
      workPermit: '2 Years Graduate Route',
      unis: 'Oxford, Cambridge, Imperial College, LSE, UCL',
      fundsRequired: '28-Day Maintenance Rule (Strict)',
      insiderNote: 'UKVI processing operates on a highly objective point-based system. We ensure CAS statements match perfectly with state financial proof formats, completely eliminating the primary technical grounds for administrative rejection.'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      visaType: 'Study Permit (SDS & Non-SDS)',
      timeline: '4 - 8 Weeks',
      workPermit: 'Up to 3 Years (PGWP)',
      unis: 'University of Toronto, UBC, McGill, Waterloo',
      fundsRequired: '1 Year Tuition + GIC ($20,635 CAD)',
      insiderNote: 'The latest IRCC updates demand pristine Provincial Attestation Letters (PAL) and crystal-clear study intent. We craft deep, comprehensive SOPs that leave zero doubt regarding your academic capability and future return.'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      visaType: 'Subclass 500 Student Visa',
      timeline: '4 - 6 Weeks',
      workPermit: '2 to 4 Years (Post-Study Work)',
      unis: 'University of Melbourne, ANU, USYD, UNSW, Monash',
      fundsRequired: 'Genuine Student (GS) Requirement',
      insiderNote: 'The transition from GTE to the new Genuine Student (GS) requirement requires candidates to provide detailed, verified answers about their choice of provider. We conduct meticulous pre-screening to guarantee full compliance.'
    },
    {
      name: 'Ireland',
      flag: '🇮🇪',
      visaType: 'Stamp 2 Student Visa',
      timeline: '4 - 8 Weeks',
      workPermit: '2 Years (Level 9 Master’s)',
      unis: 'Trinity College Dublin, UCD, UCC, University of Galway',
      fundsRequired: '€10,000 Liquid Support Account',
      insiderNote: 'Ireland offers phenomenal entry into the European tech landscape. Embassy officials scrutinize academic consistency and English proficiency heavily. We pre-vet all backing financial sources to ensure absolute validity.'
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      visaType: 'Fee-Paying Student Visa',
      timeline: '3 - 6 Weeks',
      workPermit: 'Up to 3 Years Post-Study',
      unis: 'University of Auckland, Otago, Victoria Wellington',
      fundsRequired: '$20,000 NZD per annum living costs',
      insiderNote: 'Immigration New Zealand (INZ) conducts rigorous verification of backing financial sponsors. We implement highly precise, auditable financial tracks to ensure quick approvals without unnecessary administrative delays.'
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      visaType: 'Student’s Pass (STP)',
      timeline: '2 - 4 Weeks',
      workPermit: 'Eligible for Long-Term Visit Pass',
      unis: 'NUS, NTU, SMU, SUTD',
      fundsRequired: 'Sufficient standing capital',
      insiderNote: 'Singapore processes student passes via the SOLAR system. Once admitted to an elite institution like NUS or NTU, the visa path is exceptionally streamlined, provided basic legal disclosures are entirely accurate.'
    },
    {
      name: 'Europe',
      flag: '🇪🇺',
      visaType: 'National D-Visa / Schengen',
      timeline: '4 - 10 Weeks',
      workPermit: 'Varies by Member State (1-2 Years)',
      unis: 'ETH Zurich, TU Delft, LMU Munich, Sciences Po',
      fundsRequired: 'Blocked account / state-specific index',
      insiderNote: 'European embassies (Germany, France, Netherlands) frequently require specialized blocked accounts (e.g., Coracle/Expatrio for Germany). We guide you through the digital setup to ensure the funds certificate is securely bound.'
    }
  ];

  const currentCountry = countriesData.find(c => c.name === activeCountry) || countriesData[0];

  const handleAssessEligibility = () => {
    const { country, category, marital, refusal, travel } = questForm;
    if (!marital || !refusal || !travel) {
      setQuestResult({
        score: null,
        verdict: '',
        description: 'Please complete all fields to generate your instant eligibility score.',
        error: true
      });
      return;
    }

    let baseScore = 90;
    if (refusal === '1 refusal') baseScore -= 18;
    if (refusal === '2+ refusals') baseScore -= 32;
    if (travel === 'No travel history') baseScore -= 4;
    if (travel === '4–10 countries') baseScore += 3;
    if (travel === '10+ countries') baseScore += 5;

    const finalScore = Math.max(38, Math.min(98, baseScore));

    let verdict = '';
    let desc = '';

    if (finalScore >= 82) {
      verdict = 'Strong Candidate';
      desc = `Your profile demonstrates excellent eligibility for ${country}. We recommend scheduling a consultation to fast-track your ${category} application immediately.`;
    } else if (finalScore >= 60) {
      verdict = 'Good Prospects';
      desc = `Your profile is competitive for ${country}. A few strategic enhancements by our expert ex-visa officers could significantly strengthen your ${category} application.`;
    } else {
      verdict = 'Needs Strategy';
      desc = `Your profile has specific documentation gaps our former visa officers specialize in addressing. Book a free consultation to explore custom remediation pathways.`;
    }

    setQuestResult({
      score: finalScore,
      verdict,
      description: desc,
      error: false
    });
  };

  return (
    <div className="relative z-1 pt-32 pb-24 px-6">
      
      {/* Page Header */}
      <div className="max-w-[1100px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 glass-premium px-3 py-1 rounded-full mb-4">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-amber-600">
            Global Clearance
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-4">
          Flawless <span className="text-gradient-gold">Visa Facilitation</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          We maintain an elite success ratio across all primary global jurisdictions. Navigate our Destination Clearance Matrix below to inspect embassy criteria and insider guidance.
        </p>
      </div>

      {/* Destination Clearance Matrix */}
      <div className="max-w-[1150px] mx-auto mb-20">
        
        {/* Country Select Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {countriesData.map((c) => {
            const isActive = activeCountry === c.name;
            return (
              <button
                key={c.name}
                onClick={() => {
                  setActiveCountry(c.name);
                  setQuestForm(prev => ({ ...prev, country: c.name }));
                }}
                className={`p-3.5 rounded-xl text-center transition-all duration-250 flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-purple-50 border border-purple-200 scale-105 shadow-md'
                    : 'glass-premium hover:bg-white'
                }`}
              >
                <span className="text-2xl block">{c.flag}</span>
                <span className={`text-[11px] font-bold tracking-[0.1px] truncate w-full transition-colors ${
                  isActive ? 'text-purple-950' : 'text-slate-600'
                }`}>
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Country Deep-Dive */}
        <div className="glass-premium p-8 sm:p-12 rounded-2xl border border-purple-950/10 relative overflow-hidden shadow-xs">
          
          {/* Ornamental high-contrast watermark */}
          <div className="absolute right-6 top-6 text-8xl opacity-5 select-none pointer-events-none font-black">
            {currentCountry.flag}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Specs */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{currentCountry.flag}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                    {currentCountry.name}
                  </h2>
                </div>
                <div className="text-xs font-bold text-amber-600 tracking-[1px] uppercase">
                  {currentCountry.visaType}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="glass-premium-strong p-4 rounded-xl border border-purple-950/10 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-[1px] mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Processing Timeline
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {currentCountry.timeline}
                  </div>
                </div>

                <div className="glass-premium-strong p-4 rounded-xl border border-purple-950/10 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-[1px] mb-1">
                    <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                    Post-Study Work Rights
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {currentCountry.workPermit}
                  </div>
                </div>

                <div className="glass-premium-strong p-4 rounded-xl border border-purple-950/10 shadow-2xs sm:col-span-2">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-[1px] mb-1">
                    <Globe2 className="w-3.5 h-3.5 text-amber-600" />
                    Core Partner Universities
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    {currentCountry.unis}
                  </div>
                </div>

              </div>

              {/* Insider Note Box */}
              <div className="bg-purple-50 border border-purple-100 p-5 rounded-xl relative shadow-2xs">
                <div className="flex items-center gap-2 text-purple-950 text-xs font-bold uppercase tracking-[1px] mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Ex-Consular Officer Insider Note
                </div>
                <p className="text-xs leading-[1.65] text-slate-700">
                  {currentCountry.insiderNote}
                </p>
              </div>

            </div>

            {/* Right Document Checklist & Funding */}
            <div className="lg:col-span-5 flex flex-col gap-5 pt-2 lg:pt-0">
              
              <div className="glass-premium-strong p-6 rounded-xl border border-purple-950/10 shadow-2xs">
                <h3 className="text-xs font-bold uppercase tracking-[1.5px] text-slate-400 mb-4">
                  Mandatory Evidence Index
                </h3>

                <ul className="flex flex-col gap-3">
                  {[
                    'Unconditional Offer / CAS / PAL directly bound',
                    `Financial capacity: ${currentCountry.fundsRequired}`,
                    'Valid Passport (≥6 months beyond intended stay)',
                    'Comprehensive Medical Examination Clearance',
                    'Biometric submission / digital identity validation',
                    'Receipt of all initial embassy visa fee payments'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-6 w-full inline-block text-center text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 py-3 rounded-lg transition-all shadow-xs"
                >
                  Consult on These Documents
                </Link>
              </div>

              <div className="glass-premium p-5 rounded-xl text-center border border-purple-950/10 shadow-2xs">
                <div className="text-xs font-bold text-slate-900 mb-1">Have a complex case?</div>
                <p className="text-[11px] text-slate-600 mb-3">
                  We specialize in securing positive determinations after prior administrative refusals.
                </p>
                <Link
                  to="/contact"
                  className="text-amber-600 hover:text-amber-700 text-xs font-bold inline-flex items-center gap-1"
                >
                  Request Refusal Analysis
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Embedded Integrated Visa Quest Tool */}
      <div className="max-w-[1100px] mx-auto pt-10 border-t border-purple-950/10">
        
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Instant <span className="text-gradient-gold">Clearance Calculator</span>
          </h2>
          <p className="text-xs text-slate-600">
            Calibrating custom probability metrics for <b className="text-slate-900">{activeCountry}</b>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          <div className="lg:col-span-3 glass-premium p-8 rounded-2xl shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Target Destination
                </label>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-500 cursor-not-allowed">
                  {questForm.country}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Visa Category
                </label>
                <select 
                  value={questForm.category}
                  onChange={(e) => setQuestForm({ ...questForm, category: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 outline-none transition-all shadow-2xs"
                >
                  <option value="Student Visa">Student Visa</option>
                  <option value="Tourist Visa">Tourist Visa</option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="Work Visa">Work Visa</option>
                  <option value="Specialized Visa">Specialized Visa</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Marital Status
                </label>
                <select 
                  value={questForm.marital}
                  onChange={(e) => setQuestForm({ ...questForm, marital: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 outline-none transition-all shadow-2xs"
                >
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Previous Refusal
                </label>
                <select 
                  value={questForm.refusal}
                  onChange={(e) => setQuestForm({ ...questForm, refusal: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 outline-none transition-all shadow-2xs"
                >
                  <option value="">Select</option>
                  <option value="No refusals">No refusals</option>
                  <option value="1 refusal">1 refusal</option>
                  <option value="2+ refusals">2+ refusals</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Travel History
                </label>
                <select 
                  value={questForm.travel}
                  onChange={(e) => setQuestForm({ ...questForm, travel: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 outline-none transition-all shadow-2xs"
                >
                  <option value="">Select</option>
                  <option value="No travel history">No travel history</option>
                  <option value="1–3 countries">1–3 countries</option>
                  <option value="4–10 countries">4–10 countries</option>
                  <option value="10+ countries">10+ countries</option>
                </select>
              </div>

            </div>

            <button 
              onClick={handleAssessEligibility}
              className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl text-xs tracking-[0.2px] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Assess My Clearance Probability
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-2 glass-premium p-8 rounded-2xl flex flex-col items-center justify-center text-center min-h-[280px] shadow-xs">
            {questResult.score !== null ? (
              <div className="animate-fade-in">
                <div className="text-6xl font-black text-gradient-gold mb-1">
                  {questResult.score}
                  <span className="text-2xl font-bold">%</span>
                </div>
                <div className="text-[9px] font-bold tracking-[2px] uppercase text-slate-400 mb-3">
                  Clearance Index
                </div>
                <div className="text-sm font-bold text-slate-900 mb-2">
                  {questResult.verdict}
                </div>
                <p className="text-xs text-slate-600 max-w-xs mx-auto mb-5 leading-[1.6]">
                  {questResult.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-block text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 px-5 py-2 rounded-lg transition-all shadow-2xs"
                >
                  Schedule Strategy Call
                </Link>
              </div>
            ) : (
              <div>
                <HelpCircle className="w-10 h-10 text-purple-950/20 mx-auto mb-3" />
                {questResult.error ? (
                  <p className="text-xs text-amber-600 max-w-xs mx-auto">
                    {questResult.description}
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 leading-[1.6]">
                    Select parameters to instantly compile clearance probability for <b className="text-slate-900">{activeCountry}</b>.
                  </p>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
