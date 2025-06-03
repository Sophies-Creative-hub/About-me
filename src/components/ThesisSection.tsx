import React from 'react';
import { BookOpen, Zap, Brain } from 'lucide-react'; // Zap für Energie/Physik, Brain für Neuromorphic

const ThesisSection = () => {
  return (
    <section id="thesis" data-scroll-id="thesis" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse-slow group-hover:scale-105 transition-transform duration-500">
                    <Brain size={80} className="text-white mb-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-white text-lg font-semibold">Neuromorphes Computing</span>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-pink-500 rounded-full flex items-center justify-center animate-float group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Zap size={48} className="text-white" />
                </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Bachelorarbeit - Als das Gehirn Vorbild wurde
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-white/90">
              Thema: "Neuromorphes Computing". Ein Sprung ins kalte Wasser der fortgeschrittenen Physik und Materialwissenschaft. Wer hätte gedacht, dass mein Informatikstudium mich so tief in die Funktionsweise von Synapsen und Neuronen führen würde?
            </p>
            <p className="text-xl leading-relaxed text-white/90">
              Sich in die Welt der Memristoren einzuarbeiten, Bauelemente, die sich ihren Widerstand "merken" können, war eine gewaltige Herausforderung. Stunden über Fachartikeln, oft mit dem Gefühl, eine komplett neue Sprache zu lernen. Aber die Faszination Technologien zu verstehen, die biologische Prozesse nachahmen kann, war der Antrieb!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
