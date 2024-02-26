import React from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ArticleDetail = () => {
  const { articleId } = useParams();

  // Ici, vous pouvez utiliser articleId pour récupérer les détails de l'article depuis votre API ou base de données
  // Puis, affichez les détails de l'article

  return (
    <div>
      <Article />
    </div>
  );
};

export default ArticleDetail;
