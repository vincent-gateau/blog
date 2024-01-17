import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Importez useHistory
import UserStatus from './UserStatus';

const Header = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    navigate('/');
  };

  return (
    <header>
      <div className="navbar bg-base-100 border-b border-gray-300 grid grid-cols-3">
        <div className="flex-1 text-left pl-5">
          <Link to="/" className="btn btn-ghost normal-case text-xl">The Blog</Link>
        </div>
        <div className="flex-1 text-center">
          {username ? (
            <UserStatus username={username} onLogout={handleLogout} />
          ) : (
            <Link to="/login" className="btn btn-neutral">Connexion</Link>
          )}
        </div>
        <div className="flex-1 text-right pr-5">
          <Link to="/articles" className="btn btn-ghost normal-case">All Post</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
