import {
  StyledLink,
  Item,
  List,
  Wrapper,
  Img,
} from 'components/MovieList/MovieList.styled';
import { GiFilmStrip } from 'react-icons/gi';

const MovieList = ({ queryNames, location }) => {
  return (
    <div>
      <List>
        {queryNames?.map(({ id, original_title, poster_path }) => (
          <Item key={id}>
            <StyledLink to={`${id}`} state={{ from: location }}>
              <Img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
              />
              <Wrapper>
                <GiFilmStrip />
                <p>{original_title}</p>
              </Wrapper>
            </StyledLink>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default MovieList;
