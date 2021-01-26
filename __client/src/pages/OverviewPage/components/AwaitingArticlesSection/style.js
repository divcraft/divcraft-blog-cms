import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AwaitingArticlesList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const AwaitingArticleListItem = styled.li`
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

export const LinkContainer = styled.span`
  margin-right: 5px;
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
  border: solid 1px ${({ theme: { colors } }) => colors.blue.regular};
  width: 120px;
  height: 30px;
  &:last-child {
    margin-left: 10px;
    color: black;
    background-color: white;
  }
`;

export const ArticleLink = styled(Link)`
  color: black;
`;
