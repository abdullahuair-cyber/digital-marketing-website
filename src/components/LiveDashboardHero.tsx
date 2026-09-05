import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  DollarSign, 
  Users, 
  Target, 
  Activity, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';

export const LiveDashboardHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'paid' | 'organic' | 'cro'>('overview');

  const tabData = {
    overview: {
      headline: 'Omnichannel Blended Revenue Engine',
      revenue: '$642,850',
      revenueChange: '+34.2% MoM',
      roas: '3.84x',
      roasChange: '+0.72x lift',
      leads: '1,420',
      leadsChange: '+88% vs prior',
      cpa: '$42.10',
      cpaChange: '-32% decrease',
      chartPoints: [35, 42, 40, 58, 62, 70, 68, 85, 92, 98, 105, 128],
      channelShare: [
        { name: 'Google Ads PMax', share: '38%', color: 'bg-cyan-400' },
        { name: 'Meta Advantage+', share: '34%', color: 'bg-indigo-400' },
        { name: 'Organic Search / SGE', share: '21%', color: 'bg-emerald-400' },
        { name: 'Direct & Email Drip', share: '7%', color: 'bg-amber-400' },
      ],
      recentEvent: 'Live Attribution: $18,400 enterprise contract closed via Google Search intent cluster.'
    },
    paid: {
      headline: 'Algorithmic Paid Media (Google & Meta CAPI)',
      revenue: '$438,200',
      revenueChange: '+41.8% vs benchmark',
      roas: '4.18x',
      roasChange: 'Highest efficiency',
      leads: '960',
      leadsChange: '+64% qualified',
      cpa: '$38.50',
      cpaChange: '-44% ad waste cut',
      chartPoints: [28, 36, 45, 52, 60, 64, 75, 82, 88, 99, 110, 134],
      channelShare: [
        { name: 'Search High-Intent', share: '44%', color: 'bg-cyan-400' },
        { name: 'Meta UGC Video', share: '36%', color: 'bg-indigo-400' },
        { name: 'YouTube Action', share: '12%', color: 'bg-rose-400' },
        { name: 'Dynamic Retargeting', share: '8%', color: 'bg-amber-400' },
      ],
      recentEvent: 'Meta Conversions API (CAPI) deduplication saved 34% in wasted attribution budget.'
    },
    organic: {
      headline: 'Entity SEO & Google AI Overviews (SGE)',
      revenue: '$164,150',
      revenueChange: '+184% YoY',
      roas: 'N/A (Organic)',
      roasChange: 'Zero Media Cost',
      leads: '420',
      leadsChange: '+112% organic calls',
      cpa: '$14.20',
      cpaChange: 'Blended cost basis',
      chartPoints: [20, 24, 29, 35, 44, 52, 61, 74, 86, 98, 114, 132],
      channelShare: [
        { name: 'AI Overviews Citations', share: '40%', color: 'bg-cyan-400' },
        { name: 'Google 3-Pack Maps', share: '32%', color: 'bg-emerald-400' },
        { name: 'BOFU Commercial Queries', share: '20%', color: 'bg-indigo-400' },
        { name: 'Topical Pillar Content', share: '8%', color: 'bg-amber-400' },
      ],
      recentEvent: 'Earned #1 AI Overview citation on primary commercial category search (18k vol/mo).'
    },
    cro: {
      headline: 'Conversion Rate Optimization (A/B Testing)',
      revenue: '+$82,400',
      revenueChange: 'Net incremental value',
      roas: '6.2x',
      roasChange: 'ROI on CRO sprint',
      leads: '+310',
      leadsChange: 'Extra conversions',
      cpa: '4.82%',
      cpaChange: '+62% funnel lift',
      chartPoints: [1.8, 2.1, 2.3, 2.4, 3.0, 3.4, 3.6, 3.9, 4.2, 4.4, 4.6, 4.8],
      channelShare: [
        { name: 'Single-Step Checkout', share: '+38%', color: 'bg-cyan-400' },
        { name: 'Progressive Form', share: '+28%', color: 'bg-indigo-400' },
        { name: 'Social Proof Badging', share: '+22%', color: 'bg-emerald-400' },
        { name: 'Sticky Mobile CTA', share: '+12%', color: 'bg-amber-400' },
      ],
      recentEvent: 'Test Variant B reached 99.4% statistical significance with a +62.4% conversion uplift.'
    }
  };

  const current = tabData[activeTab];

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl bg-[#0B101D]/90 border border-cyan-500/20 shadow-2xl p-4 sm:p-6 backdrop-blur-xl overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar of Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white font-mono tracking-tight">
              APEX PERFORMANCE ENGINE v4.2
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE STREAM
            </span>
          </div>
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
              activeTab === 'overview'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('paid')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
              activeTab === 'paid'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Paid Ads
          </button>
          <button
            onClick={() => setActiveTab('organic')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
              activeTab === 'organic'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SEO & SGE
          </button>
          <button
            onClick={() => setActiveTab('cro')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
              activeTab === 'cro'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CRO Test
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-4">
        {/* Metric 1 */}
        <div className="bg-slate-900/60 border border-white/5 p-3.5 rounded-2xl hover:border-cyan-500/30 transition">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Attributed Revenue</span>
            <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-white font-display">
            {current.revenue}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>{current.revenueChange}</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-slate-900/60 border border-white/5 p-3.5 rounded-2xl hover:border-cyan-500/30 transition">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Blended ROAS</span>
            <Target className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-white font-display">
            {current.roas}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-cyan-300 font-semibold mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>{current.roasChange}</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-slate-900/60 border border-white/5 p-3.5 rounded-2xl hover:border-cyan-500/30 transition">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Qualified Leads</span>
            <Users className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-white font-display">
            {current.leads}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>{current.leadsChange}</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-slate-900/60 border border-white/5 p-3.5 rounded-2xl hover:border-cyan-500/30 transition">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>{activeTab === 'cro' ? 'Conversion Rate' : 'Cost Per Acquisition'}</span>
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-white font-display">
            {current.cpa}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold mt-1">
            <Sparkles className="w-3 h-3" />
            <span>{current.cpaChange}</span>
          </div>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="p-4 bg-slate-950/60 border border-white/5 rounded-2xl mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>{current.headline}</span>
          </div>
          <span className="text-[11px] text-slate-400">Past 90 Days Growth Curve (Continuous Attribution)</span>
        </div>

        {/* SVG Sparkline visualization */}
        <div className="h-32 sm:h-36 w-full relative flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="20" x2="500" y2="20" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="60" x2="500" y2="60" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="100" x2="500" y2="100" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

            {/* Area under curve */}
            <path
              d="M 0 100 Q 40 85, 80 88 T 160 65 T 240 50 T 320 42 T 400 28 T 500 12 L 500 120 L 0 120 Z"
              fill="url(#chartGradient)"
            />

            {/* Main line */}
            <path
              d="M 0 100 Q 40 85, 80 88 T 160 65 T 240 50 T 320 42 T 400 28 T 500 12"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Data pulse points */}
            <circle cx="240" cy="50" r="4" fill="#00F0FF" className="animate-ping" opacity="0.6" />
            <circle cx="240" cy="50" r="4" fill="#00F0FF" />
            
            <circle cx="500" cy="12" r="5" fill="#00F0FF" />
            <circle cx="500" cy="12" r="9" fill="#00F0FF" opacity="0.3" className="animate-pulse" />
          </svg>
        </div>

        {/* Channel Share Breakouts */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
          {current.channelShare.map((ch, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${ch.color} shrink-0`} />
              <span className="text-slate-400 truncate">{ch.name}:</span>
              <span className="font-bold text-white ml-auto">{ch.share}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live feed ticker */}
      <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
        <div className="flex items-center gap-2 truncate">
          <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">{current.recentEvent}</span>
        </div>
        <span className="text-[10px] text-cyan-400 font-mono shrink-0 ml-2">Just now</span>
      </div>
    </div>
  );
};
