import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Activity, User } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl, EditableDoctorProfile } from '../data/siteConfig';

interface HeroProps {
  profile: EditableDoctorProfile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollToActuation = () => {
    const el = document.getElementById('especialidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      aria-label="Apresentação Principal"
      className="relative pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#fbf8f3] bg-silk-waves"
    >
      {/* Decorative Organic Silk Wave Contours (As in Mockup) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-1/4 w-[500px] h-[500px] text-[#dfcaa9]/35 hidden lg:block"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M-50,100 C150,220 200,380 480,420"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M-80,180 C120,280 250,340 450,490"
          stroke="#c5743f"
          strokeOpacity="0.25"
          strokeWidth="1.75"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 w-[550px] h-[550px] text-[#dfcaa9]/40 hidden lg:block"
        viewBox="0 0 550 550"
        fill="none"
      >
        <path
          d="M50,450 C320,380 380,180 520,60"
          stroke="#c5743f"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <path
          d="M120,520 C360,420 420,240 550,140"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Authority */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow Specialties - Exact as Mockup */}
            <div className="pt-2">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#9c5225]">
                ORTOPEDIA • CIRURGIA DA MÃO • ESPORTE • REGENERATIVA
              </span>
            </div>

            {/* Main Headline (H1) with Cognac Accent */}
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.9rem] font-bold text-[#2b1810] leading-[1.08] tracking-tight">
                Especialista em resolver a dor e{' '}
                <span className="text-[#b86835] italic font-semibold">
                  devolver a função.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#523c30] leading-relaxed max-w-2xl font-normal">
                Atuação especializada em <strong className="font-semibold text-[#2b1810]">Ortopedia</strong>,{' '}
                <strong className="font-semibold text-[#9c5225]">Cirurgia da Mão</strong> e{' '}
                <strong className="font-semibold text-[#2b1810]">Medicina Esportiva e Regenerativa</strong>, com foco na
                recuperação da mobilidade, funcionalidade e qualidade de vida.
              </p>
            </div>

            {/* Action Buttons: Exact Colors and Rounded Shape as Mockup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#b86835] hover:bg-[#9a4f27] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#b86835]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Agendar consulta pelo WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={scrollToActuation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-[#f5eee3] text-[#2b1810] border border-[#dfcca9] text-sm sm:text-base font-semibold shadow-sm transition-all duration-200"
              >
                <span>Conheça minha atuação</span>
                <ArrowRight className="w-4 h-4 text-[#b86835]" />
              </button>
            </div>

            {/* Professional Identification 3-Card Grid - Exact as Mockup */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#ebdccb] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835] shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8c7262] font-bold">Médico</div>
                  <div className="text-sm font-bold text-[#2b1810]">{profile.doctorName}</div>
                  <div className="text-xs text-[#9c5225] font-semibold">CRM-PR {CLINIC_INFO.crm}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#ebdccb] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835] shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8c7262] font-bold">Especialidades</div>
                  <div className="text-sm font-bold text-[#2b1810]">RQE 14512 e 37663</div>
                  <div className="text-xs text-[#8c7262]">Registro Qualificado</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#ebdccb] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8c7262] font-bold">Unidade</div>
                  <div className="text-sm font-bold text-[#2b1810]">{CLINIC_INFO.clinicName}</div>
                  <div className="text-xs text-[#8c7262]">Santo Antônio da Platina – PR</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait in Warm Luxury Aesthetic */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Warm Ambient Glow Frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#b86835] via-[#dfcaa9] to-[#2b1810] opacity-15 blur-md transform rotate-1"
              />

              {/* Main Desk Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white aspect-[3/4]">
                <img
                  src="/images/medico-hero-mesa.jpg"
                  alt={`${profile.doctorName} — Especialista em Ortopedia, Cirurgia da Mão e Medicina Esportiva`}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Dark Espresso Bottom Badge - Exact as Mockup */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#2b1810]/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-editorial text-xl font-bold text-white leading-snug">
                        {profile.doctorName}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#edd8c3] font-medium tracking-wide mt-0.5">
                        CRM-PR {CLINIC_INFO.crm} • RQE 14512 e 37663 • {CLINIC_INFO.teot}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#422619] text-[#edd8c3] text-[11px] font-semibold shrink-0 border border-white/10">
                      {CLINIC_INFO.clinicName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
