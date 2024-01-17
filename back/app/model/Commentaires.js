const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");

class Commentaires extends Model {}

Commentaires.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Commentaires",
  }
);

module.exports = Commentaires;
