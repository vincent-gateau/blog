const Article = require("./Article");
const User = require("./User");
const Category = require("./Category");
const Commentaires = require("./Commentaires");
const sequelize = require("../sequelize-client");

// Association entre User et Article
User.hasMany(Article, {
  foreignKey: "user_id",
  as: "Article", // alias pour l'association, pour faciliter les "include" dans les queries
});
Article.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Association entre User et Commentaires
User.hasMany(Commentaires, {
  foreignKey: "user_id",
  as: "commentaires",
});
Commentaires.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Association entre Article et Commentaires

Article.hasMany(Commentaires, {
  foreignKey: "article_id",
  as: "comments",
});
Commentaires.belongsTo(Article, {
  foreignKey: "article_id",
  as: "articleCommentaires",
});

// Association entre Article et Category
Article.belongsToMany(Category, {
  through: "Article_has_Category", // C'est le nom de la table de liaison entre les 2 tables
  as: "category",
  foreignKey: "category_id",
  timestamps: false, // Activer les timestamps (created_at et updated_at)
  createdAt: "created_at", // Nommez la colonne 'created_at' dans la table de liaison
});
Category.belongsToMany(Article, {
  through: "Article_has_Category",
  as: "articleCategory",
  foreignKey: "article_id",
  timestamps: false, // Activer les timestamps (created_at et updated_at)
  createdAt: "created_at", // Nommez la colonne 'created_at' dans la table de liaison
});

module.exports = {
  Commentaires,
  Category,
  Article,
  User,
};
