import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Zap, 
  HelpCircle, 
  Award, 
  HeartHandshake, 
  Users, 
  ChevronDown, 
  Sparkles, 
  Send,
  X
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  // FAQ accordion open states
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Lightbox view for Gallery
  const [lightboxImg, setLightboxImg] = useState<{
    title: string;
    label: string;
    bgClass: string;
    icon: string;
  } | null>(null);

  // Application form submitted state
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  const pillars = [
    {
      num: '01',
      title: 'Former Visa Officers on Team',
      desc: 'Ex-visa officers and immigration law experts who know exactly what embassies look for in every application, ensuring bulletproof submissions.',
      icon: <ShieldAlert className="w-5 h-5 text-amber-600" />
    },
    {
      num: '02',
      title: 'Fastest Processing in Vadodara',
      desc: 'Quickest turnaround times without ever cutting corners on the pristine quality or thoroughness of backing documentation.',
      icon: <Zap className="w-5 h-5 text-amber-600" />
    },
    {
      num: '03',
      title: 'Cost-Effective & Transparent',
      desc: 'Premium service at highly accessible prices. Zero hidden fees. Full uncompromised transparency on every single charge, always.',
      icon: <Award className="w-5 h-5 text-amber-600" />
    },
    {
      num: '04',
      title: '24 / 7 Real Support',
      desc: 'Emergencies do not keep business hours. We remain accessible round the clock via direct WhatsApp, phone, and secure email channels.',
      icon: <HelpCircle className="w-5 h-5 text-amber-600" />
    },
    {
      num: '05',
      title: 'Cultural Adaptation Training',
      desc: 'Prepare emotionally, financially, and practically for life abroad with our comprehensive pre-departure briefings and ambassador simulations.',
      icon: <HeartHandshake className="w-5 h-5 text-amber-600" />
    },
    {
      num: '06',
      title: 'Alumni Network & Career Support',
      desc: 'Connected directly with 800+ active alumni worldwide. Our support continues long after your visa stamp is securely affixed.',
      icon: <Users className="w-5 h-5 text-amber-600" />
    }
  ];

  const galleryItems = [
    {
      label: 'Ceremony',
      title: 'Graduation Celebrations',
      bgClass: 'bg-gradient-to-br from-[#1E0A42] via-[#3B1D8C] to-[#0A0518]',
      icon: '🎓',
      span: 'col-span-1 sm:col-span-2 row-span-2'
    },
    {
      label: 'Events',
      title: 'University Expo 2024',
      bgClass: 'bg-gradient-to-br from-[#0F1A35] to-[#1A2E5C]',
      icon: '🌍',
      span: 'col-span-1'
    },
    {
      label: 'Departures',
      title: 'Farewell Sendoffs',
      bgClass: 'bg-gradient-to-br from-[#2A1060] to-[#5B21B6]',
      icon: '✈️',
      span: 'col-span-1'
    },
    {
      label: 'Partnerships',
      title: 'University Agreements',
      bgClass: 'bg-gradient-to-br from-[#0A1525] to-[#1B3558]',
      icon: '🤝',
      span: 'col-span-1'
    },
    {
      label: 'Coaching',
      title: 'IELTS Batch Sessions',
      bgClass: 'bg-gradient-to-br from-[#1A0F35] to-[#3B1D8C]',
      icon: '📚',
      span: 'col-span-1 sm:col-span-2'
    },
    {
      label: 'Success',
      title: 'Scholarship Winners',
      bgClass: 'bg-gradient-to-br from-[#0F0A20] to-[#251060]',
      icon: '🏆',
      span: 'col-span-1'
    }
  ];

  const faqs = [
    {
      q: 'How long does the visa process typically take?',
      a: 'Processing times vary by country and visa type — typically 2–8 weeks. Our documentation is always flawless to minimize delays. We maintain strong relationships with embassies across all major study destinations.'
    },
    {
      q: 'Can you help if I have had a previous visa refusal?',
      a: 'Absolutely. Our team of former visa officers understands exactly why refusals happen. We analyze your previous application, identify weaknesses, rebuild your profile, and craft a compelling reapplication strategy.'
    },
    {
      q: 'Is loan facilitation really free of charge?',
      a: 'Yes, 100%. We charge zero service fees for education loan facilitation. We work with 15+ banks and NBFCs and earn through institutional partnerships — our students never pay us for loan assistance.'
    },
    {
      q: 'What IELTS score do top universities require?',
      a: 'Most top universities require a minimum of 6.5 overall with no band below 6.0. Premium institutions often require 7.0–7.5. Our coaching program is designed to help students exceed these benchmarks.'
    },
    {
      q: 'Are the internships genuinely guaranteed?',
      a: 'Yes. Through our network of 500+ corporate partners globally, we offer guaranteed placements for enrolled students. Both paid and academic credit internships available across all major industries.'
    },
    {
      q: 'Do you provide support after the visa is approved?',
      a: 'Our support doesn\'t end at the visa stamp. We provide accommodation assistance, overseas bank account setup, cultural adaptation training, and connect you with our active alumni network in your destination country.'
    }
  ];

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCareerSubmitted(true);
    setTimeout(() => setCareerSubmitted(false), 5000);
  };

  return (
    <div className="relative z-1 pt-32 pb-24 px-6">
      
      {/* Page Header */}
      <div className="max-w-[1100px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 glass-premium px-3 py-1 rounded-full mb-4">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-amber-600">
            Why Choose Us
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-4">
          Vadodara's Most <span className="text-gradient-gold">Trusted Consultancy</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          We operate at the absolute highest tier of international education consulting. Discover the uncompromised foundational pillars that secure our students' continuous global success.
        </p>
      </div>

      {/* Six Pillars & Visual DNA side */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28">
        
        {/* Left List */}
        <div className="lg:col-span-7 glass-premium rounded-2xl overflow-hidden border border-purple-950/10 divide-y divide-purple-950/10 shadow-xs">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-6 sm:p-8 flex gap-4 hover:bg-white transition-colors">
              <span className="text-[10px] font-bold tracking-[1.5px] text-slate-400 pt-1 flex-shrink-0 w-6">
                {p.num}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  {p.icon}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-[1.65] text-slate-600">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Stats Side */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          
          <div className="glass-premium p-10 rounded-2xl text-center relative overflow-hidden border border-amber-500/30 flex-1 flex flex-col justify-center shadow-xs">
            
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-amber-100/50 to-transparent pointer-events-none" />

            <div className="text-7xl font-black text-gradient-gold mb-2 font-mono">
              5<span className="text-4xl text-amber-500/40">/5</span>
            </div>

            <div className="text-xs font-bold tracking-[2px] uppercase text-slate-800">
              Google Rating · Vadodara & Ahmedabad
            </div>

            <p className="text-xs text-slate-600 mt-3 max-w-xs mx-auto leading-[1.6]">
              Consistently rated the premier choice by ambitious students and professional co-applicants.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">
            
            <div className="glass-premium p-5 rounded-xl border border-purple-950/10 text-center shadow-2xs">
              <div className="text-lg font-bold text-slate-900 mb-0.5">Ex-Visa Officers</div>
              <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Team Core</div>
            </div>

            <div className="glass-premium p-5 rounded-xl border border-purple-950/10 text-center shadow-2xs">
              <div className="text-lg font-bold text-slate-900 mb-0.5">Fastest in City</div>
              <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Processing</div>
            </div>

            <div className="glass-premium p-5 rounded-xl border border-purple-950/10 text-center shadow-2xs">
              <div className="text-lg font-bold text-slate-900 mb-0.5">24 / 7</div>
              <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Support Availability</div>
            </div>

            <div className="glass-premium p-5 rounded-xl border border-purple-950/10 text-center shadow-2xs">
              <div className="text-lg font-bold text-slate-900 mb-0.5">800+ Alumni</div>
              <div className="text-[9px] font-bold tracking-[1.5px] uppercase text-slate-400">Active Network</div>
            </div>

          </div>

        </div>

      </div>

      {/* Success Gallery Section */}
      <div className="max-w-[1150px] mx-auto mb-28">
        
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-6 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
              Visual Highlights
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Our <span className="text-gradient-gold">Moments</span>
          </h2>
          <p className="text-xs text-slate-600 mt-1">Click any item below to inspect detailed descriptions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-3">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item)}
              className={`rounded-xl overflow-hidden relative cursor-pointer glass-premium border border-purple-950/10 group shadow-xs ${item.span}`}
            >
              <div className={`w-full h-full flex items-center justify-center ${item.bgClass} transition-transform duration-500 group-hover:scale-105`}>
                
                {/* Huge semi-transparent watermarked emoji */}
                <span className="text-7xl opacity-15 select-none pointer-events-none">
                  {item.icon}
                </span>

                {/* Always visible on mobile, slick overlay on hover for desktop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col justify-end p-5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] font-bold tracking-[2px] uppercase text-amber-400 mb-1">
                    {item.label}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-white/40 mt-1 block">Click to expand overview</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-[1150px] mx-auto mb-28">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1px] bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05]">
              Common<br />
              <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-[1.6]">
              Cannot find what you require? Our operational network is continuously available round the clock.
            </p>
            
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-xl transition-all shadow-xs"
            >
              Ask Directly on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7 glass-premium rounded-2xl overflow-hidden border border-purple-950/10 divide-y divide-purple-950/10 shadow-xs">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  >
                    <span className={`text-xs sm:text-sm font-bold transition-colors ${
                      isOpen ? 'text-purple-950' : 'text-slate-700'
                    }`}>
                      {faq.q}
                    </span>

                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen 
                        ? 'bg-purple-950 border-purple-900 text-white rotate-180' 
                        : 'border-slate-300 text-slate-500'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 px-6 ${
                    isOpen ? 'max-h-48 pb-6' : 'max-h-0 pb-0'
                  }`}>
                    <p className="text-xs leading-[1.7] text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Careers Portal */}
      <div className="max-w-[1150px] mx-auto pt-12 border-t border-purple-950/10">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[3.5px] uppercase text-amber-600">
              Join Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Build a Career That<br />
            <span className="text-gradient-gold">Changes Lives</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Perks */}
          <div className="lg:col-span-7 glass-premium rounded-2xl overflow-hidden border border-purple-950/10 divide-y divide-purple-950/10 shadow-xs">
            
            {[
              {
                title: 'Competitive Compensation',
                desc: 'Above-market salaries directly tied to clear performance metrics, accompanied by transparent growth milestones.'
              },
              {
                title: 'International Exposure',
                desc: 'Attend elite global university fairs, international expos, and institutional delegation visits worldwide.'
              },
              {
                title: 'Rapid Career Growth',
                desc: 'Fast-track progression in a consultancy that rewards initiative, exceptional candidate results, and leadership.'
              },
              {
                title: 'Learning & Development',
                desc: 'Continuous institutional training, professional certifications, and legal updates to sharpen your global expertise.'
              },
              {
                title: 'Meaningful Direct Impact',
                desc: 'Every single day, your specialized diligence directly assists someone in opening their future to a superior global life.'
              }
            ].map((perk, idx) => (
              <div key={idx} className="p-6 flex gap-4 hover:bg-white">
                <div className="w-6 h-6 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{perk.title}</h4>
                  <p className="text-xs text-slate-600 leading-[1.6]">{perk.desc}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Right Application Form */}
          <div className="lg:col-span-5 glass-premium p-8 rounded-2xl border border-purple-950/10 relative overflow-hidden shadow-xs">
            
            <h3 className="text-base font-bold text-slate-900 mb-6">Submit Your Application</h3>

            {careerSubmitted ? (
              <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl text-center animate-fade-in shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-purple-950 flex items-center justify-center mx-auto mb-3 text-white">
                  <Send className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-purple-950">Application Received</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-[1.5]">
                  Our Human Resources department will review your profile and reach out directly within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCareerSubmit} className="flex flex-col gap-4">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="bg-white border border-purple-950/10 rounded-xl px-3.5 py-3 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors shadow-2xs"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-white border border-purple-950/10 rounded-xl px-3.5 py-3 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors shadow-2xs"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500">
                    Role Interested In
                  </label>
                  <select
                    required
                    className="bg-white border border-purple-950/10 rounded-xl px-3.5 py-3 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors shadow-2xs"
                  >
                    <option value="">Select a position</option>
                    <option value="Education Counselor">Education Counselor</option>
                    <option value="Visa Documentation Specialist">Visa Documentation Specialist</option>
                    <option value="IELTS / TOEFL Trainer">IELTS / TOEFL Trainer</option>
                    <option value="Admissions Coordinator">Admissions Coordinator</option>
                    <option value="Marketing Executive">Marketing Executive</option>
                    <option value="Operations Manager">Operations Manager</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-[1px] uppercase text-slate-500">
                    Cover Note / Experience
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Why are you an outstanding fit?"
                    className="bg-white border border-purple-950/10 rounded-xl px-3.5 py-3 text-xs text-slate-900 outline-none focus:border-purple-600 transition-colors resize-y shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-xs tracking-[0.2px] transition-all shadow-xs"
                >
                  Submit Application
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

      {/* Gallery Lightbox Modal View */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[10000] flex flex-col items-center justify-center p-6 animate-fade-in">
          
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className={`w-full max-w-xl h-80 sm:h-96 rounded-2xl flex items-center justify-center ${lightboxImg.bgClass} relative overflow-hidden border border-white/10 shadow-2xl`}>
            <span className="text-9xl select-none animate-pulse">
              {lightboxImg.icon}
            </span>
          </div>

          <div className="max-w-xl w-full mt-6 text-center">
            <span className="text-[10px] font-bold tracking-[2px] uppercase text-amber-500 block mb-1">
              {lightboxImg.label}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              {lightboxImg.title}
            </h3>
            <p className="text-xs text-white/40">
              Captured directly during official operational milestones. Our continuous physical presence secures verified, authentic outcomes for our students.
            </p>

            <button
              onClick={() => setLightboxImg(null)}
              className="mt-6 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-6 py-2 rounded-lg transition-colors"
            >
              Close Highlight
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
