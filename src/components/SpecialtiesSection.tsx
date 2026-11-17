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
        return <Bone className="w-6 h-6 text-emerald-400" />;
      case 'cirurgia-da-mao':
        return <Hand className="w-6 h-6 text-emerald-400" />;
      default:
        return <Activity className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="especialidades"
      aria-labelledby="specialties-heading"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PARTE 1: Especialidades Médicas */}
        <div>
          {/* Section Header */}
          <div className="max-w-3xl space-y-3.5 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Áreas de Atuação Médica</span>
            </div>
            <h2
              id="specialties-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight"
            >
              Especialidades dedicadas ao movimento e à funcionalidade.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Atendimento especializado em {CLINIC_INFO.cityState}, unindo precisão diagnóstica e recursos terapêuticos
              atualizados para o cuidado integral do aparelho locomotor.
            </p>
          </div>

          {/* 3 Premium Specialty Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SPECIALTIES_DATA.map((spec) => (
              <article
                key={spec.id}
                className="group bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-premium-hover hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Header with Real Photography (Clean, Bright & Unobstructed) */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={spec.image}
                    alt={spec.imageAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle top shade only for contrast */}
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 right-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-emerald-300 text-xs font-bold tracking-wider uppercase border border-white/10 shadow-sm">
                      {spec.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-navy-900/85 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md text-white">
                      {renderSpecialtyIcon(spec.slug)}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                        Especialidade {spec.number} • Área de Atuação
                      </span>
                      <h3 className="font-editorial text-2xl font-bold text-navy-950 group-hover:text-emerald-700 transition-colors leading-snug">
                        {spec.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {spec.shortDescription}
                    </p>

                    <div className="pt-4 border-t border-slate-100 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                        Principais Focos Clínicos:
                      </div>
                      <ul className="space-y-2">
                        {spec.clinicalFocusAreas.slice(0, 3).map((focus) => (
                          <li key={focus} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                    <Link
                      to={`/especialidades/${spec.slug}`}
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-navy-900 hover:bg-navy-950 text-white text-sm font-semibold transition-colors group/btn"
                    >
                      <span>Conhecer detalhes da especialidade</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(
                        `Olá! Gostaria de agendar uma avaliação em ${spec.title} na Clínica Dr. Bardal.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-600/30 hover:bg-emerald-50 text-emerald-800 text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Agendar avaliação em {spec.title}</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PARTE 2: Condições Atendidas Integradas Diretamente em Especialidades */}
        <div id="condicoes" className="pt-10 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>Condições e Sintomas Avaliados</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
                Principais condições atendidas pelo especialista.
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navegue no carrossel abaixo e conheça os quadros mais frequentes avaliados pelo Dr. Sergio Leopolski:
              </p>
            </div>

            {/* Carousel Arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-white hover:bg-emerald-600 border border-slate-300 text-navy-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Condição anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-white hover:bg-emerald-600 border border-slate-300 text-navy-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
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
                    <article className="h-full bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
                            {item.category}
                          </span>
                          <span className="font-editorial text-lg font-bold text-slate-300">
                            0{idx + 1}
                          </span>
                        </div>

                        <h4 className="font-editorial text-2xl font-bold text-navy-950 hover:text-emerald-800 transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                        <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                      ? 'w-8 bg-emerald-600'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
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
