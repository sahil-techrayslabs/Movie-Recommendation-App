import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import FavoritesPage from './Pages/FavoritesPage';
import ActorPage from './Pages/ActorPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      setDarkMode(true);
    }
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-pink-600' : 'bg-white text-gray-900'}`}>
      <nav className="p-4 flex justify-between items-center border-b">
        <div className="flex gap-4">
          <NavLink
            to="/"
            className="font-semibold text-xl"
            end
            activeClassName="text-blue-500 underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="font-semibold text-xl"
            activeClassName="text-blue-500 underline"
          >
            Favorites
          </NavLink>
          <NavLink
            to="/actor"
            className="font-semibold text-xl"
            activeClassName="text-blue-500 underline"
          >
            Actors
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search Movies"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border p-2 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <label htmlFor="dark-mode-toggle" className="flex items-center cursor-pointer">
            <span className="mr-2">Dark Mode</span>
            <div className="relative">
              <input
                type="checkbox"
                id="dark-mode-toggle"
                className="sr-only"
                checked={darkMode}
                onChange={handleToggleDarkMode}
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center p-1">
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
                    darkMode ? 'transform translate-x-6' : ''
                  }`}
                />
              </div>
            </div>
          </label>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/actor" element={<ActorPage />} />
      </Routes>
    </div>
  );
};

export default App;
