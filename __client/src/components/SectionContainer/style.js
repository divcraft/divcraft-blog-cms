import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  padding: 20px 30px;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.regular};
  border-radius: 20px;
  margin: 20px auto;
  ${({ pattern }) =>
    pattern === 'articleEditor' &&
    css`
      & > div:last-child {
        transition: 0.3s;
        opacity: 0.4;
      }
      & > div:first-child > div {
        transition: 0.3s;
        opacity: 0;
      }
      &:hover > div:last-child,
      &:hover > div:first-child > div {
        opacity: 1;
      }
    `}
`;
