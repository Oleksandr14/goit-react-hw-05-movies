import { StyledLink, Item } from 'components/MovieList/MovieList.styled';
import { GiFilmStrip } from 'react-icons/gi';

const MovieList = ({ queryNames, location }) => {
  return (
    <div>
      <ul>
        {queryNames?.map(({ id, original_title }) => (
          <Item key={id}>
            <GiFilmStrip />
            <StyledLink to={`${id}`} state={{ from: location }}>
              {original_title}
            </StyledLink>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
