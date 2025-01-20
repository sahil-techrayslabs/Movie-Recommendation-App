// import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = 'c6e93bc7';

// export const searchMovies = async (searchTerm) => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: { s: searchTerm, apiKey: API_KEY },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     throw error;
//   }
// };

// export const getMovieDetails = async (movieId) => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: { i: movieId, apiKey: API_KEY },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movie details:', error);
//     throw error;
//   }
// };

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data.Response === 'True' ? data.Search : [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const searchMoviesByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${category}`);
    const data = await response.json();
    return data.Response === 'True' ? data.Search : [];
  } catch (error) {
    console.error(`Error fetching category "${category}" movies:`, error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data.Response === 'True' ? data : null;
  } catch (error) {
    console.error(`Error fetching movie ID "${id}":`, error);
    return null;
  }
};

export const fetchActorMovies = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${name}`);
    const data = await response.json();
    return data.Response === 'True' ? data.Search : [];
  } catch (error) {
    console.error(`Error fetching movies for actor "${name}":`, error);
    return [];
  }
};
export const fetchMoviesByActor = async (actorName) => {
  const API_KEY = 'c6e93bc7'; // Replace with your OMDB API key
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${actorName}&type=movie`);
  const data = await response.json();

  if (data.Response === 'True') {
    return data.Search;
  } else {
    return [];
  }
};
export const fetchActorMoviesByName = async (actorName) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${actorName}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search; // Returns all movies for the actor found
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error('Error fetching actor movies:', error);
    return [];
  }
};
