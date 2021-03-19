import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 50%;
  background: none;
  color: ${({ theme: { colors } }) => colors.red.regular};
  font-size: 20px;
  ${({ pattern }) =>
    pattern === 'section' &&
    css`
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
      border: none;
      width: 20px;
      height: 20px;
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
        transform: scale(1.3);
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
