require("dotenv").config();
const sequelize = require("./app/sequelize-client");
const express = require("express");
const router = require("./app/router");
const app = express();
const bodyparser = require("body-parser");

sequelize
  .sync()
  .then(() => {
    console.log("Connexion à la base de données établie");
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données:", error);
  });
// serve up production assets
const cors = require("cors"); // Importez le module CORS
// Configurer les options CORS
const corsOptions = {
  origin: "http://localhost:3000", // Remplacez par l'URL de votre frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
// Activer CORS pour toutes les routes
app.use(cors(corsOptions)); // serve up production assets
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 5000;
console.log(`Serveur démarré sur http://localhost:${PORT}`);
app.listen(PORT);
