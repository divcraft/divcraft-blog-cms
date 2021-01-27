import styled from 'styled-components';

export const SmallTileListItem = styled.li`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 60px;
  padding: 15px;
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.regular};
  border-radius: 30px;
  margin-bottom: 10px;
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
