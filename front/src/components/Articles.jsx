import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="flex-row lg:flex-row  p-1 rounded-lg shadow-md">
      <div className="w-60">
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
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-evenly py-2.5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="lg:flex items-center gap-8 bg-white w-1/4 border-solid border-2 rounded-3xl border-slate-400  shadow-lg shadow-black"
          >
            <div className="flex flex-col">
              <div className="">
                <img
                  src={`https://picsum.photos/600/300?image=${article.id}`}
                  alt="Article"
                  className="w-full h-auto object-cover rounded-t-3xl shadow-2xl"
                />
              </div>
              <div className="p-1.5">
                <h1 className="text-2xl font-bold mb-2">
                  {article.article_name}
                </h1>{" "}
                {/* Utilisez article_name */}
                <p className="text-base mb-4">{article.content}</p>
                <Comment comments={article.comments} articleId={article.id} />
                <div className="flex justify-end">
                  <LikeButton />
                </div>
                <Link to="/Article" className="btn btn-primary">
                  voir l'article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
