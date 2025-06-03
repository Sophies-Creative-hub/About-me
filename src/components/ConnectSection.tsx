
import React from 'react';
import { Github, Linkedin, Sparkles } from 'lucide-react'; 

const ConnectSection = () => {
  return (
    <section id="connect" data-scroll-id="connect" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Und wenn du bis hierher gelesen hast, dann lass uns doch in Kontakt treten!
        </h2>
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Sparkles size={24} className="text-pink-400 mr-2" />
                Meine Reise & Stärken
              </h3>
              <ul className="space-y-3 text-lg text-white/90">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✦</span>
                  <span>Erfolgreich abgeschlossenes Informatikstudium mit Fokus auf komplexe Themen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✦</span>
                  <span>Tiefe Einarbeitung in anspruchsvolle Bereiche wie Neuromorphes Computing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✦</span>
                  <span>Schnelle Aneignung neuer Technologien (Linux, Docker, Cloud, IaC) im beruflichen Kontext.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✦</span>
                  <span>Begeisterung für Wissensvermittlung und kreative Projektgestaltung.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✦</span>
                  <span>Teamführung mit Fokus auf Mitarbeiterförderung und einer "menschenliebenden" Herangehensweise.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Kernkompetenzen</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'JavaScript', 'HTML/CSS', 
                  'UI/UX Design', 'Linux', 'Docker', 
                  'Cloud Computing', 'Infrastructure as Code', 
                  'DevOps Prinzipien', 'Teamführung',  
                  'Technische Wissensvermittlung', 'Neuromorphes Computing'
                ].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

              <a 
                href="https://github.com/Sophies-Creative-hub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-2 px-8 py-3 bg-white/10 rounded-full text-lg text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-lg w-full sm:w-auto"
              >
                <Github size={22} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sophie-ischenko/"
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-2 px-8 py-3 bg-white/10 rounded-full text-lg text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-lg w-full sm:w-auto"
              >
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
