import React from 'react';
import { Heart, Music, MapPin, User, Quote } from 'lucide-react';

const FAQSection = () => {
  return (
    <section id="faq" data-scroll-id="faq" className="py-20 bg-black/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 transform transition-all duration-500 hover:scale-105">
          Noch ein bisschen mehr Ich... (IAQ)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-hover bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Heart className="text-pink-400 mr-3 animate-pulse" size={28} />
              <h3 className="text-2xl font-bold">Was ich sonst noch gerne mache?</h3>
            </div>
            <p className="text-lg text-white/90">
              Ich bin gerne kreativ, ob stricken, basteln oder wie man hier sieht Webseiten gestalten.
            </p>
          </div>
          
          <div className="card-hover bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Music className="text-orange-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Wo man mich antrifft?</h3>
            </div>
            <p className="text-lg text-white/90">
              Auf vielen Mittelaltermärkten zu coolem Mittelalter Rock.
            </p>
          </div>
          
          <div className="card-hover bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center mb-4">
              <MapPin className="text-cyan-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Wo ich gerne urlaube?</h3>
            </div>
            <p className="text-lg text-white/90">
              Im wunderschönen Dänemark, dessen tolles unbeständiges Wetter mich immer wieder fasziniert.
            </p>
          </div>
          
          <div className="card-hover bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center mb-4">
              <User className="text-violet-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Wer ich bin?</h3>
            </div>
            <p className="text-lg text-white/90">
              Sophie und von Charakter Lebensenthusiastin.
            </p>
          </div>
          
          <div className="card-hover bg-white/5 backdrop-blur-sm rounded-xl p-8 md:col-span-2">
            <div className="flex items-center mb-4">
              <Quote className="text-amber-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Mein Motto?</h3>
            </div>
            <p className="text-lg text-white/90">
              "Mut ist nur der Vorbote von Heldenmut" (zitiert nach James Lake Jr. von Trolljäger).
            </p>
          </div>
        </div>
      </div>
    </section> // Schließender section-Tag
  ); // Schließende Klammer des return-Statements
};

export default FAQSection;
