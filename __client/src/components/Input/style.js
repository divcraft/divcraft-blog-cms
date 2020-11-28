import styled from 'styled-components';

export const LoginInput = styled.input`
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.dark};
  padding: 0 20px;
  margin-bottom: 10px;
  :last-child() {
    margin-bottom: 0;
  }
`;
