import React from 'react';
import { Syringe, Waves, CircleDot, Droplets, Stethoscope, Calendar, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteConfig';

interface TechItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const TECH_CARDS: TechItem[] = [
  {
    id: 'infiltracoes',
    icon: <Syringe className="w-5 h-5 text-[#b86835]" />,
    title: 'Infiltrações e Bloqueios Guiados',
    description:
      'Aplicação precisa de medicamentos e terapias em articulações, tendões e nervos, com orientação por ultrassom.',
    image: '/images/tech-infiltracoes.jpg',
    imageAlt: 'Infiltração articular e bloqueio guiado por imagem em consultório'
  },
  {
    id: 'sis',
    icon: <Waves className="w-5 h-5 text-[#b86835]" />,
    title: 'SIS (Campo Eletromagnético)',
    description:
      'Terapia não invasiva que atua na modulação da dor e na recuperação tecidual, indicada em diversas condições musculoesqueléticas.',
    image: '/images/tech-sis.jpg',
    imageAlt: 'Paciente em sessão com tecnologia SIS de campo eletromagnético de alta intensidade'
  },
  {
    id: 'ondas-choque',
    icon: <CircleDot className="w-5 h-5 text-[#b86835]" />,
    title: 'Ondas de Choque (TOC Radial)',
    description:
      'Estímulo mecânico que favorece a resposta biológica de reparo em tendinopatias, entesopatias e outras lesões crônicas.',
    image: '/images/tech-ondas-choque.jpg',
    imageAlt: 'Aplicação de Ondas de Choque Radiais em região tendínea'
  },
  {
    id: 'regenerativa',
    icon: <Droplets className="w-5 h-5 text-[#b86835]" />,
    title: 'Terapias Regenerativas',
    description:
      'Aplicações como PRP, BMA/BMAC, microfat e ácido hialurônico, conforme indicação clínica, com foco na recuperação tecidual e na função.',
    image: '/images/tech-regenerativa.jpg',
    imageAlt: 'Preparo e aplicação de terapias biológicas e regenerativas'
  }
];

export const TechnologySection: React.FC = () => {
  return (
    <section
      id="tecnologia"
      aria-label="Tecnologias e Tratamentos"
      className="py-16 sm:py-20 lg:py-24 bg-[#fbf8f3] bg-silk-waves relative overflow-hidden border-t border-[#ebdccb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Top Header: Exact Layout from Mockup 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#9c5225] bg-[#f9ede2] px-3 py-1 rounded-full border border-[#ebdccb]">
              Tecnologias e Tratamentos
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-[1.18] tracking-tight">
              Recursos modernos,{' '}
              <span className="font-serif italic font-normal text-[#b86835] block sm:inline">
                com indicação individualizada.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#523c30] leading-relaxed max-w-2xl font-normal">
              Tecnologias e procedimentos complementares que auxiliam no alívio da dor, na recuperação da função e na saúde musculoesquelética, sempre com avaliação personalizada.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#ebdccb] shadow-xl bg-white aspect-[16/10] sm:aspect-[16/9] group">
              <img
                src="/images/tech-ultrassom-consultorio.jpg"
                alt="Dr. Sergio Leopolski com paciente e equipamento de ultrassom moderno"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4 Cards Grid: Exact Layout and Styling from Mockup 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {TECH_CARDS.map((card) => (
            <article
              key={card.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#ebdccb] shadow-sm hover:shadow-xl hover:border-[#b86835]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#f9ede2] border border-[#ebdccb] flex items-center justify-center shrink-0 group-hover:bg-[#b86835] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-editorial text-lg sm:text-[1.18rem] font-bold text-[#2b1810] leading-snug group-hover:text-[#9c5225] transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#523c30] leading-relaxed font-normal min-h-[60px]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Thumbnail Image */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-[#ebdccb]/70 bg-[#f5eee3] aspect-[2.2/1] relative">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner: Dark Espresso bar from Mockup 2 */}
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
              A combinação de técnicas é definida após avaliação clínica e de imagem, considerando sua condição, objetivos e rotina de atividades.
            </p>

            {/* Right Button */}
            <a
              href={getWhatsAppUrl(
                'Olá Dr. Sergio! Gostaria de agendar uma avaliação para conhecer os tratamentos e tecnologias disponíveis.'
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
