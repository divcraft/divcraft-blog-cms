import styled from 'styled-components';

export const SectionTitle = styled.h2`
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.gray.regular};
  margin: 0 auto 20px;
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 24px;
`;
