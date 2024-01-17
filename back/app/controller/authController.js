const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../model");

const secretKey = "votre_clé_secrète"; // Remplacez par votre propre clé secrète

const authController = {
  async login(req, res) {
    console.log()
    const { username, password } = req.body;

    try {
      const user = await User.findOne({
        where: { username },
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
      }

      const passwordMatches = await bcrypt.compare(password, user.password);

      if (!passwordMatches) {
        return res
          .status(401)
          .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
      }

      // Génération du token JWT
      const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, {
        expiresIn: "1h",
      });

      // Retournez le token JWT et le nom d'utilisateur
      res.json({ token, username: user.username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur est survenue" });
    }
  },

  async register(req, res) {
    const { username, password, mail } = req.body;

    try {
      if (!username || !password || !mail) {
        return res
          .status(400)
          .json({ message: "Tous les champs sont obligatoires" });
      }

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Nom d'utilisateur déjà utilisé" });
      }

      // Hasher le mot de passe de l'utilisateur avant de le stocker
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        password: hashedPassword,
        mail, // Assurez-vous d'inclure la valeur "mail" lors de la création de l'utilisateur.
      });
      console.log(newUser.dataValues);
      res.status(201).json(newUser.dataValues);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur est survenue" });
    }
  },
};

module.exports = authController;
