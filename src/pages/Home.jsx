import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';
import { Box } from 'components/Box';
import { StyledLink, Title, Item } from './Home.styled';

import { fetchPopularFilms } from 'utils/Api';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularFilms()
      .then(setMovies)
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Box p={4}>
      <Title>Trending today</Title>
      <Box as={'ul'} display="flex" flexDirection="column" gridRowGap={2}>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <GiFilmStrip />
            <StyledLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
