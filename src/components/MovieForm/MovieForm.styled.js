import styled from 'styled-components';

const Input = styled.input`
  width: 256px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: 4px;
  outline: none;
  border: 2px solid rgba(33, 33, 33, 0.2);

  &:focus {
    border-color: ${p => p.theme.colors.accent};
  }
`;

const Button = styled.button`
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export { Input, Button };
