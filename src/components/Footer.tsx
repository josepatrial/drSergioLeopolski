import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ShieldCheck, Activity, Lock } from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES_DATA, getWhatsAppUrl, EditableDoctorProfile } from '../data/siteConfig';

interface FooterProps {
  profile: EditableDoctorProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Professional Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/icone-marca-6grid.png"
                alt="Símbolo oficial Dr. Sergio Leopolski"
                className="h-11 w-auto object-contain rounded-lg shadow-sm"
              />
              <div>
                <div className="font-editorial text-2xl font-bold text-white leading-none">
                  {profile.doctorName}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  CRM-PR {CLINIC_INFO.crm} • {CLINIC_INFO.teot} • {CLINIC_INFO.rqeFormatted}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {CLINIC_INFO.doctorFullName}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Médico especialista em resolver a dor e devolver a função. Atuação em Ortopedia, Cirurgia da Mão e
              Medicina Esportiva e Regenerativa na {CLINIC_INFO.clinicName} em Santo Antônio da Platina – PR.
            </p>
          </div>

          {/* Column 2: Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SPECIALTIES_DATA.map((spec) => (
                <li key={spec.id}>
                  <Link
                    to={`/especialidades/${spec.slug}`}
                    className="text-slate-300 hover:text-emerald-300 transition-colors block"
                  >
                    {spec.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('inicio')}
                  className="text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('especialidades')}
                  className="text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Especialidades & Condições
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('tecnologia')}
                  className="text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Tecnologia & Procedimentos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('localizacao')}
                  className="text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Local de Atendimento
                </button>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Clinic Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {CLINIC_INFO.clinicName}
            </h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  {CLINIC_INFO.address.street}
                  <br />
                  {CLINIC_INFO.address.city}
                  <br />
                  CEP: {CLINIC_INFO.address.cep}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={CLINIC_INFO.phoneHref} className="hover:text-emerald-300 transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold"
                >
                  {CLINIC_INFO.whatsappDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  {CLINIC_INFO.instagram}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href={CLINIC_INFO.emailHref} className="hover:text-emerald-300 transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* LGPD & CFM Compliance Notice */}
        <div className="pt-8 space-y-4 text-xs text-slate-400">
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">Aviso de Privacidade e LGPD (Lei nº 13.709/2018):</strong> Este site
                respeita a privacidade dos visitantes. O contato realizado via WhatsApp ou telefone destina-se
                exclusivamente ao atendimento e agendamento de consultas na {CLINIC_INFO.clinicName}.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 text-emerald-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Publicidade Médica em conformidade com o CFM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>
              © {new Date().getFullYear()} {profile.doctorName} — {CLINIC_INFO.clinicName}. Todos os direitos
              reservados.
            </p>
            <p>
              Responsável Técnico Médico: {profile.doctorName} • CRM-PR {CLINIC_INFO.crm} | RQE 14512 e 37663 | {CLINIC_INFO.teot}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
