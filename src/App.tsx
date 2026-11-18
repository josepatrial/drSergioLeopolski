import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { SpecialtyDetailPage } from './pages/SpecialtyDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { DEFAULT_DOCTOR_PROFILE, EditableDoctorProfile } from './data/siteConfig';
import { trackPageView } from './services/analyticsTracker';

function AppLayout({ profile }: { profile: EditableDoctorProfile }) {
  const location = useLocation();
  const isAnalyticsPage = location.pathname.startsWith('/estatisticas');

  useEffect(() => {
    if (!isAnalyticsPage) {
      trackPageView();
    }
  }, [location.pathname, isAnalyticsPage]);

  if (isAnalyticsPage) {
    return (
      <Routes>
        <Route path="/estatisticas" element={<AnalyticsPage profile={profile} />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-navy-900">
      <Navbar profile={profile} />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage profile={profile} />} />
          <Route
            path="/especialidades/:slug"
            element={<SpecialtyDetailPage profile={profile} />}
          />
          <Route
            path="/politica-de-privacidade"
            element={<PrivacyPolicyPage profile={profile} />}
          />
          <Route
            path="/estatisticas"
            element={<AnalyticsPage profile={profile} />}
          />
        </Routes>
      </div>

      <Footer profile={profile} />
      <FloatingWhatsApp />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export function App() {
  const [profile] = useState<EditableDoctorProfile>(DEFAULT_DOCTOR_PROFILE);

  return (
    <BrowserRouter>
      <AppLayout profile={profile} />
    </BrowserRouter>
  );
}

export default App;

