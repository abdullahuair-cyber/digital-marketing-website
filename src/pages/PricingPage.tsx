import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { RoiCalculator } from '../components/RoiCalculator';
import { 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  DollarSign
} from 'lucide-react';

interface PricingPageProps {
  onOpenBookCall: () => void;
  onOpenAudit: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBookCall, onOpenAudit }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const comparisonCategories = [
    {
      name: 'Media Management & Strategy',
      features: [
        { label: 'Max Monthly Ad Spend Managed', starter: 'Up to $10,000/mo', growth: 'Up to $40,000/mo', scale: 'Unlimited ($100k+/mo)' },
        { label: 'Core Channels Supported', starter: 'Single Channel', growth: 'Dual Master Channels', scale: 'Omnichannel (All)' },
        { label: 'Google Search & PMax', starter: true, growth: true, scale: true },
        { label: 'Meta Ads (FB & IG)', starter: true, growth: true, scale: true },
        { label: 'YouTube Action & Display Ads', starter: false, growth: true, scale: true },
        { label: 'Server-Side CAPI Tracking', starter: 'Basic Setup', growth: 'Advanced Gateway', scale: 'Full Custom Pipeline' }
      ]
    },
    {
      name: 'Organic Search & SEO',
      features: [
        { label: 'Technical SEO & Crawl Audits', starter: 'Quarterly', growth: 'Monthly', scale: 'Continuous' },
        { label: 'Google AI Overviews (SGE) Entity Schema', starter: false, growth: true, scale: true },
        { label: 'Local Map Pack (GBP) Management', starter: true, growth: true, scale: true },
        { label: 'Digital PR & Editorial Authority Backlinks', starter: '1/mo', growth: '3/mo', scale: '8+/mo Tier-1' }
      ]
    },
    {
      name: 'Creative Production & CRO',
      features: [
        { label: 'Direct Response Video & UGC Production', starter: 'Quarterly pack', growth: '4 new videos/mo', scale: '12+ new videos/mo' },
        { label: 'A/B Funnel Split Tests Deployed', starter: '1 test/mo', growth: '3 tests/mo', scale: 'Continuous sprints' },
        { label: 'Sub-Second Landing Page Builds', starter: false, growth: true, scale: true }
      ]
    },
    {
      name: 'Support, SLA & Account Leadership',
      features: [
        { label: 'Dedicated Senior Strategist', starter: true, growth: true, scale: true },
        { label: 'Dedicated Creative & Tech Pod', starter: false, growth: true, scale: true },
        { label: 'Real-Time 24/7 Client Portal', starter: true, growth: true, scale: true },
        { label: 'Dedicated Slack Channel', starter: false, growth: true, scale: true },
        { label: 'Guaranteed Response Time SLA', starter: '48 Hours', growth: '4 Hours', scale: '1 Hour VIP' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <DollarSign className="w-3.5 h-3.5" /> High-Accountability Retainers
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          Transparent, ROI-Driven Pricing
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          No hidden fees, no junior account handoffs. Predictable monthly retainers tied to verifiable performance milestones.
        </p>

        {/* Annual vs Monthly Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-slate-800 rounded-full p-1 transition border border-white/10 relative"
            aria-label="Toggle annual pricing"
          >
            <div
              className={`w-4 h-4 rounded-full bg-cyan-400 transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual Contract
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Save 15%
            </span>
          </div>
        </div>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition relative ${
                plan.isPopular
                  ? 'bg-[#0E1526] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/15 lg:-translate-y-2'
                  : 'bg-slate-900/50 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 uppercase tracking-wider shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-display">{plan.name}</h3>
                  {plan.badge && !plan.isPopular && (
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-display">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>
                  {isAnnual && (
                    <span className="text-[11px] text-emerald-400 block mt-0.5">
                      Billed annually (Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year)
                    </span>
                  )}
                  <div className="text-[11px] text-cyan-400 font-medium mt-1">
                    {plan.adSpendSupported}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    What's included:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBookCall}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[10px] text-slate-500 text-center mt-2">
                  Best for: {plan.bestFor}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Enterprise Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Enterprise & Multi-Location</span>
          <h3 className="text-2xl font-bold text-white font-display">Need a Custom Omnichannel Strategy?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Managing $100k+/month in paid ad spend or scaling 10+ regional locations? We engineer custom bespoke pods with dedicated engineering, data science, and weekly creative shoots.
          </p>
        </div>

        <button
          onClick={onOpenBookCall}
          className="shrink-0 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2"
        >
          <span>Book Custom Strategy Consultation</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      {/* Interactive ROI Calculator Module */}
      <RoiCalculator onOpenBookCall={onOpenBookCall} />

      {/* Comprehensive Feature Comparison Matrix */}
      <div className="space-y-8 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Granular Details</span>
          <h3 className="text-3xl font-extrabold text-white font-display mt-1">
            Compare Plan Capabilities
          </h3>
        </div>

        <div className="bg-[#0A0F1D] border border-white/10 rounded-3xl overflow-x-auto shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/60">
                <th className="p-4 text-xs font-bold uppercase text-slate-300">Features</th>
                <th className="p-4 text-xs font-bold text-white text-center w-40">Starter ($2,950)</th>
                <th className="p-4 text-xs font-bold text-cyan-400 text-center w-44 bg-cyan-500/5">Growth ($5,450)</th>
                <th className="p-4 text-xs font-bold text-white text-center w-40">Scale ($9,850)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonCategories.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  <tr className="bg-slate-950 border-y border-white/10">
                    <td colSpan={4} className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feat, featIdx) => (
                    <tr key={featIdx} className="border-b border-white/5 hover:bg-slate-900/30 text-xs">
                      <td className="p-4 text-slate-300 font-medium">{feat.label}</td>
                      
                      <td className="p-4 text-center text-slate-300">
                        {typeof feat.starter === 'boolean' ? (
                          feat.starter ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-600 mx-auto" />
                          )
                        ) : (
                          feat.starter
                        )}
                      </td>

                      <td className="p-4 text-center text-slate-100 bg-cyan-500/5 font-semibold">
                        {typeof feat.growth === 'boolean' ? (
                          feat.growth ? (
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-600 mx-auto" />
                          )
                        ) : (
                          feat.growth
                        )}
                      </td>

                      <td className="p-4 text-center text-slate-300 font-semibold">
                        {typeof feat.scale === 'boolean' ? (
                          feat.scale ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-600 mx-auto" />
                          )
                        ) : (
                          feat.scale
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
