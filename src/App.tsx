
import React, { useEffect, useState } from 'react';
import './index.css'; // oder wie deine CSS-Datei heißt

import Navigation from './components/Navigation.js';
import HeroSection from './components/HeroSection.js';
import StudySection from './components/StudySection.js';
import ThesisSection from './components/ThesisSection.js';
import WorkIntroSection from './components/WorkIntroSection.js';
import CreativeLeadSection from './components/CreativeLeadSection.js';
import FAQSection from './components/FAQSection.js';
import ConnectSection from './components/ConnectSection.js';
import Footer from './components/Footer.js';
function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`section[data-scroll-id="${sectionId}"]`);
    if (section instanceof HTMLElement) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-scroll-id]');
      let currentSection = 'hero';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('data-scroll-id');

        if (sectionId && window.scrollY >= sectionTop - window.innerHeight / 2 &&
            window.scrollY < sectionTop + sectionHeight - window.innerHeight / 2) {
          currentSection = sectionId;
          
          if (!visibleSections.includes(sectionId)) {
            setVisibleSections(prev => [...prev, sectionId]);
            section.classList.add('visible');
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  
  
  // Angepasste Navigations-IDs und Labels
  const navItems = [
    { id: 'hero', label: 'Start' },
    { id: 'study', label: 'Studium' },
    { id: 'thesis', label: 'Bachelorarbeit' },
    { id: 'workintro', label: 'Berufsstart' },
    { id: 'creativelead', label: 'Team Lead' },
    { id: 'faq', label: 'Über Mich' },
    { id: 'connect', label: 'Kontakt' }
  ];


  return (
    <div className="font-sans bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white">
      <Navigation 
        navItems={navItems} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} // <-- Weitergeben
      />
      
      <HeroSection scrollToSection={scrollToSection} /> {/* <<-- HIER PROP HINZUFÜGEN */}
      <StudySection />
      <ThesisSection />
      <WorkIntroSection />
      <CreativeLeadSection />
      <FAQSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}

export default App;