import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import { fetchMovieByQuery } from 'utils/Api';

import { Box } from 'components/Box';

import MovieForm from 'components/MovieForm/MovieForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const location = useLocation();
  const [queryNames, setQueryName] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) return;

    fetchMovieByQuery(query)
      .then(r => setQueryName(r.results))
      .catch(error => console.log(error.message));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <Box p={4}>
      <MovieForm onSubmit={handleSubmit} />
      <MovieList queryNames={queryNames} location={location} />
    </Box>
  );
};

export default Movies;
