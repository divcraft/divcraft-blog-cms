import styled, { css } from 'styled-components';

export const TileListItem = styled.li`
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
      padding: 0 20px 0 0;
    `}
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.dark};
  }
  & span {
    display: flex;
  }
`;
