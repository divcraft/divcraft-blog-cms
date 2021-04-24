import styled, { css } from 'styled-components';

export const TileListItem = styled.li`
  overflow: hidden;
  background-color: white;
  display: flex;
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
      & > div {
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
        width: 100%;
      }
      & > span {
        display: block;
        min-width: 160px;
        height: 100px;
        padding: 0;
      }
      & > span > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      & > span > div {
        background-color: gray;
        width: 100%;
        height: 100%;
      }
      & > div > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    `}
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.dark};
  }
`;
