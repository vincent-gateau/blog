const express = require("express");
const formidable = require("formidable");
const formidableMiddleware = require("./formidableMiddleware");
const {
  articleController,
  categoryController,
  userController,
  commentairesController,
} = require("./controller");
const authController = require("./controller/authController"); // Ajout de l'import

const router = express.Router();

// routes article
router.get("/article", articleController.getAllarticle);
router.get("/article/:id", articleController.getArticle);
router.post(
  "/article/create",
  formidableMiddleware,
  articleController.createArticle
);

// route connexion
router.post("/login", authController.login); // Ajout de la route de connexion
router.post("/register", authController.register); // Ajout de la route d'inscription

// route commentaires
router.post("/commentaires/create", commentairesController.createComments);

// route category
router.get("/category", categoryController.getAllcategory);

//route user

module.exports = router;
