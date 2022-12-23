import { HeaderNav, StyledLink, List } from './Header.styled';

const Header = () => {
  return (
    <HeaderNav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </List>
    </HeaderNav>
  );
};

export default Header;
