import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div 
      id="notification-toast"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0F172A] border border-cyan-500/30 text-white p-4 rounded-xl shadow-2xl flex items-start gap-3 animate-slideUp backdrop-blur-md"
    >
      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <div className="flex-1 text-xs sm:text-sm text-slate-200 leading-snug">
        {message}
      </div>
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-white p-0.5 rounded transition"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
