import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <div
      className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <div className="flex justify-between mt-2">
        <button onClick={handleFavoriteClick} className="text-yellow-400 hover:text-yellow-500">
          Add to Favorites
        </button>
        <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 hover:text-blue-600">
          Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
