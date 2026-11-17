import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Building2 } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/siteConfig';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      aria-labelledby="location-heading"
      className="py-20 lg:py-28 bg-[#f5eee3]/40 border-t border-[#ebdccb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#9c5225] bg-[#f9ede2] px-3.5 py-1 rounded-full border border-[#ebdccb]">
            <MapPin className="w-4 h-4 text-[#b86835]" />
            <span>Local de Atendimento</span>
          </div>
          <h2
            id="location-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1810] leading-tight"
          >
            Atendimento em Santo Antônio da Platina – PR.
          </h2>
          <p className="text-base sm:text-lg text-[#523c30] leading-relaxed font-normal">
            Estrutura preparada para receber você com conforto, privacidade e acessibilidade no centro de Santo Antônio
            da Platina – PR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Clinic Information Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdccb] shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Clinic Name Badge */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#ebdccb]/60">
                <div className="w-12 h-12 rounded-2xl bg-[#2b1810] text-[#dfcaa9] flex items-center justify-center shrink-0 shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5225]">
                    Unidade de Atendimento
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2b1810] mt-0.5">
                    {CLINIC_INFO.clinicName}
                  </h3>
                  <p className="text-xs text-[#523c30] font-medium mt-0.5">
                    {CLINIC_INFO.fullCredentials}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#b86835] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c7262]">Endereço</h4>
                  <p className="text-base font-bold text-[#2b1810] mt-0.5">
                    {CLINIC_INFO.address.street}
                  </p>
                  <p className="text-sm text-[#523c30]">
                    {CLINIC_INFO.address.city} • CEP: {CLINIC_INFO.address.cep}
                  </p>
                </div>
              </div>

              {/* Phones & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#fbf8f3] border border-[#ebdccb] shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                    <Phone className="w-4 h-4 text-[#b86835]" />
                    <span>Telefone Fixo</span>
                  </div>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="block text-base font-bold text-[#2b1810] hover:text-[#9c5225] mt-1 transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#fbf8f3] border border-[#ebdccb] shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                    <MessageCircle className="w-4 h-4 text-[#b86835]" />
                    <span>WhatsApp</span>
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base font-bold text-[#9c5225] hover:text-[#b86835] mt-1 transition-colors"
                  >
                    {CLINIC_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c7262] mb-3">
                  <Clock className="w-4 h-4 text-[#b86835]" />
                  <span>Horários de Atendimento</span>
                </div>
                <div className="bg-[#fbf8f3] rounded-2xl border border-[#ebdccb] divide-y divide-[#ebdccb]/60 shadow-2xs">
                  {CLINIC_INFO.hours.map((item) => (
                    <div key={item.days} className="px-4 py-2.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-[#523c30]">{item.days}</span>
                      <span className="font-bold text-[#2b1810]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Convênios Aceitos */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8c7262] mb-2">
                  Convênios e Formas de Atendimento
                </div>
                <div className="flex flex-wrap gap-2">
                  {CLINIC_INFO.agreements.map((conv) => (
                    <span
                      key={conv.name}
                      className="px-3 py-1.5 rounded-xl bg-[#f9ede2] text-[#9c5225] border border-[#ebdccb] text-xs font-bold shadow-2xs"
                    >
                      ✓ {conv.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Google Maps Route */}
            <div className="pt-4 border-t border-[#ebdccb]/60 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#b86835] hover:bg-[#9a4f27] text-white text-sm font-bold shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#fbf8f3] hover:bg-[#f5eee3] text-[#2b1810] border border-[#ebdccb] text-sm font-bold shadow-2xs transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#b86835]" />
                <span>Como Chegar (Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Integrated Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#ebdccb] shadow-sm bg-[#f5eee3] min-h-[420px] relative">
            <iframe
              title="Localização da Clínica Dr. Bardal em Santo Antônio da Platina – PR"
              src={CLINIC_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
