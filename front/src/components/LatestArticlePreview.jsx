import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestArticlePreview = () => {
  const [latestArticle, setLatestArticle] = useState(null);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        // Remplacez 'URL_DE_VOTRE_API' par l'URL de votre API
        const response = await axios.get('URL_DE_VOTRE_API');
        setLatestArticle(response.data);
      } catch (error) {
        console.error('Error fetching latest article:', error);
      }
    };

    fetchLatestArticle();
  }, []);

  if (!latestArticle) {
    return null; // Peut afficher un indicateur de chargement ici
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={latestArticle.image} // Remplacez par la propriété de l'image de l'article
          alt="Latest Article"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{latestArticle.title}</h1>
          <Link to="/articles" className="btn btn-primary">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestArticlePreview;
