import React from 'react';

const UserStatus = ({ username, onLogout }) => {
  const handleLogout = () => {
    // Supprimez le token JWT du localStorage pour déconnecter l'utilisateur
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    // Appelez la fonction de rappel onLogout pour mettre à jour l'état de l'application
    onLogout();

    // Ajoutez un console.log pour vérifier si la déconnexion est exécutée
    console.log('Déconnexion effectuée');
  };

  return (
    <div className="flex items-center">
      <span>Bonjour, {username}!</span>
      <button className="btn btn-neutral ml-2" onClick={handleLogout}>
        Déconnexion
      </button>
    </div>
  );
};

export default UserStatus;
