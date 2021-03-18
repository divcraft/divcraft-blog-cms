import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 20px 0;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  width: 165px;
  height: 40px;
  line-height: 40px;
  border-radius: 16px;
  border: solid 1px;
  &::before {
    content: '+';
    position: absolute;
    left: 15px;
    font-size: 24px;
  }
  ${({ pattern }) =>
    pattern === 'blue' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.blue.regular};
      border-color: ${({ theme: { colors } }) => colors.blue.regular};
      color: white;
    `}
  ${({ pattern }) =>
    pattern === 'gray' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.gray.light};
      border-color: ${({ theme: { colors } }) => colors.gray.dark};
      color: ${({ theme: { colors } }) => colors.gray.darker};
      &:hover {
        background-color: ${({ theme: { colors } }) => colors.blue.regular};
        border-color: ${({ theme: { colors } }) => colors.blue.regular};
        color: white;
      }
    `}
`;
