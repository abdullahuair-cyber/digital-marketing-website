import React, { useState } from 'react';
import { PageId, ServiceItem, CaseStudyItem } from '../types';
import { 
  SERVICES_DATA, 
  CASE_STUDIES_DATA, 
  TESTIMONIALS_DATA, 
  PRICING_PLANS, 
  FAQ_ITEMS 
} from '../data/agencyData';
import { LiveDashboardHero } from '../components/LiveDashboardHero';
import { AuditGenerator } from '../components/AuditGenerator';
import { RoiCalculator } from '../components/RoiCalculator';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Zap, 
  Users, 
  BarChart3, 
  Sparkles,
  AlertOctagon,
  Search,
  Layout,
  MapPin,
  Share2,
  Cpu,
  FileText,
  HelpCircle,
  Clock,
  DollarSign
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAudit: () => void;
  onOpenBookCall: () => void;
  onSelectService: (service: ServiceItem) => void;
  onShowToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAudit,
  onOpenBookCall,
  onSelectService,
  onShowToast
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>(CASE_STUDIES_DATA[0].id);

  const activeCaseStudy = CASE_STUDIES_DATA.find((c) => c.id === selectedCaseStudyId) || CASE_STUDIES_DATA[0];

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

  const clientLogos = [
    { name: 'Lumin Studio', industry: 'Omnichannel Apparel' },
    { name: 'Strata Intel', industry: 'Enterprise SaaS' },
    { name: 'Beacon Health', industry: '14 Clinics' },
    { name: 'SolarPulse', industry: 'Clean Energy' },
    { name: 'Fintech Velocity', industry: 'Series B FinTech' },
    { name: 'Vanguard Legal', industry: 'High-Ticket Legal' }
  ];

  const problems = [
    {
      title: 'Low High-Intent Website Traffic',
      problem: 'Generic traffic that bounces in 4 seconds without generating a single pipeline opportunity.',
      solution: 'We engineer bottom-of-funnel entity SEO and commercial intent search campaigns that capture users with immediate buying intent.'
    },
    {
      title: 'Expensive Ads With Dying ROAS',
      problem: 'Meta and Google ad costs rising each quarter while cookie depreciation breaks your pixel attribution.',
      solution: 'Server-Side Conversions API (CAPI) + high-velocity direct-response creative testing to lower CPAs by 35%+.'
    },
    {
      title: 'Poor Google Rankings & Map Pack Loss',
      problem: 'Competitors outranking you on high-value keywords and capturing 80% of local map pack inquiries.',
      solution: 'Full entity knowledge-graph optimization and geo-grid GBP syndication to secure top 3 rankings.'
    },
    {
      title: 'Low Landing Page Conversion Rates',
      problem: 'Sending paid traffic to friction-heavy, slow desktop pages with 8-field contact forms that prospects abandon.',
      solution: 'Rigorous A/B split-testing and mobile sub-second landing page architecture with progressive conversion triggers.'
    },
    {
      title: 'Inconsistent, Unqualified Inbound Leads',
      problem: 'Sales team wasting valuable hours chasing tire-kickers, no-shows, and disqualified low-budget leads.',
      solution: 'Automated CRM lead scoring gates and self-scheduling qualification funnels that only book qualified decision-makers.'
    },
    {
      title: 'Opaque Agency Reporting & Vanity Metrics',
      problem: 'Agencies hiding behind useless impressions, clicks, and vanity rankings with zero revenue accountability.',
      solution: '24/7 live client portal showing verified ad spend, cost per SQL, customer acquisition cost, and attributed net revenue.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Trust Badge Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span>Award-Winning Performance Digital Marketing Agency</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Google & Meta Premier Partner</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl mx-auto font-display leading-[1.1] mb-6">
            Turn Digital Marketing Into Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-emerald-400 bg-clip-text text-transparent">
              Predictable Growth Engine.
            </span>
          </h1>

          {/* Supporting Subheadline */}
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            We help ambitious businesses and category leaders scale revenue with mathematical precision. High-intent SEO, algorithmic Google & Meta Ads, and behavioral Conversion Rate Optimization.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
            <button
              id="hero-primary-audit-btn"
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-xl shadow-cyan-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Get Your Free Marketing Audit</span>
            </button>

            <button
              id="hero-secondary-results-btn"
              onClick={() => {
                const el = document.getElementById('case-studies-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition flex items-center justify-center gap-2"
            >
              <span>View Our Results</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Live Interactive Analytics Dashboard Visual */}
          <div className="mb-16">
            <LiveDashboardHero />
          </div>

          {/* Client Logo Trust Bar */}
          <div className="pt-8 border-t border-white/5">
            <div className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-6">
              Trusted by 240+ ambitious businesses scaling with Apex Growth
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              {clientLogos.map((client, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 text-center group hover:border-cyan-500/30 transition"
                >
                  <div className="font-display font-bold text-slate-300 text-sm group-hover:text-white transition">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                    {client.industry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-3">
            <AlertOctagon className="w-3.5 h-3.5" /> The Broken Agency Paradigm
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Why Most Digital Marketing Fails To Drive Revenue
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Most businesses burn tens of thousands on disconnected tactics: pretty web designs that don’t convert, ad agencies optimizing for clicks instead of pipeline, and SEO teams chasing vanity keywords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition">
                    {item.title}
                  </h3>
                </div>

                <div className="text-xs text-rose-300/80 mb-4 bg-rose-950/20 p-3 rounded-xl border border-rose-500/10 leading-relaxed">
                  <strong className="text-rose-400 font-semibold block mb-1">The Bottleneck:</strong>
                  {item.problem}
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-cyan-400 font-semibold block mb-1">The Apex Growth Fix:</strong>
                  {item.solution}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-[11px] text-cyan-400 font-semibold">
                <span>Direct Revenue Impact Guaranteed</span>
                <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPREHENSIVE SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              <Zap className="w-3.5 h-3.5" /> Full-Funnel Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Performance Services Built For Scale
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Every channel is engineered to work together. From top-of-funnel discovery to checkout conversion and CRM lifecycle retention.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition flex items-center gap-2"
          >
            <span>Explore All 11 Services & Scopes</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 9).map((service) => (
            <div 
              key={service.id}
              className="p-6 rounded-2xl bg-[#0C111E] border border-white/5 hover:border-cyan-500/40 transition shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-cyan-300">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Top Deliverables */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  {service.kpis[0].value} {service.kpis[0].label}
                </span>
                <button
                  id={`learn-more-${service.id}-btn`}
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US & VISUAL STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/20 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> The Apex Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
              Engineered Exclusively For High-Growth Outcomes
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We replaced traditional agency fluff with senior data scientists, media buyers, and conversion architects who own revenue outcomes.
            </p>
          </div>

          {/* 6 Key Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">Data-Driven Mathematical Precision</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No subjective gut feelings. Every dollar invested is backed by regression analysis, statistical significance, and first-party attribution modeling.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">100% Transparent Live Reporting</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                24/7 direct access to live client dashboards. See exact ad spend, blended CAC, closed deals, and net ROAS in real time.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">Conversion-Focused Architecture</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traffic without conversion is useless. We optimize every pixel of your landing pages, checkout forms, and post-click journeys.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">Senior Specialists Only</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                You will never be handed off to junior interns. Your account is spearheaded by veterans with 8+ years experience managing $10M+ in spend.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">Customized Unit Economics</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No cookie-cutter packages. We construct a bespoke multi-channel playbook tailored to your specific profit margins and customer lifetime value.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <DollarSign className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">ROI-Obsessed Performance Culture</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We align our incentives with your bottom line. We scale what generates cash flow and ruthlessly cut what doesn’t.
              </p>
            </div>
          </div>

          {/* Realistic High-Impact Visual Metric Counters */}
          <div className="p-6 sm:p-8 bg-slate-950/80 rounded-2xl border border-cyan-500/30">
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                Aggregate Client Performance Benchmarks (2026 Sample/Demo Data)
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-5xl font-extrabold text-cyan-400 font-display">
                  +247%
                </div>
                <div className="text-xs font-semibold text-white mt-1">Average Traffic Growth</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Qualified organic & paid sessions</div>
              </div>

              <div>
                <div className="text-3xl sm:text-5xl font-extrabold text-indigo-400 font-display">
                  3.8x
                </div>
                <div className="text-xs font-semibold text-white mt-1">Average Blended ROAS</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Across Google PMax & Meta CAPI</div>
              </div>

              <div>
                <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 font-display">
                  +62%
                </div>
                <div className="text-xs font-semibold text-white mt-1">Conversion Rate Lift</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Average CRO A/B testing uplift</div>
              </div>

              <div>
                <div className="text-3xl sm:text-5xl font-extrabold text-amber-400 font-display">
                  500K+
                </div>
                <div className="text-xs font-semibold text-white mt-1">Leads & Sales Generated</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Validated CRM attributed pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (01 Discover, 02 Strategize, 03 Execute, 04 Scale) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" /> Repeatable Execution
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Our 4-Step Growth Architecture
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From initial forensic audit to automated algorithmic scaling, here is how we systematically transform your digital marketing into a profit center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/40 transition group">
            <div className="text-3xl font-extrabold text-cyan-400/40 font-mono mb-4 group-hover:text-cyan-400 transition">
              01
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">
              Discover & Audit
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              We perform a deep forensic teardown of your ad accounts, pixel tracking, crawl architecture, and competitor search rankings to expose hidden ad waste and conversion leaks.
            </p>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 30-Point Diagnostic Blueprint
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/40 transition group">
            <div className="text-3xl font-extrabold text-indigo-400/40 font-mono mb-4 group-hover:text-indigo-400 transition">
              02
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">
              Strategize & Model
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              We architect your custom unit economic growth model. Mapping high-intent search clusters, creative testing matrices, server-side data routing, and target CPA benchmarks.
            </p>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Unit Economics Roadmap
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/40 transition group">
            <div className="text-3xl font-extrabold text-emerald-400/40 font-mono mb-4 group-hover:text-emerald-400 transition">
              03
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">
              Execute & Launch
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Our specialists rebuild your campaigns, launch sub-second landing pages, deploy Meta CAPI, and begin weekly direct-response video creative iterations.
            </p>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 7-10 Day Sprint Deployment
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/40 transition group">
            <div className="text-3xl font-extrabold text-amber-400/40 font-mono mb-4 group-hover:text-amber-400 transition">
              04
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">
              Scale & Dominate
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Once positive unit economics are locked, we pour fuel on the fire: algorithmic value bidding, expansion into cross-channel PMax/YouTube, and continuous A/B testing.
            </p>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Continuous ROAS Compounding
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES SHOWCASE */}
      <section id="case-studies-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Real Clients. Verified Results.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Inspect our real before-and-after client case studies across e-commerce, B2B enterprise software, multi-location healthcare, and high-ticket services.
            </p>
          </div>

          {/* Case study tabs */}
          <div className="flex flex-wrap gap-2">
            {CASE_STUDIES_DATA.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseStudyId(cs.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                  selectedCaseStudyId === cs.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cs.client}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Detailed Teardown Card */}
        <div className="rounded-3xl bg-[#0B101D] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Narrative & Proof */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {activeCaseStudy.industry}
                </span>
                {activeCaseStudy.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md text-[11px] bg-slate-900 text-slate-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {activeCaseStudy.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-white/5">
                  <strong className="text-rose-400 block mb-1 font-semibold">The Core Challenge:</strong>
                  {activeCaseStudy.challenge}
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-white/5">
                  <strong className="text-cyan-400 block mb-1 font-semibold">The Growth Strategy Executed:</strong>
                  {activeCaseStudy.solution}
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-4 bg-slate-950/80 border-l-2 border-cyan-400 rounded-r-xl text-xs sm:text-sm text-slate-300 italic">
                "{activeCaseStudy.quote.text}"
                <div className="not-italic text-[11px] font-bold text-white mt-2">
                  — {activeCaseStudy.quote.author}, <span className="text-slate-400 font-normal">{activeCaseStudy.quote.role}</span>
                </div>
              </div>
            </div>

            {/* Right: Before vs. After Metrics Table & Big Stats */}
            <div className="lg:col-span-5 space-y-4">
              {/* Big Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {activeCaseStudy.results.map((res, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display block">
                      {res.value}
                    </span>
                    <span className="text-xs font-semibold text-white block mt-1">{res.metric}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{res.sublabel}</span>
                  </div>
                ))}
              </div>

              {/* Before vs. After Comparison Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                  <span>Metric Comparison</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Verified 90-Day Delta</span>
                </div>

                <div className="space-y-2.5">
                  {activeCaseStudy.beforeAfter.map((row, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 text-xs flex items-center justify-between">
                      <span className="text-slate-400">{row.metric}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-rose-400/80 line-through text-[11px]">{row.before}</span>
                        <ArrowRight className="w-3 h-3 text-slate-600" />
                        <span className="font-bold text-emerald-400 font-mono">{row.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onShowToast(`Full PDF Case Study teardown for ${activeCaseStudy.client} has been sent to your downloads!`)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition flex items-center justify-center gap-2"
              >
                <span>Download Full Growth Teardown (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Verified Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Trusted By Founders & CMOs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Read what happens when you partner with a digital marketing agency that prioritizes profit over vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((test) => (
            <div 
              key={test.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {test.metricHighlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center text-xs font-bold text-slate-950">
                  {test.avatar}
                </div>
                <div>
                  <div className="font-bold text-xs text-white">{test.name}</div>
                  <div className="text-[11px] text-slate-400">{test.role}, {test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PRICING TIERS OVERVIEW & ROI CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <DollarSign className="w-3.5 h-3.5" /> Simple Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Predictable Investment. Compounding Returns.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Choose the growth tier that aligns with your scale. No hidden fees, no long-term hostage contracts.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
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
                      ${plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>
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
                  id={`pricing-cta-${plan.id}-btn`}
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
          ))}
        </div>

        {/* Custom Strategy CTA */}
        <div className="text-center p-6 bg-slate-900/40 border border-white/5 rounded-2xl max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            Need a custom omnichannel strategy or managing over $100k/month in ad spend?
          </p>
          <button
            onClick={onOpenBookCall}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1"
          >
            <span>Speak with an Executive Growth Partner for Enterprise Scopes</span>
            <ArrowRight className="w-3.5 h-3.5 inline" />
          </button>
        </div>

        {/* Interactive ROI Calculator */}
        <RoiCalculator onOpenBookCall={onOpenBookCall} />
      </section>

      {/* 9. LEAD MAGNET: GET YOUR FREE DIGITAL MARKETING AUDIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuditGenerator onOpenBookCall={onOpenBookCall} onShowToast={onShowToast} />
      </section>

      {/* 10. CONVERSION FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Everything you need to know about our methodology, onboarding, and performance accountability.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/50 border border-white/5 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
