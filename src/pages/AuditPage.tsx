import React from 'react';
import { AuditGenerator } from '../components/AuditGenerator';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, BarChart3, Search, Zap, Target } from 'lucide-react';

interface AuditPageProps {
  onOpenBookCall: () => void;
  onShowToast: (msg: string) => void;
}

export const AuditPage: React.FC<AuditPageProps> = ({ onOpenBookCall, onShowToast }) => {
  const auditFeatures = [
    {
      title: '30-Point Technical Crawl Diagnostic',
      desc: 'We analyze your site architecture, Core Web Vitals, server response times, and indexation bloat.'
    },
    {
      title: 'Competitor Search Keyword Gap',
      desc: 'See exactly which high-intent commercial keywords your competitors rank for that you are missing.'
    },
    {
      title: 'Paid Media Tracking & CAPI Audit',
      desc: 'Verify if your Meta Conversions API and Google Enhanced Conversions are dropping purchase attribution.'
    },
    {
      title: 'Conversion Funnel Leak Teardown',
      desc: 'Identify specific form friction points and checkout hurdles that are depressing your conversion rate.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" /> 100% Free • Value: $1,500 • No Obligation
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          Get Your Free 2026 Digital Marketing Audit
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Expose hidden ad spend waste, broken tracking pixels, and untapped keyword rankings in 30 seconds. Powered by our proprietary forensic growth engine.
        </p>
      </div>

      {/* Main Audit Generator Component */}
      <AuditGenerator onOpenBookCall={onOpenBookCall} onShowToast={onShowToast} />

      {/* What happens next / What is evaluated */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Methodology</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
            What Is Evaluated in Your Forensic Teardown
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {auditFeatures.map((feat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3 font-mono text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1.5">{feat.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
