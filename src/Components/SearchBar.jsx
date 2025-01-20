import React, { useState } from 'react';
import { searchMovies } from '../utils/api';

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (query) {
      const result = await searchMovies(query);
      setMovies(result);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border-2 border-gray-300 rounded-md w-full dark:bg-gray-800 dark:text-white"
        placeholder="Search movies..."
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md mt-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
