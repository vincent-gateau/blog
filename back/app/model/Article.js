const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");
const Category = require('./Category')
const User = require('./User')

class Article extends Model {}

Article.init(
  {
    article_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    article_image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: "Article",
  }
);

module.exports = Article;
