import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAudit: () => void;
  onOpenBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAudit,
  onOpenBookCall
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro bar for high-credibility urgency banner */}
      <div className="w-full bg-[#06090F] border-b border-white/5 py-1.5 px-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-cyan-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
          Q3 2026 Growth Benchmarks Released:
        </span>
        <span className="hidden sm:inline text-slate-300">New Meta CAPI & Google SGE performance playbook is live.</span>
        <button 
          onClick={() => handleNavClick('resources')}
          className="text-cyan-400 hover:text-cyan-300 underline font-medium ml-1 inline-flex items-center gap-0.5"
        >
          Read Brief <ArrowRight className="w-3 h-3 inline" />
        </button>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-[#080C14]/60 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Apex Growth Digital Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition">
              <div className="w-full h-full bg-[#080C14] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-lg text-cyan-400 tracking-tight">▲</span>
              </div>
            </div>
            <div>
              <div className="font-display font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                <span>APEX</span>
                <span className="text-cyan-400 font-semibold">GROWTH</span>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                <span>Digital Agency</span>
                <span className="w-1 h-1 rounded-full bg-cyan-400 inline-block" />
                <span className="text-slate-500">2026</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-white/10 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Action Group */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-book-call-btn"
              onClick={onOpenBookCall}
              className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2.5 rounded-xl transition hover:bg-white/5"
            >
              Book Strategy Call
            </button>

            <button
              id="nav-free-audit-btn"
              onClick={onOpenAudit}
              className="relative group px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Get Free Audit</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAudit}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400"
            >
              Audit
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0E18] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs font-medium transition ${
                    currentPage === item.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free 30-Point Audit</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookCall();
                }}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-800 flex items-center justify-center gap-2 border border-white/5"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Schedule 1-on-1 Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
