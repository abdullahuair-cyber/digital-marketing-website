import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, TrendingUp, Calendar, ShieldCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        id="service-detail-modal"
        className="relative w-full max-w-2xl bg-[#0E1524] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {service.tag}
          </span>
          <span className="text-xs text-slate-400 capitalize">{service.category} Category</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
          {service.title}
        </h3>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          {service.longDesc}
        </p>

        {/* Deliverables Checklist */}
        <div className="mb-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> What Is Included in This Growth Sprint
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-200 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expected KPI Outcomes */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {service.kpis.map((kpi, idx) => (
            <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-white/5 text-center">
              <span className="text-[11px] text-slate-400 block">{kpi.label}</span>
              <span className="text-lg font-bold text-white mt-1 block font-display">
                {kpi.value}
              </span>
            </div>
          ))}
        </div>

        {/* SLA & Timeframe note */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 bg-slate-900/40 p-3 rounded-xl border border-slate-800">
          <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Typical Onboarding & Sprint Deployment: <strong>7 to 10 Business Days</strong></span>
        </div>

        {/* Modal Action CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 flex items-center justify-center gap-2"
          >
            <span>Request Custom Scope for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onClose}
            className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
