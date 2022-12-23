import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const СontainerAdditional = styled.div`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.normal} rgba(0, 0, 0, 0.2);
`;

const TitleAdditional = styled.h4`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

const ListAdditional = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${p => p.theme.space[3]}px;
`;

const Item = styled(NavLink)`
  color: ${p => p.theme.colors.textSecond};

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export { СontainerAdditional, TitleAdditional, ListAdditional, Item };
