
import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { articleId } = useParams();

  // Ici, vous pouvez utiliser articleId pour récupérer les détails de l'article depuis votre API ou base de données
  // Puis, affichez les détails de l'article

  return (
    <div>
      {/* Affichage des détails de l'article */}
    </div>
  );
};

export default ArticleDetail;
