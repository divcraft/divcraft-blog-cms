import styled from 'styled-components';

export const SectionTitle = styled.h2`
  border-bottom: solid 2px ${({ theme: { colors } }) => colors.gray.light};
  margin: 0 auto 20px;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
`;
