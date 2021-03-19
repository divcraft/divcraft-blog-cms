import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 0;
  display: block;
  background: none;
  color: ${({ theme: { colors } }) => colors.red.regular};
  font-size: 20px;
  ${({ pattern }) =>
    pattern === 'section' &&
    css`
      border-radius: 50%;
      transition: 0.4s;
      position: absolute;
      top: 0;
      right: 0;
      border: solid 1px white;
      width: 25px;
      height: 25px;
    `}
  ${({ pattern }) =>
    pattern === 'item' &&
    css`
      position: relative;
      top: 2px;
      border: none;
      width: 30px;
      height: 12px;
      overflow: hidden;
      opacity: 0.7;
    `}
  &:hover {
    ${({ pattern }) =>
      pattern === 'section' &&
      css`
        border: solid 1px ${({ theme: { colors } }) => colors.red.regular};
      `}
    ${({ pattern }) =>
      pattern === 'item' &&
      css`
        opacity: 1;
      `}
  }
  &::before {
    content: '+';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
