import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  MessageCircle,
  Check,
  Bone,
  Hand,
  Activity,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  SPECIALTIES_DATA,
  CONDITIONS_DATA,
  getWhatsAppUrl,
  CLINIC_INFO
} from '../data/siteConfig';

export const SpecialtiesSection: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page detection for conditions carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, CONDITIONS_DATA.length - itemsPerPage);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const renderSpecialtyIcon = (slug: string) => {
    switch (slug) {
      case 'ortopedia':
        return <Bone className="w-5 h-5 text-[#dfcaa9]" />;
      case 'cirurgia-da-mao':
        return <Hand className="w-5 h-5 text-[#dfcaa9]" />;
      default:
        return <Activity className="w-5 h-5 text-[#dfcaa9]" />;
    }
  };

  return (
    <section
      id="especialidades"
      aria-labelledby="specialties-heading"
      className="py-20 lg:py-28 bg-[#fbf8f3] relative overflow-hidden border-t border-[#ebdccb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PARTE 1: Especialidades Médicas */}
        <div>
          {/* Section Header */}
          <div className="max-w-3xl space-y-3.5 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
              <span className="w-2 h-2 rounded-full bg-[#b86835]"></span>
              <span>Áreas de Atuação Médica</span>
            </div>
            <h2
              id="specialties-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-tight"
            >
              Especialidades dedicadas ao movimento e à funcionalidade.
            </h2>
            <p className="text-base sm:text-lg text-[#523c30] leading-relaxed font-normal">
              Atendimento especializado em {CLINIC_INFO.cityState}, unindo precisão diagnóstica e recursos terapêuticos
              atualizados para o cuidado integral do aparelho locomotor.
            </p>
          </div>

          {/* 3 Premium Specialty Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SPECIALTIES_DATA.map((spec) => (
              <article
                key={spec.id}
                className="group bg-white rounded-3xl border border-[#ebdccb] shadow-sm hover:shadow-xl hover:border-[#b86835]/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Header with Real Photography */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#f5eee3] border-b border-[#ebdccb]">
                  <img
                    src={spec.image}
                    alt={spec.imageAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 right-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#2b1810]/85 backdrop-blur-md text-[#dfcaa9] text-xs font-bold tracking-wider uppercase border border-white/10 shadow-sm">
                      {spec.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#2b1810]/90 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md text-white">
                      {renderSpecialtyIcon(spec.slug)}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#9c5225] block mb-1">
                        Especialidade {spec.number} • Área de Atuação
                      </span>
                      <h3 className="font-editorial text-2xl font-bold text-[#2b1810] group-hover:text-[#9c5225] transition-colors leading-snug">
                        {spec.title}
                      </h3>
                    </div>

                    <p className="text-[#523c30] text-sm sm:text-[15px] leading-relaxed">
                      {spec.shortDescription}
                    </p>

                    <div className="pt-4 border-t border-[#ebdccb]/60 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#2b1810]">
                        Principais Focos Clínicos:
                      </div>
                      <ul className="space-y-2">
                        {spec.clinicalFocusAreas.slice(0, 3).map((focus) => (
                          <li key={focus} className="flex items-start gap-2 text-xs sm:text-sm text-[#523c30]">
                            <Check className="w-4 h-4 text-[#b86835] shrink-0 mt-0.5" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#ebdccb]/60 flex flex-col gap-2.5">
                    <Link
                      to={`/especialidades/${spec.slug}`}
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-[#2b1810] hover:bg-[#3d2315] text-white text-sm font-semibold transition-colors group/btn"
                    >
                      <span>Conhecer detalhes da especialidade</span>
                      <ArrowUpRight className="w-4 h-4 text-[#dfcaa9] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(
                        `Olá! Gostaria de agendar uma avaliação em ${spec.title} na Clínica Dr. Bardal.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl border border-[#ebdccb] hover:bg-[#f9ede2] text-[#9c5225] text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#b86835]" />
                      <span>Agendar avaliação em {spec.title}</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PARTE 2: Condições Atendidas */}
        <div id="condicoes" className="pt-10 border-t border-[#ebdccb]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
                <Activity className="w-4 h-4 text-[#b86835]" />
                <span>Condições e Sintomas Avaliados</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b1810] leading-tight">
                Principais condições atendidas pelo especialista.
              </h3>
              <p className="text-sm sm:text-base text-[#523c30] leading-relaxed">
                Navegue no carrossel abaixo e conheça os quadros mais frequentes avaliados pelo Dr. Sergio Leopolski:
              </p>
            </div>

            {/* Carousel Arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-2xl bg-white hover:bg-[#b86835] border border-[#ebdccb] text-[#2b1810] hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Condição anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-2xl bg-white hover:bg-[#b86835] border border-[#ebdccb] text-[#2b1810] hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Próxima condição"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out -mx-3"
                style={{
                  transform: `translateX(-${carouselIndex * (100 / itemsPerPage)}%)`
                }}
              >
                {CONDITIONS_DATA.map((item, idx) => (
                  <div
                    key={item.id}
                    className="px-3 shrink-0"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <article className="h-full bg-white p-6 sm:p-7 rounded-3xl border border-[#ebdccb] hover:border-[#b86835]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#f9ede2] text-[#9c5225] border border-[#ebdccb]">
                            {item.category}
                          </span>
                          <span className="font-editorial text-lg font-bold text-[#dfcaa9]">
                            0{idx + 1}
                          </span>
                        </div>

                        <h4 className="font-editorial text-2xl font-bold text-[#2b1810] hover:text-[#9c5225] transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-sm text-[#523c30] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3.5 border-t border-[#ebdccb]/60 flex items-start gap-2 text-xs text-[#8c7262]">
                        <Info className="w-4 h-4 text-[#b86835] shrink-0 mt-0.5" />
                        <span>{item.informativeNote}</span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCarouselIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    carouselIndex === index
                      ? 'w-8 bg-[#b86835]'
                      : 'w-2.5 bg-[#ebdccb] hover:bg-[#dfcaa9]'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
