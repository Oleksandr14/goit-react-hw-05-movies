import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const Item = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  display: flex;
  flex-direction: column;
  column-gap: ${p => p.theme.space[2]}px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  transition: scale 200ms ease-in;

  &:hover {
    scale: 1.1;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.textSecond};
  text-decoration: ${p => p.theme.borders.none};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  min-width: 100%;
  background-color: white;
`;

export { StyledLink, Item, List, Wrapper, Img };
