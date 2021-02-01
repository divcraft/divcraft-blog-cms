import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Image = styled.img`
  display: block;
  width: 180px;
  min-height: 100px;
  height: 100%;
  background-color: gray;
  transform: scale(1.05);
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const IconsContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.gray.dark};
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 17px;
  &:nth-child(1) {
    min-width: 108px;
  }
  &:nth-child(2) {
    min-width: 46px;
  }
  &:nth-child(3) {
    min-width: 62px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const IconText = styled.span`
  display: inline;
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  width: 15px;
  height: auto;
  margin-right: 5px;
`;

export const ArticleLink = styled(Link)`
  display: inline;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkContainer = styled.div`
  & a:nth-child(2) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
