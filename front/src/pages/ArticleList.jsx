import React from 'react';
import Article from '../components/Articles';
import PostArticle from '../components/PostArticle';

const ArticleList = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="container mx-auto">
        <PostArticle />
        <div className="grid gap-8 lg:grid-cols-1">
          <Article />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
