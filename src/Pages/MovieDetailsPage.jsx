import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../Utils/api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovieDetails(data);
    };
    getMovieDetails();
  }, [id]);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.imdbID === movieDetails.imdbID)) {
      favorites.push(movieDetails);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  const handleRemoveFromFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter((fav) => fav.imdbID !== movieDetails.imdbID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    navigate('/favorites'); // Redirect to Favorites page
  };

  if (!movieDetails) return <p>Loading...</p>;

  const isFavorite = JSON.parse(localStorage.getItem('favorites'))?.some(
    (fav) => fav.imdbID === movieDetails.imdbID
  );

  return (
    <div className="p-4">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
        <div className="flex gap-4">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="w-48 h-72 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold">{movieDetails.Title}</h2>
            <p className="text-lg text-gray-600">{movieDetails.Year}</p>
            <p className="my-2">{movieDetails.Plot}</p>
            <div className="flex gap-2">
              <p><strong>Genre:</strong> {movieDetails.Genre}</p>
              <p><strong>Director:</strong> {movieDetails.Director}</p>
              <p><strong>Actors:</strong> {movieDetails.Actors}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleAddToFavorites}
                className={`bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 ${isFavorite ? 'hidden' : ''}`}
              >
                Add to Favorites
              </button>
              {isFavorite && (
                <button
                  onClick={handleRemoveFromFavorites}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Remove from Favorites
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
