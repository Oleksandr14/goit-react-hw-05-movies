import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 356px;
  padding: ${p => p.theme.space[3]}px;

  border-bottom: ${p => p.theme.borders.normal} rgba(0, 0, 0, 0.2);
`;

const GoBackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.textSecond};
  text-decoration: none;

  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

const InfoOfMovie = styled.div`
  padding: ${p => p.theme.space[4]}px;
`;

const Title = styled.h2`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

const Score = styled.p`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

const TitleOverview = styled.h3`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

const TitleGenres = styled.h4`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

const ListGenres = styled.ul`
  display: flex;
  column-gap: ${p => p.theme.space[3]}px;
`;

export {
  Container,
  InfoOfMovie,
  Title,
  TitleOverview,
  TitleGenres,
  ListGenres,
  Score,
  GoBackLink,
};
