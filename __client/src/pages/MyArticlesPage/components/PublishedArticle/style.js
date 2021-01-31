import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const ArticleLink = styled(Link)`
  color: black;
`;

export const LinkContainer = styled.div`
  & a:nth-child(2) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
