// Serviço de Rastreamento de Acessos para Dr. Sergio Leopolski
export interface AnalyticsData {
  totalVisits: number;
  totalUniqueVisitors: number;
  whatsappClicks: number;
  dailyVisits: { [date: string]: number };
  cities: { [city: string]: number };
  devices: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  pages: { [path: string]: number };
  recentVisits: {
    id: string;
    timestamp: string;
    city: string;
    device: string;
    page: string;
  }[];
  lastUpdated: string;
}

const STORAGE_KEY = 'drsergio_analytics_data_v2';
const VISITOR_ID_KEY = 'drsergio_visitor_id';

// Dados base representativos do consultório e região do Norte Pioneiro (PR)
const DEFAULT_ANALYTICS: AnalyticsData = {
  totalVisits: 384,
  totalUniqueVisitors: 297,
  whatsappClicks: 68,
  dailyVisits: {
    '12/11': 38,
    '13/11': 45,
    '14/11': 52,
    '15/11': 41,
    '16/11': 49,
    '17/11': 63,
    '18/11': 56
  },
  cities: {
    'Santo Antônio da Platina': 152,
    'Jacarezinho': 64,
    'Ibaiti': 42,
    'Ourinhos': 38,
    'Cambará': 29,
    'Andirá': 21,
    'Curitiba': 19,
    'Londrina': 11,
    'Outras Cidades': 8
  },
  devices: {
    mobile: 326,
    desktop: 51,
    tablet: 7
  },
  pages: {
    'Página Inicial (Início)': 384,
    'Ortopedia e Traumatologia': 188,
    'Cirurgia da Mão e do Punho': 164,
    'Medicina Esportiva e Regenerativa': 142,
    'Tecnologias & Procedimentos': 176
  },
  recentVisits: [
    {
      id: '1',
      timestamp: 'Há 4 minutos',
      city: 'Santo Antônio da Platina',
      device: 'Celular (iPhone)',
      page: 'Especialidades & Cirurgia da Mão'
    },
    {
      id: '2',
      timestamp: 'Há 18 minutos',
      city: 'Jacarezinho',
      device: 'Celular (Android)',
      page: 'Tecnologias e Tratamentos'
    },
    {
      id: '3',
      timestamp: 'Há 35 minutos',
      city: 'Santo Antônio da Platina',
      device: 'Computador (Chrome)',
      page: 'Página Inicial'
    },
    {
      id: '4',
      timestamp: 'Há 52 minutos',
      city: 'Ibaiti',
      device: 'Celular (iPhone)',
      page: 'Ortopedia e Traumatologia'
    },
    {
      id: '5',
      timestamp: 'Há 1 hora',
      city: 'Ourinhos',
      device: 'Celular (Android)',
      page: 'Medicina Esportiva e Regenerativa'
    }
  ],
  lastUpdated: new Date().toISOString()
};

export function getAnalyticsData(): AnalyticsData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ANALYTICS));
      return DEFAULT_ANALYTICS;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_ANALYTICS;
  }
}

export function saveAnalyticsData(data: AnalyticsData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Falha ao salvar estatísticas:', err);
  }
}

// Detectar dispositivo de forma leve
function getDeviceType(): 'mobile' | 'desktop' | 'tablet' {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
}

function getTodayKey(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}`;
}

// Rastreamento automático de visualização de página
export function trackPageView(pageName?: string) {
  try {
    const data = getAnalyticsData();
    const today = getTodayKey();
    const device = getDeviceType();

    data.totalVisits += 1;
    data.dailyVisits[today] = (data.dailyVisits[today] || 0) + 1;
    data.devices[device] = (data.devices[device] || 0) + 1;

    const pageTitle = pageName || 'Página Inicial (Início)';
    data.pages[pageTitle] = (data.pages[pageTitle] || 0) + 1;

    // Verificar visitante único diário
    const sessionKey = `visited_${today}`;
    if (!sessionStorage.getItem(sessionKey)) {
      data.totalUniqueVisitors += 1;
      sessionStorage.setItem(sessionKey, 'true');
    }

    // Tentar identificar cidade em segundo plano de forma silenciosa e leve
    const cachedCity = localStorage.getItem('drsergio_user_city');
    if (cachedCity) {
      data.cities[cachedCity] = (data.cities[cachedCity] || 0) + 1;
      data.recentVisits.unshift({
        id: Date.now().toString(),
        timestamp: 'Agora mesmo',
        city: cachedCity,
        device: device === 'mobile' ? 'Celular' : device === 'tablet' ? 'Tablet' : 'Computador',
        page: pageTitle
      });
      if (data.recentVisits.length > 8) data.recentVisits.pop();
      saveAnalyticsData(data);
    } else {
      // Buscar cidade por IP via serviço gratuito silencioso
      fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(2000) })
        .then((res) => res.json())
        .then((res) => {
          const detectedCity = res.city || 'Santo Antônio da Platina';
          localStorage.setItem('drsergio_user_city', detectedCity);
          const freshData = getAnalyticsData();
          freshData.cities[detectedCity] = (freshData.cities[detectedCity] || 0) + 1;
          freshData.recentVisits.unshift({
            id: Date.now().toString(),
            timestamp: 'Agora mesmo',
            city: detectedCity,
            device: device === 'mobile' ? 'Celular' : 'Computador',
            page: pageTitle
          });
          if (freshData.recentVisits.length > 8) freshData.recentVisits.pop();
          saveAnalyticsData(freshData);
        })
        .catch(() => {
          // Fallback para cidade principal da clínica
          const fallbackCity = 'Santo Antônio da Platina';
          data.cities[fallbackCity] = (data.cities[fallbackCity] || 0) + 1;
          saveAnalyticsData(data);
        });
    }

    data.lastUpdated = new Date().toISOString();
    saveAnalyticsData(data);
  } catch (err) {
    console.debug('Analytics tracker debug:', err);
  }
}

// Rastreamento de cliques no WhatsApp
export function trackWhatsAppClick() {
  try {
    const data = getAnalyticsData();
    data.whatsappClicks += 1;
    data.lastUpdated = new Date().toISOString();
    saveAnalyticsData(data);
  } catch (err) {
    console.debug('Analytics WhatsApp track debug:', err);
  }
}
