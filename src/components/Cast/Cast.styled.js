import styled from 'styled-components';

const CastContainer = styled.div`
  padding: ${p => p.theme.space[2]}px;
`;

const CastList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${p => p.theme.space[4]}px;
`;

const CastItem = styled.li`
  padding-bottom: ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.normal} rgba(0, 0, 0, 0.2);
`;

const CastName = styled.p`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export { CastContainer, CastItem, CastList, CastName };
