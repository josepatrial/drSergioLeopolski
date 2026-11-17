import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { AboutDoctor } from '../components/AboutDoctor';
import { TechnologySection } from '../components/TechnologySection';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EducationalSection } from '../components/EducationalSection';
import { LocationSection } from '../components/LocationSection';
import { CtaSection } from '../components/CtaSection';
import { EditableDoctorProfile } from '../data/siteConfig';

interface HomePageProps {
  profile: EditableDoctorProfile;
}

export const HomePage: React.FC<HomePageProps> = ({ profile }) => {
  useEffect(() => {
    document.title =
      'Dr. Sergio Leopolski | Ortopedista e Cirurgião da Mão em Santo Antônio da Platina – PR';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Dr. Sergio Leopolski — Especialista em Ortopedia, Cirurgia da Mão e Medicina Esportiva e Regenerativa em Santo Antônio da Platina – PR (CRM-PR 18945 | RQE 14512 e 37663 | TEOT 9708). Procedimentos guiados por ultrassom e tecnologias avançadas na Clínica Dr. Bardal.'
      );
    }
  }, []);

  return (
    <main>
      <Hero profile={profile} />
      <AboutDoctor profile={profile} />
      <TechnologySection />
      <SpecialtiesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <EducationalSection />
      <LocationSection />
      <CtaSection />
    </main>
  );
};
