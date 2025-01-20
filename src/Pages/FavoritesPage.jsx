import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const handleRemoveFromFavorites = (imdbID) => {
    const updatedFavorites = favorites.filter((fav) => fav.imdbID !== imdbID);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {favorites.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
              <p>{movie.Year}</p>
              <div className="flex justify-between mt-2">
                <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 hover:text-blue-600">
                  Details
                </Link>
                <button
                  onClick={() => handleRemoveFromFavorites(movie.imdbID)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
