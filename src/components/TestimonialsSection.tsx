import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageCircle, Quote, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA, getWhatsAppUrl, CLINIC_INFO } from '../data/siteConfig';

export const TestimonialsSection: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - itemsPerPage);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-28 bg-white border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Carousel Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Experiência dos Pacientes</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight"
            >
              Cuidado humanizado e confiança comprovada.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Veja os relatos de quem confiou seu tratamento ao Dr. Sergio Leopolski na {CLINIC_INFO.clinicName} em Santo Antônio da Platina – PR.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-emerald-600 text-navy-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-emerald-600 text-navy-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Próximo depoimento"
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
              <span>Agendar Consulta</span>
            </a>
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
              {TESTIMONIALS_DATA.map((item) => (
                <div
                  key={item.id}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="h-full bg-slate-50/70 hover:bg-white p-7 sm:p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Background Decorative Quote */}
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-600/10 group-hover:text-emerald-600/20 transition-colors pointer-events-none" />

                    <div className="space-y-4">
                      {/* Rating & Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
                          {item.specialtyTag}
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                        "{item.comment}"
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200/80 space-y-1">
                      <div className="font-bold text-sm sm:text-base text-navy-950">
                        {item.author}
                      </div>
                      <div className="text-xs font-semibold text-emerald-700">
                        {item.city}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium pt-0.5">
                        {item.treatmentHighlight}
                      </div>
                    </div>
                  </div>
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
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Ethical Medical Note */}
        <div className="mt-10 rounded-2xl bg-emerald-50/60 border border-emerald-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <p className="leading-relaxed">
              <strong className="font-bold text-navy-950">Transparência e Ética Médica:</strong> Relatos voluntários de pacientes atendidos. Cada organismo responde de forma individual ao tratamento.
            </p>
          </div>
          <span className="shrink-0 font-bold text-emerald-900 bg-white px-3 py-1 rounded-lg border border-emerald-300 shadow-sm">
            {CLINIC_INFO.fullCredentials}
          </span>
        </div>
      </div>
    </section>
  );
};
