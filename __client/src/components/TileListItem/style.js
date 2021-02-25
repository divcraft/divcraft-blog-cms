import styled, { css } from 'styled-components';

export const TileListItem = styled.li`
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.regular};
  border-radius: 30px;
  margin-bottom: 10px;
  ${(props) =>
    props.pattern === `small` &&
    css`
      padding: 15px;
      min-height: 60px;
    `}
  ${(props) =>
    props.pattern === `big` &&
    css`
      min-height: 100px;
      padding: 0;
      & > img {
        display: block;
        width: 180px;
        min-height: 100px;
        height: 100%;
        background-color: gray;
        transform: scale(1.05);
      }
      & > div {
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
        width: 100%;
        & > div:first-child {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    `}
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.dark};
  }
`;
