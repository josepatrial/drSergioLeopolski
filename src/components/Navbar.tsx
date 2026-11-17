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
        return <Bone className="w-4 h-4 text-emerald-600" />;
      case 'cirurgia-da-mao':
        return <Hand className="w-4 h-4 text-emerald-600" />;
      default:
        return <Activity className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Professional Bar */}
        <div className="bg-navy-950 text-slate-200 text-[11px] sm:text-xs border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between">
            {/* Left: Professional Credentials & Clinic */}
            <div className="flex items-center gap-3 sm:gap-5 truncate">
              <span className="font-semibold tracking-wide text-emerald-400 flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                CRM-PR 18945 • TEOT 9708 • RQE 14512 e 37663
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {CLINIC_INFO.clinicName} — {CLINIC_INFO.cityState}
              </span>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              >
                <span>{CLINIC_INFO.instagram}</span>
              </a>
            </div>

            {/* Right: Phone & Hours */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Seg a Sex: 09h às 18h30
              </span>

              <a
                href={CLINIC_INFO.phoneHref}
                className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          aria-label="Navegação Principal"
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/98 backdrop-blur-md shadow-premium border-b border-navy-900/10'
              : 'bg-white/95 backdrop-blur-sm border-b border-navy-900/5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
            {/* Brand Logo & Doctor Name */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none shrink-0"
            >
              <img
                src="/images/icone-marca-6grid.png"
                alt="Símbolo oficial Dr. Sergio Leopolski"
                className="h-10 sm:h-11 w-auto object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform shrink-0"
              />
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-navy-950 leading-none whitespace-nowrap">
                {profile.doctorName}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center shrink-0">
              <div className="flex items-center gap-5 xl:gap-8 text-[13.5px] xl:text-[15px] font-semibold text-navy-800">
                <button
                  type="button"
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-emerald-600 transition-colors py-2 px-1 whitespace-nowrap"
                >
                  Início
                </button>

                {/* Dropdown Especialidades & Condições */}
                <div
                  className="relative flex items-center"
                  onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                  onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => scrollToSection('especialidades')}
                    className="inline-flex items-center gap-1 hover:text-emerald-600 transition-colors py-2 px-1 whitespace-nowrap"
                    aria-expanded={specialtiesDropdownOpen}
                  >
                    <span>Especialidades & Condições</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        specialtiesDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-navy-400'
                      }`}
                    />
                  </button>

                  {specialtiesDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-2xl shadow-xl border border-navy-900/10 p-2 space-y-1">
                        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                          <span>Áreas de Atuação</span>
                          <span className="text-emerald-700 font-semibold text-[10px]">3 Especialidades</span>
                        </div>
                        {SPECIALTIES_DATA.map((spec) => (
                          <Link
                            key={spec.id}
                            to={`/especialidades/${spec.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/70 transition-all group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                              {getSpecialtyIcon(spec.slug)}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                                Especialidade {spec.number}
                              </div>
                              <div className="text-sm font-bold text-navy-950 group-hover/item:text-emerald-800">
                                {spec.title}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
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
                  className="hover:text-emerald-600 transition-colors py-2 px-1 whitespace-nowrap"
                >
                  Tecnologia & Procedimentos
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('diferenciais')}
                  className="hover:text-emerald-600 transition-colors py-2 px-1 whitespace-nowrap"
                >
                  Diferenciais
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('localizacao')}
                  className="hover:text-emerald-600 transition-colors py-2 px-1 whitespace-nowrap"
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
                className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-center active:scale-95 transition-transform"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-navy-900" /> : <Menu className="w-6 h-6 text-navy-900" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col bg-white">
          <div className="h-24 shrink-0 bg-slate-50 border-b border-slate-200/80 px-4 flex items-end pb-3">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/icone-marca-6grid.png"
                  alt="Símbolo oficial"
                  className="h-8 w-auto object-contain rounded"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Menu Principal
                  </span>
                  <p className="text-sm font-bold text-navy-950 leading-none">{profile.doctorName}</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                CRM-PR {CLINIC_INFO.crm}
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.phoneHref}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-navy-900 text-white text-xs font-bold shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ligar Agora</span>
              </a>
            </div>

            <div className="space-y-1 border-b border-slate-100 pb-3 text-sm">
              <button
                type="button"
                onClick={() => scrollToSection('inicio')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-navy-950 hover:bg-slate-100"
              >
                <span>Início</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('especialidades')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-navy-950 hover:bg-slate-100"
              >
                <span>Especialidades & Condições</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('tecnologia')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-navy-950 hover:bg-slate-100"
              >
                <span>Tecnologia & Procedimentos</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('diferenciais')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-navy-950 hover:bg-slate-100"
              >
                <span>Diferenciais</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('localizacao')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-left font-bold text-navy-950 hover:bg-slate-100"
              >
                <span>Local de Atendimento</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Especialidades
              </span>
              <div className="space-y-1.5">
                {SPECIALTIES_DATA.map((spec) => (
                  <Link
                    key={spec.id}
                    to={`/especialidades/${spec.slug}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      {getSpecialtyIcon(spec.slug)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-navy-950 truncate">
                        {spec.title}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
