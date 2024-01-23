import React, { useState } from "react";

const CreateAccountForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setmail] = useState("");

  const handleCreateAccount = async () => {
    if (!username || !password || !mail) {
      console.error("Tous les champs sont obligatoires");
      return;
    }

    try {
      const response = await fetch("http://localhost:3050/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, mail }),
      });
      const userDatas = await response.json();
      console.log("user retourné", userDatas);
      if (response.ok) {
        setUsername(userDatas.username);
        setPassword("");
        setmail("");
        localStorage.setItem("username", userDatas, username); // stocker le username en localStorage et le token JWT (quand il sera dispo ;p)
        console.log("Compte créé avec succès");
      } else {
        console.error("Erreur lors de la création du compte");
      }
    } catch (error) {
      console.error("Erreur lors de la création du compte", error);
    }
  };

  return (
    <div className="card flex min-h-screen items-center justify-center bg-gray-200">
      <div className="card-body max-h-[500px] w-96 bg-zinc-800 rounded-xl">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">
          Créer un compte
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pseudo</span>
          </label>
          <input
            type="text"
            placeholder="Pseudo"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <input
            type="password"
            placeholder="Mot de passe"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleCreateAccount}>
            Créer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
