import React from 'react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/siteConfig';
import {
  Award,
  ShieldCheck,
  Scan,
  Cpu,
  Target,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Building2
} from 'lucide-react';

interface PillarItem {
  id: string;
  number: string;
  badge: string;
  metric: string;
  title: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
}

const PILLARS_LIST: PillarItem[] = [
  {
    id: 'experiencia',
    number: '01',
    badge: 'Trajetória Consolidada',
    metric: '25+ Anos de Atuação',
    title: 'Mais de duas décadas e meia de prática médica',
    description:
      'Formação sólida pela UFPel, especialização em Ortopedia pela Santa Casa de Marília e Residência em Cirurgia da Mão pela UFPR, somando milhares de pacientes atendidos e constante atualização científica.',
    highlight: 'Experiência clínica e cirúrgica de alta precisão',
    icon: <Award className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'titulacoes',
    number: '02',
    badge: 'Titulações de Referência',
    metric: 'SBOT • ABCM • AAOS',
    title: 'Membro Titular das principais entidades do Brasil e EUA',
    description:
      'Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (TEOT nº 9708), da Associação Brasileira de Cirurgia da Mão (ABCM) e da prestigiosa American Academy of Orthopaedic Surgeons (AAOS).',
    highlight: 'RQE 14512 e RQE 37663 registrados no CRM-PR',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'ultrassom',
    number: '03',
    badge: 'Precisão em Tempo Real',
    metric: 'USG Musculoesquelética',
    title: 'Procedimentos guiados por ultrassom no consultório',
    description:
      'Infiltrações e bloqueios articulares realizados diretamente no consultório com visualização contínua das estruturas e da agulha em tempo real, garantindo máxima eficácia, segurança e alívio rápido.',
    highlight: 'Procedimento ambulatorial sem necessidade de internação',
    icon: <Scan className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'tecnologia-btl',
    number: '04',
    badge: 'Tecnologia Internacional',
    metric: 'SIS Elite & Ondas de Choque',
    title: 'Equipamentos de padrão mundial à sua disposição',
    description:
      'Consultório equipado com Ondas de Choque Radiais e o Sistema SIS Elite (Estimulação Eletromagnética de Alta Intensidade), padrão ouro em bioestimulação tecidual e alívio da dor articular crônica.',
    highlight: 'Estímulo biológico regenerativo e reabilitação tecidual',
    icon: <Cpu className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'visao-integrada',
    number: '05',
    badge: 'Visão 360° do Movimento',
    metric: 'CETRUS & Instituto Vita',
    title: 'Medicina Regenerativa e Esportiva Integrada',
    description:
      'Pós-graduado pelo Instituto Vita e Universidade Cruzeiro do Sul, com formação avançada em Medicina Regenerativa no CETRUS. Capacitação completa para tratar desde o paciente comum até atletas de alto rendimento.',
    highlight: 'Foco centrado na devolução da mobilidade funcional',
    icon: <Target className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'convenios',
    number: '06',
    badge: 'Acolhimento & Acesso',
    metric: 'Unimed • Sanepar • Particular',
    title: 'Atendimento humanizado com ampla aceitação de convênios',
    description:
      'Localizado na tradicional Clínica Dr. Bardal em Santo Antônio da Platina – PR. Estrutura moderna, ambiente acolhedor, pontualidade e suporte ágil para agendamento de consultas pelo WhatsApp.',
    highlight: 'Facilidade de marcação e suporte personalizado',
    icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />
  }
];

export const DifferentialsSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-heading"
      className="py-20 lg:py-28 bg-[#071730] text-white relative overflow-hidden bg-medical-grid-dark"
    >
      {/* Ambient Radial Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-4 border-b border-white/10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30 shadow-inner">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Pilares de Excelência Médica</span>
            </div>

            <h2
              id="differentials-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]"
            >
              Rigor técnico, inovação tecnológica e cuidado humanizado.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Na <strong className="text-white font-semibold">{CLINIC_INFO.clinicName}</strong>, a prática do Dr. Sergio Leopolski une a segurança de mais de 25 anos de experiência clínica às mais modernas abordagens de medicina regenerativa e cirurgia minimamente invasiva.
            </p>
          </div>

          {/* Quick Credential Badge */}
          <div className="shrink-0 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Atendimento no Norte Pioneiro
              </span>
              <span className="text-sm font-bold text-white block">
                {CLINIC_INFO.clinicName}
              </span>
              <span className="text-xs text-slate-400">
                {CLINIC_INFO.cityState}
              </span>
            </div>
          </div>
        </div>

        {/* 6 Pillars Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS_LIST.map((pillar) => (
            <article
              key={pillar.id}
              className="group relative rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-emerald-400/40 p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1 hover:shadow-emerald-950/50 backdrop-blur-sm"
            >
              {/* Card Top: Number, Badge & Icon */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="font-editorial text-3xl font-bold text-emerald-400/90 leading-none">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
                    {pillar.icon}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-emerald-400/80 block uppercase tracking-wider">
                    {pillar.metric}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Card Bottom: Specific Clinical Highlight */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="line-clamp-1">{pillar.highlight}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Institutional Authority Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-navy-900/90 to-emerald-950/70 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-navy-950 flex items-center justify-center shrink-0 shadow-emerald-glow">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Prática Médica Ética, Registrada e de Alta Qualificação
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Dr. Sergio Leopolski • CRM-PR {CLINIC_INFO.crm} • TEOT {CLINIC_INFO.teot} • RQE 14512 (Ortopedia) e RQE 37663 (Cirurgia da Mão)
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de agendar uma consulta com o Dr. Sergio Leopolski na Clínica Dr. Bardal.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-sm shadow-emerald-glow transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-navy-950" />
            <span>Agendar Consulta</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
