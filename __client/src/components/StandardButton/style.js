import styled, { css } from 'styled-components';

export const StandardButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  display: block;
  color: white;
  border: solid 1px ${({ theme: { colors } }) => colors.blue.regular};
  width: 120px;
  flex-shrink: 0;
  height: 30px;
  &:hover {
    box-shadow: 0px 0px 0px 1px
      ${({ theme: { colors } }) => colors.blue.regular};
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
