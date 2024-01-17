import React, { useState, useEffect } from 'react';

const PostArticle = () => {
  const [article_name, setArticleName] = useState('');
  const [content, setContent] = useState('');
  const [article_image, setArticleImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    // Récupérez la liste des catégories depuis le serveur
    fetch('http://localhost:3050/category')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem('token')) {
      window.alert('Veuillez vous connecter ou devenir membre pour poster un article.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('article_name', article_name);
      formData.append('content', content);
      formData.append('article_image', article_image);
      formData.append('category', selectedCategory); // Utilisez 'category' ici

      console.log("Données envoyées au serveur :", formData);

      const response = await fetch('http://localhost:3050/article/create', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData = await response.json();

      console.log("Réponse du serveur :", responseData);

      setArticleName('');
      setContent('');
      setArticleImage(null);

      // Ajoutez ici le code pour rafraîchir la liste des articles si nécessaire
    } catch (error) {
      console.error("Erreur lors de la soumission de l'article :", error);
    }
  };

  return (
    <div className="mb-8">
      <button onClick={() => setShowForm(!showForm)} className="btn btn-primary mb-4">Poster un Article</button>
      {showForm && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Ecris ton Post</h3>
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
            <label htmlFor="article_name" className="block font-medium mb-1">Title</label>
            <input
              type="text"
              id="article_name"
              name="article_name"
              value={article_name}
              onChange={(e) => setArticleName(e.target.value)}
              className="w-full p-2 border rounded-lg mb-2"
              required
            />
            <label htmlFor="content" className="block font-medium mb-1">Content</label>
            <textarea
              type="text"
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-lg mb-2"
              required
            />
            <label htmlFor="article_image" className="block font-medium mb-1">Photo</label>
            <input
              type="file"
              id="article_image"
              name="article_image"
              onChange={(e) => setArticleImage(e.target.files[0])}
              accept="image/*"
              className="mb-2"
              required
            />
            {/* Sélectionnez une catégorie */}
            <label htmlFor="category" className="block font-medium mb-1">Catégorie</label>
            <select
              id="category"
              name="category"
              onChange={(e) => setSelectedCategory(e.target.value)}
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
            <button type="submit" className="btn btn-primary">Post</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostArticle;
