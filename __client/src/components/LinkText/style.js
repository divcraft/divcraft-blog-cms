import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkText = styled(Link)`
  display: inline;
  color: black;
  ${(props) =>
    props.pattern === `underline` &&
    css`
      text-decoration: underline;
    `}
  ${(props) =>
    props.pattern === `noUnderline` &&
    css`
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `}
`;
