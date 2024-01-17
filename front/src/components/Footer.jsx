import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-6 text-center border-t border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-700">© {new Date().getFullYear()} The Blog. Tous droits réservés.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
            Conditions d'utilisation
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
            Politique de confidentialité
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
            Mentions Légales
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
