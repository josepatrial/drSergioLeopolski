import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, CLINIC_INFO } from '../data/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop & Tablet Floating Action Pill */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta pelo WhatsApp"
          className="group relative flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-glow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-whatsapp-pulse"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="text-sm font-bold tracking-wide">
            Agendar pelo WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Fast-Bar (Thumb zone for instant conversion) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>Agendar no WhatsApp</span>
        </a>

        <a
          href={CLINIC_INFO.phoneHref}
          className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-slate-100 active:bg-slate-200 text-navy-950 text-xs font-bold border border-slate-200"
          aria-label="Ligar para a clínica"
        >
          <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="truncate">Ligar</span>
        </a>
      </div>
    </>
  );
};
