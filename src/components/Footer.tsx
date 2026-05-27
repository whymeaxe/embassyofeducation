import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-1 border-t border-purple-950/10 glass-premium pt-18 pb-9 px-6 mt-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-purple-950/10">
          
          {/* Brand & Value Proposition */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col group inline-block">
              <span className="text-[8.5px] font-semibold tracking-[3.5px] uppercase text-amber-600 transition-colors">
                Embassy of
              </span>
              <span className="text-[15px] font-extrabold tracking-[-0.5px] text-slate-900">
                Education
              </span>
            </Link>
            <p className="text-[13px] leading-[1.7] text-slate-600 max-w-[260px] my-4">
              Your complete partner for global education — from first consultation to landing at your dream university abroad. Handled with absolute precision.
            </p>

            {/* Premium Social Links */}
            <div className="flex gap-2 mt-6">
              {[
                {
                  name: 'Instagram',
                  url: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-slate-500 fill-none stroke-2 group-hover:stroke-white transition-colors">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: 'LinkedIn',
                  url: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-slate-500 fill-none stroke-2 group-hover:stroke-white transition-colors">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  url: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-slate-500 fill-none stroke-2 group-hover:stroke-white transition-colors">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  name: 'YouTube',
                  url: '#',
                  svg: (
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-slate-500 fill-none stroke-2 group-hover:stroke-white transition-colors">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                  ),
                },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  className="w-8 h-8 bg-white border border-purple-950/10 rounded-lg flex items-center justify-center hover:bg-purple-950 hover:border-purple-950 transition-all duration-250 hover:-translate-y-0.5 group shadow-xs"
                  aria-label={`Follow us on ${soc.name}`}
                >
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400 mb-4.5">
              Services
            </h6>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: 'Guided Counseling', path: '/services' },
                { name: 'Streamlined Admissions', path: '/services' },
                { name: 'Education Financing', path: '/financing' },
                { name: 'Exam Mastery', path: '/services' },
                { name: 'Scholarships', path: '/services' },
                { name: 'Visa Facilitation', path: '/visas' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-[13.5px] text-slate-600 hover:text-purple-950 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h6 className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400 mb-4.5">
              Destinations
            </h6>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: 'United States', path: '/visas' },
                { name: 'United Kingdom', path: '/visas' },
                { name: 'Canada', path: '/visas' },
                { name: 'Australia', path: '/visas' },
                { name: 'Ireland', path: '/visas' },
                { name: 'Singapore & Asia', path: '/visas' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-[13.5px] text-slate-600 hover:text-purple-950 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400 mb-4.5">
              Company
            </h6>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: 'Why Choose Us', path: '/why-us' },
                { name: 'Our Process', path: '/why-us' },
                { name: 'Success Gallery', path: '/why-us' },
                { name: 'Careers', path: '/why-us' },
                { name: 'Contact & Offices', path: '/contact' },
                { name: 'Book Session', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-[13.5px] text-slate-600 hover:text-purple-950 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[12.5px] text-slate-500">
            © {new Date().getFullYear()} Embassy of Education. All rights reserved. Vadodara & Ahmedabad, Gujarat, India.
          </p>
          <div className="flex gap-5 text-[12.5px]">
            <Link to="#" className="text-slate-500 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-slate-500 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-slate-500 hover:text-slate-900 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
