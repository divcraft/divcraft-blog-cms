import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.regular};
  border-radius: 20px;
  margin: 20px auto;
`;
