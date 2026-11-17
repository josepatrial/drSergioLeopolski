import React from 'react';
import { BookOpen, Clock, FileText } from 'lucide-react';
import { EDUCATIONAL_TOPICS, CLINIC_INFO } from '../data/siteConfig';

export const EducationalSection: React.FC = () => {
  return (
    <section
      id="conteudos"
      aria-labelledby="educational-heading"
      className="py-20 lg:py-24 bg-[#fbf8f3] border-t border-[#ebdccb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
              <BookOpen className="w-4 h-4 text-[#b86835]" />
              <span>Educação em Saúde & Artigos Médicos</span>
            </div>
            <h2
              id="educational-heading"
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b1810] leading-tight"
            >
              Orientação médica e conteúdos informativos.
            </h2>
            <p className="text-base text-[#523c30] leading-relaxed font-normal">
              Espaço dedicado à publicação de conteúdos educativos e artigos informativos sobre Ortopedia, Cirurgia da
              Mão e Medicina Esportiva, elaborados de forma ética e acessível.
            </p>
          </div>

          <div className="text-xs font-bold text-[#523c30] bg-white px-4 py-2.5 rounded-2xl border border-[#ebdccb] shadow-2xs">
            Acervo preparado para expansão editorial • {CLINIC_INFO.crmState}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATIONAL_TOPICS.map((topic) => (
            <article
              key={topic.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ebdccb] shadow-sm hover:shadow-xl hover:border-[#b86835]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9c5225] bg-[#f9ede2] px-3 py-1 rounded-lg border border-[#ebdccb]">
                    {topic.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#8c7262] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#b86835]" />
                    {topic.readingTime}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#2b1810] leading-snug">
                  {topic.title}
                </h3>

                <p className="text-sm text-[#523c30] leading-relaxed font-normal">
                  {topic.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ebdccb]/60 flex items-center justify-between text-xs text-[#8c7262]">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#9c5225]">
                  <FileText className="w-3.5 h-3.5 text-[#b86835]" />
                  {topic.status}
                </span>
                <span>Caráter estritamente informativo</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
