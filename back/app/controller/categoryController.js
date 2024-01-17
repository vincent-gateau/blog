const { Article, Category, Commentaires, User } = require("../model");
const categoryController = {
  async getAllcategory(req, res) {
    let allcategory = [];
    let code = 200;

    try {
      allcategory = await Category.findAll({
        include: [
          {
            model: Article,
            as: "articleCategory",
          },
        ],
      });
    } catch (err) {
      console.error(err);
      code = 500;
    }

    // on ne retourne que du json

    res.status(code).json(allcategory);
  },
};
module.exports = categoryController;
