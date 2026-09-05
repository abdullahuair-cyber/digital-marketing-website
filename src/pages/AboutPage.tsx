import React from 'react';
import { TEAM_MEMBERS } from '../data/agencyData';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Cpu,
  BarChart3,
  Flame
} from 'lucide-react';

interface AboutPageProps {
  onOpenAudit: () => void;
  onOpenBookCall: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAudit, onOpenBookCall }) => {
  const values = [
    {
      title: 'Obsession With Net Pipeline, Not Vanity Impressions',
      description: 'We do not celebrate 1,000,000 impressions if your bank account didn’t grow. We measure ourselves strictly against closed revenue, qualified SQLs, and verifiable return on ad spend.'
    },
    {
      title: 'Senior Specialists Only (Zero Junior Hand-Offs)',
      description: 'The traditional agency model pitches you with seasoned partners, then dumps your ad account on a 22-year-old coordinator. At Apex Growth, every client pod is led by veterans with 8+ years of dedicated discipline experience.'
    },
    {
      title: 'Radical Transparency & Live Attribution',
      description: 'No opaque monthly reports with cherry-picked stats. You receive 24/7 direct access to live dashboards, Slack channel access to our strategists, and unvarnished truth about what is working.'
    },
    {
      title: 'Relentless Scientific Experimentation',
      description: 'The digital landscape changes every 90 days. We deploy continuous A/B multivariate tests, creative angles, and server-side tracking to keep you ahead of algorithm updates.'
    }
  ];

  const martechStack = [
    'Google Ads PMax & Search',
    'Meta Conversions API (CAPI)',
    'Google Analytics 4 & BigQuery',
    'TripleWhale & Northbeam',
    'Ahrefs & SEMrush Entity Data',
    'VWO & Optimizely CRO Sprints',
    'HubSpot & Salesforce Architecture',
    'Klaviyo & ActiveCampaign Drips',
    'Next.js High-Speed Headless Web',
    'Figma Design Systems'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Hero Narrative */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Award className="w-3.5 h-3.5" /> Built By Operators For Operators
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
          Why We Built Apex Growth: <br />
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            The Death of the Traditional Agency.
          </span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We spent a decade inside high-growth venture-backed companies and multi-million dollar e-commerce brands watching agency after agency fail. They charged heavy retainers, produced vanity slide decks, and never understood unit economics.
        </p>
      </div>

      {/* Narrative Split Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#0C1220] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Our Mission & The 2026 Growth Standard
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Apex Growth was founded in 2021 with a radical thesis: **treat client ad spend like our personal money, align incentives with actual closed gross revenue, and eliminate the bloated middle management.**
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In 2026, cookies are deprecated, AI Overviews have rewritten search behavior, and Meta requires first-party server signals. What worked in 2022 burns cash today. We engineer modern growth architecture that scales through market turbulence.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-cyan-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> $140M+ Revenue Driven
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 98% Client Retention
            </span>
          </div>
        </div>

        <div className="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Vision for Our Clients
          </div>
          <blockquote className="text-sm sm:text-base text-white font-medium italic leading-relaxed">
            "To build defensible, predictable customer acquisition flywheels that transform our partners from competitive price-takers into uncontested category dominators."
          </blockquote>
          <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
            — Executive Committee, Apex Growth Digital
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Our Non-Negotiables</span>
          <h3 className="text-3xl font-extrabold text-white font-display mt-1">Core Principles</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition">
              <div className="text-cyan-400 font-mono text-xs font-bold mb-2">0{idx + 1}.</div>
              <h4 className="font-display font-bold text-white text-lg mb-2">{val.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Specialists Team */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">The Specialists</span>
          <h3 className="text-3xl font-extrabold text-white font-display mt-1">Meet the Senior Growth Pod</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Every strategist managing your account holds elite operational credentials and direct accountability for your P&L.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0B101D] border border-white/5 hover:border-cyan-500/40 transition flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center font-display font-extrabold text-lg text-slate-950 mb-4 shadow-lg shadow-cyan-500/20">
                  {member.image}
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-0.5">{member.name}</h4>
                <div className="text-xs text-cyan-400 font-medium mb-3">{member.role}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{member.bio}</p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-slate-300">{member.specialty}</div>
                <div className="text-slate-500">{member.credentials}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2026 MarTech Stack Showcase */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Infrastructure</span>
          <h3 className="text-2xl font-bold text-white font-display mt-1">Our 2026 Certified Technology Stack</h3>
          <p className="text-xs text-slate-400 mt-1">
            Enterprise integrations configured for 100% server-side attribution and zero data loss.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {martechStack.map((tech, idx) => (
            <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-white/5 text-center text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/30 transition">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <h3 className="text-2xl font-bold text-white font-display">Ready to Work With a True Growth Partner?</h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Book a 30-minute growth diagnostic call to review your current funnel and explore partnership opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBookCall}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 transition flex items-center gap-2"
          >
            <span>Schedule Strategy Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenAudit}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition"
          >
            Get Free Audit First
          </button>
        </div>
      </div>
    </div>
  );
};
