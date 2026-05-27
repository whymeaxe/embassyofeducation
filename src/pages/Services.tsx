import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  DollarSign, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Check, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Guided Counseling');
  
  // Interactive individual simulation checklists per service
  const [checklists, setChecklists] = useState<Record<string, Record<string, boolean>>>({
    'Guided Counseling': {
      'Academic transcripts mapped': true,
      'Future career viability checked': true,
      'University delegate shortlist generated': false,
      'Budget alignment evaluated': false
    },
    'Streamlined Admissions': {
      'Statement of Purpose (SOP) drafted': false,
      'Letters of Recommendation structured': true,
      'Real-time tracking portal initialized': false,
      'Application fee waivers activated': false
    },
    'Education Financing': {
      'Co-applicant financial verification': true,
      'Collateral documentation reviewed': false,
      'Pre-visa sanction letter obtained': false,
      'Zero-processing fee validation': true
    },
    'Exam Mastery': {
      'Diagnostic mock assessment taken': true,
      'Custom vocabulary/grammar matrix': false,
      'Speaking interview module booked': false,
      'Target score timeline calibrated': true
    },
    'Scholarship Acquisition': {
      'Merit bursary eligibility parsed': true,
      'Custom scholarship essay reviewed': false,
      'Departmental waiver applied': false,
      'Early deadlines tracked': true
    },
    'Visa Facilitation': {
      'Sponsorship affidavits formatted': true,
      'Financial proof verification complete': false,
      'Ex-officer mock interview booked': false,
      'Embassy appointment secured': false
    },
    'Academic Planning': {
      'Degree curriculum compared': true,
      'Post-study work permit tenure parsed': true,
      'Campus safety & locale vetting': false,
      'Credit transfer validation': false
    },
    'Professional Internships': {
      'Global network resume submitted': true,
      'Corporate placement slot reserved': false,
      'Academic credit verification': false,
      'Paid vs unpaid metrics mapped': true
    },
    'Auxiliary Support': {
      'Overseas bank account opening': false,
      'Student medical insurance bound': true,
      'Verified accommodations reserved': false,
      'Pre-departure orientation ticket': true
    }
  });

  const toggleCheck = (serviceName: string, task: string) => {
    setChecklists(prev => ({
      ...prev,
      [serviceName]: {
        ...prev[serviceName],
        [task]: !prev[serviceName][task]
      }
    }));
  };

  const servicesData = [
    {
      name: 'Guided Counseling',
      icon: <BookOpen className="w-5 h-5" />,
      tagline: 'Futuristic course mapping aligned with real-world global demand.',
      timeline: '1-2 Days',
      fee: '100% Complimentary',
      officer: 'Senior Academic Strategist',
      desc: 'Our counseling goes far beyond generic lists. We analyze global job market projections, degree ROI, and personal career aptitudes. We arrange interactive direct sessions with official university delegates so you can receive immediate on-the-spot assessments.'
    },
    {
      name: 'Streamlined Admissions',
      icon: <FileText className="w-5 h-5" />,
      tagline: 'Flawless document execution and real-time application tracking.',
      timeline: '1-3 Weeks',
      fee: 'Zero Service Charges for Partners',
      officer: 'Admissions & Editing Lead',
      desc: 'We craft bespoke Statements of Purpose (SOP) that capture your unique narrative. Our team ensures all Letters of Recommendation (LOR) and academic resumes meet elite global standards. Track every step directly via our secure internal framework.'
    },
    {
      name: 'Education Financing',
      icon: <DollarSign className="w-5 h-5" />,
      tagline: 'Study loans via 15+ premium banking partners with zero service charges.',
      timeline: '7-14 Days',
      fee: 'Zero Advisory Charges',
      officer: 'Ex-Banker Finance Facilitator',
      desc: 'We partner directly with nationalized banks (SBI, Bank of Baroda), premium private banks (HDFC, ICICI, Axis), and specialized NBFCs. We specialize in securing highly critical Pre-Visa loan disbursals and property-backed lower interest rate sanctions.'
    },
    {
      name: 'Exam Mastery',
      icon: <Award className="w-5 h-5" />,
      tagline: 'Intensive coaching with guaranteed individualized small-batch attention.',
      timeline: '4-8 Weeks',
      fee: 'Highly Subsidized Batches',
      officer: 'British Council Certified Trainer',
      desc: 'Master IELTS, TOEFL, GRE, GMAT, SAT, and PTE. We maintain an absolute cap of ≤10 students per batch. You gain access to our extensive database of 500+ recent test questions, accompanied by fully analyzed mock examinations.'
    },
    {
      name: 'Scholarship Acquisition',
      icon: <Sparkles className="w-5 h-5" />,
      tagline: 'Maximizing merit grants, early-bird bursaries, and faculty waivers.',
      timeline: 'Concurrent with Admissions',
      fee: 'Included in Core Package',
      officer: 'Grants & Bursary Specialist',
      desc: 'We exhaustively map your profile against active institutional funds, alumni endowments, and country-specific initiatives (e.g., GREAT Scholarships). We directly assist with specialized scholarship essays to secure up to 100% tuition coverage.'
    },
    {
      name: 'Visa Facilitation',
      icon: <CheckCircle2 className="w-5 h-5" />,
      tagline: 'Bulletproof documentation guided by former visa officers.',
      timeline: '2-6 Weeks',
      fee: 'Transparent Flat Rate',
      officer: 'Former Consular Officer',
      desc: 'The defining core of our practice. Our team members include ex-visa officers who know exactly what triggers an approval or rejection. We provide absolute verification of financial affidavits and conduct rigorous, live simulated embassy interviews.'
    },
    {
      name: 'Academic Planning',
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: 'Comparing 1000+ universities across 29 fully verified countries.',
      timeline: 'Immediate Mapping',
      fee: '100% Complimentary',
      officer: 'Global University Liaison',
      desc: 'We maintain continuous real-time data on changing post-study work visa rules, permanent residency pathways, campus safety indexes, and local living costs, matching you directly to destinations that serve your lifelong security.'
    },
    {
      name: 'Professional Internships',
      icon: <Award className="w-5 h-5" />,
      tagline: 'Guaranteed practical training programs integrated into your study track.',
      timeline: 'Pre-Departure Integration',
      fee: 'Varies by Corporate Track',
      officer: 'Corporate Relations Manager',
      desc: 'Through our active network of 500+ corporate partners worldwide, we secure guaranteed internship options. Gain immediate exposure to paid tech, healthcare, finance, and management positions during your designated study tenure.'
    },
    {
      name: 'Auxiliary Support',
      icon: <MapPin className="w-5 h-5" />,
      tagline: 'Seamless settlement — from forex to overseas bank setups.',
      timeline: 'Pre-Departure Briefing',
      fee: 'Zero Mark-up Services',
      officer: 'Student Operations Coordinator',
      desc: 'We manage premium student travel health insurance, open your overseas student bank account before you board your flight, secure favorable forex rates, and book fully verified, safe accommodations close to your specific campus.'
    }
  ];

  const currentService = servicesData.find(s => s.name === selectedService) || servicesData[0];

  return (
    <div className="relative z-1 pt-32 pb-24 px-6">
      
      {/* Master Header */}
      <div className="max-w-[1100px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 glass-premium px-3 py-1 rounded-full mb-4">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-amber-600">
            Excellence Matrix
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-4">
          Our Nine <span className="text-gradient-gold">Core Pathways</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Explore our end-to-end consulting framework. Select any module below to inspect complete deliverables, verified timelines, and interactive preparatory task lists.
        </p>
      </div>

      {/* Main Framework Grid */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Services Navigation Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400 px-3 mb-1">
            Select Module
          </span>

          {servicesData.map((s) => {
            const isActive = selectedService === s.name;
            return (
              <button
                key={s.name}
                onClick={() => setSelectedService(s.name)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-250 flex items-center justify-between group shadow-2xs ${
                  isActive
                    ? 'bg-purple-50 border border-purple-200 shadow-sm'
                    : 'glass-premium hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-amber-500 text-slate-950' : 'bg-purple-950/5 text-slate-600 group-hover:text-purple-950'
                  }`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold tracking-[0.1px] transition-colors ${
                      isActive ? 'text-purple-950' : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                      {s.name}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate max-w-[170px]">
                      {s.timeline}
                    </div>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${
                  isActive ? 'text-amber-600 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                }`} />
              </button>
            );
          })}

          {/* Quick Support Card */}
          <div className="mt-6 glass-premium p-5 rounded-xl border border-purple-950/10 text-center shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 mb-1">Need Unified Care?</h4>
            <p className="text-[11px] text-slate-600 mb-3 leading-[1.5]">
              Enroll in our comprehensive All-Inclusive pathway for integrated lifetime processing.
            </p>
            <Link
              to="/contact"
              className="inline-block w-full text-center text-[11px] font-bold text-white bg-purple-950 hover:bg-purple-900 py-2 rounded-lg transition-all shadow-2xs"
            >
              Consult an Expert
            </Link>
          </div>
        </div>

        {/* Detailed Inspection Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Main Deliverables View */}
          <div className="glass-premium p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-purple-950/10 shadow-xs">
            
            {/* Absolute ornamental backdrop */}
            <div className="absolute right-0 top-0 w-72 h-72 bg-radial from-purple-100/60 to-transparent pointer-events-none" />

            {/* Meta Tags Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-bold tracking-[1px] uppercase bg-purple-50 border border-purple-200 text-purple-950 px-3 py-1 rounded-full">
                Officer: {currentService.officer}
              </span>
              <span className="text-[10px] font-bold tracking-[1px] uppercase bg-amber-50 border border-amber-200 text-amber-950 px-3 py-1 rounded-full">
                Timeline: {currentService.timeline}
              </span>
              <span className="text-[10px] font-bold tracking-[1px] uppercase bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-full">
                {currentService.fee}
              </span>
            </div>

            {/* Content Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-50 border border-purple-100 text-amber-600">
                {currentService.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentService.name}
              </h2>
            </div>

            <p className="text-sm font-bold text-amber-600 mb-5">
              "{currentService.tagline}"
            </p>

            <div className="w-full h-[1px] bg-purple-950/10 mb-6" />

            <h3 className="text-xs font-bold uppercase tracking-[1.5px] text-slate-400 mb-3">
              Comprehensive Overview
            </h3>
            <p className="text-xs sm:text-sm leading-[1.75] text-slate-700 font-normal mb-8">
              {currentService.desc}
            </p>

            {/* Interactive Task Simulation Checklist */}
            <div className="glass-premium-strong p-6 rounded-xl border border-purple-950/10 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  Interactive Readiness Matrix
                </h4>
                <span className="text-[10px] text-slate-500">
                  Click to simulate readiness
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(checklists[currentService.name] || {}).map(([task, done]) => (
                  <button
                    key={task}
                    onClick={() => toggleCheck(currentService.name, task)}
                    className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-center gap-3 shadow-2xs ${
                      done 
                        ? 'bg-purple-50 border-purple-200 text-purple-950 font-medium' 
                        : 'bg-white border-purple-950/10 text-slate-500 hover:border-purple-950/20'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors flex-shrink-0 ${
                      done ? 'bg-amber-500 text-slate-950' : 'border border-slate-300'
                    }`}>
                      {done && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="truncate">{task}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Action Trigger */}
            <div className="mt-8 pt-6 border-t border-purple-950/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-slate-900">Ready to activate this module?</div>
                <div className="text-[11px] text-slate-600">Our counselors handle direct university delegation setup.</div>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto text-center text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 px-6 py-3 rounded-xl transition-all shadow-sm"
              >
                Initiate Processing
              </Link>
            </div>

          </div>

          {/* Service Frequently Asked Questions */}
          <div className="glass-premium p-8 rounded-2xl border border-purple-950/10 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6">
              Module Specific Inquiries
            </h3>

            <div className="flex flex-col gap-4">
              {[
                {
                  q: `Is there any application fee when utilizing ${currentService.name}?`,
                  a: `Through our official standing agreements with 1000+ top-tier universities, we actively secure complete application fee waivers for the vast majority of our candidates.`
                },
                {
                  q: `How do I coordinate with the ${currentService.officer}?`,
                  a: `Upon initial intake, you are assigned a dedicated direct communication line via our internal tracking interface. You can message, schedule video calls, or consult in person at our physical offices in Vadodara and Ahmedabad.`
                }
              ].map((faq, idx) => (
                <div key={idx} className="pb-4 border-b border-purple-950/10 last:border-none last:pb-0">
                  <div className="text-xs font-bold text-slate-900 mb-1 flex items-start gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </div>
                  <div className="text-xs text-slate-600 pl-5 leading-[1.6]">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
