import React, { useState, useEffect } from "react";
import Articles from "./Articles";
import Comment from "./Comment";
import LikeButton from "./LikeButton";

const Article = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("http://localhost:3050/article/:id", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
      fetchArticle();
    };
  }, []);

  if (!article) {
    return <div>Loading...</div>; // Or handle loading state differently
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{article.article_name}</h1>
      <div>//content</div>
    </div>
  );
};

export default Article;
