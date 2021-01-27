import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  flex-shrink: 0;
  text-decoration: none;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  display: block;
  color: white;
  border: solid 1px ${({ theme: { colors } }) => colors.blue.dark};
  width: 120px;
  height: 30px;
  &:last-child {
    margin-left: 10px;
    color: black;
    background-color: white;
  }
  ${(props) =>
    props.pattern === `blue` &&
    css`
      background-color: ${({ theme: { colors } }) => colors.blue.dark};
    `}
  ${(props) =>
    props.pattern === `blueWidth` &&
    css`
      background-color: ${({ theme: { colors } }) => colors.blue.dark};
      width: 250px;
    `}
  ${(props) =>
    props.pattern === `white` &&
    css`
      background-color: white;
      color: black;
    `}
`;
