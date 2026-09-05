import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Calendar,
  Globe,
  Building2,
  DollarSign,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onShowToast: (msg: string) => void;
  onOpenBookCall: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onShowToast, onOpenBookCall }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'Full-Funnel Omnichannel Growth',
    budget: '$5,000 - $15,000 / month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast(`Inquiry received! A Growth Director will contact you within 90 minutes.`);
    }, 900);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Clock className="w-3.5 h-3.5" /> Fast Response SLA
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          Let’s Scale Your Revenue
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Tell us about your business, current unit economics, and 12-month goals. We guarantee an executive response within 90 minutes during standard business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-[#0C1220] border border-cyan-500/30 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Inquiry Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth team is conducting a preliminary teardown on <strong className="text-cyan-400">{formData.website}</strong> right now. We will reach out to <strong className="text-white">{formData.email}</strong> shortly.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={onOpenBookCall}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition"
                >
                  Or Pick a Direct Time on Our Calendar Now
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Start Growing My Business
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                All inquiries are protected by our mutual Non-Disclosure Agreement (NDA).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Lumin Studio LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Website URL *</label>
                  <input
                    type="text"
                    required
                    placeholder="https://brand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Monthly Paid Media Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                  >
                    <option value="$3,000 - $5,000 / month">$3,000 - $5,000 / month</option>
                    <option value="$5,000 - $15,000 / month">$5,000 - $15,000 / month</option>
                    <option value="$15,000 - $50,000 / month">$15,000 - $50,000 / month</option>
                    <option value="$50,000+ / month">$50,000+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                >
                  <option value="Full-Funnel Omnichannel Growth">Full-Funnel Omnichannel Growth (SEO + Paid Ads + CRO)</option>
                  <option value="Google Ads & Performance Max (PPC)">Google Ads & Performance Max (PPC)</option>
                  <option value="Meta Ads & Server-Side CAPI Funnels">Meta Ads & Server-Side CAPI Funnels</option>
                  <option value="Enterprise SEO & Google AI Overviews">Enterprise SEO & Google AI Overviews (SGE)</option>
                  <option value="Local SEO & Multi-Location GBP Domination">Local SEO & Multi-Location GBP Domination</option>
                  <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (CRO)</option>
                  <option value="High-Speed Web Design & Development">High-Speed Web Design & Development</option>
                  <option value="High-Ticket B2B Lead Generation">High-Ticket B2B Lead Generation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Scope / Current Challenges</label>
                <textarea
                  rows={4}
                  placeholder="What are your current customer acquisition bottlenecks? What is your revenue target over the next 12 months?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                id="contact-form-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm sm:text-base rounded-xl transition shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Start Growing My Business</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam. Direct conversation with a senior Growth Director.</span>
              </div>
            </form>
          )}
        </div>

        {/* Alternative Contact Info & Hubs Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Strategy Booking Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-cyan-500/20 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-white text-xl">
              Prefer an Instant 1-on-1 Strategy Call?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Skip the email back-and-forth. Pick a time on our live calendar to review your marketing funnels on screen.
            </p>
            <button
              onClick={onOpenBookCall}
              className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition border border-white/10 flex items-center justify-center gap-2"
            >
              <span>Schedule 30-Min Strategy Call</span>
              <Calendar className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Direct Contact Methods */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Contact Lines
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">Executive Inquiries</span>
                  <a href="mailto:growth@apexgrowthdigital.com" className="font-semibold hover:text-cyan-400 transition">
                    growth@apexgrowthdigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">Direct Phone Line</span>
                  <a href="tel:+18004922739" className="font-semibold hover:text-cyan-400 transition">
                    +1 (800) 492-APEX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">Operating Hours</span>
                  <span className="font-semibold">Monday – Friday: 8:00 AM – 7:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Office Hubs */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Agency Hubs
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">New York Headquarters</strong>
                  <span className="text-slate-400 text-[11px]">One World Trade Center, Floor 44, New York, NY 10007</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">San Francisco Innovation Lab</strong>
                  <span className="text-slate-400 text-[11px]">500 Howard Street, Suite 300, San Francisco, CA 94105</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">London European Hub</strong>
                  <span className="text-slate-400 text-[11px]">100 Bishopsgate, Level 19, London EC2N 4AG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
