import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import { 
  Search, 
  MapPin, 
  Target, 
  Share2, 
  Layout, 
  TrendingUp, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAudit: () => void;
  onOpenBookCall: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenAudit,
  onOpenBookCall
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (11)' },
    { id: 'search', label: 'SEO & Search' },
    { id: 'paid', label: 'Paid Ads (PPC)' },
    { id: 'creative', label: 'Web & Content' },
    { id: 'conversion', label: 'CRO & Automation' },
    { id: 'scale', label: 'Lead Gen & Reputation' }
  ];

  const filteredServices = filterCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === filterCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-cyan-400" />;
      case 'Target': return <Target className="w-5 h-5 text-cyan-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-cyan-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
          <Layers className="w-3.5 h-3.5" /> 2026 Full-Funnel Growth Suite
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight mb-4">
          Performance Digital Marketing Services
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From first-touch organic discovery to high-converting checkout flows and automated lifecycle nurturing. Every service is backed by rigorous unit economics and statistical testing.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                filterCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="p-6 sm:p-7 rounded-2xl bg-[#0C1220] border border-white/10 hover:border-cyan-500/40 transition shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition">
                  {getServiceIcon(service.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-300">
                  {service.tag}
                </span>
              </div>

              <h2 className="font-display font-bold text-white text-xl mb-3 group-hover:text-cyan-300 transition">
                {service.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {service.shortDesc}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Core Deliverables:
                </div>
                {service.deliverables.slice(0, 3).map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.kpis.slice(0, 2).map((kpi, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-900/80 border border-white/5 text-center">
                    <span className="text-[10px] text-slate-400 block truncate">{kpi.label}</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono block mt-0.5">{kpi.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
              <button
                onClick={() => onSelectService(service)}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
              >
                <span>View Full Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBookCall}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition"
              >
                Get Proposal
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-Service Integration Architecture */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/20 shadow-2xl">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">
            Why Isolated Services Underperform
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
            The Multi-Channel Growth Flywheel
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            When your SEO team, paid media buyers, and conversion engineers work in silos, you leak pipeline. At Apex Growth, all 11 capabilities are orchestrated by a single dedicated Growth Director to guarantee maximum cross-channel synergy and zero ad cannibalization.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 transition flex items-center gap-2"
            >
              <span>Get 30-Point Audit for Your Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBookCall}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition"
            >
              Discuss Multi-Channel Retainers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
