const { Article, Category, Commentaires, User } = require("../model");
const jwt = require("jsonwebtoken");

const commentairesController = {
  async createComments(req, res) {
    try {
      const { content, article_id } = req.body;
      const token = req.headers.authorization
      const userIdFromToken = jwt.decode(token).userId

      if (!content) {
        return res.status(400).json('content field cannot be empty')
      }

      const newCommentaires = Commentaires.build({ article_id, user_id: userIdFromToken, content });

      const createdComment = await newCommentaires.save();
      return res.json(createdComment)
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};
module.exports = commentairesController;
