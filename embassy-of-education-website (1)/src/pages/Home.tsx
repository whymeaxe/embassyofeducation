import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  MapPin, 
  FileText, 
  BookOpen, 
  DollarSign, 
  GraduationCap, 
  HelpCircle, 
  ChevronRight,
  Star
} from 'lucide-react';

export const Home: React.FC = () => {
  // Counters state
  const [stats, setStats] = useState({
    unis: 0,
    countries: 0,
    success: 0,
    lenders: 0
  });

  // Visa categories interactive state
  const [activeVisaCat, setActiveVisaCat] = useState('Student Visa');

  // Visa Quest interactive form state
  const [questForm, setQuestForm] = useState({
    country: '',
    category: '',
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

  // Animated runway plane absolute position
  const [planePos, setPlanePos] = useState(-10);

  // Counter simulation effect
  useEffect(() => {
    let currentUnis = 0;
    let currentCountries = 0;
    let currentSuccess = 0;
    let currentLenders = 0;

    const interval = setInterval(() => {
      let updated = false;

      if (currentUnis < 1000) { currentUnis += 25; updated = true; }
      if (currentCountries < 29) { currentCountries += 1; updated = true; }
      if (currentSuccess < 98) { currentSuccess += 2; updated = true; }
      if (currentLenders < 15) { currentLenders += 1; updated = true; }

      setStats({
        unis: Math.min(currentUnis, 1000),
        countries: Math.min(currentCountries, 29),
        success: Math.min(currentSuccess, 98),
        lenders: Math.min(currentLenders, 15)
      });

      if (!updated) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Runway plane infinite slow drift simulation
  useEffect(() => {
    let pos = -10;
    const planeInterval = setInterval(() => {
      pos += 0.25;
      if (pos > 110) pos = -15;
      setPlanePos(pos);
    }, 30);

    return () => clearInterval(planeInterval);
  }, []);

  // Handle Visa Quest evaluation
  const handleAssessEligibility = () => {
    const { country, category, marital, refusal, travel } = questForm;
    if (!country || !category || !marital || !refusal || !travel) {
      setQuestResult({
        score: null,
        verdict: '',
        description: 'Please complete all fields to generate your instant eligibility score.',
        error: true
      });
      return;
    }

    let baseScore = 88;
    if (refusal === '1 refusal') baseScore -= 18;
    if (refusal === '2+ refusals') baseScore -= 32;
    if (travel === 'No travel history') baseScore -= 5;
    if (travel === '4–10 countries') baseScore += 3;
    if (travel === '10+ countries') baseScore += 5;

    // Apply strict cap
    const finalScore = Math.max(38, Math.min(97, baseScore));

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

  const tickerItems = [
    'USA', 'United Kingdom', 'Canada', 'Australia', 'Ireland', 
    'New Zealand', 'Singapore', 'Europe', 'Student Visa', 'Work Visa', 
    'Education Loans', 'IELTS Coaching', 'Scholarships'
  ];

  return (
    <div className="relative z-1">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">
        
        {/* Glowing Announcement Badge */}
        <div className="inline-flex items-center gap-2.5 glass-premium px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="text-[10px] font-bold tracking-[1.5px] uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">
            5/5 Rating
          </span>
          <span className="text-xs font-medium text-slate-700">
            Vadodara's Premier Education Consultancy
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-black tracking-[-0.04em] leading-[0.93] mb-8 max-w-6xl">
          <span className="block text-slate-900">Your World</span>
          <span className="block text-slate-300">Awaits.</span>
          <span className="block text-gradient-gold">We Open It.</span>
        </h1>

        {/* Hero Subtext */}
        <p className="text-base sm:text-lg font-normal leading-[1.7] text-slate-600 max-w-xl mx-auto mb-11">
          From guided counseling to visa approval — every step of your global education journey, handled with precision and zero compromise.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[-0.1px] text-white bg-purple-950 hover:bg-purple-900 px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Book Free Counseling
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.1px] text-slate-700 hover:text-purple-950 glass-premium hover:bg-white px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Services
            <Sparkles className="w-4 h-4 text-amber-500" />
          </Link>
        </div>

        {/* Live Metrics Grid */}
        <div className="w-full max-w-4xl glass-premium rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-purple-950/10 overflow-hidden text-center shadow-sm">
          <div className="p-5">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
              {stats.unis}
              <span className="text-amber-600">+</span>
            </div>
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-400">
              Universities
            </div>
          </div>

          <div className="p-5">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
              {stats.countries}
            </div>
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-400">
              Countries
            </div>
          </div>

          <div className="p-5">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
              {stats.success}
              <span className="text-amber-600">%</span>
            </div>
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-400">
              Visa Success
            </div>
          </div>

          <div className="p-5">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
              5<span className="text-xs text-slate-400">/5</span>
            </div>
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-400">
              Google Rating
            </div>
          </div>

          <div className="p-5 col-span-2 sm:col-span-1">
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
              {stats.lenders}
              <span className="text-amber-600">+</span>
            </div>
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-400">
              Lending Partners
            </div>
          </div>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-slate-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-500 animate-scroll-drip" />
          </div>
          <span className="text-[8px] font-bold tracking-[3px] uppercase text-slate-400">
            Scroll
          </span>
        </div>

      </section>


      {/* ================= REAL-TIME INFINITE TICKER ================= */}
      <div className="relative border-y border-purple-950/10 glass-premium py-3 overflow-hidden">
        <div className="flex gap-14 animate-ticker w-max">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-3 text-xs font-bold tracking-[2px] uppercase text-slate-400 hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-purple-950/20" />
              {item}
            </span>
          ))}
        </div>
      </div>


      {/* ================= CORE SERVICES BENTO GRID ================= */}
      <section className="py-28 px-6 max-w-[1150px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
              Core Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Nine Ways We<br />
            <span className="text-gradient-gold">Change Your Life</span>
          </h2>
          <p className="text-sm text-slate-600 max-w-md mt-3">
            End-to-end support from first consultation to landing smoothly at your dream university abroad.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {[
            {
              num: '01',
              title: 'Guided Counseling',
              desc: 'Career-oriented counseling with futuristic course emphasis and interactive sessions with university delegates.',
              pills: ['Career Mapping', 'Uni Delegates'],
              icon: <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '02',
              title: 'Streamlined Admissions',
              desc: 'High-quality SOPs, LORs and resumes with real-time application tracking and university follow-through.',
              pills: ['SOP Writing', 'Live Tracking'],
              icon: <FileText className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '03',
              title: 'Education Financing',
              desc: 'Study loans via 15+ institutions — nationalized banks, NBFCs and international lenders. Zero service charges.',
              pills: ['Zero Charges', 'Pre-Visa Loan'],
              icon: <DollarSign className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '04',
              title: 'Exam Mastery',
              desc: 'IELTS, TOEFL, GRE and more. Small batch sizes, personalized attention, and extensive practice databases.',
              pills: ['IELTS', 'TOEFL', 'GRE'],
              icon: <Award className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '05',
              title: 'Scholarship Acquisition',
              desc: 'Merit, country and faculty-based scholarships with essay assistance, internal grants and bursaries.',
              pills: ['Merit-Based', 'Essay Help'],
              icon: <Sparkles className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '06',
              title: 'Visa Facilitation',
              desc: 'Documentation guidance, mock visa interviews and an exceptionally high success ratio across all countries.',
              pills: ['Mock Interviews', 'Ex-Officers'],
              icon: <CheckCircle2 className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '07',
              title: 'Academic Planning',
              desc: '1000+ universities across 29 countries — ranked, compared, verified and optimally matched to your profile.',
              pills: ['1000+ Unis', '29 Countries'],
              icon: <GraduationCap className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '08',
              title: 'Professional Internships',
              desc: 'Guaranteed internship programs with both paid and academic credit placements through our active global network.',
              pills: ['Guaranteed', 'Paid Options'],
              icon: <Award className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            },
            {
              num: '09',
              title: 'Auxiliary Support',
              desc: 'Insurance, verified student accommodation, overseas bank setup, favorable forex and full pre-departure briefing.',
              pills: ['Accommodation', 'Pre-Departure'],
              icon: <MapPin className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
            }
          ].map((card, idx) => (
            <Link
              key={idx}
              to="/services"
              className="glass-premium p-8 rounded-2xl relative overflow-hidden hover:bg-white hover:border-purple-950/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Subtle top light line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-slate-400 block mb-6">
                  {card.num}
                </span>

                <div className="w-10 h-10 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:border-amber-500/40 group-hover:bg-amber-50 transition-all">
                  {card.icon}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs leading-[1.65] text-slate-600 font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6">
                {card.pills.map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-[9.5px] font-bold tracking-[0.5px] text-purple-950 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full group-hover:bg-amber-50 group-hover:border-amber-200 group-hover:text-amber-900 transition-all"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </Link>
          ))}

        </div>

      </section>


      {/* ================= HIGH-TECH RUNWAY & VISA SHOWCASE ================= */}
      <section className="py-28 px-6 relative overflow-hidden">
        
        {/* Soft Background Sky Fill */}
        <div className="absolute inset-0 bg-radial from-purple-100/50 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1100px] mx-auto relative z-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-[1px] bg-amber-500" />
                <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
                  Visa Facilitation
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Every Visa.<br />
                <span className="text-gradient-gold">Every Country.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-sm leading-[1.7] text-slate-600">
                Our elite team of former visa officers and immigration experts ensures your application is flawless — the first time, every time.
              </p>
              
              <div className="flex gap-8">
                <div>
                  <div className="text-xl font-extrabold text-amber-600">98%</div>
                  <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Success Rate</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-amber-600">5</div>
                  <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Visa Types</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-amber-600">8</div>
                  <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Destinations</div>
                </div>
              </div>
            </div>
          </div>

          {/* High-fidelity Runway Glass Container */}
          <div className="glass-premium h-36 rounded-2xl relative overflow-hidden mb-6 border border-purple-950/10 shadow-xs">
            
            {/* Center Runway Guides */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-950/10 to-transparent" />
            
            {/* Pulsing Signal Lights */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-evenly px-5">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 rounded-full bg-purple-950/10 border border-purple-950/20"
                  style={{
                    animation: `rw-dot-pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.25}s`
                  }}
                />
              ))}
            </div>

            {/* Animated Golden Jet Plane */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75"
              style={{ left: `${planePos}%` }}
            >
              <div className="relative">
                
                {/* Supersonic Jet Trails */}
                <div className="absolute right-14 top-1/2 -translate-y-1/2 flex flex-col gap-1 pointer-events-none">
                  <div className="h-[1px] rounded-full bg-gradient-to-l from-amber-500/60 to-transparent w-40" />
                  <div className="h-[1px] rounded-full bg-gradient-to-l from-amber-500/30 to-transparent w-24" />
                  <div className="h-[1px] rounded-full bg-gradient-to-l from-amber-500/15 to-transparent w-12" />
                </div>

                {/* Jet Vector Graphic */}
                <svg width="64" height="32" viewBox="0 0 64 32" fill="none">
                  <path d="M60 16L6 2l4 14-4 14Z" fill="#F59E0B" fillOpacity="0.9" />
                  <path d="M10 16L2 10l2 6-2 6Z" fill="#D97706" fillOpacity="0.8" />
                  <path d="M28 16L22 8l2 8Z" fill="#F59E0B" fillOpacity="0.55" />
                  <path d="M28 16L22 24l2-8Z" fill="#D97706" fillOpacity="0.45" />
                  <circle cx="55" cy="16" r="2" fill="#FCD34D" fillOpacity="0.8" />
                </svg>

              </div>
            </div>

            {/* Floating Passport Emblem */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 animate-pass-bob pointer-events-none">
              <div className="w-11 h-15 bg-gradient-to-br from-[#3B1D8C] to-[#1B0A44] rounded-r-lg rounded-l-sm shadow-md flex items-center justify-center relative overflow-hidden border border-purple-950/20">
                {/* Spine representation */}
                <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-black/40" />
                {/* Gold Crest */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-amber-400 fill-none stroke-1">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 4a12 12 0 010 16" />
                </svg>
              </div>
            </div>

          </div>

          {/* Premium Interactive Visa Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: 'Student Visa', icon: <GraduationCap className="w-6 h-6" /> },
              { name: 'Tourist Visa', icon: <MapPin className="w-6 h-6" /> },
              { name: 'Business Visa', icon: <DollarSign className="w-6 h-6" /> },
              { name: 'Work Visa', icon: <Award className="w-6 h-6" /> },
              { name: 'Specialized Visa', icon: <Sparkles className="w-6 h-6" /> }
            ].map((cat) => {
              const isActive = activeVisaCat === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveVisaCat(cat.name)}
                  className={`p-5 rounded-xl text-center transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isActive 
                      ? 'glass-premium-strong border-amber-500/40 -translate-y-1 shadow-md' 
                      : 'glass-premium hover:bg-white hover:-translate-y-0.5'
                  }`}
                >
                  {/* Highlight bar at bottom */}
                  <div 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-amber-500 transition-all duration-300 ${
                      isActive ? 'w-12' : 'w-0'
                    }`} 
                  />

                  <div className={`mx-auto w-fit mb-3 transition-colors ${
                    isActive ? 'text-amber-600' : 'text-slate-400'
                  }`}>
                    {cat.icon}
                  </div>

                  <span className={`text-xs font-bold tracking-[0.2px] transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-500'
                  }`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail Tab Content view */}
          <div className="mt-6 glass-premium p-6 rounded-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-amber-600 block mb-1">
                Category Fast-Track
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                {activeVisaCat} Guidelines & Support
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                We handle meticulous documentation, genuine state financial proof formats, and prepare you with live ambassador interview simulations specifically adapted for this pathway.
              </p>
            </div>
            <Link
              to="/visas"
              className="text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all shadow-xs"
            >
              View Document Checklist
            </Link>
          </div>

        </div>

      </section>


      {/* ================= INTERACTIVE VISA QUEST TOOL ================= */}
      <section className="py-28 px-6 max-w-[1100px] mx-auto">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
              Interactive Tool
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Visa Quest <span className="text-gradient-gold">Eligibility</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Inputs Column */}
          <div className="lg:col-span-3 glass-premium p-8 sm:p-10 rounded-2xl relative overflow-hidden shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Check Your Eligibility</h3>
            <p className="text-xs text-slate-600 mb-7">
              Answer five core questions for an instant, mathematically calibrated visa eligibility assessment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Destination Country
                </label>
                <select 
                  value={questForm.country}
                  onChange={(e) => setQuestForm({ ...questForm, country: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 focus:bg-purple-50/30 outline-none transition-all shadow-2xs"
                >
                  <option value="">Select country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Ireland">Ireland</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Europe">Europe (Schengen)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Visa Category
                </label>
                <select 
                  value={questForm.category}
                  onChange={(e) => setQuestForm({ ...questForm, category: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 focus:bg-purple-50/30 outline-none transition-all shadow-2xs"
                >
                  <option value="">Select type</option>
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
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 focus:bg-purple-50/30 outline-none transition-all shadow-2xs"
                >
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-[1.5px] uppercase text-slate-500">
                  Previous Refusal
                </label>
                <select 
                  value={questForm.refusal}
                  onChange={(e) => setQuestForm({ ...questForm, refusal: e.target.value })}
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 focus:bg-purple-50/30 outline-none transition-all shadow-2xs"
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
                  className="bg-white border border-purple-950/10 rounded-xl px-3 py-3 text-xs text-slate-900 focus:border-purple-600 focus:bg-purple-50/30 outline-none transition-all shadow-2xs"
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
              Assess My Eligibility
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-2 glass-premium p-8 rounded-2xl flex flex-col items-center justify-center text-center min-h-[340px] relative overflow-hidden border border-purple-950/10 shadow-xs">
            
            {questResult.score !== null ? (
              <div className="animate-fade-in">
                <div className="text-6xl sm:text-7xl font-black text-gradient-gold mb-1">
                  {questResult.score}
                  <span className="text-3xl font-bold">%</span>
                </div>
                <div className="text-[9px] font-bold tracking-[2.5px] uppercase text-slate-400 mb-4">
                  Eligibility Score
                </div>

                <div className="text-base font-bold text-slate-900 mb-2">
                  {questResult.verdict}
                </div>

                <p className="text-xs leading-[1.65] text-slate-600 max-w-xs mx-auto mb-6">
                  {questResult.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-block text-xs font-bold text-white bg-purple-950 hover:bg-purple-900 px-5 py-2.5 rounded-lg transition-all shadow-xs"
                >
                  Book Free Consultation
                </Link>
              </div>
            ) : (
              <div>
                <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-950">
                  <HelpCircle className="w-6 h-6" />
                </div>
                
                {questResult.error ? (
                  <p className="text-xs text-amber-600 max-w-xs mx-auto">
                    {questResult.description}
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 leading-[1.6]">
                    Complete all input criteria and click <br />
                    <b className="text-slate-800">"Assess My Eligibility"</b> for your custom diagnostic.
                  </p>
                )}
              </div>
            )}

          </div>

        </div>

      </section>


      {/* ================= FOUR STEPS PROCESS ================= */}
      <section className="py-28 px-6 max-w-[1100px] mx-auto">
        
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Four Steps to Your<br />
            <span className="text-gradient-gold">Global Future</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          
          {/* Gradient connector line */}
          <div className="hidden lg:block absolute top-[43px] left-[13%] right-[13%] h-[2px] bg-gradient-to-r from-purple-600 to-amber-500 z-0 opacity-40" />

          {[
            {
              num: '1',
              title: 'Free Counseling Kickoff',
              desc: 'One-on-one sessions with expert counselors to thoroughly map your goals, interests, and ideal career trajectory.'
            },
            {
              num: '2',
              title: 'Course & Country Selection',
              desc: 'Compare 1000+ universities across 29 countries to pinpoint your mathematically perfect academic and cultural match.'
            },
            {
              num: '3',
              title: 'Exam Preparation',
              desc: 'Elite IELTS, TOEFL, and GRE coaching with intensive simulated mock tests and strictly limited small batches.'
            },
            {
              num: '4',
              title: 'Comprehensive Travel Prep',
              desc: 'Visa, accommodations, insurance, favorable forex, overseas bank account setups — fully handled before departure.'
            }
          ].map((step, idx) => (
            <div
              key={idx}
              className="glass-premium p-7 rounded-2xl relative z-1 hover:bg-white transition-all hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center mb-5 border border-purple-950/10 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-xs font-black text-white">
                  {step.num}
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-xs text-slate-600 leading-[1.65]">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* ================= TESTIMONIALS SLIDER TRACK ================= */}
      <section className="py-20 overflow-hidden relative">
        
        <div className="max-w-[1100px] mx-auto px-6 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
              Student Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            What Students <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        {/* Endless scrolling block */}
        <div className="relative">
          
          {/* Side fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-ticker-fast w-max hover:animation-play-state-paused">
            {[
              {
                quote: "Embassy of Education made my dream of studying in Canada a reality. The SOP they crafted was exceptional, and my visa was approved on the first attempt.",
                name: "Priya Sharma",
                dest: "University of Toronto, Canada",
                av: "P"
              },
              {
                quote: "Loan approved in two weeks — zero service charge. Completely transparent and professional. This team delivers on every single promise they make.",
                name: "Rahul Patel",
                dest: "University of Melbourne, Australia",
                av: "R"
              },
              {
                quote: "I had a prior visa refusal. They analyzed my case, rebuilt my profile and crafted a bulletproof reapplication. UK visa approved. Highly recommended!",
                name: "Ananya Desai",
                dest: "University of Manchester, UK",
                av: "A"
              },
              {
                quote: "Small batches meant individual attention every session. Scored 8.0 overall in IELTS — exactly what my university required. Outstanding faculty.",
                name: "Vivek Mehta",
                dest: "University College Dublin, Ireland",
                av: "V"
              },
              {
                quote: "From counseling to landing a 30% merit scholarship at NUS Singapore — every step handled with precision. This team operates in a different league entirely.",
                name: "Sneha Kapoor",
                dest: "National University of Singapore",
                av: "S"
              },
              {
                quote: "The 24/7 support is genuinely real. I messaged at 2am about a document issue and got a detailed response within minutes. That level of dedication is rare.",
                name: "Karan Modi",
                dest: "Arizona State University, USA",
                av: "K"
              }
            ].map((tc, idx) => (
              <div
                key={idx}
                className="w-80 sm:w-96 glass-premium p-7 rounded-2xl flex-shrink-0 transition-all hover:bg-white shadow-xs"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-[13px] leading-[1.7] text-slate-700 italic mb-6">
                  "{tc.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-xs font-extrabold text-white shadow-2xs">
                    {tc.av}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{tc.name}</div>
                    <div className="text-[10px] text-purple-950 font-medium mt-0.5">{tc.dest}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* Footer pre-CTA hook */}
      <div className="text-center py-12">
        <Link
          to="/why-us"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-purple-950 transition-colors"
        >
          Discover Our Core Philosophy & Success DNA
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
