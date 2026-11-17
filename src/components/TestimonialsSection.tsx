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
      className="py-20 lg:py-28 bg-[#fbf8f3] border-t border-[#ebdccb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Carousel Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
              <Heart className="w-4 h-4 text-[#b86835] fill-[#b86835]" />
              <span>Experiência dos Pacientes</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-tight"
            >
              Cuidado humanizado e confiança comprovada.
            </h2>
            <p className="text-base sm:text-lg text-[#523c30] leading-relaxed font-normal">
              Veja os relatos de quem confiou seu tratamento ao Dr. Sergio Leopolski na {CLINIC_INFO.clinicName} em Santo Antônio da Platina – PR.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-2xl bg-white hover:bg-[#b86835] text-[#2b1810] hover:text-white border border-[#ebdccb] flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-2xl bg-white hover:bg-[#b86835] text-[#2b1810] hover:text-white border border-[#ebdccb] flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#b86835] hover:bg-[#9a4f27] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
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
                  <div className="h-full bg-white hover:bg-[#fdfbf9] p-7 sm:p-8 rounded-3xl border border-[#ebdccb] hover:border-[#b86835]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Background Decorative Quote */}
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-[#b86835]/10 group-hover:text-[#b86835]/20 transition-colors pointer-events-none" />

                    <div className="space-y-4">
                      {/* Rating & Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-[#b86835]">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#b86835]" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-[#f9ede2] text-[#9c5225] border border-[#ebdccb]">
                          {item.specialtyTag}
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="text-sm sm:text-base text-[#523c30] leading-relaxed italic">
                        "{item.comment}"
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#ebdccb]/60 space-y-1">
                      <div className="font-bold text-sm sm:text-base text-[#2b1810]">
                        {item.author}
                      </div>
                      <div className="text-xs font-semibold text-[#9c5225]">
                        {item.city}
                      </div>
                      <div className="text-[11px] text-[#8c7262] font-medium pt-0.5">
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
                    ? 'w-8 bg-[#b86835]'
                    : 'w-2.5 bg-[#ebdccb] hover:bg-[#dfcaa9]'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Ethical Medical Note */}
        <div className="mt-10 rounded-3xl bg-[#f5eee3] border border-[#ebdccb] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#523c30]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b86835] shrink-0" />
            <p className="leading-relaxed">
              <strong className="font-bold text-[#2b1810]">Transparência e Ética Médica:</strong> Relatos voluntários de pacientes atendidos. Cada organismo responde de forma individual ao tratamento.
            </p>
          </div>
          <span className="shrink-0 font-bold text-[#2b1810] bg-white px-3 py-1 rounded-xl border border-[#ebdccb] shadow-2xs">
            {CLINIC_INFO.fullCredentials}
          </span>
        </div>
      </div>
    </section>
  );
};
