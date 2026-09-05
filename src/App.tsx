import React, { useState, useEffect } from 'react';
import { PageId, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookCallModal } from './components/BookCallModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { AuditPage } from './pages/AuditPage';

import { Sparkles, ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleOpenAudit = () => {
    setCurrentPage('audit');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 font-body">
      {/* 1. Global Announcement Header Banner */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-500/20 py-2 px-4 text-center text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap text-slate-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Q1 2026 Audit Openings:</span>
          <span>Only 3 complimentary 30-point marketing audit slots remaining this week.</span>
          <button
            onClick={handleOpenAudit}
            className="text-cyan-400 font-bold hover:text-cyan-300 underline inline-flex items-center gap-1 ml-1 cursor-pointer"
          >
            Claim Yours Free <ArrowRight className="w-3 h-3 inline" />
          </button>
        </div>
      </div>

      {/* 2. Responsive Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookCall={() => setIsBookCallOpen(true)}
      />

      {/* 3. Main Page Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAudit={handleOpenAudit}
            onOpenBookCall={() => setIsBookCallOpen(true)}
            onSelectService={(srv) => setSelectedService(srv)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={(srv) => setSelectedService(srv)}
            onOpenAudit={handleOpenAudit}
            onOpenBookCall={() => setIsBookCallOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenAudit={handleOpenAudit}
            onOpenBookCall={() => setIsBookCallOpen(true)}
          />
        )}

        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            onOpenAudit={handleOpenAudit}
            onOpenBookCall={() => setIsBookCallOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenBookCall={() => setIsBookCallOpen(true)}
            onOpenAudit={handleOpenAudit}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onShowToast={showToast}
            onOpenAudit={handleOpenAudit}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onShowToast={showToast}
            onOpenBookCall={() => setIsBookCallOpen(true)}
          />
        )}

        {currentPage === 'audit' && (
          <AuditPage
            onOpenBookCall={() => setIsBookCallOpen(true)}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* 4. Global Pre-Footer Conversion Callout Banner */}
      <section className="bg-gradient-to-b from-slate-900/80 to-slate-950 border-t border-cyan-500/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guaranteed Unit Economics • 90-Day SLA Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Ready To Turn Digital Marketing Into <br className="hidden sm:inline" />
            Your Highest-Yield Profit Center?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stop burning budget on unmeasured tactics. Let our senior growth architects build a custom customer acquisition engine tailored to your margins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-xl shadow-cyan-500/25 transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Book a Strategy Call</span>
            </button>

            <button
              onClick={handleOpenAudit}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Get Your Free Marketing Audit</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> No long-term lock-in contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Senior growth pods only
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 24/7 Live dashboard attribution
            </span>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookCall={() => setIsBookCallOpen(true)}
        onOpenAudit={handleOpenAudit}
      />

      {/* 6. Strategy Consultation Booking Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        onSuccess={() => {
          showToast('Strategy Consultation confirmed! Calendar invite sent.');
        }}
      />

      {/* 7. Service Detail Scope Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={() => {
          setIsBookCallOpen(true);
        }}
      />

      {/* 8. Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
