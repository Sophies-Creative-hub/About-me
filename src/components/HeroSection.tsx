import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps { // Interface für Props definieren
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => { 
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden visible">
      {/* Dein Particle-Hintergrund-JSX */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-purple-900/80 to-fuchsia-900/80"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg')] bg-cover bg-center opacity-20"></div>
          <div className="particle-container">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle absolute rounded-full"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              background: `linear-gradient(${Math.random() * 360}deg, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8), rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
              ></div>
            ))}
          </div>
        </div>  
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 hover:scale-105">
          <span className="block">Individuell programmiert:</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse-slow">
            Meine Reise zur Kreativität
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
          Von Tränen und Triumphen im Code zur kreativen Entfaltung
        </p>
        <button 
          onClick={() => scrollToSection('study')} 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full hover:from-fuchsia-700 hover:to-pink-700 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
        >
          Meine fachliche Reise entdecken
          <ChevronDown className="ml-2 transition-transform duration-500 group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
