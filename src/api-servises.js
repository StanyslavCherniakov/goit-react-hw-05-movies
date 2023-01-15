import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchPopularMovies = async () => {
  return await axios.get('trending/all/day?api_key=8fd7ea3a669b814effbf3238ac2d6fc5');
};

export const fetchFilmsBySearch = async (filmName) => {
  return await axios.get(`search/movie?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&query=${filmName}&language=en-US&page=1&include_adult=false`);
};

export const fetchFilmById = async (filmId) => {
  return await axios.get(`movie/${filmId}?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US`);
};

export const fetchCastByFilm = async (movieId) => {
  return await axios.get(`movie/${movieId}/credits?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US`);
};

export const fetchReviewsByFilm = async (movieId) => {
  return await axios.get(`movie/${movieId}/reviews?api_key=8fd7ea3a669b814effbf3238ac2d6fc5&language=en-US&page=1`);
};
