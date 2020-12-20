import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 0px;
  cursor: pointer;
  ${(props) =>
    props.pattern === `box` &&
    css`
      color: white;
      margin: 0px;
      background-color: ${({ theme: { colors } }) => colors.blue.dark};
      & > div {
        position: relative;
        display: inline;
      }
    `}
  ${(props) =>
    props.pattern === `text` &&
    css`
      color: ${({ theme: { colors } }) => colors.gray.dark};
      background: none;
      margin-top: 15px;
      :hover {
        text-decoration: underline;
      }
    `}
`;
