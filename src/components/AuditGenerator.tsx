import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Globe, 
  Mail, 
  User, 
  Building2, 
  Target 
} from 'lucide-react';
import { AuditResult } from '../types';

interface AuditGeneratorProps {
  onOpenBookCall?: () => void;
  onShowToast: (msg: string) => void;
}

export const AuditGenerator: React.FC<AuditGeneratorProps> = ({ onOpenBookCall, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    businessType: 'B2B SaaS / Software',
    monthlyBudget: '$5,000 - $15,000',
    primaryGoal: 'Scale High-Intent Leads & Lower CPA'
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const steps = [
    'Scanning crawl architecture and Core Web Vitals...',
    'Analyzing Google AI Overviews (SGE) entity citations...',
    'Detecting Meta CAPI signal loss & ad spend leaks...',
    'Evaluating checkout friction and mobile conversion bottlenecks...',
    'Synthesizing 90-day predictive revenue roadmap...'
  ];

  const handleGenerateAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.website || !formData.email) {
      onShowToast('Please provide your website URL and email address.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisStep(0);

    // Simulate multi-step real-time crawl
    const interval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAuditResult({
            overallScore: 68,
            website: formData.website.replace(/https?:\/\//, '').replace(/\/$/, ''),
            seoScore: 72,
            paidMediaScore: 54,
            croScore: 61,
            speedScore: 84,
            criticalIssues: [
              'Missing Server-Side Meta Conversions API (CAPI) leading to ~34% untracked browser conversions',
              'High cannibalization on non-converting branded search terms draining $2,800/mo',
              'Mobile form checkout friction: 68% drop-off between step 1 and completion',
              'Zero schema entity markup for Google AI Overviews (SGE) search results'
            ],
            growthOpportunities: [
              'Deploy single-intent search keyword clusters to recover $3,200 in monthly ad waste',
              'Implement entity-based schema to capture prime Google AI Overview summary cards',
              'Streamline mobile lead capture into a 2-step progressive disclosure flow for +38% conversion lift'
            ],
            projectedRevenueUplift: '+$42,000 / mo'
          });
          onShowToast(`Audit complete for ${formData.website}! Review your diagnostic breakdown below.`);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
  };

  const handleReset = () => {
    setAuditResult(null);
    setAnalysisStep(0);
  };

  return (
    <div id="free-audit-generator" className="w-full max-w-4xl mx-auto rounded-3xl bg-[#0C1220] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" /> 100% Free • No Credit Card Required
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-3">
          Get Your Free 30-Point Marketing & CRO Audit
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Uncover where your budget is leaking. Our diagnostic engine evaluates your website speed, organic search positioning, ad spend efficiency, and conversion friction in under 60 seconds.
        </p>
      </div>

      {!auditResult && !isAnalyzing && (
        <form onSubmit={handleGenerateAudit} className="space-y-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="Jordan Belfort"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email (for detailed report) *</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="jordan@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Website URL *</label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="https://company.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Business Category</label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                >
                  <option value="B2B SaaS / Software">B2B SaaS / Software</option>
                  <option value="DTC E-Commerce">DTC E-Commerce</option>
                  <option value="Healthcare & Multi-Location">Healthcare & Multi-Location</option>
                  <option value="Professional & Legal Services">Professional & Legal Services</option>
                  <option value="Home Services & Solar">Home Services & Solar</option>
                  <option value="Other High-Growth Brand">Other High-Growth Brand</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary Marketing Objective</label>
              <div className="relative">
                <Target className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                >
                  <option value="Scale High-Intent Leads & Lower CPA">Scale High-Intent Leads & Lower CPA</option>
                  <option value="Fix Unprofitable Google / Meta Ads">Fix Unprofitable Google / Meta Ads</option>
                  <option value="Dominate Google AI Overviews & Local SEO">Dominate Google AI Overviews & Local SEO</option>
                  <option value="Double Website Conversion Rate (CRO)">Double Website Conversion Rate (CRO)</option>
                  <option value="Omnichannel Growth System">Omnichannel Growth System</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              id="generate-audit-submit-btn"
              type="submit"
              className="w-full py-4 px-8 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm sm:text-base rounded-xl transition shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Generate My Free Diagnostic Teardown</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 30-Point Deep Inspection
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Instant Live Diagnostic Preview
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero Spam Guarantee
            </span>
          </div>
        </form>
      )}

      {/* Loading Progress State */}
      {isAnalyzing && (
        <div className="py-12 text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 relative">
            <div className="w-full h-full border-4 border-slate-800 border-t-cyan-400 rounded-full animate-spin" />
            <Sparkles className="w-6 h-6 text-cyan-400 absolute inset-0 m-auto animate-pulse" />
          </div>

          <h4 className="text-xl font-bold text-white mb-2 font-display">
            Analyzing {formData.website}...
          </h4>
          <p className="text-xs text-cyan-400 font-mono mb-6 animate-pulse">
            {steps[analysisStep]}
          </p>

          <div className="w-full max-w-md mx-auto bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full transition-all duration-500"
              style={{ width: `${((analysisStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-500 mt-2 font-mono">
            {Math.round(((analysisStep + 1) / steps.length) * 100)}% complete
          </div>
        </div>
      )}

      {/* Interactive Result State */}
      {auditResult && (
        <div className="relative z-10 animate-fadeIn space-y-6">
          <div className="p-4 sm:p-6 bg-slate-900/90 border border-cyan-500/30 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  Diagnostic Report for {auditResult.website}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                  Performance & CRO Health Index: <span className="text-amber-400">{auditResult.overallScore}/100</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Status: High Revenue Growth Potential with immediate conversion leaks detected.
                </p>
              </div>

              <div className="text-left sm:text-right bg-slate-950/60 p-3 rounded-xl border border-white/5">
                <span className="text-[11px] text-slate-400 block">Projected Monthly Revenue Lift</span>
                <span className="text-xl font-extrabold text-emerald-400 font-display">
                  {auditResult.projectedRevenueUplift}
                </span>
              </div>
            </div>

            {/* 4 Pillars Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-slate-400">Technical SEO</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">{auditResult.seoScore}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-400 h-full" style={{ width: `${auditResult.seoScore}%` }} />
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-slate-400">Paid Ad Efficiency</div>
                <div className="text-lg font-bold text-amber-400 mt-1">{auditResult.paidMediaScore}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-400 h-full" style={{ width: `${auditResult.paidMediaScore}%` }} />
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-slate-400">CRO & Funnel Friction</div>
                <div className="text-lg font-bold text-rose-400 mt-1">{auditResult.croScore}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-rose-400 h-full" style={{ width: `${auditResult.croScore}%` }} />
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-slate-400">Core Web Vitals</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{auditResult.speedScore}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full" style={{ width: `${auditResult.speedScore}%` }} />
                </div>
              </div>
            </div>

            {/* Critical Issues Detected */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Primary Leaks Causing Lost Revenue</span>
              </div>
              <div className="space-y-2">
                {auditResult.criticalIssues.map((issue, idx) => (
                  <div key={idx} className="p-3 bg-rose-950/20 border border-rose-500/20 rounded-xl text-xs text-rose-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Opportunities */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Immediate 90-Day High-Impact Fixes</span>
              </div>
              <div className="space-y-2">
                {auditResult.growthOpportunities.map((opp, idx) => (
                  <div key={idx} className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-xs text-emerald-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{opp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
              {onOpenBookCall && (
                <button
                  id="audit-review-call-btn"
                  onClick={onOpenBookCall}
                  className="w-full sm:w-auto flex-1 py-3 px-6 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 flex items-center justify-center gap-2"
                >
                  <span>Review Audit Live on Screen With a Director</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => onShowToast(`Full 18-page technical diagnostic PDF dispatched to ${formData.email}!`)}
                className="w-full sm:w-auto py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Full Report</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-3 px-4 text-xs text-slate-400 hover:text-white transition text-center"
              >
                Run Another URL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
