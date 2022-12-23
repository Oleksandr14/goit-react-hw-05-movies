import axios from 'axios';

const KEY = 'fc3059b93409f1f02abdc6e15de200bc';
const baseUrl = 'https://api.themoviedb.org/3/';
const popularFilmsOfDayUrl = 'trending/movie/day';

const fetchPopularFilms = async () => {
  const url = `${baseUrl}${popularFilmsOfDayUrl}?api_key=${KEY}`;

  //===============Use fetch=================================================
  //   return fetch(url)
  //     .then(resp => resp.json())
  //     .then(parsed => parsed.results);

  //=============Use axios===================================================
  //   const resp = await axios.get(url);
  //   const data = await resp.data;
  //   const results = data.results;
  //   return results;

  //=============Use axios with destructuring==================================================
  const { data } = await axios.get(url);
  const { results } = await data;
  return results;
};

const fetchMovieById = async movieId => {
  const url = `${baseUrl}movie/${movieId}?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(url);

  return data;
};

const fetchCastById = async movieId => {
  const url = `${baseUrl}movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return data;
};

const fetchReviews = async movieId => {
  const url = `${baseUrl}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const { data } = await axios.get(url);
  return data;
};

const fetchMovieByQuery = async query => {
  const url = `${baseUrl}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const { data } = await axios.get(url);
  return data;
};

export {
  fetchPopularFilms,
  fetchMovieById,
  fetchCastById,
  fetchReviews,
  fetchMovieByQuery,
};
