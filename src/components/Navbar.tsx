import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle solid background class if scrolled down
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate smooth top scroll progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Visas', path: '/visas' },
    { name: 'Financing', path: '/financing' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-600 via-amber-500 to-amber-400 z-[8999] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navigation */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-32px)] max-w-[1160px] h-14 flex items-center justify-between px-5 rounded-xl transition-all duration-400 ${
          isScrolled ? 'glass-nav-solid shadow-lg' : 'glass-nav'
        }`}
      >
        {/* Brand */}
        <Link to="/" className="flex flex-col group">
          <span className="text-[8.5px] font-semibold tracking-[3.5px] uppercase text-amber-600 group-hover:text-amber-500 transition-colors">
            Embassy of
          </span>
          <span className="text-[15px] font-extrabold tracking-[-0.5px] text-slate-900">
            Education
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-medium tracking-[0.1px] transition-all relative py-1 ${
                  active 
                    ? 'text-purple-950 font-bold' 
                    : 'text-slate-600 hover:text-purple-950'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 rounded-full animate-pulse-gold" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA / Controls */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block text-[12.5px] font-bold tracking-[0.2px] text-white bg-purple-950 hover:bg-purple-900 px-4 py-2 rounded-lg transition-all duration-250 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Book Free Counseling
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-purple-950 p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Over Menu */}
      <div
        className={`fixed inset-0 bg-[#FAFAFC]/95 backdrop-blur-2xl z-[990] flex flex-col items-center justify-center gap-8 transition-all duration-350 ease-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-7 w-full px-6">
          {links.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-bold tracking-tight transition-colors ${
                  active ? 'text-amber-600' : 'text-slate-600 hover:text-purple-950'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="w-16 h-[1px] bg-purple-950/10 my-2" />

          <Link
            to="/contact"
            className="w-full max-w-xs text-center text-[15px] font-bold tracking-[0.2px] text-white bg-purple-950 hover:bg-purple-900 py-3.5 rounded-xl transition-all duration-250 shadow-md"
          >
            Book Free Counseling
          </Link>
        </div>
      </div>
    </>
  );
};
