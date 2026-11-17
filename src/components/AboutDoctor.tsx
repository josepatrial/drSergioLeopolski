import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Award,
  GraduationCap,
  Calendar,
  Building,
  HeartHandshake,
  BookOpen,
  Sparkles,
  MapPin
} from 'lucide-react';
import {
  CLINIC_INFO,
  DOCTOR_TIMELINE,
  ADVANCED_COURSES,
  EditableDoctorProfile
} from '../data/siteConfig';

interface AboutDoctorProps {
  profile: EditableDoctorProfile;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ profile }) => {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 bg-white border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PARTE 1: Apresentação do Médico com Foto Única do Ironman */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Foto Exclusiva do Dr. Sergio com o quadro do Ironman */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-navy-950 shadow-xl border-4 border-slate-100 aspect-[3/4]">
              <img
                src="/images/medico-esporte.jpg"
                alt="Dr. Sergio Leopolski — Medicina Esportiva e vivência prática no esporte"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block text-[11px] uppercase tracking-widest text-emerald-400 font-bold mb-1">
                  {CLINIC_INFO.clinicName} • {CLINIC_INFO.cityState}
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  Medicina Esportiva e vivência prática no esporte
                </p>
              </div>
            </div>

            {/* Convênios Atendidos Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  <span>Convênios & Atendimentos</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                  Confirmados
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {CLINIC_INFO.agreements.map((conv) => (
                  <div
                    key={conv.name}
                    className="text-center p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="text-sm font-bold text-navy-950">{conv.name}</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">{conv.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Biografia e Experiência */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Stethoscope className="w-4 h-4 text-emerald-600" />
                <span>O Especialista</span>
              </div>

              <h2
                id="about-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-[1.15]"
              >
                {profile.doctorName}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-emerald-800">
                Ortopedista e Cirurgião da Mão • Medicina Esportiva e Regenerativa
              </p>

              {/* Credenciais Completas */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950 text-white text-xs font-bold tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  CRM-PR {CLINIC_INFO.crm}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
                  RQE 14512 e 37663
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-navy-100 text-navy-950 text-xs font-bold border border-navy-200">
                  TEOT 9708
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">
                  Mais de 25 anos de atuação
                </span>
              </div>
            </div>

            {/* Narrativa Biográfica */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Nascido em <strong className="font-semibold text-navy-950">Guarapuava (PR)</strong> e atendendo na{' '}
                <strong className="font-semibold text-navy-950">Clínica Dr. Bardal</strong>, em{' '}
                <strong className="font-semibold text-navy-950">Santo Antônio da Platina (PR)</strong>, o Dr. Sergio
                Leopolski soma <strong>mais de 25 anos de dedicação à medicina</strong>, com foco no cuidado humanizado
                dos pacientes e constante atualização técnica nos mais renomados centros do Brasil e do exterior.
              </p>
              <p>
                Sua prática une o tratamento conservador e cirúrgico à vanguarda da{' '}
                <strong className="font-semibold text-emerald-800">Medicina Regenerativa e Esportiva</strong>,
                utilizando procedimentos guiados por ultrassom e tecnologias de ponta em consultório para devolver a
                função articular e a qualidade de vida.
              </p>
            </div>

            {/* Três Pilares Clínicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-navy-950">Experiência Consolidada</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Mais de duas décadas de prática clínica, cirúrgica e diagnóstica.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-navy-950">Titulação de Excelência</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Membro Titular SBOT, ABCM e American Academy of Orthopaedic Surgeons (AAOS).
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-navy-950">Precisão Guiada</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Procedimentos e infiltrações guiados por ultrassom em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PARTE 2: Formação e Trajetória Profissional (Redesenhada, Moderna e Sem Botão de Edição) */}
        <div className="pt-16 border-t border-slate-200 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Rigor Científico & Aperfeiçoamento Contínuo</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              Formação e trajetória profissional
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              Mais de duas décadas dedicadas à medicina ortopédica e à cirurgia da mão, com formações nas principais
              instituições do país e filiação internacional nos Estados Unidos.
            </p>
          </div>

          {/* Timeline Linear Moderna Conectada */}
          <div className="relative">
            {/* Linha vertical conectora no desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-navy-700 to-emerald-600 transform -translate-x-1/2"
            />

            <div className="space-y-6 lg:space-y-10">
              {DOCTOR_TIMELINE.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Node Central Conector no Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-white border-4 border-emerald-600 items-center justify-center shadow-md z-10">
                      <span className="w-2.5 h-2.5 rounded-full bg-navy-950"></span>
                    </div>

                    {/* Espaçador de 50% */}
                    <div className="hidden lg:block lg:w-1/2" />

                    {/* Conteúdo do Card */}
                    <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="group bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 shadow-card hover:shadow-premium transition-all duration-300 relative overflow-hidden">
                        {/* Barra lateral sutil */}
                        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-emerald-600 group-hover:w-2.5 transition-all" />

                        <div className="pl-2 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
                              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                              {item.year}
                            </span>
                            {item.badge && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-navy-950 px-2.5 py-1 rounded-md shadow-sm">
                                <Award className="w-3.5 h-3.5 text-emerald-400" />
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h4 className="font-editorial text-2xl font-bold text-navy-950 group-hover:text-emerald-800 transition-colors leading-snug">
                            {item.title}
                          </h4>

                          <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                            <Building className="w-4 h-4 shrink-0 text-emerald-600" />
                            <span>{item.institution}</span>
                          </p>

                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cursos de Aperfeiçoamento Especializados */}
          <div className="bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 p-6 sm:p-8 rounded-2xl border-2 border-emerald-300 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Treinamento Contínuo
                </span>
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-navy-950">
                  Cursos de Aperfeiçoamento e Treinamento Especializado
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ADVANCED_COURSES.map((course) => (
                <div
                  key={course.title}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-navy-950 leading-snug">{course.title}</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{course.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
