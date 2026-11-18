import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { SpecialtyDetailPage } from './pages/SpecialtyDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DEFAULT_DOCTOR_PROFILE, EditableDoctorProfile } from './data/siteConfig';

export function App() {
  const [profile] = useState<EditableDoctorProfile>(DEFAULT_DOCTOR_PROFILE);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-sand-50 text-navy-900">
        <Navbar profile={profile} />

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage profile={profile} />}
            />
            <Route
              path="/especialidades/:slug"
              element={<SpecialtyDetailPage profile={profile} />}
            />
            <Route
              path="/politica-de-privacidade"
              element={<PrivacyPolicyPage profile={profile} />}
            />
          </Routes>
        </div>

        <Footer profile={profile} />
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
}

export default App;

