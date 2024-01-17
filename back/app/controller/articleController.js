const { Article, Commentaires, User } = require("../model");
const jwt = require("jsonwebtoken");

const articleController = {
  async getAllarticle(req, res) {
    try {
      const allarticles = await Article.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: { exclude: ["password"] },
          },
          {
            model: Commentaires,
            as: "comments",
            include: [
              {
                model: User,
                as: "user",
                attributes: ['username']
              },
            ],
          },
        ],
      });

      res.status(200).json(allarticles);
    } catch (err) {
      console.error(err);
      res.status(500).json(allarticles);
    }    
  },

  async getArticle(req, res) {
    let article;

    try {
      article = await Article.findByPk(parseInt(req.params.id), {
        include: [
          {
            model: User,
            as: "user",
          },
          {
            model: Commentaires,
            as: "comments",
            include: [
              {
                model: User,
                as: "user",
                attributes: ['username']
              },
            ],
          },
          // {
          // model: Category,
          // as: "category",
          //},
        ],
      });
      if (!article) {
        // Handle the case where the article is not found
        return res.status(404).json({ error: "Article not found" });
      }
    } catch (err) {
      console.error(err);
    }

    res.json(article);
  },
  async createArticle(req, res) {
    try {
      const { content, article_name, category } = req.uploadedFields;
      const token = req.headers.authorization
      const userIdFromToken = jwt.decode(token).userId


      if (!content || !article_name) {
        // Si le contenu ou le nom de l'article est manquant, générer une erreur
        const errorMessage =
          "Le contenu et le nom de l'article sont obligatoires";
        console.error("Erreurs dans le corps de la requête :", errorMessage);

        // Répondre au client avec un code d'erreur 400 (Bad Request) et un message d'erreur
        return res.status(400).json({ error: errorMessage });
      }
      
      const newArticle = Article.build({ content: content[0], article_name: article_name[0], category_id: category, user_id: userIdFromToken });

      // Log pour afficher le nouvel article créé
      console.log("Nouvel article créé :", newArticle);

      // Enregistrez l'article en base de données
      const createdArticle = await newArticle.save();

      // Log pour indiquer que l'article a été enregistré en base de données
      console.log("Article enregistré en base de données");

      // Répondez au client avec l'article créé
      return res.json(createdArticle);
    } catch (error) {
      // En cas d'erreur, loggez l'erreur pour le débogage
      console.error("Erreur lors de la création de l'article :", error);

      // Répondez au client avec un code d'erreur 500 (Internal Server Error)
      // et renvoyez l'erreur pour un débogage ultérieur si nécessaire
      return res
        .status(500)
        .json({ error: "Erreur lors de la création de l'article." });
    }
  },
};

module.exports = articleController;
