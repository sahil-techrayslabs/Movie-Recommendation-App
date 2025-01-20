// import React, { useState } from 'react';
// import { searchMovies } from '../Utils/api';
// import SearchBar from '../Components/SearchBar';
// import MovieList from '../Components/MovieList';
// import Loader from '../Components/Loader';

// const HomePage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const searchMoviesHandler = async () => {
//     if (!searchTerm.trim()) return;

//     setLoading(true);
//     try {
//       const data = await searchMovies(searchTerm);
//       setMovies(data.Search || []);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMoviesHandler} />
//       {loading ? <Loader /> : <MovieList movies={movies} />}
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import { searchMoviesByCategory } from '../utils/api';
import SearchBar from '../Components/SearchBar';
import MovieGrid from '../Components/MovieGrid';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [categories] = useState(['Action', 'Comedy', 'Drama', 'Horror']);

  useEffect(() => {
    const fetchMovies = async () => {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const movies = await searchMoviesByCategory(randomCategory);
      setMovies(movies);
    };
    fetchMovies();
  }, [categories]);

  return (
    <div className="p-4">
      <SearchBar setMovies={setMovies} />
      <h2 className="text-2xl font-bold my-4">Movies</h2>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default HomePage;
