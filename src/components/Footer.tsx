import React, { useState } from 'react';
import { PageId } from '../types';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAudit: () => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit, onShowToast }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    onShowToast('Subscribed to the Weekly Apex Growth Brief! Expect tactical insights every Tuesday.');
  };

  const scrollToTop = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/20 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> High-Impact Performance Audit
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
              Ready to stop bleeding ad spend and unlock predictable revenue?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
              We will conduct a forensic 30-point audit of your search rankings, ad accounts, and conversion funnels to pinpoint exactly where you are losing revenue. 100% free, no sales pressure.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="footer-get-audit-btn"
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition shadow-lg shadow-cyan-500/25 flex items-center gap-2 text-sm"
              >
                <span>Claim Your Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="footer-contact-btn"
                onClick={() => scrollToTop('contact')}
                className="px-5 py-3.5 rounded-xl font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition text-sm"
              >
                Talk to a Growth Director
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
                <div className="w-full h-full bg-[#080C14] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-cyan-400">▲</span>
                </div>
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                APEX <span className="text-cyan-400 font-semibold">GROWTH</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Apex Growth Digital is an elite performance marketing and conversion architecture firm. We scale high-growth DTC, B2B SaaS, and multi-location leaders through mathematical precision and behavioral science.
            </p>

            {/* Official Partner Badges */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Certified Performance Partner (2026)
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
                  Google Premier Partner
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
                  Meta Business Partner
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
                  HubSpot Diamond
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-amber-300 font-medium">
                  ★ Clutch 4.9/5
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">Enterprise SEO & SGE</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">Google Ads & PMax</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">Meta Ads & CAPI Funnels</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">Local SEO & Google Maps</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">Conversion Rate Optimization</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">High-Speed Web Development</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">Marketing Automation & CRM</button></li>
              <li><button onClick={() => scrollToTop('services')} className="hover:text-cyan-400 transition text-left">High-Ticket Lead Generation</button></li>
            </ul>
          </div>

          {/* Col 3: Company & Proof */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Company & Proof</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => scrollToTop('case-studies')} className="hover:text-cyan-400 transition text-left">Case Studies & Verified ROAS</button></li>
              <li><button onClick={() => scrollToTop('about')} className="hover:text-cyan-400 transition text-left">About Apex Growth</button></li>
              <li><button onClick={() => scrollToTop('pricing')} className="hover:text-cyan-400 transition text-left">Transparent Pricing Plans</button></li>
              <li><button onClick={() => scrollToTop('resources')} className="hover:text-cyan-400 transition text-left">2026 Growth Playbooks</button></li>
              <li><button onClick={() => scrollToTop('audit')} className="hover:text-cyan-400 transition text-left">Free Marketing Audit Engine</button></li>
              <li><button onClick={() => scrollToTop('contact')} className="hover:text-cyan-400 transition text-left">Schedule Strategy Session</button></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Line */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">The Weekly Growth Brief</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Join 12,000+ CMOs and founders receiving our weekly breakdown of algorithm updates and paid acquisition tests.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You are subscribed to the Weekly Brief!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter executive email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs transition"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>growth@apexgrowthdigital.com</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+1 (800) 492-APEX</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>NYC • San Francisco • London</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Apex Growth Digital Agency LLC. All rights reserved. Precision Performance Architecture.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onShowToast('Privacy Policy: We never sell or distribute client or lead data. All analytics strictly comply with GDPR & CCPA.')} className="hover:text-slate-300 transition">
              Privacy Policy
            </button>
            <button onClick={() => onShowToast('Terms of Service: Standard performance marketing service agreements are provided with formal milestone deliverables.')} className="hover:text-slate-300 transition">
              Terms of Engagement
            </button>
            <button onClick={() => onShowToast('Security & Compliance: SOC2 Type II Certified, Server-Side CAPI Encryption.')} className="hover:text-slate-300 transition">
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
