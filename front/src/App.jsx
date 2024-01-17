import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-modal'; 
import Home from './pages/Home';
import Login from './pages/Login';
import ArticleList from './pages/ArticleList';
import Admin from './pages/Admin'
import Header from './components/Header';
import Footer from './components/Footer';
import FoundersSection from './components/FoundersSection';

Modal.setAppElement('#root');

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ajoutez ici des actions à effectuer lors de la déconnexion, si nécessaire.
    // Par exemple, rediriger l'utilisateur vers la page de connexion.
  };

  return (
    <div>
      <Header onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login onLogin={() => navigate('/articles')} />} />
        <Route path="articles" element={<ArticleList />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
      <FoundersSection />
      <Footer />
    </div>
  );
}

export default App;
