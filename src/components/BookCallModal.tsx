import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Globe, Shield } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [date, setDate] = useState('2026-09-08');
  const [time, setTime] = useState('14:00');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    revenue: '$500k - $2M',
    topic: 'Omnichannel Paid & Organic Growth Strategy'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
      onSuccess(`Strategy call booked with an Apex Growth Director for ${date} at ${time}!`);
    }, 800);
  };

  const handleClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        id="book-call-modal-container"
        className="relative w-full max-w-xl bg-[#0E1524] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Glow Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close Button */}
        <button 
          id="close-book-call-modal-btn"
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Calendar className="w-3.5 h-3.5" /> 1-on-1 Growth Diagnostic
              </span>
              <span className="text-xs text-slate-400">30 Minutes • No Pitch</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              Schedule Your Growth Strategy Call
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Speak directly with a senior marketing director. We will review your current ad performance, SEO crawl bottlenecks, and unit economics on live screen.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Business Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="marcus@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Company Website *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Annual Revenue</label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  >
                    <option value="$250k - $500k">$250k - $500k</option>
                    <option value="$500k - $2M">$500k - $2M</option>
                    <option value="$2M - $10M">$2M - $10M</option>
                    <option value="$10M+">$10M+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Time & Date Selection */}
              <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl">
                <label className="block text-xs font-semibold text-slate-300 mb-2">Preferred Consultation Slot</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Time (EST)</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="10:00">10:00 AM EST</option>
                      <option value="11:30">11:30 AM EST</option>
                      <option value="14:00">2:00 PM EST</option>
                      <option value="15:30">3:30 PM EST</option>
                      <option value="17:00">5:00 PM EST</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>NDA protected. Your commercial data is never shared with third parties.</span>
              </div>

              <button
                id="submit-booking-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-6 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg shadow-cyan-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Confirm Strategy Call ({time} EST)</span>
                    <Clock className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2 font-display">Call Confirmed!</h4>
            <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto">
              We have reserved your 30-minute growth diagnostic session for <strong className="text-cyan-400">{date} at {time} EST</strong>. A calendar invite with a private Google Meet link has been dispatched to your email.
            </p>

            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-left text-xs text-slate-300 space-y-2 mb-6">
              <div className="font-semibold text-white">What we will cover on the call:</div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Live inspection of your top 3 competitor ad & organic funnels
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Identification of budget waste and low-hanging conversion leaks
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Custom 90-day roadmap with realistic unit economic milestones
              </div>
            </div>

            <button
              id="close-booking-success-btn"
              onClick={handleClose}
              className="py-2.5 px-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
