import React, { useState } from 'react';
import { RESOURCE_ARTICLES } from '../data/agencyData';
import { ResourceArticle } from '../types';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Sparkles, 
  Mail, 
  User, 
  Calendar 
} from 'lucide-react';

interface ResourcesPageProps {
  onShowToast: (msg: string) => void;
  onOpenAudit: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onShowToast, onOpenAudit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = ['all', 'SEO & Search', 'Paid Media', 'Conversion (CRO)'];

  const filteredArticles = selectedCategory === 'all'
    ? RESOURCE_ARTICLES
    : RESOURCE_ARTICLES.filter((a) => a.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setIsSubscribed(true);
    onShowToast(`Subscribed! You will receive our tactical 2026 Growth Brief every Tuesday.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <BookOpen className="w-3.5 h-3.5" /> Empirical Performance Insights
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          2026 Growth Playbooks & Strategy
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Tactical frameworks, algorithmic teardowns, and conversion benchmarks tested across $40M+ in active media spend. No fluff, just verified playbooks.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat === 'all' ? 'All Playbooks' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Lead Playbook Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-bold">
              FLAGSHIP 2026 BENCHMARK REPORT
            </span>
            <span>Updated Feb 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            The Algorithmic Shift: Navigating Search Generative Experience & Meta CAPI
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our comprehensive 48-page empirical study on how Google's AI Overviews and server-side tracking pipelines transformed unit economics for 240+ businesses.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveArticle(RESOURCE_ARTICLES[0])}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-emerald-300 transition flex items-center gap-2"
            >
              <span>Read Full Playbook</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAudit}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition"
            >
              Audit My Site Against These Standards
            </button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="p-6 sm:p-7 rounded-2xl bg-[#0C1220] border border-white/10 hover:border-cyan-500/40 transition shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="text-cyan-400 font-semibold">{article.category}</span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3 text-slate-500" /> {article.readTime}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-cyan-300 transition leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {article.summary}
              </p>

              {/* Key Takeaways Preview */}
              <div className="space-y-2 mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Key Takeaways:
                </div>
                {article.takeaways.slice(0, 2).map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="text-[11px] text-slate-400">
                By <strong className="text-white">{article.author.name}</strong>
              </div>
              <button
                onClick={() => setActiveArticle(article)}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Read Full</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Subscription Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0B101D] border border-cyan-500/20 text-center max-w-2xl mx-auto shadow-2xl">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
          The Weekly Apex Growth Brief
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
          Never Miss An Algorithm Shift
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Over 12,000 growth leaders read our tactical 5-minute teardowns covering ad platform updates, creative fatigue metrics, and technical SEO experiments.
        </p>

        {isSubscribed ? (
          <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>You're in! Check your inbox for the 2026 Master Benchmark PDF.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your work email..."
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition hover:from-cyan-300 hover:to-emerald-300 shrink-0"
            >
              Get Free Brief
            </button>
          </form>
        )}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#0E1524] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                {activeArticle.category}
              </span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
              {activeArticle.title}
            </h2>

            <div className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-white/5 mb-6 text-xs text-slate-300">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center font-display">
                {activeArticle.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{activeArticle.author.name}</div>
                <div className="text-[11px] text-slate-400">{activeArticle.author.role}</div>
              </div>
            </div>

            {/* Takeaways */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-cyan-500/20 mb-6 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Executive Action Items:
              </div>
              {activeArticle.takeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenAudit();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
              >
                <span>Audit My Site for These Optimizations</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
