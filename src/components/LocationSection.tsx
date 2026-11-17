import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Building2 } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/siteConfig';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      aria-labelledby="location-heading"
      className="py-20 lg:py-28 bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Local de Atendimento</span>
          </div>
          <h2
            id="location-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight"
          >
            Atendimento em Santo Antônio da Platina – PR.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Estrutura preparada para receber você com conforto, privacidade e acessibilidade no centro de Santo Antônio
            da Platina – PR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Clinic Information Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Clinic Name Badge */}
              <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                    Unidade de Atendimento
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-navy-950 mt-0.5">
                    {CLINIC_INFO.clinicName}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    {CLINIC_INFO.fullCredentials}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Endereço</h4>
                  <p className="text-base font-bold text-navy-950 mt-0.5">
                    {CLINIC_INFO.address.street}
                  </p>
                  <p className="text-sm text-slate-600">
                    {CLINIC_INFO.address.city} • CEP: {CLINIC_INFO.address.cep}
                  </p>
                </div>
              </div>

              {/* Phones & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Telefone Fixo</span>
                  </div>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="block text-base font-bold text-navy-950 hover:text-emerald-700 mt-1 transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base font-bold text-emerald-700 hover:text-emerald-800 mt-1 transition-colors"
                  >
                    {CLINIC_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Horários de Atendimento</span>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-sm">
                  {CLINIC_INFO.hours.map((item) => (
                    <div key={item.days} className="px-4 py-2.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">{item.days}</span>
                      <span className="font-bold text-navy-950">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Convênios Aceitos */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Convênios e Formas de Atendimento
                </div>
                <div className="flex flex-wrap gap-2">
                  {CLINIC_INFO.agreements.map((conv) => (
                    <span
                      key={conv.name}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold shadow-sm"
                    >
                      ✓ {conv.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Google Maps Route */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-emerald-glow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-navy-950 border border-slate-300 text-sm font-bold shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-600" />
                <span>Como Chegar (Maps)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Integrated Google Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-slate-100 min-h-[420px] relative">
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
