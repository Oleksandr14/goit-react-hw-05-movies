import styled from 'styled-components';
import { theme } from 'styles/theme';

const LoaderContainer = styled.div`
  font-size: 28px;
  text-align: center;
  color: ${p => theme.colors.accent};
`;

export { LoaderContainer };
