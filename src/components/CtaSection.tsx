import React from 'react';
import { MessageCircle, Phone, ShieldCheck, CalendarCheck } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/siteConfig';

export const CtaSection: React.FC = () => {
  return (
    <section
      id="agendamento"
      aria-labelledby="cta-heading"
      className="py-20 lg:py-24 bg-gradient-to-br from-[#2b1810] via-[#1b0e09] to-[#3d2315] text-white relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 w-96 h-96 rounded-full border border-[#b86835]/30"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d2315] border border-[#b86835]/30 text-[#dfcaa9] text-xs font-bold uppercase tracking-widest">
          <CalendarCheck className="w-4 h-4 text-[#dfcaa9]" />
          <span>Agendamento de Consultas • {CLINIC_INFO.clinicName}</span>
        </div>

        <div className="space-y-4">
          <h2
            id="cta-heading"
            className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Cuide da sua saúde e recupere sua qualidade de vida.
          </h2>
          <p className="text-lg sm:text-xl text-[#edd8c3] max-w-2xl mx-auto font-normal">
            Entre em contato com nossa equipe e agende sua avaliação.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#b86835] hover:bg-[#9a4f27] text-white text-base font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href={CLINIC_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-semibold transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#dfcaa9]" />
            <span>Ligar para {CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#dfcaa9]/90">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#dfcaa9]" />
            CRM-PR {CLINIC_INFO.crm} | RQE 14512 e 37663
          </span>
          <span>•</span>
          <span>Rua Coronel Capucho, 703 – Sala 1 – Centro, Santo Antônio da Platina – PR</span>
        </div>
      </div>
    </section>
  );
};
