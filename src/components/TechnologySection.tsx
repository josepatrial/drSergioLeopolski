import React from 'react';
import {
  ScanLine,
  CircleDot,
  Zap,
  Droplets,
  CheckCircle2,
  Stethoscope,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { getWhatsAppUrl, CLINIC_INFO } from '../data/siteConfig';

interface TechItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

const CLINIC_TECH_RESOURCES: TechItem[] = [
  {
    id: 'ultrassom',
    icon: <ScanLine className="w-5 h-5 text-[#b86835]" />,
    badge: 'Diagnóstico & Precisão',
    title: 'Ultrassom Musculoesquelético',
    subtitle: 'Para avaliação e orientação de procedimentos',
    description:
      'Utilizado diretamente no consultório para avaliação dinâmica das estruturas articulares e orientação em tempo real de procedimentos e infiltrações, com assertividade, conforto e segurança.',
    features: [
      'Visualização anatômica em tempo real',
      'Infiltrações e bloqueios guiados com precisão',
      'Procedimento ambulatorial no próprio consultório'
    ],
    image: '/images/medico-ultrassom-card-43.jpg',
    imageAlt: 'Dr. Sergio Leopolski realizando procedimento guiado por ultrassom no consultório'
  },
  {
    id: 'ondas-choque',
    icon: <CircleDot className="w-5 h-5 text-[#b86835]" />,
    badge: 'Terapia Biológica Não Invasiva',
    title: 'Ondas de Choque Radiais da BTL',
    subtitle: 'Equipamento de ondas acústicas de alta energia',
    description:
      'Tecnologia de padrão internacional da BTL que emite ondas acústicas de alta energia, favorecendo a resposta biológica de reparo tecidual, vascularização e alívio efetivo da dor em lesões crônicas.',
    features: [
      'Padrão-ouro em fascite plantar e esporão de calcâneo',
      'Eficácia em tendinopatias crônicas de ombro, cotovelo e joelho',
      'Estímulo regenerativo sem incisões ou internação'
    ],
    image: '/images/aparelho-ondas-choque-btl.jpg',
    imageAlt: 'Aparelho de Ondas de Choque Radiais da BTL no consultório do Dr. Sergio Leopolski'
  },
  {
    id: 'btl-sis',
    icon: <Zap className="w-5 h-5 text-[#b86835]" />,
    badge: 'Super Inductive System (SIS)',
    title: 'Sistema BTL SIS Elite',
    subtitle: 'Estimulação eletromagnética de alta intensidade',
    description:
      'Tecnologia médica avançada da BTL que atua em tecidos profundos por meio de campo eletromagnético de alta intensidade, proporcionando alívio analgésico potente, modulação neuromuscular e regeneração tecidual acelerada.',
    features: [
      'Alívio potente da dor aguda e crônica',
      'Modulação neuromuscular e relaxamento de contraturas',
      'Tratamento seguro, confortável e não invasivo'
    ],
    image: '/images/aparelho-btl-sis-elite.jpg',
    imageAlt: 'Aparelho Sistema BTL SIS Elite no consultório do Dr. Sergio Leopolski'
  },
  {
    id: 'terapias-regenerativas',
    icon: <Droplets className="w-5 h-5 text-[#b86835]" />,
    badge: 'Medicina Regenerativa',
    title: 'Terapias Regenerativas',
    subtitle: 'PRP, i-PRF e BMA no consultório',
    description:
      'Tratamento biológico de lesões musculares e artrose de joelho por meio de terapias celulares e bioestimuladores como PRP (Plasma Rico em Plaquetas), i-PRF e BMA, focando na reparação tecidual e na preservação articular.',
    features: [
      'Tratamento de lesões musculares, estiramentos e roturas',
      'Abordagem biológica para artrose e desgaste no joelho',
      'Terapias autólogas com PRP, i-PRF e BMA'
    ],
    image: '/images/tubo-prp-card.jpg',
    imageAlt: 'Preparo de PRP (Plasma Rico em Plaquetas) em tubo centrífugo no consultório'
  }
];

export const TechnologySection: React.FC = () => {
  return (
    <section
      id="tecnologia"
      aria-label="Tecnologias e Tratamentos no Consultório"
      className="py-16 sm:py-20 lg:py-24 bg-[#fbf8f3] bg-silk-waves relative overflow-hidden border-t border-[#ebdccb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header with Featured Clinical Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
              Tecnologias & Terapias Regenerativas
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-[1.18] tracking-tight">
              Recursos modernos,{' '}
              <span className="font-serif italic font-normal text-[#b86835] block sm:inline">
                com indicação individualizada.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#523c30] leading-relaxed max-w-2xl font-normal">
              O consultório do Dr. Sergio Leopolski na {CLINIC_INFO.clinicName} reúne tecnologias médicas avançadas e terapias biológicas regenerativas dedicadas ao diagnóstico preciso, alívio da dor e reparação funcional:
            </p>

            <ul className="space-y-2.5 pt-2 text-sm sm:text-base text-[#2b1810] font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2b1810] font-bold">Ultrassom musculoesquelético</strong> para avaliação e orientação de procedimentos em tempo real.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2b1810] font-bold">Equipamento de ondas de choque radiais da BTL</strong> para estímulo regenerativo biológico.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2b1810] font-bold">Sistema BTL SIS Elite</strong> de estimulação eletromagnética de alta intensidade.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b86835] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2b1810] font-bold">Terapias Regenerativas (PRP, i-PRF e BMA)</strong> para tratamento de lesões musculares e artrose de joelho.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Actual Doctor Photo with BTL SIS Elite System in Clinic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#ebdccb] shadow-xl bg-white aspect-[3/4] max-w-md mx-auto group">
              <img
                src="/images/medico-btl-procedimento.jpg"
                alt="Dr. Sergio Leopolski aplicando o Sistema BTL SIS Elite em paciente no consultório"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#2b1810]/95 via-[#2b1810]/70 to-transparent text-white">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#b86835] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                  Aplicação no Consultório
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  Dr. Sergio Leopolski aplicando o Sistema BTL SIS Elite
                </p>
                <p className="text-xs text-[#edd8c3] font-medium mt-0.5">
                  Estimulação eletromagnética de alta intensidade para alívio da dor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Dedicated Technology & Regenerative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CLINIC_TECH_RESOURCES.map((tech) => (
            <article
              key={tech.id}
              className="group bg-white rounded-3xl p-5 sm:p-6 border border-[#ebdccb] shadow-sm hover:shadow-xl hover:border-[#b86835]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#f9ede2] border border-[#ebdccb] flex items-center justify-center shrink-0 group-hover:bg-[#b86835] group-hover:text-white transition-colors duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9c5225] bg-[#f9ede2] px-2.5 py-1 rounded-full border border-[#ebdccb]">
                    {tech.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-xl sm:text-[1.35rem] font-bold text-[#2b1810] group-hover:text-[#9c5225] transition-colors leading-snug">
                    {tech.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8c7262] mt-0.5">
                    {tech.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#523c30] leading-relaxed font-normal min-h-[54px]">
                  {tech.description}
                </p>

                <div className="pt-4 border-t border-[#ebdccb]/60 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2b1810]">
                    Destaques do Recurso:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#523c30]">
                    {tech.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b86835] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Thumbnail Image */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-[#ebdccb]/70 bg-[#f5eee3] aspect-[16/10] relative">
                <img
                  src={tech.image}
                  alt={tech.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner: Dark Espresso bar */}
        <div className="bg-[#2b1810] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-7 border border-[#3e2317] shadow-xl text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Title */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#edd8c3] shrink-0">
                <Stethoscope className="w-5 h-5 text-[#dfcaa9]" />
              </div>
              <span className="font-editorial italic font-normal text-xl sm:text-2xl text-[#f3e6d8]">
                Tratamento individualizado
              </span>
            </div>

            {/* Middle Explanation */}
            <div className="hidden lg:block w-px h-10 bg-white/15 shrink-0" />
            <p className="text-xs sm:text-sm text-[#ecd8c7] leading-relaxed flex-1 max-w-2xl font-normal">
              A indicação dos recursos (ultrassom, ondas de choque BTL, SIS Elite ou terapias regenerativas com PRP, i-PRF e BMA) é definida de forma personalizada após avaliação médica presencial, de acordo com o diagnóstico e as necessidades de cada paciente.
            </p>

            {/* Right Button */}
            <a
              href={getWhatsAppUrl(
                'Olá Dr. Sergio! Gostaria de agendar uma avaliação para conhecer os tratamentos com tecnologias avançadas e terapias regenerativas (PRP, i-PRF, BMA).'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#f3e6d8] hover:bg-white text-[#2b1810] font-bold text-xs sm:text-sm shadow-md transition-all duration-300 shrink-0 group active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#9c5225]" />
              <span>Agendar avaliação</span>
              <ArrowRight className="w-4 h-4 text-[#9c5225] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
