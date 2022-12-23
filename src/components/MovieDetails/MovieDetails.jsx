import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import Additional from 'components/Additional/Additional';
import Loader from 'components/Loader/Loader';

import { fetchMovieById } from 'utils/Api';

import {
  Container,
  GoBackLink,
  InfoOfMovie,
  Title,
  TitleOverview,
  TitleGenres,
  ListGenres,
  Score,
} from './MovieDetails.styled';
import { Box } from 'components/Box';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [detailsOfMovie, setDetailsOfMovie] = useState({});
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(movieId).then(setDetailsOfMovie);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
  } = detailsOfMovie;

  return (
    <Box p={2}>
      <GoBackLink to={backLinkHref}>
        <HiArrowSmLeft />
        Go back
      </GoBackLink>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="original_title"
        />
        <InfoOfMovie>
          <Title>{`${original_title} (${
            release_date && release_date.slice(0, 4)
          })`}</Title>
          <Score>{`User Score: ${Math.round(vote_average * 10)}%`}</Score>
          <TitleOverview>Overview</TitleOverview>
          <p>{overview}</p>
          <TitleGenres>Genres</TitleGenres>
          <ListGenres>
            {/* {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)} */}
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ListGenres>
        </InfoOfMovie>
      </Container>
      <Additional backLinkHref={backLinkHref} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
