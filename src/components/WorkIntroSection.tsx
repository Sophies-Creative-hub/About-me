// src/components/WorkIntroSection.js
import React from 'react';
import { Zap, Lightbulb, Cloud, Terminal, Presentation } from 'lucide-react';

const WorkIntroSection = () => {
  const skillsLearned = [
    { name: 'Linux', icon: <Terminal size={24} /> },
    { name: 'Webentwicklung', icon: <Zap size={24} /> },
    { name: 'Docker', icon: <Cloud size={24} /> }, // Annahme für Containerisierung
    { name: 'Cloud Computing', icon: <Cloud size={24} /> },
    { name: 'Infrastructure as Code', icon: <Zap size={24} /> },
  ];

  return (
    <section id="workintro" data-scroll-id="workintro" className="py-20 bg-black/20 relative">
      <div className="container mx-auto px-6 text-center">
        <Lightbulb size={60} className="mx-auto mb-6 text-yellow-400 animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
          Der Sprung in die Praxis: IT-Trainerin
        </h2>
        <p className="text-xl leading-relaxed mb-6 max-w-3xl mx-auto text-white/90">
         Die Lernkurve war anfangs fast senkrecht – aber die Begeisterung für jede neue Technologie, die ich mir aneignen durfte, war grenzenlos.
        </p>
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {skillsLearned.map(skill => (
            <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors">
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/90">
          Von der Nachmittagsbetreuung zum eigenständigen Leiten von 12-monatigen Kursen – die neueste Technik nicht nur zu verstehen, sondern sie auch verständlich und mit Leidenschaft weiterzugeben, wurde zu meiner neuen Passion. Es gibt nichts Schöneres, als das "Aha!"-Leuchten in den Augen der Kursteilnehmer zu sehen!
        </p>
      </div>
    </section>
  );
};

export default WorkIntroSection;