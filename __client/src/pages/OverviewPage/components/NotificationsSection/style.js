import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotificationsList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const NotificationListItem = styled.li`
  background-color: white;
  display: flex;
  flex-direction: row;
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
`;

export const NotificationText = styled.div`
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  & span {
    margin-right: 5px;
  }
`;

export const CheckLink = styled(Link)`
  flex-shrink: 0;
  text-decoration: none;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  display: block;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.blue.regular};
  width: 120px;
  height: 30px;
`;

export const ArticleLink = styled(Link)`
  color: black;
`;
