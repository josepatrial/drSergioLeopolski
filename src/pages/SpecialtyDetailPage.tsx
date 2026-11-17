import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  AlertCircle,
  Stethoscope,
  ArrowUpRight
} from 'lucide-react';
import {
  SPECIALTIES_DATA,
  CLINIC_INFO,
  getWhatsAppUrl,
  EditableDoctorProfile
} from '../data/siteConfig';
import { CtaSection } from '../components/CtaSection';

interface SpecialtyDetailPageProps {
  profile: EditableDoctorProfile;
}

export const SpecialtyDetailPage: React.FC<SpecialtyDetailPageProps> = ({ profile }) => {
  const { slug } = useParams<{ slug: string }>();
  const specialty = SPECIALTIES_DATA.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (specialty) {
      document.title = specialty.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', specialty.seoDescription);
      }
    }
  }, [specialty]);

  if (!specialty) {
    return <Navigate to="/" replace />;
  }

  const otherSpecialties = SPECIALTIES_DATA.filter((item) => item.slug !== specialty.slug);

  return (
    <main className="pt-24 sm:pt-28">
      {/* Specialty Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2b1810] via-[#1b0e09] to-[#3d2315] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dfcaa9] hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a página inicial</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3d2315] border border-[#b86835]/40 text-xs font-bold text-[#dfcaa9]">
                <ShieldCheck className="w-4 h-4 text-[#dfcaa9]" />
                <span>
                  Especialidade {specialty.number} • {CLINIC_INFO.clinicName} ({CLINIC_INFO.cityState})
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {specialty.title} em {CLINIC_INFO.cityState}
              </h1>

              <p className="text-lg sm:text-xl text-[#edd8c3] leading-relaxed font-normal">
                {specialty.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar uma consulta em ${specialty.title} na Clínica Dr. Bardal.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#b86835] hover:bg-[#9a4f27] text-white text-base font-bold shadow-lg transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Agendar avaliação pelo WhatsApp</span>
                </a>

                <div className="text-xs text-[#edd8c3]/80">
                  <strong className="block text-white font-bold">{profile.doctorName}</strong>
                  <span>CRM-PR {CLINIC_INFO.crm} • RQE 14512 e 37663</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="rounded-3xl overflow-hidden border-4 border-[#3d2315] shadow-2xl aspect-[4/5] sm:aspect-[3/4] max-h-[440px] w-full max-w-sm bg-[#1b0e09]">
                <img
                  src={specialty.image}
                  alt={specialty.imageAlt}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Clinical & SEO Content */}
      <section className="py-16 lg:py-24 bg-[#fbf8f3] border-t border-[#ebdccb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Article Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-5">
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b1810]">
                  Sobre a atuação em {specialty.title}
                </h2>
                {specialty.overviewParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg text-[#523c30] leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Clinical Focus Areas */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdccb] space-y-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Stethoscope className="w-5 h-5 text-[#b86835]" />
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2b1810]">
                    Principais áreas de avaliação e acompanhamento
                  </h2>
                </div>
                <ul className="grid grid-cols-1 gap-3.5">
                  {specialty.clinicalFocusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 bg-[#fbf8f3] p-4 rounded-2xl border border-[#ebdccb] text-[#2b1810] text-sm sm:text-base font-semibold shadow-2xs"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#b86835] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to Seek Care */}
              <div className="space-y-5">
                <h2 className="font-editorial text-3xl font-bold text-[#2b1810]">
                  Quando procurar avaliação especializada em {specialty.title}?
                </h2>
                <p className="text-base text-[#523c30] leading-relaxed font-normal">
                  A avaliação médica precoce contribui para um diagnóstico assertivo e evita o agravamento de quadros
                  dolorosos ou limitações funcionais. Entre os sinais que justificam uma consulta estão:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specialty.whenToSeekCare.map((symptom) => (
                    <div
                      key={symptom}
                      className="p-4 rounded-2xl bg-white border border-[#ebdccb] flex items-start gap-3 text-sm text-[#523c30] font-medium shadow-2xs"
                    >
                      <AlertCircle className="w-5 h-5 text-[#b86835] shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostic & Therapeutic Approach */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#2b1810] text-white space-y-3 shadow-xl border border-[#3e2317]">
                <h3 className="font-editorial text-2xl font-bold text-[#dfcaa9]">
                  Abordagem Diagnóstica e Terapêutica
                </h3>
                <p className="text-sm sm:text-base text-[#edd8c3] leading-relaxed font-normal">
                  {specialty.diagnosticAndTherapeuticApproach}
                </p>
              </div>
            </div>

            {/* Sidebar: Clinic Info & Other Specialties */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#ebdccb] space-y-5 sticky top-32 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5225]">
                    Agendamento Local
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#2b1810] mt-1">
                    {CLINIC_INFO.clinicName}
                  </h3>
                  <p className="text-xs text-[#523c30] mt-1">
                    {profile.doctorName} • CRM-PR {CLINIC_INFO.crm} | RQE 14512 e 37663
                  </p>
                </div>

                <div className="text-sm text-[#523c30] space-y-2 pt-3 border-t border-[#ebdccb]">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#b86835] shrink-0 mt-1" />
                    <span>{CLINIC_INFO.address.full}</span>
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar uma consulta em ${specialty.title} na Clínica Dr. Bardal.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#b86835] hover:bg-[#9a4f27] text-white text-sm font-bold shadow-md transition-colors active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Agendar pelo WhatsApp</span>
                </a>

                <div className="pt-5 border-t border-[#ebdccb] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                    Outras Especialidades
                  </div>
                  {otherSpecialties.map((other) => (
                    <Link
                      key={other.id}
                      to={`/especialidades/${other.slug}`}
                      className="flex items-center justify-between p-3 rounded-2xl bg-[#fbf8f3] hover:bg-[#f9ede2] border border-[#ebdccb] text-sm font-bold text-[#2b1810] transition-colors"
                    >
                      <span>{other.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#b86835]" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};
