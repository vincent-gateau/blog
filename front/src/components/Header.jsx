import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Importez useHistory
import UserStatus from "./UserStatus";
import logoo from "../logoo.jpg";

const Header = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    <header>
      <div className="navbar bg-zinc-800 text-white  border-b border-gray-300 grid grid-cols-3">
        <div className="flex-1 text-left pl-5">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logoo} className="w-12" />
          </Link>
        </div>

        <div className="flex-1 text-right pr-5">
          <Link
            to="/articles"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            All Post
          </Link>
        </div>
        <div className="flex-1 text-center">
          {username ? (
            <UserStatus username={username} onLogout={handleLogout} />
          ) : (
            <Link to="/login" className="btn btn-neutral">
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
