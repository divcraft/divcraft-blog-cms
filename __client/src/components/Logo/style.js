import styled, { css } from 'styled-components';

export const Img = styled.img`
  display: block;
  margin: auto;
  ${({ pattern }) =>
    pattern === 'colored' &&
    css`
      width: 100%;
    `}
  ${({ pattern }) =>
    pattern === 'white' &&
    css`
      width: 130px;
    `}
`;
