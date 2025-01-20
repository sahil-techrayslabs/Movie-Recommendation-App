import React, { useState, useEffect } from 'react';
import { fetchMoviesByActor, fetchActorMoviesByName } from '../Utils/api'; // Assuming these functions exist

const ActorPage = () => {
  const [actorMovies, setActorMovies] = useState([]);
  const [actorSearchQuery, setActorSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleActorSearchChange = (event) => {
    setActorSearchQuery(event.target.value);
  };

  const handleActorSearchSubmit = () => {
    if (actorSearchQuery.trim()) {
      setLoading(true);
      fetchActorMoviesByName(actorSearchQuery)
        .then((movies) => {
          setActorMovies(movies);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Search Actor Movies</h1>
      
      {/* Actor search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for an actor"
          value={actorSearchQuery}
          onChange={handleActorSearchChange}
          className="border p-2 rounded-md dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleActorSearchSubmit}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>

      {/* Actor Movies list */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {actorMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {actorMovies.map((movie) => (
                <div key={movie.imdbID} className="card shadow-md p-4 rounded-md">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-60 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold">{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies found for this actor.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ActorPage;
