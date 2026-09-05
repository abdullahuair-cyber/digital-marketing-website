import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/agencyData';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  Filter 
} from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenAudit: () => void;
  onOpenBookCall: () => void;
  onShowToast: (msg: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onOpenAudit,
  onOpenBookCall,
  onShowToast
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'ecom', label: 'E-Commerce & Retail' },
    { id: 'saas', label: 'B2B SaaS / Tech' },
    { id: 'healthcare', label: 'Healthcare & Multi-Location' },
    { id: 'services', label: 'Home & Clean Energy' }
  ];

  const filteredStudies = selectedIndustry === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((c) => {
        if (selectedIndustry === 'ecom') return c.tags.includes('E-Commerce');
        if (selectedIndustry === 'saas') return c.tags.includes('B2B SaaS');
        if (selectedIndustry === 'healthcare') return c.tags.includes('Healthcare');
        if (selectedIndustry === 'services') return c.tags.includes('Home Services');
        return true;
      });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Quantitative Case Studies
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight mb-4">
          Engineered For Verifiable Profitability
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore how we restructured ad accounts, built entity search authority, and eliminated conversion leaks to drive tens of millions in net client expansion.
        </p>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedIndustry === ind.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Deep Dive Cards */}
      <div className="space-y-12">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-3xl bg-[#0B101D] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Story & Solution */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Client: <strong>{study.client}</strong>
                  </span>
                  {study.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md text-[10px] bg-slate-900 text-slate-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {study.title}
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5">
                    <strong className="text-rose-400 block mb-1 font-semibold text-xs uppercase tracking-wider">
                      The Challenge:
                    </strong>
                    {study.challenge}
                  </div>

                  <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5">
                    <strong className="text-cyan-400 block mb-1 font-semibold text-xs uppercase tracking-wider">
                      The Strategic Fix Executed:
                    </strong>
                    {study.solution}
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 bg-slate-950/80 border-l-2 border-cyan-400 rounded-r-xl text-xs sm:text-sm text-slate-300 italic">
                  "{study.quote.text}"
                  <div className="not-italic text-[11px] font-bold text-white mt-2">
                    — {study.quote.author}, <span className="text-slate-400 font-normal">{study.quote.role}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Results & Delta Table */}
              <div className="lg:col-span-5 space-y-4">
                {/* Result KPI Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((res, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-white/5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display block">
                        {res.value}
                      </span>
                      <span className="text-xs font-semibold text-white block mt-1">{res.metric}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{res.sublabel}</span>
                    </div>
                  ))}
                </div>

                {/* Before vs. After Delta */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                    <span>Performance Delta</span>
                    <span className="text-[10px] text-cyan-400 font-mono">90-Day Sprint</span>
                  </div>

                  <div className="space-y-2.5">
                    {study.beforeAfter.map((row, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 text-xs flex items-center justify-between">
                        <span className="text-slate-400">{row.metric}</span>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-rose-400/80 line-through text-[11px]">{row.before}</span>
                          <ArrowRight className="w-3 h-3 text-slate-600" />
                          <span className="font-bold text-emerald-400">{row.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={onOpenBookCall}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 transition flex items-center justify-center gap-2"
                  >
                    <span>Achieve Similar Results for My Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onShowToast(`Complete 14-page teardown PDF for ${study.client} ready for review!`)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download Case Study PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pre-closing CTA */}
      <div className="text-center max-w-xl mx-auto p-8 rounded-3xl bg-slate-900/40 border border-white/10 space-y-4">
        <h3 className="text-2xl font-bold text-white font-display">
          Want a Custom Teardown of Your Industry?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          We will review your direct competitor search positioning and paid ad creative density during a 30-minute private consultation.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-cyan-500/20"
        >
          Claim Free Competitive Audit
        </button>
      </div>
    </div>
  );
};
