import React from 'react';
import { Waves, Zap, Stethoscope, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { CLINIC_TECHNOLOGY, getWhatsAppUrl, CLINIC_INFO } from '../data/siteConfig';

export const TechnologySection: React.FC = () => {
  const getTechIcon = (id: string) => {
    switch (id) {
      case 'ultrassom':
        return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'ondas-choque':
        return <Waves className="w-6 h-6 text-emerald-600" />;
      case 'btl-sis':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section
      id="tecnologia"
      aria-label="Procedimentos e Recursos Tecnológicos"
      className="py-16 lg:py-24 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Procedimentos Guiados & Equipamento Real (Ultra Clean & High Impact) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-emerald-500/30 shadow-card hover:shadow-premium transition-all mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 border-2 border-emerald-500/40 flex items-center justify-center shrink-0 shadow-sm">
                <Stethoscope className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md mb-1">
                  Diferencial no Consultório
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight">
                  Procedimentos Guiados por Ultrassom & BTL
                </h3>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(
                'Olá! Gostaria de informações sobre os procedimentos com ultrassom e tecnologias BTL do Dr. Sergio Leopolski.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-emerald-glow transition-all shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar indicações no WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
            {/* Left: Explanatory & Benefits */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Infiltrações articulares e bloqueios de nervos periféricos são realizados no próprio consultório quando
                indicados. O ultrassom permite ao Dr. Sergio Leopolski visualizar detalhadamente a anatomia e acompanhar a
                posição da agulha em tempo real com conforto e segurança.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Em conjunto com a tecnologia médica <strong className="text-navy-950 font-semibold">BTL SIS Elite</strong> e as <strong className="text-navy-950 font-semibold">Ondas de Choque Radiais</strong>, o consultório oferece um ecossistema completo para alívio da dor aguda ou crônica e estímulo biológico à regeneração tecidual sem cortes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Conforto</div>
                  <div className="text-xs font-bold text-navy-950 mt-0.5">Sem necessidade de internação</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Precisão</div>
                  <div className="text-xs font-bold text-navy-950 mt-0.5">Visualização em tempo real</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Resultado</div>
                  <div className="text-xs font-bold text-emerald-950 mt-0.5">Máximo alívio terapêutico</div>
                </div>
              </div>
            </div>

            {/* Right: Actual Photo Demonstrating Equipment in Action */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-xl bg-slate-100 max-w-sm sm:max-w-md mx-auto group">
                <img
                  src="/images/medico-btl-procedimento.jpg"
                  alt="Dr. Sergio Leopolski aplicando o Sistema BTL SIS Elite em paciente no consultório"
                  className="w-full h-auto object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/85 backdrop-blur-md text-emerald-300 text-xs font-bold border border-white/20 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Aplicação no Consultório
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent text-white">
                  <p className="text-sm font-bold text-white">
                    Dr. Sergio Leopolski aplicando o Sistema BTL SIS Elite
                  </p>
                  <p className="text-xs text-emerald-300 font-medium mt-0.5">
                    Estimulação Eletromagnética de Alta Intensidade para alívio da dor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tech Cards Grid: Ultra-Clear, Crisp White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CLINIC_TECHNOLOGY.map((tech) => (
            <div
              key={tech.id}
              className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 hover:border-emerald-500 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white transition-colors shrink-0 shadow-sm">
                    {getTechIcon(tech.id)}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    {tech.badge}
                  </span>
                </div>

                <h4 className="font-editorial text-2xl sm:text-[1.65rem] font-bold text-navy-950 group-hover:text-emerald-800 transition-colors leading-snug">
                  {tech.title}
                </h4>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {tech.description}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    Benefícios Clínicos:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {tech.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Disponível no consultório</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Clínica Dr. Bardal
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
