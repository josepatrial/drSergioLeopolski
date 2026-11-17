import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { CLINIC_INFO, EditableDoctorProfile } from '../data/siteConfig';

interface PrivacyPolicyPageProps {
  profile: EditableDoctorProfile;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ profile }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `Política de Privacidade e LGPD | ${CLINIC_INFO.clinicName}`;
  }, []);

  return (
    <main className="pt-36 pb-24 bg-[#fbf8f3] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9c5225] hover:text-[#2b1810] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#ebdccb] shadow-sm space-y-8">
          <div className="space-y-3 border-b border-[#ebdccb] pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9c5225]">
              <Lock className="w-4 h-4 text-[#b86835]" />
              <span>Conformidade LGPD — Lei nº 13.709/2018</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#2b1810]">
              Política de Privacidade e Tratamento de Dados
            </h1>
            <p className="text-sm text-[#8c7262]">
              {CLINIC_INFO.clinicName} • Responsável Técnico: {profile.doctorName} ({CLINIC_INFO.crmState} |{' '}
              {CLINIC_INFO.rqeFormatted})
            </p>
          </div>

          <div className="space-y-6 text-[#523c30] text-sm sm:text-base leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-editorial text-2xl font-bold text-[#2b1810]">
                1. Compromisso com a Privacidade
              </h2>
              <p>
                Este site institucional tem como finalidade apresentar informações sobre a atuação médica em Ortopedia,
                Cirurgia da Mão e Medicina Esportiva e Regenerativa na <strong>{CLINIC_INFO.clinicName}</strong>,
                localizada em {CLINIC_INFO.address.full}, bem como facilitar o contato direto para agendamento de
                consultas.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-editorial text-2xl font-bold text-[#2b1810]">
                2. Coleta e Finalidade dos Dados
              </h2>
              <p>
                Ao clicar nos botões de contato via WhatsApp ou telefone, o usuário é direcionado voluntariamente aos
                canais oficiais de atendimento da clínica. Os dados fornecidos pelo paciente durante o contato (como
                nome, telefone e informações de agendamento) são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Viabilizar o agendamento, confirmação ou remarcação de consultas médicas;</li>
                <li>Responder a dúvidas administrativas sobre horários e localização de atendimento;</li>
                <li>Cumprir obrigações legais, regulatórias e éticas perante o Conselho Federal de Medicina (CFM).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-editorial text-2xl font-bold text-[#2b1810]">
                3. Cookies e Métricas de Navegação
              </h2>
              <p>
                Utilizamos ferramentas analíticas padrão (como Google Analytics 4) de forma agregada e anônima para
                compreender o desempenho técnico das páginas e aprimorar a experiência de navegação em dispositivos
                móveis e computadores. Não comercializamos nem compartilhamos dados pessoais com terceiros para fins
                publicitários.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-editorial text-2xl font-bold text-[#2b1810]">
                4. Direitos do Titular dos Dados (LGPD)
              </h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), o titular pode, a
                qualquer momento, solicitar informações, atualização ou exclusão de seus dados de contato cadastrados
                pela recepção por meio dos canais oficiais da {CLINIC_INFO.clinicName}, respeitados os prazos legais de
                guarda obrigatória de prontuários médicos previstos pela legislação vigente.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-editorial text-2xl font-bold text-[#2b1810]">
                5. Canais de Contato
              </h2>
              <p>
                <strong>Unidade:</strong> {CLINIC_INFO.clinicName}
                <br />
                <strong>Endereço:</strong> {CLINIC_INFO.address.full}
                <br />
                <strong>Telefone:</strong> {CLINIC_INFO.phoneDisplay}
                <br />
                <strong>WhatsApp:</strong> {CLINIC_INFO.whatsappDisplay}
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#ebdccb] flex items-center gap-2 text-xs text-[#8c7262]">
            <ShieldCheck className="w-4 h-4 text-[#b86835]" />
            <span>Documento em conformidade com a LGPD e diretrizes éticas do CFM.</span>
          </div>
        </div>
      </div>
    </main>
  );
};
