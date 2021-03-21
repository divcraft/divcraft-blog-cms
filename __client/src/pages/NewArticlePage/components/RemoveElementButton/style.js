import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  padding: 0;
  display: block;
  background: none;
  border: none;
  color: ${({ theme: { colors } }) => colors.red.regular};
  font-size: 20px;
  cursor: pointer;
  ${({ pattern }) =>
    pattern === 'section' &&
    css`
      border-radius: 50%;
      transition: 0.4s;
      border: solid 1px white;
      width: 25px;
      height: 25px;
    `}
  ${({ pattern }) =>
    pattern === 'item' &&
    css`
      top: 2px;
      width: 30px;
      height: 12px;
      opacity: 0.7;
    `}
  ${({ pattern }) =>
    pattern === 'listItem' &&
    css`
      position: absolute;
      top: 5px;
      left: -35px;
      width: 15px;
      height: 15px;
      opacity: 0.7;
    `}
  &:hover {
    ${({ pattern }) =>
      pattern === 'section' &&
      css`
        border: solid 1px ${({ theme: { colors } }) => colors.red.regular};
      `}
    ${({ pattern }) =>
      pattern === 'item' ||
      (pattern === 'listItem' &&
        css`
          opacity: 1;
        `)}
  }
  &::before {
    content: '+';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
