import React from 'react';
import { MessageCircle, ArrowDownRight, ShieldCheck, MapPin, Activity, Award, CheckCircle } from 'lucide-react';
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
      className="relative pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 bg-medical-grid"
    >
      {/* Dynamic Ambient Glows (Blue & Green) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 w-[38rem] h-[38rem] rounded-full bg-emerald-200/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-0 w-[30rem] h-[30rem] rounded-full bg-navy-200/25 blur-3xl"
      />

      {/* Decorative Technical Vector Precision Lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-28 w-[580px] h-[580px] text-navy-900/[0.03] hidden lg:block"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="300" cy="300" r="190" stroke="#16a34a" strokeOpacity="0.15" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M40 300 H560 M300 40 V560" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Authority */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Verification & Location Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-600/20 shadow-sm">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                CRM-PR {CLINIC_INFO.crm} • RQE {CLINIC_INFO.rqeList.join(' e ')} • {CLINIC_INFO.teot}
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                {CLINIC_INFO.clinicName} • {CLINIC_INFO.cityState}
              </span>
            </div>

            {/* Specialty & Agreements Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-lg bg-navy-900 text-white shadow-sm">
                Ortopedia & Traumatologia
              </span>
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-lg bg-emerald-600 text-white shadow-sm">
                Cirurgia da Mão e Punho
              </span>
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-lg bg-white text-emerald-800 border border-emerald-300 shadow-sm">
                Medicina Esportiva e Regenerativa
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                Convênios: Unimed • Sanepar • Particular
              </span>
            </div>

            {/* Main Headline (H1) */}
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.8rem] font-bold text-navy-950 leading-[1.08] tracking-tight">
                Especialista em resolver a dor e{' '}
                <span className="text-emerald-700 italic font-semibold underline decoration-emerald-300 underline-offset-8">
                  devolver a função.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
                Atuação especializada em <strong className="font-semibold text-navy-950">Ortopedia</strong>,{' '}
                <strong className="font-semibold text-emerald-800">Cirurgia da Mão</strong> e{' '}
                <strong className="font-semibold text-navy-950">Medicina Esportiva e Regenerativa</strong>, com foco na
                recuperação da mobilidade, funcionalidade e qualidade de vida.
              </p>
            </div>

            {/* Action Buttons: High-Conversion Mobile & Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold shadow-emerald-glow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Agendar consulta pelo WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={scrollToActuation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-navy-900 border border-navy-900/15 text-base font-semibold shadow-sm transition-all duration-200"
              >
                <span>Conheça minha atuação</span>
                <ArrowDownRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>

            {/* Professional Identification Grid */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-card">
                <div className="w-9 h-9 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Médico</div>
                  <div className="text-sm font-bold text-navy-950">{profile.doctorName}</div>
                  <div className="text-xs text-emerald-700 font-semibold">CRM-PR {CLINIC_INFO.crm}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-card">
                <div className="w-9 h-9 rounded-lg bg-navy-100 flex items-center justify-center text-navy-800 shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Especialidades</div>
                  <div className="text-sm font-bold text-navy-950">RQE 14512 e 37663</div>
                  <div className="text-xs text-navy-600">Registro Qualificado</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-card">
                <div className="w-9 h-9 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Unidade</div>
                  <div className="text-sm font-bold text-navy-950">{CLINIC_INFO.clinicName}</div>
                  <div className="text-xs text-slate-600">Santo Antônio da Platina – PR</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait (Desk photo as requested) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Architectural Framing in Verde & Azul */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-500 via-navy-800 to-navy-950 opacity-15 blur-md transform rotate-1"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-emerald-500/30 pointer-events-none"
              />

              {/* Main Desk Photo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white aspect-[3/4]">
                <img
                  src="/images/medico-hero-mesa.jpg"
                  alt={`${profile.doctorName} — Especialista em Ortopedia, Cirurgia da Mão e Medicina Esportiva`}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle Gradient Shade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-navy-950">Atendimento Humanizado</span>
                </div>

                {/* Bottom Overlay Credential Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-navy-900/10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-editorial text-xl font-bold text-navy-950 leading-snug">
                        {profile.doctorName}
                      </p>
                      <p className="text-xs text-emerald-700 font-bold tracking-wide">
                        CRM-PR {CLINIC_INFO.crm} • RQE 14512 e 37663 • {CLINIC_INFO.teot}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-navy-900 text-white text-[11px] font-semibold shrink-0">
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
