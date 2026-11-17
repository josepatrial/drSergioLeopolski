import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Award,
  GraduationCap,
  Calendar,
  Building,
  HeartHandshake
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
      className="py-20 lg:py-28 bg-[#f5eee3]/50 border-t border-[#ebdccb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PARTE 1: Apresentação do Médico com Foto Única do Ironman */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Foto Exclusiva do Dr. Sergio com o quadro do Ironman */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-[#2b1810] shadow-xl border-4 border-white aspect-[3/4]">
              <img
                src="/images/medico-esporte.jpg"
                alt="Dr. Sergio Leopolski — Medicina Esportiva e vivência prática no esporte"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1810]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block text-[11px] uppercase tracking-widest text-[#dfcaa9] font-bold mb-1">
                  {CLINIC_INFO.clinicName} • {CLINIC_INFO.cityState}
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  Medicina Esportiva e vivência prática no esporte
                </p>
              </div>
            </div>

            {/* Convênios Atendidos Card */}
            <div className="p-5 rounded-3xl bg-white border border-[#ebdccb] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2b1810]">
                  <HeartHandshake className="w-4 h-4 text-[#b86835]" />
                  <span>Convênios & Atendimentos</span>
                </div>
                <span className="text-[10px] text-[#9c5225] font-bold bg-[#f9ede2] px-2.5 py-0.5 rounded-md border border-[#ebdccb]">
                  Confirmados
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {CLINIC_INFO.agreements.map((conv) => (
                  <div
                    key={conv.name}
                    className="text-center p-2.5 rounded-2xl bg-[#fbf8f3] border border-[#ebdccb] shadow-2xs"
                  >
                    <div className="text-sm font-bold text-[#2b1810]">{conv.name}</div>
                    <div className="text-[10px] text-[#9c5225] font-semibold">{conv.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Biografia e Experiência */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
                <Stethoscope className="w-4 h-4 text-[#b86835]" />
                <span>O Especialista</span>
              </div>

              <h2
                id="about-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-[1.15]"
              >
                {profile.doctorName}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-[#9c5225]">
                Ortopedista e Cirurgião da Mão • Medicina Esportiva e Regenerativa
              </p>

              {/* Credenciais Completas */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2b1810] text-[#edd8c3] text-xs font-bold tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#dfcaa9]" />
                  CRM-PR {CLINIC_INFO.crm}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-[#f9ede2] text-[#9c5225] text-xs font-bold border border-[#ebdccb]">
                  RQE 14512 e 37663
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white text-[#2b1810] text-xs font-bold border border-[#ebdccb]">
                  TEOT 9708
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-[#f5eee3] text-[#523c30] text-xs font-bold">
                  Mais de 25 anos de atuação
                </span>
              </div>
            </div>

            {/* Narrativa Biográfica */}
            <div className="space-y-4 text-[#523c30] text-base sm:text-lg leading-relaxed">
              <p>
                Nascido em <strong className="font-semibold text-[#2b1810]">Guarapuava (PR)</strong> e atendendo na{' '}
                <strong className="font-semibold text-[#2b1810]">Clínica Dr. Bardal</strong>, em{' '}
                <strong className="font-semibold text-[#2b1810]">Santo Antônio da Platina (PR)</strong>, o Dr. Sergio
                Leopolski soma <strong>mais de 25 anos de dedicação à medicina</strong>, com foco no cuidado humanizado
                dos pacientes e constante atualização técnica nos mais renomados centros do Brasil e do exterior.
              </p>
              <p>
                Sua prática une o tratamento conservador e cirúrgico à vanguarda da{' '}
                <strong className="font-semibold text-[#9c5225]">Medicina Regenerativa e Esportiva</strong>,
                utilizando procedimentos guiados por ultrassom e tecnologias de ponta em consultório para devolver a
                função articular e a qualidade de vida.
              </p>
            </div>

            {/* Três Pilares Clínicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#ebdccb] hover:border-[#b86835]/50 transition-colors shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] mb-2" />
                <h3 className="text-sm font-bold text-[#2b1810]">Experiência Consolidada</h3>
                <p className="text-xs text-[#523c30] mt-1 leading-relaxed">
                  Mais de duas décadas de prática clínica, cirúrgica e diagnóstica.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#ebdccb] hover:border-[#b86835]/50 transition-colors shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] mb-2" />
                <h3 className="text-sm font-bold text-[#2b1810]">Titulação de Excelência</h3>
                <p className="text-xs text-[#523c30] mt-1 leading-relaxed">
                  Membro Titular SBOT, ABCM e American Academy of Orthopaedic Surgeons (AAOS).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#ebdccb] hover:border-[#b86835]/50 transition-colors shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] mb-2" />
                <h3 className="text-sm font-bold text-[#2b1810]">Precisão Guiada</h3>
                <p className="text-xs text-[#523c30] mt-1 leading-relaxed">
                  Procedimentos e infiltrações guiados por ultrassom em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PARTE 2: Formação e Trajetória Profissional */}
        <div className="pt-16 border-t border-[#ebdccb] space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
              <GraduationCap className="w-4 h-4 text-[#b86835]" />
              <span>Rigor Científico & Aperfeiçoamento Contínuo</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-tight">
              Formação e trajetória profissional
            </h3>
            <p className="text-base text-[#523c30] leading-relaxed">
              Mais de duas décadas dedicadas à medicina ortopédica e à cirurgia da mão, com formações nas principais
              instituições do país e filiação internacional nos Estados Unidos.
            </p>
          </div>

          {/* Timeline Linear Conectada */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#b86835] via-[#dfcaa9] to-[#2b1810] transform -translate-x-1/2"
            />

            <div className="space-y-6 lg:space-y-10">
              {DOCTOR_TIMELINE.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={`${item.year}-${item.title}`}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Node Central Conector */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-white border-4 border-[#b86835] items-center justify-center shadow-md z-10">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2b1810]"></span>
                    </div>

                    <div className="hidden lg:block lg:w-1/2" />

                    {/* Conteúdo do Card */}
                    <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="group bg-white p-6 sm:p-7 rounded-3xl border border-[#ebdccb] hover:border-[#b86835]/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#b86835] group-hover:w-2.5 transition-all" />

                        <div className="pl-2 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#9c5225] bg-[#f9ede2] px-3 py-1 rounded-lg border border-[#ebdccb]">
                              <Calendar className="w-3.5 h-3.5 text-[#b86835]" />
                              {item.year}
                            </span>
                            {item.badge && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#2b1810] px-2.5 py-1 rounded-lg shadow-sm">
                                <Award className="w-3.5 h-3.5 text-[#dfcaa9]" />
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h4 className="font-editorial text-2xl font-bold text-[#2b1810] group-hover:text-[#9c5225] transition-colors leading-snug">
                            {item.title}
                          </h4>

                          <p className="text-xs sm:text-sm font-bold text-[#9c5225] flex items-center gap-1.5">
                            <Building className="w-4 h-4 shrink-0 text-[#b86835]" />
                            <span>{item.institution}</span>
                          </p>

                          <p className="text-xs sm:text-sm text-[#523c30] leading-relaxed font-normal">
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
          <div className="bg-gradient-to-br from-[#f9ede2]/80 via-white to-[#fbf8f3] p-6 sm:p-8 rounded-3xl border border-[#ebdccb] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#b86835] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9c5225]">
                  Treinamento Contínuo
                </span>
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2b1810]">
                  Cursos de Aperfeiçoamento e Treinamento Especializado
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ADVANCED_COURSES.map((course) => (
                <div
                  key={course.title}
                  className="bg-white p-5 rounded-2xl border border-[#ebdccb] hover:border-[#b86835]/50 shadow-2xs hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f9ede2] text-[#b86835] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#2b1810] leading-snug">{course.title}</h5>
                    <p className="text-xs text-[#523c30] mt-1 leading-relaxed">{course.institution}</p>
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
