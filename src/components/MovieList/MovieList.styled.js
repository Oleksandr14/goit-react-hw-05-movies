import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: ${p => p.theme.space[2]}px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.textSecond};
  text-decoration: ${p => p.theme.borders.none};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export { StyledLink, Item };
