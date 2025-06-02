// src/components/StudySection.js
import React from 'react';
import { GraduationCap, BookOpen, Code, Globe, Brain } from 'lucide-react'; // Passende Icons

const StudySection = () => {
  const subjects = [
    { name: "Rechnerarchitektur",
      comment: "Als Bits und Bytes plötzlich Freunde (oder Feinde?) wurden.",
      icon: <Code size={40} className="text-cyan-400 group-hover:animate-pulse" /> },
    { name: "Algorithmen & Datenstrukturen",
      comment: "Sortieren bis der Arzt kommt – oder zumindest der Stack nicht überläuft.",
      icon: <BookOpen size={40} className="text-purple-400 group-hover:animate-pulse" /> },
    { 
    name: "Front- & Backend-Entwicklung",
    comment: "Vom unsichtbaren Motor bis zum glänzenden Lack – alles musste sitzen!",
    icon: <Globe size={40} className="text-pink-400 group-hover:animate-pulse" /> 
    },
    { name: "Datenbanken",
      comment: "SELECT * FROM 'nächtliche_Lernsessions' WHERE 'Kaffee' > 5;",
      icon: <Code size={40} className="text-emerald-400 group-hover:animate-pulse" /> },
     { name: "Machine Learning",
      comment: "Wenn die Maschine klüger wird als du – hoffentlich nur bei Testdaten.",
      icon: <GraduationCap size={40} className="text-orange-400 group-hover:animate-pulse" /> },
      { 
      name: "Deep Learning",
      comment: "Neuronale Netze so tief, da braucht man fast eine Taucherausrüstung für den Code.",
      icon: <Brain size={40} className="text-red-400 group-hover:animate-pulse" /> 
    }
  ];

  return (
    <section id="study" data-scroll-id="study" className="py-20 bg-black/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400">
          Informatikstudium – Tränen & Schweiß
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Das Informatikstudium – ein Ritt auf der Rasierklinge zwischen tiefster Verzweiflung und purem Glück. Hier ein paar Wegbegleiter:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="group card-hover bg-white/5 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
              <div className="flex items-center justify-center mb-4 w-16 h-16 bg-white/10 rounded-full mx-auto">
                {subject.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-cyan-300">{subject.name}</h3>
              <p className="text-center text-white/80">{subject.comment}</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-center mt-16 max-w-3xl mx-auto text-white/90">
          Es war eine intensive Zeit des Studiums, oft bis spät in die Nacht, aber jedes bestandene Modul war ein Sieg!
        </p>
      </div>
    </section>
  );
};
export default StudySection;