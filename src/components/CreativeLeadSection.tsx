
import React from 'react'; 
import { Users, Palette, Heart } from 'lucide-react'; 
const CreativeLeadSection = () => {
  return (
    <section id="creativelead" data-scroll-id="creativelead" className="py-20 relative"> 
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Kreativität & Führung: Menschen im Mittelpunkt
            </h2> 
            <p className="text-xl leading-relaxed mb-4 text-white/90">
              Um ein DevOps-Bootcamp spannend und praxisnah zu gestalten, dachten wir uns im Team ständig neue, kreative Projekte aus – von der Konzeption bis zum Deployment. Diese Dynamik war ansteckend!
            </p>
            <p className="text-xl leading-relaxed mb-4 text-white/90">
              Der Wechsel in die Team Lead Rolle für das Teaching war dann ein natürlicher Schritt. Meine Philosophie: Mitarbeiterförderung ist Herzenssache. Ich liebe es, Menschen wachsen zu sehen, ihre Stärken zu erkennen und sie dabei zu unterstützen, ihr volles Potenzial zu entfalten. 
            </p>
            <p className="text-xl leading-relaxed text-white/90">
              Lehrplanerstellung und Kursverwaltung gehörten dazu, aber im Kern ging es immer darum, ein Umfeld zu schaffen, in dem Lernen und Lehren Freude macht – für alle Beteiligten. 
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative"> {/* Äußeres div für Positionierung der Animationselemente */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl shadow-emerald-500/50 group">
                  <Users size={60} className="text-white mb-3 group-hover:scale-110 transition-transform" />
                  <Palette size={40} className="text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <Heart size={50} className="text-pink-300 animate-pulse" />
                  <p className="text-white mt-2 text-sm">Menschen. Kreativität. Herz.</p>
              </div>
              {/* Der Orbit selbst */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="leadership-orbit"> 
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="leadership-satellite bg-pink-300 rounded-full shadow-lg" 
                      style={{
                        transform: `rotate(${i * 72}deg) translateX(130px)`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> // Schließender section-Tag
  ); // Schließende Klammer des return-Statements
}; // Schließende Klammer der Komponentendefinition

export default CreativeLeadSection; // Ist der Export korrekt?
