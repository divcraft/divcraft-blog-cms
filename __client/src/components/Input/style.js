import styled from 'styled-components';

export const LoginInput = styled.input`
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.dark};
  padding: 0 20px;
  :nth-child(2) {
    margin: 10px 0;
  }
`;
