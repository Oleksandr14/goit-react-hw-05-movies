import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const HeaderNav = styled.div`
  padding: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal} rgba(0, 0, 0, 0.2);
`;

const List = styled.ul`
  display: flex;
  column-gap: ${p => p.theme.space[3]}px;
`;

const StyledLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.text};
  text-decoration: ${p => p.theme.radii.none};

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export { HeaderNav, StyledLink, List };
