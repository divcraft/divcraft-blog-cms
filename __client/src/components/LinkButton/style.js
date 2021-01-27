import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  text-decoration: none;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  display: block;
  color: white;
  border: solid 1px ${({ theme: { colors } }) => colors.blue.regular};
  width: 120px;
  height: 30px;
  &:nth-child(2) {
    margin-left: 10px;
  }
  ${(props) =>
    props.pattern === `blue` &&
    css`
      background-color: ${({ theme: { colors } }) => colors.blue.regular};
    `}
  ${(props) =>
    props.pattern === `blueWide` &&
    css`
      background-color: ${({ theme: { colors } }) => colors.blue.regular};
      width: 250px;
    `}
  ${(props) =>
    props.pattern === `white` &&
    css`
      background-color: white;
      color: black;
    `}
`;
