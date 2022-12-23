import styled from 'styled-components';

const ReviewsContainer = styled.div`
  padding: ${p => p.theme.space[3]}px;
`;

const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${p => p.theme.space[4]}px;
`;

const ReviewsItem = styled.li`
  padding-bottom: ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.normal} rgba(0, 0, 0, 0.2);
`;

const ReviewsAuthor = styled.h3`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export { ReviewsContainer, ReviewsList, ReviewsItem, ReviewsAuthor };
