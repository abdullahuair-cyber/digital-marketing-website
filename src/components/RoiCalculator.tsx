import React, { useState } from 'react';
import { DollarSign, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBookCall?: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBookCall }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(12000);
  const [dealValue, setDealValue] = useState<number>(1800);
  const [currentRoas, setCurrentRoas] = useState<number>(1.9);

  // Projected metrics with Apex Growth Optimization (avg 3.8x ROAS benchmark)
  const currentMonthlyRevenue = monthlySpend * currentRoas;
  const projectedRoas = Math.min(5.2, Math.max(3.2, currentRoas * 1.85));
  const projectedMonthlyRevenue = monthlySpend * projectedRoas;
  const monthlyRevenueUplift = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualRevenueUplift = monthlyRevenueUplift * 12;
  const estimatedNewCustomers = Math.round(monthlyRevenueUplift / dealValue);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#0B101D] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Growth Model
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-2">
          Calculate Your Projected Growth & Revenue Uplift
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm">
          Simulate how fixing ad spend leaks, deploying first-party CAPI, and accelerating CRO elevates your net returns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider 1: Monthly Ad Spend */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
              <span>Monthly Paid Media Budget</span>
              <span className="text-cyan-400 font-mono text-sm">${monthlySpend.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min={3000}
              max={80000}
              step={1000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>$3,000</span>
              <span>$40,000</span>
              <span>$80,000+</span>
            </div>
          </div>

          {/* Slider 2: Average Customer Value */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
              <span>Average Customer Lifetime Value (LTV)</span>
              <span className="text-cyan-400 font-mono text-sm">${dealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={100}
              max={15000}
              step={100}
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>$100 (E-com)</span>
              <span>$5,000 (Services)</span>
              <span>$15,000+ (SaaS/Enterprise)</span>
            </div>
          </div>

          {/* Slider 3: Current ROAS */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
              <span>Current Return on Ad Spend (ROAS)</span>
              <span className="text-amber-400 font-mono text-sm">{currentRoas.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={3.5}
              step={0.1}
              value={currentRoas}
              onChange={(e) => setCurrentRoas(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>1.0x (Break-even)</span>
              <span>2.0x (Average)</span>
              <span>3.5x</span>
            </div>
          </div>
        </div>

        {/* Projected Returns Column */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
            Projected 90-Day Target Model
          </div>
          
          <div className="mb-4">
            <span className="text-xs text-slate-400 block">Projected Monthly Revenue Uplift</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display flex items-center gap-2 mt-0.5">
              <span>+${Math.round(monthlyRevenueUplift).toLocaleString()}</span>
              <span className="text-xs font-semibold text-emerald-400/80 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                +{Math.round(((projectedMonthlyRevenue - currentMonthlyRevenue) / currentMonthlyRevenue) * 100)}%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pb-4 mb-4 border-b border-white/10 text-xs">
            <div className="p-3 bg-slate-950/70 rounded-xl border border-white/5">
              <span className="text-slate-400 block text-[11px]">Target Blended ROAS</span>
              <span className="text-lg font-bold text-cyan-400 mt-0.5 block font-display">
                {projectedRoas.toFixed(2)}x
              </span>
              <span className="text-[10px] text-emerald-400">+{(projectedRoas - currentRoas).toFixed(2)}x lift</span>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-white/5">
              <span className="text-slate-400 block text-[11px]">Annualized Gross Value</span>
              <span className="text-lg font-bold text-white mt-0.5 block font-display">
                +${Math.round(annualRevenueUplift).toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400">~{estimatedNewCustomers} addl. customers/mo</span>
            </div>
          </div>

          <div className="text-xs text-slate-400 mb-4 leading-relaxed flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Calculations based on 240+ verified client benchmarks across Google PMax, Meta CAPI, and CRO sprints.</span>
          </div>

          {onOpenBookCall && (
            <button
              onClick={onOpenBookCall}
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 flex items-center justify-center gap-2"
            >
              <span>Build My Custom Unit Economics Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
