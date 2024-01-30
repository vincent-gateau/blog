import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import LikeButton from "./LikeButton";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  // const [filteredArticles, setFilteredArticles] = useState([])

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3050/article", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data);
        // setFilteredArticles(data)
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    // Récupérez la liste des catégories depuis le serveur
    const fetchCategories = async () =>
      fetch("http://localhost:3050/category")
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error(error));

    fetchCategories();
    fetchArticles();
  }, []);

  return (
    <div className="flex-row lg:flex-row bg-red-200 p-8 rounded-lg shadow-md">
      <label htmlFor="category" className="block font-medium mb-1">
        Catégorie
      </label>
      <select
        id="category"
        name="category"
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          const filteredArticles = articles.filter((article) => {
            // TODO: debugguer valeur selectedCategory instable
            // console.log({ selectedCategory, toto: article.category_id })
            return article.category_id == +selectedCategory;
          });
          // setFilteredArticles(filteredArticles)
        }}
        value={selectedCategory}
        className="w-full p-2 border rounded-lg mb-2"
        required
      >
        <option value="" disabled>
          Sélectionnez une catégorie
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      {articles.map((article) => (
        <div
          key={article.id}
          className="lg:flex items-center gap-8 mb-8 border-b pb-8"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-2">
                {article.article_name}
              </h1>{" "}
              {/* Utilisez article_name */}
            </div>
            <div className="flex items-center justify-center mb-4">
              <img
                src={`https://picsum.photos/600/300?image=${article.id}`}
                alt="Article"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
            <p className="text-base mb-4">{article.content}</p>

            <Comment comments={article.comments} articleId={article.id} />
            <div className="flex justify-end">
              <LikeButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
