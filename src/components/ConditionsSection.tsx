import React, { useState, useEffect } from 'react';
import { CONDITIONS_DATA, getWhatsAppUrl, CLINIC_INFO } from '../data/siteConfig';
import { Activity, Info, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const ConditionsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page detection
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
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const totalPages = Math.ceil(CONDITIONS_DATA.length / itemsPerPage);
  const currentPage = Math.min(Math.floor(currentIndex / itemsPerPage), totalPages - 1);

  return (
    <section
      id="condicoes"
      aria-labelledby="conditions-heading"
      className="py-20 lg:py-28 bg-white border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Carousel Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Avaliação Clínica Especializada</span>
            </div>
            <h2
              id="conditions-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight"
            >
              Condições e sintomas avaliados pelo especialista.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Navegue pelas principais condições tratadas em consultório pelo Dr. Sergio Leopolski na {CLINIC_INFO.clinicName}.
            </p>
          </div>

          {/* Carousel Arrows & Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-emerald-600 text-navy-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Condição anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-emerald-600 text-navy-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Próxima condição"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-emerald-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Solicitar avaliação</span>
            </a>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {CONDITIONS_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <article className="h-full bg-slate-50/70 hover:bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
                          {item.category}
                        </span>
                        <span className="font-editorial text-lg font-bold text-slate-300">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl font-bold text-navy-950 hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-slate-200/80 flex items-start gap-2 text-xs text-slate-500">
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
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === index
                    ? 'w-8 bg-emerald-600'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Ethical Medical Disclaimer (CFM Compliance) */}
        <div className="mt-10 rounded-2xl bg-emerald-50/60 border border-emerald-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-700">
          <p className="leading-relaxed">
            <strong className="font-bold text-navy-950">Nota Informativa e Ética Médica:</strong> As informações
            apresentadas possuem caráter estritamente educativo e institucional, em conformidade com as normas do
            Conselho Federal de Medicina (CFM). Nenhuma informação substitui a consulta médica presencial.
          </p>
          <span className="shrink-0 font-bold text-emerald-900 bg-white px-3 py-1.5 rounded-lg border border-emerald-300 shadow-sm">
            CRM-PR {CLINIC_INFO.crm} • TEOT {CLINIC_INFO.teot}
          </span>
        </div>
      </div>
    </section>
  );
};
