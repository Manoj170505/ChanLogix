import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const bgColors = {
    success: 'bg-emerald-900/90 border-emerald-500/50 text-emerald-100',
    info: 'bg-blue-900/90 border-blue-500/50 text-blue-100',
    warning: 'bg-amber-900/90 border-amber-500/50 text-amber-100',
  };

  const icons = {
    success: <FaCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
    info: <FaInfoCircle className="w-5 h-5 text-blue-400 shrink-0" />,
    warning: <FaExclamationCircle className="w-5 h-5 text-amber-400 shrink-0" />,
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 z-50 max-w-md mx-auto sm:mx-0 animate-bounce-in transition-all">
      <div className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border backdrop-blur-md shadow-2xl ${bgColors[toast.type || 'info']}`}>
        {icons[toast.type || 'info']}
        <div className="flex-1 pr-1 sm:pr-2">
          {toast.title && <h4 className="font-semibold text-sm mb-0.5">{toast.title}</h4>}
          <p className="text-xs text-slate-200 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-md"
          aria-label="Close notification"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
