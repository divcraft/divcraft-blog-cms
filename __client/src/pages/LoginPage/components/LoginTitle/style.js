import styled from 'styled-components';

export const LoginTitle = styled.h1`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  letter-spacing: 10.5px;
  text-align: center;
  transform: translateX(6px);
  margin-top: 5px;
  width: auto;
`;
