import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown,
  SlidersHorizontal,
  Bone,
  Hand,
  Activity,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES_DATA, getWhatsAppUrl, EditableDoctorProfile } from '../data/siteConfig';

interface NavbarProps {
  profile: EditableDoctorProfile;
}

export const Navbar: React.FC<NavbarProps> = ({ profile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSpecialtiesDropdownOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
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

  const getSpecialtyIcon = (slug: string) => {
    switch (slug) {
      case 'ortopedia':
        return <Bone className="w-4 h-4 text-[#9c5225]" />;
      case 'cirurgia-da-mao':
        return <Hand className="w-4 h-4 text-[#9c5225]" />;
      default:
        return <Activity className="w-4 h-4 text-[#9c5225]" />;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffdfa]">
        {/* Top Professional Bar */}
        <div className="bg-[#2b1810] text-white text-[11px] sm:text-xs border-b border-[#412716]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between">
            {/* Left: Professional Credentials & Clinic */}
            <div className="flex items-center gap-3 sm:gap-5 truncate">
              <span className="font-semibold tracking-wide text-white flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#c5743f] animate-pulse"></span>
                CRM-PR 18945 • TEOT 9708 • RQE 14512 e 37663
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#c5743f] shrink-0" />
                {CLINIC_INFO.clinicName} — {CLINIC_INFO.cityState}
              </span>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1 text-white hover:text-white/80 transition-colors"
              >
                <span>{CLINIC_INFO.instagram}</span>
              </a>
            </div>

            {/* Right: Phone & Hours */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden lg:inline-flex items-center gap-1.5 text-white">
                <Clock className="w-3.5 h-3.5 text-[#c5743f]" />
                Seg a Sex: 09h às 18h30
              </span>

              <a
                href={CLINIC_INFO.phoneHref}
                className="hidden sm:inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5743f]" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          aria-label="Navegação Principal"
          className={`transition-all duration-300 bg-[#fffdfa] ${
            isScrolled
              ? 'bg-[#fffdfa] shadow-md border-b border-[#ebdccb]'
              : 'bg-[#fffdfa] border-b border-[#ebdccb]/60'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
            {/* Brand Logo & Doctor Name */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 sm:gap-3 text-left focus:outline-none shrink-0"
            >
              <img
                src="/images/icone-marca-6grid.png"
                alt="Símbolo oficial Dr. Sergio Leopolski"
                className="h-9 sm:h-11 w-auto object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform shrink-0"
              />
              <span className="font-editorial text-xl sm:text-2xl lg:text-[1.7rem] font-bold tracking-tight text-[#2b1810] leading-none whitespace-nowrap">
                {profile.doctorName}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center shrink-0">
              <div className="flex items-center gap-6 xl:gap-9 text-[13.5px] xl:text-[14.5px] font-semibold text-[#382216]">
                <button
                  type="button"
                  onClick={() => scrollToSection('inicio')}
                  className="relative text-[#2b1810] hover:text-[#b86835] transition-colors py-2 px-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-1 after:right-1 after:h-[2px] after:bg-[#b86835] after:rounded-full"
                >
                  Início
                </button>

                {/* Dropdown Especialidades & Áreas de Atuação */}
                <div
                  className="relative flex items-center"
                  onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                  onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => scrollToSection('especialidades')}
                    className="inline-flex items-center gap-1 hover:text-[#b86835] transition-colors py-2 px-1 whitespace-nowrap"
                    aria-expanded={specialtiesDropdownOpen}
                  >
                    <span>Especialidades & Áreas de Atuação</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        specialtiesDropdownOpen ? 'rotate-180 text-[#b86835]' : 'text-[#8c7262]'
                      }`}
                    />
                  </button>

                  {specialtiesDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-[#fffdfa] rounded-2xl shadow-xl border border-[#ebdccb] p-2 space-y-1">
                        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#8c7262] border-b border-[#ebdccb] flex items-center justify-between">
                          <span>Áreas de Atuação</span>
                          <span className="text-[#b86835] font-semibold text-[10px]">3 Especialidades</span>
                        </div>
                        {SPECIALTIES_DATA.map((spec) => (
                          <Link
                            key={spec.id}
                            to={`/especialidades/${spec.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f9ede2] transition-all group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#f3d7c3] text-[#9a4f27] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#b86835] group-hover/item:text-white transition-colors">
                              {getSpecialtyIcon(spec.slug)}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-[#b86835] uppercase tracking-wider">
                                Especialidade {spec.number}
                              </div>
                              <div className="text-sm font-bold text-[#2b1810] group-hover/item:text-[#9a4f27]">
                                {spec.title}
                              </div>
                              <p className="text-[11px] text-[#7e7266] line-clamp-1 mt-0.5">
                                {spec.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('tecnologia')}
                  className="hover:text-[#b86835] transition-colors py-2 px-1 whitespace-nowrap"
                >
                  Tecnologias e Tratamentos
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('diferenciais')}
                  className="hover:text-[#b86835] transition-colors py-2 px-1 whitespace-nowrap"
                >
                  Diferenciais
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('localizacao')}
                  className="hover:text-[#b86835] transition-colors py-2 px-1 whitespace-nowrap"
                >
                  Localização
                </button>
              </div>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Modern Menu Button */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direto"
                className="p-2.5 rounded-xl bg-[#b86835] active:bg-[#9a4f27] text-white shadow-sm flex items-center justify-center active:scale-95 transition-transform"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-[#f5eee3] active:bg-[#ebdccb] text-[#2b1810] focus:outline-none transition-colors"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-6 h-6 text-[#2b1810]" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-[#fffdfa] animate-in fade-in duration-200">
          {/* Top Credentials Bar */}
          <div className="shrink-0 bg-[#2b1810] text-[#f5eee3] px-4 py-2 border-b border-[#422314] flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 font-medium tracking-wide text-white truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5743f] shrink-0" />
              <span>CRM-PR {CLINIC_INFO.crm} • TEOT {CLINIC_INFO.teot} • {CLINIC_INFO.rqeFormatted}</span>
            </span>
          </div>

          {/* Drawer Header */}
          <div className="shrink-0 bg-[#fffcf8] border-b border-[#ebdccb] px-4 h-16 flex items-center justify-between gap-3 shadow-2xs">
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 focus:outline-none"
            >
              <img
                src="/images/icone-marca-6grid.png"
                alt="Símbolo oficial Dr. Sergio Leopolski"
                className="h-9 w-auto object-contain rounded-md shadow-xs"
              />
              <div>
                <span className="font-editorial text-xl font-bold text-[#2b1810] leading-none block">
                  {profile.doctorName}
                </span>
                <span className="text-[10px] font-semibold text-[#8c7262] block mt-0.5">
                  {CLINIC_INFO.clinicName} • {CLINIC_INFO.cityState}
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-[#f5eee3] hover:bg-[#ebdccb] active:scale-95 text-[#2b1810] flex items-center justify-center transition-all focus:outline-none"
              aria-label="Fechar menu de navegação"
            >
              <X className="w-5 h-5 text-[#2b1810]" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 pb-20">
            {/* Quick Action CTAs */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#b86835] active:bg-[#9a4f27] text-white text-xs font-bold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.phoneHref}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2b1810] active:bg-[#1a0e0a] text-white text-xs font-bold shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#dfcaa9] shrink-0" />
                <span>Ligar Agora</span>
              </a>
            </div>

            {/* Navigation Sections */}
            <div className="space-y-1 bg-white rounded-2xl p-2 border border-[#ebdccb] shadow-2xs">
              <button
                type="button"
                onClick={() => scrollToSection('inicio')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-[#2b1810] hover:bg-[#f9ede2] transition-colors"
              >
                <span>Início</span>
                <ArrowRight className="w-4 h-4 text-[#8c7262]" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('especialidades')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-[#2b1810] hover:bg-[#f9ede2] transition-colors"
              >
                <span>Especialidades & Áreas de Atuação</span>
                <ArrowRight className="w-4 h-4 text-[#8c7262]" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('tecnologia')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-[#2b1810] hover:bg-[#f9ede2] transition-colors"
              >
                <span>Tecnologias e Tratamentos</span>
                <ArrowRight className="w-4 h-4 text-[#8c7262]" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('diferenciais')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-[#2b1810] hover:bg-[#f9ede2] transition-colors"
              >
                <span>Diferenciais</span>
                <ArrowRight className="w-4 h-4 text-[#8c7262]" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('localizacao')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-[#2b1810] hover:bg-[#f9ede2] transition-colors"
              >
                <span>Localização</span>
                <ArrowRight className="w-4 h-4 text-[#8c7262]" />
              </button>
            </div>

            {/* 3 Especialidades Pages */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#9c5225]">
                  Especialidades Médicas
                </span>
                <span className="text-[10px] font-semibold text-[#8c7262]">
                  3 Áreas
                </span>
              </div>
              <div className="space-y-2">
                {SPECIALTIES_DATA.map((spec) => (
                  <Link
                    key={spec.id}
                    to={`/especialidades/${spec.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#ebdccb] shadow-2xs hover:border-[#b86835]/40 transition-all active:scale-[0.99]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#f9ede2] text-[#9c5225] flex items-center justify-center shrink-0 border border-[#ebdccb]">
                      {getSpecialtyIcon(spec.slug)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-[#9c5225] uppercase tracking-wider">
                        Especialidade {spec.number}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#2b1810] truncate">
                        {spec.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8c7262] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Clinic Info Footer inside Menu */}
            <div className="p-4 rounded-2xl bg-[#f5eee3]/70 border border-[#ebdccb] space-y-2 text-xs text-[#523c30]">
              <div className="font-bold text-[#2b1810] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#b86835]" />
                <span>{CLINIC_INFO.clinicName}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {CLINIC_INFO.address.street}
                <br />
                {CLINIC_INFO.cityState} • Tel: {CLINIC_INFO.phoneDisplay}
              </p>
              <p className="text-[10px] text-[#8c7262] pt-1 border-t border-[#ebdccb]">
                Seg a Sex: 09h às 18h30
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
