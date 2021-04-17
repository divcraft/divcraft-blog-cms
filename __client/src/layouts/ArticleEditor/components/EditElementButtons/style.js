import styled, { css } from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  ${({ pattern }) =>
    pattern === 'section' &&
    css`
      top: 0;
      right: 0;
      flex-direction: row-reverse;
    `}
  ${({ pattern }) =>
    pattern === 'item' &&
    css`
      top: -2px;
      left: -30px;
      width: 30px;
      flex-direction: column;
    `}
`;
