import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'utils/Api';

import { CastContainer, CastItem, CastList, CastName } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState({});

  useEffect(() => {
    fetchCastById(movieId).then(setCasts);
  }, [movieId]);

  return (
    <CastContainer>
      <CastList>
        {casts.cast?.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt="Img name"
              width="160"
            />
            <CastName>{name}</CastName>
            <p>{`Character: ${character}`}</p>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
