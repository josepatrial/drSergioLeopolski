import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  Eye,
  MessageCircle,
  TrendingUp,
  Smartphone,
  Monitor,
  MapPin,
  Calendar,
  Lock,
  LogOut,
  RefreshCw,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import {
  getAnalyticsData,
  AnalyticsData,
  saveAnalyticsData
} from '../services/analyticsTracker';
import { CLINIC_INFO, EditableDoctorProfile } from '../data/siteConfig';

interface AnalyticsPageProps {
  profile: EditableDoctorProfile;
}

const AUTH_USER = 'master';
const AUTH_PASS = 'Sitetop@2027#';
const AUTH_STORAGE_KEY = 'drsergio_analytics_authenticated';

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ profile }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [analytics, setAnalytics] = useState<AnalyticsData>(getAnalyticsData());
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<'geral' | 'cidades' | 'dispositivos'>('geral');

  useEffect(() => {
    // Verificar se já está autenticado
    const isAuth =
      sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' ||
      localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput.trim() === AUTH_USER && passwordInput === AUTH_PASS) {
      setIsAuthenticated(true);
      setLoginError('');
      if (rememberMe) {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } else {
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      }
    } else {
      setLoginError('Usuário ou senha incorretos. Verifique suas credenciais.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
    setUsernameInput('');
    setPasswordInput('');
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setAnalytics(getAnalyticsData());
      setRefreshing(false);
    }, 400);
  };

  // Se não estiver autenticado, exibe a tela de login exclusiva e segura
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#fbf8f3] bg-silk-waves flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md bg-white rounded-3xl border border-[#ebdccb] shadow-2xl p-6 sm:p-8 space-y-6">
          {/* Logo e Cabeçalho de Acesso */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f9ede2] border border-[#ebdccb] flex items-center justify-center p-2 shadow-xs">
              <img
                src="/images/icone-marca-6grid.png"
                alt="Símbolo oficial Dr. Sergio Leopolski"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#9c5225] bg-[#f9ede2] px-3 py-0.5 rounded-full border border-[#ebdccb] mb-1">
                Acesso Restrito
              </span>
              <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2b1810]">
                Estatísticas do Site
              </h1>
              <p className="text-xs text-[#8c7262] mt-1 font-medium">
                {profile.doctorName} • {CLINIC_INFO.clinicName}
              </p>
            </div>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 text-center animate-in fade-in duration-200">
                {loginError}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2b1810] block">
                Usuário
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Digite seu usuário"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#fbf8f3] border border-[#ebdccb] text-[#2b1810] text-sm font-medium focus:outline-none focus:border-[#b86835] focus:ring-2 focus:ring-[#b86835]/20 transition-all placeholder:text-[#a89384]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2b1810] block">
                Senha
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Digite sua senha"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#fbf8f3] border border-[#ebdccb] text-[#2b1810] text-sm font-medium focus:outline-none focus:border-[#b86835] focus:ring-2 focus:ring-[#b86835]/20 transition-all placeholder:text-[#a89384]"
              />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-[#523c30] cursor-pointer font-medium select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#ebdccb] text-[#b86835] focus:ring-[#b86835]"
                />
                <span>Lembrar neste aparelho</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#b86835] hover:bg-[#9a4f27] active:scale-95 text-white font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Entrar no Painel</span>
            </button>
          </form>

          {/* Link para Voltar */}
          <div className="text-center pt-2 border-t border-[#ebdccb]/60">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c7262] hover:text-[#b86835] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para o site principal</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Cálculos das estatísticas para visualização intuitiva
  const totalVisits = analytics.totalVisits;
  const uniqueVisitors = analytics.totalUniqueVisitors;
  const whatsappClicks = analytics.whatsappClicks;
  const conversionRate = totalVisits > 0 ? ((whatsappClicks / totalVisits) * 100).toFixed(1) : '0';

  const sortedCities = Object.entries(analytics.cities).sort((a, b) => b[1] - a[1]);
  const maxCityVisits = sortedCities.length > 0 ? sortedCities[0][1] : 1;

  const totalDevices =
    analytics.devices.mobile + analytics.devices.desktop + analytics.devices.tablet || 1;
  const mobilePct = Math.round((analytics.devices.mobile / totalDevices) * 100);
  const desktopPct = Math.round((analytics.devices.desktop / totalDevices) * 100);

  const dailyEntries = Object.entries(analytics.dailyVisits);
  const maxDaily = Math.max(...dailyEntries.map((d) => d[1]), 1);

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#2b1810]">
      {/* Top Header do Painel */}
      <header className="sticky top-0 z-40 bg-[#fffdfa]/95 backdrop-blur-md border-b border-[#ebdccb] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/icone-marca-6grid.png"
              alt="Logo"
              className="h-10 w-auto object-contain rounded-md shadow-2xs"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-xl sm:text-2xl font-bold text-[#2b1810] leading-none">
                  {profile.doctorName}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Monitor Ativo
                </span>
              </div>
              <span className="text-xs font-semibold text-[#8c7262] block mt-0.5">
                Painel de Visitas & Cidades
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#ebdccb] hover:bg-[#f9ede2] text-[#2b1810] text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95"
              title="Atualizar estatísticas"
            >
              <RefreshCw className={`w-4 h-4 text-[#b86835] ${refreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Atualizar</span>
            </button>

            <Link
              to="/"
              className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#ebdccb] hover:bg-[#f9ede2] text-[#2b1810] text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#8c7262]" />
              <span className="hidden sm:inline">Ver Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-[#f5eee3] hover:bg-[#ebdccb] text-[#2b1810] text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95"
              title="Sair do painel"
            >
              <LogOut className="w-4 h-4 text-[#9c5225]" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Banner de Boas-Vindas e Resumo Rápido */}
        <div className="bg-gradient-to-br from-[#2b1810] to-[#422314] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#dfcaa9] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Resumo Geral de Desempenho
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Acompanhamento de Acessos ao Consultório
            </h2>
            <p className="text-xs sm:text-sm text-[#ecd8c7] font-normal leading-relaxed">
              Métricas reais de visitantes interessados em consultas de Ortopedia, Cirurgia da Mão e
              Medicina Regenerativa em Santo Antônio da Platina e região.
            </p>
          </div>
        </div>

        {/* 4 Cards Principais de Indicadores */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total de Visitas */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#ebdccb] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                Total de Visitas
              </span>
              <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b1810]">
                {totalVisits}
              </div>
              <p className="text-[11px] text-[#8c7262] font-semibold">Páginas visualizadas</p>
            </div>
          </div>

          {/* Card 2: Visitantes Únicos */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#ebdccb] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                Pessoas Únicas
              </span>
              <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b1810]">
                {uniqueVisitors}
              </div>
              <p className="text-[11px] text-[#8c7262] font-semibold">Visitantes individuais</p>
            </div>
          </div>

          {/* Card 3: Cliques no WhatsApp (Conversões) */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#ebdccb] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                Cliques WhatsApp
              </span>
              <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                <MessageCircle className="w-4 h-4 fill-[#b86835]" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#b86835]">
                {whatsappClicks}
              </div>
              <p className="text-[11px] text-[#8c7262] font-semibold">Interesses em consulta</p>
            </div>
          </div>

          {/* Card 4: Taxa de Conversão */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#ebdccb] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8c7262]">
                Conversão
              </span>
              <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#2b1810]">
                {conversionRate}%
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold">Visitas que clicam WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Gráfico Visual: Evolução dos Últimos Dias */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdccb] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#2b1810]">
                Acessos Diários (Última Semana)
              </h3>
              <p className="text-xs text-[#8c7262] mt-0.5 font-medium">
                Movimentação dia a dia de visitantes no site
              </p>
            </div>
            <span className="text-xs font-bold text-[#9c5225] bg-[#f9ede2] px-3 py-1 rounded-full border border-[#ebdccb] w-fit">
              Média: ~{Math.round(totalVisits / dailyEntries.length)} visitas/dia
            </span>
          </div>

          {/* Barras do Gráfico */}
          <div className="pt-4">
            <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-44 sm:h-52 border-b border-[#ebdccb] pb-2">
              {dailyEntries.map(([date, visits]) => {
                const heightPct = Math.round((visits / maxDaily) * 100);
                return (
                  <div key={date} className="flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] sm:text-xs font-bold text-[#b86835] group-hover:scale-110 transition-transform">
                      {visits}
                    </span>
                    <div
                      style={{ height: `${heightPct}%` }}
                      className="w-full max-w-[42px] bg-[#f9ede2] border border-[#ebdccb] rounded-t-xl group-hover:bg-[#b86835] transition-all duration-300 relative"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-[#b86835] rounded-t-xl" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#8c7262] truncate">
                      {date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grade de 2 Colunas: Cidades & Dispositivos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coluna Esquerda (7 cols): Cidades com mais acessos */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdccb] shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#2b1810]">
                  Cidades que mais Acessaram
                </h3>
                <p className="text-xs text-[#8c7262] mt-0.5 font-medium">
                  Origem geográfica dos pacientes e visitantes
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                <MapPin className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-3.5">
              {sortedCities.map(([city, count], idx) => {
                const barWidth = Math.round((count / maxCityVisits) * 100);
                const pct = Math.round((count / totalVisits) * 100);
                return (
                  <div key={city} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-2 font-bold text-[#2b1810]">
                        <span className="text-[11px] font-black text-[#8c7262] w-5">
                          #{idx + 1}
                        </span>
                        <span>{city}</span>
                        {idx === 0 && (
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#9c5225] bg-[#f9ede2] px-2 py-0.5 rounded-md border border-[#ebdccb]">
                            Sede Clínica
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#8c7262]">
                        <span className="font-bold text-[#2b1810]">{count} acessos</span>
                        <span>({pct}%)</span>
                      </div>
                    </div>
                    {/* Barra de Progresso */}
                    <div className="h-2 w-full bg-[#fbf8f3] rounded-full overflow-hidden border border-[#ebdccb]/60">
                      <div
                        style={{ width: `${barWidth}%` }}
                        className={`h-full rounded-full transition-all duration-500 ${
                          idx === 0 ? 'bg-[#b86835]' : 'bg-[#dfcaa9]'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna Direita (5 cols): Dispositivos & Páginas */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dispositivos */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ebdccb] shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#2b1810]">
                    Dispositivo Usado
                  </h3>
                  <p className="text-xs text-[#8c7262] mt-0.5 font-medium">
                    Celular vs Computador
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                  <Smartphone className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#fbf8f3] border border-[#ebdccb] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#b86835] text-white flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2b1810]">Celular (Mobile)</div>
                      <p className="text-xs text-[#8c7262]">{analytics.devices.mobile} acessos</p>
                    </div>
                  </div>
                  <span className="font-editorial text-2xl font-bold text-[#b86835]">
                    {mobilePct}%
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#fbf8f3] border border-[#ebdccb] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2b1810] text-white flex items-center justify-center">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2b1810]">Computador (Desktop)</div>
                      <p className="text-xs text-[#8c7262]">{analytics.devices.desktop} acessos</p>
                    </div>
                  </div>
                  <span className="font-editorial text-2xl font-bold text-[#2b1810]">
                    {desktopPct}%
                  </span>
                </div>
              </div>
            </div>

            {/* Páginas Mais Lidas */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ebdccb] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#2b1810]">
                    Páginas Mais Visitadas
                  </h3>
                  <p className="text-xs text-[#8c7262] mt-0.5 font-medium">
                    Seções de maior interesse do público
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#f9ede2] flex items-center justify-center text-[#b86835]">
                  <Layers className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2.5">
                {Object.entries(analytics.pages).map(([page, views]) => (
                  <div
                    key={page}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#fbf8f3] border border-[#ebdccb]/60 text-xs"
                  >
                    <span className="font-bold text-[#2b1810] truncate max-w-[220px]">
                      {page}
                    </span>
                    <span className="font-bold text-[#b86835] bg-[#f9ede2] px-2 py-0.5 rounded-md border border-[#ebdccb]">
                      {views} views
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Últimos Acessos em Tempo Real */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdccb] shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#2b1810]">
                Últimas Visitas Registradas
              </h3>
              <p className="text-xs text-[#8c7262] mt-0.5 font-medium">
                Fluxo recente de pessoas navegando no site
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              Tempo Real
            </span>
          </div>

          <div className="divide-y divide-[#ebdccb]/60">
            {analytics.recentVisits.map((visit) => (
              <div
                key={visit.id}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#f9ede2] border border-[#ebdccb] flex items-center justify-center shrink-0 text-[#b86835]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#2b1810]">{visit.city}</span>
                    <span className="text-[#8c7262] ml-2 font-medium">({visit.device})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-[11px] text-[#8c7262]">
                  <span className="bg-[#f5eee3] px-2 py-0.5 rounded text-[#2b1810] font-medium truncate max-w-[220px]">
                    {visit.page}
                  </span>
                  <span className="font-bold text-[#9c5225] shrink-0">{visit.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
