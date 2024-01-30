import React from "react";
import { Link } from "react-router-dom";
import background from "../background.png";

const Accueil = () => {
  return (
    <div className="hero min-h-[900px] bg-gray-200">
      <img src={background} className="w-full " />
      <div className="hero-content text-center">
        <div className="max-w-md mx-auto py-10">
          <h1 className="text-7xl font-bold mb-4">Bienvenue</h1>
          <p className="py-2 text-xl">
            Ici tu peux partager et consulter des Post. Exprimes-toi, partages
            tes idées et deviens membres de notre communauté.
          </p>
          <Link to="/login" className="btn btn-primary">
            connexion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
