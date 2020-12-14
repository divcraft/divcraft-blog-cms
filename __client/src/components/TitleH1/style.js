import styled from 'styled-components';

export const MainH1 = styled.h1``;
export const LoginH1 = styled.h1`
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  letter-spacing: 10.5px;
  text-align: center;
  transform: translateX(6px);
  margin-top: 5px;
  width: auto;
`;
