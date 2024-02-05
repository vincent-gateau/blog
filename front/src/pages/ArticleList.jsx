import React from "react";
import Article from "../components/Articles";
import PostArticle from "../components/PostArticle";

const ArticleList = () => {
  return (
    <div className="min-h-screen p-2 bg-gray-200">
      <PostArticle />

      <Article />
    </div>
  );
};

export default ArticleList;
