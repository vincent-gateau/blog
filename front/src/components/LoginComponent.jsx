import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Envoie la requête POST au serveur pour la connexion
      const response = await fetch('http://localhost:3050/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Récupère les données de réponse
        const data = await response.json();

        // Réinitialise les champs de formulaire
        setUsername('');
        setPassword('');

        

        // Stocke le token JWT et le nom d'utilisateur en local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        // Affiche les données renvoyées par le serveur en cas de succès
        console.log('Données renvoyées par le serveur après connexion réussie :', data);

        // Redirige l'utilisateur vers la page "articles"
        navigate('/articles');
  
      } else {
        // Gère les erreurs de connexion
        console.error('Erreur lors de la connexion');
      }
    } catch (error) {
      // Gère les erreurs inattendues
      console.error('Erreur lors de la connexion', error);
    }
  };

  return (
    <div className="card w-full max-w-md bg-base-100">
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleLogin}>
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

