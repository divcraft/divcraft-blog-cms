import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px 30px;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.regular};
  border-radius: 20px;
  margin: 20px auto;
`;

export const SectionTitle = styled.h2`
  border-bottom: solid 2px ${({ theme: { colors } }) => colors.gray.light};
  margin: 0 auto 20px;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
`;
