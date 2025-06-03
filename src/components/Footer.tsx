
import React from 'react'; // React-Import nicht vergessen

const Footer = () => {
  return ( // Das JSX muss von einem return-Statement zurückgegeben werden
    <footer className="py-8 bg-black/40 text-center"> {/* Dies ist das EINZIGE Top-Level-Element */}
      <div className="container mx-auto px-6">
        <p className="text-white/70">
          © {new Date().getFullYear()} Sophie | Lebensenthusiastin & Webentwicklerin
        </p>
      </div>
    </footer>
  ); // Schließende Klammer des return-Statements
};

export default Footer; // E
