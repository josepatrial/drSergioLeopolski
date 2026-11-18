import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, CLINIC_INFO } from '../data/siteConfig';
import { trackWhatsAppClick } from '../services/analyticsTracker';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop & Tablet Floating Action Pill */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <a
          href={getWhatsAppUrl()}
          onClick={() => trackWhatsAppClick()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta pelo WhatsApp"
          className="group relative flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-[#b86835] hover:bg-[#9a4f27] text-white shadow-xl shadow-[#b86835]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-whatsapp-pulse border border-white/20"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="text-sm font-bold tracking-wide">
            Agendar pelo WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Fast-Bar (Thumb zone for instant conversion) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fffdfa] border-t border-[#ebdccb] px-3 py-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={getWhatsAppUrl()}
          onClick={() => trackWhatsAppClick()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#b86835] active:bg-[#9a4f27] text-white text-xs font-bold shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>Agendar no WhatsApp</span>
        </a>

        <a
          href={CLINIC_INFO.phoneHref}
          className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-[#f5eee3] active:bg-[#ebdccb] text-[#2b1810] text-xs font-bold border border-[#ebdccb]"
          aria-label="Ligar para a clínica"
        >
          <Phone className="w-4 h-4 text-[#b86835] shrink-0" />
          <span className="truncate">Ligar</span>
        </a>
      </div>
    </>
  );
};
