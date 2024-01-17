import React from 'react';

const NavBar = ({ categories, onSelectCategory }) => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Catégories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              className="px-2 py-1 rounded-md bg-blue-500 text-white"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
